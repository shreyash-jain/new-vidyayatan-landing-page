"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  React.useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="What people say"
          title="Real stories, real results"
          description="Testimonials from those who have seen remarkable results through our expert services and solutions."
        />

        <div className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-0 shrink-0 grow-0 basis-full px-2 md:basis-1/2"
                >
                  <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft">
                    <Quote className="size-8 text-primary/25" />
                    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy/85">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={88}
                        height={88}
                        className="size-11 rounded-full object-cover ring-2 ring-primary/15"
                      />
                      <div>
                        <div className="font-display text-sm font-semibold text-navy">
                          {t.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t.role} · {t.company} · {t.location}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => embla?.scrollPrev()}
              aria-label="Previous testimonial"
              className="grid size-10 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-muted"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => embla?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    selected === i ? "w-6 bg-primary" : "w-2 bg-border",
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => embla?.scrollNext()}
              aria-label="Next testimonial"
              className="grid size-10 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:bg-muted"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
