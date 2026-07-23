import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { products } from "@/content/products";
import { getSlugs } from "@/lib/mdx";

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
    "/industries",
    "/products",
    "/blog",
    "/guides",
  ];

  const dynamicPaths = [
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...products.map((p) => `/products/${p.slug}`),
    ...getSlugs("blog").map((s) => `/blog/${s}`),
    ...getSlugs("guides").map((s) => `/guides/${s}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
