import { EASE } from "./anim";
import { theme, fonts } from "./theme";
import { FPS } from "./timing";

export const f = (s: number): number => Math.round(s * FPS);
export { EASE } from "./anim";

export const ARRAY = { BOX: 95, GAP: 20 } as const;
export const rowWidth = (n: number): number => n * ARRAY.BOX + (n - 1) * ARRAY.GAP;

export const DUR = {
    draw: 0.5, writeAfter: 0.25, underline: 0.4, titleUnderline: 0.5, circle: 0.6,
    stagger: 0.35, dimRecede: 0.5, clear: 0.6, fadeIn: 0.5, fadeOut: 0.5,
} as const;

export const CHARS = { small: 1.5, body: 2.0, hero: 2.5 } as const;

export const TYPE = {
    hero: 80, emphasis: 75, headingMax: 64, headingMin: 56,
    body: 48, label: 40, sublabel: 36, number: 46,
} as const;

export const DIM = { recede: 0.15, context: 0.35, locked: 0.4 } as const;

export const FONT = fonts;
export const COLOR = theme;

import { interpolate } from "remotion";
export const crossfade = (frame: number, start: number, end?: number): number =>
    interpolate(
        frame,
        end ? [start, start + f(DUR.fadeIn), end - f(DUR.fadeOut), end] : [start, start + f(DUR.fadeIn)],
        end ? [0, 1, 1, 0] : [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE },
    );

export type Group = { cx: number; n: number; label?: string };
export const collisionCheck = (groups: Group[], minGap = 24): void => {
    const spans = groups
        .map((g) => ({ ...g, half: rowWidth(g.n) / 2 }))
        .map((g) => ({ ...g, left: g.cx - g.half, right: g.cx + g.half }))
        .sort((a, b) => a.left - b.left);
    for (let i = 1; i < spans.length; i++) {
        const prev = spans[i - 1], cur = spans[i];
        const gap = cur.left - prev.right;
        if (gap < minGap) {
            throw new Error(
                `[collisionCheck] '${prev.label ?? prev.cx}' and '${cur.label ?? cur.cx}' ` +
                `overlap: gap ${gap.toFixed(0)}px < ${minGap}px minimum`,
            );
        }
    }
};
