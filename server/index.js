
import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendEmail(to, subject, html) {
  try {
    const mailOptions = {
      from: "NIF Team (:",
      to: to,
      subject: subject,
      html: html,
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    throw new Error(err.message);
  }
}


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/send", async (req, res) => {
    try {
        const { to, subject, html } = req.body;
        await sendEmail(to, subject, html);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});