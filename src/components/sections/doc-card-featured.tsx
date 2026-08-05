import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { formatDate, type Doc, type Collection } from "@/lib/mdx";

/**
 * Lead article card. Editorial layouts need one piece carrying more visual
 * weight than the rest — a uniform grid reads as an archive, not a publication.
 */
export function DocCardFeatured({
  doc,
  collection,
}: {
  doc: Doc;
  collection: Collection;
}) {
  const { frontmatter } = doc;
  return (
    <Link
      href={`/${collection}/${doc.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:grid-cols-2"
    >
      {frontmatter.image ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto lg:h-full lg:min-h-[340px]">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            width={1200}
            height={630}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-col justify-center p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            Latest
          </span>
          {frontmatter.tag ? (
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {frontmatter.tag}
            </span>
          ) : null}
        </div>

        <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-navy transition-colors group-hover:text-primary sm:text-3xl">
          {frontmatter.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-base leading-relaxed text-muted-foreground">
          {frontmatter.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          {frontmatter.author ? (
            <>
              <span className="font-semibold text-navy">{frontmatter.author}</span>
              <span aria-hidden="true">·</span>
            </>
          ) : null}
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {doc.readingMinutes} min read
          </span>
        </div>

        <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
          Read article
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
