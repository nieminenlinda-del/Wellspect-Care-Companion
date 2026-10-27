import type { CategoryFeature } from "@/data/category-features";
import { publicUrl } from "@/lib/public-url";

function FigureIcon({ kind }: { kind: "female" | "male" }) {
  const shoulders =
    kind === "female"
      ? "M7.2 20.2c.5-2.7 1.8-4.2 4.8-4.2s4.3 1.5 4.8 4.2"
      : "M5.8 20.2c.7-2.5 2.2-4 6.2-4s5.5 1.5 6.2 4";
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="7.1" r="2.35" stroke="currentColor" strokeWidth="1.6" />
      {kind === "female" ? (
        <path
          d="M8.1 8.4c.2-2.6 1.6-4 3.9-4s3.7 1.4 3.9 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M9.3 8.2c.6-1.5 1.5-2.2 2.7-2.2s2.1.7 2.7 2.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
      <path d={shoulders} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d={kind === "female" ? "M9.4 16.4h5.2" : "M8.2 16.2h7.6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CategoryFeatureCard({
  feature,
  headline,
  subtitle,
  onSelect,
}: {
  feature: CategoryFeature;
  headline: string;
  subtitle: string;
  onSelect: () => void;
}) {
  const { accent, figure, image } = feature;
  return (
    <button
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
              className="grid size-9 place-items-center rounded-full"
              style={{ backgroundColor: `${accent}18`, color: accent }}
            >
              <FigureIcon kind={figure} />
            </span>
          ) : (
            <span className="block size-9" aria-hidden="true" />
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
