import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { caseStudies } from "@/content/case-studies";
import { getAllDocs } from "@/lib/mdx";

// Emit a static sitemap.xml for output: "export".
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "",
    "/about",
    "/why-vidyayatan",
    "/contact",
    "/careers",
    "/pricing",
    "/services",
    "/marketing",
    "/industries",
    "/products",
    "/case-studies",
    "/blog",
    "/guides",
  ];

  const dynamicPaths = [
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...products.map((p) => `/products/${p.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
  ];

  // Articles carry their real publish date rather than the build time, so
  // crawlers can tell which posts actually changed between deploys.
  const docs = [
    ...getAllDocs("blog").map((d) => ({ path: `/blog/${d.slug}`, date: d.frontmatter.date })),
    ...getAllDocs("guides").map((d) => ({ path: `/guides/${d.slug}`, date: d.frontmatter.date })),
  ];

  return [
    ...[...staticPaths, ...dynamicPaths].map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...docs.map(({ path, date }) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
