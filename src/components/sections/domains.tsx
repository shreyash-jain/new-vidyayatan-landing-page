import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { industries } from "@/content/industries";

export function Domains() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Domains"
          title="Pioneering excellence across industries"
          description="With deep focus on Agritech, SaaS/CRM, Industrial Automation and Financial Services, our expertise is your key to innovation and sustainable growth."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.07}>
              <Link
                href={`/industries/${ind.slug}`}
                className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-navy text-white">
                  <ind.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">
                  {ind.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {ind.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                  Explore
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
