# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 08 — Derive Constant-Space Storage
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Derive the optimal storage design without tracing it yet: external row/column marker arrays hand off into first-column/first-row memory, then two independent booleans preserve the boundary history that reuse would otherwise destroy.

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

Scene08 inherits only the unresolved storage observation:

```text
rowZero length = m
colZero length = n
matrix itself = m rows × n columns
reuse location unresolved
```

---

# 2. EXACT NARRATION SOURCE

```text
`rowZero` needs one marker for every row.

That is `m` cells.

`colZero` needs one marker for every column.

That is `n` cells.

But our matrix already has something interesting.

The first column already has one cell for every row.

And the first row already has one cell for every column.

So instead of creating two new arrays...

what if we reuse those cells?

The first column can store row markers.

And the first row can store column markers.

For an interior zero at row `r`, column `c`...

we can write zero at:

`matrix[r][0]`...

to mark the row.

And:

`matrix[0][c]`...

to mark the column.

That removes the external marker arrays.

But there is one problem.

The first row and first column are still real data.

If we start using them as memory...

we may destroy information about whether they originally contained a zero.

And the corner cell...

`matrix[0][0]`...

belongs to both boundaries.

Once we reuse that boundary storage...

one cell cannot independently preserve both original boundary facts.

So before we reuse the boundaries...

we save those two facts separately.

Did the original first row contain a zero?

Store that in `firstRowZero`.

Did the original first column contain a zero?

Store that in `firstColZero`.

Now the boundary history is safe.

And the matrix can become its own marker memory.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Optimal storage design:

```text
first column → row markers
first row    → column markers
firstRowZero → did original first row contain zero?
firstColZero → did original first column contain zero?
```

General interior marker rule:

```text
if matrix[r][c] == 0, r,c >= 1:
    matrix[r][0] = 0
    matrix[0][c] = 0
```

For the locked master, both saved booleans are true, but Scene08 is a derivation scene, not the full trace.

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

- External arrays must disappear through a semantic representation handoff, not a decorative morph.
- First column gets its row-marker role only when narration assigns it.
- First row gets its column-marker role only when narration assigns it.
- The general `(r,c)` example must not substitute invented numeric data.
- Do not execute the full master trace; Scene10 owns exact writes `(3,0)` and `(0,3)`.
- The corner conflict must be taught as two independent original-history facts, not as a memorized special case.
- The two saved flags are direct chalk facts, not generic cards.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S08_RM` | `rowZero needs one marker for every row.` | rowZero length = m. |
| `S08_M` | `That is m cells.` | m-cell row marker storage. |
| `S08_CN` | `colZero needs one marker for every column.` | colZero length = n. |
| `S08_N` | `That is n cells.` | n-cell column marker storage. |
| `S08_MATRIX` | `But our matrix already has something interesting.` | Matrix. |
| `S08_FIRSTCOL` | `The first column already has one cell for every row.` | First column. |
| `S08_FIRSTROW` | `And the first row already has one cell for every column.` | First row. |
| `S08_INSTEAD` | `So instead of creating two new arrays` | External arrays as removable duplicate storage. |
| `S08_REUSE` | `what if we reuse those cells?` | Boundary reuse question. |
| `S08_FCROLE` | `The first column can store row markers.` | First column as row-marker memory. |
| `S08_FRROLE` | `And the first row can store column markers.` | First row as column-marker memory. |
| `S08_INTERIOR` | `For an interior zero at row r, column c` | Symbolic interior zero (r,c). |
| `S08_R0WRITE` | `we can write zero at matrix[r][0]` | Boundary cell matrix[r][0]. |
| `S08_MARKROW` | `to mark the row.` | Meaning of matrix[r][0]=0. |
| `S08_0CWRITE` | `And matrix[0][c]` | Boundary cell matrix[0][c]. |
| `S08_MARKCOL` | `to mark the column.` | Meaning of matrix[0][c]=0. |
| `S08_REMOVE` | `That removes the external marker arrays.` | Single matrix memory. |
| `S08_PROBLEM` | `But there is one problem.` | Boundary storage conflict. |
| `S08_REALDATA` | `The first row and first column are still real data.` | Original boundary values. |
| `S08_DESTROY` | `If we start using them as memory we may destroy information about whether they originally contained a zero.` | Lost boundary history risk. |
| `S08_CORNER` | `And the corner cell matrix[0][0] belongs to both boundaries.` | Corner (0,0). |
| `S08_ONECELL` | `one cell cannot independently preserve both original boundary facts.` | Two independent facts vs one shared cell. |
| `S08_BEFORE` | `So before we reuse the boundaries we save those two facts separately.` | Two external boolean facts. |
| `S08_QROW` | `Did the original first row contain a zero?` | First-row history question. |
| `S08_FRFLAG` | `Store that in firstRowZero.` | firstRowZero. |
| `S08_QCOL` | `Did the original first column contain a zero?` | First-column history question. |
| `S08_FCFLAG` | `Store that in firstColZero.` | firstColZero. |
| `S08_SAFE` | `Now the boundary history is safe.` | Two saved flags. |
| `S08_MEMORY` | `And the matrix can become its own marker memory.` | One matrix + two booleans. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S08_RM`

### ANCHOR / SPOKEN PHRASE
`rowZero needs one marker for every row.`

### WHAT APPEARS NOW
Bring rowZero to center; show one fixed slot aligned conceptually with each matrix row identity.

### CENTER-STAGE HERO
rowZero length = m.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Array length is understood as m.

### WHAT MUST NOT APPEAR YET
Do not select matrix first column yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep rowZero.

### PERSISTENT STATE
Need m row-marker cells.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Quantify external storage.
## BEAT 02 — `S08_M`

### ANCHOR / SPOKEN PHRASE
`That is m cells.`

### WHAT APPEARS NOW
Compress rowZero visual into a clear `m marker cells` fact without changing its slots.

### CENTER-STAGE HERO
m-cell row marker storage.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names count.

### WHAT MUST NOT APPEAR YET
No reuse location yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep fact.

### PERSISTENT STATE
rowZero uses m cells.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText

### MOTION PURPOSE
Confirm cost.
## BEAT 03 — `S08_CN`

### ANCHOR / SPOKEN PHRASE
`colZero needs one marker for every column.`

### WHAT APPEARS NOW
Promote colZero; show one slot per column identity.

### CENTER-STAGE HERO
colZero length = n.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Array length is n.

### WHAT MUST NOT APPEAR YET
Do not select first row yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both facts.

### PERSISTENT STATE
Need n column-marker cells.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Quantify external storage.
## BEAT 04 — `S08_N`

### ANCHOR / SPOKEN PHRASE
`That is n cells.`

### WHAT APPEARS NOW
Compress colZero visual into `n marker cells`.

### CENTER-STAGE HERO
n-cell column marker storage.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names count.

### WHAT MUST NOT APPEAR YET
No boundary reuse yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep m+n facts.

### PERSISTENT STATE
rowZero=m, colZero=n.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText

### MOTION PURPOSE
Confirm cost.
## BEAT 05 — `S08_MATRIX`

### ANCHOR / SPOKEN PHRASE
`But our matrix already has something interesting.`

### WHAT APPEARS NOW
External arrays reduce; master matrix returns center stage with m-row/n-column guides inherited from Scene07.

### CENTER-STAGE HERO
Matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Attention shifts from external memory to input storage.

### WHAT MUST NOT APPEAR YET
No first row/column highlight until next exact phrases.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep matrix.

### PERSISTENT STATE
Matrix hero.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Create discovery gap.
## BEAT 06 — `S08_FIRSTCOL`

### ANCHOR / SPOKEN PHRASE
`The first column already has one cell for every row.`

### WHAT APPEARS NOW
Highlight only column0 as a 5-cell vertical boundary; relate each cell to one row identity.

### CENTER-STAGE HERO
First column.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration identifies row-sized storage inside input.

### WHAT MUST NOT APPEAR YET
Do not call it row-marker memory until later phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep first-column boundary emphasis.

### PERSISTENT STATE
first column has m cells.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Reveal candidate storage.
## BEAT 07 — `S08_FIRSTROW`

### ANCHOR / SPOKEN PHRASE
`And the first row already has one cell for every column.`

### WHAT APPEARS NOW
Add first-row boundary after first-column relation has settled; relate its cells to column identities.

### CENTER-STAGE HERO
First row.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration identifies column-sized storage.

### WHAT MUST NOT APPEAR YET
Do not yet replace arrays.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both boundary cues.

### PERSISTENT STATE
first row has n cells; first column m cells.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Reveal candidate storage.
## BEAT 08 — `S08_INSTEAD`

### ANCHOR / SPOKEN PHRASE
`So instead of creating two new arrays`

### WHAT APPEARS NOW
Bring rowZero/colZero back briefly as quiet outlines; draw one semantic comparison to matrix boundaries.

### CENTER-STAGE HERO
External arrays as removable duplicate storage.

### CAUSE
Derive reuse.

### EFFECT / MOTION
Narration contrasts allocation.

### WHAT MUST NOT APPEAR YET
External arrays are shown as redundant candidates, not yet removed.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not assign exact boundary roles before next phrases.

### PERSISTENT STATE
Keep comparison.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Arrays vs boundaries.
## BEAT 09 — `S08_REUSE`

### ANCHOR / SPOKEN PHRASE
`what if we reuse those cells?`

### WHAT APPEARS NOW
External arrays fade/reduce; first row and first column stay highlighted as candidate memory.

### CENTER-STAGE HERO
Boundary reuse question.

### CAUSE
Semantic handoff.

### EFFECT / MOTION
Narration proposes reuse.

### WHAT MUST NOT APPEAR YET
Representation handoff begins from external arrays into matrix boundaries.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
No marker meaning yet.

### PERSISTENT STATE
Keep boundary candidates.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Boundary reuse proposed.
## BEAT 10 — `S08_FCROLE`

### ANCHOR / SPOKEN PHRASE
`The first column can store row markers.`

### WHAT APPEARS NOW
Transform the first-column emphasis from ordinary data boundary to semantic `ROW MARKERS`; rowZero external array disappears only now.

### CENTER-STAGE HERO
First column as row-marker memory.

### CAUSE
Representation handoff.

### EFFECT / MOTION
Narration assigns role.

### WHAT MUST NOT APPEAR YET
RowZero representation hands off into first column; cell geometry/data stays fixed.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not assign first-row role yet.

### PERSISTENT STATE
Keep first-column marker role.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
col0 = row-marker storage.
## BEAT 11 — `S08_FRROLE`

### ANCHOR / SPOKEN PHRASE
`And the first row can store column markers.`

### WHAT APPEARS NOW
Transform first-row emphasis to `COLUMN MARKERS`; colZero external array disappears now.

### CENTER-STAGE HERO
First row as column-marker memory.

### CAUSE
Representation handoff.

### EFFECT / MOTION
Narration assigns second role.

### WHAT MUST NOT APPEAR YET
Column-marker representation hands off into first row.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not write any marker zeros yet.

### PERSISTENT STATE
Keep both boundary roles.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
row0 = column markers; col0 = row markers.
## BEAT 12 — `S08_INTERIOR`

### ANCHOR / SPOKEN PHRASE
`For an interior zero at row r, column c`

### WHAT APPEARS NOW
Use a schematic interior current cell within the real matrix grammar; label row r / col c semantically, not with invented numeric coordinates.

### CENTER-STAGE HERO
Symbolic interior zero (r,c).

### CAUSE
Set up general rule.

### EFFECT / MOTION
Narration introduces general marker rule.

### WHAT MUST NOT APPEAR YET
Interior cell receives pivot focus.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
No writes before next phrases.

### PERSISTENT STATE
Keep symbolic source active.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Interior zero selected.
## BEAT 13 — `S08_R0WRITE`

### ANCHOR / SPOKEN PHRASE
`we can write zero at matrix[r][0]`

### WHAT APPEARS NOW
Draw one horizontal relation from interior zero left to first-column cell on the same row; show zero write only at destination.

### CENTER-STAGE HERO
Boundary cell matrix[r][0].

### CAUSE
Cause→effect.

### EFFECT / MOTION
Narration gives row-marker write.

### WHAT MUST NOT APPEAR YET
Source→row-boundary marker.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not show column-marker write yet.

### PERSISTENT STATE
Clear horizontal relation; keep written marker.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
matrix[r][0]=0.
## BEAT 14 — `S08_MARKROW`

### ANCHOR / SPOKEN PHRASE
`to mark the row.`

### WHAT APPEARS NOW
Add brief `ROW MUST ZERO` semantic cue attached to boundary marker.

### CENTER-STAGE HERO
Meaning of matrix[r][0]=0.

### CAUSE
Teach encoding.

### EFFECT / MOTION
Narration explains meaning.

### WHAT MUST NOT APPEAR YET
No new data change.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
No column rule yet.

### PERSISTENT STATE
Reduce cue; keep marker state.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Row marker meaning known.
## BEAT 15 — `S08_0CWRITE`

### ANCHOR / SPOKEN PHRASE
`And matrix[0][c]`

### WHAT APPEARS NOW
Draw one vertical relation from source upward to first-row cell in same column.

### CENTER-STAGE HERO
Boundary cell matrix[0][c].

### CAUSE
Cause setup.

### EFFECT / MOTION
Narration introduces column-marker location.

### WHAT MUST NOT APPEAR YET
Relation only; write completes as phrase reaches zero in code expression if sync supports.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
No result row/column zeroing.

### PERSISTENT STATE
Keep destination active.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
matrix[0][c] destination.
## BEAT 16 — `S08_MARKCOL`

### ANCHOR / SPOKEN PHRASE
`to mark the column.`

### WHAT APPEARS NOW
Write/confirm zero at top boundary and add brief `COLUMN MUST ZERO` cue.

### CENTER-STAGE HERO
Meaning of matrix[0][c]=0.

### CAUSE
Teach encoding.

### EFFECT / MOTION
Narration explains meaning.

### WHAT MUST NOT APPEAR YET
Source→column-boundary marker.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
No application phase.

### PERSISTENT STATE
Clear cue; keep both symbolic markers.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Row/column marker rule known.
## BEAT 17 — `S08_REMOVE`

### ANCHOR / SPOKEN PHRASE
`That removes the external marker arrays.`

### WHAT APPEARS NOW
Any residual external array outlines fully exit; one matrix remains.

### CENTER-STAGE HERO
Single matrix memory.

### CAUSE
Show storage reuse.

### EFFECT / MOTION
Narration states space reduction.

### WHAT MUST NOT APPEAR YET
Composition simplifies to one matrix.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not show O(1) badge yet.

### PERSISTENT STATE
Keep matrix with boundary roles.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
External arrays gone.
## BEAT 18 — `S08_PROBLEM`

### ANCHOR / SPOKEN PHRASE
`But there is one problem.`

### WHAT APPEARS NOW
Remove symbolic r,c marker example; return the locked master matrix with first row/column role cues but original values intact.

### CENTER-STAGE HERO
Boundary storage conflict.

### CAUSE
Create productive gap.

### EFFECT / MOTION
Narration opens complication.

### WHAT MUST NOT APPEAR YET
No new data mutation.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not reveal flags before their need is derived.

### PERSISTENT STATE
Keep master boundaries.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Boundary reuse has a problem.
## BEAT 19 — `S08_REALDATA`

### ANCHOR / SPOKEN PHRASE
`The first row and first column are still real data.`

### WHAT APPEARS NOW
Reduce marker-role labels; emphasize actual original boundary values [1,2,0,4,5] and [1,6,0,16,21].

### CENTER-STAGE HERO
Original boundary values.

### CAUSE
Teach conflict.

### EFFECT / MOTION
Narration reminds learner the reused storage already contains meaningful input.

### WHAT MUST NOT APPEAR YET
Boundary cells are data first.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
No flags yet.

### PERSISTENT STATE
Keep original boundary values.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Original boundary history visible.
## BEAT 20 — `S08_DESTROY`

### ANCHOR / SPOKEN PHRASE
`If we start using them as memory we may destroy information about whether they originally contained a zero.`

### WHAT APPEARS NOW
Show a conceptual overwrite on one nonzero boundary cell turning into marker0, while a ghost of original value fades; immediately reset after illustrating the risk.

### CENTER-STAGE HERO
Lost boundary history risk.

### CAUSE
Show cause→risk.

### EFFECT / MOTION
Narration states information-loss danger.

### WHAT MUST NOT APPEAR YET
Overwrite→lost history relation.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not execute real optimal trace yet.

### PERSISTENT STATE
Reset to original master.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Need to save boundary history.
## BEAT 21 — `S08_CORNER`

### ANCHOR / SPOKEN PHRASE
`And the corner cell matrix[0][0] belongs to both boundaries.`

### WHAT APPEARS NOW
Focus only top-left cell; first-row and first-column guides converge on it.

### CENTER-STAGE HERO
Corner (0,0).

### CAUSE
Teach ambiguity.

### EFFECT / MOTION
Narration names overlap.

### WHAT MUST NOT APPEAR YET
Two boundary relations meet at corner.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not claim it stores either flag yet.

### PERSISTENT STATE
Keep corner active.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Corner shared by both roles.
## BEAT 22 — `S08_ONECELL`

### ANCHOR / SPOKEN PHRASE
`one cell cannot independently preserve both original boundary facts.`

### WHAT APPEARS NOW
Show two minimal questions around the corner: `original first row had 0?` and `original first column had 0?`; one cell sits between them.

### CENTER-STAGE HERO
Two independent facts vs one shared cell.

### CAUSE
Derive flags.

### EFFECT / MOTION
Narration explains insufficiency.

### WHAT MUST NOT APPEAR YET
No data mutation; conceptual conflict only.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not show actual true values before questions are asked next.

### PERSISTENT STATE
Keep two questions.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid

### MOTION PURPOSE
Need two independent memories.
## BEAT 23 — `S08_BEFORE`

### ANCHOR / SPOKEN PHRASE
`So before we reuse the boundaries we save those two facts separately.`

### WHAT APPEARS NOW
Boundary role cues reduce; create two small direct chalk boolean placeholders, not cards.

### CENTER-STAGE HERO
Two external boolean facts.

### CAUSE
Introduce minimal extra state.

### EFFECT / MOTION
Narration authorizes saved facts.

### WHAT MUST NOT APPEAR YET
Two independent memory slots appear.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not name/assign values before next questions.

### PERSISTENT STATE
Keep two placeholders.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Two booleans ready.
## BEAT 24 — `S08_QROW`

### ANCHOR / SPOKEN PHRASE
`Did the original first row contain a zero?`

### WHAT APPEARS NOW
Focus original first row [1,2,0,4,5]; first boolean placeholder becomes active.

### CENTER-STAGE HERO
First-row history question.

### CAUSE
Matrix/Grid + ChalkText

### EFFECT / MOTION
Narration asks exact fact.

### WHAT MUST NOT APPEAR YET
Original zero at (0,2) can receive source focus because it answers question.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not set firstColZero yet.

### PERSISTENT STATE
Keep row answer support.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
First-row fact ready.
## BEAT 25 — `S08_FRFLAG`

### ANCHOR / SPOKEN PHRASE
`Store that in firstRowZero.`

### WHAT APPEARS NOW
Name the first boolean `firstRowZero` and bind it to the fact `original first row had a zero?`. Do not write the literal boolean value yet; Scene10 owns the exact master evaluation `false → true`.

### CENTER-STAGE HERO
firstRowZero.

### CAUSE
Name state.

### EFFECT / MOTION
Narration names storage.

### WHAT MUST NOT APPEAR YET
Fact → named boolean.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not show firstColZero value.

### PERSISTENT STATE
Keep named first flag.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
firstRowZero stores original row0 history; value not yet rendered.
## BEAT 26 — `S08_QCOL`

### ANCHOR / SPOKEN PHRASE
`Did the original first column contain a zero?`

### WHAT APPEARS NOW
Focus original first column [1,6,0,16,21]; second boolean placeholder becomes active.

### CENTER-STAGE HERO
First-column history question.

### CAUSE
Matrix/Grid + ChalkText

### EFFECT / MOTION
Narration asks second fact.

### WHAT MUST NOT APPEAR YET
Original zero at (2,0) supports answer.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
No boundary marker writes.

### PERSISTENT STATE
Keep column support.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Second fact ready.
## BEAT 27 — `S08_FCFLAG`

### ANCHOR / SPOKEN PHRASE
`Store that in firstColZero.`

### WHAT APPEARS NOW
Name the second boolean `firstColZero` and bind it to the fact `original first column had a zero?`. Do not write the literal boolean value yet; Scene10 owns the exact master evaluation.

### CENTER-STAGE HERO
firstColZero.

### CAUSE
Name state.

### EFFECT / MOTION
Narration names storage.

### WHAT MUST NOT APPEAR YET
Fact→named boolean.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
No optimal trace execution.

### PERSISTENT STATE
Keep both flags.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
firstRowZero + firstColZero preserve boundary history; literal values deferred to Scene10.
## BEAT 28 — `S08_SAFE`

### ANCHOR / SPOKEN PHRASE
`Now the boundary history is safe.`

### WHAT APPEARS NOW
Master boundary returns to normal data appearance while two flags remain as compact persistent facts.

### CENTER-STAGE HERO
Two saved flags.

### CAUSE
Close conflict.

### EFFECT / MOTION
Narration confirms preservation.

### WHAT MUST NOT APPEAR YET
No marker writes yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not start interior scan.

### PERSISTENT STATE
Keep flags; remove question prompts.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Boundary history preserved.
## BEAT 29 — `S08_MEMORY`

### ANCHOR / SPOKEN PHRASE
`And the matrix can become its own marker memory.`

### WHAT APPEARS NOW
Boundary role cues return: col0=ROW MARKERS, row0=COLUMN MARKERS; external arrays remain absent.

### CENTER-STAGE HERO
One matrix + two booleans.

### CAUSE
Semantic continuity.

### EFFECT / MOTION
Narration completes derivation.

### WHAT MUST NOT APPEAR YET
Representation handoff is now fully justified.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not execute master trace; Scene09 owns conceptual method flow, Scene10 exact trace.

### PERSISTENT STATE
End on one matrix + two flags.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Optimal storage model ready.


---

# 9. CONTINUITY OUT

Scene09 begins with the fully derived storage model:

```text
firstRowZero / firstColZero preserve original boundary history
first column = row-marker memory
first row = column-marker memory
external marker arrays are gone
```

No exact master mutation has happened yet.

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
