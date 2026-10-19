import type { LocaleCode } from "@/lib/locale";

/** Licence number printed with the Nordic Swan mark in the pop-up. */
export const swanLicenseNumber = "3098 0002";

export type EcolabelContent = {
  name: string;
  cardTitle: string;
  badge: string;
  /** Pop-up heading. */
  heading: string;
  paragraphs: string[];
  /** Label above the product list, e.g. "Svanenmärkningen gäller:". */
  appliesLabel: string;
  /** Products the label covers, as one closing line. */
  appliesTo: string;
  /**
   * Short help shown beside the locale QR. The dialog hides the block when
   * `ecolabelQrs` has no image for that locale.
   */
  qrHint: string;
  close: string;
};

const appliesTo =
  "LoFric Elle, LoFric Elle Pro, LoFric Origo, LoFric Origo Sleeve, LoFric Origo Pro, LoFric Sense, LoFric Hydro-Kit";

export const ecolabelContent: Record<LocaleCode, EcolabelContent> = {
  en: {
    name: "Nordic Swan Ecolabel",
    cardTitle: "Nordic Ecolabel",
    badge: "Nordic Swan Ecolabel certified",
    heading: "Environment",
    paragraphs: [
      "LoFric catheters are PVC-free and made of a polyolefin-based elastomer (POBE). It is an elastic material, free from plasticisers, known as phthalates. POBE has a 33% lower environmental impact compared with polyurethane.",
      "LoFric was the first among hydrophilic intermittent catheters to receive the Nordic Swan Ecolabel. To be awarded the Nordic Swan Ecolabel, a product must meet strict environmental requirements. These include, among other things, restrictions and bans on various types of chemical substances in both production and the product.",
      "The Nordic Swan Ecolabel makes it easier for users to make a good environmental choice when choosing a catheter.",
    ],
    appliesLabel: "The Nordic Swan Ecolabel applies to:",
    appliesTo: `${appliesTo} and LoFric Primo.`,
    qrHint:
      "Scan the QR code to read more about the Nordic Swan Ecolabel on the official website, svanen.se/en.",
    close: "Close",
  },
  sv: {
    name: "Svanenmärkt",
    cardTitle: "Svanenmärket",
    badge: "Svanenmärkt produkt",
    heading: "Miljö",
    paragraphs: [
      "LoFric-katetrar är PVC-fria och tillverkade av polyolefinbaserad elastomer (POBE). Det är ett elastiskt material, fritt från mjukgörare, så kallade ftalater. POBE har 33% lägre miljöpåverkan jämfört med polyuretan.",
      "LoFric var först bland hydrofila tappningskatetrar med att erhålla den nordiska miljömärkningen Svanen. För att beviljas Svanen-märkningen måste en produkt uppfylla strikta miljökrav. Dessa inkluderar bland annat begränsningar och förbud för olika typer av kemiska ämnen i både produktion och produkt.",
      "Svanenmärkningen gör det enklare för användarna att göra ett bra miljöval när de väljer kateter.",
    ],
    appliesLabel: "Svanenmärkningen gäller:",
    appliesTo: `${appliesTo} och LoFric Primo.`,
    qrHint:
      "Skanna QR-koden för att läsa mer om Svanenmärket på Wellspects webbplats, eller besök den officiella sajten svanen.se.",
    close: "Stäng",
  },
  fi: {
    name: "Joutsenmerkki",
    cardTitle: "Joutsenmerkki",
    badge: "Joutsenmerkitty tuote",
    heading: "Ympäristö",
    paragraphs: [
      "LoFric-katetrit ovat PVC-vapaita ja valmistettu polyolefiinipohjaisesta elastomeerista (POBE). Se on joustava materiaali, jossa ei ole pehmentimiä, niin sanottuja ftalaatteja. POBE:lla on 33% pienempi ympäristövaikutus verrattuna polyuretaaniin.",
      "LoFric sai pohjoismaisen ympäristömerkin Joutsenmerkin ensimmäisenä hydrofiilisistä kertakatetreista. Joutsenmerkin myöntäminen edellyttää, että tuote täyttää tiukat ympäristövaatimukset. Vaatimuksiin kuuluu muun muassa rajoituksia ja kieltoja, jotka koskevat erilaisia kemiallisia aineita sekä tuotannossa että tuotteessa.",
      "Joutsenmerkki helpottaa käyttäjää tekemään hyvän ympäristövalinnan katetria valitessaan.",
    ],
    appliesLabel: "Joutsenmerkki koskee:",
    appliesTo: `${appliesTo} ja LoFric Primo.`,
    qrHint:
      "Skanna QR-koodi lukeaksesi lisää Joutsenmerkistä Wellspectin sivustolta, tai käy virallisella sivustolla joutsenmerkki.fi.",
    close: "Sulje",
  },
  da: {
    name: "Svanemærket",
    cardTitle: "Svanemærket",
    badge: "Svanemærket produkt",
    heading: "Miljø",
    paragraphs: [
      "LoFric-katetre er PVC-frie og fremstillet af polyolefinbaseret elastomer (POBE). Det er et elastisk materiale, frit for blødgørere, såkaldte ftalater. POBE har 33% lavere miljøpåvirkning sammenlignet med polyuretan.",
      "LoFric var først blandt hydrofile intermitterende katetre til at opnå det nordiske miljømærke Svanemærket. For at få tildelt Svanemærket skal et produkt opfylde strenge miljøkrav. Disse omfatter blandt andet begrænsninger og forbud mod forskellige typer kemiske stoffer både i produktionen og i produktet.",
      "Svanemærket gør det lettere for brugerne at træffe et godt miljøvalg, når de vælger kateter.",
    ],
    appliesLabel: "Svanemærket gælder:",
    appliesTo: `${appliesTo} og LoFric Primo.`,
    qrHint:
      "Scan QR-koden for at læse mere om Svanemærket på Wellspects website, eller besøg den officielle side svanemaerket.dk.",
    close: "Luk",
  },
  no: {
    name: "Svanemerket",
    cardTitle: "Svanemerket",
    badge: "Svanemerket produkt",
    heading: "Miljø",
    paragraphs: [
      "LoFric-katetre er PVC-frie og laget av polyolefinbasert elastomer (POBE). Det er et elastisk materiale, fritt for myknere, såkalte ftalater. POBE har 33% lavere miljøpåvirkning sammenlignet med polyuretan.",
      "LoFric var først blant hydrofile tappekatetre til å få det nordiske miljømerket Svanemerket. For å bli tildelt Svanemerket må et produkt oppfylle strenge miljøkrav. Disse omfatter blant annet begrensninger og forbud mot ulike typer kjemiske stoffer både i produksjonen og i produktet.",
      "Svanemerket gjør det enklere for brukerne å ta et godt miljøvalg når de velger kateter.",
    ],
    appliesLabel: "Svanemerket gjelder:",
    appliesTo: `${appliesTo} og LoFric Primo.`,
    qrHint:
      "Skann QR-koden for å lese mer om Svanemerket på Wellspects nettside, eller besøk den offisielle siden svanemerket.no.",
    close: "Lukk",
  },
};

export type EcolabelQr = {
  /** Public path, e.g. `/images/qr/ecolabel/sv.png`. */
  image: string;
  /** Short URL encoded in the QR image (not shown as a text link). */
  url: string;
};

/**
 * Swan / ecolabel QR codes. The PNG is the source of truth.
 *
 * Destinations behind the short URLs:
 * en https://www.svanen.se/en/
 * sv https://www.wellspect.se/hallbarhet/
 * fi https://se.wellspect.fi/hallbarhet/
 * da https://www.wellspect.dk/baredygtighed/
 * no https://www.wellspect.no/barekraft/
 *
 * Omit a locale when the asset does not exist yet. The dialog hides the QR
 * block in that case.
 */
export const ecolabelQrs: Partial<Record<LocaleCode, EcolabelQr>> = {
  en: {
    image: "/images/qr/ecolabel/en.png",
    url: "https://wellspect.qrd.by/nemqdo",
  },
  sv: {
    image: "/images/qr/ecolabel/sv.png",
    url: "https://wellspect.qrd.by/hwcfk9",
  },
  fi: {
    image: "/images/qr/ecolabel/fi.png",
    url: "https://wellspect.qrd.by/gs7th1",
  },
  da: {
    image: "/images/qr/ecolabel/da.png",
    url: "https://wellspect.qrd.by/8nuiov",
  },
  no: {
    image: "/images/qr/ecolabel/no.png",
    url: "https://wellspect.qrd.by/7gjlhz",
  },
};

export function getEcolabelQr(locale: LocaleCode): EcolabelQr | undefined {
  return ecolabelQrs[locale];
}
