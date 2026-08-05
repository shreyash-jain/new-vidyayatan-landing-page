import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetaInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  /** Set for blog/guide posts so social cards render as articles, not pages. */
  article?: {
    publishedTime: string;
    author?: string;
    tag?: string;
  };
};

/**
 * Central SEO helper. Every page calls this from `generateMetadata` (or exports
 * the result) so titles, canonicals and OG tags stay consistent.
 */
const DEFAULT_OG_IMAGE = "/og/default.png";

/**
 * Facebook, LinkedIn and X all reject SVG for og:image. Article hero art is
 * authored as SVG (it scales and stays crisp in-page), so fall back to the
 * raster default rather than emitting a card image that silently fails to
 * render on every social platform.
 */
function ogImage(image?: string): string {
  if (!image || image.endsWith(".svg")) return DEFAULT_OG_IMAGE;
  return image;
}

export function pageMetadata({
  title,
  description,
  path = "/",
  image,
  article,
}: PageMetaInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Enterprise Software Solutions`;
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;
  const card = ogImage(image);

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
      ...(article
        ? {
            type: "article" as const,
            publishedTime: article.publishedTime,
            modifiedTime: article.publishedTime,
            authors: [article.author ?? site.name],
            tags: article.tag ? [article.tag] : undefined,
          }
        : { type: "website" as const }),
      images: [{ url: card, width: 1200, height: 630, alt: title ?? site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [card],
    },
  };
}
