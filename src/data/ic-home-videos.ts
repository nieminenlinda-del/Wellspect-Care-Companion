import type { LocaleCode } from "@/lib/locale";

export type IcHomeVideo = {
  id: string;
  /** Card title taken from the film's title card. */
  title: string;
  src: string;
  poster: string;
  /** Running time from the file, shown on the card. */
  duration: string;
  captions?: Partial<Record<LocaleCode, string>>;
};

/**
 * General intermittent-catheterisation films for the home screen.
 *
 * Add a locale under videoByLocale when a dubbed film exists. A locale
 * with no entry keeps the brochure row. English is not a fallback.
 */
const icHomeVideos: Array<{
  id: string;
  videoByLocale: Partial<Record<LocaleCode, Omit<IcHomeVideo, "id">>>;
}> = [
  {
    id: "ic-intro-1",
    videoByLocale: {
      en: {
        // Title card, 00:01: "An Introduction to Starting Intermittent Catheterization (IC)"
        title: "An introduction to starting intermittent catheterization (IC)",
        src: "/media/ic-video-1.mp4",
        poster: "/media/ic-video-1-poster.jpg",
        duration: "3:18",
        captions: { en: "/media/ic-video-1-en.vtt" },
      },
    },
  },
  {
    id: "ic-intro-2",
    videoByLocale: {
      en: {
        // Same title card at 00:01. The two films are separate edits of that introduction.
        title: "An introduction to starting intermittent catheterization (IC)",
        src: "/media/ic-video-2.mp4",
        poster: "/media/ic-video-2-poster.jpg",
        duration: "3:29",
        captions: { en: "/media/ic-video-2-en.vtt" },
      },
    },
  },
];

export function getIcHomeVideos(locale: LocaleCode): IcHomeVideo[] {
  return icHomeVideos.flatMap((film) => {
    const local = film.videoByLocale[locale];
    return local ? [{ id: film.id, ...local }] : [];
  });
}
