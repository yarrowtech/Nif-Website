// src/pages/InteriorDesign.jsx
import { useState } from "react";
import { BiCheckSquare } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import posterImg from "../assets/Interior-Design-Course.jpg"; // right poster in first content 
import whyImg from "../assets/Interior-design-courses-in-kolkata.jpg"
import heroImg from "../assets/New Folder/about-bg.jpg" // big banner background
import interior1 from "../assets/Interior/interior1.jpeg";
import interior2 from "../assets/Interior/interior2.jpg";
import interior3 from "../assets/Interior/interior3.jpg";
import interior4 from "../assets/Interior/interior4.jpg";
import interior5 from "../assets/Interior/interior5.jpg";
import interior6 from "../assets/Interior/interior6.jpg";
import interior7 from "../assets/Interior/interior7.jpg";
import interior8 from "../assets/Interior/interior8.jpg";
import interior9 from "../assets/Interior/interior9.jpg";
import interior10 from "../assets/Interior/interior10.jpg";
import interior11 from "../assets/Interior/interior11.jpg";
import interior12 from "../assets/Interior/interior12.jpg";
import interior13 from "../assets/Interior/interior13.jpg";
import interior14 from "../assets/Interior/interior14.jpg";
import interior15 from "../assets/Interior/interior15.jpg";
import interior16 from "../assets/Interior/interior16.jpg";
import interior17 from "../assets/Interior/interior17.jpg";
import interior18 from "../assets/Interior/interior18.jpg";
import interior19 from "../assets/Interior/interior19.jpg";
import interior20 from "../assets/Interior/interior20.jpg";
import interior21 from "../assets/Interior/interior21.jpg";
 // right poster in first content block
export default function InteriorDesign() {
const [showMore, setShowMore] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Collect all images in one array for lightbox navigation
  const allImages = [
    interior1, interior2, interior3, interior4, interior5, interior6,
    interior7, interior8, interior9, interior10, interior11,
    interior12, interior13, interior14, interior15,
    interior16, interior17, interior18, interior19, interior20, interior21,
  ];

  // Handle Lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  const showNext = () =>
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));


   
const faqs = [
  {
    q: "1. What interior design courses does NIF Global Kolkata Lindsay offer?",
    a: "Enrol for 2-Year, 3-Year or 4-Year M. Voc in Interior Design. We also have other programs like 3-Year Specialization Certificate in Interior Design and 4-year Super Specialization Certificate in Interior Design, 1-Year Foundation Certificate in Interior Design, 2-Year Advanced Certificate in Interior Design and 2-Year Post Graduation Certificate in Interior Design with Specialization."
  },
  {
    q: "2. What qualifications do the faculty members at NIF Global Lindsay hold?",
    a: "Our faculty members are accomplished experts and have skills and practical knowledge in various disciplines of Interior Designing."
  },
  {
    q: "3. Are there any specific eligibility criteria to enroll in the interior design courses in Kolkata?",
    a: "Anyone from any academic stream who has completed 10+2 can join in."
  },
  {
    q: "4. How does NIF Global Kolkata Lindsay support students with job placements after graduation?",
    a: "Over 7500 placements later, we can help you tojoin top companies as a talented designer. We have lifetime placement assistance for you."
  },
  {
    q: "5. What facilities and resources are available to students at NIF Global Lindsay?",
    a: "You can get innovation hubs, design studios and labs of global standards. Surge ahead in the world of interior design and carve your own place, with our impeccable training,industry-ready knowledge and a shared spirit for the pursuit of unmatched excellence."
  }
];


  const [openFaq, setOpenFaq] = useState(0);


  return (
    <section className="font-poppins text-[#1d1d1f]">
  {/* ---------- HERO ---------- */}
  <div className="relative w-full h-[320px] md:h-[450px] overflow-hidden">
    <img
      src={heroImg}
      alt="Interior Design Hero"
      className="w-full h-full object-cover [object-position:50%_center] md:[object-position:10%_-12%] md:scale-170"
    />
    <div className="absolute inset-0 bg-black/70" />
    <div className="absolute inset-0">
      <div className="max-w-6xl mx-auto px-4 md:px-5 md:mx-17 h-full flex items-center">
        <div className="text-center md:text-left w-full">
          <h1 className="text-white text-xl sm:text-2xl md:text-[40px] font-semibold leading-snug">
            Interior Design Course in Kolkata
          </h1>

          <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3 text-white/95 text-xs sm:text-sm md:text-[16.8px]">
            {[
              "Best infrastructure and amenities",
              "Strong Faculty Team",
              "100% placement assistance",
              "Training enthusiasts for 3 decades",
              "Reasonable course fees",
              "Work Integrated Skill-based Higher Education (WISE)",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-2 justify-center md:justify-start">
                <BiCheckSquare className="text-yellow-500 text-[20px] sm:text-[22px] md:text-[25px]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>


{/* ---------- INTRO + POSTER (final aligned) ---------- */}
<div className="max-w-[1280px] mx-auto mt-5 px-3 md:px-6 pt-8 md:pt-14 pb-10 md:pb-12">
  {/* Title */}
  <h2 className="font-poppins font-semibold text-[20px] sm:text-[24px] md:text-[36px] leading-snug md:leading-tight tracking-tight md:-ml-3 text-center md:text-left">
    Interior Design Course in Kolkata, at{" "}
    <span className="text-[#e94e2b] font-semibold">NIF Global Lindsay</span>
  </h2>

  {/* Grid layout */}
  <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-6 md:gap-12 mt-6 items-start">
    {/* LEFT text */}
    <div className="text-[#2b2b2b] text-[14px] sm:text-[15px] md:text-[15.5px] leading-6 sm:leading-7 md:leading-8 md:-ml-3">
      <p className="mt-1 mb-5 sm:mb-6 text-[14px] sm:text-[15px] md:text-[16.8px] leading-6 sm:leading-7 text-[#333] md:-mr-95">
        NIF Global Lindsay is the top interior design institute in Kolkata, West
        Bengal. We have been shaping dreams, nurturing talent, and making it
        happen for the interior design enthusiasts with our well-drafted courses
        in interior designing. Welcome to NIF Global Lindsay, a top-rated
        interior design college in Kolkata. Gain the right knowledge, expertise,
        attitude and aptitude to make a flourishing career in interior designing
        with us by your side.
      </p>
      <p className="mb-5 sm:mb-6 md:text-[16.8px] md:mr-55">
        With global mentors on board, state-of-the-art infrastructure, rich
        experience of honing talent for 30 years and so much more – we are here
        to give your career goals a solid direction. With a wide variety of
        courses tailored to your needs, enrol for a course today!
      </p>

      {/* Sub-heading */}
      <h3 className="font-poppins font-extrabold text-[18px] sm:text-[22px] md:text-[36px] leading-tight -ml-1 text-center md:text-left">
        Our Interior Design Courses:
      </h3>
      <p className="font-poppins text-[#e94e2b] font-extrabold text-[16px] sm:text-[20px] md:text-[36px] mt-1 mb-4 sm:mb-5 -ml-1 text-center md:text-left">
        Take A Look
      </p>

      <p className="mb-4 sm:mb-5 md:text-[16.8px] md:mr-45 text-center md:text-left">
        Choose our well-recognized, highly acclaimed professional{" "}
        <span className="font-bold">interior design course in Kolkata</span>,
        and get set for a thriving career in interior designing.
      </p>

      <p className="mb-3 text-[#555] md:text-[16.8px] md:mr-45 text-center md:text-left">
        Our degree programs, offered under WISE (Work Integrated Skill Education) NEP 2020, include:
      </p>
      <ul className="mt-6 sm:mt-7 space-y-2 text-[14px] sm:text-[15px] md:text-[16.8px] md:mx-10">
        {[
          "2 Year M. Voc in Interior Design",
          "3 Year B. Voc in Interior Design",
          "4 Year B. Des in Interior Design",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-2 justify-center md:justify-start">
            <BiCheckSquare className="text-[#e94e2b] text-[18px] sm:text-[22px] md:text-[25px] mt-[2px]" />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 md:text-[16.8px] md:-ml-10 text-center md:text-left">
        National Skill Development Corporation (NSDC) and Medhavi Skills University
        (MSU) certify all these courses:
      </p>
      <ul className="mt-6 sm:mt-7 space-y-2 text-[14px] sm:text-[15px] md:text-[16.8px] md:-ml-2">
        {[
          "4 Year Super Specialization Certificate in Interior Design",
          "3 Year Specialization Certificate in Interior Design",
          "2 Year Advanced Certificate in Interior Design",
          "1 Year Foundation Certificate in Interior Design",
          "2 Year Post Graduation Certificate in Interior Design with Specialization available",
        ].map((t, i) => (
          <li key={i} className="flex items-start gap-2 justify-center md:justify-start">
            <BiCheckSquare className="text-[#e94e2b] text-[18px] sm:text-[22px] md:text-[25px] mt-[2px]" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT poster image */}
    <div className="w-full md:w-[600px] md:pr-0 justify-self-center md:justify-self-end md:mt-10 lg:mt-30 md:-ml-55">
      <img
        src={posterImg}
        alt="Interior Design Admissions Poster"
        className="w-full sm:w-[450px] md:w-[650px] h-auto md:h-[450px] object-cover shadow-md mx-auto"
      />
    </div>
  </div>
</div>




     {/* ---------- WHY CHOOSE ---------- */}
<div className="mx-4 sm:mx-6 md:mx-15 px-3 sm:px-5 -mt-1 pb-10">
  {/* Title */}
  <h3 className="text-[20px] sm:text-[26px] md:text-[35px] font-semibold leading-snug text-center md:text-left">
    Why choose{" "}
    <span className="text-[#e94e2b]">NIF Global Lindsay</span> for{" "}
    <span className="text-[#e94e2b]">Interior Design Course</span> in Kolkata?
  </h3>

  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-6 md:-gap-10 mt-10 md:mt-15 md:ml-14 items-start">
    {/* left image */}
    <img
      src={whyImg}
      alt="NIF Why Choose"
      className="w-full rounded-md shadow-md object-cover"
    />

    {/* right bullets */}
    <div className="mt-6 md:mt-0 text-[14px] sm:text-[15px] md:text-[16.8px] leading-6 sm:leading-7 text-[#333] md:ml-15 md:mr-30">
      <p className="mb-4 text-center md:text-left">
        With NIF Global Lindsay, dreams, designs and aesthetics merge seamlessly.
      </p>

      <ul className="space-y-4 sm:space-y-5 md:ml-10 mt-6 sm:mt-7 md:-mr-20">
        {[
          <>
            <span className="font-medium">Top-notch education:</span> NIF Global
            Lindsay Street gives you thorough education that matches the industry
            standards, and lets you handle all career challenges effortlessly.
          </>,
          <>
            <span className="font-medium">Training beyond curriculum:</span> Attend
            our workshops and seminars regularly, to get enlightened by top
            interior designers and industry veterans.
          </>,
          <>
            <span className="font-medium">Comprehensive education:</span> Get
            designing tips and knowledge through field trips and industry visits
            and emerge as an interior designer who stands out from the pack.
            Knowledge, imagination, creativity form a unified whole.
          </>,
        ].map((c, i) => (
          <li
            key={i}
            className="flex items-start gap-3 justify-center md:justify-start"
          >
            <BiCheckSquare className="text-[#e94e2b] text-[22px] sm:text-[26px] md:text-6xl mt-[2px] md:-mt-[15px]" />
            <span className="max-w-[95%] sm:max-w-none">{c}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

{/* ---------- ADVANTAGES & CAREERS ---------- */}
<div className="mx-4 sm:mx-6 md:mx-15 px-3 sm:px-5 md:px-8 pb-6 md:pb-10">
  {/* Title */}
  <h3 className="text-[20px] sm:text-[24px] md:text-[35px] font-[950] text-center md:text-left">
    Advantages and Careers
  </h3>

  {/* Intro */}
  <p className="mt-3 text-[14px] sm:text-[15px] md:text-[16.8px] leading-6 sm:leading-7 text-[#333] text-center md:text-left">
    Get creative and industry-ready with the best interior design course in
    Kolkata, and build a successful career.
  </p>

  {/* Work options */}
  <p className="mt-6 sm:mt-8 text-[14px] sm:text-[15px] md:text-[16.8px] text-center md:text-left">
    You can find work as:
  </p>

  <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-[14px] sm:text-[15px] md:text-[16.8px] md:ml-7">
    {[
      "Interior Planner",
      "Interior Designer",
      "Interior Design Consultant",
      "Interior Architect",
      "Colour Consultant",
    ].map((t, i) => (
      <li
        key={i}
        className="flex items-start gap-2 justify-center md:justify-start"
      >
        <BiCheckSquare className="text-[#e94e2b] text-[18px] sm:text-[22px] md:text-[25px]" />
        <span>{t}</span>
      </li>
    ))}
  </ul>

  {/* Closing paragraphs */}
  <p className="mt-5 text-[14px] sm:text-[15px] md:text-[16.8px] leading-6 sm:leading-7 text-center md:text-left md:mr-130">
    Join our <span className="font-semibold">interior design institute in Kolkata</span>{" "}
    today and take up any of our courses that you prefer. With complete placement
    support, you can find it easy to get jobs in eminent companies, including your
    dream organizations.
  </p>

  <p className="mt-6 sm:mt-8 text-[14px] sm:text-[15px] md:text-[16.8px] leading-6 sm:leading-7 text-center md:text-left md:mr-125">
    Let our comprehensive training provide you with the best platform in the
    industry. Learn all that you need, to make your mark in the interior design
    domain, winning over all!
  </p>

<div>
  {/* Creativity Insights */}
  <div>
    <h4 className="mt-8 text-[22px] md:text-[35px] font-semibold md:ml-10 text-center md:text-left">
      Our <span className="text-[#e94e2b]">Creativity Insights</span>
    </h4>

    {/* Gallery Section */}
    <div className="max-w-7xl mx-auto px-3 sm:px-4 mt-6">
      <div className="columns-1 sm:columns-2 md:columns-4 gap-3 space-y-3">
        {allImages.slice(0, showMore ? allImages.length : 18).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`creativity${i + 1}`}
            onClick={() => openLightbox(i)}
            className="w-full mb-3 shadow-md hover:opacity-90 transition cursor-pointer break-inside-avoid"
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="px-5 py-2 sm:px-6 sm:py-3 bg-[#e94e2b] text-white text-sm sm:text-base font-semibold rounded-md shadow hover:bg-[#c63c1f] transition"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={() => setShowMore(false)}
            className="px-5 py-2 sm:px-6 sm:py-3 bg-gray-700 text-white text-sm sm:text-base font-semibold rounded-md shadow hover:bg-gray-900 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
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
        src={allImages[currentIndex]}
        alt={`Full creativity ${currentIndex + 1}`}
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
</div>



      {/* FAQs */}
<div className="-mt-6 sm:-mt-10 py-8 sm:py-10 px-3 sm:px-5 md:px-10">
  <h2 className="text-[20px] sm:text-[22px] md:text-[35px] font-semibold mb-4 sm:mb-6 text-center md:text-left">
    FAQs
  </h2>

  <div className="mt-6 sm:mt-10 space-y-2">
    {faqs.map((faq, i) => (
      <div key={i} className="border rounded overflow-hidden">
        <button
          className={`w-full flex justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 text-left font-medium text-sm sm:text-base transition-colors duration-300
            ${openFaq === i ? "bg-[#e94e2b] text-white" : "bg-gray-100 text-[#e94e2b]"}`}
          onClick={() => setOpenFaq(openFaq === i ? null : i)}
        >
          <span className="pr-2">{faq.q}</span>
          <span className="font-bold text-lg sm:text-xl">
            {openFaq === i ? "−" : "+"}
          </span>
        </button>

        {openFaq === i && (
          <p className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 text-sm sm:text-base bg-white leading-6">
            {i === faqs.length - 1 ? (
              <>
                {faq.a?.split("Surge ahead in the world")[0]}
                <br />
                <span className="block mt-3">
                  Surge ahead in the world of interior design{" "}
                  {faq.a.split("Surge ahead in the world of interior design ")[1]}
                </span>
              </>
            ) : (
              faq.a
            )}
          </p>
        )}
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
