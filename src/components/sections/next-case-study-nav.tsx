import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CaseStudyEntry } from "@/content/case-studies";

function NavCard({
  study,
  direction,
}: {
  study: CaseStudyEntry;
  direction: "prev" | "next";
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {isNext ? null : <ArrowLeft className="size-3.5" aria-hidden="true" />}
        {isNext ? "Next case study" : "Previous case study"}
        {isNext ? <ArrowRight className="size-3.5" aria-hidden="true" /> : null}
      </span>
      <Badge variant="outline" className="self-start">
        {study.industry}
      </Badge>
      <h3 className="font-display text-lg font-bold leading-snug text-navy transition-colors group-hover:text-primary">
        {study.clientName}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {study.cardTitle}
      </p>
    </Link>
  );
}

/** Prev/next pair. Neighbours in the same industry are preferred upstream in
 *  `getAdjacentCaseStudies`, so a reader stays in a relevant sector. */
export function NextCaseStudyNav({
  prev,
  next,
}: {
  prev?: CaseStudyEntry;
  next?: CaseStudyEntry;
}) {
  if (!prev && !next) return null;

  return (
    <nav aria-label="More case studies" className="grid gap-6 sm:grid-cols-2">
      {prev ? <NavCard study={prev} direction="prev" /> : null}
      {next ? <NavCard study={next} direction="next" /> : null}
    </nav>
  );
}
