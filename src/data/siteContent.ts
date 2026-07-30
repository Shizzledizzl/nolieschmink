/**
 * ============================================================
 * CENTRAAL CONTENTBESTAND – Nolie Schmink
 * ============================================================
 *
 * Pas hier alle teksten, tarieven, contactgegevens en
 * bedrijfsinformatie aan. Je hoeft geen andere bestanden
 * te openen voor de belangrijkste inhoud.
 *
 * Placeholders zoals [BEDRIJFSNAAM] of [TELEFOONNUMMER]
 * moeten nog door Nolie zelf worden ingevuld.
 * ============================================================
 */

export const siteContent = {
  /**
   * BEDRIJFSGEGEVENS
   * Vul de echte bedrijfsnaam in wanneer die bekend is.
   * Deze naam verschijnt overal op de website (logo, footer, SEO).
   */
  business: {
    /** ← Vul hier de definitieve bedrijfsnaam in */
    name: "Nolie Schmink",
    /** Voornaam voor persoonlijke aanspreking (WhatsApp, over-mij) */
    ownerName: "Nolie",
    /** Korte omschrijving voor footer en SEO */
    shortDescription:
      "Professionele en vrolijke schmink voor kinderfeestjes, scholen, verjaardagen en evenementen.",
    /** Geen KvK – leeg laten */
    kvkNumber: "",
    serviceArea: "Veenendaal en omstreken",
    /** ← Vul website-URL in voor SEO (zonder slash aan het einde) */
    websiteUrl: "https://www.voorbeeld.nl",
  },

  /**
   * CONTACTGEGEVENS
   * Alle telefoon-, e-mail- en WhatsApp-links komen hier vandaan.
   */
  contact: {
    phone: "+31 6 53356421",
    phoneLink: "+31653356421",
    email: "nolieschmink@gmail.com",
    whatsappNumber: "31653356421",
    whatsappMessage:
      "Hallo Nolie, ik heb interesse in schminken voor een feestje of evenement. Ben je beschikbaar?",
  },

  /**
   * SEO / METADATA
   */
  seo: {
    title: "Nolie Schmink | Schminken op locatie in Veenendaal",
    description:
      "Vrolijke schmink voor kinderfeestjes en evenementen. Bekijk het werk van Nadine en neem contact op.",
    locale: "nl_NL",
    language: "nl",
  },

  /**
   * HERO
   */
  hero: {
    title: "Vrolijke schmink op locatie",
    subtitle:
      "Voor kinderfeestjes, verjaardagen en andere bijzondere momenten. Ik kom naar jou toe met huidvriendelijke schmink en een flinke dosis creativiteit.",
    primaryCta: "Bekijk mijn werk",
    secondaryCta: "Neem contact op",
    eyebrow: "Nolie Schmink",
    image: {
      src: "/images/nadine-at-work.jpg",
      alt: "Vrolijk meisje met professionele roze en witte bloemenschemink op haar voorhoofd",
    },
  },

  /**
   * OVER MIJ
   * ← Pas de introductietekst hieronder aan met Nadine's eigen verhaal.
   */
  about: {
    title: "Hallo, ik ben Nadine",
    /** ← Vervang of breid deze tekst uit met Nadine's persoonlijke verhaal */
    paragraphs: [
      "Het begon eigenlijk een beetje voor de grap. Mijn dochter zat naar een superoverprikkelende tv-show te kijken, vol meiden die geschminkt werden. Ik dacht: ik koop wel een schminksetje, dan is het feest compleet. Spoiler: dat viel tegen – ze zat wekenlang te zeuren om schmink.",
      "Uiteindelijk haalde ik een goedkoop setje uit de speelgoedwinkel. Daarna wat betere schmink. En voor ik het wist schminkte ik de kinderen uit de buurt. Zo begon het.",
      "Wat begon als een grappig idee, groeide uit tot iets waar ik echt plezier in heb: kinderen én volwassenen om toveren tot hun favoriete dier, fantasiefiguur of held. Met rust, geduld en een flinke dosis creativiteit. Of je nu een knus kinderfeestje plant of een groter evenement organiseert: ik kom graag naar jou toe.",
    ],
    image: {
      src: "/images/nadine-portrait.jpg",
      alt: "Portretfoto van Nadine, schminkster, lachend tegen een zachte paars-roze achtergrond",
    },
  },

  /**
   * PORTFOLIO
   * ← Vervang de placeholderafbeeldingen in /public/images door echte foto's.
   *    Houd dezelfde bestandsnamen aan, of pas de 'src' hier aan.
   */
  portfolio: {
    title: "Mijn werk",
    subtitle:
      "Dit is een selectie van mijn werk. Een eigen idee of speciaal thema? Laat het gerust weten.",
    consentNote:
      "Ik maak alleen foto's van kinderen met toestemming van de ouders.",
    categories: [
      { id: "all", label: "Alles" },
      { id: "dieren", label: "Dieren" },
      { id: "fantasie", label: "Fantasie" },
      { id: "helden", label: "Helden" },
      { id: "bloemen", label: "Bloemen en glitter" },
      { id: "thema", label: "Themaontwerpen" },
    ],
    items: [
      {
        id: "flamingo",
        title: "Flamingo",
        category: "dieren",
        src: "/images/schmink-vlinder.jpg",
        alt: "Meisje met roze flamingo-schmink op het voorhoofd en glittersteentjes op de neusbrug",
      },
      {
        id: "flamingo-design",
        title: "Flamingo",
        category: "dieren",
        src: "/images/schmink-flamingo-design.jpg",
        alt: "Roze flamingo-schminkontwerp met vleugels en veren op het voorhoofd",
      },
      {
        id: "vlinder",
        title: "Vlinder",
        category: "dieren",
        src: "/images/schmink-vlinder-design.jpg",
        alt: "Kleurrijke vlinders in roze, oranje en geel met witte accenten",
      },
      {
        id: "octopus",
        title: "Octopus",
        category: "dieren",
        src: "/images/schmink-octopus.jpg",
        alt: "Blauwe octopus-schmink met tentakels en witte bubbelaccenten",
      },
      {
        id: "vos",
        title: "Vos",
        category: "dieren",
        src: "/images/schmink-vos.jpg",
        alt: "Oranje vos-schmink met oortjes op het voorhoofd en neusje",
      },
      {
        id: "flamingo-2",
        title: "Flamingo",
        category: "dieren",
        src: "/images/schmink-flamingo-2.jpg",
        alt: "Roze flamingo-schmink met vleugels en veren op het voorhoofd",
      },
      {
        id: "flamingo-3",
        title: "Flamingo",
        category: "dieren",
        src: "/images/schmink-flamingo-3.jpg",
        alt: "Roze flamingo-schminkontwerp met symmetrische vleugels",
      },
      {
        id: "prinses-kroon",
        title: "Prinsessenkroon",
        category: "fantasie",
        src: "/images/schmink-prinses-kroon.jpg",
        alt: "Paarse prinsessenkroon met witte bloemblaadjes en goudgele accenten",
      },
      {
        id: "ijskoningin",
        title: "Ijskoningin",
        category: "fantasie",
        src: "/images/schmink-ijskoningin.jpg",
        alt: "Blauw-lila ijskoningin-ontwerp met kroon, swirls en steentjes",
      },
      {
        id: "draak",
        title: "Draak",
        category: "fantasie",
        src: "/images/schmink-draak.jpg",
        alt: "Groene drakenschemink met vleugels, schubben en vuur op het voorhoofd",
      },
      {
        id: "fantasiekroon",
        title: "Fantasiekroon",
        category: "fantasie",
        src: "/images/schmink-fantasie.jpg",
        alt: "Meisje met kleurrijke fantasiekroon-schmink in groen, oranje en roze met steentjes",
      },
      {
        id: "fee",
        title: "Fee",
        category: "fantasie",
        src: "/images/schmink-fee.jpg",
        alt: "Roze en wit fee-ontwerp met bloemblaadjes en sterretjes",
      },
      {
        id: "blauwe-prinses",
        title: "Blauwe prinses",
        category: "fantasie",
        src: "/images/schmink-blauwe-prinses.jpg",
        alt: "Blauw-wit prinsessenontwerp met kroon en swirls",
      },
      {
        id: "superheld",
        title: "Batman",
        category: "helden",
        src: "/images/schmink-superheld.jpg",
        alt: "Jongen met Batman-schmink: zwart vleermuisembleem met oranje zonsondergang op het voorhoofd",
      },
      {
        id: "regenboog-bloem",
        title: "Regenboogbloem",
        category: "bloemen",
        src: "/images/schmink-regenboog-bloem.jpg",
        alt: "Regenboogbloem-schmink met roze bloem, witte swirls en kleurrijke bogen",
      },
      {
        id: "rozen-vine",
        title: "Rozenrank",
        category: "bloemen",
        src: "/images/schmink-rozen-vine.jpg",
        alt: "Roze rozenrank-schmink met bloemen en groene bladeren langs de wang",
      },
      {
        id: "bloem-swirls",
        title: "Bloemensierlijk",
        category: "bloemen",
        src: "/images/schmink-bloem-swirls.jpg",
        alt: "Sierlijke bloemenschemink in roze en wit met swirls en glitter",
      },
      {
        id: "bloemenkroon",
        title: "Bloemenkroon",
        category: "bloemen",
        src: "/images/schmink-bloemen-kroon.jpg",
        alt: "Meisje met roze bloemenkroon-schmink op het voorhoofd en glittersteentje tussen de wenkbrauwen",
      },
      {
        id: "hart",
        title: "Hart",
        category: "bloemen",
        src: "/images/schmink-hart.jpg",
        alt: "Rood-wit hartenschemink op het voorhoofd met swirls en sterretjes",
      },
      {
        id: "paarse-ros",
        title: "Paarse roos",
        category: "bloemen",
        src: "/images/schmink-paarse-ros.jpg",
        alt: "Paarse rozen-schmink op de wang met witte swirls en sterretjes",
      },
      {
        id: "minnie",
        title: "Minnie Mouse",
        category: "thema",
        src: "/images/schmink-minnie.jpg",
        alt: "Meisje met Minnie Mouse-schmink: rode strik met stippen, oortjes en roze wangen",
      },
      {
        id: "halloween",
        title: "Halloween",
        category: "thema",
        src: "/images/schmink-halloween.jpg",
        alt: "Paars spinnenweb-schmink met spin op het voorhoofd",
      },
      {
        id: "pikachu",
        title: "Pikachu",
        category: "thema",
        src: "/images/schmink-pikachu.jpg",
        alt: "Pikachu-schmink op het voorhoofd met Pokéball en bliksemflits",
      },
      {
        id: "voetbal",
        title: "Voetbal",
        category: "thema",
        src: "/images/schmink-voetbal.jpg",
        alt: "Voetbal-schmink op de wang met vlammen",
      },
      {
        id: "bloemenschemink",
        title: "Bloemenschemink",
        category: "bloemen",
        src: "/images/nadine-at-work.jpg",
        alt: "Vrolijk meisje met professionele roze en witte bloemenschemink op het voorhoofd",
      },
    ],
  },

  /**
   * TARIEF
   * ← Pas het uurtarief hier aan.
   */
  pricing: {
    title: "Tarief",
    subtitle:
      "Ik doe dit met veel plezier — daarom reken ik een hobbytarief. Zo blijft schminken betaalbaar voor kinderfeestjes en andere leuke momenten.",
    label: "Hobbytarief",
    hourlyRate: "€ 50",
    unit: "per uur",
    note: "Op locatie. Neem contact op voor beschikbaarheid en een prijsopgave op maat.",
  },

  /**
   * NAVIGATIE
   */
  nav: {
    links: [
      { href: "/over-mij", label: "Over mij" },
      { href: "#portfolio", label: "Portfolio" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Neem contact op",
  },

  /**
   * CONTACTSECTIE
   */
  contactSection: {
    title: "Interesse?",
    subtitle: "Neem contact op via WhatsApp, bel me of stuur een e-mail.",
  },

  /**
   * FOOTER
   */
  footer: {
    tagline: "Vrolijke schmink op locatie",
  },
} as const;

export type SiteContent = typeof siteContent;
export type PortfolioCategoryId =
  | "all"
  | "dieren"
  | "fantasie"
  | "helden"
  | "bloemen"
  | "thema";

/**
 * Bouwt een WhatsApp-URL met optionele datum in het bericht.
 */
export function getWhatsAppUrl(): string {
  const number = siteContent.contact.whatsappNumber.replace(/\D/g, "");
  const message = siteContent.contact.whatsappMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Controleert of een waarde nog een placeholder is.
 */
export function isPlaceholder(value: string): boolean {
  return value.includes("[") && value.includes("]");
}
