import { ArrowRight, MessageSquareText, Sparkles } from "lucide-react";
import { Container } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { BookMeetingButton } from "@/components/common/book-meeting-button";
import { HeroClientSlides } from "@/components/sections/hero-client-slides";
import { stats } from "@/content/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:26px_26px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <Container className="py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="eyebrow mx-auto lg:mx-0">
                <Sparkles className="size-3.5" />
                Run by IIT Alumni
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl md:text-6xl">
                Enabling your{" "}
                <span className="heading-gradient">Digital Journey</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Our products are tailor-made to meet every one of your software
                requirements. We build web &amp; mobile applications, SaaS platforms
                and AI solutions — for B2B and B2C businesses that need to scale.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <BookMeetingButton size="lg">
                  Book a meeting
                  <ArrowRight />
                </BookMeetingButton>
                <Button asChild size="lg" variant="outline">
                  <a href="#contact">
                    <MessageSquareText />
                    Request services
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 to-navy/10 blur-2xl" />
            <HeroClientSlides />
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.2}>
          <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-6 text-center">
                <dt className="font-display text-3xl font-bold text-primary">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm font-medium text-navy">{s.label}</dd>
                <dd className="mt-0.5 text-xs text-muted-foreground">{s.note}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
