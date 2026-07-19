import { siteContent, isPlaceholder } from "@/data/siteContent";

/**
 * JSON-LD structured data voor LocalBusiness / dienstverlener.
 * Onbekende of placeholder-gegevens worden weggelaten.
 */
export function JsonLd() {
  const { business, contact, social, seo } = siteContent;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: seo.description,
    url: business.websiteUrl,
    areaServed: isPlaceholder(business.serviceArea)
      ? undefined
      : business.serviceArea,
    telephone: isPlaceholder(contact.phone) ? undefined : contact.phone,
    email: isPlaceholder(contact.email) ? undefined : contact.email,
    priceRange: "€€",
    image: `${business.websiteUrl}/images/nadine-at-work.jpg`,
  };

  const sameAs = [social.instagram, social.facebook].filter(
    (url) => url && !isPlaceholder(url)
  );
  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }

  // Verwijder undefined-velden
  Object.keys(data).forEach((key) => {
    if (data[key] === undefined) delete data[key];
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
