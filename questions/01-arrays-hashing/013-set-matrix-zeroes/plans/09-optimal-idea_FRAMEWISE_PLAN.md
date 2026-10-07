# Scene 09 — Method 3 Conceptual Overview: Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `09-optimal-idea`  
**Audio File:** `09-optimal-idea.mp3`  
**Total Duration:** 3209 frames @ 30fps (106.960s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/09-optimal-idea.json` & `sync/09-optimal-idea.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 09 teaches the optimal constant-space solution as an **information-flow system** before master trace execution:
1. **Protected History**: We already secured original boundary facts in `firstRowZero` and `firstColZero`.
2. **Boundary Role Transition**: From this point forward, Row 0 and Col 0 act as dedicated marker memory.
3. **Outward Projection (Discovery Pass)**: Scan only the interior ($1..M-1, 1..N-1$). When an interior zero is encountered at $(r, c)$, project information outward: $matrix[r][0] = 0$ and $matrix[0][c] = 0$.
4. **Inward Decision (Application Pass)**: The direction reverses! Each interior cell queries its row marker and column marker. If either is zero, it turns to zero.
5. **Boundary Finalization**: Boundaries retire from their marker role; `firstRowZero` and `firstColZero` finalize Row 0 and Col 0.
6. **4-Step Information Flow Recap**: Systematic summary before jumping into the master dry-run trace (Scene 10).

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Background:** `theme.boardBg` (`#19523C`) dark green chalkboard with subtle `ChalkDust`. Zero arbitrary container cards.
- **Top Header ($Y: 42..108$):**
  - Left: `● 01 · ARRAYS & HASHING` pill, `METHOD 3: OPTIMAL INFORMATION FLOW` pill.
  - Center: `MATRIX BECOMES ITS OWN MEMORY` (`fonts.display`, 26px, gold/chalk).
  - Right: `LEETCODE 73`.
- **Center Stage — Matrix ($X: 750..1170$, $Y: 280..700$):**
  - Grid: $5 \times 5$, cell size $76\text{px} \times 76\text{px}$, gap $10\text{px}$. Composite size $420\text{px} \times 420\text{px}$.
  - Centered horizontally at $X = 960$.
  - Boundary Role Tags:
    - Column 0: `ROW MARKERS` docked on the left ($X: 605..740$).
    - Row 0: `COLUMN MARKERS` docked above ($Y: 220..260$).
  - Interior Region: $4 \times 4$ subgrid ($X: 836..1170, Y: 366..700$).
- **Right Side — Two Saved Booleans ($X: 1240..1520$, $Y: 320..500$):**
  - `firstRowZero` card.
  - `firstColZero` card.
- **Bottom Callouts & 4-Step Flow Banners ($X: 460..1460$, $Y: 760..860$):**
  - Compact `RoughBox` callouts with contextual flow phase status.
  - Clearance $> 100\text{px}$ above captions at $Y: 960$.

---

## 3. Framewise Anchor Choreography (All 30 Anchors in 9-Field Schema)

### BEAT 01 — Anchor `S09_KEY` [F0..F98)
- **ANCHOR:** `This is the key idea of the optimal solution.` (Words 0..8)
- **WHAT APPEARS NOW:** Master matrix centered on chalkboard canvas with two boolean cards on the right; title badge `✨ KEY OPTIMAL IDEA` below header.
- **CENTER-STAGE HERO:** One matrix + two saved boolean concepts.
- **CAUSE:** Narration introduces the optimal paradigm.
- **EFFECT / MOTION:** Gentle spring entrance for the matrix and status badges.
- **WHAT MUST NOT APPEAR YET:** No mutation or projection arrows yet.
- **COMPREHENSION HOLD:** F98..F115.
- **CLEANUP / EXIT:** Keep layout.
- **PERSISTENT STATE:** Matrix and boolean containers active.

### BEAT 02 — Anchor `S09_PROTECTED` [F115..F288)
- **ANCHOR:** `We have already protected the original first row and first column state.` (Words 9..21)
- **WHAT APPEARS NOW:** `firstRowZero` and `firstColZero` cards pulse with glowing green borders; callout: `🛡️ ORIGINAL BOUNDARY HISTORY SECURED`.
- **CENTER-STAGE HERO:** Saved boundary history.
- **CAUSE:** Narration affirms prerequisites from Scene 08 are fulfilled.
- **EFFECT / MOTION:** Green highlight aura pulses across both boolean badges.
- **WHAT MUST NOT APPEAR YET:** Do not change boundary cell roles yet.
- **COMPREHENSION HOLD:** F288..F308.
- **CLEANUP / EXIT:** Fade callout.
- **PERSISTENT STATE:** Flags secured.

### BEAT 03 — Anchor `S09_JOB` [F308..F388)
- **ANCHOR:** `From this point, their job changes.` (Words 22..27)
- **WHAT APPEARS NOW:** Column 0 and Row 0 boundary cells illuminate; subtle particle pulse along the borders indicates functional transition.
- **CENTER-STAGE HERO:** Boundary role transition.
- **CAUSE:** Narration signals boundary repurposing.
- **EFFECT / MOTION:** Boundary borders brighten from chalk text color to cyan/gold.
- **WHAT MUST NOT APPEAR YET:** Do not assign exact role names until next phrases.
- **COMPREHENSION HOLD:** F388..F402.
- **CLEANUP / EXIT:** Maintain boundary illumination.
- **PERSISTENT STATE:** Boundaries prepared for marker roles.

### BEAT 04 — Anchor `S09_FC` [F402..F476)
- **ANCHOR:** `The first column becomes row marker memory.` (Words 28..34)
- **WHAT APPEARS NOW:** `ROW MARKERS` role tag docks to the left of Column 0 in cyan.
- **CENTER-STAGE HERO:** Col 0 as row marker storage.
- **CAUSE:** Narration specifies Col 0 purpose.
- **EFFECT / MOTION:** Cyan tag slides in; Column 0 cells outline in cyan.
- **WHAT MUST NOT APPEAR YET:** Row 0 role tag not placed yet.
- **COMPREHENSION HOLD:** F476..F490.
- **CLEANUP / EXIT:** Keep Col 0 tag.
- **PERSISTENT STATE:** Col 0 = row markers.

### BEAT 05 — Anchor `S09_FR` [F490..F564)
- **ANCHOR:** `The first row becomes column marker memory.` (Words 35..41)
- **WHAT APPEARS NOW:** `COLUMN MARKERS` role tag docks above Row 0 in gold.
- **CENTER-STAGE HERO:** Row 0 as column marker storage.
- **CAUSE:** Narration specifies Row 0 purpose.
- **EFFECT / MOTION:** Gold tag slides in; Row 0 cells outline in gold.
- **WHAT MUST NOT APPEAR YET:** Interior scan not active yet.
- **COMPREHENSION HOLD:** F564..F580.
- **CLEANUP / EXIT:** Keep both boundary tags.
- **PERSISTENT STATE:** Row 0 = col markers, Col 0 = row markers.

### BEAT 06 — Anchor `S09_INTERIOR` [F580..F635)
- **ANCHOR:** `Now scan only the interior.` (Words 42..46)
- **WHAT APPEARS NOW:** Interior $4 \times 4$ subgrid ($r \ge 1, c \ge 1$) lights up with soft amber focus; borders remain stable.
- **CENTER-STAGE HERO:** Interior subgrid.
- **CAUSE:** Narration restricts discovery scope.
- **EFFECT / MOTION:** Interior cells brighten; subtle dashed box frames the interior.
- **WHAT MUST NOT APPEAR YET:** Specific interior zero not selected yet.
- **COMPREHENSION HOLD:** F635..F661.
- **CLEANUP / EXIT:** Maintain interior focus.
- **PERSISTENT STATE:** Interior scan scope active.

### BEAT 07 — Anchor `S09_FIND` [F661..F785)
- **ANCHOR:** `Suppose we find an interior zero at row R column C.` (Words 47..57)
- **WHAT APPEARS NOW:** Symbolic cell $(r, c)$ at $(3, 3)$ spotlighted in bright pivot gold; label `matrix[r][c] == 0` attached.
- **CENTER-STAGE HERO:** Symbolic interior zero $(r, c)$.
- **CAUSE:** Narration presents canonical discovery event.
- **EFFECT / MOTION:** Cell $(3, 3)$ pulses with gold border.
- **WHAT MUST NOT APPEAR YET:** Do not draw projection rays yet.
- **COMPREHENSION HOLD:** F785..F796.
- **CLEANUP / EXIT:** Keep cell spotlighted.
- **PERSISTENT STATE:** Interior zero selected.

### BEAT 08 — Anchor `S09_NOTIMM` [F796..F890)
- **ANCHOR:** `We do not zero the complete row immediately.` (Words 58..65)
- **WHAT APPEARS NOW:** Red cross badge appears briefly over row 3; callout: `🚫 DO NOT ZERO IMMEDIATELY (AVOIDS CASCADE SPOILERS)`.
- **CENTER-STAGE HERO:** Non-immediate mutation principle.
- **CAUSE:** Crucial teaching reminder against premature zeroing.
- **EFFECT / MOTION:** Red prohibition flash and gentle shake.
- **WHAT MUST NOT APPEAR YET:** Outward arrows not emitted yet.
- **COMPREHENSION HOLD:** F890..F911.
- **CLEANUP / EXIT:** Fade prohibition badge.
- **PERSISTENT STATE:** Premature mutation averted.

### BEAT 09 — Anchor `S09_OUT` [F911..F959)
- **ANCHOR:** `We send information outward.` (Words 66..69)
- **WHAT APPEARS NOW:** Two outward directional arrowheads radiate from $(r, c)$: one pointing left to Col 0, one pointing up to Row 0.
- **CENTER-STAGE HERO:** Outward information projection.
- **CAUSE:** Core information-flow direction.
- **EFFECT / MOTION:** Arrowheads expand outwards toward boundaries.
- **WHAT MUST NOT APPEAR YET:** Destination writes not yet executed.
- **COMPREHENSION HOLD:** F959..F983.
- **CLEANUP / EXIT:** Keep arrows active.
- **PERSISTENT STATE:** Outward projection initiated.

### BEAT 10 — Anchor `S09_ROWWRITE` [F983..F1051)
- **ANCHOR:** `Write zero at the first cell of that row.` (Words 70..78)
- **WHAT APPEARS NOW:** Horizontal dashed beam connects $(r, c)$ to $(r, 0)$; cell $(r, 0)$ updates to `0`.
- **CENTER-STAGE HERO:** Row-boundary marker write $matrix[r][0] = 0$.
- **CAUSE:** Recording row mark.
- **EFFECT / MOTION:** Horizontal ray traces left; destination cell turns to `0` with cyan flash.
- **WHAT MUST NOT APPEAR YET:** Vertical column ray not drawn yet.
- **COMPREHENSION HOLD:** F1051..F1065.
- **CLEANUP / EXIT:** Keep written marker.
- **PERSISTENT STATE:** $matrix[r][0] = 0$.

### BEAT 11 — Anchor `S09_ROWMEAN` [F1065..F1164)
- **ANCHOR:** `That means this row must become zero later.` (Words 79..86)
- **WHAT APPEARS NOW:** Tag docked at $(r, 0)$: `Row r must become zero later`.
- **CENTER-STAGE HERO:** Row marker semantic meaning.
- **CAUSE:** Narration explains deferred mutation contract.
- **EFFECT / MOTION:** Tooltip badge appears near $(r, 0)$.
- **WHAT MUST NOT APPEAR YET:** Column marker write not executed yet.
- **COMPREHENSION HOLD:** F1164..F1175.
- **CLEANUP / EXIT:** Fade tooltip.
- **PERSISTENT STATE:** Row deferred zeroing understood.

### BEAT 12 — Anchor `S09_COLWRITE` [F1175..F1265)
- **ANCHOR:** `Then write zero at the top cell of that column.` (Words 87..96)
- **WHAT APPEARS NOW:** Vertical dashed beam connects $(r, c)$ to $(0, c)$; cell $(0, c)$ updates to `0`.
- **CENTER-STAGE HERO:** Column-boundary marker write $matrix[0][c] = 0$.
- **CAUSE:** Recording column mark.
- **EFFECT / MOTION:** Vertical ray traces up; destination cell turns to `0` with gold flash.
- **WHAT MUST NOT APPEAR YET:** Entire column not zeroed.
- **COMPREHENSION HOLD:** F1265..F1282.
- **CLEANUP / EXIT:** Keep written marker.
- **PERSISTENT STATE:** $matrix[0][c] = 0$.

### BEAT 13 — Anchor `S09_COLMEAN` [F1282..F1404)
- **ANCHOR:** `That means this column must become zero later.` (Words 97..104)
- **WHAT APPEARS NOW:** Tag docked at $(0, c)$: `Column c must become zero later`.
- **CENTER-STAGE HERO:** Column marker semantic meaning.
- **CAUSE:** Narration explains deferred column mutation.
- **EFFECT / MOTION:** Tooltip badge appears near $(0, c)$.
- **WHAT MUST NOT APPEAR YET:** Reversal phase not started.
- **COMPREHENSION HOLD:** F1404..F1430.
- **CLEANUP / EXIT:** Fade tooltip.
- **PERSISTENT STATE:** Column deferred zeroing understood.

### BEAT 14 — Anchor `S09_PROJECT` [F1430..F1540)
- **ANCHOR:** `So an interior zero projects its information to the boundary.` (Words 105..114)
- **WHAT APPEARS NOW:** Full outward projection graphic highlighted: interior $(r, c)$ beaming outwards to both markers. Badge: `PROJECTION PHASE: INTERIOR → BOUNDARY`.
- **CENTER-STAGE HERO:** Complete outward projection paradigm.
- **CAUSE:** Synthesis of discovery step.
- **EFFECT / MOTION:** Both rays pulse simultaneously.
- **WHAT MUST NOT APPEAR YET:** Do not reverse direction yet.
- **COMPREHENSION HOLD:** F1540..F1567.
- **CLEANUP / EXIT:** Clear rays.
- **PERSISTENT STATE:** Discovery projection complete.

### BEAT 15 — Anchor `S09_AFTER` [F1567..F1706)
- **ANCHOR:** `After the discovery pass, the boundary contains everything we need.` (Words 115..124)
- **WHAT APPEARS NOW:** Matrix borders illuminate brightly; callout: `📦 BOUNDARY CONTAINS ALL REQUISITE KNOWLEDGE`.
- **CENTER-STAGE HERO:** Self-contained boundary memory.
- **CAUSE:** Discovery pass finishes.
- **EFFECT / MOTION:** Glowing perimeter around Row 0 and Col 0.
- **WHAT MUST NOT APPEAR YET:** Inward arrows not shown yet.
- **COMPREHENSION HOLD:** F1706..F1706.
- **CLEANUP / EXIT:** Dismiss callout.
- **PERSISTENT STATE:** Boundary memory fully loaded.

### BEAT 16 — Anchor `S09_REVERSE` [F1706..F1783)
- **ANCHOR:** `Then the direction reverses.` (Words 125..128)
- **WHAT APPEARS NOW:** Dramatic motion reversal: inward arrows point from boundary markers back toward the interior; banner: `🔄 DIRECTION REVERSES: BOUNDARY → INTERIOR`.
- **CENTER-STAGE HERO:** Reversal of information flow.
- **CAUSE:** Transition from Discovery (Pass 1) to Application (Pass 2).
- **EFFECT / MOTION:** Inward arrowheads sweep from borders toward the interior.
- **WHAT MUST NOT APPEAR YET:** Cell queries not detailed yet.
- **COMPREHENSION HOLD:** F1783..F1790.
- **CLEANUP / EXIT:** Keep inward direction context.
- **PERSISTENT STATE:** Inward application mode active.

### BEAT 17 — Anchor `S09_TWOQ` [F1790..F1873)
- **ANCHOR:** `Each interior cell asks two questions.` (Words 129..134)
- **WHAT APPEARS NOW:** Generic interior cell $(i, j)$ highlighted; two query rays extend to $matrix[i][0]$ and $matrix[0][j]$.
- **CENTER-STAGE HERO:** Generic interior query pattern.
- **CAUSE:** Methodical decision logic.
- **EFFECT / MOTION:** Two subtle query lines connect cell to its row/col markers.
- **WHAT MUST NOT APPEAR YET:** First question not isolated yet.
- **COMPREHENSION HOLD:** F1873..F1887.
- **CLEANUP / EXIT:** Maintain query lines.
- **PERSISTENT STATE:** Cell querying boundary.

### BEAT 18 — Anchor `S09_ROWQ` [F1887..F1955)
- **ANCHOR:** `Is my row marker zero?` (Words 135..139)
- **WHAT APPEARS NOW:** Focus on horizontal query beam to $matrix[i][0]$; badge: `matrix[i][0] == 0 ?`.
- **CENTER-STAGE HERO:** Row-marker query.
- **CAUSE:** First boolean question.
- **EFFECT / MOTION:** Query pulse travels left to Row marker.
- **WHAT MUST NOT APPEAR YET:** Do not evaluate second question yet.
- **COMPREHENSION HOLD:** F1955..F1979.
- **CLEANUP / EXIT:** Keep query active.
- **PERSISTENT STATE:** Row question evaluated.

### BEAT 19 — Anchor `S09_COLQ` [F1979..F2055)
- **ANCHOR:** `Or is my column marker zero?` (Words 140..145)
- **WHAT APPEARS NOW:** Focus on vertical query beam to $matrix[0][j]$; badge: `matrix[0][j] == 0 ?`.
- **CENTER-STAGE HERO:** Column-marker query.
- **CAUSE:** Second boolean question.
- **EFFECT / MOTION:** Query pulse travels up to Column marker.
- **WHAT MUST NOT APPEAR YET:** Do not zero cell yet.
- **COMPREHENSION HOLD:** F2055..F2070.
- **CLEANUP / EXIT:** Maintain both query beams.
- **PERSISTENT STATE:** Both questions evaluated.

### BEAT 20 — Anchor `S09_EITHER` [F2070..F2174)
- **ANCHOR:** `If either answer is yes, the cell becomes zero.` (Words 146..154)
- **WHAT APPEARS NOW:** Cell $(i, j)$ turns to `0` with bright green flash; badge: `YES ➔ matrix[i][j] = 0`.
- **CENTER-STAGE HERO:** Interior cell mutation.
- **CAUSE:** Decision rule applied.
- **EFFECT / MOTION:** Value changes to `0`, checkmark icon appears.
- **WHAT MUST NOT APPEAR YET:** Boundary cells remain untouched.
- **COMPREHENSION HOLD:** F2174..F2194.
- **CLEANUP / EXIT:** Clear query rays.
- **PERSISTENT STATE:** Interior cell successfully updated.

### BEAT 21 — Anchor `S09_DONE` [F2194..F2333)
- **ANCHOR:** `Once the interior is finished, the boundary has completed its marker job.` (Words 155..166)
- **WHAT APPEARS NOW:** Entire interior grid shows final zeroed state; boundary role tags fade to neutral; callout: `🏁 INTERIOR FINISHED · MARKER ROLES COMPLETE`.
- **CENTER-STAGE HERO:** Boundary marker retirement.
- **CAUSE:** Pass 2 interior loop finishes.
- **EFFECT / MOTION:** Interior cells settle; boundary role badges dissolve.
- **WHAT MUST NOT APPEAR YET:** Do not finalize boundaries until next step.
- **COMPREHENSION HOLD:** F2333..F2356.
- **CLEANUP / EXIT:** Dismiss callout.
- **PERSISTENT STATE:** Boundaries ready for finalization.

### BEAT 22 — Anchor `S09_FLAGS` [F2356..F2432)
- **ANCHOR:** `Then we use the two saved Booleans` (Words 167..173)
- **WHAT APPEARS NOW:** Focus shifts back to `firstRowZero` and `firstColZero` cards on the right stage.
- **CENTER-STAGE HERO:** Two saved boolean safeguards.
- **CAUSE:** Final boundary resolution begins.
- **EFFECT / MOTION:** Cards brighten and glow in pivot gold.
- **WHAT MUST NOT APPEAR YET:** Do not mutate Row 0 yet.
- **COMPREHENSION HOLD:** F2432..F2432.
- **CLEANUP / EXIT:** Keep cards active.
- **PERSISTENT STATE:** Flags ready to finalize boundaries.

### BEAT 23 — Anchor `S09_FINROW` [F2432..F2507)
- **ANCHOR:** `to finalize the first row` (Words 174..178)
- **WHAT APPEARS NOW:** Glowing beam from `firstRowZero` traverses Row 0; Row 0 zeroed if flag is true; label: `FINALIZE ROW 0`.
- **CENTER-STAGE HERO:** Row 0 finalization.
- **CAUSE:** Applying saved `firstRowZero` history.
- **EFFECT / MOTION:** Horizontal wave along Row 0.
- **WHAT MUST NOT APPEAR YET:** Col 0 not finalized yet.
- **COMPREHENSION HOLD:** F2507..F2507.
- **CLEANUP / EXIT:** Clear row beam.
- **PERSISTENT STATE:** Row 0 finalized.

### BEAT 24 — Anchor `S09_FINCOL` [F2507..F2564)
- **ANCHOR:** `and the first column.` (Words 179..182)
- **WHAT APPEARS NOW:** Glowing beam from `firstColZero` traverses Column 0; Col 0 zeroed if flag is true; label: `FINALIZE COL 0`.
- **CENTER-STAGE HERO:** Column 0 finalization.
- **CAUSE:** Applying saved `firstColZero` history.
- **EFFECT / MOTION:** Vertical wave along Column 0.
- **WHAT MUST NOT APPEAR YET:** Recap sequence not started.
- **COMPREHENSION HOLD:** F2564..F2584.
- **CLEANUP / EXIT:** Clear col beam.
- **PERSISTENT STATE:** Both boundaries fully finalized.

### BEAT 25 — Anchor `S09_FLOW` [F2584..F2657)
- **ANCHOR:** `So the information flow is` (Words 183..187)
- **WHAT APPEARS NOW:** Header banner below matrix: `4-STEP OPTIMAL INFORMATION FLOW`.
- **CENTER-STAGE HERO:** Information flow summary overview.
- **CAUSE:** High-level synthesis.
- **EFFECT / MOTION:** Flow card container expands.
- **WHAT MUST NOT APPEAR YET:** Steps appear sequentially with narration.
- **COMPREHENSION HOLD:** F2657..F2657.
- **CLEANUP / EXIT:** Keep container.
- **PERSISTENT STATE:** Summary container ready.

### BEAT 26 — Anchor `S09_SAVE` [F2657..F2714)
- **ANCHOR:** `save the boundary history.` (Words 188..191)
- **WHAT APPEARS NOW:** Step 1 chip lights up: `1. Save Boundary Booleans (firstRowZero, firstColZero)`.
- **CENTER-STAGE HERO:** Step 1 recap.
- **CAUSE:** Narration recaps step 1.
- **EFFECT / MOTION:** Chip pops in with good green border.
- **WHAT MUST NOT APPEAR YET:** Step 2 not highlighted yet.
- **COMPREHENSION HOLD:** F2714..F2745.
- **CLEANUP / EXIT:** Keep step 1 visible.
- **PERSISTENT STATE:** Step 1 highlighted.

### BEAT 27 — Anchor `S09_SEND` [F2745..F2822)
- **ANCHOR:** `Send zero information out to the boundary.` (Words 192..198)
- **WHAT APPEARS NOW:** Step 2 chip lights up: `2. Project Interior Zeroes Outward to Row 0 & Col 0`.
- **CENTER-STAGE HERO:** Step 2 recap.
- **CAUSE:** Narration recaps step 2.
- **EFFECT / MOTION:** Chip pops in with cyan border.
- **WHAT MUST NOT APPEAR YET:** Step 3 not highlighted yet.
- **COMPREHENSION HOLD:** F2822..F2846.
- **CLEANUP / EXIT:** Keep step 2 visible.
- **PERSISTENT STATE:** Step 2 highlighted.

### BEAT 28 — Anchor `S09_USE` [F2846..F2929)
- **ANCHOR:** `Use the boundary to update the interior.` (Words 199..205)
- **WHAT APPEARS NOW:** Step 3 chip lights up: `3. Reverse Direction: Update Interior from Boundaries`.
- **CENTER-STAGE HERO:** Step 3 recap.
- **CAUSE:** Narration recaps step 3.
- **EFFECT / MOTION:** Chip pops in with pivot gold border.
- **WHAT MUST NOT APPEAR YET:** Step 4 not highlighted yet.
- **COMPREHENSION HOLD:** F2929..F2964.
- **CLEANUP / EXIT:** Keep step 3 visible.
- **PERSISTENT STATE:** Step 3 highlighted.

### BEAT 29 — Anchor `S09_FINALIZE` [F2964..F3092)
- **ANCHOR:** `Then finalize the boundary using the saved flags.` (Words 206..213)
- **WHAT APPEARS NOW:** Step 4 chip lights up: `4. Finalize Boundaries using Saved Booleans`.
- **CENTER-STAGE HERO:** Step 4 recap.
- **CAUSE:** Narration recaps step 4.
- **EFFECT / MOTION:** Chip pops in with purple/good border. All 4 steps glow together.
- **WHAT MUST NOT APPEAR YET:** Master trace handoff badge not active yet.
- **COMPREHENSION HOLD:** F3092..F3116.
- **CLEANUP / EXIT:** Keep 4-step sequence.
- **PERSISTENT STATE:** Full algorithm lifecycle crystal clear.

### BEAT 30 — Anchor `S09_EXEC` [F3116..F3209)
- **ANCHOR:** `Now let's execute that on our master matrix.` (Words 214..221)
- **WHAT APPEARS NOW:** Matrix cleanly resets to untouched original master values $[1, 2, 0, 4, 5]...$; handoff badge: `🚀 READY FOR FULL MASTER DRY-RUN (SCENE 10)`.
- **CENTER-STAGE HERO:** Master matrix ready for full execution.
- **CAUSE:** Climax handoff to Scene 10.
- **EFFECT / MOTION:** Crisp reset to original state; handoff banner glows smoothly.
- **WHAT MUST NOT APPEAR YET:** Do not perform Scene 10 dry run steps.
- **COMPREHENSION HOLD:** F3180..F3209.
- **CLEANUP / EXIT:** Hold final frame to end of video.
- **PERSISTENT STATE:** Ready for master trace.

---

## 4. Verification & QA Checklist
- [x] Total frames match sync exactly: 3209 frames @ 30fps.
- [x] All 30 anchors documented with complete 9-field schema.
- [x] Zero collisions: elements stay within $Y: 140..860$, leaving $> 100\text{px}$ buffer above captions ($Y: 960$).
- [x] No spoilers: outward and inward information flows emerge strictly when narrated.
- [x] Kit-only styling: `theme.boardBg`, `RoughBox`, `ChalkText`, `Captions`.
