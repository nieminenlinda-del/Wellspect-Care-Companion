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
 * Add a locale under videoByLocale when a dubbed film exists. English is
 * not a fallback. Every current locale has a pair. A locale with no entry
 * still keeps the brochure row.
 *
 * The card image is shared: one clinician thumbnail for every women's film,
 * and one for every men's film. Those same files are the modal posters.
 */
const womenPoster = "/media/ic-thumb-women.jpg";
const menPoster = "/media/ic-thumb-men.jpg";

const icHomeVideos: Array<{
  id: string;
  videoByLocale: Partial<Record<LocaleCode, Omit<IcHomeVideo, "id">>>;
}> = [
  {
    id: "ic-women",
    videoByLocale: {
      en: {
        title: "Introduction to IC for women",
        src: "/media/ic-video-2.mp4",
        poster: womenPoster,
        duration: "3:29",
        captions: { en: "/media/ic-video-2-en.vtt" },
      },
      sv: {
        title: "Introduktion till RIK för kvinnor",
        // Swedish subtitles are burned in.
        src: "/media/ic-video-women-sv.mp4",
        poster: womenPoster,
        duration: "3:29",
      },
      da: {
        title: "Introduktion til RIK for kvinder",
        // Danish subtitles are burned in.
        src: "/media/ic-video-women-da.mp4",
        poster: womenPoster,
        duration: "3:29",
      },
      fi: {
        title: "Johdanto toistokatetrointiin naisille",
        // Finnish subtitles are burned in.
        src: "/media/ic-video-women-fi.mp4",
        poster: womenPoster,
        duration: "3:29",
      },
      no: {
        title: "Introduksjon til RIK for kvinner",
        // Norwegian subtitles are burned in.
        src: "/media/ic-video-women-no.mp4",
        poster: womenPoster,
        duration: "3:29",
      },
    },
  },
  {
    id: "ic-men",
    videoByLocale: {
      en: {
        title: "Introduction to IC for men",
        src: "/media/ic-video-1.mp4",
        poster: menPoster,
        duration: "3:18",
        captions: { en: "/media/ic-video-1-en.vtt" },
      },
      sv: {
        title: "Introduktion till RIK för män",
        // Swedish subtitles are burned in.
        src: "/media/ic-video-men-sv.mp4",
        poster: menPoster,
        duration: "3:18",
      },
      da: {
        title: "Introduktion til RIK for mænd",
        // Danish subtitles are burned in.
        src: "/media/ic-video-men-da.mp4",
        poster: menPoster,
        duration: "3:18",
      },
      fi: {
        title: "Johdanto toistokatetrointiin miehille",
        // Finnish subtitles are burned in.
        src: "/media/ic-video-men-fi.mp4",
        poster: menPoster,
        duration: "3:18",
      },
      no: {
        title: "Introduksjon til RIK for menn",
        // Norwegian subtitles are burned in.
        src: "/media/ic-video-men-no.mp4",
        poster: menPoster,
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
