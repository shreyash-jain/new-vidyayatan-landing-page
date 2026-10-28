import { ArrowRight } from "lucide-react";
import { BookMeetingButton } from "@/components/common/book-meeting-button";

/**
 * Mid-article Vidyayatan band. Sized for the ~40rem article column rather than
 * the full page, so it reads as part of the piece instead of interrupting it —
 * `CtaBand` is the full-width version that closes every article.
 *
 * Available to MDX as `<ArticleCta />` (see components/mdx-content.tsx), so a
 * post drops one in with no imports:
 *
 *   <ArticleCta
 *     title="Not sure which stage you're building for?"
 *     description="Tell us what you have and what it has to talk to."
 *     label="Book a 30-minute call"
 *   />
 */
export function ArticleCta({
  title = "Thinking about a custom build?",
  description = "Tell us what you already have and what it has to work with. We'll tell you honestly whether building is the right call.",
  label = "Book a meeting",
  eyebrow = "Vidyayatan Technologies",
}: {
  title?: string;
  description?: string;
  label?: string;
  eyebrow?: string;
}) {
  return (
    <aside className="relative my-10 overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy to-primary px-6 py-8 text-white shadow-card sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_55%)]"
      />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
          {eyebrow}
        </p>
        <p className="mt-3 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
          {title}
        </p>
        <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-white/80">
          {description}
        </p>
        {/* White on the navy gradient — the house variants are all built for
            light backgrounds and would sink into this one. */}
        <BookMeetingButton
          size="lg"
          variant="outline"
          className="mt-6 border-0 bg-white text-navy shadow-soft hover:bg-white/90"
        >
          {label}
          <ArrowRight />
        </BookMeetingButton>
      </div>
    </aside>
  );
}
