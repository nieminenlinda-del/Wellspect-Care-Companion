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
 * `logoClassName` sets the logo height via font-size (1em). “Sleeve” is
 * matched to “Pro” in the Origo Pro logo (849×123): that word is the same
 * blue as the Origo beside it, #7793cb, its cap is 77/123 of the image and
 * its baseline sits 18/123 above the image bottom, and its stem is 10/77 of
 * the cap. Montserrat’s cap is 0.70em, so the suffix is 0.894em at weight 480.
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
    <span className={`inline-flex max-w-full items-end gap-[0.09em] leading-none ${logoClassName}`}>
      <img
        src={publicUrl(logo)}
        alt=""
        loading={loading}
        className="h-[1em] w-auto max-w-full object-contain object-left"
      />
      {logoSuffix ? (
        <span
          className="leading-none tracking-normal whitespace-nowrap"
          style={{
            fontSize: "0.894em",
            fontWeight: 480,
            color: "#7793cb",
            // 1em here is the suffix font-size. Lift the line box so the
            // alphabetic baseline meets Pro’s (18/123 of the logo height).
            marginBottom: "calc(0.14634em / 0.894 - 0.155em)",
          }}
        >
          {logoSuffix}
        </span>
      ) : null}
    </span>
  );
}
