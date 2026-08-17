import { siteContent, resolveFeaturedItems } from "@/data/siteContent";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import type { PortfolioItem } from "@/lib/portfolio-types";

export function WorkPreview({ portfolioItems }: { portfolioItems: PortfolioItem[] }) {
  const { featuredWork } = siteContent;

  return (
    <PortfolioGallery
      sectionId="werk"
      title={featuredWork.title}
      subtitle={featuredWork.subtitle}
      galleryItems={resolveFeaturedItems(portfolioItems, featuredWork.itemIds)}
      layout="homepage"
      showCategories={false}
      showItemLabels={false}
      showLightboxDetails={false}
      showViewAllLink
      viewAllLabel={featuredWork.viewAllLabel}
      viewAllHref={featuredWork.viewAllHref}
      className="border-t border-lavender/30 bg-surface-alt/40"
    />
  );
}
