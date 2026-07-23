import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with the Vidyayatan team. Book a meeting, chat on WhatsApp, or send us a message about your project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with the team"
        description="Whether you have a project in mind or just want to learn more, we're eager to hear from you and start a conversation about achieving your goals together."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactCta />
    </>
  );
}
