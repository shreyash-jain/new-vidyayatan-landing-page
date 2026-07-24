import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProductCard } from "@/components/sections/product-card";
import { pageMetadata } from "@/lib/metadata";
import { products, getProduct, type Product } from "@/content/products";
import { getIndustry } from "@/content/industries";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return pageMetadata({ title: "Product" });
  return pageMetadata({
    title: product.caseStudy ? product.caseStudy.headline : product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const industry = getIndustry(product.industry);
  const related = products
    .filter((p) => p.industry === product.industry && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={product.caseStudy ? "Case Study" : "Product"}
        title={product.caseStudy ? product.caseStudy.headline : product.name}
        description={product.caseStudy ? product.caseStudy.subhead : product.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">{product.category}</Badge>
          {industry ? <Badge variant="navy">{industry.title}</Badge> : null}
          {product.client ? <Badge variant="outline">{product.client}</Badge> : null}
          {product.location ? <Badge variant="outline">{product.location}</Badge> : null}
        </div>
      </PageHero>

      {product.caseStudy ? (
        <CaseStudyBody product={product} />
      ) : (
        <StandardBody product={product} />
      )}

      {related.length ? (
        <Section className="bg-muted/40">
          <Container>
            <h2 className="font-display text-2xl font-bold text-navy">
              Related work
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand title="Want results like these?" />
    </>
  );
}

function StandardBody({ product }: { product: Product }) {
  return (
    <>
      {/* Overview + screenshot + highlights */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted to-accent p-6 shadow-soft">
                <Image
                  src={`/products/${product.slug}.jpg`}
                  alt={`${product.name} product screenshot`}
                  width={640}
                  height={400}
                  className="mx-auto max-h-72 w-auto object-contain drop-shadow-md"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-7">
                <h3 className="font-display text-lg font-bold text-navy">
                  Key capabilities
                </h3>
                <ul className="mt-5 space-y-3">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-4" />
                      </span>
                      <span className="text-sm text-navy/80">{h}</span>
                    </li>
                  ))}
                </ul>
                {product.techStack ? (
                  <>
                    <h3 className="mt-7 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Built with
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-navy"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                ) : null}
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Challenge & solution */}
      {product.challenge || product.solution ? (
        <Section className="bg-muted/40">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              {product.challenge ? (
                <Reveal>
                  <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                    <span className="eyebrow">The challenge</span>
                    <p className="mt-4 leading-relaxed text-navy/80">
                      {product.challenge}
                    </p>
                  </div>
                </Reveal>
              ) : null}
              {product.solution ? (
                <Reveal delay={0.1}>
                  <div className="h-full rounded-2xl border border-primary/30 bg-accent/40 p-7 shadow-soft">
                    <span className="eyebrow">Our solution</span>
                    <p className="mt-4 leading-relaxed text-navy/80">
                      {product.solution}
                    </p>
                  </div>
                </Reveal>
              ) : null}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Results */}
      {product.results?.length ? (
        <Section>
          <Container>
            <h2 className="font-display text-2xl font-bold text-navy">The impact</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.results.map((r, i) => (
                <Reveal key={r} delay={(i % 2) * 0.06}>
                  <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-4" />
                    </span>
                    <span className="text-navy/80">{r}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}

function CaseStudyBody({ product }: { product: Product }) {
  const cs = product.caseStudy!;
  return (
    <>
      {/* Facts + overview */}
      <Section>
        <Container>
          <Reveal>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft md:grid-cols-4">
              {cs.facts.map((f) => (
                <div key={f.label} className="bg-card p-6 text-center">
                  <dt className="font-display text-3xl font-bold text-primary">
                    {f.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{f.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-navy">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {cs.overview}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted to-accent p-6 shadow-soft">
                <Image
                  src={`/products/${product.slug}.jpg`}
                  alt={`${product.name} platform`}
                  width={640}
                  height={400}
                  className="max-h-64 w-auto object-contain drop-shadow-md"
                />
              </div>
              <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-soft">
                <Image
                  src="/products/bharatpe-chargeback.jpg"
                  alt="Chargeback lifecycle"
                  width={1030}
                  height={590}
                  className="max-h-64 w-auto object-contain"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Challenges */}
      <Section className="bg-muted/40">
        <Container>
          <h2 className="font-display text-2xl font-bold text-navy">
            Challenges on the path to growth
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cs.challenges.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.06}>
                <Card className="h-full p-6">
                  <span className="font-display text-sm font-bold text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display font-semibold text-navy">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solution + deliverables */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-navy">Our solution</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {cs.solution}
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {cs.deliverables.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy font-display text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-navy">{d.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech + results */}
      <Section className="bg-navy text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold">Technology stack</h2>
              <div className="mt-6 space-y-5">
                {cs.techStack.map((t) => (
                  <div key={t.area}>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                      {t.area}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {t.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold">Results</h2>
              <ul className="mt-6 space-y-3">
                {cs.results.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                      <Check className="size-4" />
                    </span>
                    <span className="text-white/85">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
