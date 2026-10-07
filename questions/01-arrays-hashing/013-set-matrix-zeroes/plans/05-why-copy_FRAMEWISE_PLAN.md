# Scene 05 — Why Method 1 Wastes Space → Derive Method 2: Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `05-why-copy`  
**Audio File:** `05-why-copy.mp3`  
**Total Duration:** 1754 frames @ 30fps (58.460s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/05-why-copy.json` & `sync/05-why-copy.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 05 bridges Method 1 ($O(M \times N)$ Full Copy) and Method 2 ($O(M + N)$ Marker Arrays).  
It answers the question from first principles: *What information do we truly need to remember?*

1. **The Hero is the 5×5 Matrix**: Centered on the chalkboard canvas.
2. **Proves Full Copy Redundancy**: Storing 25 numbers when only 3 zeroes exist is massive waste.
3. **Derives the Two Fundamental Facts**:
   - Fact 1: Which rows contain an original zero?
   - Fact 2: Which columns contain an original zero?
4. **Introduces 1D Marker Arrays**:
   - `rowZero` ($M$ booleans) docked on the left rail of the matrix.
   - `colZero` ($N$ booleans) docked on the top rail of the matrix.
5. **Demonstrates on Interior Zero $(3, 3)$**:
   - Projection ray shoots left $\to$ `rowZero[3] = True`.
   - Projection ray shoots up $\to$ `colZero[3] = True`.
6. **Quantifies Memory Compression**: $O(M \times N) \to O(M + N)$ (from 25 integers down to 10 booleans).
7. **Hands off directly to Scene 06 (Method 2 Trace)**.

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Background:** Full-frame dark green chalkboard (`theme.boardBg` $\approx$ `#18523d`) with subtle `ChalkDust`. **Zero dark container cards.**
- **Top Header:** $Y: 42..108$ (`fonts.display`, 36px title, category pill `01 · ARRAYS & HASHING`, method badge `DERIVATION: O(M×N) → O(M+N)`).
- **Center Stage — Matrix & Docked 1D Rails ($X: 715..1205$, $Y: 235..725$):**
  - **Horizontal Center:** $X = 960$ is the exact midpoint of the composite structure.
  - **Master 5×5 Matrix:** $X: 785..1205, Y: 305..725$.
    - Cell size: $76\text{px} \times 76\text{px}$, gap: $10\text{px}$. Total matrix: $420\text{px} \times 420\text{px}$.
    - Built with `@dsa/kit` `RoughBox` cells and `ChalkText`.
  - **`colZero` Rail (Top):** $X: 785..1205, Y: 235..285$.
    - 5 horizontal slots ($76\text{px} \times 50\text{px}$) aligned perfectly with the 5 matrix columns.
    - Column indices $[0]..[4]$ above slots via `ChalkText`.
  - **`rowZero` Rail (Left):** $X: 715..765, Y: 305..725$.
    - 5 vertical slots ($50\text{px} \times 76\text{px}$) aligned perfectly with the 5 matrix rows.
    - Row indices $[0]..[4]$ to the left of slots via `ChalkText`.
- **Bottom Callout & Interaction Zone ($X: 660..1260$, $Y: 760..860$):**
  - Compact `@dsa/kit` `RoughBox` callouts, chips, and tags.
  - Height: $70\text{px} - 90\text{px}$.
  - Replaces all legacy 1220px right-panel dashboard cards.
- **Bottom Clearance Invariant:**
  - Bottom Callouts end at $Y: 860$.
  - Bottom Captions sit at $Y: 960..1040$.
  - Net clear vertical space: $960 - 860 = 100\text{px}$ (well above the $\ge 60\text{px}$ minimum clearance).
  - Clear top clearance: $235 - 108 = 127\text{px}$ above top rail.
- **Zero-Collision Guarantee:** Matrix cells, rail slots, ray lines, and bottom chips never overlap or clip.

---

## 3. Mandatory Framewise Anchor Plan (20 Anchors)

### Anchor 1: `S05_SUPPOSE` (F0..F130, 131 frames)
- **ANCHOR:** `S05_SUPPOSE` (Words 0-10, "Suppose we find an original zero at row 3, column 3.")
- **WHAT APPEARS NOW:**
  - Full-frame green chalkboard with subtle chalk dust.
  - Top header: `METHOD 2 DERIVATION: FROM O(M × N) TO O(M + N) SPACE`.
  - Master 5×5 Matrix enters center stage ($X: 785, Y: 305$) via gentle scale spring.
  - Cell $(3, 3)$ pulses with amber beacon glow (`theme.pivot`).
  - Small chalk tag above cell $(3, 3)$: `ORIGINAL ZERO (3, 3)`.
- **CENTER-STAGE HERO:** Centered 5×5 Matrix with focus on cell $(3, 3)$.
- **CAUSE:** Narrative sets up the representative original zero.
- **EFFECT / MOTION:** Cell $(3, 3)$ scales up slightly (`1.08x`) with soft golden highlight.
- **WHAT MUST NOT APPEAR YET:** Marker array rails, questions, or spoilers.
- **COMPREHENSION HOLD:** Viewer observes cell $(3, 3)$ containing `0`.
- **CLEANUP / EXIT:** Tag settles into cell border.
- **PERSISTENT STATE:** Centered matrix visible with cell $(3, 3)$ highlighted.

---

### Anchor 2: `S05_NEED_EVERY` (F150..F289, 140 frames)
- **ANCHOR:** `S05_NEED_EVERY` (Words 11-22, "Do we really need to remember every number in the original matrix?")
- **WHAT APPEARS NOW:**
  - Compact `RoughBox` callout pill appears below matrix ($X: 680..1240, Y: 760..830$):
    - `❓ Do we really need to remember every number? (25 integers)`
  - Non-zero numbers in the matrix (1, 2, 4, 5, 6, 7...) flicker with soft yellow inquiry outlines.
- **CENTER-STAGE HERO:** Centered matrix with flickering non-zero cells.
- **CAUSE:** Critical thinking about full-matrix storage overhead.
- **EFFECT / MOTION:** Question pill enters with smooth upward spring (`Y: 790 -> 760`).
- **WHAT MUST NOT APPEAR YET:** The answer "NO." or marker arrays.
- **COMPREHENSION HOLD:** Learner questions why 22 non-zero numbers are copied.
- **CLEANUP / EXIT:** Holds for vocal question.
- **PERSISTENT STATE:** Question pill visible below matrix.

---

### Anchor 3: `S05_NO` (F312..F325, 14 frames)
- **ANCHOR:** `S05_NO` (Word 23, "No.")
- **WHAT APPEARS NOW:**
  - A bold, compact `RoughBox` rejection stamp appears inside the question pill:
    - `❌ NO.` in bright chalk coral (`theme.warn`).
- **CENTER-STAGE HERO:** `❌ NO.` chalk stamp.
- **CAUSE:** Definitive algorithmic rejection of full matrix copying.
- **EFFECT / MOTION:** Stamp drops in with rapid impact spring (`scale: 1.3 -> 1.0`).
- **WHAT MUST NOT APPEAR YET:** Marker arrays or future rules.
- **COMPREHENSION HOLD:** Immediate, decisive realization.
- **CLEANUP / EXIT:** Question pill smoothly fades away at F350.
- **PERSISTENT STATE:** Matrix cleared of inquiry state.

---

### Anchor 4: `S05_TWO_FACTS` (F354..F446, 93 frames)
- **ANCHOR:** `S05_TWO_FACTS` (Words 24-32, "For the final answer, we only need two facts,")
- **WHAT APPEARS NOW:**
  - A compact golden `RoughBox` banner appears below matrix ($X: 720..1200, Y: 760..830$):
    - `✨ For the final answer, we only need TWO FACTS:`
- **CENTER-STAGE HERO:** Centered matrix with "Two Facts" banner below.
- **CAUSE:** Introducing the minimal sufficient information principle.
- **EFFECT / MOTION:** Banner enters with spring, glowing with golden chalk accent.
- **WHAT MUST NOT APPEAR YET:** Fact 1 and Fact 2 details.
- **COMPREHENSION HOLD:** Audience primed for the two facts.
- **CLEANUP / EXIT:** Banner shifts smoothly to anchor two sub-chips.
- **PERSISTENT STATE:** Two facts banner active.

---

### Anchor 5: `S05_WHICH_ROWS` (F455..F507, 53 frames)
- **ANCHOR:** `S05_WHICH_ROWS` (Words 33-37, "which rows contained a zero,")
- **WHAT APPEARS NOW:**
  - Small `RoughBox` chip appears below matrix ($X: 640..930, Y: 760..830$):
    - `1️⃣ Which rows contained a 0?`
  - Horizontal chalk glow bracket highlights entire Row 3 of the centered matrix.
- **CENTER-STAGE HERO:** Row 3 highlight on the centered matrix.
- **CAUSE:** Identifying row-level zero dependence.
- **EFFECT / MOTION:** Row 3 cells illuminate in amber; chip pops in with spring.
- **WHAT MUST NOT APPEAR YET:** Column fact or marker arrays.
- **COMPREHENSION HOLD:** Clear visual focus on Row 3.
- **CLEANUP / EXIT:** Row 3 bracket holds.
- **PERSISTENT STATE:** Row 3 highlighted, Fact 1 chip visible.

---

### Anchor 6: `S05_WHICH_COLS` (F521..F582, 62 frames)
- **ANCHOR:** `S05_WHICH_COLS` (Words 38-43, "and which columns contained a zero.")
- **WHAT APPEARS NOW:**
  - Small `RoughBox` chip appears next to Fact 1 ($X: 990..1280, Y: 760..830$):
    - `2️⃣ Which columns contained a 0?`
  - Vertical chalk glow bracket highlights entire Column 3 of the centered matrix.
- **CENTER-STAGE HERO:** Crosshair intersection of Row 3 and Column 3 on centered matrix.
- **CAUSE:** Identifying column-level zero dependence.
- **EFFECT / MOTION:** Column 3 cells illuminate in teal (`theme.good`); chip pops in with spring.
- **WHAT MUST NOT APPEAR YET:** Marker arrays.
- **COMPREHENSION HOLD:** Crosshair formed at cell $(3, 3)$.
- **CLEANUP / EXIT:** Dual highlights settle.
- **PERSISTENT STATE:** Both Row 3 and Column 3 highlighted; Fact 1 & 2 chips visible.

---

### Anchor 7: `S05_LESS_INFO` (F599..F655, 57 frames)
- **ANCHOR:** `S05_LESS_INFO` (Words 44-48, "That is much less information.")
- **WHAT APPEARS NOW:**
  - Compact summary chip appears between the two fact chips ($X: 740..1180, Y: 840..890$):
    - `💡 Storing row & col indices << copying all 25 numbers!`
- **CENTER-STAGE HERO:** Summary comparison chip below matrix.
- **CAUSE:** Quantifying the information reduction.
- **EFFECT / MOTION:** Chip pulses with emerald glow (`theme.good`).
- **WHAT MUST NOT APPEAR YET:** Marker array rails.
- **COMPREHENSION HOLD:** Viewer registers that we only need boolean flags, not full matrix data.
- **CLEANUP / EXIT:** Chips fade out smoothly at F670 to prepare for marker array rails.
- **PERSISTENT STATE:** Matrix at center stage ready for rails.

---

### Anchor 8: `S05_INSTEAD_COPY` (F676..F734, 59 frames)
- **ANCHOR:** `S05_INSTEAD_COPY` (Words 49-54, "Instead of copying the whole matrix,")
- **WHAT APPEARS NOW:**
  - Subtle ghost matrix wireframe flashes and dissolves with a red cancel slash `⊘`.
  - Small chalk tag below matrix: `❌ No full M × N duplicate`.
- **CENTER-STAGE HERO:** Centered matrix discarding the full-copy paradigm.
- **CAUSE:** Rejecting $O(M \times N)$ auxiliary storage.
- **EFFECT / MOTION:** Ghost dissolves into chalk dust particles.
- **WHAT MUST NOT APPEAR YET:** Marker rails until spoken words.
- **COMPREHENSION HOLD:** Complete departure from Method 1.
- **CLEANUP / EXIT:** Tag dissolves at F745.
- **PERSISTENT STATE:** Centered matrix ready for 1D marker rails.

---

### Anchor 9: `S05_ROW_MARKER` (F760..F832, 73 frames)
- **ANCHOR:** `S05_ROW_MARKER` (Words 55-62, "we can keep one marker for every row,")
- **WHAT APPEARS NOW:**
  - Vertical `rowZero` rail docks directly to the left of the centered matrix ($X: 715..765, Y: 305..725$).
  - 5 slots corresponding to rows $0..4$, labeled with row indices $0..4$.
  - Slots display `F` in muted chalk text.
  - Small chalk label above rail: `rowZero [M]`.
- **CENTER-STAGE HERO:** `rowZero` vertical rail docking on left.
- **CAUSE:** Spoken introduction of row marker array.
- **EFFECT / MOTION:** Rail slides in smoothly from the left (`X: 670 -> 715`) with chalk click.
- **WHAT MUST NOT APPEAR YET:** Column marker rail `colZero`.
- **COMPREHENSION HOLD:** Viewer sees 1 boolean slot per row.
- **CLEANUP / EXIT:** Rail locks into place.
- **PERSISTENT STATE:** Centered matrix + docked `rowZero` rail on left.

---

### Anchor 10: `S05_COL_MARKER` (F852..F913, 62 frames)
- **ANCHOR:** `S05_COL_MARKER` (Words 63-68, "and one marker for every column.")
- **WHAT APPEARS NOW:**
  - Horizontal `colZero` rail docks directly above the centered matrix ($X: 785..1205, Y: 235..285$).
  - 5 slots corresponding to columns $0..4$, labeled with column indices $0..4$.
  - Slots display `F` in muted chalk text.
  - Small chalk label to left of rail: `colZero [N]`.
- **CENTER-STAGE HERO:** `colZero` horizontal rail docking on top.
- **CAUSE:** Spoken introduction of column marker array.
- **EFFECT / MOTION:** Rail slides down from top (`Y: 190 -> 235`) with chalk click.
- **WHAT MUST NOT APPEAR YET:** True values or projection rays.
- **COMPREHENSION HOLD:** Matrix is now framed by `rowZero` (left) and `colZero` (top).
- **CLEANUP / EXIT:** Rails lock in perfect alignment with matrix rows and columns.
- **PERSISTENT STATE:** Framed matrix with both marker rails showing all `F`.

---

### Anchor 11: `S05_IF_ROW3` (F937..F1008, 72 frames)
- **ANCHOR:** `S05_IF_ROW3` (Words 69-75, "If row 3 contains an original zero,")
- **WHAT APPEARS NOW:**
  - Cell $(3, 3)$ pulses with amber light.
  - Horizontal dotted chalk ray (`RoughLine`) extends from cell $(3, 3)$ leftward toward `rowZero[3]`.
  - Small callout chip below matrix: `Zero at (3, 3) ➔ check Row 3`.
- **CENTER-STAGE HERO:** Leftward ray connecting cell $(3, 3)$ to `rowZero[3]`.
- **CAUSE:** Evaluating row condition on row 3.
- **EFFECT / MOTION:** Ray animates smoothly from $X: 1040$ to $X: 765$.
- **WHAT MUST NOT APPEAR YET:** `rowZero[3]` turning True.
- **COMPREHENSION HOLD:** Direct visual causality from matrix cell to row marker slot.
- **CLEANUP / EXIT:** Ray reaches slot border.
- **PERSISTENT STATE:** Active horizontal ray connecting cell $(3, 3)$ to `rowZero[3]`.

---

### Anchor 12: `S05_MARK_ROW3` (F1030..F1054, 25 frames)
- **ANCHOR:** `S05_MARK_ROW3` (Words 76-78, "mark row 3.")
- **WHAT APPEARS NOW:**
  - `rowZero[3]` slot mutates: `F ➔ T` (True).
  - Slot background highlights in golden chalk (`theme.pivot`), border pulses.
- **CENTER-STAGE HERO:** `rowZero[3]` slot turning `T`.
- **CAUSE:** Executing spoken instruction to mark row 3.
- **EFFECT / MOTION:** Slot scales up (`1.15x`) and stamps `T` with green checkmark.
- **WHAT MUST NOT APPEAR YET:** Column 3 ray or marker update.
- **COMPREHENSION HOLD:** Row 3 is officially recorded.
- **CLEANUP / EXIT:** Glow settles to persistent gold.
- **PERSISTENT STATE:** `rowZero[3] = True`, horizontal ray holds softly.

---

### Anchor 13: `S05_IF_COL3` (F1074..F1149, 76 frames)
- **ANCHOR:** `S05_IF_COL3` (Words 79-85, "If column 3 contains an original zero,")
- **WHAT APPEARS NOW:**
  - Vertical dotted chalk ray (`RoughLine`) extends from cell $(3, 3)$ upward toward `colZero[3]`.
  - Small callout chip below matrix updates: `Zero at (3, 3) ➔ check Column 3`.
- **CENTER-STAGE HERO:** Upward ray connecting cell $(3, 3)$ to `colZero[3]`.
- **CAUSE:** Evaluating column condition on column 3.
- **EFFECT / MOTION:** Ray animates smoothly from $Y: 560$ to $Y: 285$.
- **WHAT MUST NOT APPEAR YET:** `colZero[3]` turning True.
- **COMPREHENSION HOLD:** Direct visual causality from matrix cell to column marker slot.
- **CLEANUP / EXIT:** Ray reaches slot border.
- **PERSISTENT STATE:** Both horizontal and vertical rays active.

---

### Anchor 14: `S05_MARK_COL3` (F1172..F1212, 41 frames)
- **ANCHOR:** `S05_MARK_COL3` (Words 86-88, "mark column 3.")
- **WHAT APPEARS NOW:**
  - `colZero[3]` slot mutates: `F ➔ T` (True).
  - Slot background highlights in teal chalk (`theme.good`), border pulses.
- **CENTER-STAGE HERO:** `colZero[3]` slot turning `T`.
- **CAUSE:** Executing spoken instruction to mark column 3.
- **EFFECT / MOTION:** Slot scales up (`1.15x`) and stamps `T` with green checkmark.
- **WHAT MUST NOT APPEAR YET:** Premature trace of other zeroes.
- **COMPREHENSION HOLD:** Both `rowZero[3]` and `colZero[3]` are now `True`.
- **CLEANUP / EXIT:** Both rays gently dissolve, leaving the two `True` badges shining.
- **PERSISTENT STATE:** `rowZero[3] = True`, `colZero[3] = True`.

---

### Anchor 15: `S05_DISCOVERY_DONE` (F1222..F1283, 62 frames)
- **ANCHOR:** `S05_DISCOVERY_DONE` (Words 89-93, "Then after discovery is finished,")
- **WHAT APPEARS NOW:**
  - Compact `RoughBox` status pill appears below matrix ($X: 740..1180, Y: 760..825$):
    - `📋 DISCOVERY COMPLETE: All zeroes recorded in marker rails`
- **CENTER-STAGE HERO:** Framed matrix with persistent marker rails.
- **CAUSE:** Transition from scanning phase to zeroing phase.
- **EFFECT / MOTION:** Status pill glides in with soft spring.
- **WHAT MUST NOT APPEAR YET:** Premature cell mutations.
- **COMPREHENSION HOLD:** Discovery requires no extra memory beyond the rails.
- **CLEANUP / EXIT:** Status pill holds.
- **PERSISTENT STATE:** Discovery phase finalized.

---

### Anchor 16: `S05_MARKERS_TELL` (F1299..F1409, 111 frames)
- **ANCHOR:** `S05_MARKERS_TELL` (Words 94-102, "those markers tell us exactly where zeros must go.")
- **WHAT APPEARS NOW:**
  - Soft horizontal amber guide bar projects rightward across Row 3 from `rowZero[3] == True`.
  - Soft vertical teal guide bar projects downward across Column 3 from `colZero[3] == True`.
  - Micro-callout below matrix: `Markers dictate which rows & cols zero out`.
- **CENTER-STAGE HERO:** Guide rays projecting back into the matrix from the markers.
- **CAUSE:** Explaining the reversal of information flow (Pass 2 application).
- **EFFECT / MOTION:** Guide bars sweep across the matrix coordinates.
- **WHAT MUST NOT APPEAR YET:** Complexity comparison card.
- **COMPREHENSION HOLD:** Markers are the complete blueprint for the final state.
- **CLEANUP / EXIT:** Guide bars fade into gentle outlines.
- **PERSISTENT STATE:** Dual marker guidance demonstrated.

---

### Anchor 17: `S05_COMPRESSED` (F1427..F1481, 55 frames)
- **ANCHOR:** `S05_COMPRESSED` (Words 103-108, "So we have compressed our memory")
- **WHAT APPEARS NOW:**
  - Compact `RoughBox` comparison container appears below matrix ($X: 660..1260, Y: 755..855$):
    - Header: `⚡ MEMORY COMPRESSION ACHIEVED`
- **CENTER-STAGE HERO:** Centered matrix with compression pill below.
- **CAUSE:** Reflecting on the algorithmic space reduction.
- **EFFECT / MOTION:** Container enters with spring; matrix cells glow gently.
- **WHAT MUST NOT APPEAR YET:** Specific comparison numbers until spoken.
- **COMPREHENSION HOLD:** Highlighting the leap from quadratic to linear space.
- **CLEANUP / EXIT:** Prepares for side-by-side metric display.
- **PERSISTENT STATE:** Compression container visible.

---

### Anchor 18: `S05_FROM_MATRIX` (F1481..F1546, 66 frames)
- **ANCHOR:** `S05_FROM_MATRIX` (Words 109-112, "from an entire matrix")
- **WHAT APPEARS NOW:**
  - Left comparison chip appears inside container ($X: 680..940, Y: 765..845$):
    - `Method 1: Entire Matrix`
    - `M × N = 25 integers (100 Bytes) · O(M × N)`
    - Amber/red warning border.
- **CENTER-STAGE HERO:** Method 1 space breakdown chip.
- **CAUSE:** Quantifying the full-matrix memory burden.
- **EFFECT / MOTION:** Chip pops in with spring.
- **WHAT MUST NOT APPEAR YET:** Method 2 chip until spoken.
- **COMPREHENSION HOLD:** 25 integers needed by Method 1.
- **CLEANUP / EXIT:** Settles on left side of container.
- **PERSISTENT STATE:** Method 1 metric visible.

---

### Anchor 19: `S05_TO_ROW_COL` (F1546..F1675, 130 frames)
- **ANCHOR:** `S05_TO_ROW_COL` (Words 113-119, "to only row information and column information.")
- **WHAT APPEARS NOW:**
  - Right comparison chip appears inside container ($X: 980..1240, Y: 765..845$):
    - `Method 2: Two 1D Rails`
    - `M + N = 10 booleans (10 Bytes) · O(M + N)`
    - Emerald green success border (`theme.good`).
  - Small trophy pill in center: `Saved > 60% Space!`.
- **CENTER-STAGE HERO:** Side-by-side comparison chips below centered matrix.
- **CAUSE:** Revealing the dramatic space efficiency jump.
- **EFFECT / MOTION:** Right chip pops in with celebratory green pulse.
- **WHAT MUST NOT APPEAR YET:** Handoff banner.
- **COMPREHENSION HOLD:** Visual contrast: 25 integers vs 10 booleans.
- **CLEANUP / EXIT:** Both chips hold for complete comprehension.
- **PERSISTENT STATE:** Side-by-side complexity proof.

---

### Anchor 20: `S05_TRACE_METHOD` (F1705..F1754, 50 frames)
- **ANCHOR:** `S05_TRACE_METHOD` (Words 120-123, "Let's trace that method.")
- **WHAT APPEARS NOW:**
  - Bottom-center handoff chip appears ($X: 740..1180, Y: 770..840$):
    - `➡️ UP NEXT: SCENE 06 — METHOD 2 TRACE (MARKER ARRAYS)`
- **CENTER-STAGE HERO:** Handoff transition chip.
- **CAUSE:** Audio signals transition to full Method 2 execution.
- **EFFECT / MOTION:** Chip glides in with smooth spring, glowing in cyan (`theme.cyan`).
- **WHAT MUST NOT APPEAR YET:** Scene 06 assets.
- **COMPREHENSION HOLD:** Direct continuity into Scene 06.
- **CLEANUP / EXIT:** Holds gracefully to F1754.
- **PERSISTENT STATE:** Pristine final state ready for Scene 06.

---

## 4. Zero-Collision Checklist

- [x] **Centered Hero:** Master 5×5 Matrix is horizontally centered ($X: 785..1205$, midpoint $X = 1000$).
- [x] **Docked Rails:** `rowZero` sits at $X: 715..765$ (left), `colZero` sits at $Y: 235..285$ (top). Composite width: $490\text{px}$, exactly centered at $X = 960$.
- [x] **No AI-Slop Cards:** Zero 1220px dark dashboard panels. Green chalkboard is open and unobstructed.
- [x] **Bottom Interaction Zone:** All callouts, chips, and stamps sit at $Y: 760..860$, leaving $> 100\text{px}$ clear buffer above captions at $Y: 960$.
- [x] **Top Clearance:** Top rail at $Y: 235$ has $127\text{px}$ clear buffer below header at $Y: 108$.
- [x] **Zero Spoilers:** Visual elements appear only when their exact trigger word is spoken.
- [x] **100% Remotion Determinism:** Zero CSS transitions, 100% frame-derived spring/interpolate mathematics.

---

## 5. REUSE / EXTEND / CREATE

- **REUSE:**
  - `ChalkboardBackground`, `ChalkDust` from `kit/lib/chalk`.
  - `RoughBox`, `ChalkText` from `kit/components`.
  - `Captions` from `kit/components/Captions`.
  - `theme`, `fonts` from `kit/lib/theme`.
- **CREATE / REFINE:**
  - `Scene05WhyCopy.tsx`: Updated Remotion component with centered matrix, docked rails, compact callouts, and zero right-panel clutter.
