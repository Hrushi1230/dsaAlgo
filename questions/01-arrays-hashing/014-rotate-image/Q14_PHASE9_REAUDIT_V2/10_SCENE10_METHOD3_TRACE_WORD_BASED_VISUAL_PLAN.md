# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 10 — Method 3 Full Verified Trace
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Execute exact transpose swaps above the diagonal, show the full transposed state visually, then reverse rows to reach the verified clockwise result.

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

Method3 proof complete; start from untouched master.

---

# 2. EXACT VERIFIED NARRATION

```text
Start again from our original matrix.

First step...

transpose it across the main diagonal.

That means:

`matrix[r][c]` swaps with `matrix[c][r]`.

But we must process each pair only once.

So we only swap cells above the main diagonal.

Let’s execute the swaps.

Two swaps with six.

Three swaps with eleven.

Four swaps with sixteen.

Five swaps with twenty-one.

Now move to the next row above the diagonal.

Eight swaps with twelve.

Nine swaps with seventeen.

Ten swaps with twenty-two.

Next:

fourteen swaps with eighteen.

Fifteen swaps with twenty-three.

And finally:

twenty swaps with twenty-four.

The transpose is complete.

The transposed matrix now looks like this.

Notice what happened.

The original columns became rows.

Now perform the second transformation.

Reverse every row.

Watch row zero.

Its order flips from left to right.

Now apply the same reversal to every remaining row.

The final matrix now looks like this.

The final matrix is exactly the ninety-degree clockwise rotation.

And we achieved it in place...

using two simple transformations:

transpose...

then reverse every row.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Exact transpose swaps: 2↔6,3↔11,4↔16,5↔21,8↔12,9↔17,10↔22,14↔18,15↔23,20↔24. Then reverse every row to final.

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

Start original. Main diagonal structural support. Each spoken swap executes exactly once. Full transposed/final matrices shown visually, not read. Row0 detailed; remaining rows compressed. No code.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S10_ORIGINAL` | `Start again from our original matrix.` | Original master. |
| `S10_TRANSPOSE` | `transpose it across the main diagonal.` | Main diagonal. |
| `S10_SWAP_RULE` | ``matrix[r][c]` swaps with `matrix[c][r]`.` | Symmetric pair rule. |
| `S10_ONCE` | `we must process each pair only once.` | One-pair invariant. |
| `S10_ABOVE` | `we only swap cells above the main diagonal.` | Above-diagonal region. |
| `S10_2_6` | `Two swaps with six.` | 2↔6. |
| `S10_3_11` | `Three swaps with eleven.` | 3↔11. |
| `S10_4_16` | `Four swaps with sixteen.` | 4↔16. |
| `S10_5_21` | `Five swaps with twenty-one.` | 5↔21. |
| `S10_NEXTROW` | `Now move to the next row above the diagonal.` | Row1 above diagonal. |
| `S10_8_12` | `Eight swaps with twelve.` | 8↔12. |
| `S10_9_17` | `Nine swaps with seventeen.` | 9↔17. |
| `S10_10_22` | `Ten swaps with twenty-two.` | 10↔22. |
| `S10_14_18` | `fourteen swaps with eighteen.` | 14↔18. |
| `S10_15_23` | `Fifteen swaps with twenty-three.` | 15↔23. |
| `S10_20_24` | `twenty swaps with twenty-four.` | 20↔24. |
| `S10_TRANS_DONE` | `The transpose is complete.` | Transposed matrix. |
| `S10_LOOKS` | `The transposed matrix now looks like this.` | Full transposed state. |
| `S10_COLSROWS` | `The original columns became rows.` | Column→row relationship. |
| `S10_SECOND` | `Now perform the second transformation.` | Row transformation context. |
| `S10_REVERSE` | `Reverse every row.` | Row reversal operation. |
| `S10_ROW0` | `Watch row zero.` | Row0. |
| `S10_FLIP` | `Its order flips from left to right.` | Row0 reversal. |
| `S10_REMAIN` | `Now apply the same reversal to every remaining row.` | Rows1–4 reversal. |
| `S10_FINAL` | `The final matrix now looks like this.` | Final rotated matrix. |
| `S10_EXACT` | `The final matrix is exactly the ninety-degree clockwise rotation.` | Correct clockwise result. |
| `S10_INPLACE` | `we achieved it in place` | In-place property. |
| `S10_TWO` | `using two simple transformations` | Two transforms. |
| `S10_END` | `then reverse every row.` | Method3 summary. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S10_ORIGINAL`

### ANCHOR / SPOKEN PHRASE
> Start again from our original matrix.

### WHAT APPEARS NOW
Show untouched 5×5 master center stage.

### CENTER-STAGE HERO
Original master.

### CAUSE
Narration resets state.

### EFFECT / MOTION
No overlay yet.

### WHAT MUST NOT APPEAR YET
Diagonal.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep master.

### PERSISTENT STATE
Original.

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
Reset trace.
## BEAT 02 — `S10_TRANSPOSE`

### ANCHOR / SPOKEN PHRASE
> transpose it across the main diagonal.

### WHAT APPEARS NOW
Draw/activate main diagonal and label TRANSPOSE.

### CENTER-STAGE HERO
Main diagonal.

### CAUSE
Narration starts transform.

### EFFECT / MOTION
No swaps yet.

### WHAT MUST NOT APPEAR YET
Reverse rows.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep diagonal.

### PERSISTENT STATE
Transpose context.

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
Teach structure.
## BEAT 03 — `S10_SWAP_RULE`

### ANCHOR / SPOKEN PHRASE
> `matrix[r][c]` swaps with `matrix[c][r]`.

### WHAT APPEARS NOW
Select one generic symmetric pair across diagonal with bidirectional relation; no mutation.

### CENTER-STAGE HERO
Symmetric pair rule.

### CAUSE
Narration defines operation.

### EFFECT / MOTION
No concrete values.

### WHAT MUST NOT APPEAR YET
All-pair scan.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep relation.

### PERSISTENT STATE
Transpose rule.

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
Teach rule.
## BEAT 04 — `S10_ONCE`

### ANCHOR / SPOKEN PHRASE
> we must process each pair only once.

### WHAT APPEARS NOW
Show paired cells as one shared operation; counterpart side recedes.

### CENTER-STAGE HERO
One-pair invariant.

### CAUSE
Narration states.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
All-cell scan.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep above-side emphasis.

### PERSISTENT STATE
One-side processing.

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
Correctness.
## BEAT 05 — `S10_ABOVE`

### ANCHOR / SPOKEN PHRASE
> we only swap cells above the main diagonal.

### WHAT APPEARS NOW
Highlight only above-diagonal region.

### CENTER-STAGE HERO
Above-diagonal region.

### CAUSE
Narration states scope.

### EFFECT / MOTION
No values move.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep region through swaps.

### PERSISTENT STATE
Active swap region.

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
Teach bounds.
## BEAT 06 — `S10_2_6`

### ANCHOR / SPOKEN PHRASE
> Two swaps with six.

### WHAT APPEARS NOW
Execute (0,1)↔(1,0); values cross relation; cells fixed.

### CENTER-STAGE HERO
2↔6.

### CAUSE
Narration authorizes swap.

### EFFECT / MOTION
Two semantic value flights.

### WHAT MUST NOT APPEAR YET
Next swap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Transpose state1.

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
Execute.
## BEAT 07 — `S10_3_11`

### ANCHOR / SPOKEN PHRASE
> Three swaps with eleven.

### WHAT APPEARS NOW
Execute (0,2)↔(2,0).

### CENTER-STAGE HERO
3↔11.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Cross-swap.

### WHAT MUST NOT APPEAR YET
Next swap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state2.

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
Execute.
## BEAT 08 — `S10_4_16`

### ANCHOR / SPOKEN PHRASE
> Four swaps with sixteen.

### WHAT APPEARS NOW
Execute (0,3)↔(3,0).

### CENTER-STAGE HERO
4↔16.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Cross-swap.

### WHAT MUST NOT APPEAR YET
Next.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state3.

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
Execute.
## BEAT 09 — `S10_5_21`

### ANCHOR / SPOKEN PHRASE
> Five swaps with twenty-one.

### WHAT APPEARS NOW
Execute (0,4)↔(4,0); row0 transpose work complete.

### CENTER-STAGE HERO
5↔21.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Cross-swap.

### WHAT MUST NOT APPEAR YET
Row1 swaps.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
row0 swaps complete.

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
Execute.
## BEAT 10 — `S10_NEXTROW`

### ANCHOR / SPOKEN PHRASE
> Now move to the next row above the diagonal.

### WHAT APPEARS NOW
Shift active-region focus to row1 cells c>1.

### CENTER-STAGE HERO
Row1 above diagonal.

### CAUSE
Narration advances.

### EFFECT / MOTION
No swap until next phrase.

### WHAT MUST NOT APPEAR YET
Row2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep focus.

### PERSISTENT STATE
Next swap row.

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
Continuity.
## BEAT 11 — `S10_8_12`

### ANCHOR / SPOKEN PHRASE
> Eight swaps with twelve.

### WHAT APPEARS NOW
Execute (1,2)↔(2,1).

### CENTER-STAGE HERO
8↔12.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Swap.

### WHAT MUST NOT APPEAR YET
Next.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state.

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
Execute.
## BEAT 12 — `S10_9_17`

### ANCHOR / SPOKEN PHRASE
> Nine swaps with seventeen.

### WHAT APPEARS NOW
Execute (1,3)↔(3,1).

### CENTER-STAGE HERO
9↔17.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Swap.

### WHAT MUST NOT APPEAR YET
Next.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state.

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
Execute.
## BEAT 13 — `S10_10_22`

### ANCHOR / SPOKEN PHRASE
> Ten swaps with twenty-two.

### WHAT APPEARS NOW
Execute (1,4)↔(4,1).

### CENTER-STAGE HERO
10↔22.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Swap.

### WHAT MUST NOT APPEAR YET
Row2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state.

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
Execute.
## BEAT 14 — `S10_14_18`

### ANCHOR / SPOKEN PHRASE
> fourteen swaps with eighteen.

### WHAT APPEARS NOW
Execute (2,3)↔(3,2).

### CENTER-STAGE HERO
14↔18.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Swap.

### WHAT MUST NOT APPEAR YET
Next.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state.

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
Execute.
## BEAT 15 — `S10_15_23`

### ANCHOR / SPOKEN PHRASE
> Fifteen swaps with twenty-three.

### WHAT APPEARS NOW
Execute (2,4)↔(4,2).

### CENTER-STAGE HERO
15↔23.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Swap.

### WHAT MUST NOT APPEAR YET
Final transpose swap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state.

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
Execute.
## BEAT 16 — `S10_20_24`

### ANCHOR / SPOKEN PHRASE
> twenty swaps with twenty-four.

### WHAT APPEARS NOW
Execute (3,4)↔(4,3); transpose swaps complete.

### CENTER-STAGE HERO
20↔24.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Swap.

### WHAT MUST NOT APPEAR YET
Row reversal.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle exact transposed state.

### PERSISTENT STATE
Transpose complete.

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
Execute.
## BEAT 17 — `S10_TRANS_DONE`

### ANCHOR / SPOKEN PHRASE
> The transpose is complete.

### WHAT APPEARS NOW
Clear active relation; keep exact transposed state.

### CENTER-STAGE HERO
Transposed matrix.

### CAUSE
Narration confirms.

### EFFECT / MOTION
No new mutation.

### WHAT MUST NOT APPEAR YET
Row reversal.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Exact transposed state.

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
Close transform1.
## BEAT 18 — `S10_LOOKS`

### ANCHOR / SPOKEN PHRASE
> The transposed matrix now looks like this.

### WHAT APPEARS NOW
Present full transposed matrix visually: [1,6,11,16,21], [2,7,12,17,22], [3,8,13,18,23], [4,9,14,19,24], [5,10,15,20,25]. No number recital.

### CENTER-STAGE HERO
Full transposed state.

### CAUSE
Narration points to visual.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Reverse rows.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Transposed matrix.

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
Visual state.
## BEAT 19 — `S10_COLSROWS`

### ANCHOR / SPOKEN PHRASE
> The original columns became rows.

### WHAT APPEARS NOW
Use one representative original-column→transposed-row relation.

### CENTER-STAGE HERO
Column→row relationship.

### CAUSE
Narration explains transpose.

### EFFECT / MOTION
No data changes.

### WHAT MUST NOT APPEAR YET
Row reversal.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Transposed state persists.

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
Explain.
## BEAT 20 — `S10_SECOND`

### ANCHOR / SPOKEN PHRASE
> Now perform the second transformation.

### WHAT APPEARS NOW
Clear diagonal emphasis; prepare rows as structural units.

### CENTER-STAGE HERO
Row transformation context.

### CAUSE
Narration moves on.

### EFFECT / MOTION
No reverse yet.

### WHAT MUST NOT APPEAR YET
Final state.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep matrix.

### PERSISTENT STATE
Ready for reverse.

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
Continuity.
## BEAT 21 — `S10_REVERSE`

### ANCHOR / SPOKEN PHRASE
> Reverse every row.

### WHAT APPEARS NOW
Highlight all row lanes lightly; no all-at-once mutation.

### CENTER-STAGE HERO
Row reversal operation.

### CAUSE
Narration states transform.

### EFFECT / MOTION
No row0 motion until next phrase.

### WHAT MUST NOT APPEAR YET
Final state.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep rows.

### PERSISTENT STATE
Reverse-row context.

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
Introduce transform.
## BEAT 22 — `S10_ROW0`

### ANCHOR / SPOKEN PHRASE
> Watch row zero.

### WHAT APPEARS NOW
Promote row0 only.

### CENTER-STAGE HERO
Row0.

### CAUSE
Narration selects representative row.

### EFFECT / MOTION
Others dim.

### WHAT MUST NOT APPEAR YET
Rows1-4 mutation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep row0 active.

### PERSISTENT STATE
Transposed state.

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
## BEAT 23 — `S10_FLIP`

### ANCHOR / SPOKEN PHRASE
> Its order flips from left to right.

### WHAT APPEARS NOW
Reverse row0 in place; values exchange between fixed cells.

### CENTER-STAGE HERO
Row0 reversal.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Pairwise or reusable row-reversal motion.

### WHAT MUST NOT APPEAR YET
Rows1-4 before next phrase.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle row0.

### PERSISTENT STATE
row0 final.

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
Teach reversal.
## BEAT 24 — `S10_REMAIN`

### ANCHOR / SPOKEN PHRASE
> Now apply the same reversal to every remaining row.

### WHAT APPEARS NOW
Reverse rows1→4 sequentially inside this one approved anchor window; exact sub-timing resolved later from audio/motion tokens.

### CENTER-STAGE HERO
Rows1–4 reversal.

### CAUSE
Narration authorizes compressed repetition.

### EFFECT / MOTION
No guessed timing.

### WHAT MUST NOT APPEAR YET
Final confirmation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle complete matrix.

### PERSISTENT STATE
All rows reversed.

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
Compress repetition.
## BEAT 25 — `S10_FINAL`

### ANCHOR / SPOKEN PHRASE
> The final matrix now looks like this.

### WHAT APPEARS NOW
Show exact verified final matrix visually: [21,16,11,6,1], [22,17,12,7,2], [23,18,13,8,3], [24,19,14,9,4], [25,20,15,10,5].

### CENTER-STAGE HERO
Final rotated matrix.

### CAUSE
Narration points to state.

### EFFECT / MOTION
Temporary overlays exit.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep result.

### PERSISTENT STATE
Final.

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
Show result.
## BEAT 26 — `S10_EXACT`

### ANCHOR / SPOKEN PHRASE
> The final matrix is exactly the ninety-degree clockwise rotation.

### WHAT APPEARS NOW
Add restrained good confirmation and direction cue.

### CENTER-STAGE HERO
Correct clockwise result.

### CAUSE
Narration confirms.

### EFFECT / MOTION
No decorative spin.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare in-place conclusion.

### PERSISTENT STATE
Final persists.

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
## BEAT 27 — `S10_INPLACE`

### ANCHOR / SPOKEN PHRASE
> we achieved it in place

### WHAT APPEARS NOW
Show ONE MATRIX · IN PLACE.

### CENTER-STAGE HERO
In-place property.

### CAUSE
Narration states.

### EFFECT / MOTION
No complexity graph.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep concise.

### PERSISTENT STATE
Method3 in-place.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Method property.
## BEAT 28 — `S10_TWO`

### ANCHOR / SPOKEN PHRASE
> using two simple transformations

### WHAT APPEARS NOW
Compress to `TRANSPOSE → REVERSE ROWS`.

### CENTER-STAGE HERO
Two transforms.

### CAUSE
Narration summarizes.

### EFFECT / MOTION
No code.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Method3 identity.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Summary.
## BEAT 29 — `S10_END`

### ANCHOR / SPOKEN PHRASE
> then reverse every row.

### WHAT APPEARS NOW
Final two-step summary settles; trace visuals reduce for code handoff.

### CENTER-STAGE HERO
Method3 summary.

### CAUSE
Narration closes scene.

### EFFECT / MOTION
No future code.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End clean.

### PERSISTENT STATE
Scene11 ready.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Continuity.


---

# 9. CONTINUITY OUT

Scene11: exact trace identity = transpose above diagonal, then reverse every row; final clockwise result.

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
