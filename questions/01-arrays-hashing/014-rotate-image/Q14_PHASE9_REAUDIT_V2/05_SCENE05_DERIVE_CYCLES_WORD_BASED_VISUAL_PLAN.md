# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 05 — Why Extra Space Is Not Enough → Derive In-Place Movement
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Derive the overwrite problem from direct movement, then discover the closed four-position cycle and temporary-save requirement without revealing the safe assignment order early.

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

Method1 accepted as correct but memory-heavy; one original matrix remains.

---

# 2. EXACT VERIFIED NARRATION

```text
Method One is correct.

The problem is not the answer.

The problem is the extra memory.

We created another complete `n` by `n` matrix...

only so that values would not overwrite each other.

So let’s remove that safety net.

Suppose we try to move values directly inside the original matrix.

Look at the first corner.

One needs to move into the current position of five.

But if we immediately write one there...

the old value five disappears.

And we still need five...

because five must move to another position.

So direct movement creates an overwrite problem.

The values are not moving independently.

They are connected.

One moves to the position of five...

five moves to the position of twenty-five...

twenty-five moves to the position of twenty-one...

and twenty-one moves to the original position of one.

That means these four positions form one closed cycle.

So instead of moving one value and losing another...

we can rotate all four connected values together.

We only need to save one value temporarily.

That gives us an in-place solution.

Let’s trace it carefully.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Corner cycle 1→pos5→pos25→pos21→pos1. Writing 1 directly over 5 loses needed data.

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

Demonstrate overwrite concretely then reset. Warn must use color + second cue. Do not reveal left→top/bottom→left/right→bottom/temp→right order. Do not introduce layers yet.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S05_CORRECT` | `Method One is correct.` | Method1 correctness. |
| `S05_MEMORY` | `The problem is the extra memory.` | Extra matrix. |
| `S05_SAFETY` | `only so that values would not overwrite each other.` | Separate-storage safety. |
| `S05_REMOVE` | `So let’s remove that safety net.` | One matrix. |
| `S05_DIRECT` | `Suppose we try to move values directly inside the original matrix.` | 1 and 5 positions. |
| `S05_ONE` | `One needs to move into the current position of five.` | Direct destination. |
| `S05_OVERWRITE` | `if we immediately write one there` | Overwrite event. |
| `S05_DISAPPEARS` | `the old value five disappears.` | Lost 5. |
| `S05_NEED5` | `And we still need five` | Needed-but-lost 5. |
| `S05_OVERWRITE_PROBLEM` | `So direct movement creates an overwrite problem.` | Overwrite invariant. |
| `S05_CONNECTED` | `They are connected.` | Connected values. |
| `S05_1_5` | `One moves to the position of five` | First dependency. |
| `S05_5_25` | `five moves to the position of twenty-five` | Second dependency. |
| `S05_25_21` | `twenty-five moves to the position of twenty-one` | Third dependency. |
| `S05_21_1` | `twenty-one moves to the original position of one.` | Closed cycle. |
| `S05_CYCLE` | `these four positions form one closed cycle.` | Cycle concept. |
| `S05_TOGETHER` | `we can rotate all four connected values together.` | Four-position group. |
| `S05_SAVE` | `We only need to save one value temporarily.` | Temporary saved value concept. |
| `S05_INPLACE` | `That gives us an in-place solution.` | In-place concept. |
| `S05_TRACE` | `Let’s trace it carefully.` | Method2 trace handoff. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S05_CORRECT`

### ANCHOR / SPOKEN PHRASE
> Method One is correct.

### WHAT APPEARS NOW
Show restrained CORRECT beside Method1 summary; matrix original for reasoning.

### CENTER-STAGE HERO
Method1 correctness.

### CAUSE
Narration prevents false-failure framing.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear confirmation.

### PERSISTENT STATE
Method1 accepted.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Accurate transition.
## BEAT 02 — `S05_MEMORY`

### ANCHOR / SPOKEN PHRASE
> The problem is the extra memory.

### WHAT APPEARS NOW
Bring ghost/outline of second matrix as cost and mark it as what must be removed.

### CENTER-STAGE HERO
Extra matrix.

### CAUSE
Narration identifies weakness.

### EFFECT / MOTION
Warn/recede targets storage, not correctness.

### WHAT MUST NOT APPEAR YET
Cycle.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare one-matrix handoff.

### PERSISTENT STATE
Need in-place.

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
Derive constraint.
## BEAT 03 — `S05_SAFETY`

### ANCHOR / SPOKEN PHRASE
> only so that values would not overwrite each other.

### WHAT APPEARS NOW
Show source/result separation as overwrite protection.

### CENTER-STAGE HERO
Separate-storage safety.

### CAUSE
Narration explains purpose.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Direct attempt.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear duplicate.

### PERSISTENT STATE
One matrix remains.

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
Explain cause.
## BEAT 04 — `S05_REMOVE`

### ANCHOR / SPOKEN PHRASE
> So let’s remove that safety net.

### WHAT APPEARS NOW
Second matrix exits completely; original 5×5 sole hero.

### CENTER-STAGE HERO
One matrix.

### CAUSE
Narration authorizes in-place attempt.

### EFFECT / MOTION
Representation handoff.

### WHAT MUST NOT APPEAR YET
Cycle solution.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep original.

### PERSISTENT STATE
Master original.

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
## BEAT 05 — `S05_DIRECT`

### ANCHOR / SPOKEN PHRASE
> Suppose we try to move values directly inside the original matrix.

### WHAT APPEARS NOW
Focus source 1 and destination cell holding 5.

### CENTER-STAGE HERO
1 and 5 positions.

### CAUSE
Narration proposes naive movement.

### EFFECT / MOTION
Relation appears; no mutation yet.

### WHAT MUST NOT APPEAR YET
Other corners.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep endpoints.

### PERSISTENT STATE
Original state.

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
Set up failure.
## BEAT 06 — `S05_ONE`

### ANCHOR / SPOKEN PHRASE
> One needs to move into the current position of five.

### WHAT APPEARS NOW
Show 1→cell(5) destination relation.

### CENTER-STAGE HERO
Direct destination.

### CAUSE
Narration states required move.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Overwrite consequence.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep relation.

### PERSISTENT STATE
1 wants (0,4).

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
Cause.
## BEAT 07 — `S05_OVERWRITE`

### ANCHOR / SPOKEN PHRASE
> if we immediately write one there

### WHAT APPEARS NOW
Perform temporary WRONG write: 5→1 at destination; ghost 5 begins to vanish.

### CENTER-STAGE HERO
Overwrite event.

### CAUSE
Narration proposes unsafe write.

### EFFECT / MOTION
Warn + X/slash.

### WHAT MUST NOT APPEAR YET
Further cycle moves.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep wrong state.

### PERSISTENT STATE
5 overwritten.

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
Prove problem.
## BEAT 08 — `S05_DISAPPEARS`

### ANCHOR / SPOKEN PHRASE
> the old value five disappears.

### WHAT APPEARS NOW
Make lost 5 explicit with LOST/X cue.

### CENTER-STAGE HERO
Lost 5.

### CAUSE
Narration states consequence.

### EFFECT / MOTION
No extra motion.

### WHAT MUST NOT APPEAR YET
Temp solution.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep loss proof.

### PERSISTENT STATE
Wrong state.

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
Prove data loss.
## BEAT 09 — `S05_NEED5`

### ANCHOR / SPOKEN PHRASE
> And we still need five

### WHAT APPEARS NOW
Show ghost of original 5 pointing to required next destination (4,4).

### CENTER-STAGE HERO
Needed-but-lost 5.

### CAUSE
Narration explains fatal dependency.

### EFFECT / MOTION
No full cycle yet.

### WHAT MUST NOT APPEAR YET
Safe order.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reset wrong mutation after phrase.

### PERSISTENT STATE
Original matrix restored.

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
Cause→failure.
## BEAT 10 — `S05_OVERWRITE_PROBLEM`

### ANCHOR / SPOKEN PHRASE
> So direct movement creates an overwrite problem.

### WHAT APPEARS NOW
Restore original matrix exactly; center OVERWRITE concept briefly.

### CENTER-STAGE HERO
Overwrite invariant.

### CAUSE
Narration names problem.

### EFFECT / MOTION
Wrong demo exits.

### WHAT MUST NOT APPEAR YET
Save temp.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep original.

### PERSISTENT STATE
Master restored.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Lock failure reason.
## BEAT 11 — `S05_CONNECTED`

### ANCHOR / SPOKEN PHRASE
> They are connected.

### WHAT APPEARS NOW
Focus 1 and 5 and prepare chain expansion.

### CENTER-STAGE HERO
Connected values.

### CAUSE
Narration reframes movement.

### EFFECT / MOTION
No closed loop yet.

### WHAT MUST NOT APPEAR YET
25/21 before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep support.

### PERSISTENT STATE
Master original.

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
Derive cycle.
## BEAT 12 — `S05_1_5`

### ANCHOR / SPOKEN PHRASE
> One moves to the position of five

### WHAT APPEARS NOW
Draw 1→pos5.

### CENTER-STAGE HERO
First dependency.

### CAUSE
Narration states edge.

### EFFECT / MOTION
One relation only.

### WHAT MUST NOT APPEAR YET
Next edge.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep path.

### PERSISTENT STATE
Dependency chain.

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
Teach chain.
## BEAT 13 — `S05_5_25`

### ANCHOR / SPOKEN PHRASE
> five moves to the position of twenty-five

### WHAT APPEARS NOW
Add 5→pos25.

### CENTER-STAGE HERO
Second dependency.

### CAUSE
Narration extends chain.

### EFFECT / MOTION
Path grows.

### WHAT MUST NOT APPEAR YET
Later edges.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep chain.

### PERSISTENT STATE
Dependency chain.

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
Teach chain.
## BEAT 14 — `S05_25_21`

### ANCHOR / SPOKEN PHRASE
> twenty-five moves to the position of twenty-one

### WHAT APPEARS NOW
Add 25→pos21.

### CENTER-STAGE HERO
Third dependency.

### CAUSE
Narration extends.

### EFFECT / MOTION
Path grows.

### WHAT MUST NOT APPEAR YET
Closure.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep chain.

### PERSISTENT STATE
Dependency chain.

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
Teach chain.
## BEAT 15 — `S05_21_1`

### ANCHOR / SPOKEN PHRASE
> twenty-one moves to the original position of one.

### WHAT APPEARS NOW
Add 21→pos1 and close loop.

### CENTER-STAGE HERO
Closed cycle.

### CAUSE
Narration closes dependency.

### EFFECT / MOTION
Cycle relation complete.

### WHAT MUST NOT APPEAR YET
Safe assignment order.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep cycle.

### PERSISTENT STATE
Closed dependency.

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
Discover cycle.
## BEAT 16 — `S05_CYCLE`

### ANCHOR / SPOKEN PHRASE
> these four positions form one closed cycle.

### WHAT APPEARS NOW
Label relation CLOSED CYCLE; values remain original.

### CENTER-STAGE HERO
Cycle concept.

### CAUSE
Narration names it.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Layer terminology.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear label after hold.

### PERSISTENT STATE
Cycle known.

### KIT / EXISTING SYSTEM
ChalkText + RoughCurve.

### MOTION PURPOSE
Name structure.
## BEAT 17 — `S05_TOGETHER`

### ANCHOR / SPOKEN PHRASE
> we can rotate all four connected values together.

### WHAT APPEARS NOW
Show four positions as one active group with clockwise relation.

### CENTER-STAGE HERO
Four-position group.

### CAUSE
Narration derives action.

### EFFECT / MOTION
No actual safe order.

### WHAT MUST NOT APPEAR YET
Temp assignment sequence.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep group.

### PERSISTENT STATE
Cycle group.

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
Derive in-place mechanism.
## BEAT 18 — `S05_SAVE`

### ANCHOR / SPOKEN PHRASE
> We only need to save one value temporarily.

### WHAT APPEARS NOW
Introduce small temp token beside top value 1; do not execute assignments.

### CENTER-STAGE HERO
Temporary saved value concept.

### CAUSE
Narration states requirement.

### EFFECT / MOTION
Project 1 to temp support.

### WHAT MUST NOT APPEAR YET
Move order.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep temp idea.

### PERSISTENT STATE
One temporary value.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Derive overwrite safety.
## BEAT 19 — `S05_INPLACE`

### ANCHOR / SPOKEN PHRASE
> That gives us an in-place solution.

### WHAT APPEARS NOW
Second matrix stays absent; show ONE MATRIX + TEMP concept.

### CENTER-STAGE HERO
In-place concept.

### CAUSE
Narration states result.

### EFFECT / MOTION
No full complexity proof.

### WHAT MUST NOT APPEAR YET
Detailed trace.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End with cycle+temp.

### PERSISTENT STATE
Method2 idea ready.

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
Handoff.
## BEAT 20 — `S05_TRACE`

### ANCHOR / SPOKEN PHRASE
> Let’s trace it carefully.

### WHAT APPEARS NOW
Clear labels except one-matrix cycle setup.

### CENTER-STAGE HERO
Method2 trace handoff.

### CAUSE
Narration moves to execution.

### EFFECT / MOTION
No mutation yet.

### WHAT MUST NOT APPEAR YET
Layers until spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End on original matrix.

### PERSISTENT STATE
Master original.

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

Scene06: original master; closed cycle understood; one saved temp understood; no mutation executed; layers not yet introduced.

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
