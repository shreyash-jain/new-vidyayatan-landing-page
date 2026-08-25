import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sections = [
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Approach" },
  { id: "solution", label: "Solution" },
  { id: "results", label: "Results" },
];

/**
 * Slim sticky anchor bar, desktop only. Deliberately pure anchor links with no
 * scrollspy — same call as `article-toc.tsx`, so this needs no client JS and
 * can never get out of sync with the page. `scroll-mt-*` on each section
 * accounts for the header (h-16) plus this bar.
 */
export function CaseStudySectionNav() {
  return (
    <div className="sticky top-16 z-30 hidden border-b border-border bg-background/85 backdrop-blur-md lg:block">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-3">
        <nav aria-label="On this page" className="flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Start a project
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
