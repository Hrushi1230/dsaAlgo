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
It answers the question: *What information do we truly need to remember?*
1. Proves that storing non-zero numbers is completely redundant.
2. Derives the **Two Fundamental Facts**:
   - Fact 1: Which rows contain a zero?
   - Fact 2: Which columns contain a zero?
3. Introduces 1D Marker Arrays:
   - `rowZero` of size $M$
   - `colZero` of size $N$
4. Demonstrates on interior zero $(3, 3)$:
   - `rowZero[3] = True`
   - `colZero[3] = True`
5. Quantifies memory compression: $O(M \times N) \to O(M + N)$ (from 25 integers to 10 booleans).
6. Hands off directly to Scene 06 (Method 2 Trace).

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Top Header:** $Y: 42..108$ (`fonts.display`, 44px title, category pill, method badge).
- **Left Stage — Matrix & Marker Arrays ($X: 360..880$, $Y: 130..560$):**
  - Matrix centered at $X: 520, Y: 220$ ($314\text{px} \times 314\text{px}$).
  - `colZero` array docks above matrix at $X: 520, Y: 140$ ($314\text{px} \times 44\text{px}$).
  - `rowZero` array docks left of matrix at $X: 430, Y: 220$ ($44\text{px} \times 314\text{px}$).
- **Right Stage — Insight Cards & Memory Compression ($X: 980..1820$, $Y: 140..760$):**
  - Width: 840px, Height: 620px.
  - $F0..F350$: Big Question Card ("Do we need to remember every number?") + "NO." Stamp.
  - $F354..F675$: "Two Facts" Breakdown Cards.
  - $F676..F1212$: Marker Array Activation & Projection mechanics from $(3, 3)$.
  - $F1222..F1700$: Memory Compression Infographic ($O(M \times N) \to O(M + N)$).
  - $F1705..F1754$: Method 2 Trace Handoff Banner.
- **Bottom Clearance:**
  - Panels end at $Y: 760$.
  - Bottom Captions sit at $Y: 980$.
  - Net clear vertical space: $980 - 760 = 220\text{px}$ (well above the required $\ge 140\text{px}$).

---

## 3. Framewise Anchor Choreography (20 Anchors)

### Anchor 1: `S05_SUPPOSE` (F0..F149, 150 frames)
- **ANCHOR:** `S05_SUPPOSE` (Words 0-10, "Suppose we find an original zero at row 3, column 3.")
- **WHAT APPEARS NOW:**
  - Blackboard background, dust, header.
  - 5×5 Master Matrix appears at $X: 520, Y: 220$.
  - Cell $(3, 3)$ pulses with amber beacon glow and pointer arrow: `ORIGINAL ZERO (3, 3)`.
- **CENTER-STAGE HERO:** Cell $(3, 3)$ in matrix.
- **CAUSE:** Narrative sets up the thought experiment.
- **EFFECT / MOTION:** Cell $(3, 3)$ scales up slightly (`1.1x`) with radial wave ripple.
- **WHAT MUST NOT APPEAR YET:** Marker arrays, memory compression comparison.
- **COMPREHENSION HOLD:** Clear view of cell $(3, 3)$ with value 0.
- **CLEANUP / EXIT:** Arrow docks smoothly into cell label.
- **PERSISTENT STATE:** Matrix active, cell $(3, 3)$ highlighted.

---

### Anchor 2: `S05_NEED_EVERY` (F150..F311, 162 frames)
- **ANCHOR:** `S05_NEED_EVERY` (Words 11-22, "Do we really need to remember every number in the original matrix?")
- **WHAT APPEARS NOW:**
  - Right card appears: "DO WE REALLY NEED TO REMEMBER EVERY NUMBER?".
  - Non-zero numbers in matrix (1, 2, 4, 5, 6, 7...) flicker with question marks.
- **CENTER-STAGE HERO:** Right side contemplation card.
- **CAUSE:** Provoking critical thinking about memory overhead.
- **EFFECT / MOTION:** Card slides in from right (`X: 1020 -> 980`) with soft spring.
- **WHAT MUST NOT APPEAR YET:** The answer "NO".
- **COMPREHENSION HOLD:** Viewer pauses to evaluate why 22 non-zero numbers are copied.
- **CLEANUP / EXIT:** Card holds for impact.
- **PERSISTENT STATE:** Question card visible.

---

### Anchor 3: `S05_NO` (F312..F353, 42 frames)
- **ANCHOR:** `S05_NO` (Word 23, "No.")
- **WHAT APPEARS NOW:**
  - Massive red/gold chalk stamp over question card: `❌ NO.`
  - Decisive chalk sound / impact vibration.
- **CENTER-STAGE HERO:** `❌ NO.` stamp.
- **CAUSE:** Definite rejection of full-matrix copying.
- **EFFECT / MOTION:** Stamp drops from `scale: 1.4 -> 1.0` with screen shake.
- **WHAT MUST NOT APPEAR YET:** Marker array details.
- **COMPREHENSION HOLD:** Dramatic pause after "No."
- **CLEANUP / EXIT:** Stamp fades into top-right corner of card.
- **PERSISTENT STATE:** Question resolved negatively.

---

### Anchor 4: `S05_TWO_FACTS` (F354..F454, 101 frames)
- **ANCHOR:** `S05_TWO_FACTS` (Words 24-32, "For the final answer, we only need two facts,")
- **WHAT APPEARS NOW:**
  - Right panel transforms into "THE TWO ESSENTIAL FACTS".
  - Two empty bullet boxes appear with golden chalk borders.
- **CENTER-STAGE HERO:** "The Two Essential Facts" card header.
- **CAUSE:** Structuring the core realization.
- **EFFECT / MOTION:** Header shines with golden underline sweep.
- **WHAT MUST NOT APPEAR YET:** Bullet text until spoken.
- **COMPREHENSION HOLD:** Anticipating the two facts.
- **CLEANUP / EXIT:** Boxes ready for bullet fill.
- **PERSISTENT STATE:** Two-fact template visible.

---

### Anchor 5: `S05_WHICH_ROWS` (F455..F520, 66 frames)
- **ANCHOR:** `S05_WHICH_ROWS` (Words 33-37, "which rows contained a zero,")
- **WHAT APPEARS NOW:**
  - Fact 1 appears: `1. WHICH ROWS CONTAINED A ZERO?` (Cyan).
  - Horizontal blue bracket highlights Row 3 in matrix.
- **CENTER-STAGE HERO:** Fact 1 bullet card & Row 3 highlight.
- **CAUSE:** Identifying row-level zero dependence.
- **EFFECT / MOTION:** Text slides in; horizontal blue glow tracks across row 3.
- **WHAT MUST NOT APPEAR YET:** Fact 2 text.
- **COMPREHENSION HOLD:** Row 3 zero needs row 3 zeroed.
- **CLEANUP / EXIT:** Row 3 bracket settles.
- **PERSISTENT STATE:** Fact 1 active.

---

### Anchor 6: `S05_WHICH_COLS` (F521..F598, 78 frames)
- **ANCHOR:** `S05_WHICH_COLS` (Words 38-43, "and which columns contained a zero.")
- **WHAT APPEARS NOW:**
  - Fact 2 appears: `2. WHICH COLUMNS CONTAINED A ZERO?` (Green).
  - Vertical purple bracket highlights Col 3 in matrix.
- **CENTER-STAGE HERO:** Fact 2 bullet card & Col 3 highlight.
- **CAUSE:** Identifying column-level zero dependence.
- **EFFECT / MOTION:** Text slides in; vertical purple glow tracks down col 3.
- **WHAT MUST NOT APPEAR YET:** Marker array introduction.
- **COMPREHENSION HOLD:** Intersection forms a crosshair at $(3, 3)$.
- **CLEANUP / EXIT:** Both facts illuminated together.
- **PERSISTENT STATE:** Both facts active.

---

### Anchor 7: `S05_LESS_INFO` (F599..F675, 77 frames)
- **ANCHOR:** `S05_LESS_INFO` (Words 44-48, "That is much less information.")
- **WHAT APPEARS NOW:**
  - Summary badge: `💡 DRAMATICALLY LESS INFORMATION NEEDED`.
  - Contrast tag: "2 Boolean Sets vs 25 Integers".
- **CENTER-STAGE HERO:** Summary badge.
- **CAUSE:** Reinforcing the scale of simplification.
- **EFFECT / MOTION:** Badge glows with soft green energy pulse.
- **WHAT MUST NOT APPEAR YET:** Array strips.
- **COMPREHENSION HOLD:** Recognizing that row/col lists require far less space.
- **CLEANUP / EXIT:** Docks below facts.
- **PERSISTENT STATE:** Two facts + summary badge visible.

---

### Anchor 8: `S05_INSTEAD_COPY` (F676..F759, 84 frames)
- **ANCHOR:** `S05_INSTEAD_COPY` (Words 49-54, "Instead of copying the whole matrix,")
- **WHAT APPEARS NOW:**
  - Ghost outline of a 5x5 copied matrix fades out with red cross `⊘`.
  - "DISCARD FULL MATRIX CLONE".
- **CENTER-STAGE HERO:** Discarded matrix ghost.
- **CAUSE:** Explicitly rejecting Method 1 memory model.
- **EFFECT / MOTION:** Ghost dissolves into dust particles.
- **WHAT MUST NOT APPEAR YET:** Row/col strips.
- **COMPREHENSION HOLD:** Final farewell to Method 1's full duplicate.
- **CLEANUP / EXIT:** Clean space for marker arrays.
- **PERSISTENT STATE:** Matrix at center stage ready for markers.

---

### Anchor 9: `S05_ROW_MARKER` (F760..F851, 92 frames)
- **ANCHOR:** `S05_ROW_MARKER` (Words 55-62, "we can keep one marker for every row,")
- **WHAT APPEARS NOW:**
  - Vertical `rowZero` strip appears along left edge of matrix ($X: 430, Y: 220$).
  - 5 slots: `[0], [1], [2], [3], [4]`, all initially showing `F` (False) in grey.
  - Label: `rowZero [M]`.
- **CENTER-STAGE HERO:** Vertical `rowZero` strip.
- **CAUSE:** Spoken introduction of row marker array.
- **EFFECT / MOTION:** Strip slides in from left (`X: 390 -> 430`) with chalk click.
- **WHAT MUST NOT APPEAR YET:** Column marker strip.
- **COMPREHENSION HOLD:** 5 slots for 5 rows.
- **CLEANUP / EXIT:** Strip docks securely against matrix.
- **PERSISTENT STATE:** `rowZero` strip visible.

---

### Anchor 10: `S05_COL_MARKER` (F852..F936, 85 frames)
- **ANCHOR:** `S05_COL_MARKER` (Words 63-68, "and one marker for every column.")
- **WHAT APPEARS NOW:**
  - Horizontal `colZero` strip appears along top edge of matrix ($X: 520, Y: 140$).
  - 5 slots: `[0], [1], [2], [3], [4]`, all initially showing `F` (False) in grey.
  - Label: `colZero [N]`.
- **CENTER-STAGE HERO:** Horizontal `colZero` strip.
- **CAUSE:** Spoken introduction of column marker array.
- **EFFECT / MOTION:** Strip slides down from top (`Y: 100 -> 140`) with chalk click.
- **WHAT MUST NOT APPEAR YET:** Marker updates to `T`.
- **COMPREHENSION HOLD:** Matrix now framed by row strip on left and col strip on top.
- **CLEANUP / EXIT:** Settles into pristine dual-marker layout.
- **PERSISTENT STATE:** Both marker strips docked, all `F`.

---

### Anchor 11: `S05_IF_ROW3` (F937..F1029, 93 frames)
- **ANCHOR:** `S05_IF_ROW3` (Words 69-75, "If row 3 contains an original zero,")
- **WHAT APPEARS NOW:**
  - Cell $(3, 3)$ pulses with amber light.
  - Horizontal projection arrow originates at $(3, 3)$ and extends leftward toward `rowZero[3]`.
- **CENTER-STAGE HERO:** Leftward arrow from $(3, 3)$ to row marker strip.
- **CAUSE:** Evaluating row condition on row 3.
- **EFFECT / MOTION:** Dotted chalk ray draws smoothly from $X: 520+3\times 64$ to $X: 430$.
- **WHAT MUST NOT APPEAR YET:** Marker turning True.
- **COMPREHENSION HOLD:** Direct causal link between cell $(3, 3)$ and row index 3.
- **CLEANUP / EXIT:** Ray reaches `rowZero[3]`.
- **PERSISTENT STATE:** Ray connected.

---

### Anchor 12: `S05_MARK_ROW3` (F1030..F1073, 44 frames)
- **ANCHOR:** `S05_MARK_ROW3` (Words 76-78, "mark row 3.")
- **WHAT APPEARS NOW:**
  - `rowZero[3]` transforms: `F -> T` (True).
  - Slot background flashes in Sunburst Gold (`#FFD166`), border glows.
- **CENTER-STAGE HERO:** `rowZero[3]` changing to `T`.
- **CAUSE:** Executing spoken command to mark row 3.
- **EFFECT / MOTION:** Slot scales up (`1.2x`) and stamps `T` with green checkmark.
- **WHAT MUST NOT APPEAR YET:** Column 3 projection.
- **COMPREHENSION HOLD:** Row 3 is officially flagged.
- **CLEANUP / EXIT:** Glow softens to persistent gold.
- **PERSISTENT STATE:** `rowZero[3] = True`.

---

### Anchor 13: `S05_IF_COL3` (F1074..F1171, 98 frames)
- **ANCHOR:** `S05_IF_COL3` (Words 79-85, "If column 3 contains an original zero,")
- **WHAT APPEARS NOW:**
  - Vertical projection arrow originates at $(3, 3)$ and extends upward toward `colZero[3]`.
- **CENTER-STAGE HERO:** Upward arrow from $(3, 3)$ to column marker strip.
- **CAUSE:** Evaluating column condition on column 3.
- **EFFECT / MOTION:** Dotted chalk ray draws smoothly upward from $Y: 220+3\times 64$ to $Y: 140$.
- **WHAT MUST NOT APPEAR YET:** Column marker turning True.
- **COMPREHENSION HOLD:** Direct causal link between cell $(3, 3)$ and column index 3.
- **CLEANUP / EXIT:** Ray reaches `colZero[3]`.
- **PERSISTENT STATE:** Upward ray connected.

---

### Anchor 14: `S05_MARK_COL3` (F1172..F1221, 50 frames)
- **ANCHOR:** `S05_MARK_COL3` (Words 86-88, "mark column 3.")
- **WHAT APPEARS NOW:**
  - `colZero[3]` transforms: `F -> T` (True).
  - Slot background flashes in Sunburst Gold (`#FFD166`), border glows.
- **CENTER-STAGE HERO:** `colZero[3]` changing to `T`.
- **CAUSE:** Executing spoken command to mark column 3.
- **EFFECT / MOTION:** Slot scales up (`1.2x`) and stamps `T` with green checkmark.
- **WHAT MUST NOT APPEAR YET:** Full sweep explanation.
- **COMPREHENSION HOLD:** Both `rowZero[3]` and `colZero[3]` are now `True`.
- **CLEANUP / EXIT:** Both markers shine in steady gold.
- **PERSISTENT STATE:** `rowZero[3] = True`, `colZero[3] = True`.

---

### Anchor 15: `S05_DISCOVERY_DONE` (F1222..F1298, 77 frames)
- **ANCHOR:** `S05_DISCOVERY_DONE` (Words 89-93, "Then after discovery is finished,")
- **WHAT APPEARS NOW:**
  - Right panel updates: "DISCOVERY PHASE COMPLETE".
  - Subtitle: "All cells scanned, all original zeros marked in rowZero and colZero".
- **CENTER-STAGE HERO:** Discovery phase completion banner.
- **CAUSE:** Transitioning from discovery pass to modification pass.
- **EFFECT / MOTION:** Both rays fade out, leaving active `True` marker badges.
- **WHAT MUST NOT APPEAR YET:** Memory compression numbers.
- **COMPREHENSION HOLD:** Discovery is purely non-destructive recording.
- **CLEANUP / EXIT:** Clean layout for zero placement.
- **PERSISTENT STATE:** Discovery phase locked.

---

### Anchor 16: `S05_MARKERS_TELL` (F1299..F1426, 128 frames)
- **ANCHOR:** `S05_MARKERS_TELL` (Words 94-102, "those markers tell us exactly where zeros must go.")
- **WHAT APPEARS NOW:**
  - Blue sweep line projects across Row 3 from `rowZero[3] == True`.
  - Purple sweep line projects down Column 3 from `colZero[3] == True`.
  - Label: "ROW 3 & COL 3 WILL ZERO OUT IN PASS 2".
- **CENTER-STAGE HERO:** Dual projection sweep lines from markers.
- **CAUSE:** Explaining how markers guide final zero assignment.
- **EFFECT / MOTION:** Sweep lines illuminate the crosshair across the entire matrix.
- **WHAT MUST NOT APPEAR YET:** Memory comparison chart.
- **COMPREHENSION HOLD:** The markers contain 100% of the information required to solve the problem.
- **CLEANUP / EXIT:** Lines fade into soft highlights.
- **PERSISTENT STATE:** Marker guidance proven.

---

### Anchor 17: `S05_COMPRESSED` (F1427..F1480, 54 frames)
- **ANCHOR:** `S05_COMPRESSED` (Words 103-108, "So we have compressed our memory")
- **WHAT APPEARS NOW:**
  - Right panel transforms into "SPACE COMPLEXITY BREAKTHROUGH".
  - Large compression clamp icon compresses a memory block.
- **CENTER-STAGE HERO:** Space complexity compression header.
- **CAUSE:** Culmination of the space reduction analysis.
- **EFFECT / MOTION:** Memory block visually shrinks under clamp.
- **WHAT MUST NOT APPEAR YET:** Formula breakdown until spoken.
- **COMPREHENSION HOLD:** Anticipating quantitative comparison.
- **CLEANUP / EXIT:** Clamp settles.
- **PERSISTENT STATE:** Compression view active.

---

### Anchor 18: `S05_FROM_MATRIX` (F1481..F1545, 65 frames)
- **ANCHOR:** `S05_FROM_MATRIX` (Words 109-112, "from an entire matrix")
- **WHAT APPEARS NOW:**
  - Red comparison card appears:
    - `METHOD 1 (FULL COPY):`
    - `M × N = 5 × 5 = 25 Integers`
    - `Auxiliary Space: O(M × N)`
- **CENTER-STAGE HERO:** Method 1 red cost card.
- **CAUSE:** Documenting baseline full-copy cost.
- **EFFECT / MOTION:** Card slides in with amber/red border highlight.
- **WHAT MUST NOT APPEAR YET:** Method 2 green card.
- **COMPREHENSION HOLD:** Reviewing the 25-integer allocation.
- **CLEANUP / EXIT:** Card docks on top.
- **PERSISTENT STATE:** Method 1 cost displayed.

---

### Anchor 19: `S05_TO_ROW_COL` (F1546..F1704, 159 frames)
- **ANCHOR:** `S05_TO_ROW_COL` (Words 113-119, "to only row information and column information.")
- **WHAT APPEARS NOW:**
  - Green breakthrough card appears below Method 1:
    - `METHOD 2 (MARKER ARRAYS):`
    - `M + N = 5 + 5 = 10 Booleans`
    - `Auxiliary Space: O(M + N)`
  - Trophy / checkmark badge: `SAVED > 60% MEMORY!`.
- **CENTER-STAGE HERO:** Method 2 green breakthrough card.
- **CAUSE:** Highlighting the algorithmic efficiency jump from $O(MN)$ to $O(M+N)$.
- **EFFECT / MOTION:** Card slides in with spring; celebratory green glow pulses.
- **WHAT MUST NOT APPEAR YET:** Handoff banner.
- **COMPREHENSION HOLD:** Direct comparison: $O(M \times N)$ vs $O(M + N)$.
- **CLEANUP / EXIT:** Both cards remain visible for side-by-side study.
- **PERSISTENT STATE:** Side-by-side complexity proof.

---

### Anchor 20: `S05_TRACE_METHOD` (F1705..F1754, 50 frames)
- **ANCHOR:** `S05_TRACE_METHOD` (Words 120-123, "Let's trace that method.")
- **WHAT APPEARS NOW:**
  - Bottom-center handoff banner:
    - `➡️ UP NEXT: SCENE 06 — METHOD 2 TRACE (MARKER ARRAYS)`
- **CENTER-STAGE HERO:** Handoff banner.
- **CAUSE:** Scene transition to the full trace.
- **EFFECT / MOTION:** Banner glides up with spring (`Y: 760 -> 720`), glowing in cyan.
- **WHAT MUST NOT APPEAR YET:** Scene 06 assets.
- **COMPREHENSION HOLD:** Clear bridge to the next scene.
- **CLEANUP / EXIT:** Holds gracefully to F1754.
- **PERSISTENT STATE:** Clean final state.

---

## 4. Zero-Collision Checklist

- [x] Left stage: Matrix ($X: 520, Y: 220$), `rowZero` ($X: 430, Y: 220$), `colZero` ($X: 520, Y: 140$) occupy $X: 430..834, Y: 140..534$.
- [x] Right stage: Insight cards occupy $X: 980..1820, Y: 140..760$. Central gap is $980 - 834 = 146\text{px}$.
- [x] Bottom clearance: panels stop at $Y: 760$, captions sit at $Y: 980$ ($220\text{px}$ clear buffer).
- [x] Header at $Y: 42..108$ has clear margin above arrays.
- [x] Zero text overlapping, zero CSS animations, 100% Remotion frame determinism.

---

## 5. REUSE / EXTEND / CREATE

- **REUSE:**
  - `ChalkboardBackground`, `ChalkFilters`, `CHALK_FILTER_ID` from `kit/lib/chalk`.
  - `Captions` from `kit/components/Captions`.
  - `theme`, `fonts` from `kit/lib/theme`.
- **CREATE:**
  - `Scene05WhyCopy.tsx`: Remotion composition for Scene 05 with dynamic 1D marker arrays, projection rays, side-by-side complexity cards, and transition banner.
