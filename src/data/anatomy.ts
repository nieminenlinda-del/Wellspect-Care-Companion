import type { LocaleCode } from "@/lib/locale";

export type AnatomySex = "female" | "male";

export type AnatomyStrings = {
  /** Button label in the category header */
  button: string;
  /** Button label on product detail pages */
  reference: string;
  titles: Record<AnatomySex, string>;
  subtitles: Record<AnatomySex, string>;
  intro: string;
  labelsHeading: string;
  labels: { male: { term: string; text: string }[] };
  /** Female key structures grouped per diagram, with letter/number badges */
  femaleGroups: {
    view: AnatomyView;
    note?: string;
    items: { badge: string; term: string; text: string }[];
  }[];
  imagePending: string;
  footnote: string;
  /** Captions for the illustration set */
  views: {
    tract: string;
    external: string;
    profile: string;
    overview: string;
    prostateNormal: string;
    prostateEnlarged: string;
  };
  /** Prostate comparison block (male) */
  compare: { heading: string; note: string };
};

export type AnatomyView =
  "tract" | "external" | "profile" | "overview" | "prostateNormal" | "prostateEnlarged";

export type AnatomyImage = { url: string; alt: string; view?: AnatomyView };

/**
 * Official anatomy illustrations. An empty list shows a clean illustration slot.
 */
export const anatomyImages: Record<AnatomySex, AnatomyImage[]> = {
  female: [
    {
      url: "/__l5e/assets-v1/8e66fa7a-502f-4eb2-bc99-e43710122eda/female-anatomy-tract.png",
      alt: "Female urinary tract: kidneys, ureters, bladder and urethra",
      view: "tract",
    },
    {
      url: "/__l5e/assets-v1/f4721b08-88bb-4114-95be-c38ed4c529e0/female-anatomy-external.png",
      alt: "External female anatomy showing the urethral opening",
      view: "external",
    },
  ],
  male: [
    {
      url: "/__l5e/assets-v1/7fcda494-6737-4b71-b0a7-84326bdda869/male-anatomy-overview.png",
      alt: "Side view of the male urinary tract with numbered structures 1 to 7",
      view: "overview",
    },
  ],
};

/** Female side profile with numbered structures 1-5. */
export const femaleProfileImage: AnatomyImage = {
  url: "/__l5e/assets-v1/daec855e-5f37-4e9a-a608-d859c5eae7c7/female-anatomy-profile.png",
  alt: "Side profile of the female pelvis with numbered structures 1 to 5",
  view: "profile",
};

/** Normal versus enlarged prostate, shown side by side (male only). */
export const prostateComparison: AnatomyImage[] = [
  {
    url: "/__l5e/assets-v1/abe1beb3-232a-4965-9704-c44d2cc8467c/male-prostate-normal.png",
    alt: "Male pelvis with a normal prostate and a straight urethra",
    view: "prostateNormal",
  },
  {
    url: "/__l5e/assets-v1/0abe3d13-34f6-4ae2-a741-ed17cbd2a0c4/male-prostate-enlarged.png",
    alt: "Male pelvis with an enlarged prostate narrowing the urethra",
    view: "prostateEnlarged",
  },
];

const maleTermsEn = [
  { term: "1. Bladder", text: "Stores urine until emptying." },
  { term: "2. Internal sphincter", text: "Muscle at the bladder outlet that holds urine back." },
  { term: "3. Prostate", text: "Surrounds the urethra just below the bladder." },
  { term: "4. External sphincter", text: "Muscle you can control voluntarily when emptying." },
  { term: "5. Pelvic floor muscles", text: "Support the bladder and the urethra." },
  {
    term: "6. Urethra",
    text: "Long channel (about 20 cm) with a natural curve through the penis.",
  },
  { term: "7. Rectum", text: "The last part of the bowel, behind the prostate." },
];

const maleTermsSv = [
  { term: "1. Urinblåsa", text: "Lagrar urinen tills blåsan töms." },
  { term: "2. Inre slutmuskel", text: "Muskel vid blåsans utlopp som håller kvar urinen." },
  { term: "3. Prostata", text: "Omger urinröret strax under urinblåsan." },
  { term: "4. Yttre slutmuskel", text: "Muskel du kan styra viljemässigt vid tömning." },
  { term: "5. Bäckenbottenmuskulatur", text: "Ger stöd åt urinblåsan och urinröret." },
  { term: "6. Urinrör", text: "Långt rör (cirka 20 cm) med en naturlig krök genom penis." },
  { term: "7. Ändtarm", text: "Tarmens sista del, bakom prostatan." },
];

const maleTermsFi = [
  { term: "1. Virtsarakko", text: "Varastoi virtsan tyhjennykseen asti." },
  { term: "2. Sisempi sulkijalihas", text: "Rakon suulla oleva lihas, joka pidättää virtsaa." },
  { term: "3. Eturauhanen", text: "Ympäröi virtsaputkea heti rakon alapuolella." },
  { term: "4. Ulompi sulkijalihas", text: "Lihas, jota voit hallita tahdonalaisesti." },
  { term: "5. Lantionpohjan lihakset", text: "Tukevat virtsarakkoa ja virtsaputkea." },
  { term: "6. Virtsaputki", text: "Pitkä kanava (noin 20 cm), jossa on luontainen mutka." },
  { term: "7. Peräsuoli", text: "Suolen viimeinen osa, eturauhasen takana." },
];

const maleTermsDa = [
  { term: "1. Blære", text: "Opbevarer urinen indtil tømning." },
  { term: "2. Indre lukkemuskel", text: "Muskel ved blærens udløb, der holder på urinen." },
  { term: "3. Prostata", text: "Omgiver urinrøret lige under blæren." },
  { term: "4. Ydre lukkemuskel", text: "Muskel, du selv kan styre ved tømning." },
  { term: "5. Bækkenbundsmuskulatur", text: "Støtter blæren og urinrøret." },
  { term: "6. Urinrør", text: "Langt rør (ca. 20 cm) med en naturlig kurve gennem penis." },
  { term: "7. Endetarm", text: "Tarmens sidste del, bag prostata." },
];

const maleTermsNo = [
  { term: "1. Urinblære", text: "Lagrer urinen til tømming." },
  { term: "2. Indre lukkemuskel", text: "Muskel ved blæreutløpet som holder på urinen." },
  { term: "3. Prostata", text: "Omgir urinrøret rett under blæren." },
  { term: "4. Ytre lukkemuskel", text: "Muskel du kan styre viljestyrt ved tømming." },
  { term: "5. Bekkenbunnsmuskulatur", text: "Støtter blæren og urinrøret." },
  { term: "6. Urinrør", text: "Langt rør (ca. 20 cm) med en naturlig kurve gjennom penis." },
  { term: "7. Endetarm", text: "Tarmens siste del, bak prostata." },
];

const femaleGroupsEn: AnatomyStrings["femaleGroups"] = [
  {
    view: "tract",
    items: [
      { badge: "A", term: "Kidneys", text: "Filter blood and produce urine." },
      { badge: "B", term: "Ureters", text: "Two narrow tubes carrying urine to the bladder." },
      { badge: "C", term: "Bladder", text: "Stores urine until emptying." },
      {
        badge: "D",
        term: "Urethra",
        text: "Short channel (about 3–5 cm) that carries urine out of the body.",
      },
    ],
  },
  {
    view: "external",
    note: "The urethral opening lies between A and C.",
    items: [
      { badge: "A", term: "Clitoris", text: "Sits in front of the urethral opening." },
      { badge: "B", term: "Labia", text: "Surround the urethral opening and the vaginal opening." },
      { badge: "C", term: "Vaginal opening", text: "Sits behind the urethral opening." },
    ],
  },
  {
    view: "profile",
    items: [
      { badge: "1", term: "Uterus", text: "Sits above and behind the bladder." },
      { badge: "2", term: "Bladder", text: "Stores urine until emptying." },
      { badge: "3", term: "Pelvic floor muscles", text: "Support the bladder and the urethra." },
      { badge: "4", term: "Urethra", text: "Short channel that carries urine out of the body." },
      { badge: "5", term: "Rectum", text: "The last part of the bowel." },
    ],
  },
];

const femaleGroupsSv: AnatomyStrings["femaleGroups"] = [
  {
    view: "tract",
    items: [
      { badge: "A", term: "Njurar", text: "Filtrerar blodet och bildar urin." },
      { badge: "B", term: "Urinledare", text: "Två smala rör som leder urinen till urinblåsan." },
      { badge: "C", term: "Urinblåsa", text: "Lagrar urinen tills blåsan töms." },
      {
        badge: "D",
        term: "Urinrör",
        text: "Kort kanal (cirka 3–5 cm) som leder ut urinen ur kroppen.",
      },
    ],
  },
  {
    view: "external",
    note: "Urinrörsmynningen ligger mellan A och C.",
    items: [
      { badge: "A", term: "Klitoris", text: "Ligger framför urinrörsmynningen." },
      { badge: "B", term: "Blygdläppar", text: "Omger urinrörsmynningen och slidöppningen." },
      { badge: "C", term: "Slidöppning", text: "Ligger bakom urinrörsmynningen." },
    ],
  },
  {
    view: "profile",
    items: [
      { badge: "1", term: "Livmoder", text: "Ligger ovanför och bakom urinblåsan." },
      { badge: "2", term: "Urinblåsa", text: "Lagrar urinen tills blåsan töms." },
      { badge: "3", term: "Bäckenbottenmuskulatur", text: "Ger stöd åt urinblåsan och urinröret." },
      { badge: "4", term: "Urinrör", text: "Kort kanal som leder ut urinen ur kroppen." },
      { badge: "5", term: "Ändtarm", text: "Tarmens sista del." },
    ],
  },
];

const femaleGroupsFi: AnatomyStrings["femaleGroups"] = [
  {
    view: "tract",
    items: [
      { badge: "A", term: "Munuaiset", text: "Suodattavat verta ja tuottavat virtsaa." },
      {
        badge: "B",
        term: "Virtsanjohtimet",
        text: "Kaksi kapeaa putkea, jotka johtavat virtsan rakkoon.",
      },
      { badge: "C", term: "Virtsarakko", text: "Varastoi virtsan tyhjennykseen asti." },
      {
        badge: "D",
        term: "Virtsaputki",
        text: "Lyhyt kanava (noin 3–5 cm), joka johtaa virtsan ulos.",
      },
    ],
  },
  {
    view: "external",
    note: "Virtsaputken suu on A:n ja C:n välissä.",
    items: [
      { badge: "A", term: "Klitoris", text: "Sijaitsee virtsaputken suun edessä." },
      {
        badge: "B",
        term: "Häpyhuulet",
        text: "Ympäröivät virtsaputken suuta ja emättimen aukkoa.",
      },
      { badge: "C", term: "Emättimen aukko", text: "Sijaitsee virtsaputken suun takana." },
    ],
  },
  {
    view: "profile",
    items: [
      { badge: "1", term: "Kohtu", text: "Sijaitsee virtsarakon yläpuolella ja takana." },
      { badge: "2", term: "Virtsarakko", text: "Varastoi virtsan tyhjennykseen asti." },
      { badge: "3", term: "Lantionpohjan lihakset", text: "Tukevat virtsarakkoa ja virtsaputkea." },
      { badge: "4", term: "Virtsaputki", text: "Lyhyt kanava, joka johtaa virtsan ulos." },
      { badge: "5", term: "Peräsuoli", text: "Suolen viimeinen osa." },
    ],
  },
];

const femaleGroupsDa: AnatomyStrings["femaleGroups"] = [
  {
    view: "tract",
    items: [
      { badge: "A", term: "Nyrer", text: "Filtrerer blodet og danner urin." },
      { badge: "B", term: "Urinledere", text: "To smalle rør, der leder urinen til blæren." },
      { badge: "C", term: "Blære", text: "Opbevarer urinen indtil tømning." },
      {
        badge: "D",
        term: "Urinrør",
        text: "Kort kanal (ca. 3–5 cm), der leder urinen ud af kroppen.",
      },
    ],
  },
  {
    view: "external",
    note: "Urinrørsåbningen ligger mellem A og C.",
    items: [
      { badge: "A", term: "Klitoris", text: "Ligger foran urinrørsåbningen." },
      { badge: "B", term: "Kønslæber", text: "Omgiver urinrørsåbningen og skedeåbningen." },
      { badge: "C", term: "Skedeåbning", text: "Ligger bag urinrørsåbningen." },
    ],
  },
  {
    view: "profile",
    items: [
      { badge: "1", term: "Livmoder", text: "Ligger over og bag blæren." },
      { badge: "2", term: "Blære", text: "Opbevarer urinen indtil tømning." },
      { badge: "3", term: "Bækkenbundsmuskler", text: "Støtter blæren og urinrøret." },
      { badge: "4", term: "Urinrør", text: "Kort kanal, der leder urinen ud af kroppen." },
      { badge: "5", term: "Endetarm", text: "Tarmens sidste del." },
    ],
  },
];

const femaleGroupsNo: AnatomyStrings["femaleGroups"] = [
  {
    view: "tract",
    items: [
      { badge: "A", term: "Nyrer", text: "Filtrerer blodet og lager urin." },
      { badge: "B", term: "Urinledere", text: "To smale rør som leder urinen til blæren." },
      { badge: "C", term: "Urinblære", text: "Lagrer urinen til tømming." },
      {
        badge: "D",
        term: "Urinrør",
        text: "Kort kanal (ca. 3–5 cm) som leder urinen ut av kroppen.",
      },
    ],
  },
  {
    view: "external",
    note: "Urinrørsåpningen ligger mellom A og C.",
    items: [
      { badge: "A", term: "Klitoris", text: "Ligger foran urinrørsåpningen." },
      { badge: "B", term: "Kjønnslepper", text: "Omgir urinrørsåpningen og skjedeåpningen." },
      { badge: "C", term: "Skjedeåpning", text: "Ligger bak urinrørsåpningen." },
    ],
  },
  {
    view: "profile",
    items: [
      { badge: "1", term: "Livmor", text: "Ligger over og bak blæren." },
      { badge: "2", term: "Urinblære", text: "Lagrer urinen til tømming." },
      { badge: "3", term: "Bekkenbunnsmuskler", text: "Støtter blæren og urinrøret." },
      { badge: "4", term: "Urinrør", text: "Kort kanal som leder urinen ut av kroppen." },
      { badge: "5", term: "Endetarm", text: "Tarmens siste del." },
    ],
  },
];

export const anatomyStrings: Record<LocaleCode, AnatomyStrings> = {
  en: {
    button: "Urinary anatomy",
    reference: "View anatomical reference",
    titles: { female: "Female urinary anatomy", male: "Male urinary anatomy" },
    subtitles: {
      female: "Overview for bladder management",
      male: "Overview for bladder management",
    },
    intro:
      "A simple overview of the urinary tract to help you understand where the catheter goes and why the technique matters.",
    labelsHeading: "Key structures",
    labels: { male: maleTermsEn },
    femaleGroups: femaleGroupsEn,
    imagePending: "Illustration coming soon",
    footnote:
      "For information only. Your healthcare professional will show you the technique that suits your anatomy.",
    views: {
      tract: "Urinary tract overview",
      external: "External anatomy",
      profile: "Side profile",
      overview: "Urinary tract overview",
      prostateNormal: "Normal prostate",
      prostateEnlarged: "Enlarged prostate",
    },
    compare: {
      heading: "Normal and enlarged prostate",
      note: "An enlarged prostate can press on the urethra, narrowing the channel and increasing its curve. This can make catheterisation feel tighter — never force the catheter.",
    },
  },
  sv: {
    button: "Urinvägarnas anatomi",
    reference: "Visa anatomisk referens",
    titles: { female: "Kvinnlig urinvägsanatomi", male: "Manlig urinvägsanatomi" },
    subtitles: { female: "Översikt för blåsskötsel", male: "Översikt för blåsskötsel" },
    intro:
      "En enkel översikt av urinvägarna som hjälper dig förstå var katetern förs in och varför tekniken är viktig.",
    labelsHeading: "Viktiga delar",
    labels: { male: maleTermsSv },
    femaleGroups: femaleGroupsSv,
    imagePending: "Illustration kommer snart",
    footnote: "Endast för information. Din vårdgivare visar den teknik som passar din anatomi.",
    views: {
      tract: "Översikt av urinvägarna",
      external: "Yttre anatomi",
      profile: "Sidoprofil",
      overview: "Översikt av urinvägarna",
      prostateNormal: "Normal prostata",
      prostateEnlarged: "Förstorad prostata",
    },
    compare: {
      heading: "Normal och förstorad prostata",
      note: "En förstorad prostata kan trycka mot urinröret så att kanalen blir trängre och kröken tydligare. Kateteriseringen kan då kännas trögare – tvinga aldrig in katetern.",
    },
  },
  fi: {
    button: "Virtsateiden anatomia",
    reference: "Näytä anatominen kuva",
    titles: { female: "Naisen virtsateiden anatomia", male: "Miehen virtsateiden anatomia" },
    subtitles: { female: "Yleiskuva rakon hoitoon", male: "Yleiskuva rakon hoitoon" },
    intro:
      "Selkeä yleiskuva virtsateistä auttaa ymmärtämään, mihin katetri viedään ja miksi tekniikalla on merkitystä.",
    labelsHeading: "Keskeiset rakenteet",
    labels: { male: maleTermsFi },
    femaleGroups: femaleGroupsFi,
    imagePending: "Kuva tulossa pian",
    footnote: "Vain tiedoksi. Hoitohenkilökunta näyttää sinulle sopivan tekniikan.",
    views: {
      tract: "Virtsateiden yleiskuva",
      external: "Ulkoinen anatomia",
      profile: "Sivuprofiili",
      overview: "Virtsateiden yleiskuva",
      prostateNormal: "Normaali eturauhanen",
      prostateEnlarged: "Suurentunut eturauhanen",
    },
    compare: {
      heading: "Normaali ja suurentunut eturauhanen",
      note: "Suurentunut eturauhanen voi painaa virtsaputkea, jolloin kanava kapenee ja mutka jyrkkenee. Katetrointi voi tuntua tiukemmalta – älä koskaan työnnä katetria väkisin.",
    },
  },
  da: {
    button: "Urinvejenes anatomi",
    reference: "Se anatomisk reference",
    titles: { female: "Kvindelig urinvejsanatomi", male: "Mandlig urinvejsanatomi" },
    subtitles: { female: "Overblik til blærepleje", male: "Overblik til blærepleje" },
    intro:
      "Et enkelt overblik over urinvejene, så du forstår, hvor katetret føres ind, og hvorfor teknikken betyder noget.",
    labelsHeading: "Vigtige strukturer",
    labels: { male: maleTermsDa },
    femaleGroups: femaleGroupsDa,
    imagePending: "Illustration på vej",
    footnote:
      "Kun til information. Din sundhedsprofessionelle viser dig den teknik, der passer til din anatomi.",
    views: {
      tract: "Overblik over urinvejene",
      external: "Ydre anatomi",
      profile: "Sideprofil",
      overview: "Overblik over urinvejene",
      prostateNormal: "Normal prostata",
      prostateEnlarged: "Forstørret prostata",
    },
    compare: {
      heading: "Normal og forstørret prostata",
      note: "En forstørret prostata kan trykke på urinrøret, så kanalen bliver smallere og kurven kraftigere. Kateterisering kan føles strammere – tving aldrig katetret ind.",
    },
  },
  no: {
    button: "Urinveienes anatomi",
    reference: "Se anatomisk referanse",
    titles: { female: "Kvinnelig urinveisanatomi", male: "Mannlig urinveisanatomi" },
    subtitles: { female: "Oversikt for blærebehandling", male: "Oversikt for blærebehandling" },
    intro:
      "En enkel oversikt over urinveiene som hjelper deg å forstå hvor kateteret føres inn og hvorfor teknikken er viktig.",
    labelsHeading: "Viktige strukturer",
    labels: { male: maleTermsNo },
    femaleGroups: femaleGroupsNo,
    imagePending: "Illustrasjon kommer snart",
    footnote: "Kun til informasjon. Helsepersonell viser deg teknikken som passer din anatomi.",
    views: {
      tract: "Oversikt over urinveiene",
      external: "Ytre anatomi",
      profile: "Sideprofil",
      overview: "Oversikt over urinveiene",
      prostateNormal: "Normal prostata",
      prostateEnlarged: "Forstørret prostata",
    },
    compare: {
      heading: "Normal og forstørret prostata",
      note: "En forstørret prostata kan trykke på urinrøret slik at kanalen blir trangere og kurven brattere. Kateterisering kan kjennes trangere – tving aldri inn kateteret.",
    },
  },
};
