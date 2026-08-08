"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  contentPricing,
  examplePlans,
  planTotal,
  planAssetCount,
  convert,
  formatMoney,
  USD_TO_INR,
  type Currency,
} from "@/content/marketing";

const CURRENCIES: { id: Currency; label: string }[] = [
  { id: "USD", label: "USD $" },
  { id: "INR", label: "INR ₹" },
];

/**
 * Rate card + worked monthly plans, with a currency toggle.
 *
 * Totals are recomputed in the selected currency rather than converted after
 * summing, so the plan figures always reconcile against the rate card rows
 * above them — including any row carrying a bespoke INR price.
 */
export function PricingTables() {
  const [currency, setCurrency] = useState<Currency>("USD");

  const price = (usd: number, inr?: number) =>
    formatMoney(convert(usd, currency, inr), currency);

  return (
    <>
      {/* Toggle */}
      <div className="mt-10 flex justify-center">
        <div
          role="group"
          aria-label="Currency"
          className="inline-flex rounded-full border border-border bg-card p-1 shadow-soft"
        >
          {CURRENCIES.map((c) => {
            const active = currency === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCurrency(c.id)}
                aria-pressed={active}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-navy",
                )}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Rate card */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-4 font-display font-semibold text-navy">
                Service
              </th>
              <th className="px-5 py-4 font-display font-semibold text-navy">
                Duration / qty
              </th>
              <th className="whitespace-nowrap px-5 py-4 text-right font-display font-semibold text-navy">
                Price
              </th>
              <th className="hidden px-5 py-4 font-display font-semibold text-navy md:table-cell">
                Includes
              </th>
            </tr>
          </thead>
          <tbody>
            {contentPricing.map((row) => (
              <tr key={row.id} className="border-b border-border last:border-0">
                <td className="px-5 py-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {row.category}
                  </span>
                  <span className="mt-1 block font-medium text-navy">
                    {row.service}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">
                  {row.qty}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-right">
                  <span className="font-display text-lg font-bold text-navy">
                    {price(row.price, row.priceInr)}
                  </span>
                </td>
                <td className="hidden px-5 py-4 text-muted-foreground md:table-cell">
                  {row.includes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {currency === "INR" ? (
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Indicative INR pricing, converted at ${"$"}1 = ₹{USD_TO_INR}. Final
          quotes are confirmed in writing.
        </p>
      ) : null}

      {/* Worked monthly plans */}
      <h3 className="mt-20 text-center font-display text-2xl font-bold tracking-tight text-navy">
        What a month actually costs
      </h3>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        Three worked examples. Every total below is calculated from the rates in the
        table — nothing rounded, nothing hidden.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {examplePlans.map((plan) => {
          const total = planTotal(plan, currency);
          const assets = planAssetCount(plan);
          return (
            <div
              key={plan.name}
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-card p-7 shadow-soft",
                plan.highlighted
                  ? "border-primary shadow-card ring-1 ring-primary/20"
                  : "border-border",
              )}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              ) : null}

              <h4 className="font-display text-xl font-bold text-navy">{plan.name}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground">{plan.tagline}</p>

              <div className="mt-6 border-b border-border pb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-extrabold text-navy">
                    {formatMoney(total, currency)}
                  </span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>
                <p className="mt-2 text-sm font-medium text-primary">
                  {assets} assets ·{" "}
                  {new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
                    style: "currency",
                    currency,
                    maximumFractionDigits: currency === "INR" ? 0 : 2,
                  }).format(total / assets)}{" "}
                  per asset
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.lines.map((line) => (
                  <li
                    key={line.id}
                    className="flex items-start justify-between gap-3 text-sm"
                  >
                    <span className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3.5" />
                      </span>
                      <span className="leading-relaxed text-navy/80">{line.label}</span>
                    </span>
                    <span className="shrink-0 font-semibold text-navy">
                      {line.id.startsWith("blog") ? "" : `×${line.qty}`}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-navy hover:bg-muted",
                )}
              >
                Start with this
                <ArrowRight className="size-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
