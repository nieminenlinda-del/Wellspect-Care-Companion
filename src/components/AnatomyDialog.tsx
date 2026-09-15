import type { ReactNode } from "react";
import { Image as ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  anatomyImages,
  anatomyStrings,
  femaleProfileImage,
  prostateComparison,
  type AnatomySex,
} from "@/data/anatomy";
import { useLocale } from "@/lib/locale";
import { publicUrl } from "@/lib/public-url";

export function AnatomyDialog({ sex, trigger }: { sex: AnatomySex; trigger: ReactNode }) {
  const { locale } = useLocale();
  const a = anatomyStrings[locale];
  const images = anatomyImages[sex];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[min(88dvh,52rem)] overflow-y-auto rounded-3xl sm:max-w-2xl clinic-landscape:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-left text-xl tracking-tight">{a.titles[sex]}</DialogTitle>
          <p className="text-muted-foreground text-left text-xs">{a.subtitles[sex]}</p>
          <DialogDescription className="mt-3 text-left text-sm leading-relaxed">
            {a.intro}
          </DialogDescription>
        </DialogHeader>

        {images.length > 0 ? (
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {images.map((image, i) => (
              <figure
                key={image.url}
                className={`border-border overflow-hidden rounded-2xl border bg-white ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <img
                  src={publicUrl(image.url)}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-contain"
                />
                {image.view && (
                  <figcaption className="text-muted-foreground border-border/70 border-t px-3 py-2 text-xs">
                    {a.views[image.view]}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        ) : (
          <figure className="border-border mt-2 grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-2xl border bg-white">
            <figcaption className="text-muted-foreground flex flex-col items-center gap-2 text-xs">
              <ImageIcon className="size-7 opacity-50" aria-hidden="true" />
              {a.imagePending}
            </figcaption>
          </figure>
        )}

        {sex === "female" && (
          <figure className="border-border mt-3 overflow-hidden rounded-2xl border bg-white">
            <img
              src={publicUrl(femaleProfileImage.url)}
              alt={femaleProfileImage.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-contain"
            />
            <figcaption className="text-muted-foreground border-border/70 border-t px-3 py-2 text-xs">
              {a.views.profile}
            </figcaption>
          </figure>
        )}

        <div className="mt-4">
          <p className="text-foreground text-sm font-semibold">{a.labelsHeading}</p>

          {sex === "female" ? (
            <div className="mt-3 space-y-5">
              {a.femaleGroups.map((group) => (
                <section key={group.view}>
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    {a.views[group.view]}
                  </p>
                  <dl className="mt-2 grid gap-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <div
                        key={item.badge}
                        className="border-border bg-muted/40 flex gap-3 rounded-2xl border p-3"
                      >
                        <span className="bg-foreground text-background grid size-6 shrink-0 place-items-center rounded-full text-xs font-semibold">
                          {item.badge}
                        </span>
                        <div>
                          <dt className="text-foreground text-sm font-semibold">{item.term}</dt>
                          <dd className="text-muted-foreground mt-1 text-sm leading-relaxed">
                            {item.text}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                  {group.note && (
                    <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                      {group.note}
                    </p>
                  )}
                </section>
              ))}
            </div>
          ) : (
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {a.labels.male.map((l) => (
                <div key={l.term} className="border-border bg-muted/40 rounded-2xl border p-3">
                  <dt className="text-foreground text-sm font-semibold">{l.term}</dt>
                  <dd className="text-muted-foreground mt-1 text-sm leading-relaxed">{l.text}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {sex === "male" && (
          <div className="mt-6">
            <p className="text-foreground text-sm font-semibold">{a.compare.heading}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {prostateComparison.map((image) => (
                <figure
                  key={image.url}
                  className="border-border overflow-hidden rounded-2xl border bg-white"
                >
                  <img
                    src={publicUrl(image.url)}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-square w-full object-contain"
                  />
                  {image.view && (
                    <figcaption className="text-foreground border-border/70 border-t px-3 py-2 text-xs font-medium">
                      {a.views[image.view]}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{a.compare.note}</p>
          </div>
        )}

        <p className="text-muted-foreground mt-3 text-xs leading-relaxed">{a.footnote}</p>
      </DialogContent>
    </Dialog>
  );
}
