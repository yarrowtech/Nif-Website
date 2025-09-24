// src/pages/Blog2.jsx
import React from "react";
import blog2cover from "../assets/Blog/blog2-cover.webp";
import blog2secondpic from "../assets/Blog/blog2-second.webp";
export default function Blog2() {
  return (
    <div className="font-poppins text-gray-900">
      {/* ================= HERO ================= */}
      <header className="relative">
        <div className="h-[340px] md:h-[750px] w-full">
          <img
            src={blog2cover}
            alt="Plus-size fashion hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">

             
            </div>
          </div>
        </div>
      </header>

      {/* ============ TITLE + BYLINE ============ */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8">
        <h2 className="text-[28px] md:text-[50px] font-bold mx-10 text-center tracking-tight mt-10">
          Plus-Size Fashion Trends: Embracing <span>Diversity in Fashion</span>
        </h2>
        <p className="text-center text-gray-600 mt-3">
          By <span className="font-semibold">NIF Global Lindsay Street</span>
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="max-w-[980px] mx-auto px-4 md:px-0 leading-relaxed">
        {/* Intro */}
        <p className="mt-8 text-[14px] -mx-20  text-gray-600">
          Fashion is changing, and diversity is at the forefront. Maybe the most radical change is the plus-size fashion
          trend phenomenon, where fashion is no longer size-specific. Each body is unique and different. The world now
          applauds bodies of every shape by highlighting fashion that makes you feel good, empowers you, and celebrates
          diversity. Plus-size fashion is finally understanding that beauty is of every shape, and with that in mind, an
          exciting plus-size fashion trend has broken out, with styles as bold and varied as the women who wear them.
        </p>
        <p className="mt-5 text-[14px] -mx-20 text-gray-600">
          From haute couture to streetwear, plus-size styling tips on styling are in the limelight. Fashion-forward designs,
          flawless finishes, and size-positive fashion is the new everyday statement. Fashion shows it is not exclusion — it
          is you!
        </p>

        {/* Sections */}
        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-semibold">Size-Inclusive Collections</h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Fashion companies are now embracing inclusive collections beyond token drops. Plus-size fashion-trend collections
          include the same style, quality, and quantity as straight sizes, giving plus-size individuals the same access to
          fashion inspired by the runway and seasonal must-haves. Designers are prioritising comfort and fit, making sure
          that every piece respects the body it will be covering. Big box retailers and luxury brands are now expanding
          their size ranges in order to be more inclusive, demonstrating that fashion is for all.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Customers like Universal Standard, Good American, and Eloquii are leading the charge in size inclusivity. They’re
          offering 4X and higher sizes, breaking down barriers and opening the retail environment to a more inclusive
          future.
        </p>

        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-semibold">Prints, Colours, and Bold Statements</h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Blackout is no longer an option. Contemporary plus-size styling tips promote playful prints, bold colours, and
          dramatic silhouettes. Florals or animal prints, bodycon or statement sleeves, the message is the same: express
          yourself to the fullest and stylishly, regardless of size. Contemporary plus-size fashion trends are about bold
          experimentalism—breathtaking colours, mindful materials, and show-stopping embellishments are on the agenda.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Accessories also have a significant role. Bold fashion accessories, broad belts, and eye-catching bags finish the
          look, allowing plus-size fashion lovers to develop full, dramatic fashion outfits.
        </p>

        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-semibold">Sustainable Plus-Size Fashion is Here</h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Sustainability for plus-size fashion trends is no longer an afterthought. Plus, fashionistas now dress
          fashionably and stay in tune with values of sustainability, which goes on to show that slow fashion is now only
          for all but for all everywhere. Labels like Girlfriend Collective and Loud Bodies are only some of the names of
          labels that are embracing inclusivity and eco-responsibility at the same time.
        </p>
       {/* images row like screenshot */}
        <div className="mt-8 grid grid-cols-1 mx-80 align-middle justify-center">
          <img
            src={blog2secondpic}
            alt="Eco home 1"
            className="w-80 rounded-md object-cover"
          />
        </div>
        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-semibold">Shapewear and Layering Revolution</h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Contemporary shapewear is all about shaping and not hiding. New material and silhouettes now hug natural curves
          softly. Shapewear is becoming a confidence booster and not a constrictive garment, allowing women to dress up
          without restraint and feel confident. Layering is also a styling technique in plus-size fashion trends, with longline
          coats, kimonos, and co-ords providing a shape without restriction. Coordinated light layers, practical outerwear,
          and clever layering to achieve a shape that is flattering for everyone.
        </p>

        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-semibold">Celebrity and Influencer-Driven Trends</h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Plus-size influencers and plus-size celebrities have revolutionised fashion norms. From Lizzo to Ashley Graham,
          their bold fashion influences millions. They demonstrate to plus-size women that they can own their look, wear
          leather pants, and fitted jeans with confidence and poise. These influencers turn traditional rules on their heads,
          promote body positivity, and demonstrate to the world that fashion does not have a size. Instagram and TikTok
          have been instrumental in giving these voices a platform, making these styles iconic across the world.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Their fashion resonates with actual people, and trends are more accessible and tangible. Red carpet appearances,
          endorsement contracts, and viral fashion clip videos are all driving cultural affirmation and admiration.
        </p>

        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-semibold">Plus-Size in High Fashion and Runway Shows</h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          The runway is no longer size only. The world’s finest designers and fashion weeks are now featuring plus-size
          models in couture and editorial fashion. This revolution not only enhances beauty standards but also compels the
          industry to re-imagine glamour. Fashion brands such as Christian Siriano, Chromat, and Savage x Fenty are setting
          new standards for representation. Plus-size fashion trends no longer are on periphery—it’s centre stage now.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          This evolution has also motivated potential models and designers themselves, showing that ability and vision do
          not depend on size. Editorial spreads, magazine covers, and fashion weeks are more inclusive than ever.
        </p>

        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-semibold">Customisation is the Future</h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Personalisation is changing the face of plus-size styling tips. From made-to-measure sleeve lengths to tailor-made
          necklines and hem lengths, fashion-savvy consumers crave clothes made to order for them. Brands with
          customisable options are leading the way in creating body-positive experiences. From reimagining sleeve lengths,
          choosing fabric styles, or altering the bust and hip areas, customisation makes fashion not just fit but also flatter.
          The era of “one size does not fit all”—in a literal word.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          On-demand production systems and 3D body scanning are becoming increasingly popular, delivering better fit, less
          waste, and more contented consumers.
        </p>

        <h3 className="mt-10 text-[24px] md:text-[40px] -mx-20 font-semibold">
          Why NIF Global Is The Best Fashion Design Institute In Kolkata
        </h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          For aspiring designers who want to create a more inclusive world, NIF Global Kolkata leads the way. A design
          education trailblazer, NIF prides itself on size, inclusivity, body positivity, and world-readiness. Students are
          encouraged to think outside the box of conventional standards and design for all bodies. With top-notch faculty,
          hands-on training, and a focus on the evolving demands of the industry, it’s the ideal catwalk to a career in
          fashion that’s built on inclusivity and innovation.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Situated in the heart of Kolkata’s fashion capital, the institute offers unmatched exposure, industry
          collaborations, and mentorship that allow emerging designers to design inclusive fashion.
        </p>

        {/* Conclusion */}
        <h3 className="mt-10 text-[22px] md:text-[40px] -mx-20 font-semibold">Conclusion</h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Plus-size fashion isn’t about hiding behind clothes anymore—it’s about embracing your personality, confidence, and
          curves with confidence. Whether it’s size-inclusive collections in fashion, bold prints, and smart layering, fashion
          is not about sizing, but being you. The trick is to wear what makes you powerful, comfortable, and yourself. Clothes
          should fit you, and not vice versa.
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


        {/* ================= FAQ ================= */}
        <section className="mt-12 -mx-20">
          <h3 className="text-[22px] md:text-[40px]  font-semibold">FAQ-</h3>

          <details className="group mt-4 border border-gray-200  rounded-md">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">What types of dresses flatter plus-size figures?</span>
              <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">
              A-line dresses, wrap dresses, fit-and-flare shapes, and belted dresses will be flattering over the curves and
              provide a complementary fit across plus figures. Jersey, cotton-blend, and structured knits are fabrics that
              offer shape and comfort.
            </div>
          </details>

          <details className="group mt-3 border border-gray-200 rounded-md">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">How can I dress stylishly as a plus-size woman?</span>
              <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">
              Prioritise fit, play with layers and texture, say yes to colour, and don’t fear trends. The most fabulous
              accessory of all is confidence! Invest in basics that fit, layer statement pieces, and stay on top of plus-size
              fashion trends to keep your closet fresh.
            </div>
          </details>

          <details className="group mt-3 border border-gray-200 rounded-md">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">Are crop tops suitable for plus-size women?</span>
              <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">
              Absolutely! Wear them with high-waisted skirts or jeans for a symmetrical, trendy vibe. Crop tops can be
              really flattering and self-assured. Select versions with structure or movement to serve your own comfort and
              style.
            </div>
          </details>
        </section>

        <div className="h-14" />
      </main>
    </div>
  );
}
