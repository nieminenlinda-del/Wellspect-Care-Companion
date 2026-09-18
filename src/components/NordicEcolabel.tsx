import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ecolabelContent } from "@/data/ecolabel";
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

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[min(88dvh,52rem)] overflow-y-auto rounded-3xl sm:max-w-xl">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <SwanMark className="size-12 shrink-0" />
            <div className="min-w-0 text-left">
              <DialogTitle className="text-xl tracking-tight">{c.name}</DialogTitle>
              <p className="text-muted-foreground mt-0.5 text-xs">{c.cardSubtitle}</p>
            </div>
          </div>
          <DialogDescription className="mt-4 text-left text-sm leading-relaxed">
            {c.intro}
          </DialogDescription>
        </DialogHeader>

        <ul className="mt-2 grid gap-4">
          {c.points.map((p) => (
            <li key={p.title} className="border-border bg-muted/40 rounded-2xl border p-4">
              <p className="text-foreground text-sm font-semibold">{p.title}</p>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{p.text}</p>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mt-2 text-xs leading-relaxed">{c.footnote}</p>
      </DialogContent>
    </Dialog>
  );
}
