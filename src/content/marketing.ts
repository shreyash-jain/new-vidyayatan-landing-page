import type { LucideIcon } from "lucide-react";
import {
  PenLine,
  Video,
  Search,
  Megaphone,
  Repeat,
  Target,
  LineChart,
  ScanSearch,
  Sparkles,
  FileSearch,
  Clapperboard,
  CalendarClock,
} from "lucide-react";

/**
 * Content for the Marketing service landing page (/marketing). Kept as typed
 * data like the rest of src/content so the page stays a thin renderer and the
 * copy can move to a CMS later without touching the component.
 */

export const marketingHero = {
  eyebrow: "Marketing portfolio",
  title: "AI video that gets you seen — and content that keeps you found",
  description:
    "AI video is what we do best. We script, produce and ship video at a pace no studio schedule allows, then back it with search-ready articles so the attention you earn keeps working long after the post scrolls past. Below is what we make, how we make it, and work you can look at right now.",
  points: [
    "AI video production without a studio, crew or reshoots",
    "Long-form articles drafted with AI, then edited and approved by people",
    "Everything published on your domain and channels — assets you keep",
  ],
  /** Short labels for the hero chip row — the points above are too long there. */
  chips: ["No studio, no crew", "Human-reviewed, always", "You own every asset"],
};

/**
 * Video work samples — real produced work only, never placeholder. The page
 * renders a capability panel instead if this array is empty.
 *
 * Files are self-hosted under /public/videos, transcoded to 720p H.264 with
 * +faststart so they begin playing before the whole file arrives. Keep each
 * under ~5 MB: Cloudflare Pages rejects any single asset over 25 MiB.
 */
export type VideoSample = {
  title: string;
  format: string;
  description: string;
  /** Path under /public/videos. */
  src: string;
  /** Poster frame under /public/videos/posters. */
  poster: string;
  /** Displayed runtime, e.g. "0:34". */
  duration: string;
  /** true for 9:16 shorts, false for 16:9. */
  vertical: boolean;
};

export const videoSamples: VideoSample[] = [
  {
    title: "Crack Recruitment",
    format: "Product explainer",
    description:
      "Animated motion-graphics explainer walking through a recruitment-preparation product, built entirely from brand assets — no footage, no shoot.",
    src: "/videos/edzumo-crack-recruitment.mp4",
    poster: "/videos/posters/edzumo-crack-recruitment.jpg",
    duration: "0:34",
    vertical: true,
  },
  {
    title: "Scored in seconds",
    format: "Feature walkthrough",
    description:
      "A single feature — scanning and auto-scoring an OMR answer sheet — shown end to end in half a minute, cut for in-app and social placement.",
    src: "/videos/edzumo-omr-scan.mp4",
    poster: "/videos/posters/edzumo-omr-scan.jpg",
    duration: "0:31",
    vertical: true,
  },
  {
    title: "Red Flags — Episode 2",
    format: "Episodic series",
    description:
      "Presenter-led short from an ongoing series, with kinetic captions and consistent episode branding so the format is instantly recognisable.",
    src: "/videos/kks-red-flags.mp4",
    poster: "/videos/posters/kks-red-flags.jpg",
    duration: "0:34",
    vertical: true,
  },
  {
    title: "Sold out by morning",
    format: "Brand story",
    description:
      "Narrative short on how a small label sells out overnight — archive footage, typographic beats and a single sharp takeaway.",
    src: "/videos/kks-sold-out.mp4",
    poster: "/videos/posters/kks-sold-out.jpg",
    duration: "0:55",
    vertical: true,
  },
  {
    title: "Fashion as cultural capital",
    format: "Editorial piece",
    description:
      "Long-form editorial cut built around craft close-ups and data callouts — the register you use when the subject deserves weight.",
    src: "/videos/kks-costume-institute.mp4",
    poster: "/videos/posters/kks-costume-institute.jpg",
    duration: "1:00",
    vertical: true,
  },
  {
    title: "AI presenter",
    format: "Synthetic presenter",
    description:
      "A fully AI-generated presenter delivering scripted copy. No camera, no studio — and the same script can be re-rendered whenever the messaging changes.",
    src: "/videos/ai-presenter-studio.mp4",
    poster: "/videos/posters/ai-presenter-studio.jpg",
    duration: "0:07",
    vertical: true,
  },
];

/** Formats we produce — capabilities, not claimed past work. */
export const videoFormats = [
  {
    title: "Product explainers",
    length: "60–120 seconds",
    description:
      "What the product does and who it is for, in the time someone will actually give you.",
  },
  {
    title: "Feature walkthroughs",
    length: "30–90 seconds",
    description:
      "Screen-led demos of a single feature, cut for release notes, onboarding and support.",
  },
  {
    title: "Social shorts",
    length: "15–45 seconds",
    description:
      "Vertical cuts for LinkedIn, Instagram and YouTube Shorts, captioned for silent playback.",
  },
  {
    title: "Founder and expert pieces",
    length: "60–180 seconds",
    description:
      "Point-of-view content that builds authority without booking a studio day.",
  },
];

/** Verifiable credentials — no claim here that is not independently checkable. */
export const marketingCredentials = [
  {
    label: "ISO 9001 certified",
    detail: "Quality management",
    image: "/badges/iso-9001.png",
  },
  {
    label: "ISO 27001 certified",
    detail: "Information security",
    image: "/badges/iso-27001.png",
  },
];

export type VisibilityChallenge = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const visibilityChallenges: VisibilityChallenge[] = [
  {
    title: "Video is too slow and too expensive",
    description:
      "Scripting, filming, editing and re-shooting makes video a quarterly event instead of a weekly habit. Most teams shoot a launch video, then nothing for six months — and the channel that rewards frequency most is the one they touch least.",
    icon: Clapperboard,
  },
  {
    title: "You publish, and nothing moves",
    description:
      "Generic posts written to a keyword list rank for nothing and convince nobody. Search rewards content with a point of view and real specifics — which is exactly what thin content lacks.",
    icon: FileSearch,
  },
  {
    title: "Nobody owns it, so it stops",
    description:
      "Content is everyone's job and no one's priority. Two months of momentum disappear the moment a launch or a deadline lands.",
    icon: CalendarClock,
  },
];

export type MarketingPillar = {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  description: string;
  includes: string[];
  note: string;
};

/** AI video leads — it is the core offering. Blog content supports it. */
export const marketingPillars: MarketingPillar[] = [
  {
    id: "ai-video",
    title: "AI video studio",
    tagline: "Our core offering — publish video weekly, without a film crew",
    icon: Video,
    description:
      "AI production removes the parts of video that make it slow — the studio, the crew, the reshoots. We handle scripting, generation, voice, captions and edits, so you get a consistent stream of short-form video for your website, LinkedIn, YouTube and ads. When a message changes, we regenerate rather than re-shoot, which is why a week is a realistic turnaround instead of a quarter.",
    includes: [
      "Scripting built from your positioning and real customer questions",
      "AI-generated presenters, voiceover and B-roll",
      "Subtitles, captions and platform-specific aspect ratios",
      "Product explainers, feature walkthroughs and social cuts",
      "Brand-consistent titles, lower-thirds and end cards",
      "Source files delivered so edits are never blocked on us",
    ],
    note: "Every video is scripted and reviewed by a human before it ships.",
  },
  {
    id: "blogs",
    title: "SEO blog engine",
    tagline: "The compounding layer underneath the video",
    icon: PenLine,
    description:
      "Video earns attention; search keeps it. We research what your buyers look for, map it against what you can credibly speak to, and publish articles on your own domain that keep pulling in readers months after a video has scrolled past. Every piece is written to be genuinely useful to a human first — that is what earns links, rankings and trust.",
    includes: [
      "Keyword and intent research mapped to your buying cycle",
      "Content calendar planned a quarter ahead",
      "Long-form articles AI-drafted, then edited and fact-checked by people",
      "On-page SEO: titles, meta, headings, internal linking",
      "Technical SEO fixes — structured data, sitemaps, crawlability",
      "Monthly reporting on rankings, impressions and clicks",
    ],
    note: "Every article is edited and approved by a person before it publishes. Published to your site and your CMS — you own every word.",
  },
];

export type MarketingOutcome = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const marketingOutcomes: MarketingOutcome[] = [
  {
    title: "Search visibility",
    description:
      "Rank for the questions your buyers ask before they are ready to talk to sales.",
    icon: Search,
  },
  {
    title: "Consistent publishing",
    description:
      "A predictable cadence that survives launches, holidays and busy quarters.",
    icon: Repeat,
  },
  {
    title: "Qualified enquiries",
    description:
      "Content aimed at buying intent, not vanity traffic that never converts.",
    icon: Target,
  },
  {
    title: "Compounding assets",
    description:
      "Articles and videos live on your domain and channels, working long after publication.",
    icon: LineChart,
  },
  {
    title: "Answer-engine ready",
    description:
      "Structured, well-sourced content is what AI search assistants cite when they answer.",
    icon: ScanSearch,
  },
  {
    title: "One coherent voice",
    description:
      "Blog and video share the same positioning, so every touchpoint reinforces the last.",
    icon: Megaphone,
  },
];

export const marketingProcess = [
  {
    title: "Audit & positioning",
    description:
      "We review your current visibility, competitors and analytics, then agree the handful of topics you can credibly own.",
  },
  {
    title: "Plan & calendar",
    description:
      "Keyword and intent research becomes a quarterly calendar of articles and video, with clear owners and dates.",
  },
  {
    title: "Produce & publish",
    description:
      "We write, film, edit and ship on a fixed cadence. Everything passes human review before it goes live.",
  },
  {
    title: "Measure & adjust",
    description:
      "Monthly reporting on what ranked, what converted and what did not — and the calendar changes accordingly.",
  },
];

/* ────────────────────────────  Pricing  ────────────────────────────
 * Rates from the Content Creation & Video Marketing proposal. Prices are USD
 * per unit; the blog packages are priced per bundle, not per article.
 * `unitPrice` is what the plan calculator multiplies, so it must stay the
 * true per-unit cost (blog bundles divide out below).
 */

export type PriceRow = {
  id: string;
  category: "Video" | "Social" | "Blog";
  service: string;
  qty: string;
  price: number;
  /** Per-unit cost used by the plan calculator. */
  unitPrice: number;
  includes: string;
};

export const contentPricing: PriceRow[] = [
  {
    id: "reel",
    category: "Video",
    service: "Instagram Reel (product reveal / marketing)",
    qty: "1 min",
    price: 20,
    unitPrice: 20,
    includes: "Hook-based script, trendy edits, high-engagement format",
  },
  {
    id: "story",
    category: "Video",
    service: "Storytelling / documentary",
    qty: "3 mins",
    price: 38,
    unitPrice: 38,
    includes: "Narrative storytelling, brand messaging, pro editing",
  },
  {
    id: "demo",
    category: "Video",
    service: "SaaS demo / explainer",
    qty: "3–5 mins",
    price: 40,
    unitPrice: 40,
    includes: "Product walkthrough, voiceover, UI explanation",
  },
  {
    id: "post",
    category: "Social",
    service: "Instagram / Facebook post",
    qty: "Per post",
    price: 3,
    unitPrice: 3,
    includes: "Creative design, captions, brand visuals",
  },
  {
    id: "blog5",
    category: "Blog",
    service: "Blog package",
    qty: "5 blogs",
    price: 100,
    unitPrice: 20,
    includes: "SEO optimised, structured, ready to publish",
  },
  {
    id: "blog10",
    category: "Blog",
    service: "Blog package",
    qty: "10 blogs",
    price: 160,
    unitPrice: 16,
    includes: "SEO optimised, structured, ready to publish",
  },
];

/**
 * Example monthly bundles. Line items reference contentPricing by id and the
 * totals are computed at render time — so a price change here can never leave
 * a stale number on the page.
 */
export type PlanLine = { id: string; qty: number; label: string };

export type ExamplePlan = {
  name: string;
  tagline: string;
  lines: PlanLine[];
  highlighted: boolean;
};

export const examplePlans: ExamplePlan[] = [
  {
    name: "Starter",
    tagline: "Prove the channel works before scaling it",
    lines: [
      { id: "reel", qty: 4, label: "Instagram reels" },
      { id: "blog5", qty: 1, label: "Blog package (5 articles)" },
      { id: "post", qty: 8, label: "Social posts" },
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "A real cadence across video, social and search",
    lines: [
      { id: "reel", qty: 6, label: "Instagram reels" },
      { id: "story", qty: 2, label: "Storytelling videos" },
      { id: "blog10", qty: 1, label: "Blog package (10 articles)" },
      { id: "post", qty: 12, label: "Social posts" },
    ],
    highlighted: true,
  },
  {
    name: "Full Funnel",
    tagline: "Top-of-funnel reach plus product-led conversion",
    lines: [
      { id: "reel", qty: 10, label: "Instagram reels" },
      { id: "story", qty: 2, label: "Storytelling videos" },
      { id: "demo", qty: 2, label: "SaaS demos / explainers" },
      { id: "blog10", qty: 1, label: "Blog package (10 articles)" },
      { id: "post", qty: 20, label: "Social posts" },
    ],
    highlighted: false,
  },
];

/** Blog bundles are priced per package; everything else is per unit. */
export function planTotal(plan: ExamplePlan): number {
  return plan.lines.reduce((sum, line) => {
    const row = contentPricing.find((r) => r.id === line.id);
    if (!row) return sum;
    return sum + row.price * line.qty;
  }, 0);
}

/** Total number of deliverables in a plan, for the "assets per month" figure. */
export function planAssetCount(plan: ExamplePlan): number {
  return plan.lines.reduce((sum, line) => {
    if (line.id === "blog5") return sum + 5 * line.qty;
    if (line.id === "blog10") return sum + 10 * line.qty;
    return sum + line.qty;
  }, 0);
}

export const monthlyRetainer = {
  title: "Monthly retainer",
  description:
    "Mix the formats above into one plan. You tell us the volume; we handle planning, production and delivery on a fixed monthly cadence.",
  features: [
    { label: "Content mix", detail: "Reels + videos + posts + blogs" },
    { label: "Strategy", detail: "Monthly content planning and calendar" },
    { label: "Revisions", detail: "2–3 revisions per piece of content" },
    { label: "Delivery", detail: "Priority and consistent delivery" },
    { label: "Goal", detail: "Growth, engagement and lead generation" },
  ],
};

/**
 * Industries. The "clients" names are real engagements from
 * src/content/clients-showcase.ts; the format recommendations are our judgement
 * about what suits each sector, not a claim of past marketing results.
 */
export type IndustryFit = {
  name: string;
  clients: string;
  why: string;
  formats: string[];
};

export const industryFits: IndustryFit[] = [
  {
    name: "SaaS & Fintech",
    clients: "BharatPe, Vacademy",
    why: "Products that need explaining before anyone buys. Demos and walkthroughs shorten the gap between landing and understanding.",
    formats: ["SaaS demo / explainer", "Feature walkthrough", "Comparison blogs"],
  },
  {
    name: "EdTech",
    clients: "Shiksha Nation, IIRF, VetEducation",
    why: "Long consideration cycles and anxious buyers. Search content answers the questions asked months before enrolment.",
    formats: ["Explainer reels", "SEO blogs", "Founder pieces"],
  },
  {
    name: "D2C & Fashion",
    clients: "Krazy Kreators",
    why: "Volume and freshness win the feed. Weekly short-form is the whole game, and reshoots are what usually kill it.",
    formats: ["Product reveal reels", "Brand story", "Social posts"],
  },
  {
    name: "Agritech & Manufacturing",
    clients: "DCM Shriram, Labour Link, Innowell",
    why: "Technical operations that are hard to photograph and harder to explain. Motion graphics do what a site visit cannot.",
    formats: ["Documentary / storytelling", "Process explainers", "Case-study blogs"],
  },
  {
    name: "Health & Wellness",
    clients: "Habuild, Aanandham",
    why: "Trust is the conversion barrier. Consistent presenter-led video builds familiarity faster than any ad.",
    formats: ["Presenter series", "Episodic shorts", "Educational blogs"],
  },
  {
    name: "Real Estate & Services",
    clients: "Home Review",
    why: "High-value, low-frequency purchases where credibility decides the shortlist.",
    formats: ["Walkthrough video", "Testimonial cuts", "Local SEO blogs"],
  },
];

/**
 * Journey. Every figure here is a real software-delivery milestone carried over
 * from src/content/company.ts — stated as engineering track record, never as
 * marketing performance, which we do not yet have numbers for.
 */
export const journeyMilestones = [
  {
    value: "10B+",
    label: "Transactions processed a year",
    note: "Payments infrastructure we built for BharatPe",
  },
  {
    value: "300K",
    label: "Farms managed",
    note: "Crop-monitoring platform for DCM Shriram",
  },
  {
    value: "6M+",
    label: "Merchants served",
    note: "Across the products we have shipped",
  },
  {
    value: "14+",
    label: "Companies partnered with",
    note: "Across six industries, from startups to enterprise",
  },
];

/**
 * Research method and reporting framework. These describe how we work and what
 * we commit to measuring — deliberately not outcome numbers, which we will only
 * publish once we have real client results to publish.
 */
export type ResearchInput = {
  step: string;
  source: string;
  question: string;
  output: string;
};

export const researchInputs: ResearchInput[] = [
  {
    step: "Search demand",
    source: "Keyword volume, difficulty and SERP analysis",
    question: "What is your market actually typing, and can we realistically rank for it?",
    output: "A ranked topic list scored by volume against difficulty",
  },
  {
    step: "Your own analytics",
    source: "Google Search Console, GA4, your CRM",
    question: "Which pages already pull traffic, and which ones convert once they do?",
    output: "A baseline snapshot, captured before we publish anything",
  },
  {
    step: "Competitor gap",
    source: "Ranking pages of the three competitors you name",
    question: "What are they ranking for that you are invisible on?",
    output: "The gap list — topics with proven demand and no strong incumbent",
  },
  {
    step: "Voice of customer",
    source: "Sales calls, support tickets, review sites",
    question: "What do buyers ask before they commit, in their words not yours?",
    output: "Scripts and article angles built on real objections",
  },
  {
    step: "Channel performance",
    source: "Your existing social and video analytics",
    question: "Which formats, hooks and lengths already work for this audience?",
    output: "Format mix for the first month, revised monthly on results",
  },
];

export type MetricGroup = {
  title: string;
  metrics: { name: string; why: string }[];
};

export const reportMetrics: MetricGroup[] = [
  {
    title: "Video",
    metrics: [
      { name: "Views and reach", why: "Raw distribution — the top of everything else" },
      { name: "3-second and 50% watch-through", why: "Whether the hook and the middle hold" },
      { name: "Saves and shares", why: "The strongest signal that content was worth someone's time" },
      { name: "Follower growth", why: "Compounding audience you do not pay for twice" },
      { name: "Click-through to site", why: "Where attention turns into a visit" },
    ],
  },
  {
    title: "Search",
    metrics: [
      { name: "Impressions", why: "How often you appear — moves first, before clicks" },
      { name: "Clicks and CTR", why: "Whether the title and description earn the click" },
      { name: "Average position", why: "Direction of travel per keyword, tracked monthly" },
      { name: "Ranking keyword count", why: "Breadth of the long tail you now own" },
      { name: "Pages entering top 10", why: "The threshold where traffic becomes meaningful" },
    ],
  },
  {
    title: "Business",
    metrics: [
      { name: "Assets delivered", why: "What you paid for, itemised against the plan" },
      { name: "Cost per asset", why: "Calculated, not estimated — from the rate card" },
      { name: "Enquiries attributed", why: "Leads traced to a specific piece of content" },
      { name: "Cost per enquiry", why: "The number that decides whether we scale or stop" },
    ],
  },
];

export const measurementCommitments = [
  {
    title: "Baseline before we publish",
    detail:
      "Week one is a snapshot of where you stand — traffic, rankings, engagement, enquiries. Without it, no later number means anything.",
  },
  {
    title: "One report a month",
    detail:
      "Every metric above, against the baseline and the previous month. Sent whether the numbers are good or bad.",
  },
  {
    title: "The calendar changes on the data",
    detail:
      "Topics and formats that underperform get dropped. What works gets more volume. The plan is a hypothesis, not a contract.",
  },
  {
    title: "You keep the measurement",
    detail:
      "Dashboards and tracking live in your accounts. If we stop working together, the reporting does not switch off.",
  },
];

export const marketingFaqs = [
  {
    question: "What exactly is AI about the video?",
    answer:
      "Production. Presenters, voiceover, B-roll and edits are AI-generated, which is what removes the studio, the crew and the reshoot cycle. Scripting and final review are human. When your messaging changes, we regenerate the video instead of booking another shoot — that is the whole reason a weekly cadence becomes realistic.",
  },
  {
    question: "Will AI video look cheap or generic?",
    answer:
      "It can, and that is down to the work around the generation rather than the tools. We script to your positioning, keep presenters, titles and lower-thirds consistent with your brand, and a person reviews every cut before it ships. If a piece does not clear that bar, we regenerate it — which costs hours, not another shoot day.",
  },
  {
    question: "Is the blog content AI-generated?",
    answer:
      "Yes — drafted with AI, then edited, fact-checked and approved by a person before anything publishes. We are an AI production company; pretending otherwise would be odd. What matters is the review layer: a draft that is vague, generic or factually wrong does not get past it. That is the difference between AI-assisted content and the thin AI-spun pages search engines have spent the last two years learning to filter out.",
  },
  {
    question: "How long before we see results?",
    answer:
      "Video and social visibility move within weeks. Search is slower — meaningful ranking movement typically takes a few months of consistent publishing, and compounds after that. Anyone promising first-page rankings in thirty days is either buying ads or misleading you.",
  },
  {
    question: "Do we own the content?",
    answer:
      "Entirely. Articles are published on your domain and video source files are handed over. If you stop working with us, everything we produced stays yours and keeps working.",
  },
  {
    question: "Do you need input from our team?",
    answer:
      "Some, and it is worth it. The content that performs is the content with real specifics in it — how your product actually works, what customers actually ask. We keep this light: a short kickoff, then roughly one review call a month plus async feedback on drafts.",
  },
  {
    question: "Can you work with our existing marketing team?",
    answer:
      "Yes. We regularly act as the production arm for an in-house marketer who owns strategy, and we can also take the strategy end if there is nobody in that seat. Either way we work inside your tools and your calendar.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We are strongest where the product needs explaining — B2B SaaS, fintech, agritech, edtech and healthtech. That is also where we build software, so we can write about technical products without needing everything translated first.",
  },
];
