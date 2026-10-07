# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 09 — Method 3 Idea — Matrix Becomes Its Own Memory
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Teach the optimal method as an information-flow system before any master execution: save boundary history, project interior-zero information outward, reverse it back inward for decisions, then finalize the boundary from the saved facts.

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

Scene09 inherits the fully derived storage design from Scene08:

```text
external marker arrays removed
first column = row-marker storage
first row = column-marker storage
firstRowZero / firstColZero exist as saved-history concepts
literal values not yet rendered
```

---

# 2. EXACT NARRATION SOURCE

```text
This is the key idea of the optimal solution.

We have already protected the original first-row and first-column state.

From this point...

their job changes.

The first column becomes row-marker memory.

The first row becomes column-marker memory.

Now scan only the interior.

Suppose we find an interior zero at row `r`, column `c`.

We do not zero the complete row immediately.

We send information outward.

Write zero at the first cell of that row.

That means:

this row must become zero later.

Then write zero at the top cell of that column.

That means:

this column must become zero later.

So an interior zero projects its information to the boundary.

After the discovery pass...

the boundary contains everything we need.

Then the direction reverses.

Each interior cell asks two questions.

Is my row marker zero?

Or...

is my column marker zero?

If either answer is yes...

the cell becomes zero.

Once the interior is finished...

the boundary has completed its marker job.

Then we use the two saved booleans...

to finalize the first row...

and the first column.

So the information flow is:

save the boundary history...

send zero information out to the boundary...

use the boundary to update the interior...

then finalize the boundary using the saved flags.

Now let’s execute that on our master matrix.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Conceptual optimal order:

```text
1. save original first-row history
2. save original first-column history
3. scan interior only
4. interior zero (r,c) → matrix[r][0]=0 and matrix[0][c]=0
5. apply boundary markers to interior
6. finalize first row from firstRowZero
7. finalize first column from firstColZero
```

Scene09 teaches the flow only. It does not execute the locked master states.

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

- Unique identity = MATRIX BECOMES MEMORY.
- This is conceptual, but still uses the real matrix grammar; no generic flowchart cards.
- Use symbolic `(r,c)` only where narration itself is generic.
- No literal `firstRowZero=true` / `firstColZero=true` yet.
- No master-specific marker writes `(3,0)` or `(0,3)` yet.
- Marker-role labels should reduce once their job is complete.
- End by resetting to the untouched master so Scene10 starts exact execution cleanly.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S09_KEY` | `This is the key idea of the optimal solution.` | One matrix + two saved-fact labels. |
| `S09_PROTECTED` | `We have already protected the original first-row and first-column state.` | Saved boundary history concept. |
| `S09_JOB` | `From this point their job changes.` | Boundary role handoff. |
| `S09_FC` | `The first column becomes row-marker memory.` | First column as row-marker memory. |
| `S09_FR` | `The first row becomes column-marker memory.` | First row as column-marker memory. |
| `S09_INTERIOR` | `Now scan only the interior.` | Interior region. |
| `S09_FIND` | `Suppose we find an interior zero at row r, column c.` | Symbolic interior zero (r,c). |
| `S09_NOTIMM` | `We do not zero the complete row immediately.` | Non-mutation invariant. |
| `S09_OUT` | `We send information outward.` | Interior zero with two unresolved boundary directions. |
| `S09_ROWWRITE` | `Write zero at the first cell of that row.` | Row-boundary marker destination. |
| `S09_ROWMEAN` | `this row must become zero later.` | Meaning of row marker. |
| `S09_COLWRITE` | `Then write zero at the top cell of that column.` | Column-boundary marker destination. |
| `S09_COLMEAN` | `this column must become zero later.` | Meaning of column marker. |
| `S09_PROJECT` | `So an interior zero projects its information to the boundary.` | Interior zero → two boundary markers. |
| `S09_AFTER` | `After the discovery pass the boundary contains everything we need.` | Boundary memory. |
| `S09_REVERSE` | `Then the direction reverses.` | Boundary → interior direction. |
| `S09_TWOQ` | `Each interior cell asks two questions.` | Generic interior cell + two boundary references. |
| `S09_ROWQ` | `Is my row marker zero?` | Row-marker query. |
| `S09_COLQ` | `is my column marker zero?` | Column-marker query. |
| `S09_EITHER` | `If either answer is yes the cell becomes zero.` | Generic interior cell mutation. |
| `S09_DONE` | `Once the interior is finished the boundary has completed its marker job.` | Boundary memory after application. |
| `S09_FLAGS` | `Then we use the two saved booleans` | Saved flags. |
| `S09_FINROW` | `to finalize the first row` | First-row finalization concept. |
| `S09_FINCOL` | `and the first column.` | First-column finalization concept. |
| `S09_FLOW` | `So the information flow is` | Information-flow summary. |
| `S09_SAVE` | `save the boundary history` | Step1. |
| `S09_SEND` | `send zero information out to the boundary` | Step2. |
| `S09_USE` | `use the boundary to update the interior` | Step3. |
| `S09_FINALIZE` | `then finalize the boundary using the saved flags.` | Step4. |
| `S09_EXEC` | `Now let’s execute that on our master matrix.` | Master-trace handoff. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S09_KEY`

### ANCHOR / SPOKEN PHRASE
`This is the key idea of the optimal solution.`

### WHAT APPEARS NOW
Bring the single master matrix to center; two compact flag names sit as quiet support, values still not rendered.

### CENTER-STAGE HERO
One matrix + two saved-fact labels.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Method3 identity settles; external arrays are absent.

### WHAT MUST NOT APPEAR YET
No master scan yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep matrix + flag names.

### PERSISTENT STATE
Optimal storage model.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Establish method identity.
## BEAT 02 — `S09_PROTECTED`

### ANCHOR / SPOKEN PHRASE
`We have already protected the original first-row and first-column state.`

### WHAT APPEARS NOW
Promote the two flag labels as preserved history facts; boundary values remain original.

### CENTER-STAGE HERO
Saved boundary history concept.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Boundary-history protection is the teaching object.

### WHAT MUST NOT APPEAR YET
Do not show literal true values.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce flags after concept.

### PERSISTENT STATE
Boundary history protected.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Reconnect derivation.
## BEAT 03 — `S09_JOB`

### ANCHOR / SPOKEN PHRASE
`From this point their job changes.`

### WHAT APPEARS NOW
Focus first row and first column together as the representation about to change role.

### CENTER-STAGE HERO
Boundary role handoff.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No value mutation; only semantic role change.

### WHAT MUST NOT APPEAR YET
Do not mark anything yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep boundaries highlighted.

### PERSISTENT STATE
Boundary role transition.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Semantic handoff.
## BEAT 04 — `S09_FC`

### ANCHOR / SPOKEN PHRASE
`The first column becomes row-marker memory.`

### WHAT APPEARS NOW
Apply restrained ROW MARKERS role cue to column0.

### CENTER-STAGE HERO
First column as row-marker memory.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Role changes, geometry/value unchanged.

### WHAT MUST NOT APPEAR YET
First-row role not yet emphasized.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep col0 role.

### PERSISTENT STATE
col0=row marker storage.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach storage role.
## BEAT 05 — `S09_FR`

### ANCHOR / SPOKEN PHRASE
`The first row becomes column-marker memory.`

### WHAT APPEARS NOW
Apply COLUMN MARKERS role cue to row0.

### CENTER-STAGE HERO
First row as column-marker memory.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Role changes, values remain original.

### WHAT MUST NOT APPEAR YET
No interior scan.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both boundary roles.

### PERSISTENT STATE
row0=column markers; col0=row markers.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach storage role.
## BEAT 06 — `S09_INTERIOR`

### ANCHOR / SPOKEN PHRASE
`Now scan only the interior.`

### WHAT APPEARS NOW
De-emphasize boundary cells as scan targets; highlight only rows1..m-1 × cols1..n-1 as active scan region.

### CENTER-STAGE HERO
Interior region.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Boundary remains storage, not scan region.

### WHAT MUST NOT APPEAR YET
No current zero yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep interior region cue.

### PERSISTENT STATE
Interior scan domain.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach scope.
## BEAT 07 — `S09_FIND`

### ANCHOR / SPOKEN PHRASE
`Suppose we find an interior zero at row r, column c.`

### WHAT APPEARS NOW
Focus one symbolic interior zero in the matrix grammar; use semantic r/c labels, not invented numbers.

### CENTER-STAGE HERO
Symbolic interior zero (r,c).

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Current zero becomes hero.

### WHAT MUST NOT APPEAR YET
No full row/column zeroing.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source active.

### PERSISTENT STATE
Interior zero selected.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Set up marker projection.
## BEAT 08 — `S09_NOTIMM`

### ANCHOR / SPOKEN PHRASE
`We do not zero the complete row immediately.`

### WHAT APPEARS NOW
Briefly show the row region beginning to activate, then stop/cross it before any values change.

### CENTER-STAGE HERO
Non-mutation invariant.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Absence of immediate mutation is the effect.

### WHAT MUST NOT APPEAR YET
No row marker write until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear stopped row effect.

### PERSISTENT STATE
Source zero remains.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Reinforce invariant.
## BEAT 09 — `S09_OUT`

### ANCHOR / SPOKEN PHRASE
`We send information outward.`

### WHAT APPEARS NOW
Keep the interior zero as hero and add only a compact `information moves outward` cue around it. Do not draw either exact boundary path yet.

### CENTER-STAGE HERO
Interior zero with unresolved outward information.

### CAUSE
Narration says information leaves the source cell, but has not yet named either destination.

### EFFECT / MOTION
A restrained outward emphasis/pulse directs attention away from the source without encoding left/up destinations.

### WHAT MUST NOT APPEAR YET
Do not reveal `matrix[r][0]`, `matrix[0][c]`, left/up paths, or marker-zero writes before their exact narration phrases.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep guide paths.

### PERSISTENT STATE
Outward projection concept.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach flow.
## BEAT 10 — `S09_ROWWRITE`

### ANCHOR / SPOKEN PHRASE
`Write zero at the first cell of that row.`

### WHAT APPEARS NOW
Complete horizontal guide to matrix[r][0] and write 0 there.

### CENTER-STAGE HERO
Row-boundary marker destination.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One marker write occurs.

### WHAT MUST NOT APPEAR YET
Column-marker write hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear horizontal path; keep marker.

### PERSISTENT STATE
matrix[r][0]=0.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Cause→effect.
## BEAT 11 — `S09_ROWMEAN`

### ANCHOR / SPOKEN PHRASE
`this row must become zero later.`

### WHAT APPEARS NOW
Brief semantic cue `ROW LATER → ZERO` attaches to matrix[r][0].

### CENTER-STAGE HERO
Meaning of row marker.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No new data mutation.

### WHAT MUST NOT APPEAR YET
Do not zero row now.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue; keep marker.

### PERSISTENT STATE
Row marker meaning known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach encoding.
## BEAT 12 — `S09_COLWRITE`

### ANCHOR / SPOKEN PHRASE
`Then write zero at the top cell of that column.`

### WHAT APPEARS NOW
Complete vertical guide to matrix[0][c] and write 0 there.

### CENTER-STAGE HERO
Column-boundary marker destination.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Second marker write occurs.

### WHAT MUST NOT APPEAR YET
No interior application yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear path; keep marker.

### PERSISTENT STATE
matrix[0][c]=0.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Cause→effect.
## BEAT 13 — `S09_COLMEAN`

### ANCHOR / SPOKEN PHRASE
`this column must become zero later.`

### WHAT APPEARS NOW
Attach brief `COLUMN LATER → ZERO` cue to matrix[0][c].

### CENTER-STAGE HERO
Meaning of column marker.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No new mutation.

### WHAT MUST NOT APPEAR YET
Do not zero column now.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce cue.

### PERSISTENT STATE
Both marker meanings known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach encoding.
## BEAT 14 — `S09_PROJECT`

### ANCHOR / SPOKEN PHRASE
`So an interior zero projects its information to the boundary.`

### WHAT APPEARS NOW
Momentarily show the complete L-shaped semantic projection from source to the two marker cells, then settle to boundary state.

### CENTER-STAGE HERO
Interior zero → two boundary markers.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration summarizes discovery flow.

### WHAT MUST NOT APPEAR YET
No master-specific coordinates.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Remove source emphasis; boundary markers remain.

### PERSISTENT STATE
Boundary stores source information.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Summarize flow.
## BEAT 15 — `S09_AFTER`

### ANCHOR / SPOKEN PHRASE
`After the discovery pass the boundary contains everything we need.`

### WHAT APPEARS NOW
Interior region recedes; first row/column marker memory owns center.

### CENTER-STAGE HERO
Boundary memory.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Discovery phase ends conceptually.

### WHAT MUST NOT APPEAR YET
No cell updates yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep boundary memory.

### PERSISTENT STATE
Discovery complete concept.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Phase transition.
## BEAT 16 — `S09_REVERSE`

### ANCHOR / SPOKEN PHRASE
`Then the direction reverses.`

### WHAT APPEARS NOW
Outward guides disappear; one inward guide from boundary toward a generic interior cell appears.

### CENTER-STAGE HERO
Boundary → interior direction.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Information flow reverses.

### WHAT MUST NOT APPEAR YET
No decision yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep generic interior cell.

### PERSISTENT STATE
Application phase concept.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Semantic handoff.
## BEAT 17 — `S09_TWOQ`

### ANCHOR / SPOKEN PHRASE
`Each interior cell asks two questions.`

### WHAT APPEARS NOW
Focus one interior cell; show left row-marker reference and top column-marker reference as two supports.

### CENTER-STAGE HERO
Generic interior cell + two boundary references.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Cell becomes decision hero.

### WHAT MUST NOT APPEAR YET
Do not answer either yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both references.

### PERSISTENT STATE
Boundary gate setup.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach decision structure.
## BEAT 18 — `S09_ROWQ`

### ANCHOR / SPOKEN PHRASE
`Is my row marker zero?`

### WHAT APPEARS NOW
Promote left boundary reference; top reference recedes.

### CENTER-STAGE HERO
Row-marker query.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One query only.

### WHAT MUST NOT APPEAR YET
Do not show OR result.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep cell + row query.

### PERSISTENT STATE
First gate checked.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach gate.
## BEAT 19 — `S09_COLQ`

### ANCHOR / SPOKEN PHRASE
`is my column marker zero?`

### WHAT APPEARS NOW
Promote top boundary reference; row reference becomes quiet support.

### CENTER-STAGE HERO
Column-marker query.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Second query only.

### WHAT MUST NOT APPEAR YET
Do not mutate cell yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both query results conceptually.

### PERSISTENT STATE
Two gates known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach gate.
## BEAT 20 — `S09_EITHER`

### ANCHOR / SPOKEN PHRASE
`If either answer is yes the cell becomes zero.`

### WHAT APPEARS NOW
Show one generic yes-case: one boundary marker is zero, current interior value changes to zero.

### CENTER-STAGE HERO
Generic interior cell mutation.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
OR condition→cell effect.

### WHAT MUST NOT APPEAR YET
No master-specific cell decision.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear generic example after teaching.

### PERSISTENT STATE
Application rule known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach OR rule.
## BEAT 21 — `S09_DONE`

### ANCHOR / SPOKEN PHRASE
`Once the interior is finished the boundary has completed its marker job.`

### WHAT APPEARS NOW
Interior settles; marker-role labels begin to reduce because their teaching job is complete.

### CENTER-STAGE HERO
Boundary memory after application.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Boundary storage no longer needed for interior.

### WHAT MUST NOT APPEAR YET
Do not finalize boundary before next phrases.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep saved flag names.

### PERSISTENT STATE
Interior concept complete.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach lifecycle.
## BEAT 22 — `S09_FLAGS`

### ANCHOR / SPOKEN PHRASE
`Then we use the two saved booleans`

### WHAT APPEARS NOW
Boundary marker labels recede; `firstRowZero` and `firstColZero` return as hero facts.

### CENTER-STAGE HERO
Saved flags.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration retrieves preserved history.

### WHAT MUST NOT APPEAR YET
Do not zero row/col yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep flags.

### PERSISTENT STATE
Saved history ready.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Semantic handoff.
## BEAT 23 — `S09_FINROW`

### ANCHOR / SPOKEN PHRASE
`to finalize the first row`

### WHAT APPEARS NOW
Promote firstRowZero relation to row0; show only conceptual row-finalization arrow, not master mutation.

### CENTER-STAGE HERO
First-row finalization concept.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration assigns first saved fact.

### WHAT MUST NOT APPEAR YET
No first-column finalization simultaneously.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear row relation after concept.

### PERSISTENT STATE
Row-finalization rule known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach boundary restoration logic.
## BEAT 24 — `S09_FINCOL`

### ANCHOR / SPOKEN PHRASE
`and the first column.`

### WHAT APPEARS NOW
Promote firstColZero relation to col0.

### CENTER-STAGE HERO
First-column finalization concept.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration assigns second saved fact.

### WHAT MUST NOT APPEAR YET
No full master output.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Both boundary-finalization rules known.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach boundary restoration logic.
## BEAT 25 — `S09_FLOW`

### ANCHOR / SPOKEN PHRASE
`So the information flow is`

### WHAT APPEARS NOW
Reduce matrix detail; use one simple semantic flow line across the center.

### CENTER-STAGE HERO
Information-flow summary.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration announces summary.

### WHAT MUST NOT APPEAR YET
No new algorithm truth.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep summary scaffold.

### PERSISTENT STATE
Four-step flow ready.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine

### MOTION PURPOSE
Prepare recap.
## BEAT 26 — `S09_SAVE`

### ANCHOR / SPOKEN PHRASE
`save the boundary history`

### WHAT APPEARS NOW
Show compact `SAVE BOUNDARY HISTORY`.

### CENTER-STAGE HERO
Step1.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
First summary step appears.

### WHAT MUST NOT APPEAR YET
Future steps hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep as previous step dim.

### PERSISTENT STATE
Step1 known.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Summarize.
## BEAT 27 — `S09_SEND`

### ANCHOR / SPOKEN PHRASE
`send zero information out to the boundary`

### WHAT APPEARS NOW
Add `INTERIOR ZERO → BOUNDARY MARKERS`.

### CENTER-STAGE HERO
Step2.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Second step appears; Step1 dims.

### WHAT MUST NOT APPEAR YET
No application step early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep prior steps dim.

### PERSISTENT STATE
Step1+2 known.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine

### MOTION PURPOSE
Summarize.
## BEAT 28 — `S09_USE`

### ANCHOR / SPOKEN PHRASE
`use the boundary to update the interior`

### WHAT APPEARS NOW
Add `BOUNDARY MARKERS → INTERIOR`.

### CENTER-STAGE HERO
Step3.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Direction reversal is explicit.

### WHAT MUST NOT APPEAR YET
No finalization step early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep flow.

### PERSISTENT STATE
Steps1–3 known.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine

### MOTION PURPOSE
Summarize.
## BEAT 29 — `S09_FINALIZE`

### ANCHOR / SPOKEN PHRASE
`then finalize the boundary using the saved flags.`

### WHAT APPEARS NOW
Add `SAVED FLAGS → FIRST ROW/COLUMN`; complete four-step flow.

### CENTER-STAGE HERO
Step4.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration completes method order.

### WHAT MUST NOT APPEAR YET
No exact master state.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Let flow settle, then reduce.

### PERSISTENT STATE
Optimal conceptual order locked.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine

### MOTION PURPOSE
Summarize.
## BEAT 30 — `S09_EXEC`

### ANCHOR / SPOKEN PHRASE
`Now let’s execute that on our master matrix.`

### WHAT APPEARS NOW
Summary exits; untouched master matrix returns center stage with no markers written.

### CENTER-STAGE HERO
Master-trace handoff.

### CAUSE
Semantic continuity.

### EFFECT / MOTION
Narration hands off to exact trace.

### WHAT MUST NOT APPEAR YET
Reset conceptual symbolic markers; exact trace begins fresh in Scene10.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Do not pre-set flag values or marker cells.

### PERSISTENT STATE
End on untouched master.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Scene10 start state.


---

# 9. CONTINUITY OUT

Scene10 receives exactly:

```text
UNTOUCHED MASTER MATRIX
optimal conceptual order understood
NO flags evaluated yet
NO marker writes yet
```

Scene10 owns every concrete state transition.

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
