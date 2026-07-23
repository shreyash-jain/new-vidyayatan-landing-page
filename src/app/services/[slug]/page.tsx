import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { Reveal } from "@/components/common/reveal";
import { CtaBand } from "@/components/common/cta-band";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pageMetadata } from "@/lib/metadata";
import {
  services,
  getService,
  serviceProcess,
  serviceIllustration,
} from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return pageMetadata({ title: "Service" });
  return pageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Overview + what you get + deliverables */}
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {service.overview}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex items-center justify-center rounded-3xl bg-gradient-to-br from-accent/60 to-muted p-8">
                <Image
                  src={serviceIllustration[service.slug] ?? "/illustrations/collaboration.png"}
                  alt={`${service.title} illustration`}
                  width={900}
                  height={600}
                  className="max-h-64 w-auto object-contain"
                  priority
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-xl font-bold text-navy">
                What you get
              </h3>
              <ul className="mt-5 space-y-3">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-4" />
                    </span>
                    <span className="text-navy/80">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="p-7">
                <h3 className="font-display text-lg font-bold text-navy">
                  Typical deliverables
                </h3>
                <ul className="mt-5 space-y-4">
                  {service.deliverables.map((d, i) => (
                    <li key={d} className="flex gap-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-navy font-display text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm text-navy/80">{d}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Use cases */}
      <Section className="bg-muted/40">
        <Container>
          <h2 className="font-display text-2xl font-bold text-navy">
            Where this fits
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Common situations where {service.title.toLowerCase()} makes the biggest
            difference.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.useCases.map((u, i) => (
              <Reveal key={u} delay={(i % 2) * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-4" />
                  </span>
                  <span className="text-sm text-navy/80">{u}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {service.techStack ? (
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Typical tech stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-navy shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <h2 className="font-display text-2xl font-bold text-navy">How we work</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A simple, transparent process from first conversation to launch.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceProcess.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 0.06}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="font-display text-3xl font-black text-primary/20">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/40">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-start">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">
                Frequently asked
              </h2>
              <p className="mt-3 text-muted-foreground">
                Quick answers about {service.title.toLowerCase()}.{" "}
                <Link href="/contact" className="font-semibold text-primary hover:underline">
                  Ask us anything
                </Link>
                .
              </p>
            </div>
            <Reveal>
              <Accordion type="single" collapsible className="space-y-3">
                {service.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{f.question}</AccordionTrigger>
                    <AccordionContent>{f.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Related services */}
      <Section>
        <Container>
          <h2 className="font-display text-2xl font-bold text-navy">
            Explore more services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-hover group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <s.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-display font-semibold text-navy">
                  {s.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                  Learn more
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title={`Ready to start with ${service.title}?`} />
    </>
  );
}
