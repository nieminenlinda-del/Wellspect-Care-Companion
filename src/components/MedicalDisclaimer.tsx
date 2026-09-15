import { Info, ShieldAlert } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { uiStrings } from "@/data/ui-strings";

export function DisclaimerBar() {
  const { locale } = useLocale();
  const t = uiStrings[locale];
  return (
    <div className="bg-primary text-primary-foreground/85 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2">
      <p className="clinic-shell flex items-start gap-2 text-[11px] leading-snug tracking-wide sm:text-xs">
        <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
        <span>{t.disclaimerShort}</span>
      </p>
    </div>
  );
}

export function DisclaimerCard() {
  const { locale } = useLocale();
  const t = uiStrings[locale];
  return (
    <section
      aria-label={t.disclaimerTitle}
      className="border-warning/45 bg-warning/10 rounded-3xl border p-6 shadow-soft"
    >
      <h2 className="text-warning-foreground flex items-center gap-2 text-sm font-semibold tracking-wide">
        <ShieldAlert className="size-4 shrink-0" aria-hidden="true" />
        {t.disclaimerTitle}
      </h2>
      <p className="text-muted-foreground mt-3 text-xs leading-relaxed sm:text-sm">
        {t.disclaimerBody}
      </p>
    </section>
  );
}
