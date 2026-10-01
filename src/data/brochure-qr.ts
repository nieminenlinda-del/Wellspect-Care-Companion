import type { LocaleCode } from "@/lib/locale";
import { uiStrings } from "@/data/ui-strings";

/**
 * Locale-specific brochure QR codes (wellspect.qrd.by short URLs).
 *
 * The PNG is the source of truth — the short URL is already encoded in the image.
 *
 * To add a market or a missing brochure later:
 * 1. Drop the PNG in `public/images/qr/brochure/<locale>/`
 * 2. Add the matching key under that locale below
 *
 * Omit a key when the asset does not exist yet. Callers hide the card, so a
 * gap (Finnish Origo Pro) does not show a broken image.
 */
export type BrochureId = "cic-women" | "cic-men" | "elle" | "elle-pro" | "origo-pro";

export type BrochureQrCode = {
  /** Public path, e.g. `/images/qr/brochure/sv/cic-women.png`. */
  image: string;
  /** Destination encoded in the QR image (not shown as a text link). */
  url: string;
};

export type ResolvedBrochure = BrochureQrCode & {
  id: BrochureId;
  /** Primary label, already localized. */
  label: string;
  /** Secondary line, e.g. "Brochure / PDF guide". Omitted when it repeats `label`. */
  detail?: string;
};

const brochureCatalog: Partial<Record<LocaleCode, Partial<Record<BrochureId, BrochureQrCode>>>> = {
  sv: {
    "cic-women": {
      image: "/images/qr/brochure/sv/cic-women.png",
      url: "https://wellspect.qrd.by/k81l75",
    },
    "cic-men": {
      image: "/images/qr/brochure/sv/cic-men.png",
      url: "https://wellspect.qrd.by/dtj8kg",
    },
    elle: {
      image: "/images/qr/brochure/sv/elle.png",
      url: "https://wellspect.qrd.by/jpws37",
    },
    "elle-pro": {
      image: "/images/qr/brochure/sv/elle-pro.png",
      url: "https://wellspect.qrd.by/ow9i0f",
    },
    "origo-pro": {
      image: "/images/qr/brochure/sv/origo-pro.png",
      url: "https://wellspect.qrd.by/4vqi0h",
    },
  },
  fi: {
    "cic-women": {
      image: "/images/qr/brochure/fi/cic-women.png",
      url: "https://wellspect.qrd.by/2ei7av",
    },
    "cic-men": {
      image: "/images/qr/brochure/fi/cic-men.png",
      url: "https://wellspect.qrd.by/w2bszi",
    },
    elle: {
      image: "/images/qr/brochure/fi/elle.png",
      url: "https://wellspect.qrd.by/hiok18",
    },
    "elle-pro": {
      image: "/images/qr/brochure/fi/elle-pro.png",
      url: "https://wellspect.qrd.by/zvwmpy",
    },
    // origo-pro: no Finnish asset yet
  },
  da: {
    "cic-women": {
      image: "/images/qr/brochure/da/cic-women.png",
      url: "https://wellspect.qrd.by/bkcmfj",
    },
    "cic-men": {
      image: "/images/qr/brochure/da/cic-men.png",
      url: "https://wellspect.qrd.by/nzk0eu",
    },
    elle: {
      image: "/images/qr/brochure/da/elle.png",
      url: "https://wellspect.qrd.by/5bipxq",
    },
    "elle-pro": {
      image: "/images/qr/brochure/da/elle-pro.png",
      url: "https://wellspect.qrd.by/6yhapg",
    },
    "origo-pro": {
      image: "/images/qr/brochure/da/origo-pro.png",
      url: "https://wellspect.qrd.by/4i0q2p",
    },
  },
  no: {
    "cic-women": {
      image: "/images/qr/brochure/no/cic-women.png",
      url: "https://wellspect.qrd.by/bjyd41",
    },
    "cic-men": {
      image: "/images/qr/brochure/no/cic-men.png",
      url: "https://wellspect.qrd.by/3sdzbn",
    },
    elle: {
      image: "/images/qr/brochure/no/elle.png",
      url: "https://wellspect.qrd.by/akhpfq",
    },
    "elle-pro": {
      image: "/images/qr/brochure/no/elle-pro.png",
      url: "https://wellspect.qrd.by/kebw8j",
    },
    "origo-pro": {
      image: "/images/qr/brochure/no/origo-pro.png",
      url: "https://wellspect.qrd.by/tmc74f",
    },
  },
};

/**
 * Product-specific step-guide brochures. Origo (non-Pro) is intentionally
 * absent so it never inherits the Origo Pro brochure.
 */
const productBrochureIds: Partial<Record<string, BrochureId>> = {
  "lofric-elle": "elle",
  "lofric-elle-pro": "elle-pro",
  "lofric-origo-pro": "origo-pro",
};

const homeBrochureIds: BrochureId[] = ["cic-women", "cic-men"];

export function getBrochureQr(id: BrochureId, locale: LocaleCode): BrochureQrCode | undefined {
  return brochureCatalog[locale]?.[id];
}

function resolve(
  id: BrochureId,
  locale: LocaleCode,
  label: string,
  detail?: string,
): ResolvedBrochure | undefined {
  const qr = getBrochureQr(id, locale);
  if (!qr) return undefined;
  return {
    id,
    image: qr.image,
    url: qr.url,
    label,
    detail: detail && detail !== label ? detail : undefined,
  };
}

/** CIC audience brochures for the home grid. Missing assets are skipped. */
export function getHomeBrochures(locale: LocaleCode): ResolvedBrochure[] {
  const t = uiStrings[locale];
  const labelFor = (id: BrochureId) => (id === "cic-women" ? t.brochureCicWomen : t.brochureCicMen);
  return homeBrochureIds.flatMap((id) => {
    const card = resolve(id, locale, labelFor(id), t.brochurePdfGuide);
    return card ? [card] : [];
  });
}

/**
 * Brochures for a product How to use tab.
 * Product step-guide QR first (beside the in-app guide), then the CIC audience QR.
 */
export function getHowToBrochures(
  productId: string,
  category: string,
  locale: LocaleCode,
  productName?: string,
): ResolvedBrochure[] {
  const t = uiStrings[locale];
  const cards: ResolvedBrochure[] = [];

  const productBrochure = productBrochureIds[productId];
  if (productBrochure) {
    const card = resolve(productBrochure, locale, t.brochurePdfGuide, productName);
    if (card) cards.push(card);
  }

  const cicId = category === "women" ? "cic-women" : category === "men" ? "cic-men" : undefined;
  if (cicId) {
    const card = resolve(
      cicId,
      locale,
      cicId === "cic-women" ? t.brochureCicWomen : t.brochureCicMen,
      t.brochurePdfGuide,
    );
    if (card) cards.push(card);
  }

  return cards;
}
