import React, { useState } from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleApplyClick = () => {
    navigate("/contact");
  };

  return (
    <header className="bg-[#e94e2b] text-white text-base">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 md:px-8">
        {/* Left: Phone */}
        <p className="font-semibold hidden sm:block">Phone +91 9836796000</p>

        {/* Mobile Hamburger */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center: Admission + Apply button (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <p className="font-poppins font-semibold">
            Admission Open | Limited Seats
          </p>
          <button
            onClick={handleApplyClick}
            className="font-poppins bg-sky-600 text-white px-6 py-2 rounded-md text-sm font-bold shadow-md 
                       transform transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#e94e2b]"
          >
            Apply Now
          </button>
        </div>

        {/* Right: Social Icons */}
        <div className="hidden sm:flex gap-2">
          <a
            href="https://www.facebook.com/nifgloballindsaystreet"
            className="bg-white text-red-600 rounded-full p-2 hover:scale-110 transition"
          >
            <FaFacebookF size={12} />
          </a>
          <a
            href="https://www.youtube.com/@nifgloballindsaystreet?themeRefresh=1"
            className="bg-white text-red-600 rounded-full p-2 hover:scale-110 transition"
          >
            <FaYoutube size={12} />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=%2Fnifgloballindsaystreet%2F&source=omni_redirect"
            className="bg-white text-red-600 rounded-full p-2 hover:scale-110 transition"
          >
            <FaInstagram size={12} />
          </a>
          <a
            href="/contact"
            className="bg-white text-red-600 rounded-full p-2 hover:scale-110 transition"
          >
            <FaPhone size={12} />
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-[#d43c1e] text-white px-6 py-4 space-y-4">
          <p className="font-semibold">Phone +91 9836796000</p>

          <p className="font-poppins font-semibold">Admission Open | Limited Seats</p>
          <button
            onClick={handleApplyClick}
            className="w-full font-poppins bg-sky-600 text-white px-6 py-2 rounded-md text-sm font-bold shadow-md 
                       transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#e94e2b]"
          >
            Apply Now
          </button>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com/nifgloballindsaystreet"
              className="bg-white text-red-600 rounded-full p-2 hover:scale-110 transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://www.youtube.com/@nifgloballindsaystreet?themeRefresh=1"
              className="bg-white text-red-600 rounded-full p-2 hover:scale-110 transition"
            >
              <FaYoutube size={14} />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?next=%2Fnifgloballindsaystreet%2F&source=omni_redirect"
              className="bg-white text-red-600 rounded-full p-2 hover:scale-110 transition"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="/contact"
              className="bg-white text-red-600 rounded-full p-2 hover:scale-110 transition"
            >
              <FaPhone size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
