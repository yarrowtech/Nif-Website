import nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail";

const EMAIL_USER = process.env.EMAIL_USER || "";
const EMAIL_PASS = process.env.EMAIL_PASS || process.env.MAIL_PASS || "";
const DEFAULT_SENDER = process.env.EMAIL_FROM || EMAIL_USER;
<<<<<<< HEAD
=======
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || DEFAULT_SENDER;
>>>>>>> c22ec7b (logo update)
const useSendGrid = Boolean(process.env.SENDGRID_API_KEY);

let transporter = null;

if (useSendGrid) {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log("✅ SendGrid API is ready");
  } catch (err) {
    console.error("❌ Failed to configure SendGrid:", err);
  }
  if (!DEFAULT_SENDER) {
    console.warn("⚠️ EMAIL_FROM not set; SendGrid will use the verified default sender");
  }
} else {
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("❌ Missing EMAIL_USER or EMAIL_PASS/MAIL_PASS environment variables for SMTP");
  }

  const baseTransport = {
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  };

  if (process.env.SMTP_HOST || process.env.SMTP_PORT || process.env.SMTP_SECURE) {
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || (smtpHost === "smtp.gmail.com" ? 587 : 587));
    const smtpSecure =
      process.env.SMTP_SECURE !== undefined
        ? process.env.SMTP_SECURE === "true"
        : smtpPort === 465;

    baseTransport.host = smtpHost;
    baseTransport.port = smtpPort;
    baseTransport.secure = smtpSecure;
  } else {
    baseTransport.service = process.env.EMAIL_SERVICE || "gmail";
    baseTransport.secure = false;
  }

  transporter = nodemailer.createTransport(baseTransport);

  transporter
    .verify()
    .then(() => console.log("✅ SMTP server is ready"))
    .catch(err => console.error("❌ SMTP verification failed:", err));
}

const withTimeout = (promise, ms = 30000) =>
  Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("SMTP timeout")), ms)),
  ]);

export const sendMail = mail => {
  if (useSendGrid) {
    const sender = mail.from || DEFAULT_SENDER;
    if (!sender) {
      return Promise.reject(new Error("Missing EMAIL_FROM/EMAIL_USER for SendGrid sender"));
    }

    const message = {
      to: mail.to,
      from: sender,
      subject: mail.subject,
      html: mail.html,
    };
    if (mail.replyTo) message.replyTo = mail.replyTo;
    if (mail.text) message.text = mail.text;
    return sgMail.send(message);
  }

  if (!transporter) {
    return Promise.reject(new Error("SMTP transporter not configured"));
  }

  return withTimeout(transporter.sendMail(mail));
};

export { DEFAULT_SENDER, EMAIL_USER, useSendGrid };
