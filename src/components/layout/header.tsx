"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookMeetingButton } from "@/components/common/book-meeting-button";
import { Logo } from "./logo";
import { primaryNav, isGroup, type NavGroup } from "@/content/nav";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex">
          {primaryNav.map((item) =>
            isGroup(item) ? (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
                onFocus={() => setOpenGroup(item.label)}
                onBlur={(e) => {
                  // Only close once focus has actually left the group, not
                  // while tabbing between the items inside it.
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenGroup(null);
                  }
                }}
              >
                {/* A group with an `href` has a landing page of its own, so the
                    tab is a link: clicking goes there, hovering opens the menu. */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                    aria-haspopup="true"
                    aria-expanded={openGroup === item.label}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                ) : (
                  <button
                    className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                    aria-haspopup="true"
                    aria-expanded={openGroup === item.label}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                )}
                <MegaMenu group={item} open={openGroup === item.label} />
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Contact</Link>
          </Button>
          <BookMeetingButton size="sm">
            Book a meeting
            <ArrowRight />
          </BookMeetingButton>
        </div>

        {/* Mobile trigger */}
        <button
          className="inline-flex size-10 items-center justify-center rounded-xl border border-border text-navy xl:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <MobileNav onNavigate={() => setMobileOpen(false)} />
      ) : null}
    </header>
  );
}

function MegaMenu({ group, open }: { group: NavGroup; open: boolean }) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full w-[min(92vw,640px)] -translate-x-1/2 pt-3 transition-all",
        open
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 -translate-y-1",
      )}
    >
      <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-3 shadow-card">
        {group.items.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            className="rounded-xl p-3 transition-colors hover:bg-muted"
          >
            <div className="text-sm font-semibold text-navy">{sub.label}</div>
            {sub.description ? (
              <div className="mt-0.5 text-xs text-muted-foreground">
                {sub.description}
              </div>
            ) : null}
          </Link>
        ))}
        {group.href ? (
          <Link
            href={group.href}
            className="col-span-2 mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-accent p-2.5 text-sm font-semibold text-accent-foreground"
          >
            View all {group.label}
            <ArrowRight className="size-3.5" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background xl:hidden">
      <div className="space-y-1 px-6 py-5">
        {primaryNav.map((item) =>
          isGroup(item) ? (
            <details key={item.label} className="group">
              <summary className="flex cursor-pointer items-center justify-between py-3 font-display font-semibold text-navy">
                {item.label}
                <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="ml-2 border-l border-border pl-4">
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block py-2 text-sm font-semibold text-primary"
                  >
                    All {item.label}
                  </Link>
                ) : null}
                {item.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={onNavigate}
                    className="block py-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="block py-3 font-display font-semibold text-navy"
            >
              {item.label}
            </Link>
          ),
        )}
        <div className="flex flex-col gap-2 pt-4">
          <Button asChild variant="outline">
            <Link href="/contact" onClick={onNavigate}>
              Contact
            </Link>
          </Button>
          <BookMeetingButton>
            Book a meeting
            <ArrowRight />
          </BookMeetingButton>
        </div>
      </div>
    </div>
  );
}
