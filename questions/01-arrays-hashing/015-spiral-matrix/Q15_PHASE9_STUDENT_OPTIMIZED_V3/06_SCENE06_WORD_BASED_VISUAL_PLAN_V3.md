# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 06 — Method 2 Idea + Core Invariant
## WORD-BASED VISUAL PLAN — STUDENT-OPTIMIZED SCRIPT · NO GUESSED TIME · KIT-FIRST

**Scene purpose:** Define four boundaries, the active-rectangle invariant, edge order, shrink rule, and validation rule.

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

**IN:** Scene05 leaves Method2 concept as four boundaries around an unprocessed rectangle.

**OUT:** Invariant and validation rules locked; master reset for optimal trace.

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
| `S06_MASTER` | For our five by six matrix | 5×6 master |
| `S06_INIT` | the initial boundaries are | Boundary initialization scaffold |
| `S06_TOP0` | `top = 0` | top=0 |
| `S06_BOTTOM4` | `bottom = 4` | bottom=4 |
| `S06_LEFT0` | `left = 0` | left=0 |
| `S06_RIGHT5` | `right = 5`. | right=5 |
| `S06_ACTIVE_RECT` | These four boundaries describe... the active rectangle. | Full active rectangle |
| `S06_INVARIANT` | And we maintain one important invariant. | INVARIANT |
| `S06_OUTSIDE` | Everything outside the active rectangle... has already been processed exactly once. | Outside = processed once |
| `S06_INSIDE` | Everything inside the active rectangle... is still unprocessed. | Inside = unprocessed |
| `S06_PEEL` | we peel complete edges. | Active edge concept |
| `S06_EDGE_ORDER` | Top edge... right edge... bottom edge... left edge. | TOP→RIGHT→BOTTOM→LEFT |
| `S06_SHRINK` | After consuming an edge... we move that boundary inward. | consume → shrink |
| `S06_RULE` | But there is one important rule. | Validation rule prompt |
| `S06_VALIDATE` | After shrinking... we must make sure... the active rectangle still exists. | VALIDATE active rectangle |
| `S06_SINGLE` | one row... or one column... is left. | Degenerate valid rectangles |
| `S06_TRACE` | Now let’s trace the full boundary method. | Reset for optimal trace |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S06_MASTER`

### ANCHOR / SPOKEN PHRASE
> For our five by six matrix

### WHAT APPEARS NOW
Bring untouched fixed master back to center.

### CENTER-STAGE HERO
5×6 master

### CAUSE
The narration reaches `S06_MASTER`.

### EFFECT / MOTION
Provides concrete geometry for initial bounds.

### WHAT MUST NOT APPEAR YET
Numeric bounds until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
5×6 active.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Provides concrete geometry for initial bounds.

## BEAT 02 — `S06_INIT`

### ANCHOR / SPOKEN PHRASE
> the initial boundaries are

### WHAT APPEARS NOW
Show four edge handles with labels but no numbers.

### CENTER-STAGE HERO
Boundary initialization scaffold

### CAUSE
The narration reaches `S06_INIT`.

### EFFECT / MOTION
Prepares numeric assignment.

### WHAT MUST NOT APPEAR YET
Values.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Bounds upcoming.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prepares numeric assignment.

## BEAT 03 — `S06_TOP0`

### ANCHOR / SPOKEN PHRASE
> `top = 0`

### WHAT APPEARS NOW
Attach top label to row0.

### CENTER-STAGE HERO
top=0

### CAUSE
The narration reaches `S06_TOP0`.

### EFFECT / MOTION
Sets first active row.

### WHAT MUST NOT APPEAR YET
Other values.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
top0.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Sets first active row.

## BEAT 04 — `S06_BOTTOM4`

### ANCHOR / SPOKEN PHRASE
> `bottom = 4`

### WHAT APPEARS NOW
Attach bottom to row4.

### CENTER-STAGE HERO
bottom=4

### CAUSE
The narration reaches `S06_BOTTOM4`.

### EFFECT / MOTION
Sets last active row.

### WHAT MUST NOT APPEAR YET
left/right values.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
bottom4.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Sets last active row.

## BEAT 05 — `S06_LEFT0`

### ANCHOR / SPOKEN PHRASE
> `left = 0`

### WHAT APPEARS NOW
Attach left to col0.

### CENTER-STAGE HERO
left=0

### CAUSE
The narration reaches `S06_LEFT0`.

### EFFECT / MOTION
Sets first active column.

### WHAT MUST NOT APPEAR YET
right value.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
left0.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Sets first active column.

## BEAT 06 — `S06_RIGHT5`

### ANCHOR / SPOKEN PHRASE
> `right = 5`.

### WHAT APPEARS NOW
Attach right to col5.

### CENTER-STAGE HERO
right=5

### CAUSE
The narration reaches `S06_RIGHT5`.

### EFFECT / MOTION
Completes full active rectangle.

### WHAT MUST NOT APPEAR YET
Invariant styling.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
right5.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Completes full active rectangle.

## BEAT 07 — `S06_ACTIVE_RECT`

### ANCHOR / SPOKEN PHRASE
> These four boundaries describe... the active rectangle.

### WHAT APPEARS NOW
Emphasize perimeter/region bounded by four markers; all cells inside.

### CENTER-STAGE HERO
Full active rectangle

### CAUSE
The narration reaches `S06_ACTIVE_RECT`.

### EFFECT / MOTION
Defines state meaning.

### WHAT MUST NOT APPEAR YET
Processed outside until invariant.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Active rectangle=whole matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Defines state meaning.

## BEAT 08 — `S06_INVARIANT`

### ANCHOR / SPOKEN PHRASE
> And we maintain one important invariant.

### WHAT APPEARS NOW
Bring invariant label to center; matrix is support.

### CENTER-STAGE HERO
INVARIANT

### CAUSE
The narration reaches `S06_INVARIANT`.

### EFFECT / MOTION
Signals a correctness property, not a procedural step.

### WHAT MUST NOT APPEAR YET
Statements before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Invariant upcoming.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Signals a correctness property, not a procedural step.

## BEAT 09 — `S06_OUTSIDE`

### ANCHOR / SPOKEN PHRASE
> Everything outside the active rectangle... has already been processed exactly once.

### WHAT APPEARS NOW
Use a compact previously-seen post-peel schematic as support: outside region dim/processed, active rectangle intact; do not change numeric trace state.

### CENTER-STAGE HERO
Outside = processed once

### CAUSE
The narration reaches `S06_OUTSIDE`.

### EFFECT / MOTION
Explains outside meaning.

### WHAT MUST NOT APPEAR YET
Inside statement.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep schematic.

### PERSISTENT STATE
Outside active bounds = processed exactly once.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Explains outside meaning.

## BEAT 10 — `S06_INSIDE`

### ANCHOR / SPOKEN PHRASE
> Everything inside the active rectangle... is still unprocessed.

### WHAT APPEARS NOW
Emphasize active interior as untouched.

### CENTER-STAGE HERO
Inside = unprocessed

### CAUSE
The narration reaches `S06_INSIDE`.

### EFFECT / MOTION
Completes invariant.

### WHAT MUST NOT APPEAR YET
Edge sequence.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Return focus to full master.

### PERSISTENT STATE
Inside bounds = unprocessed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Completes invariant.

## BEAT 11 — `S06_PEEL`

### ANCHOR / SPOKEN PHRASE
> we peel complete edges.

### WHAT APPEARS NOW
Highlight one perimeter edge at a time conceptually; no values consumed.

### CENTER-STAGE HERO
Active edge concept

### CAUSE
The narration reaches `S06_PEEL`.

### EFFECT / MOTION
Changes unit of work from cells to edges.

### WHAT MUST NOT APPEAR YET
Specific order.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep edge scaffold.

### PERSISTENT STATE
Method2 works edge-by-edge.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Changes unit of work from cells to edges.

## BEAT 12 — `S06_EDGE_ORDER`

### ANCHOR / SPOKEN PHRASE
> Top edge... right edge... bottom edge... left edge.

### WHAT APPEARS NOW
Reveal active-edge labels sequentially on words; connect only after left is spoken.

### CENTER-STAGE HERO
TOP→RIGHT→BOTTOM→LEFT

### CAUSE
The narration reaches `S06_EDGE_ORDER`.

### EFFECT / MOTION
Locks same clockwise order as trace.

### WHAT MUST NOT APPEAR YET
Actual consumption.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Reduce to compact cycle.

### PERSISTENT STATE
Edge order locked.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Locks same clockwise order as trace.

### SPECIAL CONTRACT
SUBWORD CONTRACT: each edge name appears only on exact word timestamp.

## BEAT 13 — `S06_SHRINK`

### ANCHOR / SPOKEN PHRASE
> After consuming an edge... we move that boundary inward.

### WHAT APPEARS NOW
Demonstrate one generic top-edge handoff: active top edge marks consumed, then only on `boundary inward` move top handle one row inward; do not run full master trace.

### CENTER-STAGE HERO
consume → shrink

### CAUSE
The narration reaches `S06_SHRINK`.

### EFFECT / MOTION
Shows representation update.

### WHAT MUST NOT APPEAR YET
Validity result.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Reset to conceptual active rectangle after demo.

### PERSISTENT STATE
Consumed edge removed from active rectangle.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows representation update.

## BEAT 14 — `S06_RULE`

### ANCHOR / SPOKEN PHRASE
> But there is one important rule.

### WHAT APPEARS NOW
Center `AFTER SHRINK → ?` while matrix supports.

### CENTER-STAGE HERO
Validation rule prompt

### CAUSE
The narration reaches `S06_RULE`.

### EFFECT / MOTION
Creates need for guard.

### WHAT MUST NOT APPEAR YET
Formula top<=bottom etc.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep prompt.

### PERSISTENT STATE
Need validate existence.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Creates need for guard.

## BEAT 15 — `S06_VALIDATE`

### ANCHOR / SPOKEN PHRASE
> After shrinking... we must make sure... the active rectangle still exists.

### WHAT APPEARS NOW
Show valid/invalid rectangle concept with edge handles not yet crossing in trace. No code formula.

### CENTER-STAGE HERO
VALIDATE active rectangle

### CAUSE
The narration reaches `S06_VALIDATE`.

### EFFECT / MOTION
Explains why guards exist.

### WHAT MUST NOT APPEAR YET
Single row/column.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep validity cue.

### PERSISTENT STATE
Continue only if region exists.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Explains why guards exist.

## BEAT 16 — `S06_SINGLE`

### ANCHOR / SPOKEN PHRASE
> one row... or one column... is left.

### WHAT APPEARS NOW
Show compact one-row then one-column rectangle examples, sequentially; both receive valid check.

### CENTER-STAGE HERO
Degenerate valid rectangles

### CAUSE
The narration reaches `S06_SINGLE`.

### EFFECT / MOTION
Prevents assumption of four-sided ring.

### WHAT MUST NOT APPEAR YET
Scene07 final state.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear examples.

### PERSISTENT STATE
1-row and 1-column are valid work.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prevents assumption of four-sided ring.

## BEAT 17 — `S06_TRACE`

### ANCHOR / SPOKEN PHRASE
> Now let’s trace the full boundary method.

### WHAT APPEARS NOW
Restore untouched 5×6 with top0,bottom4,left0,right5 and empty answer track.

### CENTER-STAGE HERO
Reset for optimal trace

### CAUSE
The narration reaches `S06_TRACE`.

### EFFECT / MOTION
Prepares exact Scene07 execution.

### WHAT MUST NOT APPEAR YET
No consumed edges.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
End clean.

### PERSISTENT STATE
Scene07 starts full active rectangle.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prepares exact Scene07 execution.

---

# SCENE END-STATE CONTRACT

```text
Invariant and validation rules locked; master reset for optimal trace.
```

# IMPLEMENTATION SOURCE LOCK

Before implementation, inspect actual repository APIs for Matrix/Grid wrapper, path tracer/evolving path, output sequence, typed code editor, roadmap, and any generic complexity graph. Reuse/extend kit-level primitives; never invent props or build a scene-local generic substitute.
