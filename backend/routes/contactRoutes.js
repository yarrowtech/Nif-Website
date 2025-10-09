import express from "express";
import nodemailer from "nodemailer";
import Inquiry from "../models/Inquiry.js";

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

    // 2️⃣ Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Course Enquiry from ${trimmedName}`,
      html: `
        <h3>New Enquiry Received</h3>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Phone:</strong> ${trimmedNumber}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Course:</strong> ${safeCourse}</p>
        <p><strong>Message:</strong> ${safeMessage}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: "Enquiry submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
