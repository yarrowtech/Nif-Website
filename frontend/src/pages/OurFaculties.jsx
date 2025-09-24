import React from "react";

// Import all faculty images (adjust paths as needed)
import mainak from "../assets/faculties/Mainak-Mitra.jpg";
import subhashis from "../assets/faculties/subhashish.jpg";
import aloke from "../assets/faculties/aloke.jpg";
import amit from "../assets/faculties/amit.jpg";
import nirmal from "../assets/faculties/nirmal.jpg";
import asadullah from "../assets/faculties/asadullah.jpg";
import sudheshna from "../assets/faculties/sudheshna.jpg";
import carlose from "../assets/faculties/carlose.jpg";
import shashank from "../assets/faculties/Shashank.jpg";
import nisha from "../assets/faculties/nisha.jpg";
const faculties = [
  { name: "Dr. Mainak Mitra", title: "Academic Head", img: mainak, desc: `Dr. Mainak Mitra holds a Phd in Textile Technology (CU). He is also educated in various other aspects in his field of expertise from India and abroad. He is a patron member of Textile Association of India and Institute of Engineers. Dr. Mitra has a working experience of 18 years in India and Bangladesh in brands like Casablanka, Montecarlo. He also has over 12 years of academic experience in Govt. College of Engineering and Textile Technology in apparel production textile testing. He is a visiting faculty of CU and is an invited lecturer in numerous national and international seminars. Dr. Mitra has a number of publications in National and International peer reviewed journals and also holds a patent on “Breathable Textile”.` },
  { name: "Subhashis Samajpati", title: "Head of Dept., CAD", img: subhashis, desc: `Mr. Subhashis Samajpati’s 15-year journey at NIF Global Lindsay Street, from CAD Faculty to HOD, enriched by industrial graphics, interior design, and a London School of Art course experience, is a testament to visionary leadership and unwavering dedication. Under his guidance, students have dared to dream bigger, colleagues have thrived, and the department has reached unparalleled heights. For him, this institution is more than a workplace—it’s a cherished “second home” filled with growth, memories, and inspiration.` },
  { name: "Aloke Banerjee", title: "Faculty, Visual Design FD", img: aloke, desc: `Bringing more than 10 years of experience in teaching visual design and 13 years of experience in graphic design, Mr. Aloke Banerjee is an exceptional facilitator and a graphic artist. With a degree in MBA, he has been sharing his expertise in the modern advertising and the apparel industry, Aloke blends real-world skills to prepare students to evolve with the digital world through multiple cutting-edge softwares.` },
  { name: "Mr. Amit Sinha", title: "Faculty-CAD, Marketing and Social Media Co-ordinator", img: amit, desc: `Mr. Amit Sinha has a B.Tech degree in Electronics and Communication and has a worked in the IT industry. With his creative intellect and his love for design and softwares, he started his designing career in an ad agency. He is also an MBA and has a degree in Graphic Designing from Jadavpur University. Amit is an exemplary teacher and has been guiding the students for a successful career with his design and software skills for over 20 years now. His management and marketing skills has helped the institute grow day by day. Along with teaching, Amit is an avid reader and is also involved with numerous creative projects as conceptualizer and visualiser.` },
  { name: "Mr. Nirmal Chandra Hembrom", title: "Head of Dept., Fashion", img: nirmal, desc: `Mr. Nirmal Chandra Hembram, is a Fashion Design Faculty specializing in design and pattern-making. With over 15 years of teaching experience, he holds a Bachelor's degree in Fashion and Apparel and a specialization in Leather Design from the National Institute of Fashion Technology (NIFT), Kolkata. His teaching expertise lies in designing, pattern development, and garment construction, enabling students to master both technical and creative skills essential for success in the fashion industry. Guided by the design philosophy "Simple yet fashionable," his aim is to inspire innovation and practicality in every creation.Beyond academics, he has a keen interest in technology, enjoys riding bikes, and love traveling.` },
  { name: "Sk. Asadullah", title: "Faculty, Pattern Making", img: asadullah, desc: `Sk. Asadullah is a visiting faculty teaching advanced pattern making and garment construction to our students. He is a very renowned teacher with an experience of more than 20 years. Sk. Asadullah is also associated with many other design institutes in Kolkata like NIFT, FDDI, ATDC etc. Some of his students include renowned fashion designers such as Sabyasachi Mukherjee, Deb, Anakmika Khana among many others.` },
  { name: "Mrs. Sudheshna Sil", title: "Faculty, Textile Design", img: sudheshna, desc: `Mrs. Sudeshna Sil is a textile designer and educator. She is alumni of National Institute of Design (NID) Ahmedabad, Vishva Bharati University, Santiniketan and Government College of Art and Craft, Kolkata. She is working in the textile industry, handloom and craft sectors for several years now. She is also an experienced design teacher.She is specialised in different textile techniques, surface design, product and fabric development and product merchandizing. She also has a strong expertise in visualizing new ideas and concept, colour and trend analysis, painting techniques and treatments, book Design & Documentation.` },
  { name: "Mr. Carlose Bishal Rodrigues", title: "Head of Dept., Interior Design", img: carlose, desc: `As a teacher with a passion for interior designing, Carlose strives to inspire and guide his students towards academic excellence. Outside the classroom, he enjoys reading and spending time with my family and friends. He believes that a balanced life is essential for personal growth and professional success.` },
  { name: "Mr. Shashank Sutradhar", title: "Faculty, Interior Design", img: shashank, desc: `Mr. Shashank Sutradhar has been in the field of Interior Design for 30 years along with 20 years of teaching experience. Presently, he is working as visiting faculty at various Interior Design institutes in Kolkata. He is also involved in execution of commercial projects in and around Kolkata. He is a passionate teacher and has the ability to teach complicated topics in very simple way.` },
  { name: "Ms. Nisha Singh", title: "Faculty, Fashion Design", img: nisha, desc: `Ms. Nisha Singh is an alumnus of NIF Global Lindsay Street. She specialized in Fashion Styling at the London School of Trends gaining global exposure at London and New York Fashion Weeks. She also pursued Brand Management at IIM Bangalore and holds a Postgraduate Degree in Human Rights.She is the founder of Devoiler Pvt. Ltd. and manages three labels: Nisha M Loyalka (bespoke fashion), Devoiler (ethnic menswear and kidswear), and Mudit (contemporary womenswear).` },
];
export default function OurFaculties() {
  return (
    <div className="bg-white">
  {/* Banner */}
  <div className="relative h-40 sm:h-52 bg-black flex items-center justify-center px-4">
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center">
      Our Faculties
    </h1>
  </div>

  {/* Faculties List */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 space-y-12 sm:space-y-20">
    {faculties.map((faculty, idx) => (
      <div
        key={idx}
        className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start text-center md:text-left"
      >
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={faculty.img}
            alt={faculty.name}
            className="w-56 sm:w-72 md:max-w-[340px] h-auto mx-auto md:mx-0"
          />
        </div>

        {/* Content */}
        <div className="flex-1 md:pl-10 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {faculty.name}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-red-500 font-semibold mt-1 sm:mt-2">
            {faculty.title}
          </p>
          <p className="mt-4 sm:mt-5 leading-relaxed text-base sm:text-lg md:text-xl text-gray-700 whitespace-pre-line">
            {faculty.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}