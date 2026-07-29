import { siteContent } from "@/data/siteContent";
import { SafeImage } from "@/components/SafeImage";
import { Section, SectionHeading } from "@/components/ui/Section";

export function About() {
  const { about } = siteContent;

  return (
    <Section id="over-mij" ariaLabelledBy="about-title">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="relative aspect-square overflow-hidden rounded-2xl shadow-md"
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
        </div>

        <div>
          <SectionHeading id="about-title" title={about.title} align="left" />
          <div className="space-y-4 text-base leading-relaxed text-ink-muted">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
