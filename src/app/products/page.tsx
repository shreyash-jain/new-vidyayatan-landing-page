import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { ProductCard } from "@/components/sections/product-card";
import { pageMetadata } from "@/lib/metadata";
import { products } from "@/content/products";

export const metadata: Metadata = pageMetadata({
  title: "Products & Case Studies",
  description:
    "A glimpse into our solutions — from BharatPe's payments platform to DCM Shriram's 300,000-farm monitoring system. Real products, real results.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Case Studies"
        title="Solutions that transform operations"
        description="Explore our range of innovative products, designed to tackle industry challenges and boost efficiency. Cutting-edge solutions that drive success."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand title="Have a product in mind?" />
    </>
  );
}
