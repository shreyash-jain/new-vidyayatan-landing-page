import * as React from "react";
import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

/**
 * Subtle entrance animation, pure CSS (see `.reveal` in globals.css).
 * No JS required — content is always in the DOM and ends fully visible, so it's
 * safe for crawlers, no-JS visitors, and can never get stuck hidden.
 * Honours prefers-reduced-motion.
 */
export function Reveal({ delay = 0, className, style, children, ...props }: RevealProps) {
  return (
    <div
      className={cn("reveal", className)}
      style={{ animationDelay: delay ? `${delay}s` : undefined, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
