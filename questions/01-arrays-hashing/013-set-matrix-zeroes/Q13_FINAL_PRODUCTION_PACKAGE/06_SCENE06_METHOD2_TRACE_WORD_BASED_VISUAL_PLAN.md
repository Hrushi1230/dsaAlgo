# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 06 — Method 2 Trace — Row and Column Marker Arrays
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Execute Method2 with the unique Projection Rails language: original zeros project information out to rowZero/colZero; after discovery, those markers project decisions back into the matrix.

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

Scene06 inherits Method2 structures from Scene05.

```text
master matrix available
rowZero structure exists
colZero structure exists
boolean values uninitialized until spoken
```

---

# 2. EXACT NARRATION SOURCE

```text
We create two marker arrays.

`rowZero` has one boolean for every row.

`colZero` has one boolean for every column.

Initially...

everything is false.

Now scan the matrix.

Our first original zero is at row zero, column two.

So mark:

row zero... true.

And column two... true.

The next original zero is at row two, column zero.

So:

row two... true.

Column zero... true.

Then we reach the interior zero at row three, column three.

Mark:

row three... true.

Column three... true.

Discovery is finished.

Our row markers are:

true... false... true... true... false.

And our column markers are:

true... false... true... true... false.

Now the information flows back into the matrix.

Take row one.

Its row marker is false.

So row one is not completely zero.

But column zero is marked...

so the first cell becomes zero.

Column one is not marked...

so seven stays.

Column two is marked...

so eight becomes zero.

Column three is marked...

so nine becomes zero.

Column four is not marked...

so ten stays.

Now row two.

Its row marker is true.

That one fact is enough.

Every cell in row two becomes zero.

The same happens to row three.

Its row marker is also true.

Finally, row four is not marked.

So only the marked columns change.

Twenty-two survives.

Twenty-three becomes zero.

Twenty-four becomes zero.

Twenty-five survives.

And we reach the same correct answer.

This time we did not preserve the whole matrix.

We preserved only the information that matters.

Now let’s convert this idea into code.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Verified marker states:

```text
start     rowZero=[F,F,F,F,F]  colZero=[F,F,F,F,F]
after 0,2 rowZero=[T,F,F,F,F]  colZero=[F,F,T,F,F]
after 2,0 rowZero=[T,F,T,F,F]  colZero=[T,F,T,F,F]
after 3,3 rowZero=[T,F,T,T,F]  colZero=[T,F,T,T,F]
```

Verified final matrix:

```text
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

All marker arrays use the existing Array V2 grammar:

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
```

```text
SLOTS STAY FIXED.
VALUES / BOOLEAN STATE CHANGE IN PLACE.
INDICES NEVER MOVE.
```

Actual orientation/API must be read from the repository before implementation. Do not invent props.

---

# 6. SCENE-SPECIFIC RULES

- Unique identity = PROJECTION RAILS.
- Discovery: matrix zero → row marker → column marker.
- Application: marker arrays → matrix.
- Exactly one marker/cell state changes at a time when narration reaches it.
- Array slots and indices never move.
- After learner understands row1 cell-level gates, rows with a true row marker may compress to one whole-row effect.
- Actual Array V2 orientation/geometry is `UNRESOLVED — REPO SOURCE REQUIRED`; do not invent it in Phase9.
- No first-row/first-column reuse or constant-space mechanics.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S06_CREATE` | `We create two marker arrays.` | Two empty marker structures. |
| `S06_ROWDEF` | `rowZero has one boolean for every row.` | rowZero slots 0..4. |
| `S06_COLDEF` | `colZero has one boolean for every column.` | colZero slots 0..4. |
| `S06_INIT` | `Initially everything is false.` | Both marker arrays initialized. |
| `S06_SCAN` | `Now scan the matrix.` | Master matrix. |
| `S06_Z1` | `Our first original zero is at row zero, column two.` | Source (0,2). |
| `S06_R0` | `row zero true.` | rowZero[0]. |
| `S06_C2` | `And column two true.` | colZero[2]. |
| `S06_Z2` | `The next original zero is at row two, column zero.` | Source (2,0). |
| `S06_R2` | `row two true.` | rowZero[2]. |
| `S06_C0` | `Column zero true.` | colZero[0]. |
| `S06_Z3` | `Then we reach the interior zero at row three, column three.` | Source (3,3). |
| `S06_R3` | `row three true.` | rowZero[3]. |
| `S06_C3` | `Column three true.` | colZero[3]. |
| `S06_DISC` | `Discovery is finished.` | Marker arrays. |
| `S06_ROWSTATE` | `Our row markers are true false true true false.` | rowZero final state. |
| `S06_COLSTATE` | `And our column markers are true false true true false.` | colZero final state. |
| `S06_BACK` | `Now the information flows back into the matrix.` | Matrix with marker rails. |
| `S06_ROW1` | `Take row one.` | Row1. |
| `S06_R1FALSE` | `Its row marker is false.` | rowZero[1]=F. |
| `S06_NOTALL` | `So row one is not completely zero.` | Unchanged row1. |
| `S06_C0CELL` | `But column zero is marked so the first cell becomes zero.` | (1,0):6→0. |
| `S06_C1CELL` | `Column one is not marked so seven stays.` | (1,1)=7. |
| `S06_C2CELL` | `Column two is marked so eight becomes zero.` | (1,2):8→0. |
| `S06_C3CELL` | `Column three is marked so nine becomes zero.` | (1,3):9→0. |
| `S06_C4CELL` | `Column four is not marked so ten stays.` | (1,4)=10. |
| `S06_ROW2` | `Now row two.` | Row2. |
| `S06_R2TRUE` | `Its row marker is true.` | rowZero[2]=T. |
| `S06_ONEFACT` | `That one fact is enough.` | rowZero[2]=T. |
| `S06_ROW2ZERO` | `Every cell in row two becomes zero.` | Row2 all zero. |
| `S06_ROW3` | `The same happens to row three.` | Row3. |
| `S06_R3TRUE` | `Its row marker is also true.` | rowZero[3]=T. |
| `S06_ROW4` | `Finally row four is not marked.` | Row4. |
| `S06_ONLYCOLS` | `So only the marked columns change.` | Row4 + colZero rail. |
| `S06_22` | `Twenty-two survives.` | (4,1)=22. |
| `S06_23` | `Twenty-three becomes zero.` | (4,2):23→0. |
| `S06_24` | `Twenty-four becomes zero.` | (4,3):24→0. |
| `S06_25` | `Twenty-five survives.` | (4,4)=25. |
| `S06_ANSWER` | `And we reach the same correct answer.` | Verified final matrix. |
| `S06_NOTFULL` | `This time we did not preserve the whole matrix.` | Marker arrays, no source copy. |
| `S06_ONLYINFO` | `We preserved only the information that matters.` | rowZero + colZero. |
| `S06_CODE` | `Now let’s convert this idea into code.` | Method2 invariant. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S06_CREATE`

### ANCHOR / SPOKEN PHRASE
`We create two marker arrays.`

### WHAT APPEARS NOW
Create `rowZero` and `colZero` Array V2 tracks; matrix is quiet support.

### CENTER-STAGE HERO
Two empty marker structures.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Structures enter without boolean values.

### WHAT MUST NOT APPEAR YET
No true/false values yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both tracks.

### PERSISTENT STATE
rowZero + colZero structures.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Introduce data structures.
## BEAT 02 — `S06_ROWDEF`

### ANCHOR / SPOKEN PHRASE
`rowZero has one boolean for every row.`

### WHAT APPEARS NOW
Promote rowZero; one fixed slot per matrix row.

### CENTER-STAGE HERO
rowZero slots 0..4.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Indices map directly to row identities.

### WHAT MUST NOT APPEAR YET
Do not initialize values yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep structure.

### PERSISTENT STATE
rowZero indexed.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Teach row mapping.
## BEAT 03 — `S06_COLDEF`

### ANCHOR / SPOKEN PHRASE
`colZero has one boolean for every column.`

### WHAT APPEARS NOW
Promote colZero; one fixed slot per matrix column.

### CENTER-STAGE HERO
colZero slots 0..4.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Indices map directly to column identities.

### WHAT MUST NOT APPEAR YET
No booleans yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both structures.

### PERSISTENT STATE
Both arrays indexed.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Teach column mapping.
## BEAT 04 — `S06_INIT`

### ANCHOR / SPOKEN PHRASE
`Initially everything is false.`

### WHAT APPEARS NOW
Fill every fixed marker slot with false.

### CENTER-STAGE HERO
Both marker arrays initialized.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Values appear in place; slots and indices do not move.

### WHAT MUST NOT APPEAR YET
No true marker early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep arrays.

### PERSISTENT STATE
rowZero=[F,F,F,F,F]; colZero=[F,F,F,F,F].

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Teach initial state.
## BEAT 05 — `S06_SCAN`

### ANCHOR / SPOKEN PHRASE
`Now scan the matrix.`

### WHAT APPEARS NOW
Return master matrix to center; marker arrays reduce to supporting rails.

### CENTER-STAGE HERO
Master matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Prepare current-cell attention only.

### WHAT MUST NOT APPEAR YET
No marker mutation before a source zero is spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep matrix + rails.

### PERSISTENT STATE
Discovery state.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Start discovery.
## BEAT 06 — `S06_Z1`

### ANCHOR / SPOKEN PHRASE
`Our first original zero is at row zero, column two.`

### WHAT APPEARS NOW
Focus only original zero (0,2).

### CENTER-STAGE HERO
Source (0,2).

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Source becomes pivot; rails remain false.

### WHAT MUST NOT APPEAR YET
No marker changes yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source active.

### PERSISTENT STATE
Current source (0,2).

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Direct attention.
## BEAT 07 — `S06_R0`

### ANCHOR / SPOKEN PHRASE
`row zero true.`

### WHAT APPEARS NOW
Project one temporary relation from (0,2) to rowZero[0].

### CENTER-STAGE HERO
rowZero[0].

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
F→T in place.

### WHAT MUST NOT APPEAR YET
colZero[2] remains false.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Erase relation; keep T.

### PERSISTENT STATE
rowZero=[T,F,F,F,F].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 08 — `S06_C2`

### ANCHOR / SPOKEN PHRASE
`And column two true.`

### WHAT APPEARS NOW
Project (0,2) to colZero[2].

### CENTER-STAGE HERO
colZero[2].

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
F→T in place.

### WHAT MUST NOT APPEAR YET
No next source yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Erase relation.

### PERSISTENT STATE
colZero=[F,F,T,F,F].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 09 — `S06_Z2`

### ANCHOR / SPOKEN PHRASE
`The next original zero is at row two, column zero.`

### WHAT APPEARS NOW
Focus original zero (2,0).

### CENTER-STAGE HERO
Source (2,0).

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Attention transfers; current marker states persist.

### WHAT MUST NOT APPEAR YET
Do not pre-mark both targets.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source active.

### PERSISTENT STATE
Source (2,0).

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Direct attention.
## BEAT 10 — `S06_R2`

### ANCHOR / SPOKEN PHRASE
`row two true.`

### WHAT APPEARS NOW
Project source to rowZero[2].

### CENTER-STAGE HERO
rowZero[2].

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
F→T.

### WHAT MUST NOT APPEAR YET
colZero[0] still false.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
rowZero=[T,F,T,F,F].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 11 — `S06_C0`

### ANCHOR / SPOKEN PHRASE
`Column zero true.`

### WHAT APPEARS NOW
Project source to colZero[0].

### CENTER-STAGE HERO
colZero[0].

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
F→T.

### WHAT MUST NOT APPEAR YET
No third source yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
colZero=[T,F,T,F,F].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 12 — `S06_Z3`

### ANCHOR / SPOKEN PHRASE
`Then we reach the interior zero at row three, column three.`

### WHAT APPEARS NOW
Focus original interior zero (3,3).

### CENTER-STAGE HERO
Source (3,3).

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Attention transfers.

### WHAT MUST NOT APPEAR YET
No marker update early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source active.

### PERSISTENT STATE
Source (3,3).

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Direct attention.
## BEAT 13 — `S06_R3`

### ANCHOR / SPOKEN PHRASE
`row three true.`

### WHAT APPEARS NOW
Project source to rowZero[3].

### CENTER-STAGE HERO
rowZero[3].

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
F→T.

### WHAT MUST NOT APPEAR YET
colZero[3] still false.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
rowZero=[T,F,T,T,F].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 14 — `S06_C3`

### ANCHOR / SPOKEN PHRASE
`Column three true.`

### WHAT APPEARS NOW
Project source to colZero[3].

### CENTER-STAGE HERO
colZero[3].

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
F→T.

### WHAT MUST NOT APPEAR YET
No matrix mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
colZero=[T,F,T,T,F].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 15 — `S06_DISC`

### ANCHOR / SPOKEN PHRASE
`Discovery is finished.`

### WHAT APPEARS NOW
Matrix reduces; marker arrays own center stage.

### CENTER-STAGE HERO
Marker arrays.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No state change, only phase handoff.

### WHAT MUST NOT APPEAR YET
Do not mutate matrix yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep arrays center.

### PERSISTENT STATE
Discovery complete.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Semantic phase transition.
## BEAT 16 — `S06_ROWSTATE`

### ANCHOR / SPOKEN PHRASE
`Our row markers are true false true true false.`

### WHAT APPEARS NOW
Read rowZero slots in spoken boolean order.

### CENTER-STAGE HERO
rowZero final state.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Focus walks fixed slots without changing values.

### WHAT MUST NOT APPEAR YET
Do not alter colZero.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep rowZero state.

### PERSISTENT STATE
rowZero=[T,F,T,T,F].

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Confirm memory.
## BEAT 17 — `S06_COLSTATE`

### ANCHOR / SPOKEN PHRASE
`And our column markers are true false true true false.`

### WHAT APPEARS NOW
Read colZero slots in spoken order.

### CENTER-STAGE HERO
colZero final state.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Focus walks fixed slots.

### WHAT MUST NOT APPEAR YET
No matrix mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both arrays.

### PERSISTENT STATE
colZero=[T,F,T,T,F].

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Confirm memory.
## BEAT 18 — `S06_BACK`

### ANCHOR / SPOKEN PHRASE
`Now the information flows back into the matrix.`

### WHAT APPEARS NOW
Return matrix to center; show one reverse-flow relation from marker rails toward it.

### CENTER-STAGE HERO
Matrix with marker rails.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Projection direction flips: matrix→markers becomes markers→matrix.

### WHAT MUST NOT APPEAR YET
No cell result yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear global relation; prepare row1.

### PERSISTENT STATE
Matrix hero + rails.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Semantic handoff.
## BEAT 19 — `S06_ROW1`

### ANCHOR / SPOKEN PHRASE
`Take row one.`

### WHAT APPEARS NOW
Focus row1 region.

### CENTER-STAGE HERO
Row1.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Only row1 is active.

### WHAT MUST NOT APPEAR YET
No cell decisions yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row1 active.

### PERSISTENT STATE
Row1 selected.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Direct attention.
## BEAT 20 — `S06_R1FALSE`

### ANCHOR / SPOKEN PHRASE
`Its row marker is false.`

### WHAT APPEARS NOW
Project row1 to rowZero[1].

### CENTER-STAGE HERO
rowZero[1]=F.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Resolve false; no whole-row mutation.

### WHAT MUST NOT APPEAR YET
Do not process columns yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Row1 not globally marked.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Teach row gate.
## BEAT 21 — `S06_NOTALL`

### ANCHOR / SPOKEN PHRASE
`So row one is not completely zero.`

### WHAT APPEARS NOW
Keep row1 values unchanged.

### CENTER-STAGE HERO
Unchanged row1.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Absence of mutation is the effect.

### WHAT MUST NOT APPEAR YET
Do not decide cells early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Proceed to column gates.

### PERSISTENT STATE
Row1 unchanged.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Resolve row gate.
## BEAT 22 — `S06_C0CELL`

### ANCHOR / SPOKEN PHRASE
`But column zero is marked so the first cell becomes zero.`

### WHAT APPEARS NOW
colZero[0]=T projects to cell (1,0).

### CENTER-STAGE HERO
(1,0):6→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
6→0 in place.

### WHAT MUST NOT APPEAR YET
No other row1 cells yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Row1=[0,7,8,9,10].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Marker→cell cause/effect.
## BEAT 23 — `S06_C1CELL`

### ANCHOR / SPOKEN PHRASE
`Column one is not marked so seven stays.`

### WHAT APPEARS NOW
colZero[1]=F projects to 7.

### CENTER-STAGE HERO
(1,1)=7.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Confirm keep; no movement.

### WHAT MUST NOT APPEAR YET
No future cells.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce confirmation.

### PERSISTENT STATE
7 survives.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Teach false gate.
## BEAT 24 — `S06_C2CELL`

### ANCHOR / SPOKEN PHRASE
`Column two is marked so eight becomes zero.`

### WHAT APPEARS NOW
colZero[2]=T projects to 8.

### CENTER-STAGE HERO
(1,2):8→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
8→0.

### WHAT MUST NOT APPEAR YET
No col3 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Row1=[0,7,0,9,10].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 25 — `S06_C3CELL`

### ANCHOR / SPOKEN PHRASE
`Column three is marked so nine becomes zero.`

### WHAT APPEARS NOW
colZero[3]=T projects to 9.

### CENTER-STAGE HERO
(1,3):9→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
9→0.

### WHAT MUST NOT APPEAR YET
No col4 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Row1=[0,7,0,0,10].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 26 — `S06_C4CELL`

### ANCHOR / SPOKEN PHRASE
`Column four is not marked so ten stays.`

### WHAT APPEARS NOW
colZero[4]=F projects to 10.

### CENTER-STAGE HERO
(1,4)=10.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Confirm keep.

### WHAT MUST NOT APPEAR YET
No row2 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Row1=[0,7,0,0,10].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Complete row1.
## BEAT 27 — `S06_ROW2`

### ANCHOR / SPOKEN PHRASE
`Now row two.`

### WHAT APPEARS NOW
Shift focus to row2.

### CENTER-STAGE HERO
Row2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Row1 recedes.

### WHAT MUST NOT APPEAR YET
Do not zero row2 yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row2 active.

### PERSISTENT STATE
Row2 selected.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Direct attention.
## BEAT 28 — `S06_R2TRUE`

### ANCHOR / SPOKEN PHRASE
`Its row marker is true.`

### WHAT APPEARS NOW
Project row2 to its true marker.

### CENTER-STAGE HERO
rowZero[2]=T.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One marker establishes whole-row effect.

### WHAT MUST NOT APPEAR YET
No cell-by-cell mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep true marker relation.

### PERSISTENT STATE
Row2 marked.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Teach decisive marker.
## BEAT 29 — `S06_ONEFACT`

### ANCHOR / SPOKEN PHRASE
`That one fact is enough.`

### WHAT APPEARS NOW
Promote the one true marker; column rails recede.

### CENTER-STAGE HERO
rowZero[2]=T.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Simplify decision to one fact.

### WHAT MUST NOT APPEAR YET
No mutation before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cause.

### PERSISTENT STATE
Row2 marked.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Teach compression.
## BEAT 30 — `S06_ROW2ZERO`

### ANCHOR / SPOKEN PHRASE
`Every cell in row two becomes zero.`

### WHAT APPEARS NOW
Apply one row-region sweep; 12,13,14,15 become 0 while (2,0) stays 0.

### CENTER-STAGE HERO
Row2 all zero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Whole row mutates as one semantic effect.

### WHAT MUST NOT APPEAR YET
Do not process row3 yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Settle row2.

### PERSISTENT STATE
Row2=[0,0,0,0,0].

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 31 — `S06_ROW3`

### ANCHOR / SPOKEN PHRASE
`The same happens to row three.`

### WHAT APPEARS NOW
Shift focus from completed row2 to row3. Because `rowZero[3]=true` was already established during discovery and in the final marker array, apply the already-learned whole-row rule now: row3 becomes zero.

### CENTER-STAGE HERO
Row3 zeroing from its previously established true row marker.

### CAUSE
`The same happens to row three` explicitly authorizes the same mutation that just happened to row2.

### EFFECT / MOTION
Briefly project the already-known `rowZero[3]=true` support into row3, then zero the row. This is semantic reuse, not a new marker discovery.

### WHAT MUST NOT APPEAR YET
Do not move to row4; do not introduce any optimal boundary-storage idea.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Let the row mutation settle; keep row3 selected for the following marker-confirmation phrase.

### PERSISTENT STATE
Row3 is already zero; rowZero[3]=true remains the causal support.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Semantic reuse.
## BEAT 32 — `S06_R3TRUE`

### ANCHOR / SPOKEN PHRASE
`Its row marker is also true.`

### WHAT APPEARS NOW
Promote `rowZero[3]=T`; once the marker is visibly confirmed, apply one whole-row sweep so row3 settles to all zero.

### CENTER-STAGE HERO
rowZero[3]=T → row3.

### CAUSE
Narration explicitly confirms row3's marker is true.

### EFFECT / MOTION
True marker first; then row3 values change to zero as one learned whole-row effect. No per-column replay.

### WHAT MUST NOT APPEAR YET
No row4 decision before row3 has settled.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce marker relation after row3 settles.

### PERSISTENT STATE
Rows2 and3 are all zero.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Confirm reused rule.
## BEAT 33 — `S06_ROW4`

### ANCHOR / SPOKEN PHRASE
`Finally row four is not marked.`

### WHAT APPEARS NOW
Focus row4 and briefly show rowZero[4]=F.

### CENTER-STAGE HERO
Row4.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No whole-row mutation.

### WHAT MUST NOT APPEAR YET
Do not pre-decide cells.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row4 active.

### PERSISTENT STATE
Row4 unmarked.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Direct attention.
## BEAT 34 — `S06_ONLYCOLS`

### ANCHOR / SPOKEN PHRASE
`So only the marked columns change.`

### WHAT APPEARS NOW
Reduce row-marker support; the column-marker rail becomes the only decision support. Because column0 is already visibly marked true, immediately resolve the row4 first cell: `(4,0)` changes `21→0`. Then stop and wait for the individually narrated 22/23/24/25 decisions.

### CENTER-STAGE HERO
Marked column0 → cell `(4,0)`.

### CAUSE
Narration states that only the marked columns change for this unmarked row.

### EFFECT / MOTION
`colZero[0]=T` projects to `(4,0)` and changes `21→0`; after that one change, the relation clears.

### WHAT MUST NOT APPEAR YET
Do not pre-resolve 22, 23, 24, or 25 before their spoken phrases.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row4 with first cell now zero; proceed one narrated cell at a time.

### PERSISTENT STATE
Row4 begins `[0,22,23,24,25]`.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Teach gate.
## BEAT 35 — `S06_22`

### ANCHOR / SPOKEN PHRASE
`Twenty-two survives.`

### WHAT APPEARS NOW
colZero[1]=F projects to 22.

### CENTER-STAGE HERO
(4,1)=22.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Confirm keep.

### WHAT MUST NOT APPEAR YET
23/24/25 decisions hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
22 remains.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Confirm result.
## BEAT 36 — `S06_23`

### ANCHOR / SPOKEN PHRASE
`Twenty-three becomes zero.`

### WHAT APPEARS NOW
colZero[2]=T projects to 23.

### CENTER-STAGE HERO
(4,2):23→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
23→0.

### WHAT MUST NOT APPEAR YET
No 24 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
23→0.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 37 — `S06_24`

### ANCHOR / SPOKEN PHRASE
`Twenty-four becomes zero.`

### WHAT APPEARS NOW
colZero[3]=T projects to 24.

### CENTER-STAGE HERO
(4,3):24→0.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
24→0.

### WHAT MUST NOT APPEAR YET
No 25 early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
24→0.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Cause→effect.
## BEAT 38 — `S06_25`

### ANCHOR / SPOKEN PHRASE
`Twenty-five survives.`

### WHAT APPEARS NOW
colZero[4]=F projects to 25.

### CENTER-STAGE HERO
(4,4)=25.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Confirm keep.

### WHAT MUST NOT APPEAR YET
No final answer before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
25 remains.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Confirm result.
## BEAT 39 — `S06_ANSWER`

### ANCHOR / SPOKEN PHRASE
`And we reach the same correct answer.`

### WHAT APPEARS NOW
Marker arrays reduce; final verified matrix owns center stage.

### CENTER-STAGE HERO
Verified final matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
All already-justified effects settle into the complete output.

### WHAT MUST NOT APPEAR YET
No complexity label.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep final matrix.

### PERSISTENT STATE
Verified output.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Confirm Method2.
## BEAT 40 — `S06_NOTFULL`

### ANCHOR / SPOKEN PHRASE
`This time we did not preserve the whole matrix.`

### WHAT APPEARS NOW
Bring marker arrays back as support; no original-copy matrix exists.

### CENTER-STAGE HERO
Marker arrays, no source copy.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Contrast memory structures.

### WHAT MUST NOT APPEAR YET
No optimal reuse yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep marker arrays.

### PERSISTENT STATE
Method2 memory.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Teach improvement.
## BEAT 41 — `S06_ONLYINFO`

### ANCHOR / SPOKEN PHRASE
`We preserved only the information that matters.`

### WHAT APPEARS NOW
Promote only marker arrays.

### CENTER-STAGE HERO
rowZero + colZero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Final matrix recedes; markers represent compressed memory.

### WHAT MUST NOT APPEAR YET
No boundary reuse.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare code handoff.

### PERSISTENT STATE
rowZero + colZero.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Teach compression.
## BEAT 42 — `S06_CODE`

### ANCHOR / SPOKEN PHRASE
`Now let’s convert this idea into code.`

### WHAT APPEARS NOW
Reduce trace visuals; leave `MATRIX → MARKERS → MATRIX` and marker names.

### CENTER-STAGE HERO
Method2 invariant.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Semantic handoff to code.

### WHAT MUST NOT APPEAR YET
No code lines yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
End scene.

### PERSISTENT STATE
Method2 invariant.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Semantic continuity.


---

# 9. CONTINUITY OUT

Scene07 receives:

```text
DISCOVERY PASS = record only
APPLICATION PASS = mutate
rowZero[m]
colZero[n]
```

Trace visuals recede before code begins.

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
