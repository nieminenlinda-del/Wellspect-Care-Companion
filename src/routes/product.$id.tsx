import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  Ban,
  BookOpen,
  CheckCircle2,
  Images,
  Leaf,
  ListChecks,
  Package,
  PhoneCall,
  PlayCircle,
  ShieldAlert,
} from "lucide-react";
import { categoryLabels, getProduct, hasImageGuide, localizedText } from "@/data/products";
import { uiStrings } from "@/data/ui-strings";
import { locales, useLocale, type LocaleCode } from "@/lib/locale";
import { DisclaimerBar, DisclaimerCard } from "@/components/MedicalDisclaimer";
import { MarketSelector } from "@/components/MarketSelector";
import { EcolabelDialog } from "@/components/NordicEcolabel";
import { ProductImage } from "@/components/ProductImage";
import { AnatomyDialog } from "@/components/AnatomyDialog";
import { ImageGuideDialog, InlineInstructionGuide } from "@/components/ImageGuideDialog";
import { anatomyStrings } from "@/data/anatomy";
import { ecolabelContent } from "@/data/ecolabel";
import { publicUrl } from "@/lib/public-url";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found — Wellspect" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Use and Safety | Wellspect`;
    const description = product.summary.en;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: ProductDetail,
});

type TabId = "usage" | "indications" | "safety";

function Panel({
  title,
  icon,
  tone = "neutral",
  children,
}: {
  title: string;
  icon: React.ReactNode;
  tone?: "neutral" | "warning" | "danger";
  children: React.ReactNode;
}) {
  const tones = {
    neutral: "border-border bg-card",
    warning: "border-warning/45 bg-warning/10",
    danger: "border-danger/45 bg-danger/10",
  } as const;
  return (
    <section className={`rounded-3xl border p-6 shadow-soft ${tones[tone]}`}>
      <h2 className="text-card-foreground flex items-center gap-2 text-sm font-semibold tracking-wide">
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Bullets({ items, dot }: { items: string[]; dot: string }) {
  return (
    <ul className="text-muted-foreground grid gap-2.5 text-sm leading-relaxed">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span className={`mt-2 size-1.5 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
          {i}
        </li>
      ))}
    </ul>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { locale } = useLocale();
  const t = uiStrings[locale];
  const eco = ecolabelContent[locale];
  const [tab, setTab] = useState<TabId>("usage");
  const [done, setDone] = useState<number[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const captionTracks = useMemo(
    () => Object.entries(product.captions ?? {}) as [LocaleCode, string][],
    [product.captions],
  );
  const localeLabel = (code: LocaleCode) =>
    locales.find((l) => l.code === code)?.language ?? code.toUpperCase();
  const preferredCaption = (): LocaleCode | "off" => {
    if (captionTracks.some(([c]) => c === locale)) return locale;
    if (captionTracks.some(([c]) => c === "en")) return "en";
    return "off";
  };
  const [captionLang, setCaptionLang] = useState<LocaleCode | "off">(preferredCaption);
  const videoVariants = product.videos ?? [];
  const [variantIdx, setVariantIdx] = useState(0);
  const activeVideoUrl = videoVariants.length ? videoVariants[variantIdx]?.url : product.videoUrl;
  const hasVideoSection = videoVariants.length > 0 || Boolean(product.videoUrl);

  useEffect(() => {
    setCaptionLang(preferredCaption());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, product.id]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    Array.from(video.textTracks).forEach((track) => {
      track.mode = track.language === captionLang ? "showing" : "disabled";
    });
  }, [captionLang, product.id, captionTracks.length]);

  const toggleStep = (idx: number) =>
    setDone((d) => (d.includes(idx) ? d.filter((x) => x !== idx) : [...d, idx]));

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: "usage", label: t.howToUse, icon: <ListChecks className="size-4" /> },
    { id: "indications", label: t.intendedUse, icon: <CheckCircle2 className="size-4" /> },
    { id: "safety", label: t.safety, icon: <ShieldAlert className="size-4" /> },
  ];

  const showImageGuide = hasImageGuide(product);
  const showHowToActions =
    product.category === "women" || product.category === "men" || hasVideoSection || showImageGuide;

  return (
    <div className="clinic-page bg-background">
      <DisclaimerBar />

      <div className="border-border/70 glass sticky top-0 z-20 border-b">
        <div className="clinic-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2 clinic-landscape:py-1.5">
          <nav className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground inline-flex min-h-11 min-w-0 items-center gap-2 text-sm"
            >
              <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
              <span className="truncate">{t.home}</span>
            </Link>
            <Link
              to="/"
              search={{ category: product.category }}
              className="text-foreground hover:text-primary inline-flex min-h-11 min-w-0 items-center gap-2 text-sm font-medium"
            >
              <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
              <span className="truncate">
                {t.backToCategory(categoryLabels[product.category][locale])}
              </span>
            </Link>
          </nav>
          <MarketSelector />
        </div>
      </div>

      <div className="clinic-shell">
        <header className="mt-6 clinic-landscape:mt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-[11px] font-medium">
              {categoryLabels[product.category][locale]}
            </span>
            {product.nordicEcolabel && (
              <EcolabelDialog
                trigger={
                  <button
                    type="button"
                    className="text-success-foreground bg-success/12 hover:bg-success/20 focus-visible:ring-primary inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <Leaf className="size-3" aria-hidden="true" /> {eco.badge}
                  </button>
                }
              />
            )}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,320px)_minmax(0,1fr)] sm:items-start">
            <ProductImage src={product.image} name={product.name} className="aspect-square" />
            <div>
              <h1
                className="text-foreground text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.1] font-semibold tracking-tight text-balance"
                aria-label={product.name}
              >
                {product.logo ? (
                  <img
                    src={publicUrl(product.logo)}
                    alt={product.name}
                    className="h-9 w-auto object-contain object-left sm:h-11"
                  />
                ) : (
                  product.name
                )}
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">{product.spec}</p>
              <p className="text-foreground mt-5 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
                {product.summary[locale]}
              </p>
              {locale !== "en" && (
                <p className="text-muted-foreground mt-3 text-xs italic">{t.englishNote}</p>
              )}
            </div>
          </div>
        </header>

        <div
          role="tablist"
          aria-label={product.name}
          className="glass scrollbar-none mt-6 flex gap-1.5 overflow-x-auto rounded-full border p-1.5 shadow-soft clinic-landscape:mt-4"
        >
          {tabs.map((tb) => (
            <button
              key={tb.id}
              role="tab"
              type="button"
              aria-selected={tab === tb.id}
              onClick={() => setTab(tb.id)}
              className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
                tab === tb.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tb.icon}
              {tb.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4">
          {tab === "usage" && (
            <Panel title={t.howToUse} icon={<ListChecks className="text-primary size-4" />}>
              {showHowToActions && (
                <div className="mb-5 flex flex-wrap gap-3">
                  {(product.category === "women" || product.category === "men") && (
                    <AnatomyDialog
                      sex={product.category === "women" ? "female" : "male"}
                      trigger={
                        <button
                          type="button"
                          className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                        >
                          <BookOpen className="size-4" aria-hidden="true" />
                          {anatomyStrings[locale].reference}
                        </button>
                      }
                    />
                  )}
                  {showImageGuide && (
                    <ImageGuideDialog
                      product={product}
                      done={done}
                      onToggleStep={toggleStep}
                      trigger={
                        <button
                          type="button"
                          className="border-border bg-background text-foreground hover:bg-muted focus-visible:ring-primary inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                        >
                          <Images className="size-4" aria-hidden="true" />
                          {t.viewImageGuide}
                        </button>
                      }
                    />
                  )}
                  {activeVideoUrl && (
                    <button
                      type="button"
                      onClick={() => {
                        videoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                        void videoRef.current?.play();
                      }}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                    >
                      <PlayCircle className="size-4" aria-hidden="true" />
                      {t.watchVideo}
                    </button>
                  )}
                </div>
              )}

              {hasVideoSection && (
                <div
                  className={`border-border bg-muted/40 rounded-2xl border p-4 ${
                    showImageGuide ? "" : "mb-6"
                  }`}
                >
                  <p className="text-foreground flex items-center gap-2 text-sm font-semibold">
                    <PlayCircle className="text-primary size-4" aria-hidden="true" />
                    {product.videoTitle ?? t.videoGuide}
                  </p>
                  {videoVariants.length > 1 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {videoVariants.map((variant, idx) => (
                        <button
                          key={localizedText(variant.label, locale)}
                          type="button"
                          onClick={() => setVariantIdx(idx)}
                          aria-pressed={variantIdx === idx}
                          className={`min-h-10 rounded-full px-4 text-xs font-medium transition-colors ${
                            variantIdx === idx
                              ? "bg-primary text-primary-foreground"
                              : "border-border bg-background text-muted-foreground hover:bg-muted border"
                          }`}
                        >
                          {localizedText(variant.label, locale)}
                        </button>
                      ))}
                    </div>
                  )}
                  {!activeVideoUrl && (
                    <p className="text-muted-foreground mt-3 text-sm">{t.videoPending}</p>
                  )}
                  <div
                    className={`bg-card border-border mt-3 overflow-hidden rounded-xl border ${
                      activeVideoUrl ? "" : "hidden"
                    }`}
                  >
                    <video
                      key={activeVideoUrl}
                      ref={videoRef}
                      src={activeVideoUrl ? publicUrl(activeVideoUrl) : undefined}
                      controls
                      playsInline
                      preload="metadata"
                      className="clinic-video"
                    >
                      {captionTracks.map(([code, url]) => (
                        <track
                          key={code}
                          kind="subtitles"
                          src={publicUrl(url)}
                          srcLang={code}
                          label={localeLabel(code)}
                          default={code === captionLang}
                        />
                      ))}
                    </video>
                  </div>
                  {captionTracks.length > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="text-muted-foreground text-xs font-medium">
                        {t.captions}
                      </span>
                      {captionTracks.map(([code]) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => setCaptionLang(code)}
                          aria-pressed={captionLang === code}
                          className={`min-h-9 rounded-full px-3 text-xs font-medium transition-colors ${
                            captionLang === code
                              ? "bg-primary text-primary-foreground"
                              : "border-border bg-background text-muted-foreground hover:bg-muted border"
                          }`}
                        >
                          {localeLabel(code)}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setCaptionLang("off")}
                        aria-pressed={captionLang === "off"}
                        className={`min-h-9 rounded-full px-3 text-xs font-medium transition-colors ${
                          captionLang === "off"
                            ? "bg-primary text-primary-foreground"
                            : "border-border bg-background text-muted-foreground hover:bg-muted border"
                        }`}
                      >
                        {t.captionsOff}
                      </button>
                    </div>
                  )}
                </div>
              )}
              {!showImageGuide && (
                <InlineInstructionGuide product={product} done={done} onToggleStep={toggleStep} />
              )}
            </Panel>
          )}

          {tab === "indications" && (
            <>
              <Panel title={t.intendedUse} icon={<CheckCircle2 className="text-primary size-4" />}>
                <Bullets
                  items={product.indications.map((i) => localizedText(i, locale))}
                  dot="bg-primary"
                />
              </Panel>
              <Panel title={t.storage} icon={<Package className="text-primary size-4" />}>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.storage}</p>
              </Panel>
            </>
          )}

          {tab === "safety" && (
            <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
              <Panel
                title={t.safety}
                tone="warning"
                icon={<AlertTriangle className="text-warning-foreground size-4" />}
              >
                <Bullets items={product.safety} dot="bg-warning" />
              </Panel>
              <Panel
                title={t.doNotUse}
                tone="danger"
                icon={<Ban className="text-danger-foreground size-4" />}
              >
                {product.contraindicationsIntro && (
                  <p className="text-foreground mb-3 text-sm font-semibold leading-relaxed">
                    {localizedText(product.contraindicationsIntro, locale)}
                  </p>
                )}
                <Bullets
                  items={product.contraindications.map((c) => localizedText(c, locale))}
                  dot="bg-danger"
                />
              </Panel>
              {product.emergencyWarning ? (
                <div
                  role="alert"
                  className="border-danger bg-danger/10 rounded-2xl border-2 p-5 lg:col-span-2"
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-danger-foreground size-5" />
                    <h3 className="text-danger-foreground text-base font-bold">
                      {t.emergencyWarning}
                    </h3>
                  </div>
                  <p className="text-foreground mt-2 text-sm leading-relaxed">
                    {localizedText(product.emergencyWarning, locale)}
                  </p>
                </div>
              ) : (
                <div className="lg:col-span-2">
                  <Panel
                    title={t.warningSigns}
                    tone="danger"
                    icon={<PhoneCall className="text-danger-foreground size-4" />}
                  >
                    <Bullets items={product.warningSigns} dot="bg-danger" />
                  </Panel>
                </div>
              )}
            </div>
          )}

          <DisclaimerCard />
        </div>
      </div>
    </div>
  );
}
