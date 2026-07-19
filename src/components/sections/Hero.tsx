import { Heart, Leaf, MapPin, PartyPopper } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { SafeImage } from "@/components/SafeImage";

const trustIcons = [Heart, Leaf, MapPin, PartyPopper];

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12"
    >
      {/* Decoratieve vormen */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-lavender/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full bg-peach/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-turquoise/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <h1
            id="hero-title"
            className="font-display text-4xl font-semibold leading-tight text-purple-deep sm:text-5xl lg:text-[3.25rem] text-balance"
          >
            {hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full bg-purple-soft px-6 py-3 text-base font-semibold text-white shadow-md shadow-purple-soft/30 transition-all hover:bg-purple-deep hover:shadow-lg"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-purple-soft/50 bg-white/70 px-6 py-3 text-base font-semibold text-purple-deep transition-all hover:border-purple-soft hover:bg-lavender/30"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
            {hero.trustItems.map((item, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-2xl bg-white/80 px-3 py-2.5 shadow-sm shadow-purple-soft/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-turquoise/20 text-turquoise-dark">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-ink">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-purple-soft/20"
            style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden" }}
          >
            <SafeImage
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              placeholderColor="#9b7eb8"
            />
          </div>
          <div
            className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-blush/60 blur-xl"
            aria-hidden
          />
          <div
            className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-turquoise/50 blur-xl"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
