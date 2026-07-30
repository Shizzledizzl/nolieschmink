import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteContent } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Privacyverklaring van ${siteContent.business.name}. Lees hoe persoonsgegevens via contact worden verwerkt.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const { business, contact } = siteContent;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <h1 className="font-display text-3xl font-semibold text-purple-deep sm:text-4xl">
            Privacyverklaring
          </h1>
          <p className="mt-4 text-sm text-ink-muted">
            Laatst bijgewerkt: juli 2026 · Concepttekst – pas aan zodra analytics,
            tracking of een nieuwsbriefsysteem wordt toegevoegd.
          </p>

          <div className="prose-custom mt-10 space-y-8 text-ink-muted leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                1. Wie is verantwoordelijk?
              </h2>
              <p className="mt-2">
                {business.name} is verantwoordelijk voor de verwerking van
                persoonsgegevens die via deze website worden verzameld.
                Contact: {contact.email} / {contact.phone}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                2. Welke gegevens worden gevraagd?
              </h2>
              <p className="mt-2">
                Bij contact via WhatsApp, telefoon of e-mail kunnen de volgende gegevens
                worden gedeeld:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Gewenste datum en tijden</li>
                <li>Plaats of locatie</li>
                <li>Soort gelegenheid</li>
                <li>Geschat aantal personen en leeftijdsgroep</li>
                <li>Of het een binnen- of buitenlocatie betreft</li>
                <li>Bericht en bijzondere wensen</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                3. Waarom worden deze gegevens verwerkt?
              </h2>
              <p className="mt-2">
                De gegevens worden uitsluitend gebruikt om op jouw aanvraag te
                reageren, beschikbaarheid te controleren, een prijsopgave te
                maken en de boeking af te stemmen. De rechtsgrond is
                gerechtvaardigd belang en/of het nemen van stappen vóór het
                sluiten van een overeenkomst.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                4. Hoe lang worden aanvragen bewaard?
              </h2>
              <p className="mt-2">
                Aanvragen worden bewaard zolang dat nodig is voor de afhandeling
                van de boeking en eventuele nazorg, en maximaal zolang wettelijke
                bewaartermijnen dat vereisen. Aanvragen die niet tot een boeking
                leiden, worden in de regel binnen één jaar verwijderd, tenzij er
                een reden is om ze langer te bewaren (bijvoorbeeld een openstaande
                vraag).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                5. Delen met derden
              </h2>
              <p className="mt-2">
                Gegevens worden niet zonder reden aan derden verkocht of
                verstrekt. Alleen als dat noodzakelijk is voor de dienstverlening
                (bijvoorbeeld WhatsApp) of wanneer dat wettelijk
                verplicht is, kunnen gegevens met een verwerker of autoriteit
                worden gedeeld.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                6. Jouw rechten
              </h2>
              <p className="mt-2">
                Je hebt het recht om inzage, correctie of verwijdering van jouw
                persoonsgegevens te vragen. Neem daarvoor contact op via{" "}
                {contact.email} of {contact.phone}. Je kunt ook een klacht
                indienen bij de Autoriteit Persoonsgegevens.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                7. Cookies
              </h2>
              <p className="mt-2">
                Deze website gebruikt alleen noodzakelijke technische cookies die
                nodig zijn om de site goed te laten werken. Er zijn op dit moment
                geen analytics- of marketingcookies actief.
              </p>
              <p className="mt-2 rounded-2xl bg-peach/20 px-4 py-3 text-sm text-ink">
                Let op: zodra externe analytics, trackingsoftware of een
                nieuwsbriefsysteem wordt toegevoegd, moet deze
                privacyverklaring worden aangevuld en moet – waar nodig – om
                toestemming worden gevraagd.
              </p>
            </section>
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
