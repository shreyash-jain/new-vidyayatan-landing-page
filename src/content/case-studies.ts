/* ---------------------------------------------------------------------------
 * Case studies. One object per engagement — both `/case-studies` and
 * `/case-studies/<slug>` are generated from this array at build time, so
 * adding a study never means writing a page. See docs/CASE_STUDIES.md.
 *
 * Content rule: every metric, quote and claim here must come from an approved
 * source (the client's own published figures, or a signed-off write-up). The
 * Home Review numbers below are Home Review's own published claims and are
 * labelled as such wherever they render.
 * ------------------------------------------------------------------------- */

/** Industries mirror `src/content/industries.ts` labels, plus the sectors we
 *  have delivered into without a dedicated industry page yet. */
export const industryOptions = [
  "Agritech",
  "EdTech",
  "Fintech",
  "HealthTech",
  "Real Estate",
  "Logistics",
  "Hospitality",
  "Maritime",
  "Other",
] as const;

export type Industry = (typeof industryOptions)[number];

/** Service tags double as filter chips, so keep this list short. */
export const serviceOptions = [
  "Web App",
  "Mobile App",
  "AI/ML",
  "CRM",
  "Cloud/DevOps",
  "UI/UX",
] as const;

export type ServiceTag = (typeof serviceOptions)[number];

/** Lucide icon keys allowed for solution features — see `feature-row.tsx`. */
export type FeatureIcon =
  | "workflow"
  | "gauge"
  | "shield"
  | "smartphone"
  | "brain"
  | "database"
  | "plug"
  | "users"
  | "map"
  | "bell";

export type SolutionFeature = {
  title: string;
  description: string;
  icon: FeatureIcon;
  /** Optional screenshot for the alternating feature rows. */
  image?: string;
  imageAlt?: string;
};

export type ResultMetric = {
  /** The number itself — "99%", "5.2x", "6,000+". Kept as a string so units,
   *  currencies and multipliers all render the same way. */
  metric: string;
  label: string;
  context?: string;
};

/** Optional before/after pairs, rendered as a simple CSS bar comparison. */
export type Comparison = {
  label: string;
  before: number;
  after: number;
  unit?: string;
  /** Set when lower is the better outcome (e.g. minutes to complete a task). */
  lowerIsBetter?: boolean;
};

export type Phase = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  authorName: string;
  authorRole: string;
  authorPhoto?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CaseStudyEntry = {
  slug: string;
  clientName: string;
  clientLogo?: string;
  industry: Industry;
  services: ServiceTag[];
  /** Rendered as labelled chips — capabilities or named tech, no logo files. */
  techStack: string[];
  /** Optional: plenty of approved write-ups don't disclose either of these. */
  engagementLength?: string;
  teamSize?: string;
  year: string;
  region: string;
  /** Emoji flag for the metadata row; optional. */
  regionFlag?: string;

  /** One-line outcome used as the card headline and the detail-page kicker. */
  cardTitle: string;
  cardThumbnail?: string;
  heroImage?: string;
  heroImageAlt?: string;
  /** 1200×630 JPEG/PNG for social cards. Screenshots are WebP, which Facebook
   *  and LinkedIn do not render reliably, so the card is a separate file. */
  ogImage?: string;
  /** 2–3 sentences. Doubles as the meta description and card preview. */
  summary: string;

  /** Long-form copy as paragraph arrays — matches the rest of src/content/. */
  challenge: string[];
  /** Optional pull-quote shown inside the challenge section. */
  challengePullQuote?: string;
  approach: string[];
  phases?: Phase[];
  solutionFeatures: SolutionFeature[];
  results: ResultMetric[];
  resultsNarrative: string[];
  comparisons?: Comparison[];

  testimonial?: Testimonial;
  gallery?: GalleryImage[];
  liveUrl?: string;
  featured: boolean;
};

export const caseStudies: CaseStudyEntry[] = [
  {
    slug: "home-review",
    clientName: "Home Review",
    industry: "Real Estate",
    services: ["Web App", "AI/ML", "UI/UX"],
    // Capabilities as published in the write-up rather than invented framework
    // names — replace with the real stack list if it is ever cleared to share.
    techStack: [
      "SaaS web application",
      "AI-assisted image analysis",
      "Computer vision",
      "CSV data migration tooling",
      "Two-factor authentication",
      "Encrypted document storage",
    ],
    year: "2026",
    region: "New Zealand",
    regionFlag: "🇳🇿",
    cardTitle:
      "AI-powered tenant screening across 6,000+ New Zealand properties",
    cardThumbnail: "/case-studies/home-review/dashboard.webp",
    heroImage: "/case-studies/home-review/dashboard.webp",
    heroImageAlt:
      "The Home Review manager dashboard — a centralised view of properties, active tenants and portfolio metrics",
    ogImage: "/og/case-study-home-review.jpg",
    summary:
      "Home Review is a tenant rating, screening and verification platform for property agencies and independent landlords across New Zealand. We built the platform end to end — a weighted tenant score built on historical landlord reviews, AI-assisted property inspections, bulk portfolio migration and two-factor-authenticated document storage — in a single portal that serves a solo landlord and an enterprise agency equally.",
    challenge: [
      "Before a platform like Home Review, New Zealand property managers were assessing tenant applications largely on trust and phone-call references, while running the operational side of a tenancy — forms, documents, inspections, renewals — across disconnected spreadsheets and generic CRM tools.",
      "That left three compounding problems. Verification was slow and subjective: a landlord had no single structured record of a prospective tenant's rental history, so screening depended on manual reference checks. Operational data was fragmented: property records, tenant documents and inspection reports lived in separate tools with no shared source of truth. And inspections were manual and inconsistent, with property condition assessed from one person's notes and no repeatable way to document damage or wear.",
      "Solving that required more than a form builder. It needed a purpose-built SaaS platform with a scoring engine, document management, bulk data migration tooling and AI-assisted inspection analysis — wrapped in an interface simple enough for a solo landlord and scalable enough for an agency managing thousands of properties.",
    ],
    challengePullQuote:
      "Property managers were losing hours to manual verification, and running their portfolios out of archaic spreadsheets and siloed CRMs.",
    approach: [
      "We ran this on our four-stage delivery process for AI-driven products — Discover, Data & Design, Build & Evaluate, Deploy & Monitor — applied to a vertical SaaS product rather than a generic CRM build.",
      "The starting point was Home Review's real-world workflow: import a portfolio, invite tenants, collect and weigh reviews, then make a leasing decision. Scoping the platform around that exact four-step sequence meant every feature that followed, from CSV import to the scoring engine, maps to a step a property manager already recognises.",
      "The centrepiece is the weighted tenant score. Rather than one opaque number, applicants are rated against configurable categories fed by historical landlord reviews held centrally in the platform. That required a data model able to hold a tenant's full rental history in one searchable, filterable record, and a scoring layer flexible enough for an agency to weight categories to its own risk appetite.",
    ],
    phases: [
      {
        title: "Discover",
        description:
          "Mapped the property-manager workflow end to end — import, invite, review, decide — and scoped the platform to that sequence instead of adapting a generic CRM.",
      },
      {
        title: "Data & Design",
        description:
          "Designed the weighted tenant scoring model and the data model behind it, holding a tenant's full rental history as one searchable record.",
      },
      {
        title: "Build & Evaluate",
        description:
          "Delivered the operational layer of a tenancy: custom application forms, a secure document archive, tenant lifecycle actions and AI-powered inspections.",
      },
      {
        title: "Deploy & Monitor",
        description:
          "Shipped the migration and security path agencies needed on day one — bulk CSV import with smart column mapping, portal-wide 2FA, encrypted documents and automated email alerts.",
      },
    ],
    solutionFeatures: [
      {
        title: "One dashboard for the whole portfolio",
        description:
          "Properties, active tenants and per-manager metrics in a single centralised view, split into a property-manager account and an admin account so an agency can run multiple managers under one roof. Properties are added and edited directly inside the portal.",
        icon: "workflow",
        image: "/case-studies/home-review/dashboard.webp",
        imageAlt:
          "Home Review manager dashboard showing properties, active tenants and portfolio metrics",
      },
      {
        title: "Weighted, category-based tenant scoring",
        description:
          "Applicants are rated against configurable categories rather than reduced to a single opaque number, with historical landlord reviews held centrally and reused across future applications. Tenant records stay searchable and filterable.",
        icon: "gauge",
        image: "/case-studies/home-review/tenant-ratings.webp",
        imageAlt:
          "Weighted, category-based tenant ratings feeding the Home Review verification score",
      },
      {
        title: "AI-powered property inspections",
        description:
          "Property imagery is analysed by AI to generate a room-by-room condition report rapidly, alongside a manual inspection path and support for inspections recorded straight from a phone. A walkthrough video or photo set becomes a structured damage and condition report.",
        icon: "brain",
        image: "/case-studies/home-review/ai-inspection-detail.webp",
        imageAlt:
          "AI-generated room-level inspection detail produced from recorded property imagery",
      },
      {
        title: "Bulk migration off spreadsheets",
        description:
          "CSV upload with smart column mapping moves a large portfolio of tenants and properties across in one pass, which is what makes leaving a legacy CRM or spreadsheet actually feasible for an agency.",
        icon: "database",
        image: "/case-studies/home-review/csv-mapping.webp",
        imageAlt:
          "Smart CSV column mapping for bulk-importing tenants in a single upload",
      },
      {
        title: "Security and notifications built in, not bolted on",
        description:
          "Two-factor authentication on every portal account with dedicated onboarding tutorials, encrypted tenant documents and metadata across the platform, and automated email alerts that keep staff and tenants notified without manual follow-up.",
        icon: "shield",
        image: "/case-studies/home-review/two-factor-auth.webp",
        imageAlt:
          "Two-factor authentication built into every Home Review property-manager account",
      },
    ],
    results: [
      {
        metric: "99%",
        label: "accuracy rate in tenant checks",
        context: "Home Review's published figure",
      },
      {
        metric: "5.2x",
        label: "faster leasing operations",
        context: "Home Review's published figure",
      },
      {
        metric: "6,000+",
        label: "properties actively managed",
        context: "on the platform",
      },
      {
        metric: "500+",
        label: "reviews, rated Excellent",
        context: "from property managers using the portal",
      },
    ],
    resultsNarrative: [
      "The figures above are the headline numbers Home Review publishes on its own site as a result of the platform: a 99% accuracy rate in tenant checks, leasing operations 5.2x faster, more than 6,000 properties actively managed and over 500 reviews at an Excellent rating. They are reproduced here as stated on homereview.co.nz.",
      "Underneath those numbers, the change is structural rather than incremental. Tenant screening moved from a manual, reference-call-driven process to a repeatable one: a weighted score built on landlord reviews the platform already holds, sitting in the same portal as the property record, the tenancy documents and the inspection history. A property manager makes the decision from one screen instead of assembling the picture from three tools and a phone call.",
      "The platform also scales across customer tiers without forking: the same portal serves an independent landlord with up to ten properties, an agency running multiple managers under one admin account with bulk CSV import, and enterprise companies with more than 25 managers or thousands of properties on a custom plan. Home Review describes its customer base as growing to thousands of property managers across New Zealand.",
    ],
    gallery: [
      {
        src: "/case-studies/home-review/inspections.webp",
        alt: "Inspection module — manual and AI-assisted condition reports side by side",
        width: 1600,
        height: 1000,
      },
      {
        src: "/case-studies/home-review/admin-properties.webp",
        alt: "Admin-level property view across an agency's full portfolio",
        width: 1600,
        height: 1000,
      },
      {
        src: "/case-studies/home-review/notifications.webp",
        alt: "Automated notification settings for staff and tenant alerts",
        width: 1600,
        height: 1000,
      },
      {
        src: "/case-studies/home-review/pricing-plans.webp",
        alt: "Home Review's tiered subscription plans, managed natively inside the platform",
        width: 1600,
        height: 1200,
      },
    ],
    liveUrl: "https://homereview.co.nz",
    featured: true,
  },
];

/* --- Lookups -------------------------------------------------------------- */

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/** Grid order: `featured` studies lead, everything else keeps authored order. */
export function getOrderedCaseStudies() {
  return [...caseStudies].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );
}

/** Hero proof stats, counted from the data so they can never drift. */
export function getCaseStudyStats() {
  return {
    clients: new Set(caseStudies.map((c) => c.clientName)).size,
    industries: new Set(caseStudies.map((c) => c.industry)).size,
    regions: new Set(caseStudies.map((c) => c.region)).size,
  };
}

/** Only the industries/services actually present get a filter chip. */
export function getUsedIndustries(): Industry[] {
  return industryOptions.filter((i) => caseStudies.some((c) => c.industry === i));
}

export function getUsedServices(): ServiceTag[] {
  return serviceOptions.filter((s) =>
    caseStudies.some((c) => c.services.includes(s)),
  );
}

/**
 * Prev/next navigation, preferring a neighbour in the same industry and
 * falling back to list order so both slots are filled wherever possible.
 */
export function getAdjacentCaseStudies(slug: string) {
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };

  const current = caseStudies[index];
  const sameIndustry = caseStudies.filter(
    (c) => c.slug !== slug && c.industry === current.industry,
  );
  const others = caseStudies.filter(
    (c) => c.slug !== slug && c.industry !== current.industry,
  );
  const ordered = [...sameIndustry, ...others];

  return { prev: ordered[0], next: ordered[1] };
}
