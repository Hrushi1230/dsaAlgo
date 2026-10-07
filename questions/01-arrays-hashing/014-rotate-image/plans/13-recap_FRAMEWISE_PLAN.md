# Scene 13 — Full Evolution Recap & Master Roadmap Handoff
## Question 014: Rotate Image (LeetCode 48) · Pattern 01 — Arrays & Hashing
### Framewise Scene Choreography Plan (AGENTS.md Rule 16 Schema)

- **Total Frames:** 2,803 frames @ 30 FPS (93.440s)
- **Audio File:** `public/audio/014/13-recap.mp3`
- **Sync Source:** `sync/13-recap.json` & `sync/13-all-words.txt` (167 words)
- **Design Tokens:** 100% `@dsa/kit` components (`RoughBox`, `ChalkText`, `RoughLine`, `MasterRoadmapV2`, `Captions`, `theme`, `fonts`)
- **Zero-Void & Zero-Collision Law:** Center stage vertically balanced across Y: 130..700; > 250px clearance above captions at Y: 960..1010.
- **Strict No-Spoiler Policy:** Methods, formulas, takeaways, and roadmap status badges appear strictly when spoken in audio.

---

## High-Level Scene Structure (4 Acts)

1. **Act 1: Core Mathematical Truth & 3 Solutions (F0..F1249 · 41.63s)**
   - F0..F454: Coordinate mapping law `(r, c) → (c, n - 1 - r)` displayed prominently in crisp chalk notation.
   - F455..F758: Method 1 (Direct Destination + Extra Matrix O(n²) space).
   - F759..F962: Method 2 (4-Way In-Place Cycles O(1) space).
   - F963..F1249: Method 3 (Transpose + Reverse Every Row O(1) space).
2. **Act 2: Transferable Engineering Intuition (F1250..F2137 · 29.57s)**
   - F1250..F1563: "Bigger than rotate image... Do not start by memorizing code."
   - F1564..F1707: "First ask: Where should one coordinate move?"
   - F1708..F1983: Sequential reveal of the 3 structural insights unlocked by coordinate mapping:
     - 1. Cycle (F1819)
     - 2. Symmetry (F1854)
     - 3. Sequence of simpler transformations (F1888)
   - F1984..F2137: "Code comes from logic, not memorization."
3. **Act 3: Q14 Completion & Course Roadmap Handoff (F2138..F2803 · 22.17s)**
   - F2138..F2264: Question 14 Rotate Image status switches to `COMPLETED ✓`.
   - F2283..F2545: Course progress updates from `13 / 227` to `14 / 227`.
   - F2559..F2803: Curriculum spotlight transitions to Question 15: Spiral Matrix (`UP NEXT ▶`).

---

## Detailed 9-Field Framewise Anchors

### Anchor 01: S13_INTRO (F0..F49)
- **ANCHOR:** `Let's finish.` (Words 0..1, 0ms–980ms, F0..F29, hold to F49)
- **WHAT APPEARS NOW:** Chalkboard background, top metadata bar (`01 · ARRAYS & HASHING`, `ROTATE IMAGE · FINAL RECAP`), subtle chalk dust.
- **CENTER-STAGE HERO:** Opening lesson recap header.
- **CAUSE:** Audio initiates final recap.
- **EFFECT / MOTION:** Top header settles gently.
- **WHAT MUST NOT APPEAR YET:** Coordinate formula, methods, or roadmap.
- **COMPREHENSION HOLD:** F30..F49 (quiet hold before coordinate rule).
- **CLEANUP / EXIT:** Center stage ready for coordinate mapping.
- **PERSISTENT STATE:** Clean chalkboard stage.

### Anchor 02: S13_COORD_MAPPING (F50..F454)
- **ANCHOR:** `With the main idea, for a 90 degree clockwise rotation, a value at row R column C moves to row C column N minus 1 minus R.` (Words 2..28, 1680ms–14460ms, F50..F434, hold to F454)
  - Sub-anchor F50..F204: `With the main idea, for a 90 degree clockwise rotation...` -> Prompt box `90° CLOCKWISE ROTATION LAW` appears.
  - Sub-anchor F205..F292: `a value at row R column C...` -> Source coordinate `(r, c)` drawn with `RoughBox` outline in cyan.
  - Sub-anchor F293..F434: `moves to row C column N minus 1 minus R.` -> Arrow `→` draws, destination coordinate `(c, n - 1 - r)` boxed in gold (`theme.pivot`).
- **WHAT APPEARS NOW:** The universal coordinate transformation equation: `(r, c)  ──→  (c, n - 1 - r)`.
- **CENTER-STAGE HERO:** Coordinate transformation formula.
- **CAUSE:** Spoken explanation of the foundation behind all 3 solutions.
- **EFFECT / MOTION:** Left source tag appears, arrow extends, destination resolves.
- **WHAT MUST NOT APPEAR YET:** Method boxes 1, 2, 3.
- **COMPREHENSION HOLD:** F435..F454 (audio pause before solution breakdown).
- **CLEANUP / EXIT:** Coordinate formula compacts and docks upward (Y: 130..220) to make room for 3 solution columns below.
- **PERSISTENT STATE:** Coordinate law anchored at top center.

### Anchor 03: S13_THREE_SOLUTIONS_INTRO (F455..F616)
- **ANCHOR:** `From that one coordinate truth, we found three different solutions.` (Words 29..38, 15180ms–19800ms, F455..F594, hold to F616)
- **WHAT APPEARS NOW:** Three empty vertical blueprint slots (X: 160, X: 710, X: 1260, Y: 260..680) outline via subtle chalk dashed boundaries.
- **CENTER-STAGE HERO:** 3-solution comparative layout framework.
- **CAUSE:** Narration introduces the three approaches.
- **EFFECT / MOTION:** 3 columns prepare their slots.
- **WHAT MUST NOT APPEAR YET:** Method titles, details, or complexities.
- **COMPREHENSION HOLD:** F595..F616.
- **CLEANUP / EXIT:** Slot 1 ready for activation.
- **PERSISTENT STATE:** 3 column scaffolds visible.

### Anchor 04: S13_METHOD_1 (F617..F758)
- **ANCHOR:** `Method 1, use the destination directly, with an extra matrix.` (Words 39..48, 20560ms–25300ms, F617..F759)
  - Sub-anchor F617..F649: `Method 1,` -> Column 1 badge `METHOD 1` illuminates in cyan.
  - Sub-anchor F650..F720: `use the destination directly...` -> Description: `Direct mapping into fresh grid`.
  - Sub-anchor F721..F758: `with an extra matrix.` -> Box: `aux[c][n-1-r] = matrix[r][c]`, Space badge: `O(n²) EXTRA SPACE` (amber warning).
- **WHAT APPEARS NOW:** Complete Method 1 summary box in Column 1.
- **CENTER-STAGE HERO:** Method 1 card with O(n²) space callout.
- **CAUSE:** Narration describes Method 1.
- **EFFECT / MOTION:** Card draws with `RoughBox`, chalk text writes in.
- **WHAT MUST NOT APPEAR YET:** Method 2 or Method 3 details.
- **COMPREHENSION HOLD:** None (flows directly into Method 2).
- **CLEANUP / EXIT:** Method 1 settles to static readable state.
- **PERSISTENT STATE:** Method 1 fully displayed.

### Anchor 05: S13_METHOD_2 (F759..F962)
- **ANCHOR:** `Method 2, notice that connected destination form four position cycles.` (Words 49..58, 25300ms–31620ms, F759..F949, hold to F962)
  - Sub-anchor F759..F810: `Method 2,` -> Column 2 badge `METHOD 2` illuminates in yellow (`theme.pivot`).
  - Sub-anchor F811..F949: `notice that connected destination form four position cycles.` -> Description: `4-way geometric cycles in-place`. Space badge: `O(1) IN-PLACE` (emerald green).
- **WHAT APPEARS NOW:** Complete Method 2 summary box in Column 2 with 4-cycle loop icon/mini diagram.
- **CENTER-STAGE HERO:** Method 2 4-way cycle summary.
- **CAUSE:** Narration describes Method 2.
- **EFFECT / MOTION:** Card 2 draws via `RoughBox`, 4-step cycle badge highlights.
- **WHAT MUST NOT APPEAR YET:** Method 3 details.
- **COMPREHENSION HOLD:** F950..F962.
- **CLEANUP / EXIT:** Method 2 settles.
- **PERSISTENT STATE:** Methods 1 and 2 visible.

### Anchor 06: S13_METHOD_3 (F963..F1249)
- **ANCHOR:** `And method 3, split the same mapping into two simpler transformations. Transpose, then reverse every row.` (Words 59..74, 32100ms–41300ms, F963..F1239, hold to F1249)
  - Sub-anchor F963..F1001: `And method 3,` -> Column 3 badge `METHOD 3` illuminates in green (`theme.good`).
  - Sub-anchor F1002..F1131: `split the same mapping into two simpler transformations.` -> Subtitle: `2-Stage Geometric Decomposition`.
  - Sub-anchor F1132..F1179: `Transpose,` -> Step 1 box: `1. Transpose: (r, c) ↔ (c, r)`.
  - Sub-anchor F1180..F1239: `then reverse every row.` -> Step 2 box: `2. Reverse: c ↔ n - 1 - c`. Space badge: `O(1) IN-PLACE · OPTIMAL`.
- **WHAT APPEARS NOW:** Complete Method 3 summary box with the 2-step decomposition.
- **CENTER-STAGE HERO:** Method 3 optimal 2-step decomposition.
- **CAUSE:** Narration describes Method 3.
- **EFFECT / MOTION:** Step 1 and Step 2 sequentially draw.
- **WHAT MUST NOT APPEAR YET:** Big picture / transferable pattern.
- **COMPREHENSION HOLD:** F1240..F1249.
- **CLEANUP / EXIT:** Entire 3-solution comparison fades out smoothly to transition to Act 2.
- **PERSISTENT STATE:** All 3 methods concluded.

---

### Anchor 07: S13_LESSON_BIGGER (F1250..F1563)
- **ANCHOR:** `The most important lesson is bigger than rotate image. When a matrix transformation looks confusing, do not start by memorizing code.` (Words 75..95, 41680ms–51560ms, F1250..F1547, hold to F1563)
  - Sub-anchor F1250..F1377: `The most important lesson is bigger than rotate image.` -> Hero central prompt banner: `ENGINEERING INTUITION · THE TRANSFERABLE PATTERN`.
  - Sub-anchor F1378..F1547: `When a matrix transformation looks confusing, do not start by memorizing code.` -> Warning box with red/amber strike-through: `✗ DO NOT MEMORIZE CODE LOOPS`.
- **WHAT APPEARS NOW:** Big picture takeaway card with anti-memorization rule.
- **CENTER-STAGE HERO:** Anti-memorization engineering principle.
- **CAUSE:** Narration transitions from question mechanics to higher-order problem-solving skills.
- **EFFECT / MOTION:** Large hand-drawn banner draws via `RoughBox`, cross-out mark animates over "memorizing code".
- **WHAT MUST NOT APPEAR YET:** The 3 outcome branches.
- **COMPREHENSION HOLD:** F1548..F1563.
- **CLEANUP / EXIT:** Banner shifts up to Y: 150 to anchor the tree diagram below.
- **PERSISTENT STATE:** Takeaway banner active.

### Anchor 08: S13_FIRST_ASK (F1564..F1707)
- **ANCHOR:** `First ask, where should one coordinate move?` (Words 96..102, 52120ms–56200ms, F1564..F1686, hold to F1707)
- **WHAT APPEARS NOW:** Central question block: `Step 1: Track a Single Coordinate (r, c) ──→ (r', c')`.
- **CENTER-STAGE HERO:** The single-coordinate principle.
- **CAUSE:** Narration poses the foundational question.
- **EFFECT / MOTION:** Question box draws in vivid chalk cyan.
- **WHAT MUST NOT APPEAR YET:** The 3 outcome cards (Cycle, Symmetry, Decomposition).
- **COMPREHENSION HOLD:** F1687..F1707.
- **CLEANUP / EXIT:** Downward connecting arrows prepare to branch into 3 paths.
- **PERSISTENT STATE:** Step 1 question box locked at center stage.

### Anchor 09: S13_REVEAL_CYCLE (F1708..F1853)
- **ANCHOR:** `Once you know the coordinate mapping, it may reveal a cycle,` (Words 103..113, 56940ms–61540ms, F1708..F1846, hold to F1853)
  - At F1819 (`a cycle`): Branch 1 draws to the left (X: 180, Y: 430..620).
  - Title: `1. CYCLES`
  - Formula: `4-way or k-way orbits`
  - Technique: `In-place cyclic swaps with temp`
- **WHAT APPEARS NOW:** Branch 1 (Cyclic Swaps) revealed.
- **CENTER-STAGE HERO:** The Cycle outcome box.
- **CAUSE:** Narration articulates the first structural pattern.
- **EFFECT / MOTION:** Branch line draws, box pops in.
- **WHAT MUST NOT APPEAR YET:** Symmetry or Sequence boxes.
- **COMPREHENSION HOLD:** F1847..F1853.
- **CLEANUP / EXIT:** Branch 1 stays locked.
- **PERSISTENT STATE:** Branch 1 visible.

### Anchor 10: S13_REVEAL_SYMMETRY (F1854..F1887)
- **ANCHOR:** `a symmetry,` (Words 114..115, 61800ms–62360ms, F1854..F1871, hold to F1887)
  - At F1854: Center branch 2 draws (X: 710, Y: 430..620).
  - Title: `2. SYMMETRIES`
  - Formula: `Diagonals & Axes`
  - Technique: `Transpose (main/anti) & Reflections (H/V)`
- **WHAT APPEARS NOW:** Branch 2 (Symmetries & Reflections) revealed.
- **CENTER-STAGE HERO:** The Symmetry outcome box.
- **CAUSE:** Narration articulates the second structural pattern.
- **EFFECT / MOTION:** Center vertical branch line draws, box pops in.
- **WHAT MUST NOT APPEAR YET:** Sequence of simpler transformations box.
- **COMPREHENSION HOLD:** F1872..F1887.
- **CLEANUP / EXIT:** Branch 2 stays locked.
- **PERSISTENT STATE:** Branches 1 and 2 visible.

### Anchor 11: S13_REVEAL_DECOMPOSITION (F1888..F1983)
- **ANCHOR:** `or a sequence of simpler transformations.` (Words 116..121, 62940ms–65340ms, F1888..F1960, hold to F1983)
  - At F1888: Right branch 3 draws (X: 1240, Y: 430..620).
  - Title: `3. DECOMPOSITION`
  - Formula: `Compound transforms = A ∘ B`
  - Technique: `Combine known elementary operations`
- **WHAT APPEARS NOW:** Branch 3 (Decomposition into Elementary Steps) revealed.
- **CENTER-STAGE HERO:** The Decomposition outcome box.
- **CAUSE:** Narration articulates the third structural pattern.
- **EFFECT / MOTION:** Right branch line draws, box pops in with emerald gold highlight.
- **WHAT MUST NOT APPEAR YET:** Final logic takeaway banner.
- **COMPREHENSION HOLD:** F1961..F1983.
- **CLEANUP / EXIT:** All 3 branches complete.
- **PERSISTENT STATE:** Complete 3-branch mental model tree displayed.

### Anchor 12: S13_LOGIC_NOT_MEMORIZATION (F1984..F2137)
- **ANCHOR:** `That way, the code comes from the logic, not from memorization.` (Words 122..132, 66120ms–71280ms, F1984..F2138)
- **WHAT APPEARS NOW:** Golden conclusion banner beneath the tree (Y: 660..730): `✓ CODE FOLLOWS GEOMETRIC LOGIC · ZERO GUESSWORK`.
- **CENTER-STAGE HERO:** Core educational ethos banner.
- **CAUSE:** Audio delivers the punchline of the conceptual lesson.
- **EFFECT / MOTION:** Banner draws with glowing rough chalk border.
- **WHAT MUST NOT APPEAR YET:** Course roadmap.
- **COMPREHENSION HOLD:** F2120..F2137.
- **CLEANUP / EXIT:** Mental model tree fades out (opacity: 1.0 -> 0.0) across F2125..F2137 to prepare for `MasterRoadmapV2`.
- **PERSISTENT STATE:** Screen transitions to Master Roadmap.

---

### Anchor 13: S13_ROADMAP_Q14_COMPLETE (F2138..F2264)
- **ANCHOR:** `Question 14, rotate image is complete.` (Words 133..138, 71280ms–75460ms, F2138..F2264)
  - Sub-anchor F2138..F2231: `Question 14, rotate image...` -> `MasterRoadmapV2` enters; Row 014 (Rotate Image) is spotlighted in gold (`spotlightRow: 14`, camera zoomed slightly `scale: 1.04, translateY: -120`). Status badge: `NOW ACTIVE ●`. Global count: `13 / 227`.
  - Sub-anchor F2232..F2264: `is complete.` -> Row 014 status badge transitions: `NOW ACTIVE ●` ──→ `COMPLETED ✓` with emerald pulse (`theme.good`).
- **WHAT APPEARS NOW:** Authoritative course curriculum `MasterRoadmapV2` with Row 014 illuminated and marked completed.
- **CENTER-STAGE HERO:** Row 014 completion stamp.
- **CAUSE:** Narration confirms Question 14 is finished.
- **EFFECT / MOTION:** Status badge flips from active to complete with green glow. Global counter stays 13/227 until next sentence!
- **WHAT MUST NOT APPEAR YET:** Counter change to 14/227, or Question 15 highlight.
- **COMPREHENSION HOLD:** F2250..F2264.
- **CLEANUP / EXIT:** Camera begins panning up toward global progress pill.
- **PERSISTENT STATE:** Row 014 complete, global 13/227.

### Anchor 14: S13_ROADMAP_PROGRESS_UPDATE (F2283..F2545)
- **ANCHOR:** `Our global progress moves from 13 out of 227 to 14 out of 227.` (Words 139..152, 76100ms–84840ms, F2283..F2545)
  - Sub-anchor F2283..F2442: `Our global progress moves from 13 out of 227...` -> Camera pans up to top progress pill (`translateY: -160, scale: 1.05`). Counter strictly displays `13 / 227`.
  - Sub-anchor F2443..F2467: `to...` -> Micro-anticipation hold.
  - Sub-anchor F2468..F2545: `14 out of 227.` -> Counter animates `13` ──→ `14 / 227` (`completedCount: 14`, `completedGlobalNums: [1..14]`). Radial particle sparkle / chalk dust flare.
- **WHAT APPEARS NOW:** Global course progress odometer rolls to `14 / 227`.
- **CENTER-STAGE HERO:** Global progress counter `14 / 227`.
- **CAUSE:** Narration speaks the progress milestone.
- **EFFECT / MOTION:** Clean integer interpolation from 13 to 14, green progress bar fraction expands from 13/227 to 14/227.
- **WHAT MUST NOT APPEAR YET:** Question 15 details.
- **COMPREHENSION HOLD:** F2525..F2545.
- **CLEANUP / EXIT:** Camera begins panning down toward Row 015.
- **PERSISTENT STATE:** Global progress: 14 / 227.

### Anchor 15: S13_ROADMAP_NEXT_Q15 (F2559..F2803)
- **ANCHOR:** `And next, in arrays and hashing. Question 15, spiral matrix. That is up next.` (Words 153..166, 85300ms–93440ms, F2559..F2803)
  - Sub-anchor F2559..F2664: `And next, in arrays and hashing.` -> Camera eases back and spotlights Row 015 in the curriculum list (`spotlightRow: 15`, `translateY: -140`).
  - Sub-anchor F2665..F2746: `Question 15, spiral matrix.` -> Row 015 lights up with cyan chalk highlight: `Q015: Spiral Matrix` (LeetCode 54 · Medium). Status badge: `UP NEXT ▶` in vivid amber/cyan.
  - Sub-anchor F2747..F2803: `That is up next.` -> Final grand stillness. All chrome settles into pristine perfection.
- **WHAT APPEARS NOW:** Final roadmap state: Q14 COMPLETE, Q15 UP NEXT, 14/227 Completed.
- **CENTER-STAGE HERO:** Question 15 Spiral Matrix designated as UP NEXT.
- **CAUSE:** Narration announces the next problem in the curriculum.
- **EFFECT / MOTION:** Camera settles at standard framing (`scale: 1.0, translateY: 0`), Row 015 glows gently.
- **WHAT MUST NOT APPEAR YET:** Q15 never marked ACTIVE (it will be activated in Q15 Scene 01).
- **COMPREHENSION HOLD:** F2780..F2803 (final majestic hold to scene end).
- **CLEANUP / EXIT:** Final frame holds for flawless video transition.
- **PERSISTENT STATE:** Final curriculum state locked: 14/227 Complete, Q015 Up Next.
