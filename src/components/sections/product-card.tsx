import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/content/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
    >
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-muted to-accent p-5">
        <Image
          src={`/products/${product.slug}.png`}
          alt={`${product.name} — ${product.category}`}
          width={640}
          height={400}
          className="max-h-full w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {product.caseStudy ? (
          <Badge className="absolute right-3 top-3 bg-white/90 text-navy shadow-sm">
            Case study
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {product.category}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold text-navy">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
          {product.caseStudy ? "Read case study" : "Explore"}
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
