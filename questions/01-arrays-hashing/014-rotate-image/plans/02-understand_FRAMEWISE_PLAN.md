# Scene 02 · Framewise Audio-Synchronized Plan
## Question 014: Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
### Scene 02: Understand the Rotation + Derive the Coordinate Mapping

**Authoritative Source Documents:**
- Script Truth: `Q14_Rotate_Image_FULL_SCRIPT_VERIFIED.md` (Scene 02, Lines 48–250)
- Audio Truth: `public/audio/014/02-understand.mp3` (144.420s @ 30 FPS = **4,333 frames**)
- Sync Truth: `sync/02-understand.json` (311 words, duration_frames: 4,333)
- Anchor Manifest: `sync/02-understand.anchors.json` (25 resolved anchors, 0 unmatched)
- Visual Grammar: Matrix/Grid visual grammar (`CELL POSITION stays fixed`, `VALUE moves`, `(r, c) -> (c, n - 1 - r)`)
- Resolution & Coordinates: 1920 × 1080, Center-stage vertical zone Y: 130 to Y: 750, Captions at Y: 980.

---

## 1. Scene Metadata & Coordinate Invariants

| Attribute | Specification |
|---|---|
| **Scene Identifier** | `02-understand` |
| **Duration** | **4,333 frames** (144.420s @ 30 FPS) |
| **Audio File** | `staticFile("audio/014/02-understand.mp3")` |
| **Canvas Resolution** | 1920 × 1080 |
| **Grid Geometry** | 5 × 5 Matrix, `CELL_SIZE = 76px`, `CELL_GAP = 8px`, `PITCH = 84px` |
| **Grid Bounding Box** | Width: 412px, Height: 412px, `GRID_LEFT = 754px`, `GRID_TOP = 240px` |
| **Index Rulers** | Top Col Rulers ($c \in [0..4]$ at Y: 202px), Left Row Rulers ($r \in [0..4]$ at X: 712px) |
| **Formula & Math Callout Zone** | Center-top / Callout Card at Y: 140–210px or Floating Panel beside Grid |
| **Evaluation Callout Zone** | Below Grid at Y: 680–760px (clear of bottom captions by > 220px) |
| **Captions Baseline** | `bottom: 38px`, `fontSize: 38px`, `fontFamily: fonts.hand` |

---

## 2. Master Testcase & Ground Truth

### Input Matrix ($N = 5$)
```text
Row 0: [  1,  2,  3,  4,  5 ]
Row 1: [  6,  7,  8,  9, 10 ]
Row 2: [ 11, 12, 13, 14, 15 ]
Row 3: [ 16, 17, 18, 19, 20 ]
Row 4: [ 21, 22, 23, 24, 25 ]
```

### 90° Clockwise Rotated Target State
```text
Row 0: [ 21, 16, 11,  6,  1 ]
Row 1: [ 22, 17, 12,  7,  2 ]
Row 2: [ 23, 18, 13,  8,  3 ]
Row 3: [ 24, 19, 14,  9,  4 ]
Row 4: [ 25, 20, 15, 10,  5 ]
```

### Verified Movements in Scene 02:
1. **Four Corners Cycle:**
   - $1$ at $(0, 0) \to (0, 4)$
   - $5$ at $(0, 4) \to (4, 4)$
   - $25$ at $(4, 4) \to (4, 0)$
   - $21$ at $(4, 0) \to (0, 0)$
2. **General Mapping:** $(r, c) \to (c, n - 1 - r) \implies (c, 4 - r)$ for $N = 5$.
3. **Interior Verification:** $8$ at $(1, 2) \to (2, 4 - 1) = (2, 3)$.
4. **Odd-Center Fixed Point:** $13$ at $(2, 2) \to (2, 4 - 2) = (2, 2)$ (invariant: does not move!).

---

## 3. Mandatory 9-Section Framewise Beat Choreography

### Beat 01 (F0–F121) — Problem Statement & Square Grid Reveal
- **ANCHOR:** `S02_GIVEN_MATRIX` (Words 0..8: `"We are given an n by n square matrix."`)
- **WHAT APPEARS NOW:** `ProblemOpenerShell` at top (`01 · ARRAYS & HASHING`, `LEETCODE 48 · MEDIUM`, `Rotate Image`). Chalkboard grid wireframe shell (5×5 empty cells) smoothly fades and scales in at center stage (X: 754, Y: 240, 412×412px).
- **CENTER-STAGE HERO:** Empty 5×5 grid frame with subtle cyan chalk dashed border.
- **CAUSE:** Transitioning from roadmap into the concrete geometric workspace.
- **EFFECT / MOTION:** Scale eases from 0.96 to 1.00; opacity fades from 0 to 1 over F0..F24.
- **WHAT MUST NOT APPEAR YET:** Cell values ($1..25$), coordinate rulers ($r, c$), arrows.
- **COMPREHENSION HOLD:** F99..F121 (730ms silence).
- **CLEANUP / EXIT:** None. Wireframe remains base container.
- **PERSISTENT STATE:** Pristine 5×5 grid container centered at X: 754, Y: 240.

---

### Beat 02 (F122–F245) — Master 5×5 Values Reveal
- **ANCHOR:** `S02_5X5_EXAMPLE` (Words 9..19: `"For this lesson, we will use our 5 by 5 matrix,"`)
- **WHAT APPEARS NOW:** All 25 initial integer values ($1..25$) appear in row-major order with staggered chalk-in (stagger: 2 frames per row). Header tag above grid: `"5 × 5 MASTER MATRIX (N = 5)"`.
- **CENTER-STAGE HERO:** Complete initial 5×5 matrix with crisp white handwritten values.
- **CAUSE:** Establishing the authoritative concrete master testcase.
- **EFFECT / MOTION:** Row-by-row chalk fade-in over F122..F180. Gentle ambient glow.
- **WHAT MUST NOT APPEAR YET:** Coordinate labels $0..4$, corner highlights, rotation arcs.
- **COMPREHENSION HOLD:** F180..F245 (hold on pristine matrix).
- **CLEANUP / EXIT:** Header tag persists.
- **PERSISTENT STATE:** Full 5×5 matrix visible with values $1..25$.

---

### Beat 03 (F246–F376) — Zero-Based Coordinate Rulers
- **ANCHOR:** `S02_ZERO_INDEXED` (Words 20..29: `"and we will use zero-based row and column indices."`)
- **WHAT APPEARS NOW:** Top column rulers `c: 0  1  2  3  4` draw at Y: 202px. Left row rulers `r: 0  1  2  3  4` draw at X: 712px in seafoam green/cyan.
- **CENTER-STAGE HERO:** The coordinate ruler frame framing the 5×5 matrix.
- **CAUSE:** Defining the 0-indexed coordinate system $(r, c)$ for all subsequent derivations.
- **EFFECT / MOTION:** Rulers draw with rough line ticks and numeric labels fading in F246..F290.
- **WHAT MUST NOT APPEAR YET:** Corner colored spotlights, flight paths.
- **COMPREHENSION HOLD:** F351..F376 (hold on coordinate frame).
- **CLEANUP / EXIT:** Rulers persist throughout the scene.
- **PERSISTENT STATE:** 5×5 matrix with persistent $(r, c)$ coordinate axes.

---

### Beat 04 (F377–F457) — Four Corners Hook
- **ANCHOR:** `S02_FOUR_CORNERS_HOOK` (Words 30..35: `"First, just watch the four corners."`)
- **WHAT APPEARS NOW:** The 4 corner cells illuminate with glowing rough outline boxes:
  - $(0, 0)$ containing $1$: Cyan spotlight (`#00F2FE`)
  - $(0, 4)$ containing $5$: Gold spotlight (`#FFE600`)
  - $(4, 4)$ containing $25$: Emerald spotlight (`#10B981`)
  - $(4, 0)$ containing $21$: Purple/Magenta spotlight (`#D946EF`)
  Interior 21 cells dim slightly to opacity 0.35.
- **CENTER-STAGE HERO:** The four illuminated corner values.
- **CAUSE:** Grounding rotation intuition on the most visible geometric landmarks.
- **EFFECT / MOTION:** Corners pop with subtle spring bounce; interior cells dim gently over F377..F415.
- **WHAT MUST NOT APPEAR YET:** Flight paths or destination labels.
- **COMPREHENSION HOLD:** F437..F457 (hold).
- **CLEANUP / EXIT:** Spotlight state maintained into Beat 05.
- **PERSISTENT STATE:** Four corners highlighted; interior dimmed.

---

### Beat 05 (F458–F601) — Corner 1 Source at (0, 0)
- **ANCHOR:** `S02_CORNER_1_SOURCE` (Words 36..42: `"One starts at row 0, column 0."`)
- **WHAT APPEARS NOW:** Top-left corner $(0, 0)$ pulses. Callout tag docks above it: `"Start: (0, 0) = 1"`. Top row index `c: 0` and left row index `r: 0` highlight in cyan.
- **CENTER-STAGE HERO:** Cell $(0, 0)$ with value $1$.
- **CAUSE:** Establishing the exact starting coordinate of the first corner.
- **EFFECT / MOTION:** Ruler ticks at $r=0$ and $c=0$ brighten; callout tag fades in.
- **WHAT MUST NOT APPEAR YET:** Value 1 moving.
- **COMPREHENSION HOLD:** F583..F601 (pause before rotation statement).
- **CLEANUP / EXIT:** Callout tag transitions into flight tracking.
- **PERSISTENT STATE:** Value 1 ready to move.

---

### Beat 06 (F602–F781) — 90° Clockwise Rotation & Corner 1 Flight to (0, 4)
- **ANCHOR:** `S02_CORNER_1_DEST` (Words 43..55: `"After a 90-degree clockwise rotation, one moves to row 0, column 4."`)
- **WHAT APPEARS NOW:** Clockwise dashed arc draws from $(0, 0)$ across the top edge to $(0, 4)$. Value $1$ lifts off from $(0, 0)$ and glides along a smooth Bezier flight arc into cell $(0, 4)$! Ghost outline at $(0, 0)$ preserves origin. Destination callout: `"(0, 0) ➔ (0, 4)"`.
- **CENTER-STAGE HERO:** Value $1$ in flight and docking at $(0, 4)$.
- **CAUSE:** Demonstrating the fundamental clockwise rotation mapping on the first element.
- **EFFECT / MOTION:** Arc reveals over F602..F670; value $1$ flies over F688..F752. Subtle chalk dust at $(0, 4)$ on landing.
- **WHAT MUST NOT APPEAR YET:** Corner 5 moving.
- **COMPREHENSION HOLD:** F752..F781.
- **CLEANUP / EXIT:** Flight arc fades down to subtle faint trace.
- **PERSISTENT STATE:** Value $1$ shown at target $(0, 4)$; ghost at $(0, 0)$.

---

### Beat 07 (F782–F1081) — Corner 5 Flight from (0, 4) to (4, 4)
- **ANCHOR:** `S02_CORNER_5_CYCLE` (Words 56..72: `"Now 5 starts at row 0, column 4. After rotation, 5 moves to row 4, column 4."`)
- **WHAT APPEARS NOW:** Corner $(0, 4)$ with original value $5$ pulses. Downward clockwise dashed arc draws along the right edge from $(0, 4)$ to $(4, 4)$. Value $5$ glides down from $(0, 4)$ to $(4, 4)$. Callout: `"(0, 4) ➔ (4, 4)"`.
- **CENTER-STAGE HERO:** Value $5$ flying down the right column to $(4, 4)$.
- **CAUSE:** Continuing the 4-corner clockwise cycle.
- **EFFECT / MOTION:** Value $5$ lifts off and glides smoothly along the right edge over F970..F1042. Landing puff at $(4, 4)$.
- **WHAT MUST NOT APPEAR YET:** Corners 25 and 21 moving.
- **COMPREHENSION HOLD:** F1050..F1081.
- **CLEANUP / EXIT:** Right edge arc settles into persistent trail.
- **PERSISTENT STATE:** Values $1$ and $5$ at their rotated corner targets.

---

### Beat 08 (F1082–F1359) — Corners 25 and 21 Flights Completing the Perimeter
- **ANCHOR:** `S02_CORNERS_25_21_CYCLE` (Words 73..94: `"25 moves from the bottom right to the bottom left. And 21 moves from the bottom left back to the top left."`)
- **WHAT APPEARS NOW:**
  - Value $25$ glides from bottom-right $(4, 4)$ to bottom-left $(4, 0)$ along the bottom edge arc (F1082..F1189). Callout: `"(4, 4) ➔ (4, 0)"`.
  - Value $21$ glides from bottom-left $(4, 0)$ back up to top-left $(0, 0)$ along the left edge arc (F1205..F1343). Callout: `"(4, 0) ➔ (0, 0)"`.
- **CENTER-STAGE HERO:** Dual sequential flights completing the perimeter loop.
- **CAUSE:** Closing the 4-way corner rotational cycle.
- **EFFECT / MOTION:** Synchronized glide animations with directional arrows.
- **WHAT MUST NOT APPEAR YET:** General formula $(r, c)$.
- **COMPREHENSION HOLD:** F1343..F1359.
- **CLEANUP / EXIT:** All four edge arcs connect into a complete perimeter cycle.
- **PERSISTENT STATE:** All 4 corners have mapped clockwise: $1 \to 5 \to 25 \to 21 \to 1$.

---

### Beat 09 (F1360–F1477) — The 4-Corner Cycle Summary
- **ANCHOR:** `S02_CORNER_CYCLE_SUMMARY` (Words 95..103: `"So these four corner values form one rotation cycle,"`)
- **WHAT APPEARS NOW:** The full 4-corner loop illuminates as a unified glowing circuit:
  $$1 \xrightarrow{\quad} 5 \xrightarrow{\quad} 25 \xrightarrow{\quad} 21 \xrightarrow{\quad} 1$$
  Summary badge above grid: `"4-CORNER ROTATION CYCLE"`.
- **CENTER-STAGE HERO:** The closed 4-way permutation ring.
- **CAUSE:** Solidifying the geometric concept of closed 4-element cycles.
- **EFFECT / MOTION:** Glowing pulse runs around the perimeter loop.
- **WHAT MUST NOT APPEAR YET:** Formula $(r, c) \to (c, n - 1 - r)$.
- **COMPREHENSION HOLD:** F1440..F1477.
- **CLEANUP / EXIT:** Cycle highlight smoothly fades as attention shifts to all cells.
- **PERSISTENT STATE:** Corner cycle understood; master matrix resets to initial values.

---

### Beat 10 (F1478–F1692) — General Rule Needed for Every Cell
- **ANCHOR:** `S02_GENERAL_RULE_NEED` (Words 104..120: `"but we need a rule that works for every cell in the matrix, not only the corners."`)
- **WHAT APPEARS NOW:** Interior cells fade back to full opacity ($1.0$). A subtle sweep wave travels across all 25 cells. Callout card above grid: `"Need a General Coordinate Mapping for ALL Cells"`.
- **CENTER-STAGE HERO:** The entire 5×5 matrix with all 25 cells illuminated equally.
- **CAUSE:** Moving from the corner special case to the universal algorithmic rule.
- **EFFECT / MOTION:** Gentle brightness wave across matrix; callout card slides in smoothly at Y: 150px.
- **WHAT MUST NOT APPEAR YET:** Specific variables $r, c$ before spoken.
- **COMPREHENSION HOLD:** F1674..F1692.
- **CLEANUP / EXIT:** Callout card prepares for formula derivation.
- **PERSISTENT STATE:** Entire matrix ready for general coordinate deduction.

---

### Beat 11 (F1693–F1818) — Arbitrary Value at (r, c)
- **ANCHOR:** `S02_ARBITRARY_RC` (Words 121..128: `"Take any value. At row R, column C,"`)
- **WHAT APPEARS NOW:** A general cell icon $(r, c)$ highlights at representative row $r$ and column $c$. Rulers highlight `r` on the left and `c` on top in golden amber. Tag beside cell: `"(r, c)"`.
- **CENTER-STAGE HERO:** Cell $(r, c)$ and its row/column projection lines.
- **CAUSE:** Introducing mathematical coordinates $(r, c)$.
- **EFFECT / MOTION:** Row $r$ horizontal beam and Col $c$ vertical beam intersect at $(r, c)$.
- **WHAT MUST NOT APPEAR YET:** Formula result.
- **COMPREHENSION HOLD:** F1807..F1818.
- **CLEANUP / EXIT:** Projections remain visible for transformation.
- **PERSISTENT STATE:** Arbitrary cell $(r, c)$ isolated.

---

### Beat 12 (F1819–F2046) — Deriving New Row: newRow = c
- **ANCHOR:** `S02_DERIVE_NEW_ROW` (Words 129..146: `"after a 90-degree clockwise rotation, its new row becomes the old column. So new row is C,"`)
- **WHAT APPEARS NOW:** Geometric rotation illustration: The horizontal row vector rotates 90° clockwise into a vertical column, meaning horizontal position $c$ now determines vertical row position!
  Callout badge: $$\mathbf{\text{New Row}} = c$$
- **CENTER-STAGE HERO:** Formula block showing $\text{newRow} = c$ with animated chalk arrow.
- **CAUSE:** Clockwise rotation maps original column index directly to new row index.
- **EFFECT / MOTION:** Formula box reveals with spring ease; column $c$ indicator links to $\text{newRow}$.
- **WHAT MUST NOT APPEAR YET:** New column formula.
- **COMPREHENSION HOLD:** F2036..F2046.
- **CLEANUP / EXIT:** $\text{newRow} = c$ stays locked in formula card.
- **PERSISTENT STATE:** $\text{newRow} = c$ confirmed.

---

### Beat 13 (F2047–F2182) — Deriving New Column: newCol = n - 1 - r
- **ANCHOR:** `S02_DERIVE_NEW_COL` (Words 147..156: `"and the new column becomes n minus 1 minus R."`)
- **WHAT APPEARS NOW:** Derivation of new column: Original row $r$ from top flips to column distance from right edge ($n - 1 - r$).
  Callout badge updates:
  $$\mathbf{\text{New Column}} = n - 1 - r$$
- **CENTER-STAGE HERO:** Formula block showing $\text{newCol} = n - 1 - r$.
- **CAUSE:** Row indices measure from top ($0 \to n-1$); when rotated clockwise, they become columns measuring from right to left ($n-1 \to 0$), hence $n - 1 - r$.
- **EFFECT / MOTION:** Chalk underline draws beneath $n - 1 - r$.
- **WHAT MUST NOT APPEAR YET:** Full unified mapping banner.
- **COMPREHENSION HOLD:** F2167..F2182.
- **CLEANUP / EXIT:** Both components ready to assemble.
- **PERSISTENT STATE:** $\text{newRow} = c$ and $\text{newCol} = n - 1 - r$ derived.

---

### Beat 14 (F2183–F2451) — Complete General Coordinate Mapping Banner
- **ANCHOR:** `S02_GENERAL_MAPPING_FORMULA` (Words 157..176: `"So our complete coordinate mapping is row R, column C, moves to row C, column n minus 1 minus R."`)
- **WHAT APPEARS NOW:** A hero chalk theorem card docks above the matrix at Y: 135px (Width: 840px, Height: 75px):
  $$\mathbf{(r, c) \;\longrightarrow\; (c,\; n - 1 - r)}$$
  In crisp cyan and gold chalk text with double rough underline.
- **CENTER-STAGE HERO:** The Universal 90° Clockwise Rotation Theorem Card.
- **CAUSE:** Synthesizing the complete mathematical law of square matrix rotation.
- **EFFECT / MOTION:** Card slides in with clean ease; golden chalk underline sweeps left-to-right over F2183..F2230.
- **WHAT MUST NOT APPEAR YET:** $N = 5$ substitution.
- **COMPREHENSION HOLD:** F2381..F2451.
- **CLEANUP / EXIT:** Banner stays docked as authoritative header for the rest of Scene 02.
- **PERSISTENT STATE:** Universal formula $(r, c) \to (c, n - 1 - r)$ prominently displayed.

---

### Beat 15 (F2452–F2790) — Specializing for N = 5: (r, c) -> (c, 4 - r)
- **ANCHOR:** `S02_SPEC_N5_FORMULA` (Words 177..201: `"For our 5 by 5 matrix, n minus 1 is 4. So here, row R, column C, moves to row C, column 4 minus R."`)
- **WHAT APPEARS NOW:** Formula card transforms smoothly:
  $$\text{For } N = 5:\quad n - 1 = 4 \quad\implies\quad \mathbf{(r, c) \;\longrightarrow\; (c,\; 4 - r)}$$
  Right side of card highlights $4 - r$ in warm amber.
- **CENTER-STAGE HERO:** The specialized formula $(r, c) \to (c, 4 - r)$ for our 5×5 matrix.
- **CAUSE:** Grounding the general algebraic formula to the concrete testcase.
- **EFFECT / MOTION:** Morph transformation from $(c, n - 1 - r)$ to $(c, 4 - r)$ with subtle chalk dust puff.
- **WHAT MUST NOT APPEAR YET:** Value 8 verification.
- **COMPREHENSION HOLD:** F2731..F2790.
- **CLEANUP / EXIT:** Formula card maintains $(r, c) \to (c, 4 - r)$.
- **PERSISTENT STATE:** Concrete mapping $(r, c) \to (c, 4 - r)$ locked.

---

### Beat 16 (F2791–F2992) — Interior Verification: Value 8 at (1, 2)
- **ANCHOR:** `S02_VERIFY_INTERIOR_8_SOURCE` (Words 202..215: `"Let's verify this. With an interior value, 8 is at row 1, column 2."`)
- **WHAT APPEARS NOW:** Cell $(1, 2)$ containing value $8$ lights up with bright amber focus box. Left ruler $r=1$ and top ruler $c=2$ highlight. Verification calculation panel appears below matrix at Y: 685px:
  `"Testing Interior Value: 8 at (r = 1, c = 2)"`
- **CENTER-STAGE HERO:** Cell $(1, 2)$ containing value $8$.
- **CAUSE:** Verifying that the formula holds for non-boundary, interior matrix cells.
- **EFFECT / MOTION:** Cell $(1, 2)$ pulses; calculation panel slides up smoothly over F2842..F2880.
- **WHAT MUST NOT APPEAR YET:** Flight to $(2, 3)$ before spoken.
- **COMPREHENSION HOLD:** F2980..F2992.
- **CLEANUP / EXIT:** Calculation panel transitions into live math evaluation.
- **PERSISTENT STATE:** Value 8 at $(1, 2)$ primed for evaluation.

---

### Beat 17 (F2993–F3325) — Value 8 Calculation & Flight to (2, 3)
- **ANCHOR:** `S02_VERIFY_INTERIOR_8_DEST` (Words 216..239: `"Its new row becomes 2, and its new column becomes 4 minus 1, which is 3. So 8 moves to row 2, column 3."`)
- **WHAT APPEARS NOW:**
  - Live calculation step in panel:
    - $\text{newRow} = c = 2$
    - $\text{newCol} = 4 - r = 4 - 1 = 3$
    - $\implies \mathbf{\text{Destination}: (2, 3)}$
  - Value $8$ lifts off from $(1, 2)$ and glides along a smooth curved Bezier flight path into cell $(2, 3)$!
  - Ghost outline left at $(1, 2)$; landing spark at $(2, 3)$.
- **CENTER-STAGE HERO:** Value $8$ calculating and flying from $(1, 2)$ into $(2, 3)$.
- **CAUSE:** Proving the formula $(r, c) \to (c, 4 - r)$ produces the exact physical clockwise destination.
- **EFFECT / MOTION:** Math lines reveal line-by-line in sync with narration; flight animation over F3186..F3275.
- **WHAT MUST NOT APPEAR YET:** Center element 13.
- **COMPREHENSION HOLD:** F3275..F3325.
- **CLEANUP / EXIT:** Value 8 docks cleanly at $(2, 3)$.
- **PERSISTENT STATE:** Interior element 8 mapped to $(2, 3)$.

---

### Beat 18 (F3326–F3336) — Confirmation Checkmark
- **ANCHOR:** `S02_VERIFY_GOOD` (Word 240: `"Good."`)
- **WHAT APPEARS NOW:** Crisp green checkmark (`✓`) pops beside the destination calculation: `"(1, 2) ➔ (2, 3)  ✓ VERIFIED"`.
- **CENTER-STAGE HERO:** Green confirmation checkmark.
- **CAUSE:** Narration affirmation `"Good."`.
- **EFFECT / MOTION:** Spring pop with green chalk dust burst.
- **WHAT MUST NOT APPEAR YET:** Center 13.
- **COMPREHENSION HOLD:** F3326..F3336.
- **CLEANUP / EXIT:** Calculation panel clears to make room for center cell analysis.
- **PERSISTENT STATE:** Formula verified on interior cells.

---

### Beat 19 (F3337–F3496) — Center Element 13 at (2, 2)
- **ANCHOR:** `S02_CENTER_13_SOURCE` (Words 241..252: `"Now look at the center. 13 is at row 2, column 2."`)
- **WHAT APPEARS NOW:** Center cell $(2, 2)$ containing value $13$ illuminates with bright golden halo. Rulers $r=2$ and $c=2$ highlight. Center callout panel appears below grid:
  `"Inspecting Exact Center Cell: 13 at (r = 2, c = 2)"`
- **CENTER-STAGE HERO:** The central cell $(2, 2)$ with value $13$.
- **CAUSE:** Examining the geometric center of an odd-sized ($5 \times 5$) matrix.
- **EFFECT / MOTION:** Golden concentric ring pulses around cell $(2, 2)$.
- **WHAT MUST NOT APPEAR YET:** Math evaluation.
- **COMPREHENSION HOLD:** F3487..F3496.
- **CLEANUP / EXIT:** Callout transitions to evaluation.
- **PERSISTENT STATE:** Center cell $(2, 2)$ isolated.

---

### Beat 20 (F3497–F3686) — Center Math: (2, 4 - 2) = (2, 2)
- **ANCHOR:** `S02_CENTER_13_CALC` (Words 253..266: `"Its new position becomes row 2, column 4 minus 2, which is also 2."`)
- **WHAT APPEARS NOW:** Live evaluation in calculation panel:
  - $\text{newRow} = c = 2$
  - $\text{newCol} = 4 - r = 4 - 2 = 2$
  - $\implies \mathbf{\text{Destination}: (2, 2)}$
- **CENTER-STAGE HERO:** Arithmetic evaluation yielding identical coordinates $(2, 2)$.
- **CAUSE:** Mathematical evaluation of formula on the center index.
- **EFFECT / MOTION:** Math lines appear sequentially in sync with speech.
- **WHAT MUST NOT APPEAR YET:** Invariant badge.
- **COMPREHENSION HOLD:** F3671..F3686.
- **CLEANUP / EXIT:** Prepares for fixed point affirmation.
- **PERSISTENT STATE:** Center arithmetic complete: $(2, 2) \to (2, 2)$.

---

### Beat 21 (F3687–F3761) — Fixed Point: 13 Maps to Itself
- **ANCHOR:** `S02_CENTER_13_FIXED` (Words 267..272: `"So 13 maps back to itself."`)
- **WHAT APPEARS NOW:** Circular 360° rotational glyph spins in place inside cell $(2, 2)$ and settles, showing value $13$ staying entirely stationary! Badge: `"(2, 2) ➔ (2, 2) [FIXED POINT]"`.
- **CENTER-STAGE HERO:** Stationary value $13$ with spinning self-rotation glyph.
- **CAUSE:** Demonstrating that rotation leaves the center position unchanged.
- **EFFECT / MOTION:** Subtle rotational spin glyph (0° to 360°) around value 13. Value itself does not translate.
- **WHAT MUST NOT APPEAR YET:** General odd-size rule text.
- **COMPREHENSION HOLD:** F3746..F3761.
- **CLEANUP / EXIT:** Spin glyph fades into permanent calm halo.
- **PERSISTENT STATE:** Center fixed point proven.

---

### Beat 22 (F3762–F3953) — Odd-Sized Matrix Invariant Principle
- **ANCHOR:** `S02_ODD_CENTER_INVARIANT` (Words 273..286: `"That is why, in an odd-sized matrix, the exact center does not move."`)
- **WHAT APPEARS NOW:** Elegant architectural principle banner appears across lower center stage (Y: 690px):
  $$\mathbf{\text{Invariant: In any odd } N \times N \text{ matrix, center } (\lfloor N/2 \rfloor, \lfloor N/2 \rfloor) \text{ is a fixed point!}}$$
  Framed in warm gold and seafoam double chalk border.
- **CENTER-STAGE HERO:** The Odd-Matrix Center Fixed Point Theorem Card.
- **CAUSE:** Establishing an essential geometric invariant for all odd $N$.
- **EFFECT / MOTION:** Banner draws with chalk border; center cell $(2, 2)$ glows in harmony.
- **WHAT MUST NOT APPEAR YET:** Global destination overlay.
- **COMPREHENSION HOLD:** F3938..F3953.
- **CLEANUP / EXIT:** Banner stays visible briefly then eases out for final scene transition.
- **PERSISTENT STATE:** Center invariant established.

---

### Beat 23 (F3954–F4078) — Complete Destination Truth Established
- **ANCHOR:** `S02_DESTINATION_TRUTH_KNOWN` (Words 287..293: `"Now we know where every value belongs."`)
- **WHAT APPEARS NOW:** The entire 5×5 matrix reveals a ghost overlay showing all 25 values in their exact final rotated positions alongside their initial positions. Green checkmarks at corners, interior, and center. Status badge: `"DESTINATION TRUTH: 100% KNOWN"`.
- **CENTER-STAGE HERO:** Full 5×5 matrix showing initial vs rotated destination pairs.
- **CAUSE:** Reaching the milestone where coordinate destination is completely solved.
- **EFFECT / MOTION:** Ghost destination numbers fade in gently at opacity 0.5 with cyan tint.
- **WHAT MUST NOT APPEAR YET:** Method 1 teaser card.
- **COMPREHENSION HOLD:** F4063..F4078.
- **CLEANUP / EXIT:** Matrix settles back to clean state.
- **PERSISTENT STATE:** Theoretical problem completely solved; algorithmic implementation question begins.

---

### Beat 24 (F4079–F4243) — The Algorithmic Question: How to Move Them?
- **ANCHOR:** `S02_HOW_TO_MOVE_HOOK` (Words 294..303: `"The next question is, how should we actually move them?"`)
- **WHAT APPEARS NOW:** Big question mark glyph (`?`) illuminates above the matrix. In-place hazard indicator: An arrow attempts to overwrite cell $(0, 4)$ directly, highlighting in red (`#EF4444`) with callout: `"Direct overwrite destroys unread data!"`.
- **CENTER-STAGE HERO:** The Movement Dilemma callout card.
- **CAUSE:** Transitioning from mathematical definition to algorithm implementation challenges.
- **EFFECT / MOTION:** Red danger pulse at $(0, 4)$ illustrating the collision trap.
- **WHAT MUST NOT APPEAR YET:** Method 1 destination grid.
- **COMPREHENSION HOLD:** F4212..F4243.
- **CLEANUP / EXIT:** Red hazard clears.
- **PERSISTENT STATE:** The algorithmic necessity for careful movement strategies established.

---

### Beat 25 (F4244–F4333) — Handoff to Method 1 (Extra Matrix)
- **ANCHOR:** `S02_HANDOFF_METHOD1` (Words 304..310: `"Let's start with the most direct method."`)
- **WHAT APPEARS NOW:** Handoff card glides in:
  $$\mathbf{\text{METHOD 1: Extra Destination Matrix } [O(N^2) \text{ Space}]}$$
  A ghost empty destination matrix begins to emerge on the right side of the canvas, preparing the exact visual layout for Scene 03!
- **CENTER-STAGE HERO:** Method 1 Announcement Card and side-by-side layout hint.
- **CAUSE:** Closing Scene 02 with seamless continuity into Scene 03 Method 1 Trace.
- **EFFECT / MOTION:** Matrix eases slightly to the left (X: 754 $\to$ X: 350) while ghost matrix appears at X: 1150 over F4260..F4330.
- **WHAT MUST NOT APPEAR YET:** Actual Method 1 code or tracing loop.
- **COMPREHENSION HOLD:** F4310..F4333 (settled end-state).
- **CLEANUP / EXIT:** Locks into the exact starting frame of Scene 03!
- **PERSISTENT STATE:** Side-by-side dual matrix layout ready for Scene 03.

---

## 4. Invariant Verification Checklist

- [x] **Zero Guessed Frames:** All 25 anchor ranges derived directly from `sync/02-understand.json`.
- [x] **Zero Void Scaling:** Authoring strictly in 1920 × 1080.
- [x] **Deterministic Motion:** All animations driven by `frame` using Remotion `interpolate()` and `spring()` with `fps=30`. Zero `Math.random()`, zero CSS keyframes.
- [x] **Zero Collision Invariant:** Grid at Y: 240..652; formula card at Y: 135..210; evaluation panel at Y: 680..760; captions at Y: 980. Minimum 220px clearance above captions.
- [x] **Visual Truth:** Master matrix values $1..25$ match roadmap testcase; $(r, c) \to (c, 4 - r)$ verified on corner $1$, corner $5$, interior $8$, and center $13$.
