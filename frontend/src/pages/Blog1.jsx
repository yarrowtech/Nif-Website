// src/pages/Blog1.jsx
import React from "react";
import coverpic from "../assets/Blog/vlog-banner-01.webp";
import blogsecondpic from "../assets/Blog/blog1-second.webp";

export default function Blog1() {
  return (
    <div className="font-poppins text-gray-900">
      {/* ========== HERO ========== */}
      <header className="relative">
        <div className="h-[340px] md:h-[780px] w-full">
          <img
            src={coverpic}
            alt="Eco-friendly interior design hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
              
             
            </div>
          </div>
        </div>
      </header>

      {/* ========== TITLE + BYLINE ========== */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 className="text-[28px] md:text-[55px] font-extrabold text-center tracking-tight mt-10">
          Eco-Friendly Interior Design: Creating Sustainable Spaces
        </h2>
        <p className="text-center text-gray-600 mt-3">
          By <span className="font-semibold">NIF Global Lindsay Street</span>
        </p>
      </section>

      {/* ========== BODY CONTENT ========== */}
      <main className="max-w-[980px] mx-auto px-10 md:px-0 leading-relaxed">
        {/* intro */}
        <p className="mt-8 text-[14px] -mx-20 text-gray-800">
          In a time when global warming, resource exhaustion, and pollution are rapidly becoming humongous issues, what
          happens in your own home is more critical than ever. Interior design is no longer a matter of looks—it’s a
          matter of stewardship. Welcome to green interior design, where beauty and sustainability meet and every single
          detail of your space has an impact on the environment in some way.
        </p>
        <p className="mt-5 text-[14px] -mx-20 text-gray-800">
          Whether you’re thinking about renovating your room to your dream destination or fantasizing about designing whole
          houses by pursuing interior designing or just curious about the field, committing to sustainable interior design
          is where you should begin to create spaces that are not only match your pinterest moodboard but are practical
          but also gentle on the earth.
        </p>

        {/* section */}
        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-bold">What Is Eco-Friendly Interior Design?</h3>
        <p className="mt-3 -mx-20 text-[14px]">
          Green interior design is the practice of creating and designing stunning homes without hurting the planet. It’s
          how you choose materials, furniture, and design elements that are made in a way that is sustainable,
          non-toxic and uses energy-efficient resources. It’s designing for your loved ones’ health and the health of
          the earth.
        </p>
        <p className="mt-3 -mx-20 text-[14px]">
          This is more than recycling materials. It is applied to everything from the paint you use in your living room to
          the lighting that beautifies your space, so that everything is working together to make your home healthier and
          the world healthier.
        </p>

        {/* section */}
        <h3 className="mt-12 text-[24px] md:text-[40px] -mx-20 font-bold">Why Choose Sustainable Interior Design?</h3>
        <p className="mt-3 -mx-20 text-[14px]">
          Sustainable interior design has long-term advantages that go beyond its environmental benefits. Here’s why more
          families are going green:
        </p>
        <ul className="mt-4 -mx-20 text-[14px] list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Healthier Living Environment:</span> Traditional furniture and products have
            toxic chemicals like formaldehyde and VOCs. Eco-friendly alternatives provide cleaner indoor air quality.
          </li>
          <li>
            <span className="font-semibold">Long-Term Cost Savings:</span> Sustainable materials and efficient appliances
            last longer and reduce utility bills.
          </li>
          <li>
            <span className="font-semibold">One-of-a-Kind Style:</span> Upcycled, recycled, and handmade pieces give your
            space unique personality.
          </li>
          <li>
            <span className="font-semibold">Assisting Local Communities:</span> Ethical home decor options often support
            local businesses and craftspeople.
          </li>
        </ul>

        {/* section */}
        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-bold">Key Principles of Eco-Friendly Interior Design</h3>
        <ul className="mt-4 -mx-20 text-[14px] list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Natural &amp; Eco-Friendly Materials:</span> Choose reclaimed wood, cork,
            bamboo, stone, lime paint, and other biodegradable materials.
          </li>
          <li>
            <span className="font-semibold">Quality Over Quantity:</span> Invest in well-crafted pieces that last.
          </li>
          <li>
            <span className="font-semibold">Embrace Secondhand &amp; Vintage:</span> Antiques and thrift finds reduce waste
            and add character.
          </li>
          <li>
            <span className="font-semibold">Energy Efficiency:</span> LEDs, smart devices, and efficient appliances save
            energy and money.
          </li>
        </ul>

        {/* images row like screenshot */}
        <div className="mt-8 grid grid-cols-1 mx-80 align-middle justify-center">
          <img
            src={blogsecondpic}
            alt="Eco home 1"
            className="w-80 rounded-md object-cover"
          />
        </div>

        {/* section */}
        <h3 className="mt-13 text-[24px] md:text-[40px] -mx-20 font-bold">
          How to Make Your Home More Eco-Friendly
        </h3>
        <ul className="mt-4 -mx-20 text-[14px] list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Maximize Natural Light:</span> Use sheer curtains, mirrors and light walls to
            reduce dependence on artificial light.
          </li>
          <li>
            <span className="font-semibold">Refinish over Replace:</span> Pick low-VOC paints and finishes when refreshing
            old furniture.
          </li>
          <li>
            <span className="font-semibold">Add Plants:</span> Plants purify the air and bring life to your space with
            minimal effort.
          </li>
          <li>
            <span className="font-semibold">Go for Eco-friendly Textiles:</span> Choose organic cotton, hemp, linen and
            natural fibers.
          </li>
          <li>
            <span className="font-semibold">Repurpose &amp; Upcycle:</span> Give existing items a second life to avoid
            waste.
          </li>
          <li>
            <span className="font-semibold">Invest in Quality Window Treatments:</span> Good insulation reduces energy
            spend and keeps you comfy year-round.
          </li>
        </ul>

        {/* section */}
        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-bold">
          Why Sustainable Interior Design Is the Future
        </h3>
        <p className="mt-3 -mx-20 text-[14px]">
          The interior design industry is rapidly changing towards sustainability due to both environmental consciousness
          and consumer pressure. Consciousness about climate change has made eco-friendly choices the norm and not an
          exception. Younger generations are leading with sustainability in all buying decisions, including interior design.
        </p>

        {/* section */}
        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-bold">
          Learn Eco-Friendly Design at NIF Global Kolkata
        </h3>
        <p className="mt-3 -mx-20 text-[14px]">
          For those passionate about sustainable design, NIF Global Kolkata is the best interior design institute in
          Kolkata, offering top interior design courses, expert faculty, and hands-on experience. Enroll today to turn your
          passion into a successful interior design career.
        </p>

        {/* Conclusion */}
        <h3 className="mt-10 text-[22px] md:text-[40px] -mx-20 font-bold">CONCLUSION</h3>
        <p className="mt-3 -mx-20 text-[14px]">
          Real families all over the world are greening their households with eco-friendly design choices day by day. From
          apartments with bamboo furniture to lofts with reclaimed wood, green interior design proves that beautiful design
          and caring for the planet are not mutually exclusive.
        </p>
<div className="mt-10 flex gap-2">
            <span className="h-[2.5px] w-100 rounded-full mx-100 justify-center bg-[#e94e2b]" />
          </div>
        {/* Read more link with accent lines like screenshot */}
        <div className="mt-6">
            
          <a href="#" className="mt-20 -mx-20 text-[14px] font-semibold hover:underline">
            Read more: Plus-Size Fashion Trends: Embracing Diversity in Fashion
          </a>
          
        </div>

        <div className="mt-10 flex gap-2">
            <span className="h-[2.5px] w-100 rounded-full mx-100 justify-center bg-[#e94e2b]" />
          </div>

        {/* ========== FAQ (accordion) ========== */}
        <section className="mt-12 -mx-20">
          <h3 className="text-[22px] md:text-[40px] font-bold">FAQ-</h3>

          <details className="group mt-4 border border-gray-200 rounded-md">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">What is eco-friendly interior design?</span>
              <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">
              Green interior design creates beautiful houses with sustainable materials, energy-efficient solutions, and
              non-toxic products that are healthy for people and the planet.
            </div>
          </details>

          <details className="group mt-3 border border-gray-200 rounded-md">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">How can I make my home more eco-friendly?</span>
              <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">
              Start with small transitions like changing bulbs to LEDs, adding indoor plants, repainting with low-VOC
              paints, and using secondhand or antique furniture.
            </div>
          </details>

          <details className="group mt-3 border border-gray-200 rounded-md">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">Which materials are best for sustainable interior design?</span>
              <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">
              Natural and biodegradable materials like bamboo, cork, reclaimed wood, organic cotton, hemp, linen, and lime
              plaster are durable, long-lasting, and healthier than chemical substitutes.
            </div>
          </details>
        </section>

        <div className="h-14" />
      </main>
    </div>
  );
}
