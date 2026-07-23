import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Badge } from "@/components/ui/badge";
import { inhouseProducts } from "@/content/inhouse-products";

/** Vidyayatan's own SaaS products — proof we build products, not just projects. */
export function InhouseProducts() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Built by us, used by thousands"
          title="Our in-house products"
          description="We don't just build software for clients — we run our own SaaS products. The same craft goes into everything we ship for you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {inhouseProducts.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
              >
                <div className="relative bg-gradient-to-br from-accent/60 to-muted">
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${p.tag}`}
                    width={1024}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <Badge className="absolute left-4 top-4 bg-white/90 text-navy shadow-sm">
                    {p.tag}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-navy">
                      {p.name}
                    </h3>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-navy transition-colors group-hover:bg-primary group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-primary">
                    {p.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-navy/80">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
