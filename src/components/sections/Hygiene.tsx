import { Shield } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Hygiene() {
  const { hygiene } = siteContent;

  return (
    <Section id="hygiene" ariaLabelledBy="hygiene-title">
      <SectionHeading
        id="hygiene-title"
        title={hygiene.title}
        subtitle={hygiene.subtitle}
      />

      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm shadow-purple-soft/10 sm:p-10">
        <div className="mb-6 flex justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-turquoise/20 text-turquoise-dark">
            <Shield className="h-7 w-7" aria-hidden />
          </span>
        </div>
        <ul className="space-y-4">
          {hygiene.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl bg-surface-alt/80 px-4 py-3 text-sm leading-relaxed text-ink-muted sm:text-base"
            >
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-turquoise-dark"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
        <aside
          className="mt-8 rounded-2xl border border-peach/60 bg-peach/20 px-4 py-4 text-sm leading-relaxed text-ink"
          role="note"
        >
          <p>
            <strong className="font-semibold">Let op: </strong>
            {hygiene.disclaimer}
          </p>
        </aside>
      </div>
    </Section>
  );
}
