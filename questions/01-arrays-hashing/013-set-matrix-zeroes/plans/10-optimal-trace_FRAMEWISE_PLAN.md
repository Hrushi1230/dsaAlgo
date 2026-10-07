# Scene 10 — Method 3 Full Verified Dry-Run Trace: Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `10-optimal-trace`  
**Audio File:** `10-optimal-trace.mp3`  
**Total Duration:** 7061 frames @ 30fps (235.360s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/10-optimal-trace.json` & `sync/10-optimal-trace.anchors.json`  

---

## 1. Scene Overview & Pedagogical Objective

Scene 10 is the definitive, authoritative dry-run trace of the optimal $O(1)$ extra space algorithm on the 5×5 master matrix.
Every single cell inspection, flag setting, marker write, boundary query, interior zeroing, and boundary finalization is shown in strict, unhurried pedagogical clarity across 5 phases:

1. **Phase 1: Boundary History Scan & Protection (F0..F510)**
   - Scan Row 0: `matrix[0][0]=1`, `matrix[0][1]=2`, `matrix[0][2]=0` found $\rightarrow$ `firstRowZero = true`.
   - Scan Col 0: `matrix[0][0]=1`, `matrix[1][0]=6`, `matrix[2][0]=0` found $\rightarrow$ `firstColZero = true`.
   - Both boundary history facts are secured in dedicated memory variables.

2. **Phase 2: Interior Discovery Scan & Outward Projection (F510..F2350)**
   - Row 0 and Col 0 transition into active marker memory.
   - Interior $4 \times 4$ region is scanned:
     - Row 1: $(1,1)=7, (1,2)=8, (1,3)=9, (1,4)=10$ (no zero $\rightarrow$ no marker writes).
     - Row 2: $(2,1)=12, (2,2)=13, (2,3)=14, (2,4)=15$ (no interior zero; note `matrix[2][0]=0` already naturally marked row 2).
     - Row 3: $(3,1)=17, (3,2)=18$, then $(3,3)=0$ discovered! Project outward: `matrix[3][0]` becomes $0$ (was $16$), `matrix[0][3]` becomes $0$ (was $4$). Scan $(3,4)=20$.
     - Row 4: $(4,1)=22, (4,2)=23, (4,3)=24, (4,4)=25$ (no zeros).
   - Discovery pass concludes with the intermediate marker matrix.

3. **Phase 3: Boundary Memory Interpretation (F2350..F3290)**
   - Col 0 reading: Row 1 has 6 (unmarked), Row 2 has 0 (zero!), Row 3 has 0 (zero!), Row 4 has 21 (unmarked).
   - Row 0 reading: Col 1 has 2 (keep), Col 2 has 0 (zero!), Col 3 has 0 (zero!), Col 4 has 5 (keep).

4. **Phase 4: Interior Inward Application Pass (F3290..F4850)**
   - Row 1: $(1,1) \rightarrow 7$ stays; $(1,2) \rightarrow 8$ becomes $0$; $(1,3) \rightarrow 9$ becomes $0$; $(1,4) \rightarrow 10$ stays.
   - Row 2: Row marker is 0 $\rightarrow$ all interior cells become $0$.
   - Row 3: Row marker is 0 $\rightarrow$ all interior cells become $0$.
   - Row 4: Row marker is 21; $(4,1) \rightarrow 22$ stays; $(4,2) \rightarrow 23$ becomes $0$; $(4,3) \rightarrow 24$ becomes $0$; $(4,4) \rightarrow 25$ stays.

5. **Phase 5: Boundary Finalization & Space Confirmation (F4850..F7061)**
   - Boundaries retire from marker duty.
   - Reapply `firstRowZero = true` $\rightarrow$ complete Row 0 becomes all $0$s.
   - Reapply `firstColZero = true` $\rightarrow$ complete Col 0 becomes all $0$s.
   - Master matrix verified row-by-row.
   - Triumphant banner: Correct result using $O(1)$ extra space!

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Dimensions:** 1920 × 1080.
- **Background:** `theme.boardBg` (`#19523C`) dark green chalkboard with subtle chalk dust texture. Zero arbitrary AI cards.
- **Top Header ($Y: 42..108$):**
  - Left: Course badge `● 01 · ARRAYS & HASHING`, `METHOD 3: OPTIMAL TRACE` pill.
  - Center: `OPTIMAL TRACE: MATRIX AS OWN MEMORY` (`fonts.display`, 26px, gold/chalk).
  - Right: `LEETCODE 73` badge.
- **Center Stage — Master 5×5 Matrix ($X: 750..1170$, $Y: 270..690$):**
  - Cell size: $76\text{px} \times 76\text{px}$, gap $10\text{px}$, pitch $86\text{px}$. Total matrix dimension: $420\text{px} \times 420\text{px}$.
  - Centered horizontally at $X = 960$.
  - Row 0 boundary tag placed at $Y: 215..255$ above Row 0.
  - Col 0 boundary tag placed at $X: 610..735$ to the left of Col 0.
- **Right Zone — Saved History Flags ($X: 1240..1520$, $Y: 300..480$):**
  - `firstRowZero` card: $X: 1250, Y: 310$, width $260\text{px}$.
  - `firstColZero` card: $X: 1250, Y: 400$, width $260\text{px}$.
- **Bottom Callout Zone ($X: 460..1460$, $Y: 760..860$):**
  - Step explanation and operation banner with minimum $100\text{px}$ clearance above captions at $Y: 960$.

---

## 3. Framewise Anchor Choreography (All 61 Anchors in 9-Field Schema)

### BEAT 01 — Anchor `S10_START` [F0..F53)
- **ANCHOR:** `Start with our original matrix.` (W0000..W0004)
- **WHAT APPEARS NOW:** Original 5x5 master matrix appears center stage with all original integer values intact (three original zeros at (0,2), (2,0), (3,3)).
- **CENTER-STAGE HERO:** Untouched 5x5 Master Matrix.
- **CAUSE:** Narration introduces the execution on the original master matrix.
- **EFFECT / MOTION:** Grid smoothly fades in at center; cells and index labels crisp.
- **WHAT MUST NOT APPEAR YET:** Do not show boolean flags or marker tags yet.
- **COMPREHENSION HOLD:** F53..F72
- **CLEANUP / EXIT:** Maintain master matrix center stage.
- **PERSISTENT STATE:** Original matrix displayed.

### BEAT 02 — Anchor `S10_FIRSTROW` [F72..F121)
- **ANCHOR:** `First, inspect the first row.` (W0005..W0009)
- **WHAT APPEARS NOW:** Row 0 focus active; scanning across Row 0 cells. Row 0 boundary scan begins.
- **CENTER-STAGE HERO:** Row 0 Boundary Scan.
- **CAUSE:** Checking original Row 0 for any zeros before it is repurposed as marker memory.
- **EFFECT / MOTION:** Row 0 cells highlight with scan beam; active cell outlined in gold.
- **WHAT MUST NOT APPEAR YET:** Do not mutate any cell values.
- **COMPREHENSION HOLD:** F121..F136
- **CLEANUP / EXIT:** Keep scan focus moving along Row 0.
- **PERSISTENT STATE:** Row 0 inspection active.

### BEAT 03 — Anchor `S10_R0_1` [F136..F166)
- **ANCHOR:** `One is not zero.` (W0010..W0013)
- **WHAT APPEARS NOW:** Row 0 focus active; scanning across Row 0 cells. matrix[0][0] = 1 != 0.
- **CENTER-STAGE HERO:** Row 0 Boundary Scan.
- **CAUSE:** Checking original Row 0 for any zeros before it is repurposed as marker memory.
- **EFFECT / MOTION:** Row 0 cells highlight with scan beam; active cell outlined in gold.
- **WHAT MUST NOT APPEAR YET:** Do not mutate any cell values.
- **COMPREHENSION HOLD:** F166..F178
- **CLEANUP / EXIT:** Keep scan focus moving along Row 0.
- **PERSISTENT STATE:** Row 0 inspection active.

### BEAT 04 — Anchor `S10_R0_2` [F178..F217)
- **ANCHOR:** `Two is not zero.` (W0014..W0017)
- **WHAT APPEARS NOW:** Row 0 focus active; scanning across Row 0 cells. matrix[0][1] = 2 != 0.
- **CENTER-STAGE HERO:** Row 0 Boundary Scan.
- **CAUSE:** Checking original Row 0 for any zeros before it is repurposed as marker memory.
- **EFFECT / MOTION:** Row 0 cells highlight with scan beam; active cell outlined in gold.
- **WHAT MUST NOT APPEAR YET:** Do not mutate any cell values.
- **COMPREHENSION HOLD:** F217..F229
- **CLEANUP / EXIT:** Keep scan focus moving along Row 0.
- **PERSISTENT STATE:** Row 0 inspection active.

### BEAT 05 — Anchor `S10_R0_ZERO` [F229..F296)
- **ANCHOR:** `Then we reach zero at column two.` (W0018..W0024)
- **WHAT APPEARS NOW:** Row 0 focus active; scanning across Row 0 cells. matrix[0][2] = 0 encountered.
- **CENTER-STAGE HERO:** Row 0 Boundary Scan.
- **CAUSE:** Checking original Row 0 for any zeros before it is repurposed as marker memory.
- **EFFECT / MOTION:** Row 0 cells highlight with scan beam; active cell outlined in gold.
- **WHAT MUST NOT APPEAR YET:** Do not mutate any cell values.
- **COMPREHENSION HOLD:** F296..F311
- **CLEANUP / EXIT:** Keep scan focus moving along Row 0.
- **PERSISTENT STATE:** Row 0 inspection active.

### BEAT 06 — Anchor `S10_FR_TRUE` [F311..F370)
- **ANCHOR:** `So first row zero becomes true.` (W0025..W0030)
- **WHAT APPEARS NOW:** `firstRowZero` boolean badge materializes in right zone with value TRUE in vivid mint/green.
- **CENTER-STAGE HERO:** `firstRowZero = true` Protection.
- **CAUSE:** Encountered zero at `matrix[0][2]`.
- **EFFECT / MOTION:** `firstRowZero` badge slides in at (X: 1250, Y: 310) with glowing green border pulse.
- **WHAT MUST NOT APPEAR YET:** Do not inspect first column yet.
- **COMPREHENSION HOLD:** F370..F380
- **CLEANUP / EXIT:** `firstRowZero` badge persists in right zone.
- **PERSISTENT STATE:** firstRowZero = true locked.

### BEAT 07 — Anchor `S10_SAFE1` [F380..F424)
- **ANCHOR:** `That fact is now safe.` (W0031..W0035)
- **WHAT APPEARS NOW:** Callout badge `🛡️ FIRST ROW HISTORY SECURED` appears below flags.
- **CENTER-STAGE HERO:** Secured Row 0 Fact.
- **CAUSE:** Row 0 history successfully recorded.
- **EFFECT / MOTION:** Confirmation pulse around `firstRowZero` card.
- **WHAT MUST NOT APPEAR YET:** Col 0 scan not started yet.
- **COMPREHENSION HOLD:** F424..F440
- **CLEANUP / EXIT:** Fade temporary confirmation banner.
- **PERSISTENT STATE:** firstRowZero secured.

### BEAT 08 — Anchor `S10_FIRSTCOL` [F440..F490)
- **ANCHOR:** `Next, inspect the first column.` (W0036..W0040)
- **WHAT APPEARS NOW:** Col 0 focus active; scanning down Col 0 cells. Col 0 boundary scan begins.
- **CENTER-STAGE HERO:** Col 0 Boundary Scan.
- **CAUSE:** Checking original Col 0 for any zeros before repurposing.
- **EFFECT / MOTION:** Col 0 cells highlight with vertical scan beam; cell outlined in gold.
- **WHAT MUST NOT APPEAR YET:** Do not mutate any cell values.
- **COMPREHENSION HOLD:** F490..F514
- **CLEANUP / EXIT:** Keep scan focus moving down Col 0.
- **PERSISTENT STATE:** Col 0 inspection active.

### BEAT 09 — Anchor `S10_C0_1` [F514..F551)
- **ANCHOR:** `One is not zero.` (W0041..W0044)
- **WHAT APPEARS NOW:** Col 0 focus active; scanning down Col 0 cells. matrix[0][0] = 1 != 0.
- **CENTER-STAGE HERO:** Col 0 Boundary Scan.
- **CAUSE:** Checking original Col 0 for any zeros before repurposing.
- **EFFECT / MOTION:** Col 0 cells highlight with vertical scan beam; cell outlined in gold.
- **WHAT MUST NOT APPEAR YET:** Do not mutate any cell values.
- **COMPREHENSION HOLD:** F551..F566
- **CLEANUP / EXIT:** Keep scan focus moving down Col 0.
- **PERSISTENT STATE:** Col 0 inspection active.

### BEAT 10 — Anchor `S10_C0_6` [F566..F610)
- **ANCHOR:** `Six is not zero.` (W0045..W0048)
- **WHAT APPEARS NOW:** Col 0 focus active; scanning down Col 0 cells. matrix[1][0] = 6 != 0.
- **CENTER-STAGE HERO:** Col 0 Boundary Scan.
- **CAUSE:** Checking original Col 0 for any zeros before repurposing.
- **EFFECT / MOTION:** Col 0 cells highlight with vertical scan beam; cell outlined in gold.
- **WHAT MUST NOT APPEAR YET:** Do not mutate any cell values.
- **COMPREHENSION HOLD:** F610..F616
- **CLEANUP / EXIT:** Keep scan focus moving down Col 0.
- **PERSISTENT STATE:** Col 0 inspection active.

### BEAT 11 — Anchor `S10_C0_ZERO` [F616..F677)
- **ANCHOR:** `Then we reach zero at row two.` (W0049..W0055)
- **WHAT APPEARS NOW:** Col 0 focus active; scanning down Col 0 cells. matrix[2][0] = 0 encountered.
- **CENTER-STAGE HERO:** Col 0 Boundary Scan.
- **CAUSE:** Checking original Col 0 for any zeros before repurposing.
- **EFFECT / MOTION:** Col 0 cells highlight with vertical scan beam; cell outlined in gold.
- **WHAT MUST NOT APPEAR YET:** Do not mutate any cell values.
- **COMPREHENSION HOLD:** F677..F689
- **CLEANUP / EXIT:** Keep scan focus moving down Col 0.
- **PERSISTENT STATE:** Col 0 inspection active.

### BEAT 12 — Anchor `S10_FC_TRUE` [F689..F745)
- **ANCHOR:** `So first col zero becomes true.` (W0056..W0061)
- **WHAT APPEARS NOW:** `firstColZero` boolean badge materializes below `firstRowZero` with value TRUE in vivid mint/green.
- **CENTER-STAGE HERO:** `firstColZero = true` Protection.
- **CAUSE:** Encountered zero at `matrix[2][0]`.
- **EFFECT / MOTION:** `firstColZero` badge slides in at (X: 1250, Y: 400) with glowing green border pulse.
- **WHAT MUST NOT APPEAR YET:** Do not start interior scan yet.
- **COMPREHENSION HOLD:** F745..F758
- **CLEANUP / EXIT:** `firstColZero` badge persists in right zone.
- **PERSISTENT STATE:** firstColZero = true locked.

### BEAT 13 — Anchor `S10_BOTH_SAFE` [F758..F815)
- **ANCHOR:** `Now both boundary facts are protected.` (W0062..W0067)
- **WHAT APPEARS NOW:** Both boolean cards pulse together with connected green halo; callout `🛡️ BOTH BOUNDARY HISTORIES PROTECTED`.
- **CENTER-STAGE HERO:** Dual Boundary Protection.
- **CAUSE:** Prerequisite for optimal space algorithm fulfilled.
- **EFFECT / MOTION:** Harmonious green aura across both flags.
- **WHAT MUST NOT APPEAR YET:** Do not repurpose boundaries yet.
- **COMPREHENSION HOLD:** F815..F821
- **CLEANUP / EXIT:** Clear callout.
- **PERSISTENT STATE:** Both flags secured.

### BEAT 14 — Anchor `S10_USEBOUND` [F821..F929)
- **ANCHOR:** `We can use the first row and first column as marker memory.` (W0068..W0079)
- **WHAT APPEARS NOW:** `ROW MARKERS` cyan tag docks to left of Col 0; `COLUMN MARKERS` gold tag docks above Row 0.
- **CENTER-STAGE HERO:** Boundary Role Transformation.
- **CAUSE:** Boundaries can now safely serve as in-place marker memory.
- **EFFECT / MOTION:** Row 0 and Col 0 cell borders glow with role colors; role tags slide in.
- **WHAT MUST NOT APPEAR YET:** Interior scan not started yet.
- **COMPREHENSION HOLD:** F929..F941
- **CLEANUP / EXIT:** Maintain docked marker tags.
- **PERSISTENT STATE:** Boundaries act as marker storage.

### BEAT 15 — Anchor `S10_INTERIOR_SCAN` [F941..F983)
- **ANCHOR:** `Scan only the interior.` (W0080..W0083)
- **WHAT APPEARS NOW:** Interior $4 \times 4$ region ($r: 1..4, c: 1..4$) glows with subtle chalk dashed boundary.
- **CENTER-STAGE HERO:** Interior Scan Region.
- **CAUSE:** Only interior cells are scanned for zeros during discovery.
- **EFFECT / MOTION:** Interior region softly brightens; boundaries stay locked as targets.
- **WHAT MUST NOT APPEAR YET:** Do not inspect specific rows yet.
- **COMPREHENSION HOLD:** F983..F998
- **CLEANUP / EXIT:** Interior boundary stays visible.
- **PERSISTENT STATE:** Interior active.

### BEAT 16 — Anchor `S10_ROW1_SCAN` [F998..F1125)
- **ANCHOR:** `Row one has seven, eight, nine, ten.` (W0084..W0090)
- **WHAT APPEARS NOW:** Row 1 interior cells (7, 8, 9, 10) scan across. Row 1 interior: 7, 8, 9, 10.
- **CENTER-STAGE HERO:** Row 1 Interior Scan.
- **CAUSE:** Checking Row 1 for zeros.
- **EFFECT / MOTION:** Cells highlight sequentially; green check appears indicating no zeros.
- **WHAT MUST NOT APPEAR YET:** No marker writes to boundaries.
- **COMPREHENSION HOLD:** F1125..F1140
- **CLEANUP / EXIT:** Advance to Row 2.
- **PERSISTENT STATE:** Row 1 clean.

### BEAT 17 — Anchor `S10_ROW1_NOZERO` [F1140..F1199)
- **ANCHOR:** `No zero. No marker changes.` (W0091..W0095)
- **WHAT APPEARS NOW:** Row 1 interior cells (7, 8, 9, 10) scan across. Row 1 has no zeros -> no marker writes.
- **CENTER-STAGE HERO:** Row 1 Interior Scan.
- **CAUSE:** Checking Row 1 for zeros.
- **EFFECT / MOTION:** Cells highlight sequentially; green check appears indicating no zeros.
- **WHAT MUST NOT APPEAR YET:** No marker writes to boundaries.
- **COMPREHENSION HOLD:** F1199..F1211
- **CLEANUP / EXIT:** Advance to Row 2.
- **PERSISTENT STATE:** Row 1 clean.

### BEAT 18 — Anchor `S10_ROW2_SCAN` [F1211..F1327)
- **ANCHOR:** `Row two has twelve, thirteen, fourteen, fifteen.` (W0096..W0102)
- **WHAT APPEARS NOW:** Row 2 interior cells (12, 13, 14, 15) scan across. Row 2 interior: 12, 13, 14, 15.
- **CENTER-STAGE HERO:** Row 2 Interior & Natural Marker.
- **CAUSE:** Checking Row 2; noticing `matrix[2][0]=0` already acts as marker naturally.
- **EFFECT / MOTION:** Row 2 scans clean; cell `matrix[2][0]` pulses in cyan as already marked.
- **WHAT MUST NOT APPEAR YET:** No writes needed for Row 2.
- **COMPREHENSION HOLD:** F1327..F1350
- **CLEANUP / EXIT:** Advance to Row 3.
- **PERSISTENT STATE:** Row 2 naturally marked.

### BEAT 19 — Anchor `S10_ROW2_NATURAL` [F1350..F1628)
- **ANCHOR:** `Again, no interior zero, but notice its first column cell is already zero from the original input. So row two is already marked naturally.` (W0103..W0126)
- **WHAT APPEARS NOW:** Row 2 interior cells (12, 13, 14, 15) scan across. matrix[2][0]=0 already marked naturally.
- **CENTER-STAGE HERO:** Row 2 Interior & Natural Marker.
- **CAUSE:** Checking Row 2; noticing `matrix[2][0]=0` already acts as marker naturally.
- **EFFECT / MOTION:** Row 2 scans clean; cell `matrix[2][0]` pulses in cyan as already marked.
- **WHAT MUST NOT APPEAR YET:** No writes needed for Row 2.
- **COMPREHENSION HOLD:** F1628..F1646
- **CLEANUP / EXIT:** Advance to Row 3.
- **PERSISTENT STATE:** Row 2 naturally marked.

### BEAT 20 — Anchor `S10_ROW3_SCAN` [F1646..F1677)
- **ANCHOR:** `Now row three.` (W0127..W0129)
- **WHAT APPEARS NOW:** Row 3 interior scan: checking cells 17 and 18. Row 3 scan begins.
- **CENTER-STAGE HERO:** Row 3 Discovery Scan.
- **CAUSE:** Scanning row 3 interior.
- **EFFECT / MOTION:** Cells (3,1) and (3,2) highlight briefly as non-zero.
- **WHAT MUST NOT APPEAR YET:** Do not jump to (3,3) zero yet.
- **COMPREHENSION HOLD:** F1677..F1684
- **CLEANUP / EXIT:** Proceed to (3,3).
- **PERSISTENT STATE:** Row 3 in progress.

### BEAT 21 — Anchor `S10_ROW3_17_18` [F1684..F1720)
- **ANCHOR:** `Seventeen, eighteen,` (W0130..W0131)
- **WHAT APPEARS NOW:** Row 3 interior scan: checking cells 17 and 18. matrix[3][1]=17, matrix[3][2]=18 checked.
- **CENTER-STAGE HERO:** Row 3 Discovery Scan.
- **CAUSE:** Scanning row 3 interior.
- **EFFECT / MOTION:** Cells (3,1) and (3,2) highlight briefly as non-zero.
- **WHAT MUST NOT APPEAR YET:** Do not jump to (3,3) zero yet.
- **COMPREHENSION HOLD:** F1720..F1735
- **CLEANUP / EXIT:** Proceed to (3,3).
- **PERSISTENT STATE:** Row 3 in progress.

### BEAT 22 — Anchor `S10_ROW3_ZERO` [F1735..F1811)
- **ANCHOR:** `then zero at row three, column three.` (W0132..W0138)
- **WHAT APPEARS NOW:** Interior zero at `matrix[3][3]` illuminates in warning gold with expanding radial radar ripple!
- **CENTER-STAGE HERO:** Critical Interior Zero at (3,3).
- **CAUSE:** Interior zero discovered at row 3, column 3.
- **EFFECT / MOTION:** Cell (3,3) pulses intensely; callout: `🚨 INTERIOR ZERO DISCOVERED AT (3,3)`.
- **WHAT MUST NOT APPEAR YET:** Do not write markers until spoken.
- **COMPREHENSION HOLD:** F1811..F1835
- **CLEANUP / EXIT:** Maintain focus on (3,3).
- **PERSISTENT STATE:** Zero at (3,3) active.

### BEAT 23 — Anchor `S10_IMPORTANT_ZERO` [F1835..F1900)
- **ANCHOR:** `This is our important interior zero.` (W0139..W0144)
- **WHAT APPEARS NOW:** Interior zero at `matrix[3][3]` illuminates in warning gold with expanding radial radar ripple!
- **CENTER-STAGE HERO:** Critical Interior Zero at (3,3).
- **CAUSE:** Interior zero discovered at row 3, column 3.
- **EFFECT / MOTION:** Cell (3,3) pulses intensely; callout: `🚨 INTERIOR ZERO DISCOVERED AT (3,3)`.
- **WHAT MUST NOT APPEAR YET:** Do not write markers until spoken.
- **COMPREHENSION HOLD:** F1900..F1913
- **CLEANUP / EXIT:** Maintain focus on (3,3).
- **PERSISTENT STATE:** Zero at (3,3) active.

### BEAT 24 — Anchor `S10_MARK_ROW` [F1913..F1939)
- **ANCHOR:** `Mark its row.` (W0145..W0147)
- **WHAT APPEARS NOW:** Cyan projection ray shoots from (3,3) leftward to `matrix[3][0]`; value 16 morphs into 0!
- **CENTER-STAGE HERO:** Row Marker Write: matrix[3][0] = 0.
- **CAUSE:** Row 3 must be marked for zeroing.
- **EFFECT / MOTION:** Cyan beam travels left; number 16 strikes through and 0 chalk text fades in with cyan glow.
- **WHAT MUST NOT APPEAR YET:** Column marker not written yet.
- **COMPREHENSION HOLD:** F1939..F1954
- **CLEANUP / EXIT:** Row marker write complete.
- **PERSISTENT STATE:** matrix[3][0] = 0.

### BEAT 25 — Anchor `S10_WRITE_M30` [F1954..F2082)
- **ANCHOR:** `Matrix, three. Zero changes from sixteen to zero.` (W0148..W0155)
- **WHAT APPEARS NOW:** Cyan projection ray shoots from (3,3) leftward to `matrix[3][0]`; value 16 morphs into 0!
- **CENTER-STAGE HERO:** Row Marker Write: matrix[3][0] = 0.
- **CAUSE:** Row 3 must be marked for zeroing.
- **EFFECT / MOTION:** Cyan beam travels left; number 16 strikes through and 0 chalk text fades in with cyan glow.
- **WHAT MUST NOT APPEAR YET:** Column marker not written yet.
- **COMPREHENSION HOLD:** F2082..F2098
- **CLEANUP / EXIT:** Row marker write complete.
- **PERSISTENT STATE:** matrix[3][0] = 0.

### BEAT 26 — Anchor `S10_MARK_COL` [F2098..F2132)
- **ANCHOR:** `Then mark its column.` (W0156..W0159)
- **WHAT APPEARS NOW:** Gold projection ray shoots from (3,3) upward to `matrix[0][3]`; value 4 morphs into 0!
- **CENTER-STAGE HERO:** Column Marker Write: matrix[0][3] = 0.
- **CAUSE:** Column 3 must be marked for zeroing.
- **EFFECT / MOTION:** Gold beam travels up; number 4 strikes through and 0 chalk text fades in with gold glow.
- **WHAT MUST NOT APPEAR YET:** Interior not mutated yet.
- **COMPREHENSION HOLD:** F2132..F2142
- **CLEANUP / EXIT:** Column marker write complete.
- **PERSISTENT STATE:** matrix[0][3] = 0.

### BEAT 27 — Anchor `S10_WRITE_M03` [F2142..F2246)
- **ANCHOR:** `Matrix zero. Three changes from four to zero.` (W0160..W0167)
- **WHAT APPEARS NOW:** Gold projection ray shoots from (3,3) upward to `matrix[0][3]`; value 4 morphs into 0!
- **CENTER-STAGE HERO:** Column Marker Write: matrix[0][3] = 0.
- **CAUSE:** Column 3 must be marked for zeroing.
- **EFFECT / MOTION:** Gold beam travels up; number 4 strikes through and 0 chalk text fades in with gold glow.
- **WHAT MUST NOT APPEAR YET:** Interior not mutated yet.
- **COMPREHENSION HOLD:** F2246..F2272
- **CLEANUP / EXIT:** Column marker write complete.
- **PERSISTENT STATE:** matrix[0][3] = 0.

### BEAT 28 — Anchor `S10_SENT_INFO` [F2272..F2411)
- **ANCHOR:** `The zero at row three, column three has now sent its information to the boundary.` (W0168..W0182)
- **WHAT APPEARS NOW:** Both projection rays pulse gently connecting (3,3) to its boundary markers (3,0) and (0,3).
- **CENTER-STAGE HERO:** Information Projection Confirmed.
- **CAUSE:** Zero at (3,3) has safely recorded its coordinates in the boundary.
- **EFFECT / MOTION:** Callout: `📡 ZERO INFORMATION SAFELY PROJECTED TO BOUNDARIES`.
- **WHAT MUST NOT APPEAR YET:** Do not resume scan yet.
- **COMPREHENSION HOLD:** F2411..F2425
- **CLEANUP / EXIT:** Fade projection rays.
- **PERSISTENT STATE:** Markers recorded.

### BEAT 29 — Anchor `S10_ROW3_20` [F2425..F2523)
- **ANCHOR:** `Continue the scan. Twenty is not zero.` (W0183..W0189)
- **WHAT APPEARS NOW:** Cell `matrix[3][4]=20` highlighted and confirmed non-zero.
- **CENTER-STAGE HERO:** Cell (3,4) Scan.
- **CAUSE:** Completing Row 3 scan.
- **EFFECT / MOTION:** Cell 20 pulses green.
- **WHAT MUST NOT APPEAR YET:** Row 4 not scanned yet.
- **COMPREHENSION HOLD:** F2523..F2537
- **CLEANUP / EXIT:** Proceed to Row 4.
- **PERSISTENT STATE:** Row 3 complete.

### BEAT 30 — Anchor `S10_ROW4_SCAN` [F2537..F2691)
- **ANCHOR:** `Row four has no interior zero. So there are no more marker rights.` (W0190..W0202)
- **WHAT APPEARS NOW:** Row 4 interior cells (22, 23, 24, 25) scan across; all confirmed non-zero.
- **CENTER-STAGE HERO:** Row 4 Scan.
- **CAUSE:** Checking final interior row.
- **EFFECT / MOTION:** Horizontal scan beam sweeps Row 4; green checks appear.
- **WHAT MUST NOT APPEAR YET:** Do not modify markers.
- **COMPREHENSION HOLD:** F2691..F2717
- **CLEANUP / EXIT:** Discovery pass ends.
- **PERSISTENT STATE:** Row 4 clean.

### BEAT 31 — Anchor `S10_MARKER_STAGE` [F2717..F2765)
- **ANCHOR:** `Our marker matrix is now.` (W0203..W0207)
- **WHAT APPEARS NOW:** Matrix state locks as the Intermediate Marker Matrix. All 5 rows shown clearly.
- **CENTER-STAGE HERO:** Marker Matrix State.
- **CAUSE:** Discovery pass complete.
- **EFFECT / MOTION:** Entire matrix glints; boundary marker cells (0,2), (0,3), (2,0), (3,0) highlighted.
- **WHAT MUST NOT APPEAR YET:** Do not zero interior cells yet.
- **COMPREHENSION HOLD:** F2765..F2773
- **CLEANUP / EXIT:** Prepare for boundary reading.
- **PERSISTENT STATE:** Marker matrix locked.

### BEAT 32 — Anchor `S10_READ_BOUND` [F2773..F2829)
- **ANCHOR:** `Now read the boundary as memory.` (W0208..W0213)
- **WHAT APPEARS NOW:** Boundary cells light up as dedicated query registers; callout: `📖 READING BOUNDARIES AS MEMORY`.
- **CENTER-STAGE HERO:** Boundary Memory Reading Phase.
- **CAUSE:** Transitioning to application pass.
- **EFFECT / MOTION:** Cyan and gold boundary borders pulse in sequence.
- **WHAT MUST NOT APPEAR YET:** Do not update interior yet.
- **COMPREHENSION HOLD:** F2829..F2848
- **CLEANUP / EXIT:** Boundary reading begins.
- **PERSISTENT STATE:** Reading boundaries.

### BEAT 33 — Anchor `S10_FC_R1` [F2848..F2989)
- **ANCHOR:** `In the first column, row one has six. So row one itself is not marked.` (W0214..W0228)
- **WHAT APPEARS NOW:** Reading Col 0 cell for row status: Col 0 check: matrix[1][0]=6 -> Row 1 not marked.
- **CENTER-STAGE HERO:** Col 0 Inspection: Col 0 check: matrix[1][0]=6 -> Row 1 not marked.
- **CAUSE:** Col 0 cells dictate which rows must become zero.
- **EFFECT / MOTION:** Col 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO ROW (if 0).
- **WHAT MUST NOT APPEAR YET:** Interior row not zeroed yet.
- **COMPREHENSION HOLD:** F2989..F3002
- **CLEANUP / EXIT:** Proceed down Col 0.
- **PERSISTENT STATE:** Row marker verified.

### BEAT 34 — Anchor `S10_FC_R2` [F3002..F3115)
- **ANCHOR:** `Row two has zero. So row two must become zero.` (W0229..W0238)
- **WHAT APPEARS NOW:** Reading Col 0 cell for row status: Col 0 check: matrix[2][0]=0 -> Row 2 marked.
- **CENTER-STAGE HERO:** Col 0 Inspection: Col 0 check: matrix[2][0]=0 -> Row 2 marked.
- **CAUSE:** Col 0 cells dictate which rows must become zero.
- **EFFECT / MOTION:** Col 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO ROW (if 0).
- **WHAT MUST NOT APPEAR YET:** Interior row not zeroed yet.
- **COMPREHENSION HOLD:** Immediate transition
- **CLEANUP / EXIT:** Proceed down Col 0.
- **PERSISTENT STATE:** Row marker verified.

### BEAT 35 — Anchor `S10_FC_R3` [F3115..F3236)
- **ANCHOR:** `Row three has zero. So row three must become zero.` (W0239..W0248)
- **WHAT APPEARS NOW:** Reading Col 0 cell for row status: Col 0 check: matrix[3][0]=0 -> Row 3 marked.
- **CENTER-STAGE HERO:** Col 0 Inspection: Col 0 check: matrix[3][0]=0 -> Row 3 marked.
- **CAUSE:** Col 0 cells dictate which rows must become zero.
- **EFFECT / MOTION:** Col 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO ROW (if 0).
- **WHAT MUST NOT APPEAR YET:** Interior row not zeroed yet.
- **COMPREHENSION HOLD:** F3236..F3247
- **CLEANUP / EXIT:** Proceed down Col 0.
- **PERSISTENT STATE:** Row marker verified.

### BEAT 36 — Anchor `S10_FC_R4` [F3247..F3362)
- **ANCHOR:** `Row four has twenty-one. So row four itself is not marked.` (W0249..W0260)
- **WHAT APPEARS NOW:** Reading Col 0 cell for row status: Col 0 check: matrix[4][0]=21 -> Row 4 not marked.
- **CENTER-STAGE HERO:** Col 0 Inspection: Col 0 check: matrix[4][0]=21 -> Row 4 not marked.
- **CAUSE:** Col 0 cells dictate which rows must become zero.
- **EFFECT / MOTION:** Col 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO ROW (if 0).
- **WHAT MUST NOT APPEAR YET:** Interior row not zeroed yet.
- **COMPREHENSION HOLD:** F3362..F3382
- **CLEANUP / EXIT:** Proceed down Col 0.
- **PERSISTENT STATE:** Row marker verified.

### BEAT 37 — Anchor `S10_FR_C1` [F3382..F3504)
- **ANCHOR:** `Across the first row, column one has two. Keep that column.` (W0261..W0271)
- **WHAT APPEARS NOW:** Reading Row 0 cell for column status: Row 0 check: matrix[0][1]=2 -> Col 1 kept.
- **CENTER-STAGE HERO:** Row 0 Inspection: Row 0 check: matrix[0][1]=2 -> Col 1 kept.
- **CAUSE:** Row 0 cells dictate which columns must become zero.
- **EFFECT / MOTION:** Row 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO COL (if 0).
- **WHAT MUST NOT APPEAR YET:** Interior column not zeroed yet.
- **COMPREHENSION HOLD:** F3504..F3532
- **CLEANUP / EXIT:** Proceed across Row 0.
- **PERSISTENT STATE:** Column marker verified.

### BEAT 38 — Anchor `S10_FR_C2` [F3532..F3615)
- **ANCHOR:** `Column two has zero. Zero that column.` (W0272..W0278)
- **WHAT APPEARS NOW:** Reading Row 0 cell for column status: Row 0 check: matrix[0][2]=0 -> Col 2 marked.
- **CENTER-STAGE HERO:** Row 0 Inspection: Row 0 check: matrix[0][2]=0 -> Col 2 marked.
- **CAUSE:** Row 0 cells dictate which columns must become zero.
- **EFFECT / MOTION:** Row 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO COL (if 0).
- **WHAT MUST NOT APPEAR YET:** Interior column not zeroed yet.
- **COMPREHENSION HOLD:** F3615..F3635
- **CLEANUP / EXIT:** Proceed across Row 0.
- **PERSISTENT STATE:** Column marker verified.

### BEAT 39 — Anchor `S10_FR_C3` [F3635..F3721)
- **ANCHOR:** `Column three has zero. Zero that column.` (W0279..W0285)
- **WHAT APPEARS NOW:** Reading Row 0 cell for column status: Row 0 check: matrix[0][3]=0 -> Col 3 marked.
- **CENTER-STAGE HERO:** Row 0 Inspection: Row 0 check: matrix[0][3]=0 -> Col 3 marked.
- **CAUSE:** Row 0 cells dictate which columns must become zero.
- **EFFECT / MOTION:** Row 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO COL (if 0).
- **WHAT MUST NOT APPEAR YET:** Interior column not zeroed yet.
- **COMPREHENSION HOLD:** F3721..F3741
- **CLEANUP / EXIT:** Proceed across Row 0.
- **PERSISTENT STATE:** Column marker verified.

### BEAT 40 — Anchor `S10_FR_C4` [F3741..F3820)
- **ANCHOR:** `Column four has five. Keep that column.` (W0286..W0292)
- **WHAT APPEARS NOW:** Reading Row 0 cell for column status: Row 0 check: matrix[0][4]=5 -> Col 4 kept.
- **CENTER-STAGE HERO:** Row 0 Inspection: Row 0 check: matrix[0][4]=5 -> Col 4 kept.
- **CAUSE:** Row 0 cells dictate which columns must become zero.
- **EFFECT / MOTION:** Row 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO COL (if 0).
- **WHAT MUST NOT APPEAR YET:** Interior column not zeroed yet.
- **COMPREHENSION HOLD:** Immediate transition
- **CLEANUP / EXIT:** Proceed across Row 0.
- **PERSISTENT STATE:** Column marker verified.

### BEAT 41 — Anchor `S10_APPLY_INTERIOR` [F3820..F3893)
- **ANCHOR:** `Now apply those markers to the interior.` (W0293..W0299)
- **WHAT APPEARS NOW:** Direction reverses! Large inward arrows point from boundaries into the interior.
- **CENTER-STAGE HERO:** Application Pass: Inward Decision.
- **CAUSE:** Interior cells now query their row & column markers.
- **EFFECT / MOTION:** Inward flow arrows animate; callout: `🎯 INWARD PASS: CELLS QUERY (ROW_MARKER == 0 || COL_MARKER == 0)`.
- **WHAT MUST NOT APPEAR YET:** Do not zero all cells at once.
- **COMPREHENSION HOLD:** F3893..F3913
- **CLEANUP / EXIT:** Begin Row 1 application.
- **PERSISTENT STATE:** Inward pass active.

### BEAT 42 — Anchor `S10_APP_R1` [F3913..F3949)
- **ANCHOR:** `Start with row one.` (W0300..W0303)
- **WHAT APPEARS NOW:** Row 1 interior cell evaluation: Row 1 interior update.
- **CENTER-STAGE HERO:** Row 1 Application: Row 1 interior update.
- **CAUSE:** Testing row marker (6) and col marker for each cell in Row 1.
- **EFFECT / MOTION:** Query rays from left (6) and top markers hit active cell; cell value updates accordingly.
- **WHAT MUST NOT APPEAR YET:** Do not touch Row 2 yet.
- **COMPREHENSION HOLD:** F3949..F3966
- **CLEANUP / EXIT:** Advance to next cell.
- **PERSISTENT STATE:** Row 1 updated.

### BEAT 43 — Anchor `S10_APP_R1C1` [F3966..F4214)
- **ANCHOR:** `At row one, column one, the row marker is six. And the column marker is two. Neither is zero. So seven stays.` (W0304..W0325)
- **WHAT APPEARS NOW:** Row 1 interior cell evaluation: Cell (1,1): markers 6 & 2 -> 7 stays.
- **CENTER-STAGE HERO:** Row 1 Application: Cell (1,1): markers 6 & 2 -> 7 stays.
- **CAUSE:** Testing row marker (6) and col marker for each cell in Row 1.
- **EFFECT / MOTION:** Query rays from left (6) and top markers hit active cell; cell value updates accordingly.
- **WHAT MUST NOT APPEAR YET:** Do not touch Row 2 yet.
- **COMPREHENSION HOLD:** F4214..F4229
- **CLEANUP / EXIT:** Advance to next cell.
- **PERSISTENT STATE:** Row 1 updated.

### BEAT 44 — Anchor `S10_APP_R1C2` [F4229..F4387)
- **ANCHOR:** `At column two, the top marker is zero. So eight becomes zero.` (W0326..W0337)
- **WHAT APPEARS NOW:** Row 1 interior cell evaluation: Cell (1,2): top marker 0 -> 8 becomes 0.
- **CENTER-STAGE HERO:** Row 1 Application: Cell (1,2): top marker 0 -> 8 becomes 0.
- **CAUSE:** Testing row marker (6) and col marker for each cell in Row 1.
- **EFFECT / MOTION:** Query rays from left (6) and top markers hit active cell; cell value updates accordingly.
- **WHAT MUST NOT APPEAR YET:** Do not touch Row 2 yet.
- **COMPREHENSION HOLD:** F4387..F4398
- **CLEANUP / EXIT:** Advance to next cell.
- **PERSISTENT STATE:** Row 1 updated.

### BEAT 45 — Anchor `S10_APP_R1C3` [F4398..F4784)
- **ANCHOR:** `At column three, the top marker is also zero. So it is row marker is zero.` (W0338..W0352)
- **WHAT APPEARS NOW:** Row 1 interior cell evaluation: Cell (1,3): top marker 0 -> 9 becomes 0.
- **CENTER-STAGE HERO:** Row 1 Application: Cell (1,3): top marker 0 -> 9 becomes 0.
- **CAUSE:** Testing row marker (6) and col marker for each cell in Row 1.
- **EFFECT / MOTION:** Query rays from left (6) and top markers hit active cell; cell value updates accordingly.
- **WHAT MUST NOT APPEAR YET:** Do not touch Row 2 yet.
- **COMPREHENSION HOLD:** F4784..F4787
- **CLEANUP / EXIT:** Advance to next cell.
- **PERSISTENT STATE:** Row 1 updated.

### BEAT 46 — Anchor `S10_APP_R2` [F4787..F4903)
- **ANCHOR:** `So every interior cell in row two becomes zero.` (W0353..W0361)
- **WHAT APPEARS NOW:** Row 2 row marker is 0! Inward wave turns all Row 2 interior cells (12, 13, 14, 15) to 0 simultaneously.
- **CENTER-STAGE HERO:** Row 2 Complete Zeroing.
- **CAUSE:** matrix[2][0] == 0 marks entire row.
- **EFFECT / MOTION:** Cyan zeroing sweep washes across Row 2 interior; values flip to 0 in mint chalk.
- **WHAT MUST NOT APPEAR YET:** Row 3 not updated yet.
- **COMPREHENSION HOLD:** F4903..F4923
- **CLEANUP / EXIT:** Row 2 interior all zeroed.
- **PERSISTENT STATE:** Row 2 interior = 0.

### BEAT 47 — Anchor `S10_APP_R3` [F4923..F5082)
- **ANCHOR:** `Row three is also marked. So every interior cell in row three becomes zero.` (W0362..W0375)
- **WHAT APPEARS NOW:** Row 3 row marker is 0! Inward wave turns all Row 3 interior cells (17, 18, 0, 20) to 0 simultaneously.
- **CENTER-STAGE HERO:** Row 3 Complete Zeroing.
- **CAUSE:** matrix[3][0] == 0 marks entire row.
- **EFFECT / MOTION:** Cyan zeroing sweep washes across Row 3 interior; values flip to 0 in mint chalk.
- **WHAT MUST NOT APPEAR YET:** Row 4 not updated yet.
- **COMPREHENSION HOLD:** F5082..F5098
- **CLEANUP / EXIT:** Row 3 interior all zeroed.
- **PERSISTENT STATE:** Row 3 interior = 0.

### BEAT 48 — Anchor `S10_APP_R4_START` [F5098..F5195)
- **ANCHOR:** `Now row four, its row marker is not zero.` (W0376..W0384)
- **WHAT APPEARS NOW:** Row 4 interior cell evaluation: Row 4 interior check: row marker is 21 != 0.
- **CENTER-STAGE HERO:** Row 4 Application: Row 4 interior check: row marker is 21 != 0.
- **CAUSE:** Row marker is 21 (non-zero); only column markers trigger zeroing.
- **EFFECT / MOTION:** Top column marker queries determine cell fate: 22 stays, 23->0, 24->0, 25 stays.
- **WHAT MUST NOT APPEAR YET:** Do not finalize boundaries yet.
- **COMPREHENSION HOLD:** F5195..F5214
- **CLEANUP / EXIT:** Advance through Row 4.
- **PERSISTENT STATE:** Row 4 updated.

### BEAT 49 — Anchor `S10_APP_R4C1` [F5214..F5296)
- **ANCHOR:** `Column one is not marked. So twenty-two stays.` (W0385..W0393)
- **WHAT APPEARS NOW:** Row 4 interior cell evaluation: Cell (4,1): col 1 not marked -> 22 stays.
- **CENTER-STAGE HERO:** Row 4 Application: Cell (4,1): col 1 not marked -> 22 stays.
- **CAUSE:** Row marker is 21 (non-zero); only column markers trigger zeroing.
- **EFFECT / MOTION:** Top column marker queries determine cell fate: 22 stays, 23->0, 24->0, 25 stays.
- **WHAT MUST NOT APPEAR YET:** Do not finalize boundaries yet.
- **COMPREHENSION HOLD:** F5296..F5313
- **CLEANUP / EXIT:** Advance through Row 4.
- **PERSISTENT STATE:** Row 4 updated.

### BEAT 50 — Anchor `S10_APP_R4C2` [F5313..F5427)
- **ANCHOR:** `Column two is marked. So twenty-three becomes zero.` (W0394..W0402)
- **WHAT APPEARS NOW:** Row 4 interior cell evaluation: Cell (4,2): col 2 marked -> 23 becomes 0.
- **CENTER-STAGE HERO:** Row 4 Application: Cell (4,2): col 2 marked -> 23 becomes 0.
- **CAUSE:** Row marker is 21 (non-zero); only column markers trigger zeroing.
- **EFFECT / MOTION:** Top column marker queries determine cell fate: 22 stays, 23->0, 24->0, 25 stays.
- **WHAT MUST NOT APPEAR YET:** Do not finalize boundaries yet.
- **COMPREHENSION HOLD:** F5427..F5439
- **CLEANUP / EXIT:** Advance through Row 4.
- **PERSISTENT STATE:** Row 4 updated.

### BEAT 51 — Anchor `S10_APP_R4C3` [F5439..F5541)
- **ANCHOR:** `Column three is marked. So twenty-four becomes zero.` (W0403..W0411)
- **WHAT APPEARS NOW:** Row 4 interior cell evaluation: Cell (4,3): col 3 marked -> 24 becomes 0.
- **CENTER-STAGE HERO:** Row 4 Application: Cell (4,3): col 3 marked -> 24 becomes 0.
- **CAUSE:** Row marker is 21 (non-zero); only column markers trigger zeroing.
- **EFFECT / MOTION:** Top column marker queries determine cell fate: 22 stays, 23->0, 24->0, 25 stays.
- **WHAT MUST NOT APPEAR YET:** Do not finalize boundaries yet.
- **COMPREHENSION HOLD:** F5541..F5554
- **CLEANUP / EXIT:** Advance through Row 4.
- **PERSISTENT STATE:** Row 4 updated.

### BEAT 52 — Anchor `S10_APP_R4C4` [F5554..F5644)
- **ANCHOR:** `Column four is not marked. So twenty-five stays.` (W0412..W0420)
- **WHAT APPEARS NOW:** Row 4 interior cell evaluation: Cell (4,4): col 4 not marked -> 25 stays.
- **CENTER-STAGE HERO:** Row 4 Application: Cell (4,4): col 4 not marked -> 25 stays.
- **CAUSE:** Row marker is 21 (non-zero); only column markers trigger zeroing.
- **EFFECT / MOTION:** Top column marker queries determine cell fate: 22 stays, 23->0, 24->0, 25 stays.
- **WHAT MUST NOT APPEAR YET:** Do not finalize boundaries yet.
- **COMPREHENSION HOLD:** F5644..F5661
- **CLEANUP / EXIT:** Advance through Row 4.
- **PERSISTENT STATE:** Row 4 updated.

### BEAT 53 — Anchor `S10_INTERIOR_FINISHED` [F5661..F5806)
- **ANCHOR:** `The interior is finished. At this point, the matrix is this form.` (W0421..W0432)
- **WHAT APPEARS NOW:** Interior application pass complete! Matrix shows updated interior with boundary markers still intact.
- **CENTER-STAGE HERO:** Interior Finished State.
- **CAUSE:** All interior cells (r:1..4, c:1..4) have been updated.
- **EFFECT / MOTION:** Interior frame glows mint; boundary marker role tags begin to dim.
- **WHAT MUST NOT APPEAR YET:** Boundaries not finalized yet.
- **COMPREHENSION HOLD:** F5806..F5828
- **CLEANUP / EXIT:** Prepare for boundary finalization.
- **PERSISTENT STATE:** Interior complete.

### BEAT 54 — Anchor `S10_MARKER_JOB_DONE` [F5828..F5890)
- **ANCHOR:** `Now the marker job is done.` (W0433..W0438)
- **WHAT APPEARS NOW:** `ROW MARKERS` and `COLUMN MARKERS` tags fade out gracefully; boundaries retire from marker role.
- **CENTER-STAGE HERO:** Marker Job Concluded.
- **CAUSE:** Interior is fully updated; boundary markers are no longer needed.
- **EFFECT / MOTION:** Marker role tags dissolve; boundaries return to normal cell styling.
- **WHAT MUST NOT APPEAR YET:** Do not zero Row 0 or Col 0 yet.
- **COMPREHENSION HOLD:** F5890..F5912
- **CLEANUP / EXIT:** Focus shifts to saved booleans.
- **PERSISTENT STATE:** Marker duty ended.

### BEAT 55 — Anchor `S10_FINALIZE_R0_CALL` [F5912..F5979)
- **ANCHOR:** `Bring back the saved first row fact.` (W0439..W0445)
- **WHAT APPEARS NOW:** `firstRowZero` card on right pulses intensely; golden beam shoots across Row 0 turning all 5 cells to 0!
- **CENTER-STAGE HERO:** Row 0 Finalization (firstRowZero = true).
- **CAUSE:** Original Row 0 had a zero, recorded in firstRowZero.
- **EFFECT / MOTION:** Row 0 cells (1, 2, 0, 0, 5) all flip to 0 in glowing mint chalk.
- **WHAT MUST NOT APPEAR YET:** Col 0 not finalized yet.
- **COMPREHENSION HOLD:** F5979..F5993
- **CLEANUP / EXIT:** Row 0 fully zeroed.
- **PERSISTENT STATE:** Row 0 = [0, 0, 0, 0, 0].

### BEAT 56 — Anchor `S10_FINALIZE_R0_EXEC` [F5993..F6113)
- **ANCHOR:** `First row zero is true. So the complete first row becomes zero.` (W0446..W0457)
- **WHAT APPEARS NOW:** `firstRowZero` card on right pulses intensely; golden beam shoots across Row 0 turning all 5 cells to 0!
- **CENTER-STAGE HERO:** Row 0 Finalization (firstRowZero = true).
- **CAUSE:** Original Row 0 had a zero, recorded in firstRowZero.
- **EFFECT / MOTION:** Row 0 cells (1, 2, 0, 0, 5) all flip to 0 in glowing mint chalk.
- **WHAT MUST NOT APPEAR YET:** Col 0 not finalized yet.
- **COMPREHENSION HOLD:** F6113..F6116
- **CLEANUP / EXIT:** Row 0 fully zeroed.
- **PERSISTENT STATE:** Row 0 = [0, 0, 0, 0, 0].

### BEAT 57 — Anchor `S10_FINALIZE_C0_CALL` [F6116..F6179)
- **ANCHOR:** `Then bring back the first column fact.` (W0458..W0464)
- **WHAT APPEARS NOW:** `firstColZero` card on right pulses intensely; cyan beam shoots down Col 0 turning all 5 cells to 0!
- **CENTER-STAGE HERO:** Col 0 Finalization (firstColZero = true).
- **CAUSE:** Original Col 0 had a zero, recorded in firstColZero.
- **EFFECT / MOTION:** Col 0 cells (0, 6, 0, 0, 21) all flip to 0 in glowing mint chalk.
- **WHAT MUST NOT APPEAR YET:** Do not show final summary banner yet.
- **COMPREHENSION HOLD:** F6179..F6200
- **CLEANUP / EXIT:** Col 0 fully zeroed.
- **PERSISTENT STATE:** Col 0 = [0, 0, 0, 0, 0]^T.

### BEAT 58 — Anchor `S10_FINALIZE_C0_EXEC` [F6200..F6332)
- **ANCHOR:** `First col zero is also true. So the complete column becomes zero.` (W0465..W0476)
- **WHAT APPEARS NOW:** `firstColZero` card on right pulses intensely; cyan beam shoots down Col 0 turning all 5 cells to 0!
- **CENTER-STAGE HERO:** Col 0 Finalization (firstColZero = true).
- **CAUSE:** Original Col 0 had a zero, recorded in firstColZero.
- **EFFECT / MOTION:** Col 0 cells (0, 6, 0, 0, 21) all flip to 0 in glowing mint chalk.
- **WHAT MUST NOT APPEAR YET:** Do not show final summary banner yet.
- **COMPREHENSION HOLD:** F6332..F6352
- **CLEANUP / EXIT:** Col 0 fully zeroed.
- **PERSISTENT STATE:** Col 0 = [0, 0, 0, 0, 0]^T.

### BEAT 59 — Anchor `S10_FINAL_MATRIX` [F6352..F6962)
- **ANCHOR:** `Our final matrix is zero... 22, zero, zero, zero, 25.` (W0477..W0508)
- **WHAT APPEARS NOW:** Entire final matrix shines in verified mint chalk; every cell confirmed row-by-row.
- **CENTER-STAGE HERO:** Verified Final Matrix.
- **CAUSE:** Algorithm trace complete; matrix matches ground truth.
- **EFFECT / MOTION:** Soft mint halo surrounds the 5x5 matrix.
- **WHAT MUST NOT APPEAR YET:** Do not show O(1) banner yet.
- **COMPREHENSION HOLD:** F6962..F6977
- **CLEANUP / EXIT:** Hold final matrix.
- **PERSISTENT STATE:** Final matrix verified.

### BEAT 60 — Anchor `S10_CORRECT_RESULT` [F6977..F7013)
- **ANCHOR:** `That is the correct result.` (W0509..W0513)
- **WHAT APPEARS NOW:** Triumphant banner: `✨ VERIFIED: CORRECT RESULT · O(1) EXTRA SPACE` in gold and mint!
- **CENTER-STAGE HERO:** Optimal Algorithm Triumph.
- **CAUSE:** All constraints and testcases successfully solved in constant extra memory.
- **EFFECT / MOTION:** Celebratory chalk particle sparkles; banner springs up at center bottom.
- **WHAT MUST NOT APPEAR YET:** Scene ends naturally.
- **COMPREHENSION HOLD:** F7013..F7019
- **CLEANUP / EXIT:** Hold until scene completion at F7061.
- **PERSISTENT STATE:** Trace successfully completed.

### BEAT 61 — Anchor `S10_O1_SPACE` [F7019..F7061)
- **ANCHOR:** `Using constant extra space.` (W0514..W0517)
- **WHAT APPEARS NOW:** Triumphant banner: `✨ VERIFIED: CORRECT RESULT · O(1) EXTRA SPACE` in gold and mint!
- **CENTER-STAGE HERO:** Optimal Algorithm Triumph.
- **CAUSE:** All constraints and testcases successfully solved in constant extra memory.
- **EFFECT / MOTION:** Celebratory chalk particle sparkles; banner springs up at center bottom.
- **WHAT MUST NOT APPEAR YET:** Scene ends naturally.
- **COMPREHENSION HOLD:** Immediate transition
- **CLEANUP / EXIT:** Hold until scene completion at F7061.
- **PERSISTENT STATE:** Trace successfully completed.

---

## 4. Verification Checkpoints

- Total Frames: 7061 frames @ 30fps = 235.36s.
- Invariants Checked:
  - Zero vertical collision between matrix bottom ($Y: 690$) and callout container ($Y: 760$).
  - Minimum $100\text{px}$ clearance between callouts ($Y: 860$) and bottom captions ($Y: 960$).
  - No CSS transitions or wall-clock timestamps.
  - All mutations strictly match locked algorithm truth.