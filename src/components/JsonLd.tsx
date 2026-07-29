import { siteContent } from "@/data/siteContent";

/**
 * JSON-LD structured data voor LocalBusiness / dienstverlener.
 */
export function JsonLd() {
  const { business, contact, seo } = siteContent;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: seo.description,
    url: business.websiteUrl,
    areaServed: business.serviceArea,
    telephone: contact.phone,
    priceRange: "€50",
    image: `${business.websiteUrl}/images/nadine-at-work.jpg`,
  };

  if (contact.email) {
    data.email = contact.email;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
