import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/JsonLd";
import { readPortfolioItems } from "@/lib/portfolio-store";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const portfolioItems = await readPortfolioItems();

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <WorkPreview portfolioItems={portfolioItems} />
        <PricingTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
