import { ExternalLink } from "lucide-react";
import { displayQrUrl, getProductQr } from "@/data/product-qr";
import { uiStrings } from "@/data/ui-strings";
import { useLocale } from "@/lib/locale";
import { publicUrl } from "@/lib/public-url";

export function ProductWebsiteQr({
  productId,
  productName,
}: {
  productId: string;
  productName: string;
}) {
  const { locale } = useLocale();
  const t = uiStrings[locale];
  const qr = getProductQr(productId, locale);
  if (!qr) return null;

  const shortUrl = displayQrUrl(qr.url);

  return (
    <a
      href={qr.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border-border bg-card hover:border-primary/40 focus-visible:ring-primary mt-5 flex max-w-md items-center gap-4 rounded-2xl border p-3 shadow-soft transition-colors focus-visible:ring-2 focus-visible:outline-none"
    >
      <img
        src={publicUrl(qr.image)}
        alt=""
        width={144}
        height={144}
        loading="lazy"
        className="size-32 shrink-0 rounded-xl bg-black object-contain sm:size-36"
      />
      <span className="min-w-0">
        <span className="text-foreground block text-sm font-semibold text-balance">
          {t.qrLearnMore}
        </span>
        <span className="text-muted-foreground mt-0.5 block text-xs">{t.qrMoreOnSite}</span>
        <span className="text-primary mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium break-all underline-offset-4">
          <span className="underline">{shortUrl}</span>
          <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
        </span>
        <span className="sr-only">
          {productName}: {shortUrl}
        </span>
      </span>
    </a>
  );
}
