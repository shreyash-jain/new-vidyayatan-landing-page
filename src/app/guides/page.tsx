import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { DocCard } from "@/components/sections/doc-card";
import { CtaBand } from "@/components/common/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { getAllDocs } from "@/lib/mdx";

export const metadata: Metadata = pageMetadata({
  title: "Guides",
  description:
    "In-depth, practical guides on building, scaling and shipping software — from SaaS architecture to project kickoffs.",
  path: "/guides",
});

export default function GuidesPage() {
  const guides = getAllDocs("guides");
  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="In-depth, practical guides"
        description="Step-by-step guidance drawn from real projects — the kind of thing we wish we'd had a checklist for."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      />
      <Section>
        <Container>
          {guides.length ? (
            <>
              <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-border pb-4">
                <h2 className="font-display text-xl font-bold tracking-tight text-navy">
                  All guides
                </h2>
                <span className="text-sm text-muted-foreground">
                  {guides.length} {guides.length === 1 ? "guide" : "guides"}
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {guides.map((doc, i) => (
                  <Reveal key={doc.slug} delay={(i % 3) * 0.06}>
                    <DocCard doc={doc} collection="guides" />
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-muted-foreground">
              New guides are on the way.
            </p>
          )}
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
