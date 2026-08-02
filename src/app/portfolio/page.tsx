import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { siteContent, getPortfolioItems } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: siteContent.seo.pages.portfolio,
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const { portfolio } = siteContent;

  return (
    <>
      <Header />
      <main>
        <PortfolioGallery
          sectionId="portfolio"
          title={portfolio.pageTitle}
          subtitle={portfolio.pageSubtitle}
          galleryItems={getPortfolioItems()}
          galleryCategories={portfolio.portfolioCategories}
          layout="grouped"
          showConsentNote
          className="border-t border-lavender/30 bg-surface-alt/40"
        />
      </main>
      <Footer />
    </>
  );
}
