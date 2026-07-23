import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container, Section } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { ContactForm } from "./contact-form";
import { site } from "@/content/site";

export function ContactCta() {
  return (
    <Section id="contact" className="scroll-mt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in touch"
              title="Your journey starts here"
              description="Connect with us to explore how our solutions can transform your business. Whether you have a project in mind or just want to learn more, we're eager to hear from you."
            />
            <div className="mt-8 space-y-4">
              <ContactRow icon={Phone} label="Call us" value={site.contact.phone} href={`tel:${site.contact.phoneRaw}`} />
              <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with our team" href={site.links.whatsapp} external />
              <ContactRow icon={Mail} label="Email" value={site.contact.email} href={`mailto:${site.contact.email}`} />
              <ContactRow icon={MapPin} label="Headquarters" value={`${site.hq.city}, ${site.hq.country}`} />
            </div>
          </div>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="font-medium text-navy">{value}</div>
      </div>
    </div>
  );
  if (!href) return content;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block rounded-2xl transition-colors hover:bg-muted/50"
    >
      {content}
    </a>
  );
}
