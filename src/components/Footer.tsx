import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export function Footer() {
  const { business, contact, pricing, footer } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-lavender/30 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-purple-deep">
            {business.name}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{footer.tagline}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {pricing.label}: {pricing.hourlyRate} {pricing.unit}
          </p>
        </div>

        <div className="space-y-1 text-sm text-ink-muted">
          <p>
            <a href={`tel:${contact.phoneLink}`} className="hover:text-purple-deep">
              {contact.phone}
            </a>
            <span className="text-ink-muted/70"> · bellen &amp; WhatsApp</span>
          </p>
          <p>
            <a href={`mailto:${contact.email}`} className="hover:text-purple-deep">
              {contact.email}
            </a>
          </p>
          <p>{business.serviceArea}</p>
          <div className="flex gap-4 pt-2">
            <Link href="/privacy" className="hover:text-purple-deep">
              Privacy
            </Link>
            <Link href="/voorwaarden" className="hover:text-purple-deep">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-lavender/20 py-4 text-center text-xs text-ink-muted">
        © {year} {business.name}
      </div>
    </footer>
  );
}
