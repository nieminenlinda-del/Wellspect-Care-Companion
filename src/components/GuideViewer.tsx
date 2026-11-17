import { useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { publicUrl } from "@/lib/public-url";

const MIN_SCALE = 1;
const TAP_SCALE = 2.2;
const MAX_SCALE = 4;

/** In-app brochure reader. Pages are local images, so it works offline. */
export function GuideViewer({
  title,
  pages,
  trigger,
}: {
  title: string;
  pages: string[];
  trigger: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(MIN_SCALE);
  const scroller = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ distance: number; scale: number } | null>(null);
  const tap = useRef<{ x: number; y: number; t: number } | null>(null);

  useEffect(() => {
    if (!open) return;
    setPage(1);
    setScale(MIN_SCALE);
  }, [open]);

  useEffect(() => {
    const root = scroller.current;
    if (!open || !root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const value = best?.target.getAttribute("data-page");
        if (value) setPage(Number(value));
      },
      { root, threshold: [0.45, 0.6, 0.8] },
    );
    root.querySelectorAll("[data-page]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [open, pages]);

  if (pages.length === 0) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="flex h-[min(92dvh,56rem)] w-[min(100%,calc(100vw-1rem))] max-w-3xl flex-col gap-0 overflow-hidden rounded-3xl p-0 [&>button.absolute]:hidden">
        <div className="border-border flex min-h-16 items-center gap-3 border-b px-4 pr-20">
          <DialogTitle className="min-w-0 flex-1 truncate text-left text-base tracking-tight">
            {title}
          </DialogTitle>
          <p
            className="text-foreground shrink-0 text-sm font-medium tabular-nums"
            aria-live="polite"
          >
            {page} / {pages.length}
          </p>
          <DialogClose className="bg-card text-foreground hover:bg-muted focus-visible:ring-primary absolute top-2 right-2 grid size-14 place-items-center rounded-full shadow-soft focus-visible:ring-2 focus-visible:outline-none">
            <X className="size-7" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
        <div
          ref={scroller}
          className="bg-muted/50 min-h-0 flex-1 overflow-auto"
          onPointerDown={(event) => {
            pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
            if (pointers.current.size === 1) {
              tap.current = { x: event.clientX, y: event.clientY, t: Date.now() };
            } else {
              tap.current = null;
            }
            if (pointers.current.size === 2) {
              const [a, b] = [...pointers.current.values()];
              pinch.current = {
                distance: Math.hypot(a.x - b.x, a.y - b.y) || 1,
                scale,
              };
            }
          }}
          onPointerMove={(event) => {
            if (!pointers.current.has(event.pointerId)) return;
            pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
            if (pointers.current.size === 2 && pinch.current) {
              const [a, b] = [...pointers.current.values()];
              const distance = Math.hypot(a.x - b.x, a.y - b.y) || 1;
              const next = pinch.current.scale * (distance / pinch.current.distance);
              setScale(Math.min(MAX_SCALE, Math.max(MIN_SCALE, next)));
            }
          }}
          onPointerUp={(event) => {
            const start = tap.current;
            pointers.current.delete(event.pointerId);
            if (pointers.current.size < 2) pinch.current = null;
            if (start && pointers.current.size === 0) {
              const moved = Math.hypot(event.clientX - start.x, event.clientY - start.y);
              if (moved < 12 && Date.now() - start.t < 400) {
                setScale((current) => (current > 1.2 ? MIN_SCALE : TAP_SCALE));
              }
            }
          }}
          onPointerCancel={(event) => {
            pointers.current.delete(event.pointerId);
            pinch.current = null;
            tap.current = null;
          }}
        >
          <div className="mx-auto flex flex-col gap-3 p-3" style={{ width: `${scale * 100}%` }}>
            {pages.map((src, index) => (
              <img
                key={src}
                data-page={index + 1}
                src={publicUrl(src)}
                alt={`${title}, ${index + 1} / ${pages.length}`}
                width={1600}
                height={2200}
                draggable={false}
                className="bg-white w-full shadow-soft"
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
