# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 02 — Understand the Problem + Dangerous Naive Idea
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Define the exact problem, introduce the locked 5×5 master input in spoken order, and prove with one concrete trace why immediate zeroing can create a false cascade.

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

Scene 02 starts after Scene01 has handed off from the roadmap.

```text
Q13 identity known
CENTER STAGE free for the problem
GLOBAL PROGRESS remains 12 / 227 off-stage
```

Do not replay the roadmap.

---

# 2. EXACT NARRATION SOURCE

```text
We are given a matrix.

Whenever an original cell contains zero...

its complete row...
and its complete column...
must become zero.

For this lesson, we will use this matrix.

One... two... zero... four... five.

Six... seven... eight... nine... ten.

Zero... twelve... thirteen... fourteen... fifteen.

Sixteen... seventeen... eighteen... zero... twenty.

Twenty-one... twenty-two... twenty-three... twenty-four... twenty-five.

We will use zero-based row and column indices.

There are three original zeros.

One is in the first row...

one is in the first column...

and one is inside the matrix.

At first, the solution may look obvious.

When we find a zero...

why not immediately make that row and column zero?

The problem is...

those writes create new zeros.

And if our scan later reaches one of those new zeros...

we may treat it like an original zero.

Then we zero another row...

and another column...

even though they were never supposed to change.

So we need one important rule.

Zeros created by us...

must never become new sources of zeroing.

That means we need to preserve the information about the original zeros...

before our mutations can destroy it.

Let’s start with the safest possible method.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Authoritative master input:

```text
[
 [1,2,0,4,5],
 [6,7,8,9,10],
 [0,12,13,14,15],
 [16,17,18,0,20],
 [21,22,23,24,25]
]
```

Original zeros: `(0,2)`, `(2,0)`, `(3,3)`.

Concrete failure proof:

```text
source zero (0,2)
→ naive row0 + col2 zeroing
→ creates (1,2)=0
→ later scan misclassifies (1,2)
→ incorrectly zeros row1
→ 7 and 10 are destroyed even though row1 had no original zero
```

The scene must reset to the untouched master after proving the mistake.

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

- Matrix values reveal only on their spoken number tokens.
- Zero-based indices reveal only when spoken.
- Original-zero classification appears only after `There are three original zeros`.
- The naive failure must be concrete and finite; do not render an endless cascade.
- Wrong-state styling requires both warn color and a second cue.
- After failure proof, restore the untouched master.
- No Method1 copy, marker arrays, boundary-marker trick, complexity, or final correct result appears here.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S02_MATRIX` | `We are given a matrix.` | Single empty 5×5 master grid. |
| `S02_RULE0` | `Whenever an original cell contains zero` | One symbolic current zero in one matrix cell. |
| `S02_RULER` | `its complete row` | Affected row relation. |
| `S02_RULEC` | `and its complete column` | Zero with row+column consequence. |
| `S02_MASTER` | `For this lesson, we will use this matrix.` | Empty master 5×5 grid. |
| `S02_ROW0` | `One two zero four five.` | Row 0 while spoken. |
| `S02_ROW1` | `Six seven eight nine ten.` | Row 1. |
| `S02_ROW2` | `Zero twelve thirteen fourteen fifteen.` | Row 2. |
| `S02_ROW3` | `Sixteen seventeen eighteen zero twenty.` | Row 3. |
| `S02_ROW4` | `Twenty-one twenty-two twenty-three twenty-four twenty-five.` | Complete master input. |
| `S02_INDEX` | `We will use zero-based row and column indices.` | Coordinate system around matrix. |
| `S02_THREE` | `There are three original zeros.` | Three original source cells. |
| `S02_FIRSTROW` | `One is in the first row` | Original zero (0,2). |
| `S02_FIRSTCOL` | `one is in the first column` | Original zero (2,0). |
| `S02_INTERIOR` | `and one is inside the matrix.` | Original zero (3,3). |
| `S02_OBVIOUS` | `At first, the solution may look obvious.` | Untouched master matrix. |
| `S02_FIND` | `When we find a zero` | Original source (0,2). |
| `S02_IMMEDIATE` | `why not immediately make that row and column zero?` | Naively mutated row0 + col2. |
| `S02_CREATED` | `those writes create new zeros.` | Newly-created zero (1,2). |
| `S02_LATER` | `if our scan later reaches one of those new zeros` | Created zero (1,2) encountered by scan. |
| `S02_MISTAKE` | `we may treat it like an original zero.` | Wrong classification of (1,2). |
| `S02_ANOTHER_ROW` | `Then we zero another row` | Incorrect row1 mutation. |
| `S02_ANOTHER_COL` | `and another column` | False-cascade mechanism. |
| `S02_NEVER` | `even though they were never supposed to change.` | Wrongly destroyed survivors 7, 10, and 25. |
| `S02_RULE` | `Zeros created by us must never become new sources of zeroing.` | Invariant + restored master. |
| `S02_PRESERVE` | `we need to preserve the information about the original zeros` | Original-zero information. |
| `S02_BEFORE` | `before our mutations can destroy it.` | Information-before-mutation ordering. |
| `S02_SAFEST` | `Let’s start with the safest possible method.` | Method 1 handoff on untouched master. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S02_MATRIX`

### ANCHOR / SPOKEN PHRASE
`We are given a matrix.`

### WHAT APPEARS NOW
Bring one continuous 5×5 matrix shell to center stage; cells are fixed and initially empty/faint.

### CENTER-STAGE HERO
Single empty 5×5 master grid.

### CAUSE
Narration introduces the data structure.

### EFFECT / MOTION
Grid enters as the only teaching object.

### WHAT MUST NOT APPEAR YET
No values, indices, zeros, output, or method labels.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep the fixed grid shell for population.

### PERSISTENT STATE
Master matrix shell.

### KIT / EXISTING SYSTEM
Matrix/Grid via RoughBox.

### MOTION PURPOSE
Teach structure.
## BEAT 02 — `S02_RULE0`

### ANCHOR / SPOKEN PHRASE
`Whenever an original cell contains zero`

### WHAT APPEARS NOW
Use one temporary cell inside a neutral mini rule-state of the same matrix grammar; mark its zero as ORIGINAL.

### CENTER-STAGE HERO
One symbolic current zero in one matrix cell.

### CAUSE
Narration defines the source condition.

### EFFECT / MOTION
Current zero receives pivot focus; no row/column consequence yet.

### WHAT MUST NOT APPEAR YET
Do not zero row/column yet; do not use master coordinates.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep zero only into row consequence.

### PERSISTENT STATE
Symbolic source zero.

### KIT / EXISTING SYSTEM
Matrix cell + ChalkText.

### MOTION PURPOSE
Teach condition.
## BEAT 03 — `S02_RULER`

### ANCHOR / SPOKEN PHRASE
`its complete row`

### WHAT APPEARS NOW
Temporarily emphasize the full row passing through the symbolic zero.

### CENTER-STAGE HERO
Affected row relation.

### CAUSE
Narration names first consequence.

### EFFECT / MOTION
Row band/rough relation extends across fixed cells.

### WHAT MUST NOT APPEAR YET
Column consequence hidden until spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Retain zero + row relation through next phrase.

### PERSISTENT STATE
Zero + row effect.

### KIT / EXISTING SYSTEM
Reusable matrix row-region primitive; kit-level extension if absent.

### MOTION PURPOSE
Cause→effect.
## BEAT 04 — `S02_RULEC`

### ANCHOR / SPOKEN PHRASE
`and its complete column`

### WHAT APPEARS NOW
Add the full column relation only now.

### CENTER-STAGE HERO
Zero with row+column consequence.

### CAUSE
Narration names second consequence.

### EFFECT / MOTION
Column band appears; row remains as support.

### WHAT MUST NOT APPEAR YET
No master example/result.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Erase symbolic rule example after it settles.

### PERSISTENT STATE
Nothing from symbolic rule.

### KIT / EXISTING SYSTEM
Matrix column-region primitive.

### MOTION PURPOSE
Cause→effect.
## BEAT 05 — `S02_MASTER`

### ANCHOR / SPOKEN PHRASE
`For this lesson, we will use this matrix.`

### WHAT APPEARS NOW
Return to the real empty master grid center stage.

### CENTER-STAGE HERO
Empty master 5×5 grid.

### CAUSE
Narration authorizes the testcase.

### EFFECT / MOTION
Symbolic rule hands off to real input.

### WHAT MUST NOT APPEAR YET
No values before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep grid.

### PERSISTENT STATE
Master grid.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Semantic continuity.
## BEAT 06 — `S02_ROW0`

### ANCHOR / SPOKEN PHRASE
`One two zero four five.`

### WHAT APPEARS NOW
Populate row0 left-to-right: 1,2,0,4,5 on their spoken tokens.

### CENTER-STAGE HERO
Row 0 while spoken.

### CAUSE
Narration speaks exact values.

### EFFECT / MOTION
Each value appears in its fixed cell; zero is not solution-highlighted yet.

### WHAT MUST NOT APPEAR YET
Rows1–4 remain empty.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row0 values.

### PERSISTENT STATE
Row0 populated.

### KIT / EXISTING SYSTEM
ChalkText in fixed cells.

### MOTION PURPOSE
Teach exact input.
## BEAT 07 — `S02_ROW1`

### ANCHOR / SPOKEN PHRASE
`Six seven eight nine ten.`

### WHAT APPEARS NOW
Populate row1 left-to-right on spoken tokens.

### CENTER-STAGE HERO
Row 1.

### CAUSE
Narration speaks row1.

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
Matrix/Grid.

### MOTION PURPOSE
Teach exact input.
## BEAT 08 — `S02_ROW2`

### ANCHOR / SPOKEN PHRASE
`Zero twelve thirteen fourteen fifteen.`

### WHAT APPEARS NOW
Populate row2 left-to-right.

### CENTER-STAGE HERO
Row 2.

### CAUSE
Narration speaks row2.

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
Matrix/Grid.

### MOTION PURPOSE
Teach exact input.
## BEAT 09 — `S02_ROW3`

### ANCHOR / SPOKEN PHRASE
`Sixteen seventeen eighteen zero twenty.`

### WHAT APPEARS NOW
Populate row3 left-to-right.

### CENTER-STAGE HERO
Row 3.

### CAUSE
Narration speaks row3.

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
Matrix/Grid.

### MOTION PURPOSE
Teach exact input.
## BEAT 10 — `S02_ROW4`

### ANCHOR / SPOKEN PHRASE
`Twenty-one twenty-two twenty-three twenty-four twenty-five.`

### WHAT APPEARS NOW
Populate row4 left-to-right; matrix is now complete.

### CENTER-STAGE HERO
Complete master input.

### CAUSE
Narration completes input.

### EFFECT / MOTION
Final row settles.

### WHAT MUST NOT APPEAR YET
No indices until spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep complete matrix.

### PERSISTENT STATE
Master input complete.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Teach exact input.
## BEAT 11 — `S02_INDEX`

### ANCHOR / SPOKEN PHRASE
`We will use zero-based row and column indices.`

### WHAT APPEARS NOW
Add row labels 0..4 and column labels 0..4 outside fixed grid.

### CENTER-STAGE HERO
Coordinate system around matrix.

### CAUSE
Narration authorizes indexing.

### EFFECT / MOTION
Labels draw/reveal without moving cells.

### WHAT MUST NOT APPEAR YET
No zero coordinate callouts yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep indices for all trace scenes.

### PERSISTENT STATE
Matrix + indices.

### KIT / EXISTING SYSTEM
ChalkText labels.

### MOTION PURPOSE
Teach coordinate convention.
## BEAT 12 — `S02_THREE`

### ANCHOR / SPOKEN PHRASE
`There are three original zeros.`

### WHAT APPEARS NOW
Only the three zero-valued cells receive restrained source emphasis.

### CENTER-STAGE HERO
Three original source cells.

### CAUSE
Narration counts original zeros.

### EFFECT / MOTION
Group attention without mutation.

### WHAT MUST NOT APPEAR YET
No affected rows/columns/result.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source identity subtle.

### PERSISTENT STATE
Master with original zeros known.

### KIT / EXISTING SYSTEM
Cell emphasis using theme.pivot + small ORIGINAL cue only while active.

### MOTION PURPOSE
Direct attention.
## BEAT 13 — `S02_FIRSTROW`

### ANCHOR / SPOKEN PHRASE
`One is in the first row`

### WHAT APPEARS NOW
Focus only (0,2); other source zeros recede.

### CENTER-STAGE HERO
Original zero (0,2).

### CAUSE
Narration identifies first-row zero.

### EFFECT / MOTION
Attention transfer only.

### WHAT MUST NOT APPEAR YET
Do not mark its row/column.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Return it to subtle source state.

### PERSISTENT STATE
All three source zeros remain known.

### KIT / EXISTING SYSTEM
Matrix current-cell state.

### MOTION PURPOSE
Direct attention.
## BEAT 14 — `S02_FIRSTCOL`

### ANCHOR / SPOKEN PHRASE
`one is in the first column`

### WHAT APPEARS NOW
Focus only (2,0).

### CENTER-STAGE HERO
Original zero (2,0).

### CAUSE
Narration identifies first-column zero.

### EFFECT / MOTION
Attention transfer only.

### WHAT MUST NOT APPEAR YET
Interior zero not hero.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Return to subtle source state.

### PERSISTENT STATE
Original-zero identity persists.

### KIT / EXISTING SYSTEM
Matrix current-cell state.

### MOTION PURPOSE
Direct attention.
## BEAT 15 — `S02_INTERIOR`

### ANCHOR / SPOKEN PHRASE
`and one is inside the matrix.`

### WHAT APPEARS NOW
Focus only interior zero (3,3).

### CENTER-STAGE HERO
Original zero (3,3).

### CAUSE
Narration identifies interior source.

### EFFECT / MOTION
Attention transfer only.

### WHAT MUST NOT APPEAR YET
No marker role yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce all special focus after classification.

### PERSISTENT STATE
Untouched master matrix.

### KIT / EXISTING SYSTEM
Matrix current-cell state.

### MOTION PURPOSE
Direct attention.
## BEAT 16 — `S02_OBVIOUS`

### ANCHOR / SPOKEN PHRASE
`At first, the solution may look obvious.`

### WHAT APPEARS NOW
Reset to clean master; optional tiny unresolved chalk cue only.

### CENTER-STAGE HERO
Untouched master matrix.

### CAUSE
Narration shifts to naive intuition.

### EFFECT / MOTION
No algorithm object enters.

### WHAT MUST NOT APPEAR YET
No copy/arrays/marker boundaries.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep master.

### PERSISTENT STATE
Master matrix.

### KIT / EXISTING SYSTEM
ChalkText optional.

### MOTION PURPOSE
Set up misconception.
## BEAT 17 — `S02_FIND`

### ANCHOR / SPOKEN PHRASE
`When we find a zero`

### WHAT APPEARS NOW
Use (0,2) as the concrete naive discovery source.

### CENTER-STAGE HERO
Original source (0,2).

### CAUSE
Narration begins naive action.

### EFFECT / MOTION
Focus current source only.

### WHAT MUST NOT APPEAR YET
Do not mutate before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source focused.

### PERSISTENT STATE
Master with current zero.

### KIT / EXISTING SYSTEM
Matrix current-cell state.

### MOTION PURPOSE
Cause setup.
## BEAT 18 — `S02_IMMEDIATE`

### ANCHOR / SPOKEN PHRASE
`why not immediately make that row and column zero?`

### WHAT APPEARS NOW
From (0,2), mutate row0 to zero, then col2 to zero as two sequential semantic changes if audio permits.

### CENTER-STAGE HERO
Naively mutated row0 + col2.

### CAUSE
Narration proposes immediate action.

### EFFECT / MOTION
Cause source→row effect→column effect; fixed cells, values change in place.

### WHAT MUST NOT APPEAR YET
No cascade from created zeros yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep naive mutated state.

### PERSISTENT STATE
Naive state after source (0,2).

### KIT / EXISTING SYSTEM
Matrix row/column effect.

### MOTION PURPOSE
Show cause→effect.
## BEAT 19 — `S02_CREATED`

### ANCHOR / SPOKEN PHRASE
`those writes create new zeros.`

### WHAT APPEARS NOW
Focus (1,2), formerly 8, now 0; distinguish it from original source with warn + second cue `CREATED`.

### CENTER-STAGE HERO
Newly-created zero (1,2).

### CAUSE
Narration names created zeros.

### EFFECT / MOTION
Attention moves from source to created zero.

### WHAT MUST NOT APPEAR YET
Do not zero row1 yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep (1,2) as scan target.

### PERSISTENT STATE
Naive mutated matrix.

### KIT / EXISTING SYSTEM
theme.warn + label.

### MOTION PURPOSE
Teach state distinction.
## BEAT 20 — `S02_LATER`

### ANCHOR / SPOKEN PHRASE
`if our scan later reaches one of those new zeros`

### WHAT APPEARS NOW
Show a continuing scan later reaching (1,2). Do not claim row-major, column-major, or any other fixed traversal order here; the script only needs one valid later-created-zero failure proof.

### CENTER-STAGE HERO
Created zero (1,2) encountered by scan.

### CAUSE
Narration adds temporal condition.

### EFFECT / MOTION
One temporary scan relation/current-cell focus.

### WHAT MUST NOT APPEAR YET
No correct method.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep created zero active.

### PERSISTENT STATE
Naive matrix.

### KIT / EXISTING SYSTEM
Existing scan focus if available; otherwise cell focus.

### MOTION PURPOSE
Teach timing.
## BEAT 21 — `S02_MISTAKE`

### ANCHOR / SPOKEN PHRASE
`we may treat it like an original zero.`

### WHAT APPEARS NOW
Add a clear `NOT ORIGINAL` warn cue / chalk strike to show misclassification.

### CENTER-STAGE HERO
Wrong classification of (1,2).

### CAUSE
Narration states the error.

### EFFECT / MOTION
Classification error is isolated before consequence.

### WHAT MUST NOT APPEAR YET
Do not mutate row1 until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep wrong classification briefly.

### PERSISTENT STATE
Created zero active.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine strike.

### MOTION PURPOSE
Teach mistake.
## BEAT 22 — `S02_ANOTHER_ROW`

### ANCHOR / SPOKEN PHRASE
`Then we zero another row`

### WHAT APPEARS NOW
Because (1,2) was misclassified, zero row1. Make 7 and 10 visibly become 0.

### CENTER-STAGE HERO
Incorrect row1 mutation.

### CAUSE
Narration states false consequence.

### EFFECT / MOTION
Wrong source→wrong row effect.

### WHAT MUST NOT APPEAR YET
Do not fabricate full chain.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row1 wrong through next phrase.

### PERSISTENT STATE
Incorrect matrix.

### KIT / EXISTING SYSTEM
Matrix row-region + value changes.

### MOTION PURPOSE
Prove failure.
## BEAT 23 — `S02_ANOTHER_COL`

### ANCHOR / SPOKEN PHRASE
`and another column`

### WHAT APPEARS NOW
Use one concrete continuation of the wrong scan: after row1 was incorrectly zeroed, its created zero at `(1,4)` can later be misread as a source and incorrectly zero column4. Focus `(1,4)` first, then show the false column4 effect; this wrongly destroys `25` at `(4,4)`.

### CENTER-STAGE HERO
The specific false propagation `(1,4) → column4`.

### CAUSE
Narration broadens the consequence from an incorrect row to an incorrect column.

### EFFECT / MOTION
Current created zero `(1,4)` → temporary vertical relation → column4 changes to zero. Keep the propagation finite; this is a proof, not a full wrong execution.

### WHAT MUST NOT APPEAR YET
No endless cascade and no invented final wrong matrix beyond this one proof column.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare survivor proof.

### PERSISTENT STATE
Incorrect row1 state.

### KIT / EXISTING SYSTEM
RoughLine/query relation.

### MOTION PURPOSE
Teach mechanism without clutter.
## BEAT 24 — `S02_NEVER`

### ANCHOR / SPOKEN PHRASE
`even though they were never supposed to change.`

### WHAT APPEARS NOW
Focus the concrete wrongly destroyed survivors `7` at `(1,1)`, `10` at `(1,4)`, and `25` at `(4,4)`; ghost the original values over current zeros with warn cue.

### CENTER-STAGE HERO
Wrongly destroyed survivors 7, 10, and 25.

### CAUSE
Narration says these cells should not change.

### EFFECT / MOTION
Concrete contradiction proves naive approach invalid.

### WHAT MUST NOT APPEAR YET
Do not reveal correct final output.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Erase the entire wrong trace after proof.

### PERSISTENT STATE
Reset target is original master.

### KIT / EXISTING SYSTEM
Matrix cells + warn state.

### MOTION PURPOSE
Prove failure.
## BEAT 25 — `S02_RULE`

### ANCHOR / SPOKEN PHRASE
`Zeros created by us must never become new sources of zeroing.`

### WHAT APPEARS NOW
Restore untouched master pixel-stably; place one direct invariant line near it.

### CENTER-STAGE HERO
Invariant + restored master.

### CAUSE
Narration states the governing rule.

### EFFECT / MOTION
Wrong state exits; source matrix returns.

### WHAT MUST NOT APPEAR YET
No Method1 structure yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep invariant through preservation requirement.

### PERSISTENT STATE
Original master + invariant.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText.

### MOTION PURPOSE
Teach invariant.
## BEAT 26 — `S02_PRESERVE`

### ANCHOR / SPOKEN PHRASE
`we need to preserve the information about the original zeros`

### WHAT APPEARS NOW
Re-emphasize exactly (0,2),(2,0),(3,3) as the information that must survive.

### CENTER-STAGE HERO
Original-zero information.

### CAUSE
Narration derives requirement.

### EFFECT / MOTION
Invariant binds conceptually to source zeros.

### WHAT MUST NOT APPEAR YET
No copy or marker arrays yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source matrix and source-zero identity.

### PERSISTENT STATE
Master matrix.

### KIT / EXISTING SYSTEM
Matrix cell states.

### MOTION PURPOSE
Derive next method need.
## BEAT 27 — `S02_BEFORE`

### ANCHOR / SPOKEN PHRASE
`before our mutations can destroy it.`

### WHAT APPEARS NOW
Show a minimal ordering relation: preserve source info → then mutate.

### CENTER-STAGE HERO
Information-before-mutation ordering.

### CAUSE
Narration explains order.

### EFFECT / MOTION
One chalk relation; no new data structure.

### WHAT MUST NOT APPEAR YET
No Method1 mechanics yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation at end.

### PERSISTENT STATE
Master matrix.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### MOTION PURPOSE
Teach causal order.
## BEAT 28 — `S02_SAFEST`

### ANCHOR / SPOKEN PHRASE
`Let’s start with the safest possible method.`

### WHAT APPEARS NOW
Minimal `METHOD 1 · PRESERVE ORIGINAL` identity appears while matrix remains unchanged.

### CENTER-STAGE HERO
Method 1 handoff on untouched master.

### CAUSE
Narration hands off to next scene.

### EFFECT / MOTION
No duplicate matrix yet.

### WHAT MUST NOT APPEAR YET
Do not show copy before Scene03 says it.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
End on master + Method1 cue.

### PERSISTENT STATE
Untouched master ready for Scene03.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid.

### MOTION PURPOSE
Semantic continuity.


---

# 9. CONTINUITY OUT

Scene03 receives:

```text
MASTER MATRIX = original / untouched
KNOWN INVARIANT = created zeros cannot become new sources
METHOD 1 identity = preserve original information
COPY DOES NOT EXIST YET
```

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
