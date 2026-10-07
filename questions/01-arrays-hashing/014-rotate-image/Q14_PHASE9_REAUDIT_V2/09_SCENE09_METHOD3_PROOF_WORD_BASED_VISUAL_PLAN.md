# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 09 — Method 3 Idea: Decompose the Mapping
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Prove Method3 algebraically, then verify the proof with value 8 without yet executing the full matrix.

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

Scene08 derived two conceptual stages but no matrix transformation has been executed.

---

# 2. EXACT VERIFIED NARRATION

```text
Start again with one coordinate.

A value is at:

row `r`, column `c`.

Its final clockwise destination is:

row `c`...

column `n minus one minus r`.

Now break that movement into two steps.

First...

transpose the matrix.

Transpose changes:

row `r`, column `c`...

into:

row `c`, column `r`.

So the row is already correct.

Only the column is still wrong.

We need the column to become:

`n minus one minus r`.

How do we change column `r`...

into column `n minus one minus r`...

while staying in the same row?

Reverse that row.

So after transpose:

`r, c` becomes `c, r`.

And after reversing the row:

`c, r` becomes...

`c, n minus one minus r`.

That is exactly the clockwise mapping.

Let’s verify it with eight.

Eight starts at:

row one, column two.

After transpose...

it moves to row two, column one.

Then we reverse row two.

Column one becomes column three.

So eight finishes at:

row two, column three.

That is exactly where the direct rotation mapping sends it.

So:

transpose...

then reverse every row...

is not a memorized trick.

It is simply the clockwise coordinate mapping...

broken into two easier transformations.

Now let’s execute both transformations on the full matrix.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Proof `(r,c)→(c,r)→(c,n-1-r)`. Example 8: `(1,2)→(2,1)→(2,3)`.

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

Visual identity DIAGONAL REFLECTION → HORIZONTAL REFLECTION. One matrix only. Proof scene, not full execution. No full transposed state or code.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S09_COORD` | `Start again with one coordinate.` | Source coordinate. |
| `S09_DEST` | `Its final clockwise destination is` | Destination target. |
| `S09_FINAL` | `column `n minus one minus r`.` | Clockwise destination. |
| `S09_BREAK` | `Now break that movement into two steps.` | Two-step scaffold. |
| `S09_TRANSPOSE` | `transpose the matrix.` | Transpose operation. |
| `S09_RC` | `row `c`, column `r`.` | Intermediate coordinate (c,r). |
| `S09_ROW_CORRECT` | `So the row is already correct.` | Correct row component. |
| `S09_COL_WRONG` | `Only the column is still wrong.` | Wrong column component. |
| `S09_NEED` | ``n minus one minus r`.` | Target column. |
| `S09_HOW` | `while staying in the same row?` | Same-row constraint. |
| `S09_REVERSE` | `Reverse that row.` | Row reversal. |
| `S09_CHAIN` | ``r, c` becomes `c, r`.` | First algebra step. |
| `S09_CHAIN2` | ``c, r` becomes... `c, n minus one minus r`.` | Second algebra step. |
| `S09_EXACT` | `That is exactly the clockwise mapping.` | Proof conclusion. |
| `S09_EIGHT` | `Let’s verify it with eight.` | Value 8. |
| `S09_EIGHT_SRC` | `row one, column two.` | 8 source. |
| `S09_EIGHT_T` | `it moves to row two, column one.` | Intermediate 8 at (2,1). |
| `S09_ROW2` | `Then we reverse row two.` | Row2 reversal context. |
| `S09_COL3` | `Column one becomes column three.` | 8 final proof destination. |
| `S09_MATCH` | `That is exactly where the direct rotation mapping sends it.` | Proof equality. |
| `S09_NOTTRICK` | `is not a memorized trick.` | Derived method. |
| `S09_TWO` | `broken into two easier transformations.` | Method3 identity. |
| `S09_EXECUTE` | `Now let’s execute both transformations on the full matrix.` | Full-trace handoff. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S09_COORD`

### ANCHOR / SPOKEN PHRASE
> Start again with one coordinate.

### WHAT APPEARS NOW
Show symbolic `(r,c)` center stage; matrix faint support.

### CENTER-STAGE HERO
Source coordinate.

### CAUSE
Narration resets proof.

### EFFECT / MOTION
No destination yet.

### WHAT MUST NOT APPEAR YET
Concrete 8.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep source.

### PERSISTENT STATE
Symbolic mapping.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Set proof.
## BEAT 02 — `S09_DEST`

### ANCHOR / SPOKEN PHRASE
> Its final clockwise destination is

### WHAT APPEARS NOW
Show destination scaffold to the right.

### CENTER-STAGE HERO
Destination target.

### CAUSE
Narration introduces target.

### EFFECT / MOTION
Arrow remains incomplete until components spoken.

### WHAT MUST NOT APPEAR YET
Intermediate transform.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Proof target.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Set target.
## BEAT 03 — `S09_FINAL`

### ANCHOR / SPOKEN PHRASE
> column `n minus one minus r`.

### WHAT APPEARS NOW
Complete target `(c,n-1-r)`.

### CENTER-STAGE HERO
Clockwise destination.

### CAUSE
Narration completes target.

### EFFECT / MOTION
No decomposition yet.

### WHAT MUST NOT APPEAR YET
Transpose.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep target.

### PERSISTENT STATE
Target locked.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Truth.
## BEAT 04 — `S09_BREAK`

### ANCHOR / SPOKEN PHRASE
> Now break that movement into two steps.

### WHAT APPEARS NOW
Insert empty middle node between source and target.

### CENTER-STAGE HERO
Two-step scaffold.

### CAUSE
Narration authorizes decomposition.

### EFFECT / MOTION
No labels yet.

### WHAT MUST NOT APPEAR YET
Transpose before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep scaffold.

### PERSISTENT STATE
Source→?→target.

### KIT / EXISTING SYSTEM
RoughLine + ChalkText.

### MOTION PURPOSE
Derive.
## BEAT 05 — `S09_TRANSPOSE`

### ANCHOR / SPOKEN PHRASE
> transpose the matrix.

### WHAT APPEARS NOW
Label first arrow TRANSPOSE and show main diagonal on matrix support.

### CENTER-STAGE HERO
Transpose operation.

### CAUSE
Narration names transform.

### EFFECT / MOTION
No swaps executed.

### WHAT MUST NOT APPEAR YET
Reverse row.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep stage1.

### PERSISTENT STATE
First transform named.

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
Introduce method.
## BEAT 06 — `S09_RC`

### ANCHOR / SPOKEN PHRASE
> row `c`, column `r`.

### WHAT APPEARS NOW
Fill middle node `(c,r)` and visually swap row/column roles.

### CENTER-STAGE HERO
Intermediate coordinate (c,r).

### CAUSE
Narration states transpose mapping.

### EFFECT / MOTION
Source→middle resolves.

### WHAT MUST NOT APPEAR YET
Reverse transform.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep middle.

### PERSISTENT STATE
Transpose mapping proven.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Proof.
## BEAT 07 — `S09_ROW_CORRECT`

### ANCHOR / SPOKEN PHRASE
> So the row is already correct.

### WHAT APPEARS NOW
Highlight coordinate `c` in middle and final as matching.

### CENTER-STAGE HERO
Correct row component.

### CAUSE
Narration identifies partial success.

### EFFECT / MOTION
No column transform.

### WHAT MUST NOT APPEAR YET
Reverse label.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep comparison.

### PERSISTENT STATE
Row fixed.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Explain.
## BEAT 08 — `S09_COL_WRONG`

### ANCHOR / SPOKEN PHRASE
> Only the column is still wrong.

### WHAT APPEARS NOW
Highlight middle `r` vs final `n-1-r` with query/warn contrast.

### CENTER-STAGE HERO
Wrong column component.

### CAUSE
Narration identifies remaining work.

### EFFECT / MOTION
No row reversal yet.

### WHAT MUST NOT APPEAR YET
Concrete 8.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep comparison.

### PERSISTENT STATE
Column mismatch.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Explain.
## BEAT 09 — `S09_NEED`

### ANCHOR / SPOKEN PHRASE
> `n minus one minus r`.

### WHAT APPEARS NOW
Focus target column expression.

### CENTER-STAGE HERO
Target column.

### CAUSE
Narration states required value.

### EFFECT / MOTION
No solution movement.

### WHAT MUST NOT APPEAR YET
Reverse answer.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Column goal.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Set next transformation.
## BEAT 10 — `S09_HOW`

### ANCHOR / SPOKEN PHRASE
> while staying in the same row?

### WHAT APPEARS NOW
Show row c as fixed horizontal lane; only column may change.

### CENTER-STAGE HERO
Same-row constraint.

### CAUSE
Narration asks.

### EFFECT / MOTION
No answer yet.

### WHAT MUST NOT APPEAR YET
Reverse.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep lane.

### PERSISTENT STATE
Need horizontal transformation.

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
Derive.
## BEAT 11 — `S09_REVERSE`

### ANCHOR / SPOKEN PHRASE
> Reverse that row.

### WHAT APPEARS NOW
Label second arrow REVERSE ROW; show left↔right reflection relation on one row.

### CENTER-STAGE HERO
Row reversal.

### CAUSE
Narration answers.

### EFFECT / MOTION
No full matrix execution.

### WHAT MUST NOT APPEAR YET
Concrete 8.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Second transform named.

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
Derive.
## BEAT 12 — `S09_CHAIN`

### ANCHOR / SPOKEN PHRASE
> `r, c` becomes `c, r`.

### WHAT APPEARS NOW
Highlight source→middle coordinate transformation.

### CENTER-STAGE HERO
First algebra step.

### CAUSE
Narration restates.

### EFFECT / MOTION
No new matrix motion.

### WHAT MUST NOT APPEAR YET
Second algebra step.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep chain.

### PERSISTENT STATE
Proof.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Proof.
## BEAT 13 — `S09_CHAIN2`

### ANCHOR / SPOKEN PHRASE
> `c, r` becomes... `c, n minus one minus r`.

### WHAT APPEARS NOW
Highlight middle→target transformation.

### CENTER-STAGE HERO
Second algebra step.

### CAUSE
Narration completes.

### EFFECT / MOTION
Full chain now visible.

### WHAT MUST NOT APPEAR YET
Concrete 8.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep chain.

### PERSISTENT STATE
Clockwise mapping proven.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Proof.
## BEAT 14 — `S09_EXACT`

### ANCHOR / SPOKEN PHRASE
> That is exactly the clockwise mapping.

### WHAT APPEARS NOW
Align two-step chain with canonical direct mapping as equivalent.

### CENTER-STAGE HERO
Proof conclusion.

### CAUSE
Narration states equivalence.

### EFFECT / MOTION
No full execution.

### WHAT MUST NOT APPEAR YET
8 before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce comparison after hold.

### PERSISTENT STATE
Method3 valid.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Close proof.
## BEAT 15 — `S09_EIGHT`

### ANCHOR / SPOKEN PHRASE
> Let’s verify it with eight.

### WHAT APPEARS NOW
Return master matrix; focus 8 at (1,2).

### CENTER-STAGE HERO
Value 8.

### CAUSE
Narration starts concrete proof.

### EFFECT / MOTION
Symbolic chain becomes support.

### WHAT MUST NOT APPEAR YET
Movement.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep 8.

### PERSISTENT STATE
Master unchanged.

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
Verify.
## BEAT 16 — `S09_EIGHT_SRC`

### ANCHOR / SPOKEN PHRASE
> row one, column two.

### WHAT APPEARS NOW
Show coordinate `(1,2)` beside 8.

### CENTER-STAGE HERO
8 source.

### CAUSE
Narration states.

### EFFECT / MOTION
No move.

### WHAT MUST NOT APPEAR YET
Transpose destination.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Source coordinate.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Verify.
## BEAT 17 — `S09_EIGHT_T`

### ANCHOR / SPOKEN PHRASE
> it moves to row two, column one.

### WHAT APPEARS NOW
Project 8 to (2,1) as proof ghost; full matrix stays unchanged.

### CENTER-STAGE HERO
Intermediate 8 at (2,1).

### CAUSE
Narration applies transpose.

### EFFECT / MOTION
BezierFlight/diagonal reflection relation.

### WHAT MUST NOT APPEAR YET
Row reverse.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep intermediate ghost.

### PERSISTENT STATE
Proof state.

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
Verify.
## BEAT 18 — `S09_ROW2`

### ANCHOR / SPOKEN PHRASE
> Then we reverse row two.

### WHAT APPEARS NOW
Highlight row2 horizontally; intermediate 8 stays col1.

### CENTER-STAGE HERO
Row2 reversal context.

### CAUSE
Narration applies second transform.

### EFFECT / MOTION
No destination yet.

### WHAT MUST NOT APPEAR YET
Column3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep row.

### PERSISTENT STATE
Proof state.

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
Verify.
## BEAT 19 — `S09_COL3`

### ANCHOR / SPOKEN PHRASE
> Column one becomes column three.

### WHAT APPEARS NOW
Project 8 horizontally (2,1)→(2,3).

### CENTER-STAGE HERO
8 final proof destination.

### CAUSE
Narration states reflection.

### EFFECT / MOTION
Value ghost moves horizontally.

### WHAT MUST NOT APPEAR YET
Full matrix mutation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep destination.

### PERSISTENT STATE
8 at (2,3).

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
Verify.
## BEAT 20 — `S09_MATCH`

### ANCHOR / SPOKEN PHRASE
> That is exactly where the direct rotation mapping sends it.

### WHAT APPEARS NOW
Show direct (1,2)→(2,3) relation aligned with two-step result.

### CENTER-STAGE HERO
Proof equality.

### CAUSE
Narration concludes example.

### EFFECT / MOTION
No new state.

### WHAT MUST NOT APPEAR YET
Full trace.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear example after hold.

### PERSISTENT STATE
Method3 verified.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine.

### MOTION PURPOSE
Close verification.
## BEAT 21 — `S09_NOTTRICK`

### ANCHOR / SPOKEN PHRASE
> is not a memorized trick.

### WHAT APPEARS NOW
Center proof chain with positive label DERIVED FROM MAPPING.

### CENTER-STAGE HERO
Derived method.

### CAUSE
Narration states pedagogy.

### EFFECT / MOTION
No decorative flourish.

### WHAT MUST NOT APPEAR YET
Trace execution.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep proof summary.

### PERSISTENT STATE
Concept understood.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Teaching emphasis.
## BEAT 22 — `S09_TWO`

### ANCHOR / SPOKEN PHRASE
> broken into two easier transformations.

### WHAT APPEARS NOW
Compress to TRANSPOSE → REVERSE ROWS → CLOCKWISE.

### CENTER-STAGE HERO
Method3 identity.

### CAUSE
Narration summarizes.

### EFFECT / MOTION
No matrix execution.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Method3 summary.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Continuity.
## BEAT 23 — `S09_EXECUTE`

### ANCHOR / SPOKEN PHRASE
> Now let’s execute both transformations on the full matrix.

### WHAT APPEARS NOW
Bring untouched master matrix back center; proof labels recede.

### CENTER-STAGE HERO
Full-trace handoff.

### CAUSE
Narration transitions.

### EFFECT / MOTION
No swap yet.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End on original master.

### PERSISTENT STATE
Master reset.

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


---

# 9. CONTINUITY OUT

Scene10 starts from untouched master; proof known; first full transform is transpose, second reverse every row.

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
