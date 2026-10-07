# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 10 — Method 3 Full Verified Trace
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Execute the optimal method on the locked master matrix with exact boundary-history flags, marker writes, boundary interpretation, interior updates, and final boundary restoration—all in strict narration order.

---

# 0. ABSOLUTE SOURCE PRIORITY

Use, in order:

1. this approved word-based plan;
2. verified Q13 narration;
3. locked Q13 Phase-5 teaching truth;
4. previous scene's actual approved final state;
5. project `SKILL.md` / Word-Driven Motion Skill;
6. actual Foundation V2 / `@dsa/kit` implementation;
7. final scene MP3;
8. final exact word-sync JSON.

If a source does not support a visual/state/component assumption:

```text
UNRESOLVED — SOURCE REQUIRED
```

---

# 1. CONTINUITY IN

Scene10 starts fresh from Scene09's conceptual understanding:

```text
master matrix must begin untouched
flag values not yet rendered
marker writes not yet executed
optimal information flow already understood
```

---

# 2. EXACT NARRATION SOURCE

```text
Start with our original matrix.

One... two... zero... four... five.

Six... seven... eight... nine... ten.

Zero... twelve... thirteen... fourteen... fifteen.

Sixteen... seventeen... eighteen... zero... twenty.

Twenty-one... twenty-two... twenty-three... twenty-four... twenty-five.

First, inspect the first row.

One is not zero.

Two is not zero.

Then we reach zero at column two.

So:

`firstRowZero` becomes true.

That fact is now safe.

Next, inspect the first column.

One is not zero.

Six is not zero.

Then we reach zero at row two.

So:

`firstColZero` becomes true.

Now both boundary facts are protected.

We can use the first row and first column as marker memory.

Scan only the interior.

Row one has:

seven... eight... nine... ten.

No zero.

No marker changes.

Row two has:

twelve... thirteen... fourteen... fifteen.

Again, no interior zero.

But notice...

its first-column cell is already zero from the original input.

So row two is already marked naturally.

Now row three.

Seventeen...

eighteen...

then zero at row three, column three.

This is our important interior zero.

Mark its row.

`matrix[3][0]` changes from sixteen...

to zero.

Then mark its column.

`matrix[0][3]` changes from four...

to zero.

The zero at row three, column three has now sent its information to the boundary.

Continue the scan.

Twenty is not zero.

Row four has no interior zero...

so there are no more marker writes.

Our marker matrix is now:

one... two... zero... zero... five.

Six... seven... eight... nine... ten.

Zero... twelve... thirteen... fourteen... fifteen.

Zero... seventeen... eighteen... zero... twenty.

Twenty-one... twenty-two... twenty-three... twenty-four... twenty-five.

Now read the boundary as memory.

In the first column...

row one has six.

So row one itself is not marked.

Row two has zero.

So row two must become zero.

Row three has zero.

So row three must become zero.

Row four has twenty-one.

So row four itself is not marked.

Across the first row...

column one has two.

Keep that column.

Column two has zero.

Zero that column.

Column three has zero.

Zero that column.

Column four has five.

Keep that column.

Now apply those markers to the interior.

Start with row one.

At row one, column one...

the row marker is six...

and the column marker is two.

Neither is zero.

So seven stays.

At column two...

the top marker is zero.

So eight becomes zero.

At column three...

the top marker is also zero.

So nine becomes zero.

At column four...

neither marker is zero.

So ten stays.

Row two is easier.

Its row marker is zero.

So every interior cell in row two becomes zero.

Row three is also marked.

So every interior cell in row three becomes zero.

Now row four.

Its row marker is not zero.

Column one is not marked...

so twenty-two stays.

Column two is marked...

so twenty-three becomes zero.

Column three is marked...

so twenty-four becomes zero.

Column four is not marked...

so twenty-five stays.

The interior is finished.

At this point the matrix is:

one... two... zero... zero... five.

Six... seven... zero... zero... ten.

Zero... zero... zero... zero... zero.

Zero... zero... zero... zero... zero.

Twenty-one... twenty-two... zero... zero... twenty-five.

Now the marker job is done.

Bring back the saved first-row fact.

`firstRowZero` is true.

So the complete first row becomes zero.

Then bring back the first-column fact.

`firstColZero` is also true.

So the complete first column becomes zero.

Our final matrix is:

zero... zero... zero... zero... zero.

zero... seven... zero... zero... ten.

zero... zero... zero... zero... zero.

zero... zero... zero... zero... zero.

zero... twenty-two... zero... zero... twenty-five.

That is the correct result...

using constant extra space.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Locked exact states:

```text
firstRowZero = true
firstColZero = true

new marker writes:
matrix[3][0]: 16→0
matrix[0][3]: 4→0

marker matrix:
[
 [1,2,0,0,5],
 [6,7,8,9,10],
 [0,12,13,14,15],
 [0,17,18,0,20],
 [21,22,23,24,25]
]

interior-applied matrix:
[
 [1,2,0,0,5],
 [6,7,0,0,10],
 [0,0,0,0,0],
 [0,0,0,0,0],
 [21,22,0,0,25]
]

final:
[
 [0,0,0,0,0],
 [0,7,0,0,10],
 [0,0,0,0,0],
 [0,0,0,0,0],
 [0,22,0,0,25]
]
```

---

# 4. GLOBAL WORD-DRIVEN VISUAL LAW

```text
WORD / PHRASE IS SPOKEN
→ relevant visual enters
→ one primary teaching object owns center stage
→ cause/effect is shown
→ hold only if audio provides space
→ old teaching object exits/reduces
→ next idea takes center stage
```

Every motion must teach state, show cause→effect, direct attention, or preserve semantic continuity.

Default visual budget:

```text
1 PRIMARY HERO
+ 1 DIRECT SUPPORT OBJECT
+ captions
```

No packed dashboard. No decorative motion. No future-state spoilers.

---

# 5. FOUNDATION V2 / KIT-ONLY LOCK

Every matrix representation uses one continuous 2-D coordinate system driven by approved kit primitives.

```text
RoughBox  → fixed cells
ChalkText → values / row / column labels
theme.pivot → active source/current cell
theme.cyan  → queried/support relation
theme.warn  → wrong state plus a second cue
theme.good  → confirmed result only when spoken
RoughLine / existing path primitive → temporary semantic relation only
Captions → exact sync later
```

Permanent law:

```text
CELL GEOMETRY STAYS FIXED.
VALUES CHANGE IN THEIR OWN CELLS.
ROW/COLUMN LABELS DO NOT MOVE.
```

If a reusable matrix row/column region primitive is absent, extend/create it at kit level; never fake it with scene-local generic cards or raw SVG rectangles.

---

# 6. SCENE-SPECIFIC RULES

- This is the authoritative master trace; every visual mutation must match the locked states.
- Literal flag values appear only when narration reaches their scan result.
- Boundary marker writes happen separately: row marker first, then column marker.
- First row/column are not finalized until the interior is complete and marker job is explicitly done.
- When narration reads a matrix state row-by-row, use those spoken values as confirmation focus; do not animate arbitrary extra state.
- Keep only the two booleans persistently outside the matrix because they are needed at the end.
- No code lines in this scene.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S10_START` | `Start with our original matrix.` | Untouched master grid. |
| `S10_R0` | `One two zero four five.` | Row0 input. |
| `S10_R1` | `Six seven eight nine ten.` | Row1 input. |
| `S10_R2` | `Zero twelve thirteen fourteen fifteen.` | Row2 input. |
| `S10_R3` | `Sixteen seventeen eighteen zero twenty.` | Row3 input. |
| `S10_R4` | `Twenty-one twenty-two twenty-three twenty-four twenty-five.` | Complete input matrix. |
| `S10_FIRSTROW` | `First inspect the first row.` | Row0 scan region. |
| `S10_R0_1` | `One is not zero.` | Cell (0,0)=1. |
| `S10_R0_2` | `Two is not zero.` | Cell (0,1)=2. |
| `S10_R0_ZERO` | `Then we reach zero at column two.` | Cell (0,2)=0. |
| `S10_FR_TRUE` | `firstRowZero becomes true.` | firstRowZero=false→true. |
| `S10_SAFE1` | `That fact is now safe.` | firstRowZero=true. |
| `S10_FIRSTCOL` | `Next inspect the first column.` | Column0 scan region. |
| `S10_C0_1` | `One is not zero.` | Cell (0,0)=1. |
| `S10_C0_6` | `Six is not zero.` | Cell (1,0)=6. |
| `S10_C0_ZERO` | `Then we reach zero at row two.` | Cell (2,0)=0. |
| `S10_FC_TRUE` | `firstColZero becomes true.` | firstColZero=false→true. |
| `S10_BOTH` | `Now both boundary facts are protected.` | Two saved flags. |
| `S10_USEBOUND` | `We can use the first row and first column as marker memory.` | Boundary role transformation. |
| `S10_INTERIOR` | `Scan only the interior.` | Interior active region. |
| `S10_ROW1` | `Row one has seven eight nine ten.` | Interior row1 values. |
| `S10_NOZERO1` | `No zero.` | Row1 clear. |
| `S10_NOMARK1` | `No marker changes.` | Boundary markers unchanged. |
| `S10_ROW2` | `Row two has twelve thirteen fourteen fifteen.` | Interior row2. |
| `S10_NOINT2` | `Again no interior zero.` | Row2 interior clear. |
| `S10_NOTICE2` | `But notice its first-column cell is already zero from the original input.` | Existing marker at (2,0). |
| `S10_ALREADY2` | `So row two is already marked naturally.` | Row marker (2,0)=0. |
| `S10_ROW3` | `Now row three.` | Interior row3. |
| `S10_17` | `Seventeen` | Cell (3,1)=17. |
| `S10_18` | `eighteen` | Cell (3,2)=18. |
| `S10_Z33` | `then zero at row three, column three.` | Interior source (3,3)=0. |
| `S10_IMPORTANT` | `This is our important interior zero.` | Source (3,3). |
| `S10_MARKROW` | `Mark its row.` | Row marker destination unresolved until expression. |
| `S10_M30` | `matrix[3][0] changes from sixteen` | Boundary cell (3,0)=16. |
| `S10_M30ZERO` | `to zero.` | Marker write (3,0):16→0. |
| `S10_MARKCOL` | `Then mark its column.` | Column marker action. |
| `S10_M03` | `matrix[0][3] changes from four` | Boundary cell (0,3)=4. |
| `S10_M03ZERO` | `to zero.` | Marker write (0,3):4→0. |
| `S10_SENT` | `The zero at row three, column three has now sent its information to the boundary.` | Source + two boundary markers. |
| `S10_20` | `Continue the scan. Twenty is not zero.` | Cell (3,4)=20. |
| `S10_ROW4NO` | `Row four has no interior zero so there are no more marker writes.` | Row4 interior clear. |
| `S10_MARKERMAT` | `Our marker matrix is now` | Marker matrix. |
| `S10_MM0` | `one two zero zero five.` | Marker row0. |
| `S10_MM1` | `Six seven eight nine ten.` | Marker row1. |
| `S10_MM2` | `Zero twelve thirteen fourteen fifteen.` | Marker row2. |
| `S10_MM3` | `Zero seventeen eighteen zero twenty.` | Marker row3. |
| `S10_MM4` | `Twenty-one twenty-two twenty-three twenty-four twenty-five.` | Marker row4. |
| `S10_READBOUND` | `Now read the boundary as memory.` | Boundary memory. |
| `S10_FC6` | `In the first column row one has six.` | Boundary (1,0)=6. |
| `S10_R1KEEP` | `So row one itself is not marked.` | Row1 unmarked. |
| `S10_FC0R2` | `Row two has zero.` | Boundary (2,0)=0. |
| `S10_R2MUST` | `So row two must become zero.` | Row2 marked meaning. |
| `S10_FC0R3` | `Row three has zero.` | Boundary (3,0)=0. |
| `S10_R3MUST` | `So row three must become zero.` | Row3 marked meaning. |
| `S10_FC21` | `Row four has twenty-one.` | Boundary (4,0)=21. |
| `S10_R4KEEP` | `So row four itself is not marked.` | Row4 unmarked. |
| `S10_FR2` | `Across the first row column one has two.` | Boundary (0,1)=2. |
| `S10_KEEP1` | `Keep that column.` | Column1 unmarked. |
| `S10_FR0C2` | `Column two has zero.` | Boundary (0,2)=0. |
| `S10_ZERO2` | `Zero that column.` | Column2 marked meaning. |
| `S10_FR0C3` | `Column three has zero.` | Boundary (0,3)=0. |
| `S10_ZERO3` | `Zero that column.` | Column3 marked meaning. |
| `S10_FR5` | `Column four has five.` | Boundary (0,4)=5. |
| `S10_KEEP4` | `Keep that column.` | Column4 unmarked. |
| `S10_APPLY` | `Now apply those markers to the interior.` | Interior application phase. |
| `S10_ROW1APP` | `Start with row one.` | Row1 interior. |
| `S10_11` | `At row one, column one` | Cell (1,1)=7. |
| `S10_11R` | `the row marker is six` | Left marker (1,0)=6. |
| `S10_11C` | `and the column marker is two.` | Top marker (0,1)=2. |
| `S10_NEITHER` | `Neither is zero.` | Gate result false. |
| `S10_7STAYS` | `So seven stays.` | 7 survivor. |
| `S10_C2APP` | `At column two the top marker is zero.` | Cell (1,2)=8 with top marker (0,2)=0. |
| `S10_8ZERO` | `So eight becomes zero.` | (1,2):8→0. |
| `S10_C3APP` | `At column three the top marker is also zero.` | Cell (1,3)=9 + top marker (0,3)=0. |
| `S10_9ZERO` | `So nine becomes zero.` | (1,3):9→0. |
| `S10_C4APP` | `At column four neither marker is zero.` | Cell (1,4)=10 with row6/top5. |
| `S10_10STAYS` | `So ten stays.` | 10 survivor. |
| `S10_ROW2EASY` | `Row two is easier.` | Row2. |
| `S10_R2MARK` | `Its row marker is zero.` | row2 marker=0. |
| `S10_R2ALL` | `So every interior cell in row two becomes zero.` | Row2 interior all zero. |
| `S10_R3MARK` | `Row three is also marked.` | row3 marker=0. |
| `S10_R3ALL` | `So every interior cell in row three becomes zero.` | Row3 interior all zero. |
| `S10_ROW4APP` | `Now row four.` | Row4. |
| `S10_R4NOT` | `Its row marker is not zero.` | row4 marker21. |
| `S10_COL1NOT` | `Column one is not marked so twenty-two stays.` | (4,1)=22. |
| `S10_COL2YES` | `Column two is marked so twenty-three becomes zero.` | (4,2):23→0. |
| `S10_COL3YES` | `Column three is marked so twenty-four becomes zero.` | (4,3):24→0. |
| `S10_COL4NOT` | `Column four is not marked so twenty-five stays.` | (4,4)=25. |
| `S10_INTERIOR_DONE` | `The interior is finished.` | Interior-applied matrix. |
| `S10_ATPOINT` | `At this point the matrix is` | Current intermediate matrix. |
| `S10_I0` | `one two zero zero five.` | Intermediate row0. |
| `S10_I1` | `Six seven zero zero ten.` | Intermediate row1. |
| `S10_I2` | `Zero zero zero zero zero.` | Intermediate row2. |
| `S10_I3` | `Zero zero zero zero zero.` | Intermediate row3. |
| `S10_I4` | `Twenty-one twenty-two zero zero twenty-five.` | Intermediate row4. |
| `S10_MARKDONE` | `Now the marker job is done.` | Boundary role ends. |
| `S10_BRINGROW` | `Bring back the saved first-row fact.` | firstRowZero=true. |
| `S10_FRTRUE` | `firstRowZero is true.` | Flag true. |
| `S10_ROW0ZERO` | `So the complete first row becomes zero.` | Row0 all zero. |
| `S10_BRINGCOL` | `Then bring back the first-column fact.` | firstColZero=true. |
| `S10_FCTRUE` | `firstColZero is also true.` | Flag true. |
| `S10_COL0ZERO` | `So the complete first column becomes zero.` | Column0 all zero. |
| `S10_FINAL` | `Our final matrix is` | Verified final matrix. |
| `S10_F0` | `zero zero zero zero zero.` | Final row0. |
| `S10_F1` | `zero seven zero zero ten.` | Final row1. |
| `S10_F2` | `zero zero zero zero zero.` | Final row2. |
| `S10_F3` | `zero zero zero zero zero.` | Final row3. |
| `S10_F4` | `zero twenty-two zero zero twenty-five.` | Final row4. |
| `S10_CORRECT` | `That is the correct result` | Correct output. |
| `S10_SPACE` | `using constant extra space.` | One matrix + two booleans. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S10_START`

### ANCHOR / SPOKEN PHRASE
`Start with our original matrix.`

### WHAT APPEARS NOW
Bring one empty/faint 5×5 master shell to center; exact values are not pre-populated.

### CENTER-STAGE HERO
Untouched master grid.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Grid becomes the only hero.

### WHAT MUST NOT APPEAR YET
No flags or markers.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep shell for spoken population.

### PERSISTENT STATE
Master shell.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Begin exact trace.
## BEAT 02 — `S10_R0`

### ANCHOR / SPOKEN PHRASE
`One two zero four five.`

### WHAT APPEARS NOW
Populate row0 values in spoken order.

### CENTER-STAGE HERO
Row0 input.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One value appears per spoken token.

### WHAT MUST NOT APPEAR YET
Rows1–4 hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row0.

### PERSISTENT STATE
Row0=[1,2,0,4,5].

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Reconstruct exact input.
## BEAT 03 — `S10_R1`

### ANCHOR / SPOKEN PHRASE
`Six seven eight nine ten.`

### WHAT APPEARS NOW
Populate row1 in spoken order.

### CENTER-STAGE HERO
Row1 input.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Fixed-cell reveals only.

### WHAT MUST NOT APPEAR YET
Future rows hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep rows0–1.

### PERSISTENT STATE
Rows0–1 populated.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Reconstruct exact input.
## BEAT 04 — `S10_R2`

### ANCHOR / SPOKEN PHRASE
`Zero twelve thirteen fourteen fifteen.`

### WHAT APPEARS NOW
Populate row2.

### CENTER-STAGE HERO
Row2 input.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Fixed-cell reveals.

### WHAT MUST NOT APPEAR YET
Future rows hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep rows0–2.

### PERSISTENT STATE
Rows0–2 populated.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Reconstruct exact input.
## BEAT 05 — `S10_R3`

### ANCHOR / SPOKEN PHRASE
`Sixteen seventeen eighteen zero twenty.`

### WHAT APPEARS NOW
Populate row3.

### CENTER-STAGE HERO
Row3 input.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Fixed-cell reveals.

### WHAT MUST NOT APPEAR YET
Row4 hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep rows0–3.

### PERSISTENT STATE
Rows0–3 populated.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Reconstruct exact input.
## BEAT 06 — `S10_R4`

### ANCHOR / SPOKEN PHRASE
`Twenty-one twenty-two twenty-three twenty-four twenty-five.`

### WHAT APPEARS NOW
Populate row4; indices remain available from course grammar if retained from prior scenes.

### CENTER-STAGE HERO
Complete input matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Matrix settles complete.

### WHAT MUST NOT APPEAR YET
No flags yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep full input.

### PERSISTENT STATE
Original master complete.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Lock initial state.
## BEAT 07 — `S10_FIRSTROW`

### ANCHOR / SPOKEN PHRASE
`First inspect the first row.`

### WHAT APPEARS NOW
Highlight row0 as active scan region; all other rows recede.

### CENTER-STAGE HERO
Row0 scan region.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Prepare boundary-history scan.

### WHAT MUST NOT APPEAR YET
Do not set flag yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row0 active.

### PERSISTENT STATE
firstRowZero not evaluated.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 08 — `S10_R0_1`

### ANCHOR / SPOKEN PHRASE
`One is not zero.`

### WHAT APPEARS NOW
Focus cell (0,0); show nonzero query resolving false.

### CENTER-STAGE HERO
Cell (0,0)=1.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No flag change.

### WHAT MUST NOT APPEAR YET
Do not move to 2 before phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Shift scan focus next.

### PERSISTENT STATE
firstRowZero unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Trace boundary scan.
## BEAT 09 — `S10_R0_2`

### ANCHOR / SPOKEN PHRASE
`Two is not zero.`

### WHAT APPEARS NOW
Focus (0,1); resolve nonzero.

### CENTER-STAGE HERO
Cell (0,1)=2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No flag change.

### WHAT MUST NOT APPEAR YET
Do not reveal zero decision yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Shift next.

### PERSISTENT STATE
firstRowZero unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Trace boundary scan.
## BEAT 10 — `S10_R0_ZERO`

### ANCHOR / SPOKEN PHRASE
`Then we reach zero at column two.`

### WHAT APPEARS NOW
Focus original zero at (0,2).

### CENTER-STAGE HERO
Cell (0,2)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Current cell becomes source.

### WHAT MUST NOT APPEAR YET
Do not set flag before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep zero active.

### PERSISTENT STATE
Boundary zero found.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Cause setup.
## BEAT 11 — `S10_FR_TRUE`

### ANCHOR / SPOKEN PHRASE
`firstRowZero becomes true.`

### WHAT APPEARS NOW
Create/show compact `firstRowZero` fact and change false→true; row0 zero remains support.

### CENTER-STAGE HERO
firstRowZero=false→true.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Zero found causes saved history to update.

### WHAT MUST NOT APPEAR YET
Do not alter row0 values.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep flag as persistent compact fact.

### PERSISTENT STATE
firstRowZero=true.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid

### MOTION PURPOSE
Record boundary history.
## BEAT 12 — `S10_SAFE1`

### ANCHOR / SPOKEN PHRASE
`That fact is now safe.`

### WHAT APPEARS NOW
Promote saved fact briefly while row0 scan region reduces.

### CENTER-STAGE HERO
firstRowZero=true.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Flag persists independently of future row0 marker writes.

### WHAT MUST NOT APPEAR YET
Do not start first-column scan until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Return matrix center.

### PERSISTENT STATE
firstRowZero=true persists.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Teach preservation.
## BEAT 13 — `S10_FIRSTCOL`

### ANCHOR / SPOKEN PHRASE
`Next inspect the first column.`

### WHAT APPEARS NOW
Highlight col0 as active scan region; firstRowZero remains quiet support.

### CENTER-STAGE HERO
Column0 scan region.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Prepare second boundary-history scan.

### WHAT MUST NOT APPEAR YET
No firstColZero value yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep col0 active.

### PERSISTENT STATE
firstColZero unresolved.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 14 — `S10_C0_1`

### ANCHOR / SPOKEN PHRASE
`One is not zero.`

### WHAT APPEARS NOW
Focus top-left cell; resolve nonzero.

### CENTER-STAGE HERO
Cell (0,0)=1.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No flag change.

### WHAT MUST NOT APPEAR YET
Do not jump to row1.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Shift downward.

### PERSISTENT STATE
firstColZero unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Trace boundary scan.
## BEAT 15 — `S10_C0_6`

### ANCHOR / SPOKEN PHRASE
`Six is not zero.`

### WHAT APPEARS NOW
Focus (1,0); resolve nonzero.

### CENTER-STAGE HERO
Cell (1,0)=6.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No flag change.

### WHAT MUST NOT APPEAR YET
Do not reveal row2 zero early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Shift downward.

### PERSISTENT STATE
firstColZero unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Trace boundary scan.
## BEAT 16 — `S10_C0_ZERO`

### ANCHOR / SPOKEN PHRASE
`Then we reach zero at row two.`

### WHAT APPEARS NOW
Focus original zero at (2,0).

### CENTER-STAGE HERO
Cell (2,0)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Current source zero found.

### WHAT MUST NOT APPEAR YET
Do not set flag yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep zero active.

### PERSISTENT STATE
Boundary zero found.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Cause setup.
## BEAT 17 — `S10_FC_TRUE`

### ANCHOR / SPOKEN PHRASE
`firstColZero becomes true.`

### WHAT APPEARS NOW
Create/show compact `firstColZero` and change false→true.

### CENTER-STAGE HERO
firstColZero=false→true.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Found zero updates saved column history.

### WHAT MUST NOT APPEAR YET
Do not mutate col0.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both flags persistently small.

### PERSISTENT STATE
firstRowZero=true; firstColZero=true.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid

### MOTION PURPOSE
Record boundary history.
## BEAT 18 — `S10_BOTH`

### ANCHOR / SPOKEN PHRASE
`Now both boundary facts are protected.`

### WHAT APPEARS NOW
Promote both flags together; boundary scan emphasis clears.

### CENTER-STAGE HERO
Two saved flags.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Saved history is independent of later boundary reuse.

### WHAT MUST NOT APPEAR YET
No marker role until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce flags to quiet persistent support.

### PERSISTENT STATE
Both flags true.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Close boundary-save phase.
## BEAT 19 — `S10_USEBOUND`

### ANCHOR / SPOKEN PHRASE
`We can use the first row and first column as marker memory.`

### WHAT APPEARS NOW
Apply semantic role cues: col0=ROW MARKERS; row0=COLUMN MARKERS. Values stay fixed.

### CENTER-STAGE HERO
Boundary role transformation.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Saved history allows role change safely.

### WHAT MUST NOT APPEAR YET
No marker writes yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep boundary role cues restrained.

### PERSISTENT STATE
Boundary storage active.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Representation handoff.
## BEAT 20 — `S10_INTERIOR`

### ANCHOR / SPOKEN PHRASE
`Scan only the interior.`

### WHAT APPEARS NOW
Highlight rows1..4 × cols1..4; boundary marker cells recede as scan targets.

### CENTER-STAGE HERO
Interior active region.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration limits scan domain.

### WHAT MUST NOT APPEAR YET
No current source yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep interior region.

### PERSISTENT STATE
Interior scan active.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Teach scope.
## BEAT 21 — `S10_ROW1`

### ANCHOR / SPOKEN PHRASE
`Row one has seven eight nine ten.`

### WHAT APPEARS NOW
Scan-focus moves across (1,1)..(1,4) as spoken.

### CENTER-STAGE HERO
Interior row1 values.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One cell focus per value; no mutation.

### WHAT MUST NOT APPEAR YET
No marker change.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Finish row1 scan.

### PERSISTENT STATE
Row1 no interior zero.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Trace scan.
## BEAT 22 — `S10_NOZERO1`

### ANCHOR / SPOKEN PHRASE
`No zero.`

### WHAT APPEARS NOW
Briefly confirm row1 interior contains no zero.

### CENTER-STAGE HERO
Row1 clear.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No marker write.

### WHAT MUST NOT APPEAR YET
Do not jump to row2 before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce row1 focus.

### PERSISTENT STATE
Markers unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm no-op.
## BEAT 23 — `S10_NOMARK1`

### ANCHOR / SPOKEN PHRASE
`No marker changes.`

### WHAT APPEARS NOW
Briefly show row1 boundary marker cell (1,0)=6 and top-row marker positions unchanged, without creating new zero.

### CENTER-STAGE HERO
Boundary markers unchanged.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No mutation is the teaching effect.

### WHAT MUST NOT APPEAR YET
No row2 yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Return scan to interior.

### PERSISTENT STATE
Marker state unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Teach no-op.
## BEAT 24 — `S10_ROW2`

### ANCHOR / SPOKEN PHRASE
`Row two has twelve thirteen fourteen fifteen.`

### WHAT APPEARS NOW
Scan (2,1)..(2,4) as spoken.

### CENTER-STAGE HERO
Interior row2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No interior zero found.

### WHAT MUST NOT APPEAR YET
Do not infer marker write from interior.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Finish row2 scan.

### PERSISTENT STATE
Row2 interior clear.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Trace scan.
## BEAT 25 — `S10_NOINT2`

### ANCHOR / SPOKEN PHRASE
`Again no interior zero.`

### WHAT APPEARS NOW
Confirm no source inside row2 interior.

### CENTER-STAGE HERO
Row2 interior clear.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No marker writes caused by interior.

### WHAT MUST NOT APPEAR YET
Do not ignore existing boundary zero.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Shift attention to first-column cell next.

### PERSISTENT STATE
Interior scan result known.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm no-op.
## BEAT 26 — `S10_NOTICE2`

### ANCHOR / SPOKEN PHRASE
`But notice its first-column cell is already zero from the original input.`

### WHAT APPEARS NOW
Focus boundary cell (2,0)=0 and label briefly `ORIGINAL + VALID ROW MARKER`.

### CENTER-STAGE HERO
Existing marker at (2,0).

### CAUSE
Teach reuse.

### EFFECT / MOTION
Narration points out natural marker reuse.

### WHAT MUST NOT APPEAR YET
No new write occurs; existing zero already encodes row2.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not zero row2 now; application comes later.

### PERSISTENT STATE
Keep marker state.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
row2 marker already zero.
## BEAT 27 — `S10_ALREADY2`

### ANCHOR / SPOKEN PHRASE
`So row two is already marked naturally.`

### WHAT APPEARS NOW
Promote semantic meaning `ROW 2 LATER → ZERO`; no cell mutation.

### CENTER-STAGE HERO
Row marker (2,0)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Existing input state serves marker role.

### WHAT MUST NOT APPEAR YET
No application yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
row2 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach marker meaning.
## BEAT 28 — `S10_ROW3`

### ANCHOR / SPOKEN PHRASE
`Now row three.`

### WHAT APPEARS NOW
Shift scan focus to row3 interior.

### CENTER-STAGE HERO
Interior row3.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Prepare important source discovery.

### WHAT MUST NOT APPEAR YET
No values before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row3 active.

### PERSISTENT STATE
Row3 scan.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 29 — `S10_17`

### ANCHOR / SPOKEN PHRASE
`Seventeen`

### WHAT APPEARS NOW
Focus 17; nonzero.

### CENTER-STAGE HERO
Cell (3,1)=17.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No marker effect.

### WHAT MUST NOT APPEAR YET
18/0 hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Shift next.

### PERSISTENT STATE
No change.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Trace scan.
## BEAT 30 — `S10_18`

### ANCHOR / SPOKEN PHRASE
`eighteen`

### WHAT APPEARS NOW
Focus 18; nonzero.

### CENTER-STAGE HERO
Cell (3,2)=18.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No marker effect.

### WHAT MUST NOT APPEAR YET
Zero at (3,3) not hero yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Shift next.

### PERSISTENT STATE
No change.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Trace scan.
## BEAT 31 — `S10_Z33`

### ANCHOR / SPOKEN PHRASE
`then zero at row three, column three.`

### WHAT APPEARS NOW
Focus exact original zero (3,3).

### CENTER-STAGE HERO
Interior source (3,3)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Source becomes hero.

### WHAT MUST NOT APPEAR YET
Do not write boundary markers before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source active.

### PERSISTENT STATE
Interior zero found.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Cause setup.
## BEAT 32 — `S10_IMPORTANT`

### ANCHOR / SPOKEN PHRASE
`This is our important interior zero.`

### WHAT APPEARS NOW
Strengthen source emphasis and briefly show its row/column coordinate guides; no destinations highlighted yet.

### CENTER-STAGE HERO
Source (3,3).

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration marks importance.

### WHAT MUST NOT APPEAR YET
No marker write.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source active.

### PERSISTENT STATE
Source ready to project.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 33 — `S10_MARKROW`

### ANCHOR / SPOKEN PHRASE
`Mark its row.`

### WHAT APPEARS NOW
Begin horizontal semantic relation left from (3,3) toward row boundary, but do not change value yet.

### CENTER-STAGE HERO
Row marker destination unresolved until expression.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration authorizes row marker action.

### WHAT MUST NOT APPEAR YET
Do not write 0 until exact matrix[3][0] phrase/change.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep relation.

### PERSISTENT STATE
Row-marker action active.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Cause setup.
## BEAT 34 — `S10_M30`

### ANCHOR / SPOKEN PHRASE
`matrix[3][0] changes from sixteen`

### WHAT APPEARS NOW
Complete relation to (3,0); focus current value16.

### CENTER-STAGE HERO
Boundary cell (3,0)=16.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names exact destination and old value.

### WHAT MUST NOT APPEAR YET
Do not change to 0 before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep destination active.

### PERSISTENT STATE
(3,0)=16 selected.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Exact state trace.
## BEAT 35 — `S10_M30ZERO`

### ANCHOR / SPOKEN PHRASE
`to zero.`

### WHAT APPEARS NOW
Change 16→0 in fixed boundary cell; source (3,3) remains 0.

### CENTER-STAGE HERO
Marker write (3,0):16→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states new value.

### WHAT MUST NOT APPEAR YET
One state mutation only.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear horizontal relation; keep new marker.

### PERSISTENT STATE
matrix[3][0]=0.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Cause→effect.
## BEAT 36 — `S10_MARKCOL`

### ANCHOR / SPOKEN PHRASE
`Then mark its column.`

### WHAT APPEARS NOW
Begin vertical relation upward from (3,3) toward first row.

### CENTER-STAGE HERO
Column marker action.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration authorizes second marker.

### WHAT MUST NOT APPEAR YET
No destination change yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep relation.

### PERSISTENT STATE
Column marker action active.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Cause setup.
## BEAT 37 — `S10_M03`

### ANCHOR / SPOKEN PHRASE
`matrix[0][3] changes from four`

### WHAT APPEARS NOW
Complete vertical relation to (0,3); focus old value4.

### CENTER-STAGE HERO
Boundary cell (0,3)=4.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names exact destination.

### WHAT MUST NOT APPEAR YET
Do not change before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep destination active.

### PERSISTENT STATE
(0,3)=4 selected.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Exact state trace.
## BEAT 38 — `S10_M03ZERO`

### ANCHOR / SPOKEN PHRASE
`to zero.`

### WHAT APPEARS NOW
Change 4→0 in place.

### CENTER-STAGE HERO
Marker write (0,3):4→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states mutation.

### WHAT MUST NOT APPEAR YET
Second marker write only.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear vertical relation.

### PERSISTENT STATE
matrix[0][3]=0.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Cause→effect.
## BEAT 39 — `S10_SENT`

### ANCHOR / SPOKEN PHRASE
`The zero at row three, column three has now sent its information to the boundary.`

### WHAT APPEARS NOW
Briefly show (3,3) linked conceptually to new (3,0)=0 and (0,3)=0, then remove paths.

### CENTER-STAGE HERO
Source + two boundary markers.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration summarizes completed projection.

### WHAT MUST NOT APPEAR YET
No additional markers.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear source emphasis; keep boundary zeros.

### PERSISTENT STATE
Marker matrix partially updated.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Summarize flow.
## BEAT 40 — `S10_20`

### ANCHOR / SPOKEN PHRASE
`Continue the scan. Twenty is not zero.`

### WHAT APPEARS NOW
Focus 20; resolve nonzero.

### CENTER-STAGE HERO
Cell (3,4)=20.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No marker changes.

### WHAT MUST NOT APPEAR YET
No row4 outcome early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Shift scan.

### PERSISTENT STATE
Marker state unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Trace scan.
## BEAT 41 — `S10_ROW4NO`

### ANCHOR / SPOKEN PHRASE
`Row four has no interior zero so there are no more marker writes.`

### WHAT APPEARS NOW
Scan/confirm row4 interior as clear without replaying each value; no marker mutation.

### CENTER-STAGE HERO
Row4 interior clear.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration authorizes compressed no-op.

### WHAT MUST NOT APPEAR YET
Do not change row4.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
End discovery scan.

### PERSISTENT STATE
Final marker discovery state ready.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Close discovery.
## BEAT 42 — `S10_MARKERMAT`

### ANCHOR / SPOKEN PHRASE
`Our marker matrix is now`

### WHAT APPEARS NOW
Remove scan focus; whole matrix becomes hero in current marker state.

### CENTER-STAGE HERO
Marker matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration announces exact state readout.

### WHAT MUST NOT APPEAR YET
Do not pre-speak values; populate/focus rows on their spoken tokens.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep matrix.

### PERSISTENT STATE
Marker matrix hero.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Prepare state confirmation.
## BEAT 43 — `S10_MM0`

### ANCHOR / SPOKEN PHRASE
`one two zero zero five.`

### WHAT APPEARS NOW
Focus/read row0 [1,2,0,0,5] in spoken order.

### CENTER-STAGE HERO
Marker row0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Later rows not pre-focused.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row0 state.

### PERSISTENT STATE
Marker matrix row0 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 44 — `S10_MM1`

### ANCHOR / SPOKEN PHRASE
`Six seven eight nine ten.`

### WHAT APPEARS NOW
Read row1.

### CENTER-STAGE HERO
Marker row1.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Later rows not pre-focused.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
Row1 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 45 — `S10_MM2`

### ANCHOR / SPOKEN PHRASE
`Zero twelve thirteen fourteen fifteen.`

### WHAT APPEARS NOW
Read row2.

### CENTER-STAGE HERO
Marker row2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Later rows not pre-focused.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
Row2 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 46 — `S10_MM3`

### ANCHOR / SPOKEN PHRASE
`Zero seventeen eighteen zero twenty.`

### WHAT APPEARS NOW
Read row3, visibly confirming new marker at (3,0) and original zero at (3,3).

### CENTER-STAGE HERO
Marker row3.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Row4 not yet read.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
Row3 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 47 — `S10_MM4`

### ANCHOR / SPOKEN PHRASE
`Twenty-one twenty-two twenty-three twenty-four twenty-five.`

### WHAT APPEARS NOW
Read row4; marker matrix confirmation complete.

### CENTER-STAGE HERO
Marker row4.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Do not apply markers before next phase narration.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep full marker matrix.

### PERSISTENT STATE
Marker matrix locked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 48 — `S10_READBOUND`

### ANCHOR / SPOKEN PHRASE
`Now read the boundary as memory.`

### WHAT APPEARS NOW
Interior dims; first column and first row get marker-role emphasis.

### CENTER-STAGE HERO
Boundary memory.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration shifts from discovery to interpretation.

### WHAT MUST NOT APPEAR YET
No interior mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep boundary active.

### PERSISTENT STATE
Marker interpretation phase.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Semantic phase change.
## BEAT 49 — `S10_FC6`

### ANCHOR / SPOKEN PHRASE
`In the first column row one has six.`

### WHAT APPEARS NOW
Focus (1,0)=6.

### CENTER-STAGE HERO
Boundary (1,0)=6.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Read marker value.

### WHAT MUST NOT APPEAR YET
No row mutation.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep through consequence.

### PERSISTENT STATE
row1 marker=6.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Read boundary.
## BEAT 50 — `S10_R1KEEP`

### ANCHOR / SPOKEN PHRASE
`So row one itself is not marked.`

### WHAT APPEARS NOW
Brief row1 region cue resolves keep-as-row.

### CENTER-STAGE HERO
Row1 unmarked.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No values mutate.

### WHAT MUST NOT APPEAR YET
Do not process next row early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce row cue.

### PERSISTENT STATE
row1 unmarked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Interpret marker.
## BEAT 51 — `S10_FC0R2`

### ANCHOR / SPOKEN PHRASE
`Row two has zero.`

### WHAT APPEARS NOW
Focus row2 marker.

### CENTER-STAGE HERO
Boundary (2,0)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Marker zero read.

### WHAT MUST NOT APPEAR YET
Do not zero row2 yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cause.

### PERSISTENT STATE
row2 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Read boundary.
## BEAT 52 — `S10_R2MUST`

### ANCHOR / SPOKEN PHRASE
`So row two must become zero.`

### WHAT APPEARS NOW
Show row2 region with future-zero semantic cue; no mutation yet.

### CENTER-STAGE HERO
Row2 marked meaning.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Interpret marker.

### WHAT MUST NOT APPEAR YET
Application phase not started.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
row2 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Interpret marker.
## BEAT 53 — `S10_FC0R3`

### ANCHOR / SPOKEN PHRASE
`Row three has zero.`

### WHAT APPEARS NOW
Focus row3 marker.

### CENTER-STAGE HERO
Boundary (3,0)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Marker read.

### WHAT MUST NOT APPEAR YET
No row3 mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cause.

### PERSISTENT STATE
row3 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Read boundary.
## BEAT 54 — `S10_R3MUST`

### ANCHOR / SPOKEN PHRASE
`So row three must become zero.`

### WHAT APPEARS NOW
Show future-zero row cue.

### CENTER-STAGE HERO
Row3 marked meaning.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Interpret marker.

### WHAT MUST NOT APPEAR YET
Do not apply yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
row3 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Interpret marker.
## BEAT 55 — `S10_FC21`

### ANCHOR / SPOKEN PHRASE
`Row four has twenty-one.`

### WHAT APPEARS NOW
Focus row4 marker.

### CENTER-STAGE HERO
Boundary (4,0)=21.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Read nonzero marker.

### WHAT MUST NOT APPEAR YET
No mutation.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep through consequence.

### PERSISTENT STATE
row4 marker=21.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Read boundary.
## BEAT 56 — `S10_R4KEEP`

### ANCHOR / SPOKEN PHRASE
`So row four itself is not marked.`

### WHAT APPEARS NOW
Resolve row4 as not whole-row marked.

### CENTER-STAGE HERO
Row4 unmarked.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Do not inspect columns early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce row cue.

### PERSISTENT STATE
row4 unmarked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Interpret marker.
## BEAT 57 — `S10_FR2`

### ANCHOR / SPOKEN PHRASE
`Across the first row column one has two.`

### WHAT APPEARS NOW
Focus top marker for col1.

### CENTER-STAGE HERO
Boundary (0,1)=2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Read marker.

### WHAT MUST NOT APPEAR YET
No column effect yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep through next phrase.

### PERSISTENT STATE
col1 marker=2.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Read boundary.
## BEAT 58 — `S10_KEEP1`

### ANCHOR / SPOKEN PHRASE
`Keep that column.`

### WHAT APPEARS NOW
Brief column1 region cue resolves keep.

### CENTER-STAGE HERO
Column1 unmarked.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Do not inspect col2 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
col1 unmarked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Interpret marker.
## BEAT 59 — `S10_FR0C2`

### ANCHOR / SPOKEN PHRASE
`Column two has zero.`

### WHAT APPEARS NOW
Focus col2 marker.

### CENTER-STAGE HERO
Boundary (0,2)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Read marker.

### WHAT MUST NOT APPEAR YET
No application yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cause.

### PERSISTENT STATE
col2 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Read boundary.
## BEAT 60 — `S10_ZERO2`

### ANCHOR / SPOKEN PHRASE
`Zero that column.`

### WHAT APPEARS NOW
Future-zero cue on col2; values stay for now.

### CENTER-STAGE HERO
Column2 marked meaning.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Interpret marker.

### WHAT MUST NOT APPEAR YET
Do not mutate before application phase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
col2 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Interpret marker.
## BEAT 61 — `S10_FR0C3`

### ANCHOR / SPOKEN PHRASE
`Column three has zero.`

### WHAT APPEARS NOW
Focus col3 marker.

### CENTER-STAGE HERO
Boundary (0,3)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Read marker.

### WHAT MUST NOT APPEAR YET
No application yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cause.

### PERSISTENT STATE
col3 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Read boundary.
## BEAT 62 — `S10_ZERO3`

### ANCHOR / SPOKEN PHRASE
`Zero that column.`

### WHAT APPEARS NOW
Future-zero cue on col3; no mutation.

### CENTER-STAGE HERO
Column3 marked meaning.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Interpret marker.

### WHAT MUST NOT APPEAR YET
Do not apply yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
col3 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Interpret marker.
## BEAT 63 — `S10_FR5`

### ANCHOR / SPOKEN PHRASE
`Column four has five.`

### WHAT APPEARS NOW
Focus col4 marker.

### CENTER-STAGE HERO
Boundary (0,4)=5.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Read marker.

### WHAT MUST NOT APPEAR YET
No mutation.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep through consequence.

### PERSISTENT STATE
col4 marker=5.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Read boundary.
## BEAT 64 — `S10_KEEP4`

### ANCHOR / SPOKEN PHRASE
`Keep that column.`

### WHAT APPEARS NOW
Resolve keep.

### CENTER-STAGE HERO
Column4 unmarked.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Do not apply yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear interpretation cues.

### PERSISTENT STATE
col4 unmarked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Interpret marker.
## BEAT 65 — `S10_APPLY`

### ANCHOR / SPOKEN PHRASE
`Now apply those markers to the interior.`

### WHAT APPEARS NOW
Boundary stays quiet support; interior becomes active region again.

### CENTER-STAGE HERO
Interior application phase.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration starts mutation phase.

### WHAT MUST NOT APPEAR YET
No cell change before specific decision.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep application setup.

### PERSISTENT STATE
Boundary gate active.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Phase transition.
## BEAT 66 — `S10_ROW1APP`

### ANCHOR / SPOKEN PHRASE
`Start with row one.`

### WHAT APPEARS NOW
Focus row1 interior only.

### CENTER-STAGE HERO
Row1 interior.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Prepare cell-level boundary gate.

### WHAT MUST NOT APPEAR YET
No mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row1 active.

### PERSISTENT STATE
Row1 application.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 67 — `S10_11`

### ANCHOR / SPOKEN PHRASE
`At row one, column one`

### WHAT APPEARS NOW
Focus (1,1).

### CENTER-STAGE HERO
Cell (1,1)=7.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Cell asks boundary gates.

### WHAT MUST NOT APPEAR YET
No marker values before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cell.

### PERSISTENT STATE
Current cell 7.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Set up gate.
## BEAT 68 — `S10_11R`

### ANCHOR / SPOKEN PHRASE
`the row marker is six`

### WHAT APPEARS NOW
Draw temporary relation from cell to left boundary marker.

### CENTER-STAGE HERO
Left marker (1,0)=6.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Read first gate.

### WHAT MUST NOT APPEAR YET
Top marker hidden until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep relation quiet.

### PERSISTENT STATE
row gate nonzero.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Teach gate.
## BEAT 69 — `S10_11C`

### ANCHOR / SPOKEN PHRASE
`and the column marker is two.`

### WHAT APPEARS NOW
Add top-marker relation; row relation quiet support.

### CENTER-STAGE HERO
Top marker (0,1)=2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Read second gate.

### WHAT MUST NOT APPEAR YET
No result before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both gate values.

### PERSISTENT STATE
both nonzero.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Teach gate.
## BEAT 70 — `S10_NEITHER`

### ANCHOR / SPOKEN PHRASE
`Neither is zero.`

### WHAT APPEARS NOW
Both boundary values get false/no-zero confirmation.

### CENTER-STAGE HERO
Gate result false.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
OR condition resolves false.

### WHAT MUST NOT APPEAR YET
Do not change 7.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relations after result.

### PERSISTENT STATE
7 still present.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Resolve gate.
## BEAT 71 — `S10_7STAYS`

### ANCHOR / SPOKEN PHRASE
`So seven stays.`

### WHAT APPEARS NOW
Brief good confirmation; no movement.

### CENTER-STAGE HERO
7 survivor.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states result.

### WHAT MUST NOT APPEAR YET
No 8 result early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
7 survives.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 72 — `S10_C2APP`

### ANCHOR / SPOKEN PHRASE
`At column two the top marker is zero.`

### WHAT APPEARS NOW
Focus cell8 and top boundary marker; direct vertical relation.

### CENTER-STAGE HERO
Cell (1,2)=8 with top marker (0,2)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Column gate true.

### WHAT MUST NOT APPEAR YET
Do not mutate before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cause.

### PERSISTENT STATE
8 selected; top marker zero.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Teach gate.
## BEAT 73 — `S10_8ZERO`

### ANCHOR / SPOKEN PHRASE
`So eight becomes zero.`

### WHAT APPEARS NOW
Change 8→0 in place.

### CENTER-STAGE HERO
(1,2):8→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Marker cause produces mutation.

### WHAT MUST NOT APPEAR YET
No 9 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
8→0.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Cause→effect.
## BEAT 74 — `S10_C3APP`

### ANCHOR / SPOKEN PHRASE
`At column three the top marker is also zero.`

### WHAT APPEARS NOW
Focus 9 and col3 marker relation.

### CENTER-STAGE HERO
Cell (1,3)=9 + top marker (0,3)=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Column gate true.

### WHAT MUST NOT APPEAR YET
Do not mutate yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cause.

### PERSISTENT STATE
9 selected.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Teach gate.
## BEAT 75 — `S10_9ZERO`

### ANCHOR / SPOKEN PHRASE
`So nine becomes zero.`

### WHAT APPEARS NOW
Change 9→0.

### CENTER-STAGE HERO
(1,3):9→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Cause→effect.

### WHAT MUST NOT APPEAR YET
No 10 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
9→0.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Cause→effect.
## BEAT 76 — `S10_C4APP`

### ANCHOR / SPOKEN PHRASE
`At column four neither marker is zero.`

### WHAT APPEARS NOW
Show both gate references 6 and5.

### CENTER-STAGE HERO
Cell (1,4)=10 with row6/top5.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
OR resolves false.

### WHAT MUST NOT APPEAR YET
Do not change 10.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relations.

### PERSISTENT STATE
10 stays.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Resolve gate.
## BEAT 77 — `S10_10STAYS`

### ANCHOR / SPOKEN PHRASE
`So ten stays.`

### WHAT APPEARS NOW
Brief keep confirmation.

### CENTER-STAGE HERO
10 survivor.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states result.

### WHAT MUST NOT APPEAR YET
No row2 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
Row1 interior final [7,0,0,10].

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm row1.
## BEAT 78 — `S10_ROW2EASY`

### ANCHOR / SPOKEN PHRASE
`Row two is easier.`

### WHAT APPEARS NOW
Shift focus to row2 and left marker (2,0)=0.

### CENTER-STAGE HERO
Row2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration signals compressed rule.

### WHAT MUST NOT APPEAR YET
No mutation before marker phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row2.

### PERSISTENT STATE
Row2 active.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Transition.
## BEAT 79 — `S10_R2MARK`

### ANCHOR / SPOKEN PHRASE
`Its row marker is zero.`

### WHAT APPEARS NOW
Focus left marker.

### CENTER-STAGE HERO
row2 marker=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Whole-row gate true.

### WHAT MUST NOT APPEAR YET
Do not mutate before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cause.

### PERSISTENT STATE
row2 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Teach decisive marker.
## BEAT 80 — `S10_R2ALL`

### ANCHOR / SPOKEN PHRASE
`So every interior cell in row two becomes zero.`

### WHAT APPEARS NOW
One row sweep changes 12,13,14,15→0.

### CENTER-STAGE HERO
Row2 interior all zero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Whole-row effect.

### WHAT MUST NOT APPEAR YET
Do not touch boundary row/col beyond already marker cell.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Settle row2.

### PERSISTENT STATE
row2 all zero.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Cause→effect.
## BEAT 81 — `S10_R3MARK`

### ANCHOR / SPOKEN PHRASE
`Row three is also marked.`

### WHAT APPEARS NOW
Shift to row3 left marker0.

### CENTER-STAGE HERO
row3 marker=0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Same learned rule applies.

### WHAT MUST NOT APPEAR YET
No mutation before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cause.

### PERSISTENT STATE
row3 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Semantic reuse.
## BEAT 82 — `S10_R3ALL`

### ANCHOR / SPOKEN PHRASE
`So every interior cell in row three becomes zero.`

### WHAT APPEARS NOW
One row sweep changes 17,18,20→0; existing (3,3)=0 stays.

### CENTER-STAGE HERO
Row3 interior all zero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Whole-row effect.

### WHAT MUST NOT APPEAR YET
No row4 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Settle row3.

### PERSISTENT STATE
row3 all zero.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Cause→effect.
## BEAT 83 — `S10_ROW4APP`

### ANCHOR / SPOKEN PHRASE
`Now row four.`

### WHAT APPEARS NOW
Focus row4 and left marker21.

### CENTER-STAGE HERO
Row4.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Prepare mixed-column decisions.

### WHAT MUST NOT APPEAR YET
No cell results early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row4 active.

### PERSISTENT STATE
row4 not row-marked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 84 — `S10_R4NOT`

### ANCHOR / SPOKEN PHRASE
`Its row marker is not zero.`

### WHAT APPEARS NOW
Confirm left marker nonzero.

### CENTER-STAGE HERO
row4 marker21.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No whole-row mutation.

### WHAT MUST NOT APPEAR YET
Do not decide columns before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row4.

### PERSISTENT STATE
row4 uses column gates.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Resolve row gate.
## BEAT 85 — `S10_COL1NOT`

### ANCHOR / SPOKEN PHRASE
`Column one is not marked so twenty-two stays.`

### WHAT APPEARS NOW
Top marker2 projects to 22; confirm keep.

### CENTER-STAGE HERO
(4,1)=22.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Column gate false.

### WHAT MUST NOT APPEAR YET
No 23 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
22 survives.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Cause/result.
## BEAT 86 — `S10_COL2YES`

### ANCHOR / SPOKEN PHRASE
`Column two is marked so twenty-three becomes zero.`

### WHAT APPEARS NOW
Top marker0→23; mutate.

### CENTER-STAGE HERO
(4,2):23→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Column gate true.

### WHAT MUST NOT APPEAR YET
No 24 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
23→0.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Cause→effect.
## BEAT 87 — `S10_COL3YES`

### ANCHOR / SPOKEN PHRASE
`Column three is marked so twenty-four becomes zero.`

### WHAT APPEARS NOW
Top marker0→24; mutate.

### CENTER-STAGE HERO
(4,3):24→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Column gate true.

### WHAT MUST NOT APPEAR YET
No 25 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
24→0.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Cause→effect.
## BEAT 88 — `S10_COL4NOT`

### ANCHOR / SPOKEN PHRASE
`Column four is not marked so twenty-five stays.`

### WHAT APPEARS NOW
Top marker5→25; confirm keep.

### CENTER-STAGE HERO
(4,4)=25.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Column gate false.

### WHAT MUST NOT APPEAR YET
No boundary finalization yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
25 survives.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Cause/result.
## BEAT 89 — `S10_INTERIOR_DONE`

### ANCHOR / SPOKEN PHRASE
`The interior is finished.`

### WHAT APPEARS NOW
Remove active-cell relations; show exact current matrix before boundary finalization.

### CENTER-STAGE HERO
Interior-applied matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration closes interior application.

### WHAT MUST NOT APPEAR YET
Do not change first row/col yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep current matrix.

### PERSISTENT STATE
Interior final; boundaries still marker state.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Phase boundary.
## BEAT 90 — `S10_ATPOINT`

### ANCHOR / SPOKEN PHRASE
`At this point the matrix is`

### WHAT APPEARS NOW
Prepare row-by-row readout of current state.

### CENTER-STAGE HERO
Current intermediate matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
Do not pre-read rows.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep matrix.

### PERSISTENT STATE
Intermediate matrix hero.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 91 — `S10_I0`

### ANCHOR / SPOKEN PHRASE
`one two zero zero five.`

### WHAT APPEARS NOW
Read row0 [1,2,0,0,5].

### CENTER-STAGE HERO
Intermediate row0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Later rows not pre-focused.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
row0 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 92 — `S10_I1`

### ANCHOR / SPOKEN PHRASE
`Six seven zero zero ten.`

### WHAT APPEARS NOW
Read row1.

### CENTER-STAGE HERO
Intermediate row1.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Later rows not pre-focused.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
row1 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 93 — `S10_I2`

### ANCHOR / SPOKEN PHRASE
`Zero zero zero zero zero.`

### WHAT APPEARS NOW
Read row2.

### CENTER-STAGE HERO
Intermediate row2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Later rows not pre-focused.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
row2 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 94 — `S10_I3`

### ANCHOR / SPOKEN PHRASE
`Zero zero zero zero zero.`

### WHAT APPEARS NOW
Read row3.

### CENTER-STAGE HERO
Intermediate row3.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
row4 not pre-focused.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
row3 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 95 — `S10_I4`

### ANCHOR / SPOKEN PHRASE
`Twenty-one twenty-two zero zero twenty-five.`

### WHAT APPEARS NOW
Read row4.

### CENTER-STAGE HERO
Intermediate row4.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Do not finalize boundary before marker job done phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep full state.

### PERSISTENT STATE
Intermediate matrix locked.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm state.
## BEAT 96 — `S10_MARKDONE`

### ANCHOR / SPOKEN PHRASE
`Now the marker job is done.`

### WHAT APPEARS NOW
Marker-role labels on first row/col fade/reduce; matrix values stay.

### CENTER-STAGE HERO
Boundary role ends.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Boundary no longer needed as marker memory.

### WHAT MUST NOT APPEAR YET
Do not zero boundary yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep saved flags visible.

### PERSISTENT STATE
Ready for saved flags.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach lifecycle.
## BEAT 97 — `S10_BRINGROW`

### ANCHOR / SPOKEN PHRASE
`Bring back the saved first-row fact.`

### WHAT APPEARS NOW
Promote firstRowZero compact fact.

### CENTER-STAGE HERO
firstRowZero=true.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration retrieves saved history.

### WHAT MUST NOT APPEAR YET
Do not mutate row0 before truth phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep flag active.

### PERSISTENT STATE
firstRowZero=true.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Semantic handoff.
## BEAT 98 — `S10_FRTRUE`

### ANCHOR / SPOKEN PHRASE
`firstRowZero is true.`

### WHAT APPEARS NOW
Emphasize literal true value.

### CENTER-STAGE HERO
Flag true.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Saved history says row0 originally had zero.

### WHAT MUST NOT APPEAR YET
Do not zero row until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep relation ready.

### PERSISTENT STATE
row0 must zero.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Cause setup.
## BEAT 99 — `S10_ROW0ZERO`

### ANCHOR / SPOKEN PHRASE
`So the complete first row becomes zero.`

### WHAT APPEARS NOW
Project flag→row0 and change 1,2,5→0; existing zeros stay.

### CENTER-STAGE HERO
Row0 all zero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Flag causes boundary finalization.

### WHAT MUST NOT APPEAR YET
Do not finalize col0 yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear row relation; keep updated matrix.

### PERSISTENT STATE
row0 all zero.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Cause→effect.
## BEAT 100 — `S10_BRINGCOL`

### ANCHOR / SPOKEN PHRASE
`Then bring back the first-column fact.`

### WHAT APPEARS NOW
Promote firstColZero.

### CENTER-STAGE HERO
firstColZero=true.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration retrieves second saved fact.

### WHAT MUST NOT APPEAR YET
Do not mutate column before truth phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep flag active.

### PERSISTENT STATE
firstColZero=true.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Semantic handoff.
## BEAT 101 — `S10_FCTRUE`

### ANCHOR / SPOKEN PHRASE
`firstColZero is also true.`

### WHAT APPEARS NOW
Emphasize true.

### CENTER-STAGE HERO
Flag true.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Saved history says col0 originally had zero.

### WHAT MUST NOT APPEAR YET
Do not mutate before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep relation ready.

### PERSISTENT STATE
col0 must zero.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Cause setup.
## BEAT 102 — `S10_COL0ZERO`

### ANCHOR / SPOKEN PHRASE
`So the complete first column becomes zero.`

### WHAT APPEARS NOW
Project flag→col0; 6 and21 become0; existing zeros stay.

### CENTER-STAGE HERO
Column0 all zero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Flag causes final boundary mutation.

### WHAT MUST NOT APPEAR YET
No final readout before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Final matrix achieved.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Cause→effect.
## BEAT 103 — `S10_FINAL`

### ANCHOR / SPOKEN PHRASE
`Our final matrix is`

### WHAT APPEARS NOW
Remove flags/relations; matrix alone owns center.

### CENTER-STAGE HERO
Verified final matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration announces final readout.

### WHAT MUST NOT APPEAR YET
Do not pre-speak rows.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep matrix.

### PERSISTENT STATE
Final output hero.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Prepare confirmation.
## BEAT 104 — `S10_F0`

### ANCHOR / SPOKEN PHRASE
`zero zero zero zero zero.`

### WHAT APPEARS NOW
Read row0.

### CENTER-STAGE HERO
Final row0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Later rows not pre-focused.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
Final row0 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm result.
## BEAT 105 — `S10_F1`

### ANCHOR / SPOKEN PHRASE
`zero seven zero zero ten.`

### WHAT APPEARS NOW
Read row1.

### CENTER-STAGE HERO
Final row1.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Later rows hidden from active focus.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep state.

### PERSISTENT STATE
Final row1 confirmed.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm result.
## BEAT 106 — `S10_F2`

### ANCHOR / SPOKEN PHRASE
`zero zero zero zero zero.`

### WHAT APPEARS NOW
Read row2.

### CENTER-STAGE HERO
Final row2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
Later rows not pre-focused.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Final row2.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm result.
## BEAT 107 — `S10_F3`

### ANCHOR / SPOKEN PHRASE
`zero zero zero zero zero.`

### WHAT APPEARS NOW
Read row3.

### CENTER-STAGE HERO
Final row3.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change.

### WHAT MUST NOT APPEAR YET
row4 not active yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep.

### PERSISTENT STATE
Final row3.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm result.
## BEAT 108 — `S10_F4`

### ANCHOR / SPOKEN PHRASE
`zero twenty-two zero zero twenty-five.`

### WHAT APPEARS NOW
Read row4; output confirmation complete.

### CENTER-STAGE HERO
Final row4.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No mutation.

### WHAT MUST NOT APPEAR YET
No code yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep final matrix briefly.

### PERSISTENT STATE
Verified final output.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Confirm result.
## BEAT 109 — `S10_CORRECT`

### ANCHOR / SPOKEN PHRASE
`That is the correct result`

### WHAT APPEARS NOW
Brief good confirmation near matrix.

### CENTER-STAGE HERO
Correct output.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration confirms correctness.

### WHAT MUST NOT APPEAR YET
No complexity yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce good cue.

### PERSISTENT STATE
Final matrix remains.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Close trace.
## BEAT 110 — `S10_SPACE`

### ANCHOR / SPOKEN PHRASE
`using constant extra space.`

### WHAT APPEARS NOW
Reduce final matrix slightly and show only two compact boolean facts beside it; no external arrays/copy.

### CENTER-STAGE HERO
One matrix + two booleans.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states memory property.

### WHAT MUST NOT APPEAR YET
Do not show Big-O graph.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare code handoff.

### PERSISTENT STATE
Storage model known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Connect trace to space.


---

# 9. CONTINUITY OUT

Scene11 receives only:

```text
OPTIMAL ORDER VERIFIED
firstRowZero / firstColZero
mark interior via boundary
apply markers to interior
finalize row0 / col0
```

The full trace matrix may reduce before code begins.

---

# 10. PHASE-12 CONVERSION CONTRACT

```text
PHASE-9 ANCHOR
+ FINAL WORD SYNC
→ WORD IDS
→ EXACT SECONDS
→ EXACT [startFrame,endFrameExclusive)
→ SAME VISUAL LOGIC
```

Phase 12 resolves **when**, not **what**.

---

# ANTIGRAVITY POST-AUDIO CONVERSION — REQUIRED FOR THIS SCENE

After the final MP3 + exact word-sync JSON are supplied, Antigravity must convert **this exact Phase-9 plan** to frames using:

`ANTIGRAVITY_POST_AUDIO_WORDSYNC_TO_FRAMES.md`

For every `ANCHOR ID` in this scene:

```text
exact anchor phrase
→ unique contiguous word IDs from final sync
→ first word exact start
→ last word exact end
→ startFrame = floor(start × 30)
→ endFrameExclusive = ceil(end × 30)
```

Then generate:

```text
SceneXX_FRAME_PLAN.md
```

using `[startFrame,endFrameExclusive)`.

Rules for this scene:

```text
DO NOT redesign this Phase-9 choreography.
DO NOT invent seconds or frame offsets.
DO NOT add a hold unless the audio has a real gap.
DO NOT reveal a future state before its exact spoken word.
DO NOT implement until unmatched anchors = 0.
```

If the actual audio wording differs materially from the approved narration:

```text
BLOCKED — AUDIO / SCRIPT MISMATCH
```

If a required kit/component API is missing:

```text
BLOCKED — SOURCE REQUIRED
```

Only after the exact frame plan passes audit may Antigravity implement, typecheck, render, visually QA, repair, and move to the next scene automatically.
