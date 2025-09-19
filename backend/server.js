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
      service: "gmail", // or use: host, port, secure
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
  });

app.post("/api/contact", async (req, res) => {
  const { name, number, email , course ,message } = req.body;

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

  const userHtml = ` <h1>Thank you for contacting us, ${name}!</h1>
    <p>We have received your message and will get back to you shortly.</p>
    <p><strong>Your Message:</strong></p>
    <p>${message}</p>
    <br/>
    <p>Best regards,</p>
    <p>NIF Team</p>
  `;

  const adminMailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `${course}`,
    html: adminHtml,
  };

  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for contacting us",
    html: userHtml,
  };

  transporter.sendMail(adminMailOptions, (error, info) => {
if(error) {
  console.error("Error sending admin email:", error);
  return res.status(500).json({ success: false, message: "Failed to send email to admin." });
}

console.log("Admin email sent:", info.response);

transporter.sendMail(userMailOptions, (error, info) => {
  if(error) {
    console.error("Error sending acknowledgment email to user", error);
    return res.status(500).json({ success: false, message: "Failed to send acknowledgment email." });
  }

  console.log("Acknowledgment email sent:", info.response);
  return res.status(200).json({ success: true, message: "Emails sent successfully." });
});
});
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});