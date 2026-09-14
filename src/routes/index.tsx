import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  categoryLabels,
  categoryOrder,
  localizedText,
  products,
  type CategoryId,
} from "@/data/products";
import { contactInfo } from "@/data/contact";
import { uiStrings } from "@/data/ui-strings";
import { useLocale } from "@/lib/locale";
import { DisclaimerBar, DisclaimerCard } from "@/components/MedicalDisclaimer";
import { MarketSelector } from "@/components/MarketSelector";
import { EcolabelDialog, SwanMark } from "@/components/NordicEcolabel";
import { ArabicVideosDialog } from "@/components/ArabicVideos";
import { AnatomyDialog } from "@/components/AnatomyDialog";
import { anatomyStrings } from "@/data/anatomy";
import { arabicVideosStrings } from "@/data/arabic-videos";
import { ProductImage } from "@/components/ProductImage";
import { ecolabelContent } from "@/data/ecolabel";
import coast from "@/assets/nordic-coast.webp.asset.json";
import wellspectLogo from "@/assets/wellspect-logo-white.png.asset.json";
import lofricLogo from "@/assets/lofric-logo.png.asset.json";
import navinaLogo from "@/assets/navina-logo-white-hd.png.asset.json";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { category?: string } => {
    const c = search["category"];
    return typeof c === "string" ? { category: c } : {};
  },
  head: () => ({
    meta: [
      { title: "Wellspect Care Companion — LoFric and Navina Guidance" },
      {
        name: "description",
        content:
          "Browse Wellspect LoFric bladder management and Navina bowel care products with step-by-step usage, safety notices and warning signs, in Nordic languages and English.",
      },
      { property: "og:title", content: "Wellspect Care Companion — LoFric and Navina Guidance" },
      {
        property: "og:description",
        content:
          "Touch-friendly product guidance for LoFric catheters and Navina bowel care, with market and language selection.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { locale } = useLocale();
  const t = uiStrings[locale];
  const contact = contactInfo[locale];
  const eco = ecolabelContent[locale];
  const av = arabicVideosStrings[locale];
  const { category } = Route.useSearch();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<CategoryId | null>(() =>
    categoryOrder.includes(category as CategoryId) ? (category as CategoryId) : null,
  );

  const searching = query.trim() !== "";

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCategory = searching ? true : p.category === active;
      const inQuery =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.summary[locale].toLowerCase().includes(q) ||
        p.indications.some((i) => localizedText(i, locale).toLowerCase().includes(q));
      return inCategory && inQuery;
    });
  }, [query, active, locale, searching]);

  const showCategories = !searching && active === null;
  const showContact = !searching && active === "contact";

  return (
    <div className="bg-background min-h-screen pb-24">
      <DisclaimerBar />

      <header className="relative isolate overflow-hidden">
        <img
          src={coast.url}
          alt="Calm Swedish archipelago at twilight"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(165deg, oklch(0.22 0.06 258 / 0.92) 0%, oklch(0.3 0.09 254 / 0.82) 42%, oklch(0.42 0.09 285 / 0.62) 72%, oklch(0.62 0.09 40 / 0.42) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="text-primary-foreground mx-auto max-w-6xl px-5 pt-6 pb-14 sm:px-8 sm:pt-8 sm:pb-20">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <div className="min-w-0">
              <img
                src={wellspectLogo.url}
                alt="Wellspect — a real difference"
                className="h-9 w-auto object-contain sm:h-11"
              />
            </div>
            <MarketSelector variant="onDark" />
          </div>

          <div className="mt-14 max-w-2xl sm:mt-20">
            <h1 className="text-[2.1rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl">
              {t.headline}
            </h1>
            <p className="text-primary-foreground/85 mt-4 text-sm leading-relaxed text-pretty sm:text-lg">
              {t.intro}
            </p>
          </div>

          <div className="relative mt-8 max-w-xl">
            <Search
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchLabel}
              className="bg-card/95 text-foreground placeholder:text-muted-foreground focus:ring-primary-foreground/50 min-h-14 w-full rounded-full py-3 pr-12 pl-13 text-base shadow-lift backdrop-blur focus:ring-2 focus:outline-none"
            />
            {query !== "" && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={t.clearSearch}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 grid size-9 -translate-y-1/2 place-items-center rounded-full"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 opacity-85">
            <li>
              <img
                src={lofricLogo.url}
                alt="LoFric"
                className="h-7 w-auto object-contain sm:h-8"
                loading="lazy"
              />
            </li>
            <li>
              <img
                src={navinaLogo.url}
                alt="Navina"
                className="h-7 w-auto object-contain sm:h-8"
                loading="lazy"
              />
            </li>
          </ul>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pt-10 sm:px-8">
        {showCategories ? (
          <section aria-label={t.categoriesLabel}>
            <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {t.browseTitle}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {categoryOrder
                .filter((c) => c !== "contact")
                .map((c) => (
                  <li key={c}>
                    <button
                      type="button"
                      onClick={() => setActive(c)}
                      className="group border-border bg-card hover:border-primary/40 focus-visible:ring-primary flex min-h-32 w-full flex-col justify-between rounded-3xl border p-7 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus-visible:ring-2 focus-visible:outline-none active:translate-y-0 active:scale-[0.99]"
                    >
                      <span className="text-card-foreground text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                        {categoryLabels[c][locale]}
                      </span>
                      <span className="text-muted-foreground mt-4 text-sm">
                        {t.productCount(products.filter((p) => p.category === c).length)}
                      </span>
                    </button>
                  </li>
                ))}
              <li>
                <ArabicVideosDialog
                  trigger={
                    <button
                      type="button"
                      className="group border-border bg-card hover:border-primary/40 focus-visible:ring-primary flex min-h-32 w-full flex-col justify-between rounded-3xl border p-7 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus-visible:ring-2 focus-visible:outline-none active:translate-y-0 active:scale-[0.99]"
                    >
                      <span className="text-card-foreground text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                        {av.cardTitle}
                      </span>
                      <span className="text-muted-foreground mt-4 text-base" dir="rtl" lang="ar">
                        {av.cardSubtitle}
                      </span>
                    </button>
                  }
                />
              </li>
              <li>
                <EcolabelDialog
                  trigger={
                    <button
                      type="button"
                      className="group border-border bg-card hover:border-success/50 focus-visible:ring-primary flex min-h-32 w-full flex-col justify-between rounded-3xl border p-7 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus-visible:ring-2 focus-visible:outline-none active:translate-y-0 active:scale-[0.99]"
                    >
                      <span className="flex items-start gap-4">
                        <SwanMark className="size-11 shrink-0" />
                        <span className="text-card-foreground text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                          {eco.cardTitle}
                        </span>
                      </span>
                      <span className="text-muted-foreground mt-4 text-sm">{eco.cardSubtitle}</span>
                    </button>
                  }
                />
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActive("contact")}
                  className="group border-border bg-card hover:border-primary/40 focus-visible:ring-primary flex min-h-32 w-full flex-col justify-between rounded-3xl border p-7 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus-visible:ring-2 focus-visible:outline-none active:translate-y-0 active:scale-[0.99]"
                >
                  <span className="text-card-foreground text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                    {categoryLabels.contact[locale]}
                  </span>
                  <span className="text-muted-foreground mt-4 text-sm">{contact.company}</span>
                </button>
              </li>
            </ul>
          </section>
        ) : (
          <section>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setActive(null);
                  setQuery("");
                }}
                className="border-border bg-card text-foreground hover:bg-muted focus-visible:ring-primary min-h-11 rounded-full border px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {t.allCategories}
              </button>
              {!showContact && (
                <p className="text-muted-foreground text-xs tracking-wide" aria-live="polite">
                  {t.productCount(results.length)}
                </p>
              )}
            </div>

            {!searching && active !== null && (
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                  {categoryLabels[active][locale]}
                </h2>
                {(active === "women" || active === "men") && (
                  <AnatomyDialog
                    sex={active === "women" ? "female" : "male"}
                    trigger={
                      <button
                        type="button"
                        className="border-border bg-card text-foreground hover:bg-muted focus-visible:ring-primary inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                      >
                        {anatomyStrings[locale].button}
                      </button>
                    }
                  />
                )}
              </div>
            )}

            {showContact ? (
              <div className="border-border bg-card mt-6 rounded-3xl border p-7 shadow-soft sm:p-9">
                <p className="text-card-foreground text-lg font-semibold">{contact.company}</p>
                <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
                  {contact.intro}
                </p>
                <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
                      {contact.phoneLabel}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
                        className="text-primary text-base font-medium underline-offset-4 hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
                      {contact.emailLabel}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-primary text-base font-medium break-all underline-offset-4 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
                      {contact.hoursLabel}
                    </dt>
                    <dd className="text-card-foreground mt-1 text-base">{contact.hours}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
                      {contact.websiteLabel}
                    </dt>
                    <dd className="text-card-foreground mt-1 text-base">{contact.website}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
                      {contact.addressLabel}
                    </dt>
                    <dd className="text-card-foreground mt-1 text-base">{contact.address}</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {results.map((p) => (
                    <li key={p.id}>
                      <Link
                        to="/product/$id"
                        params={{ id: p.id }}
                        className="group border-border bg-card hover:border-primary/40 focus-visible:ring-primary flex h-full flex-col rounded-3xl border p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus-visible:ring-2 focus-visible:outline-none active:translate-y-0 active:scale-[0.99]"
                      >
                        <span className="bg-secondary text-secondary-foreground inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-medium">
                          {categoryLabels[p.category][locale]}
                        </span>

                        <ProductImage src={p.image} name={p.name} className="mt-5 aspect-[4/3]" />

                        <h3
                          className="text-card-foreground mt-5 flex-1 text-xl font-semibold tracking-tight"
                          aria-label={p.name}
                        >
                          {p.logo ? (
                            <img
                              src={p.logo}
                              alt={p.name}
                              className="h-7 w-auto object-contain object-left sm:h-8"
                              loading="lazy"
                            />
                          ) : (
                            p.name
                          )}
                        </h3>

                        {p.nordicEcolabel && (
                          <span className="text-success-foreground bg-success/12 mt-5 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-medium">
                            Nordic Swan
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                {results.length === 0 && (
                  <p className="text-muted-foreground border-border mt-6 rounded-3xl border border-dashed p-10 text-center text-sm">
                    {t.noResults}
                  </p>
                )}
              </>
            )}
          </section>
        )}

        <div className="mt-12">
          <DisclaimerCard />
        </div>
      </main>
    </div>
  );
}
