import type { IcHomeVideo } from "@/data/ic-home-videos";
import type { LocaleCode } from "@/lib/locale";

export type BodyEducationCategory = "women" | "men";

/**
 * General education films on the LoFric category pages.
 *
 * Add a locale under videoByLocale when that language has a film. English
 * is not a fallback: a locale with no entry shows no row. The heading is
 * the same map, so a new language needs both a title and its films.
 */
export const bodyEducationHeading: Partial<Record<LocaleCode, string>> = {
  en: "Learn about your body",
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
        title: "Female Urinary System",
        src: "/media/body-female-urinary.mp4",
        poster: "/media/body-female-urinary.jpg",
        duration: "2:11",
        captions: { en: "/media/body-female-urinary-en.vtt" },
      },
    },
  },
  {
    id: "body-female-bladder",
    category: "women",
    videoByLocale: {
      en: {
        title: "Bladder Control",
        src: "/media/body-female-bladder.mp4",
        poster: "/media/body-female-bladder.jpg",
        duration: "1:40",
        captions: { en: "/media/body-female-bladder-en.vtt" },
      },
    },
  },
  {
    id: "body-male-urinary",
    category: "men",
    videoByLocale: {
      en: {
        title: "Male Urinary System",
        src: "/media/body-male-urinary.mp4",
        poster: "/media/body-male-urinary.jpg",
        duration: "2:15",
        captions: { en: "/media/body-male-urinary-en.vtt" },
      },
    },
  },
  {
    id: "body-male-bladder",
    category: "men",
    videoByLocale: {
      en: {
        title: "Bladder Control",
        src: "/media/body-male-bladder.mp4",
        poster: "/media/body-male-bladder.jpg",
        duration: "1:34",
        captions: { en: "/media/body-male-bladder-en.vtt" },
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
