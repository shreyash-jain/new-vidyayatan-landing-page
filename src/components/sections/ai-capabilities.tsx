import Image from "next/image";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { aiCapabilities } from "@/content/ai";

export function AiCapabilities() {
  const [featured, ...rest] = aiCapabilities;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="AI, applied"
          title="AI capabilities built for real business outcomes"
          description="From generative AI to production ML — we design, build and ship AI features that hold up in the real world, not just in a demo."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:row-span-2">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="relative min-h-[280px] flex-1 bg-gradient-to-br from-accent/60 to-muted">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <featured.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-navy">
                  {featured.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((cap, i) => (
              <Reveal key={cap.title} delay={(i % 4) * 0.06}>
                <div className="card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                  <div className="bg-gradient-to-br from-accent/60 to-muted">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      width={1024}
                      height={1024}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <cap.icon className="size-4.5" />
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold text-navy">
                      {cap.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
