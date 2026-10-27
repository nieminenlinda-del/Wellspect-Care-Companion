import type { LocaleCode } from "@/lib/locale";

export type IcHomeVideo = {
  id: string;
  title: string;
  src: string;
  poster: string;
  /** Running time from the file, shown on the card. */
  duration: string;
  captions?: Partial<Record<LocaleCode, string>>;
};

/**
 * Intermittent-catheterisation films for the home screen.
 * Women first, then men, matching the category cards.
 *
 * Add a locale under videoByLocale when a dubbed film exists. A locale
 * with no entry keeps the brochure row. English is not a fallback.
 */
const icHomeVideos: Array<{
  id: string;
  videoByLocale: Partial<Record<LocaleCode, Omit<IcHomeVideo, "id">>>;
}> = [
  {
    id: "ic-women",
    videoByLocale: {
      en: {
        title: "Introduction to IC for women",
        // ic-video-2, 3:29. Poster is the Urotonic frame at 00:02:44.
        src: "/media/ic-video-2.mp4",
        poster: "/media/ic-video-2-poster.jpg",
        duration: "3:29",
        captions: { en: "/media/ic-video-2-en.vtt" },
      },
      sv: {
        title: "Introduktion till RIK för kvinnor",
        // Purple title card at 00:01. Swedish subtitles are burned in.
        src: "/media/ic-video-women-sv.mp4",
        poster: "/media/ic-video-women-sv-poster.jpg",
        duration: "3:29",
      },
    },
  },
  {
    id: "ic-men",
    videoByLocale: {
      en: {
        title: "Introduction to IC for men",
        // ic-video-1, 3:18. Poster is the Nelaton tip frame at 00:02:24.
        src: "/media/ic-video-1.mp4",
        poster: "/media/ic-video-1-poster.jpg",
        duration: "3:18",
        captions: { en: "/media/ic-video-1-en.vtt" },
      },
      sv: {
        title: "Introduktion till RIK för män",
        // Blue title card at 00:01. Swedish subtitles are burned in.
        src: "/media/ic-video-men-sv.mp4",
        poster: "/media/ic-video-men-sv-poster.jpg",
        duration: "3:18",
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
