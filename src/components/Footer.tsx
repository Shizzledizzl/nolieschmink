import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { siteContent, isPlaceholder } from "@/data/siteContent";

export function Footer() {
  const { business, contact, social, footer } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-lavender/30 bg-surface-alt">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold text-purple-deep">
              {business.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
              {footer.tagline}
            </p>
            <p className="mt-2 text-sm text-ink-muted">{business.shortDescription}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-purple-deep">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-turquoise-dark" aria-hidden />
                {isPlaceholder(contact.phone) ? (
                  <span>{contact.phone}</span>
                ) : (
                  <a
                    href={`tel:${contact.phoneLink}`}
                    className="transition-colors hover:text-purple-deep"
                  >
                    {contact.phone}
                  </a>
                )}
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-turquoise-dark" aria-hidden />
                {isPlaceholder(contact.email) ? (
                  <span>{contact.email}</span>
                ) : (
                  <a
                    href={`mailto:${contact.email}`}
                    className="transition-colors hover:text-purple-deep"
                  >
                    {contact.email}
                  </a>
                )}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turquoise-dark" aria-hidden />
                <span>{business.serviceArea}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-purple-deep">
              Volg mij
            </h2>
            <div className="mt-4 flex gap-3">
              <SocialLink
                href={social.instagram}
                label="Instagram"
                icon={<Instagram className="h-5 w-5" aria-hidden />}
              />
              <SocialLink
                href={social.facebook}
                label="Facebook"
                icon={<Facebook className="h-5 w-5" aria-hidden />}
              />
            </div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-ink-muted transition-colors hover:text-purple-deep"
                >
                  Privacyverklaring
                </Link>
              </li>
              <li>
                <Link
                  href="/voorwaarden"
                  className="text-ink-muted transition-colors hover:text-purple-deep"
                >
                  Algemene en annuleringsvoorwaarden
                </Link>
              </li>
            </ul>
            {business.kvkNumber && (
              <p className="mt-4 text-xs text-ink-muted">KvK: {business.kvkNumber}</p>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-lavender/30 pt-6 text-center text-sm text-ink-muted">
          <p>
            © {year} {business.name}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const placeholder = isPlaceholder(href);
  if (placeholder) {
    return (
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lavender/40 text-purple-deep"
        title={`${label}: nog in te vullen`}
        aria-label={`${label} (nog in te vullen)`}
      >
        {icon}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lavender/40 text-purple-deep transition-all hover:bg-purple-soft hover:text-white hover:shadow-md"
      aria-label={`${label} (opent in nieuw venster)`}
    >
      {icon}
    </a>
  );
}
