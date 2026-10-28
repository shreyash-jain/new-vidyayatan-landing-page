import { ArrowUpRight, Check } from "lucide-react";

/**
 * Mid-article band for a product the agency has built, linking out to the
 * product's own site — the counterpart to `ArticleCta`, whose button books a
 * Vidyayatan meeting. Uses the product's own colour so a reader can tell the
 * two bands apart at a glance.
 *
 * `points` is one string split on "|" because next-mdx-remote strips JS
 * expressions, arrays included, from MDX props.
 *
 * Available to MDX as `<ProductCta />` (see components/mdx-content.tsx):
 *
 *   <ProductCta
 *     eyebrow="VoomSales · AI-powered sales CRM"
 *     title="The whole sales desk, in one place."
 *     description="…"
 *     points="First point | Second point"
 *     label="Explore VoomSales"
 *     href="https://www.voomsales.com/"
 *   />
 */
export function ProductCta({
  eyebrow,
  title,
  description,
  points = "",
  label,
  href,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points?: string;
  label: string;
  href: string;
}) {
  const items = points.split("|").map((p) => p.trim()).filter(Boolean);
  return (
    <aside className="relative my-10 overflow-hidden rounded-2xl bg-[#0a3252] px-6 py-8 text-white shadow-card sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.35),transparent_60%)]"
      />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
          {eyebrow}
        </p>
        <p className="mt-3 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
          {title}
        </p>
        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-white/80">
          {description}
        </p>
        {items.length > 0 && (
          <ul className="mt-5 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
            {items.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        {/* A plain link, not BookMeetingButton: this one leaves the site. */}
        <a
          href={href}
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 text-base font-semibold text-[#0a3252] no-underline shadow-soft transition-all hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a3252]"
        >
          {label}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
