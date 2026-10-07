# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 02 — Understand the Question + Method 1 Idea
## WORD-BASED VISUAL PLAN — STUDENT-OPTIMIZED SCRIPT · NO GUESSED TIME · KIT-FIRST

**Scene purpose:** Define rectangular input/output and derive Method1 turn rule/state without performing the full trace.

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

**IN:** Scene01 leaves Q15 active with unresolved `SPIRAL ORDER`.

**OUT:** Method1 rule/state understood; master reset for trace.

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
| `S02_MN` | We are given an `m` by `n` matrix. | Rectangular matrix geometry |
| `S02_M_ROWS` | `m` is the number of rows | Row dimension m |
| `S02_N_COLS` | `n` is the number of columns. | Column dimension n |
| `S02_RECT` | So the matrix does not have to be square. | Rectangular shape |
| `S02_MASTER` | we will use this five by six matrix. | Verified 5×6 master |
| `S02_OUTPUT_CONTRACT` | Our job is to return all... `m × n` values... in one list... following spiral order. | Input → empty answer list contract |
| `S02_DIR_SEQUENCE` | That order moves... right... down... left... up... and then repeats. | Direction cycle |
| `S02_TURN_Q` | when should we turn? | WHEN SHOULD WE TURN? |
| `S02_MOVING_RIGHT` | Suppose we are moving right. | Current + right direction |
| `S02_OUTSIDE` | If the next position goes outside the matrix | Outside-next relation |
| `S02_TURN_OUT` | we obviously need to turn. | Clockwise turn |
| `S02_OUTER_DONE` | But after completing the outer part | Processed outer perimeter concept |
| `S02_INSIDE` | the next position may still be inside the matrix | In-bounds query |
| `S02_ALREADY_VISITED` | and already visited. | Visited next cell |
| `S02_METHOD1_RULE` | Turn when the next position is... outside the matrix... or already visited. | OUTSIDE OR VISITED rule |
| `S02_STATE` | we keep the current position... the current direction... and a visited matrix. | Method1 state trio |
| `S02_TRACE` | Now let’s trace it properly. | Clean master ready for trace |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S02_MN`

### ANCHOR / SPOKEN PHRASE
> We are given an `m` by `n` matrix.

### WHAT APPEARS NOW
Show one abstract rectangular grid at center with row/column braces, labels still generic.

### CENTER-STAGE HERO
Rectangular matrix geometry

### CAUSE
The narration reaches `S02_MN`.

### EFFECT / MOTION
Establish a continuous 2-D coordinate system.

### WHAT MUST NOT APPEAR YET
5×6 values, directions, visited state.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep rectangle.

### PERSISTENT STATE
Input is m by n.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Establish a continuous 2-D coordinate system.

## BEAT 02 — `S02_M_ROWS`

### ANCHOR / SPOKEN PHRASE
> `m` is the number of rows

### WHAT APPEARS NOW
Highlight the vertical row brace and label it `m`.

### CENTER-STAGE HERO
Row dimension m

### CAUSE
The narration reaches `S02_M_ROWS`.

### EFFECT / MOTION
Connect m to row count.

### WHAT MUST NOT APPEAR YET
n label until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep m label quiet.

### PERSISTENT STATE
m = rows.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Connect m to row count.

## BEAT 03 — `S02_N_COLS`

### ANCHOR / SPOKEN PHRASE
> `n` is the number of columns.

### WHAT APPEARS NOW
Highlight horizontal column brace and label it `n`.

### CENTER-STAGE HERO
Column dimension n

### CAUSE
The narration reaches `S02_N_COLS`.

### EFFECT / MOTION
Connect n to column count.

### WHAT MUST NOT APPEAR YET
Master values.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep both dimensions.

### PERSISTENT STATE
n = columns.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Connect n to column count.

## BEAT 04 — `S02_RECT`

### ANCHOR / SPOKEN PHRASE
> So the matrix does not have to be square.

### WHAT APPEARS NOW
Emphasize unequal side lengths; if a square assumption cue exists, reject it with warn + X.

### CENTER-STAGE HERO
Rectangular shape

### CAUSE
The narration reaches `S02_RECT`.

### EFFECT / MOTION
Prevents Q14 square-matrix carryover.

### WHAT MUST NOT APPEAR YET
Traversal state.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Remove rejection cue; keep rectangle.

### PERSISTENT STATE
Rectangular allowed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prevents Q14 square-matrix carryover.

## BEAT 05 — `S02_MASTER`

### ANCHOR / SPOKEN PHRASE
> we will use this five by six matrix.

### WHAT APPEARS NOW
Replace abstract shell with fixed 5×6 grid and reveal values 1..30 row-major in one authorized reveal.

### CENTER-STAGE HERO
Verified 5×6 master

### CAUSE
The narration reaches `S02_MASTER`.

### EFFECT / MOTION
Locks the single master testcase; cells and values stay fixed.

### WHAT MUST NOT APPEAR YET
Traversal path, visited marks, result values.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep master centered.

### PERSISTENT STATE
Master = 5 rows × 6 columns.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Locks the single master testcase; cells and values stay fixed.

## BEAT 06 — `S02_OUTPUT_CONTRACT`

### ANCHOR / SPOKEN PHRASE
> Our job is to return all... `m × n` values... in one list... following spiral order.

### WHAT APPEARS NOW
Bring an empty answer track as one support object; label total target `m × n` without revealing values.

### CENTER-STAGE HERO
Input → empty answer list contract

### CAUSE
The narration reaches `S02_OUTPUT_CONTRACT`.

### EFFECT / MOTION
Defines output shape without spoiling order.

### WHAT MUST NOT APPEAR YET
Final output sequence.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep answer track small/supporting.

### PERSISTENT STATE
Need all m×n values in spiral order.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Defines output shape without spoiling order.

## BEAT 07 — `S02_DIR_SEQUENCE`

### ANCHOR / SPOKEN PHRASE
> That order moves... right... down... left... up... and then repeats.

### WHAT APPEARS NOW
Reveal RIGHT, then DOWN, then LEFT, then UP strictly on those word timestamps inside this resolved anchor span; only after `repeats` connect them as a cycle.

### CENTER-STAGE HERO
Direction cycle

### CAUSE
The narration reaches `S02_DIR_SEQUENCE`.

### EFFECT / MOTION
Teaches clockwise direction order.

### WHAT MUST NOT APPEAR YET
Turn conditions before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Reduce direction cycle to a small compass support.

### PERSISTENT STATE
Direction order = R→D→L→U→repeat.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Teaches clockwise direction order.

### SPECIAL CONTRACT
SUBWORD CONTRACT: resolve exact words RIGHT/DOWN/LEFT/UP from final sync inside this phrase span; never reveal the next direction early.

## BEAT 08 — `S02_TURN_Q`

### ANCHOR / SPOKEN PHRASE
> when should we turn?

### WHAT APPEARS NOW
Bring the question to center; matrix remains direct support.

### CENTER-STAGE HERO
WHEN SHOULD WE TURN?

### CAUSE
The narration reaches `S02_TURN_Q`.

### EFFECT / MOTION
Makes turn logic the current problem.

### WHAT MUST NOT APPEAR YET
Answer rule.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep question through two causes.

### PERSISTENT STATE
Turn condition unresolved.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Makes turn logic the current problem.

## BEAT 09 — `S02_MOVING_RIGHT`

### ANCHOR / SPOKEN PHRASE
> Suppose we are moving right.

### WHAT APPEARS NOW
Place current at a late top-row cell and show a right query relation; this is a conceptual demo, not full trace.

### CENTER-STAGE HERO
Current + right direction

### CAUSE
The narration reaches `S02_MOVING_RIGHT`.

### EFFECT / MOTION
Establishes a next-position query.

### WHAT MUST NOT APPEAR YET
Outside status until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep current/query.

### PERSISTENT STATE
Moving right.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Establishes a next-position query.

## BEAT 10 — `S02_OUTSIDE`

### ANCHOR / SPOKEN PHRASE
> If the next position goes outside the matrix

### WHAT APPEARS NOW
Extend query one position beyond the right boundary; mark invalid with warn + X.

### CENTER-STAGE HERO
Outside-next relation

### CAUSE
The narration reaches `S02_OUTSIDE`.

### EFFECT / MOTION
Shows first turn cause.

### WHAT MUST NOT APPEAR YET
Clockwise turn until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep invalid relation for cause→effect.

### PERSISTENT STATE
Next = outside.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows first turn cause.

## BEAT 11 — `S02_TURN_OUT`

### ANCHOR / SPOKEN PHRASE
> we obviously need to turn.

### WHAT APPEARS NOW
Rotate only the direction cue from right to down; current cell stays fixed.

### CENTER-STAGE HERO
Clockwise turn

### CAUSE
The narration reaches `S02_TURN_OUT`.

### EFFECT / MOTION
Cause outside → effect turn.

### WHAT MUST NOT APPEAR YET
Visited cause.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear outside ghost after turn.

### PERSISTENT STATE
Border turn established.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Cause outside → effect turn.

## BEAT 12 — `S02_OUTER_DONE`

### ANCHOR / SPOKEN PHRASE
> But after completing the outer part

### WHAT APPEARS NOW
Switch to a hypothetical post-outer-layer state: outer perimeter becomes visited/history dim; inner cells stay normal.

### CENTER-STAGE HERO
Processed outer perimeter concept

### CAUSE
The narration reaches `S02_OUTER_DONE`.

### EFFECT / MOTION
Creates second-turn scenario without teaching boundaries.

### WHAT MUST NOT APPEAR YET
Method2 boundary labels.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep only the relevant left-edge current/query area bright.

### PERSISTENT STATE
Outer layer can already be visited.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Creates second-turn scenario without teaching boundaries.

## BEAT 13 — `S02_INSIDE`

### ANCHOR / SPOKEN PHRASE
> the next position may still be inside the matrix

### WHAT APPEARS NOW
Current sits at 7; query points to 1 above it, clearly inside the grid.

### CENTER-STAGE HERO
In-bounds query

### CAUSE
The narration reaches `S02_INSIDE`.

### EFFECT / MOTION
Separates geometry-valid from traversal-valid.

### WHAT MUST NOT APPEAR YET
Visited verdict until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep relation.

### PERSISTENT STATE
Candidate is in bounds.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Separates geometry-valid from traversal-valid.

## BEAT 14 — `S02_ALREADY_VISITED`

### ANCHOR / SPOKEN PHRASE
> and already visited.

### WHAT APPEARS NOW
Reveal visited/history styling on cell 1 while query remains.

### CENTER-STAGE HERO
Visited next cell

### CAUSE
The narration reaches `S02_ALREADY_VISITED`.

### EFFECT / MOTION
Shows second turn cause.

### WHAT MUST NOT APPEAR YET
Final combined rule until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Hold for rule synthesis.

### PERSISTENT STATE
Next = in-bounds but visited.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows second turn cause.

## BEAT 15 — `S02_METHOD1_RULE`

### ANCHOR / SPOKEN PHRASE
> Turn when the next position is... outside the matrix... or already visited.

### WHAT APPEARS NOW
Bring one concise rule to center; outside and visited examples sit as minimal support.

### CENTER-STAGE HERO
OUTSIDE OR VISITED rule

### CAUSE
The narration reaches `S02_METHOD1_RULE`.

### EFFECT / MOTION
Synthesizes both causes into Method1 decision rule.

### WHAT MUST NOT APPEAR YET
Code, m×n loop, boundaries.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Remove demo states after rule is learned.

### PERSISTENT STATE
Method1 turn rule locked.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Synthesizes both causes into Method1 decision rule.

## BEAT 16 — `S02_STATE`

### ANCHOR / SPOKEN PHRASE
> we keep the current position... the current direction... and a visited matrix.

### WHAT APPEARS NOW
Reveal current position, direction, then visited matrix strictly on their words; do not add output/loop mechanics here.

### CENTER-STAGE HERO
Method1 state trio

### CAUSE
The narration reaches `S02_STATE`.

### EFFECT / MOTION
Defines only state needed for simulation.

### WHAT MUST NOT APPEAR YET
Append/move code order; Method2.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Collapse trio into a compact method identity.

### PERSISTENT STATE
Method1 = position + direction + visited.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Defines only state needed for simulation.

### SPECIAL CONTRACT
SUBWORD CONTRACT: state objects reveal only on position / direction / visited words.

## BEAT 17 — `S02_TRACE`

### ANCHOR / SPOKEN PHRASE
> Now let’s trace it properly.

### WHAT APPEARS NOW
Reset master to untouched 5×6; current at 1 may enter only as Scene03 continuity setup. Empty answer track remains because output contract is already taught.

### CENTER-STAGE HERO
Clean master ready for trace

### CAUSE
The narration reaches `S02_TRACE`.

### EFFECT / MOTION
Prepares full execution without leftover hypothetical marks.

### WHAT MUST NOT APPEAR YET
No future visited path.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
End clean.

### PERSISTENT STATE
Scene03 starts from value 1 moving right.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Prepares full execution without leftover hypothetical marks.

---

# SCENE END-STATE CONTRACT

```text
Method1 rule/state understood; master reset for trace.
```

# IMPLEMENTATION SOURCE LOCK

Before implementation, inspect actual repository APIs for Matrix/Grid wrapper, path tracer/evolving path, output sequence, typed code editor, roadmap, and any generic complexity graph. Reuse/extend kit-level primitives; never invent props or build a scene-local generic substitute.
