import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { CtaBand } from "@/components/common/cta-band";
import { CaseStudyExplorer } from "@/components/sections/case-study-explorer";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import {
  getCaseStudyStats,
  getOrderedCaseStudies,
  getUsedIndustries,
  getUsedServices,
} from "@/content/case-studies";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description:
    "How we build software that changes how a business runs — the constraint, the approach and the measured outcome, written up in full.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const stats = getCaseStudyStats();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <PageHero
        align="center"
        eyebrow="Case Studies"
        title="Our work, with the numbers attached"
        description="Every engagement below is written up the same way: the constraint the business was actually under, how we scoped it, and what measurably changed afterwards."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      >
        <dl className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {[
            { value: stats.clients, label: stats.clients === 1 ? "client" : "clients" },
            {
              value: stats.industries,
              label: stats.industries === 1 ? "industry" : "industries",
            },
            {
              value: stats.regions,
              label: stats.regions === 1 ? "country" : "countries",
            },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <dd className="font-display text-3xl font-extrabold leading-none text-primary">
                {stat.value}
              </dd>
              <dt className="text-sm font-semibold text-navy/70">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section className="py-14 md:py-20">
        <Container>
          {/* Suspense boundary is required: the explorer reads the query string
              via useSearchParams, and this page is prerendered at build time. */}
          <Suspense
            fallback={
              <div className="h-40 rounded-3xl border border-border bg-muted/40" />
            }
          >
            <CaseStudyExplorer
              studies={getOrderedCaseStudies()}
              industries={getUsedIndustries()}
              services={getUsedServices()}
            />
          </Suspense>
        </Container>
      </Section>

      <CtaBand
        title="Have a project in mind?"
        description="Tell us what you are trying to change in your business and we'll tell you honestly whether we are the right team for it."
      />
    </>
  );
}
