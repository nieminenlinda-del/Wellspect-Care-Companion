import type { ReactNode } from "react";
import { BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GuideViewer } from "@/components/GuideViewer";
import type { ResolvedBrochure } from "@/data/brochure-qr";
import { guidePagesFor } from "@/data/guide-pages";
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
  const readable = guides.flatMap((guide) => {
    const pages = guidePagesFor(locale, guide.id);
    return pages.length > 0 ? [{ guide, pages }] : [];
  });

  if (readable.length === 0) return null;

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
          {readable.map(({ guide, pages }) => (
            <li
              key={guide.id}
              className="border-border flex items-center gap-4 rounded-2xl border bg-white p-3"
            >
              {guide.cover && (
                <img
                  src={publicUrl(guide.cover)}
                  alt=""
                  width={120}
                  height={168}
                  className="h-24 w-auto max-w-24 shrink-0 rounded-md object-contain shadow-soft"
                />
              )}
              <div className="flex min-w-0 flex-1 flex-col items-start gap-2">
                <p className="text-foreground text-sm font-semibold leading-snug text-balance">
                  {guide.label}
                  {guide.detail && (
                    <span className="text-muted-foreground mt-1 block text-xs font-medium">
                      {guide.detail}
                    </span>
                  )}
                </p>
                <GuideViewer
                  title={guide.detail ?? guide.label}
                  pages={pages}
                  trigger={
                    <button
                      type="button"
                      className="border-primary text-primary bg-primary/5 hover:bg-primary/10 focus-visible:ring-primary inline-flex min-h-11 items-center gap-2 rounded-full border-2 px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    >
                      <BookOpen className="size-4" aria-hidden="true" />
                      {t.readGuide}
                    </button>
                  }
                />
              </div>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
