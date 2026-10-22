import type { ReactNode } from "react";
import { Package } from "lucide-react";
import { publicUrl } from "@/lib/public-url";

/**
 * Product visual area with a clean neutral surface and a subtle placeholder
 * for products that do not have an official photo yet.
 */
export function ProductImage({
  src,
  name,
  className = "aspect-[4/3]",
}: {
  src?: string | undefined;
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`border-border/60 flex w-full items-center justify-center overflow-hidden rounded-2xl border bg-white ${className}`}
    >
      {src ? (
        <img
          src={publicUrl(src)}
          alt={name}
          loading="lazy"
          className="size-full object-contain p-3 mix-blend-multiply"
        />
      ) : (
        <Package className="text-muted-foreground/40 size-10" aria-hidden="true" />
      )}
    </div>
  );
}

/**
 * Official wordmark, plus an optional plain-text suffix when the variant
 * has no wordmark of its own (LoFric Origo + “Sleeve”).
 *
 * `logoClassName` sets the logo height via font-size (1em). Sleeve is sized
 * from that em so it reads as part of the mark: Origo’s cap height is
 * 185/315 of the SVG and its baseline sits 54/315 above the image bottom.
 * Montserrat’s visible cap height is 0.7075 of its font-size, so the suffix
 * is 0.83em. A line-height of 1 leaves the alphabetic baseline about 0.155em
 * above the line box; the margin cancels that so Sleeve shares Origo’s baseline.
 */
export function ProductTitle({
  name,
  logo,
  logoSuffix,
  logoClassName,
  loading,
}: {
  name: string;
  logo?: string;
  logoSuffix?: string;
  /** Font-size classes. 1em is the rendered logo height. */
  logoClassName: string;
  loading?: "eager" | "lazy";
}): ReactNode {
  if (!logo) return name;
  return (
    <span className={`inline-flex max-w-full items-end gap-[0.028em] leading-none ${logoClassName}`}>
      <img
        src={publicUrl(logo)}
        alt=""
        loading={loading}
        className="h-[1em] w-auto max-w-full object-contain object-left"
      />
      {logoSuffix ? (
        <span
          className="font-medium leading-none tracking-normal whitespace-nowrap text-[#758cc6]"
          style={{
            fontSize: "0.83em",
            marginBottom: "calc(0.17143em / 0.83 - 0.155em)",
          }}
        >
          {logoSuffix}
        </span>
      ) : null}
    </span>
  );
}
