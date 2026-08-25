import { cn } from "@/lib/utils";
import type { Comparison } from "@/content/case-studies";

function format(value: number, unit?: string) {
  const num = Number.isInteger(value) ? value : value.toFixed(1);
  return unit ? `${num}${unit === "%" ? "" : " "}${unit}` : `${num}`;
}

/**
 * Before/after bars. Pure CSS widths — no chart library, and the numbers are
 * read out in the markup so the visual is decoration rather than the data.
 */
export function ComparisonBars({
  comparisons,
}: {
  comparisons?: Comparison[];
}) {
  if (!comparisons?.length) return null;

  return (
    <div className="flex flex-col gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft">
      {comparisons.map((c) => {
        const max = Math.max(c.before, c.after) || 1;
        const rows = [
          { key: "Before", value: c.before, better: false },
          { key: "After", value: c.after, better: true },
        ];

        return (
          <div key={c.label} className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-navy">{c.label}</p>
            <div className="flex flex-col gap-2">
              {rows.map((row) => (
                <div key={row.key} className="flex items-center gap-3">
                  <span className="w-14 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {row.key}
                  </span>
                  <span className="h-3 flex-1 overflow-hidden rounded-full bg-muted">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "block h-full rounded-full",
                        row.better ? "bg-primary" : "bg-navy/25",
                      )}
                      style={{
                        width: `${Math.max((row.value / max) * 100, 2)}%`,
                      }}
                    />
                  </span>
                  <span className="w-24 shrink-0 text-right text-sm font-semibold text-navy">
                    {format(row.value, c.unit)}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {c.lowerIsBetter ? "Lower is better." : "Higher is better."}
            </p>
          </div>
        );
      })}
    </div>
  );
}
