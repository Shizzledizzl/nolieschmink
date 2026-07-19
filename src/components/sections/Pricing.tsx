import { Check, Star } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Pricing() {
  const { pricing } = siteContent;

  return (
    <Section id="tarieven" ariaLabelledBy="pricing-title">
      <SectionHeading
        id="pricing-title"
        title={pricing.title}
        subtitle={pricing.subtitle}
      />

      <ul className="grid gap-6 lg:grid-cols-3">
        {pricing.packages.map((pkg) => (
          <li
            key={pkg.id}
            className={`relative flex flex-col rounded-3xl p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
              pkg.featured
                ? "bg-gradient-to-b from-purple-soft to-purple-deep text-white shadow-lg shadow-purple-soft/30 ring-2 ring-purple-soft/50"
                : "bg-white shadow-purple-soft/10"
            }`}
          >
            {pkg.badge && (
              <span
                className={`absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-md ${
                  pkg.featured
                    ? "bg-peach text-ink"
                    : "bg-turquoise text-white"
                }`}
              >
                <Star className="h-3 w-3" aria-hidden fill="currentColor" />
                {pkg.badge}
              </span>
            )}
            <h3
              className={`font-display text-2xl font-semibold ${
                pkg.featured ? "text-white" : "text-purple-deep"
              }`}
            >
              {pkg.name}
            </h3>
            <p
              className={`mt-3 text-2xl font-bold ${
                pkg.featured ? "text-peach" : "text-rose"
              }`}
            >
              {pkg.price}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      pkg.featured ? "text-turquoise" : "text-turquoise-dark"
                    }`}
                    aria-hidden
                  />
                  <span className={pkg.featured ? "text-white/90" : "text-ink-muted"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-surface-alt p-6 text-center sm:p-8">
        <ul className="space-y-2 text-sm text-ink-muted">
          <li>
            <strong className="text-ink">Reiskosten:</strong>{" "}
            {pricing.extras.travelCosts}
          </li>
          <li>
            <strong className="text-ink">Minimale boekingsduur:</strong>{" "}
            {pricing.extras.minimumDuration}
          </li>
          {pricing.extras.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-purple-soft px-6 py-3 text-base font-semibold text-white shadow-md shadow-purple-soft/30 transition-all hover:bg-purple-deep hover:shadow-lg"
        >
          {pricing.cta}
        </a>
      </div>
    </Section>
  );
}
