import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Heading, Collection } from "@/lib/mdx";

/** Plural nouns for the "All …" link — "All blog" reads wrong. */
const plural: Record<Collection, string> = { blog: "articles", guides: "guides" };

/**
 * Sticky article sidebar. Pure anchor links — no scrollspy — so the whole
 * thing stays static-export friendly and needs no client JS.
 */
export function ArticleToc({
  headings,
  collection,
}: {
  headings: Heading[];
  collection: Collection;
}) {
  if (!headings.length) return null;

  return (
    <nav
      aria-label="On this page"
      className="sticky top-24 hidden max-h-[calc(100vh-7rem)] flex-col overflow-y-auto lg:flex"
    >
      <p className="px-3 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
        On this page
      </p>

      <ul className="mt-3 border-l border-border">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={
                h.level === 2
                  ? "-ml-px block border-l-2 border-transparent py-2 pl-3 pr-2 text-[0.8125rem] font-semibold leading-snug text-navy/75 transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
                  : "-ml-px block border-l-2 border-transparent py-1.5 pl-6 pr-2 text-[0.8125rem] leading-snug text-muted-foreground transition-colors hover:border-primary/60 hover:bg-primary/5 hover:text-primary"
              }
            >
              <span className="line-clamp-2">{h.text}</span>
            </a>
          </li>
        ))}
      </ul>

      <Link
        href={`/${collection}`}
        className="mt-6 inline-flex items-center gap-1.5 px-3 text-[0.8125rem] font-semibold text-primary transition-all hover:gap-2.5"
      >
        <ArrowLeft className="size-4" />
        All {plural[collection]}
      </Link>
    </nav>
  );
}
