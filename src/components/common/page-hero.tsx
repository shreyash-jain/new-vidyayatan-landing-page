import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  /** Centred heroes are tighter — used where the page below is a card grid. */
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/30">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <Container className={centered ? "py-12 md:py-16" : "py-16 md:py-20"}>
        {breadcrumbs ? (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "mb-6 flex items-center gap-1.5 text-sm text-muted-foreground",
              centered && "justify-center",
            )}
          >
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 ? <ChevronRight className="size-3.5" /> : null}
                {c.href ? (
                  <Link href={c.href} className="hover:text-primary">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-navy">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
        <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "mt-5 text-lg leading-relaxed text-muted-foreground",
                centered && "mx-auto max-w-2xl",
              )}
            >
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
