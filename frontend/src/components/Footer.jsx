// Footer.jsx
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import niflogo from "../assets/NIFlogo2.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="font-poppins bg-[#0f0f0f] text-white mt-auto">
      {/* Top content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
        {/* Brand + Address */}
        <div>
          <img
            src={niflogo}
            alt="NIF Global Kolkata Lindsay Street"
            className="w-36 sm:w-44 h-auto mb-6"
          />
          <address className="not-italic text-gray-200 leading-7 text-sm sm:text-base">
            3-A, Humayun Pl, New Market Area,<br />
            Dharmatala, Taltala, Kolkata, West<br />
            Bengal 700087
          </address>

          <div className="mt-5 flex items-center gap-3 text-sm sm:text-base">
            <span className="text-[#e94e2b] text-lg sm:text-xl"><FiPhone /></span>
            <a href="tel:9836796000" className="hover:text-white">9836796000</a>
          </div>

          <div className="mt-3 flex items-center gap-3 text-sm sm:text-base break-all">
            <span className="text-[#e94e2b] text-lg sm:text-xl"><HiOutlineMail /></span>
            <a href="mailto:nifglobalkolkata@gmail.com" className="hover:text-white">
              nifglobalkolkata@gmail.com
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href="https://www.facebook.com/nifgloballindsaystreet" className="w-8 h-8 grid place-items-center rounded bg-[#3b5998]">
              <FaFacebookF className="text-white text-sm" />
            </a>
            <a href="https://www.instagram.com/nifgloballindsaystreet/" className="w-8 h-8 grid place-items-center rounded bg-[#1f1f1f]">
              <FaInstagram className="text-white text-sm" />
            </a>
            <a href="https://www.youtube.com/@nifgloballindsaystreet" className="w-8 h-8 grid place-items-center rounded bg-[#ff0000]">
              <FaYoutube className="text-white text-sm" />
            </a>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-2xl sm:text-[28px] font-semibold text-[#e94e2b] mb-4 sm:mb-6">Courses</h4>
          <ul className="space-y-3 sm:space-y-5 text-gray-200 text-sm sm:text-base">
            <li><Link to="/fashion-design" onClick={scrollToTop}>Fashion Design</Link></li>
            <li><Link to="/interior-design" onClick={scrollToTop}>Interior Design</Link></li>
            <li><Link to="/retail-management" onClick={scrollToTop}>Management</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-2xl sm:text-[28px] font-semibold text-[#e94e2b] mb-4 sm:mb-6">Services</h4>
          <ul className="space-y-3 sm:space-y-5 text-gray-200 text-sm sm:text-base">
            <li><Link to="/placement" onClick={scrollToTop}>Placement</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl sm:text-[28px] font-semibold text-[#e94e2b] mb-4 sm:mb-6">Quick Links</h4>
          <ul className="space-y-3 sm:space-y-5 text-gray-200 text-sm sm:text-base">
            <li><Link to="/blog" onClick={scrollToTop}>Blog</Link></li>
            <li><Link to="/privacypolicy" onClick={scrollToTop}>Privacy Policy</Link></li>
            <li><Link to="/terms-and-condition" onClick={scrollToTop}>Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-[#e94e2b] py-3 sm:py-4">
        <p className="text-center text-white text-sm sm:text-base">
          Copyright © {new Date().getFullYear()} NIF Lindsay Street – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
