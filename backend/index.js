import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

 async function sendEmail(to , subject , html) {
  try {
    const mailOptions = {
      from: "NIF",
      to: to,
      subject: subject,
      html: html,
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    throw new Error(err.message);
  }
}
app.get("/test",async(req, res) => {
  try{

    await sendEmail(req.body.to, req.body.subject, req.body.html)
    res.send("success")
  }
  catch(err){
    res.send(err.message)
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});