import {
  Send,
  CalendarCheck,
  MessageCircle,
  ClipboardCheck,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { siteContent, type ProcessIconName } from "@/data/siteContent";
import { Section, SectionHeading } from "@/components/ui/Section";

const iconMap: Record<ProcessIconName, typeof Send> = {
  send: Send,
  calendarCheck: CalendarCheck,
  messageCircle: MessageCircle,
  clipboardCheck: ClipboardCheck,
  palette: Palette,
};

export function Process() {
  const { process } = siteContent;

  return (
    <Section id="werkwijze" className="bg-surface-alt/60" ariaLabelledBy="process-title">
      <SectionHeading
        id="process-title"
        title={process.title}
        subtitle={process.subtitle}
      />

      <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {process.steps.map((step) => {
          const Icon = iconMap[step.icon];
          return (
            <li
              key={step.number}
              className="relative flex flex-col rounded-3xl bg-white p-5 shadow-sm shadow-purple-soft/10 transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-soft font-display text-lg font-bold text-white">
                {step.number}
              </span>
              <span className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-turquoise/20 text-turquoise-dark">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="mt-12 rounded-3xl border border-turquoise/30 bg-white p-6 sm:p-8">
        <h3 className="font-display text-xl font-semibold text-purple-deep">
          {process.onLocation.title}
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {process.onLocation.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-turquoise-dark"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
