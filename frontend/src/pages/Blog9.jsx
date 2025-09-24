

import React from 'react';
import hero from '../assets/Blog/blog9.jpg';

export default function DesignInstitute5Article() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

     

      {/* Gray header band */}
      <header className="w-full bg-gray-300">
        <div className="max-w-6xl mx-auto flex items-center gap-8 py-10 px-6">

          {/* date badge on the left */}
          <div className="flex-shrink-0 text-center text-gray-700">
            <div className="text-2xl font-extrabold">14</div>
            <div className="text-xs tracking-wider mt-1">MAR</div>
          </div>

          {/* title and meta */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">5 Reasons the Best Design Institute in Kolkata Shapes Talent</h1>
            <div className="mt-3 text-xs uppercase text-gray-600 tracking-wide">
              BY NIF LINDSAY <span className="mx-2">/</span> BLOG, FASHION DESIGNING <span className="mx-2">/</span> 0
            </div>
          </div>

        </div>
      </header>

      {/* Article content */}
      <main className="max-w-4xl mx-auto px-1 md:px-0 py-10">

        {/* Featured image */}
        <div className="mb-8 flex justify-center">
          <img src={hero} alt="5 Reasons Design Institute" className="w-full max-w-2xl object-cover" />
        </div>

        {/* Intro paragraphs */}
        <div className="text-gray-700 text-sm leading-relaxed mb-6">
          <p className="mb-4">When the time to establish your career as a design professional arises, it being the right institution matters. It's changing design culture, Kolkata has among the best design institutes. Some of the reasons the best design institution in Kolkata is the right place to begin a career as a creative professional are discussed below.</p>

          <p className="mb-6">To study in a well-known design institute in Kolkata guarantees you with quality education, industry exposure, and solid foundation in design. It is the foundation that will ground you steady in becoming a successful designer in the competitive field.</p>
        </div>

        {/* 5 reasons list */}
        <section className="mb-8">
          <ol className=" space-y-8 text-gray-800">
            <li>
              <h2 className="text-[38px] font-poppins font-extrabold mb-2">1. Developing Creativity and Innovation</h2>
              <p className="text-sm text-gray-700">The best design institute of Kolkata lays strong stress on the development of creativity and innovation. Design is not good looks; it's problem-solving creatively. At the top institutes, students are motivated to think beyond the box and cultivate their imaginative skills. The course is designed to break creative boundaries, and students get a chance to experiment and find their own voice in design.</p>
            </li>

            <li>
              <h2 className="text-[38px] font-poppins font-extrabold mb-2">2. Partnerships with Top Design Firms</h2>
              <p className="text-sm text-gray-700">The best institute in Kolkata are linked with the best design companies, providing a platform to the world. These relations yield live projects, internships, and mentoring from industry professionals. Students learn real-life lessons, enhance their talents, and understand how to tackle real design issues in the real world, making them ready for graduation and the industry.</p>
            </li>

            <li>
              <h2 className="text-[38px] font-poppins font-extrabold mb-2">3.Global and National Exposure</h2>
              <p className="text-sm text-gray-700">Design study in the best design institute in Kolkata is one of the major benefits that a student can acquire with international as well as domestic practice of design. The horizons of a student are developed by study tour, foreign exchange with foreign design colleges, and workshop. Because of global exposure, they learn about global trends and career opportunities for job internationally.</p>
            </li>

            <li>
              <h2 className="text-[38px] font-poppins font-extrabold mb-2">4. Practical Experience with Live Projects</h2>
              <p className="text-sm text-gray-700">The most effective design institute in Kolkata is pragmatic learning-oriented. The students are compelled to work on real-time projects, and they have the opportunity to apply what they learn in real-life settings. The practical learning equips them with industry-oriented skills and makes them employable. The students have an exposure of the actual world of design through group projects or internships, and they have a meaningful learning experience.</p>
            </li>

            <li>
              <h2 className="text-[38px] font-poppins font-extrabold mb-2">5. Access to High-Tech Trends and Technology</h2>
              <p className="text-sm text-gray-700">There exists a demand in the current fast-paced era to remain current with design trends and technology. Design institute Kolkata is interested in keeping students connected with the latest design tools, technologies, and methodologies. Be it 3D modeling or virtual reality, students are well-equipped to be on-the-edge professionals of the design sector.</p>
            </li>
          </ol>
        </section>

        {/* Conclusion */}
        <section className="mb-8">
          <h3 className="text-[38px] font-poppins font-extrabold mb-3">6. Shaping the Future of Design Careers</h3>
          <p className="text-sm text-gray-700">Choosing a suitable design institute is extremely important for aspiring designers. The best Fashion design institute in Kolkata has the correct balance of creative thinking, realistic exposure, and the latest trends in the industry to provide the complete education. With excellent liaison with the finest design companies and international exposure, it's the ideal place to develop your designing career and the ideal skills to succeed.</p>
        </section>


        <div className="h-20" />
      </main>

    </div>
  );
}
