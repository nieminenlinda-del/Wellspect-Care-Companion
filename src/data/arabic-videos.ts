import type { LocaleCode } from "@/lib/locale";
import femaleVideo from "@/assets/arabic-cic-female.mp4.asset.json";
import maleVideo from "@/assets/arabic-cic-male.mp4.asset.json";

export type ArabicVideo = {
  /** Set to a video file URL (mp4) or leave empty to show the placeholder. */
  src: string;
  /** Optional poster image URL. */
  poster?: string;
  titleEn: string;
  titleAr: string;
};

/** Two video slots with Arabic-narrated CIC instruction films. */
export const arabicVideos: ArabicVideo[] = [
  {
    src: femaleVideo.url,
    titleEn: "CIC for women — Bladder management",
    titleAr: "القسطرة البولية الذاتية للنساء — العناية بالمثانة",
  },
  {
    src: maleVideo.url,
    titleEn: "CIC for men — Bladder management",
    titleAr: "القسطرة البولية الذاتية للرجال — العناية بالمثانة",
  },
];

export type ArabicVideosStrings = {
  cardTitle: string;
  cardSubtitle: string;
  intro: string;
  comingSoon: string;
};

export const arabicVideosStrings: Record<LocaleCode, ArabicVideosStrings> = {
  en: {
    cardTitle: "Instructional videos in Arabic",
    cardSubtitle: "فيديوهات إرشادية بالعربية",
    intro:
      "Step-by-step films with Arabic narration. They complement, but do not replace, the instructions for use and the guidance of your healthcare professional.",
    comingSoon: "Video coming soon",
  },
  sv: {
    cardTitle: "Instruktionsfilmer på arabiska",
    cardSubtitle: "فيديوهات إرشادية بالعربية",
    intro:
      "Steg-för-steg-filmer med arabiskt tal. De kompletterar, men ersätter inte, bruksanvisningen och råden från din vårdgivare.",
    comingSoon: "Film kommer snart",
  },
  fi: {
    cardTitle: "Ohjevideot arabiaksi",
    cardSubtitle: "فيديوهات إرشادية بالعربية",
    intro:
      "Vaiheittaiset videot arabiankielisellä selostuksella. Ne täydentävät, mutta eivät korvaa käyttöohjetta tai hoitohenkilökunnan neuvoja.",
    comingSoon: "Video tulossa pian",
  },
  da: {
    cardTitle: "Instruktionsvideoer på arabisk",
    cardSubtitle: "فيديوهات إرشادية بالعربية",
    intro:
      "Trin-for-trin film med arabisk tale. De supplerer, men erstatter ikke, brugsanvisningen og din behandlers vejledning.",
    comingSoon: "Video kommer snart",
  },
  no: {
    cardTitle: "Instruksjonsvideoer på arabisk",
    cardSubtitle: "فيديوهات إرشادية بالعربية",
    intro:
      "Trinnvise filmer med arabisk tale. De supplerer, men erstatter ikke, bruksanvisningen og rådene fra helsepersonell.",
    comingSoon: "Video kommer snart",
  },
};
