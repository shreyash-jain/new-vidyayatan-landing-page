import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocArticle } from "@/components/sections/doc-article";
import { pageMetadata } from "@/lib/metadata";
import { getSlugs, getDoc } from "@/lib/mdx";

export function generateStaticParams() {
  return getSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc("blog", slug);
  if (!doc) return pageMetadata({ title: "Blog" });
  return pageMetadata({
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
    path: `/blog/${slug}`,
    image: doc.frontmatter.image,
    article: {
      publishedTime: doc.frontmatter.date,
      author: doc.frontmatter.author,
      tag: doc.frontmatter.tag,
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoc("blog", slug);
  if (!doc) notFound();
  return <DocArticle doc={doc} collection="blog" />;
}
