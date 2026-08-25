import { caseStudies } from "@/content/case-studies";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  items: NavLink[];
};

/** Primary header navigation (mega-menu groups + simple links). */
export const primaryNav: (NavGroup | NavLink)[] = [
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Marketing", href: "/marketing", description: "AI video & blogs for online visibility" },
      { label: "Custom Software", href: "/services/custom-software", description: "Tailor-made software solutions" },
      { label: "Mobile App Development", href: "/services/mobile-app-development", description: "iOS & Android apps" },
      { label: "Web App Development", href: "/services/web-app-development", description: "Scalable web platforms" },
      { label: "Hire Developers", href: "/services/hire-developers", description: "Proficient dedicated engineers" },
      { label: "UI/UX Design", href: "/services/ui-ux-design", description: "Interface & experience design" },
      { label: "Artificial Intelligence", href: "/services/artificial-intelligence", description: "Custom AI & ML development" },
      { label: "QA & Testing", href: "/services/qa-testing", description: "Securing flawless execution" },
      { label: "Development Analytics", href: "/services/development-analytics", description: "Assess team effectiveness" },
      { label: "Software Maintenance", href: "/services/software-maintenance", description: "Skilled ongoing support" },
      { label: "DevOps", href: "/services/devops", description: "Streamlining the SDLC" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    items: [
      { label: "Labour Link", href: "/products/labour-link", description: "Farm labour management" },
      { label: "Habuild", href: "/products/habuild", description: "Operations automation" },
      { label: "Satvaa", href: "/products/satvaa", description: "Food-processing ERP" },
      { label: "Maroi Boerdery BK", href: "/products/maroi-boerdery", description: "Farm season planning" },
      { label: "Innowell", href: "/products/innowell", description: "Site-mapping SaaS" },
      { label: "DCM Shriram", href: "/products/dcm-shriram", description: "Crop monitoring at scale" },
      { label: "Star Bazaar", href: "/products/star-bazaar", description: "Procurement system" },
      { label: "BharatPe", href: "/products/bharatpe", description: "Payments microservices" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Agritech", href: "/industries/agritech", description: "Smart farming solutions" },
      { label: "EdTech", href: "/industries/edtech", description: "Tech-enhanced education" },
      { label: "Fintech", href: "/industries/fintech", description: "Digital finance solutions" },
      { label: "HealthTech", href: "/industries/healthtech", description: "Digitise healthcare" },
    ],
  },
  {
    // Generated from the case-study data: the tab itself opens the index, and
    // each item deep-links to one study.
    label: "Case Studies",
    href: "/case-studies",
    items: caseStudies.map((c) => ({
      label: c.clientName,
      href: `/case-studies/${c.slug}`,
      description: `${c.industry} · ${c.region}`,
    })),
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about", description: "India's premier software company" },
      { label: "Why Vidyayatan?", href: "/why-vidyayatan", description: "How we elevate your business" },
      { label: "Careers", href: "/careers", description: "Join our exceptional team" },
      { label: "Contact", href: "/contact", description: "Get in touch with the team" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog", description: "Insights & engineering notes" },
      { label: "Guides", href: "/guides", description: "In-depth how-to guides" },
      { label: "Pricing", href: "/pricing", description: "Engagement models & pricing" },
    ],
  },
];

/** Footer columns (kept in sync with primaryNav). */
export const footerNav: NavGroup[] = [
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Why Vidyayatan?", href: "/why-vidyayatan" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Services",
    items: (primaryNav[0] as NavGroup).items,
  },
  {
    label: "Products",
    items: (primaryNav[1] as NavGroup).items,
  },
  {
    label: "Industries",
    items: (primaryNav[2] as NavGroup).items,
  },
  {
    label: "Resources",
    items: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

export function isGroup(item: NavGroup | NavLink): item is NavGroup {
  return (item as NavGroup).items !== undefined;
}
