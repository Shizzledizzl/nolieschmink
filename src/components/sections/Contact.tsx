"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";
import {
  siteContent,
  getWhatsAppUrl,
  isPlaceholder,
} from "@/data/siteContent";
import { Section, SectionHeading } from "@/components/ui/Section";

type FormErrors = Partial<Record<string, string>>;

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  occasion: string;
  estimatedCount: string;
  ageGroup: string;
  locationType: string;
  message: string;
  privacy: boolean;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  startTime: "",
  endTime: "",
  location: "",
  occasion: "",
  estimatedCount: "",
  ageGroup: "",
  locationType: "",
  message: "",
  privacy: false,
};

/**
 * Contactformulier zonder backend.
 * Bij succesvolle validatie wordt een mailto-link geopend.
 * Later kan hier eenvoudig een API of formulierdienst (bijv. Formspree) worden aangesloten
 * door sendViaMailto te vervangen door een fetch naar een endpoint.
 */
async function submitContactForm(data: FormData): Promise<"mailto" | "api"> {
  // Klaar voor toekomstige API-aansluiting:
  // const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
  // if (res.ok) return "api";

  const { contact, business } = siteContent;
  const subject = encodeURIComponent(
    `Aanvraag schminken – ${data.name} – ${data.date || "datum n.t.b."}`
  );
  const body = encodeURIComponent(
    [
      `Hallo ${business.ownerName},`,
      ``,
      `Ik wil graag schminken aanvragen via de website van ${business.name}.`,
      ``,
      `Naam: ${data.name}`,
      `E-mail: ${data.email}`,
      `Telefoon: ${data.phone}`,
      `Gewenste datum: ${data.date || "—"}`,
      `Begintijd: ${data.startTime || "—"}`,
      `Eindtijd: ${data.endTime || "—"}`,
      `Plaats/locatie: ${data.location}`,
      `Soort gelegenheid: ${data.occasion}`,
      `Geschat aantal: ${data.estimatedCount || "—"}`,
      `Leeftijdsgroep: ${data.ageGroup || "—"}`,
      `Locatietype: ${data.locationType || "—"}`,
      ``,
      `Bericht / bijzondere wensen:`,
      data.message || "—",
      ``,
      `Akkoord privacyverklaring: ja`,
    ].join("\n")
  );

  const email = isPlaceholder(contact.email)
    ? "voorbeeld@email.nl"
    : contact.email;

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  return "mailto";
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Vul je naam in.";
  }
  if (!data.email.trim()) {
    errors.email = "Vul je e-mailadres in.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Vul een geldig e-mailadres in.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Vul je telefoonnummer in.";
  }
  if (!data.location.trim()) {
    errors.location = "Vul de plaats of locatie in.";
  }
  if (!data.occasion) {
    errors.occasion = "Kies een soort gelegenheid.";
  }
  if (!data.message.trim()) {
    errors.message = "Vertel kort iets over je wensen.";
  }
  if (!data.privacy) {
    errors.privacy = "Je moet akkoord gaan met de privacyverklaring.";
  }

  return errors;
}

export function Contact() {
  const { contactSection, contact, business, social } = siteContent;
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await submitContactForm(form);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappHref = getWhatsAppUrl(form.date || undefined);

  return (
    <Section id="contact" ariaLabelledBy="contact-title">
      <SectionHeading
        id="contact-title"
        title={contactSection.title}
        subtitle={contactSection.subtitle}
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {submitted ? (
            <div
              className="rounded-3xl bg-turquoise/15 p-8 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="font-display text-xl font-semibold text-turquoise-dark">
                Aanvraag voorbereid
              </p>
              <p className="mt-3 text-ink-muted">{contactSection.successMessage}</p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                }}
                className="mt-6 rounded-full bg-purple-soft px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-deep"
              >
                Nieuwe aanvraag
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white p-6 shadow-sm shadow-purple-soft/10 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Naam"
                  required
                  error={errors.name}
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass(errors.name)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                </Field>

                <Field
                  id="email"
                  label="E-mailadres"
                  required
                  error={errors.email}
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass(errors.email)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </Field>

                <Field
                  id="phone"
                  label="Telefoonnummer"
                  required
                  error={errors.phone}
                >
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass(errors.phone)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                </Field>

                <Field id="date" label="Gewenste datum" error={errors.date}>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={inputClass(errors.date)}
                  />
                </Field>

                <Field id="startTime" label="Gewenste begintijd">
                  <input
                    id="startTime"
                    name="startTime"
                    type="time"
                    value={form.startTime}
                    onChange={(e) => update("startTime", e.target.value)}
                    className={inputClass()}
                  />
                </Field>

                <Field id="endTime" label="Gewenste eindtijd">
                  <input
                    id="endTime"
                    name="endTime"
                    type="time"
                    value={form.endTime}
                    onChange={(e) => update("endTime", e.target.value)}
                    className={inputClass()}
                  />
                </Field>

                <Field
                  id="location"
                  label="Plaats of locatie"
                  required
                  error={errors.location}
                >
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    className={inputClass(errors.location)}
                    aria-invalid={!!errors.location}
                    aria-describedby={
                      errors.location ? "location-error" : undefined
                    }
                  />
                </Field>

                <Field
                  id="occasion"
                  label="Soort gelegenheid"
                  required
                  error={errors.occasion}
                >
                  <select
                    id="occasion"
                    name="occasion"
                    value={form.occasion}
                    onChange={(e) => update("occasion", e.target.value)}
                    className={inputClass(errors.occasion)}
                    aria-invalid={!!errors.occasion}
                    aria-describedby={
                      errors.occasion ? "occasion-error" : undefined
                    }
                  >
                    <option value="">Kies een optie</option>
                    {contactSection.occasionOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id="estimatedCount"
                  label="Geschat aantal kinderen of personen"
                >
                  <input
                    id="estimatedCount"
                    name="estimatedCount"
                    type="text"
                    inputMode="numeric"
                    value={form.estimatedCount}
                    onChange={(e) => update("estimatedCount", e.target.value)}
                    className={inputClass()}
                  />
                </Field>

                <Field id="ageGroup" label="Leeftijdsgroep">
                  <input
                    id="ageGroup"
                    name="ageGroup"
                    type="text"
                    placeholder="Bijv. 4–8 jaar"
                    value={form.ageGroup}
                    onChange={(e) => update("ageGroup", e.target.value)}
                    className={inputClass()}
                  />
                </Field>

                <Field
                  id="locationType"
                  label="Binnen- of buitenlocatie"
                  className="sm:col-span-2"
                >
                  <select
                    id="locationType"
                    name="locationType"
                    value={form.locationType}
                    onChange={(e) => update("locationType", e.target.value)}
                    className={inputClass()}
                  >
                    <option value="">Kies een optie</option>
                    {contactSection.locationTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id="message"
                  label="Bericht en bijzondere wensen"
                  required
                  error={errors.message}
                  className="sm:col-span-2"
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={inputClass(errors.message)}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                </Field>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-sm text-ink-muted">
                    <input
                      type="checkbox"
                      checked={form.privacy}
                      onChange={(e) => update("privacy", e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-lavender text-purple-soft focus:ring-purple-soft"
                      aria-invalid={!!errors.privacy}
                      aria-describedby={
                        errors.privacy ? "privacy-error" : undefined
                      }
                    />
                    <span>
                      Ik ga akkoord met de{" "}
                      <Link
                        href="/privacy"
                        className="font-semibold text-purple-soft underline-offset-2 hover:underline"
                      >
                        privacyverklaring
                      </Link>
                      . <span className="text-rose">*</span>
                    </span>
                  </label>
                  {errors.privacy && (
                    <p id="privacy-error" className="mt-1 text-sm text-rose" role="alert">
                      {errors.privacy}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full rounded-full bg-purple-soft px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-purple-soft/30 transition-all hover:bg-purple-deep hover:shadow-lg disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Bezig…" : "Verstuur aanvraag"}
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-4 lg:col-span-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-3xl bg-[#25D366] p-5 text-white shadow-md shadow-[#25D366]/30 transition-transform hover:scale-[1.02]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-6 w-6" aria-hidden />
            </span>
            <span>
              <span className="block font-semibold">WhatsApp</span>
              <span className="block text-sm text-white/90">
                Stuur direct een bericht
              </span>
            </span>
          </a>

          <ContactCard
            icon={<Mail className="h-5 w-5" aria-hidden />}
            title="E-mail"
            value={contact.email}
            href={
              isPlaceholder(contact.email)
                ? undefined
                : `mailto:${contact.email}`
            }
          />
          <ContactCard
            icon={<Phone className="h-5 w-5" aria-hidden />}
            title="Telefoon"
            value={contact.phone}
            href={
              isPlaceholder(contact.phone)
                ? undefined
                : `tel:${contact.phoneLink}`
            }
          />
          <ContactCard
            icon={<MapPin className="h-5 w-5" aria-hidden />}
            title="Werkgebied"
            value={business.serviceArea}
          />
          <ContactCard
            icon={<Instagram className="h-5 w-5" aria-hidden />}
            title="Instagram"
            value={
              isPlaceholder(social.instagram)
                ? social.instagram
                : "Bekijk mijn Instagram"
            }
            href={
              isPlaceholder(social.instagram) ? undefined : social.instagram
            }
            external
          />
        </aside>
      </div>
    </Section>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-xl border bg-cream/50 px-4 py-2.5 text-ink transition-colors placeholder:text-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-purple-soft/50 ${
    error
      ? "border-rose focus:border-rose"
      : "border-lavender/50 focus:border-purple-soft"
  }`;
}

function Field({
  id,
  label,
  required,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="text-rose" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-rose" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lavender/40 text-purple-deep">
        {icon}
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="block text-sm text-ink-muted">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm shadow-purple-soft/10 transition-shadow hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm shadow-purple-soft/10">
      {content}
    </div>
  );
}
