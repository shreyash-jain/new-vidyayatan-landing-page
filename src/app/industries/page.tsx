import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { industries } from "@/content/industries";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description:
    "Deep domain expertise across Agritech, EdTech, Fintech and HealthTech — software built around how your industry actually works.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Deep expertise where it matters"
        description="We don't just write code — we understand the domains we build for. Explore how we deliver in your industry."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="card-hover group flex h-full gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft"
                >
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-navy text-white">
                    <ind.icon className="size-7" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-navy">
                      {ind.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {ind.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                      Explore {ind.title}
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
