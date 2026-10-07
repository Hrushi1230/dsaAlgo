# Q15 — Spiral Matrix (LeetCode 54)
# Scene 03 — Method 1 Simulation Trace (Word-Synchronized Framewise Plan)

> **Authority:** `Q15_Spiral_Matrix_FINAL_STUDENT_OPTIMIZED.md`  
> **Sync Authority:** `sync/03-method1-trace.json` (5,124 frames @ 30fps / 170.800s)  
> **Anchor Source:** `sync/03-method1-trace.anchors.json` (38 Anchors)  
> **Master Testcase:** Verified $5 \times 6$ Matrix ($1 \dots 30$)  
> **Visual Grammar:** `@dsa/kit` (`MeshGrid`, `RoughBox`, `Captions`, `ChalkboardBackground`, `ChalkFilters`)

---

## 1. Scene Canvas Architecture & Layout Invariants

- **Screen Dimensions:** $1920 \times 1080$ px
- **Top Header Bar (Y: 28..80):** Pattern tag `01 · ARRAYS & HASHING`, Title `Spiral Matrix`, LeetCode `#015 · MEDIUM`
- **Direction Compass HUD (X: 1530, Y: 110, W: 270, H: 156):** Shows active direction $(R, D, L, U)$
- **Center-Stage 5×6 MeshGrid (X: 568, Y: 150, W: 704, H: 446):**
  - Row ruler: 80px width, Column ruler: 36px height
  - 5 rows × 6 columns, cell width = 104px, cell height = 82px
  - Matrix values $1 \dots 30$ stay permanently fixed at their grid coordinates
  - Cell visual states:
    - **Current cell:** Bright yellow border + glow (`#FFD166`)
    - **Visited cells:** Soft green background (`rgba(60, 229, 167, 0.15)`) + green checkmark (`✓`)
    - **Warning candidate:** Coral/red border + icon (`⚠️`)
    - **Untouched cells:** Crisp chalk white font
- **Bottom Callout & Invariant Zone (Y: 655..740):**
  - At least 60px vertical clearance below grid (grid ends at Y: 596)
  - Shows current probe, boundary violations, visited collisions, and turning logic
- **1D Answer Collector Track (Y: 760..830):**
  - Displays spiral output array accumulating values $1 \dots 30$
- **Captions (Y: 960..1040):**
  - Whisper-synchronized word-level captions

---

## 2. 38 Framewise Anchors & Choreography

### Anchor 01: `S03_START` (F0..F62)
- **Phrase:** "We start at the top-left cell"
- **Hero:** Current pointer at cell $(0, 0)$ = 1
- **Visuals:** Master $5 \times 6$ grid untouched. Cell $(0, 0)$ illuminates in gold/yellow. Answer array is empty `[]`.
- **Compass:** Idle.

### Anchor 02: `S03_ONE` (F78..F116)
- **Phrase:** "value 1."
- **Hero:** Cell $(0, 0)$ value 1 confirmed as current.
- **Visuals:** Value 1 marked as current. Value 1 enters answer list: `answer = [1]`.

### Anchor 03: `S03_DIR_RIGHT` (F136..F202)
- **Phrase:** "Our current direction is right."
- **Hero:** Direction vector $(0, 1)$ facing RIGHT.
- **Visuals:** Compass activates RIGHT in cyan. Arrow inside cell 1 points right.

### Anchor 04: `S03_TOP_SPAN` (F215..F352)
- **Phrase:** "We move across the complete top row, from 1 through 6."
- **Hero:** Top-row sweep $1 \to 2 \to 3 \to 4 \to 5 \to 6$.
- **Timing:** 
  - F215: Cell 1 visited (`✓`)
  - F242: Cell 2 visited (`✓`), added to answer
  - F270: Cell 3 visited (`✓`), added to answer
  - F297: Cell 4 visited (`✓`), added to answer
  - F324: Cell 5 visited (`✓`), added to answer
  - F352: Cell 6 reaches current! Answer = `[1, 2, 3, 4, 5, 6]`.

### Anchor 05: `S03_AT6_OUT` (F367..F510)
- **Phrase:** "At 6, the next position to the right is outside the matrix,"
- **Hero:** Cell $(0, 5) = 6$ probing next position $(0, 6)$.
- **Visuals:** Ghost box appears at column 6 with `c=6 ≥ n · OUT OF BOUNDS` in coral red. Callout badge at Y: 655 warns: `NEXT POSITION (0, 6) IS OUTSIDE MATRIX`.

### Anchor 06: `S03_TURN_DOWN` (F524..F635)
- **Phrase:** "so we turn clockwise, from right to down."
- **Hero:** Clockwise direction change: Right $\to$ Down.
- **Visuals:** Direction arrow at cell 6 rotates 90° down. Compass switches highlight from RIGHT to DOWN. Callout: `TURN CLOCKWISE → DOWN (1, 0)`.

### Anchor 07: `S03_RIGHT_SPAN` (F654..F790)
- **Phrase:** "Now we move down the complete right edge, from 12 through 30."
- **Hero:** Right-edge sweep $12 \to 18 \to 24 \to 30$.
- **Timing:**
  - F654: Cell 12 visited (`✓`), added to answer
  - F700: Cell 18 visited (`✓`), added to answer
  - F745: Cell 24 visited (`✓`), added to answer
  - F790: Cell 30 reaches current! Answer = `[..., 12, 18, 24, 30]`.

### Anchor 08: `S03_AT30_OUT` (F799..F944)
- **Phrase:** "At 30, the next downward position is outside the matrix,"
- **Hero:** Cell $(4, 5) = 30$ probing next position $(5, 5)$.
- **Visuals:** Ghost box below row 4 at row 5 appears with `r=5 ≥ m · OUT OF BOUNDS`.

### Anchor 09: `S03_TURN_LEFT` (F965..F1071)
- **Phrase:** "so we turn from down to left."
- **Hero:** Direction change: Down $\to$ Left.
- **Visuals:** Arrow at cell 30 rotates to LEFT. Compass switches to LEFT.

### Anchor 10: `S03_BOTTOM_SPAN` (F1091..F1247)
- **Phrase:** "Now we move across the bottom edge, from 29 through 25."
- **Hero:** Bottom-row sweep $29 \to 28 \to 27 \to 26 \to 25$.
- **Timing:**
  - F1091: Cell 29 visited
  - F1130: Cell 28 visited
  - F1169: Cell 27 visited
  - F1208: Cell 26 visited
  - F1247: Cell 25 reaches current!

### Anchor 11: `S03_AT25_OUT` (F1265..F1421)
- **Phrase:** "At 25, the next position to the left is outside the matrix,"
- **Hero:** Cell $(4, 0) = 25$ probing $(4, -1)$.
- **Visuals:** Ghost box at column -1 appears with `c=-1 < 0 · OUT OF BOUNDS`.

### Anchor 12: `S03_TURN_UP` (F1432..F1524)
- **Phrase:** "so we turn from left to up."
- **Hero:** Direction change: Left $\to$ Up.
- **Visuals:** Arrow rotates to UP. Compass switches to UP.

### Anchor 13: `S03_LEFT_TO7` (F1524..F1669)
- **Phrase:** "Now we move upward along the left edge until we reach 7."
- **Hero:** Left-column sweep $19 \to 13 \to 7$.
- **Timing:**
  - F1524: Cell 19 visited
  - F1596: Cell 13 visited
  - F1669: Cell 7 reaches current!

### Anchor 14: `S03_DIFFERENT` (F1691..F1772)
- **Phrase:** "And here, something different happens."
- **Hero:** Diagnostic focus on cell 7.
- **Visuals:** Cell 7 spotlighted in amber. Outer boundary completed.

### Anchor 15: `S03_7_INSIDE` (F1796..F1903)
- **Phrase:** "The cell above 7 is still inside the matrix,"
- **Hero:** Probe arrow pointing up to cell $(0, 0) = 1$.
- **Visuals:** Green badge: `CELL (0, 0) IS IN-BOUNDS (0 ≤ r < 5, 0 ≤ c < 6)`.

### Anchor 16: `S03_1_VISITED` (F1917..F2018)
- **Phrase:** "but it contains one, and one was already visited."
- **Hero:** Cell $(0, 0) = 1$ visited check.
- **Visuals:** Cell 1 flashes red warning `⚠️ ALREADY VISITED (visited[0][0] == True)`.

### Anchor 17: `S03_NOT_BORDER` (F2041..F2144)
- **Phrase:** "So this time, we are not turning because of the border,"
- **Hero:** Rejecting border cause.
- **Visuals:** Card: `❌ NOT A BOUNDARY HIT`.

### Anchor 18: `S03_VISITED_CAUSE` (F2163..F2285)
- **Phrase:** "we are turning because the next cell is already visited."
- **Hero:** Affirming visited turning cause.
- **Visuals:** Card: `⚡ CAUSE 2: NEXT CELL ALREADY VISITED → MUST TURN!`.

### Anchor 19: `S03_TURN_RIGHT` (F2285..F2408)
- **Phrase:** "We turn clockwise, from up to right."
- **Hero:** Turn Up $\to$ Right.
- **Visuals:** Arrow at cell 7 rotates to RIGHT. Compass switches to RIGHT.

### Anchor 20: `S03_INNER_POINT` (F2434..F2552)
- **Phrase:** "This is the important point that lets us enter the inner spiral."
- **Hero:** Inner spiral entry gateway at $(1, 1) = 8$.
- **Visuals:** Golden gateway indicator from 7 to 8: `ENTERING INNER LOOP`.

### Anchor 21: `S03_INNER_TOP` (F2572..F2669)
- **Phrase:** "Now we move right, from 8 through 11."
- **Hero:** Inner top sweep $8 \to 9 \to 10 \to 11$.
- **Timing:** F2572 (8), F2604 (9), F2636 (10), F2669 (11).

### Anchor 22: `S03_11_VIS` (F2694..F2831)
- **Phrase:** "At 11, the next cell is 12. 12 is already visited,"
- **Hero:** Probe from 11 pointing right to 12.
- **Visuals:** Cell 12 flashes `⚠️ VISITED`.

### Anchor 23: `S03_TURN_DOWN2` (F2844..F2933)
- **Phrase:** "so we turn from right to down."
- **Hero:** Turn Right $\to$ Down.
- **Visuals:** Arrow rotates to DOWN. Compass switches to DOWN.

### Anchor 24: `S03_INNER_RIGHT` (F2954..F3022)
- **Phrase:** "Now we move down until 23."
- **Hero:** Inner right sweep $17 \to 23$.
- **Timing:** F2954 (17), F3022 (23).

### Anchor 25: `S03_23_VIS` (F3041..F3199)
- **Phrase:** "At 23, the next cell below is 29. 29 is already visited,"
- **Hero:** Probe from 23 pointing down to 29.
- **Visuals:** Cell 29 flashes `⚠️ VISITED`.

### Anchor 26: `S03_TURN_LEFT2` (F3217..F3307)
- **Phrase:** "so we turn from down to left."
- **Hero:** Turn Down $\to$ Left.
- **Visuals:** Arrow rotates to LEFT. Compass switches to LEFT.

### Anchor 27: `S03_INNER_BOTTOM` (F3336..F3403)
- **Phrase:** "Now we move left until 20."
- **Hero:** Inner bottom sweep $22 \to 21 \to 20$.
- **Timing:** F3336 (22), F3370 (21), F3403 (20).

### Anchor 28: `S03_20_VIS` (F3418..F3565)
- **Phrase:** "At 20, the next cell is 19. 19 is already visited,"
- **Hero:** Probe from 20 pointing left to 19.
- **Visuals:** Cell 19 flashes `⚠️ VISITED`.

### Anchor 29: `S03_TURN_UP2` (F3572..F3655)
- **Phrase:** "so we turn from left to up."
- **Hero:** Turn Left $\to$ Up.
- **Visuals:** Arrow rotates to UP. Compass switches to UP.

### Anchor 30: `S03_REACH14` (F3667..F3726)
- **Phrase:** "Moving upward, we reach 14."
- **Hero:** Cell $(2, 1) = 14$ visited.

### Anchor 31: `S03_14_VIS` (F3743..F3867)
- **Phrase:** "The cell above 14 is 8. 8 was already visited,"
- **Hero:** Probe from 14 pointing up to 8.
- **Visuals:** Cell 8 flashes `⚠️ VISITED`.

### Anchor 32: `S03_TURN_RIGHT2` (F3877..F3955)
- **Phrase:** "so we turn from up to right."
- **Hero:** Turn Up $\to$ Right.
- **Visuals:** Arrow rotates to RIGHT. Compass switches to RIGHT.

### Anchor 33: `S03_FINAL_TWO` (F3965..F4106)
- **Phrase:** "Now only the final two cells remain, 15 and 16."
- **Hero:** Innermost sweep $15 \to 16$.
- **Timing:** F3965 (15), F4035 (16 reaches current).

### Anchor 34: `S03_ANSWER30` (F4127..F4280)
- **Phrase:** "After adding 16, the answer contains exactly 30 values,"
- **Hero:** Answer count verification badge: `len(answer) == 30`.

### Anchor 35: `S03_MATRIX30` (F4295..F4439)
- **Phrase:** "and the matrix contains 5 times 6, which is also 30 cells."
- **Hero:** Matrix size match: `m × n = 5 × 6 = 30`.

### Anchor 36: `S03_STOP` (F4459..F4594)
- **Phrase:** "So every cell has been visited exactly once, and we stop."
- **Hero:** Complete matrix highlighted in victorious emerald green. Termination checkmark.

### Anchor 37: `S03_LOGIC` (F4613..F5014)
- **Phrase:** "So method 1 always follows the same logic. Process the current cell, inspect the next position, and turn when that next position is outside or already visited."
- **Hero:** Method 1 Execution Algorithm Invariant Summary Strip:
  `[ 1. VISIT CURRENT ] → [ 2. PROBE NEXT ] → [ 3. OUTSIDE OR VISITED? → TURN ] → [ 4. STEP ]`

### Anchor 38: `S03_CODE_HANDOFF` (F5041..F5124)
- **Phrase:** "Now let's map this exact trace into code."
- **Hero:** Trace $\to$ Code handoff card: `NEXT: SCENE 04 · METHOD 1 CODE IMPLEMENTATION`.

---

## 3. Zero-Collision Validation
- Grid bottom is at Y: 596.
- Callout cards sit at Y: 655 (60px clearance).
- Answer collector track sits at Y: 760 (height 60px).
- Captions sit at Y: 960 (140px clearance above captions).
