import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/content/services";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "From custom software and mobile apps to AI, QA and DevOps — full-lifecycle software services from an IIT-alumni-led team.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full-lifecycle software services"
        description="Everything you need to design, build, ship and maintain great software — delivered by senior engineers who have done it at scale."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
                >
                  <div className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <s.icon className="size-6" />
                  </div>
                  <h2 className="mt-5 font-display text-lg font-bold text-navy">
                    {s.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                    Learn more
                    <ArrowRight className="size-4" />
                  </span>
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
