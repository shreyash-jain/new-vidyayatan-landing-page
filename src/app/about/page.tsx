import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { strengths, stats } from "@/content/company";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Vidyayatan Technologies is India's premier, IIT-alumni-led software development company — building tailor-made web, mobile, SaaS and AI solutions from Bhopal.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="India's premier software development company"
        description="Run by IIT alumni and headquartered in Bhopal, we build tailor-made software that helps enterprises and startups thrive in the digital age."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title="Engineering-first, outcomes-obsessed"
                description="We started Vidyayatan with a simple belief: great software comes from great engineering judgement. As an IIT-alumni-led team, we bring that rigour to every project — from a startup MVP to systems processing billions of transactions."
              />
              <p className="mt-5 text-muted-foreground">
                Today we partner with businesses across Agritech, Fintech, EdTech and
                manufacturing — delivering solutions that are scalable, secure and
                built to last. Whether you need us to own a project end to end, act
                as your long-term technology partner, or embed a dedicated team, we
                shape the engagement around your goals.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
                  >
                    <div className="font-display text-3xl font-bold text-primary">
                      {s.value}
                    </div>
                    <div className="mt-1 text-sm font-medium text-navy">{s.label}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{s.note}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="The values behind every build"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                Certified &amp; compliant
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                We follow internationally recognised standards for quality
                management and information security across our engagements.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <Image src="/badges/iso-9001.png" alt="ISO 9001 certified" width={192} height={192} className="h-20 w-20 object-contain" />
              <Image src="/badges/iso-27001.png" alt="ISO 27001 certified" width={192} height={192} className="h-20 w-20 object-contain" />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title="Let's build something great together" />
    </>
  );
}
