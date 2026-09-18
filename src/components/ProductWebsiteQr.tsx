import { getProductQr } from "@/data/product-qr";
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

  return (
    <div className="border-border mt-5 flex max-w-md items-center gap-4 rounded-2xl border bg-white p-3 shadow-soft">
      <img
        src={publicUrl(qr.image)}
        alt=""
        width={144}
        height={144}
        loading="lazy"
        className="size-32 shrink-0 rounded-xl bg-black object-contain sm:size-36"
      />
      <p className="text-foreground min-w-0 text-sm font-semibold text-balance">
        {t.qrLearnMore}
        <span className="sr-only"> {productName}</span>
      </p>
    </div>
  );
}
