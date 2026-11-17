import { BookOpen, ChevronRight, Mail, Package, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GuideViewer } from "@/components/GuideViewer";
import { guidePagesFor } from "@/data/guide-pages";
import { homeDeliveryCopy } from "@/data/home-delivery";
import { useLocale } from "@/lib/locale";

/** Slim home-page entry for Finland's patient home-delivery service. Other locales render nothing. */
export function HomeDeliveryBanner() {
  const { locale } = useLocale();
  if (locale !== "fi") return null;

  const copy = homeDeliveryCopy;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="border-border bg-card text-card-foreground hover:bg-muted/40 focus-visible:ring-primary mt-4 flex min-h-14 w-full items-center gap-3 rounded-2xl border px-4 py-2.5 text-left shadow-soft transition-colors focus-visible:ring-2 focus-visible:outline-none"
        >
          <span className="bg-muted text-muted-foreground grid size-9 shrink-0 place-items-center rounded-full">
            <Package className="size-4" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold tracking-tight">{copy.bannerTitle}</span>
            <span className="text-muted-foreground mt-0.5 block text-xs">{copy.bannerLine}</span>
          </span>
          <ChevronRight className="text-muted-foreground size-4 shrink-0" aria-hidden="true" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[min(88dvh,52rem)] overflow-y-auto rounded-3xl sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="pr-10 text-left text-xl tracking-tight">{copy.title}</DialogTitle>
          <p className="text-muted-foreground text-left text-xs">{copy.subtitle}</p>
        </DialogHeader>
        <ul className="grid gap-2 sm:grid-cols-2">
          {copy.facts.map((fact) => (
            <li
              key={fact}
              className="bg-muted/60 text-foreground flex items-start gap-2.5 rounded-xl px-3 py-2.5 text-sm leading-snug"
            >
              <span
                className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full"
                aria-hidden="true"
              />
              {fact}
            </li>
          ))}
        </ul>
        <div className="grid gap-3">
          <DialogDescription className="text-left text-sm leading-relaxed">
            {copy.paragraphs[0]}
          </DialogDescription>
          <p className="text-foreground text-sm leading-relaxed">{copy.paragraphs[1]}</p>
          <p className="text-foreground text-sm leading-relaxed">{copy.orderLine}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <p className="text-foreground flex items-center gap-2 text-sm font-medium">
            <Mail className="text-muted-foreground size-4 shrink-0" aria-hidden="true" />
            <span>{copy.orderEmail}</span>
          </p>
          <p className="text-foreground flex items-center gap-2 text-sm font-medium">
            <Phone className="text-muted-foreground size-4 shrink-0" aria-hidden="true" />
            <span>{copy.orderPhone}</span>
          </p>
        </div>
        <GuideViewer
          title={copy.title}
          pages={guidePagesFor("fi", "home-delivery")}
          trigger={
            <button
              type="button"
              className="border-primary text-primary bg-primary/5 hover:bg-primary/10 focus-visible:ring-primary inline-flex min-h-11 w-fit items-center gap-2 rounded-full border-2 px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <BookOpen className="size-4" aria-hidden="true" />
              {copy.readBrochure}
            </button>
          }
        />
      </DialogContent>
    </Dialog>
  );
}
