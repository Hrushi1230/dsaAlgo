# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 07 — Method 2 Code
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Build exact four-way layer code live, connect every index expression to one active cycle, then explain O(n²) time and O(1) extra space.

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

Method2 trace verified; code begins empty.

---

# 2. EXACT VERIFIED NARRATION

```text
First...

store `n`.

Then process only half the number of layers.

For each layer...

`first` is the layer index.

And `last` is...

`n minus one minus layer`.

Now move across the top side of this layer.

We stop before `last`...

because the last position belongs to the same cycle as the first one.

For the current position `i`...

calculate:

`offset equals i minus first`.

Now we know the four connected coordinates.

Top is:

`first, i`.

Right is:

`i, last`.

Bottom is:

`last, last minus offset`.

And left is:

`last minus offset, first`.

Now save the top value.

Then move left into top.

Move bottom into left.

Move right into bottom.

And move the saved top into right.

That completes one four-way cycle.

The inner loop continues until the current layer is complete.

Then the outer loop moves one layer inward.

For an odd-sized matrix...

the center is never part of a four-way cycle...

so it stays untouched automatically.

This solution uses only one temporary value.

So the extra space is constant.

And every matrix position participates in only a constant amount of work.

So the total time is `O of n squared`...

with `O of one` extra space.

This is already an optimal in-place solution.

But there is another way to reach the same rotation...

with simpler transformations.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Exact rotateCycles code. layer range n//2; i range [first,last); offset; top/right/bottom/left coordinates; assignment order identical to Scene06.

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

Future lines hidden. One representative cycle supports code. Position labels only when spoken. Complexity after code logic. Method3 hidden until handoff.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S07_N` | `store `n`.` | Active n line. |
| `S07_HALF` | `process only half the number of layers.` | Layer loop. |
| `S07_FIRST` | ``first` is the layer index.` | first line. |
| `S07_LAST` | ``n minus one minus layer`.` | last line. |
| `S07_TOPSIDE` | `Now move across the top side of this layer.` | Top-side iteration. |
| `S07_STOP` | `We stop before `last`` | Exclusive-last loop. |
| `S07_REASON` | `because the last position belongs to the same cycle as the first one.` | Why exclusive last. |
| `S07_OFFSET` | ``offset equals i minus first`.` | offset line. |
| `S07_FOUR` | `Now we know the four connected coordinates.` | Four-coordinate structure. |
| `S07_TOP` | `Top is: `first, i`.` | Top coordinate. |
| `S07_RIGHT` | `Right is: `i, last`.` | Right coordinate. |
| `S07_BOTTOM` | `Bottom is: `last, last minus offset`.` | Bottom coordinate. |
| `S07_LEFT` | `left is: `last minus offset, first`.` | Four coordinates. |
| `S07_SAVE` | `Now save the top value.` | Save-top line. |
| `S07_L2T` | `move left into top.` | Assignment1. |
| `S07_B2L` | `Move bottom into left.` | Assignment2. |
| `S07_R2B` | `Move right into bottom.` | Assignment3. |
| `S07_T2R` | `move the saved top into right.` | Assignment4. |
| `S07_COMPLETE` | `That completes one four-way cycle.` | Completed iteration. |
| `S07_INNERLOOP` | `The inner loop continues until the current layer is complete.` | Inner loop repetition. |
| `S07_OUTERLOOP` | `Then the outer loop moves one layer inward.` | Layer increment. |
| `S07_ODD` | `the center is never part of a four-way cycle.` | Odd center exclusion. |
| `S07_TEMP` | `This solution uses only one temporary value.` | Constant storage cause. |
| `S07_SPACE` | `So the extra space is constant.` | O(1) space. |
| `S07_WORK` | `every matrix position participates in only a constant amount of work.` | Per-cell bounded work. |
| `S07_TIME` | `the total time is `O of n squared`` | O(n²) time. |
| `S07_OPTIMAL` | `This is already an optimal in-place solution.` | Method2 status. |
| `S07_ANOTHER` | `there is another way to reach the same rotation` | Same rotation mapping. |
| `S07_SIMPLE` | `with simpler transformations.` | Transition question. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S07_N`

### ANCHOR / SPOKEN PHRASE
> store `n`.

### WHAT APPEARS NOW
Type `n = len(matrix)`.

### CENTER-STAGE HERO
Active n line.

### CAUSE
Narration reaches n.

### EFFECT / MOTION
5×5 support may show n=5.

### WHAT MUST NOT APPEAR YET
Layer loop.

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

## BEAT 02 — `S07_HALF`

### ANCHOR / SPOKEN PHRASE
> process only half the number of layers.

### WHAT APPEARS NOW
Type `for layer in range(n // 2):`; matrix shows outer+inner layer count concept.

### CENTER-STAGE HERO
Layer loop.

### CAUSE
Narration reaches.

### EFFECT / MOTION
No first/last lines.

### WHAT MUST NOT APPEAR YET
Future code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep loop.

### PERSISTENT STATE
layer range known.

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
Teach bounds.

## BEAT 03 — `S07_FIRST`

### ANCHOR / SPOKEN PHRASE
> `first` is the layer index.

### WHAT APPEARS NOW
Type `first = layer`; mark first boundary.

### CENTER-STAGE HERO
first line.

### CAUSE
Narration defines.

### EFFECT / MOTION
Matrix maps variable to boundary.

### WHAT MUST NOT APPEAR YET
last.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
first known.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
ChalkText.

### MOTION PURPOSE
Meaning.

## BEAT 04 — `S07_LAST`

### ANCHOR / SPOKEN PHRASE
> `n minus one minus layer`.

### WHAT APPEARS NOW
Type `last = n - 1 - layer`; mark opposite boundary.

### CENTER-STAGE HERO
last line.

### CAUSE
Narration defines.

### EFFECT / MOTION
Matrix shows layer bounds.

### WHAT MUST NOT APPEAR YET
Inner loop.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
bounds known.

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

## BEAT 05 — `S07_TOPSIDE`

### ANCHOR / SPOKEN PHRASE
> Now move across the top side of this layer.

### WHAT APPEARS NOW
Begin inner loop scaffold `for i in ...`; highlight top side.

### CENTER-STAGE HERO
Top-side iteration.

### CAUSE
Narration introduces traversal.

### EFFECT / MOTION
Do not complete range yet.

### WHAT MUST NOT APPEAR YET
Exclusive bound.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Top-side context.

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
Teach iteration.

## BEAT 06 — `S07_STOP`

### ANCHOR / SPOKEN PHRASE
> We stop before `last`

### WHAT APPEARS NOW
Complete `for i in range(first, last):`.

### CENTER-STAGE HERO
Exclusive-last loop.

### CAUSE
Narration states bound.

### EFFECT / MOTION
Last endpoint excluded visually.

### WHAT MUST NOT APPEAR YET
offset.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
i range locked.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
ChalkText.

### MOTION PURPOSE
Prevent duplicate cycle.

## BEAT 07 — `S07_REASON`

### ANCHOR / SPOKEN PHRASE
> because the last position belongs to the same cycle as the first one.

### WHAT APPEARS NOW
Connect first/last positions inside one four-cycle.

### CENTER-STAGE HERO
Why exclusive last.

### CAUSE
Narration explains.

### EFFECT / MOTION
No data move.

### WHAT MUST NOT APPEAR YET
offset.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Loop rationale known.

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
Explain correctness.

## BEAT 08 — `S07_OFFSET`

### ANCHOR / SPOKEN PHRASE
> `offset equals i minus first`.

### WHAT APPEARS NOW
Type `offset = i - first`; show distance along top side.

### CENTER-STAGE HERO
offset line.

### CAUSE
Narration defines.

### EFFECT / MOTION
No coordinate formulas yet.

### WHAT MUST NOT APPEAR YET
top/right/bottom/left.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
offset known.

### KIT / EXISTING SYSTEM
Use the existing production course code component. Future lines stay hidden. Active line types only after narration reaches it; semantic matrix effect follows the line.

```text
PRODUCTION CODE COMPONENT API — UNRESOLVED — REPO SOURCE REQUIRED
```

Never create a generic black IDE.
RoughLine.

### MOTION PURPOSE
Meaning.

## BEAT 09 — `S07_FOUR`

### ANCHOR / SPOKEN PHRASE
> Now we know the four connected coordinates.

### WHAT APPEARS NOW
Matrix shows four selected positions ready for labels.

### CENTER-STAGE HERO
Four-coordinate structure.

### CAUSE
Narration transitions.

### EFFECT / MOTION
No labels before spoken.

### WHAT MUST NOT APPEAR YET
Assignments.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Cycle positions.

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
Set mapping.

## BEAT 10 — `S07_TOP`

### ANCHOR / SPOKEN PHRASE
> Top is: `first, i`.

### WHAT APPEARS NOW
Highlight top and annotate `(first,i)`.

### CENTER-STAGE HERO
Top coordinate.

### CAUSE
Narration states.

### EFFECT / MOTION
No invented tuple variable line.

### WHAT MUST NOT APPEAR YET
Right.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Top known.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Connect formula.

## BEAT 11 — `S07_RIGHT`

### ANCHOR / SPOKEN PHRASE
> Right is: `i, last`.

### WHAT APPEARS NOW
Highlight right.

### CENTER-STAGE HERO
Right coordinate.

### CAUSE
Narration states.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Bottom/left.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Right known.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Connect formula.

## BEAT 12 — `S07_BOTTOM`

### ANCHOR / SPOKEN PHRASE
> Bottom is: `last, last minus offset`.

### WHAT APPEARS NOW
Highlight bottom.

### CENTER-STAGE HERO
Bottom coordinate.

### CAUSE
Narration states.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Left.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Bottom known.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Connect formula.

## BEAT 13 — `S07_LEFT`

### ANCHOR / SPOKEN PHRASE
> left is: `last minus offset, first`.

### WHAT APPEARS NOW
Highlight left; full cycle map complete.

### CENTER-STAGE HERO
Four coordinates.

### CAUSE
Narration completes.

### EFFECT / MOTION
Faint cycle relation.

### WHAT MUST NOT APPEAR YET
Save.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Cycle geometry known.

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
Connect formula.

## BEAT 14 — `S07_SAVE`

### ANCHOR / SPOKEN PHRASE
> Now save the top value.

### WHAT APPEARS NOW
Type `top = matrix[first][i]`; project value into temp/top token.

### CENTER-STAGE HERO
Save-top line.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
No assignments.

### WHAT MUST NOT APPEAR YET
Future lines.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
top saved.

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

## BEAT 15 — `S07_L2T`

### ANCHOR / SPOKEN PHRASE
> move left into top.

### WHAT APPEARS NOW
Type first assignment and show representative left→top.

### CENTER-STAGE HERO
Assignment1.

### CAUSE
Narration reaches.

### EFFECT / MOTION
Value movement follows line completion.

### WHAT MUST NOT APPEAR YET
Assignment2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state1.

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

## BEAT 16 — `S07_B2L`

### ANCHOR / SPOKEN PHRASE
> Move bottom into left.

### WHAT APPEARS NOW
Type exact second assignment; show bottom→left.

### CENTER-STAGE HERO
Assignment2.

### CAUSE
Narration reaches.

### EFFECT / MOTION
Sequential.

### WHAT MUST NOT APPEAR YET
Assignment3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state2.

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

## BEAT 17 — `S07_R2B`

### ANCHOR / SPOKEN PHRASE
> Move right into bottom.

### WHAT APPEARS NOW
Type exact third assignment; show right→bottom.

### CENTER-STAGE HERO
Assignment3.

### CAUSE
Narration reaches.

### EFFECT / MOTION
Sequential.

### WHAT MUST NOT APPEAR YET
Restore.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state3.

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

## BEAT 18 — `S07_T2R`

### ANCHOR / SPOKEN PHRASE
> move the saved top into right.

### WHAT APPEARS NOW
Type `matrix[i][last] = top`; temp→right.

### CENTER-STAGE HERO
Assignment4.

### CAUSE
Narration closes cycle.

### EFFECT / MOTION
Final move.

### WHAT MUST NOT APPEAR YET
Next iteration.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
one cycle complete.

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

## BEAT 19 — `S07_COMPLETE`

### ANCHOR / SPOKEN PHRASE
> That completes one four-way cycle.

### WHAT APPEARS NOW
Code recedes slightly; matrix confirms four updated positions.

### CENTER-STAGE HERO
Completed iteration.

### CAUSE
Narration confirms.

### EFFECT / MOTION
No new mutation.

### WHAT MUST NOT APPEAR YET
Inner loop repetition.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Return code hero.

### PERSISTENT STATE
Loop semantics known.

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
Close iteration.

## BEAT 20 — `S07_INNERLOOP`

### ANCHOR / SPOKEN PHRASE
> The inner loop continues until the current layer is complete.

### WHAT APPEARS NOW
Show i progressing conceptually; no fake exact iterations.

### CENTER-STAGE HERO
Inner loop repetition.

### CAUSE
Narration explains.

### EFFECT / MOTION
No outer increment.

### WHAT MUST NOT APPEAR YET
Center.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep layer support.

### PERSISTENT STATE
Layer processed.

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
Explain loop.

## BEAT 21 — `S07_OUTERLOOP`

### ANCHOR / SPOKEN PHRASE
> Then the outer loop moves one layer inward.

### WHAT APPEARS NOW
Highlight outer loop and region focus outer→inner.

### CENTER-STAGE HERO
Layer increment.

### CAUSE
Narration explains.

### EFFECT / MOTION
No new line.

### WHAT MUST NOT APPEAR YET
Center special branch.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle inner focus.

### PERSISTENT STATE
Nesting understood.

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
Explain loop.

## BEAT 22 — `S07_ODD`

### ANCHOR / SPOKEN PHRASE
> the center is never part of a four-way cycle.

### WHAT APPEARS NOW
Focus center 13 outside active loops.

### CENTER-STAGE HERO
Odd center exclusion.

### CAUSE
Narration explains.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Special code branch.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear center cue.

### PERSISTENT STATE
Center untouched.

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
Edge proof.

## BEAT 23 — `S07_TEMP`

### ANCHOR / SPOKEN PHRASE
> This solution uses only one temporary value.

### WHAT APPEARS NOW
Code reduces; temp token becomes center support.

### CENTER-STAGE HERO
Constant storage cause.

### CAUSE
Narration explains.

### EFFECT / MOTION
No Big-O label yet.

### WHAT MUST NOT APPEAR YET
Method3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
bounded auxiliary state.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Why space constant.

## BEAT 24 — `S07_SPACE`

### ANCHOR / SPOKEN PHRASE
> So the extra space is constant.

### WHAT APPEARS NOW
Show O(1) EXTRA SPACE with flat mathematical relation.

### CENTER-STAGE HERO
O(1) space.

### CAUSE
Narration states.

### EFFECT / MOTION
Reusable graph/flat line.

### WHAT MUST NOT APPEAR YET
Time.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep briefly.

### PERSISTENT STATE
Space known.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

### MOTION PURPOSE
Explain complexity.

## BEAT 25 — `S07_WORK`

### ANCHOR / SPOKEN PHRASE
> every matrix position participates in only a constant amount of work.

### WHAT APPEARS NOW
Show matrix cells as bounded-work participants; no exact operation count.

### CENTER-STAGE HERO
Per-cell bounded work.

### CAUSE
Narration gives reason.

### EFFECT / MOTION
Matrix replaces space graph.

### WHAT MUST NOT APPEAR YET
O(n²) label.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare curve.

### PERSISTENT STATE
Time reason known.

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
Why time grows.

## BEAT 26 — `S07_TIME`

### ANCHOR / SPOKEN PHRASE
> the total time is `O of n squared`

### WHAT APPEARS NOW
Show O(n²) TIME with quadratic curve linked to n×n matrix positions.

### CENTER-STAGE HERO
O(n²) time.

### CAUSE
Narration states.

### EFFECT / MOTION
RoughCurve draws mathematically.

### WHAT MUST NOT APPEAR YET
Method3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce graph.

### PERSISTENT STATE
Time known.

### KIT / EXISTING SYSTEM
`MiniGraph.tsx` is sort-specific, so Q14 must use existing `RoughLine` / `RoughCurve` or extend/create a reusable kit-level complexity graph. No benchmark numbers. No unspoken variable such as `N`.

### MOTION PURPOSE
Explain complexity.

## BEAT 27 — `S07_O1_REPEAT`

### ANCHOR / SPOKEN PHRASE
> with `O of one` extra space.

### WHAT APPEARS NOW
Keep `O(n²) TIME` and explicitly pair it with `O(1) EXTRA SPACE`; one-temp support remains visible.

### CENTER-STAGE HERO
Final Method2 complexity pair.

### CAUSE
Narration restates space after time.

### EFFECT / MOTION
Confirmation only; no new derivation.

### WHAT MUST NOT APPEAR YET
Do not transition to Method3 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep pair through optimal verdict.

### PERSISTENT STATE
Method2 = O(n²) time / O(1) space.

### KIT / EXISTING SYSTEM
Reusable complexity visual + ChalkText.

### MOTION PURPOSE
Exact spoken coverage.

## BEAT 28 — `S07_OPTIMAL`

### ANCHOR / SPOKEN PHRASE
> This is already an optimal in-place solution.

### WHAT APPEARS NOW
Show compact O(n²) TIME · O(1) SPACE · IN PLACE summary.

### CENTER-STAGE HERO
Method2 status.

### CAUSE
Narration confirms.

### EFFECT / MOTION
No ranking.

### WHAT MUST NOT APPEAR YET
Method3 before next phrase.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare transition.

### PERSISTENT STATE
Method2 optimal.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Accurate conclusion.

## BEAT 29 — `S07_ANOTHER`

### ANCHOR / SPOKEN PHRASE
> there is another way to reach the same rotation

### WHAT APPEARS NOW
Code/matrix reduce; canonical mapping returns.

### CENTER-STAGE HERO
Same rotation mapping.

### CAUSE
Narration opens alternative.

### EFFECT / MOTION
No transpose.

### WHAT MUST NOT APPEAR YET
Simpler transforms.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep mapping.

### PERSISTENT STATE
Alternative starts.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Continuity.

## BEAT 30 — `S07_SIMPLE`

### ANCHOR / SPOKEN PHRASE
> with simpler transformations.

### WHAT APPEARS NOW
Show question `CAN WE SPLIT THE MAPPING?`; no answer.

### CENTER-STAGE HERO
Transition question.

### CAUSE
Narration hints next method.

### EFFECT / MOTION
No transform names.

### WHAT MUST NOT APPEAR YET
Transpose/reverse.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End clean.

### PERSISTENT STATE
Scene08 ready.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
No-spoiler handoff.

---

# 9. CONTINUITY OUT

Scene08: Method2 correct+optimal; O(n²) time/O(1) extra space; mapping remains canonical; question is simpler representation.

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
