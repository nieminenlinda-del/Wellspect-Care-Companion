import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ecolabelContent, getEcolabelQr, swanLicenseNumber } from "@/data/ecolabel";
import { useLocale } from "@/lib/locale";
import swanAsset from "@/assets/nordic-swan-ecolabel.png.asset.json";
import { publicUrl } from "@/lib/public-url";

export function SwanMark({ className = "size-10" }: { className?: string }) {
  const { locale } = useLocale();
  return (
    <img
      src={publicUrl(swanAsset.url)}
      alt={ecolabelContent[locale].name}
      loading="lazy"
      className={`${className} object-contain`}
    />
  );
}

export function EcolabelDialog({ trigger }: { trigger: ReactNode }) {
  const { locale } = useLocale();
  const c = ecolabelContent[locale];
  const qr = getEcolabelQr(locale);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[min(88dvh,52rem)] overflow-y-auto rounded-3xl sm:max-w-xl">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex shrink-0 flex-col items-center">
              <SwanMark className="size-12" />
              <p className="text-muted-foreground mt-1 text-[10px] leading-none tracking-wide">
                {swanLicenseNumber}
              </p>
            </div>
            <DialogTitle className="text-left text-xl tracking-tight">{c.heading}</DialogTitle>
          </div>
          <DialogDescription asChild>
            <div className="mt-4 grid gap-3 text-left text-sm leading-relaxed">
              {c.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>

        {qr && (
          <div className="border-border flex items-center gap-4 rounded-2xl border bg-white p-3">
            <img
              src={publicUrl(qr.image)}
              alt=""
              width={96}
              height={96}
              className="size-20 shrink-0 rounded-lg bg-white object-contain sm:size-24"
            />
            <p className="text-muted-foreground min-w-0 text-sm leading-relaxed">{c.qrHint}</p>
          </div>
        )}

        <div className="border-border bg-muted/40 rounded-2xl border p-4">
          <p className="text-foreground text-sm font-semibold">{c.appliesLabel}</p>
          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{c.appliesTo}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
