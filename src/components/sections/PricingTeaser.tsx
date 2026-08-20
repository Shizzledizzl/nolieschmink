import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Section } from "@/components/ui/Section";

export function PricingTeaser() {
  const { pricing } = siteContent;

  return (
    <Section
      id="tarief"
      className="border-t border-lavender/30 bg-white py-10 sm:py-12"
      ariaLabelledBy="tarief-teaser"
    >
      <div className="mx-auto max-w-lg text-center">
        <h2
          id="tarief-teaser"
          className="font-display text-2xl font-semibold text-purple-deep sm:text-3xl"
        >
          {pricing.title}
        </h2>
        <p className="mt-3 text-lg font-medium text-ink">
          {pricing.homepageTeaser}
        </p>
        <p className="mt-4">
          <Link
            href="/tarief"
            className="text-sm font-semibold text-purple-soft transition-colors hover:text-purple-deep"
          >
            {pricing.homepageLinkLabel} →
          </Link>
        </p>
      </div>
    </Section>
  );
}
