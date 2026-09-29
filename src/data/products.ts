import navinaMiniTubeVideo from "@/assets/navina-mini-with-extension-tube.mp4.asset.json";
import navinaMiniUsxVideo from "@/assets/navina-mini-usx-video.mp4.asset.json";
import navinaInsertVideo from "@/assets/navina-insert-step-by-step.mp4.asset.json";
import origoProVideo from "@/assets/lofric-origo-pro-step-by-step.mp4.asset.json";
import origoProLogo from "@/assets/lofric-origo-pro-logo.png.asset.json";
import elleProLogo from "@/assets/lofric-elle-pro-logo.png.asset.json";
import lofricLogoMark from "@/assets/lofric-logo-mark.png.asset.json";
import primoLogo from "@/assets/lofric-primo-logo.png.asset.json";
import hydroKitLogo from "@/assets/lofric-hydro-kit-logo.png.asset.json";
import origoLogo from "@/assets/lofric-origo-logo.png.asset.json";
import senseLogo from "@/assets/lofric-sense-logo.png.asset.json";
import elleLogo from "@/assets/lofric-elle-logo.png.asset.json";
import navinaMiniLogo from "@/assets/navina-mini-logo.png.asset.json";
import navinaInsertLogo from "@/assets/navina-insert-logo.png.asset.json";
import navinaClassicLogo from "@/assets/navina-classic-logo.png.asset.json";
import navinaSmartLogo from "@/assets/navina-smart-logo.png.asset.json";
import origoProCapDa from "@/assets/origo-pro-da.vtt.asset.json";
import origoProCapEn from "@/assets/origo-pro-en.vtt.asset.json";
import origoProCapFi from "@/assets/origo-pro-fi.vtt.asset.json";
import origoProCapNo from "@/assets/origo-pro-no.vtt.asset.json";
import origoProCapSv from "@/assets/origo-pro-sv.vtt.asset.json";
import classicVideo from "@/assets/lofric-classic-animation.mp4.asset.json";
import hydroKitVideo from "@/assets/lofric-hydro-kit-instruction-film.mp4.asset.json";
import origoCapDa from "@/assets/origo-da.vtt.asset.json";
import elleCapDa from "@/assets/elle-da.vtt.asset.json";
import elleProCapDa from "@/assets/elle-pro-da.vtt.asset.json";
import origoCapEn from "@/assets/origo-en.vtt.asset.json";
import elleCapEn from "@/assets/elle-en.vtt.asset.json";
import elleProCapEn from "@/assets/elle-pro-en.vtt.asset.json";
import origoCapFi from "@/assets/origo-fi.vtt.asset.json";
import elleCapFi from "@/assets/elle-fi.vtt.asset.json";
import elleProCapFi from "@/assets/elle-pro-fi.vtt.asset.json";
import origoCapNo from "@/assets/origo-no.vtt.asset.json";
import elleCapNo from "@/assets/elle-no.vtt.asset.json";
import elleProCapNo from "@/assets/elle-pro-no.vtt.asset.json";
import origoCapSv from "@/assets/origo-sv.vtt.asset.json";
import elleCapSv from "@/assets/elle-sv.vtt.asset.json";
import elleProCapSv from "@/assets/elle-pro-sv.vtt.asset.json";
import senseVideo from "@/assets/lofric-sense-animation.mp4.asset.json";
import smartVideo from "@/assets/navina-smart-step-by-step.mp4.asset.json";
import primoVideo from "@/assets/lofric-primo-animation.mp4.asset.json";
import elleProVideo from "@/assets/lofric-elle-pro-step-by-step.mp4.asset.json";
import elleVideo from "@/assets/lofric-elle-step-by-step.mp4.asset.json";
import navinaClassicVideo from "@/assets/navina-classic-animation.mp4.asset.json";
import origoVideo from "@/assets/lofric-origo-step-by-step.mp4.asset.json";
import type { LocaleCode } from "@/lib/locale";
import { classicIfu, elleProIfu, hydroKitIfu, origoIfu, primoIfu, senseIfu } from "@/data/ifu-copy";
import { navinaInsertIfu, navinaMiniIfu } from "@/data/ifu-navina";
import { navinaClassicIfu } from "@/data/ifu-navina-classic";
import { navinaSmartIfu } from "@/data/ifu-navina-smart";

export type CategoryId = "women" | "men" | "bowel" | "contact";

export type Localized = Record<LocaleCode, string>;

/** Optional WebVTT caption tracks per app language. */
export type Captions = Partial<Record<LocaleCode, string>>;

const origoCaptions: Captions = {
  da: origoCapDa.url,
  en: origoCapEn.url,
  fi: origoCapFi.url,
  no: origoCapNo.url,
  sv: origoCapSv.url,
};

const origoProCaptions: Captions = {
  da: origoProCapDa.url,
  en: origoProCapEn.url,
  fi: origoProCapFi.url,
  no: origoProCapNo.url,
  sv: origoProCapSv.url,
};

const elleCaptions: Captions = {
  da: elleCapDa.url,
  en: elleCapEn.url,
  fi: elleCapFi.url,
  no: elleCapNo.url,
  sv: elleCapSv.url,
};

const elleProCaptions: Captions = {
  da: elleProCapDa.url,
  en: elleProCapEn.url,
  fi: elleProCapFi.url,
  no: elleProCapNo.url,
  sv: elleProCapSv.url,
};

export const categoryLabels: Record<CategoryId, Localized> = {
  women: {
    en: "CIC – women",
    sv: "RIK – kvinnor",
    fi: "Toistokatetrointi – naiset",
    da: "RIK – kvinder",
    no: "RIK – kvinner",
  },
  men: {
    en: "CIC – men",
    sv: "RIK – män",
    fi: "Toistokatetrointi – miehet",
    da: "RIK – mænd",
    no: "RIK – menn",
  },
  bowel: {
    en: "Bowel care",
    sv: "Tarmskötsel",
    fi: "Suolen hallinta",
    da: "Tarmpleje",
    no: "Tarmomsorg",
  },
  contact: {
    en: "Contact information",
    sv: "Kontaktinformation",
    fi: "Yhteystiedot",
    da: "Kontaktoplysninger",
    no: "Kontaktinformasjon",
  },
};

export const categoryOrder: CategoryId[] = ["women", "men", "bowel", "contact"];

/**
 * An instruction step is either plain text, or an object that can carry an
 * optional short title and an optional illustration URL.
 */
export type LocalizedText = string | Localized;

export type InstructionStep =
  string | { text: LocalizedText; title?: LocalizedText; image?: string };

export const localizedText = (value: LocalizedText, locale: LocaleCode) =>
  typeof value === "string" ? value : value[locale];

export const stepText = (step: InstructionStep, locale: LocaleCode) =>
  typeof step === "string" ? step : localizedText(step.text, locale);
export const stepTitle = (step: InstructionStep, locale: LocaleCode) =>
  typeof step === "string" || !step.title ? undefined : localizedText(step.title, locale);
export const stepImage = (step: InstructionStep) =>
  typeof step === "string" ? undefined : step.image;

/** Shared LoFric Hydro-Kit quick guide steps (steps 7–9 differ female/male). */
const hydroKitShared = {
  s1: {
    en: "Wash your hands thoroughly with soap and water.",
    sv: "Tvätta händerna ordentligt med tvål och vatten.",
    fi: "Pese kätesi huolellisesti vedellä ja saippualla.",
    da: "Vask hænderne grundigt med sæbe og vand.",
    no: "Vask hendene grundig med såpe og vann.",
  },
  s2: {
    en: "Hold the product upright. Fold the sachet and squeeze. Let the salt solution run down to the catheter.",
    sv: "Håll katetern upprätt. Vik påsen med saltlösningen och tryck ihop. Låt saltlösningen rinna ned till katetern.",
    fi: "Pidä tuote pystyasennossa. Taita nestetyynyä ja purista. Anna suolaliuoksen valua alas katetriin.",
    da: "Hold produktet opret. Fold posen med saltvand, og klem. Lad saltvandet løbe ned til kateteret.",
    no: "Hold produktet oppreist. Brett saltvannsposen og klem. La saltvannet renne ned til kateteret.",
  },
  s3: {
    en: "Turn the product upside down to allow the salt solution to drain into the collection bag.",
    sv: "Vänd katetern upp och ned så att saltlösningen rinner ned i urinuppsamlingspåsen.",
    fi: "Käännä tuote ylösalaisin ja anna suolaliuoksen valua keräyspussiin.",
    da: "Vend produktet på hovedet, så saltvandet løber ned i opsamlingsposen.",
    no: "Snu produktet opp ned slik at saltvannet renner ned i oppsamlingsposen.",
  },
  s4: {
    en: 'Use loops at indentation "A" to open and uncover the tip of the catheter.',
    sv: "Använd öglorna vid fliken ”A” för att öppna och frigöra kateterspetsen.",
    fi: "Repäise lenkkien avulla kohdasta ”A” paljastaaksesi katetrin kärkiosan.",
    da: "Brug løkkerne ved indhakket ”A” til at åbne og blotlægge kateterets spids.",
    no: "Bruk løkkene ved hakket «A» for å åpne og frilegge kateterspissen.",
  },
  s5: {
    en: 'Use loops at indentation "B/C" to open. Use section "B" as insertion grip.',
    sv: "Använd öglorna vid fliken ”B/C” för att öppna. Använd del ”B” som införingshjälpmedel.",
    fi: "Käytä avaamiseen lenkkejä kohdassa “B/C”. Käytä pakkauksen osaa “B” asettimena.",
    da: "Brug løkkerne ved indhakket ”B/C” til at åbne. Brug del ”B” som indføringsgreb.",
    no: "Bruk løkkene ved hakket «B/C» for å åpne. Bruk del «B» som innføringsgrep.",
  },
  s6: {
    en: "Gently pull the catheter out of the package until the funnel comes to a stop, to seal between catheter and collection bag.",
    sv: "För att försluta mellan katetern och urinuppsamlingspåsen, dra försiktigt ut katetern ur förpackningen tills konnektorn kommer till ett stopp.",
    fi: "Vedä katetria varovasti ulos pakkauksesta, kunnes liitinkartio lukkiutuu paikoilleen varmistaen pitävän liitoksen katetrin ja keräyspussin välillä.",
    da: "Træk forsigtigt kateteret ud af emballagen, indtil tragten stopper, så der tætnes mellem kateter og opsamlingspose.",
    no: "Trekk kateteret forsiktig ut av pakningen til trakten stopper, slik at det tetter mellom kateter og oppsamlingspose.",
  },
  s9: {
    en: "When the urine flow stops, slowly withdraw the catheter a little bit. If urine starts to flow again, wait until it has stopped to ensure complete bladder emptying. Then remove the catheter completely.",
    sv: "När urinflödet avtar, drar du långsamt ut katetern. Om urinen börjar rinna igen ska du vänta tills den har slutat för att säkerställa fullständig tömning av blåsan. Dra sedan ut katetern helt.",
    fi: "Kun virtsaa ei enää valu katetrista, vedä katetria hitaasti ulos. Jos virtsa alkaa valua uudelleen, odota kunnes virtsan tulo lakkaa varmistaaksesi, että virtsarakko on täysin tyhjä. Vedä sitten katetri kokonaan ulos.",
    da: "Når urinstrømmen stopper, trækkes kateteret langsomt lidt ud. Hvis urinen begynder at løbe igen, vent til den er stoppet, så blæren tømmes helt. Fjern derefter kateteret helt.",
    no: "Når urinstrømmen stopper, trekk kateteret sakte litt ut. Hvis urinen begynner å renne igjen, vent til den har stoppet slik at blæren tømmes helt. Fjern deretter kateteret helt.",
  },
  s10: {
    en: "Push the catheter back into the collection bag.",
    sv: "För tillbaka katetern ned i urinuppsamlingspåsen.",
    fi: "Työnnä katetri takaisin keräyspussiin.",
    da: "Skub kateteret tilbage i opsamlingsposen.",
    no: "Skyv kateteret tilbake i oppsamlingsposen.",
  },
  s11: {
    en: "Before disposal, empty the bag through the neck, or tie a knot to seal the bag and tear at the indentation. Dispose appropriately (local regulations may vary).",
    sv: "Innan du tömmer urinuppsamlingspåsen så knyt en knut på påsen. Riv sedan av vid fliken för att tömma påsen på urin. Släng som brännbart hushållsavfall.",
    fi: "Ennen kuin heität tuotteen roskiin, tyhjennä pussi sen kaulan kautta tai solmi pussin suu ja tyhjennä pussi repäisykohdan kautta. Voit myös solmia pussin ja hävittää sen sellaisenaan.",
    da: "Tøm posen gennem halsen før bortskaffelse, eller bind en knude for at lukke posen, og riv ved indhakket. Bortskaf korrekt (lokale regler kan variere).",
    no: "Tøm posen gjennom halsen før kassering, eller knyt en knute for å lukke posen og riv ved hakket. Kasser på egnet måte (lokale regler kan variere).",
  },
};

const hydroKitSteps = (dir: string, mid: Localized[]): InstructionStep[] =>
  [
    hydroKitShared.s1,
    hydroKitShared.s2,
    hydroKitShared.s3,
    hydroKitShared.s4,
    hydroKitShared.s5,
    hydroKitShared.s6,
    ...mid,
    hydroKitShared.s10,
    hydroKitShared.s11,
  ].map((text, i) => ({
    text,
    image: `/images/instructions/${dir}/step-${i + 1}.png`,
  }));

/**
 * Shared Tiemann/Coudé curved-tip guidance steps.
 * Optional Swedish overrides apply only to the caller (Hydro-Kit), not LoFric Classic.
 */
const tiemannSteps = (dir: string, sv?: [string, string]): InstructionStep[] =>
  [
    {
      en: "Note where the marker on the funnel is in relation to the curved catheter tip before inserting the catheter. It will guide you keeping the curved tip in the right direction during use.",
      sv: "Notera var markeringen på tratten sitter i förhållande till kateterns böjda spets innan du för in katetern. Den hjälper dig att hålla den böjda spetsen i rätt riktning under användningen.",
      fi: "Huomaa kartiossa oleva merkki suhteessa kärkeen, kun viet katetria sisään virtsaputkeen. Se ohjaa pitämään katetrin kaarevan kärjen oikeassa suunnassa katetroinnin aikana.",
      da: "Læg mærke til, hvor markeringen på tragten er i forhold til kateterets buede spids, før kateteret føres ind. Den hjælper dig med at holde den buede spids i den rigtige retning under brug.",
      no: "Merk deg hvor markøren på trakten er i forhold til den buede kateterspissen før du fører inn kateteret. Den hjelper deg å holde den buede spissen i riktig retning under bruk.",
    },
    {
      en: "Keep the curved tip upwards towards the stomach during insertion and throughout catheterization, including withdrawal. Or follow specific instructions given by your healthcare professional.",
      sv: "Håll den böjda spetsen uppåt mot magen vid införandet och under hela kateteriseringen, även när katetern dras ut. Eller följ särskilda instruktioner från din vårdgivare.",
      fi: "Pidä kaareva kärki kasvoihin päin/ylöspäin sisäänviennin ja koko katetroinnin ajan, katetrin poistaminen mukaan lukien. Vaihtoehtoisesti noudata terveydenhuollon ammattilaisen antamia erityisohjeita.",
      da: "Hold den buede spids opad mod maven under indføring og gennem hele kateteriseringen, også når kateteret trækkes ud. Eller følg de specifikke anvisninger fra din sundhedsprofessionelle.",
      no: "Hold den buede spissen oppover mot magen under innføring og gjennom hele kateteriseringen, også ved uttrekking. Eller følg spesifikke instruksjoner fra helsepersonell.",
    },
  ].map((text, i) => ({
    text: sv?.[i] ? { ...text, sv: sv[i] ?? text.sv } : text,
    image: `/images/instructions/${dir}/tiemann-${i + 1}.png`,
  }));

/** Shared classic LoFric quick guide steps (steps 6–9 differ female/male). */
const classicShared = {
  s1: {
    en: "Wash your hands with soap and water before catheterization.",
    sv: "Tvätta händerna med tvål och vatten före kateteriseringen.",
    fi: "Pese kädet vedellä ja saippualla ennen katetrointia.",
    da: "Vask hænderne med sæbe og vand før kateterisering.",
    no: "Vask hendene med såpe og vann før kateterisering.",
  },
  s2: {
    en: "To open, peel the tabs on the funnel side of the package.",
    sv: "Öppna genom att dra isär flikarna på förpackningens trattsida.",
    fi: "Avaa vetämällä pakkauksen kartiopään avausliuskoista.",
    da: "Åbn ved at trække flapperne på emballagens tragtside fra hinanden.",
    no: "Åpne ved å trekke fra hverandre flikene på traktsiden av pakningen.",
  },
  s3: {
    en: "Fill the package with water, at home from the cold tap and in hospital with steril water or saline. Soak the catheter for at least 30 seconds before use.",
    sv: "Fyll förpackningen med vatten – hemma från kallvattenkranen och på sjukhus med sterilt vatten eller koksaltlösning. Låt katetern ligga i vattnet i minst 30 sekunder före användning.",
    fi: "Täytä pakkaus puhtaalla vedellä, kotona vesijohtovedellä ja sairaalassa steriilillä vedellä tai suolaliuoksella. Liota katetria 30 sekuntia ennen käyttöä.",
    da: "Fyld emballagen med vand – hjemme fra den kolde hane og på hospitalet med sterilt vand eller saltvand. Lad kateteret ligge i blød i mindst 30 sekunder før brug.",
    no: "Fyll pakningen med vann – hjemme fra kaldtvannskranen og på sykehus med sterilt vann eller saltvann. La kateteret ligge i vannet i minst 30 sekunder før bruk.",
  },
  s4: {
    en: "Whilst preparing yourself for catheterization, you can remove the sticker and use the self-adhesive tape to attach the product to a dry surface.",
    sv: "Medan du förbereder dig för kateteriseringen kan du ta bort dekalen och använda den självhäftande tejpen för att fästa produkten på en torr yta.",
    fi: "Kun valmistaudut katetrointiin, irrota suojapaperi ja kiinnitä tuote tarraliuskalla kuivaan pintaan.",
    da: "Mens du forbereder dig til kateteriseringen, kan du fjerne mærkaten og bruge den selvklæbende tape til at fastgøre produktet på en tør overflade.",
    no: "Mens du forbereder deg til kateteriseringen, kan du fjerne klistremerket og bruke den selvklebende tapen til å feste produktet på en tørr flate.",
  },
  s5: {
    en: "Take out the catheter.",
    sv: "Ta ut katetern.",
    fi: "Ota katetri pakkauksesta.",
    da: "Tag kateteret ud.",
    no: "Ta ut kateteret.",
  },
  dispose: {
    en: "Put the catheter back in the package and dispose appropriately (local regulations may vary).",
    sv: "Lägg tillbaka katetern i förpackningen och kassera den på lämpligt sätt (lokala regler kan variera).",
    fi: "Aseta katetri takaisin pakkaukseen ja hävitä se asianmukaisesti (paikalliset määräykset voivat vaihdella).",
    da: "Læg kateteret tilbage i emballagen, og bortskaf det korrekt (lokale regler kan variere).",
    no: "Legg kateteret tilbake i pakningen og kasser det på egnet måte (lokale regler kan variere).",
  },
  withdraw: {
    en: "When the urine flow stops, slowly withdraw the catheter a little bit. If urine starts to flow again, wait until it has stopped to ensure complete bladder emptying. Then remove the catheter completely.",
    sv: "När urinflödet upphör, dra ut katetern långsamt en liten bit. Om urinen börjar rinna igen, vänta tills den har slutat så att blåsan töms helt. Ta sedan bort katetern helt.",
    fi: "Kun virtsan tulo lakkaa, vedä katetria hitaasti hiukan ulospäin. Jos virtsaa alkaa valua uudelleen, odota virtsan tulon loppumista, jotta varmistat virtsarakon täydellisen tyhjenemisen. Poista sitten katetri.",
    da: "Når urinstrømmen stopper, trækkes kateteret langsomt lidt ud. Hvis urinen begynder at løbe igen, vent til den er stoppet, så blæren tømmes helt. Fjern derefter kateteret helt.",
    no: "Når urinstrømmen stopper, trekk kateteret sakte litt ut. Hvis urinen begynner å renne igjen, vent til den har stoppet slik at blæren tømmes helt. Fjern deretter kateteret helt.",
  },
};

const classicSteps = (dir: string, mid: Localized[]): InstructionStep[] =>
  [
    classicShared.s1,
    classicShared.s2,
    classicShared.s3,
    classicShared.s4,
    classicShared.s5,
    ...mid,
    classicShared.withdraw,
    classicShared.dispose,
  ].map((text, i) => ({
    text,
    image: `/images/instructions/${dir}/step-${i + 1}.png`,
  }));

export type Product = {
  id: string;
  brand: "LoFric" | "Navina" | "Wellspect";
  name: string;
  spec: string;
  category: CategoryId;
  /**
   * Markets where this product is not sold. Omitted means it is available
   * in every locale. Listing, search, counts, and the product page all
   * honor this through `isProductAvailable`.
   */
  unavailableLocales?: LocaleCode[];
  nordicEcolabel: boolean;
  /** Official product photo URL (CDN asset). Optional. */
  image?: string;
  /** Official product wordmark/logo URL (CDN asset). Optional. */
  logo?: string;
  /** Optional instructional video (CDN asset URL) shown in the "How to use" tab. */
  videoUrl?: string;
  /** Optional override title for the instructional video. */
  videoTitle?: string;
  /** Optional WebVTT caption tracks keyed by app language. */
  captions?: Captions;
  /** Optional selectable video variants (shown as pills above the player). */
  videos?: { label: LocalizedText; url?: string }[];
  /** Optional extra guidance card shown with the illustrated step checklist. */
  extraGuide?: {
    title: LocalizedText;
    intro?: LocalizedText;
    steps: InstructionStep[];
  };
  summary: Localized;
  indications: LocalizedText[];
  instructions: InstructionStep[];
  safety: LocalizedText[];
  contraindicationsIntro?: LocalizedText;
  contraindications: LocalizedText[];
  warningSigns: LocalizedText[];
  emergencyWarning?: LocalizedText;
  storage: LocalizedText;
};

/** True when a product has illustrated quick-guide steps (or an extra illustrated guide). */
export const hasImageGuide = (product: Product) =>
  product.instructions.some((step) => Boolean(stepImage(step))) ||
  Boolean(product.extraGuide?.steps.some((step) => Boolean(stepImage(step))));

/**
 * Keep the existing English line for Danish and Norwegian.
 * Swedish stays English unless a sheet translation is passed.
 */
const withFi = (en: string, fi: string, sv: string = en): Localized => ({
  en,
  sv,
  da: en,
  no: en,
  fi,
});

/** Danish from the Navina Insert sheet. Other locales keep the English line. */
const withDa = (en: string, da: string): Localized => ({
  en,
  sv: en,
  fi: en,
  no: en,
  da,
});

/** Swedish from the Origo Pro sheet. Danish and Norwegian keep the English line. */
const withSv = (en: string, sv: string, fi: string): Localized => ({
  en,
  sv,
  da: en,
  no: en,
  fi,
});

const optionalTitle: Localized = {
  en: "OPTIONAL",
  sv: "Valfritt:",
  da: "OPTIONAL",
  no: "OPTIONAL",
  fi: "VALINNAINEN:",
};

/**
 * LoFric Origo male guide. Illustrations are shared across languages.
 * Swedish follows the sheet. The sheet’s lift and insert drawing is one card,
 * so those two existing lines are joined. Disposal is step 9 on the sheet.
 * Danish and Norwegian keep the English line. Finnish keeps existing wording.
 */
const origoSteps: InstructionStep[] = [
  {
    text: withFi(
      "Wash your hands thoroughly with soap and water.",
      "Pese kätesi huolellisesti vedellä ja saippualla.",
      "Tvätta händerna ordentligt med tvål och vatten.",
    ),
    image: "/images/instructions/lofric-origo/step-1.png",
  },
  {
    text: withFi(
      "Press to release the salt solution and the catheter is ready to use.",
      "Aktivoi katetri puristamalla suolaliuosta sisältävää nestetyynyä. Tämän jälkeen katetri on käyttövalmis.",
      "Kläm sönder behållaren med saltlösning för att aktivera katetern. Sedan är katetern klar att användas.",
    ),
    image: "/images/instructions/lofric-origo/step-2.png",
  },
  {
    text: withFi(
      "Pull the tab down to open.",
      "Vedä avausliuskasta avataksesi pakkauksen.",
      "Dra ner remsan för att öppna.",
    ),
    image: "/images/instructions/lofric-origo/step-3.png",
  },
  {
    title: withFi("OPTIONAL", "VALINNAINEN:", "VALFRITT:"),
    text: withFi(
      "Use the adhesive tab on the reverse side to attach the product to a dry, clean surface.",
      "Kiinnitä pakkaus kuivalle ja puhtaalle pinnalle pakkauksen takaosassa olevalla tarralapulla.",
      "Använd klisterfliken på baksidan för att fästa förpackningen på en torr och ren yta.",
    ),
    image: "/images/instructions/lofric-origo/step-4.png",
  },
  {
    text: withFi(
      "Take out the catheter. OPTIONAL: Pull and adjust the Insertion Grip located on the funnel, to control insertion without having to touch the catheter tube.",
      "Ota katetri pakkauksesta. VALINNAINEN: Käytä liikuteltavaa asetinta, joka takaa paremman otteen ilman, että katetrin letkuosaan tarvitsee koskea paljain käsin.",
      "Ta ut katetern. VALFRITT: Greppa det rörliga handtaget intill konnektorn och justera för att kontrollera införandet utan att behöva ta på katetern.",
    ),
    image: "/images/instructions/lofric-origo/step-5.png",
  },
  {
    text: withFi(
      "Lift the penis towards the stomach to straighten the urethra. Slowly insert the catheter into the urethra. When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
      "Nosta penistä ylöspäin vatsaa kohti. Tässä asennossa virtsaputki pitenee ja muuttuu U-muotoiseksi. Tämä helpottaa katetrin ohjaamista virtsarakkoon. Vie katetri hitaasti virtsaputkeen. Kun virtsaa alkaa valua, työnnä katetria vielä hiukan pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat sisällä virtsarakossa.",
      "Lyft penis upp mot magen. I denna position förlängs urinröret och blir U-format. Detta gör det lättare att styra katetern in i urinblåsan. För långsamt in katetern i urinröret. När urinen börjar rinna för in katetern något längre för att säkerställa att båda kateterögonen är inne i urinblåsan.",
    ),
    image: "/images/instructions/lofric-origo/step-6.png",
  },
  {
    text: withFi(
      "Angle the penis down as urine begins to flow through the catheter.",
      "Laske penis normaaliasentoon, kun virtsaa alkaa valua katetrin kautta.",
      "För ner penis i normalt läge igen, när urinen börjar rinna genom katetern.",
    ),
    image: "/images/instructions/lofric-origo/step-7.png",
  },
  {
    text: withFi(
      "When the urine flow stops, slowly withdraw the catheter a little bit. If urine starts to flow again, wait until it has stopped to ensure complete bladder emptying. Then remove the catheter completely.",
      "Kun virtsaa ei enää valu katetrista, vedä katetria hitaasti ulos. Jos virtsa alkaa valua uudelleen, odota kunnes virtsan tulo lakkaa varmistaaksesi, että virtsarakko on täysin tyhjä. Vedä sitten katetri kokonaan ulos.",
      "När urinflödet avtar drar du långsamt tillbaka katetern en liten bit. Om urinen börjar rinna igen, vänta tills det har slutat för att säkerställa fullständig tömning av urinblåsan. Dra sedan ut katetern helt.",
    ),
    image: "/images/instructions/lofric-origo/step-8.png",
  },
  {
    text: withFi(
      "Put the catheter back in the package and dispose appropriately (local regulations may vary).",
      "Aseta katetri takaisin pakkaukseen ja hävitä se asianmukaisesti (paikalliset määräykset voivat vaihdella).",
      "Lägg tillbaka katetern i förpackningen och släng som brännbart hushållsavfall.",
    ),
    image: "/images/instructions/lofric-origo/step-9.png",
  },
];

/**
 * LoFric Origo Pro male guide. Illustrations are shared across languages.
 * Swedish follows the sheet. English, Danish, Norwegian, and Finnish keep
 * existing wording, split or joined so each picture has a matching step.
 * The sheet’s storage tip (A) is not a numbered step, so it is omitted.
 */
const origoProSteps: InstructionStep[] = [
  {
    text: withSv(
      "Wash your hands thoroughly with soap and water.",
      "Tvätta händerna ordentligt med tvål och vatten.",
      "Pese kätesi huolellisesti vedellä ja saippualla.",
    ),
    image: "/images/instructions/lofric-origo-pro/step-1.png",
  },
  {
    text: withSv(
      "Press to release the salt solution and the catheter is ready to use.",
      "Kläm på påsen med saltlösningen så att vattnet rinner ut. Sedan är katetern färdig att användas.",
      "Aktivoi katetri puristamalla suolaliuosta sisältävää nestetyynyä. Tämän jälkeen katetri on käyttövalmis.",
    ),
    image: "/images/instructions/lofric-origo-pro/step-2.png",
  },
  {
    text: withSv(
      "Pull the tab down to open.",
      "Använd öglan för att dra ner och öppna.",
      "Vedä avausliuskasta avataksesi pakkauksen.",
    ),
    image: "/images/instructions/lofric-origo-pro/step-3.png",
  },
  {
    title: optionalTitle,
    text: withSv(
      "Use the adhesive tab on the reverse side to attach the product to a dry, clean surface.",
      "Använd klisterfliken på baksidan för att fästa produkten på en torr och ren yta.",
      "Kiinnitä pakkaus kuivalle ja puhtaalle pinnalle pakkauksen takaosassa olevalla tarralapulla.",
    ),
    image: "/images/instructions/lofric-origo-pro/step-4.png",
  },
  {
    text: withSv(
      "Take out the catheter.",
      "Efter öppning, nyp försiktigt och håll i hylsgreppet för att automatiskt dra ner skyddshylsan när katetern tas ut. Använd skyddshylsan för att kontrollera införandet utan att behöva röra katetern.",
      "Ota katetri pakkauksesta.",
    ),
    image: "/images/instructions/lofric-origo-pro/step-5a.png",
  },
  {
    title: optionalTitle,
    text: withSv(
      "Pull and adjust the Insertion Grip located on the funnel, to control insertion without having to touch the catheter tube.",
      "Ta ut katetern. Dra ner hylsgreppet för att täcka katetern. Använd skyddshylsan för att kontrollera införandet utan att behöva röra katetern.",
      "Käytä liikuteltavaa asetinta, joka takaa paremman otteen ilman, että katetrin letkuosaan tarvitsee koskea paljain käsin.",
    ),
    image: "/images/instructions/lofric-origo-pro/step-5b.png",
  },
  {
    text: withSv(
      "Lift the penis towards the stomach to straighten the urethra. Slowly insert the catheter into the urethra. When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
      "Lyft penis mot magen för att räta ut urinröret. För långsamt in katetern i urinröret. När urinen börjar rinna ska du föra in katetern något längre för att säkerställa att bra flöde.",
      "Nosta penistä ylöspäin vatsaa kohti. Tässä asennossa virtsaputki pitenee ja muuttuu U-muotoiseksi. Tämä helpottaa katetrin ohjaamista virtsarakkoon. Vie katetri hitaasti virtsaputkeen. Kun virtsaa alkaa valua, työnnä katetria vielä hiukan pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat sisällä virtsarakossa.",
    ),
    image: "/images/instructions/lofric-origo-pro/step-6.png",
  },
  {
    text: withSv(
      "Angle the penis down as urine begins to flow through the catheter.",
      "Vinkla penis nedåt när urinen börjar rinna genom katetern.",
      "Laske penis normaaliasentoon, kun virtsaa alkaa valua katetrin kautta.",
    ),
    image: "/images/instructions/lofric-origo-pro/step-7.png",
  },
  {
    text: withSv(
      "When the urine flow stops, slowly withdraw the catheter a little bit. If urine starts to flow again, wait until it has stopped to ensure complete bladder emptying. Then remove the catheter completely.",
      "Vänta tills urinflödet upphör för att säkerställa fullständig tömning av blåsan. Dra långsamt ut katetern. Ta sedan bort katetern helt.",
      "Kun virtsaa ei enää valu katetrista, vedä katetria hitaasti ulos. Jos virtsa alkaa valua uudelleen, odota kunnes virtsan tulo lakkaa varmistaaksesi, että virtsarakko on täysin tyhjä. Vedä sitten katetri kokonaan ulos.",
    ),
    image: "/images/instructions/lofric-origo-pro/step-8.png",
  },
  {
    text: withSv(
      "Put the catheter back in the package and dispose appropriately (local regulations may vary).",
      "Lägg tillbaka katetern i förpackningen och kassera på lämpligt sätt (lokala bestämmelser kan variera).",
      "Aseta katetri takaisin pakkaukseen ja hävitä se asianmukaisesti (paikalliset määräykset voivat vaihdella).",
    ),
    image: "/images/instructions/lofric-origo-pro/step-9.png",
  },
];

export const products: Product[] = [
  {
    id: "lofric-elle-pro",
    logo: elleProLogo.url,
    videoUrl: elleProVideo.url,
    captions: elleProCaptions,
    brand: "LoFric",
    name: "LoFric Elle Pro",
    spec: "CH 8–14 · 15 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-elle-pro.png",
    summary: {
      en: "LoFric® Elle™ Pro, designed for women by women, is a hydrophilic intermittent catheter. Introducing twelve smooth Pro eyelets developed to further simplify catheterisation, LoFric® Elle™ Pro is designed to allow for bladder emptying in one free flow, without the need for repositioning.",
      sv: "LoFric® Elle™ Pro, designad för kvinnor av kvinnor, är en hydrofil intermittent kateter. Med tolv släta Pro-ögon utvecklade för att ytterligare förenkla kateteriseringen är LoFric® Elle™ Pro utformad så att blåsan kan tömmas i ett fritt flöde, utan behov av ompositionering.",
      fi: "LoFric® Elle™ Pro on naisten suunnittelema hydrofiilinen toistokatetri naisille. Kahdentoista sileän Pro-silmän ansiosta, jotka on kehitetty helpottamaan katetrointia entisestään, LoFric® Elle™ Pro on suunniteltu mahdollistamaan rakon tyhjentäminen yhdellä vapaalla virtauksella ilman uudelleenasettelua.",
      da: "LoFric® Elle™ Pro, designet til kvinder af kvinder, er et hydrofilt intermittent kateter. Med tolv glatte Pro-øjne udviklet til yderligere at forenkle kateteriseringen er LoFric® Elle™ Pro designet til at tømme blæren i ét frit flow, uden behov for omplacering.",
      no: "LoFric® Elle™ Pro, designet for kvinner av kvinner, er et hydrofilt intermittent kateter. Med tolv glatte Pro-øyne utviklet for å forenkle kateteriseringen ytterligere er LoFric® Elle™ Pro designet for å tømme blæren i én fri strøm, uten behov for omplassering.",
    },
    indications: elleProIfu.indications,
    instructions: [
      {
        text: withFi(
          "Wash your hands thoroughly with soap and water.",
          "Pese kätesi huolellisesti vedellä ja saippualla.",
        ),
        image: "/images/instructions/lofric-elle-pro/step-1.png",
      },
      {
        text: withFi("Open the upper lid.", "Avaa korkki."),
        image: "/images/instructions/lofric-elle-pro/step-2.png",
      },
      {
        text: withFi(
          "Hold the catheter in your hand and gently bend the upper part to open. Pull the catheter out.",
          "Käytä molempia käsiä ja taivuta avataksesi. Vedä katetri ulos.",
        ),
        image: "/images/instructions/lofric-elle-pro/step-3.png",
      },
      {
        text: withFi(
          "Connect the container to the catheter with a gentle twist, make sure the arrow on the container points down.",
          "Kierrä nestesäiliö kiinni katetriin umpinainen pohja alaspäin - varmista, että nuoli osoittaa alaspäin.",
        ),
        image: "/images/instructions/lofric-elle-pro/step-4.png",
      },
      {
        text: withFi(
          "Tilt your pelvis upwards, spread the labia, lift slightly to locate the urethra. The urethra is located just above the vaginal opening. With the other hand, insert the catheter slowly into your urethral opening until urine starts to flow, insert slightly more to ensure a steady stream. Wait until urine flow stops, then slowly withdraw the catheter.",
          "Kallista lantiota hieman ylöspäin ja levitä häpyhuulet. Virtsaputken suuaukko sijaitsee aivan emättimen suuaukon yläpuolella. Pidä kahvasta kiinni dominoivalla kädelläsi. Ohjaa katetri virtsaputkeen. Kun virtsa alkaa virrata, työnnä hieman lisää varmistaaksesi tasaisen virtauksen. Odota, kunnes virtsan virtaus loppuu ja vedä sitten katetri hitaasti ulos.",
        ),
        image: "/images/instructions/lofric-elle-pro/step-5.png",
      },
      {
        text: withFi(
          "Put the catheter back inside the container. Dispose, or carry it in your bag until disposal. Please note! The container is recyclable.",
          "Laita katetri takaisin säiliöön. Hävitä se asianmukaisesti tai kuljeta mukanasi, kunnes voit hävittää sen. Säiliö on kierrätettävissä muovijätteenä.",
        ),
        image: "/images/instructions/lofric-elle-pro/step-6.png",
      },
    ],
    safety: elleProIfu.safety,
    contraindications: elleProIfu.contraindications,
    warningSigns: elleProIfu.warningSigns,
    storage: elleProIfu.storage,
  },
  {
    id: "lofric-elle",
    videoUrl: elleVideo.url,
    captions: elleCaptions,
    brand: "LoFric",
    name: "LoFric Elle",
    logo: elleLogo.url,
    spec: "CH 8–14 · 15 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-elle.png",
    summary: {
      en: "LoFric® Elle™, designed for women by women, is a hydrophilic intermittent catheter. Its unique ergonomic design allows the container to become an angulated handle when connected to the catheter.",
      sv: "LoFric® Elle™, designad för kvinnor av kvinnor, är en hydrofil intermittent kateter. Den unika ergonomiska designen gör att behållaren blir ett vinklat handtag när den kopplas till katetern.",
      fi: "LoFric® Elle™ on naisten suunnittelema hydrofiilinen toistokatetri naisille. Ainutlaatuisen ergonomisen muotoilun ansiosta pakkaus muuttuu kulmakahvaksi, kun se liitetään katetriin.",
      da: "LoFric® Elle™, designet til kvinder af kvinder, er et hydrofilt intermittent kateter. Det unikke ergonomiske design gør, at beholderen bliver et vinklet håndtag, når den tilsluttes kateteret.",
      no: "LoFric® Elle™, designet for kvinner av kvinner, er et hydrofilt intermittent kateter. Den unike ergonomiske designen gjør at beholderen blir et vinklet håndtak når den kobles til kateteret.",
    },
    indications: elleProIfu.indications,
    instructions: [
      {
        text: withFi(
          "Wash your hands thoroughly with soap and water.",
          "Wash your hands thoroughly with soap and water.",
          "Tvätta händerna ordentligt med tvål och vatten.",
        ),
        image: "/images/instructions/lofric-elle/step-1.png",
      },
      {
        text: withFi(
          "Open the upper lid.",
          "Open the upper lid.",
          "Öppna det övre sterila barriärlocket.",
        ),
        image: "/images/instructions/lofric-elle/step-2.png",
      },
      {
        text: withFi(
          "Hold the catheter in your hand and gently bend the upper part to open. Pull the catheter out.",
          "Hold the catheter in your hand and gently bend the upper part to open. Pull the catheter out.",
          "Greppa katetern och böj försiktigt den övre delen för att öppna. Drag ut katetern. Töm ut den resterande vätskan från behållaren (i toaletten eller handfatet).",
        ),
        image: "/images/instructions/lofric-elle/step-3.png",
      },
      {
        text: withFi(
          "Connect the container to the catheter with a gentle twist, make sure the arrow on the container points down.",
          "Connect the container to the catheter with a gentle twist, make sure the arrow on the container points down.",
          "ALTERNATIV: Katetern kan användas med eller utan handtaget. Handtaget ger ökad räckvidd och mer hygienisk kateterisering. Fäst handtaget på katetern med ett klick, kontrollera att pilen på handtaget pekar mot katetern.",
        ),
        image: "/images/instructions/lofric-elle/step-4.png",
      },
      {
        text: withFi(
          "Tilt your pelvis upwards, spread the labia, lift slightly to locate the urethra. The urethra is located just above the vaginal opening. With the other hand, insert the catheter slowly into your urethral opening, until urine starts to flow, insert slightly more to ensure both eyelets are inside the bladder. When the urine flow slows to a drip, withdraw the catheter slowly. If urine starts to flow again, stop the withdrawal process and wait until the urine flow stops, to ensure complete bladder emptying.",
          "Tilt your pelvis upwards, spread the labia, lift slightly to locate the urethra. The urethra is located just above the vaginal opening. With the other hand, insert the catheter slowly into your urethral opening, until urine starts to flow, insert slightly more to ensure both eyelets are inside the bladder. When the urine flow slows to a drip, withdraw the catheter slowly. If urine starts to flow again, stop the withdrawal process and wait until the urine flow stops, to ensure complete bladder emptying.",
          "Luta ditt bäcken framåt, sära på blygdläpparna, dra dem försiktigt uppåt, urinröret ligger strax ovanför vaginalöppningen. Med andra handen, för katetern långsamt in i urinrörsöppningen, tills urin börjar rinna, för in den lite längre för att säkerställa att båda kateterögonen befinner sig i urinblåsan. När urinflödet avtar till droppar, dra ut katetern långsamt. Om urin börjar rinna igen, vänta tills urinflödet upphör, för att säkerställa fullständig tömning av urinblåsan.",
        ),
        image: "/images/instructions/lofric-elle/step-5.png",
      },
      {
        text: withFi(
          "Put the catheter back inside the container. Dispose, or carry it in your bag until disposal. Please note! The container is recyclable.",
          "Put the catheter back inside the container. Dispose, or carry it in your bag until disposal. Please note! The container is recyclable.",
          "Sätt tillbaka katetern i den nedre behållaren. Kassera eller förvara den i din väska tills du kan slänga den. Vänligen notera! Behållaren är återvinningsbar som plastförpackning.",
        ),
        image: "/images/instructions/lofric-elle/step-6.png",
      },
    ],

    safety: elleProIfu.safety,
    contraindications: elleProIfu.contraindications,
    warningSigns: elleProIfu.warningSigns,
    storage: elleProIfu.storage,
  },
  {
    id: "lofric-sense",
    logo: senseLogo.url,
    videoUrl: senseVideo.url,
    brand: "LoFric",
    name: "LoFric Sense",
    spec: "CH 8–14 · 15 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-sense.png",
    summary: {
      en: "LoFric® Sense™ is a hydrophilic intermittent catheter, tailor-made for women and their needs.",
      sv: "LoFric® Sense™ är en hydrofil intermittent kateter, skräddarsydd för kvinnor och deras behov.",
      fi: "LoFric® Sense™ on hydrofiilinen toistokatetri, räätälöity naisille ja heidän tarpeisiinsa.",
      da: "LoFric® Sense™ er et hydrofilt intermittent kateter, skræddersyet til kvinder og deres behov.",
      no: "LoFric® Sense™ er et hydrofilt intermittent kateter, skreddersydd for kvinner og deres behov.",
    },
    indications: senseIfu.indications,
    instructions: [
      {
        text: withFi(
          "Wash your hands thoroughly with soap and water.",
          "Pese kätesi huolellisesti vedellä ja saippualla.",
          "Tvätta händerna ordentligt med tvål och vatten.",
        ),
        image: "/images/instructions/lofric-sense/step-1.png",
      },
      {
        text: withFi(
          "Press to release the salt solution and the catheter is ready to use.",
          "Aktivoi katetri puristamalla suolaliuosta sisältävää nestetyynyä. Katetri on tämän jälkeen käyttövalmis.",
          "Kläm sönder behållaren med saltlösning för att aktivera katetern. Sedan är katetern klar att användas.",
        ),
        image: "/images/instructions/lofric-sense/step-2.png",
      },
      {
        text: withFi(
          "Pull the tab up to open.",
          "Vedä avausliuskasta avataksesi pakkauksen.",
          "Dra upp remsan för att öppna.",
        ),
        image: "/images/instructions/lofric-sense/step-3.png",
      },
      {
        title: withFi("OPTIONAL", "VALINNAINEN", "VALFRITT"),
        text: withFi(
          "Use the adhesive tab on the reverse side to attach the product to a dry, clean surface.",
          "Käytä takana olevaa tarralappua tuotteen kiinnittämiseen kuivalle ja puhtaalle pinnalle.",
          "Använd klisterfliken på baksidan för att fästa produkten på en torr och ren yta.",
        ),
        image: "/images/instructions/lofric-sense/step-4.png",
      },
      {
        text: withFi(
          "Hold flap in place and take out the catheter.",
          "Pidä avausliuskaa paikallaan ja ota katetri pakkauksesta.",
          "Håll fliken på plats och ta ut katetern.",
        ),
        image: "/images/instructions/lofric-sense/step-5.png",
      },
      {
        text: withFi(
          "Spread the labia and locate the urethra just above the vaginal opening. With the other hand, insert the catheter slowly into the urethra.",
          "Levitä häpyhuulia ja paikallista emättimen aukon yläpuolelle oleva virtsaputken suu. Työnnä katetri hitaasti toisella kädellä virtsaputkeen.",
          "Sära på blygdläpparna och lokalisera urinröret strax ovanför vaginalöppningen. Med den andra handen, för långsamt in katetern i urinröret.",
        ),
        image: "/images/instructions/lofric-sense/step-6.png",
      },
      {
        text: withFi(
          "When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
          "Kun virtsaa alkaa virrata, työnnä katetria hieman pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat virtsarakon sisällä.",
          "När urinen börjar rinna ska du föra in katetern något längre för att säkerställa att båda kateterögonen är inne i blåsan.",
        ),
        image: "/images/instructions/lofric-sense/step-7.png",
      },
      {
        text: withFi(
          "When the urine flow stops, slowly withdraw the catheter a little bit. If urine starts to flow again, wait until it has stopped to ensure complete bladder emptying. Then remove the catheter completely.",
          "Kun virtsaa ei enää valu katetrista, vedä katetria hitaasti ulos. Jos virtsa alkaa valua uudelleen, odota kunnes virtsan tulo lakkaa varmistaaksesi, että virtsarakko on täysin tyhjä. Vedä sitten katetri kokonaan ulos.",
          "När urinflödet avtar, drar du långsamt ut katetern. Om urinen börjar rinna igen ska du vänta tills den har slutat för att säkerställa fullständig tömning av blåsan. Dra sedan ut katetern helt.",
        ),
        image: "/images/instructions/lofric-sense/step-8.png",
      },
      {
        text: withFi(
          "Put the catheter back in the package, the outer packaging doubles as a hygienic and discreet disposal pouch. Dispose appropriately (local regulations may vary).",
          "Laita katetri takaisin pakkaukseen. Pakkaus toimii hygieenisenä ja huomaamattomana jätepussina. Hävitä poltettavan kotitalousjätteen mukana.",
          "Lägg tillbaka katetern i förpackningen, den yttre förpackningen fungerar som en hygienisk och diskret avfallspåse. Släng som brännbart hushållsavfall.",
        ),
        image: "/images/instructions/lofric-sense/step-9.png",
      },
    ],

    safety: senseIfu.safety,
    contraindications: senseIfu.contraindications,
    warningSigns: senseIfu.warningSigns,
    storage: senseIfu.storage,
  },
  {
    id: "lofric-primo-female",
    logo: primoLogo.url,
    videoUrl: primoVideo.url,
    brand: "LoFric",
    name: "LoFric Primo",
    spec: "CH 8–14 · 20 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-primo.webp",
    summary: {
      en: "LoFric® Primo™ is a hydrophilic, intermittent catheter. It’s packaged with its own sterile water and can be used anywhere.",
      sv: "LoFric® Primo™ är en hydrofil, intermittent kateter. Den är förpackad med eget sterilt vatten och kan användas var som helst.",
      fi: "LoFric® Primo™ on hydrofiilinen toistokatetri. Se on pakattu oman steriilin veden kanssa ja sitä voi käyttää missä tahansa.",
      da: "LoFric® Primo™ er et hydrofilt, intermittent kateter. Det er pakket med sit eget sterile vand og kan bruges hvor som helst.",
      no: "LoFric® Primo™ er et hydrofilt, intermittent kateter. Det er pakket med sitt eget sterile vann og kan brukes hvor som helst.",
    },
    indications: primoIfu.indications,
    instructions: [
      {
        text: withFi(
          "Wash your hands thoroughly with soap and water.",
          "Pese kätesi huolellisesti vedellä ja saippualla.",
          "Tvätta händerna ordentligt med tvål och vatten.",
        ),
        image: "/images/instructions/lofric-primo-female/1.png",
      },
      {
        text: withFi(
          "Unfold the package. Hold the product upright.",
          "Avaa pakkaus. Pidä pakkaus pystyasennossa.",
          "Veckla ut förpackningen. Håll förpackningen upprätt.",
        ),
        image: "/images/instructions/lofric-primo-female/2.png",
      },
      {
        text: withFi(
          "Fold the water pocket.",
          "Taita ja purista nestepussia.",
          "Vik ihop vattenbehållaren.",
        ),
        image: "/images/instructions/lofric-primo-female/3.png",
      },
      {
        text: withFi(
          "Press to release the salt solution and the catheter is ready to use.",
          "Aktivoi katetri puristamalla suolaliuosta sisältävää nestepussia. Katetri on käyttövalmis.",
          "Kläm sönder behållaren med saltlösning för att aktivera katetern. Sedan är katetern klar att användas.",
        ),
        image: "/images/instructions/lofric-primo-female/4.png",
      },
      {
        text: withFi(
          'a) Open the product, take the catheter out to catheterize. b) OPTIONAL opening using handling aid: Remove the water pocket by tearing at indentation "A". Tear at indentation "B". Use the remaining packaging part as a handling aid. (This part will give you a firm grip and insertion aid, allowing you to insert the catheter without touching it.)',
          "a) Avaa pakkaus, ota katetri pakkauksesta katetrointia varten. b) VALINNAINEN: avaa sisäänvientiapua käyttäen: Irrota vesipussi repäisemällä liuska “A”. Repäise kohdasta “B”. Käytä jäljelle jäänyttä osaa sisäänvientiapuna. (Tämä osa mahdollistaa hyvän otteen ja mahdollistaa katetrin sisäänviennin katetriin käsin koskematta.)",
          "a) Öppna förpackningen, ta ut katetern för att kateterisera. b) VALFRITT: öppna med införingshjälpmedel: Avlägsna vattenpåsen genom att riva vid markering ”A”. Riv vid markering ”B”. Använd den återstående förpackningsdelen som ett införingshjälpmedel. (Den här delen ger dig ett stadigt grepp och införingshjälp, så att du kan föra in katetern utan att röra vid den.)",
        ),
        image: "/images/instructions/lofric-primo-female/5.png",
      },
      {
        text: withFi(
          "Spread the labia and locate the urethra just above the vaginal opening. With the other hand, insert the catheter slowly into the urethra.",
          "Levitä häpyhuulia ja paikallista emättimen aukon yläpuolelle oleva virtsaputken suu. Työnnä katetri hitaasti toisella kädellä virtsaputkeen.",
          "Sära på blygdläpparna och lokalisera urinröret strax ovanför vaginalöppningen. Med den andra handen, för långsamt in katetern i urinröret.",
        ),
        image: "/images/instructions/lofric-primo-female/6.png",
      },
      {
        text: withFi(
          "When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
          "Kun virtsaa alkaa virrata, työnnä katetria hieman pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat virtsarakon sisällä.",
          "När urinen börjar rinna, för in katetern något längre för att säkerställa att båda kateterögonen är inne i urinblåsan.",
        ),
        image: "/images/instructions/lofric-primo-female/7.png",
      },
      {
        text: withFi(
          "When the urine flow stops, slowly withdraw the catheter a little bit. If urine starts to flow again, wait until it has stopped to ensure complete bladder emptying. Then remove the catheter completely.",
          "Kun virtsaa ei enää valu katetrista, vedä katetria hitaasti ulos. Jos virtsa alkaa valua uudelleen, odota kunnes virtsan tulo lakkaa varmistaaksesi, että virtsarakko on täysin tyhjä. Vedä sitten katetri kokonaan ulos.",
          "När urinflödet avtar, drar du långsamt ut katetern. Om urinen börjar rinna igen ska du vänta tills den har slutat för att säkerställa fullständig tömning av blåsan. Dra sedan ut katetern helt.",
        ),
        image: "/images/instructions/lofric-primo-female/8.png",
      },
      {
        text: withFi(
          "Put the catheter back in the package and dispose appropriately (local regulations may vary).",
          "Laita katetri takaisin pakkaukseen ja hävitä palavana kotitalousjätteenä.",
          "Lägg tillbaka katetern i förpackningen och släng som brännbart hushållsavfall.",
        ),
        image: "/images/instructions/lofric-primo-female/9.png",
      },
    ],
    safety: primoIfu.safety,
    contraindications: primoIfu.contraindications,
    warningSigns: primoIfu.warningSigns,
    storage: primoIfu.storage,
  },
  {
    id: "lofric-hydro-kit-female",
    logo: hydroKitLogo.url,
    videoUrl: hydroKitVideo.url,
    brand: "LoFric",
    name: "LoFric Hydro-Kit",
    spec: "CH 8–14 · 20 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-hydro-kit.png",
    summary: {
      en: "LoFric® Hydro-Kit™ is an all-in-one hydrophilic catheter kit for intermittent catheterisation. It has an integrated collection bag and is ready to use anywhere.",
      sv: "LoFric® Hydro-Kit™ är ett hydrofilt allt-i-ett-kateterset för RIK. Det har en integrerad uppsamlingspåse och är färdigt att använda var som helst.",
      fi: "LoFric® Hydro-Kit™ on täydellinen hydrofiilinen katetripakkaus toistokatetrointiin. Siinä on kiinteä keräyspussi, ja se on valmis käytettäväksi missä tahansa.",
      da: "LoFric® Hydro-Kit™ er et alt-i-ét hydrofilt katetersæt til RIK. Det har en integreret opsamlingspose og er klart til brug hvor som helst.",
      no: "LoFric® Hydro-Kit™ er et hydrofilt alt-i-ett-katetersett for RIK. Det har en integrert oppsamlingspose og er klart til bruk hvor som helst.",
    },
    indications: hydroKitIfu.indications,
    instructions: hydroKitSteps("lofric-hydro-kit-female", [
      {
        en: "Spread the labia and locate the urethra just above the vaginal opening. With the other hand, insert the catheter slowly into the urethra.",
        sv: "Sära på blygdläpparna och lokalisera urinröret strax ovanför vaginalöppningen. Med den andra handen, för långsamt in katetern i urinröret.",
        fi: "Levitä häpyhuulia ja paikallista emättimen aukon yläpuolelle oleva virtsaputken suu. Työnnä katetri hitaasti toisella kädellä virtsaputkeen.",
        da: "Spred kønslæberne, og find urinrøret lige over skedeåbningen. Før kateteret langsomt ind i urinrøret med den anden hånd.",
        no: "Skill kjønnsleppene og finn urinrøret rett over skjedeåpningen. Før kateteret sakte inn i urinrøret med den andre hånden.",
      },
      {
        en: "When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
        sv: "När urinen börjar rinna ska du föra in katetern något längre för att säkerställa att båda kateterögonen är inne i blåsan.",
        fi: "Kun virtsaa alkaa virrata, työnnä katetria hieman pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat virtsarakon sisällä.",
        da: "Når urinen begynder at løbe, føres kateteret lidt længere ind, så begge øjne er inde i blæren.",
        no: "Når urinen begynner å renne, før kateteret litt lenger inn slik at begge øynene er inne i blæren.",
      },
      hydroKitShared.s9,
    ]),
    safety: hydroKitIfu.safety,
    contraindications: hydroKitIfu.contraindications,
    warningSigns: hydroKitIfu.warningSigns,
    storage: hydroKitIfu.storage,
  },
  {
    id: "lofric-classic-female",
    logo: lofricLogoMark.url,
    videoUrl: classicVideo.url,
    brand: "LoFric",
    name: "LoFric",
    spec: "CH 6–18 · 20 cm",
    category: "women",
    nordicEcolabel: false,
    image: "/media/lofric-classic.png",
    summary: {
      en: "LoFric® is the first hydrophilic catheter developed for intermittent catheterisation. It requires clean water to activate the unique Urotonic™ Surface Technology coating on the catheter tube.",
      sv: "LoFric® är den första hydrofila katetern utvecklad för RIK. Den kräver rent vatten för att aktivera den unika Urotonic™ Surface Technology-beläggningen på kateterslangen.",
      fi: "LoFric® on ensimmäinen hydrofiilinen katetri, joka on kehitetty toistokatetrointiin. Se tarvitsee puhdasta vettä aktivoidakseen ainutlaatuisen Urotonic™ Surface Technology -pinnoitteen katetriputkessa.",
      da: "LoFric® er det første hydrofile kateter udviklet til RIK. Det kræver rent vand for at aktivere den unikke Urotonic™ Surface Technology-coating på kateterslangen.",
      no: "LoFric® er det første hydrofile kateteret utviklet for RIK. Det krever rent vann for å aktivere det unike Urotonic™ Surface Technology-belegget på kateterslangen.",
    },
    indications: classicIfu.indications,
    instructions: classicSteps("lofric-classic-female", [
      {
        en: "Spread the labia and locate the urethra just above the vaginal opening. With the other hand, insert the catheter slowly into the urethra.",
        sv: "Sära på blygdläpparna och lokalisera urinröret strax ovanför slidöppningen. För med den andra handen in katetern långsamt i urinröret.",
        fi: "Levitä häpyhuulia ja etsi virtsaputken suu emättimen aukon yläpuolelta. Vie katetri toisella kädellä hitaasti virtsaputkeen.",
        da: "Spred kønslæberne, og find urinrøret lige over skedeåbningen. Før kateteret langsomt ind i urinrøret med den anden hånd.",
        no: "Skill kjønnsleppene og finn urinrøret rett over skjedeåpningen. Før kateteret sakte inn i urinrøret med den andre hånden.",
      },
      {
        en: "When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
        sv: "När urinen börjar rinna, för in katetern lite till så att båda ögonen är inne i blåsan.",
        fi: "Kun virtsa alkaa valua, vie katetria hieman pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat virtsarakon sisällä.",
        da: "Når urinen begynder at løbe, føres kateteret lidt længere ind, så begge øjne er inde i blæren.",
        no: "Når urinen begynner å renne, før kateteret litt lenger inn slik at begge øynene er inne i blæren.",
      },
    ]),
    safety: classicIfu.safety,
    contraindications: classicIfu.contraindications,
    warningSigns: classicIfu.warningSigns,
    storage: classicIfu.storage,
  },
  {
    id: "lofric-origo-pro",
    logo: origoProLogo.url,
    videoUrl: origoProVideo.url,
    captions: origoProCaptions,
    brand: "LoFric",
    name: "LoFric Origo Pro",
    spec: "CH 8–16 · 40 cm",
    category: "men",
    nordicEcolabel: true,
    image: "/media/lofric-origo-pro.png",
    summary: {
      en: "LoFric Origo Pro is a hydrophilic intermittent catheter. Introducing 12 smooth Pro eyelets, developed to further simplify catheterization. LoFric® Origo™ Pro eyelets are designed to allow complete bladder emptying without repositioning the catheter.",
      sv: "LoFric Origo Pro är en hydrofil kateter för RIK. Den har 12 släta Pro-ögon, utvecklade för att ytterligare förenkla kateteriseringen. LoFric® Origo™ Pro-ögonen är utformade för att möjliggöra fullständig blåstömning utan ompositionering av katetern.",
      fi: "LoFric Origo Pro on hydrofiilinen katetri toistokatetrointiin. Siinä on 12 sileää Pro-silmää, jotka on kehitetty helpottamaan katetrointia entisestään. LoFric® Origo™ Pro -silmät on suunniteltu mahdollistamaan rakon täydellinen tyhjentäminen ilman katetrin uudelleenasettelua.",
      da: "LoFric Origo Pro er et hydrofilt kateter til RIK. Det har 12 glatte Pro-øjne, udviklet til yderligere at forenkle kateteriseringen. LoFric® Origo™ Pro-øjnene er designet til at muliggøre fuldstændig blæretømning uden omplacering af kateteret.",
      no: "LoFric Origo Pro er et hydrofilt kateter for RIK. Det har 12 glatte Pro-øyne, utviklet for å forenkle kateteriseringen ytterligere. LoFric® Origo™ Pro-øynene er designet for å muliggjøre fullstendig blæretømming uten omplassering av kateteret.",
    },
    indications: origoIfu.indications,
    instructions: origoProSteps,

    safety: origoIfu.safety,
    contraindicationsIntro: origoIfu.contraindicationsIntro,
    contraindications: origoIfu.contraindications,
    warningSigns: origoIfu.warningSigns,
    storage: origoIfu.storage,
  },
  {
    id: "lofric-origo",
    logo: origoLogo.url,
    videoUrl: origoVideo.url,
    captions: origoCaptions,
    brand: "LoFric",
    name: "LoFric Origo",
    spec: "CH 8–16 · 40 cm",
    category: "men",
    nordicEcolabel: true,
    image: "/media/lofric-origo.png",
    summary: {
      en: "LoFric® Origo™ is a hydrophilic intermittent catheter. It’s foldable to pocket size, discreet and easy to carry and use anywhere. Choose between the insertion grip or the extendable protective sleeve* to achieve a hygienic insertion.",
      sv: "LoFric® Origo™ är en hydrofil kateter för RIK. Den är vikbar till fickformat, diskret och enkel att bära med sig och använda var som helst. Välj mellan införingsgreppet eller det förlängbara skyddshöljet* för att uppnå en hygienisk införing.",
      fi: "LoFric® Origo™ on hydrofiilinen katetri toistokatetrointiin. Se on taitettavissa taskukokoon, huomaamaton ja helppo kuljettaa mukana ja käyttää missä tahansa. Valitse joko asetusote tai jatkettava suojaholkki* hygieenisen asettamisen varmistamiseksi.",
      da: "LoFric® Origo™ er et hydrofilt kateter til RIK. Det er foldbart til lommestørrelse, diskret og let at have med og bruge hvor som helst. Vælg mellem indføringsgrebet eller det forlængelige beskyttelseshylster* for at opnå en hygiejnisk indføring.",
      no: "LoFric® Origo™ er et hydrofilt kateter for RIK. Det er brettbart til lommestørrelse, diskret og lett å ha med og bruke hvor som helst. Velg mellom innføringsgrepet eller den forlengbare beskyttelseshylsen* for å oppnå en hygienisk innføring.",
    },
    indications: origoIfu.indications,
    instructions: origoSteps,

    safety: origoIfu.safety,
    contraindicationsIntro: origoIfu.contraindicationsIntro,
    contraindications: origoIfu.contraindications,
    warningSigns: origoIfu.warningSigns,
    storage: origoIfu.storage,
  },
  {
    id: "lofric-primo",
    logo: primoLogo.url,
    videoUrl: primoVideo.url,
    brand: "LoFric",
    name: "LoFric Primo",
    spec: "CH 8–16 · 20/30/40 cm",
    category: "men",
    nordicEcolabel: true,
    image: "/media/lofric-primo.webp",
    summary: {
      en: "LoFric® Primo™ is a hydrophilic, intermittent catheter. It’s packaged with its own sterile water and can be used anywhere.",
      sv: "LoFric® Primo™ är en hydrofil, intermittent kateter. Den är förpackad med eget sterilt vatten och kan användas var som helst.",
      fi: "LoFric® Primo™ on hydrofiilinen toistokatetri. Se on pakattu oman steriilin veden kanssa ja sitä voi käyttää missä tahansa.",
      da: "LoFric® Primo™ er et hydrofilt, intermittent kateter. Det er pakket med sit eget sterile vand og kan bruges hvor som helst.",
      no: "LoFric® Primo™ er et hydrofilt, intermittent kateter. Det er pakket med sitt eget sterile vann og kan brukes hvor som helst.",
    },
    indications: primoIfu.indications,
    extraGuide: {
      title: withFi(
        "Special instruction for Tiemann/Coudé catheter, with slightly curved tip.",
        "Erityisohjeet kaarevakärkisellä Tiemann-katetrilla katetroimiseen.",
        "Särskilda instruktioner för Tiemann-kateter med böjd tipp.",
      ),
      intro: withFi(
        "A special technique is required when using a Tiemann/Coudé. Speak to your healthcare professional for training and advice.",
        "Tiemann-katetrin käytössä tarvitaan erityistä tekniikkaa. Saat lisätietoa tarvittavasta perehdytyksestä ja neuvonnasta sinua hoitavalta sairaanhoitajalta tai uroterapeutilta.",
        "En Tiemann kateter med böjd tipp kräver en speciell teknik vid kateterisering. Tala med din förskrivare för instruktioner och råd.",
      ),
      steps: [
        {
          text: withFi(
            "Note where the marker on the funnel is in relation to the curved catheter tip before inserting the catheter. It will guide you keeping the curved tip in the right direction during use.",
            "Huomaa kartiossa oleva merkki suhteessa kärkeen, kun viet katetria sisään virtsaputkeen. Se ohjaa pitämään katetrin kaarevan kärjen oikeassa suunnassa katetroinnin aikana.",
            "Notera var markeringen på konan befinner sig i förhållande till katetertippen när du för in katetern. Då säkerställer du att katetertippen har rätt riktning under kateteriseringen.",
          ),
          image: "/images/instructions/lofric-primo-male/tiemann-1.png",
        },
        {
          text: withFi(
            "Keep the curved tip upwards towards the stomach during insertion and throughout catheterization, including withdrawal. Or follow specific instructions given by your healthcare professional.",
            "Pidä kaareva kärki kasvoihin päin/ylöspäin sisäänviennin ja koko katetroinnin ajan, katetrin poistaminen mukaan lukien. Vaihtoehtoisesti noudata terveydenhuollon ammattilaisen antamia erityisohjeita.",
            "Se till att katetertippen är vänd upp mot buken vid införandet av katetern och under kateteriseringen eller följ de specifika instruktioner du fått av din förskrivare.",
          ),
          image: "/images/instructions/lofric-primo-male/tiemann-2.png",
        },
      ],
    },
    instructions: [
      {
        text: withFi(
          "Wash your hands thoroughly with soap and water.",
          "Pese kätesi huolellisesti vedellä ja saippualla.",
          "Tvätta händerna ordentligt med tvål och vatten.",
        ),
        image: "/images/instructions/lofric-primo-male/1.png",
      },
      {
        text: withFi(
          "Unfold the package. Hold the product upright.",
          "Avaa pakkaus. Pidä pakkaus pystyasennossa.",
          "Veckla ut förpackningen. Håll förpackningen upprätt.",
        ),
        image: "/images/instructions/lofric-primo-male/2.png",
      },
      {
        text: withFi(
          "Fold the water pocket.",
          "Taita ja purista nestepussia.",
          "Vik ihop vattenbehållaren.",
        ),
        image: "/images/instructions/lofric-primo-male/3.png",
      },
      {
        text: withFi(
          "Press to release the salt solution and the catheter is ready to use.",
          "Aktivoi katetri puristamalla suolaliuosta sisältävää säiliötä. Katetri on käyttövalmis.",
          "Kläm sönder behållaren med saltlösning för att aktivera katetern. Sedan är katetern klar att användas.",
        ),
        image: "/images/instructions/lofric-primo-male/4.png",
      },
      {
        text: withFi(
          'a) Open the product, take the catheter out to catheterize. b) OPTIONAL opening using handling aid: Remove the water pocket by tearing at indentation "A". Tear at indentation "B". Use the remaining packaging part as a handling aid. (This part will give you a firm grip and insertion aid, allowing you to insert the catheter without touching it.)',
          "a) Avaa pakkaus, ota katetri pakkauksesta katetrointia varten. b) VALINNAINEN: avaa sisäänvientiapua käyttäen: Irrota vesipussi repäisemällä liuska “A”. Repäise kohdasta “B”. Käytä jäljelle jäänyttä osaa sisäänvientiapuna. (Tämä osa mahdollistaa hyvän otteen ja mahdollistaa katetrin sisäänviennin katetriin käsin koskematta.)",
          "a) Öppna förpackningen, ta ut katetern för att kateterisera. b) VALFRITT: öppna med införingshjälpmedel: Avlägsna vattenpåsen genom att riva vid markering ”A”. Riv vid markering ”B”. Använd den återstående förpackningsdelen som ett införingshjälpmedel. (Den här delen ger dig ett stadigt grepp och införingshjälp, så att du kan föra in katetern utan att röra vid den.)",
        ),
        image: "/images/instructions/lofric-primo-male/5.png",
      },
      {
        text: withFi(
          "Lift the penis towards the stomach to straighten the urethra. Slowly insert the catheter into the urethra. When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
          "Nosta penistä ylöspäin vatsaa kohti. Vie katetri hitaasti virtsaputkeen. Kun virtsaa alkaa valua, työnnä katetria vielä hiukan pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat sisällä virtsarakossa.",
          "Lyft penis mot magen för att räta ut urinröret. För långsamt in katetern i urinröret. När urinen börjar rinna ska du föra in katetern något längre för att säkerställa att båda kateterögonen är inne i urinblåsan.",
        ),
        image: "/images/instructions/lofric-primo-male/6.png",
      },
      {
        text: withFi(
          "Angle the penis down as urine begins to flow through the catheter.",
          "Laske penis normaaliasentoon, kun virtsaa alkaa valua katetrin kautta.",
          "Vinkla penis nedåt när urinen börjar rinna genom katetern.",
        ),
        image: "/images/instructions/lofric-primo-male/7.png",
      },
      {
        text: withFi(
          "When the urine flow stops, slowly withdraw the catheter a little bit. If urine starts to flow again, wait until it has stopped to ensure complete bladder emptying. Then remove the catheter completely.",
          "Kun virtsaa ei enää valu katetrista, vedä katetria hitaasti ulos. Jos virtsa alkaa valua uudelleen, odota kunnes virtsan tulo lakkaa varmistaaksesi, että virtsarakko on täysin tyhjä. Vedä sitten katetri kokonaan ulos.",
          "När urinflödet avtar, drar du långsamt ut katetern. Om urinen börjar rinna igen ska du vänta tills den har slutat för att säkerställa fullständig tömning av blåsan. Dra sedan ut katetern helt.",
        ),
        image: "/images/instructions/lofric-primo-male/8.png",
      },
      {
        text: withFi(
          "Put the catheter back in the package and dispose appropriately (local regulations may vary).",
          "Laita katetri takaisin pakkaukseen ja hävitä se poltettavan kotitalousjätteen mukana.",
          "Lägg tillbaka katetern i förpackningen och släng som brännbart hushållsavfall.",
        ),
        image: "/images/instructions/lofric-primo-male/9.png",
      },
    ],
    safety: primoIfu.safety,
    contraindications: primoIfu.contraindications,
    warningSigns: primoIfu.warningSigns,
    storage: primoIfu.storage,
  },
  {
    id: "lofric-hydro-kit",
    logo: hydroKitLogo.url,
    videoUrl: hydroKitVideo.url,
    brand: "LoFric",
    name: "LoFric Hydro-Kit",
    spec: "CH 8–16",
    category: "men",
    nordicEcolabel: true,
    image: "/media/lofric-hydro-kit.png",
    summary: {
      en: "LoFric® Hydro-Kit™ is an all-in-one hydrophilic catheter kit for intermittent catheterisation. It has an integrated collection bag and is ready to use anywhere.",
      sv: "LoFric® Hydro-Kit™ är ett hydrofilt allt-i-ett-kateterset för RIK. Det har en integrerad uppsamlingspåse och är färdigt att använda var som helst.",
      fi: "LoFric® Hydro-Kit™ on täydellinen hydrofiilinen katetripakkaus toistokatetrointiin. Siinä on kiinteä keräyspussi, ja se on valmis käytettäväksi missä tahansa.",
      da: "LoFric® Hydro-Kit™ er et alt-i-ét hydrofilt katetersæt til RIK. Det har en integreret opsamlingspose og er klart til brug hvor som helst.",
      no: "LoFric® Hydro-Kit™ er et hydrofilt alt-i-ett-katetersett for RIK. Det har en integrert oppsamlingspose og er klart til bruk hvor som helst.",
    },
    indications: hydroKitIfu.indications,
    instructions: hydroKitSteps("lofric-hydro-kit", [
      {
        en: "Lift the penis towards the stomach to straighten the urethra. Slowly insert the catheter into the urethra. When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
        sv: "Lyft penis mot magen för att räta ut urinröret. För långsamt in katetern i urinröret. När urinen börjar rinna ska du föra in katetern något längre för att säkerställa att båda kateterögonen är inne i blåsan.",
        fi: "Nosta penistä ylöspäin vatsaa kohti. Vie katetri hitaasti virtsaputkeen. Kun virtsaa alkaa valua, työnnä katetria vielä hiukan pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat sisällä virtsarakossa.",
        da: "Løft penis op mod maven for at rette urinrøret ud. Før langsomt kateteret ind i urinrøret. Når urinen begynder at løbe, føres kateteret lidt længere ind, så begge øjne er inde i blæren.",
        no: "Løft penis mot magen for å rette ut urinrøret. Før kateteret sakte inn i urinrøret. Når urinen begynner å renne, før kateteret litt lenger inn slik at begge øynene er inne i blæren.",
      },
      {
        en: "Angle the penis down as urine begins to flow through the catheter.",
        sv: "Vinkla penis nedåt när urinen börjar rinna genom katetern.",
        fi: "Laske penis normaaliasentoon, kun virtsaa alkaa valua katetrin kautta.",
        da: "Vinkl penis nedad, når urinen begynder at løbe gennem kateteret.",
        no: "Vinkle penis nedover når urinen begynner å renne gjennom kateteret.",
      },
      hydroKitShared.s9,
    ]),
    extraGuide: {
      title: {
        en: "Special instruction for Tiemann/Coudé catheter, with slightly curved tip.",
        sv: "Särskilda instruktioner för Tiemann-kateter med böjd tipp.",
        fi: "Erityisohjeet kaarevakärkisellä Tiemann-katetrilla katetroimiseen.",
        da: "Særlig vejledning til Tiemann/Coudé-kateter med let buet spids.",
        no: "Spesiell instruksjon for Tiemann/Coudé-kateter med lett buet spiss.",
      },
      intro: {
        en: "A special technique is required when using a Tiemann/Coudé. Speak to your healthcare professional for training and advice.",
        sv: "En Tiemann kateter med böjd tipp kräver en speciell teknik vid kateterisering. Tala med din förskrivare för instruktioner och råd.",
        fi: "Tiemann-katetrin käytössä tarvitaan erityistä tekniikkaa. Saat lisätietoa tarvittavasta perehdytyksestä ja neuvonnasta sinua hoitavalta sairaanhoitajalta tai uroterapeutilta.",
        da: "Der kræves en særlig teknik ved brug af Tiemann/Coudé. Tal med din sundhedsprofessionelle om oplæring og råd.",
        no: "Det kreves en spesiell teknikk ved bruk av Tiemann/Coudé. Snakk med helsepersonell for opplæring og råd.",
      },
      steps: tiemannSteps("lofric-hydro-kit", [
        "Notera var markeringen på konan befinner sig i förhållande till katetertippen när du för in katetern. Då säkerställer du att katetertippen har rätt riktning under kateteriseringen.",
        "Se till att katetertippen är vänd upp mot buken vid införandet av katetern och under kateteriseringen eller följ de specifika instruktioner du fått av din förskrivare.",
      ]),
    },
    safety: hydroKitIfu.safety,
    contraindications: hydroKitIfu.contraindications,
    warningSigns: hydroKitIfu.warningSigns,
    storage: hydroKitIfu.storage,
  },
  {
    id: "lofric-classic",
    logo: lofricLogoMark.url,
    videoUrl: classicVideo.url,
    brand: "LoFric",
    name: "LoFric",
    spec: "CH 6–18 · 20/30/40 cm",
    category: "men",
    nordicEcolabel: false,
    image: "/media/lofric-classic.png",
    summary: {
      en: "LoFric® is the first hydrophilic catheter developed for intermittent catheterisation. It requires clean water to activate the unique Urotonic™ Surface Technology coating on the catheter tube.",
      sv: "LoFric® är den första hydrofila katetern utvecklad för RIK. Den kräver rent vatten för att aktivera den unika Urotonic™ Surface Technology-beläggningen på kateterslangen.",
      fi: "LoFric® on ensimmäinen hydrofiilinen katetri, joka on kehitetty toistokatetrointiin. Se tarvitsee puhdasta vettä aktivoidakseen ainutlaatuisen Urotonic™ Surface Technology -pinnoitteen katetriputkessa.",
      da: "LoFric® er det første hydrofile kateter udviklet til RIK. Det kræver rent vand for at aktivere den unikke Urotonic™ Surface Technology-coating på kateterslangen.",
      no: "LoFric® er det første hydrofile kateteret utviklet for RIK. Det krever rent vann for å aktivere det unike Urotonic™ Surface Technology-belegget på kateterslangen.",
    },
    indications: classicIfu.indications,
    instructions: classicSteps("lofric-classic", [
      {
        en: "Lift the penis towards the stomach to straighten the urethra. Slowly insert the catheter into the urethra without touching the tube. When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
        sv: "Lyft penis mot magen för att räta ut urinröret. För långsamt in katetern i urinröret utan att röra vid slangen. När urinen börjar rinna, för in katetern lite till så att båda ögonen är inne i blåsan.",
        fi: "Nosta penis kohti vatsaa virtsaputken suoristamiseksi. Vie katetri hitaasti virtsaputkeen koskematta käsin katetriletkuun. Kun virtsa alkaa valua, vie katetria hieman pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat virtsarakon sisällä.",
        da: "Løft penis op mod maven for at rette urinrøret ud. Før langsomt kateteret ind i urinrøret uden at røre ved slangen. Når urinen begynder at løbe, føres kateteret lidt længere ind, så begge øjne er inde i blæren.",
        no: "Løft penis mot magen for å rette ut urinrøret. Før kateteret sakte inn i urinrøret uten å berøre slangen. Når urinen begynner å renne, før kateteret litt lenger inn slik at begge øynene er inne i blæren.",
      },
      {
        en: "Angle the penis down as urine begins to flow through the catheter.",
        sv: "Vinkla penis nedåt när urinen börjar rinna genom katetern.",
        fi: "Palauta penis normaaliasentoon, kun virtsaa alkaa valua katetrin läpi.",
        da: "Vinkl penis nedad, når urinen begynder at løbe gennem kateteret.",
        no: "Vinkle penis nedover når urinen begynner å renne gjennom kateteret.",
      },
    ]),
    extraGuide: {
      title: {
        en: "Special instruction for Tiemann/Coudé catheter, with slightly curved tip.",
        sv: "Särskild instruktion för Tiemann/Coudé-kateter med lätt böjd spets.",
        fi: "Erityisohjeet kaarevakärkisellä Tiemann-katetrilla katetroimiseen.",
        da: "Særlig vejledning til Tiemann/Coudé-kateter med let buet spids.",
        no: "Spesiell instruksjon for Tiemann/Coudé-kateter med lett buet spiss.",
      },
      intro: {
        en: "A special technique is required when using a Tiemann/Coudé. Speak to your healthcare professional for training and advice.",
        sv: "En särskild teknik krävs när du använder Tiemann/Coudé. Tala med din vårdgivare för utbildning och råd.",
        fi: "Tiemann-katetrin käytössä tarvitaan erityistä tekniikkaa. Saat lisätietoa tarvittavasta perehdytyksestä ja neuvonnasta sinua hoitavalta sairaanhoitajalta tai uroterapeutilta.",
        da: "Der kræves en særlig teknik ved brug af Tiemann/Coudé. Tal med din sundhedsprofessionelle om oplæring og råd.",
        no: "Det kreves en spesiell teknikk ved bruk av Tiemann/Coudé. Snakk med helsepersonell for opplæring og råd.",
      },
      steps: tiemannSteps("lofric-classic"),
    },
    safety: classicIfu.safety,
    contraindications: classicIfu.contraindications,
    warningSigns: classicIfu.warningSigns,
    storage: classicIfu.storage,
  },
  {
    id: "navina-mini",
    logo: navinaMiniLogo.url,
    videos: [
      {
        label: {
          en: "With extension tube",
          sv: "Med förlängningsslang",
          fi: "Jatkoletkun kanssa",
          da: "Med forlængerslange",
          no: "Med forlengelsesslange",
        },
        url: navinaMiniTubeVideo.url,
      },
      {
        label: {
          en: "Without extension tube",
          sv: "Utan förlängningsslang",
          fi: "Ilman jatkoletkua",
          da: "Uden forlængerslange",
          no: "Uten forlengelsesslange",
        },
        url: navinaMiniUsxVideo.url,
      },
    ],
    brand: "Navina",
    name: "Navina Mini",
    spec: "Compact irrigation kit · travel case",
    category: "bowel",
    nordicEcolabel: false,
    image: "/media/navina-mini.png",
    summary: {
      en: "Compact irrigation set for smaller water volumes and easy travel.",
      sv: "Kompakt irrigationsset för mindre vattenvolymer och enkel resa.",
      fi: "Kompakti huuhtelusetti pienemmille vesimäärille ja helppoon matkustamiseen.",
      da: "Kompakt irrigationssæt til mindre vandmængder og nem rejse.",
      no: "Kompakt irrigasjonssett for mindre vannmengder og enkel reise.",
    },
    indications: navinaMiniIfu.indications,
    instructions: [
      {
        title: {
          en: "Preparations",
          sv: "Förberedelser",
          fi: "Valmistelut",
          da: "Forberedelser",
          no: "Forberedelser",
        },
        text: {
          en: "Open the lid and fill the entire water container with lukewarm (36–38 °C) tap water.",
          sv: "Öppna locket och fyll hela vattenbehållaren med ljummet (36–38 °C) kranvatten.",
          fi: "Avaa kansi ja täytä koko vesisäiliö haalealla (36–38 °C) hanavedellä.",
          da: "Åbn låget og fyld hele vandbeholderen med lunkent (36–38 °C) vand fra hanen.",
          no: "Åpne lokket og fyll hele vannbeholderen med lunkent (36–38 °C) springvann.",
        },
        image: "/images/instructions/navina-mini/1.png",
      },
      {
        text: {
          en: "Close the lid.",
          sv: "Stäng locket.",
          fi: "Sulje kansi.",
          da: "Luk låget.",
          no: "Lukk lokket.",
        },
        image: "/images/instructions/navina-mini/2.png",
      },
      {
        text: {
          en: "Open the pouch and connect the cone to the water container.",
          sv: "Öppna påsen och anslut konan till vattenbehållaren.",
          fi: "Avaa pussi ja liitä kartio vesisäiliöön.",
          da: "Åbn posen og forbind konussen til vandbeholderen.",
          no: "Åpne posen og koble konusen til vannbeholderen.",
        },
        image: "/images/instructions/navina-mini/3.png",
      },
      {
        text: {
          en: "Activate the slippery surface on the cone by wetting it with tap water.",
          sv: "Aktivera den hala ytan på konan genom att väta den med kranvatten.",
          fi: "Aktivoi kartion liukas pinta kostuttamalla se hanavedellä.",
          da: "Aktivér konussens glatte overflade ved at væde den med vand fra hanen.",
          no: "Aktiver den glatte overflaten på konusen ved å fukte den med springvann.",
        },
        image: "/images/instructions/navina-mini/4.png",
      },
      {
        title: {
          en: "Instillation",
          sv: "Instillation",
          fi: "Instillaatio",
          da: "Instillation",
          no: "Instillasjon",
        },
        text: {
          en: "Sit on or stand over the toilet and gently insert the cone into the rectum.",
          sv: "Sitt på eller stå över toaletten och för försiktigt in konan i rektum.",
          fi: "Istu wc:n päällä tai seiso sen yllä ja vie kartio varovasti peräsuoleen.",
          da: "Sid på eller stå over toilettet, og før forsigtigt konussen ind i endetarmen.",
          no: "Sitt på eller stå over toalettet og før konusen forsiktig inn i endetarmen.",
        },
        image: "/images/instructions/navina-mini/5.png",
      },
      {
        text: {
          en: "When the cone is in place, gently squeeze the water container to instill the water. Only insert the tapered part of the cone and stop when you reach the wider base.",
          sv: "När konan är på plats, kläm försiktigt på vattenbehållaren för att instillera vattnet. Tänk på att bara föra in den spetsiga delen av konan och stanna när du kommer till den bredare basen.",
          fi: "Kun kartio on paikallaan, purista vesisäiliötä varovasti veden instilloimiseksi. Vie sisään vain kartion kapeneva osa ja pysähdy leveämpään tyveen.",
          da: "Når konussen er på plads, klem forsigtigt på vandbeholderen for at instillere vandet. Før kun den spidse del af konussen ind, og stop ved den bredere base.",
          no: "Når konusen er på plass, klem forsiktig på vannbeholderen for å instillere vannet. Før bare inn den spisse delen av konusen og stopp ved den bredere basen.",
        },
        image: "/images/instructions/navina-mini/6.png",
      },
      {
        text: {
          en: "Withdraw the cone and let the bowel empty.",
          sv: "Drag ut konan och låt tarmen tömmas.",
          fi: "Vedä kartio ulos ja anna suolen tyhjentyä.",
          da: "Træk konussen ud, og lad tarmen tømmes.",
          no: "Trekk ut konusen og la tarmen tømmes.",
        },
        image: "/images/instructions/navina-mini/7.png",
      },
      {
        title: {
          en: "Disassembly and cleaning",
          sv: "Isärtagning och rengöring",
          fi: "Purkaminen ja puhdistus",
          da: "Adskillelse og rengøring",
          no: "Demontering og rengjøring",
        },
        text: {
          en: "Place the cone back into the pouch and dispose of it as household waste.",
          sv: "Lägg tillbaka konan i påsen och släng som hushållsavfall.",
          fi: "Laita kartio takaisin pussiin ja hävitä se sekajätteenä.",
          da: "Læg konussen tilbage i posen, og bortskaf den som husholdningsaffald.",
          no: "Legg konusen tilbake i posen og kast den som husholdningsavfall.",
        },
        image: "/images/instructions/navina-mini/8.png",
      },
      {
        text: {
          en: "Open the lid of the water container and empty any remaining water.",
          sv: "Öppna locket på vattenbehållaren och töm ut resterande vatten.",
          fi: "Avaa vesisäiliön kansi ja kaada jäljellä oleva vesi pois.",
          da: "Åbn låget på vandbeholderen, og tøm det resterende vand ud.",
          no: "Åpne lokket på vannbeholderen og tøm ut resterende vann.",
        },
        image: "/images/instructions/navina-mini/9.png",
      },
      {
        text: {
          en: "Gently clean the water container after each use with lukewarm soapy water only. Allow to dry.",
          sv: "Rengör försiktigt vattenbehållaren efter varje användning med enbart ljummet tvålvatten. Låt torka.",
          fi: "Puhdista vesisäiliö varovasti jokaisen käytön jälkeen vain haalealla saippuavedellä. Anna kuivua.",
          da: "Rengør forsigtigt vandbeholderen efter hver brug med kun lunkent sæbevand. Lad den tørre.",
          no: "Rengjør vannbeholderen forsiktig etter hver bruk med kun lunkent såpevann. La den tørke.",
        },
        image: "/images/instructions/navina-mini/10.png",
      },
      {
        text: {
          en: "Wash your hands.",
          sv: "Tvätta händerna.",
          fi: "Pese kädet.",
          da: "Vask hænderne.",
          no: "Vask hendene.",
        },
        image: "/images/instructions/navina-mini/11.png",
      },
    ],
    safety: navinaMiniIfu.safety,
    contraindicationsIntro: navinaMiniIfu.contraindicationsIntro,
    contraindications: navinaMiniIfu.contraindications,
    warningSigns: navinaMiniIfu.warningSigns,
    storage: "Dry fully before packing away to prevent mould in the tubing.",
  },
  {
    id: "navina-classic",
    emergencyWarning: navinaClassicIfu.emergencyWarning,
    logo: navinaClassicLogo.url,
    videoUrl: navinaClassicVideo.url,
    brand: "Navina",
    name: "Navina Classic",
    spec: "Manual pump · 1000 ml container",
    category: "bowel",
    nordicEcolabel: false,
    image: "/media/navina-classic.png",
    summary: {
      en: "Manual transanal irrigation system with a hand pump for full control over each step.",
      sv: "Manuellt system för transanal irrigation med handpump för full kontroll i varje steg.",
      fi: "Manuaalinen transanaalinen huuhtelujärjestelmä käsipumpulla — täysi hallinta joka vaiheessa.",
      da: "Manuelt transanalt irrigationssystem med håndpumpe for fuld kontrol i hvert trin.",
      no: "Manuelt transanalt irrigasjonssystem med håndpumpe for full kontroll i hvert trinn.",
    },
    indications: navinaClassicIfu.indications,
    instructions: [
      {
        title: withFi("Preparation", "Valmistelu", "Förberedelser"),
        text: withFi(
          "Fill water to the 0-mark of the container with lukewarm (36–38 °C) clean tap water and close the lid. Connect the water container tube between the water container and the control unit (dark blue). Connect the catheter tube between the control unit and the catheter (light blue/white). Follow the colour coding and symbols, and make sure the safety valve on the lid is not blocked.",
          "1. Täytä säiliö vedellä 0-merkkiin asti ja sulje kansi. 2. Liitä vesisäiliöletku vesisäiliön ja ohjausyksikön välille (tummansininen). 3. Liitä katetriletku ohjausyksikön ja katetrin välille (harmaa/valkoinen). Huomaa: Seuraa värikoodeja ja symboleja. Käytä vain kädenlämpöistä, puhdasta vettä (36-38 °C). Varmista, että kannen turvaventtiili ei ole tukossa suolihuuhtelutoimenpiteen aikana.",
          "1. Fyll på med vatten upp till 0-markeringen på behållaren och stäng locket. 2. Anslut vattenbehållaren och kontrollenheten med vattenbehållarens slang (mörkblå). 3. Anslut kontrollenheten och katetern med kateterslangen (ljusblå/vit). Obs! Följ färgkodningen och symbolerna. Använd endast ljummet rent vatten (36–38 °C). Försäkra dig om att säkerhetsventilen på locket inte är blockerad under irrigeringen.",
        ),
        image: "/images/instructions/navina-classic/1-preparation.png",
      },
      {
        title: withFi("Activation", "Aktivointi", "Aktivering"),
        text: withFi(
          "Make sure the water flow is opened. Pump water with the dark blue pump until it covers 3/4 of the catheter tube, making it slippery. Do not add additional lubricant. Then close the water flow.",
          "1. Varmista, että vesivirta on auki. 2. Täytä katetripussi pumppaamalla vettä tummansinisellä pumpulla kunnes vettä on noin 3/4 katetrin pituudelta. Katetri saa näin liukkaan pinnan. 3. Sulje vesivirta. Huomaa: Älä käytä mitään lisäliukasteita.",
          "1. Kontrollera att vattenflödet är öppet. 2. Pumpa vatten med den mörkblå pumpen tills vattnet täcker katetern och aktiverar den hala ytan. 3. Stäng av vattenflödet. Obs! Inget annat glidmedel behövs.",
        ),
        image: "/images/instructions/navina-classic/2-activation.png",
      },
      {
        title: withFi("Instillation", "Veden johtaminen", "Tillförsel av vatten"),
        text: withFi(
          "Carefully insert the rectal catheter according to your healthcare professional's instruction. Inflate the balloon with the light blue pump — never more than 5 pumps with the regular catheter or 2 pumps with the small catheter, and do not inflate more than 2 times. Gently pull the catheter slightly down to seal the rectum. Open the water flow and instill the prescribed water volume with the dark blue pump, then close the water flow. Never insert the catheter with force.",
          "1. Vie rektaalikatetri varovaisesti sisään katetrin kädensijaan asti. 2. Täytä ballonki ilmalla harmaan pumpun avulla: – Älä koskaan käytä yli viittä pumppausta, kun käytät regular-katetria. – Älä koskaan käytä yli kahta pumppausta, kun käytät small-katetria. Huomaa: Jos sinun on säädettävä katetrin asentoa, tyhjennä ballonki ensin kokonaan. 3. Sulje peräsuolesi vetämällä katetria varovaisesti alaspäin. 4. Avaa vesivirta. 5. Johda vettä terveydenhuollon ammattilaisen sinulle neuvoma määrä, käyttäen tummansinistä pumppua. Voit milloin tahansa lopettaa veden johtamisen tai pitää siitä taukoa vapauttamalla pumpun ja sulkemalla vesivirran. 6. Sulje vesivirta. Huomaa: Älä milloinkaan vie katetria peräsuoleen voimaa käyttäen. Jos tunnet vastusta, poista katetri, ja seuraa annettuja käyttöohjeita. Jos vastus jatkuu, lopeta huuhtelu ja kysy neuvoa terveydenhuollon ammattilaiselta.",
          "1. För försiktigt in katetern i ändtarmen till kateterhandtaget. 2. Blås upp ballongen med hjälp av den ljusblå pumpen. Pumpa aldrig mer än 5 gånger när du använder regular katetern. Pumpa aldrig mer än 2 gånger när du använder en small kateter. Om du behöver justera kateterns position ska du släppa ut luften ur ballongen helt och hållet och därefter flytta katetern. 3. Dra försiktigt katetern nedåt för att försluta mot ändtarmen. 4. Öppna vattenflödet. 5. Pumpa in den mängd vatten som sjukvårdspersonalen har angivit med hjälp av den mörkblå pumpen. Du kan när som helst avbryta eller pausa vattentillförseln genom att släppa pumpen. 6. Stäng vattenflödet.",
        ),
        image: "/images/instructions/navina-classic/3-instillation.png",
      },
      {
        title: withFi("Evacuation", "Tyhjennys", "Tömning"),
        text: withFi(
          "Deflate the balloon by pressing the black button and remove the catheter gently. Allow the bowel to empty — if needed, relax for 10–15 minutes, lean forward, cough or massage the abdomen.",
          "1. Tyhjennä ballonki painamalla mustaa painiketta pitkään. 2. Poista katetri varovaisesti. 3. Anna suolen tyhjentyä. Jos suoli ei ala tyhjentyä itsestään, rentoudu 10–15 minuuttia ja yritä sitten nojata eteenpäin, hiero vatsaa tai liikuta ylävartaloa, jotta tyhjenemisprosessi alkaisi.",
          "1. Släpp ut luften ur ballongen genom att trycka på den svarta knappen. 2. Ta försiktigt ut katetern. 3. Låt tarmen tömmas. Om tarmen inte börjar tömmas automatiskt, slappna av i 10–15 minuter, luta dig framåt, hosta eller massera magen.",
        ),
        image: "/images/instructions/navina-classic/4-evacuation.png",
      },
      {
        title: withFi("Disassembly", "Purkaminen", "Isärtagning"),
        text: withFi(
          "Open the water container lid, disconnect the tubes from the control unit and empty the water from the tubes and control unit. Disconnect the single use catheter and dispose of it as household waste — it must not be reused or flushed down the toilet. Disconnect the tube from the water container, empty the water, then clean and dry the tubing, water container and control unit with a cloth and mild soapy water.",
          "1. Avaa vesisäiliön kansi. 2. Irrota letkut ohjausyksiköstä. 3. Poista vesi letkuista. 4. Avaa vesivirta ja tyhjennä vesi ohjausyksiköstä. 5. Irrota kertakäyttöinen katetri ja hävitä kotitalousjätteen mukana. Katetria ei saa käyttää uudelleen eikä sitä saa huuhdella alas wc-pöntöstä. 6. Irrota letku vesisäiliöstä ja poista vesi. 7. Tarvittaessa puhdista ja kuivaa letkusto, vesisäiliö ja ohjausyksikkö laimealla saippuavedellä ja liinalla. Huomaa: Merkitse jokainen huuhtelu käyttökalenteriin (katso käyttöohjeet) voidaksesi seurata, milloin vesisäiliö ja letkusto tulee vaihtaa uuteen.",
          "1. Öppna vattenbehållarens lock. 2. Koppla loss slangarna från kontrollenheten. 3. Töm ut vattnet ur slangarna. 4. Öppna vattenflödet och töm ut vattnet ur kontrollenheten. 5. Koppla loss engångskatetern och kassera den som hushållsavfall. Den får inte återanvändas eller spolas ner i toaletten. 6. Koppla loss slangen från vattenbehållaren och töm ut vattnet. 7. Skölj av slangarna, vattenbehållaren och kontrollenheten, rengör dem med vatten och mild tvål och torka dem. Obs! Markera en ruta i förbrukningsmatrixen (se bruksanvisningen) efter varje användning för att hålla reda på när vattenbehållaren och vattenslangsetet behöver bytas.",
        ),
        image: "/images/instructions/navina-classic/5-disassembly.png",
      },
    ],
    safety: navinaClassicIfu.safety,
    contraindicationsIntro: navinaClassicIfu.contraindicationsIntro,
    contraindications: navinaClassicIfu.contraindications,
    warningSigns: navinaClassicIfu.warningSigns,
    storage:
      "Store clean and dry; replace the catheter and tubing at the interval stated in the manual.",
  },
  {
    id: "navina-smart",
    unavailableLocales: ["no"],
    emergencyWarning: navinaSmartIfu.emergencyWarning,
    logo: navinaSmartLogo.url,
    videoUrl: smartVideo.url,
    brand: "Navina",
    name: "Navina Smart",
    spec: "Electronic control unit · rechargeable",
    category: "bowel",
    nordicEcolabel: false,
    image: "/media/navina-smart.png",
    summary: {
      en: "Electronic transanal irrigation system that controls water flow and balloon inflation for you.",
      sv: "Elektroniskt system för transanal irrigation som styr vattenflöde och ballongfyllning åt dig.",
      fi: "Sähköinen transanaalinen huuhtelujärjestelmä, joka ohjaa veden virtausta ja pallon täyttöä.",
      da: "Elektronisk transanalt irrigationssystem, der styrer vandflow og ballonfyldning for dig.",
      no: "Elektronisk transanalt irrigasjonssystem som styrer vannmengde og ballongfylling for deg.",
    },
    indications: navinaSmartIfu.indications,
    instructions: [
      {
        title: withFi("Preparation", "Valmistelu"),
        text: withFi(
          "Note: make sure the control unit is charged and the parameters are set before you start. Fill with lukewarm (36–38 °C) clean water to the upper mark of the container and close the lid. Connect the water container tube between the water container and the control unit (dark blue). Connect the catheter tube between the control unit and the catheter (light blue/white). Follow the colour coding and symbols.",
          "Huomaa: Varmista, että ohjausyksikkö on ladattu ja parametrit on asetettu ennen kuin aloitat tällä sivulla esitettyjä valmisteluja. 1. Täytä säiliö vedellä säiliössä olevaan 0-merkkiin asti ja sulje kansi. 2. Liitä vesisäiliöletku vesisäiliön ja ohjausyksikön (tummansininen) välille. 3. Liitä katetriletku ohjausyksikön ja katetrin välille (harmaa/valkoinen). Huomaa: Seuraa värikoodeja ja symboleja. Käytä vain kädenlämpöistä, puhdasta vettä (36-38 °C).",
        ),
        image: "/images/instructions/navina-smart/1-preparation.png",
      },
      {
        title: withFi("Activation", "Aktivointi"),
        text: withFi(
          "Turn on the Navina Smart control unit by pressing the power button. Press any button to go to activation mode. Press and hold the water button to pump water until the catheter is covered with water (making it slippery) and the advance icon appears on the screen. Press advance when you are ready to continue to instillation mode. Do not add additional lubricant.",
          "1. Käynnistä Navina Smart -ohjausyksikkö painamalla virtapainiketta. 2. Siirry aktivointivaiheeseen painamalla mitä tahansa painiketta. 3. Paina ja pidä vesipainiketta pumpataksesi vettä, kunnes katetri peittyy veteen (katetri saa näin liukkaan pinnan) ja etenemiskuvake ilmestyy näytölle. 4. Paina etenemispainiketta, kun olet valmis asettamaan katetrin ja jatkamaan vedenjohtamistilaan. Huomaa: Älä käytä mitään lisäliukasteita.",
        ),
        image: "/images/instructions/navina-smart/2-activation.png",
      },
      {
        title: withFi("Instillation", "Veden johtaminen"),
        text: withFi(
          "Insert the rectal catheter according to your healthcare professional's instruction. Press and hold the balloon button to inflate the catheter balloon until the desired balloon size is reached — if repositioning is needed, deflate the balloon completely first. Gently pull the catheter slightly down to seal the rectum, then instill water by pressing the water button. Never insert the catheter with force, and do not turn off the control unit.",
          "1. Aseta katetri terveydenhuoltoammattilaisen ohjeistuksen mukaisesti. 2. Paina ja pidä pallopainiketta katetrin ballongin täyttämiseksi, kunnes haluttu ballongin koko on saavutettu. Jos katetrin asentoa on tarpeen säätää, ballonki on ensin tyhjennettävä kokonaan. 3. Vedä katetria varovasti hieman alaspäin peräsuolen sulkemiseksi. 4. Johda vettä painamalla vesipainiketta. Huomaa: Älä koskaan aseta katetria väkisin. Jos tunnet vastusta, poista katetri ja katso käyttöohjeiden vianmääritysosio. Jos vastus jatkuu, lopeta huuhtelun käyttö ja pyydä apua terveydenhuollon ammattilaiselta. Älä sammuta ohjausyksikköä.",
        ),
        image: "/images/instructions/navina-smart/3-instillation.png",
      },
      {
        title: withFi("Evacuation", "Tyhjennys"),
        text: withFi(
          "Press and hold the deflate button to deflate the balloon completely, then remove the catheter gently. Allow the bowels to empty — if needed, relax for 10–15 minutes, lean forward, cough or massage the abdomen. Do not turn off the control unit yet.",
          "1. Paina ja pidä tyhjennyspainiketta tyhjentääksesi ballongin kokonaan. 2. Poista katetri varovasti. 3. Anna suolen tyhjentyä. Jos suoli ei ala tyhjentyä itsestään, rentoudu 10-15 minuuttia ja yritä sitten nojata eteenpäin, yskäise tai hiero vatsaa tai liikuta ylävartaloa, jotta tyhjeneminen alkaisi. Älä sammuta ohjausyksikköä.",
        ),
        image: "/images/instructions/navina-smart/4-evacuation.png",
      },
      {
        title: withFi("Disassembly and data transfer", "Purkaminen"),
        text: withFi(
          "Open the water container lid, disconnect the tubes from the control unit and empty the water from the tubes by raising the disconnected ends. Turn off the Navina Smart control unit and empty water from the control unit. Disconnect the tube from the water container and empty the container. Disconnect the single use catheter and dispose of it as household waste — it must not be reused or flushed down the toilet. Clean and dry the tubing and water container with a cloth and mild soapy water; the control unit must only be wiped clean. Finally, transfer data to the app or system if applicable.",
          "1. Avaa vesisäiliön kansi. 2. Irrota letkut ohjausyksiköstä. 3. Poista vesi letkuista nostamalla irrotetut päät ylös. 4. Sammuta Navina Smart -ohjausyksikkö ja tyhjennä vesi ohjausyksiköstä. 5. Irrota letku vesisäiliöstä ja poista vesi. 6. Irrota kertakäyttöinen katetri ja hävitä kotitalousjätteen mukana. Katetria ei saa käyttää uudelleen eikä sitä saa huuhdella alas wc-pöntöstä. 7. Tarvittaessa puhdista ja kuivaa letkusto, vesisäiliö ja ohjausyksikkö laimealla saippuavedellä ja liinalla. Ohjausyksikön saa vain pyyhkiä puhtaaksi. Huomaa: Merkitse jokainen huuhtelu käyttökalenteriin (katso käyttöohjeet) voidaksesi seurata, milloin vesisäiliö ja letkusto tulee vaihtaa uuteen. Tietojen siirtäminen: katso ohjeet kääntöpuolelta.",
        ),
        image: "/images/instructions/navina-smart/5-disassembly.png",
      },
    ],
    safety: navinaSmartIfu.safety,
    contraindicationsIntro: navinaSmartIfu.contraindicationsIntro,
    contraindications: navinaSmartIfu.contraindications,
    warningSigns: navinaSmartIfu.warningSigns,
    storage: navinaSmartIfu.storage,
  },
  {
    id: "navina-insert",
    logo: navinaInsertLogo.url,
    videoUrl: navinaInsertVideo.url,
    brand: "Navina",
    name: "Navina Insert",
    spec: "Single-use rectal insert · sizes S/M/L · latex-free",
    category: "bowel",
    nordicEcolabel: false,
    summary: {
      en: "Soft single-use rectal insert that helps hold back leakage between bowel emptyings.",
      sv: "Mjukt rektalt engångsinlägg som hjälper till att hålla emot läckage mellan tarmtömningar.",
      fi: "Pehmeä kertakäyttöinen peräsuolen sisäke, joka auttaa estämään vuotoa suolentyhjennysten välillä.",
      da: "Blødt rektalt engangsindlæg, der hjælper med at holde på lækage mellem tarmtømninger.",
      no: "Mykt rektalt engangsinnlegg som hjelper med å holde igjen lekkasje mellom tarmtømminger.",
    },
    indications: navinaInsertIfu.indications,
    instructions: [
      {
        title: withDa("Insertion", "Indføring"),
        text: withDa("Wash your hands.", "Vask dine hænder."),
        image: "/images/instructions/navina-insert/1.png",
      },
      {
        title: withDa("Insertion", "Indføring"),
        text: withDa("Open the packaging and remove the device.", "Åben pakken og tag enheden ud."),
        image: "/images/instructions/navina-insert/2.png",
      },
      {
        title: withDa("Insertion", "Indføring"),
        text: withDa(
          "Place yourself in a relaxed, comfortable position, such as lying on a bed. Hold the pre-lubricated insert by the white plastic applicator and align the tip of the bulb with the anus.",
          "Placer dig i en afslappet, behagelig stilling, f.eks. liggende på sengen eller siddende på toilettet. Hold i den hvide applikator, og sæt spidsen af den forsmurte prop ved din anus.",
        ),
        image: "/images/instructions/navina-insert/3.png",
      },
      {
        title: withDa("Insertion", "Indføring"),
        text: withDa(
          "Relax your muscles and gently insert the Navina insert until the retainer rests on the anus.",
          "Slap af i dine muskler og før forsigtigt proppen ind, indtil håndtaget sidder ved anus.",
        ),
        image: "/images/instructions/navina-insert/4.png",
      },
      {
        title: withDa("Insertion", "Indføring"),
        text: withDa(
          "Withdraw the applicator and discard the applicator and packaging with the normal trash.",
          "Træk applikatoren ud, og bortskaf den sammen med indpakningen i restaffald.",
        ),
        image: "/images/instructions/navina-insert/5.png",
      },
      {
        title: withDa("Insertion", "Indføring"),
        text: withDa("Wash your hands.", "Vask dine hænder."),
        image: "/images/instructions/navina-insert/6.png",
      },
      {
        title: withDa("Removal", "Udtagning"),
        text: withDa(
          "Grasp the external retainer and gently pull to remove the device.",
          "Tag fat i håndtaget, der sidder eksternt og træk forsigtigt, for at fjerne proppen.",
        ),
        image: "/images/instructions/navina-insert/7.png",
      },
      {
        title: withDa("Removal", "Udtagning"),
        text: withDa(
          "Discard the device with the normal waste. Flushing of the device or the device applicator is not recommended.",
          "Bortskaf proppen i det normale restaffald. Det anbefales ikke, at skylle proppen eller applikatoren i toilettet.",
        ),
        image: "/images/instructions/navina-insert/8.png",
      },
      {
        title: withDa("Removal", "Udtagning"),
        text: withDa("Wash your hands.", "Vask dine hænder."),
        image: "/images/instructions/navina-insert/9.png",
      },
    ],
    image: "/media/navina-insert-device.png",
    safety: navinaInsertIfu.safety,
    contraindications: navinaInsertIfu.contraindications,
    warningSigns: navinaInsertIfu.warningSigns,
    storage:
      "Store dry at room temperature in the sealed wrapper. Do not use if the wrapper is damaged or the expiry date has passed.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

/** True when the product is offered in this market. */
export function isProductAvailable(product: Product, locale: LocaleCode): boolean {
  return !product.unavailableLocales?.includes(locale);
}
