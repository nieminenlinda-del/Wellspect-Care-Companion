import type { LocaleCode } from "@/lib/locale";
import { categoryLabels, type CategoryId } from "@/data/products";

type FeatureId = "women" | "men" | "bowel";

type FeatureCopy = Record<LocaleCode, string>;

export type CategoryFeature = {
  headline: FeatureCopy;
  subtitle: FeatureCopy;
  /** Packshot already shipped with the app. */
  image: string;
  /** Accent measured from an existing brand asset. */
  accent: string;
  figure?: "female" | "male";
};

/**
 * Home-screen feature cards. Short categoryLabels stay on product tags
 * and the in-category heading. Subtitles use each locale's own IC / TAI term.
 */
export const categoryFeatures: Record<FeatureId, CategoryFeature> = {
  women: {
    headline: {
      en: "LoFric for women",
      sv: "LoFric för kvinnor",
      fi: "LoFric naisille",
      da: "LoFric til kvinder",
      no: "LoFric for kvinner",
    },
    subtitle: {
      en: "Intermittent catheterisation (IC)",
      sv: "Ren intermittent kateterisering (RIK)",
      fi: "Toistokatetrointi",
      da: "Ren intermitterende kateterisering (RIK)",
      no: "Ren intermitterende kateterisering (RIK)",
    },
    image: "/media/lofric-elle-pro.png",
    // Women's brochure QR, public/images/qr/brochure/en/cic-women.png
    accent: "#6e1eaa",
    figure: "female",
  },
  men: {
    headline: {
      en: "LoFric for men",
      sv: "LoFric för män",
      fi: "LoFric miehille",
      da: "LoFric til mænd",
      no: "LoFric for menn",
    },
    subtitle: {
      en: "Intermittent catheterisation (IC)",
      sv: "Ren intermittent kateterisering (RIK)",
      fi: "Toistokatetrointi",
      da: "Ren intermitterende kateterisering (RIK)",
      no: "Ren intermitterende kateterisering (RIK)",
    },
    image: "/media/lofric-origo-pro.png",
    // Men's brochure QR, public/images/qr/brochure/en/cic-men.png
    accent: "#2b55b4",
    figure: "male",
  },
  bowel: {
    headline: {
      en: "Navina bowel care",
      sv: "Navina tarmskötsel",
      fi: "Navina suolen hallinta",
      da: "Navina tarmpleje",
      no: "Navina tarmomsorg",
    },
    subtitle: {
      en: "Transanal irrigation (TAI)",
      sv: "Transanal irrigering (TAI)",
      fi: "Peräaukon kautta tapahtuva huuhtelu (TAI)",
      da: "Transanal irrigation (TAI)",
      no: "Transanal irrigasjon (TAI)",
    },
    image: "/media/navina-mini.png",
    // Dominant blue on the Navina Smart packshot, public/media/navina-smart.png
    accent: "#007bb5",
  },
};

export const categoryFeatureOrder: FeatureId[] = ["women", "men", "bowel"];

/** Descriptive headline used on the home cards and on “Back to …”. */
export function categoryHeadline(category: CategoryId, locale: LocaleCode): string {
  if (category === "contact") return categoryLabels.contact[locale];
  return categoryFeatures[category].headline[locale];
}
