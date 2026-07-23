import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

/**
 * Central SEO helper. Every page calls this from `generateMetadata` (or exports
 * the result) so titles, canonicals and OG tags stay consistent.
 */
export function pageMetadata({
  title,
  description,
  path = "/",
  image = "/og/default.png",
}: PageMetaInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Enterprise Software Solutions`;
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
  };
}
