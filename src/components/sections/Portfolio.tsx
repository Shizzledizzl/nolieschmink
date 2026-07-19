"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { siteContent, type PortfolioCategoryId } from "@/data/siteContent";
import { SafeImage } from "@/components/SafeImage";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Portfolio() {
  const { portfolio } = siteContent;
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategoryId>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = useId();

  const filtered =
    activeCategory === "all"
      ? portfolio.items
      : portfolio.items.filter((item) => item.category === activeCategory);

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

  return (
    <Section id="portfolio" className="bg-surface-alt/60" ariaLabelledBy="portfolio-title">
      <SectionHeading
        id="portfolio-title"
        title={portfolio.title}
        subtitle={portfolio.subtitle}
      />

      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Portfolio categorieën"
      >
        {portfolio.categories.map((cat) => {
          const selected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveCategory(cat.id as PortfolioCategoryId)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selected
                  ? "bg-purple-soft text-white shadow-md shadow-purple-soft/25"
                  : "bg-white text-ink-muted shadow-sm hover:bg-lavender/30 hover:text-purple-deep"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-sm shadow-purple-soft/10 transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-soft"
              aria-label={`Vergroot afbeelding: ${item.title}`}
            >
              <div className="relative aspect-square" style={{ position: "relative", aspectRatio: "1 / 1" }}>
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholderColor="#7ec8c0"
                />
              </div>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-3 pb-3 pt-8 text-left text-sm font-semibold text-white opacity-90 transition-opacity group-hover:opacity-100">
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-ink-muted">
          Geen afbeeldingen in deze categorie.
        </p>
      )}

      {/* Lightbox modal */}
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
              <h3 id={dialogTitleId} className="font-display text-lg font-semibold text-purple-deep">
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
            <div className="relative aspect-[4/3] w-full bg-surface-alt" style={{ position: "relative", aspectRatio: "4 / 3" }}>
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
