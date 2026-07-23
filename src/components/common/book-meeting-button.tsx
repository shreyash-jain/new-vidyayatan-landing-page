"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { site } from "@/content/site";

/**
 * Opens the Google Calendar scheduler in a centered popup window (falls back to
 * a new tab if the popup is blocked). Accepts all Button props + children.
 */
export function BookMeetingButton({ children, ...props }: ButtonProps) {
  function openBooking() {
    const w = 520;
    const h = 720;
    const left = window.screenX + Math.max(0, (window.outerWidth - w) / 2);
    const top = window.screenY + Math.max(0, (window.outerHeight - h) / 2);
    const popup = window.open(
      site.links.bookMeeting,
      "vidyayatan-booking",
      `popup=yes,noopener,width=${w},height=${h},left=${left},top=${top}`,
    );
    if (!popup) {
      window.open(site.links.bookMeeting, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <Button type="button" onClick={openBooking} {...props}>
      {children}
    </Button>
  );
}
