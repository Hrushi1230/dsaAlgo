# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 07 — Method 2 Full Simulation Trace
## IMPLEMENTATION-READY FRAMEWISE SCENE PLAN

- **Composition ID:** `015-Scene07-Method2Trace`
- **Total Duration:** 5,156 frames (171.860s @ 30fps)
- **Audio File:** `audio/scence07.mp3`
- **Word Timestamps Authority:** `sync/07-method2-trace.json`
- **Anchor Manifest:** `sync/07-method2-trace.anchors.json` (41 locked anchors)

---

## 1. CANVAS ARCHITECTURE & COORDINATE SYSTEM

```text
========================================================================================================
CANVAS: 1920 × 1080 (Coordinate Space) | Render Target: 2K QHD (2560 × 1440) via --scale=1.3333333333333333
========================================================================================================
Y: 28..76     [ CANONICAL TOP HEADER BAR ]
              Left: Topic Badge "01 · ARRAYS & HASHING"
              Center: "Spiral Matrix – Method 2: Full Shrinking Boundary Simulation"
              Right: Question Badge "#015 MEDIUM"
--------------------------------------------------------------------------------------------------------
Y: 130..770   [ CENTER-STAGE HERO ZONE ]
              LEFT STAGE (X: 100, Y: 130, W: 820, H: 640):
                - 5×6 MeshGrid (Master matrix: 1..30)
                - Dynamic 4 Shrinking Boundary Markers (top, bottom, left, right)
                - Active Sub-Rectangle Golden Bounding Box (dynamically tracks [top..bottom][left..right])
                - Active Cell Glow & Processed Dimming
                - Visited Checkmarks on processed cells
              RIGHT STAGE (X: 960, Y: 130, W: 880, H: 640):
                - Top Card: BOUNDARY STATE MONITOR (top, bottom, left, right, active dimensions)
                - Middle Card: CURRENT PHASE & EDGE SWEEP INDICATOR
                - Bottom Card: RESULT LIST DISPLAY (O(m × n) collected values, exactly 30 cells)
--------------------------------------------------------------------------------------------------------
Y: 960..1020  [ CANONICAL WORD-SYNC CAPTIONS (Centered at Y: 980) ]
========================================================================================================
```

---

## 2. EXACT ANCHOR-BY-ANCHOR CHOREOGRAPHY

### Round 1: Outer Layer (18 cells)
- **F0..F207 (`S07_INIT`):** Initialize `top=0, bottom=4, left=0, right=5`. Matrix 5×6.
- **F208..F293 (`S07_ACTIVE`):** Entire 5×6 matrix highlighted as active rectangle.
- **F294..F406 (`S07_TOP1`):** Sweep Top Edge: cells `1, 2, 3, 4, 5, 6` (row 0, col 0..5).
- **F407..F512 (`S07_TOP_DONE`):** Row 0 marked done.
- **F513..F586 (`S07_TOP_MOVE`):** `top` increments from 0 to 1.
- **F587..F696 (`S07_ROWS_REMAIN`):** Row check: `top (1) <= bottom (4)` is TRUE.
- **F697..F734 (`S07_RIGHT1`):** Sweep Right Edge: cells `12, 18, 24, 30` (col 5, row 1..4).
- **F735..F852 (`S07_RIGHT_MOVE`):** `right` decrements from 5 to 4.
- **F853..F1128 (`S07_COLS_REMAIN`):** Col check: `left (0) <= right (4)` is TRUE.
- **F1129..F1152 (`S07_BOTTOM1`):** Sweep Bottom Edge: cells `29, 28, 27, 26, 25` (row 4, col 4..0).
- **F1153..F1340 (`S07_BOTTOM_MOVE`):** `bottom` decrements from 4 to 3.
- **F1341..F1584 (`S07_ROWS_REMAIN2`):** Row check: `top (1) <= bottom (3)` is TRUE.
- **F1585..F1811 (`S07_LEFT1`):** Sweep Left Edge: cells `19, 13, 7` (col 0, row 3..1).
- **F1812..F1899 (`S07_LEFT_MOVE`):** `left` increments from 0 to 1.
- **F1900..F2051 (`S07_OUTER_DONE`):** Outer perimeter done (18 cells). Active region shrinks to 3×4 (`top=1, bottom=3, left=1, right=4`).

### Round 2: Inner Layer (10 cells)
- **F2052..F2240 (`S07_SIZE`, `S07_CONTINUE`):** Demonstrate 3×4 active core.
- **F2241..F2448 (`S07_TOP2`):** Sweep Top Edge: cells `8, 9, 10, 11` (row 1, col 1..4).
- **F2449..F2665 (`S07_TOP_MOVE2`):** `top` increments from 1 to 2.
- **F2666..F2719 (`S07_ROWS_REMAIN3`):** Row check: `top (2) <= bottom (3)` is TRUE.
- **F2720..F2840 (`S07_RIGHT2`):** Sweep Right Edge: cells `17, 23` (col 4, row 2..3).
- **F2841..F2944 (`S07_RIGHT_MOVE2`):** `right` decrements from 4 to 3.
- **F2945..F2993 (`S07_COLS_REMAIN2`):** Col check: `left (1) <= right (3)` is TRUE.
- **F2994..F3024 (`S07_BOTTOM2`):** Sweep Bottom Edge: cells `22, 21, 20` (row 3, col 3..1).
- **F3025..F3301 (`S07_BOTTOM_MOVE2`):** `bottom` decrements from 3 to 2.
- **F3302..F3450 (`S07_ONE_ROW`):** Notice: 1 row remains (`top == 2, bottom == 2`).
- **F3451..F3545 (`S07_LEFT2`):** Sweep Left Edge: col 1, row 2..2.
- **F3546..F3717 (`S07_FOURTEEN`):** Consumes single cell `14`.
- **F3718..F3882 (`S07_LEFT_MOVE2`):** `left` increments from 1 to 2. Active region is 1×2 (`top=2, bottom=2, left=2, right=3`, cells 15, 16).

### Round 3: Degenerate Single Row & Termination (2 cells)
- **F3883..F4243 (`S07_REMAIN_ROW`, `S07_EDGECASE`, `S07_VALID_ROW`):** Highlight degenerate 1×2 sub-rectangle.
- **F4244..F4390 (`S07_FINAL_TOP`):** Sweep Top Edge: cells `15, 16` (row 2, col 2..3).
- **F4391..F4489 (`S07_TOP_MOVE3`):** `top` increments from 2 to 3.
- **F4490..F4582 (`S07_CROSSED`):** Check: `top (3) > bottom (2)`.
- **F4583..F4640 (`S07_NO_ROWS`):** No rows remain!
- **F4641..F4773 (`S07_STOP`):** Invariant triggers termination! Bottom and Left loops skipped!
- **F4774..F5083 (`S07_ONCE`, `S07_NO_VISITED`):** All 30 cells collected without extra memory.
- **F5084..F5156 (`S07_CODE`):** Bridge to Scene 08 Code.
