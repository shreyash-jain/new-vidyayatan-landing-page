import type { LucideIcon } from "lucide-react";
import { Sprout, GraduationCap, Landmark, HeartPulse } from "lucide-react";

export type Industry = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  summary: string;
  challenges: string[];
  solutions: string[];
  relatedProducts: string[]; // product slugs
};

export const industries: Industry[] = [
  {
    slug: "agritech",
    title: "Agritech",
    short: "Smart farming solutions",
    icon: Sprout,
    summary:
      "We build software that digitises farming operations — from labour and crop management to real-time field monitoring across hundreds of thousands of farms.",
    challenges: [
      "Managing distributed farms, blocks and field teams",
      "Pest, crop and season planning at scale",
      "Real-time visibility for decision-making",
    ],
    solutions: [
      "Farm & block management platforms",
      "Crop planning and pest calendars",
      "Real-time crop monitoring dashboards",
      "Labour, HR and compliance tooling",
    ],
    relatedProducts: ["labour-link", "dcm-shriram", "maroi-boerdery", "satvaa", "star-bazaar"],
  },
  {
    slug: "edtech",
    title: "EdTech",
    short: "Tech-enhanced education",
    icon: GraduationCap,
    summary:
      "Learning platforms and education tools that scale — engaging experiences for learners and powerful management tools for institutions.",
    challenges: [
      "Delivering engaging learning at scale",
      "Managing content, cohorts and assessments",
      "Actionable insight into learner progress",
    ],
    solutions: [
      "Learning management platforms",
      "Assessment & analytics tooling",
      "Content authoring & delivery",
      "Mobile-first learner apps",
    ],
    relatedProducts: ["habuild"],
  },
  {
    slug: "fintech",
    title: "Fintech",
    short: "Digital finance solutions",
    icon: Landmark,
    summary:
      "Secure, scalable financial software — payment processing, reconciliation and merchant tooling engineered for high transaction volumes.",
    challenges: [
      "Scaling to millions of transactions",
      "Reconciliation and dispute handling",
      "Security, reliability and compliance",
    ],
    solutions: [
      "Payment processing systems",
      "Automated reconciliation & chargebacks",
      "Merchant management dashboards",
      "Real-time analytics",
    ],
    relatedProducts: ["bharatpe"],
  },
  {
    slug: "healthtech",
    title: "HealthTech",
    short: "Digitise & transform healthcare",
    icon: HeartPulse,
    summary:
      "Software that digitises and transforms healthcare operations — secure, compliant and designed around real clinical and operational workflows.",
    challenges: [
      "Digitising manual clinical workflows",
      "Secure handling of sensitive data",
      "Interoperability across systems",
    ],
    solutions: [
      "Practice & operations management",
      "Secure patient data platforms",
      "Integrations with existing systems",
      "Analytics & reporting",
    ],
    relatedProducts: [],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
