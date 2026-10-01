import { siteContent } from "@/data/siteContent";

/**
 * JSON-LD structured data voor lokale vindbaarheid (Google).
 */
export function JsonLd() {
  const { business, contact, seo } = siteContent;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: business.name,
    description: seo.description,
    url: business.websiteUrl,
    image: `${business.websiteUrl}${seo.ogImage}`,
    telephone: contact.phone,
    email: contact.email,
    priceRange: "€50",
    serviceType: "Schminken op locatie",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Veenendaal",
      addressRegion: "Utrecht",
      addressCountry: "NL",
    },
    areaServed: business.serviceCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    knowsAbout: [
      "Schminken op locatie",
      "Kinderfeestjes",
      "Face painting",
      "Schmink Veenendaal",
      "Schmink Ede",
      "Schmink Barneveld",
      "Schmink Tiel",
      "Schmink Wageningen",
      "Nolie Schmink",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
