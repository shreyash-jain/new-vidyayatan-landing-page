import * as React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookMeetingButton } from "@/components/common/book-meeting-button";
import { site } from "@/content/site";

type CtaButtonsProps = {
  className?: string;
  primaryLabel?: string;
  showWhatsApp?: boolean;
};

/** Book-a-meeting + WhatsApp CTAs — the two conversion actions used site-wide. */
export function CtaButtons({
  className,
  primaryLabel = "Book a meeting",
  showWhatsApp = true,
}: CtaButtonsProps) {
  return (
    <div className={className}>
      <BookMeetingButton size="lg">
        {primaryLabel}
        <ArrowRight />
      </BookMeetingButton>
      {showWhatsApp ? (
        <Button asChild size="lg" variant="outline">
          <a href={site.links.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle />
            Chat on WhatsApp
          </a>
        </Button>
      ) : null}
    </div>
  );
}
