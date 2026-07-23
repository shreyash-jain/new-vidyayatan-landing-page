import type { LucideIcon } from "lucide-react";
import {
  MessagesSquare,
  LineChart,
  FileSearch,
  Workflow,
  Sparkles,
  Compass,
  Database,
  Rocket,
  Gauge,
} from "lucide-react";

export type AiCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

/** AI capability grid on the homepage. */
export const aiCapabilities: AiCapability[] = [
  {
    title: "LLM & Generative AI",
    description:
      "Custom assistants, copilots and content generation built on top of leading LLMs, tuned to your domain and data.",
    icon: MessagesSquare,
    image: "/ai/build.png",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecasting, scoring and anomaly detection models that turn your historical data into forward-looking decisions.",
    icon: LineChart,
    image: "/ai/analytics.png",
  },
  {
    title: "Document Intelligence",
    description:
      "Extract structured data from PDFs, forms and scanned documents automatically — no more manual data entry.",
    icon: FileSearch,
    image: "/ai/document.png",
  },
  {
    title: "MLOps & Data Pipelines",
    description:
      "Production-grade pipelines for training, evaluating and monitoring models — reliable AI, not just a demo.",
    icon: Workflow,
    image: "/ai/pipeline.png",
  },
  {
    title: "Recommendation & Personalisation",
    description:
      "Smarter product, content and pricing recommendations that adapt to each user in real time.",
    icon: Sparkles,
    image: "/ai/recommend.png",
  },
];

export type AiUseCase = {
  title: string;
  description: string;
};

export const aiUseCases: AiUseCase[] = [
  {
    title: "AI customer support & sales assistants",
    description:
      "Deflect routine queries, qualify leads and support your team 24/7 with an assistant trained on your knowledge base.",
  },
  {
    title: "Automated document & data extraction",
    description:
      "Turn invoices, contracts and forms into structured, searchable data — in seconds, not hours.",
  },
  {
    title: "Demand & revenue forecasting",
    description:
      "Predictive models that help you plan inventory, staffing and revenue with real confidence.",
  },
  {
    title: "Intelligent operations automation",
    description:
      "Replace manual review and routing with AI-driven workflows that scale as your business grows.",
  },
];

export type AiProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const aiProcess: AiProcessStep[] = [
  {
    title: "Discover",
    description: "We identify the highest-impact AI use case for your business and assess feasibility.",
    icon: Compass,
  },
  {
    title: "Data & design",
    description: "We prepare your data and design the model or LLM pipeline around real constraints.",
    icon: Database,
  },
  {
    title: "Build & evaluate",
    description: "We build, test and evaluate against real-world accuracy and reliability targets.",
    icon: Gauge,
  },
  {
    title: "Deploy & monitor",
    description: "We ship into production with monitoring, guardrails and a plan to keep improving it.",
    icon: Rocket,
  },
];
