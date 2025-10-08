import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//nodemailer transport configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,            // or 587 with secure:false
  secure: false,         // <-- REQUIRED for 465
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  pool: true,
  maxConnections: 3,
  maxMessages: 50,
  connectionTimeout: 15000,
  greetingTimeout: 8000,
  socketTimeout: 20000,
});

transporter.verify()
  .then(() => console.log("SMTP ready"))
  .catch(err => console.error("SMTP verify failed:", err));

app.post("/api/contact", async (req, res) => {
  const { name, number, email, course, message } = req.body;
  if (!name || !number || !email || !course || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const adminHtml = `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Number:</strong> ${number}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  const userHtml = `
    <h1>Thank you for contacting us, ${name}!</h1>
    <p>We have received your message and will get back to you shortly.</p>
    <p><strong>Your Message:</strong></p>
    <p>${message}</p>
    <br/>
    <p>Best regards,</p>
    <p>NIF Team</p>
  `;

  const adminMail = {
    from: process.env.EMAIL_USER,          // ✅ use your authenticated sender
    to: process.env.EMAIL_USER,
    subject: `${course}`,
    html: adminHtml,
    replyTo: email,                         // ✅ user in reply-to
  };

  const userMail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for contacting us",
    html: userHtml,
  };

  try {
    const info = await transporter.sendMail(adminMail);
    console.log("MAIL SENT:", info.messageId, "rejected:", info.rejected);
    return res.status(200).json({ success: true, message: "Email sent" });
  } catch (err) {
    console.error("SMTP ERROR:", err);
    return res.status(500).json({ success: false, message: "Email failed", error: String(err) });
  }

  // Respond immediately so Render's proxy doesn't time out
  res.status(202).json({ success: true, message: "Enquiry received. We’ll email you shortly." });

  // Send emails in background with a guard timeout
  const withTimeout = (p, ms = 15000) =>
    Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error("SMTP timeout")), ms))]);

  try {
    await Promise.allSettled([
      withTimeout(transporter.sendMail(adminMail)),
      withTimeout(transporter.sendMail(userMail)),
    ]);
  } catch (err) {
    console.error("SMTP error:", err);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to API");
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
