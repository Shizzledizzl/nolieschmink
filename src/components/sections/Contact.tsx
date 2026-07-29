import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { siteContent, getWhatsAppUrl } from "@/data/siteContent";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Contact() {
  const { contactSection, contact, business, pricing } = siteContent;
  const hasEmail = contact.email.length > 0;

  return (
    <Section
      id="contact"
      className="border-t border-lavender/30 bg-surface-alt/50"
      ariaLabelledBy="contact-title"
    >
      <SectionHeading
        id="contact-title"
        title={contactSection.title}
        subtitle={contactSection.subtitle}
      />

      <p className="mx-auto -mt-4 mb-8 max-w-xl text-center text-sm text-ink-muted">
        {pricing.hourlyRate} {pricing.unit} · {pricing.note}
      </p>

      <div className="mx-auto grid max-w-lg gap-3 sm:max-w-md">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl bg-[#25D366] p-5 text-white transition-opacity hover:opacity-95"
        >
          <MessageCircle className="h-6 w-6 shrink-0" aria-hidden />
          <span>
            <span className="block font-semibold">WhatsApp</span>
            <span className="block text-sm text-white/90">{contact.phone}</span>
          </span>
        </a>

        <a
          href={`tel:${contact.phoneLink}`}
          className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
        >
          <Phone className="h-6 w-6 shrink-0 text-purple-soft" aria-hidden />
          <span>
            <span className="block font-semibold text-ink">Bellen</span>
            <span className="block text-sm text-ink-muted">{contact.phone}</span>
          </span>
        </a>

        {hasEmail ? (
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <Mail className="h-6 w-6 shrink-0 text-purple-soft" aria-hidden />
            <span>
              <span className="block font-semibold text-ink">E-mail</span>
              <span className="block text-sm text-ink-muted">{contact.email}</span>
            </span>
          </a>
        ) : (
          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
            <Mail className="h-6 w-6 shrink-0 text-ink-muted/50" aria-hidden />
            <span>
              <span className="block font-semibold text-ink">E-mail</span>
              <span className="block text-sm text-ink-muted">{contact.emailLabel}</span>
            </span>
          </div>
        )}

        <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
          <MapPin className="h-6 w-6 shrink-0 text-purple-soft" aria-hidden />
          <span>
            <span className="block font-semibold text-ink">Werkgebied</span>
            <span className="block text-sm text-ink-muted">{business.serviceArea}</span>
          </span>
        </div>
      </div>
    </Section>
  );
}
