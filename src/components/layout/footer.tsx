import * as React from "react";
import Link from "next/link";
import { Linkedin, Twitter, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { BookMeetingButton } from "@/components/common/book-meeting-button";
import { footerNav } from "@/content/nav";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand column */}
          <div className="max-w-sm">
            <Logo invert />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Trusted by industry leaders, {site.name} empowers businesses with
              cutting-edge software solutions and expert development teams — driving
              innovation and efficiency from our headquarters in {site.hq.city}.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/60">
              <MapPin className="size-4" />
              {site.hq.city}, {site.hq.country}
            </div>
            <BookMeetingButton className="mt-6" variant="default">
              Book free consultation
              <ArrowUpRight />
            </BookMeetingButton>
            <div className="mt-6 flex gap-3">
              <SocialLink href={site.links.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialLink>
              <SocialLink href={site.links.twitter} label="Twitter">
                <Twitter className="size-4" />
              </SocialLink>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerNav.map((col) => (
              <div key={col.label}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {col.label}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/75 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Run by IIT Alumni · Built with care in {site.hq.city}.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
    >
      {children}
    </a>
  );
}
