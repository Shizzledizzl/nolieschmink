import { siteContent } from "@/data/siteContent";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Pricing() {
  const { pricing } = siteContent;

  return (
    <Section
      id="tarief"
      className="border-t border-lavender/30 bg-white"
      ariaLabelledBy="tarief-title"
    >
      <SectionHeading
        id="tarief-title"
        title={pricing.title}
        subtitle={pricing.subtitle}
      />

      <div className="mx-auto max-w-md rounded-2xl bg-surface-alt/60 px-6 py-6 shadow-sm ring-1 ring-lavender/40 sm:px-8 sm:py-8">
        <ul className="divide-y divide-lavender/30">
          {pricing.tiers.map((tier) => (
            <li
              key={tier.duration}
              className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
            >
              <span className="text-base font-medium text-ink">{tier.duration}</span>
              <span className="font-display text-lg font-semibold text-purple-deep">
                {tier.price}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-5 border-t border-lavender/30 pt-5 text-sm leading-relaxed text-ink-muted">
          {pricing.travel}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{pricing.note}</p>
      </div>
    </Section>
  );
}
