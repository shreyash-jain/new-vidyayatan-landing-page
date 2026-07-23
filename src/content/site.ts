export const site = {
  name: "Vidyayatan Technologies",
  shortName: "Vidyayatan",
  tagline: "Enabling your Digital Journey",
  description:
    "Vidyayatan Technologies is an enterprise software development company run by IIT alumni. We build tailor-made web & mobile applications, SaaS platforms and AI solutions for B2B and B2C businesses.",
  url: "https://www.vidyayatan.com",
  locale: "en_IN",
  founded: "IIT Alumni",
  hq: {
    city: "Bhopal",
    region: "Madhya Pradesh",
    country: "India",
  },
  contact: {
    phone: "+91 94256 77707",
    phoneRaw: "919425677707",
    email: "contact@vidyayatan.com",
  },
  links: {
    // External CTAs preserved from the current site.
    bookMeeting: "https://calendar.app.google/7GAyDKQLPvjA5rca6",
    whatsapp:
      "https://wa.me/919425677707?text=Hello!%20I'd%20like%20to%20inquire%20about%20your%20services.",
    demoVideo:
      "https://drive.google.com/file/d/1jvDTbjF7g3u_8CjE8_HPbsOEszRcCSMD/view?usp=sharing",
    linkedin: "https://www.linkedin.com/company/vidyayatan-technologies",
    twitter: "https://twitter.com/vidyayatan",
  },
} as const;

export type Site = typeof site;
