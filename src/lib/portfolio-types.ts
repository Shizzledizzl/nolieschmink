export type PortfolioItemKind = "oefengezicht" | "arm" | "gezicht";

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  kind?: PortfolioItemKind;
  comingSoon?: boolean;
};
