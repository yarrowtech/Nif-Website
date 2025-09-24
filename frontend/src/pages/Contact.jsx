// Contact.jsx
import React, { useState } from "react";
// If you intend to use the URL of that asset, use:
// import brochure from "/Brochure/NIF-GLOBAL-lINDSAY-STREET.pdf?url";

export default function Contact() {
  // --- Form state (MUST match backend keys) ---
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    course: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // optional: use env for API base
  const API_BASE =
    import.meta?.env?.VITE_API_BASE_URL || "https://nif-backend.onrender.com";

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async () => {
    setStatus("Sending...");
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // {name, number, email, course, message}
      });

      const isJSON = res.headers
        .get("content-type")
        ?.toLowerCase()
        .includes("application/json");
      const payload = isJSON
        ? await res.json()
        : { success: false, message: await res.text() };

      if (res.ok && payload?.success) {
        setStatus("✅ Enquiry sent successfully!");
        setFormData({ name: "", number: "", email: "", course: "", message: "" });
      } else {
        setStatus(`❌ ${payload?.message || "Failed to send enquiry."}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Network/Server error. Please try later.");
    }
  };

  return (
    <div className="font-poppins text-gray-900">
     {/* Hero Section */}
  <header className="relative">
    <div
      className="h-[180px] sm:h-[200px] md:h-[240px] w-full 
                 bg-[url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1920&auto=format&fit=crop')] 
                 bg-cover bg-center"
    >
      <div className="h-full w-full bg-black/75 flex items-center justify-center px-4 text-center">
        <h1 className="text-white text-[28px] sm:text-[34px] md:text-[54px] font-extrabold drop-shadow leading-tight">
          Contact Us
        </h1>
      </div>
    </div>
  </header>


    {/* Content Section */}
<main className="max-w-[1350px] px-4 sm:px-6 md:mx-12 py-14 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10">
  {/* Left Side */}
  <div>
    <h2 className="mt-5 font-poppins text-xl sm:text-2xl md:text-[35px] font-semibold leading-snug">
      We are <span className="text-[#e94e2b]">located at</span>
    </h2>

    <ul className="mt-6 space-y-3 text-base sm:text-[18px] md:-mr-3 md:whitespace-nowrap">
      <li className="flex items-start gap-3">
        <span className="text-[#e94e2b] text-lg">📍</span>
        <span className="break-words">
          20A, Lindsay Street, 2nd Floor, Humayan Court, Dharmatala, New
          Market, Kolkata – 700087
        </span>
      </li>
      <li className="flex items-center gap-3">
        <span className="text-[#e94e2b] text-lg">📞</span>
        +91 9836796000
      </li>
      <li className="flex items-center gap-3">
        <span className="text-[#e94e2b] text-lg">📧</span>
        nifglobalkolkata@gmail.com
      </li>
    </ul>

    {/* Map with top-left info card */}
    <div className="mt-8 relative w-full h-[250px] sm:h-[320px] md:h-[450px]">
      <iframe
        title="NIF Esplanade Kolkata Map"
        src={
          "https://www.google.com/maps?q=" +
          encodeURIComponent(
            "NIF Global Lindsay Street, Esplanade, Kolkata"
          ) +
          "&hl=en&z=16&output=embed"
        }
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md border border-gray-300 shadow w-full h-full"
      ></iframe>

      {/* Info card */}
      <div className="absolute top-2 left-2 bg-white rounded shadow-[0_6px_18px_rgba(0,0,0,0.18)] border border-gray-200 w-[92%] sm:w-[310px] p-2 sm:p-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <h4 className="text-[13px] sm:text-[15px] font-semibold text-gray-900">
              NIF Global Lindsay Street | Fashion & Design
            </h4>
            <p className="mt-1 text-[11px] sm:text-[12px] leading-snug text-gray-700">
              2nd Floor, LINDSAY STREET, 20A, Lindsay St, behind Light
              House Cinema, New Market Area, Dharmatala, Taltala,
              Kolkata, West Bengal 700087
            </p>
            <div className="mt-2 flex items-center gap-1 text-[11px] sm:text-[12px]">
              <span className="text-[13px] sm:text-[14px]">4.5</span>
              <span className="text-amber-500">★★★★★</span>
              <span className="text-gray-500">340 reviews</span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=NIF+Global+Lindsay+Street,+Kolkata"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#e94e2b] text-white text-[11px] sm:text-[12px] font-medium hover:bg-[#c63c1f] transition"
              >
                Directions
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=NIF+Global+Lindsay+Street,+Kolkata"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] sm:text-[12px] text-[#1a73e8] hover:underline"
              >
                View larger map
              </a>
            </div>
          </div>

          <div className="shrink-0 self-end sm:self-auto">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1a73e8]">
              <path
                fill="currentColor"
                d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>


{/* Right Side Form */}
<div className="mt-6 bg-[#2f2f2f] text-white rounded-md shadow-lg p-6 sm:p-8 md:ml-2 md:-mr-16">
  <h3 className="font-poppins bg-[#e94e2b] text-white text-center text-[22px] sm:text-[24px] font-semibold py-2 -mx-6 sm:-mx-8 -mt-10 mb-6 sm:mb-10">
    Course Enquiry
  </h3>

  {/* Form fields */}
  <div className="space-y-5 sm:space-y-7">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleInput}
      className="w-full px-4 py-3 bg-white text-black text-[13px] outline-none"
      required
    />
    <input
      type="text"
      name="number"
      placeholder="Phone Number"
      value={formData.number}
      onChange={handleInput}
      className="w-full px-4 py-3 bg-white text-black text-[13px] outline-none"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleInput}
      className="w-full px-4 py-3 bg-white text-black text-[13px] outline-none"
      required
    />

    <select
      name="course"
      value={formData.course}
      onChange={handleInput}
      className="w-full px-4 py-3 bg-white text-black text-[13px] outline-none"
      required
    >
      <option value="" disabled>-- Select Course --</option>
      <option value="Fashion Design">Fashion Design</option>
      <option value="Interior Design">Interior Design</option>
      <option value="Design Management">Design Management</option>
      <option value="Retail Management">Retail Management</option>
      <option value="Beauty">Beauty</option>
    </select>

    <textarea
      name="message"
      placeholder="Message"
      rows={4}
      value={formData.message}
      onChange={handleInput}
      className="w-full px-4 py-3 bg-white text-black text-[13px] outline-none"
    ></textarea>

    <button
      type="button"
      onClick={handleSubmit}
      className="font-poppins w-[160px] sm:w-[170px] mt-5 bg-[#e94e2b] text-white text-[16px] sm:text-[18px] flex items-center justify-center py-3 hover:bg-[#c63c1f] mx-auto transition"
    >
      Submit Now
    </button>

    {status && (
      <p className="text-center text-sm mt-2">
        {status}
      </p>
    )}

    {/* Brochure Button */}
    <div className="flex justify-center py-10 sm:py-14 px-2">
      <a
  href="/Brochure/NIF-GLOBAL-lINDSAY-STREET.pdf?url"
        download="NIF-GLOBAL-lINDSAY-STREET.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-[240px]"
      >
        <button
          type="button"
          className="font-poppins w-full flex items-center justify-center gap-2 bg-[#e94e2b] text-white text-[16px] py-2 hover:bg-[#c63c1f] transition"
        >
          📄 Download Brochure
        </button>
      </a>
    </div>
  </div>
</div>

      </main>
    </div>
  );
}


