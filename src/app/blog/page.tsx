import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { DocCard } from "@/components/sections/doc-card";
import { DocCardFeatured } from "@/components/sections/doc-card-featured";
import { CtaBand } from "@/components/common/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { getAllDocs } from "@/lib/mdx";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Engineering notes, playbooks and insights from the Vidyayatan team — on building software that scales.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllDocs("blog");
  // With enough posts, lead with one article so the page reads as a
  // publication rather than an undifferentiated archive.
  const useFeatured = posts.length >= 3;
  const [featured, ...rest] = posts;
  const grid = useFeatured ? rest : posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights & engineering notes"
        description="Lessons from building software at scale — architecture, playbooks and the occasional strong opinion."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <Section>
        <Container>
          {posts.length ? (
            <>
              {useFeatured ? (
                <Reveal className="mb-16">
                  <DocCardFeatured doc={featured} collection="blog" />
                </Reveal>
              ) : null}

              <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-border pb-4">
                <h2 className="font-display text-xl font-bold tracking-tight text-navy">
                  All articles
                </h2>
                <span className="text-sm text-muted-foreground">
                  {posts.length} {posts.length === 1 ? "post" : "posts"}
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {grid.map((doc, i) => (
                  <Reveal key={doc.slug} delay={(i % 3) * 0.06}>
                    <DocCard doc={doc} collection="blog" />
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-muted-foreground">
              New posts are on the way.
            </p>
          )}
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
