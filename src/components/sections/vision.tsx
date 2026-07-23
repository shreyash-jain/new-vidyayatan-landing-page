import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { strengths } from "@/content/company";

export function Vision() {
  return (
    <Section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-40">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      </div>
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow border-white/20 bg-white/10 text-white">
              Our Vision
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Groundbreaking technology for the age of Industry 4.0
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Our vision is to create groundbreaking technologies that empower
              enterprises and industries to thrive in the digital age. Through our
              expertise in Big Data, IoT, Cloud and AI/ML, we aim to be the go-to
              tech partner for Smart Industries, Manufacturing, EVs, Smart Homes
              and more.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
                  <div className="grid size-11 place-items-center rounded-xl bg-white/10 text-white">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
