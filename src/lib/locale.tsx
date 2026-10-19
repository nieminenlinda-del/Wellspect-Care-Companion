import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type LocaleCode = "en" | "sv" | "fi" | "da" | "no";

export type LocaleOption = {
  code: LocaleCode;
  market: string;
  language: string;
  flag: string;
};

export const locales: LocaleOption[] = [
  { code: "en", market: "International", language: "English", flag: "🌐" },
  { code: "sv", market: "Sverige", language: "Svenska", flag: "🇸🇪" },
  { code: "fi", market: "Suomi", language: "Suomi", flag: "🇫🇮" },
  { code: "da", market: "Danmark", language: "Dansk", flag: "🇩🇰" },
  { code: "no", market: "Norge", language: "Norsk", flag: "🇳🇴" },
];

const STORAGE_KEY = "wellspect-locale";

type Ctx = {
  locale: LocaleCode;
  setLocale: (l: LocaleCode) => void;
  /** False until the stored market has been read. Availability checks should wait. */
  localeReady: boolean;
};

const LocaleContext = createContext<Ctx>({
  locale: "en",
  setLocale: () => {},
  localeReady: true,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>("en");
  const [localeReady, setLocaleReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
    if (stored && locales.some((l) => l.code === stored)) setLocaleState(stored);
    setLocaleReady(true);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      localeReady,
      setLocale: (l) => {
        setLocaleState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* storage unavailable */
        }
      },
    }),
    [locale, localeReady],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);
