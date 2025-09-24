// src/pages/Blog3.jsx
import React from "react";
import blog3cover from "../assets/Blog/blog3-cover.png";
import blog3second from "../assets/Blog/blog3-second.png";

export default function Blog3() {
  return (
    <div className="font-poppins text-gray-900">
      {/* ================= HERO ================= */}
      <header className="relative">
        <div className="h-[340px] md:h-[750px] w-full">
          <img
            src={blog3cover}
            alt="Team using laptop and tablet"
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
        <h2 className="text-[28px] md:text-[50px] font-extrabold text-center tracking-tight mt-10">
          Integrating AI into Design Processes: A Step-by-Step Guide
        </h2>
        <p className="text-center text-gray-600 mt-3">
          By <span className="font-semibold">NIF Global Lindsay Street</span>
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="max-w-[980px] mx-auto px-4 md:px-0 leading-relaxed">
        {/* Intro */}
        <p className="mt-8 text-[14px] -mx-20 text-gray-600">
          Let’s get real – design is evolving at a pace quicker than your TikTok FYP. And AI in design is literally the
          MVP of this revolution. Whether you’re sketching your next masterpiece or collaborating with client teams,
          artificial intelligence is not only knocking on the door anymore – it’s already made itself at home.
        </p>

        {/* Section */}
        <h3 className="mt-10 text-[24px] md:text-[38px] -mx-20 font-semibold">
          Why AI is Changing the Future of Design
        </h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Those days of beginning from scratch are long gone. Modern design is all about working smart, not hard. AI is
          changing everything from brainstorming to the final product. It’s like having a super-efficient design sidekick
          that never sleeps, never experiences creative block, and certainly doesn’t judge your 3 AM design marathons.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          The game is different now because AI can now do repetitive work (say goodbye to boring resizing tasks!),
          forecast design trends even before they trend, and assist you in iterating faster than ever. It’s not a matter
          of replacing the creative spark – it’s a matter of boosting it.
        </p>

        {/* Section */}
        <h3 className="mt-10 text-[24px] md:text-[38px] -mx-20 font-extrabold">
          Understand the Role of AI in Design
        </h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Here’s what you need to know: AI in the design process isn’t out to steal your creative thunder. Rather, it’s
          your new co-pilot creative. AI is pattern recognition, data-crunching, lightning-fast ideation-building
          machine. You, however, are bringing emotional intelligence, cultural context, and that special human touch that
          gets designs to resonate with people.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          For design management specifically, AI helps streamline your workflows, automate mundane tasks, and provide
          data-driven insights that make your design decisions more strategic. Analytics and creativity are now best
          friends.
        </p>

        {/* Section */}
        <h3 className="mt-10 text-[24px] md:text-[38px] -mx-20 font-semibold">
          Identify the Design Stages Where AI Can Help
        </h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Let’s break down where AI in design management can actually make your life easier:
        </p>
        <ul className="mt-4 -mx-20 text-[14px] text-gray-600 list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Research &amp; Inspiration Phase:</span> AI is able to scan enormous volumes
            of visual information to detect trending trends, colour schemes, and styles that are popular among your
            desired audience.
          </li>
          <li>
            <span className="font-semibold">Ideation &amp; Conceptualisation:</span> Need 50 logo concepts? AI’s got it.
            Want to experiment with several layout concepts? AI will’ve already done them before you can say “creative
            block”.
          </li>
          <li>
            <span className="font-semibold">Implementation:</span> From intelligent object alignment to automated
            background subtraction, AI does the technical heavy lifting for you so you can focus on the creative vision.
          </li>
          <li>
            <span className="font-semibold">Testing &amp; Optimisation:</span> AI design management leads in this area by
            translating user interaction data into design improvement suggestions with real-world performance metrics.
          </li>
          <li>
            <span className="font-semibold">Project Management:</span> AI can predict timelines, identify potential
            bottlenecks, and even suggest resource allocation for optimal workflow.
          </li>
        </ul>

        {/* Inline image block */}
        <div className="mt-6 mx-85 gap-6">
          <img
            src={blog3second}
            alt="AI tools desk"
            className="w-80 rounded-md object-cover"
          />
          
        </div>

        {/* Section */}
        <h3 className="mt-10 text-[24px] md:text-[38px] -mx-20 font-semibold">
          Choose the Right AI Tools for Your Design Needs
        </h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          The AI tool landscape is vast, so here’s your starter kit:
        </p>
        <ol className="mt-4 -mx-20 text-[14px] text-gray-600 list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">For Graphic Design:</span> Adobe’s AI features (e.g., Generative Fill),
            Canva’s Magic Design, and Figma’s AI plugins are total game-changers for integrating AI into design
            workflows.
          </li>
          <li>
            <span className="font-semibold">For Logo &amp; Branding:</span> Software such as Looka/Brandmark can provide
            inspiration on which you can base your own creative skills.
          </li>
          <li>
            <span className="font-semibold">For Web Design:</span> Framer AI and Webflow’s AI capabilities simplify the
            process of moving from design to code.
          </li>
          <li>
            <span className="font-semibold">For Design Management:</span> AI-forward management tools like Monday.com’s AI
            features and Asana intelligence help in predicting project needs and optimising team workflows.
          </li>
          <li>
            The <span className="font-semibold">key</span> is to begin small: pick one tool that addresses your largest
            pain point and master it before introducing additional AI tools to your toolbox.
          </li>
        </ol>

        {/* Section */}
        <h3 className="mt-10 text-[24px] md:text-[38px] -mx-20 font-semibold">
          Combine Human Creativity + AI Efficiency
        </h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          This is where the magic occurs. The best designers aren’t selecting between human creativity OR AI efficiency – 
          they’re blending both. Employ AI in the design process to manage the legwork, then add in your creative
          intuition, cultural understanding, and emotional smarts.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          It’s like baking a cake: the machine can mix all the ingredients together and suggest flavours, but you’re the
          one who is going to add just the right amount of spice and know when to defy the recipe.
        </p>

        {/* Section */}
        <h3 className="mt-10 text-[24px] md:text-[38px] -mx-20 font-semibold">
          Why NIF Global Offers the Best Design Management Course in Kolkata
        </h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Talking of levelling up your skill set. If you happen to be in Kolkata and interested in learning both the
          ancient design principles and the design process techniques of today using AI, then NIF Global is the place for
          you. Their design management course is not theory – they’re actually incorporating AI for design management into
          the course.
        </p>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          So what sets them apart? They realise that designers of tomorrow will also have to be proficient in both
          creative software and AI tools. Their curriculum ranges from classical design basics to the latest AI integration
          methods so that you have the complete set of skills today’s design sector demands.
        </p>

        {/* Section */}
        <h3 className="mt-10 text-[24px] md:text-[38px] -mx-20 font-semibold">
          Keep Learning &amp; Evolving
        </h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          The artificial intelligence in the environment of the design process evolves faster than Instagram will change
          its algorithm. Good designers are people who remain curious, try out new tools, and are happy to modify their
          workflow.
        </p>

        {/* Conclusion */}
        <h3 className="mt-10 text-[22px] md:text-[38px] -mx-20 font-semibold">CONCLUSION</h3>
        <p className="mt-3 -mx-20 text-[14px] text-gray-600">
          Outside of the studio, AI is transforming the way we design everything from personalised product suggestions on
          e-commerce sites to smart city planning and even smart app user interfaces. By integrating AI into design
          workflows, businesses can cut time, as well as deliver more contextually aware, user-centred experiences that
          adjust to evolving consumer demands. It’s not the future of design—it’s already transforming the way we live,
          shop, interact, and create.
        </p>
<div className="mt-10 flex gap-2">
            <span className="h-[2.5px] w-100 rounded-full mx-100 justify-center bg-[#e94e2b]" />
          </div>
        {/* Read more + accent lines */}
        <div className="mt-6">
          <a href="#" className=" font-semibold -mx-20 hover:underline">
            Read more: Terra Futura: Sustainable Living Spaces of the Future
          </a>
         
        </div>

        <div className="mt-10 flex gap-2">
            <span className="h-[2.5px] w-100 rounded-full mx-100 justify-center bg-[#e94e2b]" />
          </div>

        {/* ================= FAQ ================= */}
        <section className="mt-12">
          <h3 className="text-[22px] md:text-[38px] -mx-20 font-semibold">FAQ-</h3>

          <details className="group mt-4 border border-gray-200 -mx-20 rounded-md bg-gray-50">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">Can AI replace designers?</span>
              <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">
              Not at all. AI is a tool, not a replacement. While AI may automate certain tasks, it can’t replace human
              creativity, emotional intelligence, or cultural understanding. The future belongs to designers who learn to
              work with AI—not designers who fear it.
            </div>
          </details>

          <details className="group mt-3 border border-gray-200 -mx-20 rounded-md bg-gray-50">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">How do I learn AI design tools?</span>
              <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">
              Start efficiently: free YouTube tutorials, read tool-specific guides, and practise on personal projects.
              Most AI design/management tools offer a free version where you can test without obligation.
            </div>
          </details>

          <details className="group mt-3 border border-gray-200 -mx-20 rounded-md bg-gray-50">
            <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">What materials are used in sustainable interior design?</span>
              <span className="ml-4 text-gray-500 group-open:rotate-180 transition">⌄</span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">
              Natural and biodegradable materials like bamboo, cork, reclaimed wood, organic cotton, hemp, linen, and
              natural stone are perfect choices when sustainability matters.
            </div>
          </details>
        </section>

        <div className="h-14" />
      </main>
    </div>
  );
}
