import type { LocaleCode } from "@/lib/locale";

export type UIStrings = {
  brandTagline: string;
  headline: string;
  intro: string;
  searchPlaceholder: string;
  searchLabel: string;
  clearSearch: string;
  all: string;
  categoriesLabel: string;
  productCount: (n: number) => string;
  noResults: string;
  back: string;
  marketLabel: string;
  chooseMarket: string;
  intendedUse: string;
  howToUse: string;
  safety: string;
  doNotUse: string;
  warningSigns: string;
  emergencyWarning: string;
  storage: string;
  disclaimerShort: string;
  disclaimerTitle: string;
  disclaimerBody: string;
  englishNote: string;
  browseTitle: string;
  allCategories: string;
  backToCategory: (label: string) => string;
  home: string;
  videoGuide: string;
  watchVideo: string;
  videoPending: string;
  captions: string;
  captionsOff: string;
  viewImageGuide: string;
  imageGuide: string;
  enlargeIllustration: string;
};

const en: UIStrings = {
  brandTagline: "A real difference",
  headline: "Bladder and bowel care",
  intro:
    "Explore Wellspect's LoFric bladder management and Navina bowel care products, with step-by-step guidance for safe everyday use.",
  searchPlaceholder: "Search products or needs",
  searchLabel: "Search products",
  clearSearch: "Clear search",
  all: "All",
  categoriesLabel: "Categories",
  productCount: (n) => `${n} ${n === 1 ? "product" : "products"}`,
  noResults: "Nothing matches that search. Try another word or ask your healthcare professional.",
  back: "All products",
  marketLabel: "Market and language",
  chooseMarket: "Choose market and language",
  intendedUse: "Intended use",
  howToUse: "How to use it",
  safety: "Safety notices",
  doNotUse: "Do not use if",
  warningSigns: "Contact your healthcare professional if you notice",
  emergencyWarning: "Warning!",
  storage: "Handling and storage",
  disclaimerShort:
    "Information only — not medical advice. Always read the instructions for use supplied with the product and follow the guidance of your healthcare professional.",
  disclaimerTitle: "Medical disclaimer",
  disclaimerBody:
    "This kiosk gives general information about Wellspect medical devices. It does not replace the instructions for use in the product packaging, individual training, or advice from your healthcare professional. Catheterisation and transanal irrigation must be prescribed and taught by a clinician before you start.",
  englishNote: "Detailed instructions are shown in English.",
  browseTitle: "Choose a category",
  allCategories: "All categories",
  backToCategory: (label) => `Back to ${label}`,
  home: "Home",
  videoGuide: "Step-by-step video guide",
  watchVideo: "Watch video",
  videoPending: "Video coming soon.",
  captions: "Subtitles",
  captionsOff: "Off",
  viewImageGuide: "View step-by-step guide",
  imageGuide: "Step-by-step guide",
  enlargeIllustration: "Enlarge illustration",
};

const sv: UIStrings = {
  brandTagline: "A real difference",
  headline: "Blås- och tarmskötsel",
  intro:
    "Utforska Wellspects LoFric för blåsskötsel och Navina för tarmskötsel, med steg-för-steg-vägledning för säker daglig användning.",
  searchPlaceholder: "Sök produkter eller behov",
  searchLabel: "Sök produkter",
  clearSearch: "Rensa sökning",
  all: "Alla",
  categoriesLabel: "Kategorier",
  productCount: (n) => `${n} ${n === 1 ? "produkt" : "produkter"}`,
  noResults: "Inga träffar. Prova ett annat ord eller fråga din vårdgivare.",
  back: "Alla produkter",
  marketLabel: "Marknad och språk",
  chooseMarket: "Välj marknad och språk",
  intendedUse: "Avsedd användning",
  howToUse: "Så använder du den",
  safety: "Säkerhetsinformation",
  doNotUse: "Använd inte om",
  warningSigns: "Kontakta vården om du märker",
  emergencyWarning: "Varning!",
  storage: "Hantering och förvaring",
  disclaimerShort:
    "Endast information — inte medicinsk rådgivning. Läs alltid bruksanvisningen som följer med produkten och följ din vårdgivares råd.",
  disclaimerTitle: "Medicinsk friskrivning",
  disclaimerBody:
    "Den här kiosken ger allmän information om Wellspects medicintekniska produkter. Den ersätter inte bruksanvisningen i förpackningen, individuell instruktion eller råd från din vårdgivare. RIK och transanal irrigation ska ordineras och läras ut av vårdpersonal innan du börjar.",
  englishNote: "Detaljerade instruktioner visas på engelska.",
  browseTitle: "Välj en kategori",
  allCategories: "Alla kategorier",
  backToCategory: (label) => `Tillbaka till ${label}`,
  home: "Startsida",
  videoGuide: "Steg-för-steg-videoguide",
  watchVideo: "Se filmen",
  videoPending: "Filmen kommer snart.",
  captions: "Undertexter",
  captionsOff: "Av",
  viewImageGuide: "Visa steg-för-steg-guide",
  imageGuide: "Steg-för-steg-guide",
  enlargeIllustration: "Förstora illustrationen",
};

const fi: UIStrings = {
  brandTagline: "A real difference",
  headline: "Rakon ja suolen hoito",
  intro:
    "Tutustu Wellspectin LoFric-katetreihin ja Navina-suolihuuhtelutuotteisiin sekä turvallisen päivittäisen käytön ohjeisiin.",
  searchPlaceholder: "Hae tuotteita tai tarpeita",
  searchLabel: "Hae tuotteita",
  clearSearch: "Tyhjennä haku",
  all: "Kaikki",
  categoriesLabel: "Kategoriat",
  productCount: (n) => `${n} ${n === 1 ? "tuote" : "tuotetta"}`,
  noResults: "Ei osumia. Kokeile toista hakusanaa tai kysy hoitohenkilökunnalta.",
  back: "Kaikki tuotteet",
  marketLabel: "Markkina ja kieli",
  chooseMarket: "Valitse markkina ja kieli",
  intendedUse: "Käyttötarkoitus",
  howToUse: "Näin käytät",
  safety: "Turvallisuustiedot",
  doNotUse: "Älä käytä, jos",
  warningSigns: "Ota yhteys hoitohenkilökuntaan, jos huomaat",
  emergencyWarning: "Varoitus!",
  storage: "Käsittely ja säilytys",
  disclaimerShort:
    "Vain tiedoksi — ei lääketieteellistä neuvontaa. Lue aina tuotteen mukana toimitettu käyttöohje ja noudata hoitohenkilökunnan ohjeita.",
  disclaimerTitle: "Lääketieteellinen vastuuvapauslauseke",
  disclaimerBody:
    "Tämä kioski antaa yleistä tietoa Wellspectin lääkinnällisistä laitteista. Se ei korvaa pakkauksen käyttöohjetta, henkilökohtaista opastusta tai hoitohenkilökunnan neuvoja. Katetroinnin ja transanaalisen huuhtelun tulee olla lääkärin määräämiä ja ammattilaisen opastamia.",
  englishNote: "Yksityiskohtaiset ohjeet näytetään englanniksi.",
  browseTitle: "Valitse kategoria",
  allCategories: "Kaikki kategoriat",
  backToCategory: (label) => `Takaisin: ${label}`,
  home: "Etusivu",
  videoGuide: "Vaiheittainen video-opas",
  watchVideo: "Katso video",
  videoPending: "Video tulossa pian.",
  captions: "Tekstitys",
  captionsOff: "Pois",
  viewImageGuide: "Näytä vaiheittainen opas",
  imageGuide: "Vaiheittainen opas",
  enlargeIllustration: "Suurenna kuva",
};

const da: UIStrings = {
  brandTagline: "A real difference",
  headline: "Blære- og tarmpleje",
  intro:
    "Udforsk Wellspects LoFric til blærepleje og Navina til tarmpleje med trin-for-trin vejledning til sikker daglig brug.",
  searchPlaceholder: "Søg produkter eller behov",
  searchLabel: "Søg produkter",
  clearSearch: "Ryd søgning",
  all: "Alle",
  categoriesLabel: "Kategorier",
  productCount: (n) => `${n} ${n === 1 ? "produkt" : "produkter"}`,
  noResults: "Ingen resultater. Prøv et andet ord, eller spørg din behandler.",
  back: "Alle produkter",
  marketLabel: "Marked og sprog",
  chooseMarket: "Vælg marked og sprog",
  intendedUse: "Tilsigtet brug",
  howToUse: "Sådan bruger du den",
  safety: "Sikkerhedsinformation",
  doNotUse: "Må ikke bruges hvis",
  warningSigns: "Kontakt din behandler hvis du oplever",
  emergencyWarning: "Advarsel!",
  storage: "Håndtering og opbevaring",
  disclaimerShort:
    "Kun information — ikke lægelig rådgivning. Læs altid brugsanvisningen, der følger med produktet, og følg din behandlers vejledning.",
  disclaimerTitle: "Medicinsk ansvarsfraskrivelse",
  disclaimerBody:
    "Denne kiosk giver generel information om Wellspects medicinske udstyr. Den erstatter ikke brugsanvisningen i emballagen, individuel oplæring eller råd fra din behandler. Kateterisering og transanal irrigation skal ordineres og oplæres af sundhedspersonale, før du begynder.",
  englishNote: "Detaljerede instruktioner vises på engelsk.",
  browseTitle: "Vælg en kategori",
  allCategories: "Alle kategorier",
  backToCategory: (label) => `Tilbage til ${label}`,
  home: "Forside",
  videoGuide: "Trin-for-trin videoguide",
  watchVideo: "Se videoen",
  videoPending: "Videoen kommer snart.",
  captions: "Undertekster",
  captionsOff: "Fra",
  viewImageGuide: "Se trin-for-trin-guide",
  imageGuide: "Trin-for-trin-guide",
  enlargeIllustration: "Forstør illustrationen",
};

const no: UIStrings = {
  brandTagline: "A real difference",
  headline: "Blære- og tarmomsorg",
  intro:
    "Utforsk Wellspects LoFric for blæretømming og Navina for tarmskylling, med trinnvis veiledning for trygg daglig bruk.",
  searchPlaceholder: "Søk produkter eller behov",
  searchLabel: "Søk produkter",
  clearSearch: "Tøm søk",
  all: "Alle",
  categoriesLabel: "Kategorier",
  productCount: (n) => `${n} ${n === 1 ? "produkt" : "produkter"}`,
  noResults: "Ingen treff. Prøv et annet ord, eller spør helsepersonell.",
  back: "Alle produkter",
  marketLabel: "Marked og språk",
  chooseMarket: "Velg marked og språk",
  intendedUse: "Tiltenkt bruk",
  howToUse: "Slik bruker du den",
  safety: "Sikkerhetsinformasjon",
  doNotUse: "Ikke bruk hvis",
  warningSigns: "Kontakt helsepersonell hvis du merker",
  emergencyWarning: "Advarsel!",
  storage: "Håndtering og oppbevaring",
  disclaimerShort:
    "Kun informasjon — ikke medisinsk rådgivning. Les alltid bruksanvisningen som følger med produktet, og følg rådene fra helsepersonell.",
  disclaimerTitle: "Medisinsk ansvarsfraskrivelse",
  disclaimerBody:
    "Denne kiosken gir generell informasjon om Wellspects medisinske utstyr. Den erstatter ikke bruksanvisningen i pakningen, individuell opplæring eller råd fra helsepersonell. Kateterisering og transanal irrigasjon skal forskrives og læres bort av helsepersonell før du starter.",
  englishNote: "Detaljerte instruksjoner vises på engelsk.",
  browseTitle: "Velg en kategori",
  allCategories: "Alle kategorier",
  backToCategory: (label) => `Tilbake til ${label}`,
  home: "Startside",
  videoGuide: "Trinnvis videoguide",
  watchVideo: "Se videoen",
  videoPending: "Videoen kommer snart.",
  captions: "Undertekster",
  captionsOff: "Av",
  viewImageGuide: "Se trinnvis guide",
  imageGuide: "Trinnvis guide",
  enlargeIllustration: "Forstørr illustrasjonen",
};

export const uiStrings: Record<LocaleCode, UIStrings> = { en, sv, fi, da, no };
