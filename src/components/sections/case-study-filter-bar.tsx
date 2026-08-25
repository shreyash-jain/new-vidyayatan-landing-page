"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Industry, ServiceTag } from "@/content/case-studies";

type FilterBarProps = {
  industries: Industry[];
  services: ServiceTag[];
  activeIndustries: string[];
  activeServices: string[];
  onToggle: (facet: "industry" | "service", value: string) => void;
  onClear: () => void;
  resultCount: number;
  totalCount: number;
};

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-soft"
          : "border-border bg-background text-foreground/80 hover:border-primary/40 hover:text-primary",
      )}
    >
      {label}
    </button>
  );
}

/**
 * Multi-select chip filters. Keyboard-operable by construction (real buttons
 * with `aria-pressed`), and the result count is announced politely so screen
 * reader users hear the grid change without moving focus.
 */
export function FilterBar({
  industries,
  services,
  activeIndustries,
  activeServices,
  onToggle,
  onClear,
  resultCount,
  totalCount,
}: FilterBarProps) {
  const activeCount = activeIndustries.length + activeServices.length;

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-6">
        <fieldset className="flex flex-col gap-3">
          <legend className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Industry
          </legend>
          <div className="flex flex-wrap gap-2">
            {industries.map((i) => (
              <Chip
                key={i}
                label={i}
                active={activeIndustries.includes(i)}
                onClick={() => onToggle("industry", i)}
              />
            ))}
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <legend className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Service
          </legend>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <Chip
                key={s}
                label={s}
                active={activeServices.includes(s)}
                onClick={() => onToggle("service", s)}
              />
            ))}
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <p aria-live="polite" className="text-sm text-muted-foreground">
            {activeCount > 0 ? (
              <>
                <span className="font-semibold text-navy">
                  {activeCount} filter{activeCount === 1 ? "" : "s"}
                </span>{" "}
                · showing {resultCount} of {totalCount} case studies
              </>
            ) : (
              <>Showing all {totalCount} case studies</>
            )}
          </p>

          {activeCount > 0 ? (
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <X className="size-3.5" aria-hidden="true" />
              Clear all
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
