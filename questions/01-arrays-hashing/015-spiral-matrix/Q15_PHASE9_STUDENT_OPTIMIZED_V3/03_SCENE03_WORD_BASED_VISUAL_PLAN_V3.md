# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 03 — Method 1 Full Trace
## WORD-BASED VISUAL PLAN — STUDENT-OPTIMIZED SCRIPT · NO GUESSED TIME · KIT-FIRST

**Scene purpose:** Execute the complete Method1 trace on the verified 5×6 master with every meaningful state transition visible.

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

**IN:** Scene02 leaves an untouched 5×6 master, empty answer track, and Method1 rule/state understood.

**OUT:** Method1 trace complete; code handoff ready.

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
| `S03_START` | We start at the top-left cell | Current cell at (0,0) |
| `S03_ONE` | value one. | Value 1 current |
| `S03_DIR_RIGHT` | Our current direction is... right. | RIGHT direction |
| `S03_TOP_SPAN` | We move across the complete top row... from one... through six. | Top-row traversal 1→6 |
| `S03_AT6_OUT` | At six... the next position to the right... is outside the matrix. | 6 → outside query |
| `S03_TURN_DOWN` | So we turn clockwise... from right... to down. | RIGHT → DOWN |
| `S03_RIGHT_SPAN` | Now we move down the complete right edge... from twelve... through thirty. | Right-edge traversal 12→30 |
| `S03_AT30_OUT` | At thirty... the next downward position... is outside the matrix. | 30 → outside query |
| `S03_TURN_LEFT` | So we turn... from down... to left. | DOWN → LEFT |
| `S03_BOTTOM_SPAN` | Now we move across the bottom edge... from twenty-nine... through twenty-five. | Bottom traversal 29→25 |
| `S03_AT25_OUT` | At twenty-five... the next position to the left... is outside the matrix. | 25 → outside query |
| `S03_TURN_UP` | So we turn... from left... to up. | LEFT → UP |
| `S03_LEFT_TO7` | Now we move upward along the left edge... until we reach seven. | Left-edge traversal 19→13→7 |
| `S03_DIFFERENT` | something different happens. | 7 as diagnostic current |
| `S03_7_INSIDE` | The cell above seven... is still inside the matrix. | 7 → 1 in-bounds query |
| `S03_1_VISITED` | But it contains one... and one was already visited. | Visited cell 1 |
| `S03_NOT_BORDER` | we are not turning because of the border. | Border cause rejected |
| `S03_VISITED_CAUSE` | We are turning because the next cell... is already visited. | Visited cause |
| `S03_TURN_RIGHT` | We turn clockwise... from up... to right. | UP → RIGHT |
| `S03_INNER_POINT` | that lets us enter the inner spiral. | Inner region entry |
| `S03_INNER_TOP` | Now we move right... from eight... through eleven. | Inner top 8→11 |
| `S03_11_VIS` | At eleven... the next cell is twelve. Twelve is already visited. | 11 → visited 12 |
| `S03_TURN_DOWN2` | So we turn... from right... to down. | RIGHT → DOWN |
| `S03_INNER_RIGHT` | Now we move down... until twenty-three. | Inner right 17→23 |
| `S03_23_VIS` | At twenty-three... the next cell below is twenty-nine. Twenty-nine is already visited. | 23 → visited 29 |
| `S03_TURN_LEFT2` | So we turn... from down... to left. | DOWN → LEFT |
| `S03_INNER_BOTTOM` | Now we move left... until twenty. | Inner bottom 22→21→20 |
| `S03_20_VIS` | At twenty... the next cell is nineteen. Nineteen is already visited. | 20 → visited19 |
| `S03_TURN_UP2` | So we turn... from left... to up. | LEFT → UP |
| `S03_REACH14` | Moving upward... we reach fourteen. | Current 14 |
| `S03_14_VIS` | The cell above fourteen... is eight. Eight was already visited. | 14 → visited8 |
| `S03_TURN_RIGHT2` | So we turn... from up... to right. | UP → RIGHT |
| `S03_FINAL_TWO` | Now only the final two cells remain... fifteen... and sixteen. | 15 → 16 final traversal |
| `S03_ANSWER30` | the answer contains exactly... thirty values. | Answer count = 30 |
| `S03_MATRIX30` | five times six... which is also thirty cells. | 5 × 6 = 30 |
| `S03_STOP` | So every cell has been visited exactly once... and we stop. | Completed matrix + stop |
| `S03_LOGIC` | So Method One always follows the same logic... process the current cell... inspect the next position... and turn when that next position is... outside... or already visited. | Method1 execution strip |
| `S03_CODE_HANDOFF` | Now let’s map this exact trace into code. | Trace → Code handoff |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S03_START`

### ANCHOR / SPOKEN PHRASE
> We start at the top-left cell

### WHAT APPEARS NOW
Bring untouched 5×6 master, empty answer track, current outline at top-left.

### CENTER-STAGE HERO
Current cell at (0,0)

### CAUSE
The narration reaches `S03_START`.

### EFFECT / MOTION
Starts exact Method1 execution.

### WHAT MUST NOT APPEAR YET
Visited history elsewhere.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
current=(0,0).

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Starts exact Method1 execution.

## BEAT 02 — `S03_ONE`

### ANCHOR / SPOKEN PHRASE
> value one.

### WHAT APPEARS NOW
Focus value 1 as the initial current cell only. Do not append or mark visited yet; processing begins with the top-row traversal beat.

### CENTER-STAGE HERO
Value 1 current

### CAUSE
The narration reaches `S03_ONE`.

### EFFECT / MOTION
Locks the start state without performing the first operation early.

### WHAT MUST NOT APPEAR YET
Visited/output update before the traversal span begins.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Current remains 1 until direction/movement.

### PERSISTENT STATE
current=1, answer empty, visited empty.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Locks the start state without performing the first operation early.

## BEAT 03 — `S03_DIR_RIGHT`

### ANCHOR / SPOKEN PHRASE
> Our current direction is... right.

### WHAT APPEARS NOW
Reveal right direction cue.

### CENTER-STAGE HERO
RIGHT direction

### CAUSE
The narration reaches `S03_DIR_RIGHT`.

### EFFECT / MOTION
Sets movement vector.

### WHAT MUST NOT APPEAR YET
Down direction.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep compact.

### PERSISTENT STATE
direction=RIGHT.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Sets movement vector.

## BEAT 04 — `S03_TOP_SPAN`

### ANCHOR / SPOKEN PHRASE
> We move across the complete top row... from one... through six.

### WHAT APPEARS NOW
Execute 1→2→3→4→5→6 with current/path/output/visited updates in order.

### CENTER-STAGE HERO
Top-row traversal 1→6

### CAUSE
The narration reaches `S03_TOP_SPAN`.

### EFFECT / MOTION
Completes top edge of Method1 trace.

### WHAT MUST NOT APPEAR YET
Outside query before six is reached.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle current at 6.

### PERSISTENT STATE
top row visited; answer ends 6.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Completes top edge of Method1 trace.

### SPECIAL CONTRACT
COMPRESSED TRACE SPAN CONTRACT: all cells in the named segment are visited in exact order. Start endpoint appears on its spoken value; final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are derived deterministically from the resolved word/pause window after final audio. Each visited cell appends a representation copy to the answer track, then recedes to visited/history; source cells never move.

## BEAT 05 — `S03_AT6_OUT`

### ANCHOR / SPOKEN PHRASE
> At six... the next position to the right... is outside the matrix.

### WHAT APPEARS NOW
Keep current at 6; draw cyan query beyond right edge, then invalid warn/X exactly on outside phrase.

### CENTER-STAGE HERO
6 → outside query

### CAUSE
The narration reaches `S03_AT6_OUT`.

### EFFECT / MOTION
Shows border turn cause.

### WHAT MUST NOT APPEAR YET
Direction turn before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep query until turn phrase.

### PERSISTENT STATE
current=6, next invalid.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows border turn cause.

## BEAT 06 — `S03_TURN_DOWN`

### ANCHOR / SPOKEN PHRASE
> So we turn clockwise... from right... to down.

### WHAT APPEARS NOW
Rotate direction cue only; current does not move during turn.

### CENTER-STAGE HERO
RIGHT → DOWN

### CAUSE
The narration reaches `S03_TURN_DOWN`.

### EFFECT / MOTION
Cause→effect border turn.

### WHAT MUST NOT APPEAR YET
Cell12 current before next movement beat.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Remove invalid ghost after turn.

### PERSISTENT STATE
direction=DOWN.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Cause→effect border turn.

## BEAT 07 — `S03_RIGHT_SPAN`

### ANCHOR / SPOKEN PHRASE
> Now we move down the complete right edge... from twelve... through thirty.

### WHAT APPEARS NOW
Execute 12→18→24→30, appending/visiting each.

### CENTER-STAGE HERO
Right-edge traversal 12→30

### CAUSE
The narration reaches `S03_RIGHT_SPAN`.

### EFFECT / MOTION
Consumes next trace segment.

### WHAT MUST NOT APPEAR YET
Downward outside query before 30.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle at 30.

### PERSISTENT STATE
right edge visited; answer ends 30.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Consumes next trace segment.

### SPECIAL CONTRACT
COMPRESSED TRACE SPAN CONTRACT: all cells in the named segment are visited in exact order. Start endpoint appears on its spoken value; final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are derived deterministically from the resolved word/pause window after final audio. Each visited cell appends a representation copy to the answer track, then recedes to visited/history; source cells never move.

## BEAT 08 — `S03_AT30_OUT`

### ANCHOR / SPOKEN PHRASE
> At thirty... the next downward position... is outside the matrix.

### WHAT APPEARS NOW
Query below row 4 and mark invalid.

### CENTER-STAGE HERO
30 → outside query

### CAUSE
The narration reaches `S03_AT30_OUT`.

### EFFECT / MOTION
Shows second border turn cause.

### WHAT MUST NOT APPEAR YET
Left turn.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Hold until turn.

### PERSISTENT STATE
current=30, next invalid.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows second border turn cause.

## BEAT 09 — `S03_TURN_LEFT`

### ANCHOR / SPOKEN PHRASE
> So we turn... from down... to left.

### WHAT APPEARS NOW
Rotate direction cue down→left; current stays 30.

### CENTER-STAGE HERO
DOWN → LEFT

### CAUSE
The narration reaches `S03_TURN_LEFT`.

### EFFECT / MOTION
Direction change.

### WHAT MUST NOT APPEAR YET
29 traversal before next beat.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear invalid ghost after turn.

### PERSISTENT STATE
direction=LEFT.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Direction change.

## BEAT 10 — `S03_BOTTOM_SPAN`

### ANCHOR / SPOKEN PHRASE
> Now we move across the bottom edge... from twenty-nine... through twenty-five.

### WHAT APPEARS NOW
Execute 29→28→27→26→25 with output/visited updates.

### CENTER-STAGE HERO
Bottom traversal 29→25

### CAUSE
The narration reaches `S03_BOTTOM_SPAN`.

### EFFECT / MOTION
Consumes bottom edge.

### WHAT MUST NOT APPEAR YET
Outside-left query before 25.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle at 25.

### PERSISTENT STATE
bottom visited; answer ends 25.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Consumes bottom edge.

### SPECIAL CONTRACT
COMPRESSED TRACE SPAN CONTRACT: all cells in the named segment are visited in exact order. Start endpoint appears on its spoken value; final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are derived deterministically from the resolved word/pause window after final audio. Each visited cell appends a representation copy to the answer track, then recedes to visited/history; source cells never move.

## BEAT 11 — `S03_AT25_OUT`

### ANCHOR / SPOKEN PHRASE
> At twenty-five... the next position to the left... is outside the matrix.

### WHAT APPEARS NOW
Query left of column 0 and mark invalid.

### CENTER-STAGE HERO
25 → outside query

### CAUSE
The narration reaches `S03_AT25_OUT`.

### EFFECT / MOTION
Shows third border turn.

### WHAT MUST NOT APPEAR YET
Up turn.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Hold.

### PERSISTENT STATE
current=25, next invalid.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows third border turn.

## BEAT 12 — `S03_TURN_UP`

### ANCHOR / SPOKEN PHRASE
> So we turn... from left... to up.

### WHAT APPEARS NOW
Rotate left→up.

### CENTER-STAGE HERO
LEFT → UP

### CAUSE
The narration reaches `S03_TURN_UP`.

### EFFECT / MOTION
Direction change.

### WHAT MUST NOT APPEAR YET
19 movement before next beat.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear invalid ghost.

### PERSISTENT STATE
direction=UP.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Direction change.

## BEAT 13 — `S03_LEFT_TO7`

### ANCHOR / SPOKEN PHRASE
> Now we move upward along the left edge... until we reach seven.

### WHAT APPEARS NOW
Execute 19→13→7 in order with output/visited updates.

### CENTER-STAGE HERO
Left-edge traversal 19→13→7

### CAUSE
The narration reaches `S03_LEFT_TO7`.

### EFFECT / MOTION
Completes outer layer while preserving fixed cells.

### WHAT MUST NOT APPEAR YET
Query above 7 before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle at 7.

### PERSISTENT STATE
outer perimeter visited; answer ends 7.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Completes outer layer while preserving fixed cells.

### SPECIAL CONTRACT
COMPRESSED TRACE SPAN CONTRACT: all cells in the named segment are visited in exact order. Start endpoint appears on its spoken value; final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are derived deterministically from the resolved word/pause window after final audio. Each visited cell appends a representation copy to the answer track, then recedes to visited/history; source cells never move.

## BEAT 14 — `S03_DIFFERENT`

### ANCHOR / SPOKEN PHRASE
> something different happens.

### WHAT APPEARS NOW
Reduce unrelated path glow; keep current 7 and visited cell1 visible.

### CENTER-STAGE HERO
7 as diagnostic current

### CAUSE
The narration reaches `S03_DIFFERENT`.

### EFFECT / MOTION
Signals a new type of turn cause.

### WHAT MUST NOT APPEAR YET
Verdict before next phrases.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep focused pair 7/1.

### PERSISTENT STATE
current=7.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Signals a new type of turn cause.

## BEAT 15 — `S03_7_INSIDE`

### ANCHOR / SPOKEN PHRASE
> The cell above seven... is still inside the matrix.

### WHAT APPEARS NOW
Draw cyan query from 7 to 1; no outside warning.

### CENTER-STAGE HERO
7 → 1 in-bounds query

### CAUSE
The narration reaches `S03_7_INSIDE`.

### EFFECT / MOTION
Proves geometry is valid.

### WHAT MUST NOT APPEAR YET
Visited verdict until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep relation.

### PERSISTENT STATE
next=1, in bounds.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Proves geometry is valid.

## BEAT 16 — `S03_1_VISITED`

### ANCHOR / SPOKEN PHRASE
> But it contains one... and one was already visited.

### WHAT APPEARS NOW
Emphasize cell1 history state while query remains.

### CENTER-STAGE HERO
Visited cell 1

### CAUSE
The narration reaches `S03_1_VISITED`.

### EFFECT / MOTION
Shows visited collision.

### WHAT MUST NOT APPEAR YET
Turn reason conclusion before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Hold.

### PERSISTENT STATE
next already visited.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows visited collision.

## BEAT 17 — `S03_NOT_BORDER`

### ANCHOR / SPOKEN PHRASE
> we are not turning because of the border.

### WHAT APPEARS NOW
Briefly show outside/X cue crossed out; grid boundary is not the problem.

### CENTER-STAGE HERO
Border cause rejected

### CAUSE
The narration reaches `S03_NOT_BORDER`.

### EFFECT / MOTION
Contrasts causes.

### WHAT MUST NOT APPEAR YET
Visited-cause emphasis.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Remove border cue.

### PERSISTENT STATE
Cause ≠ border.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Contrasts causes.

## BEAT 18 — `S03_VISITED_CAUSE`

### ANCHOR / SPOKEN PHRASE
> We are turning because the next cell... is already visited.

### WHAT APPEARS NOW
Center the 7→1 relation and VISITED status.

### CENTER-STAGE HERO
Visited cause

### CAUSE
The narration reaches `S03_VISITED_CAUSE`.

### EFFECT / MOTION
Locks Method1 second condition from real trace.

### WHAT MUST NOT APPEAR YET
Direction change.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Hold until turn.

### PERSISTENT STATE
Cause = visited.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Locks Method1 second condition from real trace.

## BEAT 19 — `S03_TURN_RIGHT`

### ANCHOR / SPOKEN PHRASE
> We turn clockwise... from up... to right.

### WHAT APPEARS NOW
Rotate direction cue only.

### CENTER-STAGE HERO
UP → RIGHT

### CAUSE
The narration reaches `S03_TURN_RIGHT`.

### EFFECT / MOTION
Enters inner spiral legally.

### WHAT MUST NOT APPEAR YET
Cell8 current before next span.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep outer history dim.

### PERSISTENT STATE
direction=RIGHT.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Enters inner spiral legally.

## BEAT 20 — `S03_INNER_POINT`

### ANCHOR / SPOKEN PHRASE
> that lets us enter the inner spiral.

### WHAT APPEARS NOW
Shift attention from dim outer perimeter to untouched inner rectangle; do not introduce Method2 boundaries.

### CENTER-STAGE HERO
Inner region entry

### CAUSE
The narration reaches `S03_INNER_POINT`.

### EFFECT / MOTION
Shows why visited rule matters.

### WHAT MUST NOT APPEAR YET
Boundary labels.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep matrix and answer track.

### PERSISTENT STATE
Inner work remains.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Shows why visited rule matters.

## BEAT 21 — `S03_INNER_TOP`

### ANCHOR / SPOKEN PHRASE
> Now we move right... from eight... through eleven.

### WHAT APPEARS NOW
Execute 8→9→10→11 with output/visited updates.

### CENTER-STAGE HERO
Inner top 8→11

### CAUSE
The narration reaches `S03_INNER_TOP`.

### EFFECT / MOTION
Continues exact simulation.

### WHAT MUST NOT APPEAR YET
Query to12 before endpoint.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle at11.

### PERSISTENT STATE
answer ends11.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Continues exact simulation.

### SPECIAL CONTRACT
COMPRESSED TRACE SPAN CONTRACT: all cells in the named segment are visited in exact order. Start endpoint appears on its spoken value; final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are derived deterministically from the resolved word/pause window after final audio. Each visited cell appends a representation copy to the answer track, then recedes to visited/history; source cells never move.

## BEAT 22 — `S03_11_VIS`

### ANCHOR / SPOKEN PHRASE
> At eleven... the next cell is twelve. Twelve is already visited.

### WHAT APPEARS NOW
Query 11→12 and emphasize visited state.

### CENTER-STAGE HERO
11 → visited 12

### CAUSE
The narration reaches `S03_11_VIS`.

### EFFECT / MOTION
Triggers turn.

### WHAT MUST NOT APPEAR YET
Down direction before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Hold.

### PERSISTENT STATE
next=12 visited.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Triggers turn.

## BEAT 23 — `S03_TURN_DOWN2`

### ANCHOR / SPOKEN PHRASE
> So we turn... from right... to down.

### WHAT APPEARS NOW
Rotate direction.

### CENTER-STAGE HERO
RIGHT → DOWN

### CAUSE
The narration reaches `S03_TURN_DOWN2`.

### EFFECT / MOTION
Continues cycle.

### WHAT MUST NOT APPEAR YET
17 movement.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear query.

### PERSISTENT STATE
direction=DOWN.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Continues cycle.

## BEAT 24 — `S03_INNER_RIGHT`

### ANCHOR / SPOKEN PHRASE
> Now we move down... until twenty-three.

### WHAT APPEARS NOW
Execute 17→23 in order.

### CENTER-STAGE HERO
Inner right 17→23

### CAUSE
The narration reaches `S03_INNER_RIGHT`.

### EFFECT / MOTION
Consumes inner right edge.

### WHAT MUST NOT APPEAR YET
Query to29 before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle 23.

### PERSISTENT STATE
answer ends23.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Consumes inner right edge.

### SPECIAL CONTRACT
COMPRESSED TRACE SPAN CONTRACT: all cells in the named segment are visited in exact order. Start endpoint appears on its spoken value; final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are derived deterministically from the resolved word/pause window after final audio. Each visited cell appends a representation copy to the answer track, then recedes to visited/history; source cells never move.

## BEAT 25 — `S03_23_VIS`

### ANCHOR / SPOKEN PHRASE
> At twenty-three... the next cell below is twenty-nine. Twenty-nine is already visited.

### WHAT APPEARS NOW
Query to29 and show history.

### CENTER-STAGE HERO
23 → visited 29

### CAUSE
The narration reaches `S03_23_VIS`.

### EFFECT / MOTION
Turn cause.

### WHAT MUST NOT APPEAR YET
Left direction.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Hold.

### PERSISTENT STATE
next=29 visited.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Turn cause.

## BEAT 26 — `S03_TURN_LEFT2`

### ANCHOR / SPOKEN PHRASE
> So we turn... from down... to left.

### WHAT APPEARS NOW
Rotate direction.

### CENTER-STAGE HERO
DOWN → LEFT

### CAUSE
The narration reaches `S03_TURN_LEFT2`.

### EFFECT / MOTION
Continues cycle.

### WHAT MUST NOT APPEAR YET
22 movement.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear query.

### PERSISTENT STATE
direction=LEFT.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Continues cycle.

## BEAT 27 — `S03_INNER_BOTTOM`

### ANCHOR / SPOKEN PHRASE
> Now we move left... until twenty.

### WHAT APPEARS NOW
Execute cells in order.

### CENTER-STAGE HERO
Inner bottom 22→21→20

### CAUSE
The narration reaches `S03_INNER_BOTTOM`.

### EFFECT / MOTION
Consumes inner bottom.

### WHAT MUST NOT APPEAR YET
Query to19 before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle20.

### PERSISTENT STATE
answer ends20.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Consumes inner bottom.

### SPECIAL CONTRACT
COMPRESSED TRACE SPAN CONTRACT: all cells in the named segment are visited in exact order. Start endpoint appears on its spoken value; final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are derived deterministically from the resolved word/pause window after final audio. Each visited cell appends a representation copy to the answer track, then recedes to visited/history; source cells never move.

## BEAT 28 — `S03_20_VIS`

### ANCHOR / SPOKEN PHRASE
> At twenty... the next cell is nineteen. Nineteen is already visited.

### WHAT APPEARS NOW
Query left to19, show visited.

### CENTER-STAGE HERO
20 → visited19

### CAUSE
The narration reaches `S03_20_VIS`.

### EFFECT / MOTION
Turn cause.

### WHAT MUST NOT APPEAR YET
Up direction.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Hold.

### PERSISTENT STATE
next19 visited.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Turn cause.

## BEAT 29 — `S03_TURN_UP2`

### ANCHOR / SPOKEN PHRASE
> So we turn... from left... to up.

### WHAT APPEARS NOW
Rotate.

### CENTER-STAGE HERO
LEFT → UP

### CAUSE
The narration reaches `S03_TURN_UP2`.

### EFFECT / MOTION
Continues cycle.

### WHAT MUST NOT APPEAR YET
14 movement.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear query.

### PERSISTENT STATE
direction=UP.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Continues cycle.

## BEAT 30 — `S03_REACH14`

### ANCHOR / SPOKEN PHRASE
> Moving upward... we reach fourteen.

### WHAT APPEARS NOW
Move 20→14, append/visit 14.

### CENTER-STAGE HERO
Current 14

### CAUSE
The narration reaches `S03_REACH14`.

### EFFECT / MOTION
Reaches last turn before center row.

### WHAT MUST NOT APPEAR YET
Query above before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle14.

### PERSISTENT STATE
answer ends14.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Reaches last turn before center row.

### SPECIAL CONTRACT
COMPRESSED TRACE SPAN CONTRACT: all cells in the named segment are visited in exact order. Start endpoint appears on its spoken value; final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are derived deterministically from the resolved word/pause window after final audio. Each visited cell appends a representation copy to the answer track, then recedes to visited/history; source cells never move.

## BEAT 31 — `S03_14_VIS`

### ANCHOR / SPOKEN PHRASE
> The cell above fourteen... is eight. Eight was already visited.

### WHAT APPEARS NOW
Query 14→8 and emphasize visited.

### CENTER-STAGE HERO
14 → visited8

### CAUSE
The narration reaches `S03_14_VIS`.

### EFFECT / MOTION
Final visited turn cause.

### WHAT MUST NOT APPEAR YET
Right turn.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Hold.

### PERSISTENT STATE
next8 visited.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Final visited turn cause.

## BEAT 32 — `S03_TURN_RIGHT2`

### ANCHOR / SPOKEN PHRASE
> So we turn... from up... to right.

### WHAT APPEARS NOW
Rotate.

### CENTER-STAGE HERO
UP → RIGHT

### CAUSE
The narration reaches `S03_TURN_RIGHT2`.

### EFFECT / MOTION
Positions for final cells.

### WHAT MUST NOT APPEAR YET
15/16 before final span.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear query.

### PERSISTENT STATE
direction=RIGHT.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Positions for final cells.

## BEAT 33 — `S03_FINAL_TWO`

### ANCHOR / SPOKEN PHRASE
> Now only the final two cells remain... fifteen... and sixteen.

### WHAT APPEARS NOW
Reveal only untouched cells 15/16 as remaining; append 15 on `fifteen`, 16 only on `sixteen`.

### CENTER-STAGE HERO
15 → 16 final traversal

### CAUSE
The narration reaches `S03_FINAL_TWO`.

### EFFECT / MOTION
Completes all matrix cells.

### WHAT MUST NOT APPEAR YET
30-count before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle at16; all cells visited.

### PERSISTENT STATE
answer complete 30.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Completes all matrix cells.

### SPECIAL CONTRACT
Endpoint lock: 16 must not append before the spoken word `sixteen`.

## BEAT 34 — `S03_ANSWER30`

### ANCHOR / SPOKEN PHRASE
> the answer contains exactly... thirty values.

### WHAT APPEARS NOW
Bring answer-count 30 to center while matrix recedes slightly.

### CENTER-STAGE HERO
Answer count = 30

### CAUSE
The narration reaches `S03_ANSWER30`.

### EFFECT / MOTION
Confirms collected count.

### WHAT MUST NOT APPEAR YET
5×6 equality until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep count.

### PERSISTENT STATE
len(answer)=30.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Confirms collected count.

## BEAT 35 — `S03_MATRIX30`

### ANCHOR / SPOKEN PHRASE
> five times six... which is also thirty cells.

### WHAT APPEARS NOW
Show 5×6→30 as direct support.

### CENTER-STAGE HERO
5 × 6 = 30

### CAUSE
The narration reaches `S03_MATRIX30`.

### EFFECT / MOTION
Matches answer count to total cells.

### WHAT MUST NOT APPEAR YET
Stop verdict.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep equality.

### PERSISTENT STATE
total cells=30.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Matches answer count to total cells.

## BEAT 36 — `S03_STOP`

### ANCHOR / SPOKEN PHRASE
> So every cell has been visited exactly once... and we stop.

### WHAT APPEARS NOW
Apply completed/visited state to all cells and a single STOP/COMPLETE cue.

### CENTER-STAGE HERO
Completed matrix + stop

### CAUSE
The narration reaches `S03_STOP`.

### EFFECT / MOTION
Proves termination.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Remove traversal query/direction after hold.

### PERSISTENT STATE
Method1 trace complete.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Proves termination.

## BEAT 37 — `S03_LOGIC`

### ANCHOR / SPOKEN PHRASE
> So Method One always follows the same logic... process the current cell... inspect the next position... and turn when that next position is... outside... or already visited.

### WHAT APPEARS NOW
Collapse trace into a compact semantic strip: PROCESS CURRENT → QUERY NEXT → OUTSIDE/VISITED? → TURN IF NEEDED → MOVE. Reveal only clauses as spoken.

### CENTER-STAGE HERO
Method1 execution strip

### CAUSE
The narration reaches `S03_LOGIC`.

### EFFECT / MOTION
Abstracts trace without new information.

### WHAT MUST NOT APPEAR YET
Code lines.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep strip for handoff.

### PERSISTENT STATE
Method1 algorithm identity.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Abstracts trace without new information.

## BEAT 38 — `S03_CODE_HANDOFF`

### ANCHOR / SPOKEN PHRASE
> Now let’s map this exact trace into code.

### WHAT APPEARS NOW
Move compact Method1 strip toward code focus zone; matrix recedes.

### CENTER-STAGE HERO
Trace → Code handoff

### CAUSE
The narration reaches `S03_CODE_HANDOFF`.

### EFFECT / MOTION
Preserves semantic continuity into Scene04.

### WHAT MUST NOT APPEAR YET
Method2.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
End on strip + clean code area.

### PERSISTENT STATE
Ready for Method1 code.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Preserves semantic continuity into Scene04.

---

# SCENE END-STATE CONTRACT

```text
Method1 trace complete; code handoff ready.
```

# IMPLEMENTATION SOURCE LOCK

Before implementation, inspect actual repository APIs for Matrix/Grid wrapper, path tracer/evolving path, output sequence, typed code editor, roadmap, and any generic complexity graph. Reuse/extend kit-level primitives; never invent props or build a scene-local generic substitute.
