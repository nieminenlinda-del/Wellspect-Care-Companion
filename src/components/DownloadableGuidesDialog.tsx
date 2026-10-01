import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ResolvedBrochure } from "@/data/brochure-qr";
import { uiStrings } from "@/data/ui-strings";
import { useLocale } from "@/lib/locale";
import { publicUrl } from "@/lib/public-url";

export function DownloadableGuidesDialog({
  guides,
  trigger,
}: {
  guides: ResolvedBrochure[];
  trigger: ReactNode;
}) {
  const { locale } = useLocale();
  const t = uiStrings[locale];

  if (guides.length === 0) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[min(88dvh,40rem)] overflow-y-auto rounded-3xl sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="pr-10 text-left text-xl tracking-tight">
            {t.downloadableGuides}
          </DialogTitle>
          <DialogDescription className="text-left text-sm leading-relaxed">
            {t.downloadableGuidesHint}
          </DialogDescription>
        </DialogHeader>
        <ul className="grid gap-3">
          {guides.map((guide) => (
            <li
              key={guide.id}
              className="border-border flex items-center gap-4 rounded-2xl border bg-white p-3"
            >
              <img
                src={publicUrl(guide.image)}
                alt=""
                width={96}
                height={96}
                className="size-20 shrink-0 rounded-lg bg-white object-contain sm:size-24"
              />
              {guide.cover && (
                <img
                  src={publicUrl(guide.cover)}
                  alt=""
                  width={120}
                  height={168}
                  className="h-24 w-auto max-w-24 shrink-0 rounded-md object-contain shadow-soft"
                />
              )}
              <p className="text-foreground min-w-0 text-sm font-semibold leading-snug text-balance">
                {guide.label}
                {guide.detail && (
                  <span className="text-muted-foreground mt-1 block text-xs font-medium">
                    {guide.detail}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
