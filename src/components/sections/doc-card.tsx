import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate, type Doc, type Collection } from "@/lib/mdx";

export function DocCard({ doc, collection }: { doc: Doc; collection: Collection }) {
  const { frontmatter } = doc;
  return (
    <Link
      href={`/${collection}/${doc.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {frontmatter.image ? (
        // Edge-to-edge image with the category label sitting on it — the card
        // now leads with the artwork instead of a row of metadata.
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            width={1200}
            height={630}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          {frontmatter.tag ? (
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy shadow-soft backdrop-blur-sm">
              {frontmatter.tag}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        {!frontmatter.image && frontmatter.tag ? (
          <Badge variant="primary" className="mb-3 self-start">
            {frontmatter.tag}
          </Badge>
        ) : null}

        <h3 className="font-display text-lg font-bold leading-snug text-navy transition-colors group-hover:text-primary">
          {frontmatter.title}
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {frontmatter.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" />
              {doc.readingMinutes} min
            </span>
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-primary transition-all group-hover:gap-2">
            Read
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
