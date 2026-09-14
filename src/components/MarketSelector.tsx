import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { locales, useLocale, type LocaleCode } from "@/lib/locale";
import { uiStrings } from "@/data/ui-strings";

export function MarketSelector({ variant = "light" }: { variant?: "light" | "onDark" }) {
  const { locale, setLocale } = useLocale();
  const t = uiStrings[locale];
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = locales.find((l) => l.code === locale)!;

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = (code: LocaleCode) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.chooseMarket}
        className={`flex min-h-11 max-w-[min(100%,20rem)] shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors clinic-landscape:min-h-12 ${
          variant === "onDark"
            ? "glass-dark text-primary-foreground hover:bg-primary-foreground/15"
            : "glass text-foreground hover:bg-muted shadow-soft"
        }`}
      >
        <Globe className="size-4 shrink-0" aria-hidden="true" />
        <span className="truncate">
          {current.market} · {current.language}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.marketLabel}
          className="glass absolute right-0 z-30 mt-2 max-h-[min(70dvh,24rem)] w-[min(18rem,calc(100vw-2rem))] overflow-y-auto rounded-3xl border shadow-lift"
        >
          {locales.map((l) => {
            const active = l.code === locale;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => select(l.code)}
                  className={`flex min-h-12 w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                    active ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
                  }`}
                >
                  <span aria-hidden="true" className="text-base">
                    {l.flag}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium">{l.market}</span>
                    <span className="text-muted-foreground block text-xs">{l.language}</span>
                  </span>
                  {active && <Check className="text-primary size-4 shrink-0" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
