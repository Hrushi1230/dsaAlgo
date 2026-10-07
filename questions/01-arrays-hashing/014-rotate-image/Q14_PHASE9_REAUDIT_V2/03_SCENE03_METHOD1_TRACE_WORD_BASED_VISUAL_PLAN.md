# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 03 — Method 1 Trace: Extra Destination Matrix
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Trace Method1 as source→destination projection into separate storage, preserving the source and using full matrix states visually instead of robotic narration.

---

# 0. SOURCE PRIORITY

1. verified Q14 Phase-8 narration;
2. locked Q14 Phase-5 teaching trace;
3. previous scene approved continuity state;
4. `DSA_MASTER_PRODUCTION_SKILL_V3.md`;
5. Matrix/Grid kit grammar;
6. actual `@dsa/kit` / production source at implementation time;
7. final scene MP3;
8. final exact word-sync JSON.

If an API, geometry, or state is not supported by source:

```text
UNRESOLVED — SOURCE REQUIRED
```

---


## V2 PROJECT-SOURCE LOCK — NO GUESS

This plan is governed by the actual project sources, not generic animation assumptions.

Verified sources for Q14:

```text
SKILL.md
DSA_MASTER_PRODUCTION_SKILL_V3.md
REFERENCE_MATRIX_GRID_KIT_RULES.md
REFERENCE_MATRIX_GRID_VISUAL_GRAMMAR.md
RoughBox.tsx
ChalkText.tsx
RoughLine.tsx
RoughCurve.tsx
BezierFlight.tsx
Captions.tsx
audioSync.ts
motion.ts
MiniGraph.tsx
```

Verified Rotate Image grammar:

```text
CELL POSITION stays fixed
VALUE moves
(r,c) → (c,n-1-r)
```

Verified primitive mapping:

```text
MATRIX CELL      → RoughBox
ROW/COLUMN LABEL → ChalkText
CURRENT          → theme.pivot
QUERY            → theme.cyan
CONFIRMED        → theme.good
BLOCKED          → theme.warn + second visual cue
VALUE MOVEMENT   → BezierFlight
```

`MiniGraph.tsx` is sort-specific and must not be used as a fake generic Q14 complexity graph.

Thin wrappers such as `MatrixGrid` are allowed by the grammar, but the actual wrapper API must be inspected in the repo before implementation.

```text
NO INVENTED MatrixGrid PROPS
NO INVENTED ROADMAP PROPS
NO INVENTED CODE-EDITOR PROPS
```

## V2 NARRATION-COVERAGE RULE

An explicit anchor authorizes a semantic visual change.

Any spoken words between two explicit anchors inherit the prior `PERSISTENT STATE` and trigger:

```text
NO NEW VISUAL STATE
NO NEW MOTION
CAPTIONS MAY CONTINUE
```

If an unanchored phrase actually changes algorithm state, repair the plan before implementation.

## V2 SYNC-CRITICAL KIT TIMING RULE

Actual kit source was inspected.

`audioSync.ts` currently resolves frames with:

```text
Math.round(word.start * 30)
Math.round(word.end   * 30)
```

For Q14, actual repo/helper semantics win over older generic floor/ceil language.

Verified component timing fields/defaults:

```text
RoughBox    durationInFrames default exists
RoughLine   durationInFrames default exists
RoughCurve  durationInFrames default exists
ChalkText   charFrames default exists
BezierFlight requires explicit start + dur
```

For narration-synced actions:

```text
DO NOT use component defaults as timing authority.
```

Resolve the exact anchor window first and explicitly supply timing from that window, or use an existing motion token constrained to that exact available window.

For narration-synced ChalkText writing:

```text
startFrame = exact resolved anchor start
charFrames = exact writable frame window / text length
```

or render the text as a stable label if no writing animation is semantically required.

Captions use final exact sync words directly.


---

# 1. CONTINUITY IN

Master unchanged; mapping known; result matrix absent until narration creates it.

---

# 2. EXACT VERIFIED NARRATION

```text
The easiest idea is...

create another matrix of the same size.

Keep the original matrix unchanged...

and write every value directly into its rotated destination.

Our mapping is:

row `r`, column `c`...

goes to...

row `c`, column `n minus one minus r`.

Let’s trace a few values first.

One is at row zero, column zero.

Its destination is...

row zero, column four.

So we place one there in the result matrix.

Now take eight.

Eight is at row one, column two.

Its destination is...

row two, column three.

So eight goes there.

Now take thirteen.

Thirteen is at row two, column two.

Its destination is still...

row two, column two.

So the center stays fixed.

And seventeen...

at row three, column one...

moves to row one, column one.

The rule is always the same.

Read one value from the source matrix...

calculate its rotated coordinate...

and write it into the result matrix.

Now let’s complete the pattern row by row.

When we process the first source row...

one, two, three, four, five...

those values fill the last column of the result.

Then the second source row...

six, seven, eight, nine, ten...

fills the next column.

The middle source row...

fills the middle column.

Then row three fills column one.

And the last source row...

fills column zero.

The completed result now looks like this.

So the rotation is correct.

And because we used separate storage...

we never had to worry about overwriting a value before using it.

But we created another complete matrix.

Let’s write this exact idea in code.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Exact execution: for each source (r,c), `result[c][n-1-r] = matrix[r][c]`. Representative mappings 1,8,13,17. Source row0→result col4, row1→col3, row2→col2, row3→col1, row4→col0.

---

# 4. WORD-DRIVEN LAW

```text
SCRIPT WORDS
→ VERIFIED ALGORITHM TRUTH
→ ACTUAL KIT / REPO SOURCE
→ SHOW ONLY WHAT NARRATION ALLOWS
→ TEACH
→ REMOVE / REDUCE
→ NEXT WORD
```

Default: `1 PRIMARY HERO + 1 DIRECT SUPPORT OBJECT + captions`.

---

# 5. KIT / FOUNDATION LOCK

Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

---

# 6. SCENE-SPECIFIC RULES

Visual identity SOURCE→DESTINATION FLIGHT. Source never mutates. Result starts empty. Two matrices must not become equal-weight dashboard panels. Full final result appears visually without a 25-value recital. No in-place cycle idea.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S03_EASY` | `The easiest idea is` | Source matrix. |
| `S03_CREATE` | `create another matrix of the same size.` | Empty result matrix. |
| `S03_UNCHANGED` | `Keep the original matrix unchanged` | Immutable source. |
| `S03_WRITE` | `write every value directly into its rotated destination.` | Read/write roles. |
| `S03_MAPPING` | `row `c`, column `n minus one minus r`.` | Mapping rule. |
| `S03_ONE` | `One is at row zero, column zero.` | Source 1. |
| `S03_ONE_DEST` | `row zero, column four.` | Destination for 1. |
| `S03_ONE_PLACE` | `So we place one there in the result matrix.` | Result (0,4)=1. |
| `S03_EIGHT` | `Eight is at row one, column two.` | Source 8. |
| `S03_EIGHT_DEST` | `row two, column three.` | Destination 8. |
| `S03_EIGHT_PLACE` | `So eight goes there.` | 8 written. |
| `S03_13` | `Thirteen is at row two, column two.` | Source 13. |
| `S03_13_DEST` | `row two, column two.` | Result center. |
| `S03_CENTER` | `So the center stays fixed.` | Result center 13. |
| `S03_17` | `moves to row one, column one.` | 17 mapping. |
| `S03_READ` | `Read one value from the source matrix` | Source read. |
| `S03_CALC` | `calculate its rotated coordinate` | Coordinate calculation. |
| `S03_WRITE2` | `write it into the result matrix.` | Result write. |
| `S03_ROW0` | `When we process the first source row` | Source row0. |
| `S03_COL4` | `those values fill the last column of the result.` | Result col4 complete. |
| `S03_ROW1` | `fills the next column.` | Result col3. |
| `S03_MID` | `fills the middle column.` | Result col2. |
| `S03_ROW3` | `Then row three fills column one.` | Result col1. |
| `S03_ROW4` | `fills column zero.` | Complete result. |
| `S03_RESULT` | `The completed result now looks like this.` | Rotated result. |
| `S03_CORRECT` | `So the rotation is correct.` | Correct result. |
| `S03_SAFE` | `we never had to worry about overwriting a value before using it.` | Separate-storage safety. |
| `S03_COST` | `But we created another complete matrix.` | Extra full matrix. |
| `S03_CODE` | `Let’s write this exact idea in code.` | Method1 code handoff. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S03_EASY`

### ANCHOR / SPOKEN PHRASE
> The easiest idea is

### WHAT APPEARS NOW
Untouched source matrix owns center with Method1 label.

### CENTER-STAGE HERO
Source matrix.

### CAUSE
Narration opens method.

### EFFECT / MOTION
No second matrix yet.

### WHAT MUST NOT APPEAR YET
Result matrix.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep source.

### PERSISTENT STATE
Original master.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Direct attention.

## BEAT 02 — `S03_CREATE`

### ANCHOR / SPOKEN PHRASE
> create another matrix of the same size.

### WHAT APPEARS NOW
Create an empty 5×5 result grid as support.

### CENTER-STAGE HERO
Empty result matrix.

### CAUSE
Narration creates storage.

### EFFECT / MOTION
Source shifts but remains dominant.

### WHAT MUST NOT APPEAR YET
Result values.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep both unequal-weight.

### PERSISTENT STATE
Source + empty result.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Introduce storage.

## BEAT 03 — `S03_UNCHANGED`

### ANCHOR / SPOKEN PHRASE
> Keep the original matrix unchanged

### WHAT APPEARS NOW
Tag source as SOURCE · UNCHANGED.

### CENTER-STAGE HERO
Immutable source.

### CAUSE
Narration defines role.

### EFFECT / MOTION
No source mutation.

### WHAT MUST NOT APPEAR YET
Mapping flight.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce label after hold.

### PERSISTENT STATE
Source immutable.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Teach invariant.

## BEAT 04 — `S03_WRITE`

### ANCHOR / SPOKEN PHRASE
> write every value directly into its rotated destination.

### WHAT APPEARS NOW
Tag result as DESTINATION and show source→result relation only.

### CENTER-STAGE HERO
Read/write roles.

### CAUSE
Narration defines dataflow.

### EFFECT / MOTION
No value transferred yet.

### WHAT MUST NOT APPEAR YET
Representative values before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear generic relation.

### PERSISTENT STATE
Source/result roles persist.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Teach dataflow.

## BEAT 05 — `S03_MAPPING`

### ANCHOR / SPOKEN PHRASE
> row `c`, column `n minus one minus r`.

### WHAT APPEARS NOW
Recall mapping between matrices.

### CENTER-STAGE HERO
Mapping rule.

### CAUSE
Narration restates rule.

### EFFECT / MOTION
No flight.

### WHAT MUST NOT APPEAR YET
Value 1.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep formula.

### PERSISTENT STATE
Mapping support.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Recall truth.

## BEAT 06 — `S03_ONE`

### ANCHOR / SPOKEN PHRASE
> One is at row zero, column zero.

### WHAT APPEARS NOW
Focus source 1 at (0,0).

### CENTER-STAGE HERO
Source 1.

### CAUSE
Narration selects value.

### EFFECT / MOTION
Pivot source.

### WHAT MUST NOT APPEAR YET
Destination.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Source unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Source selection.

## BEAT 07 — `S03_ONE_DEST`

### ANCHOR / SPOKEN PHRASE
> row zero, column four.

### WHAT APPEARS NOW
Highlight result (0,4) as destination.

### CENTER-STAGE HERO
Destination for 1.

### CAUSE
Narration states coordinate.

### EFFECT / MOTION
Source/destination relation.

### WHAT MUST NOT APPEAR YET
Write before next phrase.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep endpoints.

### PERSISTENT STATE
Result destination selected.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Teach mapping.

## BEAT 08 — `S03_ONE_PLACE`

### ANCHOR / SPOKEN PHRASE
> So we place one there in the result matrix.

### WHAT APPEARS NOW
Fly a clone of 1 into result (0,4); original stays.

### CENTER-STAGE HERO
Result (0,4)=1.

### CAUSE
Narration authorizes write.

### EFFECT / MOTION
BezierFlight source→destination.

### WHAT MUST NOT APPEAR YET
Other values.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear path.

### PERSISTENT STATE
Result contains 1.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Show write.

## BEAT 09 — `S03_EIGHT`

### ANCHOR / SPOKEN PHRASE
> Eight is at row one, column two.

### WHAT APPEARS NOW
Focus source 8.

### CENTER-STAGE HERO
Source 8.

### CAUSE
Narration selects example.

### EFFECT / MOTION
Prior destination recedes.

### WHAT MUST NOT APPEAR YET
Destination.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Result retains 1.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Direct attention.

## BEAT 10 — `S03_EIGHT_DEST`

### ANCHOR / SPOKEN PHRASE
> row two, column three.

### WHAT APPEARS NOW
Highlight result (2,3).

### CENTER-STAGE HERO
Destination 8.

### CAUSE
Narration states.

### EFFECT / MOTION
Relation appears.

### WHAT MUST NOT APPEAR YET
Write.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Destination selected.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Teach mapping.

## BEAT 11 — `S03_EIGHT_PLACE`

### ANCHOR / SPOKEN PHRASE
> So eight goes there.

### WHAT APPEARS NOW
Fly 8 into result (2,3).

### CENTER-STAGE HERO
8 written.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Value clone settles.

### WHAT MUST NOT APPEAR YET
Other result values.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear path.

### PERSISTENT STATE
Result has 1,8.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Cause→effect.

## BEAT 12 — `S03_13`

### ANCHOR / SPOKEN PHRASE
> Thirteen is at row two, column two.

### WHAT APPEARS NOW
Focus source center 13.

### CENTER-STAGE HERO
Source 13.

### CAUSE
Narration selects.

### EFFECT / MOTION
No movement yet.

### WHAT MUST NOT APPEAR YET
Destination.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Source unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Direct attention.

## BEAT 13 — `S03_13_DEST`

### ANCHOR / SPOKEN PHRASE
> row two, column two.

### WHAT APPEARS NOW
Highlight result center (2,2), distinct matrix same coordinate.

### CENTER-STAGE HERO
Result center.

### CAUSE
Narration states.

### EFFECT / MOTION
Cross-matrix relation.

### WHAT MUST NOT APPEAR YET
Write.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Destination selected.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Clarify separate storage.

## BEAT 14 — `S03_CENTER`

### ANCHOR / SPOKEN PHRASE
> So the center stays fixed.

### WHAT APPEARS NOW
Place clone 13 into result center.

### CENTER-STAGE HERO
Result center 13.

### CAUSE
Narration confirms.

### EFFECT / MOTION
No spatial rotation needed.

### WHAT MUST NOT APPEAR YET
Method2 center logic.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Result has representative writes.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Confirm mapping.

## BEAT 15 — `S03_17`

### ANCHOR / SPOKEN PHRASE
> moves to row one, column one.

### WHAT APPEARS NOW
Focus 17 at (3,1) and project to result (1,1).

### CENTER-STAGE HERO
17 mapping.

### CAUSE
Narration gives destination.

### EFFECT / MOTION
BezierFlight.

### WHAT MUST NOT APPEAR YET
Pattern compression before next phrase.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Representative result state.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Interior mapping.

## BEAT 16 — `S03_READ`

### ANCHOR / SPOKEN PHRASE
> Read one value from the source matrix

### WHAT APPEARS NOW
Promote source with READ cue.

### CENTER-STAGE HERO
Source read.

### CAUSE
Narration abstracts process.

### EFFECT / MOTION
No new write.

### WHAT MUST NOT APPEAR YET
Row compression.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep roles.

### PERSISTENT STATE
Read/write invariant.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Generalize.

## BEAT 17 — `S03_CALC`

### ANCHOR / SPOKEN PHRASE
> calculate its rotated coordinate

### WHAT APPEARS NOW
Mapping formula becomes hero.

### CENTER-STAGE HERO
Coordinate calculation.

### CAUSE
Narration states.

### EFFECT / MOTION
Source/result recede.

### WHAT MUST NOT APPEAR YET
Write.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep formula.

### PERSISTENT STATE
Mapping.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Generalize.

## BEAT 18 — `S03_WRITE2`

### ANCHOR / SPOKEN PHRASE
> write it into the result matrix.

### WHAT APPEARS NOW
Promote result with WRITE; one generic relation completes pipeline.

### CENTER-STAGE HERO
Result write.

### CAUSE
Narration completes invariant.

### EFFECT / MOTION
No in-place content.

### WHAT MUST NOT APPEAR YET
Row compression.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce pipeline.

### PERSISTENT STATE
Method1 invariant known.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Generalize.

## BEAT 19 — `S03_ROW0`

### ANCHOR / SPOKEN PHRASE
> When we process the first source row

### WHAT APPEARS NOW
Highlight source row0.

### CENTER-STAGE HERO
Source row0.

### CAUSE
Narration starts compression.

### EFFECT / MOTION
No batch write yet.

### WHAT MUST NOT APPEAR YET
Other rows.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep row0.

### PERSISTENT STATE
Source unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Direct attention.

## BEAT 20 — `S03_ROW0_VALUES`

### ANCHOR / SPOKEN PHRASE
> one, two, three, four, five.

### WHAT APPEARS NOW
Focus the five source-row0 cells one-by-one exactly as their values are spoken. Do not write result cells yet.

### CENTER-STAGE HERO
The currently spoken value in source row0.

### CAUSE
Narration enumerates row0.

### EFFECT / MOTION
Current-cell focus moves left-to-right across row0.

### WHAT MUST NOT APPEAR YET
Do not fill result column4 yet.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Leave row0 selected.

### PERSISTENT STATE
Source row0 selected; result unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid + theme.pivot.

### MOTION PURPOSE
Word-driven attention only.

## BEAT 21 — `S03_COL4`

### ANCHOR / SPOKEN PHRASE
> those values fill the last column of the result.

### WHAT APPEARS NOW
Complete result col4 visually as one batch; source row0 remains unchanged.

### CENTER-STAGE HERO
Result col4 complete.

### CAUSE
Narration authorizes compressed batch.

### EFFECT / MOTION
Deterministic value projections; exact timing later.

### WHAT MUST NOT APPEAR YET
Other columns.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Result col4 complete.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Compress repeated mapping.

## BEAT 22 — `S03_ROW1_START`

### ANCHOR / SPOKEN PHRASE
> Then the second source row

### WHAT APPEARS NOW
Shift source focus to row1; result col4 remains complete.

### CENTER-STAGE HERO
Source row1.

### CAUSE
Narration advances to next source row.

### EFFECT / MOTION
Only row focus changes.

### WHAT MUST NOT APPEAR YET
Do not fill result col3 yet.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep row1 selected.

### PERSISTENT STATE
Result col4 persists.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Semantic continuity.

## BEAT 23 — `S03_ROW1_VALUES`

### ANCHOR / SPOKEN PHRASE
> six, seven, eight, nine, ten.

### WHAT APPEARS NOW
Focus row1 values one-by-one exactly as spoken. Result remains unchanged during enumeration.

### CENTER-STAGE HERO
Current spoken row1 value.

### CAUSE
Narration enumerates row1.

### EFFECT / MOTION
Current-cell focus steps across row1.

### WHAT MUST NOT APPEAR YET
Do not fill result col3 before the following phrase.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Leave row1 selected.

### PERSISTENT STATE
Result col4 persists.

### KIT / EXISTING SYSTEM
Matrix/Grid + theme.pivot.

### MOTION PURPOSE
Word-driven attention.

## BEAT 24 — `S03_ROW1`

### ANCHOR / SPOKEN PHRASE
> fills the next column.

### WHAT APPEARS NOW
Highlight row1 and complete result col3.

### CENTER-STAGE HERO
Result col3.

### CAUSE
Narration describes pattern.

### EFFECT / MOTION
One batch.

### WHAT MUST NOT APPEAR YET
col2/1/0.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Result col3-4 complete.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Pattern continuation.

## BEAT 25 — `S03_MID`

### ANCHOR / SPOKEN PHRASE
> fills the middle column.

### WHAT APPEARS NOW
Complete result col2 from source row2.

### CENTER-STAGE HERO
Result col2.

### CAUSE
Narration states.

### EFFECT / MOTION
Batch transfer.

### WHAT MUST NOT APPEAR YET
col1/0.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Result col2-4 complete.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Pattern continuation.

## BEAT 26 — `S03_ROW3`

### ANCHOR / SPOKEN PHRASE
> Then row three fills column one.

### WHAT APPEARS NOW
Complete result col1.

### CENTER-STAGE HERO
Result col1.

### CAUSE
Narration states.

### EFFECT / MOTION
Batch transfer.

### WHAT MUST NOT APPEAR YET
col0.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Result col1-4 complete.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Pattern continuation.

## BEAT 27 — `S03_ROW4`

### ANCHOR / SPOKEN PHRASE
> fills column zero.

### WHAT APPEARS NOW
Complete result col0; result fully rotated.

### CENTER-STAGE HERO
Complete result.

### CAUSE
Narration finishes pattern.

### EFFECT / MOTION
Final batch settles.

### WHAT MUST NOT APPEAR YET
Correctness label before next phrase.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep result hero.

### PERSISTENT STATE
Full rotated result.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Complete trace.

## BEAT 28 — `S03_RESULT`

### ANCHOR / SPOKEN PHRASE
> The completed result now looks like this.

### WHAT APPEARS NOW
Source recedes; full result owns center. No number recital.

### CENTER-STAGE HERO
Rotated result.

### CAUSE
Narration points to visual state.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep result.

### PERSISTENT STATE
Final Method1 result.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Show visual result.

## BEAT 29 — `S03_CORRECT`

### ANCHOR / SPOKEN PHRASE
> So the rotation is correct.

### WHAT APPEARS NOW
Add restrained good confirmation.

### CENTER-STAGE HERO
Correct result.

### CAUSE
Narration gives verdict.

### EFFECT / MOTION
No celebration.

### WHAT MUST NOT APPEAR YET
Overwrite explanation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare safety note.

### PERSISTENT STATE
Result remains.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Close correctness.

## BEAT 30 — `S03_SAFE`

### ANCHOR / SPOKEN PHRASE
> we never had to worry about overwriting a value before using it.

### WHAT APPEARS NOW
Show source/result separation as overwrite protection.

### CENTER-STAGE HERO
Separate-storage safety.

### CAUSE
Narration explains.

### EFFECT / MOTION
Source remains intact while writes land elsewhere.

### WHAT MUST NOT APPEAR YET
Cycle idea.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce relation.

### PERSISTENT STATE
Method1 safety known.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Explain safety.

## BEAT 31 — `S03_COST`

### ANCHOR / SPOKEN PHRASE
> But we created another complete matrix.

### WHAT APPEARS NOW
Promote duplicate 5×5 storage as cost.

### CENTER-STAGE HERO
Extra full matrix.

### CAUSE
Narration opens weakness.

### EFFECT / MOTION
No Big-O yet.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End on storage problem.

### PERSISTENT STATE
Method1 correct but memory-heavy.

### KIT / EXISTING SYSTEM
Matrix/Grid uses the approved kit-driven grammar:

```text
RoughBox   → fixed cells
ChalkText  → values / indices / annotation
theme.pivot → current cell
theme.cyan  → query / support
theme.warn  → wrong / overwrite risk
theme.good  → confirmed state
RoughLine / RoughCurve → semantic relation
BezierFlight → semantic value transfer
```

Permanent law:

```text
CELL POSITIONS STAY FIXED.
ROW/COLUMN GEOMETRY STAYS FIXED.
VALUES MOVE OR CHANGE.
```

`MatrixGrid` wrapper/API is not present in the supplied source subset:

```text
MATRIX GRID WRAPPER API — UNRESOLVED — REPO SOURCE REQUIRED
```

Implementation must reuse/extend kit-level Matrix/Grid composition, never create a scene-local HTML table.

### MOTION PURPOSE
Derive cost.

## BEAT 32 — `S03_CODE`

### ANCHOR / SPOKEN PHRASE
> Let’s write this exact idea in code.

### WHAT APPEARS NOW
Trace visuals reduce; no code text yet.

### CENTER-STAGE HERO
Method1 code handoff.

### CAUSE
Narration transitions.

### EFFECT / MOTION
No future code.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End clean.

### PERSISTENT STATE
Exact Method1 trace known.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Continuity.

---

# 9. CONTINUITY OUT

Scene04 exact Method1 execution: source unchanged during build; result mapping assignment; then copy result back.

---

# 10. ANTIGRAVITY POST-AUDIO CONVERSION

After final MP3 + exact word-sync JSON:

```text
anchor phrase
→ unique contiguous word IDs
→ exact seconds
→ startFrame = floor(start × 30)
→ endFrameExclusive = max(startFrame+1, ceil(end × 30))
→ SceneXX_FRAME_PLAN.md
```

Frame convention: `[startFrame,endFrameExclusive)`.
Antigravity resolves WHEN, not WHAT/WHY/ORDER/STATE.
No hold unless the audio contains a real gap. No approximate seconds or arbitrary frame offsets. `UNMATCHED ANCHORS = 0` before implementation.

---

# 11. IMPLEMENTATION GATE

Read actual repository component APIs before implementation. If required source is absent: `BLOCKED — SOURCE REQUIRED`.
