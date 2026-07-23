import { Check, X } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { advantageRows } from "@/content/company";

export function Advantage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="The Vidyayatan Advantage"
          title="Why we consistently outperform the alternatives"
          description="Market options can look cheaper up front, but often lead to poor code quality and high maintenance costs as they struggle to scale. Our approach delivers robust, scalable solutions that reduce long-term expense."
        />

        <Reveal className="mt-14">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border shadow-card">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 bg-muted/60 px-6 py-4 text-sm font-semibold text-navy">
              <span>Capability</span>
              <span className="w-24 text-center text-muted-foreground">Alternatives</span>
              <span className="w-24 text-center text-primary">Vidyayatan</span>
            </div>
            {advantageRows.map((row, i) => (
              <div
                key={row}
                className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-4 text-sm ${
                  i % 2 ? "bg-card" : "bg-muted/20"
                }`}
              >
                <span className="font-medium text-navy">{row}</span>
                <span className="flex w-24 justify-center">
                  <X className="size-5 text-muted-foreground/50" />
                </span>
                <span className="flex w-24 justify-center">
                  <span className="grid size-6 place-items-center rounded-full bg-primary/10">
                    <Check className="size-4 text-primary" />
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
