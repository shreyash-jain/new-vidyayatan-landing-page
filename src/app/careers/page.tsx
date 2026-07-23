import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/common/page-hero";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaBand } from "@/components/common/cta-band";
import { pageMetadata } from "@/lib/metadata";
import { openRoles, perks } from "@/content/careers";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "Become part of an exceptional, IIT-alumni-led engineering team. Explore open roles at Vidyayatan Technologies in Bhopal and remote.",
  path: "/careers",
});

export default function CareersPage() {
  const applyHref = `mailto:${site.contact.email}?subject=Application`;
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Become part of our exceptional team"
        description="We're an engineering-first team building software that runs at real scale. If you care about craft and impact, you'll feel at home here."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="Why join us" title="Work that matters, with people who care" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="font-display font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <SectionHeading eyebrow="Open roles" title="Positions we're hiring for" />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {openRoles.map((role, i) => (
              <Reveal key={role.title} delay={(i % 4) * 0.04}>
                <a
                  href={applyHref}
                  className="card-hover group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">
                      {role.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="primary">{role.team}</Badge>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        {role.location}
                      </span>
                      <span>· {role.type}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                    Apply
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don&apos;t see your role?{" "}
            <a href={applyHref} className="font-semibold text-primary hover:underline">
              Send us your resume
            </a>{" "}
            — we&apos;re always keen to meet great people.
          </p>
        </Container>
      </Section>

      <CtaBand title="Ready to build with us?" description="Reach out and tell us what you'd love to work on." />
    </>
  );
}
