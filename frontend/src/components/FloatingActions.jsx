// FloatingActions.jsx
import React, { useEffect, useState } from "react";
import {  FaChevronUp } from "react-icons/fa";
import { useNavigate, useInRouterContext } from "react-router-dom";
import whatsapp from "../assets/icons/whatsapp.png"; // <-- your image path"";

export default function FloatingActions({ whatsappUrl }) {
  const inRouter = useInRouterContext();
  const navigate = inRouter ? useNavigate() : null;
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goContact = () => {
    if (inRouter) navigate("/contact");
    else window.location.href = "/contact";
  };

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  


  return (
    <>
      {/* Vertical Apply Now */}
      <button
        onClick={goContact}
        className="
          font-poppins fixed right-0 top-[52%] -translate-y-1/2 z-50
          bg-[#e94e2b] text-center text-white font-bold
          shadow-lg hover:pointer
          rounded-md
          
          tracking-wide
        "
        style={{
            height: "150px",            // 👈 increase height
    width: "40px", 
          writingMode: "vertical-lr", // vertical text flow
          textOrientation: "mixed",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        Apply Now
      </button>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="
          fixed right-3 bottom-20 z-50
          w-14 h-14
       
         place-items-center hover:scale-105 transition
        "
      >
       <img
    src={whatsapp}  // ✅ your image path
    alt="WhatsApp"
    className="w-12 h-12 object-contain"
  />
      </a>

      {/* Scroll-to-top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed right-7 bottom-6 z-50
            w-9 h-10 
            bg-[#f3b500] text-white shadow-4xl
            grid place-items-center hover:scale-105 transition
          "
        >
          <FaChevronUp size={20} />
        </button>
      )}
    </>
  );
}
