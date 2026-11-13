/**
 * Arrow targets on the cleaned anatomy illustrations, in source pixels.
 * `y` is the label's vertical center as a fraction of the image height.
 * Paired organs (kidneys, ureters) share one name and two arrowheads.
 */
export type AnatomyCallout = {
  index: number;
  side: "left" | "right";
  y: number;
  targets: { x: number; y: number }[];
};

export const maleOverviewCallouts: AnatomyCallout[] = [
  { index: 0, side: "left", y: 0.32, targets: [{ x: 286, y: 237 }] },
  { index: 1, side: "left", y: 0.48, targets: [{ x: 278, y: 297 }] },
  { index: 2, side: "right", y: 0.4, targets: [{ x: 282, y: 329 }] },
  { index: 3, side: "right", y: 0.7, targets: [{ x: 312, y: 363 }] },
  { index: 4, side: "left", y: 0.64, targets: [{ x: 268, y: 396 }] },
  { index: 5, side: "left", y: 0.82, targets: [{ x: 108, y: 474 }] },
  { index: 6, side: "right", y: 0.54, targets: [{ x: 408, y: 348 }] },
];

export const femaleCallouts: Record<"tract" | "external" | "profile", AnatomyCallout[]> = {
  tract: [
    {
      index: 0,
      side: "right",
      y: 0.3,
      targets: [
        { x: 385, y: 478 },
        { x: 760, y: 481 },
      ],
    },
    {
      index: 1,
      side: "left",
      y: 0.5,
      targets: [
        { x: 470, y: 803 },
        { x: 675, y: 806 },
      ],
    },
    { index: 2, side: "right", y: 0.72, targets: [{ x: 579, y: 1188 }] },
    { index: 3, side: "left", y: 0.84, targets: [{ x: 576, y: 1348 }] },
  ],
  external: [
    { index: 0, side: "right", y: 0.4, targets: [{ x: 578, y: 785 }] },
    { index: 1, side: "right", y: 0.66, targets: [{ x: 575, y: 970 }] },
    { index: 2, side: "left", y: 0.45, targets: [{ x: 410, y: 760 }] },
  ],
  profile: [
    { index: 0, side: "left", y: 0.24, targets: [{ x: 300, y: 175 }] },
    { index: 1, side: "left", y: 0.42, targets: [{ x: 285, y: 280 }] },
    { index: 2, side: "left", y: 0.62, targets: [{ x: 214, y: 370 }] },
    { index: 3, side: "right", y: 0.7, targets: [{ x: 255, y: 412 }] },
    { index: 4, side: "right", y: 0.48, targets: [{ x: 428, y: 328 }] },
  ],
};
