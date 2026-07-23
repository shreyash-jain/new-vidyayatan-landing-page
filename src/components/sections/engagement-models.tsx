import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Card } from "@/components/ui/card";
import { engagementModels } from "@/content/company";

export function EngagementModels() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="How we engage"
          title="Scale your business with cost-effective software development"
          description="Three flexible engagement models, matched to where you are and where you're going."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {engagementModels.map((model, i) => (
            <Reveal key={model.slug} delay={i * 0.08}>
              <Card className="card-hover h-full p-7">
                <div className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <model.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {model.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {model.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-navy/80">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Know more
                  <ArrowRight className="size-4" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
