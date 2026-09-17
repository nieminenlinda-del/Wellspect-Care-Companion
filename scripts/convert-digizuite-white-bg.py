#!/usr/bin/env python3
"""Convert Digizuite black-canvas QG PNGs to light-canvas illustrations.

Preserves packaging (true-white cores grown into adjacent light-gray, plus
pale-blue product plastic), saturated blue accents, and rectangular anatomy
panels. Inverts grayscale line art, arrows, and clocks onto white.
Already-light instruction art (Elle, Origo, Sense, Navina Mini) is skipped.
"""
from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

SAT_CHROMA = 0.16
WHITE_Y = 0.94
PALE_Y = 0.78
PALE_SAT = 0.035
PANEL_MIN_AREA = 40_000
PANEL_MIN_SOLIDITY = 0.78
PANEL_MIN_SIDE = 120
STRUCT4 = np.array([[0, 1, 0], [1, 1, 1], [0, 1, 0]], dtype=bool)


def _luma(rgb: np.ndarray) -> np.ndarray:
    return 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]


def _sat(rgb: np.ndarray) -> np.ndarray:
    mx = rgb.max(axis=-1)
    mn = rgb.min(axis=-1)
    return np.divide(mx - mn, np.maximum(mx, 1e-6))


def is_dark_canvas(rgb: np.ndarray) -> bool:
    y = _luma(rgb)
    corners = np.concatenate(
        [y[:8, :8].ravel(), y[:8, -8:].ravel(), y[-8:, :8].ravel(), y[-8:, -8:].ravel()]
    )
    return float(np.median(corners)) < 40 / 255.0 and float((y < 20 / 255.0).mean()) > 0.45


def _panel_mask(bright: np.ndarray) -> np.ndarray:
    panel = np.zeros(bright.shape, dtype=bool)
    lab, n = ndimage.label(bright)
    if not n:
        return panel
    slices = ndimage.find_objects(lab)
    for i, slc in enumerate(slices, start=1):
        if slc is None:
            continue
        region = lab[slc] == i
        area = int(region.sum())
        bh = slc[0].stop - slc[0].start
        bw = slc[1].stop - slc[1].start
        if area < PANEL_MIN_AREA or min(bh, bw) < PANEL_MIN_SIDE:
            continue
        if area / float(bh * bw) < PANEL_MIN_SOLIDITY:
            continue
        panel[slc] = True
    return panel


def _packaging_mask(y: np.ndarray, s: np.ndarray) -> np.ndarray:
    """True-white cores, pale-blue plastic, and light-gray attached to white cores."""
    white = (y > WHITE_Y) & (s < 0.08)
    pale = (y > PALE_Y) & (s >= PALE_SAT) & (s <= SAT_CHROMA)
    light_gray = (y > 0.82) & (s < 0.08)
    grown = ndimage.binary_propagation(white, mask=light_gray, structure=STRUCT4)
    pack = white | pale | grown
    pack = ndimage.binary_opening(pack, structure=np.ones((5, 5)))
    pack = ndimage.binary_closing(pack, structure=np.ones((3, 3)))
    return pack


def convert_rgb(rgb_u8: np.ndarray) -> np.ndarray:
    rgb = rgb_u8.astype(np.float32) / 255.0
    y = _luma(rgb)
    s = _sat(rgb)
    chroma = s > SAT_CHROMA

    pack = _packaging_mask(y, s)
    bright = (y > 0.85) & (s < 0.22)
    panel = _panel_mask(bright)

    dark_marks = (y > 0.07) & (y < 0.38) & (s < 0.08) & ~chroma
    dark_marks = ndimage.binary_opening(dark_marks, structure=np.ones((3, 3)))

    gain = np.where(y < 0.70, 1.22, 1.0)
    inv = np.clip(1.0 - y * gain, 0.0, 1.0)
    inv_rgb = np.stack([inv, inv, inv], axis=-1)

    out = inv_rgb.copy()
    out[chroma] = rgb[chroma]
    out[pack] = rgb[pack]
    out[panel] = rgb[panel]
    out[dark_marks] = rgb[dark_marks]

    ring = ndimage.binary_dilation(pack, iterations=2) & ~pack & ~chroma & ~panel
    out[ring] = 1.0
    if pack.any():
        outer = ndimage.binary_dilation(pack, iterations=1) & ~pack & ~chroma & ~panel
        out[outer] = np.minimum(out[outer], 0.22)

    mx = rgb.max(axis=-1)
    chroma_aa = chroma & (mx < 0.28) & (mx > 0.02) & ~panel
    if chroma_aa.any():
        alpha = np.maximum(mx, 1e-6)
        color = np.clip(rgb / alpha[..., None], 0.0, 1.0)
        lifted = color * alpha[..., None] + (1.0 - alpha[..., None])
        out[chroma_aa] = lifted[chroma_aa]

    return np.clip(np.round(out * 255.0), 0, 255).astype(np.uint8)


def convert_file(src: Path, dst: Path) -> str:
    im = Image.open(src).convert("RGB")
    arr = np.asarray(im)
    if not is_dark_canvas(arr.astype(np.float32) / 255.0):
        return "skip-light"
    out = convert_rgb(arr)
    dst.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(out, mode="RGB").save(dst, format="PNG", optimize=True)
    return "converted"


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--in-place", action="store_true")
    parser.add_argument("--root", type=Path, default=Path("public/images/instructions"))
    parser.add_argument("--preview-dir", type=Path, default=None)
    args = parser.parse_args()

    samples = [
        "lofric-primo-female/1.png",
        "lofric-primo-female/2.png",
        "lofric-primo-female/5.png",
        "lofric-primo-female/6.png",
        "lofric-primo-female/9.png",
        "lofric-hydro-kit/step-2.png",
        "lofric-hydro-kit-female/step-11.png",
        "lofric-classic-female/step-3.png",
        "lofric-classic-female/step-6.png",
        "lofric-primo-male/tiemann-1.png",
        "lofric-primo-male/6.png",
        "navina-classic/1-preparation.png",
        "navina-classic/3-instillation.png",
        "navina-classic/5-disassembly.png",
        "navina-smart/1-preparation.png",
        "navina-smart/4-evacuation.png",
        "lofric-elle/step-1.png",
        "lofric-origo/step-1.png",
    ]

    preview = args.preview_dir or Path("/tmp/qg-white-preview5")
    preview.mkdir(parents=True, exist_ok=True)

    if args.in_place:
        count: dict[str, int] = {}
        for path in sorted(args.root.rglob("*.png")):
            status = convert_file(path, path)
            count[status] = count.get(status, 0) + 1
            print(f"{status:12} {path.relative_to(args.root)}")
        print(count)
    else:
        for rel in samples:
            src = args.root / rel
            status = convert_file(src, preview / rel.replace("/", "__"))
            print(f"{status:12} {rel}")
