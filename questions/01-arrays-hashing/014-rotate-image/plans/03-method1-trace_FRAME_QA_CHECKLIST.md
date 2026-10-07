# Scene 03 — Method 1 Trace: QA Checklist

- **Question:** 014 (Rotate Image - LeetCode 48)
- **Scene:** `03-method1-trace`
- **Total Duration:** 4,466 frames (148.880s @ 30 FPS)
- **Audio File:** `public/audio/014/03-method1-trace.mp3`

---

## Critical Frame Checkpoints

| Checkpoint # | Frame | Beat / Anchor | Description & Invariant to Verify |
|---|---|---|---|
| **CP-01** | `frame: 100` | Anchor 0 (Intro) | Left: Source Matrix (all 25 numbers). Right: Result Matrix (empty slots). Clean top header. No overlap. |
| **CP-02** | `frame: 300` | Anchor 1 (Unchanged) | Role tags visible: `READ ONLY · PRESERVED` under Source, `WRITE TARGET` under Result. |
| **CP-03** | `frame: 500` | Anchor 2 (Mapping) | Center Card displays `(r, c) ──► (c, 4 - r)`. Generous clearance to left and right matrices. |
| **CP-04** | `frame: 640` | Anchor 3 (Apply) | Ready state: formula and matrices primed for tracing. |
| **CP-05** | `frame: 750` | Anchor 4 (1 Source) | Source cell `(0, 0)` (`1`) highlighted in gold. Tag `(r=0, c=0)` visible. |
| **CP-06** | `frame: 860` | Anchor 5 (1 Dest) | Center card shows calculation: `c=0, 4-r=4 -> (0, 4)`. Trajectory arc connects `(0, 0)` to `(0, 4)`. |
| **CP-07** | `frame: 970` | Anchor 6 (1 Place) | Result `(0, 4)` settled with `1`. Ripple effect. |
| **CP-08** | `frame: 1080` | Anchor 7 (8 Source) | Source cell `(1, 2)` (`8`) highlighted in gold. Tag `(r=1, c=2)`. |
| **CP-09** | `frame: 1190` | Anchor 8 (8 Dest) | Calculation shows `(1, 2) -> (2, 3)`. Arc connects `(1, 2)` to `(2, 3)`. Target slot dashed cyan. |
| **CP-10** | `frame: 1270` | Anchor 9 (8 Place) | Result `(2, 3)` settled with `8`. Both `1` and `8` visible in Result. |
| **CP-11** | `frame: 1380` | Anchor 10 (13 Source) | Source cell `(2, 2)` (`13`) highlighted in gold. Center fixed point callout. |
| **CP-12** | `frame: 1500` | Anchor 11 (13 Dest) | Center calculation: `(2, 2) -> (2, 2)`. Trajectory arc connects center to center. |
| **CP-13** | `frame: 1600` | Anchor 12 (13 Place) | Result `(2, 2)` settled with `13`. `FIXED POINT` badge. |
| **CP-14** | `frame: 1720` | Anchor 13 (17 Source) | Source cell `(3, 1)` (`17`) highlighted. Tag `(r=3, c=1)`. |
| **CP-15** | `frame: 1900` | Anchor 14 (17 Calc) | Step-by-step arithmetic: `c=1`, `4-r=4-3=1 -> (1, 1)`. Arc to Result `(1, 1)`. |
| **CP-16** | `frame: 2060` | Anchor 15 (17 Place) | Result `(1, 1)` settled with `17`. Now 4 elements placed in Result. |
| **CP-17** | `frame: 2300` | Anchor 16 (Whole Idea) | 3-step pipeline flow card in Center: `[READ] -> [CALCULATE] -> [WRITE]`. |
| **CP-18** | `frame: 2650` | Anchor 17 (Row 0 -> Col 4) | Source Row 0 highlighted; elements 1..5 cascading into Result Column 4. |
| **CP-19** | `frame: 3000` | Anchor 18 (Row 1 -> Col 3) | Source Row 1 highlighted; elements 6..10 filling Result Column 3. |
| **CP-20** | `frame: 3160` | Anchor 19 (Row 2 -> Col 2) | Source Row 2 highlighted; elements 11..15 filling Result Column 2. |
| **CP-21** | `frame: 3260` | Anchor 20 (Row 3 -> Col 1) | Source Row 3 highlighted; elements 16..20 filling Result Column 1. |
| **CP-22** | `frame: 3380` | Anchor 21 (Row 4 -> Col 0) | Source Row 4 highlighted; elements 21..25 filling Result Column 0. |
| **CP-23** | `frame: 3600` | Anchor 22 (Complete) | All 25 cells of Result populated. Emerald border shimmer: `90° ROTATION VERIFIED ✓`. |
| **CP-24** | `frame: 3950` | Anchor 23 (Why Safe) | Bottom Card: `WHY THIS APPROACH IS SAFE & SIMPLE` (Independent Storage, Zero Overwrite). |
| **CP-25** | `frame: 4220` | Anchor 24 (Space Tradeoff) | Bottom Card turns ruby red: `SPACE COMPLEXITY DRAWBACK: O(N²) EXTRA MEMORY`. |
| **CP-26** | `frame: 4420` | Anchor 25 (Handoff) | Center Card: `UP NEXT: METHOD 1 CODE IMPLEMENTATION ──►`. Scene ready for transition. |

---

## Zero-Collision Invariant Checklist

- [ ] Top Edge: Clean header only. No explanation text at Y: 36..130.
- [ ] Left Matrix (Source): Centered in X: 240..680, Y: 170..590.
- [ ] Right Matrix (Result): Centered in X: 1240..1680, Y: 170..590.
- [ ] Center Gap: Width 560px (X: 680..1240), perfectly accommodates Center Card (width 480px) and Flight Arcs.
- [ ] Bottom Zone: Cards stay within Y: 630..770, maintaining >= 190px clearance above Captions (Y: 960..1010).
- [ ] No ghosting or transparent bleed-through: Flying tiles and filled cells use solid opaque backgrounds.
- [ ] Deterministic Remotion React: No `Math.random()`, no CSS keyframes, zero wall-clock timing.
