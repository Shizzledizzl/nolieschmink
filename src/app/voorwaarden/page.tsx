import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Algemene en annuleringsvoorwaarden",
  description: `Algemene en annuleringsvoorwaarden van ${siteContent.business.name}. Concepttekst – ter controle en aanpassing.`,
  alternates: { canonical: "/voorwaarden" },
};

const sections = [
  {
    title: "Boekingen",
    body: "Een boeking komt tot stand na een aanvraag via het contactformulier, e-mail, telefoon of WhatsApp, gevolgd door een bevestiging van beide kanten. Een aanvraag alleen is nog geen definitieve boeking.",
  },
  {
    title: "Bevestiging",
    body: "Na overleg over datum, tijd, locatie, duur en tarief ontvang je een bevestiging (bijvoorbeeld per e-mail of WhatsApp). Daarin staan de afspraken zo duidelijk mogelijk vermeld. Bewaar deze bevestiging goed.",
  },
  {
    title: "Betaling",
    body: "De betalingsafspraken worden per boeking bevestigd. Denk aan een aanbetaling, betaling op locatie of factuur achteraf. Exacte bedragen en termijnen staan in de bevestiging. [Pas dit aan met jouw eigen betalingsbeleid.]",
  },
  {
    title: "Reiskosten",
    body: `Reiskosten kunnen in rekening worden gebracht afhankelijk van de locatie. Indicatie: ${siteContent.pricing.extras.travelCosts}. Parkeerkosten worden doorberekend indien van toepassing.`,
  },
  {
    title: "Annulering door de klant",
    body: "Annuleer zo snel mogelijk bij verhindering. Bij annulering langer van tevoren mag je rekenen op soepel overleg over verplaatsen of annuleren. Bij late annulering kan een (deel van het) overeengekomen bedrag in rekening worden gebracht. [Vul hier jouw concrete annuleringsregeling in, bijvoorbeeld: gratis tot 14 dagen van tevoren, 50% binnen 7 dagen, etc.]",
  },
  {
    title: "Annulering door de schminkster",
    body: "Bij ziekte, overmacht of andere onvoorziene omstandigheden kan de boeking worden geannuleerd of verplaatst. Er wordt zo snel mogelijk contact opgenomen om samen een oplossing te zoeken, zoals een nieuwe datum of terugbetaling van reeds betaalde bedragen.",
  },
  {
    title: "Slecht weer",
    body: "Bij buitenlocaties is beschutting tegen regen, wind en felle zon nodig. Is die er niet en maakt het weer veilig of prettig schminken onmogelijk, dan wordt in overleg een binnenalternatief, andere tijd of verplaatsing gezocht. Zie ook de werkwijze-sectie op de website.",
  },
  {
    title: "Veiligheid en hygiëne",
    body: "Er wordt zorgvuldig omgegaan met materialen en hygiëne. Over wondjes, huidinfecties of sterk geïrriteerde huid wordt niet geschminkt. Bekende allergieën of overgevoeligheden moeten vooraf worden doorgegeven. Bij twijfel kan van schminken worden afgezien.",
  },
  {
    title: "Aansprakelijkheid",
    body: "Er wordt zorgvuldig gewerkt, maar een allergische reactie is nooit volledig uit te sluiten. Ouders en verzorgers blijven verantwoordelijk voor het doorgeven van bekende allergieën en huidproblemen. Aansprakelijkheid voor indirecte schade is, voor zover de wet dat toelaat, beperkt. Dit is geen juridisch advies; pas deze tekst aan met professioneel advies indien gewenst.",
  },
  {
    title: "Foto’s en toestemming",
    body: "Soms worden sfeerfoto’s gemaakt voor portfolio of social media. Er worden geen herkenbare foto’s van kinderen geplaatst zonder toestemming van een ouder of verzorger. Geef gerust aan als je liever geen foto’s wilt.",
  },
  {
    title: "Overmacht",
    body: "Bij overmacht (bijvoorbeeld extreme weersomstandigheden, calamiteiten of plotselinge ziekte) kunnen afspraken worden aangepast of geannuleerd zonder dat daaruit automatisch recht op schadevergoeding ontstaat, behalve terugbetaling van reeds betaalde bedragen voor niet-geleverde diensten.",
  },
  {
    title: "Klachten en contact",
    body: `Heb je een klacht of opmerking? Neem zo snel mogelijk contact op via ${siteContent.contact.email} of ${siteContent.contact.phone}. Samen zoeken we naar een passende oplossing.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <h1 className="font-display text-3xl font-semibold text-purple-deep sm:text-4xl">
            Algemene en annuleringsvoorwaarden
          </h1>
          <p className="mt-4 text-sm text-ink-muted">
            Laatst bijgewerkt: juli 2026
          </p>

          <aside
            className="mt-6 rounded-2xl border border-peach/50 bg-peach/20 px-4 py-4 text-sm leading-relaxed text-ink"
            role="note"
          >
            <strong>Concepttekst.</strong> Deze voorwaarden zijn een voorbeeld
            en moeten door {siteContent.business.ownerName} worden gecontroleerd en aangepast voordat ze
            als definitief worden gebruikt. Dit is geen juridisch advies.
          </aside>

          <div className="mt-10 space-y-8">
            {sections.map((section, i) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {i + 1}. {section.title}
                </h2>
                <p className="mt-2 leading-relaxed text-ink-muted">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-12">
            <Link
              href="/"
              className="font-semibold text-purple-soft transition-colors hover:text-purple-deep"
            >
              ← Terug naar de homepage
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
