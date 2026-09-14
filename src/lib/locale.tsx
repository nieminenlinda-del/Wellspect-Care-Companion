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

type Ctx = { locale: LocaleCode; setLocale: (l: LocaleCode) => void };

const LocaleContext = createContext<Ctx>({ locale: "en", setLocale: () => {} });

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
    if (stored && locales.some((l) => l.code === stored)) setLocaleState(stored);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      setLocale: (l) => {
        setLocaleState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* storage unavailable */
        }
      },
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);
