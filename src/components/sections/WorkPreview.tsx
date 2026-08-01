import { siteContent } from "@/data/siteContent";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export function WorkPreview() {
  const { featuredWork } = siteContent;

  return (
    <PortfolioGallery
      sectionId="werk"
      title={featuredWork.title}
      subtitle={featuredWork.subtitle}
      itemIds={featuredWork.itemIds}
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
