// retailmanagement.jsx
import React, { useMemo, useState } from "react";
import aboutbg from "../assets/New Folder/about-bg.jpg";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

/**
 * Retail Management Course — NIF-style landing page
 * Tailwind-only, no external UI libs required.
 * Replace placeholder images with your own if needed.
 */
// If you intend to use the URL of that asset, use:
// import brochure from "/Brochure/NIF-GLOBAL-lINDSAY-STREET.pdf?url";
import runwayImg from "../assets/18/9.jpg";
import runwayImg2 from "../assets/18/16.jpg";
import gallery1 from "../assets/runways/gallery1.jpg";
import gallery2 from "../assets/runways/gallery2.jpg";
import gallery3 from "../assets/runways/gallery3.jpg";
import gallery4 from "../assets/runways/gallery30.jpg";
import gallery5 from "../assets/runways/gallery4.jpg";
import gallery6 from "../assets/runways/gallery5.jpg";
import gallery7 from "../assets/runways/gallery6.jpg";
import gallery8 from "../assets/runways/gallery10.jpg";
import gallery9 from "../assets/runways/gallery11.jpg";
import gallery10 from "../assets/runways/gallery14.jpg";
import gallery11 from "../assets/runways/gallery15.jpg";
import gallery12 from "../assets/runways/gallery31.jpg";


const bullet = (
  <svg
    className="w-3.5 h-3.5 mt-1.5 shrink-0 text-red-500"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="12" />
  </svg>
);

const check = (
  <svg
    className="w-4 h-4 shrink-0 text-emerald-600"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
  </svg>
);

const specs = [
  {
    k: "Duration of the Course",
    v: "1–3 Years (depending upon the course time)",
  },
  {
    k: "Course Skills",
    v: "Retail Strategy, Customer Experience, Business Operations, and Leadership",
  },
  {
    k: "Placement Support",
    v: "100% Placement Support with leading retail brands",
  },
  {
    k: "Positions Offered",
    v: "Retail Manager, Store Manager, Visual Merchandiser, Brand Strategist, Operation Supervisor",
  },
];

const quickLookBullets = [
  "Store operations and merchandising",
  "Forecasting of sales and inventory management",
  "Customer experience (CX) and loyalty programs",
  "Developments in online and offline sales",
  "Real-world simulations and internships",
];

const careerOptions = [
  "Retail Manager",
  "Visual Merchandiser",
  "Brand Executive",
  "E-commerce Manager",
  "Retail Buyer or Planner",
];

function LabeledInput({ label, placeholder, type = "text", required }) {
  return (
    <label className="block text-xs">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-gray-300/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-2.5 py-2 text-sm outline-none"
      />
    </label>
  );
}

function Row({ label, value, isActive }) {
  return (
    <div className="grid grid-cols-[190px_1fr] text-xs md:text-[13px]">
      <div
        className={`px-3 py-2 border-b border-gray-200 ${
          isActive ? "text-blue-600 font-semibold" : "text-gray-700"
        }`}
      >
        {label}
      </div>
      <div className="px-3 py-2 border-b border-gray-200 text-gray-800">
        {value}
      </div>
    </div>
  );
}


export default function RetailManagement() {

    const [showMore, setShowMore] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allGalleryImages = [
    gallery1, gallery2, gallery3, gallery4,
    gallery5, gallery6, gallery7,
    gallery8, gallery9,
    gallery10, gallery11, gallery12,
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? allGalleryImages.length - 1 : prev - 1
    );

  const showNext = () =>
    setCurrentIndex((prev) =>
      prev === allGalleryImages.length - 1 ? 0 : prev + 1
    );

  const [faqOpen, setFaqOpen] = useState(0);
    

  const faq = useMemo(
    () => [
      {
        q: "Retail Operations and Store Management Program",
        a: "This training will give the management of any store operation process, from the inventory to perfect high-quality staff and customer service. It equips students to manage every aspect of store operations, from inventory management to delivering top-notch customer service, ensuring they are well-prepared for managerial roles in retail.",
      },
      {
        q: "Consumer Psychology & Behavior",
        a: "The Consumer Psychology and Behavior module teaches a student how customer behaviors influence purchasing decisions, enabling them to better apply retail strategies and enhance the shopping experience for customers.",
      },
      {
        q: "Branding & Retail Marketing",
        a: "In the Branding & Retail Marketing module, students learn how to create a strong brand identity, implement retail marketing promotions, and leverage digital marketing strategies to drive customer engagement and sales. This training is all about brand creation, retail marketing promotions, and how to apply digital marketing retail strategies.",
      },
      {
        q: "Visual Merchandising & Store Layout",
        a: "The Visual Merchandising & Store Layout module teaches students how to design an effective in-store atmosphere and merchandise displays that attract customers and drive sales, offering hands-on skills to improve retail environments.",
      },
      {
        q: "Retail Analytics & Data-Driven Decisions",
        a: "With the module of Retail Analytics & Data-Driven Decision Making, students are able to analyze data and make strategic decisions that increase sales, raise customer satisfaction, and drive business growth. Use data to make strategic decisions that will have a positive outcome towards sales and effective customers.",
      },
      {
        q: "E-commerce & Omnichannel Retailing",
        a: "With the module of E-commerce & Omnichannel Retailing, students become geared up for the current retail scenario, with online platforms combined with traditional brick-and-mortar stores, ensuring that they get an understanding of the modern retail landscape.",
      },
      {
        q: "Leadership & Management Skills",
        a: "It includes the development of key leadership and decision-making skills that enable one to efficiently manage teams as well as manage retail operations under dynamic conditions.",
      },
      {
        q: "Hands-on Experience",
        a: " The module of Hands-on Experience offers live projects, industry partnerships, as well as internships to its students. Students get hands-on experience in practical scenarios, hence they are perfectly prepared for leading roles once the retail management course Kolkata is complete.",
      },
    ],
    []
  );

  // Put this inside your component, ABOVE the return:
const handleEnquirySubmit = (e) => {
  e.preventDefault();
  alert("Enquiry submitted!");
};
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
    <div className="min-h-screen w-full bg-white text-gray-900">
  {/* Top banner */}
  <div className="relative w-full h-[260px] md:h-[295px]">
    <img
      src={aboutbg} /* replace */
      alt="About NIF Global"
      className="w-full h-full object-cover [object-position:30%_1%] sm:[object-position:50%_20%]"
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
      <h1 className="font-poppins text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-center">
        Retail Management Course
      </h1>
    </div>
  </div>




{/* ======= HERO + ENQUIRY (Screenshot-accurate) ======= */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:mx-13 pt-6 md:pt-19">
  {/* Headline */}
  <h1 className="font-poppins text-2xl sm:text-[28px] md:text-[35px] leading-snug sm:leading-tight md:leading-tight font-semibold md:max-w-4xl text-center sm:text-left">
    <span className="font-poppins text-[#e94e2b]">Retail Management Course</span>{" "}
    <span className="text-gray-900">For Tomorrow’s</span>
    <br />
    <span className="text-gray-900">Brand Leaders</span>
  </h1>

  <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-6 sm:gap-10">
    {/* LEFT: Copy + bullets */}
    <div className="text-gray-800">
      <p className="font-poppins text-[15px] sm:text-[17px] leading-7 sm:leading-8 md:leading-7 sm:md:mr-0 md:-mr-30">
        Our Retail Management Course at NIF Global Kolkata is built for the future of the
        fashion, lifestyle and e-Commerce industry. Developed to nurture strategic retail
        leaders and adaptable brand-builders, the curriculum emphasises core retail
        expertise&nbsp;<span className="whitespace-nowrap">alongside the best practices</span> of
        today’s businesses.
      </p>

      {/* Key Highlights */}
      <div className="mt-4">
        <h3 className="font-poppins text-[16px] sm:text-[17px] mb-3">Key Highlights:</h3>
        <ul className="font-poppins space-y-3 sm:text-[15px]">
          {[
            "Consumer psychology and in-store behaviour",
            "Visual merchandising and brand storytelling",
            "Retail analytics and inventory management",
            "Omnichannel & e-commerce operations",
            "Field training, internships, and case studies",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 sm:gap-3 text-[15px] sm:text-[17px] leading-7 sm:leading-8">
              {/* red boxed check icon */}
              <span className="mt-1 inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-[4px] border-2 border-[#e94e2b] text-[#e94e2b]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span className="md:tracking-normal">{t}</span>
            </li>
          ))}
        </ul>

        <p className="font-poppins mt-6 text-[15px] sm:text-[17px] leading-7 sm:leading-8 md:leading-9 max-w-full md:max-w-3xl">
          Whether you aim to manage flagship stores or lead retail innovations online, this
          course gives you the knowledge, exposure, and tools to thrive.
        </p>
      </div>
    </div>
{/* Right Side Form */}
<div className="-mt-30 md:-mt-30 bg-[#2f2f2f] text-white rounded-md shadow-lg p-6 sm:p-8 md:ml-30 md:-mr-33 w-full max-w-md mx-auto md:mx-0">
  <h3 className="font-poppins bg-[#e94e2b] text-white text-center text-[20px] sm:text-[24px] font-semibold py-2 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 sm:mb-8">
    Course Enquiry
  </h3>

  {/* Form fields */}
  <div className="mt-6 sm:mt-13 space-y-5 sm:space-y-7">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleInput}
      className="w-full px-4 py-3 bg-white text-black text-[13px] sm:text-[13px] outline-none"
      required
    />
    <input
      type="text"
      name="number"
      placeholder="Phone Number"
      value={formData.number}
      onChange={handleInput}
      className="w-full px-4 py-3 bg-white text-black text-[13px] sm:text-[13px] outline-none"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleInput}
      className="w-full px-4 py-3 bg-white text-black text-[13px] sm:text-[13px] outline-none"
      required
    />
    <select
      name="course"
      value={formData.course}
      onChange={handleInput}
      className="w-full px-4 py-3 bg-white text-black text-[13px] sm:text-[13px] outline-none"
      required
    >
      <option value="" disabled>
        -- Select Course --
      </option>
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
      className="w-full px-4 py-3 bg-white text-black text-[13px] sm:text-[13px] outline-none"
    ></textarea>

    <button
      type="button"
      onClick={handleSubmit}
      className="font-poppins w-full sm:w-[170px] mt-4 sm:mt-5 bg-[#e94e2b] text-white text-[16px] sm:text-[18px] flex items-center justify-center py-3 hover:bg-[#c63c1f] mx-auto transition"
    >
      Submit Now
    </button>

    {/* Optional: status feedback */}
    {status && (
      <p className="text-center text-sm mt-2">
        {status}
      </p>
    )}

    {/* Brochure Button */}
    <div className="flex justify-center py-8 sm:py-14 px-5">
      <a
  href="/Brochure/NIF-GLOBAL-lINDSAY-STREET.pdf?url"
        download="NIF-GLOBAL-lINDSAY-STREET.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-[240px]"
      >
        <button
          type="button"
          className="font-poppins w-full flex items-center justify-center gap-2 bg-[#e94e2b] text-white text-[14px] sm:text-[16px] py-2 hover:bg-[#c63c1f] transition"
        >
          📄 Download Brochure
        </button>
      </a>
    </div>
  </div>
</div>

  </div>
  </div>
      {/* ===== Quick Look (responsive for <786px) ===== */}
<section className="mt-20 px-4 sm:px-6 md:mx-25 py-8 md:py-14">
  <div className="grid md:grid-cols-[1.35fr_1fr] gap-8 sm:gap-10 md:gap-14 items-start">
    {/* LEFT: heading + copy + bullets */}
    <div>
      {/* Heading */}
      <h2 className="font-poppins text-[24px] sm:text-[28px] md:text-[35px] leading-[1.2] font-semibold">
        <span className="text-gray-900">Quick Look At Our</span>
        <br />
        <span className="text-[#e94e2b]">Retail Management Course</span>
      </h2>

      {/* Intro copy */}
      <p className="font-poppins mt-6 sm:mt-8 text-[16px] sm:text-[18px] md:text-[17px] leading-6 sm:leading-7 text-gray-800 max-w-full md:max-w-2xl">
        Our Retail Management Course in Kolkata merges business, brand and
        operations, equipping you for the modern world of retail. You’ll learn:
      </p>

      {/* Bullets */}
      <ul className="font-poppins mt-4 sm:mt-6 space-y-3 sm:space-y-4">
        {[
          "Store operations and merchandising",
          "Forecasting of sales and  inventory management",
          "Customer experience and  loyalty programs",
          "Developments in online  and offline sales",
          "Real-world simulations and internships",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2 sm:gap-3 text-[15px] sm:text-[17px] leading-5 sm:leading-6 text-gray-900">
            {/* red boxed check */}
            <span className="mt-1 inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-[4px] border-2 border-[#e94e2b] text-[#e94e2b]">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 sm:h-4 sm:w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>

      {/* Closing line */}
      <p className="font-poppins mt-4 sm:mt-5 text-[16px] sm:text-[18px] md:text-[17px] leading-7 sm:leading-9 text-gray-800 max-w-full md:max-w-3xl">
        Great for students who want to influence the future of the retail experience.
      </p>
    </div>

    {/* RIGHT: runway image */}
    <div className="-mt-8 sm:-mt-10 md:justify-self-end">
      <img
        src={runwayImg} // <-- keep your existing variable or replace with your image path
        alt="Runway"
        className="w-full sm:w-[420px] md:w-105 h-[300px] sm:h-[450px] md:h-[590px] object-cover shadow md:mr-30"
      />
    </div>
  </div>
</section>

    {/* ===== Course Details Table (responsive) ===== */}
<section className="mt-3 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
  <div className="font-poppins overflow-x-auto">
    <table className="w-full border border-gray-400 text-[14px] sm:text-[16px] md:text-[18px] min-w-[600px]">
      <tbody>
        <tr>
          <td className="font-poppins border border-gray-400 px-3 py-2 sm:px-4 sm:py-3 font-medium text-gray-800 text-center align-middle">
            Duration of the Course
          </td>
          <td className="font-poppins border border-gray-400 px-3 py-2 sm:px-4 sm:py-3 text-gray-700 text-center align-middle">
            1–3 Years (depending upon the course time)
          </td>
        </tr>
        <tr>
          <td className="font-poppins border border-gray-400 px-3 py-2 sm:px-4 sm:py-3 font-medium text-gray-800 text-center align-middle">
            Course Skills
          </td>
          <td className="font-poppins border border-gray-400 px-3 py-2 sm:px-4 sm:py-3 text-gray-700 text-center align-middle">
            Retail Strategy, Customer Experience, Business Operations, and Leadership
          </td>
        </tr>
        <tr>
          <td className="font-poppins border border-gray-400 px-3 py-2 sm:px-4 sm:py-3 font-medium text-gray-800 text-center align-middle">
            Placement Support
          </td>
          <td className="font-poppins border border-gray-400 px-3 py-2 sm:px-4 sm:py-3 text-gray-700 text-center align-middle">
            100% Placement Support with leading retail brands
          </td>
        </tr>
        <tr>
          <td className="font-poppins border border-gray-400 px-3 py-2 sm:px-4 sm:py-3 font-medium text-gray-800 text-center align-middle">
            Positions Offered
          </td>
          <td className="font-poppins border border-gray-400 px-3 py-2 sm:px-4 sm:py-3 text-gray-700 text-center align-middle">
            Retail Manager, Store Manager, Visual Merchandiser, Brand Strategist, Operation Supervisor
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
{/* ===== Journey Section ===== */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-14">
  <div className="grid md:grid-cols-[1.05fr_1fr] gap-8 md:gap-16 items-center">
    {/* LEFT: Runway portrait */}
    <div className="flex justify-center md:justify-start">
      <img
        src={runwayImg2} // replace with your actual image variable/path
        alt="Runway Portrait"
        className="w-[280px] sm:w-[350px] md:w-[430px] h-[420px] sm:h-[500px] md:h-[550px] object-cover shadow"
      />
    </div>

    {/* RIGHT: Heading + points */}
    <div className="mt-8 md:mt-0 md:-ml-11 md:mr-auto">
      <h2 className="font-poppins text-[24px] sm:text-[28px] md:text-[35px] leading-[1.15] font-semibold text-gray-900">
        Start Your Retail Management
        <br />
        Journey with <span className="text-[#e94e2b]">NIF Global Kolkata</span>
      </h2>

      <p className="font-poppins mt-6 text-[14px] sm:text-[16px] md:text-[16.8px] leading-7 md:leading-8 text-gray-800">
        Join Kolkata’s leading <span className="font-semibold">Retail Management Institute</span>:
      </p>

      <ul className="font-poppins mt-4 space-y-2">
        {[
          "Expert Faculty & Brand Mentors",
          "Real Store Training & Field Exposure",
          "Focus on E-Commerce & Omnichannel",
          "100% Placement Assistance",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2 sm:gap-3 text-[13px] sm:text-[15px] md:text-[16.8px] leading-6 md:leading-8 text-gray-900">
            <span className="mt-1 inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-[4px] border-2 border-[#e94e2b] text-[#e94e2b]">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 sm:h-4 sm:w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <p className="font-poppins mt-3 text-[14px] sm:text-[15px] md:text-[18px] leading-6 sm:leading-7 md:leading-8 text-gray-800">
        Start your journey toward becoming a future brand leader with <span className="font-semibold">NIF Global, Lindsay Street, Kolkata.</span>
      </p>
    </div>
  </div>
</section>

{/* ===== Top Career Options (responsive) ===== */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-4 pb-12">
  {/* Heading */}
  <h2 className="text-[24px] sm:text-[28px] md:text-[35px] leading-tight font-semibold">
    <span className="font-poppins text-[#e94e2b]">Top Career Options</span>
    <span className="font-poppins text-gray-900"> in Retail Management</span>
  </h2>

  {/* Intro line */}
  <p className="font-poppins mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-[16.8px] leading-6 sm:leading-7 md:leading-9 text-gray-800">
    Graduates of our <span className="font-semibold">Retail Management Course in Kolkata</span> take up roles like:
  </p>

  {/* Bulleted roles */}
  <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
    {[
      "Retail Manager",
      "Visual Merchandiser",
      "Brand Executive",
      "E-commerce Manager",
      "Retail Buyer or Planner",
    ].map((role) => (
      <li key={role} className="flex items-start gap-2 sm:gap-3 text-[13px] sm:text-[15px] md:text-[16.8px] text-gray-900">
        <span className="mt-0.5 inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-[3px] border-2 border-[#e94e2b] text-[#e94e2b]">
          <svg
            viewBox="0 0 24 24"
            className="h-3 w-3 sm:h-4 sm:w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <span>{role}</span>
      </li>
    ))}
  </ul>

  {/* Closing line */}
  <p className="font-poppins mt-3 text-[14px] sm:text-[15px] md:text-[16.8px] leading-6 sm:leading-7 md:leading-9 text-gray-800 max-w-full sm:max-w-5xl">
    The course unlocks a range of exciting opportunities across lifestyle, fashion, tech, and luxury brands.
  </p>
</section>
{/* ===== FAQ Section ===== */}
<section className="px-4 sm:px-6 md:mx-25 mt-3">
  <h2 className="font-poppins text-[24px] sm:text-[28px] md:text-[35px] leading-tight font-semibold text-gray-900 mb-4">
    FAQ
  </h2>

  <div>
    {faq.map((item, idx) => {
      const open = faqOpen === idx;

      return (
        <div
          key={item.q}
          className="mb-2 overflow-hidden border border-gray-600"
        >
          {/* Header row */}
          <button
            className={[
              "w-full flex items-center justify-between text-left px-4 sm:px-5 py-2 sm:py-3 transition",
              open
                ? "bg-[#e94e2b] text-white"
                : "bg-gray-100 text-[#e94e2b]"
            ].join(" ")}
            onClick={() => setFaqOpen(open ? -1 : idx)}
            aria-expanded={open}
          >
            <span className="font-poppins text-[14px] sm:text-[16px] md:text-[17px] leading-5 sm:leading-6 md:leading-7">
              {idx + 1}. {item.q}
            </span>

            {/* +/- icon */}
            {open ? (
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M5 12h14" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#e94e2b]"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Body */}
          {open && (
            <div className="font-poppins px-4 sm:px-5 py-3 sm:py-4 bg-white border-t border-[#ef6a52]">
              <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-6 sm:leading-7 md:leading-7 text-gray-800">
                {item.a}
              </p>
            </div>
          )}
        </div>
      );
    })}
  </div>
</section>


<section className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 pb-12">
  

  {/* Masonry-style Gallery */}
  <div className="columns-1 sm:columns-2 md:columns-4 gap-3 space-y-3">
    {allGalleryImages.slice(0, showMore ? allGalleryImages.length : 8).map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`gallery-${i + 1}`}
        onClick={() => openLightbox(i)}
        className="w-full mb-3 shadow cursor-pointer hover:opacity-90 transition break-inside-avoid"
      />
    ))}
  </div>

  {/* Load More Button */}
  <div className="text-center mt-6">
    {!showMore ? (
      <button
        onClick={() => setShowMore(true)}
        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 bg-[#e94e2b] text-white text-sm font-semibold rounded-md shadow hover:bg-[#c63c1f] transition"
      >
        Load More
        <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16l-6-6h12l-6 6z" />
        </svg>
      </button>
    ) : (
      <button
        onClick={() => setShowMore(false)}
        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 bg-gray-700 text-white text-sm font-semibold rounded-md shadow hover:bg-gray-900 transition"
      >
        Show Less
      </button>
    )}
  </div>

  {/* Lightbox */}
  {lightboxOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      {/* Close */}
      <button
        className="absolute top-5 right-5 text-white text-2xl sm:text-3xl"
        onClick={closeLightbox}
      >
        <FaTimes />
      </button>

      {/* Image */}
      <img
        src={allGalleryImages[currentIndex]}
        alt={`Full gallery ${currentIndex + 1}`}
        className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
      />

      {/* Left */}
      <button
        onClick={showPrev}
        className="absolute left-5 text-white text-3xl sm:text-4xl p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80"
      >
        <FaChevronLeft />
      </button>

      {/* Right */}
      <button
        onClick={showNext}
        className="absolute right-5 text-white text-3xl sm:text-4xl p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80"
      >
        <FaChevronRight />
      </button>
    </div>
  )}
</section>
    </div>
  );
}

