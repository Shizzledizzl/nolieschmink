import { siteContent } from "@/data/siteContent";
import { SafeImage } from "@/components/SafeImage";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="border-b border-lavender/30 py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-soft">
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl text-balance"
          >
            {hero.title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#werk"
              className="inline-flex items-center justify-center rounded-full bg-purple-soft px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-purple-deep"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-purple-soft/40 px-6 py-3 text-base font-semibold text-purple-deep transition-colors hover:bg-lavender/30"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md ring-1 ring-lavender/30">
            <SafeImage
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              placeholderColor="#9b7eb8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
