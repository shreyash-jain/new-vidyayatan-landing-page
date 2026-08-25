import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        // The wrapper is a flex column, so the pill stretches to full width
        // unless it aligns itself. `.eyebrow` is inline-flex, not block.
        <span
          className={cn(
            "eyebrow",
            align === "center" ? "mx-auto self-center" : "self-start",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
