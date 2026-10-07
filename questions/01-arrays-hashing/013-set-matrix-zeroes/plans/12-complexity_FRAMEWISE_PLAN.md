# Scene 12 — Complexity Comparison & Invariants: Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `12-complexity`  
**Audio File:** `scence-12.mp3` (`12-complexity.mp3`)  
**Total Duration:** 2827 frames @ 30fps (94.240s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/12-complexity.json` & `sync/12-complexity.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 12 delivers the authoritative comparative analysis of the three algorithmic paradigms explored for **Set Matrix Zeroes**:

1. **Method 1: Complete Matrix Copy (Brute Force)**
   - Space Complexity: $O(M \times N)$ auxiliary storage for the copy matrix.
   - Time Complexity: $O(M \cdot N + z(M + N))$, where $z$ is the count of original zeros.
   - Worst-case degradation: When $z = M \times N$, time blows up to $O(M \cdot N \cdot (M + N))$.

2. **Method 2: External Marker Arrays (Sub-Optimal Space)**
   - Space Complexity: $O(M + N)$ auxiliary storage (one row array of size $M$, one col array of size $N$).
   - Time Complexity: $O(M \times N)$ achieved in two sequential matrix scans.

3. **Method 3: Optimal In-Place Boundary Markers (Gold Standard)**
   - Time Complexity: $O(M \times N)$ through sequential passes (Boundary Check $\to$ Marker Discovery $\to$ Marker Apply $\to$ Boundary Zeroing). Sequential work is strictly bounded by cell count.
   - Space Complexity: $O(1)$ extra space. Apart from simple loop counter indices, memory is strictly limited to 2 boolean flags (`firstRowZero`, `firstColZero`).

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Background:** Full-frame dark chalkboard green (`theme.boardBg` = `#19523C`).
- **Top Header ($Y: 36..106$):**
  - Category Badge: `01 · ARRAYS & HASHING`
  - Title: `COMPLEXITY COMPARISON & TRADEOFF MATRIX`
  - Problem Badge: `LEETCODE 73 · SET MATRIX ZEROES`
- **Main Stage Distribution ($Y: 125..915$, Total Height: 790px):**
  - **Left Section ($X: 50..820$, Width: 770px): 3-Method Comparative Scoreboard**
    - Three vertically stacked comparison cards displaying:
      - Card 1: Method 1 (Copy Matrix) — Space: $O(MN)$, Time: $O(MN + z(M+N))$ (Worst $O(MN(M+N))$)
      - Card 2: Method 2 (Marker Arrays) — Space: $O(M+N)$, Time: $O(MN)$
      - Card 3: Method 3 (In-Place Markers) — Space: $O(1)$ Extra Space, Time: $O(MN)$
    - Active highlight border and glow syncs with the method currently spoken.
  - **Right Section ($X: 860..1870$, Width: 1010px): Deep-Dive Dynamic Stage**
    - **Phase A (Frames 0..1287): Method 1 Algebraic & Worst-Case Breakdown**
      - Full Matrix Memory footprint diagram ($M \times N$ cells).
      - Step-by-step formula reveal: $T = MN + z(M+N)$.
      - Dynamic interactive gauge showing $z$ increasing from $1 \to MN$, showing worst-case curve explosion to $O(MN(M+N))$.
    - **Phase B (Frames 1316..1731): Method 2 Two-Pass Pipeline & Vector Footprint**
      - Pass 1 & Pass 2 sequential flow tiles.
      - Vector marker storage representation: Row array ($M$) + Col array ($N$) = $O(M+N)$ space vs matrix $O(MN)$.
    - **Phase C (Frames 1752..2827): Method 3 Sequential Passes & O(1) Storage Proof**
      - 5-step sequential timeline: (1) First Row $\to$ (2) First Col $\to$ (3) Interior Mark $\to$ (4) Interior Apply $\to$ (5) Boundaries.
      - Sequential, NOT nested proof badge: $T = (N) + (M) + 2(M-1)(N-1) + (M+N) = O(MN)$.
      - Two-Boolean memory register display: `firstRowZero = False (1 bit)`, `firstColZero = False (1 bit)` $\to$ $O(1)$ space verified!
      - Final Takeaway Trophy Card.
- **Bottom Caption Clearance ($Y: 960..1040$):**
  - Stages strictly terminate at $Y: 915$, leaving a guaranteed $45\text{px}$ breathing room above bottom captions.

---

## 3. Framewise Anchor Plan (26 Anchors, F0..F2827)

```text
================================================================================
ANCHOR: S12_COMPARE (F0..F56)
Spoken Phrase: "Now compare the three methods." (W0000..W0004)
================================================================================
WHAT APPEARS NOW:
- Main Header: "COMPLEXITY COMPARISON & TRADEOFF MATRIX"
- 3-Method Comparative Scoreboard shell on Left ($X: 50..820$):
  - Card 1: Method 1 (Full Copy)
  - Card 2: Method 2 (Marker Arrays)
  - Card 3: Method 3 (In-Place Markers)
- Right Stage Initial Title: "ALGORITHMIC TRADEOFF ANALYSIS"
CENTER-STAGE HERO:
- Comparative Scoreboard cards animate into view with smooth spring opacity and translation.
CAUSE:
- Setting the stage for head-to-head complexity evaluation.
EFFECT / MOTION:
- Cards spring from $Y + 20\text{px} \to Y$, opacity $0 \to 1$.
WHAT MUST NOT APPEAR YET:
- Specific detailed worst-case formula, sequential pass breakdown, or final victory badges.
COMPREHENSION HOLD:
- F56..F73: Clean hold before Method 1 discussion begins.
CLEANUP / EXIT:
- None; scoreboard persists throughout the scene as the global navigation reference.
PERSISTENT STATE:
- Comparative Scoreboard visible on left; Method 1 card preparing to activate.

================================================================================
ANCHOR: S12_M1COPY (F73..F166)
Spoken Phrase: "Method 1 keeps a complete copy of the matrix." (W0005..W0013)
================================================================================
WHAT APPEARS NOW:
- Method 1 Card on Left gets active amber focus ring (`#F59E0B`).
- Right Stage reveals Phase A: Method 1 Architecture:
  - Original Matrix ($M \times N$) side-by-side with Complete Auxiliary Copy ($M \times N$).
  - Storage badge: "Duplicate Memory Grid: M × N elements".
CENTER-STAGE HERO:
- The cloned duplicate matrix glowing in amber to illustrate redundant allocation.
CAUSE:
- Method 1 needs the snapshot to avoid reading its own cascading zero overwrites.
EFFECT / MOTION:
- Duplicate matrix clones out of the original with an arrow and fade-in.
WHAT MUST NOT APPEAR YET:
- Algebraic formula $MN + z(M+N)$ or worst case $z = MN$.
COMPREHENSION HOLD:
- F166..F184: Hold showing the full copy footprint.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Method 1 active; duplicate matrix visible.

================================================================================
ANCHOR: S12_M1SPACE (F184..F290)
Spoken Phrase: "That needs O M times N extra space." (W0014..W0021)
================================================================================
WHAT APPEARS NOW:
- Left Card 1: Space pill lights up in Red/Amber: "Space: O(M × N)".
- Right Stage: Memory banner: "AUXILIARY SPACE: O(M · N) — Duplicates entire grid".
CENTER-STAGE HERO:
- Red/Amber Space complexity pill highlighting memory inefficiency.
CAUSE:
- Direct consequence of storing an entire duplicate $M \times N$ 2D array.
EFFECT / MOTION:
- Pulse scale on Space complexity tag (scale $1.0 \to 1.08 \to 1.0$).
WHAT MUST NOT APPEAR YET:
- Time complexity calculations.
COMPREHENSION HOLD:
- F290..F302: Hold on $O(MN)$ space requirement.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Method 1 space locked as $O(MN)$.

================================================================================
ANCHOR: S12_EXACT (F302..F359)
Spoken Phrase: "For the exact version we wrote," (W0022..W0027)
================================================================================
WHAT APPEARS NOW:
- Right Stage shifts to runtime analysis panel:
  - Title: "Method 1 Runtime Breakdown (Exact Implementation)"
  - Code reference pill: "2-Pass: Scan Original + Propagate Rows/Cols"
CENTER-STAGE HERO:
- Runtime breakdown container preparing equation elements.
CAUSE:
- Grounding the time complexity in the exact code written in Scene 2.
EFFECT / MOTION:
- Smooth cross-fade into runtime equation workbench.
WHAT MUST NOT APPEAR YET:
- Full algebraic formula.
COMPREHENSION HOLD:
- F359..F381: Hold.
CLEANUP / EXIT:
- Duplicate matrix fades to background/compact view.
PERSISTENT STATE:
- Runtime breakdown container active.

================================================================================
ANCHOR: S12_Z (F381..F448)
Spoken Phrase: "suppose there are z original zeros." (W0028..W0033)
================================================================================
WHAT APPEARS NOW:
- Parameter definition card: "Let z = count of original zeros in matrix (0 <= z <= M · N)".
- Variable badge `$z$` highlighted in bright yellow (`#FACC15`).
CENTER-STAGE HERO:
- Variable `$z$` definition card.
CAUSE:
- Method 1's work depends directly on how many zeros trigger full row/column sweeps.
EFFECT / MOTION:
- `$z$` badge pops in with bounce spring.
WHAT MUST NOT APPEAR YET:
- $M+N$ term or $MN + z(M+N)$ equation.
COMPREHENSION HOLD:
- F448..F460: Hold.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Variable $z$ defined.

================================================================================
ANCHOR: S12_SCANONCE (F460..F509)
Spoken Phrase: "We scan the matrix once." (W0034..W0038)
================================================================================
WHAT APPEARS NOW:
- Step 1 Work Pill: "Pass 1: Scan full matrix $\to$ M · N checks".
- Equation building block 1 appears: `T = (M · N) + ...`.
CENTER-STAGE HERO:
- First term `M · N` added to the equation.
CAUSE:
- Finding all zeros requires visiting every cell $(r, c)$ in the $M \times N$ matrix.
EFFECT / MOTION:
- Term `(M · N)` slides into formula bar with cyan underline.
WHAT MUST NOT APPEAR YET:
- The `$z(M+N)$` term.
COMPREHENSION HOLD:
- F509..F527: Hold.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Formula starts: `T = M · N + ...`.

================================================================================
ANCHOR: S12_PERZ (F527..F589)
Spoken Phrase: "And for each of those z zeros," (W0039..W0045)
================================================================================
WHAT APPEARS NOW:
- Step 2 Work Pill: "Pass 2: For each zero found (× z occurrences)...".
- Equation extends: `T = (M · N) + z · (...)`.
CENTER-STAGE HERO:
- Multiplier factor `+ z · (...)` in equation.
CAUSE:
- Every zero triggers independent row and column overwrites.
EFFECT / MOTION:
- `+ z ·` appears in yellow, emphasizing the loop over zeros.
WHAT MUST NOT APPEAR YET:
- The `(M + N)` inner cost.
COMPREHENSION HOLD:
- F589..F602: Hold.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Formula: `T = (M · N) + z · (...)`.

================================================================================
ANCHOR: S12_ROWCOL (F602..F708)
Spoken Phrase: "we may walk through one complete row and one complete column." (W0046..W0056)
================================================================================
WHAT APPEARS NOW:
- Graphic: Crosshair sweep of row $r$ ($N$ cells) + column $c$ ($M$ cells).
- Inner cost badge: `(M + N) operations per zero`.
- Equation completes inner term: `(M + N)`.
CENTER-STAGE HERO:
- Crosshair row/column sweep diagram showing $(M + N)$ cell touches.
CAUSE:
- Method 1 zeros out the entire row (length $N$) and entire col (length $M$) in the copy.
EFFECT / MOTION:
- Row and column beam sweep across crosshair icon.
WHAT MUST NOT APPEAR YET:
- Worst-case $z = MN$ substitution.
COMPREHENSION HOLD:
- F708..F723: Hold.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Inner cost $(M+N)$ established.

================================================================================
ANCHOR: S12_TIMEFORM (F723..F968)
Spoken Phrase: "So the time is O of M times N plus z times open bracket M plus N close bracket." (W0057..W0075)
================================================================================
WHAT APPEARS NOW:
- Full Time Equation highlighted in prominent glowing formula box:
  `Time = O(M · N + z · (M + N))`
- Left Scoreboard Card 1 updates: `Time: O(MN + z(M+N))`.
CENTER-STAGE HERO:
- Complete Method 1 parametric time complexity formula.
CAUSE:
- Combining scan cost $MN$ with zero propagation cost $z(M+N)$.
EFFECT / MOTION:
- Glowing highlight box wraps the equation with gold pulse.
WHAT MUST NOT APPEAR YET:
- Worst case $O(MN(M+N))$.
COMPREHENSION HOLD:
- F968..F980: Hold to let the parametric formula sink in.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Full parametric formula displayed.

================================================================================
ANCHOR: S12_WORSTZ (F980..F1086)
Spoken Phrase: "And in the worst case, z itself can be M times N." (W0076..W0087)
================================================================================
WHAT APPEARS NOW:
- Worst-case callout card: "WORST CASE SCENARIO: All cells are zeros!".
- Dynamic slider/gauge: `$z = M \cdot N$ (Max Possible Zeros)`.
CENTER-STAGE HERO:
- Worst-case gauge slamming to 100% capacity ($z = MN$).
CAUSE:
- If every element in the matrix is initially zero, $z$ reaches its theoretical upper bound $M \times N$.
EFFECT / MOTION:
- Gauge needle swings to maximum red zone; warning icon pulses.
WHAT MUST NOT APPEAR YET:
- Final worst-case asymptotic formula.
COMPREHENSION HOLD:
- F1086..F1105: Hold on worst-case condition.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- $z = MN$ condition locked.

================================================================================
ANCHOR: S12_M1WORST (F1105..F1287)
Spoken Phrase: "So the worst case time becomes O of M times N times open bracket M plus N close bracket." (W0088..W0106)
================================================================================
WHAT APPEARS NOW:
- Substitution display:
  `T = MN + (MN)(M + N) = O(M · N · (M + N))`
- Left Card 1 updates with Red alert badge:
  `Worst Time: O(M · N · (M + N))` — TERRIBLE / CUBIC-SCALE WORK.
- Red warning stamp: "EXCESSIVE OVERLAPPING OVERWRITES".
CENTER-STAGE HERO:
- Final worst-case formula `O(MN(M+N))` with red alert badge.
CAUSE:
- For a square $N \times N$ matrix, this is $O(N^3)$ — unacceptable for large inputs.
EFFECT / MOTION:
- Big red warning badge stamps down with scale spring.
WHAT MUST NOT APPEAR YET:
- Method 2 content.
COMPREHENSION HOLD:
- F1287..F1316: Strong hold on Method 1's inefficiency.
CLEANUP / EXIT:
- Phase A components prepare to transition out.
PERSISTENT STATE:
- Method 1 finalized: Space $O(MN)$, Worst Time $O(MN(M+N))$.

================================================================================
ANCHOR: S12_M2 (F1316..F1358)
Spoken Phrase: "Method 2 is much better." (W0107..W0111)
================================================================================
WHAT APPEARS NOW:
- Method 1 Card on Left dims slightly.
- Method 2 Card on Left gets active bright Cyan focus ring (`#06B6D4`).
- Right Stage transitions to Phase B: "Method 2: Marker Arrays Architecture".
CENTER-STAGE HERO:
- Method 2 Card activating on the Scoreboard.
CAUSE:
- Introducing the linear-space improvement.
EFFECT / MOTION:
- Cyan spotlight moves to Card 2; Right stage slides in Method 2 panel.
WHAT MUST NOT APPEAR YET:
- Passes breakdown and final complexities.
COMPREHENSION HOLD:
- F1358..F1358: Immediate progression into passes.
CLEANUP / EXIT:
- Method 1 formula and gauge exit to left.
PERSISTENT STATE:
- Method 2 active on stage.

================================================================================
ANCHOR: S12_M2PASSES (F1358..F1543)
Spoken Phrase: "We scan the matrix to build row and column markers, then scan it again to apply them." (W0112..W0128)
================================================================================
WHAT APPEARS NOW:
- Two-Pass Flow Pipeline diagram:
  - Tile 1: "Pass 1 (Discovery): Scan Matrix $\to$ Record in row[] and col[] markers"
  - Arrow $\to$
  - Tile 2: "Pass 2 (Application): Scan Matrix $\to$ If row[r] or col[c] marked $\to$ Zero cell"
- Visual: Matrix with detached separate `row[M]` and `col[N]` array bars.
CENTER-STAGE HERO:
- Two sequential passes pipeline diagram.
CAUSE:
- Decoupling marker collection from matrix modification avoids cascading and eliminates redundant sweeps.
EFFECT / MOTION:
- Pass 1 arrow pulses cyan $\to$ Pass 2 arrow pulses blue.
WHAT MUST NOT APPEAR YET:
- Method 2 time and space pills.
COMPREHENSION HOLD:
- F1543..F1561: Hold on the clean 2-pass sequence.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Two-pass pipeline diagram visible.

================================================================================
ANCHOR: S12_M2TIME (F1561..F1652)
Spoken Phrase: "That gives us O M times N time" (W0129..W0136)
================================================================================
WHAT APPEARS NOW:
- Left Card 2: Time pill lights up in Green/Cyan: `Time: O(M · N)`.
- Right Stage: Time calculation card:
  `T = Pass 1 (MN) + Pass 2 (MN) = 2 · M · N = O(M · N)`
- Subtitle: "Optimal Asymptotic Runtime — Every cell visited exactly twice".
CENTER-STAGE HERO:
- Method 2 Time Complexity badge `O(M · N)`.
CAUSE:
- Two passes of $M \times N$ cells $= 2MN$ operations, which is asymptotically $O(MN)$.
EFFECT / MOTION:
- `O(M · N)` badge pops with cyan glow.
WHAT MUST NOT APPEAR YET:
- Space complexity pill.
COMPREHENSION HOLD:
- F1652..F1652: Seamless transition to space.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Method 2 Time locked at $O(MN)$.

================================================================================
ANCHOR: S12_M2SPACE (F1652..F1731)
Spoken Phrase: "and O M plus N extra space." (W0137..W0143)
================================================================================
WHAT APPEARS NOW:
- Left Card 2: Space pill lights up in Cyan: `Space: O(M + N)`.
- Right Stage: Space breakdown:
  `Auxiliary Storage = rowMarker[M] + colMarker[N] = O(M + N)`.
- Comparison tag: "Drastic reduction from O(M · N) to O(M + N)".
CENTER-STAGE HERO:
- Method 2 Space Complexity badge `O(M + N)`.
CAUSE:
- Only two 1D vectors stored instead of a full 2D grid.
EFFECT / MOTION:
- Vectors pulse with cyan bracket annotations.
WHAT MUST NOT APPEAR YET:
- Method 3 content.
COMPREHENSION HOLD:
- F1731..F1752: Hold on Method 2 achievement.
CLEANUP / EXIT:
- Phase B components prepare to exit.
PERSISTENT STATE:
- Method 2 complete: Time $O(MN)$, Space $O(M+N)$.

================================================================================
ANCHOR: S12_OPT (F1752..F1848)
Spoken Phrase: "The optimal method keeps the same asymptotic time." (W0144..W0151)
================================================================================
WHAT APPEARS NOW:
- Method 2 Card on Left dims slightly.
- Method 3 Card on Left gets active bright Emerald Green focus ring (`#10B981`) and gold crown/star badge.
- Right Stage transitions to Phase C: "Method 3: Optimal In-Place Architecture".
- Time Equality Banner: `Time Complexity remains O(M · N)`.
CENTER-STAGE HERO:
- Method 3 Card activating on Scoreboard with Emerald glow.
CAUSE:
- Moving markers inside Row 0 and Col 0 does not compromise the optimal $O(MN)$ runtime.
EFFECT / MOTION:
- Green glow sweeps across Method 3 card.
WHAT MUST NOT APPEAR YET:
- Individual pass breakdown (Row, Col, Interior, Boundary).
COMPREHENSION HOLD:
- F1848..F1864: Hold.
CLEANUP / EXIT:
- Method 2 panels exit.
PERSISTENT STATE:
- Method 3 active; preparing pass-by-pass accounting.

================================================================================
ANCHOR: S12_SCANFR (F1864..F1909)
Spoken Phrase: "We scan the first row," (W0152..W0156)
================================================================================
WHAT APPEARS NOW:
- Sequential Pass Timeline begins building:
  - Step 1 Card: "1. Scan First Row (Row 0) $\to$ N cells $\to$ O(N)"
  - Highlight beam across Row 0 in mini-matrix icon.
CENTER-STAGE HERO:
- Step 1 Timeline Card and Row 0 highlight.
CAUSE:
- Determining `firstRowZero` boolean flag takes exactly $N$ iterations.
EFFECT / MOTION:
- Step 1 Card springs in from right; Row 0 glows amber.
WHAT MUST NOT APPEAR YET:
- Steps 2 through 5.
COMPREHENSION HOLD:
- F1909..F1920: Hold.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Step 1 recorded in timeline.

================================================================================
ANCHOR: S12_SCANFC (F1920..F1946)
Spoken Phrase: "the first column," (W0157..W0159)
================================================================================
WHAT APPEARS NOW:
- Sequential Pass Timeline:
  - Step 2 Card: "2. Scan First Column (Col 0) $\to$ M cells $\to$ O(M)"
  - Highlight beam down Col 0 in mini-matrix icon.
CENTER-STAGE HERO:
- Step 2 Timeline Card and Col 0 highlight.
CAUSE:
- Determining `firstColZero` boolean flag takes exactly $M$ iterations.
EFFECT / MOTION:
- Step 2 Card slides in below Step 1; Col 0 glows amber.
WHAT MUST NOT APPEAR YET:
- Steps 3, 4, 5.
COMPREHENSION HOLD:
- F1946..F1962: Hold.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Steps 1 & 2 recorded.

================================================================================
ANCHOR: S12_DISC (F1962..F2029)
Spoken Phrase: "the interior for marker discovery," (W0160..W0164)
================================================================================
WHAT APPEARS NOW:
- Sequential Pass Timeline:
  - Step 3 Card: "3. Interior Marker Discovery $\to$ (M-1) × (N-1) cells $\to$ O(M · N)"
  - Interior zone highlighted in cyan.
CENTER-STAGE HERO:
- Step 3 Timeline Card and interior discovery zone.
CAUSE:
- Scanning interior cells $(r=1..m-1, c=1..n-1)$ to record zero positions into Row 0 and Col 0.
EFFECT / MOTION:
- Step 3 Card springs in; interior cells pulse with discovery dots.
WHAT MUST NOT APPEAR YET:
- Steps 4 and 5.
COMPREHENSION HOLD:
- F2029..F2047: Hold.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Steps 1, 2, 3 recorded.

================================================================================
ANCHOR: S12_APPLY (F2047..F2121)
Spoken Phrase: "the interior again to apply those markers" (W0165..W0171)
================================================================================
WHAT APPEARS NOW:
- Sequential Pass Timeline:
  - Step 4 Card: "4. Interior Marker Application $\to$ (M-1) × (N-1) cells $\to$ O(M · N)"
  - Interior zeroing animation in mini-matrix.
CENTER-STAGE HERO:
- Step 4 Timeline Card and interior application animation.
CAUSE:
- Second pass over interior cells to write actual zeros based on boundary markers.
EFFECT / MOTION:
- Step 4 Card springs in; target interior cells turn zero.
WHAT MUST NOT APPEAR YET:
- Step 5 (Boundary finalization).
COMPREHENSION HOLD:
- F2121..F2121: Seamless transition.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Steps 1, 2, 3, 4 recorded.

================================================================================
ANCHOR: S12_FINALBOUND (F2121..F2195)
Spoken Phrase: "and finally the boundaries." (W0172..W0175)
================================================================================
WHAT APPEARS NOW:
- Sequential Pass Timeline:
  - Step 5 Card: "5. Finalize Boundaries (Row 0 & Col 0) $\to$ M + N cells $\to$ O(M + N)"
  - Row 0 & Col 0 resolve according to boolean flags.
CENTER-STAGE HERO:
- Step 5 Timeline Card completing the 5-phase timeline.
CAUSE:
- Using saved boolean flags to zero out Row 0 and/or Col 0.
EFFECT / MOTION:
- Step 5 Card springs in with green checkmark.
WHAT MUST NOT APPEAR YET:
- Sequential summation formula.
COMPREHENSION HOLD:
- F2195..F2222: Hold on complete 5-step timeline.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- All 5 steps visible on timeline.

================================================================================
ANCHOR: S12_SEQ (F2222..F2272)
Spoken Phrase: "These are sequential passes." (W0176..W0179)
================================================================================
WHAT APPEARS NOW:
- Vital Pedagogical Invariant Banner:
  "CRITICAL ARCHITECTURE: SEQUENTIAL PASSES, NEVER NESTED!"
- Downward sequential flow arrows linking all 5 steps:
  `Step 1 + Step 2 + Step 3 + Step 4 + Step 5 (Addition, not Multiplication!)`.
CENTER-STAGE HERO:
- "SEQUENTIAL PASSES — NEVER NESTED" banner.
CAUSE:
- Crucial distinction: passes are chained sequentially ($T_1 + T_2 + T_3$), NOT multiplied ($T_1 \times T_2$).
EFFECT / MOTION:
- Golden connection pipeline pulses down through all 5 cards.
WHAT MUST NOT APPEAR YET:
- Final summation formula.
COMPREHENSION HOLD:
- F2272..F2294: Hold.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Sequential pipeline highlighted.

================================================================================
ANCHOR: S12_DOM (F2294..F2416)
Spoken Phrase: "The dominant work is still proportional to the number of cells." (W0180..W0190)
================================================================================
WHAT APPEARS NOW:
- Algebraic Summation Card:
  `Total Cost = N + M + 2(M - 1)(N - 1) + (M + N)`
  `Total Cost = 2 · M · N + (lower order terms)`
- Callout: "Dominant Term = 2 · M · N $\propto$ Matrix Cell Count".
CENTER-STAGE HERO:
- Summation formula showing dominant $2MN$ term.
CAUSE:
- Lower order boundary terms $M+N$ are completely dominated by $M \times N$.
EFFECT / MOTION:
- Lower order terms fade slightly; $2 \cdot M \cdot N$ glows with bright emerald highlight.
WHAT MUST NOT APPEAR YET:
- Final $O(MN)$ big-O pill.
COMPREHENSION HOLD:
- F2416..F2440: Hold on dominant term algebra.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Dominant term proven.

================================================================================
ANCHOR: S12_OPTTIME (F2440..F2546)
Spoken Phrase: "So the time is O M times N." (W0191..W0198)
================================================================================
WHAT APPEARS NOW:
- Left Card 3: Time pill lights up in Emerald Green: `Time: O(M · N) — OPTIMAL`.
- Right Stage: Asymptotic Reduction Badge:
  `Big-O Time Complexity: O(M · N)`
- Checkmark badge: "Optimal Time Bound Achieved".
CENTER-STAGE HERO:
- Method 3 Time Complexity locked at $O(MN)$.
CAUSE:
- Dropping constant factor 2 and lower order terms yields $O(MN)$.
EFFECT / MOTION:
- `O(M · N)` badge expands and locks into Scoreboard Card 3.
WHAT MUST NOT APPEAR YET:
- Space complexity proof.
COMPREHENSION HOLD:
- F2546..F2576: Hold.
CLEANUP / EXIT:
- Summation card transitions to Space Analysis panel.
PERSISTENT STATE:
- Method 3 Time locked at $O(MN)$.

================================================================================
ANCHOR: S12_TWOBOOL (F2576..F2704)
Spoken Phrase: "And apart from loop indices, we only keep two Booleans." (W0199..W0208)
================================================================================
WHAT APPEARS NOW:
- Auxiliary Memory Register Display:
  - Register 1: `firstRowZero = False` (Type: boolean, Size: 1 bit)
  - Register 2: `firstColZero = False` (Type: boolean, Size: 1 bit)
  - Loop counters: `r, c` (Integer registers on call stack)
- Hardware memory scale: "Total Auxiliary Memory: 2 bits + constant loop registers".
CENTER-STAGE HERO:
- Two-Boolean Memory Register Display with glowing digital flip-flop registers.
CAUSE:
- No dynamic arrays, no sets, no duplicate matrix — only two primitive boolean variables.
EFFECT / MOTION:
- Two compact memory chips pop in with micro-glows.
WHAT MUST NOT APPEAR YET:
- Final $O(1)$ space badge.
COMPREHENSION HOLD:
- F2704..F2724: Hold on the tiny 2-bit footprint.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Two boolean registers visible.

================================================================================
ANCHOR: S12_O1 (F2724..F2827)
Spoken Phrase: "So the extra space is O one." (W0209..W0215)
================================================================================
WHAT APPEARS NOW:
- Left Card 3: Space pill lights up in Bright Emerald Green with Crown:
  `Space: O(1) Extra Space — GOLD STANDARD`.
- Right Stage reveals Final Master Verdict & Summary Trophy:
  - Method 3 Trophy Card: "Optimal Space & Time Complexity".
  - Comparative Summary Matrix fully lit:
    - Method 1: $O(MN(M+N))$ Time | $O(MN)$ Space $\to$ Brute
    - Method 2: $O(MN)$ Time | $O(M+N)$ Space $\to$ Good
    - Method 3: $O(MN)$ Time | $O(1)$ Space $\to$ WINNER / OPTIMAL
  - Core Invariant Stamp: "In-Place Boundary Encoding Complete".
CENTER-STAGE HERO:
- Final Master Summary Matrix & Gold Standard $O(1)$ Space Badge.
CAUSE:
- Climax of the entire 12-scene question walkthrough.
EFFECT / MOTION:
- Gold sparkle and victory glow around Method 3; all three cards fully illuminated.
WHAT MUST NOT APPEAR YET:
- Nothing; all elements complete.
COMPREHENSION HOLD:
- F2785..F2827: Final 42-frame triumphant hold on the complete scoreboard.
CLEANUP / EXIT:
- Clean hold until video finishes.
PERSISTENT STATE:
- Complete 3-Method Comparative Scoreboard & Final Verdict.
```

---

## 4. Visual & Structural Invariants Checklist

1. **Zero Collision Invariant:**
   - Scoreboard on Left ($X: 50..820$), Deep Dive Stage on Right ($X: 860..1870$). Clean $40\text{px}$ horizontal gutter.
   - Stage heights strictly contained between $Y: 125$ and $Y: 915$.
   - Captions occupy $Y: 960..1040$. Guaranteed $45\text{px}$ vertical buffer above captions at all times.
2. **Deterministic Frame Animation:**
   - 100% of transitions and animations derived from `useCurrentFrame()`.
   - Zero CSS keyframe animations, zero `Math.random()`, zero wall-clock timing.
3. **Course Design System:**
   - Chalkboard background (`#19523C`), gold chalk accents (`#FBBF24`), emerald optimal tags (`#10B981`), red warning tags (`#EF4444`), cyan intermediate tags (`#06B6D4`).
   - Clean typography using Google Fonts (Inter / JetBrains Mono).
