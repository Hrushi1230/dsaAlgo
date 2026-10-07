# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 05 — Why Visited Memory Is Unnecessary
## AUTHORITATIVE FRAMEWISE SCENE PLAN — LOCKED TO sync/05-why-visited-unnecessary.anchors.json

- **Scene Purpose:** Discover that the remaining unvisited region in a spiral traversal is always a single sub-rectangle, prove that a rectangle is fully defined by 4 scalar boundaries (`top`, `bottom`, `left`, `right`), and replace the entire $O(m \times n)$ visited matrix with 4 integers, unlocking Method 2 with $O(1)$ auxiliary space.
- **Composition Identity:** `015-Scene05-WhyVisitedUnnecessary`
- **Total Duration:** 1,362 frames @ 30fps (45.400s) strictly from `sync/05-why-visited-unnecessary.json`
- **Component Stack:** `@dsa/kit` (`MeshGrid`, `RoughBox`, `Captions`, `ChalkboardBackground`, `ChalkFilters`)

---

## Spatial Layout & Coordinates (1920 × 1080)
- **Top Header (Y: 28..76):**
  - Left: Pattern badge `01 · ARRAYS & HASHING` (green dot)
  - Center: `Spiral Matrix — Why Visited Memory Is Unnecessary`
  - Right: `#015 MEDIUM`
- **Center-Stage Matrix (X: 200..1040, Y: 130..680):**
  - Canonical 5×6 `MeshGrid` with cellWidth=108, cellHeight=84.
  - Outer layer (18 cells) dimmed as visited.
  - Inner 3×4 rectangle (cells 8..23) highlighted with golden `RoughBox` boundary.
  - Boundary markers: `top=1`, `bottom=3`, `left=1`, `right=4`.
- **Right-Stage Insight Cards (X: 1100..1840, Y: 130..680):**
  - Phase 1 (F0..F312): Method 1 Verdict (Time $O(mn)$ PASS ✅, Space $O(mn)$ COST ⚠️).
  - Phase 2 (F313..F769): Geometric Discovery Card ("After outer loop: Remaining region is ALWAYS a rectangle!").
  - Phase 3 (F770..F1117): 4 Boundary Pointers definition (`top`, `bottom`, `left`, `right`).
  - Phase 4 (F1118..F1362): Compression Card: 30 booleans replaced by 4 integers ($O(1)$ Space!), announcing Method 2.
- **Bottom Captions (Y: 940..1024):**
  - `Captions` component with karaoke words highlighted in `theme.pivot`. Clearance above: 260px.

---

## Framewise Anchor Manifest (16 Anchors)

### Anchor 01: `S05_CORRECT` (Frames 0..49 / 0.000s..1.620s)
- **ANCHOR:** "Method 1 is correct"
- **WHAT APPEARS NOW:** Top Header and center-stage 5x6 Matrix render. Right card displays Method 1 Verdict: "ALGORITHM CORRECTNESS: 100% PASS".
- **CENTER-STAGE HERO:** Method 1 correctness confirmation.
- **CAUSE:** Narration affirms algorithm validity.
- **EFFECT / MOTION:** Green badge glows reassuringly.
- **WHAT MUST NOT APPEAR YET:** Memory critique or Method 2.
- **COMPREHENSION HOLD:** Frames 0..48 hold on correct verdict.
- **CLEANUP / EXIT:** Keep verdict visible.
- **PERSISTENT STATE:** Method 1 verified correct.

### Anchor 02: `S05_TIME` (Frames 49..187 / 1.620s..6.240s)
- **ANCHOR:** "and already takes O m times n time."
- **WHAT APPEARS NOW:** Time Complexity badge appears in green: "⏱️ TIME: O(m × n) — OPTIMAL LOWER BOUND".
- **CENTER-STAGE HERO:** $O(m \times n)$ Time Complexity.
- **CAUSE:** Stating optimal asymptotic runtime.
- **EFFECT / MOTION:** Badge slides in with spring ease.
- **WHAT MUST NOT APPEAR YET:** Visited memory critique.
- **COMPREHENSION HOLD:** Frames 188..202 hold on optimal time.
- **CLEANUP / EXIT:** Shift attention to space.
- **PERSISTENT STATE:** Time confirmed optimal.

### Anchor 03: `S05_EXTRA` (Frames 203..299 / 6.780s..9.980s)
- **ANCHOR:** "The extra cost comes from the visited matrix."
- **WHAT APPEARS NOW:** Space Complexity card flashes amber/warn: "💾 AUXILIARY SPACE: O(m × n) EXTRA MEMORY".
- **CENTER-STAGE HERO:** Visited matrix space cost.
- **CAUSE:** Pinpointing the inefficiency.
- **EFFECT / MOTION:** Amber warning outline pulses around visited allocation.
- **WHAT MUST NOT APPEAR YET:** Boundary pointers.
- **COMPREHENSION HOLD:** Frames 300..312 hold on space bottleneck.
- **CLEANUP / EXIT:** Transition focus to the matrix geometry.
- **PERSISTENT STATE:** Visited memory identified as optimization target.

### Anchor 04: `S05_LOOK` (Frames 313..350 / 10.440s..11.680s)
- **ANCHOR:** "Now look at our matrix."
- **WHAT APPEARS NOW:** Center-stage 5x6 matrix scales up slightly and brightens. Attention pointer directs focus to the grid.
- **CENTER-STAGE HERO:** 5x6 Master Matrix.
- **CAUSE:** Guiding student attention to grid structure.
- **EFFECT / MOTION:** Subtle focus zoom on the matrix.
- **WHAT MUST NOT APPEAR YET:** Processed layer marks.
- **COMPREHENSION HOLD:** Frames 351..368 brief hold.
- **CLEANUP / EXIT:** Prepare outer layer dimming.
- **PERSISTENT STATE:** Matrix is center of attention.

### Anchor 05: `S05_AFTER_OUTER` (Frames 369..458 / 12.300s..15.280s)
- **ANCHOR:** "After the full outer layer has been processed,"
- **WHAT APPEARS NOW:** Outer 18 cells (Top Row, Right Col, Bottom Row, Left Col) dim to 25% opacity with green checkmarks.
- **CENTER-STAGE HERO:** Completed outer perimeter (18 cells).
- **CAUSE:** Demonstrating state after Loop 1 of spiral.
- **EFFECT / MOTION:** Outer cells dim smoothly in unison; checkmarks light up.
- **WHAT MUST NOT APPEAR YET:** Golden inner rectangle outline.
- **COMPREHENSION HOLD:** Frames 459..475 hold on outer layer processed state.
- **CLEANUP / EXIT:** Keep outer layer dimmed.
- **PERSISTENT STATE:** Outer layer processed, inner layer untouched.

### Anchor 06: `S05_SEE` (Frames 476..507 / 15.880s..16.900s)
- **ANCHOR:** "see what remains."
- **WHAT APPEARS NOW:** The untouched 12 inner cells (`8..11`, `14..17`, `20..23`) glow brightly with yellow illumination.
- **CENTER-STAGE HERO:** Remaining untouched cells.
- **CAUSE:** Highlighting the surviving sub-matrix.
- **EFFECT / MOTION:** Inner cells brighten with glowing aura.
- **WHAT MUST NOT APPEAR YET:** Rectangle border box.
- **COMPREHENSION HOLD:** Frames 508..518 brief hold.
- **CLEANUP / EXIT:** Prepare rectangle outline.
- **PERSISTENT STATE:** Inner cells highlighted.

### Anchor 07: `S05_RECT` (Frames 519..569 / 17.300s..18.960s)
- **ANCHOR:** "It is still one rectangle."
- **WHAT APPEARS NOW:** A prominent golden `RoughBox` chalk frame draws around the 3×4 inner region!
- **CENTER-STAGE HERO:** The single contiguous 3×4 sub-rectangle.
- **CAUSE:** Recognizing geometric preservation invariant.
- **EFFECT / MOTION:** Golden rough border animates around the 3×4 region.
- **WHAT MUST NOT APPEAR YET:** Boundary pointer labels.
- **COMPREHENSION HOLD:** Frames 570..595 hold on rectangle discovery.
- **CLEANUP / EXIT:** Keep golden rectangle visible.
- **PERSISTENT STATE:** Invariant established: remaining area is a rectangle.

### Anchor 08: `S05_BETTER` (Frames 596..647 / 19.860s..21.580s)
- **ANCHOR:** "That gives us a better idea."
- **WHAT APPEARS NOW:** Right stage displays Insight Card: "💡 GEOMETRIC INSIGHT: Spiral traversal peels outer layers evenly, always leaving a smaller rectangular core!".
- **CENTER-STAGE HERO:** The architectural paradigm shift.
- **CAUSE:** Transition from cell-by-cell memory to geometric bounds.
- **EFFECT / MOTION:** Lightbulb badge bounces in with spring easing.
- **WHAT MUST NOT APPEAR YET:** Boundary pointer names.
- **COMPREHENSION HOLD:** Frames 648..668 hold on insight.
- **CLEANUP / EXIT:** Prepare comparison card.
- **PERSISTENT STATE:** Insight activated.

### Anchor 09: `S05_INSTEAD` (Frames 669..769 / 22.300s..25.640s)
- **ANCHOR:** "Instead of remembering every processed cell,"
- **WHAT APPEARS NOW:** Mini visited table with 30 boolean cells is crossed out with a gentle red chalk strike.
- **CENTER-STAGE HERO:** Rejection of per-cell boolean memory.
- **CAUSE:** Rejecting $O(m \times n)$ tracking.
- **EFFECT / MOTION:** Red chalk line strikes across the visited array icon.
- **WHAT MUST NOT APPEAR YET:** 4 boundary names.
- **COMPREHENSION HOLD:** Frames 770..782 hold on rejection.
- **CLEANUP / EXIT:** Transition to boundary representation.
- **PERSISTENT STATE:** Cell-by-cell tracking discarded.

### Anchor 10: `S05_REMEMBER_RECT` (Frames 783..924 / 26.100s..30.800s)
- **ANCHOR:** "we can simply remember which rectangle is still unprocessed."
- **WHAT APPEARS NOW:** The golden inner rectangle pulses softly. Label appears: "ACTIVE UNPROCESSED REGION".
- **CENTER-STAGE HERO:** Active rectangular boundary concept.
- **CAUSE:** Defining the minimal state required.
- **EFFECT / MOTION:** Gentle pulse animation on active rectangle border.
- **WHAT MUST NOT APPEAR YET:** Individual boundary labels.
- **COMPREHENSION HOLD:** Frames 925 brief hold.
- **CLEANUP / EXIT:** Prepare 4 boundary handles.
- **PERSISTENT STATE:** Rectangle tracking chosen.

### Anchor 11: `S05_FOUR` (Frames 926..1003 / 30.880s..33.440s)
- **ANCHOR:** "And one rectangle needs only four boundaries."
- **WHAT APPEARS NOW:** Four boundary line brackets appear at the 4 edges of the active 3x4 subgrid.
- **CENTER-STAGE HERO:** The four geometric limits of a 2D box.
- **CAUSE:** Geometric fact: any 2D axis-aligned box is defined by 4 coordinates.
- **EFFECT / MOTION:** 4 brackets pop in at top, bottom, left, and right.
- **WHAT MUST NOT APPEAR YET:** Word-based labels before spoken.
- **COMPREHENSION HOLD:** Frames 1004..1017 brief hold.
- **CLEANUP / EXIT:** Prepare individual boundary labels.
- **PERSISTENT STATE:** 4 boundary brackets active.

### Anchor 12: `S05_TOP` (Frames 1018..1027 / 33.940s..34.240s)
- **ANCHOR:** "Top,"
- **WHAT APPEARS NOW:** Top bracket lights up in cyan with glowing text: `top = 1` (above Row 1).
- **CENTER-STAGE HERO:** `top` pointer.
- **CAUSE:** Spoken word "Top".
- **EFFECT / MOTION:** Label drops down onto top border.
- **WHAT MUST NOT APPEAR YET:** Bottom, left, right labels.
- **COMPREHENSION HOLD:** Frames 1028..1038 hold on top boundary.
- **CLEANUP / EXIT:** Keep top label visible.
- **PERSISTENT STATE:** `top` pointer labeled.

### Anchor 13: `S05_BOTTOM` (Frames 1039..1051 / 34.620s..35.020s)
- **ANCHOR:** "bottom,"
- **WHAT APPEARS NOW:** Bottom bracket lights up in cyan with glowing text: `bottom = 3` (below Row 3).
- **CENTER-STAGE HERO:** `bottom` pointer.
- **CAUSE:** Spoken word "bottom".
- **EFFECT / MOTION:** Label slides up into place.
- **WHAT MUST NOT APPEAR YET:** Left, right labels.
- **COMPREHENSION HOLD:** Frames 1052..1063 hold on bottom boundary.
- **CLEANUP / EXIT:** Keep bottom label visible.
- **PERSISTENT STATE:** `bottom` pointer labeled.

### Anchor 14: `S05_LEFT_RIGHT` (Frames 1064..1103 / 35.480s..36.780s)
- **ANCHOR:** "left and right."
- **WHAT APPEARS NOW:** Left bracket lights up: `left = 1`. Right bracket lights up: `right = 4`. All 4 boundaries are now illuminated!
- **CENTER-STAGE HERO:** Complete four-pointer bounding box (`top`, `bottom`, `left`, `right`).
- **CAUSE:** Spoken words "left and right".
- **EFFECT / MOTION:** Left and right labels lock in; full bounding box glows harmoniously.
- **WHAT MUST NOT APPEAR YET:** Method 2 announcement card.
- **COMPREHENSION HOLD:** Frames 1104..1117 hold on full 4-pointer box.
- **CLEANUP / EXIT:** Transition right stage to Compression Summary Card.
- **PERSISTENT STATE:** 4 boundary pointers fully established.

### Anchor 15: `S05_REPLACE` (Frames 1118..1288 / 37.260s..42.920s)
- **ANCHOR:** "So we can replace an entire visited matrix with four integers."
- **WHAT APPEARS NOW:** Right stage displays Memory Transformation Card:
  - Left side: 30-cell Visited Array ($O(m \times n)$ RAM) with red deletion cross.
  - Arrow: $\longrightarrow$
  - Right side: 4 Integer Variables (`top`, `bottom`, `left`, `right`) in glowing emerald box.
  - Complexity tag: `💾 AUXILIARY SPACE: O(1) CONSTANT EXTRA MEMORY!`.
- **CENTER-STAGE HERO:** Memory compression: $O(m \times n) \rightarrow O(1)$.
- **CAUSE:** Explaining the core algorithmic optimization of Method 2.
- **EFFECT / MOTION:** Transformation diagram animates; $O(1)$ badge sparkles in green.
- **WHAT MUST NOT APPEAR YET:** Method 2 title card.
- **COMPREHENSION HOLD:** Frames 1289..1318 hold on $O(1)$ breakthrough.
- **CLEANUP / EXIT:** Prepare Method 2 declaration.
- **PERSISTENT STATE:** $O(1)$ memory proven achievable.

### Anchor 16: `S05_METHOD2` (Frames 1319..1362 / 43.960s..45.400s)
- **ANCHOR:** "That gives us Method 2."
- **WHAT APPEARS NOW:** Prominent celebration badge expands: "🚀 METHOD 2: 4 SHRINKING BOUNDARY POINTERS (OPTIMAL O(1) SPACE)".
- **CENTER-STAGE HERO:** Method 2 Declaration.
- **CAUSE:** Naming the optimal approach and concluding Scene 05.
- **EFFECT / MOTION:** Celebration badge pops in with spring bounce and subtle gold glow.
- **WHAT MUST NOT APPEAR YET:** Scene 06 simulation trace.
- **COMPREHENSION HOLD:** Final hold from Frame 1350 to 1362.
- **CLEANUP / EXIT:** Clean freeze ready for Scene 06.
- **PERSISTENT STATE:** Scene 05 concludes with Method 2 locked.
