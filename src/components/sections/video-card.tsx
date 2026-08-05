"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VideoSample } from "@/content/marketing";

/**
 * Portfolio video card.
 *
 * Idle it is just a poster — `preload="metadata"` means six of these cost a few
 * KB, not 12 MB. Hovering plays a muted preview so the reel can be scanned at a
 * glance; clicking commits: sound on, native controls, and hover no longer
 * interferes.
 */
export function VideoCard({ sample }: { sample: VideoSample }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  function preview() {
    const video = ref.current;
    if (!video || active) return;
    video.muted = true;
    void video.play().catch(() => {});
  }

  function stopPreview() {
    const video = ref.current;
    if (!video || active) return;
    video.pause();
    video.currentTime = 0;
  }

  function activate() {
    const video = ref.current;
    if (!video || active) return;
    setActive(true);
    video.muted = false;
    void video.play().catch(() => {});
  }

  return (
    <figure className="flex h-full flex-col">
      <div
        onMouseEnter={preview}
        onMouseLeave={stopPreview}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-border bg-navy shadow-card transition-shadow hover:shadow-glow",
          sample.vertical ? "aspect-[9/16]" : "aspect-video",
        )}
      >
        <video
          ref={ref}
          src={sample.src}
          poster={sample.poster}
          controls={active}
          preload="metadata"
          playsInline
          loop={!active}
          className="h-full w-full object-cover"
        >
          Your browser does not support the video tag.
        </video>

        {!active ? (
          <button
            type="button"
            onClick={activate}
            aria-label={`Play ${sample.title} with sound`}
            className="absolute inset-0 grid place-items-center bg-navy/20 transition-colors hover:bg-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
          >
            <span className="grid size-14 place-items-center rounded-full bg-white/95 text-navy shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play className="size-6 translate-x-0.5 fill-current" />
            </span>
            <span className="absolute bottom-3 right-3 rounded-full bg-navy/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {sample.duration}
            </span>
          </button>
        ) : null}
      </div>

      <figcaption className="mt-5 flex flex-1 flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {sample.format}
        </span>
        <h3 className="mt-2 font-display text-lg font-bold text-navy">
          {sample.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {sample.description}
        </p>
      </figcaption>
    </figure>
  );
}
