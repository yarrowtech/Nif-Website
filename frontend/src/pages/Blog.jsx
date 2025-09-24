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
import blogBanner from "../assets/New Folder/about-bg.jpg";



export default function Blog() {
  const posts = [
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
      href: "/blog/1",
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
      href: "/blog/2",
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
      href: "/blog/3",
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
      href: "/blog/4",
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
      href: "/blog/5",
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
      href: "/blog/6",
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
      href: "/blog/7",
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
      href: "/blog/8",
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
      href: "/blog/9",
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
      href: "/blog/10",
    },
  ];
const ACCENT = "#e94e2b";
const ACCENT_DARK = "#c63c1f";

return (
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
);
}