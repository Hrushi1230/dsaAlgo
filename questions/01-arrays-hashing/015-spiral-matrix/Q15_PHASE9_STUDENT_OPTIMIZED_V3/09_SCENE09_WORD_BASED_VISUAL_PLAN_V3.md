# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 09 — Complexity + Important Mistakes + Edge Cases
## WORD-BASED VISUAL PLAN — STUDENT-OPTIMIZED SCRIPT · NO GUESSED TIME · KIT-FIRST

**Scene purpose:** Compare method costs and teach only implementation-critical mistakes and edge cases.

---

# AUTHORITY / SOURCE PRIORITY

1. `Q15_Spiral_Matrix_FINAL_STUDENT_OPTIMIZED.md`
2. independently verified Q15 algorithm truth / code targets
3. `DSA_MASTER_PRODUCTION_SKILL_V3.md`
4. `REFERENCE_WORD_DRIVEN_PLANNING_SKILL.md`
5. Matrix/Grid grammar + kit/source audit
6. actual project repository / `@dsa/kit`
7. final ElevenLabs MP3 + exact word-sync JSON

If an implementation API is missing: `UNRESOLVED — SOURCE REQUIRED`.

---

# PERMANENT VISUAL TRUTH

```text
CELL POSITION = FIXED
CELL VALUE    = FIXED
```

Traversal/visited/output/boundary overlays may change. Source matrix cells and values never move.

---

# TIMING LOCK

```text
NO SECONDS
NO FRAMES
NO GUESSED TYPE SPEED
NO GUESSED HOLD
```

Final audio timestamps are the only timing authority. Unanchored words inherit the previous persistent state and captions continue.

---

# CONTINUITY

**IN:** Scene08 leaves both complexities established and guarded boundary code understood.

**OUT:** Critical mistakes/edge cases resolved.

---

# HARD NO-SPOILER / CENTER-STAGE LOCK

- If narration has not reached information, it does not visually exist yet.
- Default occupancy: **1 primary hero + 1 direct support object + captions**.
- Motion must teach state, show cause→effect, direct attention, or preserve continuity.
- No black/dark panel behind matrix; use course chalkboard + kit primitives.
- Future code lines remain hidden in code scenes.

---

# SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact spoken phrase | Center-stage hero |
|---|---|---|
| `S09_COMPARE` | Let’s compare both methods. | Method comparison |
| `S09_M1` | Method One... Direction Simulation with Visited... takes... `O(m × n)` time... and... `O(m × n)` auxiliary space. | Method1 complexity |
| `S09_M2` | Method Two... Shrinking Boundaries... also takes... `O(m × n)` time... but only... `O(1)` auxiliary space. | Method2 complexity |
| `S09_REP` | The improvement is... how we represent the remaining work. | Representation difference |
| `S09_MISTAKES` | Now remember these important mistakes. | Mistake mode |
| `S09_RECT` | do not assume the matrix is square. It is `m` by `n`. Rows and columns can be different. | Rectangular input reminder |
| `S09_TURN` | in Method One... do not turn only at the border. You must turn when the next cell is... outside... or already visited. | Outside OR visited |
| `S09_CONSUME_FIRST` | in the boundary method... consume an edge first... then shrink its boundary. Do not shrink before processing it. | CONSUME → SHRINK |
| `S09_VALIDATE` | after shrinking... validate the remaining rectangle... before processing another edge. | SHRINK → VALIDATE |
| `S09_DUPLICATE` | single-row and single-column cases... can create duplicate values. | Duplicate risk |
| `S09_DONT_STOP` | do not stop just because... only one row... or one column... is left. Those cells are still valid work. | 1-row / 1-column valid work |
| `S09_CASES` | a one by one matrix... a single row... a single column... wide matrices... and tall matrices. | Edge-case carousel |
| `S09_VALUES` | Duplicate values... negative values... and zeros... also change nothing. | Value-independence examples |
| `S09_POSITIONS` | Because our traversal depends on... positions... not on the values stored there. | POSITION > VALUE |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S09_COMPARE`

### ANCHOR / SPOKEN PHRASE
> Let’s compare both methods.

### WHAT APPEARS NOW
Explicit comparison act allows two compact columns: Method1 and Method2, nothing else.

### CENTER-STAGE HERO
Method comparison

### CAUSE
The narration reaches `S09_COMPARE`.

### EFFECT / MOTION
Sets context for complexity comparison.

### WHAT MUST NOT APPEAR YET
Numbers until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep both columns.

### PERSISTENT STATE
Comparison mode.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Sets context for complexity comparison.

## BEAT 02 — `S09_M1`

### ANCHOR / SPOKEN PHRASE
> Method One... Direction Simulation with Visited... takes... `O(m × n)` time... and... `O(m × n)` auxiliary space.

### WHAT APPEARS NOW
Reveal Method1 name, time, then space in spoken order.

### CENTER-STAGE HERO
Method1 complexity

### CAUSE
The narration reaches `S09_M1`.

### EFFECT / MOTION
Summarizes first approach.

### WHAT MUST NOT APPEAR YET
Method2 results.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep dim after Method2 starts.

### PERSISTENT STATE
M1 O(mn)/O(mn).

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Summarizes first approach.

## BEAT 03 — `S09_M2`

### ANCHOR / SPOKEN PHRASE
> Method Two... Shrinking Boundaries... also takes... `O(m × n)` time... but only... `O(1)` auxiliary space.

### WHAT APPEARS NOW
Reveal name/time/space in order; highlight only space difference.

### CENTER-STAGE HERO
Method2 complexity

### CAUSE
The narration reaches `S09_M2`.

### EFFECT / MOTION
Summarizes optimal representation.

### WHAT MUST NOT APPEAR YET
Winner/ranking language.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep both for observation.

### PERSISTENT STATE
M2 O(mn)/O1.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Summarizes optimal representation.

## BEAT 04 — `S09_REP`

### ANCHOR / SPOKEN PHRASE
> The improvement is... how we represent the remaining work.

### WHAT APPEARS NOW
Replace comparison numbers with `visited cells` vs `four boundaries` semantic representation.

### CENTER-STAGE HERO
Representation difference

### CAUSE
The narration reaches `S09_REP`.

### EFFECT / MOTION
Explains optimization source.

### WHAT MUST NOT APPEAR YET
Mistakes list.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear comparison for one-at-a-time mistake teaching.

### PERSISTENT STATE
Same time, less auxiliary state.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Explains optimization source.

## BEAT 05 — `S09_MISTAKES`

### ANCHOR / SPOKEN PHRASE
> Now remember these important mistakes.

### WHAT APPEARS NOW
Bring one blank chalk warning lane; no packed checklist.

### CENTER-STAGE HERO
Mistake mode

### CAUSE
The narration reaches `S09_MISTAKES`.

### EFFECT / MOTION
Transitions to pitfalls.

### WHAT MUST NOT APPEAR YET
Individual mistakes before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep lane.

### PERSISTENT STATE
Mistakes taught sequentially.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Transitions to pitfalls.

## BEAT 06 — `S09_RECT`

### ANCHOR / SPOKEN PHRASE
> do not assume the matrix is square. It is `m` by `n`. Rows and columns can be different.

### WHAT APPEARS NOW
Center wide/tall rectangular grid and reject square-only assumption.

### CENTER-STAGE HERO
Rectangular input reminder

### CAUSE
The narration reaches `S09_RECT`.

### EFFECT / MOTION
Prevents shape bug.

### WHAT MUST NOT APPEAR YET
Method1 turn rule.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
Rectangular supported.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prevents shape bug.

## BEAT 07 — `S09_TURN`

### ANCHOR / SPOKEN PHRASE
> in Method One... do not turn only at the border. You must turn when the next cell is... outside... or already visited.

### WHAT APPEARS NOW
Reuse compact 6-outside and 7→1-visited examples sequentially; border-only rule gets warn strike.

### CENTER-STAGE HERO
Outside OR visited

### CAUSE
The narration reaches `S09_TURN`.

### EFFECT / MOTION
Prevents infinite/revisit bug.

### WHAT MUST NOT APPEAR YET
Boundary method mistake.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear examples.

### PERSISTENT STATE
M1 two turn causes.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prevents infinite/revisit bug.

## BEAT 08 — `S09_CONSUME_FIRST`

### ANCHOR / SPOKEN PHRASE
> in the boundary method... consume an edge first... then shrink its boundary. Do not shrink before processing it.

### WHAT APPEARS NOW
Use one top edge: values consumed first, then boundary moves; show reverse order briefly rejected without executing wrong output.

### CENTER-STAGE HERO
CONSUME → SHRINK

### CAUSE
The narration reaches `S09_CONSUME_FIRST`.

### EFFECT / MOTION
Prevents skipped edge.

### WHAT MUST NOT APPEAR YET
Validation.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear rejected cue.

### PERSISTENT STATE
Order consume then shrink.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prevents skipped edge.

## BEAT 09 — `S09_VALIDATE`

### ANCHOR / SPOKEN PHRASE
> after shrinking... validate the remaining rectangle... before processing another edge.

### WHAT APPEARS NOW
Show boundary shrink then active-region validity check.

### CENTER-STAGE HERO
SHRINK → VALIDATE

### CAUSE
The narration reaches `S09_VALIDATE`.

### EFFECT / MOTION
Prevents processing collapsed region.

### WHAT MUST NOT APPEAR YET
Duplicate consequence.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep single-row/collapse support.

### PERSISTENT STATE
Validate between edges.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prevents processing collapsed region.

## BEAT 10 — `S09_DUPLICATE`

### ANCHOR / SPOKEN PHRASE
> single-row and single-column cases... can create duplicate values.

### WHAT APPEARS NOW
Use compact collapsed-region proof: without guard, a previously consumed edge would be eligible again; mark duplicate-copy risk with warn, do not fabricate extra traversal.

### CENTER-STAGE HERO
Duplicate risk

### CAUSE
The narration reaches `S09_DUPLICATE`.

### EFFECT / MOTION
Explains why guards matter.

### WHAT MUST NOT APPEAR YET
Valid work rule.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear risk.

### PERSISTENT STATE
Guard prevents duplicate append.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Explains why guards matter.

## BEAT 11 — `S09_DONT_STOP`

### ANCHOR / SPOKEN PHRASE
> do not stop just because... only one row... or one column... is left. Those cells are still valid work.

### WHAT APPEARS NOW
Show one-row then one-column active rectangles, each with valid check.

### CENTER-STAGE HERO
1-row / 1-column valid work

### CAUSE
The narration reaches `S09_DONT_STOP`.

### EFFECT / MOTION
Prevents early termination.

### WHAT MUST NOT APPEAR YET
Edge-case set.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep minimal.

### PERSISTENT STATE
Degenerate rectangles valid.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prevents early termination.

## BEAT 12 — `S09_CASES`

### ANCHOR / SPOKEN PHRASE
> a one by one matrix... a single row... a single column... wide matrices... and tall matrices.

### WHAT APPEARS NOW
Show each shape sequentially on its spoken phrase, reusing same Matrix/Grid kernel; no simultaneous dashboard.

### CENTER-STAGE HERO
Edge-case carousel

### CAUSE
The narration reaches `S09_CASES`.

### EFFECT / MOTION
Demonstrates geometry coverage.

### WHAT MUST NOT APPEAR YET
Value variations.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear each before next; settle on neutral matrix.

### PERSISTENT STATE
All listed shapes supported.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Demonstrates geometry coverage.

### SPECIAL CONTRACT
SUBWORD CONTRACT: one shape enters per spoken case; do not pre-render the whole set.

## BEAT 13 — `S09_VALUES`

### ANCHOR / SPOKEN PHRASE
> Duplicate values... negative values... and zeros... also change nothing.

### WHAT APPEARS NOW
Keep geometry identical while values change across three quick states only on spoken categories; traversal/path logic stays fixed.

### CENTER-STAGE HERO
Value-independence examples

### CAUSE
The narration reaches `S09_VALUES`.

### EFFECT / MOTION
Shows algorithm depends on position, not values.

### WHAT MUST NOT APPEAR YET
Final explanation.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle on neutral grid.

### PERSISTENT STATE
Values do not control traversal.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows algorithm depends on position, not values.

## BEAT 14 — `S09_POSITIONS`

### ANCHOR / SPOKEN PHRASE
> Because our traversal depends on... positions... not on the values stored there.

### WHAT APPEARS NOW
Center coordinates/position geometry; values recede.

### CENTER-STAGE HERO
POSITION > VALUE

### CAUSE
The narration reaches `S09_POSITIONS`.

### EFFECT / MOTION
Closes edge-case reasoning with principle.

### WHAT MUST NOT APPEAR YET
Recap scene.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
End clean.

### PERSISTENT STATE
Traversal state is positional.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Closes edge-case reasoning with principle.

---

# SCENE END-STATE CONTRACT

```text
Critical mistakes/edge cases resolved.
```

# IMPLEMENTATION SOURCE LOCK

Before implementation, inspect actual repository APIs for Matrix/Grid wrapper, path tracer/evolving path, output sequence, typed code editor, roadmap, and any generic complexity graph. Reuse/extend kit-level primitives; never invent props or build a scene-local generic substitute.
