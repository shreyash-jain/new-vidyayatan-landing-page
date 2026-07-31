import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate, type Doc, type Collection } from "@/lib/mdx";

export function DocCard({ doc, collection }: { doc: Doc; collection: Collection }) {
  return (
    <Link
      href={`/${collection}/${doc.slug}`}
      className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
    >
      <div className="flex items-center gap-3">
        {doc.frontmatter.tag ? (
          <Badge variant="primary">{doc.frontmatter.tag}</Badge>
        ) : null}
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {doc.readingMinutes} min read
        </span>
      </div>
      {doc.frontmatter.image ? (
        <div className="mt-4 overflow-hidden rounded-xl border border-border/60">
          <img
            src={doc.frontmatter.image}
            alt={doc.frontmatter.title}
            className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : null}
      <h2 className="mt-4 font-display text-xl font-bold leading-snug text-navy">
        {doc.frontmatter.title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {doc.frontmatter.description}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>{formatDate(doc.frontmatter.date)}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-primary transition-all group-hover:gap-2">
          Read
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
