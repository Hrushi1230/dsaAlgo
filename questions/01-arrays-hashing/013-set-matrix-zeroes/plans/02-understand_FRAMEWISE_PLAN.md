# Q13 — Set Matrix Zeroes (LC 73)
# Scene 02 · Understand the Problem + The Dangerous Naive Idea
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Current Problem:** #013 Set Matrix Zeroes · LC 73 · Medium  
**Audio File:** `questions/01-arrays-hashing/013-set-matrix-zeroes/audio/02-understand.mp3` (symlinked / mapped to `scence-02.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/02-understand.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/02-understand.anchors.json`  
**FPS:** 30  
**Audio Duration:** 76.280s (76280 ms)  
**Exact Total Frames:** 2288 frames (76.280 seconds)  
**Anchor Match Count:** 26 / 26  
**Unmatched Anchors:** 0  

---

## 1. Mandatory Scene Contract

```text
SCENE: 02-understand
QUESTION: 013 · Set Matrix Zeroes (LeetCode 73)
BEAT TYPE: UNDERSTAND / PROBLEM DEFINITION & NAIVE TRAP PROOF
AUDIO FILE: audio/02-understand.mp3
SYNC FILE: sync/02-understand.json
ANCHORS FILE: sync/02-understand.anchors.json
FPS: 30
TOTAL FRAMES: 2288
PEDAGOGICAL GOAL:
  1. Define the exact problem: an original zero cell mandates zeroing its entire row and column.
  2. Populate the locked 5×5 master input matrix:
       [1,  2,  0,  4,  5]
       [6,  7,  8,  9, 10]
       [0, 12, 13, 14, 15]
       [16,17, 18,  0, 20]
       [21,22, 23, 24, 25]
  3. Identify the 3 original zeros: (0,2), (2,0), (3,3).
  4. Prove through a concrete, deterministic execution why naive in-place zeroing fails:
       - Encounter (0,2)=0 -> zero row 0 and col 2 immediately.
       - Cell (1,2) changes from 8 to 0 (newly created zero).
       - Later scan reaches (1,2), misclassifies it as an original source zero, and zeroes row 1!
       - Valid values 7 and 10 in row 1 are permanently destroyed.
  5. Reset to the untouched master matrix and establish the Core Invariant:
       "Zeros created by us must never become new sources of zeroing."
  6. Hand off into Method 1 (Full Matrix Copy).

TRACE STEP IDS:
  - T01_SYMBOLIC_RULE: Single sample cell (1,1)=0 spreads to row 1 & col 1
  - T02_MASTER_GRID: Full 5×5 input matrix with 0-based coordinate rulers
  - T03_ORIGINAL_ZEROS: Three source zeros at (0,2), (2,0), (3,3)
  - T04_NAIVE_MUTATION: Immediate in-place writes on (0,2) -> row 0 & col 2 become 0
  - T05_FAKE_CASCADE: Cell (1,2)=0 misclassified -> row 1 wrongly zeroed -> 7 & 10 destroyed
  - T06_CORE_INVARIANT: Reset to untouched master; state preservation requirement established

DATA STRUCTURE: 2D Fixed MeshGrid (5×5, 76px cells, 8px gap)

REUSE:
- ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk)
- theme, fonts (@dsa/kit/lib/theme)
- EASE, fadeIn, pop (@dsa/kit/lib/anim)
- RoughBox, RoughLine, ChalkDust (@dsa/kit/components)
- Captions (@dsa/kit/components/Captions)
- ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)

EXTEND:
- MatrixGrid primitive:
    rows: 5, cols: 5
    cellSize: 76px, cellGap: 8px
    origin: (X: 742, Y: 220) [Total width: 412px, centered in 1920 canvas]
    coordinate rulers: row labels [0..4] at left, col labels [0..4] at top
    cell states: default white, original zero gold, active scanner border, naive zeroed red-tint, destroyed cell warn-border
    row / column highlight bands: SVG semi-transparent chalk sweeps

CREATE:
- sync/02-understand.anchors.json (Authoritative anchor manifest)
- Scene02Understand.tsx (Scene implementation)

DO NOT TOUCH:
- @dsa/kit core foundation libraries
- Master roadmap state (Scene 01 already settled at 12/227)
- Method 1 copy matrix (Scene 03 ownership)
- Marker arrays rowZero[] / colZero[] (Scene 05/06 ownership)
- Boundary in-place memory markers (Scene 08/09/10 ownership)

MOTION SEMANTICS:
- Grid entry settle (F0..F39)
- Symbolic zero pulse & row/col laser sweep (F52..F301)
- Master grid population & coordinate ruler reveal (F324..F515)
- Original zero target focus rings at (0,2), (2,0), (3,3) (F535..F787)
- Naive scan sweep & instant in-place mutation (F971..F1069)
- Warning banner draw: "IN-PLACE MUTATION DANGER" (F1089..F1125)
- Created zero pulse at (1,2) with false source tag (F1137..F1411)
- Erroneous row 1 sweep destroying cells 7 and 10 (F1428..F1625)
- Smooth reset wipe back to untouched master (F1625..F1703)
- Invariant chalk card draw (F1729..F1900)
- Protective halo on original zeros & Method 1 handoff banner (F1922..F2288)

MORPH SEMANTICS:
- Cell value mutations in place (e.g. cell (1,2): 8 -> 0)
- Fixed cell geometry: cell boxes NEVER translate, scale, or rearrange

SVG SEMANTICS:
- RoughBox sketchy cell outlines
- RoughLine row & column coordinate ticks and sweep lines
- ChalkDust particles on naive mutation and reset wipe

TRANSITION IN:
- Continuous frame-0 provenance: exact terminal state of Scene 01
- ProblemOpenerShell header settled at top; center stage clear

TRANSITION OUT:
- Master 5×5 grid settled in untouched state with original zeros highlighted
- Method 1 teaser banner docked at bottom; clean handoff into Scene 03

FORBIDDEN:
- Showing full copy matrix (belongs to Scene 03)
- Showing marker arrays rowZero[] or colZero[] (belongs to Scene 06)
- Revealing O(1) boundary marker trick (belongs to Scene 09/10)
- Advancing global progress beyond 12/227
- An endless/uncontrolled cascade beyond row 1 corruption
- Leaving the matrix in a corrupted state at scene end
```

---

## 2. Audio-Anchor Table

Derived strictly from validated exact sync data (`sync/02-understand.json`):

| Anchor ID | Spoken Phrase | Word ID Span | Audio Span (s) | Frame Range `[start, endExcl)` | Total Frames | Available Pause | Teaching Purpose |
|---|---|---|---|---|---|---|---|
| `S02_MATRIX` | "We are given a matrix." | W0000..W0004 | 0.000 – 1.300s | `[0, 39)` | 39 F | 13 F (F39..F52) | Single empty 5×5 matrix shell enters center stage |
| `S02_RULE0` | "Whenever an original cell contains zero," | W0005..W0010 | 1.740 – 4.480s | `[52, 134)` | 82 F | 18 F (F134..F152) | One symbolic zero in sample cell receives pivot focus |
| `S02_RULER` | "its complete row" | W0011..W0013 | 5.060 – 6.080s | `[152, 182)` | 30 F | 0 F | Entire row passing through the sample zero highlights |
| `S02_RULEC` | "and its complete column" | W0014..W0017 | 6.080 – 7.860s | `[182, 236)` | 54 F | 16 F (F236..F252) | Entire column passing through sample zero highlights |
| `S02_MUST_BECOME_ZERO` | "must become zero." | W0018..W0020 | 8.400 – 10.040s | `[252, 301)` | 49 F | 23 F (F301..F324) | Affected row & col turn zero; rule demonstration complete |
| `S02_MASTER` | "For this lesson, we will use this matrix." | W0021..W0028 | 10.800 – 13.300s | `[324, 399)` | 75 F | 20 F (F399..F419) | Real 5×5 master input matrix appears populated center stage |
| `S02_INDEX` | "We will use zero-based row and column indices." | W0029..W0037 | 13.960 – 17.160s | `[419, 515)` | 96 F | 20 F (F515..F535) | Row rulers (0..4) and column rulers (0..4) draw around matrix |
| `S02_THREE` | "There are three original zeros." | W0038..W0042 | 17.840 – 19.740s | `[535, 592)` | 57 F | 16 F (F592..F608) | Ambient glow on original zeros at (0,2), (2,0), (3,3) |
| `S02_FIRSTROW` | "One is in the first row," | W0043..W0048 | 20.280 – 21.780s | `[608, 653)` | 45 F | 15 F (F653..F668) | Cell (0,2) highlighted with gold pivot glow and label (0,2) |
| `S02_FIRSTCOL` | "one is in the first column," | W0049..W0054 | 22.260 – 23.800s | `[668, 714)` | 46 F | 11 F (F714..F725) | Cell (2,0) highlighted with gold pivot glow and label (2,0) |
| `S02_INTERIOR` | "and one is inside the matrix." | W0055..W0060 | 24.160 – 26.220s | `[725, 787)` | 62 F | 18 F (F787..F805) | Cell (3,3) highlighted with gold pivot glow and label (3,3) |
| `S02_OBVIOUS` | "At first, the solution may look obvious." | W0061..W0067 | 26.830 – 29.900s | `[805, 897)` | 92 F | 20 F (F897..F917) | Untouched master matrix holds; transition into naive idea |
| `S02_FIND` | "When we find a zero," | W0068..W0072 | 30.580 – 31.780s | `[917, 953)` | 36 F | 18 F (F953..F971) | Scanner hits cell (0,2); cell becomes active source |
| `S02_IMMEDIATE` | "why not immediately make that row and column zero?" | W0073..W0081 | 32.380 – 35.640s | `[971, 1069)` | 98 F | 20 F (F1069..F1089) | Naive in-place write: Row 0 and Col 2 turn zero immediately |
| `S02_PROBLEM_IS` | "The problem is," | W0082..W0084 | 36.300 – 37.500s | `[1089, 1125)` | 36 F | 12 F (F1125..F1137) | Warning banner appears: 'IN-PLACE MUTATION DANGER' |
| `S02_CREATED` | "those writes create new zeros." | W0085..W0089 | 37.900 – 40.040s | `[1137, 1201)` | 64 F | 17 F (F1201..F1218) | Cell (1,2) highlighted: originally 8, now a fake zero |
| `S02_LATER` | "And if our scan later reaches one of those new zeros," | W0090..W0100 | 40.600 – 43.780s | `[1218, 1313)` | 95 F | 17 F (F1313..F1330) | Scanner pointer traverses to created zero at (1,2) |
| `S02_MISTAKE` | "we may treat it like an original zero." | W0101..W0108 | 44.340 – 47.040s | `[1330, 1411)` | 81 F | 17 F (F1411..F1428) | Cell (1,2) marked as false source: 'MISCLASSIFIED AS SOURCE!' |
| `S02_ANOTHER_ROW` | "Then we zero another row" | W0109..W0113 | 47.600 – 49.640s | `[1428, 1489)` | 61 F | 0 F | Row 1 wrongly wiped to zero! Valid numbers 6, 7, 9, 10 destroyed |
| `S02_ANOTHER_COL` | "and another column," | W0114..W0116 | 49.640 – 51.280s | `[1489, 1538)` | 49 F | 12 F (F1538..F1550) | Created zero at (1,4) cascades into Col 4; cell 25 destroyed |
| `S02_NEVER` | "even though they were never supposed to change." | W0117..W0124 | 51.660 – 54.180s | `[1550, 1625)` | 75 F | 0 F | Wrongly destroyed cells (7, 10, 25) highlighted with red warning borders |
| `S02_NEED_RULE` | "So we need one important rule." | W0125..W0130 | 54.180 – 56.780s | `[1625, 1703)` | 78 F | 26 F (F1703..F1729) | Matrix resets back to untouched master state; false cascade cleared |
| `S02_RULE` | "Zeros created by us must never become new sources of zeroing." | W0131..W0141 | 57.640 – 63.340s | `[1729, 1900)` | 171 F | 22 F (F1900..F1922) | Chalk rule banner: 'CORE INVARIANT: Created Zeros ≠ Original Sources' |
| `S02_PRESERVE` | "That means we need to preserve the information about the original zeros" | W0142..W0153 | 64.060 – 69.340s | `[1922, 2080)` | 158 F | 0 F | Original zeros (0,2), (2,0), (3,3) highlighted in amber truth glow |
| `S02_BEFORE` | "before our mutations can destroy it." | W0154..W0159 | 69.340 – 72.640s | `[2080, 2179)` | 99 F | 27 F (F2179..F2206) | Protective boundary indicator around original zeros |
| `S02_SAFEST` | "Let's start with the safest possible method." | W0160..W0166 | 73.540 – 76.280s | `[2206, 2288)` | 82 F | 0 F | Handoff teaser: 'METHOD 1: FULL MATRIX COPY'; matrix clean for Scene 03 |

---

## 3. Framewise Anchor Plan

---

### BEAT 01 · Data Structure Entrance: "We are given a matrix"

* **FRAME RANGE:** `[0, 52)` (`[0, 39)` spoken, `[39, 52)` 13F pause)
* **WORD IDS:** `W0000` .. `W0004` ("We are given a matrix.")
* **EXACT SPOKEN ANCHOR:** `S02_MATRIX`
* **ANCHOR:** "We are given a matrix."
* **WHAT APPEARS NOW:** A single 5×5 matrix grid shell fades and settles smoothly into the center stage ($X: 754, Y: 240$). All 25 cells are rendered with crisp rough chalkboard outlines (`RoughBox`); cells are initially empty to establish grid geometry.
* **CENTER-STAGE HERO:** Empty 5×5 matrix shell.
* **CAUSE:** Narration introduces the foundational 2D grid structure.
* **EFFECT / MOTION:** Grid enters at `scale: 0.96 -> 1.00`, `opacity: 0.0 -> 1.0` over 24 frames (`F0..F24`) using standard ease curve.
* **WHAT MUST NOT APPEAR YET:** Numerical values, row/col index labels, zeroing animations, or algorithm names.
* **COMPREHENSION HOLD:** `F39..F51` (13 frames, 440ms pause) holding the clean, symmetric chalkboard grid.
* **CLEANUP / EXIT:** Matrix remains on stage for the rule illustration.
* **PERSISTENT STATE:** Empty 5×5 matrix shell centered.
* **KIT COMPONENTS:** `ProblemOpenerShell`, `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS. Zero problem values revealed.

---

### BEAT 02 · Rule Condition: "Whenever an original cell contains zero"

* **FRAME RANGE:** `[52, 152)` (`[52, 134)` spoken, `[134, 152)` 18F pause)
* **WORD IDS:** `W0005` .. `W0010` ("Whenever an original cell contains zero,")
* **EXACT SPOKEN ANCHOR:** `S02_RULE0`
* **ANCHOR:** "Whenever an original cell contains zero..."
* **WHAT APPEARS NOW:** A single sample cell (e.g. cell at coordinate row 1, col 2) illuminates with a warm golden amber border (`theme.pivot` / `#FFD166`) and displays a chalk number `0`. A small badge above reads `"ORIGINAL ZERO"`.
* **CENTER-STAGE HERO:** Symbolic source zero inside cell `(1,2)`.
* **CAUSE:** Narration defines the trigger condition of the problem.
* **EFFECT / MOTION:** Cell border pulses with amber wash fill (`F52..F80`). No row or column changes yet.
* **WHAT MUST NOT APPEAR YET:** Row or column zeroing; full 5×5 values.
* **COMPREHENSION HOLD:** `F134..F151` (18 frames, 580ms pause) letting the condition settle.
* **CLEANUP / EXIT:** Keeps zero cell active as the source.
* **PERSISTENT STATE:** Cell `(1,2)` glowing gold with `0`.
* **KIT COMPONENTS:** `RoughBox`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 03 · Rule Consequence Part 1: "its complete row"

* **FRAME RANGE:** `[152, 182)` (`[152, 182)` spoken, 0F pause)
* **WORD IDS:** `W0011` .. `W0013` ("its complete row")
* **EXACT SPOKEN ANCHOR:** `S02_RULER`
* **ANCHOR:** "its complete row..."
* **WHAT APPEARS NOW:** A horizontal cyan beam sweep (`theme.cyan` / `#5CE1E6`, `alpha: 0.18`) sweeps across all 5 cells of row 1, emanating left and right from the source zero.
* **CENTER-STAGE HERO:** Row 1 horizontal relation band.
* **CAUSE:** Narration states the first consequence of containing a zero.
* **EFFECT / MOTION:** Sweep extends from source cell across the entire row over 25 frames (`F152..F177`).
* **WHAT MUST NOT APPEAR YET:** Column sweep; master numbers.
* **COMPREHENSION HOLD:** 0F (audio connects immediately into "and its complete column").
* **CLEANUP / EXIT:** Row sweep remains active.
* **PERSISTENT STATE:** Row 1 highlighted in cyan.
* **KIT COMPONENTS:** `RoughLine`, `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 04 · Rule Consequence Part 2: "and its complete column"

* **FRAME RANGE:** `[182, 252)` (`[182, 236)` spoken, `[236, 252)` 16F pause)
* **WORD IDS:** `W0014` .. `W0017` ("and its complete column")
* **EXACT SPOKEN ANCHOR:** `S02_RULEC`
* **ANCHOR:** "and its complete column..."
* **WHAT APPEARS NOW:** A vertical cyan beam sweep (`theme.cyan`, `alpha: 0.18`) extends through all 5 cells of column 2, creating a clear crosshairs intersection at cell `(1,2)`.
* **CENTER-STAGE HERO:** Crosshairs (Row 1 + Column 2) zeroing consequence.
* **CAUSE:** Narration states the second consequence.
* **EFFECT / MOTION:** Vertical beam draws up and down across the column (`F182..F212`).
* **WHAT MUST NOT APPEAR YET:** Mutation of values to 0 (waits for Beat 05); master numbers.
* **COMPREHENSION HOLD:** `F236..F251` (16 frames, 540ms pause) holding the visual crosshairs.
* **CLEANUP / EXIT:** Prepares for cell zeroing in Beat 05.
* **PERSISTENT STATE:** Full crosshairs highlighted across Row 1 & Col 2.
* **KIT COMPONENTS:** `RoughLine`, `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 05 · Rule Confirmation: "must become zero."

* **FRAME RANGE:** `[252, 324)` (`[252, 301)` spoken, `[301, 324)` 23F pause)
* **WORD IDS:** `W0018` .. `W0020` ("must become zero.")
* **EXACT SPOKEN ANCHOR:** `S02_MUST_BECOME_ZERO`
* **ANCHOR:** "must become zero."
* **WHAT APPEARS NOW:** All cells in Row 1 and Column 2 display fresh chalk `0` digits in seafoam mint (`theme.good` / `#3CE5A7`). Rule demonstration completes.
* **CENTER-STAGE HERO:** Completed row and column zeroing effect.
* **CAUSE:** Narration delivers the final mandate of the rule.
* **EFFECT / MOTION:** Zero values fade in with subtle pop scale (`F252..F280`). Beam highlights gently dissolve (`F290..F315`).
* **WHAT MUST NOT APPEAR YET:** Master testcase values.
* **COMPREHENSION HOLD:** `F301..F323` (23 frames, 760ms pause) allowing the rule logic to crystallize.
* **CLEANUP / EXIT:** Symbolic rule example fades out (`F310..F324`) to make way for the master input matrix.
* **PERSISTENT STATE:** Clean 5×5 grid ready for real numbers.
* **KIT COMPONENTS:** `RoughBox`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 06 · Master Input Presentation: "For this lesson, we will use this matrix"

* **FRAME RANGE:** `[324, 419)` (`[324, 399)` spoken, `[399, 419)` 20F pause)
* **WORD IDS:** `W0021` .. `W0028` ("For this lesson, we will use this matrix.")
* **EXACT SPOKEN ANCHOR:** `S02_MASTER`
* **ANCHOR:** "For this lesson, we will use this matrix."
* **WHAT APPEARS NOW:** The full 5×5 master testcase matrix populates inside the fixed grid cells:
  - Row 0: `1, 2, 0, 4, 5`
  - Row 1: `6, 7, 8, 9, 10`
  - Row 2: `0, 12, 13, 14, 15`
  - Row 3: `16, 17, 18, 0, 20`
  - Row 4: `21, 22, 23, 24, 25`
* **CENTER-STAGE HERO:** Complete master input matrix populated on chalkboard.
* **CAUSE:** Narration introduces the canonical testcase.
* **EFFECT / MOTION:** Values enter simultaneously with a gentle chalk handwriting reveal (`opacity: 0 -> 1`, `F324..F355`). Values are crisp chalkboard white (`#F8F6F0`). Zeros are NOT yet colored or solution-marked.
* **WHAT MUST NOT APPEAR YET:** Coordinate rulers (waits for Beat 07); original zero classification (waits for Beat 08); any row/column zeroing.
* **COMPREHENSION HOLD:** `F399..F418` (20 frames, 660ms pause) allowing the viewer to inspect the numbers.
* **CLEANUP / EXIT:** Retains all 25 numbers.
* **PERSISTENT STATE:** Master 5×5 input matrix fully populated.
* **KIT COMPONENTS:** `MeshGrid`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS. Master input matches verified testcase truth.

---

### BEAT 07 · Coordinate System: "We will use zero-based row and column indices"

* **FRAME RANGE:** `[419, 535)` (`[419, 515)` spoken, `[515, 535)` 20F pause)
* **WORD IDS:** `W0029` .. `W0037` ("We will use zero-based row and column indices.")
* **EXACT SPOKEN ANCHOR:** `S02_INDEX`
* **ANCHOR:** "We will use zero-based row and column indices."
* **WHAT APPEARS NOW:** Chalkboard row indices `[0]`, `[1]`, `[2]`, `[3]`, `[4]` draw vertically to the left of the grid ($X: 690$), and column indices `[0]`, `[1]`, `[2]`, `[3]`, `[4]` draw horizontally across the top ($Y: 175$). Coordinate text is styled in crisp monospace cyan (`#5CE1E6`).
* **CENTER-STAGE HERO:** 0-based coordinate rulers framing the 5×5 grid.
* **CAUSE:** Narration establishes the mathematical indexing convention.
* **EFFECT / MOTION:** Rulers draw with subtle left-to-right / top-to-bottom sequence (`F419..F470`).
* **WHAT MUST NOT APPEAR YET:** Highlighting of zeros; naive mutation.
* **COMPREHENSION HOLD:** `F515..F534` (20 frames, 680ms pause) establishing coordinate literacy.
* **CLEANUP / EXIT:** Rulers remain permanently visible as fixed reference anchors.
* **PERSISTENT STATE:** 5×5 matrix with permanent `[0..4]` row and col rulers.
* **KIT COMPONENTS:** `MeshGrid` coordinate rulers, `Captions`.
* **NO-SPOILER CHECK:** PASS. Standard zero-based indexing convention.

---

### BEAT 08 · Original Zeros Enumeration: "There are three original zeros"

* **FRAME RANGE:** `[535, 608)` (`[535, 592)` spoken, `[592, 608)` 16F pause)
* **WORD IDS:** `W0038` .. `W0042` ("There are three original zeros.")
* **EXACT SPOKEN ANCHOR:** `S02_THREE`
* **ANCHOR:** "There are three original zeros."
* **WHAT APPEARS NOW:** A soft ambient gold pulse illuminates cells `(0,2)`, `(2,0)`, and `(3,3)`, distinguishing them as the true initial sources.
* **CENTER-STAGE HERO:** The three original zero cells identified simultaneously.
* **CAUSE:** Narration counts the original zeroes.
* **EFFECT / MOTION:** Subtle amber glow pulse (`F535..F565`, 30F) across the three cells.
* **WHAT MUST NOT APPEAR YET:** Specific individual coordinate callouts (handled in Beats 09–11).
* **COMPREHENSION HOLD:** `F592..F607` (16 frames, 540ms pause).
* **CLEANUP / EXIT:** Ambient glow continues into individual callouts.
* **PERSISTENT STATE:** Three zeros recognized as original sources.
* **KIT COMPONENTS:** `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS. Matches verified testcase positions.

---

### BEAT 09 · Zero 1 Location: "One is in the first row"

* **FRAME RANGE:** `[608, 668)` (`[608, 653)` spoken, `[653, 668)` 15F pause)
* **WORD IDS:** `W0043` .. `W0048` ("One is in the first row,")
* **EXACT SPOKEN ANCHOR:** `S02_FIRSTROW`
* **ANCHOR:** "One is in the first row..."
* **WHAT APPEARS NOW:** Cell `(0,2)` receives primary hero focus. A double rough chalk outline draws around the cell, with a floating label above: `(0, 2) · Row 0`.
* **CENTER-STAGE HERO:** Cell `(0,2)` in row 0.
* **CAUSE:** Narration locates the first original zero.
* **EFFECT / MOTION:** Outline draws around cell `(0,2)` (`F608..F632`). Col index `[2]` and row index `[0]` brighten in yellow.
* **WHAT MUST NOT APPEAR YET:** Highlighting of other zeros beyond ambient.
* **COMPREHENSION HOLD:** `F653..F667` (15 frames, 500ms pause).
* **CLEANUP / EXIT:** Focus label remains as quiet tag.
* **PERSISTENT STATE:** Cell `(0,2)` confirmed as original zero.
* **KIT COMPONENTS:** `RoughBox`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 10 · Zero 2 Location: "one is in the first column"

* **FRAME RANGE:** `[668, 725)` (`[668, 714)` spoken, `[714, 725)` 11F pause)
* **WORD IDS:** `W0049` .. `W0054` ("one is in the first column,")
* **EXACT SPOKEN ANCHOR:** `S02_FIRSTCOL`
* **ANCHOR:** "one is in the first column..."
* **WHAT APPEARS NOW:** Cell `(2,0)` receives hero focus. A double rough chalk outline draws around `(2,0)` with floating label: `(2, 0) · Col 0`.
* **CENTER-STAGE HERO:** Cell `(2,0)` in column 0.
* **CAUSE:** Narration locates the second original zero.
* **EFFECT / MOTION:** Outline draws around `(2,0)` (`F668..F695`). Col index `[0]` and row index `[2]` brighten.
* **WHAT MUST NOT APPEAR YET:** Interior zero detail.
* **COMPREHENSION HOLD:** `F714..F724` (11 frames, 360ms pause).
* **CLEANUP / EXIT:** Focus label settles.
* **PERSISTENT STATE:** Cells `(0,2)` and `(2,0)` confirmed.
* **KIT COMPONENTS:** `RoughBox`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 11 · Zero 3 Location: "and one is inside the matrix."

* **FRAME RANGE:** `[725, 805)` (`[725, 787)` spoken, `[787, 805)` 18F pause)
* **WORD IDS:** `W0055` .. `W0060` ("and one is inside the matrix.")
* **EXACT SPOKEN ANCHOR:** `S02_INTERIOR`
* **ANCHOR:** "and one is inside the matrix."
* **WHAT APPEARS NOW:** Cell `(3,3)` receives hero focus. Double rough chalk outline with label: `(3, 3) · Interior`. All 3 original zeros are now fully tagged.
* **CENTER-STAGE HERO:** Cell `(3,3)` in the interior subgrid.
* **CAUSE:** Narration locates the third original zero.
* **EFFECT / MOTION:** Outline draws around `(3,3)` (`F725..F755`). Indices `[3]` and `[3]` brighten.
* **WHAT MUST NOT APPEAR YET:** Naive mutation.
* **COMPREHENSION HOLD:** `F787..F804` (18 frames, 600ms pause) showing the full map of original zeros.
* **CLEANUP / EXIT:** Coordinate tags fade to quiet badges.
* **PERSISTENT STATE:** Three original zeros clearly marked on the grid.
* **KIT COMPONENTS:** `RoughBox`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 12 · Intuition Transition: "At first, the solution may look obvious"

* **FRAME RANGE:** `[805, 917)` (`[805, 897)` spoken, `[897, 917)` 20F pause)
* **WORD IDS:** `W0061` .. `W0067` ("At first, the solution may look obvious.")
* **EXACT SPOKEN ANCHOR:** `S02_OBVIOUS`
* **ANCHOR:** "At first, the solution may look obvious."
* **WHAT APPEARS NOW:** The matrix settles into a calm contemplation hold. A subtle question chip appears at top right of the matrix: `"Naive Idea: In-Place Update?"`.
* **CENTER-STAGE HERO:** Master matrix in baseline state, inviting the intuitive proposal.
* **CAUSE:** Teacher introduces the common intuitive trap.
* **EFFECT / MOTION:** Camera micro-eases in (`scale: 1.0 -> 1.02`, `F805..F840`).
* **WHAT MUST NOT APPEAR YET:** Actual in-place zeroing.
* **COMPREHENSION HOLD:** `F897..F916` (20 frames, 680ms pause).
* **CLEANUP / EXIT:** Ready to begin scanning in Beat 13.
* **PERSISTENT STATE:** Matrix ready for hypothetical simulation.
* **KIT COMPONENTS:** `MeshGrid`, `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 13 · Trigger: "When we find a zero"

* **FRAME RANGE:** `[917, 971)` (`[917, 953)` spoken, `[953, 971)` 18F pause)
* **WORD IDS:** `W0068` .. `W0072` ("When we find a zero,")
* **EXACT SPOKEN ANCHOR:** `S02_FIND`
* **ANCHOR:** "When we find a zero..."
* **WHAT APPEARS NOW:** A scanner reticle glides onto cell `(0,2)`. Cell `(0,2)` flashes in sunburst gold (`theme.pivot` / `#FFD166`).
* **CENTER-STAGE HERO:** Cell `(0,2)` as the first zero encountered.
* **CAUSE:** Traversal reaches the first original zero.
* **EFFECT / MOTION:** Reticle snaps onto `(0,2)` with pop spring (`F917..F935`).
* **WHAT MUST NOT APPEAR YET:** In-place row/col mutation.
* **COMPREHENSION HOLD:** `F953..F970` (18 frames, 600ms pause) pausing right before the write.
* **CLEANUP / EXIT:** Focus holds on `(0,2)`.
* **PERSISTENT STATE:** Scanner locked on `(0,2)`.
* **KIT COMPONENTS:** `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 14 · Naive In-Place Write: "why not immediately make that row and column zero?"

* **FRAME RANGE:** `[971, 1089)` (`[971, 1069)` spoken, `[1069, 1089)` 20F pause)
* **WORD IDS:** `W0073` .. `W0081` ("why not immediately make that row and column zero?")
* **EXACT SPOKEN ANCHOR:** `S02_IMMEDIATE`
* **ANCHOR:** "why not immediately make that row and column zero?"
* **WHAT APPEARS NOW:** Immediate in-place writes take place:
  - Row 0 cells: `1, 2, 4, 5` mutate to `0, 0, 0, 0`
  - Col 2 cells: `8, 13, 18, 23` mutate to `0, 0, 0, 0`
  All newly mutated zeros appear with an orange-red warning tint (`#FF7675`).
* **CENTER-STAGE HERO:** Row 0 and Col 2 immediately overwritten in place.
* **CAUSE:** Demonstrating the naive hypothesis directly on the matrix.
* **EFFECT / MOTION:** Cell numbers wipe to 0 left-to-right and top-to-bottom (`F971..F1020`) with chalk dust puffs.
* **WHAT MUST NOT APPEAR YET:** Cascading downstream errors (waits for Beats 16–20).
* **COMPREHENSION HOLD:** `F1069..F1088` (20 frames, 660ms pause) displaying the freshly mutated matrix.
* **CLEANUP / EXIT:** Keeps newly created zeros visible.
* **PERSISTENT STATE:** Row 0 and Col 2 zeroed in place.
* **KIT COMPONENTS:** `MeshGrid`, `ChalkText`, `ChalkDust`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 15 · The Problem Exposed: "The problem is,"

* **FRAME RANGE:** `[1089, 1137)` (`[1089, 1125)` spoken, `[1125, 1137)` 12F pause)
* **WORD IDS:** `W0082` .. `W0084` ("The problem is,")
* **EXACT SPOKEN ANCHOR:** `S02_PROBLEM_IS`
* **ANCHOR:** "The problem is..."
* **WHAT APPEARS NOW:** A prominent red warning badge appears above the matrix ($Y: 130$): `"⚠️ DANGER: NEW ZEROS CREATED IN-PLACE"`.
* **CENTER-STAGE HERO:** Warning callout banner exposing the trap.
* **CAUSE:** Teacher shifts tone to expose the catastrophic flaw.
* **EFFECT / MOTION:** Warning badge drops in with sharp attention spring (`F1089..F1115`).
* **WHAT MUST NOT APPEAR YET:** Scan reaching the fake zero.
* **COMPREHENSION HOLD:** `F1125..F1136` (12 frames, 400ms pause).
* **CLEANUP / EXIT:** Warning badge remains pinned at top.
* **PERSISTENT STATE:** Danger badge active above grid.
* **KIT COMPONENTS:** `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 16 · Fake Zeros Created: "those writes create new zeros"

* **FRAME RANGE:** `[1137, 1218)` (`[1137, 1201)` spoken, `[1201, 1218)` 17F pause)
* **WORD IDS:** `W0085` .. `W0089` ("those writes create new zeros.")
* **EXACT SPOKEN ANCHOR:** `S02_CREATED`
* **ANCHOR:** "those writes create new zeros."
* **WHAT APPEARS NOW:** Cell `(1,2)`—which originally held value `8` and was zeroed by the col 2 sweep—pulses with a flashing red warning outline (`#FF7675`). A label beside it reads: `"Was 8 -> Now 0 (FAKE ZERO)"`.
* **CENTER-STAGE HERO:** Cell `(1,2)` as a synthetic/fake zero.
* **CAUSE:** Narration points out that writes generate indistinguishable new zeros.
* **EFFECT / MOTION:** Flashing focus ring around `(1,2)` (`F1137..F1170`).
* **WHAT MUST NOT APPEAR YET:** Premature cascading to Row 1.
* **COMPREHENSION HOLD:** `F1201..F1217` (17 frames, 580ms pause) emphasizing cell `(1,2)`.
* **CLEANUP / EXIT:** Keeps `(1,2)` labeled as a fake zero.
* **PERSISTENT STATE:** `(1,2)` identified as synthetic zero.
* **KIT COMPONENTS:** `RoughBox`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 17 · The Trap Triggers: "And if our scan later reaches one of those new zeros"

* **FRAME RANGE:** `[1218, 1330)` (`[1218, 1313)` spoken, `[1313, 1330)` 17F pause)
* **WORD IDS:** `W0090` .. `W0100` ("And if our scan later reaches one of those new zeros,")
* **EXACT SPOKEN ANCHOR:** `S02_LATER`
* **ANCHOR:** "And if our scan later reaches one of those new zeros..."
* **WHAT APPEARS NOW:** The scanner reticle steps through the matrix and lands directly on cell `(1,2)`.
* **CENTER-STAGE HERO:** Scanner cursor arriving at synthetic zero `(1,2)`.
* **CAUSE:** Algorithmic traversal progresses and encounters the mutated cell.
* **EFFECT / MOTION:** Scanner glides across from previous position to `(1,2)` (`F1218..F1260`).
* **WHAT MUST NOT APPEAR YET:** Misclassification label (handled in Beat 18).
* **COMPREHENSION HOLD:** `F1313..F1329` (17 frames, 580ms pause).
* **CLEANUP / EXIT:** Reticle stays locked on `(1,2)`.
* **PERSISTENT STATE:** Traversal inspecting `(1,2)`.
* **KIT COMPONENTS:** `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 18 · Misclassification: "we may treat it like an original zero"

* **FRAME RANGE:** `[1330, 1428)` (`[1330, 1411)` spoken, `[1411, 1428)` 17F pause)
* **WORD IDS:** `W0101` .. `W0108` ("we may treat it like an original zero.")
* **EXACT SPOKEN ANCHOR:** `S02_MISTAKE`
* **ANCHOR:** "we may treat it like an original zero."
* **WHAT APPEARS NOW:** A catastrophic warning tag appears on `(1,2)`: `❌ MISCLASSIFIED AS SOURCE!`. The cell outline glows aggressive red (`#FF4757`).
* **CENTER-STAGE HERO:** Misclassified cell `(1,2)`.
* **CAUSE:** The algorithm cannot distinguish an original zero from a written zero.
* **EFFECT / MOTION:** Red warning tag pops onto cell (`F1330..F1360`).
* **WHAT MUST NOT APPEAR YET:** Row 1 wipe (happens in Beat 19).
* **COMPREHENSION HOLD:** `F1411..F1427` (17 frames, 580ms pause).
* **CLEANUP / EXIT:** Ready to trigger false zeroing.
* **PERSISTENT STATE:** `(1,2)` falsely treated as trigger.
* **KIT COMPONENTS:** `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 19 · False Cascade 1: "Then we zero another row"

* **FRAME RANGE:** `[1428, 1489)` (`[1428, 1489)` spoken, 0F pause)
* **WORD IDS:** `W0109` .. `W0113` ("Then we zero another row")
* **EXACT SPOKEN ANCHOR:** `S02_ANOTHER_ROW`
* **ANCHOR:** "Then we zero another row..."
* **WHAT APPEARS NOW:** Because `(1,2)` was treated as a source zero, Row 1 is zeroed! Cells `(1,0)=6`, `(1,1)=7`, `(1,3)=9`, `(1,4)=10` are overwritten with red zeros `0`.
* **CENTER-STAGE HERO:** Erroneously zeroed Row 1.
* **CAUSE:** Misclassification cascades into mutating an innocent row.
* **EFFECT / MOTION:** Red zeroing sweep races across Row 1 (`F1428..F1465`).
* **WHAT MUST NOT APPEAR YET:** Column cascade (waits for Beat 20).
* **COMPREHENSION HOLD:** 0F (flows directly into "and another column").
* **CLEANUP / EXIT:** Row 1 stays corrupted.
* **PERSISTENT STATE:** Row 1 corrupted with false zeros.
* **KIT COMPONENTS:** `MeshGrid`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 20 · False Cascade 2: "and another column,"

* **FRAME RANGE:** `[1489, 1550)` (`[1489, 1538)` spoken, `[1538, 1550)` 12F pause)
* **WORD IDS:** `W0114` .. `W0116` ("and another column,")
* **EXACT SPOKEN ANCHOR:** `S02_ANOTHER_COL`
* **ANCHOR:** "and another column..."
* **WHAT APPEARS NOW:** The newly created zero at `(1,4)` cascades down Column 4! Cell `(4,4)=25` is overwritten with zero.
* **CENTER-STAGE HERO:** Column 4 cascading corruption.
* **CAUSE:** Secondary cascade from the false row mutation.
* **EFFECT / MOTION:** Red sweep line races down Col 4 (`F1489..F1525`).
* **WHAT MUST NOT APPEAR YET:** Infinite loop / endless wipe.
* **COMPREHENSION HOLD:** `F1538..F1549` (12 frames, 400ms pause).
* **CLEANUP / EXIT:** Matrix is visibly over-zeroed.
* **PERSISTENT STATE:** Over-zeroed matrix with multiple corrupted cells.
* **KIT COMPONENTS:** `MeshGrid`, `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 21 · The Tragedy Highlighted: "even though they were never supposed to change"

* **FRAME RANGE:** `[1550, 1625)` (`[1550, 1625)` spoken, 0F pause)
* **WORD IDS:** `W0117` .. `W0124` ("even though they were never supposed to change.")
* **EXACT SPOKEN ANCHOR:** `S02_NEVER`
* **ANCHOR:** "even though they were never supposed to change."
* **WHAT APPEARS NOW:** Bold red "X" callouts flash over cells `(1,1)` [was 7], `(1,4)` [was 10], and `(4,4)` [was 25]. A floating tag reads: `"CORRUPTED: 7 and 10 had NO original zero in Row 1!"`.
* **CENTER-STAGE HERO:** Destroyed legitimate non-zero values.
* **CAUSE:** Narration proves that the algorithm produces an objectively wrong answer.
* **EFFECT / MOTION:** Red pulsing borders and strike-throughs on the destroyed values (`F1550..F1590`).
* **WHAT MUST NOT APPEAR YET:** Reset to master.
* **COMPREHENSION HOLD:** 0F (flows into rule conclusion).
* **CLEANUP / EXIT:** Prepares to clear corrupted simulation.
* **PERSISTENT STATE:** Concrete proof of failure displayed.
* **KIT COMPONENTS:** `RoughBox`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 22 · Reset & Core Rule: "So we need one important rule"

* **FRAME RANGE:** `[1625, 1729)` (`[1625, 1703)` spoken, `[1703, 1729)` 26F pause)
* **WORD IDS:** `W0125` .. `W0130` ("So we need one important rule.")
* **EXACT SPOKEN ANCHOR:** `S02_NEED_RULE`
* **ANCHOR:** "So we need one important rule."
* **WHAT APPEARS NOW:** A smooth chalkboard erase wipe passes over the matrix (`F1625..F1665`). The false red zeros disappear, and the matrix completely resets back to its pristine master input state:
  - Row 0: `[1, 2, 0, 4, 5]`
  - Row 1: `[6, 7, 8, 9, 10]`
  - Row 2: `[0, 12, 13, 14, 15]`
  - Row 3: `[16, 17, 18, 0, 20]`
  - Row 4: `[21, 22, 23, 24, 25]`
* **CENTER-STAGE HERO:** Restored pristine master matrix.
* **CAUSE:** Erasing the failed simulation to build the correct invariant.
* **EFFECT / MOTION:** Chalk wipe effect with dust particles (`F1625..F1665`). Matrix cleanly restored.
* **WHAT MUST NOT APPEAR YET:** Invariant text card.
* **COMPREHENSION HOLD:** `F1703..F1728` (26 frames, 860ms pause) holding the calm, restored matrix.
* **CLEANUP / EXIT:** All red warning UI removed.
* **PERSISTENT STATE:** Pristine master matrix.
* **KIT COMPONENTS:** `MeshGrid`, `ChalkDust`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 23 · The Invariant Enunciated: "Zeros created by us must never become new sources of zeroing"

* **FRAME RANGE:** `[1729, 1922)` (`[1729, 1900)` spoken, `[1900, 1922)` 22F pause)
* **WORD IDS:** `W0131` .. `W0141` ("Zeros created by us must never become new sources of zeroing.")
* **EXACT SPOKEN ANCHOR:** `S02_RULE`
* **ANCHOR:** "Zeros created by us must never become new sources of zeroing."
* **WHAT APPEARS NOW:** A bold, hand-drawn chalkboard rule banner frames the bottom of the grid ($Y: 760$):
  `⭐ CORE INVARIANT: Created Zeros (Mutations) ≠ Original Zeros (Sources)`.
* **CENTER-STAGE HERO:** The Core Invariant banner.
* **CAUSE:** The foundational algorithmic law of LeetCode 73 is stated.
* **EFFECT / MOTION:** Banner draws left-to-right with gold chalk border (`#FFD166`, `F1729..F1770`).
* **WHAT MUST NOT APPEAR YET:** Solution implementation details.
* **COMPREHENSION HOLD:** `F1900..F1921` (22 frames, 720ms pause) allowing the law to be memorized.
* **CLEANUP / EXIT:** Banner remains pinned.
* **PERSISTENT STATE:** Core Invariant clearly displayed below grid.
* **KIT COMPONENTS:** `RoughBox`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 24 · Preservation Mandate: "That means we need to preserve the information about the original zeros"

* **FRAME RANGE:** `[1922, 2080)` (`[1922, 2080)` spoken, 0F pause)
* **WORD IDS:** `W0142` .. `W0153` ("That means we need to preserve the information about the original zeros")
* **EXACT SPOKEN ANCHOR:** `S02_PRESERVE`
* **ANCHOR:** "That means we need to preserve the information about the original zeros..."
* **WHAT APPEARS NOW:** The three original zeros at `(0,2)`, `(2,0)`, and `(3,3)` illuminate in radiant amber-gold halos. A small floating badge appears above each: `"ORIGINAL"`.
* **CENTER-STAGE HERO:** The three original zeros as precious, protected information.
* **CAUSE:** Narration explains that original zero positions must be safeguarded.
* **EFFECT / MOTION:** Gold halos pulse softly (`F1922..F1960`).
* **WHAT MUST NOT APPEAR YET:** Copy matrix (Scene 03).
* **COMPREHENSION HOLD:** 0F (connects into "before our mutations can destroy it.").
* **CLEANUP / EXIT:** Halos remain active.
* **PERSISTENT STATE:** Original zeros highlighted as ground truth.
* **KIT COMPONENTS:** `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 25 · Protection Barrier: "before our mutations can destroy it"

* **FRAME RANGE:** `[2080, 2206)` (`[2080, 2179)` spoken, `[2179, 2206)` 27F pause)
* **WORD IDS:** `W0154` .. `W0159` ("before our mutations can destroy it.")
* **EXACT SPOKEN ANCHOR:** `S02_BEFORE`
* **ANCHOR:** "before our mutations can destroy it."
* **WHAT APPEARS NOW:** A translucent protective chalk shield outline encases the matrix, visually signaling that original state must be locked before any write occurs.
* **CENTER-STAGE HERO:** Protected matrix state.
* **CAUSE:** Narration warns that premature mutation destroys the information.
* **EFFECT / MOTION:** Cyan shield bracket draws around the matrix perimeter (`F2080..F2120`).
* **WHAT MUST NOT APPEAR YET:** Method 1 copy grid.
* **COMPREHENSION HOLD:** `F2179..F2205` (27 frames, 900ms pause).
* **CLEANUP / EXIT:** Shield settles into quiet border.
* **PERSISTENT STATE:** Protected state established.
* **KIT COMPONENTS:** `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 26 · Method 1 Handoff: "Let's start with the safest possible method"

* **FRAME RANGE:** `[2206, 2288)` (`[2206, 2288)` spoken, 0F pause, scene completes at F2288)
* **WORD IDS:** `W0160` .. `W0166` ("Let's start with the safest possible method.")
* **EXACT SPOKEN ANCHOR:** `S02_SAFEST`
* **ANCHOR:** "Let’s start with the safest possible method."
* **WHAT APPEARS NOW:** A sleek, authoritative method teaser card animates into the bottom-right hero dock ($X: 1200, Y: 780$):
  `➡️ UP NEXT: METHOD 1 — FULL ORIGINAL COPY (O(M×N) SPACE)`.
  The matrix remains pristine center stage, perfectly positioned for the side-by-side copy transformation in Scene 03.
* **CENTER-STAGE HERO:** Pristine master matrix + Method 1 handoff dock.
* **CAUSE:** Teacher introduces the pedagogical starting point.
* **EFFECT / MOTION:** Teaser card slides up smoothly with subtle pop (`F2206..F2245`). Scene settles cleanly on frame 2288.
* **WHAT MUST NOT APPEAR YET:** The copy matrix itself (reveals in Scene 03).
* **COMPREHENSION HOLD:** 0F (exact scene conclusion at F2288).
* **CLEANUP / EXIT:** Scene 02 cleanly concludes; state is 100% continuous with Scene 03 frame 0.
* **PERSISTENT STATE:** Pristine master matrix with original zeros tagged; Method 1 ready.
* **KIT COMPONENTS:** `RoughBox`, `ChalkText`, `Captions`.
* **NO-SPOILER CHECK:** PASS. Method 1 is named without revealing internal trace mechanics.

---

## 4. Center-Stage Spatial Composition & Zero-Collision Audit

| Component / Layer | Canvas Coordinates | Dimensions | Clearance / Invariants |
|---|---|---|---|
| **Top Problem Header** | $X: 80\text{px} .. 1840\text{px}$, $Y: 48\text{px} .. 140\text{px}$ | Height: $92\text{px}$ | LeetCode 73 / MEDIUM / Set Matrix Zeroes. Minimum $40\text{px}$ clearance above matrix. |
| **Warning / Status Banners** | $X: 660\text{px} .. 1260\text{px}$, $Y: 135\text{px} .. 175\text{px}$ | Width: $600\text{px}$, Height: $40\text{px}$ | Sits inside top clearance zone without overlapping grid index labels. |
| **Matrix Column Ticks** | $X: 754\text{px} .. 1166\text{px}$, $Y: 185\text{px} .. 215\text{px}$ | 5 labels `[0]..[4]`, $76\text{px}$ spacing | $25\text{px}$ breathing room between column labels and top cell borders. |
| **Matrix Row Ticks** | $X: 685\text{px} .. 725\text{px}$, $Y: 240\text{px} .. 652\text{px}$ | 5 labels `[0]..[4]`, $76\text{px}$ spacing | $29\text{px}$ breathing room between row labels and left cell borders. |
| **Master 5×5 Matrix** | $X: 754\text{px} .. 1166\text{px}$, $Y: 240\text{px} .. 652\text{px}$ | 5 rows × 5 cols, $76\text{px}$ cell, $8\text{px}$ gap (Total: $412\text{px} \times 412\text{px}$) | **Centered horizontally ($X: 754$) and vertically ($Y: 240..652$)** inside the canonical $Y: 130..750$ visual stage zone. |
| **Core Invariant Banner** | $X: 560\text{px} .. 1360\text{px}$, $Y: 710\text{px} .. 770\text{px}$ | Width: $800\text{px}$, Height: $60\text{px}$ | $58\text{px}$ clearance below bottom row of matrix. $> 190\text{px}$ clearance above bottom captions. |
| **Bottom Captions** | $X: 210\text{px} .. 1710\text{px}$, $Y: 960\text{px} .. 1040\text{px}$ | Centered at $Y: 980\text{px}$ | Bottom caption zone has $> 210\text{px}$ clear vertical buffer. ZERO COLLISION. |

---

## 5. Critical Frames for Visual & Alignment Inspection

The following frames must be rendered and verified during QA:

1. **Frame 25 (0.833s):** Empty 5×5 grid shell entrance settle.
2. **Frame 100 (3.333s):** Symbolic rule zero glowing amber in sample cell.
3. **Frame 200 (6.667s):** Symbolic row and column crosshairs beam sweep.
4. **Frame 360 (12.000s):** Master 5×5 input matrix fully populated on chalkboard.
5. **Frame 460 (15.333s):** 0-based coordinate rulers `[0..4]` completely drawn.
6. **Frame 630 (21.000s):** Original zero `(0,2)` highlighted with gold tag.
7. **Frame 690 (23.000s):** Original zero `(2,0)` highlighted with gold tag.
8. **Frame 750 (25.000s):** Original zero `(3,3)` highlighted with gold tag.
9. **Frame 1000 (33.333s):** Naive in-place zeroing: Row 0 and Col 2 wipe to 0.
10. **Frame 1100 (36.667s):** Warning banner `⚠️ IN-PLACE MUTATION DANGER` appears.
11. **Frame 1170 (39.000s):** Cell `(1,2)` flagged as synthetic zero (was 8 -> now 0).
12. **Frame 1360 (45.333s):** Scanner reaches `(1,2)` and flags `MISCLASSIFIED AS SOURCE!`.
13. **Frame 1460 (48.667s):** False cascade: Row 1 erroneously wiped to zero!
14. **Frame 1580 (52.667s):** Destroyed legitimate values (7, 10, 25) highlighted with warning marks.
15. **Frame 1680 (56.000s):** Erase wipe: matrix restored to untouched master input.
16. **Frame 1800 (60.000s):** Core Invariant banner: `Created Zeros ≠ Original Sources`.
17. **Frame 2150 (71.667s):** Protective barrier around three original zeros.
18. **Frame 2260 (75.333s):** Method 1 handoff banner docked at bottom right.
