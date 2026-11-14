/**
 * Arrow targets on the cleaned anatomy illustrations, in source pixels.
 * `y` is the label's vertical center as a fraction of the image height.
 * Paired organs (kidneys, ureters) share one name and two arrowheads.
 */
export type AnatomyCallout = {
  index: number;
  side: "left" | "right";
  y: number;
  /**
   * Arrow tip in image pixels. `bend` corners keep the leader in open space
   * so it reaches that tip without crossing another structure.
   */
  targets: { x: number; y: number; bend?: { x: number; y: number }[] }[];
};

export const maleOverviewCallouts: AnatomyCallout[] = [
  { index: 0, side: "left", y: 200 / 646, targets: [{ x: 222, y: 224 }] },
  { index: 1, side: "left", y: 268 / 646, targets: [{ x: 258, y: 296 }] },
  {
    index: 2,
    side: "left",
    y: 336 / 646,
    targets: [{ x: 308, y: 322, bend: [{ x: 248, y: 336 }] }],
  },
  {
    index: 3,
    side: "left",
    y: 404 / 646,
    targets: [{ x: 312, y: 368, bend: [{ x: 160, y: 348 }] }],
  },
  { index: 4, side: "left", y: 472 / 646, targets: [{ x: 230, y: 392 }] },
  { index: 5, side: "left", y: 540 / 646, targets: [{ x: 122, y: 472 }] },
  { index: 6, side: "right", y: 300 / 646, targets: [{ x: 468, y: 290 }] },
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
    { index: 0, side: "left", y: 150 / 638, targets: [{ x: 300, y: 175 }] },
    { index: 1, side: "left", y: 268 / 638, targets: [{ x: 285, y: 280 }] },
    { index: 2, side: "left", y: 350 / 638, targets: [{ x: 214, y: 370 }] },
    { index: 3, side: "left", y: 450 / 638, targets: [{ x: 255, y: 412 }] },
    { index: 4, side: "right", y: 300 / 638, targets: [{ x: 428, y: 328 }] },
  ],
};
