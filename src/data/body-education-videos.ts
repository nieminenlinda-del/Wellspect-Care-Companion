import type { IcHomeVideo } from "@/data/ic-home-videos";
import type { LocaleCode } from "@/lib/locale";

export type BodyEducationCategory = "women" | "men";

/**
 * General education films on the LoFric category pages.
 *
 * Add a locale under videoByLocale when that language has a film. English
 * is not a fallback: a locale with no entry shows no row. The heading is
 * the same map, so a new language needs both a title and its films.
 *
 * sv, da, fi, and no films have subtitles burned into the picture, so they
 * have no WebVTT track and no captions control.
 */
export const bodyEducationHeading: Partial<Record<LocaleCode, string>> = {
  en: "Learn about your body",
  sv: "Lär dig om din kropp",
  da: "Lær om din krop",
  fi: "Tutustu kehoosi",
  no: "Lær om kroppen din",
};

const urinaryTitle: Record<LocaleCode, { female: string; male: string }> = {
  en: { female: "Female Urinary System", male: "Male Urinary System" },
  sv: { female: "Kvinnligt urinvägssystem", male: "Manligt urinvägssystem" },
  da: { female: "Kvindeligt urinvejssystem", male: "Mandligt urinvejssystem" },
  fi: { female: "Naisen virtsatiejärjestelmä", male: "Miehen virtsatiejärjestelmä" },
  no: { female: "Kvinnelig urinveissystem", male: "Mannlig urinveissystem" },
};

const bladderTitle: Record<LocaleCode, string> = {
  en: "Bladder Control",
  sv: "Blåskontroll",
  da: "Blærekontrol",
  fi: "Virtsarakon hallinta",
  no: "Blærekontroll",
};

const films: Array<{
  id: string;
  category: BodyEducationCategory;
  videoByLocale: Partial<Record<LocaleCode, Omit<IcHomeVideo, "id">>>;
}> = [
  {
    id: "body-female-urinary",
    category: "women",
    videoByLocale: {
      en: {
        title: urinaryTitle.en.female,
        src: "/media/body-female-urinary.mp4",
        poster: "/media/body-female-urinary.jpg",
        duration: "2:11",
        captions: { en: "/media/body-female-urinary-en.vtt" },
      },
      sv: {
        title: urinaryTitle.sv.female,
        src: "/media/body-female-urinary-sv.mp4",
        poster: "/media/body-female-urinary-sv.jpg",
        duration: "2:11",
      },
      da: {
        title: urinaryTitle.da.female,
        src: "/media/body-female-urinary-da.mp4",
        poster: "/media/body-female-urinary-da.jpg",
        duration: "2:11",
      },
      fi: {
        title: urinaryTitle.fi.female,
        src: "/media/body-female-urinary-fi.mp4",
        poster: "/media/body-female-urinary-fi.jpg",
        duration: "2:11",
      },
      no: {
        title: urinaryTitle.no.female,
        src: "/media/body-female-urinary-no.mp4",
        poster: "/media/body-female-urinary-no.jpg",
        duration: "2:11",
      },
    },
  },
  {
    id: "body-female-bladder",
    category: "women",
    videoByLocale: {
      en: {
        title: bladderTitle.en,
        src: "/media/body-female-bladder.mp4",
        poster: "/media/body-female-bladder.jpg",
        duration: "1:40",
        captions: { en: "/media/body-female-bladder-en.vtt" },
      },
      sv: {
        title: bladderTitle.sv,
        src: "/media/body-female-bladder-sv.mp4",
        poster: "/media/body-female-bladder-sv.jpg",
        duration: "1:40",
      },
      da: {
        title: bladderTitle.da,
        src: "/media/body-female-bladder-da.mp4",
        poster: "/media/body-female-bladder-da.jpg",
        duration: "1:40",
      },
      fi: {
        title: bladderTitle.fi,
        src: "/media/body-female-bladder-fi.mp4",
        poster: "/media/body-female-bladder-fi.jpg",
        duration: "1:40",
      },
      no: {
        title: bladderTitle.no,
        src: "/media/body-female-bladder-no.mp4",
        poster: "/media/body-female-bladder-no.jpg",
        duration: "1:40",
      },
    },
  },
  {
    id: "body-male-urinary",
    category: "men",
    videoByLocale: {
      en: {
        title: urinaryTitle.en.male,
        src: "/media/body-male-urinary.mp4",
        poster: "/media/body-male-urinary.jpg",
        duration: "2:15",
        captions: { en: "/media/body-male-urinary-en.vtt" },
      },
      sv: {
        title: urinaryTitle.sv.male,
        src: "/media/body-male-urinary-sv.mp4",
        poster: "/media/body-male-urinary-sv.jpg",
        duration: "2:15",
      },
      da: {
        title: urinaryTitle.da.male,
        src: "/media/body-male-urinary-da.mp4",
        poster: "/media/body-male-urinary-da.jpg",
        duration: "2:15",
      },
      fi: {
        title: urinaryTitle.fi.male,
        src: "/media/body-male-urinary-fi.mp4",
        poster: "/media/body-male-urinary-fi.jpg",
        duration: "2:15",
      },
      no: {
        title: urinaryTitle.no.male,
        src: "/media/body-male-urinary-no.mp4",
        poster: "/media/body-male-urinary-no.jpg",
        duration: "2:15",
      },
    },
  },
  {
    id: "body-male-bladder",
    category: "men",
    videoByLocale: {
      en: {
        title: bladderTitle.en,
        src: "/media/body-male-bladder.mp4",
        poster: "/media/body-male-bladder.jpg",
        duration: "1:34",
        captions: { en: "/media/body-male-bladder-en.vtt" },
      },
      sv: {
        title: bladderTitle.sv,
        src: "/media/body-male-bladder-sv.mp4",
        poster: "/media/body-male-bladder-sv.jpg",
        duration: "1:34",
      },
      da: {
        title: bladderTitle.da,
        src: "/media/body-male-bladder-da.mp4",
        poster: "/media/body-male-bladder-da.jpg",
        duration: "1:33",
      },
      fi: {
        title: bladderTitle.fi,
        src: "/media/body-male-bladder-fi.mp4",
        poster: "/media/body-male-bladder-fi.jpg",
        duration: "1:34",
      },
      no: {
        title: bladderTitle.no,
        src: "/media/body-male-bladder-no.mp4",
        poster: "/media/body-male-bladder-no.jpg",
        duration: "1:33",
      },
    },
  },
];

export function getBodyEducationVideos(
  locale: LocaleCode,
  category: BodyEducationCategory,
): IcHomeVideo[] {
  return films.flatMap((film) => {
    if (film.category !== category) return [];
    const local = film.videoByLocale[locale];
    return local ? [{ id: film.id, ...local }] : [];
  });
}
