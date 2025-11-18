// server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import Inquiry from "./models/Inquiry.js";
import { DEFAULT_SENDER, sendMail } from "./lib/mailer.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// ---------------------
// 🔐 Admin Auth Middleware
// ---------------------
const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid or expired token" });
  }
};

// ---------------------
// 👤 Admin Login Route
// ---------------------

app.post("/api/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ success: false, message: "Email and password required" });

    if (email !== process.env.ADMIN_EMAIL)
      return res.status(401).json({ success: false, message: "Invalid credentials" });

    // bcrypt comparison with hashed password from .env
    const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD);
    if (!isMatch)
      return res.status(401).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET, { expiresIn: "2h" });
    res.json({ success: true, token });
  } catch (err) {
    console.error("❌ Admin login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.post("/api/contact", async (req, res) => {
  const { name, number, email, course, message } = req.body;

  const trimmedName = typeof name === "string" ? name.trim() : "";
  const trimmedNumber = typeof number === "string" ? number.trim() : "";
  const trimmedEmail = typeof email === "string" ? email.trim() : "";
  const trimmedCourse = typeof course === "string" ? course.trim() : "";
  const trimmedMessage = typeof message === "string" ? message.trim() : "";

  if (!trimmedName || !trimmedNumber || !trimmedEmail) {
    return res.status(400).json({
      success: false,
      message: "Name, phone number, and email are required",
    });
  }

  const safeCourse = trimmedCourse || "Not specified";
  const safeMessage = trimmedMessage || "No message provided";

  const adminHtml = `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${trimmedName}</p>
    <p><strong>Number:</strong> ${trimmedNumber}</p>
    <p><strong>Email:</strong> ${trimmedEmail}</p>
    <p><strong>Course:</strong> ${safeCourse}</p>
    <p><strong>Message:</strong> ${safeMessage}</p>
  `;

  const userHtml = `
    <h1>Thank you for contacting us, ${trimmedName}!</h1>
    <p>We have received your message and will get back to you shortly.</p>
    <p><strong>Your Message:</strong> ${safeMessage}</p>
    <br/>
    <p>Best regards,<br/>NIF Team</p>
  `;

  const adminRecipient = process.env.ADMIN_EMAIL || DEFAULT_SENDER;

  const adminMail = {
    from: DEFAULT_SENDER,
    to: adminRecipient,
    subject: `New Inquiry: ${safeCourse}`,
    html: adminHtml,
    replyTo: trimmedEmail,
  };

  const userMail = {
    from: DEFAULT_SENDER,
    to: trimmedEmail,
    subject: "Thank you for contacting NIF",
    html: userHtml,
  };

  try {
    // 1️⃣ Persist the inquiry immediately (defaults set pending status)
    const inquiry = await Inquiry.create({
      name: trimmedName,
      number: trimmedNumber,
      email: trimmedEmail,
      course: safeCourse,
      message: safeMessage,
    });

    // Respond to client right away to avoid frontend timeouts
    res.status(200).json({
      success: true,
      message: "Inquiry received. We'll be in touch shortly.",
      id: inquiry._id,
      status: inquiry.status,
      emailStatus: "pending",
    });

    // Send emails asynchronously and update status/emailResult
    void (async () => {
      try {
        const [adminResult, userResult] = await Promise.allSettled([
          sendMail(adminMail),
          sendMail(userMail),
        ]);

        const emailResult = {
          admin: {
            success: adminResult.status === "fulfilled",
            info: adminResult.status === "fulfilled" ? adminResult.value : null,
            error:
              adminResult.status === "rejected"
                ? adminResult.reason?.message || String(adminResult.reason)
                : null,
          },
          user: {
            success: userResult.status === "fulfilled",
            info: userResult.status === "fulfilled" ? userResult.value : null,
            error:
              userResult.status === "rejected"
                ? userResult.reason?.message || String(userResult.reason)
                : null,
          },
        };

        const allEmailsSent = emailResult.admin.success && emailResult.user.success;
        const nextStatus = allEmailsSent ? "emails_sent" : "emails_failed";

        if (!allEmailsSent) {
          console.warn("⚠️ One or more inquiry emails failed", emailResult);
        }

        await Inquiry.findByIdAndUpdate(inquiry._id, {
          emailResult,
          status: nextStatus,
        });
      } catch (emailErr) {
        console.error("❌ Failed to process enquiry emails", emailErr);
        await Inquiry.findByIdAndUpdate(inquiry._id, {
          status: "emails_failed",
          emailResult: {
            admin: { success: false, info: null, error: emailErr.message },
            user: { success: false, info: null, error: emailErr.message },
          },
        });
      }
    })();
  } catch (err) {
    console.error("❌ Contact form error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ---------------------
// 🗂️ Admin Inquiries (Protected)
// ---------------------
app.get("/api/admin/inquiries", adminAuth, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page || "1", 10));
    const limit = Math.min(100, parseInt(req.query.limit || "20", 10));
    const skip = (page - 1) * limit;
    const search = (req.query.search || "").trim();

    const filter = {};
    if (search) {
      const re = new RegExp(search, "i");
      filter.$or = [{ name: re }, { email: re }, { message: re }, { course: re }];
    }

    const [total, items] = await Promise.all([
      Inquiry.countDocuments(filter),
      Inquiry.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    ]);

    res.json({ success: true, total, page, pages: Math.ceil(total / limit), items });
  } catch (err) {
    console.error("❌ Fetch inquiries error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.get("/api/admin/inquiries/:id", adminAuth, async (req, res) => {
  try {
    const doc = await Inquiry.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ success: false, message: "Inquiry not found" });
    res.json({ success: true, item: doc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.delete("/api/admin/inquiries/:id", adminAuth, async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Inquiry deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ---------------------
app.get("/", (req, res) => {
  res.send("✅ NIF API is running...");
});

// ---------------------
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error("❌ Failed to connect to DB:", err);
    process.exit(1);
  });
