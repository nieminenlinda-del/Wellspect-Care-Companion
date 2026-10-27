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
import elleCapDa from "@/assets/elle-da.vtt.asset.json";
import elleProCapDa from "@/assets/elle-pro-da.vtt.asset.json";
import origoCapEn from "@/assets/origo-en.vtt.asset.json";
import elleCapEn from "@/assets/elle-en.vtt.asset.json";
import elleProCapEn from "@/assets/elle-pro-en.vtt.asset.json";
import elleCapFi from "@/assets/elle-fi.vtt.asset.json";
import elleProCapFi from "@/assets/elle-pro-fi.vtt.asset.json";
import elleCapNo from "@/assets/elle-no.vtt.asset.json";
import elleProCapNo from "@/assets/elle-pro-no.vtt.asset.json";
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
import { origoSleeveIfu } from "@/data/ifu-origo-sleeve";
import { origoSleeveIntro, origoSleeveNote, origoSleeveSteps } from "@/data/origo-sleeve-guide";
import {
  ellePdfSteps,
  elleProPdfSteps,
  origoProPdfNote,
  origoProPdfSteps,
  sleeveEnPdfSteps,
} from "@/data/pdf-step-guides";
import { navinaInsertIfu, navinaMiniIfu } from "@/data/ifu-navina";
import { navinaClassicIfu } from "@/data/ifu-navina-classic";
import { navinaSmartIfu } from "@/data/ifu-navina-smart";
import { navinaClassicCone, navinaSmartCone } from "@/data/navina-cone-guides";
import {
  miniWithTubeLabel,
  miniWithoutTubeLabel,
  navinaMiniWithTube,
  navinaMiniWithoutTube,
} from "@/data/navina-mini-guides";

export type CategoryId = "women" | "men" | "bowel" | "contact";

export type Localized = Record<LocaleCode, string>;

/** Optional WebVTT caption tracks per app language. */
export type Captions = Partial<Record<LocaleCode, string>>;

const origoCaptions: Captions = {
  en: origoCapEn.url,
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
    en: "IC – women",
    sv: "RIK – kvinnor",
    fi: "Toistokatetrointi – naiset",
    da: "RIK – kvinder",
    no: "RIK – kvinner",
  },
  men: {
    en: "IC – men",
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
/** Full string for every locale, or only the locales that have approved copy. */
export type LocalizedText = string | Partial<Record<LocaleCode, string>>;

export type InstructionStep =
  | string
  | {
      text: LocalizedText;
      title?: LocalizedText;
      image?: string;
      /** Sheet label shown on the illustration badge. Defaults to 1, 2, 3… */
      label?: string;
    };

export const localizedText = (value: LocalizedText, locale: LocaleCode): string =>
  typeof value === "string" ? value : (value[locale] ?? "");

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
  /** Shared across locales, or one line per locale when the wording differs. */
  spec: LocalizedText;
  category: CategoryId;
  /**
   * Markets where this product is not sold. Omitted means it is available
   * in every locale. The home list, search, and category counts skip these
   * markets through `isProductAvailable`. A direct product link redirects
   * to that product's category list.
   */
  unavailableLocales?: LocaleCode[];
  nordicEcolabel: boolean;
  /** Official product photo URL (CDN asset). Optional. */
  image?: string;
  /** Official product wordmark/logo URL (CDN asset). Optional. */
  logo?: string;
  /**
   * Plain-text set beside the wordmark when the variant has no logo of its
   * own. “Sleeve” next to the LoFric Origo mark.
   */
  logoSuffix?: string;
  /** Optional instructional video (CDN asset URL) shown in the "How to use" tab. */
  videoUrl?: string;
  /**
   * Per-market instructional video. A locale listed here plays that file
   * instead of `videoUrl`. Locales that are not listed keep `videoUrl`.
   * A locale dub does not inherit caption tracks from other languages;
   * only a `captions` entry for that same locale is shown.
   */
  videoByLocale?: Partial<Record<LocaleCode, string>>;
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
  /** Preamble shown above the illustrated steps (quick-guide intro). */
  instructionsIntro?: LocalizedText;
  /** Closing notice shown under the illustrated steps (for example IMPORTANT). */
  instructionsNote?: LocalizedText;
  instructions: InstructionStep[];
  /**
   * Locale-specific step list. When set, that locale uses these steps
   * instead of `instructions`. Other locales keep `instructions`.
   */
  instructionsByLocale?: Partial<Record<LocaleCode, InstructionStep[]>>;
  /**
   * Optional cone quick-guide. Shown as a second tab only in locales that
   * have copy. Other locales stay on the catheter guide.
   */
  coneInstructions?: InstructionStep[];
  /**
   * When set, these tabs replace the catheter/cone pair. The first guide
   * with copy is the default. A tab is omitted in locales that lack a label
   * or lack step copy.
   */
  instructionGuides?: NamedInstructionGuide[];
  safety: LocalizedText[];
  contraindicationsIntro?: LocalizedText;
  contraindications: LocalizedText[];
  warningSigns: LocalizedText[];
  emergencyWarning?: LocalizedText;
  storage: LocalizedText;
};

/** True when a product has illustrated quick-guide steps (or an extra illustrated guide). */
export const instructionStepsFor = (product: Product, locale: LocaleCode): InstructionStep[] =>
  product.instructionsByLocale?.[locale] ?? product.instructions;

export const hasImageGuide = (product: Product) =>
  product.instructions.some((step) => Boolean(stepImage(step))) ||
  Object.values(product.instructionsByLocale ?? {}).some((steps) =>
    steps.some((step) => Boolean(stepImage(step))),
  ) ||
  Boolean(product.coneInstructions?.some((step) => Boolean(stepImage(step)))) ||
  Boolean(
    product.instructionGuides?.some((guide) =>
      guide.steps.some((step) => Boolean(stepImage(step))),
    ),
  ) ||
  Boolean(product.extraGuide?.steps.some((step) => Boolean(stepImage(step))));

/** True when every step has non-empty copy for this locale. */
export const guideHasCopy = (steps: InstructionStep[], locale: LocaleCode) =>
  steps.length > 0 && steps.every((step) => stepText(step, locale).trim().length > 0);

export type InstructionGuideView = {
  id: string;
  label: string;
  steps: InstructionStep[];
};

/** A selectable quick-guide tab. The label is localized; empty locales hide the tab. */
export type NamedInstructionGuide = {
  id: string;
  label: LocalizedText;
  steps: InstructionStep[];
};

/** Catheter guide, plus the cone guide when this locale has cone copy. */
export function availableInstructionGuides(
  product: Product,
  locale: LocaleCode,
  labels: { catheter: string; cone: string },
): InstructionGuideView[] {
  if (product.instructionGuides?.length) {
    return product.instructionGuides.flatMap((guide) => {
      const label = localizedText(guide.label, locale).trim();
      if (!label || !guideHasCopy(guide.steps, locale)) return [];
      return [{ id: guide.id, label, steps: guide.steps }];
    });
  }
  const guides: InstructionGuideView[] = [
    { id: "catheter", label: labels.catheter, steps: instructionStepsFor(product, locale) },
  ];
  if (product.coneInstructions && guideHasCopy(product.coneInstructions, locale)) {
    guides.push({ id: "cone", label: labels.cone, steps: product.coneInstructions });
  }
  return guides.filter((guide) => guideHasCopy(guide.steps, locale));
}

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

export const products: Product[] = [
  {
    id: "lofric-elle-pro",
    logo: elleProLogo.url,
    videoUrl: elleProVideo.url,
    captions: elleProCaptions,
    brand: "LoFric",
    name: "LoFric Elle Pro",
    spec: "CH 10–14 · 10 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-elle-pro.png",
    summary: {
      en: "LoFric® Elle™ Pro, designed for women by women, is a hydrophilic intermittent catheter. LoFric Elle Pro was designed to support catheterization by helping users with visibility and positioning during use. In user feedback, participants reported that the L-shaped handle supported visibility when using a mirror, helped them locate the urethra more easily, and supported a more upright sitting position during catheterization. Introducing twelve smooth Pro eyelets developed to further simplify catheterization, LoFric Elle Pro is designed to allow for bladder emptying in one free flow, without the need for repositioning. LoFric Elle Pro is slim, discreet and convenient to carry, reseal and dispose of.",
      sv: "LoFric® Elle™ Pro, designad för kvinnor av kvinnor, är en hydrofil tappningskateter för engångsbruk. LoFric Elle Pro var utformad för att stödja kateterisering genom att hjälpa användare att se och hålla dem i rätt position under användning. I användarfeedback rapporterade deltagarna att det L-formade handtaget förbättrade synbarheten när de använde en spegel, hjälpte dem att enklare lokalisera urinröret, och stödde en mer upprätt sittställning under kateterisering. LoFric Elle Pro introducerar tolv skonsamma Pro -kateterögon som utvecklats för att ytterligare förenkla kateterisering, och är utformad för att möjliggöra blåstömning i ett fritt flöde, utan behov av repositionering. LoFric Elle Pro är liten, diskret och bekväm att bära med sig, återförsluta och kassera.",
      fi: "LoFric Elle™ Pro on hydrofiilinen kertakatetri, jonka naiset ovat suunnitelleet naisille. LoFric Elle Pro on suunniteltu tukemaan katetrointia auttamalla käyttäjiä näkyvyyden ja asennon säilyttämisessä käytön aikana. Käyttäjäpalautteessa osallistujat ilmoittivat, että L-muotoinen kahva paransi näkyvyyttä peiliä käytettäessä, auttoi heitä paikantamaan virtsaputken helpommin ja tuki pystysuorampaa istuma-asentoa katetroinnin aikana. LoFric Elle Pro, jossa on 12 sileää Pro -silmäaukkoa, on kehitetty edelleen yksinkertaistamaan katetrointia. Se on suunniteltu mahdollistamaan virtsarakon tyhjentyminen yhdellä vapaalla virtauksella ilman uudelleenasettelun tarvetta. LoFric Elle Pro on ohut, huomaamaton ja kätevä kuljettaa mukana, sulkea uudelleen ja hävittää.",
      da: "LoFric® Elle™ Pro, designet til kvinder af kvinder, er et hydrofilt intermitterende kateter. LoFric Elle Pro er designet til at understøtte kateterisering ved at hjælpe brugerne til bedre udsyn og positionering under brug. I brugernes feedback rapporterede deltagerne, at det L-formede håndtag understøttede udsynet, når de brugte et spejl, hjalp dem til at finde urinrøret nemmere og understøttede en mere oprejst siddestilling under kateterisering. LoFric Elle Pro introducerer 12 glatte Pro kateterøjne, der er udviklet til at forenkle kateteriseringen, og designet til at muliggøre tømning af blæren i én fri strøm uden behov for repositionering. LoFric Elle Pro er lille, diskret og nem at tage med sig, genforsegle og bortskaffe.",
      no: "LoFric® Elle™ Pro, designet av kvinner for kvinner, er et hydrofilt intermitterende kateter. LoFric Elle Pro ble utviklet for å støtte kateterisering og å hjelpe brukerne med å sikre oversikt og posisjonering under bruk. I brukernes tilbakemeldinger rapporterte deltakerne at det L-formede håndtaket gir bedre oversikt når du bruker et speil, hjalp dem med å finne urinrøret enklere og støttet en mer oppreist sittestilling under kateterisering. LoFric Elle Pro har 12 Pro øyne. LoFric Elle Pro har blitt udviklet for å forenkle kateteriseringen ytterligere, og er designet for å muliggjøre tømming av blæren i én fri strøm, uten behov for posisjoneringen. LoFric Elle Pro er liten, diskret og praktisk å bære, forsegle på nytt og kaste.",
    },
    indications: elleProIfu.indications,
    instructions: elleProPdfSteps,
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
    spec: "CH 10–14 · 10 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-elle.png",
    summary: {
      en: "LoFric® Elle™, designed for women by women, is a hydrophilic intermittent catheter. LoFric Elle was designed to support catheterization by helping users with visibility and positioning during use. In user feedback, participants reported that the L-shaped handle supported visibility when using a mirror, helped them locate the urethra more easily, and supported a more upright sitting position during catheterization. With 2 eyelets, LoFric Elle is designed to allow for bladder emptying in one free flow, without the need for repositioning. LoFric Elle is slim, discreet and convenient to carry, reseal and dispose of.",
      sv: "LoFric® Elle™, designad för kvinnor av kvinnor, är en hydrofil tappningskateter för engångsbruk. LoFric Elle var utformad för att stödja kateterisering genom att hjälpa användare att se och hålla dem i rätt position under användning. I användarfeedback rapporterade deltagarna att det L-formade handtaget förbättrade synbarheten när de använde en spegel, hjälpte dem att enklare lokalisera urinröret, och stödde en mer upprätt sittställning under kateterisering. LoFric Elle har 2 kateterögon och är utformad för att möjliggöra blåstömning i ett fritt flöde, utan behov av repositionering. LoFric Elle är liten, diskret och bekväm att bära med sig, återförsluta och kassera.",
      fi: "LoFric Elle™ on hydrofiilinen kertakatetri, jonka naiset ovat suunnitelleet naisille. LoFric Elle on suunniteltu tukemaan katetrointia auttamalla käyttäjiä näkyvyyden ja asennon säilyttämisessä käytön aikana. Käyttäjäpalautteessa osallistujat ilmoittivat, että L-muotoinen kahva paransi näkyvyyttä peiliä käytettäessä, auttoi heitä paikantamaan virtsaputken helpommin ja tuki pystysuorampaa istuma-asentoa katetroinnin aikana. LoFric Elle, jossa on kaksi silmäaukkoa, on kehitetty edelleen yksinkertaistamaan katetrointia. Se on suunniteltu mahdollistamaan virtsarakon tyhjentyminen yhdellä vapaalla virtauksella ilman uudelleenasettelun tarvetta. LoFric Elle on ohut, huomaamaton ja kätevä kuljettaa mukana, sulkea uudelleen ja hävittää.",
      da: "LoFric® Elle™, designet til kvinder af kvinder, er et hydrofilt intermitterende kateter. LoFric Elle er designet til at understøtte kateterisering ved at hjælpe brugerne til bedre udsyn og positionering under brug. I brugernes feedback rapporterede deltagerne, at det L-formede håndtag understøttede udsynet, når de brugte et spejl, hjalp dem til at finde urinrøret nemmere og understøttede en mere oprejst siddestilling under kateterisering. LoFric Elle introducerer 2 kateterøjne, der er udviklet til at forenkle kateteriseringen, og designet til at muliggøre tømning af blæren i én fri strøm uden behov for repositionering. LoFric Elle er lille, diskret og nem at tage med sig, genforsegle og bortskaffe.",
      no: "LoFric® Elle™, designet av kvinner for kvinner, er et hydrofilt intermitterende kateter. LoFric Elle ble utviklet for å støtte kateterisering og å hjelpe brukerne med å sikre oversikt og posisjonering under bruk. I brukernes tilbakemeldinger rapporterte deltakerne at det L-formede håndtaket gir bedre oversikt når du bruker et speil, hjalp dem med å finne urinrøret enklere og støttet en mer oppreist sittestilling under kateterisering. LoFric Elle har 2 øyne. LoFric Elle har blitt udviklet for å forenkle kateteriseringen ytterligere, og er designet for å muliggjøre tømming av blæren i én fri strøm, uten behov for posisjoneringen. LoFric Elle er liten, diskret og praktisk å bære, forsegle på nytt og kaste.",
    },
    indications: elleProIfu.indications,
    instructions: ellePdfSteps,

    safety: elleProIfu.safety,
    contraindications: elleProIfu.contraindications,
    warningSigns: elleProIfu.warningSigns,
    storage: elleProIfu.storage,
  },
  {
    id: "lofric-sense",
    logo: senseLogo.url,
    videoUrl: senseVideo.url,
    // Swedish, Danish, and Norwegian films have subtitles burned into the picture.
    videoByLocale: {
      sv: "/media/lofric-sense-sv.mp4",
      da: "/media/lofric-sense-da.mp4",
      no: "/media/lofric-sense-no.mp4",
    },
    brand: "LoFric",
    name: "LoFric Sense",
    spec: "CH 8–14 · 15 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-sense.png",
    summary: {
      en: "LoFric® Sense™ is a hydrophilic intermittent catheter, tailor-made for women and their needs. The ergonomic grip allows for a better grip and non-touch technique. It’s easy and discreet to carry and use anywhere.",
      sv: "LoFric® Sense™ är en hydrofil tappningskateter, skräddarsydd för kvinnor och deras behov. Det ergonomiska handtaget ger ett bra grepp och möjliggör non-touch-teknik. Den är diskret och enkel att ta med och använda var som helst.",
      fi: "LoFric® Sense™ on hydrofiilinen virtsakatetri, joka on räätälöity naisille ja heidän tarpeisiinsa. Ergonominen kahva mahdollistaa paremman otteen eikä katetriin tarvitse koskea paljain käsin. Sitä on helppoa ja huomaamatonta kuljettaa mukana ja käyttää missä tahansa.",
      da: "LoFric® Sense™ er et hydrofilt intermitterende kateter skræddersyet til kvinder og deres behov. Det ergonomiske håndtag giver mulighed for et bedre greb og non-touch-teknik. Det er let og diskret at tage med og bruge overalt.",
      no: "LoFric® Sense™ er et hydrofilt kateter skreddersydd for kvinner og deres behov. Det ergonomiske håndtaket gjør det mulig å få et bedre grep med non-touch-teknikk. Det er lett å bruke og taes med overalt.",
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
    spec: "CH 6–18 · 15/20 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-primo.webp",
    summary: {
      en: "LoFric® Primo™ is a hydrophilic, intermittent catheter. It’s packaged with its own salt solution for activation and can be used anywhere. It has an integrated insertion guide allowing non-touch technique. It’s foldable to pocket size, easy and discreet to bring along.",
      sv: "LoFric® Primo™ är en hydrofil tappningskateter. Den ligger förpackad med sterilt vatten och kan användas var som helst. Den har ett integrerad införingshjälpmedel som gör non-touch-teknik möjlig. Den går att vika till fickformat, är diskret och lätt att ta med.",
      fi: "LoFric® Primo™ on hydrofiilinen virtsakatetri. Pakkaus sisältää steriilin suolaliuoksen ja sitä voi käyttää missä tahansa. Integroitu asetin takaa pitävän otteen ja kosketuksettoman tekniikan. Se on taitettavissa taskukokoon, jolloin se on helppo kuljettaa mukana.",
      da: "LoFric® Primo™ er et hydrofilt intermitterende kateter. Det er pakket med sit eget sterile vand, og det kan bruges alle steder. Det har et integreret håndtag, der gør non-touch-teknik muligt. Det er foldbart til lommestørrelse, og det er diskret at have med sig.",
      no: "LoFric® Primo™ er et hydrofilt intermitterende kateter. I pakken finnes det en liten pose med sterilt vann og det kan brukes overalt. Kateteteret har en integrert innføringshylse som gjør det mulig å benytte seg av en non-touch-teknikk. Pakken kan brettes og får dermed plass i lommen.",
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
    // The Danish film demonstrates both female and male insertion, so both
    // Hydro-Kit products play it. Subtitles are not a separate track.
    videoByLocale: {
      da: "/media/lofric-hydro-kit-da.mp4",
    },
    brand: "LoFric",
    name: "LoFric Hydro-Kit",
    spec: "CH 8–18 · 20 cm",
    category: "women",
    nordicEcolabel: true,
    image: "/media/lofric-hydro-kit.png",
    summary: {
      en: "LoFric® Hydro-Kit™ is an all-in-one hydrophilic catheter kit for intermittent catheterization. It has an integrated collection bag and is ready to use anywhere. The loops allows easy opening, the textured Insertion Grip for better grip and allowing non-touch technique. Thanks to the long neck it can be hung over the knee for convenient catheterization.",
      sv: "LoFric® Hydro-Kit™ är det kompletta hydrofila kateter-setet med både LoFric-kateter, vattenpåse med saltlösning och uppsamlingspåse. Du blir oberoende av tillgång till toalett eller vatten så den kan användas varsom helst.",
      fi: "LoFric® Hydro-Kit™ on täydellinen hydrofiilinen katetripakkaus toistokatetrointiin. Siinä on kiinteä keräyspussi, ja se on valmis käytettäväksi missä tahansa. Silmukoiden ansiosta avaaminen on helppoa ja kuviollinen kahvaosa takaa hyvän otteen eikä katetriin tarvitse koskettaa paljain käsin. Pitkän kaulaosan ansiosta pussin voi ripustaa polven päälle katetroinnin helpottamiseksi.",
      da: "LoFric® Hydro-Kit™ er et \"alt i ét\" hydrofilt katetersæt til intermitterende kateterisering. Det har en integreret opsamlingspose og er klart til brug overalt. Løkkerne muliggør en let åbning, og det teksturerede indføringshåndtag giver et bedre greb og mulighed for non-touch-teknik. Takket være den lange hals kan det hænges over knæet for nem kateterisering.",
      no: "LoFric® Hydro-Kit™ er et hydrofilt alt-i-ett-katetersett for intermitterende kateterisering. Det har en integrert oppsamlingspose og er klart til bruk hvor som helst. Løkkene gjør det enkelt å åpne, og den strukturerte innføringshylsen sørger for bedre grep og innsetting uten direkte berøring. Den lange halsen gjør at det kan henges over kneet for praktisk kateterisering.",
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
    spec: "CH 6–18 · 15/20 cm",
    category: "women",
    nordicEcolabel: false,
    image: "/media/lofric-classic.png",
    summary: {
      en: "LoFric® is the first hydrophilic catheter developed for intermittent catheterization. It can be used at home, in hospitals as well as out and about. It requires clean water to activate the unique Urotonic™ Surface Technology coating on the catheter tube.",
      sv: "LoFric® är den första hydrofila tappningskatetern som utvecklades för Ren Intermittent Kateterisering. Den passar att använda i hemmet, i sjukhusmiljö eller var du än befinner dig. LoFric behöver rent vatten för aktivering av den unika ytan Urotonic™ Surface Technology.",
      fi: "LoFric® on ensimmäinen hydrofiilinen toistokatetrointiin kehitetty katetri. Sitä voi käyttää kotona, sairaalassa ja matkustaessa. Katetrin pinnan ainutlaatuinen Urotonic™ Pintarakenne vaatii aktivointiin puhdasta vettä.",
      da: "LoFric® er det første hydrofile kateter, der blev udviklet til intermitterende kateterisering. Det kan bruges hjemme, på hospitalet eller hvor end, det passer dig. Den unikke Urotonic™ Surface Technology overflade på selve kateteret skal aktiveres med rent vand.",
      no: "LoFric® er det første hydrofile kateter utviklet for ren intermitterende kateterisering. Den kan brukes hjemme, på sykehus og ute. Det krever rent vann for å aktivere unike Urotonic™ Surface Technology belegg på kateterrøret",
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
    spec: "CH 12–16 · 40 cm",
    category: "men",
    nordicEcolabel: true,
    image: "/media/lofric-origo-pro.png",
    summary: {
      en: "Introducing 12 smooth Pro eyelets, developed to further simplify catheterization. LoFric® Origo™ Pro eyelets are designed to allow complete bladder emptying without repositioning the catheter. LoFric Origo Pro is a hydrophilic intermittent catheter. It’s foldable to pocket size, discreet and easy to carry and use anywhere. LoFric Origo Pro comes with a flexible tip and an extendable protective sleeve for hygienic insertion.",
      sv: "Vi introducerar 12 skonsamma Pro-kateterögon, utvecklade för att ytterligare förenkla kateterisering. LoFric® Origo Pro kateterögon är utformade för att möjliggöra fullständig blåstömning utan behov av repositionering. LoFric Origo Pro är en hydrofil tappningskateter för engångsbruk. Den kan vikas till fickformat vilket gör LoFric Origo Pro diskret och enkel att bära med sig och använda var som helst. LoFric Origo Pro finns med en flexibel katetertipp och ett utdragbart skyddshölje för hygienisk införing.",
      fi: "LoFric Origo Pro on hydrofiilinen katetri toistokatetrointiin. Siinä on 12 sileää Pro-silmää, jotka on kehitetty helpottamaan katetrointia entisestään. LoFric® Origo™ Pro -silmät on suunniteltu mahdollistamaan rakon täydellinen tyhjentäminen ilman katetrin uudelleenasettelua.",
      da: "Vi introducerer 12 Pro kateterøjne, der er udviklet til at forenkle kateteriseringen yderligere. LoFric® Origo™ Pro kateterøjne er designet til at muliggøre fuldstændig tømning af blæren uden at repositionere kateteret. LoFric Origo Pro er et hydrofilt kateter. Det kan foldes sammen til lommestørrelse, er diskret og nemt at tage med og bruge overalt. LoFric Origo Pro har en fleksibel spids og et beskyttelseshylster, der kan udvides til hygiejnisk brug.",
      no: "Vi introduserer flere glatte Pro-øyne, utviklet for å forenkle kateteriseringen ytterligere. LoFric® Origo™ Pro kateterøyne er utformet for å muliggjøre fullstendig tømming av blæren uten å måtte reposisjonere kateteret. LoFric Origo Pro er et hydrofilt intermitterende kateter. Den er sammenleggbar til lommestørrelse, diskret og enkel å bære og bruke overalt. LoFric Origo Pro leveres med en fleksibel spiss og et uttrekkbart beskyttelseshylse for hygienisk innsetting.",
    },
    indications: origoIfu.indications,
    instructions: origoProPdfSteps,
    instructionsNote: origoProPdfNote,

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
    // Swedish, Finnish, Danish, and Norwegian films have subtitles burned
    // into the picture, so those locales do not use the shared film's WebVTT.
    videoByLocale: {
      sv: "/media/lofric-origo-sv.mp4",
      fi: "/media/lofric-origo-fi.mp4",
      da: "/media/lofric-origo-da.mp4",
      no: "/media/lofric-origo-no.mp4",
    },
    captions: origoCaptions,
    brand: "LoFric",
    name: "LoFric Origo",
    spec: "CH 8–18 · 30/40 cm",
    category: "men",
    nordicEcolabel: true,
    image: "/media/lofric-origo.png",
    summary: {
      en: "User-friendly and safe, easily folded to pocket size. LoFric® Origo™ is a hydrophilic intermittent catheter. It’s foldable to pocket size, discreet and easy to carry and use anywhere. Choose between the insertion grip or the extendable protective sleeve* to achieve a hygienic insertion. * Available with Nelaton and Flexible tips",
      sv: "Användarvänlig och säker, vikbar till fickformat. LoFric® Origo™ är en hydrofil tappningskateter för engångsbruk. Den kan vikas till fickformat och gör LoFric Origo diskret och enkel att bära med sig och använda var som helst. Välj mellan det justerbara handtaget eller det heltäckande skyddshöljet* för hygienisk kateterisering. * Finns med Nelaton- och Flexible-tipp.",
      fi: "Käyttäjäystävällinen ja turvallinen, helposti taitettavissa taskukokoon. LoFric® Origo™ on hydrofiilinen kertakatetri. Se on taitettavissa taskukokoon, huomaamaton ja helppo kuljettaa mukana minne tahansa. Valitse joko liikuteltava asetin tai liikuteltava hygieniasuoja* hygieenisen asettamisen varmistamiseksi. * Saatavana Nelaton- ja Flexible-kärjellä.",
      da: "Brugervenligt og sikkert, let at folde til lommestørrelse. LoFric® Origo™ er et hydrofilt intermitterende kateter. Det er foldbart til lommestørrelse, diskret og let at have med sig hvor som helst. Vælg mellem indføringsgrebet eller beskyttelseshylster* for at opnå en hygiejnisk indføring. * Tilgængelig med Nelaton og Flexible spidser",
      no: "Brukervennlig og trygg, kan enkelt brettes og puttes i lommen. LoFric® Origo™ er et hydrofilt intermitterende kateter. Det kan brettes og puttes i lommen, diskret og lett å ta med seg og kan brukes over alt. Velg mellom innføringsgrepet eller den heldekkende og beskyttende innføringshylsen* for en hygienisk innføring. * finnes med Nelaton og Fleksibel tupp",
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
    // Male articles only (Nelaton 446 and Flexible 448) on every market,
    // so there is no female product. No Sleeve wordmark exists; the Origo
    // mark is shown with “Sleeve” set beside it.
    id: "lofric-origo-sleeve",
    image: "/media/lofric-origo-sleeve.png",
    logo: "/media/lofric-origo-wordmark.svg",
    logoSuffix: "Sleeve",
    videoUrl: "/media/lofric-origo-sleeve.mp4",
    // sv, fi, da, and no are dubbed films. Their subtitles are burned into
    // the picture, so they have no caption track. en keeps videoUrl and
    // the English WebVTT.
    videoByLocale: {
      sv: "/media/lofric-origo-sleeve-sv.mp4",
      fi: "/media/lofric-origo-sleeve-fi.mp4",
      da: "/media/lofric-origo-sleeve-da.mp4",
      no: "/media/lofric-origo-sleeve-no.mp4",
    },
    captions: { en: "/media/lofric-origo-sleeve-en.vtt" },
    brand: "LoFric",
    name: "LoFric Origo Sleeve",
    spec: "CH 12–16 · 40 cm",
    category: "men",
    nordicEcolabel: true,
    summary: {
      en: "LoFric® Origo™, single use, hydrophilic urinary catheter with salt solution for activation. Protective sleeve for excellent control allows for non-touch technique. Foldable into handy, discreet pocket size.",
      sv: "LoFric® Origo™, hydrofil tappningskateter för engångsbruk med bipackad saltlösning för aktivering. Skyddshölje för utmärkt kontroll möjliggör non-touch-teknik. Vikbar till fickformat.",
      fi: "LoFric® Origo™, kertakäyttöinen hydrofiilinen virtsakatetri ja suolaliuos aktivointia varten. Hygieniasuoja takaa paremman otteen ilman, että katetrin letkuosaan tarvitsee koskea paljain käsin. Voidaan taittaa kätevään, huomaamattomaan taskukokoon.",
      da: "LoFric® Origo™, hydrofilt kateter til engangsbrug med vedlagt saltopløsning til aktivering. Beskyttelseshylster for fremragende kontrol og non-touch teknik. Foldbart til at passe i lommen.",
      no: "LoFric® Origo™ er hydrofilt engangs urinkateter for intermitterende kateterisering. Beskyttelseshylse for fullstendig kontroll muliggjør berøringsfri teknikk. Kan brettes sammen og får plass i lommen.",
    },
    indications: origoSleeveIfu.indications,
    instructionsIntro: origoSleeveIntro,
    instructionsNote: origoSleeveNote,
    instructions: origoSleeveSteps,
    instructionsByLocale: { en: sleeveEnPdfSteps },
    safety: origoSleeveIfu.safety,
    contraindicationsIntro: origoSleeveIfu.contraindicationsIntro,
    contraindications: origoSleeveIfu.contraindications,
    warningSigns: origoSleeveIfu.warningSigns,
    storage: origoSleeveIfu.storage,
  },
  {
    id: "lofric-primo",
    logo: primoLogo.url,
    videoUrl: primoVideo.url,
    brand: "LoFric",
    name: "LoFric Primo",
    spec: "CH 8–18 · 40 cm",
    category: "men",
    nordicEcolabel: true,
    image: "/media/lofric-primo.webp",
    summary: {
      en: "LoFric® Primo™ is a hydrophilic, intermittent catheter. It’s packaged with its own salt solution for activation and can be used anywhere. It has an integrated insertion guide allowing non-touch technique. It’s foldable to pocket size, easy and discreet to bring along.",
      sv: "LoFric® Primo™ är en hydrofil tappningskateter. Den ligger förpackad med sterilt vatten och kan användas var som helst. Den har ett integrerad införingshjälpmedel som gör non-touch-teknik möjlig. Den går att vika till fickformat, är diskret och lätt att ta med.",
      fi: "LoFric® Primo™ on hydrofiilinen virtsakatetri. Pakkaus sisältää steriilin suolaliuoksen ja sitä voi käyttää missä tahansa. Integroitu asetin takaa pitävän otteen ja kosketuksettoman tekniikan. Se on taitettavissa taskukokoon, jolloin se on helppo kuljettaa mukana.",
      da: "LoFric® Primo™ er et hydrofilt intermitterende kateter. Det er pakket med sit eget sterile vand, og det kan bruges alle steder. Det har et integreret håndtag, der gør non-touch-teknik muligt. Det er foldbart til lommestørrelse, og det er diskret at have med sig.",
      no: "LoFric® Primo™ er et hydrofilt intermitterende kateter. I pakken finnes det en liten pose med sterilt vann og det kan brukes overalt. Kateteteret har en integrert innføringshylse som gjør det mulig å benytte seg av en non-touch-teknikk. Pakken kan brettes og får dermed plass i lommen.",
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
    // Same Danish film as the women’s Hydro-Kit: it shows both insertions.
    videoByLocale: {
      da: "/media/lofric-hydro-kit-da.mp4",
    },
    brand: "LoFric",
    name: "LoFric Hydro-Kit",
    spec: "CH 8–18 · 40 cm",
    category: "men",
    nordicEcolabel: true,
    image: "/media/lofric-hydro-kit.png",
    summary: {
      en: "LoFric® Hydro-Kit™ is an all-in-one hydrophilic catheter kit for intermittent catheterization. It has an integrated collection bag and is ready to use anywhere. The loops allows easy opening, the textured Insertion Grip for better grip and allowing non-touch technique. Thanks to the long neck it can be hung over the knee for convenient catheterization.",
      sv: "LoFric® Hydro-Kit™ är det kompletta hydrofila kateter-setet med både LoFric-kateter, vattenpåse med saltlösning och uppsamlingspåse. Du blir oberoende av tillgång till toalett eller vatten så den kan användas varsom helst.",
      fi: "LoFric® Hydro-Kit™ on täydellinen hydrofiilinen katetripakkaus toistokatetrointiin. Siinä on kiinteä keräyspussi, ja se on valmis käytettäväksi missä tahansa. Silmukoiden ansiosta avaaminen on helppoa ja kuviollinen kahvaosa takaa hyvän otteen eikä katetriin tarvitse koskettaa paljain käsin. Pitkän kaulaosan ansiosta pussin voi ripustaa polven päälle katetroinnin helpottamiseksi.",
      da: "LoFric® Hydro-Kit™ er et \"alt i ét\" hydrofilt katetersæt til intermitterende kateterisering. Det har en integreret opsamlingspose og er klart til brug overalt. Løkkerne muliggør en let åbning, og det teksturerede indføringshåndtag giver et bedre greb og mulighed for non-touch-teknik. Takket være den lange hals kan det hænges over knæet for nem kateterisering.",
      no: "LoFric® Hydro-Kit™ er et hydrofilt alt-i-ett-katetersett for intermitterende kateterisering. Det har en integrert oppsamlingspose og er klart til bruk hvor som helst. Løkkene gjør det enkelt å åpne, og den strukturerte innføringshylsen sørger for bedre grep og innsetting uten direkte berøring. Den lange halsen gjør at det kan henges over kneet for praktisk kateterisering.",
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
    spec: "CH 8–22 · 40 cm",
    category: "men",
    nordicEcolabel: false,
    image: "/media/lofric-classic.png",
    summary: {
      en: "LoFric® is the first hydrophilic catheter developed for intermittent catheterization. It can be used at home, in hospitals as well as out and about. It requires clean water to activate the unique Urotonic™ Surface Technology coating on the catheter tube.",
      sv: "LoFric® är den första hydrofila tappningskatetern som utvecklades för Ren Intermittent Kateterisering. Den passar att använda i hemmet, i sjukhusmiljö eller var du än befinner dig. LoFric behöver rent vatten för aktivering av den unika ytan Urotonic™ Surface Technology.",
      fi: "LoFric® on ensimmäinen hydrofiilinen toistokatetrointiin kehitetty katetri. Sitä voi käyttää kotona, sairaalassa ja matkustaessa. Katetrin pinnan ainutlaatuinen Urotonic™ Pintarakenne vaatii aktivointiin puhdasta vettä.",
      da: "LoFric® er det første hydrofile kateter, der blev udviklet til intermitterende kateterisering. Det kan bruges hjemme, på hospitalet eller hvor end, det passer dig. Den unikke Urotonic™ Surface Technology overflade på selve kateteret skal aktiveres med rent vand.",
      no: "LoFric® er det første hydrofile kateter utviklet for ren intermitterende kateterisering. Den kan brukes hjemme, på sykehus og ute. Det krever rent vann for å aktivere unike Urotonic™ Surface Technology belegg på kateterrøret",
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
      { label: miniWithTubeLabel, url: navinaMiniTubeVideo.url },
      { label: miniWithoutTubeLabel, url: navinaMiniUsxVideo.url },
    ],
    // Norwegian film replaces both Mini variants. Subtitles are burned in.
    videoByLocale: {
      no: "/media/navina-mini-no.mp4",
    },
    brand: "Navina",
    name: "Navina Mini",
    spec: {
      en: "Low volume TAI, 185 ml",
      sv: "Lågvolymsirrigering, 185 ml",
      da: "Lavt skyl, 185 ml",
      fi: "Matalan volyymin huuhtelu, 185 ml",
      no: "Lavvolum irrigasjon, 185 ml",
    },
    category: "bowel",
    nordicEcolabel: false,
    image: "/media/navina-mini.png",
    summary: {
      en: "Navina Mini is a discreet and intuitive low-volume irrigation solution that can help with symptoms such as incomplete emptying or soiling. With a gentle flush of water, it clears the lower part of the rectum, providing immediate relief and preventing leakage. The squeeze-friendly bulb holds 185ml of water and the cone has a rounded tip for comfortable insertion. Navina Mini also comes with a reusable extension tube if extra reach is required. Discreet and intuitive. Durable design with 60 uses (both water container and extension tube). Rounded tip for comfortable insertion.",
      sv: "Navina Mini är den senaste innovationen i produktsortimentet Navina Tarmskötsel. Navina Mini är en produkt för lågvolymsirrigering som rymmer 185 ml vatten. Det är ett enkelt sätt att tömma nedre delen av tarmen för att lindra symtom som ofullständig tarmtömning.",
      fi: "Navina Mini on uusin innovaatio Navina Bowel Care -tuotevalikoimassa. Navina Mini on pienikokoinen manuaalinen huuhtelulaite, johon mahtuu 185 ml vettä. Se on helppo tapa tyhjentää suolen alaosa oireiden lievittämiseksi, kuten epätäydellinen tyhjennys.",
      da: "Navina Mini er den seneste innovation indenfor Navina Tarmpleje-sortimentet. Navina Mini er et produkt til manuel irrigation med lavt skyl, og det kan indeholde 185 ml. vand. Det er en nem måde at tømme den nederste del af tarmen på for at lette symptomer som ufuldstændig tømning.",
      no: "Navina Mini er det siste tilskuddet til Navina tarmpleie. Navina Mini er et lavvolum irrigasjonsenhet som kan romme 185ml vann. Det er en enkel måte å tømme den nedre delen av tarmen og dermed lette symptomer som for eksempel ufullstendig tømming.",
    },
    indications: navinaMiniIfu.indications,
    instructions: navinaMiniWithoutTube,
    instructionGuides: [
      {
        id: "without",
        label: miniWithoutTubeLabel,
        steps: navinaMiniWithoutTube,
      },
      {
        id: "with",
        label: miniWithTubeLabel,
        steps: navinaMiniWithTube,
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
    videoByLocale: {
      no: "/media/navina-classic-no.mp4",
    },
    brand: "Navina",
    name: "Navina Classic",
    spec: {
      en: "High volume TAI, 1500 ml",
      sv: "Högvolymsirrigering, 1500 ml",
      da: "Højt skyl, 1500 ml",
      fi: "Korkean volyymin huuhtelu, 1500 ml",
      no: "Høyvolum irrigasjon, 1500 ml",
    },
    category: "bowel",
    nordicEcolabel: false,
    image: "/media/navina-classic.png",
    summary: {
      en: "Navina Classic was developed together with users and HCPs with a goal: to make bowel irrigation simple. The manual control unit is intuitive and straight forward, with color-coded connectors and descriptive symbols. Navina Classic is reliable, putting you in control. Two separate hand pumps regulate the inflation of the balloon and instillation of water, so that you can manually adjust to suit your needs. Easy to assemble and use. Reliable, manual control. Control unit can be used for 100 treatments.",
      sv: "Navina Classic är designad med användaren i fokus. Navina Classic är lösningen för dig som behöver använda transanal irrigering och föredrar en manuell hantering. De färgkodade delarna och tydliga symbolerna gör produkten intuitiv och enkel att förstå, montera och använda. De två handpumparna gör det enkelt för dig att pumpa och kontrollera uppblåsningen av ballongen och vattentillförseln.",
      fi: "Navina Classic on suunniteltu käyttäjää ajatellen, ja on oikea valinta jos haluat suorittaa hoidon manuaalisella ohjausyksiköllä. Navina Classic on luotettava ja käyttäjäystävällinen. Tuotteen käyttö on intuitiivista ja helppotajuista värikoodattujen osien ja kuvasymbolien ansiosta. Ballongin täyttäminen ja veden johtaminen tapahtuu helposti ja kontrolloidusti kahden käsipumpun avulla.",
      da: "Navina Classic er designet med brugeren i tankerne. Det er løsningen, hvis du har brug for transanal irrigation og foretrækker en manuel kontrolenhed til at udføre terapien. Navina Classic er et pålideligt og passende valg, og med farvekodede dele og beskrivende symboler er produktet intuitivt og nemt at bruge, og det er enkelt, hvordan man samler og bruger det. De to håndpumper gør det nemt at pumpe og kontrollere ballonens oppustning såvel som vandtilførslen.",
      no: "Navina Classic er utviklet med tanke på brukeren og er løsningen om du foretrekker manuell konroll over prosedyren. Navina Classic er et pålitelig og praktisk valg med fargekoder og symboler for lett å kunne bruke og forstå. De to pumpene på kontrollenheten gjør det lett å pumpe og ha kontroll over både ballongen og instalasjonen av vann.",
    },
    indications: navinaClassicIfu.indications,
    instructions: [
      {
        title: {
          ...withFi("Preparation", "Valmistelu", "Förberedelser"),
          da: "Forberedelse",
          no: "Klargjøring",
        },
        text: {
          ...withFi(
            "1. Fill water to the 0-mark of the container and close the lid. 2. Connect the water container tube between the water container and the control unit (dark blue). 3. Connect the catheter tube between the control unit and the catheter (light blue/white). Note: Follow colour coding and symbols. Use lukewarm (36–38 °C) clean water only. Make sure the safety valve on the lid is not blocked during the procedure.",
            "1. Täytä säiliö vedellä 0-merkkiin asti ja sulje kansi. 2. Liitä vesisäiliöletku vesisäiliön ja ohjausyksikön välille (tummansininen). 3. Liitä katetriletku ohjausyksikön ja katetrin välille (harmaa/valkoinen). Huomaa: Seuraa värikoodeja ja symboleja. Käytä vain kädenlämpöistä, puhdasta vettä (36-38 °C). Varmista, että kannen turvaventtiili ei ole tukossa suolihuuhtelutoimenpiteen aikana.",
            "1. Fyll på med vatten upp till 0-markeringen på behållaren och stäng locket. 2. Anslut vattenbehållaren och kontrollenheten med vattenbehållarens slang (mörkblå). 3. Anslut kontrollenheten och katetern med kateterslangen (ljusblå/vit). Obs! Följ färgkodningen och symbolerna. Använd endast ljummet rent vatten (36–38 °C). Försäkra dig om att säkerhetsventilen på locket inte är blockerad under irrigeringen.",
          ),
          da: "1. Fyld vand i beholderen op til 0-mærket. Luk låget. 2. Montér vandbeholderslangen mellem vandbeholderen og kontrolenheden (mørkeblå). 3. Montér kateterslangen mellem kontrolenheden og katetret (lyseblå/hvid). OBS! Følg farvekoderne og symbolerne. Anvend kun lunkent, rent vand (36–38 °C). Tjek at sikkerhedsventilen på låget ikke er blokeret under irrigation.",
          no: "1. Fyll vann til 0-merket på vannbeholderen og lukk lokket. 2. Koble til slangen mellom vannbeholderen og kontrollenheten (mørkeblå). 3. Koble til slangen mellom kontrollenheten og katetret (lyseblå/hvit). Merk: Følg fargekoder og symboler. Bruk kun lunkent og rent vann (36–38 °C). Kontroller at sikkerhetsventilen på lokket ikke er blokkert under prosedyren.",
        },
        image: "/images/instructions/navina-classic/catheter/1-preparation.png",
      },
      {
        title: {
          ...withFi("Activation", "Aktivointi", "Aktivering"),
          da: "Aktivering",
          no: "Aktivering",
        },
        text: {
          ...withFi(
            "1. Make sure the water flow is opened. 2. Pump water with the dark blue pump until it covers 3/4 of the catheter tube, making it slippery. 3. Close the water flow. Note: Do not add additional lubricant.",
            "1. Varmista, että vesivirta on auki. 2. Täytä katetripussi pumppaamalla vettä tummansinisellä pumpulla kunnes vettä on noin 3/4 katetrin pituudelta. Katetri saa näin liukkaan pinnan. 3. Sulje vesivirta. Huomaa: Älä käytä mitään lisäliukasteita.",
            "1. Kontrollera att vattenflödet är öppet. 2. Pumpa vatten med den mörkblå pumpen tills vattnet täcker katetern och aktiverar den hala ytan. 3. Stäng av vattenflödet. Obs! Inget annat glidmedel behövs.",
          ),
          da: "1. Tjek, at der er åbnet for vandet. 2. Pump vand med den mørkeblå pumpe, til vandet dækker katetret og aktiverer den glatte overflade. 3. Luk af for vandet. OBS! Smørremiddel er ikke nødvendig.",
          no: "1. Kontroller at vanngjennomstrømningen er åpen. 2. Pump vann med den mørkeblå pumpen til 3/4 av kateterslangen er fuktet og glatt. 3. Lukk vanngjennomstrømningen. Merk: Ikke bruk ekstra smøremiddel.",
        },
        image: "/images/instructions/navina-classic/catheter/2-activation.png",
      },
      {
        title: {
          ...withFi("Instillation", "Veden johtaminen", "Tillförsel av vatten"),
          da: "Vandtilførsel",
          no: "Instillasjon",
        },
        text: {
          ...withFi(
            "1. Carefully insert the rectal catheter according to your healthcare professional's instruction. 2. Inflate the balloon with the light blue pump. Never use more than 5 pumps when using the regular catheter. Never use more than 2 pumps when using the small catheter. If repositioning of the catheter is needed, deflate the balloon completely first. The balloon should not be inflated more than 2 times. 3. Gently pull the catheter slightly down to seal the rectum. 4. Open the water flow. 5. Instill the water volume, as indicated by your health care provider, using the dark blue pump. You can stop or pause instillation at any time by releasing the pump and closing the water flow. 6. Close the water flow. Note: Never insert the catheter with force. If experiencing resistance, remove the catheter, and follow the instructions for use troubleshooting section. If resistance continues, stop using irrigation and seek help from a health care professional.",
            "1. Vie rektaalikatetri varovaisesti sisään katetrin kädensijaan asti. 2. Täytä ballonki ilmalla harmaan pumpun avulla: – Älä koskaan käytä yli viittä pumppausta, kun käytät regular-katetria. – Älä koskaan käytä yli kahta pumppausta, kun käytät small-katetria. Huomaa: Jos sinun on säädettävä katetrin asentoa, tyhjennä ballonki ensin kokonaan. 3. Sulje peräsuolesi vetämällä katetria varovaisesti alaspäin. 4. Avaa vesivirta. 5. Johda vettä terveydenhuollon ammattilaisen sinulle neuvoma määrä, käyttäen tummansinistä pumppua. Voit milloin tahansa lopettaa veden johtamisen tai pitää siitä taukoa vapauttamalla pumpun ja sulkemalla vesivirran. 6. Sulje vesivirta. Huomaa: Älä milloinkaan vie katetria peräsuoleen voimaa käyttäen. Jos tunnet vastusta, poista katetri, ja seuraa annettuja käyttöohjeita. Jos vastus jatkuu, lopeta huuhtelu ja kysy neuvoa terveydenhuollon ammattilaiselta.",
            "1. För försiktigt in katetern i ändtarmen till kateterhandtaget. 2. Blås upp ballongen med hjälp av den ljusblå pumpen. Pumpa aldrig mer än 5 gånger när du använder regular katetern. Pumpa aldrig mer än 2 gånger när du använder en small kateter. Om du behöver justera kateterns position ska du släppa ut luften ur ballongen helt och hållet och därefter flytta katetern. 3. Dra försiktigt katetern nedåt för att försluta mot ändtarmen. 4. Öppna vattenflödet. 5. Pumpa in den mängd vatten som sjukvårdspersonalen har angivit med hjälp av den mörkblå pumpen. Du kan när som helst avbryta eller pausa vattentillförseln genom att släppa pumpen. 6. Stäng vattenflödet.",
          ),
          da: "1. Indfør forsigtigt rektalkatetret i endetarmen, til håndtaget. 2. Pust ballonen op med den lyseblå pumpe. Pump aldrig mere end 5 gange, når du anvender Regular kateter. Pump aldrig mere end 2 gange, når du anvender Small kateter. Hvis du har behov for at justere katetrets placering, skal du lukke al luft ud af ballonen og derefter justere katetret. 3. Træk forsigtigt katetret lidt ned for at lukke af for endetarmsåbningen. 4. Åbn for vandet. 5. Pump den mængde vand ind, som sundhedspersonalet har angivet, med den mørkeblå pumpe. Du kan til enhver tid afbryde eller holde en pause med vandtilførslen ved at slippe pumpen. 6. Luk for vandet. Obs! Indfør aldrig keglen med kraft. Hvis der opleves modstand ved indføring af keglen, udtag keglen, og følg vejledningen for problemløsning i brugsvejledningen. Hvis modstand fortsat opleves, ophør med irrigation og søg hjælp hos sundhedspersonalet.",
          no: "1. Sett rektalkatetret forsiktig inn til kateterhåndtaket. 2. Fyll luft i ballongen med den lyseblå pumpen. Bruk aldri mer enn 5 pump ved bruk av typen Regular kateter. Bruk aldri mer enn 2 pump ved bruk av typen Small kateter. Hvis det er nødvendig å sette inn katetret på nytt, tøm ballongen helt først. 3. Dra katetret litt nedover for å tette rundt endetarmen. 4. Åpne vanngjennomstrømningen. 5. Sett inn den vannmengden du har fått opplyst av helsepersonell ved å bruke den mørkeblå pumpen. Du kan når som helst stoppe eller ta en pause i innstallasjonen ved å slippe opp pumpen og lukke vanngjennomstrømningen. 6. Lukk vanngjennomstrømningen. Merk: Sett aldri katetret inn med makt. Hvis du opplever motstand, trekk ut katetret og følg instruksjonene i brukerveilederen i avsnittet for problemløsning.",
        },
        image: "/images/instructions/navina-classic/catheter/3-instillation.png",
      },
      {
        title: {
          ...withFi("Evacuation", "Tyhjennys", "Tömning"),
          da: "Tømning",
          no: "Tømming",
        },
        text: {
          ...withFi(
            "1. Deflate the balloon by pressing the black button. 2. Remove the catheter gently. 3. Allow the bowel to empty. If needed to start emptying, relax for 10–15 minutes, lean forward, cough or massage the abdomen.",
            "1. Tyhjennä ballonki painamalla mustaa painiketta pitkään. 2. Poista katetri varovaisesti. 3. Anna suolen tyhjentyä. Jos suoli ei ala tyhjentyä itsestään, rentoudu 10–15 minuuttia ja yritä sitten nojata eteenpäin, hiero vatsaa tai liikuta ylävartaloa, jotta tyhjenemisprosessi alkaisi.",
            "1. Släpp ut luften ur ballongen genom att trycka på den svarta knappen. 2. Ta försiktigt ut katetern. 3. Låt tarmen tömmas. Om tarmen inte börjar tömmas automatiskt, slappna av i 10–15 minuter, luta dig framåt, hosta eller massera magen.",
          ),
          da: "1. Luk luft ud af ballonen ved tryk på den sorte knap. 2. Tag forsigtigt katetret ud. 3. Lad tarmen tømmes. Hvis tarmen ikke automatisk begynder at tømmes, slap af i 10-15 minutter, læn dig forover, host eller massér maven.",
          no: "1. Tøm luften ut av ballongen ved å trykke på den svarte knappen. 2. Trekk katetret forsiktig ut. 3. La tarmen tømme seg. Hvis det er nødvendig å starte tømmingen, slapp av i 10-15 minutter, bøy deg forover, host eller masser magen.",
        },
        image: "/images/instructions/navina-classic/catheter/4-evacuation.png",
      },
      {
        title: {
          ...withFi("Disassembly", "Purkaminen", "Isärtagning"),
          da: "Afmontering",
          no: "Demontering",
        },
        text: {
          ...withFi(
            "1. Open the water container lid. 2. Disconnect the tubes from the control unit. 3. Empty the water from the tubes. 4. Open the water flow and empty the water from the control unit. 5. Disconnect the single use catheter and dispose of it as household waste. It must not be reused and not flushed down the toilet. 6. Disconnect the tube from the water container and empty the water. 7. Clean and dry the tubing, water container and control unit with a cloth and mild soapy water. Note: Tick a box in the usage calendar (see instructions for use) after each use to keep track of when to exchange the water container and tube set.",
            "1. Avaa vesisäiliön kansi. 2. Irrota letkut ohjausyksiköstä. 3. Poista vesi letkuista. 4. Avaa vesivirta ja tyhjennä vesi ohjausyksiköstä. 5. Irrota kertakäyttöinen katetri ja hävitä kotitalousjätteen mukana. Katetria ei saa käyttää uudelleen eikä sitä saa huuhdella alas wc-pöntöstä. 6. Irrota letku vesisäiliöstä ja poista vesi. 7. Tarvittaessa puhdista ja kuivaa letkusto, vesisäiliö ja ohjausyksikkö laimealla saippuavedellä ja liinalla. Huomaa: Merkitse jokainen huuhtelu käyttökalenteriin (katso käyttöohjeet) voidaksesi seurata, milloin vesisäiliö ja letkusto tulee vaihtaa uuteen.",
            "1. Öppna vattenbehållarens lock. 2. Koppla loss slangarna från kontrollenheten. 3. Töm ut vattnet ur slangarna. 4. Öppna vattenflödet och töm ut vattnet ur kontrollenheten. 5. Koppla loss engångskatetern och kassera den som hushållsavfall. Den får inte återanvändas eller spolas ner i toaletten. 6. Koppla loss slangen från vattenbehållaren och töm ut vattnet. 7. Skölj av slangarna, vattenbehållaren och kontrollenheten, rengör dem med vatten och mild tvål och torka dem. Obs! Markera en ruta i förbrukningsmatrixen (se bruksanvisningen) efter varje användning för att hålla reda på när vattenbehållaren och vattenslangsetet behöver bytas.",
          ),
          da: "1. Åbn vandbeholderlåget. 2. Kobl slangerne fra kontrolenheden. 3. Tøm vand af slangerne. 4. Åbn for vandet og tøm vand af kontrolenheden. 5. Frakobl engangskatetret, og kassér det som husholdningsaffald. Katetret må ikke genbruges og det må ikke skylles ud i toilettet. 6. Kobl slangen fra vandbeholderen og tøm den for vand. 7. Skyl slangerne og vandbeholderen, rengør dem i mildt sæbevand og tør dem. Kontrolenheden må kun aftørres. OBS! Sæt kryds i din brugskalender (se brugsvejledning) efter hver irrigation, for at holde styr på hvornår vandbeholder og slangesæt skal udskiftes.",
          no: "1. Åpne lokket på vannbeholderen. 2. Koble slangene fra kontrollenheten. 3. Tøm vann ut av slangene. 4. Åpne vanngjennomstrømningen og tøm vannet ut av kontrollenheten. 5. Koble fra engangs katetret og kast det i restavfall. Katetret må ikke gjenbrukes eller kastet i toalettet. 6. Koble slangen fra vannbeholderen og tøm ut vannet. 7. Rengjør og tørk slangene, vannbeholderen og kontrollenheten med en klut, mild såpe og vann. Merk: Merk av en boks i kalenderen (se brukerveilederen) etter bruk for å holde rede på når vannbeholderen og slangesettet skal skiftes.",
        },
        image: "/images/instructions/navina-classic/catheter/5-disassembly.png",
      },
    ],
    coneInstructions: navinaClassicCone,
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
      en: "Navina Smart was designed so that everyone, including children and people with reduced hand function, could get precise, safe and controlled bowel irrigation with just the touch of a button. Navina Smart is easy to learn and use. It has built-in safety features and personalised settings to ensure that it delivers the same irrigation, every time. Consistent irrigations, every time, with built-in safety features for balloon size, water volume and flow rate. Easy controlling with buttons instead of a manual pump, which can be helpful for those with reduced hand function. Control unit can be used for 400 treatments, or for two years from the date of first use. Navina Smart app. Navina Smart comes with an app that allows you to track and record your settings and progress in order to optimize your routine or share with your healthcare professional. All data from the latest irrigation, such as balloon size, amount of water, waterflow rate and duration, can be transmitted to the Navina Smart app via Bluetooth.",
      sv: "Navina Smart har en mjukvarustyrd elektronisk pump som blåser upp ballongen och pumpar in vatten i tarmen. Du får exakta, säkra och kontrollerade irrigeringar varje gång med bara en knapptryckning. Den är enkel att lära sig och praktisk att använda. Navina Smart har inbyggt säkerhetsstopp för maximal ballongstorlek, vattenvolym och vattenflödedeshastighet. Få kontroll genom att följa irrigeringen på skärmen. Navina Smart Appen. Navina Smart har en mobilapp där du kan spara och följa dina framsteg och inställningar, för att få information för att optimera din rutin. Alla data från din senaste irrigering, som ballongstorlek, vattenvolym, vattenflödeshastighet och irrigeringstid kan föras över till Navina Smart appen via Bluetooth. I Navina™ Smart appen kan du betygsätta dina irrigeringar och dela dina data med din vårdkontakt om du vill för att kunna utvärdera behandlingen.",
      fi: "Navina Smartissa on elektroniset pumput, jotka täyttävät ballongin ja johtavat veden suoleen. Painikkeet mahdollistavat toimenpiteen täydellisen hallinnan. Se on helppo oppia ja käyttäjäystävällinen. Navina Smart -ohjausyksikössä on sisäänrakennetut turvarajat ballongin enimmäiskokoa, vesimäärää ja virtausnopeutta varten. Sen avulla voit helposti seurata huuhtelun vaiheta toimenpiteen aikana. Navina Smart -sovellus. Navina Smartiin kuuluu sovellus, jonka avulla voit seurata ja tallentaa hoitosi etenemisen ja asetukset sekä saada tietoa, joka auttaa sinua optimoimaan hoito-ohjelmasi. Navina Smart -sovelluksen avulla voit arvioida huuhtelut ja jakaa tuloksesi suoraan terveydenhuollon ammattilaisen kanssa, jotta tämä voi seurata tilannettasi.",
      da: "Navina Smart har software-styrede elektroniske pumper, der puster ballonen op og fører vand ind i tarmen. Et tryk på knappen giver komplet kontrol over proceduren. Det er let at lære og praktisk at bruge. Navina Smart har en indbygget sikkerhed for maksimal ballonstørrelse, vandmængde og vandhastighed. Samtidigt er det nemt at følge selve irrigationen under proceduren. Navina Smart app. Sammen med Navina Smart kommer der en app, der gør det muligt at spore og registrere dine fremskridt og indstillinger samt at få indsigt i, hvordan du optimerer din rutine. Alle data fra dine seneste irrigationer, såsom ballonstørrelse, vandmængde, vandhastighed og tid, kan overføres til Navina Smart app via Bluetooth. Navina Smart app giver dig muligheden for at vurdere og dele dine data med dit sundhedspersonale som evaluering af terapien.",
      no: "Elektronisk transanalt irrigasjonssystem som styrer vannmengde og ballongfylling for deg.",
    },
    indications: navinaSmartIfu.indications,
    instructions: [
      {
        title: {
          ...withFi("Preparation", "Valmistelu"),
          sv: "Förberedelser",
          da: "Forberedelse",
        },
        text: {
          ...withFi(
            "Note: Make sure that the control unit is charged and the parameters are set before starting on this page. 1. Fill with water to the upper mark of the container and close the lid. 2. Connect the water container tube between the water container and the control unit (dark blue). 3. Connect the catheter tube between the control unit and the catheter (light blue/white). Note: Follow color coding and symbols. Use lukewarm (36–38 °C) clean water only.",
            "Huomaa: Varmista, että ohjausyksikkö on ladattu ja parametrit on asetettu ennen kuin aloitat tällä sivulla esitettyjä valmisteluja. 1. Täytä säiliö vedellä säiliössä olevaan 0-merkkiin asti ja sulje kansi. 2. Liitä vesisäiliöletku vesisäiliön ja ohjausyksikön (tummansininen) välille. 3. Liitä katetriletku ohjausyksikön ja katetrin välille (harmaa/valkoinen). Huomaa: Seuraa värikoodeja ja symboleja. Käytä vain kädenlämpöistä, puhdasta vettä (36-38 °C).",
          ),
          sv: "Obs! Kontrollera att enheten är laddad och att alla parametrar är inställda innan du påbörjar den här sidan. 1. Fyll på med vatten upp till 0-markeringen på behållaren och stäng locket. 2. Anslut vattenbehållaren och kontrollenheten med vattenbehållarens slang (mörkblå). 3. Anslut kontrollenheten och katetern med kateterslangen (ljusblå/vit). Obs! Följ färgkodningen och symbolerna. Använd endast ljummet rent vatten (36–38 °C).",
          da: "OBS: Sørg for, at enheden er opladet, og at parametrene er indstillet, før du begynder på denne side. 1. Fyld vand i beholderen, op til 0-mærket, og luk låget. 2. Montér vandbeholderslangen mellem vandbeholderen og kontrolenheden (mørkeblå). 3. Montér kateterslangen mellem kontrolenheden og katetret (lyseblå/hvid). OBS: Følg farvekoderne og symbolerne. Anvend kun lunkent, rent vand (36–38 °C). Tjek at sikkerhedsventilen på låget ikke er blokeret under irrigation.",
        },
        image: "/images/instructions/navina-smart/catheter/1-preparation.png",
      },
      {
        title: {
          ...withFi("Activation", "Aktivointi"),
          sv: "Aktivering",
          da: "Aktivering",
        },
        text: {
          ...withFi(
            "1. Turn on the Navina Smart control unit by pressing the power button. 2. Press any button to go to activation mode. 3. Press and hold the water button to pump water until the catheter is covered with water (making it slippery) and the icon appears on the screen. 4. Press advance when you are ready to continue to instillation mode. Note: Do not add additional lubricant.",
            "1. Käynnistä Navina Smart -ohjausyksikkö painamalla virtapainiketta. 2. Siirry aktivointivaiheeseen painamalla mitä tahansa painiketta. 3. Paina ja pidä vesipainiketta pumpataksesi vettä, kunnes katetri peittyy veteen (katetri saa näin liukkaan pinnan) ja etenemiskuvake ilmestyy näytölle. 4. Paina etenemispainiketta, kun olet valmis asettamaan katetrin ja jatkamaan vedenjohtamistilaan. Huomaa: Älä käytä mitään lisäliukasteita.",
          ),
          sv: "1. Slå på Navina Smart-kontrollenheten genom att trycka på strömknappen. 2. Gå till aktiveringsläget genom att trycka på valfri knapp. 3. Tryck och håll in vattenknappen för att pumpa in vatten tills vattnet täcker katetern och aktiverar den hala ytan och ikonen syns på skärmen. 4. Tryck på knappen för att gå vidare när du är redo att föra in katetern och gå vidare till vattentillförselläget. Obs! Inget annat glidmedel behövs.",
          da: "1. Tænd Navina Smart kontrolenheden ved at trykke på tænd/sluk-knappen. 2. Tryk på en vilkårlig knap for at gå til aktiveringsfunktionen. 3. Tryk på vandknappen og hold den nede for at pumpe vand, til katetret er dækket og aktiverer den glatte overflade. 4. Tryk på videre-knappen, når du er klar til at indføre katetret, og gå til vandtilførselsfunktionen. OBS! Smørremiddel er ikke nødvendigt.",
        },
        image: "/images/instructions/navina-smart/catheter/2-activation.png",
      },
      {
        title: {
          ...withFi("Instillation", "Veden johtaminen"),
          sv: "Tillförsel av vatten",
          da: "Vandtilførsel",
        },
        text: {
          ...withFi(
            "1. Insert the rectal catheter according to your healthcare professional's instruction. 2. Press and hold the balloon button to inflate the catheter balloon until the desired balloon size is reached. If repositioning of the catheter is needed, deflate the balloon completely first. 3. Gently pull the catheter slightly down to seal the rectum. 4. Instill water by pressing the water button. Note: Never insert the catheter with force. If experiencing resistance, remove the catheter, and see the instructions for use troubleshooting section. If resistance continues, stop using irrigation and seek help from a health care professional. Do not turn off the control unit.",
            "1. Aseta katetri terveydenhuoltoammattilaisen ohjeistuksen mukaisesti. 2. Paina ja pidä pallopainiketta katetrin ballongin täyttämiseksi, kunnes haluttu ballongin koko on saavutettu. Jos katetrin asentoa on tarpeen säätää, ballonki on ensin tyhjennettävä kokonaan. 3. Vedä katetria varovasti hieman alaspäin peräsuolen sulkemiseksi. 4. Johda vettä painamalla vesipainiketta. Huomaa: Älä koskaan aseta katetria väkisin. Jos tunnet vastusta, poista katetri ja katso käyttöohjeiden vianmääritysosio. Jos vastus jatkuu, lopeta huuhtelun käyttö ja pyydä apua terveydenhuollon ammattilaiselta. Älä sammuta ohjausyksikköä.",
          ),
          sv: "1. För in rektalkatetern till handtaget enligt instruktionerna du fått från din vårdgivare. 2. Tryck och håll in ballongknappen för att blåsa upp kateterballongen till önskad storlek. Om du behöver justera kateterns position ska du släppa ut luften ur ballongen helt och hållet och därefter flytta katetern. 3. Dra försiktigt katetern lite nedåt för att försluta mot ändtarmen. 4. Tillför vattnet genom att trycka på vattenknappen. Obs! För aldrig in katetern med våld. Om du upplever ett motstånd, avlägsna katetern och läs avsnittet om felsökning i bruksanvisningen. Om motståndet kvarstår, sluta använda irrigering och kontakta din förskrivare för att få hjälp. Stäng inte av kontrollenheten.",
          da: "1. Indfør forsigtigt rektalkatetret i endetarmen til håndtaget. 2. Tryk og hold ballonknappen nede for at oppuste kateterballonen til ønskede størrelse. Hvis du har behov for at justere katetrets placering, skal du lukke al luft ud af ballonen og derefter justere katetret. 3. Træk forsigtigt katetret lidt ned for at lukke af for endetarmsåbningen. 4. Tilfør vandet ved at trykke på vandknappen. OBS: Indsæt aldrig kateteret ved stærk modstand. Hvis du oplever modstand, fjern kateteret, og se afsnittet om fejlfinding i brugsanvisningen. Hvis modstanden fortsætter, stop da irrigationen og søg hjælp fra sundhedspersonalet. Sluk ikke kontrolenheden.",
        },
        image: "/images/instructions/navina-smart/catheter/3-instillation.png",
      },
      {
        title: {
          ...withFi("Evacuation", "Tyhjennys"),
          sv: "Tömning",
          da: "Tømning",
        },
        text: {
          ...withFi(
            "1. Press and hold the deflate button to deflate the balloon completely. 2. Remove the catheter gently. 3. Allow the bowels to empty. If needed to start emptying, relax for 10–15 minutes, lean forward, cough or massage the abdomen. Do not turn off the control unit.",
            "1. Paina ja pidä tyhjennyspainiketta tyhjentääksesi ballongin kokonaan. 2. Poista katetri varovasti. 3. Anna suolen tyhjentyä. Jos suoli ei ala tyhjentyä itsestään, rentoudu 10-15 minuuttia ja yritä sitten nojata eteenpäin, yskäise tai hiero vatsaa tai liikuta ylävartaloa, jotta tyhjeneminen alkaisi. Älä sammuta ohjausyksikköä.",
          ),
          sv: "1. Tryck och håll in knappen för att tömma ballongen helt på luft. 2. Ta försiktigt ut katetern. 3. Låt tarmen tömmas. Om tarmen inte börjar tömmas automatiskt, slappna av i 10–15 minuter, luta dig framåt, hosta eller massera magen. Stäng inte av kontrollenheten.",
          da: "1. Tryk og hold tømningsknappen nede for at lukke al luft ud af ballonen. 2. Tag forsigtigt katetret ud. 3. Lad tarmen tømmes. Hvis tarmen ikke automatisk begynder at tømmes, slap af i 10-15 minutter, læn dig forover, host eller massér maven. Sluk ikke kontrolenheden.",
        },
        image: "/images/instructions/navina-smart/catheter/4-evacuation.png",
      },
      {
        title: {
          ...withFi("Disassembly", "Purkaminen"),
          sv: "Isärtagning",
          da: "Afmontering",
        },
        text: {
          ...withFi(
            "1. Open the water container lid. 2. Disconnect the tubes from the control unit. 3. Empty water from the tubes by raising the disconnected ends. 4. Turn off the Navina Smart control unit and empty water from the control unit. 5. Disconnect the tube from the water container and empty the water container. 6. Disconnect the single use catheter and dispose of it as household waste. It must not be reused and not flushed down the toilet. 7. Clean and dry the tubing and water container with a cloth and mild soapy water. The control unit must only be wiped clean. Note: Tick a box in the usage calendar (see instructions for use) after each use to keep track of when to exchange the water container and tube set. Transfer data: see instructions on opposite side.",
            "1. Avaa vesisäiliön kansi. 2. Irrota letkut ohjausyksiköstä. 3. Poista vesi letkuista nostamalla irrotetut päät ylös. 4. Sammuta Navina Smart -ohjausyksikkö ja tyhjennä vesi ohjausyksiköstä. 5. Irrota letku vesisäiliöstä ja poista vesi. 6. Irrota kertakäyttöinen katetri ja hävitä kotitalousjätteen mukana. Katetria ei saa käyttää uudelleen eikä sitä saa huuhdella alas wc-pöntöstä. 7. Tarvittaessa puhdista ja kuivaa letkusto, vesisäiliö ja ohjausyksikkö laimealla saippuavedellä ja liinalla. Ohjausyksikön saa vain pyyhkiä puhtaaksi. Huomaa: Merkitse jokainen huuhtelu käyttökalenteriin (katso käyttöohjeet) voidaksesi seurata, milloin vesisäiliö ja letkusto tulee vaihtaa uuteen. Tietojen siirtäminen: katso ohjeet kääntöpuolelta.",
          ),
          sv: "1. Öppna locket på vattenbehållaren. 2. Koppla loss slangarna från kontrollenheten. 3. Töm ut vattnet ur slangarna. 4. Stäng av kontrollenheten och töm den på vatten. 5. Koppla loss slangen från vattenbehållaren och töm ut vattnet. 6. Koppla loss engångskatetern och kassera den som hushållsavfall. Den får inte återanvändas eller spolas ner i toaletten. 7. Skölj av de återanvändbara delarna, rengör dem med vatten och mild tvål och torka dem. Kontrollenheten skall endast torkas av. Obs! Markera en ruta i förbrukningsmatrixen (se bruksanvisningen) efter varje användning för att hålla reda på när vattenbehållaren och vattenslangsetet behöver bytas. Överföring av data: se andra sidan.",
          da: "1. Åbn vandbeholderlåget. 2. Kobl slangerne fra kontrolenheden. 3. Tøm vand af slangerne. 4. Sluk for kontrolenheden og tøm den for vand. 5. Kobl slangen fra vandbeholderen og tøm den for vand. 6. Frakobl engangskatetret, og kassér det som husholdningsaffald. Katetret må ikke genbruges og det må ikke skylles ud i toilettet. 7. Skyl de genanvendelige dele, rengør dem i mildt sæbevand og tør dem. Kontrolenheden må kun aftørres. OBS: Sæt kryds i din kalender (se brugsvejledning) efter hver irrigation for at holde styr på, hvornår vandbeholder og slangesæt skal udskiftes. Dataoverførsel: se vejledning på modsatte side.",
        },
        image: "/images/instructions/navina-smart/catheter/5-disassembly.png",
      },
    ],
    coneInstructions: navinaSmartCone,
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
    // Linda’s Swedish film, used for Swedish and Norwegian. No caption track.
    videoByLocale: {
      sv: "/media/navina-insert-sv.mp4",
      no: "/media/navina-insert-sv.mp4",
    },
    brand: "Navina",
    name: "Navina Insert",
    spec: "Single-use rectal insert · sizes Standard/Large · latex-free",
    category: "bowel",
    nordicEcolabel: false,
    summary: {
      en: "The Navina Insert is a soft and flexible insert that is engineered to provide a complete seal for up to 24h in order to prevent bowel leakage. The insert is intended to be hygienic, and with its body-conforming silicone shape, it’s designed to offer comfort, so that you can feel secure regardless of what you are doing. Can be worn for up to 24h. Designed for comfort.",
      sv: "Navina Insert är en mjuk och flexibel analpropp som är designad för att täta helt mot rektum, och hjälpa till att förhindra avföringsläckage. Det är gjort av mjukt silikon och är vätskefyllt för att kunna ändra form och anpassa sig till din kropp. Analproppen är noggrant utvecklad för att säkerställa bekväm applicering och anpassning till kroppen. Applikatorn i plast ger ett bra grepp vid införande och håller fingrarna rena. En Navina Insert kan bäras i upp till 24 timmar och passar utmärkt när du vill känna dig extra säker, som vid sportaktiviteter.",
      fi: "Navina Insert -rektaalitamponi on pehmeä ja joustava tuote, joka on suunniteltu tarjoamaan täydellisen esteen ohivuotoon peräsuolesta. Tuote on valmistettu pehmeästä silikonista, ja siinä käytetään nestedynamiikkaa, joka mahdollistaa tuotteen mukautumisen ja asettumisen kehoon. Lisäksi, asettimen ja suojaholkin on tarkoitus lisätä hygieniaa sekä asettamisen että poistamisen yhteydessä. The Navina Insert -rektaalitamponia voidaan käyttää aktiviteettien, kuten urheilun aikana, tai pitkäkestoisesti jopa 24 tunnin ajan.",
      da: "Navina Insert er en blød og fleksibel analprop, der er designet til at forhindre tarmlækage. Den er udviklet til at kunne give dobbelt forsegling og hjælper dermed med at forhindre ulykker med tarmlækage. Dens kropstilpassede form gør den designet til at give en unik komfort for brugeren. Applikatoren og det brede håndtag øger hygiejnen ved indsættelse såvel som ved udtagning. Navina Insert kan bruges under en specifik aktivitet som eksempelvis sport, eller den kan bruges i op til 24 timer ad gangen.",
      no: "Navina Insert er en myk og fleksibel analpropp laget for å hindre avføringslekkasje Proppen er laget med dobbel tetning og vil på den måten hindre lekkasje. Proppen former seg etter kroppen og vil derfor være behagelig og sikker å bruke. Aplikatoren og beskyttelseshetten er laget for å hygiensik kunne både sette inn og fjerne proppen. Navina Insert kan benyttes for spesifikke aktiviteter som for eksempel idrett eller brukes i opptil 24 timer.",
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
