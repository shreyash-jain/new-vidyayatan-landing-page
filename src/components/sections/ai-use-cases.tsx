import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { aiUseCases } from "@/content/ai";

export function AiUseCases() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="What we build with AI"
          title="Where AI moves the needle fastest"
          description="The highest-leverage places we've seen AI pay for itself across our clients."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {aiUseCases.map((u, i) => (
            <Reveal key={u.title} delay={(i % 2) * 0.08}>
              <div className="card-hover group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-navy font-display text-sm font-bold text-white">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {u.description}
                  </p>
                </div>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
