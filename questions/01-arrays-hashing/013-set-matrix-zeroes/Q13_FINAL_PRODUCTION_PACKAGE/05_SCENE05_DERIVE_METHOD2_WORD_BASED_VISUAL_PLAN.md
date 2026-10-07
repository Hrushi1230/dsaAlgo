# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 05 — Why Method 1 Wastes Space → Derive Method 2
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Derive Method2 from first principles by compressing full-matrix information into exactly the row and column facts the final decision needs.

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

Scene05 starts from Scene04's unresolved question:

```text
FULL COPY = correct but stores every value
QUESTION = what information do we truly need?
```

No marker arrays exist yet.

---

# 2. EXACT NARRATION SOURCE

```text
Suppose we find an original zero at row three, column three.

Do we really need to remember every number in the original matrix?

No.

For the final answer...

we only need two facts.

Which rows contained a zero?

And which columns contained a zero?

That is much less information.

Instead of copying the whole matrix...

we can keep one marker for every row...

and one marker for every column.

If row three contains an original zero...

mark row three.

If column three contains an original zero...

mark column three.

Then after discovery is finished...

those markers tell us exactly where zeros must go.

So we have compressed our memory.

From an entire matrix...

to only row information and column information.

Let’s trace that method.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

The information needed after discovery is exactly:

```text
which rows originally contained a zero?
which columns originally contained a zero?
```

For representative zero `(3,3)`:

```text
row 3 must be marked
column 3 must be marked
```

Method2 storage is:

```text
rowZero[m]
colZero[n]
```

No actual full marker pattern is traced until Scene06.

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

- Derive the data structure; do not simply announce arrays at scene start.
- `rowZero` appears only after `one marker for every row`.
- `colZero` appears only after `one marker for every column`.
- Scene05 uses only representative source zero `(3,3)`; it must not pre-trace all three zeros.
- Do not show the final true/false marker patterns; Scene06 owns those states.
- Do not reveal first-row/first-column marker reuse or constant-space solution.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S05_ZERO` | `Suppose we find an original zero at row three, column three.` | Original zero (3,3). |
| `S05_EVERY` | `Do we really need to remember every number in the original matrix?` | Full-copy memory concept. |
| `S05_NO` | `No.` | Relevant information only. |
| `S05_TWO` | `we only need two facts.` | Two unresolved fact slots. |
| `S05_ROWS` | `Which rows contained a zero?` | Row information. |
| `S05_COLS` | `And which columns contained a zero?` | Column information. |
| `S05_LESS` | `That is much less information.` | Row3 + col3 fact pair. |
| `S05_INSTEAD` | `Instead of copying the whole matrix` | Full-copy concept crossed/reduced. |
| `S05_ROW_MARKER` | `we can keep one marker for every row` | rowZero structure appears. |
| `S05_COL_MARKER` | `and one marker for every column.` | colZero structure appears. |
| `S05_R3` | `If row three contains an original zero mark row three.` | rowZero[3]. |
| `S05_C3` | `If column three contains an original zero mark column three.` | colZero[3]. |
| `S05_AFTER` | `Then after discovery is finished` | Marker arrays as stored memory. |
| `S05_TELL` | `those markers tell us exactly where zeros must go.` | Marker→matrix decision direction. |
| `S05_COMPRESSED` | `So we have compressed our memory.` | Compression concept. |
| `S05_FROM` | `From an entire matrix` | Full-copy source memory. |
| `S05_TO` | `to only row information and column information.` | rowZero + colZero. |
| `S05_TRACE` | `Let’s trace that method.` | Method2 trace handoff. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S05_ZERO`

### ANCHOR / SPOKEN PHRASE
`Suppose we find an original zero at row three, column three.`

### WHAT APPEARS NOW
Bring the untouched master matrix to center and focus exactly (3,3).

### CENTER-STAGE HERO
Original zero (3,3).

### CAUSE
Narration chooses one representative original zero.

### EFFECT / MOTION
Single source cell focus.

### WHAT MUST NOT APPEAR YET
No marker arrays yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep (3,3) active through the memory question.

### PERSISTENT STATE
Master matrix + source zero.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Set up derivation.
## BEAT 02 — `S05_EVERY`

### ANCHOR / SPOKEN PHRASE
`Do we really need to remember every number in the original matrix?`

### WHAT APPEARS NOW
Project the full original-copy storage concept beside/behind the focused source zero; copied nonzero values are visible only as quiet support.

### CENTER-STAGE HERO
Full-copy memory concept.

### CAUSE
Narration questions full preservation.

### EFFECT / MOTION
Attention expands from one relevant zero to all stored values.

### WHAT MUST NOT APPEAR YET
Do not answer until `No`.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Hold full-copy concept.

### PERSISTENT STATE
Full-copy memory.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Create contrast.
## BEAT 03 — `S05_NO`

### ANCHOR / SPOKEN PHRASE
`No.`

### WHAT APPEARS NOW
All irrelevant copied values recede; original zero source remains.

### CENTER-STAGE HERO
Relevant information only.

### CAUSE
Narration rejects full copy.

### EFFECT / MOTION
Memory visually compresses in importance.

### WHAT MUST NOT APPEAR YET
Do not yet show row/column arrays.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep source zero.

### PERSISTENT STATE
Source zero only.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Resolve question.
## BEAT 04 — `S05_TWO`

### ANCHOR / SPOKEN PHRASE
`we only need two facts.`

### WHAT APPEARS NOW
Two direct chalk prompts appear one at a time: `ROW?` and `COLUMN?`; not arrays yet.

### CENTER-STAGE HERO
Two unresolved fact slots.

### CAUSE
Narration says two facts.

### EFFECT / MOTION
Source zero stays support.

### WHAT MUST NOT APPEAR YET
No boolean arrays.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep prompts.

### PERSISTENT STATE
Zero + two questions.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Derive information shape.
## BEAT 05 — `S05_ROWS`

### ANCHOR / SPOKEN PHRASE
`Which rows contained a zero?`

### WHAT APPEARS NOW
Promote `ROW?`; trace a temporary horizontal relation from (3,3) to row identity 3.

### CENTER-STAGE HERO
Row information.

### CAUSE
Narration names first fact.

### EFFECT / MOTION
One horizontal semantic relation.

### WHAT MUST NOT APPEAR YET
Column fact quiet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep row fact as compact `row 3`.

### PERSISTENT STATE
Row fact known.

### KIT / EXISTING SYSTEM
Matrix + RoughLine + ChalkText.

### MOTION PURPOSE
Teach compression.
## BEAT 06 — `S05_COLS`

### ANCHOR / SPOKEN PHRASE
`And which columns contained a zero?`

### WHAT APPEARS NOW
Promote `COLUMN?`; vertical relation from (3,3) to column identity 3.

### CENTER-STAGE HERO
Column information.

### CAUSE
Narration names second fact.

### EFFECT / MOTION
Row relation exits before column relation enters.

### WHAT MUST NOT APPEAR YET
No arrays yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep compact row3 + col3 facts.

### PERSISTENT STATE
Two facts known.

### KIT / EXISTING SYSTEM
Matrix + RoughLine + ChalkText.

### MOTION PURPOSE
Teach compression.
## BEAT 07 — `S05_LESS`

### ANCHOR / SPOKEN PHRASE
`That is much less information.`

### WHAT APPEARS NOW
Full-copy representation fades away completely; only compact row/column facts remain around source zero.

### CENTER-STAGE HERO
Row3 + col3 fact pair.

### CAUSE
Narration evaluates compression.

### EFFECT / MOTION
Semantic handoff full matrix memory→two facts.

### WHAT MUST NOT APPEAR YET
Do not show method2 arrays until spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep two facts.

### PERSISTENT STATE
Compact information.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Show information reduction.
## BEAT 08 — `S05_INSTEAD`

### ANCHOR / SPOKEN PHRASE
`Instead of copying the whole matrix`

### WHAT APPEARS NOW
Briefly recall full-copy silhouette, then strike/reduce it.

### CENTER-STAGE HERO
Full-copy concept crossed/reduced.

### CAUSE
Narration contrasts approaches.

### EFFECT / MOTION
RoughLine strike teaches removal of unnecessary storage.

### WHAT MUST NOT APPEAR YET
No marker array values yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear full-copy silhouette.

### PERSISTENT STATE
Two-fact need remains.

### KIT / EXISTING SYSTEM
RoughLine + Matrix silhouette.

### MOTION PURPOSE
Direct comparison.
## BEAT 09 — `S05_ROW_MARKER`

### ANCHOR / SPOKEN PHRASE
`we can keep one marker for every row`

### WHAT APPEARS NOW
Create one Array V2 track with one slot per row; label it `rowZero`. Values are not yet all assigned until next method trace; represent marker capacity only.

### CENTER-STAGE HERO
rowZero structure appears.

### CAUSE
Narration derives row marker storage.

### EFFECT / MOTION
Structure enters from row facts, not as a generic card.

### WHAT MUST NOT APPEAR YET
Do not create colZero yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep rowZero structure.

### PERSISTENT STATE
rowZero capacity.

### KIT / EXISTING SYSTEM
Array V2.

### MOTION PURPOSE
Derive data structure.
## BEAT 10 — `S05_COL_MARKER`

### ANCHOR / SPOKEN PHRASE
`and one marker for every column.`

### WHAT APPEARS NOW
Create second Array V2 track with one slot per column, semantically paired but not equal-weight with rowZero; label `colZero`.

### CENTER-STAGE HERO
colZero structure appears.

### CAUSE
Narration derives column storage.

### EFFECT / MOTION
rowZero reduces slightly while colZero is introduced.

### WHAT MUST NOT APPEAR YET
No true/false pattern yet beyond generic unset state.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep both marker structures for next examples.

### PERSISTENT STATE
rowZero + colZero structures.

### KIT / EXISTING SYSTEM
Array V2.

### MOTION PURPOSE
Derive data structure.
## BEAT 11 — `S05_R3`

### ANCHOR / SPOKEN PHRASE
`If row three contains an original zero mark row three.`

### WHAT APPEARS NOW
Focus source zero (3,3), then project one temporary relation to rowZero index3; marker changes to true.

### CENTER-STAGE HERO
rowZero[3].

### CAUSE
Narration gives row-marker action.

### EFFECT / MOTION
Cause source zero→row marker true.

### WHAT MUST NOT APPEAR YET
colZero[3] change hidden until next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation; keep true state.

### PERSISTENT STATE
rowZero[3]=true.

### KIT / EXISTING SYSTEM
Matrix + Array V2 + RoughLine.

### MOTION PURPOSE
Cause→effect.
## BEAT 12 — `S05_C3`

### ANCHOR / SPOKEN PHRASE
`If column three contains an original zero mark column three.`

### WHAT APPEARS NOW
Project source zero to colZero index3; marker changes to true.

### CENTER-STAGE HERO
colZero[3].

### CAUSE
Narration gives column-marker action.

### EFFECT / MOTION
Cause source zero→column marker true.

### WHAT MUST NOT APPEAR YET
No final matrix mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation; keep both true states.

### PERSISTENT STATE
rowZero[3]=true, colZero[3]=true.

### KIT / EXISTING SYSTEM
Matrix + Array V2 + RoughLine.

### MOTION PURPOSE
Cause→effect.
## BEAT 13 — `S05_AFTER`

### ANCHOR / SPOKEN PHRASE
`Then after discovery is finished`

### WHAT APPEARS NOW
Source matrix reduces; rowZero/colZero become center-stage memory objects.

### CENTER-STAGE HERO
Marker arrays as stored memory.

### CAUSE
Narration moves to post-discovery phase.

### EFFECT / MOTION
Representation handoff matrix→marker memory.

### WHAT MUST NOT APPEAR YET
Do not show final true/false pattern for all rows/cols; Scene06 owns actual full trace.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep generic marker concept.

### PERSISTENT STATE
Marker arrays concept.

### KIT / EXISTING SYSTEM
Array V2.

### MOTION PURPOSE
Semantic continuity.
## BEAT 14 — `S05_TELL`

### ANCHOR / SPOKEN PHRASE
`those markers tell us exactly where zeros must go.`

### WHAT APPEARS NOW
Show one conceptual relation back from rowZero[3]/colZero[3] toward row3/col3 regions of a quiet matrix; do not execute full zeroing.

### CENTER-STAGE HERO
Marker→matrix decision direction.

### CAUSE
Narration states purpose.

### EFFECT / MOTION
Direction reverses: markers→matrix.

### WHAT MUST NOT APPEAR YET
No full result.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear relation after purpose.

### PERSISTENT STATE
Marker arrays remain.

### KIT / EXISTING SYSTEM
Array V2 + Matrix + RoughLine.

### MOTION PURPOSE
Teach data flow.
## BEAT 15 — `S05_COMPRESSED`

### ANCHOR / SPOKEN PHRASE
`So we have compressed our memory.`

### WHAT APPEARS NOW
Marker arrays own center; full-copy silhouette no longer visible.

### CENTER-STAGE HERO
Compression concept.

### CAUSE
Narration summarizes.

### EFFECT / MOTION
No extra animation beyond focus.

### WHAT MUST NOT APPEAR YET
No complexity label yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep arrays.

### PERSISTENT STATE
rowZero + colZero.

### KIT / EXISTING SYSTEM
Array V2.

### MOTION PURPOSE
Teach information compression.
## BEAT 16 — `S05_FROM`

### ANCHOR / SPOKEN PHRASE
`From an entire matrix`

### WHAT APPEARS NOW
Brief semantic recall of full-copy matrix at low emphasis.

### CENTER-STAGE HERO
Full-copy source memory.

### CAUSE
Narration names old representation.

### EFFECT / MOTION
Marker arrays reduce slightly.

### WHAT MUST NOT APPEAR YET
Do not show complexity.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare handoff to compressed state.

### PERSISTENT STATE
Old representation recalled.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Contrast representations.
## BEAT 17 — `S05_TO`

### ANCHOR / SPOKEN PHRASE
`to only row information and column information.`

### WHAT APPEARS NOW
Full-copy recall exits; marker arrays return center stage with labels `row info` / `column info`.

### CENTER-STAGE HERO
rowZero + colZero.

### CAUSE
Narration states new representation.

### EFFECT / MOTION
Semantic compression completes.

### WHAT MUST NOT APPEAR YET
No values beyond the example true markers.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep arrays into next scene.

### PERSISTENT STATE
Marker arrays.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### MOTION PURPOSE
Representation handoff.
## BEAT 18 — `S05_TRACE`

### ANCHOR / SPOKEN PHRASE
`Let’s trace that method.`

### WHAT APPEARS NOW
Reset marker arrays to their initial unprocessed visual state; master matrix returns as support.

### CENTER-STAGE HERO
Method2 trace handoff.

### CAUSE
Narration hands off to actual trace.

### EFFECT / MOTION
Prepare clean starting state without yet setting all false values; Scene06 owns initialization narration.

### WHAT MUST NOT APPEAR YET
No scan movement yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
End on master + empty/uninitialized marker structures.

### PERSISTENT STATE
Scene06 start state.

### KIT / EXISTING SYSTEM
Matrix + Array V2.

### MOTION PURPOSE
Semantic continuity.


---

# 9. CONTINUITY OUT

Scene06 begins with:

```text
MASTER MATRIX available
rowZero structure exists but initial values are not yet narrated
colZero structure exists but initial values are not yet narrated
METHOD2 concept = matrix → row/column marker memory → matrix
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
