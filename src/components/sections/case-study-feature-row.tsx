import {
  Bell,
  Brain,
  Database,
  Gauge,
  Map,
  Plug,
  ShieldCheck,
  Smartphone,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CaseStudyImage } from "./case-study-image";
import type { FeatureIcon, SolutionFeature } from "@/content/case-studies";

const icons: Record<FeatureIcon, LucideIcon> = {
  workflow: Workflow,
  gauge: Gauge,
  shield: ShieldCheck,
  smartphone: Smartphone,
  brain: Brain,
  database: Database,
  plug: Plug,
  users: Users,
  map: Map,
  bell: Bell,
};

/**
 * One solution feature: copy on one side, screenshot on the other, sides
 * flipping each row. The image comes first in DOM order so it always sits
 * above the text on mobile, and `lg:order-*` does the flipping on desktop.
 */
export function FeatureRow({
  feature,
  index,
  clientName,
}: {
  feature: SolutionFeature;
  index: number;
  clientName: string;
}) {
  const Icon = icons[feature.icon] ?? Workflow;
  const imageRight = index % 2 === 0;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      {/* Screenshots vary in shape (some are near-square), so the tile is a
          fixed-ratio surface and the image sits inside it whole — cropping a
          product UI cuts off the chrome that makes it readable. */}
      <div
        className={cn(
          "flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted p-3 shadow-soft",
          imageRight ? "lg:order-2" : "lg:order-1",
        )}
      >
        <CaseStudyImage
          src={feature.image}
          alt={feature.imageAlt ?? `${clientName} — ${feature.title}`}
          width={900}
          height={562}
          fallbackLabel={feature.title}
          className="max-h-full w-auto rounded-lg object-contain"
        />
      </div>

      <div className={cn("flex flex-col gap-4", imageRight ? "lg:order-1" : "lg:order-2")}>
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
          {feature.title}
        </h3>
        <p className="max-w-[68ch] text-base leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
