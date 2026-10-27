import { useEffect, useRef, type RefObject } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { IcHomeVideo } from "@/data/ic-home-videos";
import { useLocale } from "@/lib/locale";
import { publicUrl } from "@/lib/public-url";

function CaptionedFilm({
  video,
  videoRef,
}: {
  video: IcHomeVideo;
  videoRef: RefObject<HTMLVideoElement | null>;
}) {
  const { locale } = useLocale();
  const captionUrl = video.captions?.[locale];

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const apply = () => {
      Array.from(el.textTracks).forEach((track) => {
        track.mode = track.language === locale ? "showing" : "disabled";
      });
    };
    apply();
    el.textTracks.addEventListener("addtrack", apply);
    el.addEventListener("loadeddata", apply);
    return () => {
      el.textTracks.removeEventListener("addtrack", apply);
      el.removeEventListener("loadeddata", apply);
    };
  }, [locale, video.src, captionUrl, videoRef]);

  return (
    <video
      ref={videoRef}
      src={publicUrl(video.src)}
      poster={publicUrl(video.poster)}
      controls
      playsInline
      preload="metadata"
      className="clinic-video"
    >
      {captionUrl && (
        <track kind="subtitles" src={publicUrl(captionUrl)} srcLang={locale} label="English" />
      )}
    </video>
  );
}

export function IcHomeVideoCard({ video, className }: { video: IcHomeVideo; className: string }) {
  const { locale } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasCaptions = Boolean(video.captions?.[locale]);

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) videoRef.current?.pause();
      }}
    >
      <DialogTrigger asChild>
        <button type="button" className={className}>
          <span className="flex items-start gap-3">
            <span className="border-border bg-background text-foreground grid size-9 shrink-0 place-items-center rounded-full border">
              <Play className="size-4 translate-x-px" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="text-card-foreground block text-lg font-semibold tracking-tight text-balance">
                {video.title}
              </span>
              <span className="text-muted-foreground mt-3 block text-base">{video.duration}</span>
            </span>
          </span>
          <span className="bg-muted mt-4 flex min-h-28 flex-1 items-center justify-center overflow-hidden rounded-xl">
            <img
              src={publicUrl(video.poster)}
              alt=""
              className="h-full max-h-full w-full object-contain"
            />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[min(88dvh,52rem)] overflow-y-auto rounded-3xl sm:max-w-2xl clinic-landscape:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-left text-xl tracking-tight text-balance">
            {video.title}
          </DialogTitle>
          <DialogDescription className={hasCaptions ? "text-left text-sm" : "sr-only"}>
            {hasCaptions ? "English captions are included." : video.title}
          </DialogDescription>
        </DialogHeader>
        <CaptionedFilm video={video} videoRef={videoRef} />
      </DialogContent>
    </Dialog>
  );
}
