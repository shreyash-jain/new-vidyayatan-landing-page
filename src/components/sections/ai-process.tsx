import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { CtaButtons } from "@/components/common/cta-buttons";
import { aiProcess } from "@/content/ai";

export function AiProcess() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="How we ship AI"
          title="From idea to production AI, in four steps"
          description="A grounded process that gets AI into production reliably — not stuck in a proof-of-concept."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiProcess.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) * 0.06}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                </div>
                <span className="absolute right-5 top-5 font-display text-2xl font-black text-primary/15">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <CtaButtons primaryLabel="Start your AI project" className="flex flex-wrap justify-center gap-3" />
        </Reveal>
      </Container>
    </Section>
  );
}
