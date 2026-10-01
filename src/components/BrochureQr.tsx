import { publicUrl } from "@/lib/public-url";

export function BrochureQrCard({
  image,
  label,
  detail,
  variant = "compact",
}: {
  image: string;
  label: string;
  detail?: string;
  variant?: "compact" | "home";
}) {
  if (variant === "home") {
    return (
      <figure className="border-border bg-card flex h-full min-h-28 items-center gap-4 rounded-3xl border p-5 shadow-soft sm:p-6">
        <img
          src={publicUrl(image)}
          alt=""
          width={160}
          height={160}
          loading="lazy"
          className="size-28 shrink-0 rounded-xl bg-white object-contain sm:size-32"
        />
        <figcaption className="min-w-0">
          <span className="text-card-foreground block text-xl font-semibold tracking-tight text-balance sm:text-2xl">
            {label}
          </span>
          {detail && <span className="text-muted-foreground mt-3 block text-sm">{detail}</span>}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="border-border flex items-center gap-4 rounded-2xl border bg-white p-3 shadow-soft">
      <img
        src={publicUrl(image)}
        alt=""
        width={144}
        height={144}
        loading="lazy"
        className="size-28 shrink-0 rounded-xl bg-white object-contain sm:size-32"
      />
      <figcaption className="min-w-0">
        <span className="text-foreground block text-sm font-semibold text-balance">{label}</span>
        {detail && (
          <span className="text-muted-foreground mt-1 block text-xs leading-snug">{detail}</span>
        )}
      </figcaption>
    </figure>
  );
}
