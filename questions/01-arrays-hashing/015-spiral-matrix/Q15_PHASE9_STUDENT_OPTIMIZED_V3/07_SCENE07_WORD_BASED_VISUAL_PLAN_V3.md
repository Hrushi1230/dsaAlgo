# Q15 — Spiral Matrix (LeetCode 54)
# Phase 9 V3 · Scene 07 — Method 2 Full Trace
## WORD-BASED VISUAL PLAN — STUDENT-OPTIMIZED SCRIPT · NO GUESSED TIME · KIT-FIRST

**Scene purpose:** Execute the complete shrinking-boundary trace, including the single-row collapse and exact termination.

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

**IN:** Scene06 leaves initial bounds top0,bottom4,left0,right5 and the invariant understood.

**OUT:** Method2 trace complete; boundary code handoff ready.

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
| `S07_INIT` | We begin with... `top = 0`... `bottom = 4`... `left = 0`... `right = 5`. | Initial four boundaries |
| `S07_ACTIVE` | The whole matrix is active. | Full active rectangle |
| `S07_TOP1` | consume the complete top edge... from one... through six. | Round1 top edge 1→6 |
| `S07_TOP_DONE` | That row is finished forever. | Processed top row |
| `S07_TOP_MOVE` | `top` moves from zero... to one. | top 0→1 |
| `S07_ROWS_REMAIN` | Rows still remain... so we continue. | Row-validity check ✓ |
| `S07_RIGHT1` | Now consume the complete right edge... from twelve... through thirty. | Round1 right 12→30 |
| `S07_RIGHT_MOVE` | `right` moves from five... to four. | right 5→4 |
| `S07_COLS_REMAIN` | Columns still remain... so we continue. | Column-validity check ✓ |
| `S07_BOTTOM1` | Now consume the bottom edge... from twenty-nine... through twenty-five... moving right to left. | Round1 bottom 29→25 |
| `S07_BOTTOM_MOVE` | `bottom` moves from four... to three. | bottom 4→3 |
| `S07_ROWS_REMAIN2` | Rows still remain... so we continue. | Row-validity check ✓ |
| `S07_LEFT1` | Now consume the left edge... moving upward... until seven. | Round1 left 19→13→7 |
| `S07_LEFT_MOVE` | `left` moves from zero... to one. | left 0→1 |
| `S07_OUTER_DONE` | The first outer round is complete. | Outer ring processed |
| `S07_REMAIN` | And now look at the remaining work. | Inner active rectangle |
| `S07_SIZE` | The active region has changed... from five by six... to three by four. | 5×6 → 3×4 |
| `S07_CONTINUE` | We do not restart the algorithm. We simply continue... with this smaller rectangle. | Same algorithm, smaller rectangle |
| `S07_TOP2` | Consume the new top edge... from eight... through eleven. | Round2 top 8→11 |
| `S07_TOP_MOVE2` | `top` moves from one... to two. | top1→2 |
| `S07_ROWS_REMAIN3` | Rows still remain. | Row-validity ✓ |
| `S07_RIGHT2` | Consume the new right edge... down to twenty-three. | Round2 right 17→23 |
| `S07_RIGHT_MOVE2` | `right` moves from four... to three. | right4→3 |
| `S07_COLS_REMAIN2` | Columns still remain. | Column-validity ✓ |
| `S07_BOTTOM2` | Now consume the bottom edge... from twenty-two... through twenty... moving right to left. | Round2 bottom 22→20 |
| `S07_BOTTOM_MOVE2` | `bottom` moves from three... to two. | bottom3→2 |
| `S07_ONE_ROW` | Notice... one row still remains. So we are not finished. | Single active row remains |
| `S07_LEFT2` | Now consume the left edge. | Round2 left edge activation |
| `S07_FOURTEEN` | that edge contains only one cell... fourteen. We collect fourteen. | Consume 14 |
| `S07_LEFT_MOVE2` | `left` moves from one... to two. | left1→2 |
| `S07_REMAIN_ROW` | Only one row is left. | Remaining 15,16 row |
| `S07_EDGECASE` | This is an important edge case. | Edge-case focus |
| `S07_VALID_ROW` | A single row is still... a valid active rectangle. | Single row = valid rectangle |
| `S07_FINAL_TOP` | We consume that final top edge... fifteen... then sixteen. | Final top 15→16 |
| `S07_TOP_MOVE3` | `top` moves from two... to three. | top2→3 |
| `S07_CROSSED` | `top` is greater than `bottom`. | top > bottom |
| `S07_NO_ROWS` | no rows remain. | No active rectangle |
| `S07_STOP` | The active rectangle has disappeared... so the traversal stops. | STOP |
| `S07_ONCE` | Every cell was added... exactly once. | One-copy-per-cell proof |
| `S07_NO_VISITED` | And we did not use... a visited matrix. | No visited matrix |
| `S07_CODE` | Now let’s map this directly into code. | Boundary trace → code handoff |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S07_INIT`

### ANCHOR / SPOKEN PHRASE
> We begin with... `top = 0`... `bottom = 4`... `left = 0`... `right = 5`.

### WHAT APPEARS NOW
Reveal four numeric boundary labels on their words around untouched master.

### CENTER-STAGE HERO
Initial four boundaries

### CAUSE
The narration reaches `S07_INIT`.

### EFFECT / MOTION
Locks starting rectangle.

### WHAT MUST NOT APPEAR YET
Consumption.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep all bounds.

### PERSISTENT STATE
top0,bottom4,left0,right5.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Locks starting rectangle.

## BEAT 02 — `S07_ACTIVE`

### ANCHOR / SPOKEN PHRASE
> The whole matrix is active.

### WHAT APPEARS NOW
Subtle region treatment covers all 30 cells.

### CENTER-STAGE HERO
Full active rectangle

### CAUSE
The narration reaches `S07_ACTIVE`.

### EFFECT / MOTION
Confirms invariant at start.

### WHAT MUST NOT APPEAR YET
Top consumption.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep active outline.

### PERSISTENT STATE
All cells unprocessed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Confirms invariant at start.

## BEAT 03 — `S07_TOP1`

### ANCHOR / SPOKEN PHRASE
> consume the complete top edge... from one... through six.

### WHAT APPEARS NOW
Highlight top edge then consume 1..6 in order, copying to answer.

### CENTER-STAGE HERO
Round1 top edge 1→6

### CAUSE
The narration reaches `S07_TOP1`.

### EFFECT / MOTION
Consumes first edge.

### WHAT MUST NOT APPEAR YET
top shrink before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle edge as processed.

### PERSISTENT STATE
top row processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Consumes first edge.

### SPECIAL CONTRACT
COMPRESSED EDGE-CONSUME CONTRACT: every cell on the named active edge is consumed in exact order and copied to answer. Source cells remain fixed. The final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are deterministically distributed across the resolved audio window after final sync; no guessed frames.

## BEAT 04 — `S07_TOP_DONE`

### ANCHOR / SPOKEN PHRASE
> That row is finished forever.

### WHAT APPEARS NOW
Move top row to history/dim; it is outside future active rectangle.

### CENTER-STAGE HERO
Processed top row

### CAUSE
The narration reaches `S07_TOP_DONE`.

### EFFECT / MOTION
Applies invariant.

### WHAT MUST NOT APPEAR YET
Boundary movement.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep processed row dim.

### PERSISTENT STATE
row0 processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Applies invariant.

## BEAT 05 — `S07_TOP_MOVE`

### ANCHOR / SPOKEN PHRASE
> `top` moves from zero... to one.

### WHAT APPEARS NOW
Move only top boundary handle from row0 to row1; region shrinks accordingly.

### CENTER-STAGE HERO
top 0→1

### CAUSE
The narration reaches `S07_TOP_MOVE`.

### EFFECT / MOTION
SHRINK after consume.

### WHAT MUST NOT APPEAR YET
Right edge consumption.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep new bounds.

### PERSISTENT STATE
top1,bottom4,left0,right5.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: SHRINK after consume.

## BEAT 06 — `S07_ROWS_REMAIN`

### ANCHOR / SPOKEN PHRASE
> Rows still remain... so we continue.

### WHAT APPEARS NOW
Show compact row-valid check, then recede.

### CENTER-STAGE HERO
Row-validity check ✓

### CAUSE
The narration reaches `S07_ROWS_REMAIN`.

### EFFECT / MOTION
VALIDATE after shrink.

### WHAT MUST NOT APPEAR YET
Code inequality.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear check.

### PERSISTENT STATE
Active rows remain.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: VALIDATE after shrink.

## BEAT 07 — `S07_RIGHT1`

### ANCHOR / SPOKEN PHRASE
> Now consume the complete right edge... from twelve... through thirty.

### WHAT APPEARS NOW
Consume 12→18→24→30 in order.

### CENTER-STAGE HERO
Round1 right 12→30

### CAUSE
The narration reaches `S07_RIGHT1`.

### EFFECT / MOTION
Consumes active right edge.

### WHAT MUST NOT APPEAR YET
right shrink.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle processed column.

### PERSISTENT STATE
col5 processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Consumes active right edge.

### SPECIAL CONTRACT
COMPRESSED EDGE-CONSUME CONTRACT: every cell on the named active edge is consumed in exact order and copied to answer. Source cells remain fixed. The final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are deterministically distributed across the resolved audio window after final sync; no guessed frames.

## BEAT 08 — `S07_RIGHT_MOVE`

### ANCHOR / SPOKEN PHRASE
> `right` moves from five... to four.

### WHAT APPEARS NOW
Move right boundary col5→col4; active region shrinks.

### CENTER-STAGE HERO
right 5→4

### CAUSE
The narration reaches `S07_RIGHT_MOVE`.

### EFFECT / MOTION
SHRINK.

### WHAT MUST NOT APPEAR YET
Column validity.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
right4.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: SHRINK.

## BEAT 09 — `S07_COLS_REMAIN`

### ANCHOR / SPOKEN PHRASE
> Columns still remain... so we continue.

### WHAT APPEARS NOW
Show compact validity cue.

### CENTER-STAGE HERO
Column-validity check ✓

### CAUSE
The narration reaches `S07_COLS_REMAIN`.

### EFFECT / MOTION
VALIDATE.

### WHAT MUST NOT APPEAR YET
Bottom edge.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
Active columns remain.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: VALIDATE.

## BEAT 10 — `S07_BOTTOM1`

### ANCHOR / SPOKEN PHRASE
> Now consume the bottom edge... from twenty-nine... through twenty-five... moving right to left.

### WHAT APPEARS NOW
Consume 29→28→27→26→25 only after direction phrase authorizes right-to-left.

### CENTER-STAGE HERO
Round1 bottom 29→25

### CAUSE
The narration reaches `S07_BOTTOM1`.

### EFFECT / MOTION
Consumes bottom edge.

### WHAT MUST NOT APPEAR YET
bottom shrink.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
row4 processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Consumes bottom edge.

### SPECIAL CONTRACT
COMPRESSED EDGE-CONSUME CONTRACT: every cell on the named active edge is consumed in exact order and copied to answer. Source cells remain fixed. The final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are deterministically distributed across the resolved audio window after final sync; no guessed frames.

## BEAT 11 — `S07_BOTTOM_MOVE`

### ANCHOR / SPOKEN PHRASE
> `bottom` moves from four... to three.

### WHAT APPEARS NOW
Move bottom boundary row4→row3.

### CENTER-STAGE HERO
bottom 4→3

### CAUSE
The narration reaches `S07_BOTTOM_MOVE`.

### EFFECT / MOTION
SHRINK.

### WHAT MUST NOT APPEAR YET
Row validity.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
bottom3.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: SHRINK.

## BEAT 12 — `S07_ROWS_REMAIN2`

### ANCHOR / SPOKEN PHRASE
> Rows still remain... so we continue.

### WHAT APPEARS NOW
Show and clear validity cue.

### CENTER-STAGE HERO
Row-validity check ✓

### CAUSE
The narration reaches `S07_ROWS_REMAIN2`.

### EFFECT / MOTION
VALIDATE.

### WHAT MUST NOT APPEAR YET
Left edge.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
Rows remain.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: VALIDATE.

## BEAT 13 — `S07_LEFT1`

### ANCHOR / SPOKEN PHRASE
> Now consume the left edge... moving upward... until seven.

### WHAT APPEARS NOW
Consume 19→13→7 bottom-to-top.

### CENTER-STAGE HERO
Round1 left 19→13→7

### CAUSE
The narration reaches `S07_LEFT1`.

### EFFECT / MOTION
Completes first ring.

### WHAT MUST NOT APPEAR YET
left shrink.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
col0 processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Completes first ring.

### SPECIAL CONTRACT
COMPRESSED EDGE-CONSUME CONTRACT: every cell on the named active edge is consumed in exact order and copied to answer. Source cells remain fixed. The final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are deterministically distributed across the resolved audio window after final sync; no guessed frames.

## BEAT 14 — `S07_LEFT_MOVE`

### ANCHOR / SPOKEN PHRASE
> `left` moves from zero... to one.

### WHAT APPEARS NOW
Move left boundary col0→col1.

### CENTER-STAGE HERO
left 0→1

### CAUSE
The narration reaches `S07_LEFT_MOVE`.

### EFFECT / MOTION
SHRINK.

### WHAT MUST NOT APPEAR YET
First-round result.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
left1.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: SHRINK.

## BEAT 15 — `S07_OUTER_DONE`

### ANCHOR / SPOKEN PHRASE
> The first outer round is complete.

### WHAT APPEARS NOW
Give outer perimeter one coherent history treatment; inner 3×4 stays active.

### CENTER-STAGE HERO
Outer ring processed

### CAUSE
The narration reaches `S07_OUTER_DONE`.

### EFFECT / MOTION
Marks round boundary.

### WHAT MUST NOT APPEAR YET
Size statement.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep inner active.

### PERSISTENT STATE
Remaining active rows1..3 cols1..4.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Marks round boundary.

## BEAT 16 — `S07_REMAIN`

### ANCHOR / SPOKEN PHRASE
> And now look at the remaining work.

### WHAT APPEARS NOW
Center inner rectangle; outer ring recedes.

### CENTER-STAGE HERO
Inner active rectangle

### CAUSE
The narration reaches `S07_REMAIN`.

### EFFECT / MOTION
Directs attention to region representation.

### WHAT MUST NOT APPEAR YET
Size labels until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Remaining rectangle hero.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Directs attention to region representation.

## BEAT 17 — `S07_SIZE`

### ANCHOR / SPOKEN PHRASE
> The active region has changed... from five by six... to three by four.

### WHAT APPEARS NOW
Show dimension handoff 5×6→3×4 tied to actual bounds.

### CENTER-STAGE HERO
5×6 → 3×4

### CAUSE
The narration reaches `S07_SIZE`.

### EFFECT / MOTION
Quantifies shrink.

### WHAT MUST NOT APPEAR YET
Restart misconception.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep 3×4 active.

### PERSISTENT STATE
active size3×4.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Quantifies shrink.

## BEAT 18 — `S07_CONTINUE`

### ANCHOR / SPOKEN PHRASE
> We do not restart the algorithm. We simply continue... with this smaller rectangle.

### WHAT APPEARS NOW
No reset animation; preserve current bounds and answer.

### CENTER-STAGE HERO
Same algorithm, smaller rectangle

### CAUSE
The narration reaches `S07_CONTINUE`.

### EFFECT / MOTION
Teaches iterative continuity.

### WHAT MUST NOT APPEAR YET
New top edge.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep state exactly.

### PERSISTENT STATE
Continue with current rectangle.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Teaches iterative continuity.

## BEAT 19 — `S07_TOP2`

### ANCHOR / SPOKEN PHRASE
> Consume the new top edge... from eight... through eleven.

### WHAT APPEARS NOW
Consume 8→9→10→11.

### CENTER-STAGE HERO
Round2 top 8→11

### CAUSE
The narration reaches `S07_TOP2`.

### EFFECT / MOTION
Second layer top.

### WHAT MUST NOT APPEAR YET
top shrink.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
row1 inner segment processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Second layer top.

### SPECIAL CONTRACT
COMPRESSED EDGE-CONSUME CONTRACT: every cell on the named active edge is consumed in exact order and copied to answer. Source cells remain fixed. The final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are deterministically distributed across the resolved audio window after final sync; no guessed frames.

## BEAT 20 — `S07_TOP_MOVE2`

### ANCHOR / SPOKEN PHRASE
> `top` moves from one... to two.

### WHAT APPEARS NOW
Move top to row2.

### CENTER-STAGE HERO
top1→2

### CAUSE
The narration reaches `S07_TOP_MOVE2`.

### EFFECT / MOTION
SHRINK.

### WHAT MUST NOT APPEAR YET
Validity.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
top2.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: SHRINK.

## BEAT 21 — `S07_ROWS_REMAIN3`

### ANCHOR / SPOKEN PHRASE
> Rows still remain.

### WHAT APPEARS NOW
Show minimal valid check.

### CENTER-STAGE HERO
Row-validity ✓

### CAUSE
The narration reaches `S07_ROWS_REMAIN3`.

### EFFECT / MOTION
VALIDATE.

### WHAT MUST NOT APPEAR YET
Right edge.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
Rows remain.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: VALIDATE.

## BEAT 22 — `S07_RIGHT2`

### ANCHOR / SPOKEN PHRASE
> Consume the new right edge... down to twenty-three.

### WHAT APPEARS NOW
Consume 17 then23.

### CENTER-STAGE HERO
Round2 right 17→23

### CAUSE
The narration reaches `S07_RIGHT2`.

### EFFECT / MOTION
Second-layer right.

### WHAT MUST NOT APPEAR YET
right shrink.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
col4 inner segment processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Second-layer right.

### SPECIAL CONTRACT
COMPRESSED EDGE-CONSUME CONTRACT: every cell on the named active edge is consumed in exact order and copied to answer. Source cells remain fixed. The final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are deterministically distributed across the resolved audio window after final sync; no guessed frames.

## BEAT 23 — `S07_RIGHT_MOVE2`

### ANCHOR / SPOKEN PHRASE
> `right` moves from four... to three.

### WHAT APPEARS NOW
Move right to col3.

### CENTER-STAGE HERO
right4→3

### CAUSE
The narration reaches `S07_RIGHT_MOVE2`.

### EFFECT / MOTION
SHRINK.

### WHAT MUST NOT APPEAR YET
Validity.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
right3.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: SHRINK.

## BEAT 24 — `S07_COLS_REMAIN2`

### ANCHOR / SPOKEN PHRASE
> Columns still remain.

### WHAT APPEARS NOW
Show minimal valid check.

### CENTER-STAGE HERO
Column-validity ✓

### CAUSE
The narration reaches `S07_COLS_REMAIN2`.

### EFFECT / MOTION
VALIDATE.

### WHAT MUST NOT APPEAR YET
Bottom edge.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear.

### PERSISTENT STATE
Columns remain.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: VALIDATE.

## BEAT 25 — `S07_BOTTOM2`

### ANCHOR / SPOKEN PHRASE
> Now consume the bottom edge... from twenty-two... through twenty... moving right to left.

### WHAT APPEARS NOW
Consume 22→21→20.

### CENTER-STAGE HERO
Round2 bottom 22→20

### CAUSE
The narration reaches `S07_BOTTOM2`.

### EFFECT / MOTION
Second-layer bottom.

### WHAT MUST NOT APPEAR YET
bottom shrink.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
row3 inner processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Second-layer bottom.

### SPECIAL CONTRACT
COMPRESSED EDGE-CONSUME CONTRACT: every cell on the named active edge is consumed in exact order and copied to answer. Source cells remain fixed. The final endpoint must not be reached before its spoken value. Intermediate cell-arrival frames are deterministically distributed across the resolved audio window after final sync; no guessed frames.

## BEAT 26 — `S07_BOTTOM_MOVE2`

### ANCHOR / SPOKEN PHRASE
> `bottom` moves from three... to two.

### WHAT APPEARS NOW
Move bottom to row2.

### CENTER-STAGE HERO
bottom3→2

### CAUSE
The narration reaches `S07_BOTTOM_MOVE2`.

### EFFECT / MOTION
SHRINK.

### WHAT MUST NOT APPEAR YET
One-row insight.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
top2=bottom2.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: SHRINK.

## BEAT 27 — `S07_ONE_ROW`

### ANCHOR / SPOKEN PHRASE
> Notice... one row still remains. So we are not finished.

### WHAT APPEARS NOW
Emphasize equality top=bottom=2 and remaining cells 14,15,16.

### CENTER-STAGE HERO
Single active row remains

### CAUSE
The narration reaches `S07_ONE_ROW`.

### EFFECT / MOTION
Proves valid degenerate rectangle.

### WHAT MUST NOT APPEAR YET
Left edge.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep row active.

### PERSISTENT STATE
One active row.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Proves valid degenerate rectangle.

## BEAT 28 — `S07_LEFT2`

### ANCHOR / SPOKEN PHRASE
> Now consume the left edge.

### WHAT APPEARS NOW
Highlight active left edge at col1 within single-row rectangle; only one cell is eligible.

### CENTER-STAGE HERO
Round2 left edge activation

### CAUSE
The narration reaches `S07_LEFT2`.

### EFFECT / MOTION
Sets up one-cell edge.

### WHAT MUST NOT APPEAR YET
Cell14 until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
active left edge=(2,1).

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Sets up one-cell edge.

## BEAT 29 — `S07_FOURTEEN`

### ANCHOR / SPOKEN PHRASE
> that edge contains only one cell... fourteen. We collect fourteen.

### WHAT APPEARS NOW
Append 14 only on spoken value and mark source processed.

### CENTER-STAGE HERO
Consume 14

### CAUSE
The narration reaches `S07_FOURTEEN`.

### EFFECT / MOTION
Consumes single-cell left edge exactly once.

### WHAT MUST NOT APPEAR YET
left shrink.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle.

### PERSISTENT STATE
14 processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Consumes single-cell left edge exactly once.

### SPECIAL CONTRACT
Endpoint lock: no duplicate top/bottom/left consumption; 14 is appended exactly once here.

## BEAT 30 — `S07_LEFT_MOVE2`

### ANCHOR / SPOKEN PHRASE
> `left` moves from one... to two.

### WHAT APPEARS NOW
Move left to col2.

### CENTER-STAGE HERO
left1→2

### CAUSE
The narration reaches `S07_LEFT_MOVE2`.

### EFFECT / MOTION
SHRINK.

### WHAT MUST NOT APPEAR YET
Remaining row display.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
left2,right3,top2,bottom2.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: SHRINK.

## BEAT 31 — `S07_REMAIN_ROW`

### ANCHOR / SPOKEN PHRASE
> Only one row is left.

### WHAT APPEARS NOW
Center the two untouched cells 15,16 inside valid active rectangle.

### CENTER-STAGE HERO
Remaining 15,16 row

### CAUSE
The narration reaches `S07_REMAIN_ROW`.

### EFFECT / MOTION
Makes edge case explicit.

### WHAT MUST NOT APPEAR YET
Four-sided ring conclusion.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
remaining cells15,16.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Makes edge case explicit.

## BEAT 32 — `S07_EDGECASE`

### ANCHOR / SPOKEN PHRASE
> This is an important edge case.

### WHAT APPEARS NOW
Reduce everything except boundaries and two-cell row.

### CENTER-STAGE HERO
Edge-case focus

### CAUSE
The narration reaches `S07_EDGECASE`.

### EFFECT / MOTION
Signals reasoning checkpoint.

### WHAT MUST NOT APPEAR YET
Conclusion.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Single-row case under study.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Signals reasoning checkpoint.

## BEAT 33 — `S07_VALID_ROW`

### ANCHOR / SPOKEN PHRASE
> A single row is still... a valid active rectangle.

### WHAT APPEARS NOW
Apply valid/check treatment to 1×2 active region; no four-sided ring requirement.

### CENTER-STAGE HERO
Single row = valid rectangle

### CAUSE
The narration reaches `S07_VALID_ROW`.

### EFFECT / MOTION
Generalizes invariant.

### WHAT MUST NOT APPEAR YET
Final consume.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep active row.

### PERSISTENT STATE
Valid region despite one row.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Generalizes invariant.

## BEAT 34 — `S07_FINAL_TOP`

### ANCHOR / SPOKEN PHRASE
> We consume that final top edge... fifteen... then sixteen.

### WHAT APPEARS NOW
Append 15 only on `fifteen`, 16 only on `sixteen`; mark both processed.

### CENTER-STAGE HERO
Final top 15→16

### CAUSE
The narration reaches `S07_FINAL_TOP`.

### EFFECT / MOTION
Consumes all remaining work exactly once.

### WHAT MUST NOT APPEAR YET
top movement.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Settle complete row.

### PERSISTENT STATE
all cells processed.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Consumes all remaining work exactly once.

### SPECIAL CONTRACT
Endpoint lock: 16 appears only on its spoken word.

## BEAT 35 — `S07_TOP_MOVE3`

### ANCHOR / SPOKEN PHRASE
> `top` moves from two... to three.

### WHAT APPEARS NOW
Move top boundary past bottom.

### CENTER-STAGE HERO
top2→3

### CAUSE
The narration reaches `S07_TOP_MOVE3`.

### EFFECT / MOTION
SHRINK after final consume.

### WHAT MUST NOT APPEAR YET
Inequality until spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep crossed bounds.

### PERSISTENT STATE
top3,bottom2.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: SHRINK after final consume.

## BEAT 36 — `S07_CROSSED`

### ANCHOR / SPOKEN PHRASE
> `top` is greater than `bottom`.

### WHAT APPEARS NOW
Center numeric relation `3 > 2`; row-validity fails.

### CENTER-STAGE HERO
top > bottom

### CAUSE
The narration reaches `S07_CROSSED`.

### EFFECT / MOTION
VALIDATE detects disappearance.

### WHAT MUST NOT APPEAR YET
Stop before spoken.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep relation.

### PERSISTENT STATE
No active rows.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: VALIDATE detects disappearance.

## BEAT 37 — `S07_NO_ROWS`

### ANCHOR / SPOKEN PHRASE
> no rows remain.

### WHAT APPEARS NOW
Active region fill/outline collapses to none; processed matrix stays fixed.

### CENTER-STAGE HERO
No active rectangle

### CAUSE
The narration reaches `S07_NO_ROWS`.

### EFFECT / MOTION
Interprets failed validity.

### WHAT MUST NOT APPEAR YET
Stop.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep completed matrix.

### PERSISTENT STATE
active rectangle empty.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Interprets failed validity.

## BEAT 38 — `S07_STOP`

### ANCHOR / SPOKEN PHRASE
> The active rectangle has disappeared... so the traversal stops.

### WHAT APPEARS NOW
Show one stop/completion cue; no further boundary movement.

### CENTER-STAGE HERO
STOP

### CAUSE
The narration reaches `S07_STOP`.

### EFFECT / MOTION
Terminates Method2.

### WHAT MUST NOT APPEAR YET
Complexity.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Clear transient bounds after hold.

### PERSISTENT STATE
Traversal complete.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Terminates Method2.

## BEAT 39 — `S07_ONCE`

### ANCHOR / SPOKEN PHRASE
> Every cell was added... exactly once.

### WHAT APPEARS NOW
Answer track count and completed matrix align; no duplicates.

### CENTER-STAGE HERO
One-copy-per-cell proof

### CAUSE
The narration reaches `S07_ONCE`.

### EFFECT / MOTION
Correctness summary.

### WHAT MUST NOT APPEAR YET
Visited-matrix comparison.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep compact.

### PERSISTENT STATE
30 unique positions appended once.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Correctness summary.

## BEAT 40 — `S07_NO_VISITED`

### ANCHOR / SPOKEN PHRASE
> And we did not use... a visited matrix.

### WHAT APPEARS NOW
Explicitly show absence/removal of per-cell history structure; only boundary state was used.

### CENTER-STAGE HERO
No visited matrix

### CAUSE
The narration reaches `S07_NO_VISITED`.

### EFFECT / MOTION
Connects back to optimization goal.

### WHAT MUST NOT APPEAR YET
Code.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
Keep four-boundary identity.

### PERSISTENT STATE
Method2 uses no visited matrix.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Connects back to optimization goal.

## BEAT 41 — `S07_CODE`

### ANCHOR / SPOKEN PHRASE
> Now let’s map this directly into code.

### WHAT APPEARS NOW
Collapse trace to CONSUME→SHRINK→VALIDATE→CONTINUE plus four bounds, move toward code zone.

### CENTER-STAGE HERO
Boundary trace → code handoff

### CAUSE
The narration reaches `S07_CODE`.

### EFFECT / MOTION
Preserves trace-to-code identity.

### WHAT MUST NOT APPEAR YET
Future exact code lines.

### COMPREHENSION HOLD
Use only a real pause present in final audio; never manufacture hold time.

### CLEANUP / EXIT
End clean for Scene08.

### PERSISTENT STATE
Ready for Method2 code.

### KIT / EXISTING SYSTEM
Matrix/Grid grammar + RoughBox + ChalkText; RoughLine/RoughCurve only for semantic relations; PathTracer/EvolvingPath only after actual repo API inspection.

### MOTION PURPOSE
Semantic job: Preserves trace-to-code identity.

---

# SCENE END-STATE CONTRACT

```text
Method2 trace complete; boundary code handoff ready.
```

# IMPLEMENTATION SOURCE LOCK

Before implementation, inspect actual repository APIs for Matrix/Grid wrapper, path tracer/evolving path, output sequence, typed code editor, roadmap, and any generic complexity graph. Reuse/extend kit-level primitives; never invent props or build a scene-local generic substitute.
