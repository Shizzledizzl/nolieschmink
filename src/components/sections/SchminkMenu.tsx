"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { siteContent, getMenuItems } from "@/data/siteContent";
import type { GalleryItem, MenuThemeId } from "@/data/siteContent";
import { SafeImage } from "@/components/SafeImage";
import { Section, SectionHeading } from "@/components/ui/Section";

const INITIAL_VISIBLE = 4;

type MenuCategoryGroup = {
  id: MenuThemeId;
  label: string;
  items: GalleryItem[];
};

function MenuCategorySection({
  group,
  startIndex,
  onOpenLightbox,
}: {
  group: MenuCategoryGroup;
  startIndex: number;
  onOpenLightbox: (index: number) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = group.items.length > INITIAL_VISIBLE;

  return (
    <section aria-labelledby={`menu-${group.id}`}>
      <h3
        id={`menu-${group.id}`}
        className="mb-4 font-display text-xl font-semibold text-purple-deep sm:text-2xl"
      >
        {group.label}
      </h3>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {group.items.map((item, i) => (
          <li
            key={item.id}
            className={
              i >= INITIAL_VISIBLE && !expanded ? "hidden md:list-item" : undefined
            }
          >
            <button
              type="button"
              onClick={() => onOpenLightbox(startIndex + i)}
              className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-lavender/30 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-soft"
            >
              <div
                className="relative aspect-square"
                style={{ position: "relative", aspectRatio: "1 / 1" }}
              >
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholderColor="#c9b8e0"
                />
              </div>
              <span className="px-3 py-2.5 text-sm font-semibold text-ink">
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-lavender/20 px-4 py-2.5 text-sm font-semibold text-purple-deep transition-colors hover:bg-lavender/35 md:hidden"
          aria-expanded={expanded}
          aria-controls={`menu-grid-${group.id}`}
        >
          {expanded
            ? "Toon minder"
            : `Toon meer (${group.items.length - INITIAL_VISIBLE})`}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      )}
    </section>
  );
}

export function SchminkMenu() {
  const { schminkMenu } = siteContent;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = useId();

  const menuItems = getMenuItems();
  const categories = siteContent.portfolio.menuCategories;
  const itemsByCategory = categories.map((cat) => ({
    ...cat,
    items: menuItems.filter((item) => item.category === cat.id),
  }));

  const flatItems = itemsByCategory.flatMap((group) => group.items);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    closeBtnRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox]);

  const activeItem =
    lightboxIndex !== null ? flatItems[lightboxIndex] : null;

  let itemOffset = 0;

  return (
    <Section id="schmink-menu" ariaLabelledBy="schmink-menu-title">
      <SectionHeading
        id="schmink-menu-title"
        title={schminkMenu.title}
        subtitle={schminkMenu.subtitle}
      />

      <p className="mx-auto -mt-4 mb-10 max-w-2xl text-center text-base leading-relaxed text-ink-muted">
        {schminkMenu.intro}
      </p>

      <div className="space-y-12">
        {itemsByCategory.map((group) => {
          if (group.items.length === 0) return null;
          const startIndex = itemOffset;
          itemOffset += group.items.length;

          return (
            <MenuCategorySection
              key={group.id}
              group={group}
              startIndex={startIndex}
              onOpenLightbox={openLightbox}
            />
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm font-medium text-purple-deep">
        {schminkMenu.tip}
      </p>

      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            aria-label="Sluit vergrote afbeelding"
            onClick={closeLightbox}
          />
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-lavender/30 px-4 py-3">
              <h3
                id={dialogTitleId}
                className="font-display text-lg font-semibold text-purple-deep"
              >
                {activeItem.title}
              </h3>
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
                alt={activeItem.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
                placeholderColor="#c9b8e0"
              />
            </div>
            <p className="px-4 py-3 text-sm text-ink-muted">{activeItem.alt}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
