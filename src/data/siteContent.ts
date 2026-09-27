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
      glitterTattoos:
        "Glitter tattoos op locatie in Veenendaal en omgeving. Tijdelijke glitter-tattoos voor kinderfeestjes, naast schmink. Veel motieven mogelijk.",
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
    /** Niet tonen op portfolio-pagina of in homepage-selectie. */
    hiddenItemIds: ["arm-gecombineerd"],
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
      "vlinder-meisje",
      "bloemenkroon-meisje",
      "hulk",
      "draak-jongen",
      "ijskoningin-meisje",
    ],
    mobileItemIds: [
      "vlinder-meisje",
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
    /** Niet tonen in schminkmenu (wel in portfolio indien van toepassing). */
    hiddenItemIds: [
      "arm-gecombineerd",
      "arm-rozen-lang",
      "arm-rozen-regenboog",
      "arm-lelies",
      "spin-oefen",
      "paarse-ros",
      "regenboogbloem-oefen",
      "vlinder-turquoise-oefen",
      "fantasiekroon-oefen",
      "hart",
      "paarse-bloem-oefen",
    ],
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
          "eenhoorn-oranje-oefen",
          "hart-neon-oefen",
          "regenboog-hart-oefen",
        ],
      },
      {
        id: "helden",
        label: "Helden & Figuren",
        itemIds: [
          "minnie",
          "hello-kitty",
          "stitch-oefen",
          "sonic-oefen",
          "pikachu",
          "charizard-oefen",
          "spiderman-oefen",
          "captain-america-oefen",
          "superheld",
          "batman-nacht-oefen",
          "hulk-oefen",
        ],
      },
      {
        id: "dieren",
        label: "Dieren",
        itemIds: [
          "octopus",
          "vos",
          "rups-oefen",
          "tijger-oefen",
          "dino-oefen",
          "dino-strepen-oefen",
          "draak",
          "draak-oranje-oefen",
          "dolfijn-oefen",
          "vlinder-oefen",
          "vlinder-roze-oefen",
          "vlinder-regenboog-vol-oefen",
          "flamingo-oefen",
          "schildpad-reserve",
        ],
      },
      {
        id: "bloemen",
        label: "Bloemen en glitters",
        itemIds: [
          "rozen-vine",
          "regenboog-swirl-oefen",
          "bloem-voorhoofd-oefen",
          "bloem-wang-oefen",
        ],
      },
      {
        id: "thema",
        label: "Thema",
        itemIds: [
          "halloween",
          "halloween-split-oefen",
          "halloween-schedel-oefen",
          "voetbal",
          "voetbal-vlam-oefen",
        ],
      },
      {
        id: "armdesigns",
        label: "Arm Designs",
        itemIds: [
          "arm-raket",
          "arm-rozen-roze",
          "arm-rozen-kind",
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
   * GLITTER TATTOOS
   */
  glitterTattoos: {
    title: "Glitter tattoos",
    subtitle: "Ook op locatie, net als schmink",
    paragraphs: [
      "Glitter tattoos zijn tijdelijke tattoos met een vrolijke glitterlaag. Ik kom net als bij schmink naar je toe — thuis, op een kinderfeestje, verjaardag of evenement in Veenendaal en omgeving.",
      "Er zijn veel motieven mogelijk, zoals vlinders, sterren en hartjes. Onderstaat een voorbeeld; andere kleuren en vormen zijn in overleg ook prima.",
    ],
    tip: "Glitter tattoos combineren met schmink kan ook. Neem contact op als je een idee hebt.",
    image: {
      src: "/images/glitter-tattoo-vlinders.png",
      alt: "Drie glitter-tattoos in de vorm van vlinders op een onderarm: roze, groen en paars",
    },
  },

  /**
   * NAVIGATIE
   */
  nav: {
    links: [
      { href: "/over-mij", label: "Over mij" },
      { href: "/schmink-menu", label: "Schmink menu" },
      { href: "/glitter-tattoos", label: "Glitter tattoos" },
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
