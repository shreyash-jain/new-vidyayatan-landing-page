import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { MdxContent } from "@/components/mdx-content";
import { CtaBand } from "@/components/common/cta-band";
import { Badge } from "@/components/ui/badge";
import { formatDate, type Doc, type Collection } from "@/lib/mdx";

const labels: Record<Collection, string> = { blog: "Blog", guides: "Guides" };

export function DocArticle({ doc, collection }: { doc: Doc; collection: Collection }) {
  const { frontmatter } = doc;
  return (
    <>
      <PageHero
        eyebrow={frontmatter.tag ?? labels[collection]}
        title={frontmatter.title}
        description={frontmatter.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: labels[collection], href: `/${collection}` },
          { label: frontmatter.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          {frontmatter.author ? <Badge variant="outline">{frontmatter.author}</Badge> : null}
          <span>{formatDate(frontmatter.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {doc.readingMinutes} min read
          </span>
        </div>
      </PageHero>

      <Section>
        <Container className="max-w-3xl">
          <article>
            <MdxContent source={doc.content} />
          </article>
          <div className="mt-14 border-t border-border pt-8">
            <Link
              href={`/${collection}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
            >
              <ArrowLeft className="size-4" />
              Back to {labels[collection]}
            </Link>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
