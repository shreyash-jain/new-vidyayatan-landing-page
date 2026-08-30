import { site } from "@/content/site";
import { inhouseProducts } from "@/content/inhouse-products";

/** Organization + LocalBusiness JSON-LD for the site root. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    // Stable @id so the products below, and vacademy.io's matching
    // parentOrganization, all point at one node rather than three lookalikes.
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.hq.city,
      addressRegion: site.hq.region,
      addressCountry: site.hq.country,
    },
    sameAs: [site.links.linkedin, site.links.twitter],
    /**
     * The products we build and own. This is the half of the entity graph that
     * lives here; vacademy.io declares the matching `parentOrganization` back.
     * Both directions matter: it is how a knowledge graph learns that
     * Vidyayatan builds Vacademy instead of treating them as unrelated sites,
     * and it makes the ownership explicit wherever this blog evaluates a
     * product we have a stake in.
     */
    subOrganization: inhouseProducts.map((p) => ({
      "@type": "Organization",
      name: p.name,
      url: p.url,
      description: p.tagline,
    })),
    owns: inhouseProducts.map((p) => ({
      "@type": "SoftwareApplication",
      name: p.name,
      url: p.url,
      applicationCategory: "BusinessApplication",
      description: p.description,
    })),
  };
}

/**
 * BlogPosting JSON-LD for a blog/guide article. Google uses this for article
 * rich results, so every field it reads must be an absolute URL.
 */
export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  author,
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author?: string;
  image?: string;
}) {
  const url = `${site.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: datePublished,
    image: image ? `${site.url}${image}` : `${site.url}/og/default.png`,
    // Posts are bylined to the team, not to individuals, so Organization is the
    // accurate author type here.
    author: {
      "@type": "Organization",
      name: author ?? site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand/logo-wordmark.png`,
      },
    },
  };
}

/** Service JSON-LD for a service landing page. */
export function serviceJsonLd({
  name,
  description,
  path,
  serviceTypes,
}: {
  name: string;
  description: string;
  path: string;
  serviceTypes?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: serviceTypes,
    areaServed: site.hq.country,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

/** FAQPage JSON-LD — drives the expandable FAQ rich result in search. */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
