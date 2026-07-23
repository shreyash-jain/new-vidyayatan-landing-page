import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { Advantage } from "@/components/sections/advantage";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { saasFeatures, howWeHelp } from "@/content/company";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "Why Vidyayatan?",
  description:
    "Customized solutions, industry expertise, 24/7 support and long-term profitability — discover why businesses choose Vidyayatan over the alternatives.",
  path: "/why-vidyayatan",
});

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Vidyayatan?"
        title="Built to outperform the alternatives"
        description="Market options can look cheaper up front but often lead to poor code quality and high maintenance costs. We deliver robust, scalable solutions that reduce long-term expense and compound value over time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Vidyayatan?" }]}
      />

      <Advantage />

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading
            eyebrow="How we help"
            title="We take end-to-end responsibility"
            description="Offload the entire software lifecycle to a team that ships, scales, controls quality and keeps you secure."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howWeHelp.map((h, i) => (
              <Reveal key={h.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <CheckCircle2 className="size-6 text-primary" />
                  <h3 className="mt-4 font-display font-semibold text-navy">{h.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{h.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Long-term profitability"
            title="A slightly higher investment that pays for itself"
            description="Robust architecture and sound tech decisions mean lower maintenance, faster delivery and infrastructure that scales — so total cost of ownership drops over time."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {saasFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <f.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
