import Image from "next/image";
import { Container } from "@/components/common/container";
import { clients } from "@/content/company";

export function LogoMarquee() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by industry leaders
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {row.map((client, i) => (
              <Image
                key={`${client.name}-${i}`}
                src={client.logo}
                alt={client.name}
                width={425}
                height={80}
                className="h-8 w-auto shrink-0 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-9"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
