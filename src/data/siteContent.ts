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

import portfolioItems from "./portfolio-items.json";
import type { PortfolioItem, PortfolioItemKind } from "@/lib/portfolio-types";

export type { PortfolioItem, PortfolioItemKind };

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
      "Schminkster in Veenendaal en omgeving. Vrolijke schmink op locatie voor kinderfeestjes, verjaardagen en evenementen.",
    /** Geen KvK – leeg laten */
    kvkNumber: "",
    serviceArea: "Veenendaal en omgeving",
    /** Live website-URL voor SEO, sitemap en linkpreviews (zonder slash aan het einde) */
    websiteUrl: "https://www.nolieschmink.nl",
  },

  /**
   * CONTACTGEGEVENS
   * Alle telefoon-, e-mail- en WhatsApp-links komen hier vandaan.
   */
  contact: {
    phone: "+31 6 26637089",
    phoneLink: "+31626637089",
    email: "nolieschmink@gmail.com",
    whatsappNumber: "31626637089",
  },

  /**
   * SEO / METADATA
   */
  seo: {
    title: "Nolie Schmink | Schminkster in Veenendaal en omgeving",
    description:
      "Schminkster in Veenendaal en omgeving. Vrolijke schmink op locatie voor kinderfeestjes, verjaardagen en evenementen. Hobbytarief €50 per uur. Bekijk het portfolio en neem contact op.",
    locale: "nl_NL",
    language: "nl",
    ogImage: "/images/nadine-over-mij.jpg",
    ogImageAlt:
      "Nadine schminkt een kind met huidvriendelijke schmink, schminkspullen op tafel",
    pages: {
      overMij:
        "Leer Nadine kennen: schminkster uit Veenendaal. Huidvriendelijke schmink op locatie voor kinderfeestjes, verjaardagen en evenementen.",
      portfolio:
        "Schminkfoto's en armdesigns: dieren, prinsessen, helden, bloemen en glitter. Inspiratie voor je kinderfeestje in Veenendaal en omgeving.",
      schminkMenu:
        "Kies je favoriete schmink: dino, prinses, superhero en meer. Ideeën voor kinderfeestjes bij Nolie Schmink in Veenendaal.",
      tarief:
        "Tarieven voor schmink op locatie in Veenendaal en omgeving: €50 per uur, pakketten en reiskosten. Hobbytarief voor kinderfeestjes.",
    },
  },

  /**
   * HERO
   */
  hero: {
    title: "Schminkster in Veenendaal en omgeving",
    subtitle:
      "Vrolijke schmink op locatie voor kinderfeestjes, verjaardagen en evenementen. Ik kom naar jou toe met huidvriendelijke schmink en een flinke dosis creativiteit.",
    primaryCta: "Bekijk mijn werk",
    secondaryCta: "Neem contact op",
    eyebrow: "Nolie Schmink",
    image: {
      src: "/images/hero-konijnenoren.png",
      alt: "Meisje met roze konijnenoren-schmink en bloemetjes op de wangen",
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
      src: "/images/nadine-over-mij.jpg",
      alt: "Nadine schminkt een kind met huidvriendelijke schmink, schminkspullen op tafel",
    },
  },

  /**
   * PORTFOLIO
   * ← Vervang de placeholderafbeeldingen in /public/images door echte foto's.
   *    Houd dezelfde bestandsnamen aan, of pas de 'src' hier aan.
   */
  portfolio: {
    pageTitle: "Portfolio",
    pageSubtitle:
      "Foto's van echte schmink en armdesigns. Heb je een eigen idee? Laat het gerust weten.",
    consentNote:
      "Ik maak alleen foto's van kinderen met toestemming van de ouders.",
    portfolioCategories: [
      { id: "all", label: "Alles" },
      { id: "armdesigns", label: "Armdesigns" },
      { id: "dieren", label: "Dieren" },
      { id: "prinsessen", label: "Prinsessen en helden" },
      { id: "bloemen", label: "Bloemen en glitter" },
      { id: "diversen", label: "Diversen" },
    ],
    menuCategories: [
      { id: "dieren", label: "Dieren" },
      { id: "prinsessen", label: "Prinsessen fantasie" },
      { id: "bloemen", label: "Bloemen en glitters" },
      { id: "thema", label: "Thema" },
      { id: "helden", label: "Helden en figuren" },
    ],
    items: portfolioItems as PortfolioItem[],
  },

  /**
   * MIJN WERK (homepage – selectie)
   */
  featuredWork: {
    title: "Mijn werk",
    subtitle:
      "Een kleine selectie van mijn schmink. Voor alle foto's: ga naar Portfolio in het menu.",
    itemIds: [
      "arm-gecombineerd",
      "bloemenkroon-meisje",
      "hulk",
      "draak-jongen",
      "ijskoningin-meisje",
    ],
    mobileItemIds: [
      "arm-gecombineerd",
      "bloemenkroon-meisje",
      "ijskoningin-meisje",
      "hulk",
      "draak-jongen",
    ],
    viewAllLabel: "Bekijk het volledige portfolio",
    viewAllHref: "/portfolio",
  },

  /**
   * SCHMINK MENU
   */
  schminkMenu: {
    title: "Schmink menu",
    intro:
      "Dit zijn alle beschikbare designs. Variaties met kleuren zijn ook mogelijk! Een kind mag ook altijd zelf input geven.",
    tip: "Heb je een eigen idee? Dat mag ook — alles is bespreekbaar.",
    categories: [
      {
        id: "prinsessen",
        label: "Prinsessen & Fantasie",
        itemIds: [
          "fee",
          "blauwe-prinses",
          "prinses",
          "eenhoorn-oefen",
          "eenhoorn-regenboog-oefen",
          "fantasiekroon-oefen",
          "hart",
          "hart-neon-oefen",
          "regenboog-hart-oefen",
          "paarse-bloem-oefen",
        ],
      },
      {
        id: "helden",
        label: "Helden & Figuren",
        itemIds: [
          "minnie",
          "hello-kitty",
          "sonic-oefen",
          "pikachu",
          "charizard-oefen",
          "spiderman-oefen",
          "captain-america-oefen",
          "superheld",
          "hulk-oefen",
        ],
      },
      {
        id: "dieren",
        label: "Dieren",
        itemIds: [
          "octopus",
          "vos",
          "tijger-oefen",
          "dino-oefen",
          "draak",
          "vlinder-oefen",
          "vlinder-roze-oefen",
          "vlinder-turquoise-oefen",
          "flamingo-oefen",
          "schildpad-reserve",
        ],
      },
      {
        id: "bloemen",
        label: "Bloemen en glitters",
        itemIds: [
          "rozen-vine",
          "paarse-ros",
          "regenboog-swirl-oefen",
          "regenboogbloem-oefen",
        ],
      },
      {
        id: "thema",
        label: "Thema",
        itemIds: ["halloween", "spin-oefen", "voetbal"],
      },
      {
        id: "armdesigns",
        label: "Arm Designs",
        itemIds: [
          "arm-raket",
          "arm-gecombineerd",
          "arm-rozen-lang",
          "arm-lelies",
          "arm-rozen-roze",
          "arm-rozen-kind",
          "arm-rozen-regenboog",
          "hand-dino",
          "minecraft-arm",
          "haai-arm",
        ],
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
    tiers: [
      { duration: "1 uur", price: "€ 50" },
      { duration: "1,5 uur", price: "€ 75" },
      { duration: "2 uur", price: "€ 90" },
      { duration: "3+ uur", price: "€ 45 per uur" },
    ],
    travel: "€ 0,20 reiskosten per km boven de 20 km",
    note: "Op locatie. Neem contact op voor beschikbaarheid en een prijsopgave op maat.",
    summary: "Vanaf € 50 per uur",
    homepageTeaser: "€ 50 per uur en € 90 voor 2 uur",
    homepageLinkLabel: "Bekijk alle tarieven",
  },

  /**
   * NAVIGATIE
   */
  nav: {
    links: [
      { href: "/over-mij", label: "Over mij" },
      { href: "/schmink-menu", label: "Schmink menu" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/tarief", label: "Tarief" },
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
    tagline:
      "Schminkster in Veenendaal en omgeving — vrolijke schmink op locatie",
  },
} as const;

export type SiteContent = typeof siteContent;

export type {
  GalleryItem,
  MenuThemeId,
  PortfolioCategoryId,
} from "@/lib/portfolio-utils";

export {
  getItemKind,
  getMenuItems,
  getPortfolioItems,
  resolveFeaturedItems,
} from "@/lib/portfolio-utils";

/**
 * Bouwt een WhatsApp-URL zonder vooraf ingevuld bericht.
 */
export function getWhatsAppUrl(): string {
  const number = siteContent.contact.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}`;
}

/**
 * Controleert of een waarde nog een placeholder is.
 */
export function isPlaceholder(value: string): boolean {
  return value.includes("[") && value.includes("]");
}
