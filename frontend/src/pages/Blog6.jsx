
import React from 'react';
import hero from '../assets/Blog/blog6.jpg';

export default function Blog6() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Sticky right-side apply button */}
      <div className="fixed right-4 top-1/3 z-40">
        <div className="origin-right rotate-90">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md text-sm tracking-wide">Apply Now</button>
        </div>
      </div>

      {/* Gray header band */}
      <header className="w-full bg-gray-300">
        <div className="max-w-6xl mx-auto flex items-center gap-8 py-10 px-6">

          {/* date badge on the left */}
          <div className="flex-shrink-0 text-center text-gray-700">
            <div className="text-2xl font-extrabold">11</div>
            <div className="text-xs tracking-wider mt-1">APR</div>
          </div>

          {/* title and meta */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">Top 5 Fashion Design Institutes in Kolkata You must Know</h1>
            <div className="mt-3 text-xs uppercase text-gray-600 tracking-wide">
              BY NIF LINDSAY <span className="mx-2">/</span> BLOG, FASHION DESIGNING <span className="mx-2">/</span> 0
            </div>
          </div>

        </div>
      </header>

      {/* Article content */}
      <main className="max-w-4xl mx-auto px-6 md:px-0 py-10">

        {/* Featured image */}
        <div className="mb-8 flex justify-center">
          <img src={hero} alt="Leading 5 Fashion Design Institutes" className="w-full max-w-2xl object-cover" />
        </div>

        {/* Intro paragraph */}
        <div className="text-gray-700 text-sm leading-relaxed mb-6">
          <p>
            The city, Kolkata is home to some of the finest fashion design institutes in India, offering world class education and a platform to nurture creativity. If you’re looking to pursue a career in fashion design, Kolkata has several prestigious institutions that provide top notch training. Among these, the NIF Global Institute in Kolkata takes the lead with its unmatched curriculum and industry exposure. Let us consider the top five fashion designing colleges in Kolkata, beginning with NIF Global Institute.
          </p>
        </div>

        {/* 1 */}
        <section className="mb-6">
          <h2 className="text-lg md:text-[30px] font-poppins font-extrabold text-gray-900 mb-3">NIF Global Institute in Kolkata</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            NIF Global Kolkata, the top Fashion Design Institute in Kolkata, provides one with a cutting-edge course that is a combination of creativity and practicality, and therefore the ideal platform where one can hone one’s skills. The teaching staff of the institute is comprised of industry experts who bring real-world experience to the classroom so that the students learn not just theory but highly practical lessons that could be applied in today’s fast paced fashion industry.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            What distinguishes NIF Global is its strong association with the fashion industry? The institute conducts workshops, internship, and live projects wherein students experience things first hand and create actual worth. Fitted with modern infrastructure, like design studio and fabric labs, students are adequately equipped to try out concepts and translate imagination into reality. For students who wish to work in fashion, NIF Global Institute of Kolkata continues to be the preferred option.
          </p>
        </section>

        {/* 2 */}
        <section className="mb-6">
          <h2 className="text-lg md:text-[30px] font-poppins font-extrabold text-gray-900 mb-3">National Institute of Fashion Technology (NIFT), Kolkata</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            NIFT Kolkata boasts an enormous network of industry connections under which students can work on actual business projects and internships with the largest fashion companies. All these high levels of exposure put NIFT graduates far ahead of the competition in the highly competitive world of fashion. The institute gets the perfect mix of theory of design and practice, through which students can learn the intricacies of the fashion industry.
          </p>
        </section>

        {/* 3 */}
        <section className="mb-6">
          <h2 className="text-lg md:text-[30px] font-poppins  font-extrabold text-gray-900 mb-3">International Institute of Fashion Design (INIFD), Kolkata</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            INIFD provides variety diploma and degree programs in fashion designing for practice and upcoming students. The emphasis on skill-oriented training coupled with the new-age curriculum of INIFD puts the students well ahead of others in the fashion industry. INIFD specialization includes fashion shows, industry expert guest lectures, and national competitions, which give the students sufficient opportunities to expose their talent and be discovered.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-6">
          <h2 className="text-lg md:text-[30px] font-poppins  font-extrabold text-gray-900 mb-3">The Bhawanipur Education Society College, Kolkata</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            While it is best known for its educational courses, The Bhawanipur Education Society College also has a fashion design course that has become increasingly popular in recent times. The college offers a good balance of design theory, textile science, and fashion business management to prepare students for a well-rounded education. Its practical focus, coupled with industry interactions, prepares graduates to solve real-world fashion problems.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-8">
          <h2 className="text-lg md:text-[30px] font-poppins  font-extrabold text-gray-900 mb-3">Raffles Design International</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Raffles Design International provides a global fashion design education that includes courses that are dedicated to worldwide fashion trends and best practices that revolutionize the face of fashion. Raffles' degree and diploma courses rank high for the focus on creative thinking and innovative solutions in design. Apart from this, the organization also has periodic exhibitions and fashion shows to provide the students with an opportunity to showcase their work and interact with industry professionals.
          </p>
        </section>

        {/* Conclusion paragraph */}
        <div className="text-gray-700 text-sm leading-relaxed mb-12">
          <p>
            Kolkata has a dynamic cast of fashion design colleges that are helping shape upcoming designers. But NIF Global Institute, Kolkata is undoubtedly the best of them, providing world-class fashion designing education along with unparalleled industry exposure. Colleges provide students excellent opportunities, and hence, Kolkata is the city most appropriate for a career in fashion design. Whether it is NIF Global Kolkata or some other college, you can be assured of an excellent academic experience in fashion.
          </p>
        </div>


      </main>

    </div>
  );
}
