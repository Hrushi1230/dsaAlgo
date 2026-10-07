# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 04 — Method 1 Code
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Construct exact Method1 code live, prove each line with matrix semantics, and explain O(n²) extra space before returning to the in-place requirement.

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

Method1 trace complete; code starts with no lines visible.

---

# 2. EXACT VERIFIED NARRATION

```text
First...

store `n`...

the size of the matrix.

Then create a new `n` by `n` result matrix.

Now scan every source row...

and every source column.

For the current value at `matrix[r][c]`...

write it into:

`result[c][n minus one minus r]`.

That single line is the coordinate mapping we just traced.

The source matrix stays unchanged...

while the result matrix is being built.

After every value reaches its destination...

copy the result matrix back into the original matrix.

That gives the correct rotation.

The code is very easy to reason about...

because every source value has its own safe destination.

But the extra result matrix contains `n` times `n` cells.

So this method uses `O of n squared` extra space.

The problem asks us to rotate the matrix in place.

So now we need to remove that extra matrix.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Exact code target from verified script. Complexity O(n²) time, O(n²) extra space.

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

Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.

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

Future lines hidden. Active line is hero. One representative semantic matrix effect per code idea. Complexity takes center after code logic. No Method2 cycle logic.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S04_N` | `store `n`` | Active n line. |
| `S04_RESULT` | `Then create a new `n` by `n` result matrix.` | Result allocation line. |
| `S04_SCANR` | `Now scan every source row` | Outer row loop. |
| `S04_SCANC` | `and every source column.` | Inner column loop. |
| `S04_CURRENT` | `For the current value at `matrix[r][c]`` | Source expression. |
| `S04_ASSIGN` | ``result[c][n minus one minus r]`.` | Mapping assignment line. |
| `S04_MAPPING` | `That single line is the coordinate mapping we just traced.` | Core mapping line. |
| `S04_SOURCE` | `The source matrix stays unchanged` | Immutable source. |
| `S04_BUILD` | `while the result matrix is being built.` | Result build. |
| `S04_COPY` | `copy the result matrix back into the original matrix.` | Copy-back code. |
| `S04_CORRECT` | `That gives the correct rotation.` | Correct rotated matrix. |
| `S04_SAFE` | `because every source value has its own safe destination.` | Safe separate storage. |
| `S04_N2CELLS` | `the extra result matrix contains `n` times `n` cells.` | Extra memory size. |
| `S04_SPACE` | `this method uses `O of n squared` extra space.` | O(n²) space. |
| `S04_INPLACE` | `The problem asks us to rotate the matrix in place.` | In-place requirement. |
| `S04_REMOVE` | `So now we need to remove that extra matrix.` | One matrix only. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S04_N`

### ANCHOR / SPOKEN PHRASE
> store `n`

### WHAT APPEARS NOW
Type only `n = len(matrix)`.

### CENTER-STAGE HERO
Active n line.

### CAUSE
Narration reaches n.

### EFFECT / MOTION
5×5 may show n=5 as support.

### WHAT MUST NOT APPEAR YET
Result allocation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Dim line when next starts.

### PERSISTENT STATE
n known.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.

### MOTION PURPOSE
Construct code.
## BEAT 02 — `S04_RESULT`

### ANCHOR / SPOKEN PHRASE
> Then create a new `n` by `n` result matrix.

### WHAT APPEARS NOW
Type result allocation line; show empty result grid as semantic effect.

### CENTER-STAGE HERO
Result allocation line.

### CAUSE
Narration reaches allocation.

### EFFECT / MOTION
Line completes→empty result matrix appears.

### WHAT MUST NOT APPEAR YET
Loops.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep line as dependency, reduce visual.

### PERSISTENT STATE
result allocated.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
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
Connect code to structure.
## BEAT 03 — `S04_SCANR`

### ANCHOR / SPOKEN PHRASE
> Now scan every source row

### WHAT APPEARS NOW
Type outer loop `for r in range(n):`.

### CENTER-STAGE HERO
Outer row loop.

### CAUSE
Narration reaches row scan.

### EFFECT / MOTION
Source matrix highlights current row conceptually.

### WHAT MUST NOT APPEAR YET
Inner loop.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep outer loop.

### PERSISTENT STATE
r loop active.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
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
Teach nesting.
## BEAT 04 — `S04_SCANC`

### ANCHOR / SPOKEN PHRASE
> and every source column.

### WHAT APPEARS NOW
Type inner loop `for c in range(n):`.

### CENTER-STAGE HERO
Inner column loop.

### CAUSE
Narration reaches column scan.

### EFFECT / MOTION
Matrix narrows row→cell.

### WHAT MUST NOT APPEAR YET
Mapping assignment.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep loops.

### PERSISTENT STATE
(r,c) source selected.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
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
Teach traversal.
## BEAT 05 — `S04_CURRENT`

### ANCHOR / SPOKEN PHRASE
> For the current value at `matrix[r][c]`

### WHAT APPEARS NOW
Focus current source expression/cell; no invented code line needed.

### CENTER-STAGE HERO
Source expression.

### CAUSE
Narration names source.

### EFFECT / MOTION
Semantic cell query.

### WHAT MUST NOT APPEAR YET
Assignment before destination words.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep current source.

### PERSISTENT STATE
Source cell.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
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
Connect code to visual.
## BEAT 06 — `S04_ASSIGN`

### ANCHOR / SPOKEN PHRASE
> `result[c][n minus one minus r]`.

### WHAT APPEARS NOW
Type exact assignment `result[c][n - 1 - r] = matrix[r][c]`.

### CENTER-STAGE HERO
Mapping assignment line.

### CAUSE
Narration reaches destination.

### EFFECT / MOTION
Line completes→representative value flies to result destination.

### WHAT MUST NOT APPEAR YET
Copy-back loops.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle flight.

### PERSISTENT STATE
Result receives mapped value.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
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
Teach core code.
## BEAT 07 — `S04_MAPPING`

### ANCHOR / SPOKEN PHRASE
> That single line is the coordinate mapping we just traced.

### WHAT APPEARS NOW
Keep assignment hero; annotate `(r,c)→(c,n-1-r)` as semantic equivalence.

### CENTER-STAGE HERO
Core mapping line.

### CAUSE
Narration explains line.

### EFFECT / MOTION
No new code.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear formula after explanation.

### PERSISTENT STATE
Assignment understood.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
ChalkText.

### MOTION PURPOSE
Meaning.
## BEAT 08 — `S04_SOURCE`

### ANCHOR / SPOKEN PHRASE
> The source matrix stays unchanged

### WHAT APPEARS NOW
Show source matrix quiet and unchanged while code is support.

### CENTER-STAGE HERO
Immutable source.

### CAUSE
Narration explains build behavior.

### EFFECT / MOTION
No source write.

### WHAT MUST NOT APPEAR YET
Copyback.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep distinction.

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
Explain semantics.
## BEAT 09 — `S04_BUILD`

### ANCHOR / SPOKEN PHRASE
> while the result matrix is being built.

### WHAT APPEARS NOW
Promote result; compressed representative cells arrive.

### CENTER-STAGE HERO
Result build.

### CAUSE
Narration explains accumulation.

### EFFECT / MOTION
No fake full trace timing.

### WHAT MUST NOT APPEAR YET
Copyback code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle built result.

### PERSISTENT STATE
Result built.

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
Explain semantics.
## BEAT 10 — `S04_COPY`

### ANCHOR / SPOKEN PHRASE
> copy the result matrix back into the original matrix.

### WHAT APPEARS NOW
Type second nested copy-back loops progressively and `matrix[r][c] = result[r][c]`; show result→source handoff.

### CENTER-STAGE HERO
Copy-back code.

### CAUSE
Narration reaches copyback.

### EFFECT / MOTION
Code types in spoken-order chunks; source receives rotated values.

### WHAT MUST NOT APPEAR YET
Complexity graph.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
After copyback result support reduces.

### PERSISTENT STATE
Original matrix rotated.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
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
Trace→code identity.
## BEAT 11 — `S04_CORRECT`

### ANCHOR / SPOKEN PHRASE
> That gives the correct rotation.

### WHAT APPEARS NOW
Show final source matrix as verified rotated result; code recedes.

### CENTER-STAGE HERO
Correct rotated matrix.

### CAUSE
Narration confirms.

### EFFECT / MOTION
Good state only.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce matrix.

### PERSISTENT STATE
Method1 correct.

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
## BEAT 12 — `S04_SAFE`

### ANCHOR / SPOKEN PHRASE
> because every source value has its own safe destination.

### WHAT APPEARS NOW
Briefly show separate source/result memory relation.

### CENTER-STAGE HERO
Safe separate storage.

### CAUSE
Narration explains ease.

### EFFECT / MOTION
No new code.

### WHAT MUST NOT APPEAR YET
Cycle idea.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce relation.

### PERSISTENT STATE
Method1 rationale.

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
## BEAT 13 — `S04_N2CELLS`

### ANCHOR / SPOKEN PHRASE
> the extra result matrix contains `n` times `n` cells.

### WHAT APPEARS NOW
Code reduces; extra grid becomes hero with `n × n cells`.

### CENTER-STAGE HERO
Extra memory size.

### CAUSE
Narration identifies storage cause.

### EFFECT / MOTION
Matrix area represents n×n additional cells.

### WHAT MUST NOT APPEAR YET
O(n²) label before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep duplicate grid.

### PERSISTENT STATE
Extra storage visible.

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
Why space grows.
## BEAT 14 — `S04_SPACE`

### ANCHOR / SPOKEN PHRASE
> this method uses `O of n squared` extra space.

### WHAT APPEARS NOW
Show O(n²) SPACE and a quadratic mathematical growth curve tied to n×n storage.

### CENTER-STAGE HERO
O(n²) space.

### CAUSE
Narration states Big-O.

### EFFECT / MOTION
Use RoughCurve/reusable graph.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Graph exits/reduces.

### PERSISTENT STATE
Method1 cost known.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

### MOTION PURPOSE
Explain complexity.
## BEAT 15 — `S04_INPLACE`

### ANCHOR / SPOKEN PHRASE
> The problem asks us to rotate the matrix in place.

### WHAT APPEARS NOW
Return one matrix to center; duplicate result fades as disallowed target storage.

### CENTER-STAGE HERO
In-place requirement.

### CAUSE
Narration returns to constraint.

### EFFECT / MOTION
Two matrices→one matrix handoff.

### WHAT MUST NOT APPEAR YET
Cycle solution.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep one matrix.

### PERSISTENT STATE
Need in-place solution.

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
Derive next method.
## BEAT 16 — `S04_REMOVE`

### ANCHOR / SPOKEN PHRASE
> So now we need to remove that extra matrix.

### WHAT APPEARS NOW
Remove result structure completely; leave original master reset.

### CENTER-STAGE HERO
One matrix only.

### CAUSE
Narration states goal.

### EFFECT / MOTION
No algorithm yet.

### WHAT MUST NOT APPEAR YET
Cycle positions.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End clean.

### PERSISTENT STATE
Original master ready.

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

Scene05: Method1 correct; O(n²) extra space; one original matrix reset; target is in-place.

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
