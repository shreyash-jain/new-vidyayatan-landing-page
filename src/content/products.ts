export type CaseStudy = {
  headline: string;
  subhead: string;
  overview: string;
  facts: { label: string; value: string }[];
  challenges: { title: string; description: string }[];
  deliverables: { title: string; description: string }[];
  solution: string;
  techStack: { area: string; items: string[] }[];
  results: string[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  industry: string; // industry slug
  summary: string;
  description: string;
  client?: string;
  location?: string;
  highlights: string[];
  /** Short narrative for the product detail page (products without a full case study). */
  challenge?: string;
  solution?: string;
  results?: string[];
  techStack?: string[];
  caseStudy?: CaseStudy;
};

export const products: Product[] = [
  {
    slug: "labour-link",
    name: "Labour Link",
    category: "Farm labour management",
    industry: "agritech",
    client: "Labour Link",
    location: "Limpopo, South Africa",
    summary:
      "Simplifies managing farm laborers, HR, security and finance with built-in legal support for compliance.",
    description:
      "Labour Link simplifies managing farm laborers, HR, security and finance. It offers legal support for compliance and efficiency, automating processes to boost productivity and ensure smooth operations across the farm.",
    highlights: [
      "Labour & HR management",
      "Security and access control",
      "Finance & compliance automation",
      "Legal support built in",
    ],
    challenge:
      "Managing farm labourers, HR, security and legal compliance across a large operation meant juggling paperwork, spreadsheets and disconnected processes — slow, error-prone and hard to audit.",
    solution:
      "We built a single system to manage labour, HR, security and finance, with built-in support for legal compliance. Routine processes are automated end to end, so the team spends less time on admin and more on running the farm.",
    results: [
      "Labour, HR and finance managed in one place",
      "Automated processes that cut manual admin",
      "Built-in compliance and legal support",
      "Smoother, more auditable day-to-day operations",
    ],
    techStack: ["Mobile app", "Web dashboard", "Cloud (AWS)"],
  },
  {
    slug: "habuild",
    name: "Habuild",
    category: "Operations automation",
    industry: "edtech",
    client: "Habuild",
    summary:
      "Drove rapid growth by streamlining operations through automation, custom development and infrastructure.",
    description:
      "Vidyayatan's software solutions and tech expertise drove HABUILD's rapid growth — streamlining operations through automation, custom development, team building and infrastructure setup.",
    highlights: [
      "Process automation at scale",
      "Custom platform development",
      "Team building & infrastructure",
      "Growth-ready foundations",
    ],
    challenge:
      "HABUILD was growing fast and needed its operations to keep up — but manual processes and ad-hoc tooling were becoming a bottleneck to scale.",
    solution:
      "We drove their growth by streamlining operations through automation and custom development — building the platform, team and infrastructure needed to scale reliably.",
    results: [
      "Operations streamlined through automation",
      "Custom platform built for growth",
      "Team and infrastructure set up to scale",
      "A foundation ready for rapid expansion",
    ],
    techStack: ["Custom web platform", "Automation", "Cloud infrastructure"],
  },
  {
    slug: "satvaa",
    name: "Satvaa",
    category: "Food-processing ERP",
    industry: "agritech",
    client: "Satvaa",
    summary:
      "A powerful ERP for food processing companies and farm owners — purchase orders, inventory, vendors, traceability and shipments in one app.",
    description:
      "Satvaa is a powerful ERP tool for food processing companies and farm owners, streamlining purchase orders, inventory, vendors, teams, traceability and shipments in one intuitive app. Simplify operations and take control.",
    highlights: [
      "Purchase orders & inventory",
      "Vendor & team management",
      "End-to-end traceability",
      "Shipment tracking",
    ],
    challenge:
      "Food-processing companies and farm owners were managing purchase orders, inventory, vendors, traceability and shipments across disconnected tools — with no single source of truth.",
    solution:
      "Satvaa brings all of it into one intuitive ERP: purchase orders, inventory, vendors, teams, traceability and shipments — so operations are simpler and fully under control.",
    results: [
      "Purchase orders, inventory and vendors in one app",
      "End-to-end traceability",
      "Shipment tracking and team management",
      "Simpler operations with full visibility",
    ],
    techStack: ["Web application", "Mobile", "Cloud (AWS)"],
  },
  {
    slug: "maroi-boerdery",
    name: "Maroi Boerdery BK",
    category: "Farm season planning",
    industry: "agritech",
    client: "Maroi Boerdery BK",
    location: "Limpopo, South Africa",
    summary:
      "A web app to manage farm blocks, plan seasons, track inputs and create monthly pest calendars.",
    description:
      "Vidyayatan built a web app for South Africa's Maroi Boerdery BK to manage farm blocks, plan seasons, track inputs and create monthly pest calendars — streamlining their operations end to end.",
    highlights: [
      "Farm block management",
      "Season planning",
      "Input tracking",
      "Monthly pest calendars",
    ],
    challenge:
      "Maroi Boerdery needed to manage farm blocks, plan seasons and track inputs — and build monthly pest calendars — without a system built for how they actually farm.",
    solution:
      "We built a web app tailored to their operation: manage blocks, plan seasons, track inputs and generate monthly pest calendars, streamlining planning from end to end.",
    results: [
      "Farm blocks and seasons managed in one place",
      "Input tracking across the operation",
      "Automated monthly pest calendars",
      "Streamlined season planning",
    ],
    techStack: ["Web application", "Cloud (AWS)"],
  },
  {
    slug: "innowell",
    name: "Innowell",
    category: "Site-mapping SaaS",
    industry: "healthtech",
    client: "Innowell",
    location: "Chennai, India",
    summary:
      "A SaaS mapping tool to map sites, buildings, floors, zones and spaces while tracking detailed workstation statistics.",
    description:
      "Vidyayatan designed a SaaS mapping tool for Innowell, enabling them to map sites, buildings, floors, zones and spaces, while tracking detailed statistics for each workstation.",
    highlights: [
      "Hierarchical site mapping",
      "Zone & space management",
      "Per-workstation statistics",
      "Multi-tenant SaaS",
    ],
    challenge:
      "Innowell needed to map complex facilities — sites, buildings, floors, zones and spaces — and track detailed statistics for every workstation, at scale.",
    solution:
      "We designed a SaaS mapping tool that models the full hierarchy from site to workstation, with per-workstation statistics and multi-tenant support for their customers.",
    results: [
      "Full site-to-workstation hierarchy mapping",
      "Detailed per-workstation statistics",
      "Multi-tenant SaaS platform",
      "Streamlined facility management",
    ],
    techStack: ["SaaS web platform", "Multi-tenant architecture", "Cloud (AWS)"],
  },
  {
    slug: "dcm-shriram",
    name: "DCM Shriram",
    category: "Crop monitoring at scale",
    industry: "agritech",
    client: "DCM Shriram",
    location: "New Delhi, India",
    summary:
      "A digital tool managing 300,000 farms and 1,600 managers with real-time crop monitoring and task coordination.",
    description:
      "Vidyayatan developed a digital tool for DCM Shriram, managing 300,000 farms and 1,600 managers with real-time crop monitoring, task management and better coordination — boosting efficiency across the board.",
    highlights: [
      "300,000 farms managed",
      "1,600 field managers coordinated",
      "Real-time crop monitoring",
      "Task management & coordination",
    ],
    challenge:
      "Coordinating 300,000 farms and 1,600 managers with real-time crop monitoring and task management is a scale problem that manual processes simply can't handle.",
    solution:
      "We built a digital tool that manages 300,000 farms and 1,600 managers with real-time crop monitoring, task management and better field coordination — boosting efficiency across the board.",
    results: [
      "300,000 farms managed digitally",
      "1,600 field managers coordinated",
      "Real-time crop monitoring",
      "Improved efficiency and decision-making",
    ],
    techStack: ["Web platform", "Mobile field app", "Cloud (AWS)"],
  },
  {
    slug: "star-bazaar",
    name: "Star Bazaar",
    category: "Procurement system",
    industry: "agritech",
    client: "Star Bazaar",
    summary:
      "A procurement system optimising farmer and aggregator interactions, market rates, vendor management and yield predictions.",
    description:
      "Vidyayatan created a procurement system for Star Bazaar, optimising farmer and aggregator interactions, market rates, vendor management and yield predictions for improved efficiency and relationships.",
    highlights: [
      "Farmer & aggregator workflows",
      "Live market rates",
      "Vendor management",
      "Yield prediction",
    ],
    challenge:
      "Star Bazaar needed to optimise interactions between farmers and aggregators — market rates, vendor management and yield prediction — to run procurement efficiently.",
    solution:
      "We created a procurement system that streamlines farmer and aggregator interactions, surfaces live market rates, manages vendors and predicts yield — improving both efficiency and relationships.",
    results: [
      "Streamlined farmer–aggregator workflows",
      "Live market-rate visibility",
      "Better vendor management",
      "Yield prediction for smarter planning",
    ],
    techStack: ["Web platform", "Analytics", "Cloud (AWS)"],
  },
  {
    slug: "bharatpe",
    name: "BharatPe",
    category: "Payments microservices",
    industry: "fintech",
    client: "BharatPe",
    location: "India",
    summary:
      "A robust payment-processing and chargebacks system built on microservices — handling millions of transactions with automated reconciliation.",
    description:
      "Vidyayatan developed a robust payment processing system for BharatPe, streamlining transactions, enhancing merchant management and improving scalability with a microservices architecture — leading to faster payments and improved financial operations.",
    highlights: [
      "Microservices architecture",
      "Automated reconciliation",
      "Real-time analytics dashboards",
      "Scalable AWS infrastructure",
    ],
    caseStudy: {
      headline: "Optimising BharatPe's Payments with Microservices",
      subhead:
        "How Vidyayatan streamlined BharatPe's system to handle millions of transactions efficiently with custom microservices.",
      overview:
        "We worked with BharatPe, a leading fintech startup in India, to create a Swipe Chargebacks System for their QR-code-based payment solution. BharatPe enables merchants to accept payments from any UPI app — Google Pay, PhonePe, Paytm and more. With over 6 million merchants across 100 cities and over 10 billion transactions a year, reliability and scale were non-negotiable.",
      facts: [
        { label: "Merchants", value: "6M+" },
        { label: "Cities", value: "100+" },
        { label: "Transactions / yr", value: "10B+" },
        { label: "Architecture", value: "Microservices" },
      ],
      challenges: [
        {
          title: "Scalability limitations",
          description: "The legacy monolithic system struggled to scale with BharatPe's rapid growth.",
        },
        {
          title: "Transaction volume management",
          description: "The system couldn't efficiently handle increasing transaction volumes.",
        },
        {
          title: "Manual error handling",
          description: "Frequent manual intervention for failed transactions caused reconciliation delays.",
        },
        {
          title: "Lack of real-time analytics",
          description: "There was no real-time data to drive informed decisions.",
        },
        {
          title: "System upgrade challenges",
          description: "Upgrading components was difficult in a tightly coupled monolith.",
        },
      ],
      deliverables: [
        { title: "Microservices transition", description: "Shifted from a monolith to a modular microservices architecture for scalability." },
        { title: "Automated reconciliation", description: "Automated transaction reconciliation, reducing manual errors and delays." },
        { title: "Real-time analytics dashboards", description: "Intuitive dashboards providing real-time transaction insights." },
        { title: "Payment gateway integration", description: "Seamlessly integrated multiple payment gateways for smoother transactions." },
        { title: "CI/CD pipeline", description: "Set up continuous integration and delivery for fast, reliable deployments." },
        { title: "Robust API development", description: "Built strong APIs enabling easy integration with external systems." },
        { title: "Scalable AWS infrastructure", description: "Designed secure, scalable cloud infrastructure to support future growth." },
      ],
      solution:
        "We built a dashboard for operations agents to add and check the status of chargebacks, and a dashboard for merchants to check status and upload documents to verify a chargeback. The system was decomposed into independent, loosely coupled services — such as the chargeback service and the notification service — following a microservices architecture for modularity and scale.",
      techStack: [
        { area: "Backend", items: ["Java Spring Boot", "MySQL", "Apache Kafka", "AWS"] },
        { area: "Frontend", items: ["React", "Bootstrap", "Chart.js"] },
        { area: "Architecture", items: ["Microservices", "CI/CD", "Event streaming"] },
      ],
      results: [
        "Faster, more reliable payments at scale",
        "Reduced manual intervention through automated reconciliation",
        "Real-time visibility into transactions and disputes",
        "A modular platform that's easy to upgrade and extend",
      ],
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
