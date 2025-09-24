import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import niflogo from "../assets/NIFlogo2.png";
import niflogowht from "../assets/nif_logo_100_wht.png";

const linkBase = "hover:text-white/90 text-gray-200 transition";
const active = "text-[#ff4f45]";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ddRef = useRef(null);
  const loc = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
  }, [loc.pathname]);

  // Close on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (!ddRef.current) return;
      if (!ddRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <nav className="bg-[#2c2c2c] text-white sticky top-0 z-50" ref={ddRef}>
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={niflogo}
              alt="NIF Global"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
            <NavLink to="/" className={({ isActive }) => (isActive ? active : linkBase)}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? active : linkBase)}>About Us</NavLink>
            <NavLink to="/fashion-design" className={({ isActive }) => (isActive ? active : linkBase)}>Fashion Design</NavLink>
            <NavLink to="/interior-design" className={({ isActive }) => (isActive ? active : linkBase)}>Interior Design</NavLink>
            <NavLink to="/retail-management" className={({ isActive }) => (isActive ? active : linkBase)}>Retail Management</NavLink>

            {/* Explore NIF trigger */}
            <li className="relative">
              <button
                type="button"
                onClick={() => setOpen((s) => !s)}
                className={`${linkBase} inline-flex items-center gap-1`}
                aria-expanded={open}
                aria-haspopup="true"
              >
                Explore NIF
                <FaChevronDown
                  className={`text-[#ff4f45] text-[10px] transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mega menu (desktop only) */}
              <div
                className={`hidden lg:block fixed left-0 top-30 w-screen h-[450px]
                bg-[#151515] text-white/90 shadow-2xl border-t border-white/10
                origin-top transition-transform duration-200
                ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
              >
                <div className="h-1 w-full bg-[#2c2c2c]/60 rounded-t-sm" />
                <div className="max-w-7xl mx-auto px-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8">
                    {/* Col 1 */}
                    <div>
                      <h4 className="text-[#f1c40f] font-semibold mt-10 flex items-center gap-2">
                        <span className="h-2 w-2 bg-[#ff4f45] rounded-sm" />
                        FOR STUDENTS
                      </h4>
                      <ul className="mt-5 space-y-4 text-md">
                        <li><a href="/students/success-stories" className="hover:text-white">Success Stories</a></li>
                        <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
                        <li><a href="/ourfaculties" className="hover:text-white">Alumni</a></li>
                      </ul>
                    </div>
                    {/* Col 2 */}
                    <div>
                      <h4 className="text-[#f1c40f] font-semibold mt-10 flex items-center gap-2">
                        <span className="h-2 w-2 bg-[#ff4f45] rounded-sm" />
                        NIF GLOBAL LINDSAY
                      </h4>
                      <ul className="mt-5 space-y-4 text-md">
                        <li><a href="/about" className="hover:text-white">Life@Lindsay</a></li>
                        <li><a href="/gallery" className="hover:text-white">Why Choose NIF Global Lindsay Street</a></li>
                        <li><a href="/about" className="hover:text-white">Accreditation Info</a></li>
                        <li><a href="/ourmentors" className="hover:text-white">Celebrity Mentors</a></li>
                        <li><a href="/ourmentors" className="hover:text-white">Global Learning</a></li>
                        <li><a href="/ourmentors" className="hover:text-white">Brands Associated</a></li>
                      </ul>
                    </div>
                    {/* Col 3 */}
                    <div className="mt-10 flex flex-col items-center gap-4">
                      <img src={niflogowht} alt="NIF Global Lindsay" className="w-[150px]" />
                      <p className="text-white/80 leading-7 text-[16px]">
                        The Best Institute in Design Education. Embark on the transformative journey where creativity meets innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <NavLink to="/placement" className={({ isActive }) => (isActive ? active : linkBase)}>Placement</NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? active : linkBase)}>Blog</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? active : linkBase)}>Contact Us</NavLink>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white text-xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

     {/* Mobile Menu */}
<div
  className={`lg:hidden bg-[#1f1f1f] text-white px-6 py-4 font-medium text-sm transition-all duration-300 ${
    mobileOpen ? "block" : "hidden"
  }`}
>
  <ul className="flex flex-col gap-4">
    <li><NavLink to="/" className={({ isActive }) => (isActive ? active : linkBase)}>Home</NavLink></li>
    <li><NavLink to="/about" className={({ isActive }) => (isActive ? active : linkBase)}>About Us</NavLink></li>
    <li><NavLink to="/fashion-design" className={({ isActive }) => (isActive ? active : linkBase)}>Fashion Design</NavLink></li>
    <li><NavLink to="/interior-design" className={({ isActive }) => (isActive ? active : linkBase)}>Interior Design</NavLink></li>
    <li><NavLink to="/retail-management" className={({ isActive }) => (isActive ? active : linkBase)}>Retail Management</NavLink></li>
    <li><NavLink to="/placement" className={({ isActive }) => (isActive ? active : linkBase)}>Placement</NavLink></li>
    <li><NavLink to="/blog" className={({ isActive }) => (isActive ? active : linkBase)}>Blog</NavLink></li>
    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? active : linkBase)}>Contact Us</NavLink></li>
  </ul>
</div>


    </nav>
  );
}
