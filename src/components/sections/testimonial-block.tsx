import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/content/case-studies";

/** Renders nothing at all when a case study has no approved quote. */
export function TestimonialBlock({
  testimonial,
}: {
  testimonial?: Testimonial;
}) {
  if (!testimonial) return null;

  const initials = testimonial.authorName
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <figure className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-primary px-8 py-12 text-white shadow-card sm:px-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <Quote className="size-8 text-white/40" aria-hidden="true" />
        <blockquote className="font-display text-xl font-semibold leading-relaxed tracking-tight sm:text-2xl">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="flex items-center gap-4">
          {testimonial.authorPhoto ? (
            <Image
              src={testimonial.authorPhoto}
              alt={testimonial.authorName}
              width={56}
              height={56}
              loading="lazy"
              className="size-14 rounded-full object-cover ring-2 ring-white/30"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex size-14 items-center justify-center rounded-full bg-white/15 font-display text-base font-bold ring-2 ring-white/30"
            >
              {initials}
            </span>
          )}
          <span className="text-left">
            <span className="block text-sm font-bold">
              {testimonial.authorName}
            </span>
            <span className="block text-sm text-white/70">
              {testimonial.authorRole}
            </span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
