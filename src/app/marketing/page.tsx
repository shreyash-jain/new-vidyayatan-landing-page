import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Clock, PlayCircle, X } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { CtaButtons } from "@/components/common/cta-buttons";
import { CtaBand } from "@/components/common/cta-band";
import { SectionHeading } from "@/components/common/section-heading";
import { HeroReel } from "@/components/sections/hero-reel";
import { VideoCard } from "@/components/sections/video-card";
import { PricingTables } from "@/components/sections/pricing-tables";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pageMetadata } from "@/lib/metadata";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import { cn } from "@/lib/utils";
import { getAllDocs, formatDate } from "@/lib/mdx";
import { industryShowcase } from "@/content/clients-showcase";
import {
  marketingHero,
  marketingPillars,
  marketingOutcomes,
  marketingProcess,
  marketingFaqs,
  videoSamples,
  videoFormats,
  marketingCredentials,
  monthlyRetainer,
  pricingDeliverables,
  pricingNotClaimed,
  industryFits,
  journeyMilestones,
  researchInputs,
  reportMetrics,
  measurementCommitments,
} from "@/content/marketing";

const description =
  "AI video production and SEO content that grow your online visibility. We script, produce and publish video on a weekly cadence, backed by search-ready articles — and you own every asset.";

export const metadata: Metadata = pageMetadata({
  title: "Marketing — AI Video & Blogs",
  description,
  path: "/marketing",
});

export default function MarketingPage() {
  // Writing samples are the real articles on this site — nothing illustrative.
  // Counts are derived so the portfolio can never overstate what exists.
  const posts = getAllDocs("blog");
  const writingSamples = posts.slice(0, 6);
  const topicCount = new Set(
    posts.map((p) => p.frontmatter.tag).filter(Boolean),
  ).size;
  const clientCount = industryShowcase.reduce(
    (n, group) => n + group.clients.length,
    0,
  );

  // Concrete example shown inside each pillar card. The video is presenter-led
  // on purpose: the card claims "AI-generated presenters, voiceover and B-roll",
  // so a motion-graphics piece with no presenter would undersell it. Falls back
  // to the first sample so the card never renders empty.
  const pillarVideo =
    videoSamples.find((v) => v.format === "Episodic series") ?? videoSamples[0];
  const pillarPost = posts[0];

  const stats = [
    { value: `${videoSamples.length}`, label: "Video samples on this page" },
    { value: `${posts.length}`, label: "Articles published" },
    { value: `${industryShowcase.length}`, label: "Industries served" },
    { value: `${clientCount}+`, label: "Companies we have built for" },
  ];

  const jsonLd = [
    serviceJsonLd({
      name: "Marketing — AI Video and SEO Blogs",
      description,
      path: "/marketing",
      serviceTypes: [
        "AI video production",
        "Video marketing",
        "Content marketing",
        "Search engine optimisation",
      ],
    }),
    faqJsonLd(marketingFaqs),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Marketing", path: "/marketing" },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — leads with the work itself, not a description of it */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-0 h-[560px] w-[760px] rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <Container className="relative py-20 md:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
                {marketingHero.eyebrow}
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                {marketingHero.title}
              </h1>
              <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-white/70">
                {marketingHero.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {marketingHero.chips.map((c) => (
                  <span
                    key={c}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <Check className="size-4 shrink-0 text-primary" />
                    {c}
                  </span>
                ))}
              </div>
              <CtaButtons
                className="mt-10 flex flex-col gap-3 sm:flex-row"
                primaryLabel="Book a strategy call"
              />
            </div>

            {/* Showreel: three live players, sides cycling through the reel */}
            <HeroReel samples={videoSamples} />
          </div>
        </Container>
      </section>

      {/* At a glance — every figure derived from real data on this site */}
      <div className="border-b border-border bg-card">
        <Container>
          <dl className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* ── THE WORK — video first, immediately after the hero ── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Video we have produced"
            description="Our core offering. Every clip below was scripted, produced and cut by us — no studio, no crew, no reshoots."
          />

          {videoSamples.length ? (
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {videoSamples.map((v, i) => (
                <Reveal key={v.src} delay={(i % 3) * 0.06}>
                  <VideoCard sample={v} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Sample reels are shared on request.{" "}
              <Link href="/contact" className="font-semibold text-primary hover:underline">
                Ask for the reel
              </Link>
              .
            </p>
          )}
        </Container>
      </Section>

      {/* Formats — what else we can make */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Formats"
            title="What we can make for you"
            description="Same production pipeline, cut to whichever shape the channel needs."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videoFormats.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.06}>
                <Card className="h-full p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <PlayCircle className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display font-semibold text-navy">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {f.length}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Writing work */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="And the writing that backs it up"
            description="Live articles from our own blog — the same research, writing and editing standard we apply to client work. Read any of them in full."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {writingSamples.map((doc, i) => (
              <Reveal key={doc.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${doc.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {doc.frontmatter.tag ? (
                    <span className="self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {doc.frontmatter.tag}
                    </span>
                  ) : null}
                  <h3 className="mt-4 font-display text-base font-bold leading-snug text-navy transition-colors group-hover:text-primary">
                    {doc.frontmatter.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {doc.frontmatter.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <time dateTime={doc.frontmatter.date}>
                        {formatDate(doc.frontmatter.date)}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3.5" />
                        {doc.readingMinutes} min
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 text-primary" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-muted"
            >
              Read all {posts.length} articles
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* How the two engines fit together */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Video first, search underneath"
            description="AI video earns you attention now. Search content compounds it into a long tail. Video is where we start, and where most of the work happens."
          />

          <div className="mt-16 space-y-16">
            {marketingPillars.map((pillar, i) => (
              <Reveal key={pillar.id}>
                <div
                  id={pillar.id}
                  className="grid scroll-mt-24 items-start gap-10 lg:grid-cols-2"
                >
                  <div className={cn(i % 2 === 1 && "lg:order-2")}>
                    <div className="grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
                      <pillar.icon className="size-7" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 font-display text-lg font-semibold text-primary">
                      {pillar.tagline}
                    </p>
                    <p className="mt-5 max-w-[60ch] leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                    <p className="mt-5 border-l-2 border-primary/40 pl-4 text-sm font-medium text-navy/70">
                      {pillar.note}
                    </p>
                  </div>

                  <Card className={cn("p-7 md:p-8", i % 2 === 1 && "lg:order-1")}>
                    {/* Each pillar leads with a real piece of output, so the
                        claim above it is immediately checkable. */}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                      A real example
                    </h4>

                    {pillar.id === "ai-video" && pillarVideo ? (
                      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                        <div className="w-full max-w-[180px] shrink-0 overflow-hidden rounded-xl border border-border bg-navy shadow-soft">
                          <video
                            src={pillarVideo.src}
                            poster={pillarVideo.poster}
                            controls
                            preload="metadata"
                            playsInline
                            className="aspect-[9/16] h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {pillarVideo.format} · {pillarVideo.duration}
                          </p>
                          <p className="mt-1.5 font-display font-bold text-navy">
                            {pillarVideo.title}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {pillarVideo.description}
                          </p>
                        </div>
                      </div>
                    ) : null}

                    {pillar.id === "blogs" && pillarPost ? (
                      <Link
                        href={`/blog/${pillarPost.slug}`}
                        className="group mt-4 flex flex-col gap-4 rounded-xl border border-border p-4 transition-colors hover:border-primary/40 hover:bg-muted/50 sm:flex-row sm:items-start"
                      >
                        {pillarPost.frontmatter.image ? (
                          <div className="aspect-video w-full shrink-0 overflow-hidden rounded-lg border border-border bg-muted sm:w-[180px]">
                            <img
                              src={pillarPost.frontmatter.image}
                              alt={pillarPost.frontmatter.title}
                              width={1200}
                              height={630}
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ) : null}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {pillarPost.frontmatter.tag} · {pillarPost.readingMinutes} min
                            read
                          </p>
                          <p className="mt-1.5 font-display font-bold leading-snug text-navy transition-colors group-hover:text-primary">
                            {pillarPost.frontmatter.title}
                          </p>
                          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                            Read the article
                            <ArrowUpRight className="size-4" />
                          </span>
                        </div>
                      </Link>
                    ) : null}

                    <h4 className="mt-8 border-t border-border pt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      What is included
                    </h4>
                    <ul className="mt-5 space-y-3.5">
                      {pillar.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                            <Check className="size-4" />
                          </span>
                          <span className="text-sm leading-relaxed text-navy/80">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why it works"
            title="What you actually get out of it"
            description="Visibility is not a vanity metric when the content is aimed at the people who are close to buying."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketingOutcomes.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <o.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-navy">{o.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {o.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A cadence you can rely on"
            description="No mystery, no black box. You always know what is being produced and what it did."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marketingProcess.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 0.06}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="font-display text-3xl font-black text-primary/20">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Research method — how the plan is decided, with real inputs */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Data-backed research"
            title="How we decide what to make"
            description="Nothing gets scripted on a hunch. Five inputs feed the calendar, and every one of them is a data source you can see for yourself."
          />

          <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            {researchInputs.map((input, i) => (
              <div
                key={input.step}
                className="grid gap-4 border-b border-border p-6 last:border-0 md:grid-cols-[auto_1fr_1fr_1fr] md:items-start md:gap-8 md:p-7"
              >
                <span className="font-display text-2xl font-black text-primary/25">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display font-bold text-navy">{input.step}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {input.source}
                  </p>
                </div>
                <p className="text-sm italic leading-relaxed text-navy/70">
                  “{input.question}”
                </p>
                <div className="flex items-start gap-2.5">
                  <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" />
                  <p className="text-sm font-medium leading-relaxed text-navy">
                    {input.output}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Reporting — what "the result" actually means, itemised */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="The results we report"
            title="Exactly what lands in your inbox each month"
            description="Every metric below, measured against a baseline we capture before publishing anything — so the change is attributable rather than asserted."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reportMetrics.map((group, i) => (
              <Reveal key={group.title} delay={(i % 3) * 0.06}>
                <Card className="h-full p-7">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {group.metrics.map((m) => (
                      <li key={m.name}>
                        <div className="flex items-start gap-2.5">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <div>
                            <p className="text-sm font-semibold text-navy">{m.name}</p>
                            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                              {m.why}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {measurementCommitments.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 0.06}>
                <div className="flex h-full gap-3 rounded-2xl border border-primary/25 bg-card p-6">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-sm font-bold text-navy">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {c.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-border bg-card p-5 text-center text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-navy">On published results:</span>{" "}
            this is a new service line, so we are not showing you another company&rsquo;s
            numbers dressed up as a case study. What you get instead is the baseline,
            the method and a monthly report — and you will be the client whose results
            we ask to publish.
          </p>
        </Container>
      </Section>

      {/* Industries — who this works for, and why */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Who we work with"
            title="Industries that get the most out of this"
            description="Named companies below are real engagements. The format recommendations are our judgement about what suits each sector."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryFits.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 3) * 0.06}>
                <Card className="flex h-full flex-col p-7">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {ind.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    {ind.clients}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {ind.why}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                    {ind.formats.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-navy/70"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Journey — engineering track record, labelled as such */}
      <Section className="bg-navy text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
                Our journey
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                We built the products before we marketed them
              </h2>
              <p className="mt-5 leading-relaxed text-white/70">
                Vidyayatan started as an IIT-alumni-led software company in Bhopal.
                For years we have shipped the systems our clients run their
                businesses on — payments infrastructure, crop monitoring at national
                scale, labour platforms, learning products.
              </p>
              <p className="mt-4 leading-relaxed text-white/70">
                That is why the content work is different. We are not an agency
                learning your product from a brief; we are engineers who have built
                products like it. The numbers below are engineering milestones, not
                marketing metrics — we would rather show you a real track record in
                the wrong column than invent one in the right column.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="grid grid-cols-2 gap-4">
                {journeyMilestones.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/15 bg-white/5 p-6"
                  >
                    <dt className="font-display text-3xl font-extrabold text-primary">
                      {m.value}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-white">
                      {m.label}
                    </dd>
                    <dd className="mt-1 text-xs leading-snug text-white/60">
                      {m.note}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Who we are — credibility, stated precisely */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <Reveal>
              <span className="eyebrow">Who you would be working with</span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                An engineering company that writes
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Vidyayatan is an IIT-alumni-led software company in Bhopal. We have
                spent years building products for the industries we now write and
                produce video about — which is why we can explain a technical
                product without needing it translated first.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Marketing is a newer service line for us. The companies below are
                software clients; the work above is video and writing we have
                produced. We would rather show you both than imply a track record
                we have not built yet.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                {marketingCredentials.map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <Image
                      src={c.image}
                      alt={`${c.label} badge`}
                      width={48}
                      height={48}
                      className="size-12 object-contain"
                    />
                    <div>
                      <p className="text-sm font-semibold text-navy">{c.label}</p>
                      <p className="text-xs text-muted-foreground">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="p-7 md:p-8">
                <h3 className="font-display text-lg font-bold text-navy">
                  Companies we have built software for
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Across {industryShowcase.length} industries.
                </p>
                <div className="mt-6 space-y-5">
                  {industryShowcase.map((group) => (
                    <div key={group.key}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {group.tabLabel}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {group.clients.map((client) => (
                          <a
                            key={client.name}
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:border-primary/40 hover:text-primary"
                          >
                            {client.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Rate card — the real per-asset prices */}
      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="What each asset costs"
            description="Per-asset rates, published. No packages you have to decode, no minimum you have to hit before you learn the number."
          />

          <PricingTables />

          {/* Scope — what is delivered, and what is deliberately not promised */}
          <div className="mt-20 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <Reveal>
              <h3 className="font-display text-2xl font-bold tracking-tight text-navy">
                What you get for that
              </h3>
              <p className="mt-3 text-muted-foreground">
                Every engagement, whatever the volume, includes all of this.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {pricingDeliverables.map((d) => (
                  <div key={d.title} className="flex gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-4" />
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-bold text-navy">
                        {d.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {d.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="border-navy/15 bg-navy/[0.03] p-7 md:p-8">
                <h3 className="font-display text-lg font-bold text-navy">
                  {pricingNotClaimed.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pricingNotClaimed.intro}
                </p>
                <ul className="mt-5 space-y-3">
                  {pricingNotClaimed.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <X className="mt-0.5 size-4 shrink-0 text-navy/40" />
                      <span className="text-sm leading-relaxed text-navy/80">{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
                  {pricingNotClaimed.closing}
                </p>
              </Card>
            </Reveal>
          </div>

          {/* Monthly retainer */}
          <Reveal className="mt-12">
            <Card className="p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                <div>
                  <span className="eyebrow">Custom plan</span>
                  <h4 className="mt-4 font-display text-2xl font-bold tracking-tight text-navy">
                    {monthlyRetainer.title}
                  </h4>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {monthlyRetainer.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    Build your monthly plan
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
                <dl className="divide-y divide-border rounded-xl border border-border">
                  {monthlyRetainer.features.map((f) => (
                    <div
                      key={f.label}
                      className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-3.5"
                    >
                      <dt className="text-sm font-semibold text-navy">{f.label}</dt>
                      <dd className="text-sm text-muted-foreground">{f.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>
      {/* FAQ */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy">
                Frequently asked
              </h2>
              <p className="mt-4 text-muted-foreground">
                Straight answers about how the video and content actually get made.{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-primary hover:underline"
                >
                  Ask us anything
                </Link>
                .
              </p>
            </div>
            <Reveal>
              <Accordion type="single" collapsible className="space-y-3">
                {marketingFaqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{f.question}</AccordionTrigger>
                    <AccordionContent>{f.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Let's make you easier to find"
        description="Tell us who you sell to and what you want to be known for. We will come back with a video and content plan for the first quarter."
      />
    </>
  );
}
