import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./product-card";
import { products } from "@/content/products";
import { site } from "@/content/site";

export function ProductShowcase({ limit }: { limit?: number }) {
  const list = limit ? products.slice(0, limit) : products;
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="A glimpse into our solutions"
          title="Products that transform operations"
          description="Explore our range of solutions designed to tackle industry challenges and drive success. Cutting-edge products, real-world results."
        />
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" size="sm">
            <a href={site.links.demoVideo} target="_blank" rel="noopener noreferrer">
              <PlayCircle />
              Watch demo
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        {limit ? (
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/products">
                View all products
                <ArrowRight />
              </Link>
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
