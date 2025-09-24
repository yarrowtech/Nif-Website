// src/pages/FashionDesign.jsx
import { BiCheckSquare } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/New Folder/about-bg.jpg";
import courseImg from "../assets/fashiondesigning/fashion1.jpg";
import whyImg from "../assets/fashiondesigning/fashion2.JPG";
import show1 from "../assets/fashiondesigning/fashion3.jpg";
import show2 from "../assets/fashiondesigning/fashion4.jpg";
import show3 from "../assets/fashiondesigning/fashion5.jpg";
import show4 from "../assets/fashiondesigning/fashion6.jpg";
import fashionbrand1 from "../assets/fashiondesigning/fashionbrand1.jpg";
import fashionbrand2 from "../assets/fashiondesigning/fashionbrand2.jpg";
import fashionbrand3 from "../assets/fashiondesigning/fashionbrand3.jpg";
import fashionbrand4 from "../assets/fashiondesigning/fashionbrand4.jpg";
import fashionbrand5 from "../assets/fashiondesigning/fashionbrand5.jpg";
import fashionbrand6 from "../assets/fashiondesigning/fashionbrand6.jpg";
import fashionbrand7 from "../assets/fashiondesigning/fashionbrand7.jpg";
import fashionbrand8 from "../assets/fashiondesigning/fashionbrand8.jpg";
import fashionbrand9 from "../assets/fashiondesigning/fashionbrand9.jpg";
import fashionbrand10 from "../assets/fashiondesigning/fashionbrand10.jpg";
import fashionbrand11 from "../assets/fashiondesigning/fashionbrand11.jpg";
import fashionbrand12 from "../assets/fashiondesigning/fashionbrand12.jpg";
import fashionbrand13 from "../assets/fashiondesigning/fashionbrand13.jpg";
import fashionbrand14 from "../assets/fashiondesigning/fashionbrand14.jpg";
import fashionbrand15 from "../assets/fashiondesigning/fashionbrand15.jpg";
import fashionbrand16 from "../assets/fashiondesigning/fashionbrand16.jpg";
import fashionbrand17 from "../assets/fashiondesigning/fashionbrand17.jpg";
import fashionbrand18 from "../assets/fashiondesigning/fashionbrand18.jpg";
import fashionbrand19 from "../assets/fashiondesigning/fashionbrand19.jpg";


export default function FashionDesign() {
  const faqs = [
    {
      q: "1. What fashion design courses does NIF Global Kolkata Lindsay offer?",
      a: "YYou can choose from 2-Year Master of Vocation (M.Voc), 3-Year Bachelor of Vocation (B. Voc.) and 4-Year Bachelor of Design (BDes) in Fashion Design, depending on your preference and career goals."
    },
    {
      q: "2. How does NIF Global Kolkata Lindsay assist with placements after completing the course?",
      a: "We offer lifetime placement assistance to offer, freshers as well as expert designers who join any of our courses. We have placed over 7500 students successfully."
    },
    {
      q: "3. What qualifications do the faculty members at NIF Global Lindsay have?",
      a: "They are qualified in various aspects of fashion designing, and happen to be subject experts. Our faculty members are experts and impart education to you in the best, most creative ways."
    },
    {
      q: "4. Are there any specific eligibility criteria to enroll in the fashion design courses in Kolkata?",
      a: "You have to be 10+2 in any discipline, and that is the minimum qualification that you are expected to have. Students or professionals – all are welcome to enroll."
    },
    {
      q: "5. What facilities and resources do NIF Global Lindsay provide to students in Kolkata?",
      a: "Our design studios, labs and innovation hubs are a class apart, having state-of-the-art technologies. Join global runways, learn from international mentors, enjoy global exposure with 1-month London stay program, get hands-on learning with industry leaders in Dubai residential program and get exposed to the fashion market of the Middle East. Thousands of passionate individuals have joined our Fashion Design Institute in Kolkata to chase successful careers, with many managing to become industry experts themselves."
    }
  ];

  const [openFaq, setOpenFaq] = useState(0);
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="font-poppins">
      {/* Hero Section */}
<div className="-mt-10 relative w-full h-[500px] md:h-[490px] overflow-hidden">
  <img
    src={heroImg}
    alt="Fashion Design"
    className="w-full h-full object-cover [object-position:10%_-12%] scale-110 md:scale-125"
  />
  <div className="absolute inset-0 bg-black/65" />

  {/* Hero content */}
  <div className="absolute inset-0 flex items-center px-6 md:px-20">
    <div className="flex flex-col items-start w-full max-w-2xl text-left">
      <h1 className="text-white text-3xl sm:text-4xl md:text-[40px] font-semibold mb-6">
        Best Fashion Design Institute in Kolkata
      </h1>

      <ul className="text-white space-y-2 text-[16px] sm:text-[17px] md:text-[18px] mt-2 md:mt-4">
        {[
          "30 years of training excellence",
          "Advanced facility and infrastructure",
          "Competitive fees for all courses",
          "100% placement assistance",
          "Develop Entrepreneurial Skills",
          "WISE (Work Integrated Skill-based Higher Education)",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <BiCheckSquare className="text-yellow-500 text-2xl sm:text-3xl -mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>


  {/* Study at the Best */}
<div className="w-full px-6 md:px-20 py-12 md:py-16">
  <h2 className="text-[22px] md:text-[35px] font-semibold">
    Study at the Best{" "}
    <span className="text-[#e94e2b]">
      Fashion Design Institute in Kolkata
    </span>
  </h2>

  <p className="mt-5 md:text-[17px] text-gray-700 leading-7">
    NIF Global Kolkata Lindsay is a trusted name among fashion designing enthusiasts.
    We are a fashion design institute in Kolkata, West Bengal. With an excellent faculty team,
    global mentors, industry knowledge, and upgraded infrastructure, we have been nurturing
    immense talent for 30 years in the field of fashion designing.
  </p>

  <p className="mt-5 md:text-[17px] text-gray-700 leading-7">
    NIF Global is ready to hand-hold the next generation of fashion icons so they
    can channel their passion for fashion designing by gaining the right knowledge and
    practical skills. Opt for a fashion design course in Kolkata to explore more. We
    support your big dreams with dedicated placement assistance.
  </p>
</div>


{/* Courses Quick Look */}
<div className="w-full -mt-8 px-6 md:px-20">
  {/* Heading */}
  <h2 className="font-semibold tracking-tight text-[28px] md:text-[35px] leading-tight">
    Our Fashion Design Courses:{" "}
    <span className="text-[#e94e2b]">A Quick Look</span>
  </h2>

  {/* Intro line */}
  <p className="mt-3 md:mt-4 font-bold text-[14px] md:text-[18px] text-gray-900">
    Choose from our fashion designing courses to skyrocket your career. Browse through:
  </p>

  <div className="mt-6 grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
    {/* LEFT: Bullets */}
    <div className="max-w-2xl">
      <ul className="space-y-7 md:space-y-3 text-[16px] md:text-[17px] leading-8 md:leading-7 text-gray-800 md:px-7">
        <li className="flex items-start gap-4">
          <BiCheckSquare className="text-[#e94e2b] text-xl md:text-2xl mt-[2px] shrink-0" />
          <span>
            <span className="font-medium">2 Year M. Voc in Fashion Design</span> – Improve your skills or gain
            specialization, with insights and <br /> cutting-edge methods related to creative design and industry trends.
          </span>
        </li>

        <li className="flex items-start gap-4">
          <BiCheckSquare className="text-[#e94e2b] text-2xl mt-[2px] shrink-0" />
          <span>
            <span className="font-medium">3 Year B. Voc in Fashion Design</span> – Get practical experience as well
            as theoretical knowledge, <br /> and enjoy a successful fashion designing career.
          </span>
        </li>

        <li className="flex items-start gap-4">
          <BiCheckSquare className="text-[#e94e2b] text-2xl mt-[2px] shrink-0" />
          <span>
            <span className="font-medium">4 Year B. Voc in Fashion Design</span> – Get a robust foundation in fashion
            design, with knowledge <br /> and expertise in all the important areas.
          </span>
        </li>
      </ul>

      {/* Emphasis line */}
      <p className="mt-8 md:mt-5 text-[16px] md:text-[17px] leading-7 text-gray-900">
        <span className="font-bold italic">
          Join our fashion design college in Kolkata to bring out your creativity while equipping yourself with
        </span>
        <br />
        <span className="font-extrabold">
          required technical knowledge and expertise.
        </span>
      </p>
    </div>

    {/* RIGHT: Image */}
    <div className="justify-self-end w-full max-w-[900px] md:ml-10">
      <img
        src={courseImg}
        alt="Students learning"
        className="w-full h-[300px] md:h-[440px] object-cover rounded-none shadow-none"
      />
    </div>
  </div>
</div>

{/* Why Choose NIF Global Lindsay */}
<div className="w-full py-7 px-4 md:px-21">
  <h2 className="text-[24px] md:text-[36px] font-semibold md:pl-8 -ml-2 md:-ml-8">
    Why choose <span className="text-[#e94e2b]">NIF Global Lindsay</span> for Fashion Design Course in Kolkata?
  </h2>

  <div className="mt-14 grid md:grid-cols-[1fr_1.2fr] gap-40 items-center">
    {/* LEFT: Image locked to left edge */}
    <div className="justify-self-start w-full max-w-[740px]">
      <img
        src={whyImg}
        alt="Why choose us"
        className="w-[800px] md:w-[720px] h-[420px] md:h-[450px] object-cover shadow-md"
      />
    </div>

    {/* RIGHT: Bullets */}
    <div className="space-y-6 text-[16px] md:text-[18px] leading-8 text-gray-800 md:pr-10 md:-mr-10 md:-ml-23">
      <p className="-mt-8">
        Get set for an enviable fashion design career! Enroll in a top fashion design course in Kolkata at NIF
        <br />
        Global Lindsay Street – New York Institute of Fashion for:
      </p>

      <ul className="space-y-6">
        <li className="flex items-start md:px-10 gap-3">
          <BiCheckSquare className="text-[#e94e2b] text-xl md:text-4xl -mt-[2px]" />
          <span>
            <span className="font-medium">Top-notch academic setting:</span> We offer you the best ambience to make your
            mark in the world of fashion designing.
          </span>
        </li>

        <li className="flex items-start md:px-10 gap-3">
          <BiCheckSquare className="text-[#e94e2b] text-xl md:text-4xl -mt-[2px]" />
          <span>
            <span className="font-medium">Top-tier faculty:</span> Gain the best training and conquer the design industry
            with your skills, creativity, and originality.
          </span>
        </li>

        <li className="flex items-start md:px-10 gap-3">
          <BiCheckSquare className="text-[#e94e2b] text-xl md:text-4xl -mt-[2px]" />
          <span>
            <span className="font-medium">Best infrastructure:</span> Learn from experts, train in cutting-edge labs, get
            honed by mentors, and enjoy the widest industry exposure.
          </span>
        </li>
      </ul>
    </div>
  </div>
</div>


  {/* Career Options */}
<div className="-mt-8 w-full py-12 px-5 md:px-21">
  <h2 className="font-semibold leading-tight text-[28px] md:text-[35px]">
    What are the career options in{" "}
    <span className="text-[#e94e2b]">Fashion Design?</span>
  </h2>

  {/* Career list */}
  <ul className="mt-2 md:mt-5 space-y-6 md:space-y-4 text-[17px] md:text-[17px] text-gray-900">
    {[
      "Fashion Designer",
      "Costume Designer",
      "Fashion Stylist",
      "Visual Merchandiser",
      "Fashion Marketer/Buyer",
      "Fashion House Coordinator",
      "Fashion Illustrator",
      "Fashion Journalism and Media",
      "Fashion Educationist/Facilitator",
      "Fashion Blogger",
      "Fashion Forecaster",
      "Fashion Photographer",
    ].map((role, i) => (
      <li key={i} className="flex items-center gap-3">
        <BiCheckSquare className="text-[#e94e2b] text-2xl md:text-2xl shrink-0" />
        <span>{role}</span>
      </li>
    ))}
  </ul>

  {/* Closing paragraph */}
  <p className="mt-4 md:mt-5 text-[16px] md:text-[17px] leading-8 text-gray-700">
    Through the years NIF Global Lindsay Street has been empowering students with the
    essential skills and professionalism required to shine like a diamond in the world
    of design. We take pride in all of our students who have brought immense honour to
    the institute with their creativity, adorning our crown with many feathers.
  </p>
</div>

{/* Brands */}
<section className="-mt-18 w-full py-12 px-5 md:px-20">
  <h2 className="font-poppins font-semibold leading-tight text-[28px] md:text-[36px]">
    We are proud to place <span className="text-[#e94e2b]">our students</span> to some of the{" "}
    <span className="text-[#e94e2b]">best fashion brands</span>
  </h2>

  {/* Marquee wrapper */}
  <div className="mt-16 relative overflow-hidden">
    <div
      className="flex whitespace-nowrap will-change-transform marquee"
      style={{ animation: "nifScroll 28s linear infinite" }}
    >
      {/* 1st copy */}
      {[fashionbrand1, fashionbrand2, fashionbrand3, fashionbrand4, fashionbrand5, fashionbrand6, fashionbrand7, fashionbrand8].map(
        (logo, i) => (
          <div
            key={`a-${i}`}
            className="flex items-center justify-center h-24 md:h-17 w-[200px] md:w-[270px] bg-white border border-gray-300/70"
          >
            <img
              src={logo}
              alt={`brand-${i}`}
              className="h-[800px] max-h-600 max-w-43 object-contain"
              loading="lazy"
            />
          </div>
        )
      )}

      {/* 2nd copy for seamless loop */}
      {[fashionbrand9, fashionbrand10, fashionbrand11, fashionbrand12, fashionbrand13, fashionbrand14, fashionbrand15, fashionbrand16, fashionbrand17, fashionbrand18, fashionbrand19].map(
        (logo, i) => (
          <div
            key={`b-${i}`}
            className="flex items-center justify-center h-24 md:h-17 w-[100px] md:w-[270px] bg-white border border-gray-300/70"
          >
            <img
              src={logo}
              alt={`brand-${i}`}
              className="h-[800px] max-h-600 max-w-43 object-contain"
              loading="lazy"
            />
          </div>
        )
      )}
    </div>

    {/* Top and bottom hairlines */}
    <div className="pointer-events-none absolute inset-x-0 top-[-1px] h-px bg-gray-300/70" />
    <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-px bg-gray-300/70" />
  </div>

  {/* Marquee animation */}
  <style>{`
    .marquee:hover { animation-play-state: paused; }
    @keyframes nifScroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
</section>




     {/* Annual Show */}
<div className="-mt-5 w-full py-12 px-5 md:px-21">
  <h2 className="font-semibold leading-tight text-[28px] md:text-[35px]">
    Our Annual Graduating <span className="text-[#e94e2b]">Fashion Design Show</span>, Kolkata
  </h2>
  <p className="text-gray-600 text-[17px] px-5 md:-ml-5 mt-6">
    NIF Global, Kolkata presents Tomorrow Makers 2024-25, the annual graduating fashion show, 
    held on February 14, 2025, at the iconic St Paul’s Cathedral.
  </p>

  {/* Show images grid */}
  <div className="mt-20 grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-8">
    {[show1, show2, show3, show4].map((img, i) => (
      <img key={i} src={img} alt="show" className="shadow-md object-cover w-full h-full" />
    ))}
  </div>

  {/* View More button */}
<div className="flex justify-center mt-15">
  <Link to="/gallery">
    <button  onClick={scrollToTop} className="bg-[#e94e2b] text-white px-8 py-3 rounded-sm shadow hover:bg-red-600">
      View More →
    </button>
  </Link>
</div>
</div>

{/* FAQs */}
<div className="-mt-10 py-10 px-5 md:px-21">
  <h2 className="text-[22px] md:text-[35px] font-semibold mb-6">FAQs</h2>
  <div className="mt-10 space-y-1.5">
    {faqs.map((faq, i) => (
      <div key={i} className="border overflow-hidden">
        <button
          className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium text-sm md:text-base transition-colors duration-300
            ${openFaq === i ? "bg-[#e94e2b] text-white" : "bg-gray-100 text-[#e94e2b]"}`}
          onClick={() => setOpenFaq(openFaq === i ? null : i)}
        >
          {faq.q}
          <span className="font-bold text-lg">{openFaq === i ? "−" : "+"}</span>
        </button>

        {openFaq === i && (
          <p className="px-4 py-3 text-gray-800 text-sm md:text-base bg-white">
            {i === faqs.length - 1 ? (
              <>
                {faq.a.split("Fashion Design Institute in Kolkata")[0]}
                <span className="font-bold">Fashion Design Institute in Kolkata</span>
                {faq.a
                  .split("Fashion Design Institute in Kolkata")[1]
                  ?.split("Thousands of passionate individual")[0]}
                <br />
                <span className="block mt-3">
                  Thousands of passionate individual
                  {faq.a.split("Thousands of passionate individual")[1]}
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

    </section>
  );
}
