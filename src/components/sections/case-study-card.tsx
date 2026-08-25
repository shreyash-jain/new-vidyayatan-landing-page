import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CaseStudyImage } from "./case-study-image";
import type { CaseStudyEntry } from "@/content/case-studies";

/**
 * Grid card: screenshot, client name, one-line outcome, read-more affordance.
 * Deliberately compact — the detail page carries the metrics, so the index
 * stays scannable at three across. The whole card is one link, so nothing
 * inside it is separately focusable.
 */
export function CaseStudyCard({ study }: { study: CaseStudyEntry }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <CaseStudyImage
          src={study.cardThumbnail}
          alt={`${study.clientName} — ${study.cardTitle}`}
          width={800}
          height={500}
          fallbackLabel={study.clientName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy shadow-soft backdrop-blur-sm">
          {study.industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {study.clientLogo ? (
          <Image
            src={study.clientLogo}
            alt={`${study.clientName} logo`}
            width={96}
            height={24}
            loading="lazy"
            className="mb-3 h-5 w-auto object-contain"
          />
        ) : null}

        <h3 className="font-display text-lg font-bold leading-snug text-navy transition-colors group-hover:text-primary">
          {study.clientName}
        </h3>

        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {study.cardTitle}
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
          Read full
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
