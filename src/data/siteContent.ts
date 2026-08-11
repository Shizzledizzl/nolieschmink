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
      "Schminkster in Veenendaal en omgeving. Vrolijke schmink op locatie voor kinderfeestjes, verjaardagen en evenementen.",
    /** Geen KvK – leeg laten */
    kvkNumber: "",
    serviceArea: "Veenendaal en omgeving",
    /** Live website-URL voor SEO, sitemap en linkpreviews (zonder slash aan het einde) */
    websiteUrl: "https://nolieschmink.vercel.app",
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
      src: "/images/hero-schmink.jpg",
      alt: "Vrolijk meisje met ijskoningin-schmink, blauwe glitter en tiara",
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
    items: [
      {
        id: "arm-gecombineerd",
        title: "Armdesigns",
        category: "armdesigns",
        src: "/images/schmink-arm-gecombineerd.jpg",
        alt: "Twee armdesigns naast elkaar: eenhoorn met regenboog en rozenrank in het roze",
      },
      {
        id: "arm-ijskoningin",
        title: "Ijskoningin",
        category: "armdesigns",
        src: "/images/schmink-arm-ijskoningin.jpg",
        alt: "Blauw-wit ijskoningin-armdesign met bloem, swirls en sneeuwvlokjes",
      },
      {
        id: "bloemenkroon-meisje",
        title: "Bloemenkroon",
        category: "bloemen",
        src: "/images/schmink-bloemenkroon-meisje.jpg",
        alt: "Meisje met roze bloemenkroon-schmink op het voorhoofd met glittersteentjes",
      },
      {
        id: "hulk",
        title: "Hulk",
        category: "prinsessen",
        src: "/images/schmink-hulk.jpg",
        alt: "Jongen met groene Hulk-schmink op het voorhoofd met spierarmen",
      },
      {
        id: "ijskoningin-meisje",
        title: "Ijskoningin",
        category: "prinsessen",
        src: "/images/schmink-ijskoningin-meisje.jpg",
        alt: "Meisje met ijskoningin-schmink, blauwe glitter en tiara",
      },
      {
        id: "draak-jongen",
        title: "Draak",
        category: "prinsessen",
        src: "/images/schmink-draak-jongen.jpg",
        alt: "Jongen met oranje draak-schmink op het voorhoofd met vlammen",
      },
      {
        id: "octopus",
        title: "Octopus",
        category: "dieren",
        src: "/images/schmink-octopus-oefen.jpg",
        alt: "Blauwe octopus-schmink met tentakels, bubbels en glitters op oefengezicht",
      },
      {
        id: "vos",
        title: "Vos",
        category: "dieren",
        src: "/images/schmink-vos.jpg",
        alt: "Oranje vos-schmink met oortjes op het voorhoofd en neusje",
      },
      {
        id: "draak",
        title: "Draak",
        category: "dieren",
        src: "/images/schmink-draak-oefen.jpg",
        alt: "Groene vuurspuwende draak-schmink met vleugels en schubben op oefengezicht",
      },
      {
        id: "fee",
        title: "Konijn",
        category: "prinsessen",
        src: "/images/schmink-fee.jpg",
        alt: "Roze en wit konijn-schmink met oortjes en sterretjes op oefengezicht",
      },
      {
        id: "blauwe-prinses",
        title: "Blauwe prinses",
        category: "prinsessen",
        src: "/images/schmink-ijskoningin-oefen.jpg",
        alt: "Blauw-wit ijskoningin-schmink op oefengezicht met kroon en swirls",
      },
      {
        id: "superheld",
        title: "Batman",
        category: "helden",
        src: "/images/schmink-batman-oefen.jpg",
        alt: "Batman-schmink op oefengezicht: zwart vleermuisembleem met oranje gloed en sterretjes",
      },
      {
        id: "rozen-vine",
        title: "Rozenrank",
        category: "bloemen",
        src: "/images/schmink-rozen-vine.jpg",
        alt: "Roze rozenrank-schmink met bloemen en groene bladeren langs de wang",
      },
      {
        id: "hart",
        title: "Hart rood",
        category: "prinsessen",
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
        category: "helden",
        src: "/images/schmink-minnie-oefen.jpg",
        alt: "Minnie Mouse-schmink op oefengezicht: rode strik met stippen, oortjes en snorharen",
      },
      {
        id: "halloween",
        title: "Halloween paars",
        category: "thema",
        src: "/images/schmink-halloween.jpg",
        alt: "Paars spinnenweb-schmink met spin op oefengezicht",
      },
      {
        id: "pikachu",
        title: "Pikachu",
        category: "helden",
        src: "/images/schmink-pikachu.jpg",
        alt: "Pikachu-schmink op oefengezicht met Pokéball en bliksemflits",
      },
      {
        id: "voetbal",
        title: "Voetbal",
        category: "thema",
        src: "/images/schmink-voetbal.jpg",
        alt: "Voetbal-schmink op oefengezicht met vlammen",
      },
      {
        id: "spiderman-oefen",
        title: "Spider-Man",
        category: "helden",
        src: "/images/schmink-spiderman-oefen.jpg",
        alt: "Spider-Man-schmink op oefengezicht met webpatroon",
      },
      {
        id: "tijger-oefen",
        title: "Tijger",
        category: "dieren",
        src: "/images/schmink-tijger-oefen.jpg",
        alt: "Oranje tijger-schmink op oefengezicht met strepen",
      },
      {
        id: "spin-oefen",
        title: "Spinnenweb",
        category: "thema",
        src: "/images/schmink-spin-oefen.jpg",
        alt: "Zwarte spin met wit spinnenweb op oefengezicht",
      },
      {
        id: "vlinder-oefen",
        title: "Vlinder",
        category: "dieren",
        src: "/images/schmink-vlinder-oefen.jpg",
        alt: "Roze-oranje vlinder-schmink met swirls en zwarte accenten op oefengezicht",
      },
      {
        id: "arm-rozen-lang",
        title: "Rozenrank",
        category: "armdesigns",
        src: "/images/schmink-arm-rozen-lang.jpg",
        alt: "Vijf roze rozen op de onderarm met groene bladeren",
      },
      {
        id: "draak-jongen-groen",
        title: "Draak",
        category: "prinsessen",
        src: "/images/schmink-draak-jongen-2.jpg",
        alt: "Jongen met groene draak-schmink op het voorhoofd met vuur",
      },
      {
        id: "dino-oefen",
        title: "Dino",
        category: "dieren",
        src: "/images/schmink-dino-oefen.jpg",
        alt: "Oranje triceratops-schmink op oefengezicht",
      },
      {
        id: "arm-lelies",
        title: "Lelies",
        category: "armdesigns",
        src: "/images/schmink-arm-lelies.jpg",
        alt: "Roze en wit lelie-armdesign met swirls",
      },
      {
        id: "arm-ijskoningin-glitter",
        title: "Ijskoningin",
        category: "armdesigns",
        src: "/images/schmink-arm-ijskoningin-glitter.jpg",
        alt: "Blauw-wit ijskoningin-armdesign met rozen en glitter",
      },
      {
        id: "arm-raket",
        title: "Raket",
        category: "armdesigns",
        src: "/images/schmink-arm-raket.jpg",
        alt: "Kleurrijke raket-armdesign met vlammen en sterren",
      },
      {
        id: "vos-meisje",
        title: "Vos",
        category: "dieren",
        src: "/images/schmink-vos-meisje.jpg",
        alt: "Meisje met oranje vos-schmink, oortjes en zwarte neus",
      },
      {
        id: "hulk-oefen",
        title: "Hulk",
        category: "helden",
        src: "/images/schmink-hulk-oefen.jpg",
        alt: "Groene Hulk-schmink op oefengezicht met spierarmen",
      },
      {
        id: "hand-dino",
        title: "Dino",
        category: "armdesigns",
        src: "/images/schmink-hand-dino.jpg",
        alt: "Groen-gele dinohand-schmink met schubben en klauwen",
      },
      {
        id: "fantasiekroon-meisje",
        title: "Fantasiekroon",
        category: "bloemen",
        src: "/images/schmink-fantasiekroon-meisje.jpg",
        alt: "Meisje met roze fantasiekroon-schmink op het voorhoofd",
      },
      {
        id: "arm-rozen-roze",
        title: "Rozenrank",
        category: "armdesigns",
        src: "/images/schmink-arm-rozen-roze.jpg",
        alt: "Roze rozen-armdesign met witte accenten en glitter",
      },
      {
        id: "arm-rozen-kind",
        title: "Rozenrank",
        category: "armdesigns",
        src: "/images/schmink-arm-rozen-kind.jpg",
        alt: "Roze rozen-armdesign op het arm van een kind",
      },
      {
        id: "regenboogbloem-oefen",
        title: "Regenboog bloem",
        category: "bloemen",
        src: "/images/schmink-regenboogbloem-oefen.jpg",
        alt: "Regenboogbloem-schmink op oefengezicht met roze bloem en swirls",
      },
      {
        id: "eenhoorn-oefen",
        title: "Eenhoorn",
        category: "prinsessen",
        src: "/images/schmink-eenhoorn-oefen.jpg",
        alt: "Roze eenhoorn-schmink op oefengezicht met hoorn en vleugels",
      },
      {
        id: "regenboogbloem-oefen-3",
        title: "Regenboogbloem",
        category: "bloemen",
        src: "/images/schmink-regenboogbloem-oefen-3.jpg",
        alt: "Regenboogbloem-schmink op oefengezicht met roze bloemen",
      },
      {
        id: "fantasiekroon-oefen",
        title: "Fantasiekroon",
        category: "prinsessen",
        src: "/images/schmink-fantasiekroon-oefen.jpg",
        alt: "Roze fantasiekroon-schmink op oefengezicht met swirls",
      },
      {
        id: "arm-rozen-regenboog",
        title: "Rozen en regenboog",
        category: "armdesigns",
        src: "/images/schmink-arm-rozen-regenboog.jpg",
        alt: "Twee armen met roze rozen en regenboog-armdesigns",
      },
      {
        id: "sonic-oefen",
        title: "Sonic",
        category: "helden",
        src: "/images/schmink-sonic-oefen.jpg",
        alt: "Blauwe Sonic the Hedgehog-schmink op oefengezicht",
      },
      {
        id: "hart-neon-oefen",
        title: "Hart neon",
        category: "prinsessen",
        src: "/images/schmink-hart-neon-oefen.jpg",
        alt: "Neon roze-oranje hart-schmink met swirls en steentjes op oefengezicht",
      },
      {
        id: "regenboog-swirl-oefen",
        title: "Regenboog swirl",
        category: "bloemen",
        src: "/images/schmink-regenboog-swirl-oefen.jpg",
        alt: "Witte bloem met oranje, geel en turkoois swirls op oefengezicht",
      },
      {
        id: "paarse-bloem-oefen",
        title: "Paarse bloem",
        category: "prinsessen",
        src: "/images/schmink-paarse-bloem-oefen.jpg",
        alt: "Paarse bloemkroon-schmink met roze accenten en glitter op oefengezicht",
      },
      {
        id: "flamingo-reserve",
        title: "Flamingo",
        category: "dieren",
        src: "",
        alt: "Flamingo-schmink — binnenkort beschikbaar",
        comingSoon: true,
      },
      {
        id: "schildpad-reserve",
        title: "Schildpad",
        category: "dieren",
        src: "",
        alt: "Schildpad-schmink — binnenkort beschikbaar",
        comingSoon: true,
      },
      {
        id: "hello-kitty-reserve",
        title: "Hello Kitty",
        category: "helden",
        src: "",
        alt: "Hello Kitty-schmink — binnenkort beschikbaar",
        comingSoon: true,
      },
    ],
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
      "ijskoningin-meisje",
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
    subtitle: "Niet zeker wat je wilt? Kies je favoriet en laat het weten!",
    intro:
      "Kies een design dat je leuk vindt. Dit zijn voorbeelden op een oefengezicht — zo zie je hoe het eruit kan zien!",
    tip: "Heb je een eigen idee? Dat mag ook — alles is bespreekbaar.",
    categories: [
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
          "flamingo-reserve",
          "schildpad-reserve",
        ],
      },
      {
        id: "prinsessen",
        label: "Prinsessen fantasie",
        itemIds: [
          "fee",
          "blauwe-prinses",
          "eenhoorn-oefen",
          "fantasiekroon-oefen",
          "hart",
          "hart-neon-oefen",
          "paarse-bloem-oefen",
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
        id: "helden",
        label: "Helden en figuren",
        itemIds: [
          "minnie",
          "sonic-oefen",
          "pikachu",
          "spiderman-oefen",
          "superheld",
          "hulk-oefen",
          "hello-kitty-reserve",
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
      { href: "/schmink-menu", label: "Schmink menu" },
      { href: "/portfolio", label: "Portfolio" },
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
export type PortfolioItemKind = "oefengezicht" | "arm" | "gezicht";
export type MenuThemeId =
  | "dieren"
  | "prinsessen"
  | "bloemen"
  | "thema"
  | "helden";
export type PortfolioCategoryId =
  | "all"
  | "armdesigns"
  | "dieren"
  | "prinsessen"
  | "bloemen"
  | "diversen";

/** Waar een foto hoort: oefengezicht → schmink menu, arm/gezicht → portfolio */
const itemKinds: Record<string, PortfolioItemKind> = {
  "arm-gecombineerd": "arm",
  "arm-ijskoningin": "arm",
  "arm-rozen-lang": "arm",
  "arm-lelies": "arm",
  "arm-ijskoningin-glitter": "arm",
  "arm-raket": "arm",
  "hand-dino": "arm",
  "arm-rozen-roze": "arm",
  "arm-rozen-kind": "arm",
  "arm-rozen-regenboog": "arm",
  "bloemenkroon-meisje": "gezicht",
  hulk: "gezicht",
  "ijskoningin-meisje": "gezicht",
  "draak-jongen": "gezicht",
  "draak-jongen-groen": "gezicht",
  "vos-meisje": "gezicht",
  "fantasiekroon-meisje": "gezicht",
};

export function getItemKind(id: string): PortfolioItemKind {
  return itemKinds[id] ?? "oefengezicht";
}

export type PortfolioItem = (typeof siteContent.portfolio.items)[number];

export type GalleryItem = Omit<PortfolioItem, "category"> & {
  category: PortfolioCategoryId | MenuThemeId;
  comingSoon?: boolean;
};

export function getMenuItems(): GalleryItem[] {
  const pool = new Map(
    siteContent.portfolio.items
      .filter((item) => getItemKind(item.id) === "oefengezicht")
      .map((item) => [item.id, item as GalleryItem])
  );

  return siteContent.schminkMenu.categories.flatMap((cat) =>
    cat.itemIds
      .map((id) => pool.get(id))
      .filter((item): item is GalleryItem => item !== undefined)
      .map((item) => ({ ...item, category: cat.id as MenuThemeId }))
  );
}

export function getPortfolioItems(): GalleryItem[] {
  return siteContent.portfolio.items
    .filter((item) => getItemKind(item.id) !== "oefengezicht")
    .map((item) => ({
      ...item,
      category:
        getItemKind(item.id) === "arm"
          ? "armdesigns"
          : (item.category as MenuThemeId),
    })) as GalleryItem[];
}

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
