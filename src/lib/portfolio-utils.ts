import { siteContent } from "@/data/siteContent";
import type { PortfolioItem, PortfolioItemKind } from "@/lib/portfolio-types";

export type MenuThemeId =
  | "dieren"
  | "prinsessen"
  | "bloemen"
  | "thema"
  | "helden"
  | "armdesigns";

export type PortfolioCategoryId =
  | "all"
  | "armdesigns"
  | "dieren"
  | "prinsessen"
  | "bloemen"
  | "diversen";

export type GalleryItem = Omit<PortfolioItem, "category"> & {
  category: PortfolioCategoryId | MenuThemeId;
  comingSoon?: boolean;
};

const itemKinds: Record<string, PortfolioItemKind> = {
  "arm-gecombineerd": "arm",
  "arm-rozen-lang": "arm",
  "arm-lelies": "arm",
  "arm-raket": "arm",
  "minecraft-arm": "arm",
  "haai-arm": "arm",
  "hand-dino": "arm",
  "arm-rozen-roze": "arm",
  "arm-rozen-kind": "arm",
  "arm-rozen-regenboog": "arm",
  "bloemenkroon-meisje": "gezicht",
  hulk: "gezicht",
  "nola-konijnenoren": "gezicht",
  "ijskoningin-meisje": "gezicht",
  "draak-jongen": "gezicht",
  "draak-jongen-groen": "gezicht",
  "vos-meisje": "gezicht",
  "fantasiekroon-meisje": "gezicht",
  "captain-america-jongen": "gezicht",
  "meisjes-bloemen-vlinder": "gezicht",
  "tijger-jongen": "gezicht",
  "spiderman-jongen": "gezicht",
  "konijn-meisje": "gezicht",
  "arm-rozen-paars": "arm",
  "arm-bloemen-roze": "arm",
};

export function getItemKind(
  id: string,
  items?: PortfolioItem[]
): PortfolioItemKind {
  const item = items?.find((entry) => entry.id === id);
  if (item?.kind) return item.kind;
  return itemKinds[id] ?? "oefengezicht";
}

export function getMenuItems(items: PortfolioItem[]): GalleryItem[] {
  const pool = new Map(items.map((item) => [item.id, item as GalleryItem]));

  return siteContent.schminkMenu.categories.flatMap((cat) => {
    const fromIds = cat.itemIds
      .map((id) => pool.get(id))
      .filter((item): item is GalleryItem => item !== undefined);

    const extras = items.filter(
      (item) =>
        !(cat.itemIds as readonly string[]).includes(item.id) &&
        !("comingSoon" in item && item.comingSoon) &&
        ((cat.id === "armdesigns" && getItemKind(item.id, items) === "arm") ||
          (cat.id !== "armdesigns" &&
            getItemKind(item.id, items) === "oefengezicht" &&
            item.category === cat.id))
    ) as GalleryItem[];

    return [...fromIds, ...extras].map((item) => ({
      ...item,
      category: cat.id as MenuThemeId,
    }));
  });
}

export function getPortfolioItems(items: PortfolioItem[]): GalleryItem[] {
  return items
    .filter((item) => getItemKind(item.id, items) !== "oefengezicht")
    .map((item) => ({
      ...item,
      category:
        getItemKind(item.id, items) === "arm"
          ? "armdesigns"
          : (item.category as MenuThemeId),
    })) as GalleryItem[];
}

export function resolveFeaturedItems(
  items: PortfolioItem[],
  itemIds: readonly string[]
): GalleryItem[] {
  const pool = new Map(getPortfolioItems(items).map((item) => [item.id, item]));
  return itemIds
    .map((id) => pool.get(id))
    .filter((item): item is GalleryItem => item !== undefined);
}
