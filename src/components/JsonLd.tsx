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
    email: contact.email,
    priceRange: "€50",
    image: `${business.websiteUrl}${seo.ogImage}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
