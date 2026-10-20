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
 */
export function ProductTitle({
  name,
  logo,
  logoSuffix,
  logoClassName,
  suffixClassName,
  loading,
}: {
  name: string;
  logo?: string;
  logoSuffix?: string;
  logoClassName: string;
  suffixClassName: string;
  loading?: "eager" | "lazy";
}): ReactNode {
  if (!logo) return name;
  return (
    <span className="inline-flex max-w-full items-center gap-2">
      <img src={publicUrl(logo)} alt="" className={logoClassName} loading={loading} />
      {logoSuffix ? <span className={suffixClassName}>{logoSuffix}</span> : null}
    </span>
  );
}
