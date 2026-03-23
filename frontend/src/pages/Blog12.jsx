import React from "react";
import { Helmet } from "react-helmet-async";
import blog12 from "../assets/Blog/blog12.jpeg";
import blog12img from "../assets/Blog/blog12-img.jpeg";

const skills = [
  {
    number: "01",
    title: "Sketching & Technical Drawing",
    intro:
      "The pencil is a fashion designer's first and most powerful tool. Sketching bridges imagination and reality and helps communicate design ideas to clients, pattern-makers, and manufacturers.",
    points: [
      "Drawing accurate fashion figures (croquis) in correct proportions",
      "Flat sketching for technical garment illustrations used in production",
      "Rendering fabric textures, drape, and sheen through pencil and colour",
      "Creating front, back, and side views for technical packs",
      "Annotating sketches with measurements, seam details, and fabric notes",
      "Developing a consistent and recognisable illustration style",
    ],
    closing:
      "At NIF Global Lindsay Street, students refine their drawing skills from the basics to complete collection storyboards aligned with industry standards.",
  },
  {
    number: "02",
    title: "Pattern Making & Garment Construction",
    intro:
      "A great sketch has little value if the garment cannot be constructed. Pattern making is the technical process that converts a two-dimensional design into a three-dimensional garment that fits the human body.",
    points: [
      "Drafting flat patterns from body measurements using standard formulas",
      "Understanding seam allowances, ease, grain lines, and pattern markings",
      "Draping fabric on mannequins to create patterns directly on the dress form",
      "Grading patterns to produce multiple garment sizes",
      "Creating toiles (test garments) before cutting final fabrics",
      "Mastering construction techniques such as darts, pleats, seams, and facings",
    ],
  },
  {
    number: "03",
    title: "Fabric Knowledge & Textile Science",
    intro:
      "Choosing the right fabric is as important as designing the garment. Each textile behaves differently in terms of drape, stretch, breathability, and colour absorption.",
    points: [
      "Natural fibres such as cotton, silk, linen, wool, and jute",
      "Synthetic and blended fabrics including polyester, nylon, rayon, and lycra",
      "Indian heritage textiles like Banarasi silk, Kanjivaram, Chanderi, and Jamdani",
      "Fabric construction methods: woven, knitted, and non-woven textiles",
      "Understanding shrinkage, stretch, and fabric behaviour during cutting and sewing",
      "Sustainable and eco-friendly textile options",
    ],
    closing:
      "At NIF Global Lindsay Street, students gain hands-on exposure to diverse fabrics, building the instinct to select the right material for each design.",
  },
  {
    number: "04",
    title: "Colour Theory & Trend Forecasting",
    intro:
      "Colour is often the first element people notice in fashion. Designers who understand colour can create collections that are visually compelling and commercially successful.",
    points: [
      "The colour wheel: primary, secondary, tertiary, complementary, and analogous palettes",
      "Colour psychology and its impact on consumer perception",
      "Seasonal colour forecasting through platforms such as WGSN, Coloro, and Pantone",
      "Building cohesive colour stories for entire fashion collections",
      "Cultural colour meanings, especially within the Indian market",
      "Applying colour trends to fabrics, embellishments, and accessories",
    ],
  },
  {
    number: "05",
    title: "Computer-Aided Design (CAD) & Digital Tools",
    intro:
      "Technology plays a major role in modern fashion design. Digital tools allow designers to visualise concepts, create technical drawings, and present collections professionally.",
    points: [
      "Adobe Illustrator for vector-based sketches and technical drawings",
      "Adobe Photoshop for mood boards, prints, and digital rendering",
      "CLO 3D or Browzwear for virtual garment simulation",
      "CorelDRAW for textile and print design work",
      "Digital concept presentation using Canva and InDesign",
      "Basic Excel tools for costing and production planning",
    ],
    closing:
      "At NIF Global Lindsay Street, dedicated labs and industry-standard software ensure students graduate with a strong digital portfolio.",
  },
  {
    number: "06",
    title: "Fashion Merchandising & Brand Communication",
    intro:
      "Creative design must be supported by business knowledge. Fashion students learn how garments move from concept to retail.",
    points: [
      "Understanding the retail supply chain from design brief to store floor",
      "Garment costing, pricing strategies, and profit margins",
      "Visual merchandising and how store displays influence sales",
      "Building brand identity and label positioning",
      "Social media and digital marketing for fashion brands",
      "Presenting collections to buyers, clients, and retailers",
    ],
  },
  {
    number: "07",
    title: "Portfolio Development & Design Research",
    intro:
      "A portfolio is a designer’s most valuable professional asset. It tells the story of a designer’s creativity, process, and design philosophy.",
    points: [
      "Creating a cohesive portfolio that reflects personal design identity",
      "Conducting detailed design research across cultural, historical, and trend contexts",
      "Developing concept mood boards to communicate ideas visually",
      "Documenting the entire design process: research → concept → sketch → toile → final garment",
      "Presenting work professionally for juries, interviews, and client meetings",
      "Building online portfolios through platforms like Behance, Wix, or personal websites",
    ],
    closing:
      "At NIF Global Lindsay Street, portfolio development is integrated throughout the course so students graduate with a body of work that speaks louder than any certificate.",
  },
];

const faqs = [
  {
    q: "What is the best fashion design course in Kolkata for beginners?",
    a: "The best fashion design course for beginners should build a strong foundation in sketching, pattern making, fabric knowledge, and design basics. NIF Global Lindsay Street offers structured foundation programmes that help students develop both creative and technical skills through studio training and industry exposure.",
  },
  {
    q: "How long does a fashion design course in Kolkata typically take?",
    a: "The duration depends on the type of programme. Certificate courses usually take 3–6 months for skill-based training. Diploma programmes take 1–2 years covering core fashion design skills. Undergraduate degrees such as B.Des or B.Sc usually take 3–4 years of professional training, while postgraduate programmes such as M.Des generally take 2 years for advanced specialisation. NIF Global Lindsay Street offers different programme options for students at various stages.",
  },
  {
    q: "What career opportunities are available after completing a fashion design course?",
    a: "Graduates can explore multiple career paths, including Fashion Designer for brands or boutiques, Costume Designer for film and theatre, Fashion Stylist for editorial or celebrity clients, Textile or Surface Designer, Visual Merchandiser for retail brands, Fashion Entrepreneur launching their own label, and Buying and Merchandising roles in retail companies. The placement support at NIF Global Lindsay Street helps students connect with industry opportunities.",
  },
  {
    q: "Do I need to know how to draw to join a fashion design course in Kolkata?",
    a: "No, prior drawing experience is not required. Most institutes, including NIF Global Lindsay Street, teach sketching from the basics. Students learn fashion figures, technical sketches, and illustration techniques during the course.",
  },
  {
    q: "Why is NIF Global Lindsay Street a top choice for fashion education in Kolkata?",
    a: "NIF Global Lindsay Street combines an industry-focused curriculum with strong exposure to India’s textile heritage. With experienced faculty, modern studio facilities, live industry projects, and an active alumni network, it prepares students for successful careers in the fashion industry.",
  },
];

export default function Blog12() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>
          Fashion Design Course in Kolkata | Best Fashion Designing Institute
        </title>
        <meta
          name="description"
          content="Join the best fashion design course in Kolkata. Learn garment design, pattern making, styling & fashion illustration with expert trainers. Enroll today."
        />
        <meta
          name="keywords"
          content="Fashion Design Course in Kolkata"
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="bg-white text-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Hero Image */}
<div className="overflow-hidden rounded-sm shadow-xl">
  <img
    src={blog12}
    alt="7 Skills Every Fashion Design Student Must Learn"
    className="w-full object-cover h-[500px] sm:h-[600px] lg:h-[700px]"
  />
</div>
          {/* Blog Header */}
          <div className="mx-auto mt-10 max-w-4xl">
            <p className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              Fashion Design
            </p>

            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              7 Skills Every Fashion Design Student Must Learn
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Fashion is not just about aesthetics — it is a craft, a language,
              and a business. Discover the seven essential skills that shape
              industry-ready designers, and how enrolling in the right{" "}
              <a
                href="/fashion-design-course-kolkata"
                className="font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
              >
                fashion design course in Kolkata
              </a>{" "}
              can launch your creative career.
            </p>
          </div>

          {/* Intro Content */}
          <div className="mx-auto mt-10 max-w-4xl space-y-6 text-[17px] leading-8 text-gray-700">
            <p>
              The fashion industry is one of the most competitive creative
              fields in the world. Whether you dream of launching your own
              label, working for a global brand, or styling India’s biggest
              names, the foundation you build during your education will define
              your career.
            </p>

            <p>
              At NIF Global Lindsay Street, one of Kolkata’s most celebrated
              fashion institutions, students are trained not just to create, but
              to lead.
            </p>

            <p>
              If you're considering a{" "}
              <a
                href="/fashion-design-course-kolkata"
                className="font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
              >
                fashion design course in Kolkata
              </a>
              , understanding the core skills you need to master will help you
              choose the right programme and make the most of every lesson.
            </p>

            <p>Here are the seven essential skills every fashion design student must learn.</p>
          </div>

{/* Small Center Image */}
<div className="mx-auto mt-12 flex justify-center">
  <img
    src={blog12img}
    alt="Fashion design skills"
    className="h-110 w-auto rounded-xl shadow-md object-cover"
  />
</div>

          {/* Skills Heading */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Skills Every Fashion Design Student Must Learn
            </h2>
          </div>

          {/* Skills Sections */}
          <div className="mx-auto mt-8 max-w-4xl space-y-8">
            {skills.map((skill) => (
              <div
                key={skill.number}
                className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm sm:p-8"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-md">
                    {skill.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-[16px] leading-8 text-gray-700">
                  {skill.intro}
                </p>

                <div className="mt-5">
                  <p className="mb-3 font-semibold text-gray-900">
                    Students learn:
                  </p>
                  <ul className="space-y-3 text-[16px] leading-8 text-gray-700">
                    {skill.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {skill.closing && (
                  <p className="mt-5 text-[16px] leading-8 text-gray-700">
                    {skill.closing}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mx-auto mt-20 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-[16px] leading-8 text-gray-700">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

      {/* CTA - Inline (No Card) */}
<div className="mx-auto mt-16 max-w-4xl">
  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
    Start Your Fashion Journey with the Right Foundation
  </h2>

  <p className="mt-4 text-[17px] leading-8 text-gray-700">
    Build your creative vision, technical confidence, and professional
    portfolio with expert-led training at NIF Global Lindsay Street.
    Explore the{" "}
    <a
      href="/fashion-design-course-kolkata"
      className="font-semibold text-blue-600 hover:underline"
    >
      fashion design course in Kolkata
    </a>{" "}
    and take the first step towards a career in fashion.
  </p>

  <div className="mt-5">
    <button
      href="/fashion-design-course-kolkata"
      className="inline-block font-semibold text-blue-600 hover:underline"
    >
      Explore the Course →
    </button>
  </div>
</div>
        </div>
      </div>
    </>
  );
}