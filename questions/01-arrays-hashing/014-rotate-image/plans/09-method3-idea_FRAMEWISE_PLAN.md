# Scene 09 Framewise Plan: Method 3 Idea & Algebraic Proof (LeetCode 48)
## 014-rotate-image · Scene 09 (`09-method3-idea`)

- **Audio File:** `public/audio/014/09-method3-idea.mp3`
- **Total Duration:** 2325 frames (77.500s @ 30 FPS)
- **Sync Authority:** `questions/01-arrays-hashing/014-rotate-image/sync/09-method3-idea.json` (159 words)
- **Visual Aesthetic:** Chalk blackboard (`#0D1117`), `@dsa/kit` components, zero AI-slop cards, individual standalone tokens and formulas, strict spoiler-free reveals, zero vertical collision (> 210px above captions).

---

### Beat 1: The Goal & Search for a Simpler Way (Frames 0 – 261 · ~8.7s)
- **Audio Range:** `[0000-0135]` ("Now let's find a simpler way to perform the same rotation. We already know the final coordinate mapping.")
- **ANCHOR:** `BEAT_1_GOAL`
- **WHAT APPEARS NOW:**
  - Top Bar metadata pills: `QUESTION 014` (left), `METHOD 3: TRANSPOSE + REVERSE ROW` (center), `ALGEBRAIC PROOF` (right).
  - Center-Stage Title Token: `AIM: SIMPLER IN-PLACE ROTATION WITHOUT CYCLIC SWAP MATH`.
  - Target Goal Token: `DIRECT ROTATION TARGET: (r, c) ──► (c, n - 1 - r)`.
- **CENTER-STAGE HERO:** Direct rotation formula token at (X: 960, Y: 260).
- **CAUSE:** Method 2's 4-way cyclic arithmetic (`top, right, bottom, left`) was mathematically dense; we search for an elegant decomposition.
- **EFFECT / MOTION:** Smooth fade-in + spring scale-in of the target formula token.
- **WHAT MUST NOT APPEAR YET:** Transpose explanation, row reversal details, checkmark pills, step action plan.
- **COMPREHENSION HOLD:** Frames 136 – 261 (clean hold as narrator pauses).
- **CLEANUP / EXIT:** None. Persistent baseline.
- **PERSISTENT STATE:** Top bar, Goal token visible.

---

### Beat 2: Direct Destination Coordinate Breakdown (Frames 262 – 510 · ~8.3s)
- **Audio Range:** `[0262-0495]` ("A value at row R column C must end at row C column N minus 1 minus R.")
- **ANCHOR:** `BEAT_2_COORDINATE_BREAKDOWN`
- **WHAT APPEARS NOW:**
  - Individual coordinate breakdown tokens:
    - Source: `Source (r, c)` in cyan RoughBox.
    - Arrow: `──►`
    - Target Row: `Destination Row = c` (highlighted in `#388BFD`).
    - Target Col: `Destination Col = n - 1 - r` (highlighted in `#D29922`).
- **CENTER-STAGE HERO:** Source and Target coordinate token array.
- **CAUSE:** Narration breaks down the exact destination coordinates for any cell `(r, c)`.
- **EFFECT / MOTION:** Sequential appearance of Source, Row component, and Column component tokens.
- **WHAT MUST NOT APPEAR YET:** Transpose step, reverse row step, verification.
- **COMPREHENSION HOLD:** Frames 496 – 510.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Goal formula + Source/Target coordinate breakdown.

---

### Beat 3: Decomposing Movement into Two Transformations (Frames 511 – 737 · ~7.5s)
- **Audio Range:** `[0511-0722]` ("Instead of doing that complete movement directly, we can split it into two simple transformations.")
- **ANCHOR:** `BEAT_3_TWO_STEP_SPLIT`
- **WHAT APPEARS NOW:**
  - Strategy question / bridge token:
    `Can we reach (c, n - 1 - r) using two elementary matrix operations?`
  - Two empty operational slots/placeholders:
    `[ Step 1: ? ] ──► [ Step 2: ? ]`
- **CENTER-STAGE HERO:** Operational slots placeholder sequence at Y: 380.
- **CAUSE:** Spoken transition introducing the two-step decomposition.
- **EFFECT / MOTION:** Slide-in and glow of the two-step placeholder sequence.
- **WHAT MUST NOT APPEAR YET:** Reveal of Transpose or Row Reversal names until explicitly spoken.
- **COMPREHENSION HOLD:** Frames 723 – 737.
- **CLEANUP / EXIT:** Strategic placeholder slots ready to be filled.
- **PERSISTENT STATE:** Top bar, target goal, 2-step placeholder.

---

### Beat 4: Step 1 Revealed — Transpose Matrix (Frames 738 – 1008 · ~9.0s)
- **Audio Range:** `[0738-0995]` ("First, transpose the matrix, transpose swaps, rows and columns. So, R C becomes C R.")
- **ANCHOR:** `BEAT_4_TRANSPOSE_STEP`
- **WHAT APPEARS NOW:**
  - Slot 1 filled: `Step 1: Transpose (Swap Rows & Columns)`.
  - Transpose mapping token: `(r, c) ──► (c, r)`.
  - Mini 3×3 matrix visual on the right (Y: 460) illustrating diagonal flip:
    - Main diagonal cells `(0,0), (1,1), (2,2)` fixed.
    - Symmetrical cells `(r, c)` and `(c, r)` highlighted with diagonal swap arrow.
- **CENTER-STAGE HERO:** Step 1 Transpose token + 3×3 diagonal swap diagram.
- **CAUSE:** Narration explains that matrix transpose swaps row and column indices.
- **EFFECT / MOTION:** Slot 1 fills with vibrant cyan highlight, diagonal arrow draws across the 3×3 mini matrix.
- **WHAT MUST NOT APPEAR YET:** Row match checkmark, Step 2 reveal.
- **COMPREHENSION HOLD:** Frames 996 – 1008.
- **CLEANUP / EXIT:** Slot 1 active.
- **PERSISTENT STATE:** Step 1 Transpose details + mini matrix visual.

---

### Beat 5: Key Realization — The Row is Already Correct! (Frames 1009 – 1174 · ~5.5s)
- **Audio Range:** `[1009-1151]` ("Now notice, the row is already correct. We only need ... to fix the column.")
- **ANCHOR:** `BEAT_5_ROW_MATCH`
- **WHAT APPEARS NOW:**
  - Row comparison token:
    - Current Row: `c`
    - Target Row: `c`
    - Status: `Row is already MATCHED! ✓` (in `#3FB950` green pill).
  - Column status token:
    - Current Col: `r`
    - Target Col: `n - 1 - r`
    - Status: `Column needs: r ──► n - 1 - r` (in `#D29922` amber pill).
- **CENTER-STAGE HERO:** Row match green badge + Column pending amber badge.
- **CAUSE:** Comparing `(c, r)` against target `(c, n - 1 - r)` shows the row coordinate is already identical.
- **EFFECT / MOTION:** Green pulse on row coordinate `c`, amber badge indicates only column needs updating.
- **WHAT MUST NOT APPEAR YET:** Step 2 implementation details.
- **COMPREHENSION HOLD:** Frames 1152 – 1174.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Row matched confirmed, column pending.

---

### Beat 6: Step 2 Revealed — Reverse Every Row (Frames 1175 – 1420 · ~8.2s)
- **Audio Range:** `[1175-1408]` ("So the second step is reverse every row that changes column R into column N minus 1 minus R.")
- **ANCHOR:** `BEAT_6_REVERSE_ROW_STEP`
- **WHAT APPEARS NOW:**
  - Slot 2 filled: `Step 2: Reverse Every Row`.
  - Reversal mapping token: `In row c: Column r ──► Column (n - 1 - r)`.
  - Column status badge updates: `Column MATCHED! ✓` (in `#3FB950` green pill).
  - Mini row visual showing horizontal reversal: `[ 0 | 1 | 2 ] ──► [ 2 | 1 | 0 ]`.
- **CENTER-STAGE HERO:** Step 2 Reverse Row token + horizontal flip visual.
- **CAUSE:** Horizontally reversing a 1D array of length `n` maps index `i` to `n - 1 - i`. Thus column `r` becomes `n - 1 - r`.
- **EFFECT / MOTION:** Slot 2 reveals with purple/violet highlight; row reversal animation shows element flip.
- **WHAT MUST NOT APPEAR YET:** Final unified Q.E.D. formula chain.
- **COMPREHENSION HOLD:** Frames 1409 – 1420.
- **CLEANUP / EXIT:** Both steps now defined.
- **PERSISTENT STATE:** Both steps active and matched.

---

### Beat 7: Unified Algebraic Proof (Frames 1421 – 1964 · ~18.1s)
- **Audio Range:** `[1421-1942]` ("So together, transpose changes R C into C R. And reversing the row changes it into C N minus 1 minus R, which is exactly the coordinate mapping for a 90 degree clockwise rotation.")
- **ANCHOR:** `BEAT_7_UNIFIED_PROOF`
- **WHAT APPEARS NOW:**
  - Full algebraic chain equation:
    `(r, c) ──[ TRANSPOSE ]──► (c, r) ──[ REVERSE ROW ]──► (c, n - 1 - r)`
  - Direct equivalence highlight:
    `≡ DIRECT 90° CLOCKWISE ROTATION`
  - Gold confirmation pill: `ALGEBRAIC PROOF COMPLETE · EXACT MATCH (Q.E.D.)`.
- **CENTER-STAGE HERO:** Complete unified mathematical proof chain banner at Y: 600.
- **CAUSE:** Synthesizing both steps proves mathematically that Transpose followed by Row Reversal produces the identical transformation as 90° clockwise rotation.
- **EFFECT / MOTION:** Sequential path drawing of arrows linking the 3 states, followed by gold glow on Q.E.D. badge.
- **WHAT MUST NOT APPEAR YET:** Action plan summary.
- **COMPREHENSION HOLD:** Frames 1943 – 1964.
- **CLEANUP / EXIT:** Full proof remains visible.
- **PERSISTENT STATE:** Full algebraic proof displayed.

---

### Beat 8: The Simple 2-Step Action Plan (Frames 1965 – 2179 · ~7.1s)
- **Audio Range:** `[1965-2158]` ("So our plan is simple. Step one, transpose the matrix. Step two, reverse every row.")
- **ANCHOR:** `BEAT_8_ACTION_PLAN`
- **WHAT APPEARS NOW:**
  - High-contrast Action Plan tokens:
    - Token 1: `[ STEP 1 ] Transpose Matrix (Swap across main diagonal where r < c)`
    - Token 2: `[ STEP 2 ] Reverse Every Row (Two pointers left < right for each row)`
- **CENTER-STAGE HERO:** Action Plan 2-token list.
- **CAUSE:** Formulating the practical algorithm steps derived directly from the mathematical proof.
- **EFFECT / MOTION:** Scale-in with spring of the two clear action steps.
- **WHAT MUST NOT APPEAR YET:** Scene 10 handoff.
- **COMPREHENSION HOLD:** Frames 2159 – 2179.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Action plan visible.

---

### Beat 9: Full Matrix Execution Handoff (Frames 2180 – 2325 · ~4.9s)
- **Audio Range:** `[2180-2325]` ("Now let's execute these two transformations on the full matrix.")
- **ANCHOR:** `BEAT_9_EXECUTE_HANDOFF`
- **WHAT APPEARS NOW:**
  - Handoff cue token: `NEXT: FULL MATRIX 5×5 STEP-BY-STEP TRACE (SCENE 10) ──►`.
  - Gentle pulse animation on handoff button/pill.
- **CENTER-STAGE HERO:** Scene 10 transition banner.
- **CAUSE:** Narration cues the full trace in Scene 10.
- **EFFECT / MOTION:** Glow on handoff pill; steady hold through frame 2325.
- **WHAT MUST NOT APPEAR YET:** Scene 10 components.
- **COMPREHENSION HOLD:** Frames 2311 – 2325 (final 15 frames hold).
- **CLEANUP / EXIT:** End of Scene 09.
- **PERSISTENT STATE:** Complete proof + action plan + handoff pill.
