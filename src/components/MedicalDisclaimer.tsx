import { ShieldAlert } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { uiStrings } from "@/data/ui-strings";

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
