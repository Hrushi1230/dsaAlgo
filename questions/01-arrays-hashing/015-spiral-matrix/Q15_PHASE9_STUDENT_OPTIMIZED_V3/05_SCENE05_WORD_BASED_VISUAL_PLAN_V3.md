# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 05 — Why Visited Memory Is Unnecessary
## WORD-BASED VISUAL PLAN — STUDENT-OPTIMIZED SCRIPT · NO GUESSED TIME · KIT-FIRST

**Scene purpose:** Show why visited memory is unnecessary by discovering that remaining work is one rectangle.

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

**IN:** Scene04 leaves Method1 correct at O(mn) time / O(mn) auxiliary space and asks whether visited memory is necessary.

**OUT:** Method2 four-boundary representation discovered.

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
| `S05_CORRECT` | Method One is correct | Method1 verdict |
| `S05_TIME` | `O(m × n)` time. | O(mn) time |
| `S05_EXTRA` | The extra cost comes from... the visited matrix. | Visited memory cost |
| `S05_AFTER_OUTER` | after the full outer layer has been processed. | Outer layer processed checkpoint |
| `S05_RECT` | it is still one rectangle. | Remaining inner rectangle |
| `S05_BETTER` | That gives us a better idea. | Rectangle as new hero |
| `S05_REMEMBER_RECT` | we can simply remember... which rectangle is still unprocessed. | Unprocessed rectangle representation |
| `S05_FOUR` | And one rectangle needs only four boundaries. | Four-boundary concept |
| `S05_NAMES` | `top`... `bottom`... `left`... and `right`. | top/bottom/left/right |
| `S05_REPLACE` | we can replace... an entire visited matrix... with four integers. | Visited grid → four integers |
| `S05_METHOD2` | That gives us Method Two. | Method Two — Shrinking Boundaries |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S05_CORRECT`

### ANCHOR / SPOKEN PHRASE
> Method One is correct

### WHAT APPEARS NOW
Briefly show Method1 PASS; no criticism of correctness.

### CENTER-STAGE HERO
Method1 verdict

### CAUSE
The narration reaches `S05_CORRECT`.

### EFFECT / MOTION
Separates correctness from optimization.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep time badge.

### PERSISTENT STATE
Method1 correct.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Separates correctness from optimization.

## BEAT 02 — `S05_TIME`

### ANCHOR / SPOKEN PHRASE
> `O(m × n)` time.

### WHAT APPEARS NOW
Show time badge already optimal for touching each cell.

### CENTER-STAGE HERO
O(mn) time

### CAUSE
The narration reaches `S05_TIME`.

### EFFECT / MOTION
Frames optimization target as memory only.

### WHAT MUST NOT APPEAR YET
Space answer until next phrase.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep compact.

### PERSISTENT STATE
Time O(mn).

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Frames optimization target as memory only.

## BEAT 03 — `S05_EXTRA`

### ANCHOR / SPOKEN PHRASE
> The extra cost comes from... the visited matrix.

### WHAT APPEARS NOW
Bring full visited overlay to center; time badge recedes.

### CENTER-STAGE HERO
Visited memory cost

### CAUSE
The narration reaches `S05_EXTRA`.

### EFFECT / MOTION
Identifies expensive representation.

### WHAT MUST NOT APPEAR YET
Four boundaries.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep visited overlay.

### PERSISTENT STATE
Optimization target = visited memory.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Identifies expensive representation.

## BEAT 04 — `S05_AFTER_OUTER`

### ANCHOR / SPOKEN PHRASE
> after the full outer layer has been processed.

### WHAT APPEARS NOW
Show master with outer perimeter history/dim and inner 3×4 cells untouched exactly as traced.

### CENTER-STAGE HERO
Outer layer processed checkpoint

### CAUSE
The narration reaches `S05_AFTER_OUTER`.

### EFFECT / MOTION
Uses verified state, not invented geometry.

### WHAT MUST NOT APPEAR YET
Boundary names.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
Outer processed, inner unprocessed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Uses verified state, not invented geometry.

## BEAT 05 — `S05_RECT`

### ANCHOR / SPOKEN PHRASE
> it is still one rectangle.

### WHAT APPEARS NOW
Draw one subtle active-region outline around 3×4 remainder.

### CENTER-STAGE HERO
Remaining inner rectangle

### CAUSE
The narration reaches `S05_RECT`.

### EFFECT / MOTION
Reframes remaining work structurally.

### WHAT MUST NOT APPEAR YET
top/bottom/left/right labels.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Visited cells recede further.

### PERSISTENT STATE
Remaining work = rectangle.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Reframes remaining work structurally.

## BEAT 06 — `S05_BETTER`

### ANCHOR / SPOKEN PHRASE
> That gives us a better idea.

### WHAT APPEARS NOW
Remove Method1 current/direction; center active rectangle only.

### CENTER-STAGE HERO
Rectangle as new hero

### CAUSE
The narration reaches `S05_BETTER`.

### EFFECT / MOTION
Creates representational shift.

### WHAT MUST NOT APPEAR YET
Boundary names.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep rectangle.

### PERSISTENT STATE
Ready to replace history.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Creates representational shift.

## BEAT 07 — `S05_REMEMBER_RECT`

### ANCHOR / SPOKEN PHRASE
> we can simply remember... which rectangle is still unprocessed.

### WHAT APPEARS NOW
Visited marks begin to fade as active rectangle remains explicit.

### CENTER-STAGE HERO
Unprocessed rectangle representation

### CAUSE
The narration reaches `S05_REMEMBER_RECT`.

### EFFECT / MOTION
Shows what information actually matters.

### WHAT MUST NOT APPEAR YET
Four boundaries before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep active outline.

### PERSISTENT STATE
Remember region, not cells.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows what information actually matters.

## BEAT 08 — `S05_FOUR`

### ANCHOR / SPOKEN PHRASE
> And one rectangle needs only four boundaries.

### WHAT APPEARS NOW
Prepare four unlabeled edge handles around active rectangle.

### CENTER-STAGE HERO
Four-boundary concept

### CAUSE
The narration reaches `S05_FOUR`.

### EFFECT / MOTION
Introduces compact representation.

### WHAT MUST NOT APPEAR YET
Boundary labels until words.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep handles.

### PERSISTENT STATE
Four scalars sufficient.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Introduces compact representation.

## BEAT 09 — `S05_NAMES`

### ANCHOR / SPOKEN PHRASE
> `top`... `bottom`... `left`... and `right`.

### WHAT APPEARS NOW
Label each edge strictly on its spoken word.

### CENTER-STAGE HERO
top/bottom/left/right

### CAUSE
The narration reaches `S05_NAMES`.

### EFFECT / MOTION
Maps each scalar to geometry.

### WHAT MUST NOT APPEAR YET
O(1) notation.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep labels.

### PERSISTENT STATE
Boundary names locked.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Maps each scalar to geometry.

### SPECIAL CONTRACT
SUBWORD CONTRACT: each label enters only on its exact boundary word.

## BEAT 10 — `S05_REPLACE`

### ANCHOR / SPOKEN PHRASE
> we can replace... an entire visited matrix... with four integers.

### WHAT APPEARS NOW
Visually hand off from many per-cell visited states to four boundary labels; do not show O(1) yet.

### CENTER-STAGE HERO
Visited grid → four integers

### CAUSE
The narration reaches `S05_REPLACE`.

### EFFECT / MOTION
Demonstrates representation compression.

### WHAT MUST NOT APPEAR YET
Complexity result.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Remove visited overlay entirely.

### PERSISTENT STATE
Method2 state = four integers.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Demonstrates representation compression.

## BEAT 11 — `S05_METHOD2`

### ANCHOR / SPOKEN PHRASE
> That gives us Method Two.

### WHAT APPEARS NOW
Reveal Method Two label with active rectangle.

### CENTER-STAGE HERO
Method Two — Shrinking Boundaries

### CAUSE
The narration reaches `S05_METHOD2`.

### EFFECT / MOTION
Names optimal representation.

### WHAT MUST NOT APPEAR YET
Invariant details until Scene06.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
End with fixed master + four boundary concept.

### PERSISTENT STATE
Ready for initial values.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Names optimal representation.

---

# SCENE END-STATE CONTRACT

```text
Method2 four-boundary representation discovered.
```

# IMPLEMENTATION SOURCE LOCK

Before implementation, inspect actual repository APIs for Matrix/Grid wrapper, path tracer/evolving path, output sequence, typed code editor, roadmap, and any generic complexity graph. Reuse/extend kit-level primitives; never invent props or build a scene-local generic substitute.
