import {
  PartyPopper,
  Cake,
  School,
  Store,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteContent, type ServiceIconName } from "@/data/siteContent";
import { Section, SectionHeading } from "@/components/ui/Section";

const iconMap: Record<ServiceIconName, typeof PartyPopper> = {
  partyPopper: PartyPopper,
  cake: Cake,
  school: School,
  store: Store,
  briefcase: Briefcase,
  sparkles: Sparkles,
};

export function Services() {
  const { services } = siteContent;

  return (
    <Section id="diensten" ariaLabelledBy="services-title">
      <SectionHeading
        id="services-title"
        title={services.title}
        subtitle={services.subtitle}
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <li
              key={item.id}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm shadow-purple-soft/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-soft/15"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender/50 to-turquoise/30 text-purple-deep transition-transform group-hover:scale-105">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-soft transition-colors hover:text-purple-deep"
              >
                Vraag aan
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </li>
          );
        })}
      </ul>

      <p className="mx-auto mt-10 max-w-2xl text-center text-base text-ink-muted">
        {services.customNote}
      </p>
    </Section>
  );
}
