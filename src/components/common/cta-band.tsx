import { Container, Section } from "./container";
import { SectionHeading } from "./section-heading";
import { CtaButtons } from "./cta-buttons";

export function CtaBand({
  title = "Let's build something that scales",
  description = "Tell us about your project and we'll recommend the right engagement model to get you there.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-primary px-6 py-14 text-center text-white shadow-card md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
          <div className="relative">
            <SectionHeading
              className="[&_h2]:text-white [&_p]:text-white/80"
              title={title}
              description={description}
            />
            <CtaButtons className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
