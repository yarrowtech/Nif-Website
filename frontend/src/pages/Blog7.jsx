
import React from 'react';
import hero from '../assets/Blog/blog7.jpg';

export default function Blog7() {
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
        <div className="max-w-6xl mx-auto flex items-center gap-8 py-8 px-6">

          {/* date badge on the left */}
          <div className="flex-shrink-0 text-center text-gray-700">
            <div className="text-2xl font-extrabold">24</div>
            <div className="text-xs tracking-wider mt-1">MAR</div>
          </div>

          {/* title and meta */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">Interior Designing Institutes in Kolkata: Learn & Choose</h1>
            <div className="mt-3 text-xs uppercase text-gray-600 tracking-wide">
              BY NIF LINDSAY <span className="mx-2">/</span> BLOG <span className="mx-2">/</span> 0
            </div>
          </div>

        </div>
      </header>

      {/* Article content */}
      <main className="max-w-4xl mx-auto px-6 md:px-0 py-10">

        {/* Featured image */}
        <div className="mb-8 flex justify-center">
          <img src={hero} alt="Interior Designing Institutes" className="w-full max-w-2xl object-cover" />
        </div>

        {/* Intro paragraph */}
        <div className="text-gray-700 text-sm leading-relaxed mb-6">
          <p>
            The process of interior designing is a skill of blending creativity and functionality to re-create spaces. As the city of Kolkata is growing in terms of size, the profession is in massive demand for skilled designers. Therefore, if you are searching for an interior designing course in Kolkata, this blog will give you important information regarding the profession growth, how to choose the best institute, and what you can expect from the course. Let's proceed!
          </p>
        </div>

        {/* How to choose heading */}
        <section className="mb-6">
          <h2 className="md:text-[30px] font-poppins  font-extrabold mb-3">How to choose the right Interior designing institute in Kolkata?</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            It is a tough task to choose the appropriate interior designing institute in Kolkata, given the numerous institutes there are. A little priority thinking, however, and you are making the right choice.
          </p>

          <ol className="space-y-6 text-gray-800">
            <li><h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Accreditation and Reputation</h3>
              <p className="text-sm text-gray-700 mt-2">Make sure that the institute is accredited and recognized by recognized agencies in business. A seasoned institute offers quality, industry-related training and keeps a good relationship with the design community.</p>
            </li>

            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Experienced Faculty</h3>
              <p className="text-sm text-gray-700 mt-2">The level of education that you acquire primarily relies on the experience and expertise of the faculty. Search for institutes providing faculty with actual design experience.</p>
            </li>

            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Course Curriculum and Specializations</h3>
              <p className="text-sm text-gray-700 mt-2">Examine the curriculum to determine if it includes significant subjects like design theory, space planning, color theory, furniture design, and computer-aided design software. Furthermore, verify if the institution offers specializations relevant to your career goals, such as sustainable design or commercial interior design.</p>
            </li>

            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Internship and Placement Opportunities</h3>
              <p className="text-sm text-gray-700 mt-2">A good institute will give you hands-on training in the form of placements and internships with top design firms. These provide an opportunity to put to practice what you have learned in life.</p>
            </li>

            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Infrastructure and Resources</h3>
              <p className="text-sm text-gray-700 mt-2">The best institutes possess modern classrooms, design studios, and software tool laboratories for state-of-the-art tools. Ensure that the institute offers such facilities to aid your learning.</p>
            </li>

          </ol>
        </section>

        {/* What will you learn heading */}
        <section className="mb-6">
          <h2 className="md:text-[30px] font-poppins  font-extrabold mb-3">What Will You Learn During an Interior designing course in Kolkata?</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">An Interior design course in Kolkata provides a wide variety of subjects that are intended to develop your design skills, technical skills, and your imagination. Here is what you will be learning:</p>

          <ol className=" space-y-6 text-gray-800">
            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Design Principles and Theory</h3>
              <p className="text-sm text-gray-700 mt-2">You begin with the fundamentals of interior design, and those are the principles of design, space planning, and how color and light establish spaces that are lovely.</p>
            </li>

            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Material and Furniture Design</h3>
              <p className="text-sm text-gray-700 mt-2">Understand various materials that are applied in interior design, ranging from carpet to floor finishes, and how to choose the most suitable material for every project. You will also learn furniture design and how it is incorporated into the space.</p>
            </li>

            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Computer–Aided Design (CAD)</h3>
              <p className="text-sm text-gray-700 mt-2">Interior designers should be conversant with computer applications such as AutoCAD, SketchUp, and 3D modeling software. This will enable you to create floor plans, elevations, and 3D views.</p>
            </li>

            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Sustainability and Green Design</h3>
              <p className="text-sm text-gray-700 mt-2">You will learn how to create environmentally responsible and energy-conserving spaces as sustainability is a primary focus. This includes using sustainable materials, avoiding waste, and incorporating green technologies.</p>
            </li>

            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Trends and Innovation</h3>
              <p className="text-sm text-gray-700 mt-2">There is an emphasis on remaining current with the latest interior design trends, ranging from minimalist interior design to intelligent homes, and it is a major part of the curriculum.</p>
            </li>

            <li>
              <h3 className="md:text-[38px] font-poppins  font-extrabold text-lg">Project Management</h3>
              <p className="text-sm text-gray-700 mt-2">Get to project manage an interior design project from beginning brief to last completion, from budgeting and client management through to contractors and suppliers management.</p>
            </li>
          </ol>

          <p className="text-gray-700 text-sm leading-relaxed mt-6">Interior designing course have a bright future, and the future promises great career opportunities to professionals. With proper selection of Interior design diploma institute in Kolkata, you are guaranteed to get great training and can be a top interior designer in Kolkata. Proper knowledge of the design principles, practical exposure, and knowledge of latest industry trends will make you a successful top interior designer in Kolkata.</p>
        </section>


        {/* Leave a reply form */}
        <div className="mt-10 border rounded-md bg-gray-50 p-6">
          <h3 className="text-center text-lg font-semibold mb-4">LEAVE A REPLY</h3>
          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-700 block mb-2">Comment*</label>
              <textarea className="w-full border border-gray-300 rounded p-3 h-32 text-sm" placeholder="Comment"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input className="col-span-1 md:col-span-1 border border-gray-300 rounded p-2 text-sm" type="text" placeholder="Name*" />
              <input className="col-span-1 md:col-span-1 border border-gray-300 rounded p-2 text-sm" type="email" placeholder="Email*" />
              <input className="col-span-1 md:col-span-1 border border-gray-300 rounded p-2 text-sm" type="text" placeholder="Website" />
            </div>

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="save" />
              <label htmlFor="save" className="text-gray-600">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>

            <div>
              <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded font-medium">Post Comment</button>
            </div>
          </form>
        </div>

        <div className="h-20" />
      </main>

    </div>
  );
}
