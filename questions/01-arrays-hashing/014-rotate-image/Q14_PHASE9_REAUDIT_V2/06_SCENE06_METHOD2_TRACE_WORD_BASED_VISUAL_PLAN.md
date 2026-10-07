# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 06 — Method 2 Trace: Four-Way Cyclic Layer Swap
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Execute the direct four-way cyclic rotation exactly, outer layer then inner layer, using sequential save→move→move→move→restore while cells remain fixed.

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

Original master reset; one matrix; closed cycle and temp concept known; no mutation yet.

---

# 2. EXACT VERIFIED NARRATION

```text
Now we work with only one matrix.

Think of the matrix as layers.

For our five by five matrix...

the outside border is the first layer.

Inside that...

the three by three border is the second layer.

And the center cell stays fixed.

Let’s start with the outer layer.

Our first four connected positions contain:

top... one.

Right... five.

Bottom... twenty-five.

Left... twenty-one.

Clockwise movement means:

top goes to right...

right goes to bottom...

bottom goes to left...

and left goes to top.

But we cannot write top into right first...

because that would destroy the old right value.

So save the top value.

Save one in a temporary variable.

Now move twenty-one...

from left to top.

Move twenty-five...

from bottom to left.

Move five...

from right to bottom.

And finally...

move the saved value one...

into the right position.

The first four-way cycle is complete.

Now the four corner positions are correct.

The same rule continues across the outer layer.

The next cycle uses:

two... ten... twenty-four... sixteen.

Save two.

Sixteen moves to the top.

Twenty-four moves to the left.

Ten moves to the bottom.

And saved two moves to the right.

Next cycle:

three... fifteen... twenty-three... eleven.

Save three.

Eleven moves to the top.

Twenty-three moves to the left.

Fifteen moves to the bottom.

And three moves to the right.

One more outer cycle:

four... twenty... twenty-two... six.

Save four.

Six moves to the top.

Twenty-two moves to the left.

Twenty moves to the bottom.

And four moves to the right.

Now the complete outer layer is finished.

Its values are in their final rotated positions.

So we do not touch that layer again.

Move one layer inward.

The inner layer contains two more four-way cycles.

The first one uses:

seven... nine... nineteen... seventeen.

Save seven.

Seventeen moves to the top.

Nineteen moves to the left.

Nine moves to the bottom.

And seven moves to the right.

The last cycle uses:

eight... fourteen... eighteen... twelve.

Save eight.

Twelve moves to the top.

Eighteen moves to the left.

Fourteen moves to the bottom.

And eight moves to the right.

Now the inner layer is also complete.

The center value thirteen was never moved.

And the final matrix now looks like this.

So we rotated the matrix completely in place.

The important invariant is:

finish one four-position cycle safely...

finish the complete layer...

then move inward.

Now let’s write the same cycle logic in code.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Outer cycles [1,5,25,21], [2,10,24,16], [3,15,23,11], [4,20,22,6]. Inner [7,9,19,17], [8,14,18,12]. Center 13 fixed. Final matrix is verified clockwise result.

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

If reusable layer/perimeter overlay is absent, extend/create a kit-level region primitive.

---

# 6. SCENE-SPECIFIC RULES

Visual identity FOUR-POSITION ROTATION RING. One matrix only. Layer outline semantic support. Save/moves sequential. Values move; cells fixed. Outer locks before inner. Final state shown visually, not read aloud. No code/index formulas.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S06_ONE` | `Now we work with only one matrix.` | One matrix. |
| `S06_LAYERS` | `Think of the matrix as layers.` | Layer structure. |
| `S06_OUTER` | `the outside border is the first layer.` | Outer layer. |
| `S06_INNER` | `the three by three border is the second layer.` | Inner layer concept. |
| `S06_CENTER` | `the center cell stays fixed.` | 13 fixed. |
| `S06_START_OUTER` | `Let’s start with the outer layer.` | Outer layer. |
| `S06_FOUR` | `Our first four connected positions contain` | Four cycle positions. |
| `S06_VALUES` | `top... one.` | First cycle values. |
| `S06_DIRECTION` | `Clockwise movement means` | Cycle direction. |
| `S06_CANT` | `we cannot write top into right first` | Overwrite risk. |
| `S06_DESTROY` | `because that would destroy the old right value.` | 5 at risk. |
| `S06_SAVE` | `So save the top value.` | temp=1. |
| `S06_LEFT_TOP` | `from left to top.` | 21→top. |
| `S06_BOTTOM_LEFT` | `from bottom to left.` | 25→left. |
| `S06_RIGHT_BOTTOM` | `from right to bottom.` | 5→bottom. |
| `S06_TEMP_RIGHT` | `move the saved value one... into the right position.` | 1→right. |
| `S06_CYCLE_DONE` | `The first four-way cycle is complete.` | Completed first cycle. |
| `S06_NEXT` | `The next cycle uses` | Second outer cycle. |
| `S06_SAVE2` | `Save two.` | temp=2. |
| `S06_CYCLE2` | `And saved two moves to the right.` | Cycle2 complete. |
| `S06_CYCLE3` | `Next cycle:` | Third outer cycle. |
| `S06_CYCLE4` | `One more outer cycle:` | Fourth outer cycle. |
| `S06_OUT_DONE` | `Now the complete outer layer is finished.` | Completed outer layer. |
| `S06_NO_TOUCH` | `So we do not touch that layer again.` | Locked outer layer. |
| `S06_INWARD` | `Move one layer inward.` | Inner layer. |
| `S06_INNER1` | `The first one uses` | Inner cycle1. |
| `S06_INNER1_DONE` | `And seven moves to the right.` | Inner cycle1 complete. |
| `S06_INNER2` | `The last cycle uses` | Inner cycle2. |
| `S06_INNER2_DONE` | `And eight moves to the right.` | Inner cycle2 complete. |
| `S06_INNER_DONE` | `Now the inner layer is also complete.` | Completed inner layer. |
| `S06_CENTER_NEVER` | `The center value thirteen was never moved.` | Center fixed. |
| `S06_FINAL` | `And the final matrix now looks like this.` | Final rotated matrix. |
| `S06_INPLACE` | `So we rotated the matrix completely in place.` | In-place result. |
| `S06_INV` | `finish one four-position cycle safely` | Cycle invariant. |
| `S06_LAYER` | `finish the complete layer` | Layer invariant. |
| `S06_INWARD2` | `then move inward.` | Move inward invariant. |
| `S06_CODE` | `Now let’s write the same cycle logic in code.` | Method2 code handoff. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S06_ONE`

### ANCHOR / SPOKEN PHRASE
> Now we work with only one matrix.

### WHAT APPEARS NOW
Original 5×5 center stage; no second matrix.

### CENTER-STAGE HERO
One matrix.

### CAUSE
Narration states in-place context.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Layers.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep matrix.

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
Establish identity.

## BEAT 02 — `S06_LAYERS`

### ANCHOR / SPOKEN PHRASE
> Think of the matrix as layers.

### WHAT APPEARS NOW
Add subtle nested perimeter overlays.

### CENTER-STAGE HERO
Layer structure.

### CAUSE
Narration introduces decomposition.

### EFFECT / MOTION
Outer/inner outlines appear.

### WHAT MUST NOT APPEAR YET
Active layer.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep faint.

### PERSISTENT STATE
Layer geometry.

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

## BEAT 03 — `S06_OUTER`

### ANCHOR / SPOKEN PHRASE
> the outside border is the first layer.

### WHAT APPEARS NOW
Promote outer perimeter.

### CENTER-STAGE HERO
Outer layer.

### CAUSE
Narration identifies.

### EFFECT / MOTION
Inner recedes.

### WHAT MUST NOT APPEAR YET
Mutation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep outer active.

### PERSISTENT STATE
Outer selected.

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

## BEAT 04 — `S06_INNER`

### ANCHOR / SPOKEN PHRASE
> the three by three border is the second layer.

### WHAT APPEARS NOW
Briefly promote inner 3×3 border, then return outer focus.

### CENTER-STAGE HERO
Inner layer concept.

### CAUSE
Narration identifies second layer.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Center behavior.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Return outer hero.

### PERSISTENT STATE
Layer structure known.

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
Teach layers.

## BEAT 05 — `S06_CENTER`

### ANCHOR / SPOKEN PHRASE
> the center cell stays fixed.

### WHAT APPEARS NOW
Focus center 13 with FIXED cue.

### CENTER-STAGE HERO
13 fixed.

### CAUSE
Narration states center behavior.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
Cycle.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
Center excluded.

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

## BEAT 06 — `S06_START_OUTER`

### ANCHOR / SPOKEN PHRASE
> Let’s start with the outer layer.

### WHAT APPEARS NOW
Outer perimeter sole active region.

### CENTER-STAGE HERO
Outer layer.

### CAUSE
Narration begins execution.

### EFFECT / MOTION
Inner/center recede.

### WHAT MUST NOT APPEAR YET
Cycle positions.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep outer active.

### PERSISTENT STATE
Outer active.

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

## BEAT 07 — `S06_FOUR`

### ANCHOR / SPOKEN PHRASE
> Our first four connected positions contain

### WHAT APPEARS NOW
Highlight four corners.

### CENTER-STAGE HERO
Four cycle positions.

### CAUSE
Narration introduces first cycle.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
Temp.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep positions.

### PERSISTENT STATE
Corners active.

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
Set cycle.

## BEAT 08 — `S06_POS_TOP`

### ANCHOR / SPOKEN PHRASE
> top... one.

### WHAT APPEARS NOW
Focus `(0,0)=1`; other cycle cells stay quiet.

### CENTER-STAGE HERO
Top value 1.

### CAUSE
Narration names first cycle position.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
Do not focus right early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep cycle context.

### PERSISTENT STATE
Original matrix unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Identify member.

## BEAT 09 — `S06_POS_RIGHT`

### ANCHOR / SPOKEN PHRASE
> Right... five.

### WHAT APPEARS NOW
Focus `(0,4)=5`.

### CENTER-STAGE HERO
Right value 5.

### CAUSE
Narration names second position.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
Do not focus bottom early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep cycle context.

### PERSISTENT STATE
Original unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Identify member.

## BEAT 10 — `S06_POS_BOTTOM`

### ANCHOR / SPOKEN PHRASE
> Bottom... twenty-five.

### WHAT APPEARS NOW
Focus `(4,4)=25`.

### CENTER-STAGE HERO
Bottom value 25.

### CAUSE
Narration names third position.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
Do not focus left early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep cycle context.

### PERSISTENT STATE
Original unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Identify member.

## BEAT 11 — `S06_POS_LEFT`

### ANCHOR / SPOKEN PHRASE
> Left... twenty-one.

### WHAT APPEARS NOW
Focus `(4,0)=21`; all four members are now known.

### CENTER-STAGE HERO
Left value 21.

### CAUSE
Narration names fourth position.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
No direction arrows before next phrase.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep four selected.

### PERSISTENT STATE
Original unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Complete membership.

## BEAT 12 — `S06_DIRECTION`

### ANCHOR / SPOKEN PHRASE
> Clockwise movement means

### WHAT APPEARS NOW
Show directional relation around four positions.

### CENTER-STAGE HERO
Cycle direction.

### CAUSE
Narration introduces movement semantics.

### EFFECT / MOTION
No values move.

### WHAT MUST NOT APPEAR YET
Safe order.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep path.

### PERSISTENT STATE
Clockwise cycle.

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
Teach direction.

## BEAT 13 — `S06_DIR_TR`

### ANCHOR / SPOKEN PHRASE
> top goes to right

### WHAT APPEARS NOW
Emphasize only top→right relation.

### CENTER-STAGE HERO
Top→Right.

### CAUSE
Narration states first destination edge.

### EFFECT / MOTION
Draw one semantic relation.

### WHAT MUST NOT APPEAR YET
No mutation.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep cycle support.

### PERSISTENT STATE
No values moved.

### KIT / EXISTING SYSTEM
RoughLine/RoughCurve.

### MOTION PURPOSE
Teach direction.

## BEAT 14 — `S06_DIR_RB`

### ANCHOR / SPOKEN PHRASE
> right goes to bottom

### WHAT APPEARS NOW
Emphasize right→bottom.

### CENTER-STAGE HERO
Right→Bottom.

### CAUSE
Narration states second edge.

### EFFECT / MOTION
Previous edge recedes.

### WHAT MUST NOT APPEAR YET
No mutation.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep support.

### PERSISTENT STATE
No values moved.

### KIT / EXISTING SYSTEM
RoughLine/RoughCurve.

### MOTION PURPOSE
Teach direction.

## BEAT 15 — `S06_DIR_BL`

### ANCHOR / SPOKEN PHRASE
> bottom goes to left

### WHAT APPEARS NOW
Emphasize bottom→left.

### CENTER-STAGE HERO
Bottom→Left.

### CAUSE
Narration states third edge.

### EFFECT / MOTION
Previous edge recedes.

### WHAT MUST NOT APPEAR YET
No mutation.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep support.

### PERSISTENT STATE
No values moved.

### KIT / EXISTING SYSTEM
RoughLine/RoughCurve.

### MOTION PURPOSE
Teach direction.

## BEAT 16 — `S06_DIR_LT`

### ANCHOR / SPOKEN PHRASE
> and left goes to top.

### WHAT APPEARS NOW
Emphasize left→top; full cycle direction is now understood.

### CENTER-STAGE HERO
Left→Top.

### CAUSE
Narration closes cycle direction.

### EFFECT / MOTION
All four edges may settle faintly.

### WHAT MUST NOT APPEAR YET
No values moved.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep cycle context.

### PERSISTENT STATE
No mutation.

### KIT / EXISTING SYSTEM
RoughCurve/RoughLine.

### MOTION PURPOSE
Complete direction.

## BEAT 17 — `S06_CANT`

### ANCHOR / SPOKEN PHRASE
> we cannot write top into right first

### WHAT APPEARS NOW
Emphasize unsafe 1→pos5 with warn path.

### CENTER-STAGE HERO
Overwrite risk.

### CAUSE
Narration warns order.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Temp.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep risk.

### PERSISTENT STATE
Potential overwrite.

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
Teach safety.

## BEAT 18 — `S06_DESTROY`

### ANCHOR / SPOKEN PHRASE
> because that would destroy the old right value.

### WHAT APPEARS NOW
Mark 5 as would-be lost with X/slash; matrix remains original.

### CENTER-STAGE HERO
5 at risk.

### CAUSE
Narration explains.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Save action.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear wrong cue.

### PERSISTENT STATE
Original intact.

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

## BEAT 19 — `S06_SAVE`

### ANCHOR / SPOKEN PHRASE
> So save the top value.

### WHAT APPEARS NOW
Project 1 into temp token.

### CENTER-STAGE HERO
temp=1.

### CAUSE
Narration authorizes save.

### EFFECT / MOTION
Value preserved outside cycle.

### WHAT MUST NOT APPEAR YET
Assignments.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
temp holds 1.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Preserve data.

## BEAT 20 — `S06_SAVE_ONE`

### ANCHOR / SPOKEN PHRASE
> Save one in a temporary variable.

### WHAT APPEARS NOW
Project value 1 into a temp support token.

### CENTER-STAGE HERO
temp = 1.

### CAUSE
Narration names exact saved value.

### EFFECT / MOTION
Preserve 1 before overwrites.

### WHAT MUST NOT APPEAR YET
No corner move yet.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
temp holds 1.

### KIT / EXISTING SYSTEM
ChalkText + value projection.

### MOTION PURPOSE
Preserve data.

## BEAT 21 — `S06_MOVE21`

### ANCHOR / SPOKEN PHRASE
> Now move twenty-one

### WHAT APPEARS NOW
Focus source 21 only.

### CENTER-STAGE HERO
Source 21.

### CAUSE
Narration names source.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not move before destination words.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep source.

### PERSISTENT STATE
temp=1 persists.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Cause setup.

## BEAT 22 — `S06_LEFT_TOP`

### ANCHOR / SPOKEN PHRASE
> from left to top.

### WHAT APPEARS NOW
Move 21 (4,0)→(0,0).

### CENTER-STAGE HERO
21→top.

### CAUSE
Narration authorizes first assignment.

### EFFECT / MOTION
BezierFlight; cells fixed.

### WHAT MUST NOT APPEAR YET
25 move.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
State after move1.

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
Execute safely.

## BEAT 23 — `S06_MOVE25`

### ANCHOR / SPOKEN PHRASE
> Move twenty-five

### WHAT APPEARS NOW
Focus source 25.

### CENTER-STAGE HERO
Source 25.

### CAUSE
Narration names source.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not move early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep source.

### PERSISTENT STATE
Prior state persists.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Cause setup.

## BEAT 24 — `S06_BOTTOM_LEFT`

### ANCHOR / SPOKEN PHRASE
> from bottom to left.

### WHAT APPEARS NOW
Move 25 (4,4)→(4,0).

### CENTER-STAGE HERO
25→left.

### CAUSE
Narration authorizes second assignment.

### EFFECT / MOTION
Value flight.

### WHAT MUST NOT APPEAR YET
5 move.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
State after move2.

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

## BEAT 25 — `S06_MOVE5`

### ANCHOR / SPOKEN PHRASE
> Move five

### WHAT APPEARS NOW
Focus source 5.

### CENTER-STAGE HERO
Source 5.

### CAUSE
Narration names source.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not move early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep source.

### PERSISTENT STATE
Prior state persists.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Cause setup.

## BEAT 26 — `S06_RIGHT_BOTTOM`

### ANCHOR / SPOKEN PHRASE
> from right to bottom.

### WHAT APPEARS NOW
Move 5 (0,4)→(4,4).

### CENTER-STAGE HERO
5→bottom.

### CAUSE
Narration authorizes third assignment.

### EFFECT / MOTION
Value flight.

### WHAT MUST NOT APPEAR YET
Restore temp.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
State after move3.

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

## BEAT 27 — `S06_FINALLY`

### ANCHOR / SPOKEN PHRASE
> And finally

### WHAT APPEARS NOW
Return focus to saved temp value 1.

### CENTER-STAGE HERO
Saved temp 1.

### CAUSE
Narration announces restore.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not restore before next phrase.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
Cycle state after three writes.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Cause setup.

## BEAT 28 — `S06_TEMP_RIGHT`

### ANCHOR / SPOKEN PHRASE
> move the saved value one... into the right position.

### WHAT APPEARS NOW
Move temp 1→(0,4); temp clears.

### CENTER-STAGE HERO
1→right.

### CAUSE
Narration restores.

### EFFECT / MOTION
Final flight closes cycle.

### WHAT MUST NOT APPEAR YET
Next cycle.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear path.

### PERSISTENT STATE
First cycle complete.

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
Complete cycle.

## BEAT 29 — `S06_CYCLE_DONE`

### ANCHOR / SPOKEN PHRASE
> The first four-way cycle is complete.

### WHAT APPEARS NOW
Show four corners confirmed briefly.

### CENTER-STAGE HERO
Completed first cycle.

### CAUSE
Narration confirms.

### EFFECT / MOTION
No new mutation.

### WHAT MUST NOT APPEAR YET
Cycle2.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce confirmation.

### PERSISTENT STATE
First cycle state persists.

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
Close unit.

## BEAT 30 — `S06_CORNERS_CORRECT`

### ANCHOR / SPOKEN PHRASE
> Now the four corner positions are correct.

### WHAT APPEARS NOW
Confirm only the four corners.

### CENTER-STAGE HERO
Correct corners.

### CAUSE
Narration confirms local result.

### EFFECT / MOTION
Good-state confirmation only.

### WHAT MUST NOT APPEAR YET
Do not mark full outer layer complete.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Reduce confirmation.

### PERSISTENT STATE
First cycle persists.

### KIT / EXISTING SYSTEM
Matrix/Grid + theme.good.

### MOTION PURPOSE
Confirm.

## BEAT 31 — `S06_SAME_RULE`

### ANCHOR / SPOKEN PHRASE
> The same rule continues across the outer layer.

### WHAT APPEARS NOW
Return outer perimeter as active support; no mutation.

### CENTER-STAGE HERO
Outer-layer repetition.

### CAUSE
Narration generalizes.

### EFFECT / MOTION
No motion beyond focus change.

### WHAT MUST NOT APPEAR YET
Do not start cycle2 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep outer active.

### PERSISTENT STATE
First cycle persists.

### KIT / EXISTING SYSTEM
Matrix/Grid region.

### MOTION PURPOSE
Continuity.

## BEAT 32 — `S06_NEXT`

### ANCHOR / SPOKEN PHRASE
> The next cycle uses

### WHAT APPEARS NOW
Select [2,10,24,16].

### CENTER-STAGE HERO
Second outer cycle.

### CAUSE
Narration moves on.

### EFFECT / MOTION
Previous corners recede but persist.

### WHAT MUST NOT APPEAR YET
Assignments before save.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep four active.

### PERSISTENT STATE
Current matrix state.

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

## BEAT 33 — `S06_C2_VALUES`

### ANCHOR / SPOKEN PHRASE
> two... ten... twenty-four... sixteen.

### WHAT APPEARS NOW
Focus cycle2 values one-by-one on spoken words; no writes.

### CENTER-STAGE HERO
Cycle2 members.

### CAUSE
Narration enumerates.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not save before next phrase.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep four marked.

### PERSISTENT STATE
Current matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Membership.

## BEAT 34 — `S06_SAVE2`

### ANCHOR / SPOKEN PHRASE
> Save two.

### WHAT APPEARS NOW
Project 2→temp.

### CENTER-STAGE HERO
temp=2.

### CAUSE
Narration authorizes save.

### EFFECT / MOTION
No other move.

### WHAT MUST NOT APPEAR YET
Cycle3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
Cycle2 temp.

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

## BEAT 35 — `S06_C2_16`

### ANCHOR / SPOKEN PHRASE
> Sixteen moves to the top.

### WHAT APPEARS NOW
Move 16 left→top.

### CENTER-STAGE HERO
16→top.

### CAUSE
Narration authorizes assignment1.

### EFFECT / MOTION
Value moves; cells fixed.

### WHAT MUST NOT APPEAR YET
No 24 move early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle2 state1.

### KIT / EXISTING SYSTEM
BezierFlight + Matrix/Grid.

### MOTION PURPOSE
Execute.

## BEAT 36 — `S06_C2_24`

### ANCHOR / SPOKEN PHRASE
> Twenty-four moves to the left.

### WHAT APPEARS NOW
Move 24 bottom→left.

### CENTER-STAGE HERO
24→left.

### CAUSE
Narration authorizes assignment2.

### EFFECT / MOTION
Value moves.

### WHAT MUST NOT APPEAR YET
No 10 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle2 state2.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 37 — `S06_C2_10`

### ANCHOR / SPOKEN PHRASE
> Ten moves to the bottom.

### WHAT APPEARS NOW
Move 10 right→bottom.

### CENTER-STAGE HERO
10→bottom.

### CAUSE
Narration authorizes assignment3.

### EFFECT / MOTION
Value moves.

### WHAT MUST NOT APPEAR YET
Do not restore 2 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle2 state3.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 38 — `S06_CYCLE2`

### ANCHOR / SPOKEN PHRASE
> And saved two moves to the right.

### WHAT APPEARS NOW
Across intervening spoken subphrases execute 16→top, 24→left, 10→bottom, then restore 2→right.

### CENTER-STAGE HERO
Cycle2 complete.

### CAUSE
Narration completes second cycle.

### EFFECT / MOTION
Sequential moves only.

### WHAT MUST NOT APPEAR YET
Cycle3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear temp.

### PERSISTENT STATE
Outer cycle2 complete.

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

## BEAT 39 — `S06_CYCLE3`

### ANCHOR / SPOKEN PHRASE
> Next cycle:

### WHAT APPEARS NOW
Select [3,15,23,11] and execute save/moves only on their spoken subphrases.

### CENTER-STAGE HERO
Third outer cycle.

### CAUSE
Narration introduces cycle3.

### EFFECT / MOTION
One semantic move per spoken phrase.

### WHAT MUST NOT APPEAR YET
Cycle4.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Outer cycle3 complete.

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

## BEAT 40 — `S06_C3_VALUES`

### ANCHOR / SPOKEN PHRASE
> three... fifteen... twenty-three... eleven.

### WHAT APPEARS NOW
Focus cycle3 values sequentially.

### CENTER-STAGE HERO
Cycle3 members.

### CAUSE
Narration enumerates.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not save early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep marked.

### PERSISTENT STATE
Current matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Membership.

## BEAT 41 — `S06_C3_SAVE`

### ANCHOR / SPOKEN PHRASE
> Save three.

### WHAT APPEARS NOW
Project 3→temp.

### CENTER-STAGE HERO
temp=3.

### CAUSE
Narration authorizes save.

### EFFECT / MOTION
No assignment yet.

### WHAT MUST NOT APPEAR YET
No 11 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
Cycle3 ready.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Preserve.

## BEAT 42 — `S06_C3_11`

### ANCHOR / SPOKEN PHRASE
> Eleven moves to the top.

### WHAT APPEARS NOW
Move 11 left→top.

### CENTER-STAGE HERO
11→top.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Value move.

### WHAT MUST NOT APPEAR YET
No 23 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle3 state1.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 43 — `S06_C3_23`

### ANCHOR / SPOKEN PHRASE
> Twenty-three moves to the left.

### WHAT APPEARS NOW
Move 23 bottom→left.

### CENTER-STAGE HERO
23→left.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Value move.

### WHAT MUST NOT APPEAR YET
No 15 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle3 state2.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 44 — `S06_C3_15`

### ANCHOR / SPOKEN PHRASE
> Fifteen moves to the bottom.

### WHAT APPEARS NOW
Move 15 right→bottom.

### CENTER-STAGE HERO
15→bottom.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Value move.

### WHAT MUST NOT APPEAR YET
Do not restore 3 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle3 state3.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 45 — `S06_C3_3`

### ANCHOR / SPOKEN PHRASE
> And three moves to the right.

### WHAT APPEARS NOW
Move temp3→right; clear temp.

### CENTER-STAGE HERO
3→right.

### CAUSE
Narration closes cycle3.

### EFFECT / MOTION
Final movement.

### WHAT MUST NOT APPEAR YET
No cycle4 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle3 complete.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 46 — `S06_CYCLE4`

### ANCHOR / SPOKEN PHRASE
> One more outer cycle:

### WHAT APPEARS NOW
Select [4,20,22,6] and execute save/moves in spoken order.

### CENTER-STAGE HERO
Fourth outer cycle.

### CAUSE
Narration introduces final outer cycle.

### EFFECT / MOTION
Sequential moves.

### WHAT MUST NOT APPEAR YET
Inner layer.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle full outer layer.

### PERSISTENT STATE
Outer layer complete.

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

## BEAT 47 — `S06_C4_VALUES`

### ANCHOR / SPOKEN PHRASE
> four... twenty... twenty-two... six.

### WHAT APPEARS NOW
Focus cycle4 values sequentially.

### CENTER-STAGE HERO
Cycle4 members.

### CAUSE
Narration enumerates.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not save early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep marked.

### PERSISTENT STATE
Current matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Membership.

## BEAT 48 — `S06_C4_SAVE`

### ANCHOR / SPOKEN PHRASE
> Save four.

### WHAT APPEARS NOW
Project 4→temp.

### CENTER-STAGE HERO
temp=4.

### CAUSE
Narration authorizes save.

### EFFECT / MOTION
No move yet.

### WHAT MUST NOT APPEAR YET
No 6 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
Cycle4 ready.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Preserve.

## BEAT 49 — `S06_C4_6`

### ANCHOR / SPOKEN PHRASE
> Six moves to the top.

### WHAT APPEARS NOW
Move 6 left→top.

### CENTER-STAGE HERO
6→top.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Value move.

### WHAT MUST NOT APPEAR YET
No 22 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle4 state1.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 50 — `S06_C4_22`

### ANCHOR / SPOKEN PHRASE
> Twenty-two moves to the left.

### WHAT APPEARS NOW
Move 22 bottom→left.

### CENTER-STAGE HERO
22→left.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Value move.

### WHAT MUST NOT APPEAR YET
No 20 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle4 state2.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 51 — `S06_C4_20`

### ANCHOR / SPOKEN PHRASE
> Twenty moves to the bottom.

### WHAT APPEARS NOW
Move 20 right→bottom.

### CENTER-STAGE HERO
20→bottom.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Value move.

### WHAT MUST NOT APPEAR YET
Do not restore 4 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Cycle4 state3.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 52 — `S06_C4_4`

### ANCHOR / SPOKEN PHRASE
> And four moves to the right.

### WHAT APPEARS NOW
Move temp4→right; clear temp.

### CENTER-STAGE HERO
4→right.

### CAUSE
Narration closes cycle4.

### EFFECT / MOTION
Final movement.

### WHAT MUST NOT APPEAR YET
No inner layer early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle outer values.

### PERSISTENT STATE
Outer layer moves complete.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 53 — `S06_OUT_DONE`

### ANCHOR / SPOKEN PHRASE
> Now the complete outer layer is finished.

### WHAT APPEARS NOW
Promote entire perimeter as confirmed/good.

### CENTER-STAGE HERO
Completed outer layer.

### CAUSE
Narration confirms.

### EFFECT / MOTION
No value change.

### WHAT MUST NOT APPEAR YET
Inner mutation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Lock/recede outer.

### PERSISTENT STATE
Outer final values persist.

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
Layer completion.

## BEAT 54 — `S06_OUT_FINAL`

### ANCHOR / SPOKEN PHRASE
> Its values are in their final rotated positions.

### WHAT APPEARS NOW
Confirm the full outer perimeter now and only now.

### CENTER-STAGE HERO
Outer final layer.

### CAUSE
Narration states finality.

### EFFECT / MOTION
Confirmed region settles.

### WHAT MUST NOT APPEAR YET
Do not touch inner values.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Outer recedes to history.

### PERSISTENT STATE
Outer final.

### KIT / EXISTING SYSTEM
Matrix/Grid + theme.good.

### MOTION PURPOSE
Confirm.

## BEAT 55 — `S06_NO_TOUCH`

### ANCHOR / SPOKEN PHRASE
> So we do not touch that layer again.

### WHAT APPEARS NOW
Dim/lock outer perimeter history; focus moves inward.

### CENTER-STAGE HERO
Locked outer layer.

### CAUSE
Narration states invariant.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Inner cycle values.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Outer stays dim persistent context.

### PERSISTENT STATE
Outer locked.

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

## BEAT 56 — `S06_INWARD`

### ANCHOR / SPOKEN PHRASE
> Move one layer inward.

### WHAT APPEARS NOW
Inner 3×3 perimeter becomes pivot.

### CENTER-STAGE HERO
Inner layer.

### CAUSE
Narration authorizes transfer.

### EFFECT / MOTION
Outer remains dim.

### WHAT MUST NOT APPEAR YET
Inner cycle before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep inner active.

### PERSISTENT STATE
Inner selected.

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

## BEAT 57 — `S06_INNER_COUNT`

### ANCHOR / SPOKEN PHRASE
> The inner layer contains two more four-way cycles.

### WHAT APPEARS NOW
Show inner perimeter with two cycle-start positions; no movement.

### CENTER-STAGE HERO
Two inner cycles.

### CAUSE
Narration states remaining structure.

### EFFECT / MOTION
No writes.

### WHAT MUST NOT APPEAR YET
Do not start inner cycle1 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep inner active.

### PERSISTENT STATE
Outer locked.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Prepare.

## BEAT 58 — `S06_INNER1`

### ANCHOR / SPOKEN PHRASE
> The first one uses

### WHAT APPEARS NOW
Highlight [7,9,19,17].

### CENTER-STAGE HERO
Inner cycle1.

### CAUSE
Narration introduces.

### EFFECT / MOTION
No move.

### WHAT MUST NOT APPEAR YET
Second cycle.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep selected.

### PERSISTENT STATE
Inner cycle1 active.

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
Set cycle.

## BEAT 59 — `S06_I1_VALUES`

### ANCHOR / SPOKEN PHRASE
> seven... nine... nineteen... seventeen.

### WHAT APPEARS NOW
Focus inner-cycle1 values sequentially.

### CENTER-STAGE HERO
Inner cycle1 members.

### CAUSE
Narration enumerates.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not save early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep marked.

### PERSISTENT STATE
Current matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Membership.

## BEAT 60 — `S06_I1_SAVE`

### ANCHOR / SPOKEN PHRASE
> Save seven.

### WHAT APPEARS NOW
Project 7→temp.

### CENTER-STAGE HERO
temp=7.

### CAUSE
Narration authorizes save.

### EFFECT / MOTION
No move yet.

### WHAT MUST NOT APPEAR YET
No 17 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
Cycle ready.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Preserve.

## BEAT 61 — `S06_I1_17`

### ANCHOR / SPOKEN PHRASE
> Seventeen moves to the top.

### WHAT APPEARS NOW
Move 17 left→top.

### CENTER-STAGE HERO
17→top.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Move.

### WHAT MUST NOT APPEAR YET
No 19 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state1.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 62 — `S06_I1_19`

### ANCHOR / SPOKEN PHRASE
> Nineteen moves to the left.

### WHAT APPEARS NOW
Move 19 bottom→left.

### CENTER-STAGE HERO
19→left.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Move.

### WHAT MUST NOT APPEAR YET
No 9 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state2.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 63 — `S06_I1_9`

### ANCHOR / SPOKEN PHRASE
> Nine moves to the bottom.

### WHAT APPEARS NOW
Move 9 right→bottom.

### CENTER-STAGE HERO
9→bottom.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Move.

### WHAT MUST NOT APPEAR YET
Do not restore 7 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state3.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 64 — `S06_INNER1_DONE`

### ANCHOR / SPOKEN PHRASE
> And seven moves to the right.

### WHAT APPEARS NOW
Execute save7, 17→top, 19→left, 9→bottom, then 7→right on their spoken subphrases.

### CENTER-STAGE HERO
Inner cycle1 complete.

### CAUSE
Narration closes cycle.

### EFFECT / MOTION
Sequential assignments.

### WHAT MUST NOT APPEAR YET
Last cycle.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
Inner cycle1 final.

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

## BEAT 65 — `S06_INNER2`

### ANCHOR / SPOKEN PHRASE
> The last cycle uses

### WHAT APPEARS NOW
Highlight [8,14,18,12].

### CENTER-STAGE HERO
Inner cycle2.

### CAUSE
Narration selects.

### EFFECT / MOTION
No movement until save.

### WHAT MUST NOT APPEAR YET
Final result.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep active.

### PERSISTENT STATE
Current matrix.

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
Set cycle.

## BEAT 66 — `S06_I2_VALUES`

### ANCHOR / SPOKEN PHRASE
> eight... fourteen... eighteen... twelve.

### WHAT APPEARS NOW
Focus inner-cycle2 values sequentially.

### CENTER-STAGE HERO
Inner cycle2 members.

### CAUSE
Narration enumerates.

### EFFECT / MOTION
Attention only.

### WHAT MUST NOT APPEAR YET
Do not save early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep marked.

### PERSISTENT STATE
Current matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Membership.

## BEAT 67 — `S06_I2_SAVE`

### ANCHOR / SPOKEN PHRASE
> Save eight.

### WHAT APPEARS NOW
Project 8→temp.

### CENTER-STAGE HERO
temp=8.

### CAUSE
Narration authorizes save.

### EFFECT / MOTION
No move yet.

### WHAT MUST NOT APPEAR YET
No 12 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Keep temp.

### PERSISTENT STATE
Cycle ready.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Preserve.

## BEAT 68 — `S06_I2_12`

### ANCHOR / SPOKEN PHRASE
> Twelve moves to the top.

### WHAT APPEARS NOW
Move 12 left→top.

### CENTER-STAGE HERO
12→top.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Move.

### WHAT MUST NOT APPEAR YET
No 18 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state1.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 69 — `S06_I2_18`

### ANCHOR / SPOKEN PHRASE
> Eighteen moves to the left.

### WHAT APPEARS NOW
Move 18 bottom→left.

### CENTER-STAGE HERO
18→left.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Move.

### WHAT MUST NOT APPEAR YET
No 14 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state2.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 70 — `S06_I2_14`

### ANCHOR / SPOKEN PHRASE
> Fourteen moves to the bottom.

### WHAT APPEARS NOW
Move 14 right→bottom.

### CENTER-STAGE HERO
14→bottom.

### CAUSE
Narration authorizes.

### EFFECT / MOTION
Move.

### WHAT MUST NOT APPEAR YET
Do not restore 8 early.

### COMPREHENSION HOLD
Only if the final audio has a real gap after this anchor.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
state3.

### KIT / EXISTING SYSTEM
BezierFlight.

### MOTION PURPOSE
Execute.

## BEAT 71 — `S06_INNER2_DONE`

### ANCHOR / SPOKEN PHRASE
> And eight moves to the right.

### WHAT APPEARS NOW
Execute final save/move sequence in spoken order.

### CENTER-STAGE HERO
Inner cycle2 complete.

### CAUSE
Narration closes.

### EFFECT / MOTION
Sequential moves.

### WHAT MUST NOT APPEAR YET
Result confirmation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Settle full matrix.

### PERSISTENT STATE
All cycles complete.

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

## BEAT 72 — `S06_INNER_DONE`

### ANCHOR / SPOKEN PHRASE
> Now the inner layer is also complete.

### WHAT APPEARS NOW
Confirm inner perimeter briefly.

### CENTER-STAGE HERO
Completed inner layer.

### CAUSE
Narration confirms.

### EFFECT / MOTION
No center move.

### WHAT MUST NOT APPEAR YET
Final result.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare center note.

### PERSISTENT STATE
All moved cells final.

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
Layer completion.

## BEAT 73 — `S06_CENTER_NEVER`

### ANCHOR / SPOKEN PHRASE
> The center value thirteen was never moved.

### WHAT APPEARS NOW
Focus 13 with FIXED cue.

### CENTER-STAGE HERO
Center fixed.

### CAUSE
Narration verifies.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
13 unchanged.

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
Verify edge.

## BEAT 74 — `S06_FINAL`

### ANCHOR / SPOKEN PHRASE
> And the final matrix now looks like this.

### WHAT APPEARS NOW
Show exact verified final matrix visually: rows [21,16,11,6,1], [22,17,12,7,2], [23,18,13,8,3], [24,19,14,9,4], [25,20,15,10,5]. Overlays exit.

### CENTER-STAGE HERO
Final rotated matrix.

### CAUSE
Narration points to state.

### EFFECT / MOTION
No number recital.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep final matrix.

### PERSISTENT STATE
Verified result.

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

## BEAT 75 — `S06_INPLACE`

### ANCHOR / SPOKEN PHRASE
> So we rotated the matrix completely in place.

### WHAT APPEARS NOW
Show ONE MATRIX · IN PLACE support.

### CENTER-STAGE HERO
In-place result.

### CAUSE
Narration states achievement.

### EFFECT / MOTION
No complexity graph.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Prepare invariant recap.

### PERSISTENT STATE
Final matrix persists.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Close method.

## BEAT 76 — `S06_INV`

### ANCHOR / SPOKEN PHRASE
> finish one four-position cycle safely

### WHAT APPEARS NOW
Compress trace to CYCLE → LAYER → INWARD; first term active.

### CENTER-STAGE HERO
Cycle invariant.

### CAUSE
Narration states first invariant step.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Next term.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep sequence.

### PERSISTENT STATE
Invariant summary.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Abstract learning.

## BEAT 77 — `S06_LAYER`

### ANCHOR / SPOKEN PHRASE
> finish the complete layer

### WHAT APPEARS NOW
Activate LAYER.

### CENTER-STAGE HERO
Layer invariant.

### CAUSE
Narration continues.

### EFFECT / MOTION
No matrix change.

### WHAT MUST NOT APPEAR YET
INWARD.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep sequence.

### PERSISTENT STATE
Invariant summary.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Abstract learning.

## BEAT 78 — `S06_INWARD2`

### ANCHOR / SPOKEN PHRASE
> then move inward.

### WHAT APPEARS NOW
Activate INWARD and settle sequence.

### CENTER-STAGE HERO
Move inward invariant.

### CAUSE
Narration completes summary.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear summary.

### PERSISTENT STATE
Method2 trace understood.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Close trace.

## BEAT 79 — `S06_CODE`

### ANCHOR / SPOKEN PHRASE
> Now let’s write the same cycle logic in code.

### WHAT APPEARS NOW
Trace visuals reduce; no code text yet.

### CENTER-STAGE HERO
Method2 code handoff.

### CAUSE
Narration transitions.

### EFFECT / MOTION
No future code.

### WHAT MUST NOT APPEAR YET
Method3.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End clean.

### PERSISTENT STATE
Exact Method2 execution known.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Continuity.

---

# 9. CONTINUITY OUT

Scene07 exact direct-cycle algorithm: layers; first/last/offset; save top; left→top; bottom→left; right→bottom; temp→right.

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
