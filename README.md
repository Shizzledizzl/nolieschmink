# Nolie Schmink

Professionele one-page website voor schminkster Nolie Schmink. Gebouwd met Next.js (App Router), TypeScript en Tailwind CSS. Klaar voor publicatie op Vercel.

## Lokaal starten

```bash
npm install
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000) in je browser.

Andere handige commando’s:

```bash
npm run build   # productieversie bouwen
npm run start   # productieversie starten
npm run lint    # code controleren
```

## Teksten en inhoud aanpassen

**Alles wat je als niet-programmeur wilt wijzigen, staat in één bestand:**

[`src/data/siteContent.ts`](src/data/siteContent.ts)

Daarin vind je onder andere:

- Bedrijfsnaam
- Contactgegevens
- Socialmedia-links
- Hero-, over-mij- en diensten-teksten
- Portfolio-items
- Tariefpakketten
- Werkwijze en hygiëne
- FAQ
- SEO-titel en -beschrijving

Open het bestand in een teksteditor, pas de tekst tussen aanhalingstekens aan, sla op en vernieuw de pagina. Let op komma’s en aanhalingstekens: die moeten blijven staan.

## Tarieven aanpassen

Ga in `siteContent.ts` naar het blok `pricing`:

- `packages` → namen, bedragen (`price`) en opsommingen (`features`)
- `extras.travelCosts` → reiskosten
- `extras.minimumDuration` → minimale boekingsduur

Vervang placeholders zoals `[BEDRAG]`, `[AANTAL]` en `[TIJDSDUUR]` door echte waarden.

## Foto’s vervangen

Plaats je eigen foto’s in de map `public/images/` en houd bij voorkeur deze bestandsnamen aan:

| Bestand | Gebruik |
| --- | --- |
| `nadine-portrait.jpg` | Portret bij “Over mij” |
| `nadine-at-work.jpg` | Hero / aan het werk |
| `schmink-vlinder.jpg` | Portfolio |
| `schmink-tijger.jpg` | Portfolio |
| `schmink-prinses.jpg` | Portfolio |
| `schmink-superheld.jpg` | Portfolio |
| `schmink-bloemen.jpg` | Portfolio |
| `schmink-fantasie.jpg` | Portfolio |

Tips:

- Gebruik JPG of WebP, bij voorkeur niet groter dan ca. 1–2 MB per foto.
- Pas eventueel `src` en `alt` aan in het `portfolio`- en `about`-blok van `siteContent.ts`.
- Ontbrekende of kapotte afbeeldingen laten de site niet crashen; er verschijnt een nette kleurenplaceholder.

## Contactgegevens wijzigen

In `siteContent.ts` onder `contact` en `business`:

| Veld | Voorbeeld |
| --- | --- |
| `contact.phone` | `06 12 34 56 78` |
| `contact.phoneLink` | `0612345678` |
| `contact.email` | `hallo@jouwdomein.nl` |
| `contact.whatsappNumber` | `31612345678` (met landcode, zonder + of spaties) |
| `business.serviceArea` | `Rotterdam en omgeving` |
| `social.instagram` | `https://instagram.com/...` |
| `social.facebook` | `https://facebook.com/...` |

## Placeholders die nog moeten worden ingevuld

Zoek in `siteContent.ts` naar tekst tussen vierkante haken, bijvoorbeeld:

- `[BEDRIJFSNAAM]` (of pas `business.name` aan)
- `[TELEFOONNUMMER]`
- `[E-MAILADRES]`
- `[WHATSAPP-NUMMER]`
- `[WERKGEBIED]`
- `[KVK-NUMMER]`
- `[INSTAGRAM-URL]`
- `[FACEBOOK-URL]`
- `[BEDRAG]`, `[AANTAL]`, `[TIJDSDUUR]`
- `[REISKOSTEN]`, `[MINIMALE BOEKINGSDUUR]`
- `business.websiteUrl` → jouw echte website-URL (voor SEO, sitemap en Open Graph)

Controleer ook de conceptteksten op `/privacy` en `/voorwaarden` voordat je live gaat.

## Publiceren op Vercel

1. Push dit project naar GitHub (of GitLab / Bitbucket).
2. Ga naar [vercel.com](https://vercel.com) en log in.
3. Kies **Add New Project** en importeer de repository.
4. Laat de standaardinstellingen staan (Next.js wordt automatisch herkend).
5. Klik op **Deploy**.

Na een paar minuten is de site bereikbaar op een `*.vercel.app`-adres.

### Eigen domeinnaam koppelen

1. In Vercel: project → **Settings** → **Domains**.
2. Voeg je domeinnaam toe (bijv. `www.nolieschmink.nl`).
3. Volg de DNS-instructies van Vercel bij je domeinprovider.
4. Pas daarna `business.websiteUrl` in `siteContent.ts` aan naar je echte URL en deploy opnieuw.

## Later een echt contactformulier aansluiten

Het formulier werkt nu zonder backend: na validatie opent een e-mail (mailto) met de ingevulde gegevens. De verzendlogica staat in:

[`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx)

in de functie `submitContactForm`.

Mogelijke vervolgstappen:

1. **Formspree / Getform / Basin** – account aanmaken, endpoint-URL krijgen, in `submitContactForm` een `fetch` naar die URL doen.
2. **Next.js API-route** – map `src/app/api/contact/route.ts` aanmaken en daar e-mail versturen (bijv. via Resend of SendGrid).
3. Laat de validatie staan; vervang alleen het verzendgedeelte.

Er staat al een korte comment in de code die aangeeft waar je dit kunt aansluiten.

## Projectstructuur (kort)

```
src/
  app/                 # Pagina’s (home, privacy, voorwaarden)
  components/          # UI-onderdelen en secties
  data/siteContent.ts  # ← Alle aanpasbare inhoud
public/images/         # Foto’s
```

## Licentie / gebruik

Deze website is gemaakt voor Nolie Schmink. Pas bedrijfsgegevens, voorwaarden en privacyteksten aan vóór openbare publicatie.
