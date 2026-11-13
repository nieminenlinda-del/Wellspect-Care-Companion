import { useId, type ReactNode } from "react";
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
  type AnatomyImage,
  type AnatomySex,
} from "@/data/anatomy";
import { femaleCallouts, maleOverviewCallouts, type AnatomyCallout } from "@/data/anatomy-callouts";
import { useLocale } from "@/lib/locale";
import { publicUrl } from "@/lib/public-url";

const figureSize: Record<"overview" | "tract" | "external" | "profile", { w: number; h: number }> =
  {
    overview: { w: 662, h: 646 },
    profile: { w: 702, h: 638 },
    tract: { w: 1152, h: 1608 },
    external: { w: 1152, h: 1680 },
  };

function partName(term: string) {
  return term.replace(/^\d+\.\s*/, "");
}

function LabeledAnatomy({
  image,
  width,
  height,
  names,
  callouts,
  caption,
  note,
}: {
  image: AnatomyImage;
  width: number;
  height: number;
  names: string[];
  callouts: AnatomyCallout[];
  caption?: string;
  note?: string;
}) {
  const markerId = `anatomy-arrow-${useId().replace(/:/g, "")}`;
  const stroke = Math.max(2.4, width / 360);
  const left = callouts.filter((c) => c.side === "left");
  const right = callouts.filter((c) => c.side === "right");

  return (
    <figure className="border-border overflow-hidden rounded-2xl border bg-white">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] items-stretch gap-x-1.5 px-2 py-2 sm:gap-x-2 sm:px-3">
        <div className="relative">
          {left.map((c) => (
            <p
              key={c.index}
              className="text-foreground absolute right-0 max-w-full -translate-y-1/2 text-right text-[0.8125rem] leading-tight font-semibold sm:text-sm"
              style={{ top: `${c.y * 100}%` }}
            >
              {names[c.index]}
            </p>
          ))}
        </div>
        <div className="relative">
          <img
            src={publicUrl(image.url)}
            alt={image.alt}
            width={width}
            height={height}
            loading="lazy"
            className="h-auto w-full"
          />
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <marker
                id={markerId}
                markerWidth="7"
                markerHeight="7"
                refX="6.2"
                refY="3.5"
                orient="auto"
              >
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#243044" />
              </marker>
            </defs>
            {callouts.flatMap((c) =>
              c.targets.map((target, i) => {
                const x1 = c.side === "left" ? 1 : width - 1;
                const y1 = c.y * height;
                const props = {
                  x1,
                  y1,
                  x2: target.x,
                  y2: target.y,
                  strokeLinecap: "round" as const,
                };
                return (
                  <g key={`${c.index}-${i}`}>
                    <line {...props} stroke="white" strokeWidth={stroke * 1.7} />
                    <line
                      {...props}
                      stroke="#243044"
                      strokeWidth={stroke}
                      markerEnd={`url(#${markerId})`}
                    />
                  </g>
                );
              }),
            )}
          </svg>
        </div>
        <div className="relative">
          {right.map((c) => (
            <p
              key={c.index}
              className="text-foreground absolute left-0 max-w-full -translate-y-1/2 text-left text-[0.8125rem] leading-tight font-semibold sm:text-sm"
              style={{ top: `${c.y * 100}%` }}
            >
              {names[c.index]}
            </p>
          ))}
        </div>
      </div>
      {caption && (
        <figcaption className="text-muted-foreground border-border/70 border-t px-3 py-2 text-xs">
          {caption}
        </figcaption>
      )}
      {note && (
        <p className="text-muted-foreground border-border/70 border-t px-3 py-2 text-xs leading-relaxed">
          {note}
        </p>
      )}
    </figure>
  );
}

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
          <div className="mt-2 space-y-3">
            {sex === "male" ? (
              <LabeledAnatomy
                image={images[0]}
                width={figureSize.overview.w}
                height={figureSize.overview.h}
                names={a.labels.male.map((l) => partName(l.term))}
                callouts={maleOverviewCallouts}
                caption={a.views.overview}
              />
            ) : (
              (["tract", "external", "profile"] as const).map((view) => {
                const group = a.femaleGroups.find((g) => g.view === view);
                const image =
                  view === "profile" ? femaleProfileImage : images.find((i) => i.view === view);
                if (!group || !image) return null;
                const size = figureSize[view];
                return (
                  <LabeledAnatomy
                    key={view}
                    image={image}
                    width={size.w}
                    height={size.h}
                    names={group.items.map((item) => partName(item.term))}
                    callouts={femaleCallouts[view]}
                    caption={a.views[view]}
                    note={group.note}
                  />
                );
              })
            )}
          </div>
        ) : (
          <figure className="border-border mt-2 grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-2xl border bg-white">
            <figcaption className="text-muted-foreground flex flex-col items-center gap-2 text-xs">
              <ImageIcon className="size-7 opacity-50" aria-hidden="true" />
              {a.imagePending}
            </figcaption>
          </figure>
        )}

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
