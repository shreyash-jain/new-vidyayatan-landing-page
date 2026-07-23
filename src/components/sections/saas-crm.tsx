import { CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { CtaButtons } from "@/components/common/cta-buttons";
import { saasFeatures, howWeHelp } from "@/content/company";

export function SaasCrm() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="AI-based SaaS & CRM"
          title="Why choose our AI-based SaaS & CRM solutions?"
          description="Everything you need to go from MVP to enterprise-grade platform — secure, scalable and integrated."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {saasFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="card-hover flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* How we help band */}
        <Reveal>
          <div className="mt-8 grid gap-6 rounded-3xl border border-border bg-gradient-to-br from-navy to-navy/90 p-8 text-white md:grid-cols-[1fr_1.4fr] md:items-center md:p-10">
            <div>
              <h3 className="font-display text-2xl font-bold">How we help you</h3>
              <p className="mt-3 text-white/70">
                We take end-to-end responsibility so you can focus on your business.
              </p>
              <CtaButtons className="mt-6 flex flex-wrap gap-3" showWhatsApp={false} primaryLabel="Start a project" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {howWeHelp.map((h) => (
                <div key={h.title} className="rounded-2xl bg-white/[0.07] p-5">
                  <div className="flex items-center gap-2 font-display font-semibold">
                    <CheckCircle2 className="size-4 text-primary" />
                    {h.title}
                  </div>
                  <p className="mt-2 text-sm text-white/70">{h.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
