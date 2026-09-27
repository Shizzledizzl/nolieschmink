import { siteContent } from "@/data/siteContent";
import { SafeImage } from "@/components/SafeImage";
import { Section, SectionHeading } from "@/components/ui/Section";

export function GlitterTattoos() {
  const { glitterTattoos } = siteContent;

  return (
    <Section id="glitter-tattoos" ariaLabelledBy="glitter-tattoos-title">
      <SectionHeading
        id="glitter-tattoos-title"
        title={glitterTattoos.title}
        subtitle={glitterTattoos.subtitle}
      />

      <div className="mx-auto max-w-2xl space-y-4 text-center text-base leading-relaxed text-ink-muted">
        {glitterTattoos.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <figure className="mx-auto mt-10 max-w-md overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-lavender/30">
        <div
          className="relative aspect-[3/4] w-full"
          style={{ position: "relative", aspectRatio: "3 / 4" }}
        >
          <SafeImage
            src={glitterTattoos.image.src}
            alt={glitterTattoos.image.alt}
            fill
            sizes="(max-width: 768px) 90vw, 448px"
            className="object-cover"
            placeholderColor="#c9b8e0"
          />
        </div>
      </figure>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium text-purple-deep">
        {glitterTattoos.tip}
      </p>
    </Section>
  );
}
