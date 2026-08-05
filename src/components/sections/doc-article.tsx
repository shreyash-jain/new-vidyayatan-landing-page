import Link from "next/link";
import { ArrowLeft, ChevronRight, Clock } from "lucide-react";
import { MdxContent } from "@/components/mdx-content";
import { CtaBand } from "@/components/common/cta-band";
import { ArticleToc } from "@/components/sections/article-toc";
import { formatDate, type Doc, type Collection } from "@/lib/mdx";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

const labels: Record<Collection, string> = { blog: "Blog", guides: "Guides" };

export function DocArticle({ doc, collection }: { doc: Doc; collection: Collection }) {
  const { frontmatter } = doc;
  const path = `/${collection}/${doc.slug}`;

  const jsonLd = [
    articleJsonLd({
      title: frontmatter.title,
      description: frontmatter.description,
      path,
      datePublished: frontmatter.date,
      author: frontmatter.author,
      image: frontmatter.image,
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: labels[collection], path: `/${collection}` },
      { name: frontmatter.title, path },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header. Deliberately not PageHero — that caps its content at
          max-w-3xl, which left the right half of wide screens empty. */}
      <header className="relative overflow-hidden border-b border-border bg-muted/30">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/3 h-80 w-[700px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-[1120px] px-6 py-12 md:py-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href={`/${collection}`} className="hover:text-primary">
              {labels[collection]}
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="line-clamp-1 text-navy">{frontmatter.title}</span>
          </nav>

          {frontmatter.tag ? (
            <span className="mt-8 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {frontmatter.tag}
            </span>
          ) : null}

          <h1 className="mt-5 max-w-[20ch] font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
            {frontmatter.title}
          </h1>

          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
            {frontmatter.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {frontmatter.author ? (
              <span className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-navy-foreground"
                >
                  {frontmatter.author.charAt(0)}
                </span>
                <span className="font-semibold text-navy">{frontmatter.author}</span>
              </span>
            ) : null}
            <span aria-hidden="true" className="text-border">
              |
            </span>
            <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
            <span aria-hidden="true" className="text-border">
              |
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" />
              {doc.readingMinutes} min read
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1120px] px-6 py-14 md:py-16">
        {frontmatter.image ? (
          <figure className="mb-14">
            {/* Ratio matches the 1200x630 artwork so the slot is reserved
                before load — no layout shift. */}
            <div className="aspect-[1200/630] overflow-hidden rounded-2xl border border-border bg-muted shadow-card">
              <img
                src={frontmatter.image}
                alt={frontmatter.title}
                width={1200}
                height={630}
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        ) : null}

        {/* Two columns on desktop: the sidebar gives the horizontal space a
            job instead of leaving a narrow column floating in dead margin. */}
        <div className="grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_270px]">
          <article className="min-w-0 max-w-[40rem]">
            <MdxContent source={doc.content} />

            <div className="mt-16 border-t border-border pt-8">
              <Link
                href={`/${collection}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
              >
                <ArrowLeft className="size-4" />
                Back to {labels[collection]}
              </Link>
            </div>
          </article>

          <aside>
            <ArticleToc headings={doc.headings} collection={collection} />
          </aside>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
