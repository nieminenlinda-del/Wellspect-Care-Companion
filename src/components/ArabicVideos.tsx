import type { ReactNode } from "react";
import { Video } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { arabicVideos, arabicVideosStrings } from "@/data/arabic-videos";
import { useLocale } from "@/lib/locale";
import { publicUrl } from "@/lib/public-url";

export function ArabicVideosDialog({ trigger }: { trigger: ReactNode }) {
  const { locale } = useLocale();
  const t = arabicVideosStrings[locale];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[min(88dvh,52rem)] overflow-y-auto rounded-3xl sm:max-w-2xl clinic-landscape:max-w-3xl">
        <DialogHeader>
          <div className="min-w-0 text-left">
            <DialogTitle className="text-xl tracking-tight">{t.cardTitle}</DialogTitle>
            <p className="text-muted-foreground mt-0.5 text-base" dir="rtl" lang="ar">
              {t.cardSubtitle}
            </p>
          </div>
          <DialogDescription className="mt-4 text-left text-sm leading-relaxed">
            {t.intro}
          </DialogDescription>
        </DialogHeader>

        <ul className="mt-2 grid gap-6">
          {arabicVideos.map((v) => (
            <li key={v.titleEn} className="border-border bg-muted/40 rounded-2xl border p-4">
              <div className="bg-card border-border overflow-hidden rounded-xl border">
                {v.src ? (
                  <video
                    src={publicUrl(v.src)}
                    poster={v.poster ? publicUrl(v.poster) : undefined}
                    controls
                    playsInline
                    preload="metadata"
                    className="clinic-video"
                  />
                ) : (
                  <div className="text-muted-foreground grid aspect-video w-full place-items-center gap-2">
                    <Video className="size-8" aria-hidden="true" />
                    <span className="text-xs">{t.comingSoon}</span>
                  </div>
                )}
              </div>
              <p className="text-foreground mt-4 text-sm font-semibold">{v.titleEn}</p>
              <p className="text-muted-foreground mt-1 text-base" dir="rtl" lang="ar">
                {v.titleAr}
              </p>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
