import { Lightbulb, HeartHandshake, ShieldCheck } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { SafeImage } from "@/components/SafeImage";
import { Section, SectionHeading } from "@/components/ui/Section";

const featureIcons = [Lightbulb, HeartHandshake, ShieldCheck];

export function About() {
  const { about } = siteContent;

  return (
    <Section id="over-mij" className="bg-surface-alt/60" ariaLabelledBy="about-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lg shadow-rose/15"
            style={{ position: "relative", aspectRatio: "1 / 1", overflow: "hidden" }}
          >
            <SafeImage
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              placeholderColor="#f2b8c6"
            />
          </div>
          <div
            className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-peach/40"
            aria-hidden
          />
        </div>

        <div>
          <SectionHeading
            id="about-title"
            title={about.title}
            align="left"
          />
          <div className="space-y-4 text-base leading-relaxed text-ink-muted">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {about.features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <li
                  key={feature.title}
                  className="rounded-2xl bg-white p-4 shadow-sm shadow-purple-soft/10 transition-shadow hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender/40 text-purple-deep">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                    {feature.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
