"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import {
  siteContent,
  getPortfolioItems,
  type PortfolioCategoryId,
  type GalleryItem,
} from "@/data/siteContent";
import { SafeImage } from "@/components/SafeImage";
import { Section, SectionHeading } from "@/components/ui/Section";

type PortfolioGalleryProps = {
  sectionId: string;
  title: string;
  subtitle?: string;
  itemIds?: readonly string[];
  galleryItems?: GalleryItem[];
  galleryCategories?: readonly { id: string; label: string }[];
  showCategories?: boolean;
  showConsentNote?: boolean;
  showViewAllLink?: boolean;
  viewAllLabel?: string;
  viewAllHref?: string;
  showItemLabels?: boolean;
  showLightboxDetails?: boolean;
  layout?: "grid" | "homepage";
  className?: string;
};

function resolveItems(
  itemIds: readonly string[] | undefined,
  pool: GalleryItem[]
) {
  if (!itemIds) return pool;
  return itemIds
    .map((id) => pool.find((item) => item.id === id))
    .filter((item): item is GalleryItem => item !== undefined);
}

function GalleryPhoto({
  item,
  index,
  onOpen,
  showItemLabels,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (index: number) => void;
  showItemLabels: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className="group relative block w-full overflow-hidden rounded-2xl shadow-sm shadow-purple-soft/10 transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-soft"
      aria-label={
        showItemLabels
          ? `Vergroot afbeelding: ${item.title}`
          : "Vergroot afbeelding"
      }
    >
      <div
        className="relative aspect-square"
        style={{ position: "relative", aspectRatio: "1 / 1" }}
      >
        <SafeImage
          src={item.src}
          alt={showItemLabels ? item.alt : ""}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholderColor="#7ec8c0"
        />
      </div>
      {showItemLabels && (
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-3 pb-3 pt-8 text-left text-sm font-semibold text-white opacity-90 transition-opacity group-hover:opacity-100">
          {item.title}
        </span>
      )}
    </button>
  );
}

export function PortfolioGallery({
  sectionId,
  title,
  subtitle,
  itemIds,
  galleryItems,
  galleryCategories,
  showCategories = true,
  showConsentNote = false,
  showViewAllLink = false,
  viewAllLabel,
  viewAllHref,
  showItemLabels = true,
  showLightboxDetails = true,
  layout = "grid",
  className = "",
}: PortfolioGalleryProps) {
  const { portfolio } = siteContent;
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategoryId>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = useId();

  const itemPool = galleryItems ?? getPortfolioItems();
  const baseItems = resolveItems(itemIds, itemPool);

  const filtered =
    !showCategories || activeCategory === "all"
      ? baseItems
      : baseItems.filter((item) => item.category === activeCategory);

  const categorySource =
    galleryCategories ?? siteContent.portfolio.portfolioCategories;

  const categories = showCategories
    ? categorySource
    : categorySource.filter((cat) =>
        baseItems.some(
          (item) => cat.id === "all" || item.category === cat.id
        )
      );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    closeBtnRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && filtered.length > 0) {
        setLightboxIndex((i) =>
          i === null ? 0 : (i + 1) % filtered.length
        );
      }
      if (e.key === "ArrowLeft" && filtered.length > 0) {
        setLightboxIndex((i) =>
          i === null ? 0 : (i - 1 + filtered.length) % filtered.length
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, filtered.length]);

  const activeItem =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const viewAllButton =
    showViewAllLink && viewAllHref && viewAllLabel ? (
      <Link
        href={viewAllHref}
        className="inline-flex items-center justify-center rounded-full bg-purple-soft px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-purple-deep"
      >
        {viewAllLabel}
      </Link>
    ) : null;

  const topItems = layout === "homepage" ? filtered.slice(0, 3) : filtered;
  const bottomLeft = layout === "homepage" ? filtered[3] : undefined;
  const bottomRight = layout === "homepage" ? filtered[4] : undefined;

  return (
    <Section
      id={sectionId}
      className={className}
      ariaLabelledBy={`${sectionId}-title`}
    >
      <SectionHeading id={`${sectionId}-title`} title={title} subtitle={subtitle} />

      {showCategories && categories.length > 1 && (
        <div
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Portfolio categorieën"
        >
          {categories.map((cat) => {
            const selected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveCategory(cat.id as PortfolioCategoryId)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  selected
                    ? "bg-purple-soft text-white"
                    : "bg-white text-ink-muted hover:text-purple-deep"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {layout === "homepage" ? (
        <div className="space-y-4">
          <ul className="grid gap-4 sm:grid-cols-3">
            {topItems.map((item, index) => (
              <li key={item.id}>
                <GalleryPhoto
                  item={item}
                  index={index}
                  onOpen={openLightbox}
                  showItemLabels={showItemLabels}
                />
              </li>
            ))}
          </ul>

          {(bottomLeft || bottomRight || viewAllButton) && (
            <div className="grid gap-4 sm:grid-cols-3 sm:items-center">
              <div>{bottomLeft && (
                <GalleryPhoto
                  item={bottomLeft}
                  index={3}
                  onOpen={openLightbox}
                  showItemLabels={showItemLabels}
                />
              )}</div>
              <div className="flex justify-center py-2 sm:py-0">{viewAllButton}</div>
              <div>{bottomRight && (
                <GalleryPhoto
                  item={bottomRight}
                  index={4}
                  onOpen={openLightbox}
                  showItemLabels={showItemLabels}
                />
              )}</div>
            </div>
          )}
        </div>
      ) : (
        <ul
          className={`grid gap-4 ${
            itemIds ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {filtered.map((item, index) => (
            <li key={item.id}>
              <GalleryPhoto
                item={item}
                index={index}
                onOpen={openLightbox}
                showItemLabels={showItemLabels}
              />
            </li>
          ))}
        </ul>
      )}

      {filtered.length === 0 && (
        <p className="py-12 text-center text-ink-muted">
          Geen afbeeldingen in deze categorie.
        </p>
      )}

      {showConsentNote && (
        <p className="mt-8 text-center text-sm text-ink-muted">
          {portfolio.consentNote}
        </p>
      )}

      {layout !== "homepage" && viewAllButton && (
        <p className="mt-8 text-center">{viewAllButton}</p>
      )}

      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Vergrote afbeelding"
          {...(showLightboxDetails ? { "aria-labelledby": dialogTitleId } : {})}
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            aria-label="Sluit vergrote afbeelding"
            onClick={closeLightbox}
          />
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div
              className={`flex items-center border-b border-lavender/30 px-4 py-3 ${
                showLightboxDetails ? "justify-between" : "justify-end"
              }`}
            >
              {showLightboxDetails && (
                <h3
                  id={dialogTitleId}
                  className="font-display text-lg font-semibold text-purple-deep"
                >
                  {activeItem.title}
                </h3>
              )}
              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeLightbox}
                className="rounded-full p-2 text-ink-muted transition-colors hover:bg-lavender/30 hover:text-purple-deep"
                aria-label="Sluiten"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <div
              className="relative aspect-[4/3] w-full bg-surface-alt"
              style={{ position: "relative", aspectRatio: "4 / 3" }}
            >
              <SafeImage
                src={activeItem.src}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
                placeholderColor="#c9b8e0"
              />
            </div>
            {showLightboxDetails && (
              <p className="px-4 py-3 text-sm text-ink-muted">{activeItem.alt}</p>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
