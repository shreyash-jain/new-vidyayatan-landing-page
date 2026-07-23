"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { BookMeetingButton } from "@/components/common/book-meeting-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { industryShowcase } from "@/content/clients-showcase";

/** Kore.ai-style "trusted by" showcase: tabs sync with a horizontal scroll-snap carousel. */
export function ClientShowcase() {
  const [active, setActive] = React.useState(industryShowcase[0].key);
  const cardRefs = React.useRef<Record<string, HTMLDivElement | null>>({});
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  // Keep the active tab in sync with manual swipes: the active card is the one
  // snapped at the track's left edge (deterministic, unlike an
  // IntersectionObserver which fires for every partially-visible card).
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackLeft = track.getBoundingClientRect().left;
        let best: string | null = null;
        let bestDist = Infinity;
        for (const [key, el] of Object.entries(cardRefs.current)) {
          if (!el) continue;
          const d = Math.abs(el.getBoundingClientRect().left - trackLeft);
          if (d < bestDist) {
            bestDist = d;
            best = key;
          }
        }
        if (best) setActive(best);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  function goTo(key: string) {
    setActive(key);
    const track = trackRef.current;
    const card = cardRefs.current[key];
    if (!track || !card) return;
    // Scroll ONLY the track — scrollIntoView would also scroll ancestor
    // containers (including the page itself), shifting the whole layout.
    const delta =
      card.getBoundingClientRect().left - track.getBoundingClientRect().left;
    track.scrollTo({ left: track.scrollLeft + delta, behavior: "smooth" });
  }

  return (
    <Section className="overflow-x-clip bg-navy py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-8">
          {/* Left: heading + CTAs */}
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              We&apos;ve built our business by serving ambitious teams
            </h2>
            <p className="mt-4 text-white/70">
              From fintech to farms, classrooms to factory floors — trusted by
              founders and operators across industries.
            </p>
            <p className="mt-8 text-sm text-white/50">
              Discover why founders and operators choose Vidyayatan.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <BookMeetingButton>Request a demo</BookMeetingButton>
              <Button asChild variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10">
                <a href="#contact">Let&apos;s talk</a>
              </Button>
            </div>
          </Reveal>

          {/* Right: tabs + carousel. min-w-0 lets this grid column shrink below
              its content width — without it the wide card track blows the whole
              page out horizontally. */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="-mx-6 overflow-x-auto px-6 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
              <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
                {industryShowcase.map((ind) => (
                  <button
                    key={ind.key}
                    type="button"
                    onClick={() => goTo(ind.key)}
                    className={cn(
                      "shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                      active === ind.key
                        ? "border-white bg-white text-navy"
                        : "border-white/25 text-white/70 hover:border-white/50 hover:text-white",
                    )}
                  >
                    {ind.tabLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Full-bleed right: negative margin spans the container gutter +
                px-6 padding exactly to the viewport edge, so cards run off the
                right of the screen like the reference (Section overflow-x-clip
                guards against any page-level overflow). */}
            <div
              ref={trackRef}
              className="-mr-6 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pr-6 sm:mr-[calc((min(1200px,100vw)-100vw)/2-1.5rem)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {industryShowcase.map((ind) => (
                <div
                  key={ind.key}
                  ref={(el) => {
                    cardRefs.current[ind.key] = el;
                  }}
                  data-key={ind.key}
                  className="relative h-[440px] w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[440px]"
                >
                  <Image
                    src={ind.image}
                    alt={ind.cardTitle}
                    fill
                    sizes="(min-width: 640px) 440px, 85vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/15 to-navy/40" />
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <div>
                      <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                        {ind.tabLabel}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                        {ind.cardTitle}
                      </h3>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                        Trusted by {ind.tabLabel.toLowerCase()} leaders
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {ind.clients.map((c) => (
                          <a
                            key={c.name}
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/20"
                          >
                            {c.name}
                            <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
