/*
TerraFutura-Blog-React.jsx

Updated: Removed the white card container. Content is now directly on the page with spacing.
*/

import React, { useState } from 'react';
import hero from '../assets/Blog/blog4.webp';
import blog4second from '../assets/Blog/blog4-second.webp';

export default function Blog4() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: 'How can I make my home more eco-friendly?',
      a: 'Some of the methods in which you can green your home include installing energy-efficient appliances, using sustainable materials, increasing insulation, installing renewable energy systems, and conserving water. Start with a small change like installing LED lights and programmable thermostats, and add bigger changes like solar panels and green materials gradually.'
    },
    {
      q: 'What are sustainable living spaces?',
      a: 'A sustainable dwelling is a space that is planned to reduce its impact on the environment while optimising human health and comfort. Sustainable living spaces utilise renewable energy, green materials, water-saving systems, and intelligent technologies to design homes that promote planetary and human well-being.'
    },
    {
      q: 'What materials are used in sustainable interior design?',
      a: 'Sustainable living interiors often use reclaimed wood, bamboo, cork, recycled metal, low-VOC paints, and certified sustainably harvested textiles. Designers prioritise durability and materials that require less energy to produce.'
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent "></div>

        

          

          <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-20">
           
          </div>
        </div>
      </header>

      {/* MAIN ARTICLE */}
      <main className="max-w-4xl mx-auto px-6 md:px-0 mt-10">
        {/* Title block */}
        <header className="text-center">
          <h1 className="font-poppins text-2xl md:text-[50px] -mx-40 font-bold mb-2">Terra Futura: Sustainable Living Spaces of the Future</h1>
          <div className="text-sm text-gray-500 mb-6">By <span className="font-medium">NIF Global Lindsay Street</span></div>
          
        </header>
        <p className="mt-8 -mx-30 text-[15px] text-gray-600">Are you still one of those who believe it’s time to ditch the traditional structure and designs of our homes and create something innovative, eco-friendly and Pinterest worthy? Today, along with technological advancement, we have created an arena of sustainable living spaces that would blow your mind and change your perception towards technology. Now, eco-friendly would not be limited to dull colours and limited options, but an entire ecospace that’s just built as per your desire!.</p>

        <section className="mt-6 text-gray-700 space-y-6">
          <div>
            <h3 className="font-poppins text-[40px] -mx-30 font-semibold mb-2">What Is Terra Futura?</h3>
            <p className="leading-relaxed -mx-30 text-[16px] text-gray-600">Terra Futura is a perfect blend of eco-friendly homes, AI technology and design innovations to give you the house you’ve always admired. This forward-thinking concept reimagines how we inhabit our homes, focusing on creating spaces that not only reduce environmental impact but actively contribute to ecological restoration.</p>
          </div>

          <div>
            <h3 className=" font-poppins font-semibold mb-2 -mx-30 text-[38px] ">What Are Sustainable Living Spaces?</h3>
            <p className="leading-relaxed -mx-30 text-[14px] text-gray-600">Sustainable living spaces are designed to minimise environmental impact and promote eco-friendliness. These homes work on renewable energy, eco-friendly materials and waste minimisation without compromising on aesthetics and quality at all.</p>
          </div>

          <div>
            <h3 className="font-poppins text-[38px] -mx-30  mb-3 ">Key Principles of Terra Futura Design</h3>

            <ol className="list-decimal list-inside space-y-4 -mx-30 text-[14px] text-gray-800">
              <li className='text-[30px] '>
                <strong className='text-[30px]'>Regenerative Material Systems</strong>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">Terra Futura sustainable living spaces use materials that get better over time. They’re living walls that clean the air and self-heal.</p>
              </li>
              <li className='text-[30px] '>
                <strong className='text-[30px]'>Integrated Energy Ecosystems</strong>
                <p className="mt-2 text-sm leading-relaxed  text-gray-600">These homes are composed of integrated energy systems like geothermal control, solar harvesting, and smart-grid integration to not only be net-zero but also to produce surplus electricity.</p>
              </li>
              <li className='text-[30px] '>
                <strong className='text-[30px]'>Adaptive Water Management</strong>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">Closed-loop water systems harvest, clean and recycle water from numerous sources including greywater recycling and atmospheric water harvesting.</p>
              </li>
              <li className='text-[30px] '>
                <strong className='text-[30px]'>Biophilic Integration</strong>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">Homes naturally incorporate living elements throughout the interior—green walls, indoor ecosystems and living roofs to improve human wellbeing.</p>
              </li>
              <li className='text-[30px] '>
                <strong className='text-[30px]'>Smart Responsiveness</strong>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">Sensors and learning systems optimise resource use, predict needs, and improve efficiency while maintaining comfort and aesthetics.</p>
              </li>
            </ol>
          </div>

          <div className="flex justify-center">
            <img src={blog4second} alt="balanced-terrace" className="w-56 md:w-72 h-44 md:h-75 object-cover rounded-md shadow-md" />
          </div>

          <div>
            <h3 className="font-poppins text-[38px] -mx-30 font-semibold text-black mb-2">Why Terra Futura Matters</h3>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px] ">The immediacy of global resource depletion and climate change makes Terra Futura’s sustainable communities not only desirable but essential. Terra Futura provides a pragmatic solution to reversing resource stress while creating healthy, resilient living spaces.</p>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px] ">These new sustainable living spaces solve a number of great issues at once. They conserve energy, eliminate waste, enhance air and water quality, and build healthful dwelling places. By illustrating that luxury and sustainability do and can exist together, Terra Futura makes it possible to implement sustainable concepts on a mass scale across every level of the economy.</p>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px] ">In addition, Terra Futura sustainable communities are also living laboratories, providing useful data on sustainable living technologies and practices. This data is used to further develop and evolve sustainable design concepts, generating a positive value feedback loop beneficial to the entire industry.</p>
          </div>

          <div>
            <h3 className="font-poppins text-[38px] -mx-30 text-black font-semibold mb-2">How NIF Global Is Shaping the Future of Interior Design in Kolkata</h3>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px] ">NIF Global Lindsay Street has been instrumental in bringing Terra Futura concepts to interior design in Kolkata—adopting up-to-date environmental technologies and combining them with regional craft and materials.</p>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px] ">The company’s projects demonstrate the way sustainable communities can honour local building traditions and adopt up-to-date environmental technologies. From naturally controlling temperature through traditional courtyards to employing locally-sourced bamboo and clay in new and creative ways, NIF Global demonstrates that sustainability and cultural integrity are mutually compatible.</p>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px] ">NIF Global’s commitment to living spaces that are sustainable extends beyond individual projects to education in society and industrial transformation. In workshops, collaborations with local artisans, and associations with environmental groups, they’re creating a sustainable design community in Kolkata that can be replicated in other cities.</p>
          </div>

          <div>
            <h3 className="text-[38px] -mx-30 font-poppins font-semibold mb-2">Future Trends in Sustainable Living Spaces</h3>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px] ">The evolution of eco-friendly homes keeps surging forward because of technological advancements and growing environmental awareness. The latest trends are the use of lab-grown materials, such as biofabrication leather and wood alternatives, that eliminate environmental impact without sacrificing aesthetics.</p>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px] ">Micro-ecosystem integration is another area in which sustainable dwelling environments integrate small-scale aquaponics, vertical farms, and pollinator habitats within the domestic space. These components turn homes into productive environments that foster food security and biodiversity.</p>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px] ">Sophisticated automation and learning machines will render eco-friendly living areas more intuitive and efficient. Predictive systems will be in a position to predict needs, optimise the use of resources, and even communicate with neighbouring houses to share resources and energy.</p>
          </div>

          <div>
            <h3 className="text-[38px] -mx-30 font-poppins font-semibold mb-2">Tips to Make Your Home More Sustainable Today</h3>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px]">Conserve water by installing low-flow fixtures, fixing leaks promptly, and collecting rainwater to use in the garden. Choose furniture and accessories produced from renewable materials like reclaimed wood, bamboo, or recycled plastic.</p>
            <p className="mt-4 leading-relaxed -mx-30 text-[15px]">Energy efficiency retrofitting has the potential to make old buildings more livable, sustainable environments. Add insulation, seal leaks and cracks, and add renewable energy systems like solar panels or small wind systems. Even small solar chargers for electronics can begin your transition to renewable energy.</p>
          </div>

          <div className=" mt-10  -mx-30  mb-2 ">
            <h3 className="text-[38px] font-poppins font-bold">CONCLUSION</h3>
            <p className="mt-3 leading-relaxed -text-[15px]">Terra Futura is a guide to a future in which our houses contribute to healing the earth while providing comfort and beauty. Sustainable living spaces offer glimmers of hope and practical solutions to creating a better world, one house at a time.</p>
          </div>

        </section>

        {/* FAQ */}
        <section className="mt-8">
          <h3 className="font-bold text-[38px] -mx-30 font-poppins">FAQ–</h3>
          <div className="mt-4 space-y-3 -mx-30">
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

      </main>

    </div>
  );
}
