

import React, { useState } from 'react';
import hero from '../assets/Blog/blog5.jpg';
import blog5second from '../assets/Blog/blog5-second.jpg';
import blog5third from '../assets/Blog/blog5-third.jpg';
export default function Blog5() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: 'What are the best fabrics for body-positive fashion?',
      a: 'The best fabrics combine comfort with structure. A cotton blend with 2 to 3 percent elastane offers breathability and light compression. Medium-weight, highly resilient fabrics breathe while maintaining shape. Strategic paneling can incorporate multiple fabrics to enhance fit for different body types.'
    },
    {
      q: 'How can I become a body-positive fashion designer?',
      a: 'Start by observing different body shapes and how clothing interacts with each one. Practice fitting sessions on actual bodies, seek feedback from diverse models, and consider formal education that covers inclusive patternmaking and design. Most importantly, challenge preconceived notions of beauty and design to remove constraints.'
    },
    {
      q: 'Can plus-size fashion be trendy and stylish?',
      a: 'Absolutely. The idea that particular styles "don\'t work" for bigger bodies is a misconception. Good design demonstrates how every style — color, cut, silhouette, texture, or detail — can translate into garments that are stylish and flattering across sizes.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      {/* HERO */}
      <header className="relative">
        <div
          className="w-full h-[420px] md:h-[750px] bg-center bg-cover relative"
          style={{ backgroundImage: `url(${hero})` }}
        >
          {/* dark gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent "></div>

        

         

          {/* center title at bottom of hero */}
          <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-20">
          
          </div>
        </div>
      </header>

      {/* MAIN ARTICLE */}
      <main className="max-w-5xl mx-auto px-6 md:px-0 mt-10">

        {/* Title block */}
        <header className="text-center">
          <h1 className="text-2xl md:text-[50px] -mx-20 font-poppins font-extrabold mb-2">Body-Positive Fashion: Designing for Every Body Type</h1>
          <div className="text-sm text-gray-500 mb-6">By <span className="font-medium">NIF Global Lindsay Street</span></div>
        </header>

        {/* Intro */}
        <section className="text-gray-700 leading-relaxed -mx-20 space-y-6">
          <p>
            The fashion world has traditionally catered to a very specific body shape, causing many people to feel excluded. That’s why body-positive clothes are so important: they allow people to wear whatever makes them feel beautiful. Fashion is evolving, and with that, it is creating clothes that cater to all body shapes and sizes. Fashion designers have been responsible for the change in mindset to design clothes that celebrate every body, including sizes, shapes, and forms.
          </p>

          <h3 className="text-[38px] font-poppins font-semibold ">What Is Body–Positive Fashion?</h3>
          <p>
            The idea of body-positive fashion revolves around a belief that all shapes and sizes are beautiful, and is not limiting its sizes to only be seen towards the larger end of the spectrum. Body-positive fashion has been described as a philosophy by which clothing is created based on what looks good on individual figures, rather than in the traditional sense, where clothing tries to mould people into certain shapes that don’t necessarily exist under normal circumstances.
          </p>

          {/* small centered image */}
          <div className="flex justify-center">
            <div className="w-56 md:w-72 h-44 md:h-75 overflow-hidden rounded-md">
              {/* reuse hero as a placeholder; ideally replace with runway image */}
              <img src={blog5second} alt="runway" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-sm text-gray-600 italic">“Body positivity fashion” is not just about selling larger size clothing ranges; it is looking at these items differently from when they were made on a smaller scale. This approach is focused on ensuring that designs look great on and move well with a round form by drawing inspiration from the plus-size figure itself, rather than simply modifying existing straight-size designs. By adopting entertainment design strategies, the entire ethos of the brand comes around this – empowered shaping, which makes all customers better, not just slim ones.</p>

          <h3 className="text-[38px] font-poppins font-semibold">Why Body-Positive Fashion Matters?</h3>
          <p className='text-[15px]'>
            Body positivity is more than just a social trend; it is a movement focused on breaking down the structures that dictate what is “beauty.” Body positivity trends give you the power to do what makes you comfortable and happy, and let’s be real, the body-positive trends tend to be much more comfortable than the other things we are told to wear.
          </p>
           <p className='mt-4 text-[15px]'>
           Psychological research indicates that practices of fashion, which embrace all body types, positively impact an individual’s mental well-being. When companies accept and support body diversity, there’s a strong statement made that all bodies should be visible, appreciated, and dressed up elegantly. Such validation helps in healing the adversities caused due to rigid beauty norms for decades.  
          </p>
           <p className='mt-4 text-[15px]'>
           In addition to the above, there is also a compelling rationale concerning the financial sense of adopting body-positive fashion. It is projected that the global plus-size clothing market will grow at an increasing rate. This figure simply demonstrates that adopting inclusivity is not only ethical but also economically advantageous.
          </p>
         
         
         
          <h3 className="text-[38px] font-poppins font-semibold">Key Principles of Designing for Every Body Type:</h3>
          <p>Effective body-positive fashion includes designs that are more than just different patterns. It involves careful consideration of how different bodies respond to fabrics and styles: </p>
          <ul className="list-disc list-inside ">
            <li> Grasp diverse proportions: Bodies carry weight in different ways, necessitating designs that reflect a range of silhouettes.</li>
            <li>Strategic seam placement: Strategically placed seams can support comfort and fit across body types..</li>
            <li>Fabric choice is important: Selecting fabrics with the right structure, stretch, and drape ensures that garments move harmoniously with varied bodies.</li>
            <li>Universal design features: Adjustable waistbands, thoughtful ruching, and universal closures permit a single design to fit a variety of body types.</li>
            <li>Extended size ranges with uniform styling: Selling the same designs in all sizes guarantees everyone access to the latest styles.</li>
          </ul>

          <h3 className="text-[38px] font-poppins font-semibold">Fashion Designers Leading the Body–Positive Movement:</h3>
          <p>
            Some visionary designers have led the body-positive revolution, changing the way the industry perceives inclusivity.
          </p>
          <ul className="list-disc list-inside ">
            <li>Tanya Taylor revolutionised her design process by dressing models of various sizes during the course of development, so that her bright prints and feminine shapes flatter every body.</li>
            <li>Christian Siriano broke headlines by championing body diversity on catwalks many years ago, demonstrating that high fashion is for everyone.</li>
            <li>In India, Rina Dhaka and Anavila Misra have led the way with inclusive design, celebrating diverse Indian body shapes without sacrificing cultural taste.</li>
          </ul>

          <h3 className="text-[38px] font-poppins font-semibold">What Students Learn at NIF Global Lindsay Street:</h3>
          <p>
            At NIF Global Lindsay Street, budding designers acquire niche skills in body-positive fashion, including:
          </p>
          <ol className="mx-10 list-decimal list-inside">
            <li>Thorough grasp of varied body morphologies.</li>
            <li>Sophisticated pattern-making techniques for inclusive sizes.</li>
            <li>Fabric manipulation and selection for complimentary diverse body types.</li>
            <li>Design innovation with an emphasis on aesthetics merged with functionality.</li>
            <li>Consumer psychology involving clothing and body image.</li>
          </ol>

          <h3 className="text-[38px] font-poppins font-semibold">Tips for Designing Body-Positive Fashion Collections:</h3>
          <p>
            Some body-positive principle adopters among designers:
          </p>
          <ul className="mx-10 list-disc list-inside ">
            <li>Hear your customers: fit with various models and take feedback from individuals of various body shapes.</li>
            <li>Learn proportion play: understand how visual components can balance proportions on various figures.</li>
            <li>Think movement and comfort: design for activity that people engage in, not just standing poses.</li>
            <li>Remix problem areas: redesign panels and patterning to accentuate the body’s natural form.</li>
            <li>Employ consistent terminology: create concise, objective terms to refer to fits and sizes.</li>
          </ul>

          <h3 className="text-[38px] font-poppins font-semibold">The Future of Inclusive Fashion in India:</h3>
          <p>
            India’s fashion scene is best placed for body-positive innovation. With its vibrant textile culture and varied cultural beauty standards, Indian designers are well positioned to set the world talking about inclusive design. The expanding market increasingly requires fashion that respects India’s body diversity while also embracing new ideas of draping and tailoring that suit varied shapes.
          </p>

          {/* small secondary image */}
          <div className="flex justify-center mt-4">
            <div className="w-80 h-80 overflow-hidden rounded-md">
              <img src={blog5third} alt="studio" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* A second repeated section (present in the original design) */}
          <h3 className="text-[38px] font-poppins font-semibold">The Future of Inclusive Fashion in India:</h3>
          <p>
            Celebrating the diversity of humans means transforming fashion beyond simply scaling sizes. Body-positive fashion is growing in size, and it looks like it will eventually make it possible for every person, regardless of body shape, to use fashion as a form of self-expression and confidence. Brands that understand this are not just following a fad; they are part of a more kind and inclusive fashion world that many future generations will get to enjoy.
          </p>

        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h3 className="text-[38px] -mx-20 font-bold">FAQ-</h3>
          <div className="mt-4  -mx-20 space-y-3">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-gray-100 rounded">
                <button
                  className="w-full px-4 py-3 text-left font-semibold"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  {f.q}
                </button>
                <div className={`px-4 pb-4 transition-all duration-200 ${open === idx ? 'block' : 'hidden'}`}>
                  <p className="text-gray-700">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-20" />
      </main>

    </div>
  );
}
