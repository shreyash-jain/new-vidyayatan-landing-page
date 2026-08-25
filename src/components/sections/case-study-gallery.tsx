"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/content/case-studies";

/**
 * Lightbox gallery, hand-rolled so the section adds no dependency. Thumbnails
 * are real buttons, the overlay is a modal dialog, Escape and the arrow keys
 * work, and focus returns to the thumbnail that opened it.
 */
export function CaseStudyGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggersRef = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastOpenedRef = useRef<number | null>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    const previous = lastOpenedRef.current;
    if (previous !== null) triggersRef.current[previous]?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + images.length) % images.length,
      );
    },
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    lastOpenedRef.current = openIndex;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // `openIndex` is in the deps so re-opening re-focuses the close button;
    // the handlers themselves are stable.
  }, [openIndex, close, step]);

  if (!images.length) return null;

  const active = openIndex === null ? null : images[openIndex];

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              ref={(node) => {
                triggersRef.current[i] = node;
              }}
              onClick={() => setOpenIndex(i)}
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`View larger: ${image.alt}`}
            >
              {/* Uniform tile, whole screenshot inside it. Cropping these to
                  fill the tile cut the product chrome off the left edge. */}
              <span className="flex aspect-[16/10] items-center justify-center overflow-hidden p-2.5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 800}
                  height={image.height ?? 600}
                  loading="lazy"
                  className="max-h-full w-auto rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            ref={closeRef}
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                className="absolute left-4 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                className="absolute right-4 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </>
          ) : null}

          <figure
            className="max-h-full w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width ?? 1600}
              height={active.height ?? 1000}
              className="mx-auto max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {active.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
