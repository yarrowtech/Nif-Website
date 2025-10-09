import express from "express";
import Inquiry from "../models/Inquiry.js";
import { DEFAULT_SENDER, sendMail } from "../lib/mailer.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, number, email, course, message } = req.body;

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedNumber = typeof number === "string" ? number.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedCourse = typeof course === "string" ? course.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || !trimmedNumber || !trimmedEmail)
      return res.status(400).json({
        success: false,
        message: "Name, phone number, and email are required",
      });

    const safeCourse = trimmedCourse || "Not specified";
    const safeMessage = trimmedMessage || "No message provided";

    // 1️⃣ Save to MongoDB
    const inquiry = await Inquiry.create({
      name: trimmedName,
      number: trimmedNumber,
      email: trimmedEmail,
      course: safeCourse,
      message: safeMessage,
    });

    const adminRecipient = process.env.ADMIN_EMAIL || DEFAULT_SENDER;

    const adminMail = {
      from: DEFAULT_SENDER,
      to: adminRecipient,
      subject: `New Course Enquiry from ${trimmedName}`,
      html: `
        <h3>New Enquiry Received</h3>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Phone:</strong> ${trimmedNumber}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Course:</strong> ${safeCourse}</p>
        <p><strong>Message:</strong> ${safeMessage}</p>
      `,
      replyTo: trimmedEmail,
    };

    const userMail = {
      from: DEFAULT_SENDER,
      to: trimmedEmail,
      subject: "Thank you for contacting NIF",
      html: `
        <h3>Thank you for reaching out, ${trimmedName}!</h3>
        <p>We have received your enquiry for ${safeCourse} and will get back to you shortly.</p>
        <p><strong>Your Message:</strong> ${safeMessage}</p>
      `,
    };

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

    await Inquiry.findByIdAndUpdate(inquiry._id, {
      emailResult,
      status: nextStatus,
    });

    res.status(201).json({
      success: allEmailsSent,
      message: allEmailsSent
        ? "Enquiry submitted and emails sent"
        : "Enquiry stored, but email delivery failed. Our team will follow up manually.",
      id: inquiry._id,
      status: nextStatus,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
