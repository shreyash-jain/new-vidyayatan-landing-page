import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Zap } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { ProductCard } from "@/components/sections/product-card";
import { pageMetadata } from "@/lib/metadata";
import { industries, getIndustry } from "@/content/industries";
import { getProduct } from "@/content/products";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return pageMetadata({ title: "Industry" });
  return pageMetadata({
    title: industry.title,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = industry.relatedProducts
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        description={industry.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy">
                Challenges we solve
              </h2>
              <ul className="mt-6 space-y-3">
                {industry.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <Zap className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-navy/80">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-bold text-navy">
                What we build
              </h2>
              <ul className="mt-6 space-y-3">
                {industry.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-4" />
                    </span>
                    <span className="text-navy/80">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {related.length ? (
        <Section className="bg-muted/40">
          <Container>
            <h2 className="font-display text-2xl font-bold text-navy">
              {industry.title} products we&apos;ve built
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand title={`Building for ${industry.title}?`} />
    </>
  );
}
