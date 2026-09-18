import type { LocaleCode } from "@/lib/locale";

/**
 * Locale-specific product-page QR codes (wellspect.qrd.by short URLs).
 *
 * To add more products or markets:
 * 1. Drop the PNG in `public/images/qr/<locale>/`
 * 2. Append an entry below with the matching product id(s)
 */
export type ProductQrCode = {
  /** Public path, e.g. `/images/qr/fi/fi-lofric-sense.png`. */
  image: string;
  /** Destination encoded in the QR image (not shown as a text link). */
  url: string;
};

type ProductQrEntry = ProductQrCode & {
  /** One or more product ids that share this QR (e.g. Primo male + female). */
  productIds: string[];
};

const qrCatalog: Partial<Record<LocaleCode, ProductQrEntry[]>> = {
  fi: [
    {
      productIds: ["lofric-sense"],
      image: "/images/qr/fi/fi-lofric-sense.png",
      url: "https://wellspect.qrd.by/cusxr6",
    },
    {
      productIds: ["lofric-primo", "lofric-primo-female"],
      image: "/images/qr/fi/fi-lofric-primo.png",
      url: "https://wellspect.qrd.by/gu4hf9",
    },
    {
      productIds: ["lofric-elle-pro"],
      image: "/images/qr/fi/fi-lofric-elle-pro.png",
      url: "https://wellspect.qrd.by/ivulqj",
    },
    {
      productIds: ["lofric-classic", "lofric-classic-female"],
      image: "/images/qr/fi/fi-lofric-classic.png",
      url: "https://wellspect.qrd.by/fl8qjv",
    },
    {
      productIds: ["lofric-hydro-kit", "lofric-hydro-kit-female"],
      image: "/images/qr/fi/fi-lofric-hydro-kit.png",
      url: "https://wellspect.qrd.by/pmxrs6",
    },
    {
      productIds: ["navina-classic"],
      image: "/images/qr/fi/fi-navina-classic.png",
      url: "https://wellspect.qrd.by/5rv1ai",
    },
    {
      productIds: ["navina-insert"],
      image: "/images/qr/fi/fi-navina-insert.png",
      url: "https://wellspect.qrd.by/ew5bh7",
    },
    {
      productIds: ["navina-mini"],
      image: "/images/qr/fi/fi-navina-mini.png",
      url: "https://wellspect.qrd.by/9znb1i",
    },
    {
      productIds: ["navina-smart"],
      image: "/images/qr/fi/fi-navina-smart.png",
      url: "https://wellspect.qrd.by/kbx9si",
    },
  ],
};

const qrByLocaleAndProduct: Partial<Record<LocaleCode, Record<string, ProductQrCode>>> =
  Object.fromEntries(
    (Object.entries(qrCatalog) as [LocaleCode, ProductQrEntry[]][]).map(([locale, entries]) => [
      locale,
      Object.fromEntries(
        entries.flatMap((entry) =>
          entry.productIds.map((id) => [id, { image: entry.image, url: entry.url }]),
        ),
      ),
    ]),
  );

export function getProductQr(productId: string, locale: LocaleCode): ProductQrCode | undefined {
  return qrByLocaleAndProduct[locale]?.[productId];
}
