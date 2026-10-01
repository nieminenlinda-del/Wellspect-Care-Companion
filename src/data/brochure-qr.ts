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
 * missing QR does not show a broken image.
 */
export type BrochureId = "cic-women" | "cic-men" | "elle" | "elle-pro" | "origo-pro" | "tai";

export type BrochureQrCode = {
  /** Public path, e.g. `/images/qr/brochure/sv/cic-women.png`. */
  image: string;
  /** Destination encoded in the QR image (not shown as a text link). */
  url: string;
};

export type ResolvedBrochure = BrochureQrCode & {
  id: BrochureId;
  /** Primary label, already localized. Shown as text, or as the cover alt when a cover exists. */
  label: string;
  /** Secondary line, e.g. "Brochure / PDF guide". Omitted when it repeats `label`. */
  detail?: string;
  /** Optional guide-cover thumbnail. When set, the card shows this instead of the text title. */
  cover?: string;
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
    tai: {
      image: "/images/qr/brochure/tai/sv.png",
      url: "https://wellspect.qrd.by/vx6m7p",
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
    tai: {
      image: "/images/qr/brochure/tai/fi.png",
      url: "https://wellspect.qrd.by/agxnuc",
    },
    "origo-pro": {
      image: "/images/qr/brochure/fi/origo-pro.png",
      url: "https://wellspect.qrd.by/zgkv0o",
    },
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
    tai: {
      image: "/images/qr/brochure/tai/da.png",
      url: "https://wellspect.qrd.by/lorzn3",
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
    tai: {
      image: "/images/qr/brochure/tai/no.png",
      url: "https://wellspect.qrd.by/k0vdgh",
    },
  },
  en: {
    "cic-women": {
      image: "/images/qr/brochure/en/cic-women.png",
      url: "https://wellspect.qrd.by/ab82kp",
    },
    "cic-men": {
      image: "/images/qr/brochure/en/cic-men.png",
      url: "https://wellspect.qrd.by/j4op9l",
    },
    elle: {
      image: "/images/qr/brochure/en/elle.png",
      url: "https://wellspect.qrd.by/in7ywl",
    },
    "elle-pro": {
      image: "/images/qr/brochure/en/elle-pro.png",
      url: "https://wellspect.qrd.by/7voh2u",
    },
    "origo-pro": {
      image: "/images/qr/brochure/en/origo-pro.png",
      url: "https://wellspect.qrd.by/a9wm1f",
    },
    tai: {
      image: "/images/qr/brochure/tai/en.png",
      url: "https://wellspect.qrd.by/gpn04e",
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

/**
 * Optional guide-cover thumbnails. A cover is shown only when that brochure
 * also has a QR in `brochureCatalog`, so a cover alone never creates a card.
 */
const brochureCovers: Partial<Record<LocaleCode, Partial<Record<BrochureId, string>>>> = {
  sv: {
    "cic-women": "/images/qr/brochure/covers/sv/cic-women.png",
    "cic-men": "/images/qr/brochure/covers/sv/cic-men.png",
    elle: "/images/qr/brochure/covers/sv/elle.png",
    "elle-pro": "/images/qr/brochure/covers/sv/elle-pro.png",
    "origo-pro": "/images/qr/brochure/covers/sv/origo-pro.png",
    tai: "/images/qr/brochure/covers/sv/tai.png",
  },
  fi: {
    "cic-women": "/images/qr/brochure/covers/fi/cic-women.png",
    "cic-men": "/images/qr/brochure/covers/fi/cic-men.png",
    elle: "/images/qr/brochure/covers/fi/elle.png",
    "elle-pro": "/images/qr/brochure/covers/fi/elle-pro.png",
    "origo-pro": "/images/qr/brochure/covers/fi/origo-pro.png",
    tai: "/images/qr/brochure/covers/fi/tai.png",
  },
  da: {
    "cic-women": "/images/qr/brochure/covers/da/cic-women.png",
    "cic-men": "/images/qr/brochure/covers/da/cic-men.png",
    elle: "/images/qr/brochure/covers/da/elle.png",
    "elle-pro": "/images/qr/brochure/covers/da/elle-pro.png",
    "origo-pro": "/images/qr/brochure/covers/da/origo-pro.png",
    tai: "/images/qr/brochure/covers/da/tai.png",
  },
  no: {
    "cic-women": "/images/qr/brochure/covers/no/cic-women.png",
    "cic-men": "/images/qr/brochure/covers/no/cic-men.png",
    elle: "/images/qr/brochure/covers/no/elle.png",
    "elle-pro": "/images/qr/brochure/covers/no/elle-pro.png",
    "origo-pro": "/images/qr/brochure/covers/no/origo-pro.png",
    tai: "/images/qr/brochure/covers/no/tai.png",
  },
};

/** Category-grid order: CIC women, CIC men, then the Navina TAI guide. */
const homeBrochureIds: BrochureId[] = ["cic-women", "cic-men", "tai"];

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
    cover: brochureCovers[locale]?.[id],
  };
}

/** Brochure QR cards for the home category grid. Missing assets are skipped. */
export function getHomeBrochures(locale: LocaleCode): ResolvedBrochure[] {
  const t = uiStrings[locale];
  const copyFor = (id: BrochureId): { label: string; detail: string } => {
    if (id === "cic-women") return { label: t.brochureCicWomen, detail: t.brochurePdfGuide };
    if (id === "cic-men") return { label: t.brochureCicMen, detail: t.brochurePdfGuide };
    return { label: t.brochureTai, detail: t.brochureLifeWithNavina };
  };
  return homeBrochureIds.flatMap((id) => {
    const copy = copyFor(id);
    const card = resolve(id, locale, copy.label, copy.detail);
    return card ? [card] : [];
  });
}

/**
 * Brochures for a product How to use tab.
 * Product step-guide QR first (beside the in-app guide), then the CIC audience
 * QR or the Life with Navina guide on bowel products.
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
    const card = resolve(
      productBrochure,
      locale,
      productName ?? t.brochurePdfGuide,
      productName ? t.brochurePdfGuide : undefined,
    );
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

  if (category === "bowel") {
    const card = resolve("tai", locale, t.brochureTai, t.brochureLifeWithNavina);
    if (card) cards.push(card);
  }

  return cards;
}
