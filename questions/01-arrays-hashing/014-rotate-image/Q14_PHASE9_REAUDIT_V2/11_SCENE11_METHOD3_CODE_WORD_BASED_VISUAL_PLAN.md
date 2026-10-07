# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 11 — Method 3 Optimal Code
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Construct transpose+reverse code live, prove why c starts at r+1, connect code to the exact trace, and explain O(n²) time/O(1) extra space.

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

Method3 full trace complete; code starts empty.

---

# 2. EXACT VERIFIED NARRATION

```text
Now let’s translate that proof directly into code.

First...

store `n`.

Then transpose the matrix.

For every row `r`...

start column `c` from...

`r plus one`.

This is important.

We only want cells above the main diagonal.

If we started from column zero every time...

we would eventually swap the same pair twice...

and undo our own work.

So for each pair above the diagonal...

swap:

`matrix[r][c]`

with:

`matrix[c][r]`.

When these loops finish...

the matrix is fully transposed.

Now the second step is very small.

For every row in the matrix...

reverse that row.

That is the whole optimal solution.

The code mirrors the proof exactly:

transpose...

then reverse rows.

The transpose takes `O of n squared` time.

Reversing all rows also takes `O of n squared` time overall.

So the total is still:

`O of n squared`.

And we only use a constant amount of extra memory.

So the extra space is:

`O of one`.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Exact code: n; nested transpose loops with c in range(r+1,n); tuple swap; then for row in matrix: row.reverse(). Complexity O(n²) time/O(1) extra space.

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

Future lines hidden. r+1 gets an above-diagonal proof. Demonstrate one real symmetric swap and one row reversal. Complexity after code logic.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S11_START` | `Now let’s translate that proof directly into code.` | Code handoff. |
| `S11_N` | `store `n`.` | n line. |
| `S11_TRANS` | `Then transpose the matrix.` | Transpose code phase. |
| `S11_R` | `For every row `r`` | Outer transpose loop. |
| `S11_C` | ``r plus one`.` | Inner transpose loop. |
| `S11_IMPORTANT` | `This is important.` | Critical bound. |
| `S11_ABOVE` | `We only want cells above the main diagonal.` | Active transpose region. |
| `S11_ZERO` | `If we started from column zero every time` | Wrong all-pairs traversal. |
| `S11_TWICE` | `we would eventually swap the same pair twice` | Double-swap problem. |
| `S11_UNDO` | `and undo our own work.` | Undo effect. |
| `S11_PAIR` | `So for each pair above the diagonal` | Valid pair. |
| `S11_SWAP1` | ``matrix[r][c]`` | First expression. |
| `S11_SWAP2` | ``matrix[c][r]`.` | Swap assignment line. |
| `S11_TRANS_DONE` | `the matrix is fully transposed.` | Transposed matrix. |
| `S11_SECOND` | `Now the second step is very small.` | Second phase handoff. |
| `S11_ROW` | `For every row in the matrix` | Row loop. |
| `S11_REVERSE` | `reverse that row.` | row.reverse() line. |
| `S11_WHOLE` | `That is the whole optimal solution.` | Completed solution. |
| `S11_MIRROR` | `The code mirrors the proof exactly` | Code↔proof mapping. |
| `S11_TTIME` | `The transpose takes `O of n squared` time.` | Transpose time. |
| `S11_RTIME` | `Reversing all rows also takes `O of n squared` time overall.` | Reverse time. |
| `S11_TOTAL` | `So the total is still: `O of n squared`.` | Overall time. |
| `S11_CONST` | `we only use a constant amount of extra memory.` | Constant auxiliary memory. |
| `S11_SPACE` | ``O of one`.` | O(1) space. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S11_START`

### ANCHOR / SPOKEN PHRASE
> Now let’s translate that proof directly into code.

### WHAT APPEARS NOW
Empty code focus enters; matrix support starts original.

### CENTER-STAGE HERO
Code handoff.

### CAUSE
Narration begins coding.

### EFFECT / MOTION
No lines yet until next phrase.

### WHAT MUST NOT APPEAR YET
Future code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep stage.

### PERSISTENT STATE
Original matrix support.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.

### MOTION PURPOSE
Continuity.
## BEAT 02 — `S11_N`

### ANCHOR / SPOKEN PHRASE
> store `n`.

### WHAT APPEARS NOW
Type `n = len(matrix)`.

### CENTER-STAGE HERO
n line.

### CAUSE
Narration reaches.

### EFFECT / MOTION
No other lines.

### WHAT MUST NOT APPEAR YET
Loops.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Dim later.

### PERSISTENT STATE
n known.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.

### MOTION PURPOSE
Construct.
## BEAT 03 — `S11_TRANS`

### ANCHOR / SPOKEN PHRASE
> Then transpose the matrix.

### WHAT APPEARS NOW
Begin transpose code phase; outer loop scaffold may prepare but no future line fully appears before its spoken anchor.

### CENTER-STAGE HERO
Transpose code phase.

### CAUSE
Narration names phase.

### EFFECT / MOTION
Matrix diagonal support enters.

### WHAT MUST NOT APPEAR YET
Inner range/reverse rows.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep phase.

### PERSISTENT STATE
Transpose context.

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
Construct.
## BEAT 04 — `S11_R`

### ANCHOR / SPOKEN PHRASE
> For every row `r`

### WHAT APPEARS NOW
Type `for r in range(n):`.

### CENTER-STAGE HERO
Outer transpose loop.

### CAUSE
Narration states loop.

### EFFECT / MOTION
Matrix row variable focus.

### WHAT MUST NOT APPEAR YET
Inner loop.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
r traversal.

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
Meaning.
## BEAT 05 — `S11_C`

### ANCHOR / SPOKEN PHRASE
> `r plus one`.

### WHAT APPEARS NOW
Type `for c in range(r + 1, n):`; highlight above-diagonal region.

### CENTER-STAGE HERO
Inner transpose loop.

### CAUSE
Narration defines exact start.

### EFFECT / MOTION
Matrix semantics prove region.

### WHAT MUST NOT APPEAR YET
Swap line.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep loops.

### PERSISTENT STATE
c>r only.

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
Correctness.
## BEAT 06 — `S11_IMPORTANT`

### ANCHOR / SPOKEN PHRASE
> This is important.

### WHAT APPEARS NOW
Keep `r+1` expression hero.

### CENTER-STAGE HERO
Critical bound.

### CAUSE
Narration flags importance.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Wrong traversal until next phrase.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Bound emphasized.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.

### MOTION PURPOSE
Direct attention.
## BEAT 07 — `S11_ABOVE`

### ANCHOR / SPOKEN PHRASE
> We only want cells above the main diagonal.

### WHAT APPEARS NOW
Highlight above-diagonal region; below region dims.

### CENTER-STAGE HERO
Active transpose region.

### CAUSE
Narration explains.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Failure example.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep region.

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
Explain bound.
## BEAT 08 — `S11_ZERO`

### ANCHOR / SPOKEN PHRASE
> If we started from column zero every time

### WHAT APPEARS NOW
Show both sides active as a WRONG traversal concept; do not type a wrong solution line into final code.

### CENTER-STAGE HERO
Wrong all-pairs traversal.

### CAUSE
Narration proposes mistake.

### EFFECT / MOTION
Warn state only.

### WHAT MUST NOT APPEAR YET
Double swap consequence.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep wrong region.

### PERSISTENT STATE
Hypothetical traversal.

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
Teach mistake.
## BEAT 09 — `S11_TWICE`

### ANCHOR / SPOKEN PHRASE
> we would eventually swap the same pair twice

### WHAT APPEARS NOW
Show representative (0,1)↔(1,0) relation then reverse relation concept.

### CENTER-STAGE HERO
Double-swap problem.

### CAUSE
Narration explains.

### EFFECT / MOTION
Ghost swap only.

### WHAT MUST NOT APPEAR YET
Undo conclusion.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep relation.

### PERSISTENT STATE
Wrong traversal proof.

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
## BEAT 10 — `S11_UNDO`

### ANCHOR / SPOKEN PHRASE
> and undo our own work.

### WHAT APPEARS NOW
Show pair returning to original with UNDO warn cue, then erase wrong traversal.

### CENTER-STAGE HERO
Undo effect.

### CAUSE
Narration concludes failure.

### EFFECT / MOTION
Restore support matrix.

### WHAT MUST NOT APPEAR YET
Swap line.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Return to correct region.

### PERSISTENT STATE
Correct bound remains.

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
## BEAT 11 — `S11_PAIR`

### ANCHOR / SPOKEN PHRASE
> So for each pair above the diagonal

### WHAT APPEARS NOW
Focus one valid symmetric pair.

### CENTER-STAGE HERO
Valid pair.

### CAUSE
Narration resumes solution.

### EFFECT / MOTION
No assignment text until operands spoken.

### WHAT MUST NOT APPEAR YET
Reverse-row code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep pair.

### PERSISTENT STATE
Correct transpose context.

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
## BEAT 12 — `S11_SWAP1`

### ANCHOR / SPOKEN PHRASE
> `matrix[r][c]`

### WHAT APPEARS NOW
Type/start swap assignment; highlight first symmetric cell.

### CENTER-STAGE HERO
First expression.

### CAUSE
Narration names left operand.

### EFFECT / MOTION
Do not complete assignment yet.

### WHAT MUST NOT APPEAR YET
Second operand.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep active.

### PERSISTENT STATE
Pair selected.

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
Word-synced coding.
## BEAT 13 — `S11_SWAP2`

### ANCHOR / SPOKEN PHRASE
> `matrix[c][r]`.

### WHAT APPEARS NOW
Complete Python tuple swap line exactly; execute one representative symmetric swap.

### CENTER-STAGE HERO
Swap assignment line.

### CAUSE
Narration completes pair.

### EFFECT / MOTION
Line completes then values swap.

### WHAT MUST NOT APPEAR YET
Row reversal.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle swap.

### PERSISTENT STATE
Transpose operation encoded.

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
Trace→code.
## BEAT 14 — `S11_TRANS_DONE`

### ANCHOR / SPOKEN PHRASE
> the matrix is fully transposed.

### WHAT APPEARS NOW
Code loops remain; semantic matrix shows full transposed state visually.

### CENTER-STAGE HERO
Transposed matrix.

### CAUSE
Narration concludes loops.

### EFFECT / MOTION
No reverse-row code yet.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare second step.

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
Close phase.
## BEAT 15 — `S11_SECOND`

### ANCHOR / SPOKEN PHRASE
> Now the second step is very small.

### WHAT APPEARS NOW
Transpose code dims; cursor moves to new line below loops.

### CENTER-STAGE HERO
Second phase handoff.

### CAUSE
Narration transitions.

### EFFECT / MOTION
No row loop yet.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep editor focus.

### PERSISTENT STATE
Ready for reverse.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.

### MOTION PURPOSE
Continuity.
## BEAT 16 — `S11_ROW`

### ANCHOR / SPOKEN PHRASE
> For every row in the matrix

### WHAT APPEARS NOW
Type `for row in matrix:`.

### CENTER-STAGE HERO
Row loop.

### CAUSE
Narration reaches.

### EFFECT / MOTION
No `row.reverse()` yet.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep loop.

### PERSISTENT STATE
row iterator.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.

### MOTION PURPOSE
Construct.
## BEAT 17 — `S11_REVERSE`

### ANCHOR / SPOKEN PHRASE
> reverse that row.

### WHAT APPEARS NOW
Type `row.reverse()`; demonstrate one row reversal in semantic matrix support.

### CENTER-STAGE HERO
row.reverse() line.

### CAUSE
Narration reaches.

### EFFECT / MOTION
Line completes→row values reverse in fixed cells.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Second transformation encoded.

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
Trace→code.
## BEAT 18 — `S11_WHOLE`

### ANCHOR / SPOKEN PHRASE
> That is the whole optimal solution.

### WHAT APPEARS NOW
Show compact full typed solution now that every line has been narrated; active cursor clears.

### CENTER-STAGE HERO
Completed solution.

### CAUSE
Narration confirms.

### EFFECT / MOTION
No new effect.

### WHAT MUST NOT APPEAR YET
Complexity graph.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Code may hold briefly.

### PERSISTENT STATE
Final code complete.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.

### MOTION PURPOSE
Close code.
## BEAT 19 — `S11_MIRROR`

### ANCHOR / SPOKEN PHRASE
> The code mirrors the proof exactly

### WHAT APPEARS NOW
Highlight transpose block then reverse-row block; matrix support shows matching transform labels.

### CENTER-STAGE HERO
Code↔proof mapping.

### CAUSE
Narration explains.

### EFFECT / MOTION
No new code.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce code after summary.

### PERSISTENT STATE
Trace/code identity.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
ChalkText.

### MOTION PURPOSE
Explain architecture.
## BEAT 20 — `S11_TTIME`

### ANCHOR / SPOKEN PHRASE
> The transpose takes `O of n squared` time.

### WHAT APPEARS NOW
Code reduces; show O(n²) curve and above-diagonal work as cause.

### CENTER-STAGE HERO
Transpose time.

### CAUSE
Narration states.

### EFFECT / MOTION
Mathematical curve only.

### WHAT MUST NOT APPEAR YET
Reverse complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep graph support.

### PERSISTENT STATE
Time component known.

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
Explain Big-O.
## BEAT 21 — `S11_RTIME`

### ANCHOR / SPOKEN PHRASE
> Reversing all rows also takes `O of n squared` time overall.

### WHAT APPEARS NOW
Keep same O(n²) curve class; show n rows × row-length work concept without invented counts.

### CENTER-STAGE HERO
Reverse time.

### CAUSE
Narration states.

### EFFECT / MOTION
No new curve class.

### WHAT MUST NOT APPEAR YET
Total complexity.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Second time component.

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
Explain Big-O.
## BEAT 22 — `S11_TOTAL`

### ANCHOR / SPOKEN PHRASE
> So the total is still: `O of n squared`.

### WHAT APPEARS NOW
Merge sequential stages as `O(n²)+O(n²)=O(n²)`, explicitly not multiplication.

### CENTER-STAGE HERO
Overall time.

### CAUSE
Narration concludes.

### EFFECT / MOTION
Quadratic curve remains.

### WHAT MUST NOT APPEAR YET
Space.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare space.

### PERSISTENT STATE
Time locked.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.
ChalkText.

### MOTION PURPOSE
Complexity reasoning.
## BEAT 23 — `S11_CONST`

### ANCHOR / SPOKEN PHRASE
> we only use a constant amount of extra memory.

### WHAT APPEARS NOW
Time graph reduces; show bounded swap temporaries/loop variables only.

### CENTER-STAGE HERO
Constant auxiliary memory.

### CAUSE
Narration gives reason.

### EFFECT / MOTION
No new data structures.

### WHAT MUST NOT APPEAR YET
O(1) label.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep concept.

### PERSISTENT STATE
Space reason.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Explain.
## BEAT 24 — `S11_SPACE`

### ANCHOR / SPOKEN PHRASE
> `O of one`.

### WHAT APPEARS NOW
Show O(1) space flat line/notation, then settle.

### CENTER-STAGE HERO
O(1) space.

### CAUSE
Narration states.

### EFFECT / MOTION
Reusable graph/flat relation.

### WHAT MUST NOT APPEAR YET
Scene12 mistakes.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear complexity visual.

### PERSISTENT STATE
Method3 complexity locked.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

### MOTION PURPOSE
Explain Big-O.


---

# 9. CONTINUITY OUT

Scene12 receives all three methods and exact complexity truths; no new algorithm is introduced.

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
