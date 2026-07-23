import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocArticle } from "@/components/sections/doc-article";
import { pageMetadata } from "@/lib/metadata";
import { getSlugs, getDoc } from "@/lib/mdx";

export function generateStaticParams() {
  return getSlugs("guides").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc("guides", slug);
  if (!doc) return pageMetadata({ title: "Guides" });
  return pageMetadata({
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoc("guides", slug);
  if (!doc) notFound();
  return <DocArticle doc={doc} collection="guides" />;
}
