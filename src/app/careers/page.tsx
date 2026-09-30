import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { perks } from "@/content/careers";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "Become part of an exceptional, IIT-alumni-led engineering team. Work with Vidyayatan Technologies in Bhopal and remote.",
  path: "/careers",
});

export default function CareersPage() {
  const applyHref = `mailto:${site.contact.email}?subject=Application`;
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Become part of our exceptional team"
        description="We're an engineering-first team building software that runs at real scale. If you care about craft and impact, you'll feel at home here."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="Why join us" title="Work that matters, with people who care" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="font-display font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="Join us"
            title="Always keen to meet great people"
            description="We don't have specific openings listed right now, but we'd love to hear from engineers and designers who care about craft."
          />
          <div className="mt-8 text-center">
            <a
              href={applyHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
            >
              Send us your resume
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Container>
      </Section>

      <CtaBand title="Ready to build with us?" description="Reach out and tell us what you'd love to work on." />
    </>
  );
}
