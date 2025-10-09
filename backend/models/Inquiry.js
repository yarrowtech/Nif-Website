// models/Inquiry.js
import mongoose from "mongoose";

const EmailResultSchema = new mongoose.Schema({
  success: { type: Boolean, default: false },
  info: { type: mongoose.Schema.Types.Mixed, default: null },
  error: { type: String, default: null },
});

const InquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    course: { type: String, required: true },
    message: { type: String, required: true },
    emailResult: {
      admin: { type: EmailResultSchema, default: () => ({}) },
      user: { type: EmailResultSchema, default: () => ({}) },
    },
    status: { type: String, enum: ["pending", "emails_sent", "emails_failed"], default: "pending" },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model("Inquiry", InquirySchema);
export default Inquiry;
