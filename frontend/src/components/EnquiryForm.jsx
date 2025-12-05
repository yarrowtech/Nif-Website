// EnquiryForm.jsx
import React, { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "", // keep 'number' to match backend
    email: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  //  const API_BASE = "http://localhost:5000";
//  const API_BASE = "http://localhost:5000";
 const API_BASE = import.meta.env.VITE_BACKEND_URL;
// const API_BASE = "https://nifglobalkolkatalindsay.com/api/";
  // log resolved API base for debugging in deployed environments
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.info("EnquiryForm API_BASE =", API_BASE);
//    console.info('EnquiryForm API_BASE =', API_BASE);
  }

  const [isSending, setIsSending] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (isSending) return;
    setIsSending(true);
    setStatus("Sending...");

    // timeout helper
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      const contentType = res.headers.get("content-type") || "";
      let result;
      if (contentType.includes("application/json")) {
        result = await res.json();
      } else {
        const text = await res.text();
        result = { success: false, message: text };
      }

      if (res.ok && result.success) {
        setStatus("✅ Enquiry sent successfully!");
        setFormData({
          name: "",
          number: "",
          email: "",
          course: "",
          message: "",
        });
      } else {
        const msg = result?.message || `Server returned ${res.status}`;
        setStatus(`❌ ${msg}`);
        // eslint-disable-next-line no-console
        console.warn("EnquiryForm failed:", res.status, result);
      }
    } catch (error) {
      // distinguish abort
      if (error.name === "AbortError") {
        setStatus("⚠️ Request timed out. Try again later.");
      } else {
        setStatus(`⚠️ Network or server error: ${error.message || error}`);
      }
      // eslint-disable-next-line no-console
      console.error("EnquiryForm error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="bg-[#e94e2b] py-10 px-4 sm:px-6 md:px-12">
      <div className="text-center mb-6">
        <h2 className="font-poppins font-semibold text-white text-2xl sm:text-3xl md:text-4xl">
          Course Enquiry
        </h2>
        <div className="mt-6 flex justify-center gap-1">
          <span className="w-1 h-1 rounded-full bg-black/70" />
          <span className="w-1 h-1 rounded-full bg-black/70" />
          <span className="w-1 h-1 rounded-full bg-black/70" />
          <span className="block w-20 sm:w-28 h-[4px] bg-black/70 rounded-full" />
        </div>
      </div>

      <div className="mt-8 sm:mt-10 p-4 sm:p-8 max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          autoComplete="name"
          value={formData.name}
          onChange={handleInput}
          className="w-full bg-white text-black placeholder:text-black px-4 h-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/60 rounded"
          required
        />
        <input
          type="tel"
          name="number"
          placeholder="Your Phone"
          autoComplete="tel"
          value={formData.number}
          onChange={handleInput}
          className="w-full bg-white text-black placeholder:text-black px-4 h-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/60 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          autoComplete="email"
          value={formData.email}
          onChange={handleInput}
          className="w-full bg-white text-black placeholder:text-black px-4 h-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/60 rounded"
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Your Course"
          value={formData.course}
          onChange={handleInput}
          className="w-full bg-white text-black placeholder:text-black px-4 h-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/60 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={formData.message}
          onChange={handleInput}
          className="md:col-span-2 w-full bg-white text-black placeholder:text-black px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/60 rounded"
        />

        <div className="md:col-span-2 flex justify-center pt-2">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSending}
            className={`bg-neutral-900 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-md shadow transition ${
              isSending ? "opacity-60 cursor-wait" : "hover:bg-neutral-800"
            }`}
          >
            {isSending ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>

      {status && (
        <p className="text-center text-white mt-4 font-medium">{status}</p>
      )}
    </section>
  );
}
