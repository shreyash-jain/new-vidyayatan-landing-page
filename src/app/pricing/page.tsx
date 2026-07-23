import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { BookMeetingButton } from "@/components/common/book-meeting-button";
import { CtaBand } from "@/components/common/cta-band";
import { cn } from "@/lib/utils";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description:
    "Flexible, transparent engagement models — fixed-scope projects, dedicated teams and long-term partnerships. Pricing tailored to your project.",
  path: "/pricing",
});

const tiers = [
  {
    name: "Project Outsourcing",
    tagline: "Best for well-defined products",
    price: "Fixed quote",
    priceNote: "per project",
    features: [
      "Fixed scope & transparent milestones",
      "Full ownership handed over on delivery",
      "Documentation & training included",
      "Optional post-launch support",
    ],
    highlighted: false,
  },
  {
    name: "Dedicated Team",
    tagline: "Best for evolving roadmaps",
    price: "Monthly",
    priceNote: "per engineer",
    features: [
      "Hand-picked, vetted engineers",
      "Work under your direction",
      "Scale up or down on demand",
      "Direct collaboration & standups",
      "Seamless knowledge transfer",
    ],
    highlighted: true,
  },
  {
    name: "Technology Partnership",
    tagline: "Best for long-term growth",
    price: "Retainer",
    priceNote: "tailored",
    features: [
      "Continuous discovery & iteration",
      "Architecture & infrastructure guidance",
      "Dedicated point of contact",
      "Priority support & maintenance",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing that fits how you work"
        description="Every project is different, so we price around your goals rather than a rigid menu. Pick the engagement model that fits — we'll put together a tailored quote."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />

      <Section>
        <Container>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border bg-card p-8 shadow-soft",
                    tier.highlighted
                      ? "border-primary shadow-card ring-1 ring-primary"
                      : "border-border",
                  )}
                >
                  {tier.highlighted ? (
                    <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most popular
                    </span>
                  ) : null}
                  <h2 className="font-display text-xl font-bold text-navy">{tier.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-navy">
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{tier.priceNote}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-navy/80">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <BookMeetingButton
                    className="mt-8 w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    Get a quote
                    <ArrowRight />
                  </BookMeetingButton>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
            Not sure which model fits?{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Talk to us
            </Link>{" "}
            and we&apos;ll recommend the right starting point for your project and budget.
          </p>
        </Container>
      </Section>

      <CtaBand title="Let's scope your project" description="Book a free consultation and we'll prepare a tailored proposal." />
    </>
  );
}
