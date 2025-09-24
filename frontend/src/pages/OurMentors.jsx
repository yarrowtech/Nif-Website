// OurMentors.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// Import mentor images (replace with actual paths from assets folder)
import ananya from "../assets/mentors/ananyamentor.png";
import twinkle from "../assets/mentors/twinklementor.png";
import gauri from "../assets/mentors/gaurimentor.png";
import manish from "../assets/mentors/manishmentor.png";
import ashley from "../assets/mentors/ashleymentor.png";
import mentorbanner from "../assets/New Folder/about-bg.jpg";
export default function OurMentors() {
  return (
    <div className="bg-white text-gray-800">
  {/* Hero Section */}
  <div className="relative w-full h-[340px] bg-black">
    <img
      src={mentorbanner}
      alt="Our Mentors Banner"
      className="w-full h-full object-cover object-top opacity-30"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white">Our Mentors</h1>
    </div>
  </div>

  {/* Intro Section */}
  <div className="max-w-5xl mx-auto py-14 px-6">
    <h2 className="text-2xl font-semibold">
      Learn with <span className="text-red-600">Mentors</span>
    </h2>
    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
      NIF Global Lindsay Street provides an unparalleled learning experience, offering direct
      mentorship from seasoned on-field experts. Whether online or in-person, students gain
      practical knowledge and skills in a range of disciplines including Interior Design, Fashion
      Design, Management, Beauty, Makeup, and Hairstyling. Taught by some of Bollywood’s finest
      professionals, the courses are immersive and hands-on, designed to bridge the gap between
      academic theories and real-world applications. This unique educational approach prepares
      students to excel in their respective fields, equipping them with the expertise needed to
      succeed in the competitive creative industries.
    </p>
  </div>



     {/* Mentors Section */}
<div className="max-w-6xl mx-auto px-6 space-y-24 pb-24">
  {/* 1. Ananya Panday (image right) */}
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Text */}
    <div>
      <h3 className="text-3xl font-bold">Ananya Panday</h3>
      <p className="text-red-500 italic text-xl">Celebrity Mentor, Fashion Design</p>
      <p className="mt-4 text-gray-700 leading-relaxed text-xl">
        Meet Ananya Panday, the Style Icon of NIF Global, inspiring design enthusiasts with her
        style and flair. With her vibrant personality, she embodies modernity and innovation,
        aligning perfectly with NIF Global’s commitment to pushing boundaries in world of
        design. Beyond her on-screen persona, Ananya fearlessly explores new trends, making her
        a true icon.
      </p>
      <p className="mt-3 text-xl">
        Join Ananya and NIF Global on a journey of creativity, empowerment, and
        self-expression in the realm of Design.
      </p>

      {/* Social Icons */}
      <div className="flex gap-5 mt-8 text-red-500 text-2xl">
        <a
          href="https://www.facebook.com/ananyapandayy/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/ananyapanday/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/ananyapandayy?lang=pl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <FaTwitter />
        </a>
      </div>
    </div>

    {/* Right: Image */}
    <div className="flex justify-center">
      <img
        src={ananya}
        alt="Ananya Panday"
        className="w-[380px] object-contain"
        loading="lazy"
      />
    </div>
  </div>



     {/* 2. Twinkle Khanna (image left) */}
<div className="grid md:grid-cols-2 gap-10 items-center">
  {/* Left: Image */}
  <div className="flex justify-center">
    <img
      src={twinkle}
      alt="Twinkle Khanna"
      className="w-[380px] object-contain"
      loading="lazy"
    />
  </div>

  {/* Right: Text */}
  <div>
    <h3 className="mt-10 text-3xl font-bold">Twinkle Khanna</h3>
    <p className="text-red-500 italic text-xl">Celebrity Mentor, Interior Design</p>

    <p className="mt-3 text-gray-700 leading-relaxed text-xl">
      Twinkle Khanna’s mentorship at NIF Global provides aspiring designers with invaluable
      insights from her diverse background as an author, interior designer, and former
      actress. Through mentor classes, she offers practical advice and creative solutions,
      guiding students through interior design intricacies.
    </p>

    <p className="mt-3 text-xl">
      Emphasizing sustainability, Twinkle inspires students to create beautiful spaces with
      eco-friendly materials and conscious consumption practices, fostering both and
      environmental responsibility in design.
    </p>

    {/* Social Icons */}
    <div className="flex gap-4 mt-8 text-xl text-red-500">
      <a
        href="https://www.facebook.com/TwinkleRKhanna/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/twinklerkhanna/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaInstagram />
      </a>
      <a
        href="https://x.com/mrsfunnybones?lang=en"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaTwitter />
      </a>
    </div>
  </div>
</div>

       {/* 3. Gauri Khan (image right) */}
<div className="grid md:grid-cols-2 gap-10 items-center">
  {/* Left: Text */}
  <div>
    <h3 className="mt-10 text-3xl font-bold">Gauri Khan</h3>
    <p className="text-red-500 italic text-xl">Celebrity Mentor, Interior Design</p>

    <p className="mt-3 text-gray-700 leading-relaxed text-xl">
      Discover the world of exquisite interior design with Gauri Khan, one of India’s highly
      acclaimed interior designers. Known for her sophisticated and elegant aesthetic, Mrs.
      Khan founded Gauri Khan Designs in Mumbai, establishing it as a leading brand in luxury
      interior design.
    </p>

    <p className="mt-3 text-xl">
      Her unique design philosophy combines luxurious simplicity with functionality and a
      touch of glamour, appealing to an elite clientele.
    </p>

    <p className="mt-2 text-lg font-semibold">Join Gauri Khan for live Mentor Classes</p>

    <p className="mt-2 text-xl">
      Embark on an inspiring design journey with NIF Global and join our Live Mentor classes
      held twice a year with Celebrity Mentor Gauri Khan, where she shares her insights into
      design excellence and innovation.
    </p>

    {/* Social Icons */}
    <div className="flex gap-4 mt-8 text-xl text-red-500">
      <a
        href="https://www.facebook.com/GauriKhanOfficial/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/gaurikhan/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaInstagram />
      </a>
      <a
        href="https://x.com/gaurikhan"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaTwitter />
      </a>
    </div>
  </div>

  {/* Right: Image */}
  <div className="flex justify-center">
    <img
      src={gauri}
      alt="Gauri Khan"
      className="w-[380px] object-contain"
      loading="lazy"
    />
  </div>
</div>

       {/* 4. Manish Malhotra (image left) */}
<div className="grid md:grid-cols-2 gap-10 items-center">
  {/* Left: Image */}
  <div className="flex justify-center">
    <img
      src={manish}
      alt="Manish Malhotra"
      className="w-[380px] object-contain"
      loading="lazy"
    />
  </div>

  {/* Right: Text */}
  <div>
    <h3 className="mt-10 text-3xl font-bold">Manish Malhotra</h3>
    <p className="text-red-500 italic text-xl">Chief Mentor, Fashion Design</p>
    <p className="mt-3 text-gray-700 leading-relaxed text-xl">
      Embark on your design journey with Manish Malhotra, a distinguished master known for
      his meticulous attention to detail and his remarkable ability to blend traditional
      craftsmanship with modern aesthetics. With his expansion into interior design,
      Malhotra offers a fresh perspective on creating bespoke, luxurious spaces that exude
      beauty, richness, and timeless elegance.
    </p>
    <p className="mt-2 text-xl">
      His educational experience transcends traditional design lessons, aiming to spark
      creativity and refine skills under the guidance of a renowned designer.
    </p>

    {/* Social Icons */}
    <div className="flex gap-4 mt-8 text-xl text-red-500">
      <a
        href="https://www.facebook.com/mmalhotraworld/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/manishmalhotra05/#"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaInstagram />
      </a>
      <a
        href="https://x.com/manishmalhotra"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaTwitter />
      </a>
    </div>
  </div>
</div>

{/* 5. Ashley Rebello (image right) */}
<div className="grid md:grid-cols-2 gap-10 items-center">
  {/* Left: Text */}
  <div>
    <h3 className="mt-10 text-3xl font-bold">Ashley Rebello</h3>
    <p className="text-red-500 italic text-xl">Chief Mentor, Fashion Design</p>
    <p className="mt-3 text-gray-700 text-xl leading-relaxed">
      At NIF Global, Ashley Rebello, a distinguished costume design figure, mentors aspiring
      fashion enthusiasts with his wealth of experience and keen eye for detail. Through
      personalized sessions, he shares practical advice and industry insights, empowering
      students to excel in costume design.
    </p>
    <p className="mt-3 text-xl">
      Ashley’s notable work includes Bollywood films like “Tiger 3”, “Bajrangi Bhaijaan”,
      “Sultan”, “Race 3”; styled Salman Khan for the most watched show “Bigg Boss”, fashion
      events, and celebrity styling. His mentorship fosters a supportive environment where
      students explore new ideas and push boundaries, emerging as confident designers ready
      to make their mark in fashion and entertainment.
    </p>

    {/* Social Icons */}
    <div className="flex gap-4 mt-8 text-xl text-red-500">
      <a
        href="https://www.facebook.com/iAshleyRebello/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/ashley_rebello/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaInstagram />
      </a>
      <a
        href="https://x.com/ashley_rebello1"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-700"
      >
        <FaTwitter />
      </a>
    </div>
  </div>

  {/* Right: Image */}
  <div className="flex justify-center">
    <img
      src={ashley}
      alt="Ashley Rebello"
      className="w-[380px] object-contain"
      loading="lazy"
    />
  </div>
</div>

      </div>
    </div>
  );
}
