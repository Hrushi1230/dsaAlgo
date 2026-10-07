# Q15 — Spiral Matrix (LC 54)
# Scene 02 · Understand the Question & Method 1 Turning Invariant
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Problem:** LeetCode 54 — Spiral Matrix (Medium)  
**Pattern:** 01 · Arrays & Hashing  
**Audio File:** `questions/01-arrays-hashing/015-spiral-matrix/audio/scence02.mp3` (`remotion-project/public/audio/015/02-understand.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/015-spiral-matrix/sync/02-understand.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/015-spiral-matrix/sync/02-understand.anchors.json`  
**FPS:** 30  
**Audio Duration:** 67.540s (67,540 ms)  
**Exact Total Frames:** 2,026 frames  
**Anchor Match Count:** 17 / 17  
**Unmatched Anchors:** 0  

---

## 1. Mandatory Scene Contract

```text
SCENE: 02-understand
QUESTION: 015 · Spiral Matrix (LeetCode 54)
BEAT TYPE: QUESTION BREAKDOWN & NAIVE SIMULATION DERIVATION
AUDIO FILE: audio/015/02-understand.mp3
SYNC FILE: sync/02-understand.json
ANCHORS FILE: sync/02-understand.anchors.json
FPS: 30
TOTAL FRAMES: 2,026
PEDAGOGICAL GOAL:
  1. Transition from Scene 01's docked ProblemOpenerShell into the concrete 2D matrix domain.
  2. Establish rectangular geometry: m rows × n columns, explicitly distinguishing from Q14 square matrices.
  3. Reveal the verified 5×6 master matrix (values 1..30) with row/col coordinate rulers.
  4. Formulate the output contract: flatten all m × n values into a single 1D list in spiral order.
  5. Demonstrate the 4-phase cyclic direction sequence: Right → Down → Left → Up → Repeat.
  6. Introduce the fundamental challenge: "When should we turn?"
  7. Contrast Turn Cause 1 (next position outside matrix boundaries) with Turn Cause 2 (next position in-bounds but already visited).
  8. Formulate the Method 1 decision rule: Turn when next is outside OR already visited.
  9. Define the 3 state variables for simulation: (r, c), direction, and visited[m][n].
  10. Reset master matrix cleanly to cell (0, 0) for Scene 03 trace.
TRACE STEP IDS: N/A (Algorithmic rule derivation & mental model formation)
DATA STRUCTURE: 2D Grid (MeshGrid) + Direction Compass + Output Collector Track + Visited Overlay

REUSE:
- ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk)
- theme, fonts (@dsa/kit/lib/theme)
- EASE, fadeIn, pop (@dsa/kit/lib/anim)
- RoughBox, RoughLine, ChalkDust (@dsa/kit/components)
- MeshGrid (@dsa/kit/components/MeshGrid)
- SceneEdgeTitle (@dsa/kit/components/SceneEdgeTitle)
- Captions (@dsa/kit/components/Captions)

EXTEND:
- MeshGrid custom cell renderer:
    Neutral state: values 1..30 in clean mono font
    Active cursor: glowing amber ring around (r, c) with direction arrow
    Outside candidate ghost: red dashed outline with ❌ badge
    Visited candidate ghost: amber dashed outline with ⚠️ badge
    Outer layer dimming: 40% opacity for hypothetical completed perimeter in Beat 12

CREATE:
- DirectionCycleCompass: HUD widget indicating cyclic Right → Down → Left → Up phases
- Method1RuleCard: prominent callout box displaying the dual-condition turn rule
- Scene02Understand.tsx: Remotion scene implementation

DO NOT TOUCH:
- Previous question scenes (Q001..Q014)
- Core kit primitives without backward compatibility
```

---

## 2. Optical Canvas Layout (1920 × 1080)

```text
+-----------------------------------------------------------------------------+
| TOP HEADER: Y: 28–70  "01 · ARRAYS & HASHING" · Q015: SPIRAL MATRIX (LC 54) |
+-----------------------------------------------------------------------------+
| CENTER STAGE: Y: 130–750                                                    |
|                                                                             |
|  [Direction Compass: Y: 170, X: 1480]                                       |
|   - 4-way arrow cycle: R → D → L → U                                       |
|                                                                             |
|  [Center 5×6 MeshGrid: 576px × 380px, Centered at X: 960, Y: 430]          |
|   - Cell size: 96px × 76px                                                  |
|   - Row coordinate rulers: row [0] .. [4] (left, Y: 240..620)               |
|   - Column coordinate rulers: col [0] .. [5] (top, X: 672..1248)            |
|   - Row brace m = 5, Column brace n = 6 (Beats 01–04)                       |
|                                                                             |
|  [Bottom Callout / Output Collector Track: Y: 680–770]                      |
|   - Beats 06–07: Empty answer list [ ... 0 / 30 values ]                    |
|   - Beats 08–11: Turn Cause 1 (Next = Outside)                             |
|   - Beats 12–14: Turn Cause 2 (Next = Already Visited)                      |
|   - Beats 15–16: Method 1 Rule: OUTSIDE OR VISITED                         |
|   - Beat 16: State Trio [ (r, c) | direction | visited[5][6] ]             |
+-----------------------------------------------------------------------------+
| CAPTIONS ZONE: Y: 960–1040 (Word-level synchronized subtitles)              |
+-----------------------------------------------------------------------------+
```

---

## 3. Framewise Beat Choreography (All 17 Anchors)

### BEAT 01 — `S02_MN` (Frames 0 – 102)
- **ANCHOR:** `S02_MN` | `"We are given an m by n matrix, here."` (F0 – F89, pause to F102)
- **WHAT APPEARS NOW:** SceneEdgeTitle docks at top (`01 · ARRAYS & HASHING · Q015: SPIRAL MATRIX`). Center stage displays an abstract rectangular grid boundary (576 × 380px) with generic dimension braces.
- **CENTER-STAGE HERO:** Rectangular matrix geometry.
- **CAUSE:** Narration introduces the problem input format.
- **EFFECT / MOTION:** Grid outline sketches in over F0..F30 (`strokeDashoffset`).
- **WHAT MUST NOT APPEAR YET:** Specific numbers 1..30; direction arrows; visited arrays.
- **COMPREHENSION HOLD:** Natural audio gap F90..F102 (13 frames / ~430ms).
- **CLEANUP / EXIT:** Braces remain active.
- **PERSISTENT STATE:** Matrix input established as rectangular $m \times n$.

---

### BEAT 02 — `S02_M_ROWS` (Frames 103 – 145)
- **ANCHOR:** `S02_M_ROWS` | `"m is the number of rows"` (F103 – F145)
- **WHAT APPEARS NOW:** Vertical bracket along the left edge illuminates in vibrant amber (`#FFD166`), labeled `"m = rows (5)"`.
- **CENTER-STAGE HERO:** Row dimension $m$.
- **CAUSE:** Narration defines $m$.
- **EFFECT / MOTION:** Amber bracket pulses and expands slightly (`scale: 1.0 -> 1.06 -> 1.0`).
- **WHAT MUST NOT APPEAR YET:** Column label $n$.
- **COMPREHENSION HOLD:** Seamless transition into column description.
- **CLEANUP / EXIT:** Vertical bracket settles.
- **PERSISTENT STATE:** $m$ identified with horizontal rows.

---

### BEAT 03 — `S02_N_COLS` (Frames 146 – 225)
- **ANCHOR:** `S02_N_COLS` | `"and n is the number of columns."` (F146 – F212, pause to F225)
- **WHAT APPEARS NOW:** Horizontal bracket along the top edge illuminates in vibrant cyan (`#5CE1E6`), labeled `"n = columns (6)"`.
- **CENTER-STAGE HERO:** Column dimension $n$.
- **CAUSE:** Narration defines $n$.
- **EFFECT / MOTION:** Cyan bracket draws left-to-right (`F146..F180`).
- **WHAT MUST NOT APPEAR YET:** Master values 1..30.
- **COMPREHENSION HOLD:** Audio gap F213..F225 (13 frames).
- **CLEANUP / EXIT:** Both braces frame the rectangular canvas.
- **PERSISTENT STATE:** $m$ rows and $n$ columns clearly separated.

---

### BEAT 04 — `S02_RECT` (Frames 226 – 319)
- **ANCHOR:** `S02_RECT` | `"So the matrix does not have to be square."` (F226 – F289, pause to F319)
- **WHAT APPEARS NOW:** A callout badge appears at Y: 680: `"RECTANGULAR MATRIX: m ≠ n ALLOWED"`, with a soft red cross through an abstract square icon to explicitly discard the Q14 square-matrix assumption.
- **CENTER-STAGE HERO:** Non-square matrix shape.
- **CAUSE:** Narration dispels the common assumption that matrices must be square ($N \times N$).
- **EFFECT / MOTION:** Badge pops at F226; unequal aspect ratio ($6:5$) is highlighted.
- **WHAT MUST NOT APPEAR YET:** Values 1..30; traversal state.
- **COMPREHENSION HOLD:** Pause F290..F319 (30 frames / 1.0 second).
- **CLEANUP / EXIT:** Badge fades out as master matrix reveals.
- **PERSISTENT STATE:** Non-square rectangular nature locked.

---

### BEAT 05 — `S02_MASTER` (Frames 320 – 444)
- **ANCHOR:** `S02_MASTER` | `"For this lesson, we will use this 5 by 6 matrix."` (F320 – F425, pause to F444)
- **WHAT APPEARS NOW:** Full `MeshGrid` reveals with complete coordinate rulers (`col [0]..[5]` in cyan, `row [0]..[4]` in cyan). All 30 values ($1 \dots 30$) appear in row-major order:
  - Row 0: `[1, 2, 3, 4, 5, 6]`
  - Row 1: `[7, 8, 9, 10, 11, 12]`
  - Row 2: `[13, 14, 15, 16, 17, 18]`
  - Row 3: `[19, 20, 21, 22, 23, 24]`
  - Row 4: `[25, 26, 27, 28, 29, 30]`
- **CENTER-STAGE HERO:** Verified $5 \times 6$ master testcase matrix.
- **CAUSE:** Narration introduces the concrete master example.
- **EFFECT / MOTION:** Values fade in with soft chalk glow over F320..F370.
- **WHAT MUST NOT APPEAR YET:** Traversal path; visited styling; output list.
- **COMPREHENSION HOLD:** Audio gap F426..F444 (19 frames).
- **CLEANUP / EXIT:** Master matrix becomes the persistent center stage.
- **PERSISTENT STATE:** $5 \times 6$ matrix active.

---

### BEAT 06 — `S02_OUTPUT_CONTRACT` (Frames 445 – 690)
- **ANCHOR:** `S02_OUTPUT_CONTRACT` | `"Our job is to return all m times n values, in one list, following spiral order."` (F445 – F670, pause to F690)
- **WHAT APPEARS NOW:** An empty 1D output collector array track appears at Y: 720:
  `[ ] (0 / 30 values collected)`.
  Formula badge appears: `"TOTAL ELEMENTS = m × n = 5 × 6 = 30"`.
- **CENTER-STAGE HERO:** 2D Matrix $\to$ 1D Output List contract.
- **CAUSE:** Narration specifies the function's return contract.
- **EFFECT / MOTION:** Output collector array fades in at F445; formula badge pulses softly at F506 (`"m times n"`).
- **WHAT MUST NOT APPEAR YET:** Order of values; direction cycle.
- **COMPREHENSION HOLD:** Audio gap F671..F690 (20 frames).
- **CLEANUP / EXIT:** Output collector stays docked at bottom as support.
- **PERSISTENT STATE:** Output contract defined: 30 elements in 1D array.

---

### BEAT 07 — `S02_DIR_SEQUENCE` (Frames 691 – 856)
- **ANCHOR:** `S02_DIR_SEQUENCE` | `"That order moves right, down, left, up and then repeats."` (F691 – F856)
- **WHAT APPEARS NOW:** `DirectionCycleCompass` HUD appears at top-right (X: 1480, Y: 170). The four direction arrows illuminate sequentially:
  - **RIGHT ($\rightarrow$)**: Illuminates at F725 (`"right"`)
  - **DOWN ($\downarrow$)**: Illuminates at F757 (`"down"`)
  - **LEFT ($\leftarrow$)**: Illuminates at F784 (`"left"`)
  - **UP ($\uparrow$)**: Illuminates at F807 (`"up"`)
  - **REPEAT ($\circlearrowright$)**: Circular arrow connects the loop at F845 (`"repeats"`)
- **CENTER-STAGE HERO:** Clockwise 4-phase direction cycle.
- **CAUSE:** Narration defines the spiral direction order.
- **EFFECT / MOTION:** Subword-synchronized highlight on each arrow; connecting clockwise arc activates on F845.
- **WHAT MUST NOT APPEAR YET:** Turn conditions.
- **COMPREHENSION HOLD:** Immediate continuation into the turning question.
- **CLEANUP / EXIT:** Compass remains as permanent HUD in top-right corner.
- **PERSISTENT STATE:** Clockwise cycle Right $\to$ Down $\to$ Left $\to$ Up established.

---

### BEAT 08 — `S02_TURN_Q` (Frames 857 – 975)
- **ANCHOR:** `S02_TURN_Q` | `"But the real question is, when should we turn?"` (F857 – F955, pause to F975)
- **WHAT APPEARS NOW:** A bold chalkboard question card appears below the matrix:
  `❓ WHEN SHOULD WE TURN?`
- **CENTER-STAGE HERO:** The core problem question.
- **CAUSE:** Narration poses the key algorithmic decision challenge.
- **EFFECT / MOTION:** Card pops with amber chalk border (`#FFD166`) and floating question mark.
- **WHAT MUST NOT APPEAR YET:** The answer rule.
- **COMPREHENSION HOLD:** Real pause F956..F975 (20 frames / ~670ms).
- **CLEANUP / EXIT:** Question card transitions into Cause 1 setup.
- **PERSISTENT STATE:** Turning condition is the active investigation.

---

### BEAT 09 — `S02_MOVING_RIGHT` (Frames 976 – 1038)
- **ANCHOR:** `S02_MOVING_RIGHT` | `"Suppose we are moving right."` (F976 – F1026, pause to F1038)
- **WHAT APPEARS NOW:** Active cursor docks on cell `(0, 5) = 6` (top-right corner). A glowing forward probe arrow points rightward toward `(0, 6)`.
- **CENTER-STAGE HERO:** Current position `(0, 5)` + Rightward candidate probe.
- **CAUSE:** Narration sets up Turn Scenario 1.
- **EFFECT / MOTION:** Cell 6 illuminates in mint green (`#3CE5A7`); forward arrow extends to the right boundary edge.
- **WHAT MUST NOT APPEAR YET:** Outside warning badge until spoken.
- **COMPREHENSION HOLD:** Audio gap F1027..F1038 (12 frames).
- **CLEANUP / EXIT:** Probe stays extended.
- **PERSISTENT STATE:** At top-right corner moving right.

---

### BEAT 10 — `S02_OUTSIDE` (Frames 1039 – 1137)
- **ANCHOR:** `S02_OUTSIDE` | `"If the next position goes outside the matrix,"` (F1039 – F1121, pause to F1137)
- **WHAT APPEARS NOW:** A ghost cell appears beyond column 5 at `(0, 6)` with a red dashed border and a warning tag:
  `❌ col = 6 >= n (OUT OF BOUNDS)`
- **CENTER-STAGE HERO:** Next position outside matrix boundary relation.
- **CAUSE:** Narration explains boundary violation.
- **EFFECT / MOTION:** Ghost cell shakes with subtle error vibration; right boundary wall of matrix flashes in warning red (`#FF7675`).
- **WHAT MUST NOT APPEAR YET:** Turn animation until spoken.
- **COMPREHENSION HOLD:** Audio gap F1122..F1137 (16 frames).
- **CLEANUP / EXIT:** Red ghost cell holds for turn execution.
- **PERSISTENT STATE:** Cause 1 (Out of bounds) visually demonstrated.

---

### BEAT 11 — `S02_TURN_OUT` (Frames 1138 – 1204)
- **ANCHOR:** `S02_TURN_OUT` | `"we obviously need to turn."` (F1138 – F1190, pause to F1204)
- **WHAT APPEARS NOW:** Probe arrow at cell `6` smoothly pivots $90^\circ$ clockwise from pointing **Right** to pointing **Down** toward cell `12` (`r=1, c=5`). The out-of-bounds ghost cell vanishes.
- **CENTER-STAGE HERO:** $90^\circ$ Clockwise turn on border hit.
- **CAUSE:** Narration dictates turning at boundary wall.
- **EFFECT / MOTION:** Arrow rotates smoothly $0^\circ \to 90^\circ$ over F1138..F1170. Compass HUD reflects transition: `RIGHT` fades $\to$ `DOWN` glows.
- **WHAT MUST NOT APPEAR YET:** Turn Cause 2 (visited cell).
- **COMPREHENSION HOLD:** Audio gap F1191..F1204 (14 frames).
- **CLEANUP / EXIT:** Cell 6 resets; canvas prepares for Turn Scenario 2.
- **PERSISTENT STATE:** Turn Rule 1 (Border wall) verified.

---

### BEAT 12 — `S02_OUTER_DONE` (Frames 1205 – 1276)
- **ANCHOR:** `S02_OUTER_DONE` | `"But after completing the outer part,"` (F1205 – F1263, pause to F1276)
- **WHAT APPEARS NOW:** The entire outer perimeter ($1..6, 12, 18, 24, 30, 29..25, 19, 13$) dims with a subtle green chalk visited tint, leaving the inner submatrix ($8..11, 14..17, 20..23$) bright and unvisited.
- **CENTER-STAGE HERO:** Hypothetical completed outer boundary layer.
- **CAUSE:** Narration advances the conceptual timeline to reveal the second turn necessity.
- **EFFECT / MOTION:** Outer cells transition to `opacity: 0.65` with green checkmark stamps; inner $3 \times 4$ remains fully active.
- **WHAT MUST NOT APPEAR YET:** Boundary pointers (Method 2); code.
- **COMPREHENSION HOLD:** Audio gap F1264..F1276 (13 frames).
- **CLEANUP / EXIT:** Focus directs to left edge cell `7`.
- **PERSISTENT STATE:** Outer layer processed; inner layer pending.

---

### BEAT 13 — `S02_INSIDE` (Frames 1277 – 1386)
- **ANCHOR:** `S02_INSIDE` | `"the next position may still be inside the matrix,"` (F1277 – F1372, pause to F1386)
- **WHAT APPEARS NOW:** Cursor sits on cell `(1, 0) = 7` facing upward. Probe arrow points upward to cell `(0, 0) = 1`. A green indicator card shows:
  `✓ row = 0 >= 0, col = 0 >= 0 (IN BOUNDS)`
- **CENTER-STAGE HERO:** Next position is geometrically in-bounds.
- **CAUSE:** Narration demonstrates that boundary check alone is insufficient.
- **EFFECT / MOTION:** Green probe arrow targets cell `1`; matrix border stays quiet (no wall hit).
- **WHAT MUST NOT APPEAR YET:** Visited rejection badge.
- **COMPREHENSION HOLD:** Audio gap F1373..F1386 (14 frames).
- **CLEANUP / EXIT:** Arrow stays locked on cell `1`.
- **PERSISTENT STATE:** Candidate is inside grid, but...

---

### BEAT 14 — `S02_ALREADY_VISITED` (Frames 1387 – 1441)
- **ANCHOR:** `S02_ALREADY_VISITED` | `"and already visited."` (F1387 – F1424, pause to F1441)
- **WHAT APPEARS NOW:** Cell `(0, 0) = 1` flashes with an amber warning badge:
  `⚠️ visited[0][0] == True`
  The candidate arrow turns amber with a `HALT / CANNOT RE-VISIT` cue.
- **CENTER-STAGE HERO:** Visited status blocks forward traversal.
- **CAUSE:** Narration reveals Turn Cause 2.
- **EFFECT / MOTION:** Flash on cell 1; arrow bends $90^\circ$ clockwise toward cell `(1, 1) = 8`.
- **WHAT MUST NOT APPEAR YET:** Combined rule card until spoken.
- **COMPREHENSION HOLD:** Audio gap F1425..F1441 (17 frames).
- **CLEANUP / EXIT:** Both turn causes are now fully witnessed.
- **PERSISTENT STATE:** Turn Cause 2 (Already Visited) verified.

---

### BEAT 15 — `S02_METHOD1_RULE` (Frames 1442 – 1756)
- **ANCHOR:** `S02_METHOD1_RULE` | `"So method 1 uses one simple rule. Turn when the next position is outside the matrix, or already visited."` (F1442 – F1733, pause to F1756)
- **WHAT APPEARS NOW:** A prominent golden `RoughBox` rule card animates to center stage at Y: 670:
  ```text
  ┌────────────────────────────────────────────────────────────────┐
  │  METHOD 1 TURNING RULE                                         │
  │  TURN WHEN NEXT CELL IS:                                       │
  │  1. OUTSIDE THE MATRIX     (nr < 0 or nr >= m or nc < 0 ...)  │
  │     — OR —                                                     │
  │  2. ALREADY VISITED        (visited[nr][nc] == True)           │
  └────────────────────────────────────────────────────────────────┘
  ```
- **CENTER-STAGE HERO:** The unified Method 1 turning rule.
- **CAUSE:** Narration synthesizes both observations into the core algorithmic invariant.
- **EFFECT / MOTION:** Rule card enters with smooth scale pop; dual conditions illuminate on their respective spoken words.
- **WHAT MUST NOT APPEAR YET:** Code implementation; Method 2 boundaries.
- **COMPREHENSION HOLD:** Real pause F1734..F1756 (23 frames / ~770ms).
- **CLEANUP / EXIT:** Rule card docks into the state summary.
- **PERSISTENT STATE:** Method 1 turning rule locked.

---

### BEAT 16 — `S02_STATE` (Frames 1757 – 1972)
- **ANCHOR:** `S02_STATE` | `"To do that, we keep the current position, the current direction and a visited matrix."` (F1757 – F1964, pause to F1972)
- **WHAT APPEARS NOW:** Three state pills appear side-by-side at Y: 720, revealing strictly on spoken words:
  1. `[📍 POSITION: (r, c)]` (illuminates at F1822)
  2. `[🧭 DIRECTION: (dr, dc)]` (illuminates at F1873)
  3. `[📋 VISITED: 5 × 6 boolean array]` (illuminates at F1946)
- **CENTER-STAGE HERO:** Method 1 state trio.
- **CAUSE:** Narration specifies the state tracking required to implement the rule.
- **EFFECT / MOTION:** Each pill pops with crisp chalk border on its respective anchor word.
- **WHAT MUST NOT APPEAR YET:** Loop code; full trace.
- **COMPREHENSION HOLD:** Audio gap F1965..F1972 (8 frames).
- **CLEANUP / EXIT:** State pills settle below the matrix.
- **PERSISTENT STATE:** Simulation state requirements established.

---

### BEAT 17 — `S02_TRACE` (Frames 1973 – 2026)
- **ANCHOR:** `S02_TRACE` | `"Now let's trace it properly."` (F1973 – F2026)
- **WHAT APPEARS NOW:** Master $5 \times 6$ matrix cleanly resets to its pristine unvisited state. Cursor docks firmly on top-left cell `(0, 0) = 1` with a bright rightward arrow ($\rightarrow$). Answer list at bottom resets to empty `[] (0 / 30)`.
- **CENTER-STAGE HERO:** Pristine master testcase ready for Scene 03 simulation.
- **CAUSE:** Narration initiates the transition into the full trace.
- **EFFECT / MOTION:** Hypothetical marks vanish (`opacity: 1 -> 0`); cell 1 pulses in bright mint green (`#3CE5A7`); camera re-centers to neutral.
- **WHAT MUST NOT APPEAR YET:** Scene 03 full steps or premature output.
- **COMPREHENSION HOLD:** Final frames F2016..F2026 hold stable.
- **CLEANUP / EXIT:** Clean handoff state into Scene 03.
- **PERSISTENT STATE:** Ready to trace at cell (0, 0) moving Right.

---

## 4. Verification Check

| Anchor ID | Spoken Phrase | Start Frame | End Frame | Duration | Status |
|:---|:---|:---:|:---:|:---:|:---:|
| `S02_MN` | "We are given an m by n matrix, here." | F0 | F89 | 90f | ✅ MATCH |
| `S02_M_ROWS` | "m is the number of rows" | F103 | F146 | 44f | ✅ MATCH |
| `S02_N_COLS` | "and n is the number of columns." | F146 | F212 | 67f | ✅ MATCH |
| `S02_RECT` | "So the matrix does not have to be square." | F226 | F289 | 64f | ✅ MATCH |
| `S02_MASTER` | "For this lesson, we will use this 5 by 6 matrix." | F320 | F425 | 106f | ✅ MATCH |
| `S02_OUTPUT_CONTRACT` | "Our job is to return all m times n values..." | F445 | F670 | 226f | ✅ MATCH |
| `S02_DIR_SEQUENCE` | "That order moves right, down, left, up and then repeats." | F691 | F857 | 167f | ✅ MATCH |
| `S02_TURN_Q` | "But the real question is, when should we turn?" | F857 | F955 | 99f | ✅ MATCH |
| `S02_MOVING_RIGHT` | "Suppose we are moving right." | F976 | F1026 | 51f | ✅ MATCH |
| `S02_OUTSIDE` | "If the next position goes outside the matrix," | F1039 | F1121 | 83f | ✅ MATCH |
| `S02_TURN_OUT` | "we obviously need to turn." | F1138 | F1190 | 53f | ✅ MATCH |
| `S02_OUTER_DONE` | "But after completing the outer part," | F1205 | F1263 | 59f | ✅ MATCH |
| `S02_INSIDE` | "the next position may still be inside the matrix," | F1277 | F1372 | 96f | ✅ MATCH |
| `S02_ALREADY_VISITED` | "and already visited." | F1387 | F1424 | 38f | ✅ MATCH |
| `S02_METHOD1_RULE` | "So method 1 uses one simple rule. Turn when..." | F1442 | F1733 | 292f | ✅ MATCH |
| `S02_STATE` | "To do that, we keep the current position..." | F1757 | F1964 | 208f | ✅ MATCH |
| `S02_TRACE` | "Now let's trace it properly." | F1973 | F2026 | 54f | ✅ MATCH |
| **TOTAL** | **17 Anchors** | **F0** | **F2026** | **2,026f** | ✅ **100% COVERAGE** |
