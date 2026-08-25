import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CaseStudyImageProps = {
  src?: string;
  alt: string;
  /** Intrinsic size — always passed so the box never shifts as art loads. */
  width?: number;
  height?: number;
  className?: string;
  /** Shown inside the placeholder block when no art exists yet. */
  fallbackLabel?: string;
  /** Only the detail-page hero should set this; everything else lazy-loads. */
  priority?: boolean;
};

/**
 * Every case-study image goes through here. Case studies are published before
 * their screenshots exist, so a missing `src` renders a neutral placeholder
 * block rather than a broken-image icon. Wrap this in an element that owns the
 * aspect ratio (e.g. `aspect-video overflow-hidden`).
 *
 * Note on fit: product screenshots are UI, not photography — cropping one cuts
 * off the chrome that identifies it. Use `object-contain` on a padded surface
 * anywhere the whole screen matters (feature rows, gallery), and reserve
 * `object-cover` for decorative crops like cards and the hero.
 */
export function CaseStudyImage({
  src,
  alt,
  width = 1280,
  height = 800,
  className,
  fallbackLabel,
  priority = false,
}: CaseStudyImageProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 bg-muted bg-grid-faint bg-[size:24px_24px] text-muted-foreground",
          className,
        )}
      >
        <ImageIcon className="size-6" aria-hidden="true" />
        {fallbackLabel ? (
          <span className="px-4 text-center text-xs font-medium">
            {fallbackLabel}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={className}
    />
  );
}
