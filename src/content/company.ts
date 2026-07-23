import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Handshake,
  Users,
  ShieldCheck,
  Cpu,
  Headphones,
  Wrench,
  Layers,
  Workflow,
  Lock,
  Plug,
  Building2,
} from "lucide-react";

export type EngagementModel = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  points: string[];
};

/** The three ways clients work with Vidyayatan (from the homepage). */
export const engagementModels: EngagementModel[] = [
  {
    slug: "outsourcing",
    title: "Outsourcing Software",
    icon: Boxes,
    summary:
      "We deliver tailored solutions and transfer all deliverables and expertise to your organisation on completion — efficiently addressing your business needs end to end.",
    points: [
      "Full ownership handed over on delivery",
      "Fixed scope, transparent milestones",
      "Ideal for well-defined products",
    ],
  },
  {
    slug: "technological-partnership",
    title: "Technological Partnership",
    icon: Handshake,
    summary:
      "We dive into your business, brainstorm solutions, gather feedback and optimise infrastructure to boost efficiency — a long-term partner invested in your outcomes.",
    points: [
      "Continuous discovery & iteration",
      "Infrastructure & architecture guidance",
      "Ideal for evolving product roadmaps",
    ],
  },
  {
    slug: "dedicated-teams",
    title: "Dedicated Teams",
    icon: Users,
    summary:
      "We offer dedicated development teams working exclusively under your supervision, ensuring a well-rounded, effective approach that scales with you.",
    points: [
      "Hand-picked engineers, your direction",
      "Scale up or down on demand",
      "Ideal for extending in-house teams",
    ],
  },
];

export type ValueProp = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Core strengths ("Why choose us" band on the homepage). */
export const strengths: ValueProp[] = [
  {
    title: "Unmatched Quality",
    description: "Delivering reliable, high-performing software solutions built to last.",
    icon: ShieldCheck,
  },
  {
    title: "State-of-the-art Technology",
    description: "Leveraging Machine Learning, LLMs and IoT to drive real innovation.",
    icon: Cpu,
  },
  {
    title: "Reliable Customer Support",
    description: "Providing responsive, dependable service throughout the engagement.",
    icon: Headphones,
  },
  {
    title: "Timely Maintenance",
    description: "Ensuring your systems stay up to date and running smoothly.",
    icon: Wrench,
  },
];

/** SaaS / CRM value bullets. */
export const saasFeatures: ValueProp[] = [
  {
    title: "Scalable Architecture",
    description: "Grow from MVP to full-scale enterprise solutions without rewrites.",
    icon: Layers,
  },
  {
    title: "Custom CRM Features",
    description: "Automate workflows, lead tracking and analytics tailored to you.",
    icon: Workflow,
  },
  {
    title: "Secure & Compliant",
    description: "Built with top-tier security and GDPR compliance from day one.",
    icon: Lock,
  },
  {
    title: "Seamless Integrations",
    description: "Connect with third-party tools and APIs your business relies on.",
    icon: Plug,
  },
  {
    title: "Multi-Tenant Capabilities",
    description: "Perfect for SaaS platforms serving many clients from one codebase.",
    icon: Building2,
  },
];

/** "How we help you" — four-step operating model. */
export const howWeHelp = [
  { title: "Offload", description: "Our team manages the entire software lifecycle." },
  { title: "Scale", description: "Our software scales effortlessly to handle all your features." },
  { title: "Control", description: "Our team ensures quality and handles maintenance." },
  { title: "Secure", description: "Our applications are safeguarded against external threats." },
];

/** Comparison rows for the "Vidyayatan Advantage" table. */
export const advantageRows = [
  "Customized Solutions",
  "Seamless System Integration",
  "Industry-Specific Expertise",
  "24/7 Support",
  "Cost-Effective Pricing",
  "Rapid Deployment & Delivery",
  "Complete Documentation & Training",
  "Scalable & Flexible Solution",
];

/** Client logos shown in the trust band. */
export const clients: { name: string; logo: string }[] = [
  { name: "BharatPe", logo: "/clients/bharatpe.png" },
  { name: "DCM Shriram", logo: "/clients/dcm-shriram.png" },
  { name: "Star Bazaar", logo: "/clients/star-bazaar.png" },
  { name: "Habuild", logo: "/clients/habuild.png" },
  { name: "Innowell", logo: "/clients/innowell.png" },
  { name: "Maroi Boerdery", logo: "/clients/maroi-boerdery.png" },
  { name: "Labour Link", logo: "/clients/labour-link.png" },
  { name: "Satvaa", logo: "/clients/satvaa.png" },
];

/** Stats band. */
export const stats = [
  { value: "10B+", label: "Transactions processed / yr", note: "for BharatPe" },
  { value: "300K", label: "Farms managed", note: "for DCM Shriram" },
  { value: "6M+", label: "Merchants served", note: "across products" },
  { value: "IIT", label: "Alumni-led team", note: "engineering-first" },
];
