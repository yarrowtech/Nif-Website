import React from "react";
import { Helmet } from "react-helmet-async";
import JsonLd from "../components/JsonLd";
import aboutbg from "../assets/New Folder/about-bg.jpg";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  SITE_URL,
} from "../utils/schema";

const faqItems = [
  {
    q: "What is NIF Global Kolkata Lindsay Street?",
    a: "NIF Global Kolkata Lindsay Street is a premier design institute offering professional courses in Fashion Design, Interior Design, and Retail Management with industry-focused training.",
    group: "Institute",
  },
  {
    q: "Where is the institute located?",
    a: "The institute is located at Lindsay Street, New Market area in Kolkata, making it easily accessible from all parts of the city.",
    group: "Institute",
  },
  {
    q: "Why should I choose this institute?",
    a: "We provide industry-oriented training, experienced faculty, practical exposure, and career guidance to help students succeed in the design industry.",
    group: "Institute",
  },
  {
    q: "What courses do you offer?",
    a: "We offer courses in Fashion Design, Interior Design, and Retail Management.",
    group: "Courses",
  },
  {
    q: "What is the duration of the courses?",
    a: "Course duration varies depending on the program, ranging from short-term certification courses to long-term diploma programs.",
    group: "Courses",
  },
  {
    q: "Do you offer beginner-friendly courses?",
    a: "Yes, we offer courses suitable for beginners as well as advanced learners.",
    group: "Courses",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes, we offer placement support and career guidance to help students find opportunities in the design and retail industries.",
    group: "Careers",
  },
  {
    q: "What career opportunities are available after completing the course?",
    a: "Students can pursue careers such as Fashion Designer, Interior Designer, Retail Manager, and Visual Merchandiser.",
    group: "Careers",
  },
  {
    q: "What is the admission process?",
    a: "You can apply by filling out the enquiry form on the website or visiting the campus directly for guidance.",
    group: "Admissions",
  },
  {
    q: "What are the eligibility criteria?",
    a: "Eligibility depends on the course, but most programs are open to students who have completed basic schooling.",
    group: "Admissions",
  },
  {
    q: "What is the fee structure?",
    a: "The fee structure varies by course. Please contact the institute directly for detailed information.",
    group: "Admissions",
  },
  {
    q: "Do you provide practical training?",
    a: "Yes, all courses include practical training, workshops, and real-world projects.",
    group: "Training",
  },
  {
    q: "Are there any events or fashion shows?",
    a: "Yes, students get opportunities to participate in fashion shows, exhibitions, and industry events.",
    group: "Training",
  },
  {
    q: "How can I contact the institute?",
    a: "You can contact us via phone, website enquiry form, or by visiting the campus.",
    group: "Contact",
  },
  {
    q: "Can I visit the campus before admission?",
    a: "Yes, you are welcome to visit the campus and speak with our counselors before enrolling.",
    group: "Contact",
  },
];

export default function FAQ() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "FAQ", url: `${SITE_URL}/faq` },
  ]);

  const faqSchema = createFaqSchema(faqItems);

  return (
    <>
      <Helmet>
        <title>FAQ - NIF Global Kolkata | Courses, Fees, Admission & Placement</title>
        <meta
          name="description"
          content="Find answers to FAQs about Fashion Design, Interior Design and Retail Management courses at NIF Global Kolkata. Learn about fees, admission, course duration and placement support."
        />
        <meta name="keywords" content="FAQs" />
        <link rel="canonical" href="https://nifglobalkolkatalindsay.com/faq" />
        <meta
          property="og:title"
          content="FAQ - NIF Global Kolkata | Courses, Fees, Admission & Placement"
        />
        <meta
          property="og:description"
          content="Find answers to common questions about courses, admissions, fees, training and placement support at NIF Global Kolkata Lindsay Street."
        />
        <meta property="og:url" content="https://nifglobalkolkatalindsay.com/faq" />
        <meta property="og:type" content="website" />
      </Helmet>

      <JsonLd id="faq-page-schema" data={faqSchema} />
      <JsonLd id="faq-breadcrumbs" data={breadcrumbSchema} />

      <div className="font-poppins bg-white text-gray-900">
        <header className="relative overflow-hidden">
          <div
            className="h-[260px] md:h-[320px] w-full bg-cover bg-top"
            style={{ backgroundImage: `url(${aboutbg})` }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4 text-center sm:px-6 md:px-10">
              <div className="max-w-3xl">
                <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
                  Student Support
                </p>
                <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                  Frequently Asked Questions
                </h1>
                <p className="mt-4 text-sm leading-7 text-white/85 md:text-base">
                  Everything you may want to know about courses, admissions,
                  fees, practical training, and placements at NIF Global Kolkata
                  Lindsay Street.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Admissions",
                blurb: "Fees, eligibility, and how to get started.",
              },
              {
                title: "Courses",
                blurb: "Program options and course duration details.",
              },
              {
                title: "Careers",
                blurb: "Placement support and future opportunities.",
              },
              {
                title: "Training",
                blurb: "Workshops, projects, events, and practical learning.",
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-gray-200 bg-[#fcfcfc] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#e94e2b] text-lg font-bold text-white">
                  {faqItems.filter((item) => item.group === group.title).length}
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{group.title}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">{group.blurb}</p>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-gray-200 bg-[#fff8f6] px-6 py-8 text-center shadow-[0_16px_38px_rgba(0,0,0,0.05)] sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e94e2b]">
              FAQ Library
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Answers for students and parents
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
              We have kept this page simple so you can quickly scan the most
              common questions about admissions, courses, training, and career
              support at NIF Global Kolkata Lindsay Street.
            </p>
          </section>

          <section className="mt-10 space-y-5">
            {faqItems.map((item, index) => (
              <article
                key={item.q}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e94e2b]">
                  {item.group}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-8 text-gray-900 md:text-xl">
                  {index + 1}. {item.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700 md:text-base">
                  {item.a}
                </p>
              </article>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-gray-200 bg-[#fcfcfc] px-6 py-8 text-center shadow-[0_12px_32px_rgba(0,0,0,0.04)] sm:px-8">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Still need help?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
              If you want course guidance, fee details, or admission support,
              our team is available to help you with the next step.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex rounded-full bg-[#e94e2b] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#cf4423]"
              >
                Contact Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
