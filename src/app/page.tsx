import { Hero } from "@/components/sections/hero";
import { AiApplications } from "@/components/sections/ai-applications";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { AiCapabilities } from "@/components/sections/ai-capabilities";
import { AiUseCases } from "@/components/sections/ai-use-cases";
import { AiProcess } from "@/components/sections/ai-process";
import { InhouseProducts } from "@/components/sections/inhouse-products";
import { Advantage } from "@/components/sections/advantage";
import { LongTermProfitability } from "@/components/sections/long-term-profitability";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AiApplications />
      <LogoMarquee />
      <AiCapabilities />
      <AiUseCases />
      <AiProcess />
      <InhouseProducts />
      <Advantage />
      <LongTermProfitability />
      <ProductShowcase limit={6} />
      <Testimonials />
      <Faq />
      <ContactCta />
    </>
  );
}
