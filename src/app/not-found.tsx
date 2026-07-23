import Link from "next/link";
import { Container, Section } from "@/components/common/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="text-center">
      <Container>
        <p className="font-display text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-navy">
          This page could not be found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </Container>
    </Section>
  );
}
