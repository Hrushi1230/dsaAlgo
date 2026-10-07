# Q14 — Rotate Image (LeetCode 48)
# Phase 9 · Scene 02 — Understand Rotation + Derive the Coordinate Mapping
## WORD-BASED VISUAL PLAN — NO GUESSED TIME / NO GUESSED FRAMES

**Scene purpose:** Reveal the master matrix visually, derive the clockwise coordinate mapping from corners, verify an interior value, and establish the odd-center fixed point.

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

Q14 ACTIVE; master and mapping still hidden.

---

# 2. EXACT VERIFIED NARRATION

```text
We are given an `n` by `n` square matrix.

And we need to rotate it...

ninety degrees clockwise.

For this lesson...

we will use this five by five matrix.

We will use zero-based row and column indices.

Now watch the four corners.

One starts at row zero, column zero.

After a clockwise rotation...

it moves to row zero, column four.

Five starts at row zero, column four...

and moves to row four, column four.

Twenty-five moves to row four, column zero.

And twenty-one moves back to row zero, column zero.

So these four corner values form a cycle.

But we need one rule that works for every cell...

not only the corners.

Take any value at row `r`, column `c`.

After a ninety-degree clockwise rotation...

its new row becomes the old column...

so the new row is `c`.

And its new column becomes...

`n minus one minus r`.

So the complete mapping is:

row `r`, column `c`...

moves to...

row `c`, column `n minus one minus r`.

For our five by five matrix...

that becomes:

row `r`, column `c`...

moves to...

row `c`, column `four minus r`.

Let’s check one interior value.

Eight is at row one, column two.

So it moves to...

row two...

column three.

And the center value...

thirteen...

is at row two, column two.

It maps back to row two, column two.

So in an odd-sized matrix...

the exact center stays where it is.

Now we know the destination of every value.

The next question is...

how should we actually move them?

Let’s start with the most direct method.
```

Only this spoken order authorizes reveals.

---

# 3. LOCKED SCENE TRUTH

Locked 5×5 master. Clockwise mapping `(r,c)→(c,n-1-r)`; for n=5 `(c,4-r)`. Examples: 1→(0,4), 5→(4,4), 25→(4,0), 21→(0,0), 8:(1,2)→(2,3), 13 fixed.

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

Full 5×5 is shown visually on `five by five matrix`; do not narrate 25 values. Indices only when spoken. Corner/value flights are projections; master remains unchanged. No method storage before final handoff.

---

# 7. SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S02_NXN` | `We are given an `n` by `n` square matrix.` | Square Matrix/Grid. |
| `S02_CLOCKWISE` | `ninety degrees clockwise.` | Clockwise direction. |
| `S02_MASTER` | `we will use this five by five matrix.` | Locked 5×5 master. |
| `S02_INDICES` | `We will use zero-based row and column indices.` | Coordinate geometry. |
| `S02_CORNERS` | `Now watch the four corners.` | Four corners. |
| `S02_ONE` | `One starts at row zero, column zero.` | Value 1 source. |
| `S02_ONE_TO` | `it moves to row zero, column four.` | 1: (0,0)→(0,4). |
| `S02_FIVE` | `Five starts at row zero, column four` | Value 5 source. |
| `S02_FIVE_TO` | `and moves to row four, column four.` | 5 mapping. |
| `S02_25` | `Twenty-five moves to row four, column zero.` | 25 mapping. |
| `S02_21` | `And twenty-one moves back to row zero, column zero.` | Closed corner mapping. |
| `S02_CYCLE` | `So these four corner values form a cycle.` | Corner cycle. |
| `S02_RULE` | `But we need one rule that works for every cell` | Generic coordinate. |
| `S02_SOURCE` | `Take any value at row `r`, column `c`.` | (r,c). |
| `S02_NEWROW` | `its new row becomes the old column` | newRow=c. |
| `S02_NEWC` | ``n minus one minus r`.` | newCol=n-1-r. |
| `S02_MAPPING` | `row `c`, column `n minus one minus r`.` | Canonical mapping. |
| `S02_N5` | `row `c`, column `four minus r`.` | 5×5 mapping. |
| `S02_EIGHT` | `Eight is at row one, column two.` | 8 source. |
| `S02_EIGHT_TO` | `column three.` | 8 destination. |
| `S02_CENTER` | `thirteen... is at row two, column two.` | Center 13. |
| `S02_CENTER_BACK` | `It maps back to row two, column two.` | Center fixed point. |
| `S02_ODD` | `the exact center stays where it is.` | Odd-center invariant. |
| `S02_KNOW` | `Now we know the destination of every value.` | Destination truth. |
| `S02_HOW` | `how should we actually move them?` | Movement question. |
| `S02_DIRECT` | `Let’s start with the most direct method.` | Method1 handoff. |

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S02_NXN`

### ANCHOR / SPOKEN PHRASE
> We are given an `n` by `n` square matrix.

### WHAT APPEARS NOW
Show a clean matrix structure concept; no master values yet.

### CENTER-STAGE HERO
Square Matrix/Grid.

### CAUSE
Narration names input.

### EFFECT / MOTION
Matrix replaces Scene01 question.

### WHAT MUST NOT APPEAR YET
5×5 data.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep structure.

### PERSISTENT STATE
Abstract matrix. 

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
## BEAT 02 — `S02_CLOCKWISE`

### ANCHOR / SPOKEN PHRASE
> ninety degrees clockwise.

### WHAT APPEARS NOW
Add restrained clockwise direction cue around structure; cells do not spin.

### CENTER-STAGE HERO
Clockwise direction.

### CAUSE
Narration states transformation.

### EFFECT / MOTION
Direction only.

### WHAT MUST NOT APPEAR YET
Destination values.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep cue.

### PERSISTENT STATE
Matrix + direction.

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
## BEAT 03 — `S02_MASTER`

### ANCHOR / SPOKEN PHRASE
> we will use this five by five matrix.

### WHAT APPEARS NOW
Reveal the complete locked 5×5 master matrix at once; all 25 values are visual, not narrated.

### CENTER-STAGE HERO
Locked 5×5 master.

### CAUSE
Narration authorizes testcase.

### EFFECT / MOTION
Matrix settles as one structure.

### WHAT MUST NOT APPEAR YET
Indices before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep master unchanged.

### PERSISTENT STATE
Master matrix.

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
Establish testcase.
## BEAT 04 — `S02_INDICES`

### ANCHOR / SPOKEN PHRASE
> We will use zero-based row and column indices.

### WHAT APPEARS NOW
Add row and column labels 0..4 outside fixed grid.

### CENTER-STAGE HERO
Coordinate geometry.

### CAUSE
Narration authorizes indices.

### EFFECT / MOTION
Labels appear without moving cells.

### WHAT MUST NOT APPEAR YET
Mapping formula.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep indices.

### PERSISTENT STATE
Master + indices.

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
Teach coordinates.
## BEAT 05 — `S02_CORNERS`

### ANCHOR / SPOKEN PHRASE
> Now watch the four corners.

### WHAT APPEARS NOW
Only four corner cells receive subtle emphasis.

### CENTER-STAGE HERO
Four corners.

### CAUSE
Narration narrows attention.

### EFFECT / MOTION
No value moves.

### WHAT MUST NOT APPEAR YET
Mapping formula.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep corner context.

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
Direct attention.
## BEAT 06 — `S02_ONE`

### ANCHOR / SPOKEN PHRASE
> One starts at row zero, column zero.

### WHAT APPEARS NOW
Focus (0,0)=1 and show coordinate annotation.

### CENTER-STAGE HERO
Value 1 source.

### CAUSE
Narration identifies source.

### EFFECT / MOTION
Pivot cell.

### WHAT MUST NOT APPEAR YET
Destination.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep 1 active.

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
Source identification.
## BEAT 07 — `S02_ONE_TO`

### ANCHOR / SPOKEN PHRASE
> it moves to row zero, column four.

### WHAT APPEARS NOW
Highlight (0,4) and project a ghost of 1 there; original 1 stays put.

### CENTER-STAGE HERO
1: (0,0)→(0,4).

### CAUSE
Narration states destination.

### EFFECT / MOTION
BezierFlight ghost / relation.

### WHAT MUST NOT APPEAR YET
Overwriting 5.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear flight after settle.

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
Teach destination without mutation.
## BEAT 08 — `S02_FIVE`

### ANCHOR / SPOKEN PHRASE
> Five starts at row zero, column four

### WHAT APPEARS NOW
Focus 5 at (0,4).

### CENTER-STAGE HERO
Value 5 source.

### CAUSE
Narration selects next corner.

### EFFECT / MOTION
Prior relation clears.

### WHAT MUST NOT APPEAR YET
Destination.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep 5 active.

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
Direct attention.
## BEAT 09 — `S02_FIVE_TO`

### ANCHOR / SPOKEN PHRASE
> and moves to row four, column four.

### WHAT APPEARS NOW
Project 5 to (4,4) as ghost relation.

### CENTER-STAGE HERO
5 mapping.

### CAUSE
Narration states destination.

### EFFECT / MOTION
Source→destination only.

### WHAT MUST NOT APPEAR YET
Overwrite of 25.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear relation.

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
Teach direction.
## BEAT 10 — `S02_25`

### ANCHOR / SPOKEN PHRASE
> Twenty-five moves to row four, column zero.

### WHAT APPEARS NOW
Focus 25 then project (4,4)→(4,0).

### CENTER-STAGE HERO
25 mapping.

### CAUSE
Narration states third corner move.

### EFFECT / MOTION
Ghost transfer only.

### WHAT MUST NOT APPEAR YET
Permanent mutation.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear relation.

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
Teach cycle.
## BEAT 11 — `S02_21`

### ANCHOR / SPOKEN PHRASE
> And twenty-one moves back to row zero, column zero.

### WHAT APPEARS NOW
Project (4,0)→(0,0) and close the loop.

### CENTER-STAGE HERO
Closed corner mapping.

### CAUSE
Narration closes cycle.

### EFFECT / MOTION
Cycle relation completes.

### WHAT MUST NOT APPEAR YET
Four-way swap algorithm.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce after next label.

### PERSISTENT STATE
Corner loop known.

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
## BEAT 12 — `S02_CYCLE`

### ANCHOR / SPOKEN PHRASE
> So these four corner values form a cycle.

### WHAT APPEARS NOW
Add restrained CYCLE label around four corner relation.

### CENTER-STAGE HERO
Corner cycle.

### CAUSE
Narration names structure.

### EFFECT / MOTION
No matrix mutation.

### WHAT MUST NOT APPEAR YET
Method2 label.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear label before general rule.

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
Name structure.
## BEAT 13 — `S02_RULE`

### ANCHOR / SPOKEN PHRASE
> But we need one rule that works for every cell

### WHAT APPEARS NOW
Corners reduce; symbolic (r,c) becomes center hero.

### CENTER-STAGE HERO
Generic coordinate.

### CAUSE
Narration generalizes.

### EFFECT / MOTION
Concrete→symbolic handoff.

### WHAT MUST NOT APPEAR YET
Full mapping.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep symbolic source.

### PERSISTENT STATE
Coordinate concept.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Derive rule.
## BEAT 14 — `S02_SOURCE`

### ANCHOR / SPOKEN PHRASE
> Take any value at row `r`, column `c`.

### WHAT APPEARS NOW
Show source coordinate (r,c).

### CENTER-STAGE HERO
(r,c).

### CAUSE
Narration defines arbitrary cell.

### EFFECT / MOTION
No destination yet.

### WHAT MUST NOT APPEAR YET
Formula.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep source.

### PERSISTENT STATE
Symbolic source.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Generalize.
## BEAT 15 — `S02_NEWROW`

### ANCHOR / SPOKEN PHRASE
> its new row becomes the old column

### WHAT APPEARS NOW
Write only `newRow = c`.

### CENTER-STAGE HERO
newRow=c.

### CAUSE
Narration derives row component.

### EFFECT / MOTION
First formula fact appears.

### WHAT MUST NOT APPEAR YET
New column formula.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Partial mapping.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Stepwise derivation.
## BEAT 16 — `S02_NEWC`

### ANCHOR / SPOKEN PHRASE
> `n minus one minus r`.

### WHAT APPEARS NOW
Add `newCol = n-1-r`.

### CENTER-STAGE HERO
newCol=n-1-r.

### CAUSE
Narration completes column component.

### EFFECT / MOTION
Second fact appears.

### WHAT MUST NOT APPEAR YET
Combined mapping before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep both facts.

### PERSISTENT STATE
Partial mapping.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Stepwise derivation.
## BEAT 17 — `S02_MAPPING`

### ANCHOR / SPOKEN PHRASE
> row `c`, column `n minus one minus r`.

### WHAT APPEARS NOW
Combine into `(r,c) → (c,n-1-r)`.

### CENTER-STAGE HERO
Canonical mapping.

### CAUSE
Narration states full rule.

### EFFECT / MOTION
Formula becomes center hero.

### WHAT MUST NOT APPEAR YET
5×5 specialization before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep general mapping.

### PERSISTENT STATE
General mapping.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine.

### MOTION PURPOSE
Lock truth.
## BEAT 18 — `S02_N5`

### ANCHOR / SPOKEN PHRASE
> row `c`, column `four minus r`.

### WHAT APPEARS NOW
Specialize to `(c,4-r)` beneath general rule.

### CENTER-STAGE HERO
5×5 mapping.

### CAUSE
Narration substitutes n=5.

### EFFECT / MOTION
General rule dims.

### WHAT MUST NOT APPEAR YET
Example 8.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep specialized rule.

### PERSISTENT STATE
Mapping truth.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Apply parameter.
## BEAT 19 — `S02_EIGHT`

### ANCHOR / SPOKEN PHRASE
> Eight is at row one, column two.

### WHAT APPEARS NOW
Focus master cell (1,2)=8.

### CENTER-STAGE HERO
8 source.

### CAUSE
Narration selects interior example.

### EFFECT / MOTION
Matrix returns to hero.

### WHAT MUST NOT APPEAR YET
Destination.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep 8 active.

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
Verify mapping.
## BEAT 20 — `S02_EIGHT_TO`

### ANCHOR / SPOKEN PHRASE
> column three.

### WHAT APPEARS NOW
Show (1,2)→(2,3) projection for 8; no permanent mutation.

### CENTER-STAGE HERO
8 destination.

### CAUSE
Narration finishes coordinate.

### EFFECT / MOTION
Ghost transfer / relation.

### WHAT MUST NOT APPEAR YET
Full result.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Clear relation.

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
Verify mapping.
## BEAT 21 — `S02_CENTER`

### ANCHOR / SPOKEN PHRASE
> thirteen... is at row two, column two.

### WHAT APPEARS NOW
Focus center 13 at (2,2).

### CENTER-STAGE HERO
Center 13.

### CAUSE
Narration selects center.

### EFFECT / MOTION
Pivot focus.

### WHAT MUST NOT APPEAR YET
Fixed conclusion before spoken.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep center.

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
Direct attention.
## BEAT 22 — `S02_CENTER_BACK`

### ANCHOR / SPOKEN PHRASE
> It maps back to row two, column two.

### WHAT APPEARS NOW
Show fixed-point relation (2,2)→(2,2); no flight.

### CENTER-STAGE HERO
Center fixed point.

### CAUSE
Narration states mapping.

### EFFECT / MOTION
STAYS cue only.

### WHAT MUST NOT APPEAR YET
General odd-size claim.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep center.

### PERSISTENT STATE
13 fixed.

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
Teach fixed point.
## BEAT 23 — `S02_ODD`

### ANCHOR / SPOKEN PHRASE
> the exact center stays where it is.

### WHAT APPEARS NOW
Confirm center with FIXED/good state then reduce.

### CENTER-STAGE HERO
Odd-center invariant.

### CAUSE
Narration generalizes.

### EFFECT / MOTION
No movement.

### WHAT MUST NOT APPEAR YET
Special handling code.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Return matrix neutral.

### PERSISTENT STATE
Center excluded from movement.

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
Lock edge truth.
## BEAT 24 — `S02_KNOW`

### ANCHOR / SPOKEN PHRASE
> Now we know the destination of every value.

### WHAT APPEARS NOW
Show mapping formula with master as support.

### CENTER-STAGE HERO
Destination truth.

### CAUSE
Narration closes foundation.

### EFFECT / MOTION
No method object yet.

### WHAT MUST NOT APPEAR YET
Result matrix.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Reduce formula to remembered support.

### PERSISTENT STATE
Mapping known.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Close foundation.
## BEAT 25 — `S02_HOW`

### ANCHOR / SPOKEN PHRASE
> how should we actually move them?

### WHAT APPEARS NOW
Replace formula hero with `HOW DO WE MOVE VALUES SAFELY?`.

### CENTER-STAGE HERO
Movement question.

### CAUSE
Narration opens algorithmic problem.

### EFFECT / MOTION
No method shown.

### WHAT MUST NOT APPEAR YET
Extra matrix.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
Keep question.

### PERSISTENT STATE
Problem transition.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Derive methods.
## BEAT 26 — `S02_DIRECT`

### ANCHOR / SPOKEN PHRASE
> Let’s start with the most direct method.

### WHAT APPEARS NOW
Minimal METHOD 1 handoff label; no result matrix yet.

### CENTER-STAGE HERO
Method1 handoff.

### CAUSE
Narration authorizes next method.

### EFFECT / MOTION
Question reduces.

### WHAT MUST NOT APPEAR YET
Result matrix before Scene03.

### COMPREHENSION HOLD
Only if final audio contains a real gap after this anchor.

### CLEANUP / EXIT
End on untouched master.

### PERSISTENT STATE
Master unchanged.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Continuity.


---

# 9. CONTINUITY OUT

Scene03: master unchanged; indices and mapping known; Method1 handoff active; result matrix not yet created.

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
