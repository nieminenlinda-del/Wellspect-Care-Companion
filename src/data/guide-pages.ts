import catalog from "@/data/guide-pages.json";

const pages = catalog as Record<string, string[]>;

/** Pre-rendered brochure pages for one locale and guide id, or an empty list. */
export function guidePagesFor(locale: string, id: string): string[] {
  return pages[`${locale}/${id}`] ?? [];
}
