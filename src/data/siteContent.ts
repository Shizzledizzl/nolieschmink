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
    /** Voornaam voor persoonlijke aanspreking (WhatsApp, e-mail, over-mij) */
    ownerName: "Nolie",
    /** Korte omschrijving voor footer en SEO */
    shortDescription:
      "Professionele en vrolijke schmink voor kinderfeestjes, scholen, verjaardagen en evenementen.",
    /** ← Vul KvK-nummer in, of laat leeg */
    kvkNumber: "[KVK-NUMMER]",
    /** ← Vul werkgebied in, bijv. "Rotterdam en omgeving" */
    serviceArea: "[WERKGEBIED]",
    /** ← Vul website-URL in voor SEO (zonder slash aan het einde) */
    websiteUrl: "https://www.voorbeeld.nl",
  },

  /**
   * CONTACTGEGEVENS
   * Alle telefoon-, e-mail- en WhatsApp-links komen hier vandaan.
   */
  contact: {
    /** ← Vul telefoonnummer in (zichtbaar op de site) */
    phone: "[TELEFOONNUMMER]",
    /** ← Alleen cijfers, voor tel:-link, bijv. "0612345678" */
    phoneLink: "0612345678",
    /** ← Vul e-mailadres in */
    email: "[E-MAILADRES]",
    /** ← WhatsApp-nummer met landcode, alleen cijfers, bijv. "31612345678" */
    whatsappNumber: "[WHATSAPP-NUMMER]",
    /** Vooraf ingevuld WhatsApp-bericht (datum wordt door het formulier aangevuld) */
    whatsappMessage:
      "Hallo Nolie, ik heb interesse in schminken voor een feestje of evenement. Ben je beschikbaar op [datum]?",
  },

  /**
   * SOCIAL MEDIA
   * Vul de volledige URL's in, of laat de placeholders staan.
   */
  social: {
    /** ← Vul Instagram-URL in */
    instagram: "[INSTAGRAM-URL]",
    /** ← Vul Facebook-URL in */
    facebook: "[FACEBOOK-URL]",
  },

  /**
   * SEO / METADATA
   */
  seo: {
    title: "Nolie Schmink | Kinderfeestjes en evenementen",
    description:
      "Professionele en vrolijke schmink voor kinderfeestjes, scholen, verjaardagen en evenementen. Bekijk het werk, de tarieven en de beschikbaarheid van Nolie Schmink.",
    locale: "nl_NL",
    language: "nl",
  },

  /**
   * HERO
   */
  hero: {
    title: "Een kleurrijk gezicht en een grote glimlach",
    subtitle:
      "Professionele en vrolijke schmink voor kinderfeestjes, evenementen, scholen en andere bijzondere momenten.",
    primaryCta: "Bekijk mijn werk",
    secondaryCta: "Vraag beschikbaarheid aan",
    image: {
      src: "/images/nadine-at-work.jpg",
      alt: "Vrolijk meisje met professionele roze en witte bloemenschemink op haar voorhoofd",
    },
    trustItems: [
      "Persoonlijke aandacht",
      "Huidvriendelijke materialen",
      "Op locatie",
      "Voor feestjes en evenementen",
    ],
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
    features: [
      {
        title: "Creatief en geduldig",
        description:
          "Ieder ontwerp krijgt de aandacht die het verdient, ook als er even nagedacht moet worden.",
      },
      {
        title: "Persoonlijke aandacht",
        description:
          "Kinderen en volwassenen voelen zich gehoord. Samen kiezen we iets dat écht bij hen past.",
      },
      {
        title: "Met zorg en hygiëne",
        description:
          "Materialen worden zorgvuldig gereinigd en er wordt gewerkt met schmink die bedoeld is voor de huid.",
      },
    ],
  },

  /**
   * DIENSTEN
   */
  services: {
    title: "Voor welke gelegenheden?",
    subtitle:
      "Van een knus kinderfeestje tot een groot buurtfeest: ik schmink graag op locatie. Maatwerk is altijd mogelijk – vertel gerust wat jij in gedachten hebt.",
    items: [
      {
        id: "kinderfeestjes",
        title: "Kinderfeestjes",
        description:
          "Maak van een verjaardag of speelmiddag een kleurrijk feestje. Kinderen kiezen zelf hun favoriete ontwerp.",
        icon: "partyPopper" as const,
      },
      {
        id: "verjaardagen",
        title: "Verjaardagen",
        description:
          "Jarig en zin in iets bijzonders? Schmink past perfect bij een feestelijke middag of avond.",
        icon: "cake" as const,
      },
      {
        id: "scholen",
        title: "Scholen en kinderopvang",
        description:
          "Voor schoolfeesten, themaweken of open dagen. Snelle, vrolijke ontwerpen voor grotere groepen.",
        icon: "school" as const,
      },
      {
        id: "buurtfeesten",
        title: "Buurtfeesten en braderieën",
        description:
          "Een gezellige stand waar voorbijgangers even kunnen aanschuiven voor een vrolijk gezicht.",
        icon: "store" as const,
      },
      {
        id: "bedrijven",
        title: "Bedrijfsevenementen",
        description:
          "Familiedagen, openingen of personeelsfeesten: schmink zorgt voor een speelse, ontspannen sfeer.",
        icon: "briefcase" as const,
      },
      {
        id: "themafeesten",
        title: "Themafeesten en festivals",
        description:
          "Halloween, carnaval, sprookjes of superhelden – ik denk graag mee over passende ontwerpen.",
        icon: "sparkles" as const,
      },
    ],
    customNote:
      "Staat jouw gelegenheid er niet tussen? Geen probleem. Stuur een berichtje met jouw situatie en we kijken samen wat mogelijk is.",
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
        id: "bloemen-kroon",
        title: "Bloemenkroon",
        category: "bloemen",
        src: "/images/schmink-bloemen-kroon.jpg",
        alt: "Meisje met roze bloemenkroon-schmink op het voorhoofd en glittersteentje tussen de wenkbrauwen",
      },
      {
        id: "minnie",
        title: "Minnie Mouse",
        category: "thema",
        src: "/images/schmink-minnie.jpg",
        alt: "Meisje met Minnie Mouse-schmink: rode strik met stippen, oortjes en roze wangen",
      },
      {
        id: "fantasie",
        title: "Fantasiekroon",
        category: "fantasie",
        src: "/images/schmink-fantasie.jpg",
        alt: "Meisje met kleurrijke fantasiekroon-schmink in groen, oranje en roze met steentjes",
      },
      {
        id: "at-work",
        title: "Bloemenschemink",
        category: "bloemen",
        src: "/images/nadine-at-work.jpg",
        alt: "Vrolijk meisje met professionele roze en witte bloemenschemink op haar voorhoofd",
      },
      {
        id: "portrait",
        title: "Sfeerimpressie",
        category: "thema",
        src: "/images/nadine-portrait.jpg",
        alt: "Sfeerimpressie van schminkwerk door Nolie Schmink",
      },
    ],
  },

  /**
   * TARIEVEN
   * ← Vul de bedragen, aantallen en tijdsduur in.
   */
  pricing: {
    title: "Tarieven",
    subtitle:
      "Hieronder vind je een indicatie van de pakketten. De definitieve prijs hangt af van locatie, duur en aantal personen.",
    packages: [
      {
        id: "klein",
        name: "Klein feestje",
        /** ← Pas startbedrag aan indien nodig */
        price: "Vanaf € 85",
        featured: false,
        badge: null as string | null,
        features: [
          "Geschikt voor een klein kinderfeestje",
          "Tot 8 kinderen",
          "Maximaal 1,5 uur",
          "Keuze uit verschillende ontwerpen",
        ],
      },
      {
        id: "maatwerk",
        name: "Feest op maat",
        /** ← Pas startbedrag aan indien nodig */
        price: "Vanaf € 165",
        featured: true,
        badge: "Meest gekozen",
        features: [
          "Voor grotere verjaardagen en particuliere feesten",
          "Duur en aantal kinderen in overleg",
          "Thema's vooraf bespreekbaar",
          "Persoonlijke afstemming van wensen",
        ],
      },
      {
        id: "evenement",
        name: "Evenement",
        price: "Vanaf € 90 per uur",
        featured: false,
        badge: null as string | null,
        features: [
          "Voor scholen, bedrijven, braderieën en evenementen",
          "Uurtarief of dagdeelprijs in overleg",
          "Snelle ontwerpen voor grotere groepen",
          "Flexibel in te plannen",
        ],
      },
    ],
    extras: {
      /** ← Pas reiskosten aan indien nodig */
      travelCosts: "€ 0,35 per km (vanaf 20 km)",
      /** ← Pas minimale boekingsduur aan indien nodig */
      minimumDuration: "1,5 uur",
      notes: [
        "Eventuele parkeerkosten worden doorberekend.",
        "Een definitieve prijs is afhankelijk van locatie, duur en aantal personen.",
      ],
    },
    cta: "Vraag een vrijblijvende prijsopgave aan",
  },

  /**
   * WERKWIJZE / BOEKINGSPROCES
   */
  process: {
    title: "Zo werkt boeken",
    subtitle:
      "In vijf duidelijke stappen van aanvraag naar een kleurrijk feest.",
    steps: [
      {
        number: 1,
        title: "Aanvraag versturen",
        description:
          "Vul het contactformulier in of stuur een WhatsApp-berichtje met de datum, locatie en wat je ongeveer in gedachten hebt.",
        icon: "send" as const,
      },
      {
        number: 2,
        title: "Beschikbaarheid controleren",
        description:
          "Ik kijk of de gewenste datum en tijd nog vrij zijn en laat zo snel mogelijk iets van me horen.",
        icon: "calendarCheck" as const,
      },
      {
        number: 3,
        title: "Wensen bespreken",
        description:
          "Samen stemmen we thema, aantal kinderen, duur en eventuele bijzondere wensen af.",
        icon: "messageCircle" as const,
      },
      {
        number: 4,
        title: "Boeking bevestigen",
        description:
          "Na akkoord ontvang je een bevestiging met de afspraken. Dan staat alles helder op papier.",
        icon: "clipboardCheck" as const,
      },
      {
        number: 5,
        title: "Schminken op locatie",
        description:
          "Ik kom naar jou toe, zet mijn spullen klaar en zorg voor vrolijke gezichten en grote glimlachen.",
        icon: "palette" as const,
      },
    ],
    onLocation: {
      title: "Wat heb ik op locatie nodig?",
      items: [
        "Een goed verlichte plek",
        "Beschutting tegen regen, wind en felle zon",
        "Toegang tot schoon water",
        "Voldoende werkruimte",
        "Indien afgesproken: een tafel en twee stoelen",
      ],
    },
  },

  /**
   * HYGIËNE EN VEILIGHEID
   */
  hygiene: {
    title: "Hygiëne en veiligheid",
    subtitle:
      "Een veilig en prettig gevoel is minstens zo belangrijk als een mooi resultaat.",
    items: [
      "Materialen en penselen worden zorgvuldig gereinigd.",
      "Er wordt gewerkt met schmink die bedoeld is voor gebruik op de huid.",
      "Er wordt niet geschminkt over wondjes, huidinfecties of sterk geïrriteerde huid.",
      "Meld bekende allergieën of overgevoeligheden vooraf.",
      "Bij twijfel kan worden afgezien van schminken.",
      "Schmink kan meestal met lauw water en milde zeep worden verwijderd.",
    ],
    disclaimer:
      "Een allergische reactie is nooit volledig uit te sluiten. Ouders en verzorgers blijven verantwoordelijk voor het doorgeven van bekende allergieën en huidproblemen.",
  },

  /**
   * VEELGESTELDE VRAGEN
   * ← Pas antwoorden aan waar nodig.
   */
  faq: {
    title: "Veelgestelde vragen",
    subtitle: "Snel antwoord op de vragen die het vaakst gesteld worden.",
    items: [
      {
        question: "Vanaf welke leeftijd kunnen kinderen worden geschminkt?",
        answer:
          "In de praktijk schmink ik vanaf ongeveer 3 jaar, afhankelijk van of het kind rustig kan blijven zitten. Bij twijfel overleggen we vooraf.",
      },
      {
        question: "Hoeveel kinderen kunnen per uur worden geschminkt?",
        answer:
          "Dat hangt af van het type ontwerp. Bij eenvoudige, snelle ontwerpen zijn er vaak meer kinderen per uur mogelijk dan bij uitgebreide designs. We stemmen dit vooraf af op jouw feest.",
      },
      {
        question: "Kunnen kinderen zelf een ontwerp kiezen?",
        answer:
          "Ja, dat mag zeker! Ik neem voorbeelden mee en denk mee wat past bij leeftijd, thema en beschikbare tijd.",
      },
      {
        question: "Wat moet er op locatie aanwezig zijn?",
        answer:
          "Een goed verlichte, beschutte plek, toegang tot schoon water en voldoende werkruimte. Indien afgesproken: een tafel en twee stoelen.",
      },
      {
        question: "Werk je ook buiten?",
        answer:
          "Ja, buiten schminken is mogelijk, mits er beschutting is tegen regen, wind en felle zon. Bij slecht weer zoeken we samen naar een passende oplossing.",
      },
      {
        question: "In welke regio ben je beschikbaar?",
        answer:
          "Ik werk in [WERKGEBIED]. Voor locaties daarbuiten is overleg mogelijk; er kunnen reiskosten in rekening worden gebracht.",
      },
      {
        question: "Hoe verwijder je de schmink?",
        answer:
          "Meestal met lauw water en milde zeep. Vermijd agressieve middelen. Bij hardnekkige glitter of details kan een beetje oliehoudende cleanser helpen.",
      },
      {
        question: "Wat gebeurt er bij een gevoelige huid of allergie?",
        answer:
          "Geef bekende allergieën of huidproblemen altijd vooraf door. Over wondjes of geïrriteerde huid schmink ik niet. Bij twijfel zien we af van schminken – veiligheid gaat voor.",
      },
      {
        question: "Hoe ver van tevoren moet ik boeken?",
        answer:
          "Hoe eerder, hoe beter – vooral in het weekend en in drukke periodes. Soms is korte termijn nog mogelijk; stuur gerust een aanvraag.",
      },
      {
        question: "Wat gebeurt er als ik mijn boeking annuleer?",
        answer:
          "Annuleringsvoorwaarden staan beschreven op de pagina Algemene en annuleringsvoorwaarden. Neem bij wijzigingen zo snel mogelijk contact op, dan kijken we samen wat er mogelijk is.",
      },
    ],
  },

  /**
   * CONTACTSECTIE
   */
  contactSection: {
    title: "Maak van jouw feest iets kleurrijks",
    subtitle:
      "Vul het formulier in of neem direct contact op. Ik reageer zo snel mogelijk op jouw aanvraag.",
    successMessage:
      "Bedankt voor je aanvraag! Je e-mailprogramma opent zo met een voorbereid bericht. Verstuur het bericht om je aanvraag door te geven.",
    occasionOptions: [
      "Kinderfeestje",
      "Verjaardag",
      "School of kinderopvang",
      "Buurtfeest of braderie",
      "Bedrijfsevenement",
      "Themafeest of festival",
      "Anders",
    ],
    locationTypeOptions: ["Binnen", "Buiten", "Nog niet zeker"],
  },

  /**
   * NAVIGATIE
   */
  nav: {
    links: [
      { href: "#over-mij", label: "Over mij" },
      { href: "#diensten", label: "Diensten" },
      { href: "#portfolio", label: "Portfolio" },
      { href: "#tarieven", label: "Tarieven" },
      { href: "#werkwijze", label: "Werkwijze" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Beschikbaarheid aanvragen",
  },

  /**
   * FOOTER
   */
  footer: {
    tagline:
      "Vrolijke gezichten, warme aandacht en een feestje om naar uit te kijken.",
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
export type ServiceIconName =
  (typeof siteContent.services.items)[number]["icon"];
export type ProcessIconName =
  (typeof siteContent.process.steps)[number]["icon"];

/**
 * Bouwt een WhatsApp-URL met optionele datum in het bericht.
 */
export function getWhatsAppUrl(date?: string): string {
  const number = siteContent.contact.whatsappNumber.replace(/\D/g, "");
  let message: string = siteContent.contact.whatsappMessage;
  if (date) {
    message = message.replace("[datum]", date);
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Controleert of een waarde nog een placeholder is.
 */
export function isPlaceholder(value: string): boolean {
  return value.includes("[") && value.includes("]");
}
