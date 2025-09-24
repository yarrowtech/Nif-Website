// Placement.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo, useRef } from "react";
import placementImage from "../assets/New Folder/about-bg.jpg";
import aishee from "../assets/SuccessStories/nif_placement_AisheeSikder.jpg";
import ankita from "../assets/SuccessStories/nif_placement_AnjitaAdak.jpg";
import ausmita from "../assets/SuccessStories/nif_placement_AusnitaBhar.jpg";
import ayesha from "../assets/SuccessStories/nif_placement_AyeshaParveen.jpg";
import faiza from "../assets/SuccessStories/nif_placement_FaizaJawed.jpg";
import hriday from "../assets/SuccessStories/nif_placement_HridoyGhosh.jpg";
import oindrilla from "../assets/SuccessStories/nif_placement_OindeillaChatterjee.jpg";
import omshree from "../assets/SuccessStories/nif_placement_OmShreePatel.jpg";
import sharmin from "../assets/SuccessStories/nif_placement_SharminAshraf.jpg";
import vanlarokima from "../assets/SuccessStories/nif_placement_VanlarokimaAchi.jpg";

import devoir from "../assets/SuccessStories/placement_brands_decofur.jpg";
import sl from "../assets/SuccessStories/placement_brands_nanditathirani.jpg";
import aa from "../assets/SuccessStories/placement_brands_skkarma.jpg";
import kds from "../assets/SuccessStories/placement_brands_kds.jpg";
import skipper from "../assets/SuccessStories/placement_brands_skipper.jpg";
import di from "../assets/SuccessStories/placement_brands_charcholdesign.jpg";
import homelane from "../assets/SuccessStories/placement_brands_homelane.jpg";
import manyavar from "../assets/SuccessStories/placement_brands_manyavar.jpg";
import decofur from "../assets/SuccessStories/placement_brands_decofur.jpg";
import raphaaa from "../assets/SuccessStories/placement_brands_rapahaa.jpg";
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




const ACCENT = "#e94e2b";

const Bullet = () => (
  <span
    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-[6px] border-2"
    style={{ borderColor: ACCENT, color: ACCENT }}
  >
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </span>
);

const students = [
  { name: "Aishee Sikder", photo: aishee, companyLogo: devoir },
    { name: "ANKITA ADAK", photo: ankita, companyLogo: sl },
    { name: "AUSMITA BHAR", photo: ausmita, companyLogo: aa },
    { name: "Ayesha Parveen", photo: ayesha, companyLogo: kds },
    { name: "FAIZA JAWED", photo: faiza, companyLogo: skipper },
    { name: "Hriday Ghosh", photo: hriday, companyLogo: di },
    { name: "OINDRILLA CHATTERJEE", photo: oindrilla, companyLogo: homelane },
    { name: "Om Shree Patel", photo: omshree, companyLogo: manyavar },
    { name: "Sharmin Ashraf", photo: sharmin, companyLogo: decofur },
    { name: "VANLAROKIMA ACHI", photo: vanlarokima, companyLogo: raphaaa },


];

const brands = [
  "Lee", "Kiran Uttam Ghosh", "Lilliput", "Louis Philippe", "Peter England",
  "Pantaloons", "RAPHAAA", "Raymond", "Godrej", "S+"
];


export default function Placement() {

// at the top of your component
const VISIBLE = 5;                 // cards per view
const AUTO_MS = 3000;              // change grid every 3s (adjust as needed)

const [index, setIndex] = React.useState(0);
const [paused, setPaused] = React.useState(false);

// total slides you can step through while keeping 5 visible
const maxIndex = Math.max(0, students.length - VISIBLE);

// % to translate for each step (5 cards => 20% per step)
const rpTranslatePct = (index * 100) / VISIBLE;

// handlers (you can reuse your rpPrev/rpNext if you already have them)
const rpNext = React.useCallback(() => {
  setIndex((i) => (i >= maxIndex ? 0 : i + 1));
}, [maxIndex]);

const rpPrev = React.useCallback(() => {
  setIndex((i) => (i <= 0 ? maxIndex : i - 1));
}, [maxIndex]);

// autoplay
React.useEffect(() => {
  if (paused || students.length <= VISIBLE) return;
  const id = setInterval(rpNext, AUTO_MS);
  return () => clearInterval(id);
}, [paused, students.length, rpNext]);

  // BRANDS TICKER (LOOP)
  // =====================
  const brandTickerSpeedSec = 45; // higher = slower

  return (
    <div className="min-h-screen w-full text-gray-900 font-poppins">
  {/* HERO */}
  <header className="relative">
    <div
      className="h-[200px] sm:h-[220px] md:h-[300px] w-full bg-cover bg-top"
      style={{ backgroundImage: `url(${placementImage})` }}
    >
      <div className="h-full w-full bg-black/70 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <h1 className="text-white font-extrabold text-[28px] sm:text-[32px] md:text-[48px]">
            Placement
          </h1>
        </div>
      </div>
    </div>
  </header>


     <main className="mt-7 md:mx-18 py-10 md:py-14 px-4 sm:px-6">
  {/* Intro */}
  <section>
    <h2 className="text-[20px] sm:text-[22px] md:text-[35px] font-semibold">
      Nurturing Talents!{" "}
      <span className="text-[#e94e2b]">Crafting Designers!</span>
    </h2>
    <div className="space-y-4 mt-4 text-[15px] sm:text-[16px] md:text-[16.8px] leading-6 sm:leading-7 md:leading-7 text-gray-800">
      <p>
        Welcome to NIF Global Lindsay Street – New York Institute of Fashion, where ambition meets expertise.
        NIF Global Lindsay Street is a prestigious design institute, offering some of the best Fashion Design and Interior Design courses in Eastern India.
        Located in the heart of Kolkata’s New Market, we pride ourselves on our extensive experience and the multitude of career opportunities we provide.
      </p>
      <p>
        At NIF Global Lindsay Street, we believe that everyone possesses creativity, and our mission is to channel that creativity into innovative designers.
        We teach Fashion and Interior Design to help you pursue a career in a field you are passionate about, enabling you to revolutionize the Fashion and Interior Design industries.
        With renowned faculty, acclaimed experts, cutting-edge labs, and global exposure, prepare to make significant waves in the design world.
      </p>
    </div>
  </section>

  {/* Lifetime Placement Support */}
  <section className="mt-8 sm:mt-10">
    <h3 className="text-[20px] sm:text-[22px] md:text-[35px] font-semibold">
      Lifetime <span className="text-[#e94e2b]">Placement Support</span>
    </h3>
    <div className="space-y-4 mt-4 text-[15px] sm:text-[16px] md:text-[16.8px] leading-6 sm:leading-7 md:leading-7 text-gray-800">
      <p>
        Each student is a treasured asset at NIF Global Lindsay Street. We are dedicated to nurturing relationships with these emerging talents even after graduation.
        It is our responsibility to guide their career paths effectively. Thus, our placement cell serves as a steadfast support system for aspiring designers, providing Lifetime Placement Assistance.
        Students secure jobs based on their merit; we offer guidance throughout their journey. Our commitment to mentoring students ensures they thrive in the design industry, and we take pride in their achievements.
      </p>
      <p>
        <span className="text-[#e94e2b] font-bold">“Earn while you Learn”,</span> is a lucrative offer for our deserving students, where we offer Appointment Letters to students when they enroll for our courses.
        This is the only institute with in-house placement opportunities.
      </p>
    </div>

    {/* Subsections */}
    <div className="mt-6 space-y-6">
      <div>
        <h4 className="font-bold text-[16px] sm:text-[18px]">Internships:</h4>
        <p className="mt-2 text-[15px] sm:text-[16px] md:text-[16.8px] leading-6 sm:leading-7 md:leading-7 text-gray-800">
          We at NIF Global Kolkata Lindsay Street stress more emphasis on internships.
          This inculcates the practical knowledge to the students, where they work with karigars and masters and gain the practical knowledge from these experts.
          This practical knowledge bundled with the teachings provided by the institute make the students industry ready.
          Along with internships, workshops are conducted to further enhance the students’ knowledge.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-[16px] sm:text-[18px]">Career Counselling:</h4>
        <p className="mt-2 text-[15px] sm:text-[16px] md:text-[16.8px] leading-6 sm:leading-7 md:leading-7 text-gray-800">
          This is one of the most important aspects of the Placement Cell.
          We undertake personal counselling sessions to understand the requirements and the skill sets of each student.
          Fashion and interior design have multiple avenues providing multiple career opportunities for the students.
          The students also have interest and skills in a specific field of the design field of their choice.
          We at the placement cell understand the specific interests of the students and help to sharpen the required skills to place them in the field of their choice.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-[16px] sm:text-[18px]">The Placement cell:</h4>
        <p className="mt-2 text-[15px] sm:text-[16px] md:text-[16.8px] leading-6 sm:leading-7 md:leading-7 text-gray-800">
          At NIF Lindsay Street, the placement cell is more than rooms with placement executives.
          It is the support system of the students and the institute.
          Its is the place where they learn to dream big and we help them fulfil their dreams.
        </p>
      </div>
    </div>
  </section>

  {/* Objectives */}
  <section className="mt-8 sm:mt-10">
    <h3 className="text-[20px] sm:text-[22px] md:text-[35px] font-semibold">
      Objectives of <span className="text-[#e94e2b]">Our Placement Cell</span>
    </h3>
    <ul className="mt-4 space-y-3">
      {[
        "Lifetime Placement Support",
        "Assured 100% Placement Assistance.",
        "On-Job-Training Opportunities with Certification.",
        "Multiple Job Opportunities in different sectors ",
        "(like Designs, Production, Quality Control, Merchandising etc.)",
        "On-Campus Placement Drive of Top Fashion & Interior Brands.",
        "Arranging internships, workshops and seminars",
        "Provide career counseling to help students identify their strengths and interests within the expansive design field.",
      ].map((t) => (
        <li key={t} className="flex items-start gap-3 text-[15px] sm:text-[16px] md:text-[16.8px] leading-6 sm:leading-7 md:leading-7 text-gray-900">
          <Bullet />
          <span>{t}</span>
        </li>
      ))}
    </ul>

    <div className="mt-4 sm:mt-6 text-[15px] sm:text-[16px] md:text-[18px] leading-6 sm:leading-7 md:leading-7 text-gray-800 space-y-4">
      <h4 className="font-bold text-[16px] sm:text-[18px]">A Legacy of Success</h4>
      <p>
        With a legacy of academic excellence of over thirty years NIF Global Lindsay Street has empowered and groomed students from day one with the essential skills and professionalism required to emerge as an excellent design professional.
        The academic delivery, software training, industry visits, and global exposure provided at NIF Global Lindsay Street empower students to establish their names in the dynamic world of interior or fashion design.
        From faculty members to the dedicated placement cell, the whole team guides student designers to pave their way to the pinnacle of success in their careers.
      </p>
      <p>
        Our placement cell has been a launchpad for countless dreams over the years.
        NIF Global Lindsay Street has successfully facilitated placements with top global brands.
        From fresh graduate to seasoned professionals, we guide aspiring designers through the placement process.
        With passion and extensive expertise, our placement cell, students and graduates are renowned companies such as Tommy Hilfiger, Calvin Klein, Vero Moda, Jack & Jones, Blackberry, Duravit, Godrej Properties, Hettich, Fenesta, Asian Paints and many more.
      </p>
    </div>
  </section>

  {/* Best Design Institute */}
  <section className="mt-8 sm:mt-10">
    <h3 className="text-[20px] sm:text-[22px] md:text-[36px] font-semibold">
      Your search for <span className="text-[#e94e2b]">the best design institute ends here…</span>
    </h3>
    <p className="mt-2 sm:mt-3 text-[15px] sm:text-[16px] md:text-[16.8px] leading-6 sm:leading-7 md:leading-7 text-gray-800">
      Enroll in a Fashion Design or Interior Design course at NIF Global Lindsay Street to build a promising career and leave a lasting mark in the vibrant world of design. See you soon…
    </p>
  </section>

{/* ===== Recent Placement (carousel) ===== */}
<section className="mt-10 px-4 sm:px-6 md:px-10">
  <h3 className="text-center text-[28px] sm:text-[32px] md:text-[44px] font-extrabold">
    Our Recent <span className="text-[#e94e2b]">Placement</span>
  </h3>
  <p className="text-center text-[14px] sm:text-[15px] md:text-[16px] text-gray-700 mt-2">
    Placement Drive of NIF Global Lindsay Street
  </p>

  <div
    className="relative mt-6 sm:mt-8"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
  >
    {/* Prev Button */}
    {students.length > VISIBLE && (
      <button
        type="button"
        onClick={rpPrev}
        className="hidden md:flex absolute left-2 sm:left-4 top-[100px] sm:top-[110px] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-sm bg-[#e94e2b] text-white shadow"
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
    )}

    {/* Carousel viewport */}
    <div className="overflow-x-hidden mx-0 sm:mx-6 md:mx-10">
      <div
        className="grid grid-flow-col auto-cols-[50%] sm:auto-cols-[33.33%] md:auto-cols-[20%] transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${rpTranslatePct}%)` }}
      >
        {students.map((s) => (
          <div key={s.name} className="px-2 sm:px-4 text-center">
            <img
              src={s.photo}
              alt={s.name}
              className="mx-auto h-[140px] sm:h-[160px] md:h-[170px] w-[140px] sm:w-[160px] md:w-[170px] object-cover rounded-[18px] border border-[#ea6246]"
            />
            <p className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] md:text-[14px] font-semibold tracking-wider uppercase text-gray-900">
              {s.name}
            </p>
            <div className="mt-3 sm:mt-5 flex items-center justify-center">
              <img
                src={s.companyLogo}
                alt={s.companyName || "company"}
                className="h-10 sm:h-12 md:h-13 w-52 sm:w-60 md:w-70 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Next Button */}
    {students.length > VISIBLE && (
      <button
        type="button"
        onClick={rpNext}
        className="hidden md:flex absolute right-2 sm:right-4 top-[100px] sm:top-[110px] -translate-y-1/2 w-9 h-9 items-center justify-center rounded-sm bg-[#e94e2b] text-white shadow"
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    )}
  </div>

  {/* Read More Button */}
  <div className="mt-6 sm:mt-10 flex justify-center">
    <a
      href="/students/success-stories"
      onClick={() => window.scrollTo(0, 0)}
      className="inline-flex items-center gap-2 bg-[#e94e2b] px-5 sm:px-7 py-2 sm:py-3 text-white text-[14px] sm:text-[15px] font-semibold rounded-md hover:bg-[#cf4423] transition"
    >
      Read More
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </a>
  </div>
</section>





{/* ===== Our Associated Brands (continuous ticker) ===== */}
<section className="mt-14">
  <h3 className="text-center text-[32px] md:text-[44px] font-extrabold">
    Our Associated <span className="text-[#e94e2b]">Brands</span>
  </h3>

{/* Marquee wrapper */}
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
              className="
                flex items-center justify-center 
                h-24 md:h-17
                w-[200px]  md:w-[270px] 
                bg-white border border-gray-300/70
              "
            >
              <img
                src={logo}
                alt={`brand-${i}`}
                className="h-[800px] max-h-600 max-w-43 object-contain "
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
              className="
                flex items-center justify-center 
                h-24 md:h-17
                w-[100px]  md:w-[270px] 
                bg-white border border-gray-300/70
              "
            >
              <img
                src={logo}
                alt={`brand-${i}`}
                className="h-[800px] max-h-600 max-w-43 object-contain "
                loading="lazy"
              />
            </div>
          )
        )}
      </div>
  
      {/* hairlines */}
      <div className="pointer-events-none absolute inset-x-0 top-[-1px] h-px bg-gray-300/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-px bg-gray-300/70" />
    </div>
  
    <style>{`
      .marquee:hover { animation-play-state: paused; }
      @keyframes nifScroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
</section>


      </main>
    </div>
  );
}
