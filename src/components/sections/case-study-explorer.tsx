"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchX } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { FilterBar } from "./case-study-filter-bar";
import { CaseStudyCard } from "./case-study-card";
import type {
  CaseStudyEntry,
  Industry,
  ServiceTag,
} from "@/content/case-studies";

type ExplorerProps = {
  studies: CaseStudyEntry[];
  industries: Industry[];
  services: ServiceTag[];
};

/**
 * Filtering happens entirely in the browser against data that was baked in at
 * build time — no fetching. The active filters live in the query string
 * (`?industry=EdTech&service=AI%2FML`) rather than in component state, which
 * makes a filtered view shareable and makes the back button restore the
 * previous selection for free.
 *
 * Semantics: OR within a facet, AND across facets — picking EdTech + Fintech
 * widens the result set, adding a service narrows it.
 */
export function CaseStudyExplorer({
  studies,
  industries,
  services,
}: ExplorerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Unknown values in a hand-edited URL are ignored rather than zeroing out
  // the grid.
  const activeIndustries = useMemo(
    () => searchParams.getAll("industry").filter((v) => industries.includes(v as Industry)),
    [searchParams, industries],
  );
  const activeServices = useMemo(
    () => searchParams.getAll("service").filter((v) => services.includes(v as ServiceTag)),
    [searchParams, services],
  );

  const filtered = useMemo(
    () =>
      studies.filter((study) => {
        const industryOk =
          activeIndustries.length === 0 ||
          activeIndustries.includes(study.industry);
        const serviceOk =
          activeServices.length === 0 ||
          study.services.some((s) => activeServices.includes(s));
        return industryOk && serviceOk;
      }),
    [studies, activeIndustries, activeServices],
  );

  const commit = useCallback(
    (industry: string[], service: string[]) => {
      const params = new URLSearchParams();
      industry.forEach((v) => params.append("industry", v));
      service.forEach((v) => params.append("service", v));
      const qs = params.toString();
      // push, not replace — the brief asks for a working back button.
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname],
  );

  const handleToggle = useCallback(
    (facet: "industry" | "service", value: string) => {
      const current = facet === "industry" ? activeIndustries : activeServices;
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      commit(
        facet === "industry" ? next : activeIndustries,
        facet === "service" ? next : activeServices,
      );
    },
    [activeIndustries, activeServices, commit],
  );

  const handleClear = useCallback(() => commit([], []), [commit]);

  // Filters that can only ever return everything are noise. They appear on
  // their own once the library is big enough for them to do something.
  const showFilters =
    studies.length > 2 && (industries.length > 1 || services.length > 1);

  return (
    <div className="flex flex-col gap-10">
      {showFilters ? (
        <FilterBar
          industries={industries}
          services={services}
          activeIndustries={activeIndustries}
          activeServices={activeServices}
          onToggle={handleToggle}
          onClear={handleClear}
          resultCount={filtered.length}
          totalCount={studies.length}
        />
      ) : null}

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-muted/40 px-6 py-16 text-center">
          <SearchX className="size-8 text-muted-foreground" aria-hidden="true" />
          <h3 className="font-display text-xl font-bold text-navy">
            No case studies match those filters
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            We have probably done the work — it may just not be written up yet.
            Try a broader combination, or tell us what you are looking for.
          </p>
          <button
            type="button"
            onClick={handleClear}
            className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 3) * 0.06}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
