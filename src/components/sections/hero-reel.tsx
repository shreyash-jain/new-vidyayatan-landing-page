"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { VideoSample } from "@/content/marketing";

/**
 * Hero showreel — three vertical players, all live.
 *
 * Autoplay is driven imperatively rather than with the `autoPlay` attribute:
 * browsers judge their autoplay policy at parse time while React applies
 * `muted` as a DOM property during hydration, so declarative markup gets
 * silently refused. Setting `muted` before calling play() is the order that
 * actually works.
 *
 * The two side slots cycle through the rest of the reel so the hero shows more
 * than three pieces of work. prefers-reduced-motion disables both the playback
 * and the rotation.
 */

function ReelVideo({
  sample,
  className,
  active,
}: {
  sample: VideoSample;
  className?: string;
  active: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !active) return;
    video.muted = true;
    video.defaultMuted = true;
    // Refusal (battery saver, data saver, iOS low power) leaves the poster up.
    void video.play().catch(() => {});
  }, [active, sample.src]);

  return (
    <video
      // Remounting on src change restarts playback cleanly and lets the
      // fade-in animation replay.
      key={sample.src}
      ref={ref}
      src={sample.src}
      poster={sample.poster}
      muted
      loop
      playsInline
      preload="auto"
      controls={!active}
      aria-label={`${sample.title} — silent preview`}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}

export function HeroReel({ samples }: { samples: VideoSample[] }) {
  // Centre slot is the shortest clip — a 7s loop reads better and costs least.
  const centre =
    samples.find((s) => s.duration.startsWith("0:0")) ?? samples[0];
  const pool = samples.filter((s) => s.src !== centre.src);

  const [motion, setMotion] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotion(!mq.matches);
    const onChange = () => setMotion(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!motion || pool.length < 3) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 9000);
    return () => window.clearInterval(id);
  }, [motion, pool.length]);

  // pool.length is odd (5), so advancing both by 2 keeps the slots distinct.
  const left = pool[(tick * 2) % pool.length];
  const right = pool[(tick * 2 + 1) % pool.length];

  const sideFrame =
    "hidden aspect-[9/16] w-[28%] shrink-0 translate-y-8 overflow-hidden rounded-2xl border border-white/15 shadow-2xl sm:block";

  return (
    <div className="flex items-center justify-center gap-4 lg:justify-end">
      <div className={sideFrame}>
        <ReelVideo
          sample={left}
          active={motion}
          className="animate-in fade-in duration-1000"
        />
      </div>

      <div className="aspect-[9/16] w-[62%] max-w-[280px] shrink-0 overflow-hidden rounded-3xl border border-white/25 shadow-2xl ring-1 ring-white/10 sm:w-[40%]">
        <ReelVideo sample={centre} active={motion} />
      </div>

      <div className={sideFrame}>
        <ReelVideo
          sample={right}
          active={motion}
          className="animate-in fade-in duration-1000"
        />
      </div>
    </div>
  );
}
