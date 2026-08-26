import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Briefcase, CalendarDays, Clock, Globe, Users } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { SectionHeading } from "@/components/common/section-heading";
import { CaseStudySectionNav } from "@/components/sections/case-study-section-nav";
import { CaseStudyImage } from "@/components/sections/case-study-image";
import { MetricStrip } from "@/components/sections/metric-block";
import { FeatureRow } from "@/components/sections/case-study-feature-row";
import { TechStackPanel } from "@/components/sections/case-study-tech-stack";
import { ComparisonBars } from "@/components/sections/case-study-comparison";
import { TestimonialBlock } from "@/components/sections/testimonial-block";
import { CaseStudyGallery } from "@/components/sections/case-study-gallery";
import { NextCaseStudyNav } from "@/components/sections/next-case-study-nav";
import { pageMetadata } from "@/lib/metadata";
import {
  breadcrumbJsonLd,
  caseStudyJsonLd,
  reviewJsonLd,
} from "@/lib/structured-data";
import {
  caseStudies,
  getAdjacentCaseStudies,
  getCaseStudy,
} from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return pageMetadata({ title: "Case Study" });

  return pageMetadata({
    title: `${study.clientName} — ${study.cardTitle}`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    image: study.ogImage ?? study.heroImage ?? study.cardThumbnail,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const { prev, next } = getAdjacentCaseStudies(study.slug);
  const path = `/case-studies/${study.slug}`;

  // Duration and team size are optional — plenty of approved write-ups don't
  // disclose either, and an empty metadata slot reads worse than none.
  const meta = [
    { icon: Briefcase, label: study.industry },
    study.engagementLength ? { icon: Clock, label: study.engagementLength } : null,
    study.teamSize ? { icon: Users, label: study.teamSize } : null,
    { icon: CalendarDays, label: study.year },
    {
      icon: Globe,
      label: study.regionFlag ? `${study.regionFlag} ${study.region}` : study.region,
    },
  ].filter((m): m is { icon: typeof Briefcase; label: string } => m !== null);

  const jsonLd = [
    caseStudyJsonLd({
      title: `${study.clientName} — ${study.cardTitle}`,
      description: study.summary,
      path,
      year: study.year,
      image: study.ogImage ?? study.heroImage ?? study.cardThumbnail,
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
      { name: study.clientName, path },
    ]),
    ...(study.testimonial
      ? [
          reviewJsonLd({
            quote: study.testimonial.quote,
            authorName: study.testimonial.authorName,
            itemName: `${study.services.join(", ")} for ${study.clientName}`,
          }),
        ]
      : []),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PageHero
        eyebrow={study.clientName}
        title={study.cardTitle}
        description={study.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: study.clientName },
        ]}
      >
        <div className="flex flex-col gap-5">
          {study.clientLogo ? (
            <Image
              src={study.clientLogo}
              alt={`${study.clientName} logo`}
              width={160}
              height={40}
              priority
              className="h-8 w-auto object-contain"
            />
          ) : null}

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {meta.map((m) => (
              <li key={m.label} className="inline-flex items-center gap-2">
                <m.icon className="size-4 text-primary" aria-hidden="true" />
                <span className="font-medium text-navy/80">{m.label}</span>
              </li>
            ))}
            <li className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider">
                {study.services.join(" · ")}
              </span>
            </li>
          </ul>

          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:underline"
            >
              Visit the live product
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </PageHero>

      <CaseStudySectionNav />

      {/* Full-bleed hero art, immediately below the fold line. */}
      <Container className="pt-10 md:pt-12">
        <Reveal className="aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-muted shadow-card">
          <CaseStudyImage
            src={study.heroImage}
            alt={study.heroImageAlt ?? `${study.clientName} product screenshot`}
            width={1600}
            height={1000}
            priority
            fallbackLabel={`${study.clientName} — product screenshot`}
            className="h-full w-full object-cover"
          />
        </Reveal>
      </Container>

      {/* Results strip sits above the long-form copy on purpose: it is the most
          important block on the page for a buyer skimming it. */}
      <Section className="pb-0 pt-12 md:pt-14">
        <Container>
          <Reveal>
            <h2 className="sr-only">Results at a glance</h2>
            <MetricStrip results={study.results} />
          </Reveal>
        </Container>
      </Section>

      <Section id="challenge" className="scroll-mt-32 py-14 md:py-20">
        <Container>
          {/* Narrative sections all use the same centred measure; only the
              visual blocks (cards, feature rows, panels) run full width. */}
          <div className="mx-auto max-w-[72ch]">
            <SectionHeading
              eyebrow="The challenge"
              title="What the business was up against"
            />
            <div className="mt-6 flex flex-col gap-5">
            {study.challenge.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}

              {study.challengePullQuote ? (
                <Reveal>
                  <blockquote className="mt-2 border-l-4 border-primary bg-accent/60 px-6 py-5 font-display text-lg font-semibold leading-relaxed text-navy sm:text-xl">
                    &ldquo;{study.challengePullQuote}&rdquo;
                  </blockquote>
                </Reveal>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="approach" className="scroll-mt-32 bg-muted/30 py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-[72ch]">
            <SectionHeading
              eyebrow="Our approach"
              title="How we scoped and ran it"
            />
            <div className="mt-6 flex flex-col gap-5">
            {study.approach.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
              ))}
            </div>
          </div>

          {study.phases?.length ? (
            <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {study.phases.map((phase, i) => (
                <li key={phase.title}>
                  <Reveal
                    delay={(i % 3) * 0.06}
                    className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-card p-6 shadow-soft"
                  >
                    <span className="font-display text-sm font-extrabold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-base font-bold text-navy">
                      {phase.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {phase.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          ) : null}
        </Container>
      </Section>

      <Section id="solution" className="scroll-mt-32 py-14 md:py-20">
        <Container>
          <SectionHeading eyebrow="The solution" title="What we built" />
          <div className="mt-10 flex flex-col gap-12 md:gap-16">
            {study.solutionFeatures.map((feature, i) => (
              <Reveal key={feature.title}>
                <FeatureRow
                  feature={feature}
                  index={i}
                  clientName={study.clientName}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <TechStackPanel techStack={study.techStack} />
          </Reveal>
        </Container>
      </Section>

      <Section id="results" className="scroll-mt-32 bg-muted/30 py-14 md:py-20">
        <Container>
          <SectionHeading eyebrow="Results" title="What actually changed" />
          <div
            className={
              study.comparisons?.length
                ? "mt-6 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]"
                : "mx-auto mt-6 max-w-[72ch]"
            }
          >
            <div className="flex flex-col gap-5">
              {study.resultsNarrative.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            {study.comparisons?.length ? (
              <Reveal delay={0.1}>
                <ComparisonBars comparisons={study.comparisons} />
              </Reveal>
            ) : null}
          </div>
        </Container>
      </Section>

      {study.testimonial ? (
        <Section className="py-14 md:py-20">
          <Container>
            <Reveal>
              <TestimonialBlock testimonial={study.testimonial} />
            </Reveal>
          </Container>
        </Section>
      ) : null}

      {study.gallery?.length ? (
        <Section className="pt-0">
          <Container>
            <SectionHeading align="left" eyebrow="Gallery" title="A closer look" />
            <div className="mt-8">
              <CaseStudyGallery images={study.gallery} />
            </div>
          </Container>
        </Section>
      ) : null}

      {prev || next ? (
        <Section className="pt-0">
          <Container>
            <NextCaseStudyNav prev={prev} next={next} />
            <div className="mt-8">
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-primary hover:underline"
              >
                View all case studies
              </Link>
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        title="Want results like these?"
        description="Tell us what you are trying to change. We'll come back with a scope, a timeline and the engagement model that fits."
      />
    </>
  );
}
