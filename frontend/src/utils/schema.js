export const SITE_URL = "https://nifglobalkolkatalindsay.com";
export const SITE_NAME = "NIF Global Kolkata Lindsay Street";
export const SITE_LOGO = `${SITE_URL}/nif-logo-s-black.png`;
export const SITE_IMAGE = `${SITE_URL}/logo.png`;

export const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "20A, Lindsay Street, 2nd Floor, Humayan Court",
  addressLocality: "Kolkata",
  addressRegion: "West Bengal",
  postalCode: "700087",
  addressCountry: "IN",
};

export const SAME_AS_LINKS = [
  "https://www.facebook.com/nifgloballindsaystreet",
  "https://www.instagram.com/nifgloballindsaystreet/",
  "https://www.google.com/maps/search/?api=1&query=NIF+Global+Lindsay+Street,+Kolkata",
];

export const homepageOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "CollegeOrUniversity"],
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: SITE_LOGO,
  description:
    "Premier design institute in Kolkata offering Fashion Design, Interior Design, and Management courses.",
  address: ADDRESS,
  telephone: "+91-9836796000",
  sameAs: SAME_AS_LINKS,
};

export const localSeoSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: SITE_NAME,
  image: SITE_IMAGE,
  url: `${SITE_URL}/`,
  telephone: "+91-9836796000",
  address: ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.56,
    longitude: 88.352,
  },
};

export const homepageEventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "NIF Global Annual Fashion Show",
  startDate: "2026-04-10",
  endDate: "2026-04-10",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: SITE_NAME,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
  },
};

export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createCourseSchema({ name, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: `${SITE_URL}/`,
    },
  };
}

export function createFaqSchema(faqs) {
  return {
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
}
