import { siteContent } from "@/data/siteContent";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Pricing() {
  const { pricing } = siteContent;

  return (
    <Section id="tarief" className="border-t border-lavender/30" ariaLabelledBy="tarief-title">
      <SectionHeading
        id="tarief-title"
        title={pricing.title}
        subtitle={pricing.subtitle}
      />

      <div className="mx-auto max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-soft">
          {pricing.label}
        </p>
        <p
          className="mt-3 font-display text-4xl font-semibold text-purple-deep sm:text-5xl"
          aria-label={`${pricing.label}: ${pricing.hourlyRate} ${pricing.unit}`}
        >
          {pricing.hourlyRate}
        </p>
        <p className="mt-1 text-lg font-medium text-ink-muted">{pricing.unit}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">{pricing.note}</p>
      </div>
    </Section>
  );
}
