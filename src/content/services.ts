import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  Globe,
  UserPlus,
  Palette,
  BrainCircuit,
  BugPlay,
  BarChart3,
  LifeBuoy,
  Infinity as InfinityIcon,
} from "lucide-react";

export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  summary: string;
  overview: string;
  highlights: string[];
  deliverables: string[];
  useCases: string[];
  techStack?: string[];
  faqs: ServiceFaq[];
};

/** Shared engagement process rendered on every service page. */
export const serviceProcess = [
  {
    title: "Discovery",
    description:
      "We start by understanding your goals, constraints and workflows — so we build the right thing, not just a thing.",
  },
  {
    title: "Design & architecture",
    description:
      "We shape the solution and its architecture up front, keeping it scalable and maintainable from day one.",
  },
  {
    title: "Build & iterate",
    description:
      "We ship in focused milestones with regular demos, so you see progress and steer as we go.",
  },
  {
    title: "Launch & support",
    description:
      "We deploy, document and hand over — with optional ongoing support to keep everything running smoothly.",
  },
];

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software",
    short: "Tailor-made software solutions",
    icon: Code2,
    summary:
      "Bespoke software engineered around your exact workflows — not off-the-shelf compromises. We design, build and ship systems that fit how your business actually runs.",
    overview:
      "Off-the-shelf tools force your business to bend around their limitations. We do the opposite — engineering software around your exact processes, data and goals. From a first discovery workshop to a production system your team fully owns, we handle the entire lifecycle with senior engineers who have shipped software at real scale.",
    highlights: [
      "Requirements discovery & solution architecture",
      "Scalable, maintainable codebases",
      "Full ownership and documentation on delivery",
    ],
    deliverables: [
      "Technical discovery & architecture blueprint",
      "Production-grade application",
      "CI/CD, documentation & handover",
      "Post-launch support options",
    ],
    useCases: [
      "Replacing spreadsheets and manual processes with a purpose-built system",
      "Digitising an operation that no packaged product fits",
      "Building a proprietary platform that becomes a competitive advantage",
      "Modernising or replatforming ageing legacy software",
    ],
    techStack: ["React / Next.js", "Java Spring Boot", "Node.js", "PostgreSQL / MySQL", "AWS"],
    faqs: [
      {
        question: "How long does a custom build take?",
        answer:
          "It depends on scope, but we start with a focused first milestone you can see in weeks, not months, then iterate. We'll give you a clear estimate after discovery.",
      },
      {
        question: "Do we own the code?",
        answer:
          "Yes. With our outsourcing model all code, deliverables and documentation are transferred to you on completion.",
      },
      {
        question: "Can you start from an existing spec, design or codebase?",
        answer:
          "Absolutely — we can begin from your requirements, designs or an existing codebase, or run discovery with you from scratch.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "iOS & Android apps",
    icon: Smartphone,
    summary:
      "Native and cross-platform mobile apps that feel fast and reliable — built for real field conditions, offline resilience and scale.",
    overview:
      "Great mobile apps are fast, reliable and work even when the network doesn't. We build native and cross-platform apps designed for real-world conditions — including the offline-first field apps we've shipped for agritech and operations teams working far from a stable connection.",
    highlights: [
      "iOS, Android & cross-platform",
      "Offline-first & field-ready UX",
      "App store release & maintenance",
    ],
    deliverables: [
      "UX flows & prototypes",
      "Native / cross-platform build",
      "Store submission & release",
      "Analytics & crash monitoring",
    ],
    useCases: [
      "Field and workforce apps that must work offline",
      "Customer-facing apps for B2C products",
      "Companion apps for an existing web platform",
      "Internal tools for teams on the move",
    ],
    techStack: ["React Native", "Flutter", "Swift / Kotlin", "Offline sync", "Firebase"],
    faqs: [
      {
        question: "Native or cross-platform?",
        answer:
          "We recommend based on your needs — cross-platform for speed and shared code, native where performance or platform features demand it.",
      },
      {
        question: "Do you handle app store submission?",
        answer:
          "Yes, we manage the full release to the App Store and Google Play, plus post-launch updates.",
      },
    ],
  },
  {
    slug: "web-app-development",
    title: "Web App Development",
    short: "Scalable web platforms",
    icon: Globe,
    summary:
      "High-performance web applications and dashboards — from internal tools to customer-facing SaaS — built on modern, scalable foundations.",
    overview:
      "From internal dashboards to customer-facing SaaS, we build web applications on modern, scalable foundations. Clean APIs, a component-driven front end and cloud infrastructure that grows with you — the same kind of stack behind platforms we've built to handle millions of transactions.",
    highlights: [
      "SaaS platforms & admin dashboards",
      "Modern frameworks & clean APIs",
      "Performance and SEO conscious",
    ],
    deliverables: [
      "Component-driven front end",
      "Robust APIs & data model",
      "Role-based access & security",
      "Cloud deployment",
    ],
    useCases: [
      "Multi-tenant SaaS platforms",
      "Admin dashboards and internal tools",
      "Customer portals and self-service apps",
      "Data-heavy analytics interfaces",
    ],
    techStack: ["React / Next.js", "Java Spring Boot", "Node.js", "PostgreSQL", "AWS"],
    faqs: [
      {
        question: "Can you build a SaaS with multi-tenancy?",
        answer:
          "Yes — multi-tenant architecture is one of our specialities, from shared-database tenancy to fully isolated instances.",
      },
      {
        question: "Will it scale as we grow?",
        answer:
          "We architect for scale from day one so you can go from MVP to enterprise without a rewrite.",
      },
    ],
  },
  {
    slug: "hire-developers",
    title: "Hire Software Developers",
    short: "Proficient dedicated engineers",
    icon: UserPlus,
    summary:
      "Extend your team with proficient, hand-picked engineers who work exclusively under your direction — with none of the hiring overhead.",
    overview:
      "Hiring is slow and risky. Our dedicated-team model gives you proficient, vetted engineers who work exclusively under your direction — integrated into your standups and tools — that you can scale up or down as priorities change, without the overhead of recruiting and retaining in-house.",
    highlights: [
      "Hand-picked, vetted engineers",
      "Work under your supervision",
      "Scale the team up or down on demand",
    ],
    deliverables: [
      "Matched engineers within days",
      "Direct collaboration & standups",
      "Flexible monthly engagement",
      "Seamless knowledge transfer",
    ],
    useCases: [
      "Extending an in-house team under load",
      "Adding a skill you don't have on staff",
      "Spinning up a squad for a time-boxed initiative",
      "Long-term capacity without permanent headcount",
    ],
    techStack: ["Full-stack (React, Node, Java)", "Mobile (React Native, Flutter)", "AI / ML", "DevOps & cloud"],
    faqs: [
      {
        question: "How quickly can engineers start?",
        answer: "We can match and onboard suitable engineers within days, not weeks.",
      },
      {
        question: "Who manages the team?",
        answer:
          "You do — they work under your direction. We handle HR, retention and backfill so you don't have to.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "Software UI/UX Design",
    short: "Interface & experience design",
    icon: Palette,
    summary:
      "Interface and experience design that turns complex workflows into products people enjoy using — grounded in research, not guesswork.",
    overview:
      "Complex software doesn't have to feel complex. We turn intricate workflows into interfaces people actually enjoy using — grounded in user research and validated with real usability testing, then delivered as a reusable design system your engineers can build on.",
    highlights: [
      "User research & journey mapping",
      "Design systems & prototypes",
      "Usability-tested interfaces",
    ],
    deliverables: [
      "Wireframes & interactive prototypes",
      "Reusable design system",
      "High-fidelity UI",
      "Design-to-dev handoff",
    ],
    useCases: [
      "Redesigning a hard-to-use internal tool",
      "Designing a new product from scratch",
      "Creating a design system for consistency at scale",
      "Improving usability and conversion of an existing app",
    ],
    faqs: [
      {
        question: "Do you only design, or build too?",
        answer:
          "Both. Design can be a standalone engagement, or the first phase of a full build — with a clean design-to-dev handoff either way.",
      },
      {
        question: "How do you validate designs?",
        answer:
          "With user research up front and usability testing on prototypes before a line of production code is written.",
      },
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    short: "Custom AI & ML development",
    icon: BrainCircuit,
    summary:
      "Custom AI development — from LLM-powered features to predictive models — applied to real business problems with measurable outcomes.",
    overview:
      "AI is only useful when it solves a real problem. We apply LLMs, predictive models and machine learning to concrete business outcomes — from generative-AI features to analytics that inform decisions — with the data pipelines and monitoring needed to keep them reliable in production.",
    highlights: [
      "LLM & generative-AI features",
      "Predictive & analytics models",
      "Data pipelines & MLOps",
    ],
    deliverables: [
      "AI use-case & feasibility assessment",
      "Model development & evaluation",
      "Integration into your product",
      "Monitoring & iteration",
    ],
    useCases: [
      "LLM-powered assistants and content generation",
      "Predictive analytics and forecasting",
      "Document and data extraction",
      "Recommendation and personalisation",
    ],
    techStack: ["LLMs & generative AI", "Python / PyTorch", "Vector databases", "MLOps pipelines", "AWS"],
    faqs: [
      {
        question: "Do we need a lot of data to start?",
        answer:
          "Not always — many AI features use foundation models that need little or no training data. We assess feasibility first.",
      },
      {
        question: "How do you keep AI reliable?",
        answer:
          "With evaluation, guardrails and ongoing monitoring so quality holds up in production, not just in a demo.",
      },
    ],
  },
  {
    slug: "qa-testing",
    title: "Software QA & Testing",
    short: "Securing flawless execution",
    icon: BugPlay,
    summary:
      "Quality assurance that secures flawless execution — automated and manual testing that catches issues before your users do.",
    overview:
      "Quality is cheaper to build in than to bolt on. Our QA engineers combine automated and manual testing — integrated directly into your CI pipeline — so regressions and edge cases are caught before your users ever see them.",
    highlights: [
      "Automated & manual testing",
      "Regression & performance testing",
      "CI-integrated quality gates",
    ],
    deliverables: [
      "Test strategy & plan",
      "Automated test suites",
      "Bug tracking & reporting",
      "Release sign-off",
    ],
    useCases: [
      "Setting up automated testing from scratch",
      "Hardening a product before a major launch",
      "Adding a QA safety net to fast-moving teams",
      "Performance and load testing at scale",
    ],
    techStack: ["Selenium / Playwright", "Cypress", "JUnit / Jest", "Load testing (k6, JMeter)"],
    faqs: [
      {
        question: "Manual or automated testing?",
        answer:
          "Both, matched to the job — automation for regression and speed, manual for exploratory and UX testing.",
      },
      {
        question: "Can you integrate with our CI?",
        answer: "Yes — we wire tests into your CI/CD so every change is quality-gated automatically.",
      },
    ],
  },
  {
    slug: "development-analytics",
    title: "Development Analytics Tool",
    short: "Assess team effectiveness",
    icon: BarChart3,
    summary:
      "Measure and improve engineering effectiveness with clear analytics on delivery, throughput and quality across your development teams.",
    overview:
      "You can't improve what you can't see. Our development analytics give engineering leaders clear visibility into delivery, throughput and quality — surfacing bottlenecks and trends so you can make decisions with data instead of gut feel.",
    highlights: [
      "Delivery & throughput metrics",
      "Bottleneck identification",
      "Actionable dashboards",
    ],
    deliverables: [
      "Metrics & KPI definition",
      "Analytics dashboards",
      "Trend & health reporting",
      "Improvement recommendations",
    ],
    useCases: [
      "Understanding where delivery slows down",
      "Reporting engineering health to leadership",
      "Benchmarking and improving team effectiveness",
      "Spotting quality and reliability trends early",
    ],
    faqs: [
      {
        question: "What metrics do you track?",
        answer:
          "We define KPIs with you — typically throughput, cycle time, quality and reliability — rather than vanity metrics.",
      },
      {
        question: "Is this about monitoring individuals?",
        answer: "No. It's about improving the system and flow of work, not surveilling people.",
      },
    ],
  },
  {
    slug: "software-maintenance",
    title: "Software Maintenance",
    short: "Skilled ongoing support",
    icon: LifeBuoy,
    summary:
      "Skilled, dependable maintenance that keeps your systems secure, up to date and running smoothly — long after launch.",
    overview:
      "Launch is the start, not the finish. Our maintenance keeps your software secure, current and running smoothly — proactive monitoring, timely patches and steady enhancements under a clear SLA, so small issues never become outages.",
    highlights: [
      "Proactive monitoring & updates",
      "Bug fixes & enhancements",
      "Security patching",
    ],
    deliverables: [
      "SLA-based support",
      "Regular updates & patches",
      "Performance tuning",
      "Incident response",
    ],
    useCases: [
      "Keeping a live product healthy and secure",
      "Taking over maintenance of an inherited system",
      "Steady enhancements without a full project team",
      "Fast incident response when something breaks",
    ],
    faqs: [
      {
        question: "Can you maintain software you didn't build?",
        answer:
          "Yes — we regularly take over and stabilise inherited codebases, starting with an audit.",
      },
      {
        question: "What does the SLA cover?",
        answer:
          "Response times, monitoring, patching and agreed enhancement capacity — tailored to how critical the system is.",
      },
    ],
  },
  {
    slug: "devops",
    title: "DevOps",
    short: "Streamlining the SDLC",
    icon: InfinityIcon,
    summary:
      "Streamline your software delivery lifecycle with robust CI/CD, infrastructure-as-code and scalable, secure cloud operations.",
    overview:
      "Shipping should be a non-event. We streamline your delivery lifecycle with robust CI/CD, infrastructure-as-code and secure, scalable cloud operations — the foundations that let teams deploy quickly and reliably, with infrastructure that scales without surprises.",
    highlights: [
      "CI/CD pipelines",
      "Infrastructure as code",
      "Scalable, secure cloud (AWS)",
    ],
    deliverables: [
      "Pipeline setup & automation",
      "Cloud infrastructure design",
      "Monitoring & alerting",
      "Cost & reliability optimisation",
    ],
    useCases: [
      "Automating slow or manual deployments",
      "Setting up scalable, secure cloud infrastructure",
      "Adding monitoring, alerting and observability",
      "Optimising cloud cost and reliability",
    ],
    techStack: ["AWS", "Docker & Kubernetes", "Terraform", "CI/CD (GitHub Actions, Jenkins)", "Monitoring"],
    faqs: [
      {
        question: "Which cloud do you work with?",
        answer:
          "We specialise in AWS and design secure, scalable infrastructure suited to your workload.",
      },
      {
        question: "Can you improve an existing setup?",
        answer:
          "Yes — we often come in to automate deployments, add observability and cut cloud costs on existing systems.",
      },
    ],
  },
];

/** On-brand illustration per service (shared set, mapped thematically). */
export const serviceIllustration: Record<string, string> = {
  "custom-software": "/illustrations/collaboration.png",
  "mobile-app-development": "/illustrations/team.png",
  "web-app-development": "/illustrations/team.png",
  "hire-developers": "/illustrations/collaboration.png",
  "ui-ux-design": "/illustrations/meeting.png",
  "artificial-intelligence": "/illustrations/growth.png",
  "qa-testing": "/illustrations/meeting.png",
  "development-analytics": "/illustrations/growth.png",
  "software-maintenance": "/illustrations/collaboration.png",
  "devops": "/illustrations/growth.png",
};

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
