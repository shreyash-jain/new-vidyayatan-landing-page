import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Official Vidyayatan horizontal wordmark. It's a solid navy shape on a
 * transparent background, so on dark surfaces we invert it to white with a CSS
 * filter (`invert`) rather than shipping a second asset.
 */
export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", className)}
      aria-label={`${site.name} home`}
    >
      <Image
        src="/brand/logo-wordmark.png"
        alt={site.name}
        width={1074}
        height={124}
        priority
        className={cn(
          "h-7 w-auto transition-opacity group-hover:opacity-80 sm:h-8",
          invert && "[filter:brightness(0)_invert(1)]",
        )}
      />
    </Link>
  );
}
