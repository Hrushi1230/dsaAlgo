# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 13 — Recap + Transferable Pattern + Roadmap
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Compress the three-method evolution into the transferable preserve→compress→reuse reasoning pattern, then close Q13 on the permanent roadmap with the exact 13/227 state and Q14 Rotate Image handoff.

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

Scene13 inherits only the core invariant from Scene12.

All complexity graphs, mistakes, edge-case mini matrices, and code are cleared before recap starts.

---

# 2. EXACT NARRATION SOURCE

```text
Let’s recap the evolution.

Method One preserved everything.

We kept a full original copy...

so mutation could never corrupt our source of truth.

Correct...

but expensive in memory.

Method Two asked a better question.

What information do we actually need?

Only which rows...

and which columns...

contained an original zero.

So we compressed the full copy into:

`rowZero`...

and `colZero`.

That reduced the extra space to `O(m plus n)`.

Then came the final observation.

The matrix already contains one cell for every row...

in its first column...

and one cell for every column...

in its first row.

So instead of allocating marker arrays...

we reused the matrix itself.

But reusing storage destroys old information.

That is why we first saved:

`firstRowZero`...

and `firstColZero`.

Then the matrix became its own memory.

This gives us the final complexity:

`O(m times n)` time...

and `O(1)` extra space.

But the most useful lesson is bigger than this one problem.

When an in-place mutation may destroy information that you still need...

first ask:

What information must survive?

Then ask:

Can I preserve only that information...

instead of preserving everything?

And finally...

is there already safe storage inside the input that I can reuse?

That progression...

from full information...

to compressed information...

to reused information...

is the real pattern.

And with that...

Set Matrix Zeroes is complete.

Question thirteen...

done.

Our global progress is now thirteen out of two hundred twenty-seven.

We continue the Arrays and Hashing roadmap...

with question fourteen...

Rotate Image.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Locked recap progression:

```text
Method1 = preserve everything with full copy
Method2 = preserve only row/column facts with rowZero/colZero
Method3 = reuse first row/column as marker memory + save two boundary facts
```

Locked final complexity:

```text
Time  O(mn)
Space O(1)
```

Locked roadmap final state:

```text
Q13 Set Matrix Zeroes = COMPLETE
GLOBAL = 13 / 227 COMPLETE
Pattern-local count = DO NOT INTRODUCE OR ANIMATE from this plan. If the permanent roadmap already displays one, derive it from actual roadmap data at implementation and keep it visually quiet because narration does not name it.
Q14 Rotate Image = UP NEXT
rail focus = 014
```

The global count must not change to 13/227 before its exact spoken phrase.

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

Roadmap scene must reuse the permanent roadmap UI and data. Exact roadmap component/API is:

```text
UNRESOLVED — REPO SOURCE REQUIRED BEFORE IMPLEMENTATION
```

---

# 6. SCENE-SPECIFIC RULES

- Recap uses semantic representation handoffs; do not keep all three methods as equal-weight panels for the whole scene.
- Transferable lesson questions reveal one at a time.
- Q13 completion may occur when spoken, but the global numeric progress stays 12/227 until the explicit `thirteen out of two hundred twenty-seven` phrase.
- Q14 number appears before its title because narration says `question fourteen` before `Rotate Image`.
- Do not mark Q14 complete or increment progress beyond 13/227.
- Permanent roadmap architecture is reused; no duplicate sidebar/rail/data.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S13_RECAP` | `Let’s recap the evolution.` | Method-evolution line. |
| `S13_M1` | `Method One preserved everything.` | Method1 full-copy identity. |
| `S13_COPY` | `We kept a full original copy` | Full source copy. |
| `S13_NOCORRUPT` | `so mutation could never corrupt our source of truth.` | Read-source/write-working invariant. |
| `S13_CORRECT` | `Correct` | Method1 correctness. |
| `S13_EXPENSIVE` | `but expensive in memory.` | Full-copy duplication cost. |
| `S13_M2Q` | `Method Two asked a better question.` | Method2 transition. |
| `S13_WHAT` | `What information do we actually need?` | Unresolved info question. |
| `S13_ROWS` | `Only which rows` | Row facts. |
| `S13_COLS` | `and which columns` | Column facts. |
| `S13_CONTAIN` | `contained an original zero.` | Original-zero source relation. |
| `S13_COMPRESS` | `So we compressed the full copy into` | Representation handoff. |
| `S13_ROWZERO` | `rowZero` | rowZero. |
| `S13_COLZERO` | `and colZero.` | colZero. |
| `S13_M2SPACE` | `That reduced the extra space to O(m plus n).` | Marker-array lengths. |
| `S13_FINALOBS` | `Then came the final observation.` | Matrix itself. |
| `S13_MCELLROW` | `The matrix already contains one cell for every row` | Row-sized storage concept. |
| `S13_FIRSTCOL` | `in its first column` | First column. |
| `S13_MCELLCOL` | `and one cell for every column` | Column-sized storage concept. |
| `S13_FIRSTROW` | `in its first row.` | First row. |
| `S13_REUSE` | `So instead of allocating marker arrays we reused the matrix itself.` | Matrix as marker memory. |
| `S13_DESTROY` | `But reusing storage destroys old information.` | Boundary-history risk. |
| `S13_WHY` | `That is why we first saved` | Two saved-fact placeholders. |
| `S13_FR` | `firstRowZero` | firstRowZero. |
| `S13_FC` | `and firstColZero.` | firstColZero. |
| `S13_MEMORY` | `Then the matrix became its own memory.` | One matrix + two booleans. |
| `S13_TIME` | `This gives us the final complexity O(m times n) time` | Optimal time summary. |
| `S13_SPACE` | `and O(1) extra space.` | Two booleans + O(1). |
| `S13_BIGGER` | `But the most useful lesson is bigger than this one problem.` | Transferable pattern. |
| `S13_MUTATION` | `When an in-place mutation may destroy information that you still need` | Core situation. |
| `S13_FIRSTASK` | `first ask` | Step1 prompt. |
| `S13_SURVIVE` | `What information must survive?` | Step1 question. |
| `S13_THENASK` | `Then ask` | Step2 prompt. |
| `S13_ONLY` | `Can I preserve only that information instead of preserving everything?` | Step2 question. |
| `S13_FINALLY` | `And finally` | Step3 prompt. |
| `S13_SAFE` | `is there already safe storage inside the input that I can reuse?` | Step3 question. |
| `S13_PROGRESSION` | `That progression` | Three-step method evolution. |
| `S13_FULLINFO` | `from full information` | Method1 = full info. |
| `S13_COMPINFO` | `to compressed information` | Method2 = compressed info. |
| `S13_REUSEDINFO` | `to reused information` | Method3 = reused input storage. |
| `S13_PATTERN` | `is the real pattern.` | Transferable pattern statement. |
| `S13_COMPLETE` | `And with that Set Matrix Zeroes is complete.` | Q13 completion identity. |
| `S13_Q13DONE` | `Question thirteen done.` | Q13 COMPLETE. |
| `S13_PROGRESS` | `Our global progress is now thirteen out of two hundred twenty-seven.` | 13 / 227 global progress. |
| `S13_CONTINUE` | `We continue the Arrays and Hashing roadmap` | Arrays & Hashing roadmap. |
| `S13_Q14` | `with question fourteen` | Q14 roadmap item. |
| `S13_ROTATE` | `Rotate Image.` | Q14 Rotate Image. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S13_RECAP`

### ANCHOR / SPOKEN PHRASE
`Let’s recap the evolution.`

### WHAT APPEARS NOW
Bring one clean center-stage progression scaffold with three unlabeled method stops; reveal only Method1 identity first on next phrase.

### CENTER-STAGE HERO
Method-evolution line.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration opens recap.

### WHAT MUST NOT APPEAR YET
No complexity/result yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep scaffold.

### PERSISTENT STATE
Recap structure ready.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Set recap context.
## BEAT 02 — `S13_M1`

### ANCHOR / SPOKEN PHRASE
`Method One preserved everything.`

### WHAT APPEARS NOW
Show one matrix + protected full duplicate as Method1 hero.

### CENTER-STAGE HERO
Method1 full-copy identity.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Recall storage strategy.

### WHAT MUST NOT APPEAR YET
Do not show Method2/3 details yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep Method1 through explanation.

### PERSISTENT STATE
Method1 active.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Recall approach.
## BEAT 03 — `S13_COPY`

### ANCHOR / SPOKEN PHRASE
`We kept a full original copy`

### WHAT APPEARS NOW
Promote immutable duplicate with SOURCE cue.

### CENTER-STAGE HERO
Full source copy.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Full copy is the memory mechanism.

### WHAT MUST NOT APPEAR YET
No correctness effect before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep duplicate.

### PERSISTENT STATE
Full copy present.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Recall data structure.
## BEAT 04 — `S13_NOCORRUPT`

### ANCHOR / SPOKEN PHRASE
`so mutation could never corrupt our source of truth.`

### WHAT APPEARS NOW
Show one compact READ ORIGINAL → WRITE MATRIX relation; no cell-level trace.

### CENTER-STAGE HERO
Read-source/write-working invariant.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Source remains untouched.

### WHAT MUST NOT APPEAR YET
No cost before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Method1 correctness recalled.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Recall invariant.
## BEAT 05 — `S13_CORRECT`

### ANCHOR / SPOKEN PHRASE
`Correct`

### WHAT APPEARS NOW
Brief good confirmation beside Method1 representation.

### CENTER-STAGE HERO
Method1 correctness.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration confirms.

### WHAT MUST NOT APPEAR YET
No memory critique until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce good cue.

### PERSISTENT STATE
Method1 correct.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Confirm.
## BEAT 06 — `S13_EXPENSIVE`

### ANCHOR / SPOKEN PHRASE
`but expensive in memory.`

### WHAT APPEARS NOW
Focus the second full matrix as duplicated storage; no Big-O until script later recap gives Method2/3 values only.

### CENTER-STAGE HERO
Full-copy duplication cost.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states weakness.

### WHAT MUST NOT APPEAR YET
No Method2 solution before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare handoff.

### PERSISTENT STATE
Method1 weakness known.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Motivate next method.
## BEAT 07 — `S13_M2Q`

### ANCHOR / SPOKEN PHRASE
`Method Two asked a better question.`

### WHAT APPEARS NOW
Method1 duplicate recedes; source zeros remain as compact information need; Method2 stop becomes active.

### CENTER-STAGE HERO
Method2 transition.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration moves to information compression.

### WHAT MUST NOT APPEAR YET
No row/col facts before question.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep active Method2 stage.

### PERSISTENT STATE
Method2 derivation ready.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Semantic handoff.
## BEAT 08 — `S13_WHAT`

### ANCHOR / SPOKEN PHRASE
`What information do we actually need?`

### WHAT APPEARS NOW
Center the question; matrix source zeros quiet support.

### CENTER-STAGE HERO
Unresolved info question.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration asks core compression question.

### WHAT MUST NOT APPEAR YET
Do not reveal answer early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep question.

### PERSISTENT STATE
Information need unresolved.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Create recall gap.
## BEAT 09 — `S13_ROWS`

### ANCHOR / SPOKEN PHRASE
`Only which rows`

### WHAT APPEARS NOW
Reveal compact row-information cue first.

### CENTER-STAGE HERO
Row facts.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names first needed dimension.

### WHAT MUST NOT APPEAR YET
Columns not yet emphasized.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row cue.

### PERSISTENT STATE
Rows needed.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Recall compressed info.
## BEAT 10 — `S13_COLS`

### ANCHOR / SPOKEN PHRASE
`and which columns`

### WHAT APPEARS NOW
Add compact column-information cue; row cue becomes support.

### CENTER-STAGE HERO
Column facts.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names second dimension.

### WHAT MUST NOT APPEAR YET
No marker arrays before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both facts.

### PERSISTENT STATE
Rows+columns needed.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Recall compressed info.
## BEAT 11 — `S13_CONTAIN`

### ANCHOR / SPOKEN PHRASE
`contained an original zero.`

### WHAT APPEARS NOW
Relate row/column facts back to original-zero cells briefly.

### CENTER-STAGE HERO
Original-zero source relation.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Clarifies these facts describe original input, not created zeros.

### WHAT MUST NOT APPEAR YET
No arrays yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation.

### PERSISTENT STATE
Information definition complete.

### KIT / EXISTING SYSTEM
Matrix/Grid + RoughLine

### MOTION PURPOSE
Recall invariant.
## BEAT 12 — `S13_COMPRESS`

### ANCHOR / SPOKEN PHRASE
`So we compressed the full copy into`

### WHAT APPEARS NOW
Full-copy silhouette briefly reappears and contracts semantically into two storage tracks, but values/paths do not morph geometrically.

### CENTER-STAGE HERO
Representation handoff.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration authorizes compression.

### WHAT MUST NOT APPEAR YET
Do not label both arrays before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep first array ready.

### PERSISTENT STATE
Full copy → two marker structures.

### KIT / EXISTING SYSTEM
Matrix/Grid + Array V2

### MOTION PURPOSE
Representation handoff.
## BEAT 13 — `S13_ROWZERO`

### ANCHOR / SPOKEN PHRASE
`rowZero`

### WHAT APPEARS NOW
Reveal/promote rowZero Array V2.

### CENTER-STAGE HERO
rowZero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
First compressed structure named.

### WHAT MUST NOT APPEAR YET
colZero hidden until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep rowZero.

### PERSISTENT STATE
rowZero visible.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Recall data structure.
## BEAT 14 — `S13_COLZERO`

### ANCHOR / SPOKEN PHRASE
`and colZero.`

### WHAT APPEARS NOW
Reveal/promote colZero Array V2.

### CENTER-STAGE HERO
colZero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Second compressed structure named.

### WHAT MUST NOT APPEAR YET
No space value before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both arrays.

### PERSISTENT STATE
rowZero+colZero visible.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Recall data structure.
## BEAT 15 — `S13_M2SPACE`

### ANCHOR / SPOKEN PHRASE
`That reduced the extra space to O(m plus n).`

### WHAT APPEARS NOW
Show rowZero length m + colZero length n, then write O(m+n).

### CENTER-STAGE HERO
Marker-array lengths.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Space derives from marker counts.

### WHAT MUST NOT APPEAR YET
No Method3 observation early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce arrays for next transition.

### PERSISTENT STATE
Method2 space O(m+n).

### KIT / EXISTING SYSTEM
Array V2 + ChalkText

### MOTION PURPOSE
Recall complexity.
## BEAT 16 — `S13_FINALOBS`

### ANCHOR / SPOKEN PHRASE
`Then came the final observation.`

### WHAT APPEARS NOW
Marker arrays recede; one master matrix returns center stage.

### CENTER-STAGE HERO
Matrix itself.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration introduces storage reuse insight.

### WHAT MUST NOT APPEAR YET
No first-column/row specifics yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep matrix.

### PERSISTENT STATE
Method3 derivation ready.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Semantic handoff.
## BEAT 17 — `S13_MCELLROW`

### ANCHOR / SPOKEN PHRASE
`The matrix already contains one cell for every row`

### WHAT APPEARS NOW
Show m-row dimensional guide only; do not select first column before next phrase.

### CENTER-STAGE HERO
Row-sized storage concept.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states existence of one-per-row storage.

### WHAT MUST NOT APPEAR YET
No boundary identity yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep dimensional cue.

### PERSISTENT STATE
m-sized storage exists.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Set up boundary insight.
## BEAT 18 — `S13_FIRSTCOL`

### ANCHOR / SPOKEN PHRASE
`in its first column`

### WHAT APPEARS NOW
Promote col0 as row-marker-sized storage.

### CENTER-STAGE HERO
First column.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names exact location.

### WHAT MUST NOT APPEAR YET
First row location hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep first column role.

### PERSISTENT STATE
col0 candidate storage.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Recall reuse.
## BEAT 19 — `S13_MCELLCOL`

### ANCHOR / SPOKEN PHRASE
`and one cell for every column`

### WHAT APPEARS NOW
Show n-column dimensional guide while first column reduces.

### CENTER-STAGE HERO
Column-sized storage concept.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states second storage dimension.

### WHAT MUST NOT APPEAR YET
Do not select first row before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep guide.

### PERSISTENT STATE
n-sized storage exists.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Set up second boundary.
## BEAT 20 — `S13_FIRSTROW`

### ANCHOR / SPOKEN PHRASE
`in its first row.`

### WHAT APPEARS NOW
Promote row0 as column-marker-sized storage; col0 remains quiet support.

### CENTER-STAGE HERO
First row.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names exact location.

### WHAT MUST NOT APPEAR YET
No reuse statement until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both boundary candidates.

### PERSISTENT STATE
row0/col0 candidates.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Recall reuse.
## BEAT 21 — `S13_REUSE`

### ANCHOR / SPOKEN PHRASE
`So instead of allocating marker arrays we reused the matrix itself.`

### WHAT APPEARS NOW
External marker arrays disappear through semantic handoff into row0/col0 roles.

### CENTER-STAGE HERO
Matrix as marker memory.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states reuse.

### WHAT MUST NOT APPEAR YET
No flags before information-loss phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep one matrix.

### PERSISTENT STATE
Matrix becomes memory.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Recall optimal storage.
## BEAT 22 — `S13_DESTROY`

### ANCHOR / SPOKEN PHRASE
`But reusing storage destroys old information.`

### WHAT APPEARS NOW
Show a brief overwrite-risk cue on boundary original values; no actual trace.

### CENTER-STAGE HERO
Boundary-history risk.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration recalls cost of reuse.

### WHAT MUST NOT APPEAR YET
No flag names until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reset boundary values visually.

### PERSISTENT STATE
Need preserved history.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Recall problem.
## BEAT 23 — `S13_WHY`

### ANCHOR / SPOKEN PHRASE
`That is why we first saved`

### WHAT APPEARS NOW
Create two compact boolean placeholders beside matrix.

### CENTER-STAGE HERO
Two saved-fact placeholders.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration derives preservation before reuse.

### WHAT MUST NOT APPEAR YET
Names hidden until spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep placeholders.

### PERSISTENT STATE
Two booleans ready.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Recall fix.
## BEAT 24 — `S13_FR`

### ANCHOR / SPOKEN PHRASE
`firstRowZero`

### WHAT APPEARS NOW
Name first boolean.

### CENTER-STAGE HERO
firstRowZero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
First-row history preserved.

### WHAT MUST NOT APPEAR YET
firstColZero hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep first flag.

### PERSISTENT STATE
firstRowZero known.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Recall state.
## BEAT 25 — `S13_FC`

### ANCHOR / SPOKEN PHRASE
`and firstColZero.`

### WHAT APPEARS NOW
Name second boolean.

### CENTER-STAGE HERO
firstColZero.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
First-column history preserved.

### WHAT MUST NOT APPEAR YET
No complexity before next method summary.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both.

### PERSISTENT STATE
Two saved flags.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Recall state.
## BEAT 26 — `S13_MEMORY`

### ANCHOR / SPOKEN PHRASE
`Then the matrix became its own memory.`

### WHAT APPEARS NOW
Boundary marker roles reappear; external arrays remain absent.

### CENTER-STAGE HERO
One matrix + two booleans.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Optimal storage identity completes.

### WHAT MUST NOT APPEAR YET
No final complexity values before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep storage model.

### PERSISTENT STATE
Method3 active.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Recall core insight.
## BEAT 27 — `S13_TIME`

### ANCHOR / SPOKEN PHRASE
`This gives us the final complexity O(m times n) time`

### WHAT APPEARS NOW
Define N=m×n cells with a compact linear-pass cue; write O(mn). No full graph needed if Scene12 already taught it; this is recap confirmation.

### CENTER-STAGE HERO
Optimal time summary.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states final time.

### WHAT MUST NOT APPEAR YET
O(1) space hidden until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep time as quiet support.

### PERSISTENT STATE
O(mn) time.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Recall result.
## BEAT 28 — `S13_SPACE`

### ANCHOR / SPOKEN PHRASE
`and O(1) extra space.`

### WHAT APPEARS NOW
Promote the two flags; write O(1).

### CENTER-STAGE HERO
Two booleans + O(1).

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Constant extra state is recalled.

### WHAT MUST NOT APPEAR YET
No transferable lesson before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear method visuals after hold.

### PERSISTENT STATE
Optimal complexity known.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Recall result.
## BEAT 29 — `S13_BIGGER`

### ANCHOR / SPOKEN PHRASE
`But the most useful lesson is bigger than this one problem.`

### WHAT APPEARS NOW
All method-specific structures clear; center stage becomes one clean chalk sentence start.

### CENTER-STAGE HERO
Transferable pattern.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration leaves problem-specific mechanics.

### WHAT MUST NOT APPEAR YET
No three questions before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep empty teaching stage.

### PERSISTENT STATE
Generalization ready.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Semantic transition.
## BEAT 30 — `S13_MUTATION`

### ANCHOR / SPOKEN PHRASE
`When an in-place mutation may destroy information that you still need`

### WHAT APPEARS NOW
Write one compact cause statement `MUTATION → may destroy needed information`; use one arrow only.

### CENTER-STAGE HERO
Core situation.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration defines transferable situation.

### WHAT MUST NOT APPEAR YET
No solution steps yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep statement.

### PERSISTENT STATE
General problem pattern.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine

### MOTION PURPOSE
Generalize.
## BEAT 31 — `S13_FIRSTASK`

### ANCHOR / SPOKEN PHRASE
`first ask`

### WHAT APPEARS NOW
Prepare first step only.

### CENTER-STAGE HERO
Step1 prompt.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration introduces first question.

### WHAT MUST NOT APPEAR YET
Do not show its answer before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep prompt.

### PERSISTENT STATE
Step1 active.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Structure lesson.
## BEAT 32 — `S13_SURVIVE`

### ANCHOR / SPOKEN PHRASE
`What information must survive?`

### WHAT APPEARS NOW
Center exact question; previous cause statement recedes.

### CENTER-STAGE HERO
Step1 question.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
First design question becomes hero.

### WHAT MUST NOT APPEAR YET
Steps2/3 hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep as dim previous after next step.

### PERSISTENT STATE
Step1 known.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Transferable lesson.
## BEAT 33 — `S13_THENASK`

### ANCHOR / SPOKEN PHRASE
`Then ask`

### WHAT APPEARS NOW
Shift focus; Step1 dims.

### CENTER-STAGE HERO
Step2 prompt.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration moves to second question.

### WHAT MUST NOT APPEAR YET
No Step2 content before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep sequence.

### PERSISTENT STATE
Step2 active.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Structure lesson.
## BEAT 34 — `S13_ONLY`

### ANCHOR / SPOKEN PHRASE
`Can I preserve only that information instead of preserving everything?`

### WHAT APPEARS NOW
Center second question; small visual relation `ALL → ONLY NEEDED` allowed.

### CENTER-STAGE HERO
Step2 question.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states compression principle.

### WHAT MUST NOT APPEAR YET
Step3 hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep Step1 dim, Step2 active.

### PERSISTENT STATE
Step2 known.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine

### MOTION PURPOSE
Transferable lesson.
## BEAT 35 — `S13_FINALLY`

### ANCHOR / SPOKEN PHRASE
`And finally`

### WHAT APPEARS NOW
Shift focus to third step.

### CENTER-STAGE HERO
Step3 prompt.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration moves to final design question.

### WHAT MUST NOT APPEAR YET
No Step3 content yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep sequence.

### PERSISTENT STATE
Step3 active.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Structure lesson.
## BEAT 36 — `S13_SAFE`

### ANCHOR / SPOKEN PHRASE
`is there already safe storage inside the input that I can reuse?`

### WHAT APPEARS NOW
Center third question; small input-structure outline may appear as support.

### CENTER-STAGE HERO
Step3 question.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration states reuse principle.

### WHAT MUST NOT APPEAR YET
No roadmap yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep all three questions as compact vertical sequence only after the third is spoken.

### PERSISTENT STATE
Three design questions complete.

### KIT / EXISTING SYSTEM
ChalkText + Matrix/Grid support

### MOTION PURPOSE
Transferable lesson.
## BEAT 37 — `S13_PROGRESSION`

### ANCHOR / SPOKEN PHRASE
`That progression`

### WHAT APPEARS NOW
General questions reduce; Method1→Method2→Method3 scaffold returns.

### CENTER-STAGE HERO
Three-step method evolution.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration reconnects general lesson to this problem.

### WHAT MUST NOT APPEAR YET
No labels before spoken phrases.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep scaffold.

### PERSISTENT STATE
Progression ready.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Bridge back.
## BEAT 38 — `S13_FULLINFO`

### ANCHOR / SPOKEN PHRASE
`from full information`

### WHAT APPEARS NOW
Reveal Method1 stop with full copy icon/structure.

### CENTER-STAGE HERO
Method1 = full info.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
First evolution state.

### WHAT MUST NOT APPEAR YET
Next states quiet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep as dim prior.

### PERSISTENT STATE
Full information.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Summarize evolution.
## BEAT 39 — `S13_COMPINFO`

### ANCHOR / SPOKEN PHRASE
`to compressed information`

### WHAT APPEARS NOW
Reveal rowZero/colZero at second stop.

### CENTER-STAGE HERO
Method2 = compressed info.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Second state.

### WHAT MUST NOT APPEAR YET
Method3 hidden until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep prior states dim.

### PERSISTENT STATE
Compressed information.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Summarize evolution.
## BEAT 40 — `S13_REUSEDINFO`

### ANCHOR / SPOKEN PHRASE
`to reused information`

### WHAT APPEARS NOW
Reveal one matrix with boundary marker roles + two flags.

### CENTER-STAGE HERO
Method3 = reused input storage.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Third state.

### WHAT MUST NOT APPEAR YET
No roadmap yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Let progression settle.

### PERSISTENT STATE
Reused information.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Summarize evolution.
## BEAT 41 — `S13_PATTERN`

### ANCHOR / SPOKEN PHRASE
`is the real pattern.`

### WHAT APPEARS NOW
Progression reduces into one concise chalk line `PRESERVE → COMPRESS → REUSE SAFELY`.

### CENTER-STAGE HERO
Transferable pattern statement.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names abstraction.

### WHAT MUST NOT APPEAR YET
No completion status yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear method visuals after hold.

### PERSISTENT STATE
Pattern learned.

### KIT / EXISTING SYSTEM
ChalkText

### MOTION PURPOSE
Close teaching.
## BEAT 42 — `S13_COMPLETE`

### ANCHOR / SPOKEN PHRASE
`And with that Set Matrix Zeroes is complete.`

### WHAT APPEARS NOW
Bring permanent roadmap representation back through semantic handoff; Q13 current item becomes hero and completion state begins.

### CENTER-STAGE HERO
Q13 completion identity.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration authorizes completion.

### WHAT MUST NOT APPEAR YET
Do not increment global progress yet unless roadmap semantics require completion state without numeric change. Keep displayed global progress at 12/227 until explicit progress phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep Q13 completion state.

### PERSISTENT STATE
Q13 COMPLETE; global numeric progress still 12/227 until spoken.

### KIT / EXISTING SYSTEM
Permanent roadmap UI — exact API UNRESOLVED, repository source required.

### MOTION PURPOSE
Return to roadmap.
## BEAT 43 — `S13_Q13DONE`

### ANCHOR / SPOKEN PHRASE
`Question thirteen done.`

### WHAT APPEARS NOW
Confirm existing completed state with short completion emphasis; do not replay full animation.

### CENTER-STAGE HERO
Q13 COMPLETE.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration reinforces completion.

### WHAT MUST NOT APPEAR YET
No Q14 yet; no numeric increment if not already spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep Q13 complete.

### PERSISTENT STATE
Q13 complete locked.

### KIT / EXISTING SYSTEM
Permanent roadmap UI

### MOTION PURPOSE
Confirm state.
## BEAT 44 — `S13_PROGRESS`

### ANCHOR / SPOKEN PHRASE
`Our global progress is now thirteen out of two hundred twenty-seven.`

### WHAT APPEARS NOW
Only now update global progress `12/227 → 13/227`; if the roadmap uses a counter/rail fill, animate exact semantic increment.

### CENTER-STAGE HERO
13 / 227 global progress.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration authorizes global numeric change.

### WHAT MUST NOT APPEAR YET
Do not show Q14 before next phrases.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep new progress.

### PERSISTENT STATE
13/227 complete.

### KIT / EXISTING SYSTEM
Permanent roadmap UI; CountUp may be reused only if roadmap architecture uses it.

### MOTION PURPOSE
Update course state.
## BEAT 45 — `S13_CONTINUE`

### ANCHOR / SPOKEN PHRASE
`We continue the Arrays and Hashing roadmap`

### WHAT APPEARS NOW
Pattern context receives focus while Q13 remains complete in quiet support.

### CENTER-STAGE HERO
Arrays & Hashing roadmap.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration re-establishes roadmap path.

### WHAT MUST NOT APPEAR YET
No Q14 title yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep pattern active.

### PERSISTENT STATE
Arrays & Hashing active, 13/227.

### KIT / EXISTING SYSTEM
Permanent roadmap UI

### MOTION PURPOSE
Roadmap continuity.
## BEAT 46 — `S13_Q14`

### ANCHOR / SPOKEN PHRASE
`with question fourteen`

### WHAT APPEARS NOW
Shift rail/current-next focus to 014; Q14 item becomes UP NEXT/current handoff state.

### CENTER-STAGE HERO
Q14 roadmap item.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration reaches question number.

### WHAT MUST NOT APPEAR YET
Do not show title before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep Q14 item active as next.

### PERSISTENT STATE
rail focus 014.

### KIT / EXISTING SYSTEM
Permanent roadmap UI

### MOTION PURPOSE
Next-question handoff.
## BEAT 47 — `S13_ROTATE`

### ANCHOR / SPOKEN PHRASE
`Rotate Image.`

### WHAT APPEARS NOW
Reveal/promote Q14 title `Rotate Image`; preserve Q13 complete and 13/227 state.

### CENTER-STAGE HERO
Q14 Rotate Image.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration names next question.

### WHAT MUST NOT APPEAR YET
Do not mark Q14 active/complete beyond the established UP NEXT handoff semantics.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
End on roadmap handoff.

### PERSISTENT STATE
Q13 complete; 13/227; Q14 Rotate Image up next; rail 014.

### KIT / EXISTING SYSTEM
Permanent roadmap UI

### MOTION PURPOSE
Final continuity.


---

# 9. CONTINUITY OUT

Final locked handoff:

```text
Q13 SET MATRIX ZEROES = COMPLETE
GLOBAL PROGRESS = 13 / 227
ARRAYS & HASHING ACTIVE
Q14 ROTATE IMAGE = UP NEXT
RAIL FOCUS = 014
```

This is the exact incoming roadmap state for the next question.

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
