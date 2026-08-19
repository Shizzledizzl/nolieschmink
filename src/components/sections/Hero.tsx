import { siteContent } from "@/data/siteContent";
import { SafeImage } from "@/components/SafeImage";

export function Hero() {
  const { hero, pricing } = siteContent;

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

          <div
            className="mt-8 max-w-sm rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-lavender/40"
            aria-label={`${pricing.label}: ${pricing.hourlyRate} ${pricing.unit}`}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-soft">
              {pricing.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              {pricing.subtitle}
            </p>
            <p className="mt-3 text-sm font-semibold text-purple-soft">
              {pricing.label}
            </p>
            <p className="font-display text-3xl font-semibold text-purple-deep">
              {pricing.hourlyRate}
              <span className="ml-1 text-base font-medium text-ink-muted">
                {pricing.unit}
              </span>
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md lg:justify-self-end">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm ring-1 ring-lavender/30">
            <SafeImage
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover object-[center_20%]"
              placeholderColor="#9b7eb8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
