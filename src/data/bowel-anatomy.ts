import type { AnatomyCallout } from "@/data/anatomy-callouts";
import type { LocaleCode } from "@/lib/locale";

/**
 * Cleaned Navina bowel illustration: body and colon only.
 * Labels are drawn beside it, in this order:
 * ascending colon, transverse colon, descending colon, sigmoid colon, rectum.
 */
export const bowelAnatomyImage = {
  url: "/media/bowel-anatomy.png",
  alt: "Lower torso showing the colon and the rectum",
  width: 1488,
  height: 1521,
};

/** Short arrows to the nearest edge of each part. They do not cross. */
export const bowelCallouts: AnatomyCallout[] = [
  { index: 0, side: "left", y: 0.36, targets: [{ x: 375, y: 560 }] },
  { index: 4, side: "left", y: 0.66, targets: [{ x: 705, y: 995 }] },
  { index: 1, side: "right", y: 0.2, targets: [{ x: 1040, y: 330 }] },
  { index: 2, side: "right", y: 0.44, targets: [{ x: 1052, y: 580 }] },
  { index: 3, side: "right", y: 0.68, targets: [{ x: 1000, y: 840 }] },
];

type BowelAnatomyCopy = {
  button: string;
  title: string;
  subtitle: string;
  intro: string;
  labels: string[];
  footnote: string;
};

export const bowelAnatomyStrings: Record<LocaleCode, BowelAnatomyCopy> = {
  en: {
    button: "Bowel anatomy",
    title: "Bowel anatomy",
    subtitle: "Overview for bowel care",
    intro: "A simple picture of the colon and the rectum.",
    labels: ["Ascending colon", "Transverse colon", "Descending colon", "Sigmoid colon", "Rectum"],
    footnote:
      "For information only. Your healthcare professional will show you the technique that suits your anatomy.",
  },
  sv: {
    button: "Tarmens anatomi",
    title: "Tarmens anatomi",
    subtitle: "Översikt för tarmskötsel",
    intro: "En enkel bild av tjocktarmen och ändtarmen.",
    labels: [
      "Uppåtstigande tjocktarm",
      "Tvärgående tjocktarm",
      "Nedåtstigande tjocktarm",
      "Sigmoideum",
      "Ändtarm",
    ],
    footnote: "Endast för information. Din vårdgivare visar den teknik som passar din anatomi.",
  },
  fi: {
    button: "Suolen anatomia",
    title: "Suolen anatomia",
    subtitle: "Yleiskuva suolen hoitoon",
    intro: "Yksinkertainen kuva paksusuolesta ja peräsuolesta.",
    labels: [
      "Nouseva paksusuoli",
      "Poikittainen paksusuoli",
      "Laskeva paksusuoli",
      "Sigmasuoli",
      "Peräsuoli",
    ],
    footnote: "Vain tiedoksi. Hoitohenkilökunta näyttää sinulle sopivan tekniikan.",
  },
  da: {
    button: "Tarmens anatomi",
    title: "Tarmens anatomi",
    subtitle: "Overblik til tarmpleje",
    intro: "Et enkelt billede af tyktarmen og endetarmen.",
    labels: [
      "Opadstigende tyktarm",
      "Tværgående tyktarm",
      "Nedadgående tyktarm",
      "Sigmoideum",
      "Endetarm",
    ],
    footnote:
      "Kun til information. Din sundhedsprofessionelle viser dig den teknik, der passer til din anatomi.",
  },
  no: {
    button: "Tarmens anatomi",
    title: "Tarmens anatomi",
    subtitle: "Oversikt for tarmomsorg",
    intro: "Et enkelt bilde av tykktarmen og endetarmen.",
    labels: [
      "Oppadstigende tykktarm",
      "Tverrgående tykktarm",
      "Nedadstigende tykktarm",
      "Sigmoideum",
      "Endetarm",
    ],
    footnote: "Kun til informasjon. Helsepersonell viser deg teknikken som passer din anatomi.",
  },
};
