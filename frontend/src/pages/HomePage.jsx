import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import EnquiryForm from "../components/EnquiryForm";
import Footer from "../components/Footer";
import { BiCheckSquare } from "react-icons/bi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; 
import firstpic from "../assets/nifGlobal_homepageBanner_fashion.jpg" ;
import secondpic from "../assets/nifGlobal_homepageBanner_interior.jpg";
import thirdpic from "../assets/nifGlobal_homepageBanner_style.jpg";
import fourthpic from "../assets/brandingnifGlobal_homepageBanner_style.jpg";
import globalrunway from "../assets/global_runways.jpg";
import pixi from "../assets/brands/pixi.jpg";
import monacelli from "../assets/brands/mi.jpg";
import fdci from "../assets/brands/fdci.jpg";
import lakme from "../assets/brands/lf.jpg";
import missindia from "../assets/brands/fmi.jpg";
import dubai from "../assets/brands/dfw.jpg";
import nyfy from "../assets/brands/nfw.jpg";
import london from "../assets/brands/lfw.jpg";
import lst from "../assets/brands/lst.jpg";
import manish from "../assets/mentors/manish.jpg";
import ananya from "../assets/mentors/ananya.jpg";
import ashley from "../assets/mentors/ashley.jpg";
import gauri from "../assets/mentors/gauri.jpg";
import twinkle from "../assets/mentors/twinkle.jpg";
import g1 from "../assets/runways/gallery1.jpg";
import g2 from "../assets/runways/gallery2.jpg";
import g3 from "../assets/runways/gallery3.jpg";
import g4 from "../assets/runways/gallery4.jpg";
import g5 from "../assets/runways/gallery5.jpg";
import g6 from "../assets/runways/gallery6.jpg";
import g7 from "../assets/runways/gallery7.jpg";
import g8 from "../assets/runways/gallery8.jpg";
import g9 from "../assets/runways/gallery9.jpg";
import g10 from "../assets/runways/gallery10.jpg";
import g11 from "../assets/runways/gallery11.jpg";
import g12 from "../assets/runways/gallery12.jpg";
import g13 from "../assets/runways/gallery13.jpg";
import g14 from "../assets/runways/gallery14.jpg";
import g15 from "../assets/runways/gallery15.jpg";
import g16 from "../assets/runways/gallery16.jpg";
import g17 from "../assets/runways/gallery17.jpg";
import g18 from "../assets/runways/gallery18.jpg";
import g19 from "../assets/runways/gallery19.jpg";
import g20 from "../assets/runways/gallery20.jpg";
import alankrita from "../assets/testimonials/alankrita.jpg";
import wanya from "../assets/testimonials/wanya.jpg";
import amisha from "../assets/testimonials/amisha.jpg";
import juthika from "../assets/testimonials/juthika.jpg";
import jyoti from "../assets/testimonials/jyoti.jpg";
import manzima from "../assets/testimonials/manzima.jpg";
import namrata from "../assets/testimonials/namrata.jpg";
import nimisha from "../assets/testimonials/nimisha.jpg";
// If you intend to use the URL of that asset, use:
// import brochure from "/Brochure/NIF-GLOBAL-lINDSAY-STREET.pdf?url"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade , FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

 const brands = [pixi, monacelli, fdci, lakme, missindia, dubai, nyfy, london, lst];
const mentors = [
  {
    name: "Manish ",
    title:"Malhotra",
    role: "Chief Mentor, Fashion Design",
    img: manish,
    socials: {
      facebook: "https://www.facebook.com/mmalhotraworld/",
      instagram: "https://www.instagram.com/manishmalhotra05/#",
      twitter: "https://x.com/manishmalhotra",
    },
  },
  {
    name: "Ananya ",
    title:"Panday",
    role: "The Style Icon",
    img: ananya,
    socials: {
      facebook: "https://www.facebook.com/ananyapandayy/",
      instagram: "https://www.instagram.com/ananyapanday/?hl=en",
      twitter: "https://x.com/ananyapandayy?lang=pl",
    },
  },
  {
    name: "Ashley",
    title:"Rebello",
    role: "Celebrity Mentor, Fashion Design",
    img: ashley,
    socials: {
      facebook: "https://www.facebook.com/iAshleyRebello/",
      instagram: "https://www.instagram.com/ashley_rebello/?hl=en",
      twitter: "https://x.com/ashley_rebello1",
    },
  },
  {
    name: "Gauri ",
     title:"Khan",
    role: "Celebrity Mentor, Interior Design",
    img: gauri,
    socials: {
      facebook: "https://www.facebook.com/GauriKhanOfficial/",
      instagram: "https://www.instagram.com/gaurikhan/?hl=en",
      twitter: "https://x.com/gaurikhan",
    },
  },
  {
    name: "Twinkle",
     title:" Khanna",
    role: "Celebrity Mentor, Interior Design",
    img: twinkle,
    socials: {
      facebook: "https://www.facebook.com/TwinkleRKhanna/",
      instagram: "https://www.instagram.com/twinklerkhanna/?hl=en",
      twitter: "https://x.com/mrsfunnybones?lang=en",
    },
  },
];


const LazyImage = ({ src, alt, className }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

 
  return (
    <div ref={ref} className="flex justify-center items-center w-full h-full">
      {visible ? (
        <img
          src={src}
          alt={alt}
          decoding="async"
          fetchPriority="low"
          className={className}
        />
      ) : (
        // Placeholder same size as parent container
        <div className="w-full h-full rounded-full bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};





export default function HomePage() {

   const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  
 const TESTIMONIALS = [
    {
      text:
        "As a student and a part of NIF Global Lindsay Street, it was a great experience to have such co-operative and supporting teachers. They offer different activities like art competitions, exhibitions, fashion shows, avant-garde projects to think out of the academic things which helped me to become more enthusiastic as a student.",
      name: "Alankrita Ghosh",
      img: alankrita,
    },
    {
      text:
        "Extremely thankful to the amazing faculties of NIF Global Lindsay Street for always guiding us and organizing events and competition. All faculty members, staff members and students across various batches create a very comfortable environment and promote learning and growth. It was really a great environment.",
      name: "Wanya Haider",
      img: wanya,
    },
    {
      text:
        "NIF Global Lindsay Street has been a major contributor in the development of my personality. I am thankful to all my faculties & mentors for not only delivering classroom lessons but also being the pillars of learning and for giving me the opportunity to enhance my skills and making me call myself a proud “Fashion Designer.”",
      name: "Amisha Gupta",
      img: amisha,
    },
    {
      text:
        "Looking back, I can confidently say that my time at NIF Global was truly transformative. The institute not only nurtured my talent but also prepared me to face the dynamic world of fashion with passion and determination. I will always cherish the experiences, learnings and memories I gained during this remarkable journey.",
      name: "Juthika Burman",
      img: juthika,
    },
    {
      text:
        "My journey into fashion started way before I joined the institute. Back in class 8, I already knew I wanted to do something in fashion designing. I used to spend hours sketching costumes, making dresses and jewelleries for my dolls. It was such a fun and creative outlet, and that’s what inspired me to take up this course.",
      name: "Jyoti Lath",
      img: jyoti,
    },
    {
      text:
        "NIF Global Lindsay Street has given me the chance to showcase my skills in Fashion Design every detail was taught in order to create exceptional designs. I am really grateful and blessed to have such experiences. Because of this institute, I am now a successful designer and doing what I love doing. Thank you, NIF Global Lindsay Street.",
      name: "Manzima Biswas",
      img: manzima,
    },
    {
      text:
        "I thank Global Lindsay Street for facilitating such a positive learning environment, great market surveys, project handling, site visits and material knowledge. Because of the environment and the positive atmosphere, I could master all the technical skill and the software skills required for my field.",
      name: "Namrata Chugani",
      img: namrata,
    },
    {
      text:
        "NIF Global Kolkata Lindsay Street is a great institute with amazing teachers who helped me to grew my personality and confidence. Today I am able to tackle any kind of client as a entrepreneurs .I am grateful to all teachers of NIF Global Kolkata Lindsay Street who helped me to be a Fashion Designer and it was a pleasure to be a part of this great institute.",
      name: "Nimisha Agarwal",
      img: nimisha,
    },
  ];
 const pages = Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }, (_, k) =>
    TESTIMONIALS.slice(k * 3, k * 3 + 3)
  );

  // state for paging + dragging
  const [page, setPage] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);

  // measure viewport width in px
  const wrapRef = useRef(null);
  const startXRef = useRef(0);
  const [wrapW, setWrapW] = useState(0);

  useEffect(() => {
    const measure = () => setWrapW(wrapRef.current?.offsetWidth || 0);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const start = (x) => {
    setDragging(true);
    startXRef.current = x;
    setDragX(0);
  };
  const move = (x) => {
    if (!dragging) return;
    setDragX(x - startXRef.current);
  };
  const end = () => {
    if (!dragging) return;
    const threshold = Math.min(120, wrapW * 0.12); // ~12% of viewport (cap 120px)
    let next = page;
    if (dragX <= -threshold) next = clamp(page + 1, 0, pages.length - 1);
    if (dragX >= threshold) next = clamp(page - 1, 0, pages.length - 1);
    setPage(next);
    setDragging(false);
    setDragX(0);
  };

  const onTouchStart = (e) => start(e.touches[0].clientX);
  const onTouchMove  = (e) => move(e.touches[0].clientX);
  const onTouchEnd   = end;

  const onMouseDown  = (e) => { e.preventDefault(); start(e.clientX); };
  const onMouseMove  = (e) => move(e.clientX);
  const onMouseUp    = end;
  const onMouseLeave = end;

  // translate in PX (one page = wrapW px)
  const translatePx = -(page * wrapW) + (dragging ? dragX : 0);


  const images = [ g1, g2, g3 ,g4 , g5 , g6 , g7 , g8 , g9 , g10 , g11 , g12 , g13 , g14  ,g15, g16 , g17 , g18 , g19 , g20 ];

    const [visibleCount, setVisibleCount] = useState(8); // show 8 images initially

  const handleLoadMore = () => {
    setVisibleCount(images.length); // show all when clicked
  };
  return (
    <div className="font-sans text-gray-800">
    {/* Hero Section */}
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh]">
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 2500, // 2.5s fade duration
        disableOnInteraction: false,
      }}
      loop={true}
      allowTouchMove={true} // ✅ enables swipe on mobile
      speed={1000} // fade speed in ms
      className="w-full h-full"
    >
      <SwiperSlide>
        <img
          src={fourthpic}
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={thirdpic}
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={secondpic}
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={firstpic}
          alt="Slide 4"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  </section>

   {/* About Section */}
<section className="py-5 px-4 text-left mx-2">
  <h1 className="font-poppins text-2xl md:text-4xl font-bold text-gray-900 mb-6">
    Best Fashion and Interior{" "}
    <span className="text-red-600">Design Institute in Kolkata</span>
  </h1>
  <h2 className="font-poppins text-sm md:text-lg text-gray-700 leading-relaxed">
    NIF Global Lindsay is the top fashion and interior design institute in Kolkata, 
    West Bengal, which provides best diploma and degree designing course with placement 
    supports. Contact us today, we give students great opportunities to see iconic 
    landmarks, learn from the industry's top professionals, and receive a firsthand look 
    at how things really run in the world of fashion.
  </h2>
</section>
{/* Why Choose Section */}
<section className="py-10 px-4 md:px-8 bg-white">
  <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
    {/* Left Side: Text */}
    <div>
      <h2 className="font-poppins text-2xl md:text-4xl font-bold mb-6">
        Why Choose <span className="text-red-600">NIF Global Kolkata?</span>
      </h2>

      <ul className="space-y-6 text-gray-700 text-sm md:text-lg">
        <li className="flex items-start gap-3">
          <BiCheckSquare className="text-red-500 mt-1 text-2xl md:text-4xl" />
          <p>
            <span className="font-poppins font-bold">Global Runways:</span>{" "}
            Showcase your talent on international platforms, including
            prestigious fashion weeks and global events.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <BiCheckSquare className="text-red-500 mt-1 text-2xl md:text-3xl" />
          <p>
            <span className="font-poppins font-bold">International Mentors:</span>{" "}
            Learn from top industry professionals and renowned global designers
            who guide you toward excellence.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <BiCheckSquare className="text-red-500 mt-1 text-2xl md:text-3xl" />
          <p>
            <span className="font-poppins font-bold">State-of-the-Art Infrastructure:</span>{" "}
            Work in world-class labs, design studios, and innovation hubs
            equipped with cutting-edge technology.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <BiCheckSquare className="text-red-500 mt-1 text-2xl md:text-3xl" />
          <p>
            <span className="font-poppins font-bold">Global Exposure:</span>{" "}
            1. Experience a 1-month stay program in London with workshops and internships. <br />
            2. Participate in a residential program in Dubai, offering hands-on learning 
            with global industry leaders and exposure to the dynamic Middle Eastern fashion market.
          </p>
        </li>
      </ul>

      
    </div>

    {/* Right Side: Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src={globalrunway}
        alt="Fashion Runway"
        className="w-full max-w-sm md:max-w-lg rounded-lg object-cover"
      />
    </div>
  </div>

  {/* Text Blocks */}
  <p className="py-6 md:py-10 px-2 md:px-15 text-sm md:text-lg text-gray-800 leading-relaxed">
    NIF Global Lindsay Street is just an institution; it’s your gateway to becoming a leader in
    fashion, art, and design on a global scale. Unleash Your{" "}
    <span className="font-bold">Creativity, Shape Your Career,</span> where{" "}
    <span className="font-bold">Design, Beauty, and Management</span> Come Together!
  </p>

  <p className="px-2 md:px-15 text-sm md:text-lg text-gray-800 leading-relaxed">
    Discover the fusion of creativity and innovation at the best design institute in Kolkata, 
    where you can transform your passion into a career. With our best design courses in Kolkata, 
    NIF Global Lindsay Street offers hands-on learning and industry expertise. Join us and shape 
    your future in the world of design!
  </p>
  {/* ✅ Explore button moved here below left side bullets */}
      <div className="flex justify-start mt-8">
        <Link to="/gallery">
          <button className="flex items-center mx-20 px-6 md:px-9 py-2 bg-red-600 text-white font-semibold gap-2 hover:bg-red-700 transition">
            Explore <span className="text-lg">›</span>
          </button>
        </Link>
      </div>
</section>


    {/* Brand Section */}
<section className="mt-20 py-10 bg-[#f1f3f5]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop={true}
      freeMode={true} // smooth infinite scroll
      speed={6000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      slidesPerView={6}
      spaceBetween={12}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 },   // 📱 small phones
        480: { slidesPerView: 3, spaceBetween: 12 },   // 📱 larger phones
        768: { slidesPerView: 4, spaceBetween: 12 },   // 📱 tablets
        1024: { slidesPerView: 5, spaceBetween: 14 },  // 💻 laptops
        1280: { slidesPerView: 6, spaceBetween: 16 },  // 🖥 desktops
      }}
      className="ease-linear"
    >
      {brands.concat(brands).map((src, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white border border-gray-200 rounded-md shadow-sm aspect-square flex items-center justify-center overflow-hidden">
            <img
              src={src}
              alt={`brand-${i}`}
              className="w-3/4 md:w-full h-3/4 md:h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>





     {/* Mentors */}
<section className="py-16 px-4 sm:px-6 lg:px-12">
  {/* Heading */}
  <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-center mb-4">
    Learn <span className="text-[#e94e2b]">from the Mentors</span>
  </h2>
  <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-16 text-base sm:text-lg">
    Our mentors offer invaluable industry insights and guidance, empowering
    students to thrive in their pursuits and reach their fullest potential.
  </p>

  {/* Mentor Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:gap-10 justify-items-center">
    {mentors.map((mentor, i) => (
      <div
        key={i}
        className="p-6 sm:p-8 bg-white rounded-lg shadow-md hover:scale-105 transition flex flex-col items-center w-full max-w-[280px] min-h-[480px] sm:min-h-[540px]"
      >
        {/* Circle + Image */}
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-full">
          <div className="absolute inset-0 rounded-full bg-[#e94e2b]"></div>
          <LazyImage
            src={mentor.img}
            alt={mentor.name}
            effect="blur"
            className="w-full h-full object-cover object-top relative z-10 transform translate-y-2"
          />
        </div>

        <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-center">
          {mentor.name}
        </h3>
        <h4 className="font-poppins font-medium text-lg sm:text-2xl text-center">
          {mentor.title}
        </h4>
        <div className="w-10 sm:w-12 h-1 bg-[#e94e2b] mx-auto mt-3"></div>
        <p className="font-poppins text-gray-700 mt-2 text-sm sm:text-base text-center">
          {mentor.role}
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-5 mt-6 sm:mt-8 text-[#e94e2b] text-lg">
          {mentor.socials?.facebook && (
            <a
              href={mentor.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer hover:text-red-700" />
            </a>
          )}
          {mentor.socials?.instagram && (
            <a
              href={mentor.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-red-700" />
            </a>
          )}
          {mentor.socials?.twitter && (
            <a
              href={mentor.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="cursor-pointer hover:text-red-700" />
            </a>
          )}
        </div>
      </div>
    ))}
  </div>

  {/* Brochure Button */}
  <div className="flex justify-center py-10 sm:py-14 px-4">
    <a
  href="/Brochure/NIF-GLOBAL-lINDSAY-STREET.pdf?url"
      download="NIF-GLOBAL-LINDSAY-STREET.pdf"
      className="font-poppins flex items-center px-6 sm:px-7 py-2 sm:py-3 bg-[#e94e2b] text-white font-semibold gap-2 hover:bg-red-700 transition text-sm sm:text-base"
    >
      Download Brochure
    </a>
  </div>
</section>


{/* Testimonials */}
<section className="py-8 px-4 sm:px-6 md:px-12 bg-white -mt-16">
  <h2 className="font-poppins text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-12">
    Student’s <span className="text-red-600">Testimonials</span>
  </h2>

  {/* Swipe viewport */}
  <div
    ref={wrapRef}
    className="relative overflow-hidden max-w-6xl mx-auto select-none"
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
    onMouseDown={onMouseDown}
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUp}
    onMouseLeave={onMouseLeave}
  >
    {/* Track */}
    <div
      className="flex"
      style={{
        width: wrapW ? `${wrapW * pages.length}px` : undefined,
        transform: `translate3d(${translatePx}px, 0, 0)`,
        transition: dragging ? "none" : "transform 300ms ease",
      }}
    >
      {pages.map((chunk, slideIdx) => (
        <div
          key={slideIdx}
          className="shrink-0 w-full"
          style={{ width: wrapW || "100%" }} // each slide = viewport width
        >
          {/* Grid: 1 card per row on mobile, 3 per row on md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
            {chunk.map((item, i) => (
              <div key={`${slideIdx}-${i}`} className="relative flex flex-col items-center">
                {/* Card */}
                <div className="font-poppins w-full h-[380px] sm:h-[420px] md:h-[480px] bg-[#401313] text-white p-6 sm:p-8 rounded-lg shadow-md text-center flex flex-col justify-start">
                  <RiDoubleQuotesL className="text-[#e94e2b] text-5xl sm:text-6xl mb-3 sm:mb-4 mx-auto" />
                  <p className="leading-relaxed text-sm sm:text-base">{item.text}</p>
                </div>

                {/* Avatar overlapping bottom edge */}
                <div className="-mt-6 z-20">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-4 ring-white shadow-xl"
                  />
                </div>

                {/* Name */}
                <h4 className="mt-3 sm:mt-4 text-center font-bold text-base sm:text-lg text-gray-900">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Dots */}
  <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
    {pages.map((_, i) => (
      <button
        key={i}
        onClick={() => setPage(i)}
        className={`w-3 h-3 rounded-full ${i === page ? "bg-red-500" : "bg-gray-300"}`}
        aria-label={`Go to page ${i + 1}`}
      />
    ))}
  </div>
</section>




   {/* Gallery */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
          Global Runways
        </h2>

        {/* Responsive masonry grid */}
        <div className="columns-1 sm:columns-2 md:columns-4 gap-2 space-y-3">
          {images.slice(0, visibleCount).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Runway ${i + 1}`}
              onClick={() => openLightbox(i)}
              className="w-full h-auto object-cover hover:opacity-90 transition rounded-lg cursor-pointer"
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < images.length && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-[#e94e2b] text-white font-semibold hover:bg-[#c63c1f] transition rounded"
            >
              Load More
            </button>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-2xl sm:text-3xl"
              onClick={closeLightbox}
            >
              <FaTimes />
            </button>

            {/* Image */}
            <img
              src={images[currentIndex]}
              alt={`Full Runway ${currentIndex + 1}`}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
            />

            {/* Left Button */}
            <button
              onClick={showPrev}
              className="absolute left-5 text-white text-3xl sm:text-4xl p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80"
            >
              <FaChevronLeft />
            </button>

            {/* Right Button */}
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