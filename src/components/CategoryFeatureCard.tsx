import type { Ref } from "react";
import type { CategoryFeature } from "@/data/category-features";
import { publicUrl } from "@/lib/public-url";

function FigureIcon({ kind }: { kind: "female" | "male" }) {
  if (kind === "female") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <circle cx="12" cy="4.6" r="2.35" fill="currentColor" />
        <path d="M12 8.2 17.4 21.2H6.6L12 8.2z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <circle cx="12" cy="4.5" r="2.35" fill="currentColor" />
      <rect x="8.4" y="8.1" width="7.2" height="5.4" rx="0.4" fill="currentColor" />
      <rect x="8.6" y="13.6" width="2.7" height="7.2" rx="0.3" fill="currentColor" />
      <rect x="12.7" y="13.6" width="2.7" height="7.2" rx="0.3" fill="currentColor" />
    </svg>
  );
}

export function CategoryFeatureCard({
  feature,
  headline,
  subtitle,
  onSelect,
  buttonRef,
}: {
  feature: CategoryFeature;
  headline: string;
  subtitle: string;
  onSelect: () => void;
  buttonRef?: Ref<HTMLButtonElement>;
}) {
  const { accent, figure, image } = feature;
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onSelect}
      className="group focus-visible:ring-primary relative flex h-full min-h-48 w-full flex-row items-stretch overflow-hidden rounded-3xl border bg-card text-left shadow-lift transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none active:translate-y-0 md:min-h-[22rem] md:flex-col"
      style={{
        borderColor: `${accent}33`,
        backgroundImage: `linear-gradient(165deg, ${accent}1a 0%, transparent 62%)`,
      }}
    >
      <span
        className="absolute inset-y-0 left-0 w-1.5"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />
      <span className="flex min-w-0 flex-1 flex-col p-5 pl-6 sm:p-6 sm:pl-7">
        <span className={figure ? "mb-3" : "mb-3 hidden md:block"}>
          {figure ? (
            <span
              className="grid size-11 place-items-center rounded-full"
              style={{ backgroundColor: `${accent}18`, color: accent }}
            >
              <FigureIcon kind={figure} />
            </span>
          ) : (
            <span className="block size-11" aria-hidden="true" />
          )}
        </span>
        <span className="text-card-foreground text-2xl font-semibold tracking-tight text-balance sm:text-[1.7rem]">
          {headline}
        </span>
        <span className="text-muted-foreground mt-1.5 text-sm leading-snug text-balance">
          {subtitle}
        </span>
      </span>
      <span className="flex w-[38%] shrink-0 items-end justify-center pr-3 pb-3 md:h-44 md:w-full md:px-6">
        <img
          src={publicUrl(image)}
          alt=""
          className="h-36 w-full object-contain object-bottom mix-blend-multiply md:h-40"
        />
      </span>
    </button>
  );
}
