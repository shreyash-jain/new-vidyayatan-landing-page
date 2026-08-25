import { cn } from "@/lib/utils";
import type { ResultMetric } from "@/content/case-studies";

/**
 * The visual anchor of a case study: oversized numeral in the brand accent,
 * small label beneath. `size` controls the results strip (lg) vs. the inline
 * metrics on cards (sm).
 */
export function MetricBlock({
  metric,
  label,
  context,
  size = "md",
  className,
}: ResultMetric & { size?: "sm" | "md" | "lg"; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span
        className={cn(
          "font-display font-extrabold leading-none tracking-tight text-primary",
          size === "sm" && "text-2xl",
          size === "md" && "text-3xl sm:text-4xl",
          size === "lg" && "text-4xl sm:text-5xl lg:text-[3.25rem]",
        )}
      >
        {metric}
      </span>
      <span
        className={cn(
          "font-semibold text-navy",
          size === "sm" ? "text-xs" : "text-sm",
        )}
      >
        {label}
      </span>
      {context && size !== "sm" ? (
        <span className="text-xs leading-relaxed text-muted-foreground">
          {context}
        </span>
      ) : null}
    </div>
  );
}

/** Results strip — sits high on the detail page, above the long-form copy. */
export function MetricStrip({ results }: { results: ResultMetric[] }) {
  const metrics = results.slice(0, 4);
  return (
    <dl
      className={cn(
        "grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft sm:grid-cols-2 sm:gap-10 sm:p-10",
        metrics.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
      )}
    >
      {metrics.map((r) => (
        <div key={`${r.metric}-${r.label}`} className="flex flex-col gap-1">
          <dd className="font-display text-4xl font-extrabold leading-none tracking-tight text-primary sm:text-5xl">
            {r.metric}
          </dd>
          <dt className="mt-2 text-sm font-semibold text-navy">{r.label}</dt>
          {r.context ? (
            <dd className="text-xs leading-relaxed text-muted-foreground">
              {r.context}
            </dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
