export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SchminkMenu } from "@/components/sections/SchminkMenu";
import { siteContent } from "@/data/siteContent";
import { readPortfolioItems } from "@/lib/portfolio-store";

export const metadata: Metadata = {
  title: "Schmink menu",
  description: siteContent.seo.pages.schminkMenu,
  alternates: { canonical: "/schmink-menu" },
};

export default async function SchminkMenuPage() {
  const portfolioItems = await readPortfolioItems();

  return (
    <>
      <Header />
      <main>
        <SchminkMenu portfolioItems={portfolioItems} />
      </main>
      <Footer />
    </>
  );
}
