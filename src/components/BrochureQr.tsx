import { publicUrl } from "@/lib/public-url";

export function BrochureQrCard({
  image,
  label,
  detail,
  cover,
  variant = "compact",
}: {
  image: string;
  label: string;
  detail?: string;
  cover?: string;
  variant?: "compact" | "home";
}) {
  const coverAlt = detail ? `${label}. ${detail}` : label;
  const title = (
    <figcaption className="min-w-0">
      <span
        className={
          variant === "home"
            ? "text-card-foreground block text-xl font-semibold tracking-tight text-balance sm:text-2xl"
            : "text-foreground block text-sm font-semibold text-balance"
        }
      >
        {label}
      </span>
      {detail && (
        <span
          className={
            variant === "home"
              ? "text-muted-foreground mt-3 block text-sm"
              : "text-muted-foreground mt-1 block text-xs leading-snug"
          }
        >
          {detail}
        </span>
      )}
    </figcaption>
  );

  return (
    <figure
      className={
        variant === "home"
          ? "border-border bg-card flex h-full min-h-28 items-center gap-4 rounded-3xl border p-5 shadow-soft sm:p-6"
          : "border-border flex items-center gap-4 rounded-2xl border bg-white p-3 shadow-soft"
      }
    >
      <img
        src={publicUrl(image)}
        alt=""
        width={160}
        height={160}
        loading="lazy"
        className="size-28 shrink-0 rounded-xl bg-white object-contain sm:size-32"
      />
      {cover ? (
        <img
          src={publicUrl(cover)}
          alt={coverAlt}
          width={180}
          height={256}
          loading="lazy"
          className="h-28 w-auto max-w-[45%] shrink rounded-lg object-contain object-left sm:h-36"
        />
      ) : (
        title
      )}
    </figure>
  );
}
