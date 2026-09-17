import type { ReactNode } from "react";
import { Check, Image as ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  localizedText,
  stepImage,
  stepText,
  stepTitle,
  type InstructionStep,
  type Product,
} from "@/data/products";
import { uiStrings } from "@/data/ui-strings";
import { useLocale, type LocaleCode } from "@/lib/locale";
import { publicUrl } from "@/lib/public-url";

function StepIllustration({
  image,
  index,
  done = false,
}: {
  image: string | undefined;
  index: number;
  done?: boolean;
}) {
  return (
    <span
      className={`bg-secondary relative grid aspect-[16/9] w-28 shrink-0 place-items-center overflow-hidden rounded-xl sm:w-40 ${
        done ? "opacity-70" : ""
      }`}
    >
      {image ? (
        <img
          src={publicUrl(image)}
          alt=""
          loading="lazy"
          width={461}
          height={254}
          className="size-full object-contain"
        />
      ) : (
        <ImageIcon className="text-muted-foreground/50 size-6" aria-hidden="true" />
      )}
      <span
        className={`absolute top-1 left-1 grid size-6 place-items-center rounded-full text-[11px] font-semibold ${
          done
            ? "bg-primary text-primary-foreground"
            : "bg-card text-secondary-foreground shadow-soft"
        }`}
      >
        {done ? <Check className="size-3.5" aria-hidden="true" /> : index + 1}
      </span>
    </span>
  );
}

function InstructionSteps({
  steps,
  locale,
  done,
  onToggle,
}: {
  steps: InstructionStep[];
  locale: LocaleCode;
  done?: number[];
  onToggle?: (idx: number) => void;
}) {
  return (
    <ol className="grid gap-3">
      {steps.map((step, idx) => {
        const isDone = done?.includes(idx) ?? false;
        const text = stepText(step, locale);
        const title = stepTitle(step, locale);
        const image = stepImage(step);
        const body = (
          <>
            <StepIllustration image={image} index={idx} done={Boolean(onToggle && isDone)} />
            <span className="min-w-0 flex-1">
              {title && (
                <span
                  className={`block text-sm font-semibold ${
                    isDone ? "text-muted-foreground" : "text-foreground"
                  }`}
                >
                  {title}
                </span>
              )}
              <span
                className={`block text-sm leading-relaxed ${
                  isDone
                    ? "text-muted-foreground line-through"
                    : title
                      ? "text-muted-foreground"
                      : "text-foreground"
                }`}
              >
                {text}
              </span>
            </span>
          </>
        );

        return (
          <li key={`${idx}-${text}`}>
            {onToggle ? (
              <button
                type="button"
                onClick={() => onToggle(idx)}
                aria-pressed={isDone}
                className={`flex min-h-11 w-full items-center gap-4 rounded-2xl border p-3 text-left transition-all active:scale-[0.995] sm:p-4 ${
                  isDone
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-background hover:border-primary/30 hover:bg-muted/50"
                }`}
              >
                {body}
              </button>
            ) : (
              <div className="border-border bg-background flex items-center gap-4 rounded-2xl border p-3 sm:p-4">
                {body}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function ImageGuideDialog({
  product,
  trigger,
  done,
  onToggleStep,
}: {
  product: Product;
  trigger: ReactNode;
  done: number[];
  onToggleStep: (idx: number) => void;
}) {
  const { locale } = useLocale();
  const t = uiStrings[locale];
  const progress = Math.round((done.length / product.instructions.length) * 100);

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[min(88dvh,52rem)] overflow-y-auto rounded-3xl sm:max-w-2xl clinic-landscape:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="pr-10 text-left text-xl tracking-tight">
            {t.imageGuide}
          </DialogTitle>
          <DialogDescription className="sr-only">{t.imageGuide}</DialogDescription>
        </DialogHeader>

        <div>
          <div className="bg-muted h-1.5 w-full overflow-hidden rounded-full">
            <div
              className="bg-primary h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted-foreground mt-2 text-xs" aria-live="polite">
            {done.length}/{product.instructions.length} · {progress}%
          </p>
        </div>

        <InstructionSteps
          steps={product.instructions}
          locale={locale}
          done={done}
          onToggle={onToggleStep}
        />

        {product.extraGuide && (
          <section className="border-border bg-muted/40 rounded-2xl border p-5">
            <h3 className="text-foreground text-sm font-semibold">
              {localizedText(product.extraGuide.title, locale)}
            </h3>
            {product.extraGuide.intro && (
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {localizedText(product.extraGuide.intro, locale)}
              </p>
            )}
            <div className="mt-4">
              <InstructionSteps steps={product.extraGuide.steps} locale={locale} />
            </div>
          </section>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function InlineInstructionGuide({
  product,
  done,
  onToggleStep,
}: {
  product: Product;
  done: number[];
  onToggleStep: (idx: number) => void;
}) {
  const { locale } = useLocale();
  const progress = Math.round((done.length / product.instructions.length) * 100);

  return (
    <>
      <div className="mb-5">
        <div className="bg-muted h-1.5 w-full overflow-hidden rounded-full">
          <div
            className="bg-primary h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-muted-foreground mt-2 text-xs" aria-live="polite">
          {done.length}/{product.instructions.length} · {progress}%
        </p>
      </div>
      <InstructionSteps
        steps={product.instructions}
        locale={locale}
        done={done}
        onToggle={onToggleStep}
      />
      {product.extraGuide && (
        <section className="border-border bg-muted/40 mt-6 rounded-2xl border p-5">
          <h3 className="text-foreground text-sm font-semibold">
            {localizedText(product.extraGuide.title, locale)}
          </h3>
          {product.extraGuide.intro && (
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {localizedText(product.extraGuide.intro, locale)}
            </p>
          )}
          <div className="mt-4">
            <InstructionSteps steps={product.extraGuide.steps} locale={locale} />
          </div>
        </section>
      )}
    </>
  );
}
