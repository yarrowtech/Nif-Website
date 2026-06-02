// src/pages/Blog.jsx
import blog1 from "../assets/Blog/blog1.webp";
import blog2 from "../assets/Blog/blog2.webp";
import blog3 from "../assets/Blog/blog3.png";
import blog4 from "../assets/Blog/blog4.webp";
import blog5 from "../assets/Blog/blog5.jpg";
import blog6 from "../assets/Blog/blog6.jpg";
import blog7 from "../assets/Blog/blog7.jpg";
import blog8 from "../assets/Blog/blog8.jpg";
import blog9 from "../assets/Blog/blog9.jpg";
import blog10 from "../assets/Blog/blog10.jpg";
import blog11 from "../assets/Blog/blog11.jpg";
import blog12 from "../assets/Blog/blog12.jpeg";
import blog13 from "../assets/Blog/blog2.png";
import blog14 from "../assets/Blog/blog14.png";
import blog15 from "../assets/Blog/blog15-first.jpeg";
import blog16 from "../assets/Blog/blog16.png";
import blog17 from "../assets/Blog/blog17-first.png";

import blogBanner from "../assets/New Folder/about-bg.jpg";

import { Helmet } from "react-helmet-async";
import JsonLd from "../components/JsonLd";
import { createBreadcrumbSchema, SITE_URL } from "../utils/schema";

export default function Blog() {
  const posts = [
    {
      id: 17,
      day: "29",
      mon: "May",
      img: blog17,
      metaLeft: "Blog",
      category: "Fashion Designing",
      title: "Job Opportunities After Fashion Designing Training in Kolkata",
      excerpt:
        "Explore fashion design career paths, salaries, recruiter opportunities, industry skills, and growth options after professional training in Kolkata.",
      href: "/job-opportunities-after-fashion-designing-training-in-kolkata",
    },
    {
      id: 16,
      day: "20",
      mon: "May",
      img: blog16,
      metaLeft: "Blog",
      category: "Interior Design",
      title: "Small Room, Big Impact: Smart Design Tricks That Actually Work",
      excerpt:
        "Discover practical design tricks that make small rooms feel brighter, larger, and more functional without sacrificing style.",
      href: "/small-room-big-impact-smart-design-tricks",
    },
    {
      id: 15,
      day: "11",
      mon: "May",
      img: blog15,
      metaLeft: "Blog",
      category: "Fashion Styling",
      title: "Why We Wear What We Wear: The Psychology Behind Fashion Choices",
      excerpt:
        "Explore how psychology, identity, emotion, and culture shape our clothing choices — and why understanding this is essential for every great stylist.",
      href: "/why-we-wear-what-we-wear-psychology-behind-fashion-choices",
    },
    {
      id: 14,
      day: "22",
      mon: "Apr",
      img: blog14,
      metaLeft: "Blog",
      category: "Interior Design",
      title: "Skills You Gain From an Interior Design Institute in Kolkata",
      excerpt:
        "Learn the practical and professional skills you build in an interior design institute, from space planning and CAD tools to lighting, sustainability, and client management.",
      href: "/skills-you-gain-from-an-interior-design-institute-in-kolkata",
    },
    {
      id: 13,
      day: "10",
      mon: "Apr",
      img: blog13,
      metaLeft: "Blog",
      category: "Interior Design",
      title: "10 Benefits of an Interior Design Course for Career Growth",
      excerpt:
        "Explore how an interior design course builds practical skills, expands career opportunities, and prepares you for long-term growth in the design industry.",
      href: "/benefits-of-an-interior-design-course",
    },
    {
      id: 12,
      day: "19",
      mon: "Mar",
      img: blog12,
      metaLeft: "Blog",
      category: "Fashion Designing",
      title: "7 Skills Every Fashion Design Student Must Learn",
      excerpt:
        "Fashion is not just about aesthetics — it is a craft, a language, and a business. Discover the seven essential skills that shape industry-ready designers",
      href: "/fashiondesignskills",
    },
    {
      id: 11,
      day: "19",
      mon: "Jan",
      img: blog11,
      metaLeft: "Blog",
      category: "Fashion Designing",
      title: " Fashion Designing Course After 12th in Kolkata: Career, Fees, Eligibility, and What to Expect",
      excerpt:
        "Fashion design stands out for students who think visually, enjoy creativity, and want a career that blends art, skill, and real-world application.",
      href: "/fashiondesigncourse",
    },
    {
      id: 1,
      day: "30",
      mon: "Jun",
      img: blog1,
      metaLeft: "Blog",
      category: "Interior Design",
      title:
        "Eco-Friendly Interior Design: Creating Sustainable Spaces",
      excerpt:
        "Create stylish, sustainable interiors with eco-friendly design tips that reduce waste, save energy, and promote a healthier home environment.",
      href: "/InteriorDesign",
    },
    {
      id: 2,
      day: "24",
      mon: "Jun",
      img: blog2,
      metaLeft: "Blog",
      category: "Fashion Design",
      title: "Plus-Size Style Trends: Embracing Diversity in Fashion",
      excerpt:
        "Looking for the latest plus-size style trends? See how fashion is evolving to celebrate body diversity and empower everyone.",
      href: "/fashiondesign",
    },
    {
      id: 3,
      day: "16",
      mon: "Jun",
      img: blog3,
      metaLeft: "Blog",
      category: "Interior Design",
      title:
        "Integrating AI into Design Processes: A Step-by-Step Guide",
      excerpt:
        "How AI meets design management: explore ways artificial intelligence transforms creative workflows and decision-making.",
      href: "/interiordesignprocess",
    },
    {
      id: 4,
      day: "04",
      mon: "Jun",
      img: blog4,
      metaLeft: "Blog",
      category: "Sustainable Design",
      title: "Terra Futura: Sustainable Living Spaces of the Future",
      excerpt:
        "Future homes reimagined—innovative, eco-friendly living spaces designed for a sustainable and smarter tomorrow.",
      href: "/TerraFutura",
    },
    {
      id: 5,
      day: "15",
      mon: "May",
      img: blog5,
      metaLeft: "Blog",
      category: "Fashion Designing",
      title: "Body-Positive Fashion: Designing for Every Body Type",
      excerpt:
        "Inclusive design tips that empower every body type with silhouettes and fabrics that celebrate all shapes.",
      href: "/Body-PositiveFashionblog/5",
    },
    {
      id: 6,
      day: "11",
      mon: "Apr",
      img: blog6,
      metaLeft: "Guide",
      category: "Career",
      title:
        "Top 5 Fashion Design Institutes in Kolkata You Must Know",
      excerpt:
        "Discover some of Kolkata’s finest fashion design institutes, with world-class education and exposure.",
      href: "/fashioninstitute",
    },
    {
      id: 7,
      day: "24",
      mon: "Mar",
      img: blog7,
      metaLeft: "Blog",
      category: "Interior Design",
      title:
        "Interior Designing Institutes in Kolkata: Learn & Choose",
      excerpt:
        "Interior design blends creativity and function. Here’s how to select the right city and course for you.",
      href: "/interiordesigninginstituteinKolkata",
    },
    {
      id: 8,
      day: "17",
      mon: "Mar",
      img: blog8,
      metaLeft: "Fashion Designing",
      category: "Blog",
      title:
        "10 Roles to Study in a Fashion Designing Course in…",
      excerpt:
        "From trend research to garment construction—10 key roles every fashion student learns to master.",
      href: "/fashiondesigncourseKolkata",
    },
    {
      id: 9,
      day: "14",
      mon: "Mar",
      img: blog9,
      metaLeft: "Blog",
      category: "Interior Designing",
      title:
        "5 Reasons the Best Design Institute in Kolkata Shapes Talent",
      excerpt:
        "From expert mentors to industry exposure—why picking the right institute transforms your career.",
      href: "/designinstituteinKolkata",
    },
    {
      id: 10,
      day: "18",
      mon: "Feb",
      img: blog10,
      metaLeft: "Blog",
      category: "Fashion Designing",
      title: "10 Top Abilities of Fashion Designers in India",
      excerpt:
        "Originality, storytelling, market insight—discover the abilities that define India’s top fashion designers.",
      href: "/fashiondesigners",
    },
  ];
const ACCENT = "#e94e2b";
const ACCENT_DARK = "#c63c1f";
const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: `${SITE_URL}/` },
  { name: "Blog", url: `${SITE_URL}/blog` },
]);

return (
  <>
    <Helmet>
    <title>Best Interior Design Institute in Kolkata | Explore Our Blog</title>
  
    <meta
      name="description"
      content="Explore our blog at NIF Global Kolkata Lindsay, the best interior design institute in Kolkata. Discover design trends, expert tips, and career insights."
    />
  
   <meta
      name="keywords"
      content="Interior Design Institute in Kolkata"
    />
  
    <link
      rel="canonical"
      href="https://nifglobalkolkatalindsay.com/blog"
    />
  </Helmet>
  <JsonLd id="blog-breadcrumbs" data={breadcrumbSchema} />
  
  <div className="min-h-screen w-full text-gray-900 font-poppins">
  {/* Hero */}
  <header className="relative">
    <div
      className="h-[260px] md:h-[320px] w-full bg-cover bg-top"
      style={{ backgroundImage: `url(${blogBanner})` }}
    >
      <div className="h-full w-full bg-black/70 flex items-center">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <h1 className="text-white font-extrabold text-[38px] md:text-[52px] drop-shadow">
            Blogs
          </h1>
        </div>
      </div>
    </div>
  </header>


    <main className="mt-10 max-w-[1350px] mx-auto px-6 md:px-1 py-10 md:py-14">
  <h2 className="font-poppins text-center text-[22px] md:text-[35px] font-semibold text-[#e94e2b]">
    Recent Posts
  </h2>

  <section className="mt-15 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
    {posts.map((p) => (
      <article
        key={p.id}
        className="group relative rounded-sm overflow-visible border border-gray-400/90 bg-white shadow-[0_20px_20px_rgba(0,0,0,0.08)]"
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={p.img}
            alt={p.title}
            className="h-[180px] w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105"
          />
        </div>

        {/* Date badge */}
        <div className="absolute -left-1 top-[100px]">
          <div className="relative -translate-x-2">
            {/* Triangle tab behind the badge */}
            <span
              aria-hidden
              className="absolute -top-3 -left-0 -z-10"
              style={{
                width: 0,
                height: 0,
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                borderRight: `12px solid ${ACCENT_DARK}`,
              }}
            />
            {/* Square badge */}
            <div
              className="w-[72px] rounded-sm shadow-[0_6px_16px_rgba(0,0,0,0.25)] text-white text-center leading-none relative z-10"
              style={{ backgroundColor: ACCENT }}
            >
              <div className="pt-2.5 text-[22px] font-black tracking-tight">
                {p.day}
              </div>
              <div className="pb-2 text-[11px] font-semibold uppercase opacity-95">
                {p.mon}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <div className="flex items-center gap-3 text-[12px] text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M4 9h16" />
              </svg>
              {p.metaLeft}
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-400 inline-block" />
            <span>{p.category}</span>
          </div>

          <h3 className="mt-3 text-[22px] leading-tight font-extrabold">
            {p.title}
          </h3>

          <p className="mt-3 text-[14px] leading-7 text-gray-700">
            {p.excerpt}
          </p>

          <div className="mt-5">
            <a
              href={p.href}
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-white text-[13px] font-semibold hover:opacity-95"
              style={{ backgroundColor: ACCENT }}
            >
              Read more
            </a>
          </div>
        </div>
      </article>
    ))}
  </section>

  {/* Right tab */}
  <a
    href="#apply"
    className="fixed right-0 top-1/3 -mr-10 rotate-90 origin-right bg-[#e94e2b] text-white text-[12px] font-semibold px-3.5 py-2 rounded-t-md shadow hover:bg-[#cf4423] hidden lg:block"
    title="Apply Now"
  >
    Apply Now
  </a>
</main>
</div>
</>
);
}
