# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 08 — Method 2 Optimal Code & Complexity
## AUTHORITATIVE FRAMEWISE SCENE PLAN — LOCKED TO sync/08-method2-code.anchors.json

- **Scene Purpose:** Walk through Method 2 (Shrinking Boundary Traversal) Python code, clarify the 4-step cycle (Consume → Shrink → Validate → Continue), explain the asymmetry between the checks (why `top`, `right`, and `bottom` need inner break guards, but `left` relies on the main `while` condition), unpack the Python reverse `range` exclusive-stop off-by-one safeguard, and conclude with $O(m \times n)$ time and $O(1)$ auxiliary space complexity.
- **Composition Identity:** `015-Scene08-Method2Code`
- **Total Duration:** 3,655 frames @ 30fps (121.833 seconds) strictly derived from `sync/08-method2-code.json`
- **Component Stack:** `@dsa/kit` (`ChalkCodeEditorV2`, `RoughBox`, `Captions`, `ChalkboardBackground`, `ChalkFilters`)

---

## Spatial Layout & Coordinates (1920 × 1080)
- **Top Header (Y: 28..76):**
  - Left: Pattern badge `01 · ARRAYS & HASHING` (green dot)
  - Center: `Spiral Matrix — Method 2: Optimal Boundary Code Walkthrough`
  - Right: `#015 MEDIUM`
- **Left Stage — Code Editor (X: 80..1060, Y: 120..810):**
  - Width: 980px, Height: 690px.
  - Canonical `ChalkCodeEditorV2` with 32 lines of Python code progressively typed from F0 to F2850.
  - Active line highlighting, syntax highlighting using channel colors (`cyan`, `accent`, `gold`, `good`, `warn`).
- **Right Stage — Semantic Context & Cards (X: 1100..1840, Y: 120..810):**
  - Width: 740px, Height: 690px.
  - Card 1: Boundary State Readout (`top`, `bottom`, `left`, `right`) + While Invariant.
  - Card 2: 4-Step Cycle Strip (Consume → Shrink → Validate → Continue).
  - Card 3: Reverse Range Stop Proof (`range(stop, start - 1, -1)`).
  - Card 4: Final Complexity Matrix ($O(m \times n)$ Time, $O(1)$ Auxiliary Space).
- **Bottom Stage — Captions (Y: 940..1024):**
  - `Captions` with karaoke highlight in `theme.pivot`. Breathing room above captions: 130px.

---

## Framewise Anchor Manifest (22 Anchors)

### Anchor 01: `S08_BOUND_START` (Frames 0..79 / 0.000s..2.620s)
- **ANCHOR:** "The code starts with... the four boundaries."
- **WHAT APPEARS NOW:** Code window frame enters; `m, n = len(matrix), len(matrix[0])` visible as dim context. Lines for 4 boundaries begin typing.
- **CENTER-STAGE HERO:** Four boundary assignments.
- **CAUSE:** Narration begins optimal code walkthrough.
- **EFFECT / MOTION:** Code window fades in; initial boundary scaffold appears.
- **WHAT MUST NOT APPEAR YET:** While loop condition.
- **COMPREHENSION HOLD:** Frames 80..90 pause in audio.
- **CLEANUP / EXIT:** Keep boundary setup active.
- **PERSISTENT STATE:** Boundaries initialized.

### Anchor 02: `S08_BOUND_VALUES` (Frames 91..282 / 3.040s..9.400s)
- **ANCHOR:** "`top` and `left` begin at zero. `bottom` is `m - 1`. And `right` is `n - 1`."
- **WHAT APPEARS NOW:**
  - `top = 0`
  - `bottom = m - 1`
  - `left = 0`
  - `right = n - 1`
  - `answer = []`
  - Right stage displays Initial Rectangle Card: `top=0, bottom=4, left=0, right=5`.
- **CENTER-STAGE HERO:** Boundary values in code and card.
- **CAUSE:** Spoken boundary initializations.
- **EFFECT / MOTION:** Lines typed in canonical target order; card displays active boundaries.
- **WHAT MUST NOT APPEAR YET:** While loop header.
- **COMPREHENSION HOLD:** Frames 283..294 hold on boundary definitions.
- **CLEANUP / EXIT:** Keep lines visible in editor.
- **PERSISTENT STATE:** Rectangle bounds defined.

### Anchor 03: `S08_VALID_LOOP` (Frames 295..425 / 9.840s..14.160s)
- **ANCHOR:** "The main loop continues only while... the active rectangle is valid."
- **WHAT APPEARS NOW:** While loop scaffold typed: `while ...:`. Right Card highlights "Active Rectangle Invariant".
- **CENTER-STAGE HERO:** While validity concept.
- **CAUSE:** Introducing the main loop condition.
- **EFFECT / MOTION:** While keyword types; invariant banner activates.
- **WHAT MUST NOT APPEAR YET:** Full condition expression before spoken.
- **COMPREHENSION HOLD:** Frames 426..476 pause in narration.
- **CLEANUP / EXIT:** Maintain while loop header.
- **PERSISTENT STATE:** Loop structure open.

### Anchor 04: `S08_CONDITION` (Frames 477..665 / 15.900s..22.160s)
- **ANCHOR:** "`top <= bottom`... and... `left <= right`."
- **WHAT APPEARS NOW:** Complete condition typed: `while top <= bottom and left <= right:`. Two clauses highlighted with cyan/gold accents.
- **CENTER-STAGE HERO:** Dual-guard while condition.
- **CAUSE:** Spoken condition clauses.
- **EFFECT / MOTION:** Code editor displays full condition; right card shows row guard `top <= bottom` and col guard `left <= right`.
- **WHAT MUST NOT APPEAR YET:** Edge traversal loops.
- **COMPREHENSION HOLD:** Frames 666..687 hold on while line.
- **CLEANUP / EXIT:** Dim condition line slightly to focus inner body.
- **PERSISTENT STATE:** Loop condition verified.

### Anchor 05: `S08_ORDER` (Frames 688..794 / 22.940s..26.480s)
- **ANCHOR:** "Inside the loop... we follow the same order as our trace."
- **WHAT APPEARS NOW:** Right stage reveals 4-phase edge strip: `1. TOP (L→R) → 2. RIGHT (T→B) → 3. BOTTOM (R→L) → 4. LEFT (B→T)`.
- **CENTER-STAGE HERO:** Trace-order structural strip.
- **CAUSE:** Narrator connects code organization to simulation trace.
- **EFFECT / MOTION:** 4-edge strip fades in with directional arrows.
- **WHAT MUST NOT APPEAR YET:** Inner loop code lines.
- **COMPREHENSION HOLD:** Frames 795..814 hold on order strip.
- **CLEANUP / EXIT:** Keep order strip as support guide.
- **PERSISTENT STATE:** Order locked.

### Anchor 06: `S08_PATTERN` (Frames 815..959 / 27.180s..31.960s)
- **ANCHOR:** "Consume an edge... shrink that boundary... validate... and continue."
- **WHAT APPEARS NOW:** Right stage highlights the 4-step cycle:
  - 1. CONSUME: Traverse and append cells
  - 2. SHRINK: Boundary pointer update (`+= 1` or `-= 1`)
  - 3. VALIDATE: Check if remaining range is valid
  - 4. CONTINUE: Move to next edge or iteration
- **CENTER-STAGE HERO:** CONSUME → SHRINK → VALIDATE → CONTINUE paradigm.
- **CAUSE:** Spoken algorithmic pattern.
- **EFFECT / MOTION:** Badges light up progressively on their words.
- **WHAT MUST NOT APPEAR YET:** Specific edge code lines.
- **COMPREHENSION HOLD:** Frames 960..982 hold on pattern badges.
- **CLEANUP / EXIT:** Keep cycle card active.
- **PERSISTENT STATE:** Systematic 4-step mental model established.

### Anchor 07: `S08_TOP_CHECK` (Frames 983..1085 / 32.760s..36.180s)
- **ANCHOR:** "After the top edge... we check whether any rows remain."
- **WHAT APPEARS NOW:** Lines 8–13 typed in editor:
  - `for col in range(left, right + 1):`
  - `    answer.append(matrix[top][col])`
  - `top += 1`
  - `if top > bottom:`
  - `    break`
  - Highlight placed on `if top > bottom: break`.
- **CENTER-STAGE HERO:** Post-top row check.
- **CAUSE:** Narrator explains first early termination check.
- **EFFECT / MOTION:** Top edge loop and guard typed; guard highlighted in warning/gold.
- **WHAT MUST NOT APPEAR YET:** Right edge code.
- **COMPREHENSION HOLD:** Frames 1086..1115 hold on top edge guard.
- **CLEANUP / EXIT:** Keep top edge code.
- **PERSISTENT STATE:** Top row consumed, `top` incremented, rows validated.

### Anchor 08: `S08_RIGHT_CHECK` (Frames 1116..1229 / 37.200s..40.980s)
- **ANCHOR:** "After the right edge... we check whether any columns remain."
- **WHAT APPEARS NOW:** Lines 15–20 typed:
  - `for row in range(top, bottom + 1):`
  - `    answer.append(matrix[row][right])`
  - `right -= 1`
  - `if left > right:`
  - `    break`
  - Highlight on `if left > right: break`.
- **CENTER-STAGE HERO:** Post-right column check.
- **CAUSE:** Narrator explains second check.
- **EFFECT / MOTION:** Right edge loop and guard typed; col guard highlighted.
- **WHAT MUST NOT APPEAR YET:** Bottom edge code.
- **COMPREHENSION HOLD:** Frames 1230..1250 hold on right col guard.
- **CLEANUP / EXIT:** Keep right edge code.
- **PERSISTENT STATE:** Right col consumed, `right` decremented, cols validated.

### Anchor 09: `S08_BOTTOM_CHECK` (Frames 1251..1347 / 41.700s..44.900s)
- **ANCHOR:** "After the bottom edge... we check the rows again."
- **WHAT APPEARS NOW:** Lines 22–27 typed:
  - `for col in range(right, left - 1, -1):`
  - `    answer.append(matrix[bottom][col])`
  - `bottom -= 1`
  - `if top > bottom:`
  - `    break`
  - Highlight on `if top > bottom: break`.
- **CENTER-STAGE HERO:** Post-bottom row check.
- **CAUSE:** Narrator explains third check.
- **EFFECT / MOTION:** Bottom edge loop and guard typed; row guard highlighted.
- **WHAT MUST NOT APPEAR YET:** Left edge code.
- **COMPREHENSION HOLD:** Frames 1348..1364 hold on bottom edge guard.
- **CLEANUP / EXIT:** Keep bottom edge code.
- **PERSISTENT STATE:** Bottom row consumed, `bottom` decremented, rows validated.

### Anchor 10: `S08_LEFT_NO_CHECK` (Frames 1365..1477 / 45.500s..49.220s)
- **ANCHOR:** "After the left edge... we do not need another separate check."
- **WHAT APPEARS NOW:** Lines 29–32 typed:
  - `for row in range(bottom, top - 1, -1):`
  - `    answer.append(matrix[row][left])`
  - `left += 1`
  - Visual note: No `if` line follows `left += 1`.
- **CENTER-STAGE HERO:** Deliberate absence of post-left guard.
- **CAUSE:** Narrator emphasizes code asymmetry.
- **EFFECT / MOTION:** Left edge typed; empty space after `left += 1` highlighted with dotted outline.
- **WHAT MUST NOT APPEAR YET:** Explanation of why.
- **COMPREHENSION HOLD:** Frames 1478..1494 hold on missing check.
- **CLEANUP / EXIT:** Keep focus on left edge completion.
- **PERSISTENT STATE:** All 4 edges typed.

### Anchor 11: `S08_WHY` (Frames 1495..1511 / 49.840s..50.380s)
- **ANCHOR:** "Why?"
- **WHAT APPEARS NOW:** Right Card displays question callout: "Why is there no check after left += 1?".
- **CENTER-STAGE HERO:** Rhetorical pedagogical question.
- **CAUSE:** Narrator prompts viewer comprehension.
- **EFFECT / MOTION:** Callout badge pops in with subtle bounce.
- **WHAT MUST NOT APPEAR YET:** Full loop-back explanation.
- **COMPREHENSION HOLD:** Frames 1512..1523 hold on question.
- **CLEANUP / EXIT:** Transition question into resolution.
- **PERSISTENT STATE:** Question posed.

### Anchor 12: `S08_WHILE_RETURN` (Frames 1524..1623 / 50.800s..54.100s)
- **ANCHOR:** "Because execution returns to the main `while` condition"
- **WHAT APPEARS NOW:** Glowing curved arrow loops from line 32 (`left += 1`) back up to line 6 (`while top <= bottom and left <= right:`).
- **CENTER-STAGE HERO:** Loop-back control flow arrow.
- **CAUSE:** Explaining control flow return.
- **EFFECT / MOTION:** Animated chalk tracer sweeps from loop bottom to while header.
- **WHAT MUST NOT APPEAR YET:** Detail on both clauses.
- **COMPREHENSION HOLD:** Frames 1624..1659 hold on loop-back tracer.
- **CLEANUP / EXIT:** Keep tracer visible.
- **PERSISTENT STATE:** Control flow loop visualized.

### Anchor 13: `S08_BOTH` (Frames 1660..1845 / 55.340s..61.500s)
- **ANCHOR:** "that condition validates both row... and column boundaries... before the next round begins."
- **WHAT APPEARS NOW:** While line glows brightly. Both clauses light up: `top <= bottom` (rows) and `left <= right` (columns). Right card displays checkmarks: `Row Check: top <= bottom ✓` and `Col Check: left <= right ✓`.
- **CENTER-STAGE HERO:** Both validity clauses revalidated.
- **CAUSE:** Explaining why the main while condition renders a 4th inner check redundant.
- **EFFECT / MOTION:** Dual checkmarks pulse on card.
- **WHAT MUST NOT APPEAR YET:** Python range discussion.
- **COMPREHENSION HOLD:** Frames 1846..1872 hold on dual validation.
- **CLEANUP / EXIT:** Dim while highlight.
- **PERSISTENT STATE:** Redundancy proof complete.

### Anchor 14: `S08_PY_DETAIL` (Frames 1873..1988 / 62.420s..66.280s)
- **ANCHOR:** "There is one more Python detail... that is easy to get wrong."
- **WHAT APPEARS NOW:** Right Stage transitions to "Python Reverse Range Gotcha" card with amber warning badge.
- **CENTER-STAGE HERO:** Python reverse range callout.
- **CAUSE:** Narrator introduces language-specific nuance.
- **EFFECT / MOTION:** Amber warning card slides in.
- **WHAT MUST NOT APPEAR YET:** Specific range formulas before spoken.
- **COMPREHENSION HOLD:** Frames 1989..2113 hold on warning banner.
- **CLEANUP / EXIT:** Keep gotcha container.
- **PERSISTENT STATE:** Attention focused on reverse ranges.

### Anchor 15: `S08_BOTTOM_RANGE` (Frames 2114..2247 / 70.480s..74.900s)
- **ANCHOR:** "`range(right, left - 1, -1)`."
- **WHAT APPEARS NOW:** Bottom edge loop line 22 is highlighted in editor. Card displays breakdown:
  - `start = right`
  - `stop = left - 1`
  - `step = -1`
- **CENTER-STAGE HERO:** Bottom reverse range syntax.
- **CAUSE:** Spoken bottom range callout.
- **EFFECT / MOTION:** Line 22 zooms slightly; formula appears on right card.
- **WHAT MUST NOT APPEAR YET:** Left range.
- **COMPREHENSION HOLD:** Frames 2248..2348 hold on bottom range breakdown.
- **CLEANUP / EXIT:** Keep bottom formula.
- **PERSISTENT STATE:** Bottom range analyzed.

### Anchor 16: `S08_LEFT_RANGE` (Frames 2349..2477 / 78.300s..82.560s)
- **ANCHOR:** "`range(bottom, top - 1, -1)`."
- **WHAT APPEARS NOW:** Left edge loop line 29 is highlighted. Card adds breakdown:
  - `start = bottom`
  - `stop = top - 1`
  - `step = -1`
- **CENTER-STAGE HERO:** Left reverse range syntax.
- **CAUSE:** Spoken left range callout.
- **EFFECT / MOTION:** Line 29 highlighted; left formula card renders.
- **WHAT MUST NOT APPEAR YET:** Stop value exclusivity rule.
- **COMPREHENSION HOLD:** Frames 2478..2491 pause in audio.
- **CLEANUP / EXIT:** Keep formulas.
- **PERSISTENT STATE:** Both reverse ranges on display.

### Anchor 17: `S08_EXCLUSIVE` (Frames 2492..2562 / 83.060s..85.400s)
- **ANCHOR:** "Python does not include the stop value in `range`."
- **WHAT APPEARS NOW:** Card highlights rule: `range(start, stop, step) stops at stop + step (excludes stop)`.
- **CENTER-STAGE HERO:** Exclusive stop property of Python range.
- **CAUSE:** Spoken language rule.
- **EFFECT / MOTION:** "STOP VALUE EXCLUDED" badge pulses in amber.
- **WHAT MUST NOT APPEAR YET:** `left - 1` proof.
- **COMPREHENSION HOLD:** Frames 2563..2587 hold on rule.
- **CLEANUP / EXIT:** Keep rule badge.
- **PERSISTENT STATE:** Exclusivity rule established.

### Anchor 18: `S08_LEFT_MINUS` (Frames 2588..2689 / 86.280s..89.620s)
- **ANCHOR:** "`left - 1`... lets us include the `left` boundary."
- **WHAT APPEARS NOW:** Card shows number line / calculation:
  - Stop at `left - 1` $\implies$ last visited element is `(left - 1) - (-1) = left` ✓.
- **CENTER-STAGE HERO:** Mathematical proof of `left - 1`.
- **CAUSE:** Explaining why `left - 1` is necessary.
- **EFFECT / MOTION:** Green checkmark activates on `includes left`.
- **WHAT MUST NOT APPEAR YET:** `top - 1` proof.
- **COMPREHENSION HOLD:** Frames 2690..2737 hold on proof.
- **CLEANUP / EXIT:** Keep proof visible.
- **PERSISTENT STATE:** `left - 1` understood.

### Anchor 19: `S08_TOP_MINUS` (Frames 2738..2849 / 91.280s..94.960s)
- **ANCHOR:** "`top - 1`... lets us include the `top` boundary."
- **WHAT APPEARS NOW:** Card shows parallel proof:
  - Stop at `top - 1` $\implies$ last visited element is `(top - 1) - (-1) = top` ✓.
- **CENTER-STAGE HERO:** Mathematical proof of `top - 1`.
- **CAUSE:** Explaining why `top - 1` is necessary.
- **EFFECT / MOTION:** Green checkmark activates on `includes top`.
- **WHAT MUST NOT APPEAR YET:** Safeguard summary.
- **COMPREHENSION HOLD:** Frames 2850..2821 hold on proof.
- **CLEANUP / EXIT:** Keep proof.
- **PERSISTENT STATE:** Both reverse range bounds proven.

### Anchor 20: `S08_PROTECT` (Frames 2822..3054 / 94.080s..101.800s)
- **ANCHOR:** "These checks and reverse ranges... are what protect us from... off-by-one errors... and duplicate values."
- **WHAT APPEARS NOW:** Card displays dual shield badges:
  - 🛡️ Shield 1: Prevents Off-By-One Errors
  - 🛡️ Shield 2: Prevents Duplicate Cell Processing
- **CENTER-STAGE HERO:** Correctness safeguards.
- **CAUSE:** Narrator summarizes the value of the checks and ranges.
- **EFFECT / MOTION:** Shield badges scale in with spring effect.
- **WHAT MUST NOT APPEAR YET:** Complexity analysis.
- **COMPREHENSION HOLD:** Frames 3055..3091 hold on safeguards.
- **CLEANUP / EXIT:** Dim safeguards to prepare for complexity card.
- **PERSISTENT STATE:** Code correctness sealed.

### Anchor 21: `S08_TIME` (Frames 3092..3358 / 103.080s..111.920s)
- **ANCHOR:** "Every matrix cell is appended once. So the time complexity is... `O(m × n)`."
- **WHAT APPEARS NOW:** Right stage transitions to Complexity Card:
  - TIME COMPLEXITY: $O(m \times n)$ (Optimal)
  - Detail: Each of the 30 cells is traversed exactly once across the 4 edge phases.
- **CENTER-STAGE HERO:** Time Complexity $O(m \times n)$.
- **CAUSE:** Deriving time complexity from cell visitation count.
- **EFFECT / MOTION:** Golden badge $O(m \times n)$ shines brightly.
- **WHAT MUST NOT APPEAR YET:** Auxiliary space complexity.
- **COMPREHENSION HOLD:** Frames 3359..3393 hold on time complexity.
- **CLEANUP / EXIT:** Keep time box active.
- **PERSISTENT STATE:** Time complexity locked.

### Anchor 22: `S08_SPACE` (Frames 3394..3655 / 113.120s..121.820s)
- **ANCHOR:** "apart from the output list... we keep only a constant number of variables. So the auxiliary space is... `O(1)`."
- **WHAT APPEARS NOW:** Space Complexity section activates:
  - AUXILIARY SPACE: $O(1)$ (OPTIMAL — NO EXTRA MEMORY!)
  - Variables: Only 4 scalar pointers (`top`, `bottom`, `left`, `right`).
  - Output Array: $O(m \times n)$ required by problem contract to return result.
- **CENTER-STAGE HERO:** Auxiliary Space Complexity $O(1)$.
- **CAUSE:** Explaining constant auxiliary memory.
- **EFFECT / MOTION:** Emerald badge $O(1)$ lights up; comparison stamp confirms Method 2 eliminates Method 1's $O(m \times n)$ boolean grid.
- **WHAT MUST NOT APPEAR YET:** Next scene content.
- **COMPREHENSION HOLD:** Frames 3620..3655 final comprehension hold on optimal code and complexity.
- **CLEANUP / EXIT:** Smooth fade out at F3655.
- **PERSISTENT STATE:** Scene 08 complete.
