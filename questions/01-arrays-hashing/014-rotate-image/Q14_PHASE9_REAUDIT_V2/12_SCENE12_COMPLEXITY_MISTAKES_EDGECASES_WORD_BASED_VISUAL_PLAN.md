# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 12 — Complexity + Mistakes + Edge Cases
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Compare complexities visually, then teach verified mistakes and edge cases sequentially without a dashboard.

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

All three algorithms/code paths complete; analysis/QA only.

---

# 2. EXACT VERIFIED NARRATION

```text
Let’s compare all three methods clearly.

Method One uses another complete matrix.

We visit the matrix cells...

and we store another `n` by `n` matrix.

So:

time is `O of n squared`...

and extra space is `O of n squared`.

Method Two rotates values directly in four-way cycles.

Each cycle does constant work...

and together the layers cover the matrix.

So:

time is `O of n squared`...

and extra space is `O of one`.

Method Three does two transformations.

Transpose takes `O of n squared`.

Reversing all rows takes `O of n squared`.

Adding them still gives:

`O of n squared`.

And because both operations happen in place...

extra space is `O of one`.

Now let’s look at the mistakes that usually break this problem.

First mistake...

transpose the matrix...

then reverse the columns.

That does not give the clockwise rotation we want.

After transpose...

for clockwise rotation...

we reverse each row.

Second mistake...

during transpose...

swap every pair from both sides of the diagonal.

For example...

if you swap row zero, column one...

with row one, column zero...

and later swap the same pair again...

you return them to the original positions.

So process only one side of the diagonal.

That is why column starts from...

`r plus one`.

Third mistake...

in the four-way method...

move one value before saving the value it will overwrite.

Once that old value is destroyed...

the cycle cannot be completed correctly.

So save one value first.

Fourth mistake...

process the layer through the `last` position.

The loop must stop before `last`...

because the last top position belongs to a cycle that already starts from the first side.

And one more useful edge case...

an odd-sized matrix has a center cell.

That center maps back to itself.

So we do not need a special movement for it.

A one by one matrix also stays unchanged.

A two by two matrix uses one four-way cycle.

Negative numbers...

duplicate numbers...

or repeated values...

do not change the algorithm.

We used unique numbers only because they make the movement easier to see.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

M1 O(n²)/O(n²); M2 O(n²)/O(1); M3 O(n²)/O(1). Mistakes: reverse columns, double-swap transpose, overwrite without temp, include last, unnecessary center movement. Edges: 1×1,2×2,odd center, duplicates/negatives.

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

`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

---

# 6. SCENE-SPECIFIC RULES

Sequential complexity modules. Graphs explain growth, no benchmarks. Reset after each mistake. Wrong states use color+second cue. Edge cases concise. No roadmap progress.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S12_COMPARE` | `Let’s compare all three methods clearly.` | Comparison context. |
| `S12_M1STORE` | `we store another `n` by `n` matrix.` | Method1 storage cause. |
| `S12_M1TIME` | `time is `O of n squared`` | Method1 time. |
| `S12_M1SPACE` | `extra space is `O of n squared`.` | Method1 space. |
| `S12_M2` | `Method Two rotates values directly in four-way cycles.` | Method2 structure. |
| `S12_CONSTWORK` | `Each cycle does constant work` | Constant work per cycle. |
| `S12_COVER` | `together the layers cover the matrix.` | Layer coverage. |
| `S12_M2TIME` | `time is `O of n squared`` | Method2 time. |
| `S12_M2SPACE` | `extra space is `O of one`.` | Method2 space. |
| `S12_M3` | `Method Three does two transformations.` | Method3 structure. |
| `S12_TN2` | `Transpose takes `O of n squared`.` | Transpose complexity. |
| `S12_RN2` | `Reversing all rows takes `O of n squared`.` | Reverse-row complexity. |
| `S12_ADD` | `Adding them still gives: `O of n squared`.` | Overall M3 time. |
| `S12_M3SPACE` | `extra space is `O of one`.` | M3 space. |
| `S12_MISTAKES` | `Now let’s look at the mistakes that usually break this problem.` | Mistake module. |
| `S12_M1` | `transpose the matrix... then reverse the columns.` | Wrong transform sequence. |
| `S12_NOTCLOCK` | `That does not give the clockwise rotation we want.` | Wrong direction. |
| `S12_CORRECTROW` | `we reverse each row.` | Correct repair. |
| `S12_M2` | `during transpose... swap every pair from both sides of the diagonal.` | Double-swap mistake. |
| `S12_PAIR` | `if you swap row zero, column one... with row one, column zero` | First swap. |
| `S12_AGAIN` | `and later swap the same pair again` | Second swap. |
| `S12_RETURN` | `you return them to the original positions.` | Double-swap consequence. |
| `S12_RPLUS` | ``r plus one`.` | Correct bound. |
| `S12_M3` | `in the four-way method... move one value before saving the value it will overwrite.` | Overwrite mistake. |
| `S12_DESTROY` | `Once that old value is destroyed` | Lost data. |
| `S12_SAVE` | `So save one value first.` | Correct repair. |
| `S12_M4` | `process the layer through the `last` position.` | Loop-bound mistake. |
| `S12_STOP` | `The loop must stop before `last`` | Correct bound. |
| `S12_CENTER` | `an odd-sized matrix has a center cell.` | Odd center. |
| `S12_FIXED` | `That center maps back to itself.` | Center fixed. |
| `S12_1X1` | `A one by one matrix also stays unchanged.` | 1×1 edge. |
| `S12_2X2` | `A two by two matrix uses one four-way cycle.` | 2×2 edge. |
| `S12_VALUES` | `Negative numbers... duplicate numbers... or repeated values... do not change the algorithm.` | Value-independence. |
| `S12_UNIQUE` | `We used unique numbers only because they make the movement easier to see.` | Master testcase rationale. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S12_COMPARE`

### ANCHOR / SPOKEN PHRASE
> Let’s compare all three methods clearly.

### WHAT APPEARS NOW
Show one method name at a time; no three-card dashboard.

### CENTER-STAGE HERO
Comparison context.

### CAUSE
Narration opens analysis.

### EFFECT / MOTION
No complexity values yet.

### WHAT MUST NOT APPEAR YET
Mistakes.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep Method1 active.

### PERSISTENT STATE
Sequential comparison.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Organize analysis.

## BEAT 02 — `S12_M1STORE`

### ANCHOR / SPOKEN PHRASE
> we store another `n` by `n` matrix.

### WHAT APPEARS NOW
Method1 extra matrix becomes center; original support.

### CENTER-STAGE HERO
Method1 storage cause.

### CAUSE
Narration states reason.

### EFFECT / MOTION
No Big-O label before next phrase.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep duplicate.

### PERSISTENT STATE
n×n extra cells.

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
Why complexity.

## BEAT 03 — `S12_M1TIME`

### ANCHOR / SPOKEN PHRASE
> time is `O of n squared`

### WHAT APPEARS NOW
Show O(n²) time curve tied to visiting n×n cells.

### CENTER-STAGE HERO
Method1 time.

### CAUSE
Narration states.

### EFFECT / MOTION
Quadratic curve.

### WHAT MUST NOT APPEAR YET
Space.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep cause support.

### PERSISTENT STATE
M1 time.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

### MOTION PURPOSE
Explain.

## BEAT 04 — `S12_M1SPACE`

### ANCHOR / SPOKEN PHRASE
> extra space is `O of n squared`.

### WHAT APPEARS NOW
Shift to duplicate-matrix area as space reason; O(n²) space appears.

### CENTER-STAGE HERO
Method1 space.

### CAUSE
Narration states.

### EFFECT / MOTION
No benchmark numbers.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear Method1 after hold.

### PERSISTENT STATE
M1 complexity known.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.
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

## BEAT 05 — `S12_M2`

### ANCHOR / SPOKEN PHRASE
> Method Two rotates values directly in four-way cycles.

### WHAT APPEARS NOW
Bring one matrix + one cycle relation center.

### CENTER-STAGE HERO
Method2 structure.

### CAUSE
Narration changes method.

### EFFECT / MOTION
No complexity notation until reason.

### WHAT MUST NOT APPEAR YET
Method3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Method2 context.

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
Organize.

## BEAT 06 — `S12_CONSTWORK`

### ANCHOR / SPOKEN PHRASE
> Each cycle does constant work

### WHAT APPEARS NOW
Show one cycle with fixed set of assignments, no invented operation total.

### CENTER-STAGE HERO
Constant work per cycle.

### CAUSE
Narration gives cause.

### EFFECT / MOTION
No O(n²) yet.

### WHAT MUST NOT APPEAR YET
Layer coverage.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep relation.

### PERSISTENT STATE
Time reason.

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

## BEAT 07 — `S12_COVER`

### ANCHOR / SPOKEN PHRASE
> together the layers cover the matrix.

### WHAT APPEARS NOW
Outer→inner region relation shows matrix coverage.

### CENTER-STAGE HERO
Layer coverage.

### CAUSE
Narration gives second cause.

### EFFECT / MOTION
No exact count.

### WHAT MUST NOT APPEAR YET
O(n²) label.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare curve.

### PERSISTENT STATE
Reason complete.

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

## BEAT 08 — `S12_M2TIME`

### ANCHOR / SPOKEN PHRASE
> time is `O of n squared`

### WHAT APPEARS NOW
Show quadratic curve linked to matrix-size coverage.

### CENTER-STAGE HERO
Method2 time.

### CAUSE
Narration states.

### EFFECT / MOTION
RoughCurve.

### WHAT MUST NOT APPEAR YET
Space.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep briefly.

### PERSISTENT STATE
M2 time.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

### MOTION PURPOSE
Explain.

## BEAT 09 — `S12_M2SPACE`

### ANCHOR / SPOKEN PHRASE
> extra space is `O of one`.

### WHAT APPEARS NOW
Show one temp token + O(1) flat relation.

### CENTER-STAGE HERO
Method2 space.

### CAUSE
Narration states.

### EFFECT / MOTION
No Method3.

### WHAT MUST NOT APPEAR YET
Method3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
M2 complexity known.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.
ChalkText.

### MOTION PURPOSE
Explain.

## BEAT 10 — `S12_M3`

### ANCHOR / SPOKEN PHRASE
> Method Three does two transformations.

### WHAT APPEARS NOW
Show TRANSPOSE → REVERSE ROWS summary.

### CENTER-STAGE HERO
Method3 structure.

### CAUSE
Narration changes method.

### EFFECT / MOTION
No complexity values before spoken.

### WHAT MUST NOT APPEAR YET
Mistakes.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M3 context.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Organize.

## BEAT 11 — `S12_TN2`

### ANCHOR / SPOKEN PHRASE
> Transpose takes `O of n squared`.

### WHAT APPEARS NOW
Show quadratic curve with above-diagonal work support.

### CENTER-STAGE HERO
Transpose complexity.

### CAUSE
Narration states.

### EFFECT / MOTION
No total.

### WHAT MUST NOT APPEAR YET
Reverse complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep curve.

### PERSISTENT STATE
M3 stage1.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.
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

## BEAT 12 — `S12_RN2`

### ANCHOR / SPOKEN PHRASE
> Reversing all rows takes `O of n squared`.

### WHAT APPEARS NOW
Show row work on same curve class.

### CENTER-STAGE HERO
Reverse-row complexity.

### CAUSE
Narration states.

### EFFECT / MOTION
No total conclusion.

### WHAT MUST NOT APPEAR YET
Total.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
M3 stage2.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.
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

## BEAT 13 — `S12_ADD`

### ANCHOR / SPOKEN PHRASE
> Adding them still gives: `O of n squared`.

### WHAT APPEARS NOW
Combine sequential stages as O(n²)+O(n²)=O(n²), not multiplication.

### CENTER-STAGE HERO
Overall M3 time.

### CAUSE
Narration concludes.

### EFFECT / MOTION
No fake O(n⁴).

### WHAT MUST NOT APPEAR YET
Space.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep notation.

### PERSISTENT STATE
M3 time known.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

### MOTION PURPOSE
Correct complexity algebra.

## BEAT 14 — `S12_M3SPACE`

### ANCHOR / SPOKEN PHRASE
> extra space is `O of one`.

### WHAT APPEARS NOW
Show bounded auxiliary state; flat O(1) relation.

### CENTER-STAGE HERO
M3 space.

### CAUSE
Narration states.

### EFFECT / MOTION
No new algorithm.

### WHAT MUST NOT APPEAR YET
Mistakes.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear complexity module.

### PERSISTENT STATE
All complexity known.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

### MOTION PURPOSE
Explain.

## BEAT 15 — `S12_MISTAKES`

### ANCHOR / SPOKEN PHRASE
> Now let’s look at the mistakes that usually break this problem.

### WHAT APPEARS NOW
Clear comparison; restore neutral original matrix.

### CENTER-STAGE HERO
Mistake module.

### CAUSE
Narration transitions.

### EFFECT / MOTION
No mistake yet.

### WHAT MUST NOT APPEAR YET
Roadmap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep neutral.

### PERSISTENT STATE
Ready mistake1.

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

## BEAT 16 — `S12_M1`

### ANCHOR / SPOKEN PHRASE
> transpose the matrix... then reverse the columns.

### WHAT APPEARS NOW
Show TRANSPOSE → REVERSE COLUMNS as warn transformation.

### CENTER-STAGE HERO
Wrong transform sequence.

### CAUSE
Narration names mistake.

### EFFECT / MOTION
Wrong-direction cue.

### WHAT MUST NOT APPEAR YET
Correct row reversal.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep wrong sequence.

### PERSISTENT STATE
Mistake1 setup.

### KIT / EXISTING SYSTEM
ChalkText + theme.warn.

### MOTION PURPOSE
Teach mistake.

## BEAT 17 — `S12_NOTCLOCK`

### ANCHOR / SPOKEN PHRASE
> That does not give the clockwise rotation we want.

### WHAT APPEARS NOW
Show direction mismatch; reject wrong sequence.

### CENTER-STAGE HERO
Wrong direction.

### CAUSE
Narration states.

### EFFECT / MOTION
No full wrong matrix needed.

### WHAT MUST NOT APPEAR YET
Correct repair.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear wrong sequence.

### PERSISTENT STATE
Mistake1 understood.

### KIT / EXISTING SYSTEM
warn + second cue.

### MOTION PURPOSE
Teach.

## BEAT 18 — `S12_CORRECTROW`

### ANCHOR / SPOKEN PHRASE
> we reverse each row.

### WHAT APPEARS NOW
Show correct TRANSPOSE → REVERSE ROWS briefly.

### CENTER-STAGE HERO
Correct repair.

### CAUSE
Narration states.

### EFFECT / MOTION
No trace replay.

### WHAT MUST NOT APPEAR YET
Mistake2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear repair.

### PERSISTENT STATE
Correct direction restored.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Fix.

## BEAT 19 — `S12_MISTAKE2`

### ANCHOR / SPOKEN PHRASE
> during transpose... swap every pair from both sides of the diagonal.

### WHAT APPEARS NOW
Show both-side traversal as warn region.

### CENTER-STAGE HERO
Double-swap mistake.

### CAUSE
Narration names.

### EFFECT / MOTION
No pair movement yet.

### WHAT MUST NOT APPEAR YET
Example.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep wrong region.

### PERSISTENT STATE
Mistake2 setup.

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
Teach.

## BEAT 20 — `S12_PAIR`

### ANCHOR / SPOKEN PHRASE
> if you swap row zero, column one... with row one, column zero

### WHAT APPEARS NOW
Execute one representative first swap ghost/temporary state.

### CENTER-STAGE HERO
First swap.

### CAUSE
Narration gives example.

### EFFECT / MOTION
No second swap.

### WHAT MUST NOT APPEAR YET
Return.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep pair.

### PERSISTENT STATE
Intermediate wrong traversal state.

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
Teach.

## BEAT 21 — `S12_AGAIN`

### ANCHOR / SPOKEN PHRASE
> and later swap the same pair again

### WHAT APPEARS NOW
Execute second swap returning values to original.

### CENTER-STAGE HERO
Second swap.

### CAUSE
Narration states.

### EFFECT / MOTION
No next mistake.

### WHAT MUST NOT APPEAR YET
r+1 repair.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle original.

### PERSISTENT STATE
Original pair restored.

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
Teach.

## BEAT 22 — `S12_RETURN`

### ANCHOR / SPOKEN PHRASE
> you return them to the original positions.

### WHAT APPEARS NOW
Confirm undo with warn cue.

### CENTER-STAGE HERO
Double-swap consequence.

### CAUSE
Narration concludes.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Correct bound.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear wrong traversal.

### PERSISTENT STATE
Mistake2 understood.

### KIT / EXISTING SYSTEM
warn + ChalkText.

### MOTION PURPOSE
Teach.

## BEAT 23 — `S12_RPLUS`

### ANCHOR / SPOKEN PHRASE
> `r plus one`.

### WHAT APPEARS NOW
Show correct above-diagonal region and c=r+1 relation.

### CENTER-STAGE HERO
Correct bound.

### CAUSE
Narration repairs.

### EFFECT / MOTION
No code editor required.

### WHAT MUST NOT APPEAR YET
Mistake3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear after hold.

### PERSISTENT STATE
Correct transpose region.

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
Fix.

## BEAT 24 — `S12_MISTAKE3`

### ANCHOR / SPOKEN PHRASE
> in the four-way method... move one value before saving the value it will overwrite.

### WHAT APPEARS NOW
Show unsafe 1→5 relation; 5 gets warn cue.

### CENTER-STAGE HERO
Overwrite mistake.

### CAUSE
Narration names.

### EFFECT / MOTION
No safe temp yet.

### WHAT MUST NOT APPEAR YET
Consequence.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep risk.

### PERSISTENT STATE
Mistake3 setup.

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
Teach.

## BEAT 25 — `S12_DESTROY`

### ANCHOR / SPOKEN PHRASE
> Once that old value is destroyed

### WHAT APPEARS NOW
Show 5 LOST ghost/X without permanently mutating master.

### CENTER-STAGE HERO
Lost data.

### CAUSE
Narration states.

### EFFECT / MOTION
No safe repair.

### WHAT MUST NOT APPEAR YET
Save first.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep consequence.

### PERSISTENT STATE
Overwrite failure.

### KIT / EXISTING SYSTEM
warn + ChalkText.

### MOTION PURPOSE
Teach.

## BEAT 26 — `S12_SAVE`

### ANCHOR / SPOKEN PHRASE
> So save one value first.

### WHAT APPEARS NOW
Show temp token preserving 1; reset matrix.

### CENTER-STAGE HERO
Correct repair.

### CAUSE
Narration repairs.

### EFFECT / MOTION
No full cycle.

### WHAT MUST NOT APPEAR YET
Mistake4.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
Temp invariant.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Fix.

## BEAT 27 — `S12_M4`

### ANCHOR / SPOKEN PHRASE
> process the layer through the `last` position.

### WHAT APPEARS NOW
Show top-side iterator including last as warn endpoint duplication.

### CENTER-STAGE HERO
Loop-bound mistake.

### CAUSE
Narration names.

### EFFECT / MOTION
No code.

### WHAT MUST NOT APPEAR YET
Correct bound.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Mistake4 setup.

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
Teach.

## BEAT 28 — `S12_STOP`

### ANCHOR / SPOKEN PHRASE
> The loop must stop before `last`

### WHAT APPEARS NOW
Show exclusive endpoint `i < last`.

### CENTER-STAGE HERO
Correct bound.

### CAUSE
Narration repairs.

### EFFECT / MOTION
No next edge yet.

### WHAT MUST NOT APPEAR YET
Center.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
Loop bound fixed.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Fix.

## BEAT 29 — `S12_CENTER`

### ANCHOR / SPOKEN PHRASE
> an odd-sized matrix has a center cell.

### WHAT APPEARS NOW
Show 5×5 center 13.

### CENTER-STAGE HERO
Odd center.

### CAUSE
Narration shifts edge case.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
1×1.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep center.

### PERSISTENT STATE
Center context.

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
Edge case.

## BEAT 30 — `S12_FIXED`

### ANCHOR / SPOKEN PHRASE
> That center maps back to itself.

### WHAT APPEARS NOW
Show (2,2)→(2,2) fixed cue.

### CENTER-STAGE HERO
Center fixed.

### CAUSE
Narration states.

### EFFECT / MOTION
No special movement.

### WHAT MUST NOT APPEAR YET
1×1.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear after hold.

### PERSISTENT STATE
Center needs no action.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Edge proof.

## BEAT 31 — `S12_1X1`

### ANCHOR / SPOKEN PHRASE
> A one by one matrix also stays unchanged.

### WHAT APPEARS NOW
Replace with single-cell grid briefly.

### CENTER-STAGE HERO
1×1 edge.

### CAUSE
Narration states.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
2×2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
1×1 unchanged.

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
Edge case.

## BEAT 32 — `S12_2X2`

### ANCHOR / SPOKEN PHRASE
> A two by two matrix uses one four-way cycle.

### WHAT APPEARS NOW
Show 2×2 with one cycle outline; no execution.

### CENTER-STAGE HERO
2×2 edge.

### CAUSE
Narration states.

### EFFECT / MOTION
No dashboard.

### WHAT MUST NOT APPEAR YET
Values.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
2×2 behavior.

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
Edge case.

## BEAT 33 — `S12_VALUES`

### ANCHOR / SPOKEN PHRASE
> Negative numbers... duplicate numbers... or repeated values... do not change the algorithm.

### WHAT APPEARS NOW
Show a small representative matrix/state annotation indicating mapping depends on positions, not uniqueness.

### CENTER-STAGE HERO
Value-independence.

### CAUSE
Narration states.

### EFFECT / MOTION
No new algorithm.

### WHAT MUST NOT APPEAR YET
Recap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep concise.

### PERSISTENT STATE
Algorithm positional.

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
ChalkText.

### MOTION PURPOSE
Edge case.

## BEAT 34 — `S12_UNIQUE`

### ANCHOR / SPOKEN PHRASE
> We used unique numbers only because they make the movement easier to see.

### WHAT APPEARS NOW
Return to master testcase identity; clarify unique values are a visualization choice.

### CENTER-STAGE HERO
Master testcase rationale.

### CAUSE
Narration explains.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Roadmap.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End clean.

### PERSISTENT STATE
Ready recap.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Close analysis.

---

# 9. CONTINUITY OUT

Scene13: all methods, complexities, mistakes, edges known; Q14 still ACTIVE; global still 13/227.

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
