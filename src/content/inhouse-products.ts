export type InhouseProduct = {
  name: string;
  url: string;
  tag: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
};

/** Vidyayatan's own SaaS products, showcased on the homepage. */
export const inhouseProducts: InhouseProduct[] = [
  {
    name: "Vacademy CRM",
    url: "https://www.vacademy.io/crm/",
    tag: "Education CRM",
    tagline: "The education CRM that captures every lead — and calls first.",
    description:
      "An agentic admissions CRM built for education. Captures leads from every channel, scores and tiers them automatically, and an AI voice agent calls and qualifies them before your counsellors even pick up the phone.",
    features: [
      "AI voice agent that calls & qualifies leads",
      "Multi-channel capture: ads, forms, walk-ins",
      "Auto-scoring with HOT / WARM / COLD tiers",
      "Counsellor routing, call recording & SLA tracking",
    ],
    image: "/inhouse/vacademy-crm.png",
  },
  {
    name: "Vacademy LMS",
    url: "https://www.vacademy.io",
    tag: "AI-powered LMS",
    tagline: "Run your entire institute on one AI-powered platform.",
    description:
      "Courses, live classes, assessments, admissions and fee collection in one place — with AI that generates courses and videos for you, plus white-labelled mobile apps under your own brand.",
    features: [
      "AI course & video generation",
      "Live classes, mock exams & proctoring",
      "White-labelled iOS & Android apps",
      "Payments, workflows & analytics built in",
    ],
    image: "/inhouse/vacademy-lms.png",
  },
  {
    name: "Vimotion AI",
    url: "https://vimotion.ai/",
    tag: "AI video studio",
    tagline: "Turn scripts into studio-quality videos with AI.",
    description:
      "An AI-native video studio that takes you from idea to final cut — AI directors plan the shots, generate scenes and voiceovers, and a full timeline editor gives you frame-level control.",
    features: [
      "Script → storyboard → rendered video",
      "AI shot planning & scene generation",
      "Voiceovers, music & subtitles",
      "Full timeline editor with overlays",
    ],
    image: "/inhouse/vimotion.png",
  },
];
