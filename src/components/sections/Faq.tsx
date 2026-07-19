"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Faq() {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section id="faq" className="bg-surface-alt/60" ariaLabelledBy="faq-title">
      <SectionHeading
        id="faq-title"
        title={faq.title}
        subtitle={faq.subtitle}
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-purple-soft/10"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink transition-colors hover:bg-lavender/10 sm:px-6"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-purple-soft transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={isOpen ? "block" : "hidden"}
              >
                <p className="border-t border-lavender/20 px-5 pb-5 pt-3 text-sm leading-relaxed text-ink-muted sm:px-6 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
