// src/pages/About.jsx
import { useRef , useState , useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { FiCheck } from "react-icons/fi";
import { BiCheckSquare } from "react-icons/bi";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import aboutbg from "../assets/New Folder/about-bg.jpg";
import studentmentor from "../assets/New Folder/studentmentor.jpg";
import mainak from "../assets/faculties/Mainak-Mitra.jpg";
import subhasish from "../assets/faculties/subhashish.jpg";
import aloke from "../assets/faculties/aloke.jpg";
import amit from "../assets/faculties/amit.jpg";
import nirmal from "../assets/faculties/nirmal.jpg";
import asadullah from "../assets/faculties/asadullah.jpg";
import sudeshna from "../assets/faculties/sudheshna.jpg";
import carlose from "../assets/faculties/carlose.jpg";
import shashank from "../assets/faculties/Shashank.jpg";
import nisha from "../assets/faculties/nisha.jpg";

export default function About() {
  const facultyRef = useRef(null);
  const navigate = useNavigate();

  const bullets = [
    "Over 30 years of Academic Excellence",
    "Affordable Fee Structure",
    "State-of-the-Art Infrastructure",
    "Located in the Heart of the City",
    "Industry Recognition: NSDC and Skill India‑certified courses and UGC‑approved degree programs.",
    "PG Facilities: PG facilities available in the same building that houses the institute. Located at the heart of the city with easy communication availability to airports, stations and bus‑stops.",
    "Global Exposure: Get exposure to global Fashion Shows – NYFW, LFW, DFW & Lakmé Fashion Week. Showcase your work at the global stage and gain recognition.",
    "Celebrity Mentorship: Get special mentorships from our celebrity mentors: Manish Malhotra, Twinkle Khanna, Ashley Rebello.",
    "Practical Learning: Factory visits, workshops and hands‑on experience with innovative teaching methods creating market‑ready designers.",
    "WISE: Work Integrated Skill‑based Higher Education",
    "Accomplished Faculties",
    "Global Collaborations: Residential programs in New York, London and Dubai. Access to online courses from London.",
    "Celebrity endorsements: Manish Malhotra, Twinkle Khanna, Ashley Rebello, Ananya Pandey & Gauri Khan endorsing us.",
    "Industry‑Mapped Syllabus",
    "TOMORROW MAKERS: Individual Fashion Shows",
    "STYLE DIRECTION: Interior Design Exhibition",
    "Lifetime Placement Assistance",
    "In‑house placement opportunities.",
    "7500+ Successful Placement Record",
    "Support Services: Placement assistance, financial aid, expert faculty, guest lectures, and top‑notch facilities.",
  ];

  const steps = [
    "Promoting holistic student growth and self‑evaluation through diverse programs, student support services, and engaging activities.",
    "Empowering students with direct entry to international platforms and showcasing their creativity.",
    "Enhance the creative thinking of student designers for their academic and professional growth.",
    "Nurture students to be industry‑ready with comprehensive design knowledge.",
    "Blending theory with hands‑on practice to nurture student’s skills for real‑world success.",
  ];

  const faculties = [
    { name: "Dr. Mainak Mitra", role: "Academic Head", img: mainak },
    { name: "Subhasish Samajpati", role: "Head of Dept, CAD", img: subhasish },
    { name: "Aloke Banerjee", role: "Faculty, Visual Design FD", img: aloke },
    { name: "Mr. Amit Sinha", role: "Faculty‑CAD, Marketing and Social Media Co‑ordinator", img: amit },
    { name: "Mr. Nirmal Chandra Hembrom", role: "Head of Dept, Fashion", img: nirmal },
    { name: "Sk. Asadullah", role: "Faculty, Pattern Making", img: asadullah },
    { name: "Mrs. Sudheshna Sil", role: "Faculty, Textile Design", img: sudeshna },
    { name: "Mr. Carlose Bishal Rodrigues", role: "Head of Dept., Interior Design", img: carlose },
    { name: "Mr. Shashank Sutradhar", role: "Faculty, Interior Design", img: shashank},
    { name: "Ms. Nisha Singh", role: "Faculty, Fashion Design", img: nisha},



  ];

const [currentIndex, setCurrentIndex] = useState(0);

const scrollFaculties = (dir) => {
  const el = facultyRef.current;
  if (!el) return;
  const card = el.querySelector("div > div"); // first card
  const amount = card ? card.clientWidth + 16 : 250; // card width + gap
  el.scrollBy({ left: dir * amount, behavior: "smooth" });
  
  // update active index
  setCurrentIndex((prev) =>
    Math.max(0, Math.min(faculties.length - 1, prev + dir))
  );
};

const scrollToIndex = (index) => {
  const el = facultyRef.current;
  if (!el) return;
  const card = el.querySelector("div > div");
  const amount = card ? card.clientWidth + 16 : 250;
  el.scrollTo({ left: amount * index, behavior: "smooth" });
  setCurrentIndex(index);
};

  return (
   <section className="font-poppins">
  {/* Top banner */}
  <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[295px]">
    <img
      src={aboutbg} // replace with your image
      alt="About NIF Global"
      className="w-full h-full object-cover [object-position:30%_1%]"
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-center leading-snug">
        About Us
      </h1>
    </div>
  </div>



  {/* Content container */}
<div className="max-w-7xl mx-auto mt-6 sm:mt-8 px-3 sm:px-6 py-6 sm:py-10">
  {/* Heading + blue subhead */}
  <h2 className="text-xl sm:text-[28px] md:text-[35px] font-semibold text-[#e94e2b] text-center sm:text-left leading-snug">
    About NIF Global Lindsay Street
  </h2>
  <p className="text-[14.5px] sm:text-[17px] mt-3 sm:mt-4 text-sky-500 font-bold text-center sm:text-left leading-relaxed">
    Welcome to NIF Global Lindsay Street – New York Institute of Fashion, where ambition meets expertise.
  </p>


  {/* Two-column: left text, right image */}
<div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
  {/* LEFT text */}
  <div className="md:col-span-6 text-gray-700 text-[15px] sm:text-[17px] leading-7 md:-ml-9 px-2 sm:px-0">
    <p className="mb-4">
      NIF (New York Institute of Fashion) Global Lindsay Street is one of the most
      prestigious and premium design institute with a legacy of over 30 years. We offer
      one of the best Fashion Design and Interior Design courses in Eastern India. Located
      in the heart of Kolkata, New Market, it is the best design institute with multiple
      years of experience, multiple possibilities and multiple career options.
    </p>
    <p className="mb-4">
      We at NIF Global Lindsay Street believe that everyone is creative, and our
      purpose is to channelize that creativity to create innovative designers. With this
      thought in mind we at NIF teach Fashion and Interior design to give wings to
      your passion and creativity. This way you choose your career into a field that
      you love doing and if you do what you love, you are capable of revolutionizing
      the Fashion & Interior Design worlds. With the aid of renowned faculties,
      nationally and internationally acclaimed experts, cutting edge-labs and
      teaching methods and global exposure, be ready to create ripples in the design
      world.
    </p>
  </div>

  {/* RIGHT image */}
  <div className="md:col-span-5 justify-self-center md:justify-self-end w-full md:-mr-25 mt-6 md:mt-0">
    <div className="w-full max-w-[360px] sm:max-w-[420px] overflow-hidden bg-white ring-1 ring-black/10 shadow-sm mx-auto md:mx-0">
      <img
        src={studentmentor} /* replace */
        alt="Students & mentors"
        className="w-full h-[240px] sm:h-[300px] md:h-[380px] object-cover"
      />
    </div>
  </div>
</div>


       {/* Nurturing professionals */}
<div className="mt-9 px-4 sm:px-6">
  <h3 className="text-2xl sm:text-3xl md:text-[35px] font-semibold text-center md:text-left md:-ml-9 leading-snug">
    At <span className="text-[#e94e2b]">NIF Global</span> Lindsay Street, we are nurturing design professionals!
  </h3>

  <p className="mt-4 text-gray-700 text-[15px] sm:text-[17px] leading-6 sm:leading-7 text-center md:text-left md:-ml-9">
    NIF Global Lindsay Street offers career-oriented courses on Fashion Design and Interior
    Design, Management and Beauty Courses in Kolkata. With a legacy of academic excellence
    for over 30 years, we are committed to provide seamless, top-quality, industry-related,
    job-oriented design knowledge to our students. With the belief that everyone is creative,
    we harness their creativity, teach them the skills and inspire these fresh talents to make
    their marks in this world with knowledge and innovation. As a result, we have a strong alumni
    of more than ten thousand students, who are making us proud.
  </p>

  <p className="mt-3 text-gray-700 text-[15px] sm:text-[17px] leading-6 sm:leading-7 text-center md:text-left md:-ml-9">
    <span className="font-bold text-[#e94e2b]">“Earn while you learn”,</span> is a lucrative offer for our deserving students,
    where we offer Appointment Letters to students when they enroll for our courses. This is the
    only institute with in-house placement opportunities.
  </p>

  <p className="mt-3 text-gray-700 text-[15px] sm:text-[17px] leading-6 sm:leading-7 text-center md:text-left md:-ml-9">
    We also take pride in offering <span className="font-semibold">lifetime placement assistance</span> to budding designers,
    guiding them into the international job market, and helping them excel in fashion and interior design.
    Transform into a skilled Fashion/Interior Designer at NIF Global Lindsay Street with accomplished
    faculty, an industry-oriented syllabus, and world class celebrity mentors.
  </p>


{/* What makes NIF best */}
<div className="mt-13 px-4 sm:px-6">
  <h3 className="text-[22px] sm:text-[26px] md:text-[35px] font-semibold text-center md:text-left md:-ml-9 leading-snug">
    What makes <span className="text-[#e94e2b]">NIF Global</span> Lindsay Street the best Design institute?
  </h3>

  <ul className="mt-5 space-y-4 sm:space-y-3">
    {bullets.map((b, i) => (
      <li
        key={i}
        className="flex items-start gap-2 sm:gap-3 text-[15px] sm:text-[17px] text-gray-800 leading-6 sm:leading-7 text-left md:-ml-9"
      >
        <span className="mt-[4px] sm:mt-[6px] text-[#e94e2b] flex-shrink-0">
          <BiCheckSquare className="text-red-500 text-xl sm:text-2xl -mt-0.5" />
        </span>
        <span
          dangerouslySetInnerHTML={{
            __html: b
              .replace(/Industry Recognition/i, "<strong class='font-bold'>Industry Recognition</strong>")
              .replace(/PG Facilities/i, "<strong class='font-bold'>PG Facilities</strong>")
              .replace(/Global Exposure/i, "<strong class='font-bold'>Global Exposure</strong>")
              .replace(/Celebrity Mentorship/i, "<strong class='font-bold'>Celebrity Mentorship</strong>")
              .replace(/Practical Learning/i, "<strong class='font-bold'>Practical Learning</strong>")
              .replace(/WISE/i, "<strong class='font-bold'>WISE</strong>")
              .replace(/Global Collaborations/i, "<strong class='font-bold'>Global Collaborations</strong>")
              .replace(/Celebrity endorsements/i, "<strong class='font-bold'>Celebrity endorsements</strong>")
              .replace(/TOMORROW MAKERS/i, "<strong class='font-bold'>TOMORROW MAKERS</strong>")
              .replace(/STYLE DIRECTION/i, "<strong class='font-bold'>STYLE DIRECTION</strong>")
              .replace(/Support Services/i, "<strong class='font-bold'>Support Services</strong>")
          }}
        />
      </li>
    ))}
  </ul>
</div>


    {/* Mission */}
<div className="mt-14 px-4 sm:px-6">
  <h3 className="text-[22px] sm:text-[26px] md:text-[35px] font-semibold text-center md:text-left md:-ml-9 leading-snug">
    Our <span className="text-[#e94e2b]">Mission</span>
  </h3>
  <p className="mt-3 text-[15px] sm:text-[17px] text-gray-700 leading-6 sm:leading-7 text-center md:text-left md:-ml-9">
    We aim to provide top-notch courses in Fashion/Interior Design to prepare our student designers
    for the vast & dynamic design industry. We nurture creativity and empower student designers with
    essential knowledge, enabling them to shape the future of the design world.
  </p>
</div>

{/* Steps */}
<div className="mt-8 px-4 sm:px-6">
  <h4 className="text-[20px] sm:text-[22px] md:text-[35px] font-semibold text-center md:text-left md:-ml-9 leading-snug">
    Steps to achieve <span className="text-[#e94e2b]">Our Mission</span>
  </h4>
  <ul className="mt-4 space-y-4 sm:space-y-3">
    {steps.map((s, i) => (
      <li
        key={i}
        className="flex items-start gap-2 sm:gap-3 text-[15px] sm:text-[17px] text-gray-800 leading-6 sm:leading-7 text-left md:-ml-9"
      >
        <span className="mt-[4px] sm:mt-[6px] text-[#e94e2b] flex-shrink-0">
          <BiCheckSquare className="text-red-500 text-xl sm:text-2xl -mt-0.5" />
        </span>
        <span>{s}</span>
      </li>
    ))}
  </ul>
</div>

{/* Faculties strip (manual swipe with arrow + dot buttons) */}
<div className="mt-14 relative px-4 sm:px-6">
  <h3 className="text-[22px] sm:text-[26px] md:text-[35px] font-extrabold text-center">
    Our <span className="text-[#e94e2b]">Faculties</span>
  </h3>

  {/* Horizontal track */}
  <div
    ref={facultyRef}
    className="overflow-x-auto md:overflow-x-hidden scroll-smooth mt-8 -mx-4 sm:-mx-6"
  >
    <div className="flex gap-5 sm:gap-8 md:gap-10 min-w-max">
      {faculties.map((f, i) => (
        <div
          key={i}
          onClick={() => navigate("/ourfaculties")}
          className="relative bg-[#f6f6f6] w-[180px] sm:w-[200px] md:w-[240px] shrink-0
                     min-h-[420px] sm:min-h-[460px] md:min-h-[500px]
                     shadow-[0_5px_13px_rgba(0,0,0,0.1)]
                     ring-1 ring-black/5 cursor-pointer hover:shadow-lg 
                     transition-shadow duration-300 rounded-xl flex flex-col items-center"
        >
          {/* bottom red accent */}
          <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e94e2b] rounded-b-xl" />

          {/* faculty image */}
          <img
            src={f.img}
            alt={f.name}
            className="mt-6 max-h-[200px] sm:max-h-[230px] md:max-h-[260px] w-auto object-contain"
            onError={(e) =>
              (e.currentTarget.src = "https://via.placeholder.com/200x260")
            }
          />

          {/* content */}
          <div className="mt-6 sm:mt-7 md:mt-8 px-2 sm:px-3 text-center">
            <h5 className="font-bold text-[16px] sm:text-[17px] md:text-[18px] leading-tight">
              {f.name}
            </h5>
            <p className="mt-2 sm:mt-3 text-[#e94e2b] text-xs sm:text-sm leading-snug">
              {f.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Left Button (hide on mobile) */}
  <button
    onClick={() => scrollFaculties(-1)}
    className="hidden md:grid absolute -left-6 lg:-left-10 top-1/2 -translate-y-1/2 bg-white border border-gray-700 w-9 h-9 place-items-center rounded-sm shadow-sm"
  >
    <IoChevronBackOutline className="text-black text-lg" />
  </button>

  {/* Right Button (hide on mobile) */}
  <button
    onClick={() => scrollFaculties(1)}
    className="hidden md:grid absolute -right-6 lg:-right-10 top-1/2 -translate-y-1/2 bg-white border border-gray-700 w-9 h-9 place-items-center rounded-sm shadow-sm"
  >
    <IoChevronForwardOutline className="text-black text-lg" />
  </button>

  {/* Dot Buttons */}
<div className="flex justify-center gap-2 mt-5">
  {faculties.slice(0, 3).map((_, i) => (
    <button
      key={i}
      onClick={() => scrollToIndex(i)}
      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
        currentIndex === i ? "bg-[#e94e2b]" : "bg-gray-300"
      }`}
    />
  ))}
</div>

</div>
</div>
      </div>
    </section>
  );
}

/* Add once (e.g., globals.css):
.no-scrollbar::-webkit-scrollbar{display:none;}
.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none;}
*/
