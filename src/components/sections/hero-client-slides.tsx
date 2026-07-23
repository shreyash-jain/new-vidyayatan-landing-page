"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { industryShowcase } from "@/content/clients-showcase";

const ROTATE_MS = 4000;

/** Auto-rotating industry/client slides shown in the hero's right column. */
export function HeroClientSlides() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % industryShowcase.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-border bg-navy shadow-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {industryShowcase.map((ind, i) => (
        <div
          key={ind.key}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === active ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={i !== active}
        >
          <Image
            src={ind.image}
            alt={ind.cardTitle}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority={i === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/15 to-navy/40" />
          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
            <div>
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm">
                {ind.tabLabel}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold leading-tight sm:text-2xl">
                {ind.cardTitle}
              </h3>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/60">
                Trusted by {ind.tabLabel.toLowerCase()} leaders
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {ind.clients.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    {c.name}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* dots */}
      <div className="absolute right-6 top-6 flex gap-1.5 sm:right-8 sm:top-8">
        {industryShowcase.map((ind, i) => (
          <button
            key={ind.key}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${ind.tabLabel}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === active ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </div>
  );
}
