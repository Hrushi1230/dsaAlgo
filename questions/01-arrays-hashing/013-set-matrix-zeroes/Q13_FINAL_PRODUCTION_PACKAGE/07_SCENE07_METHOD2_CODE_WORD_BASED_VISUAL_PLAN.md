# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 07 — Method 2 Code
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Build the two-pass marker-array solution live, preserve the discovery-before-mutation invariant, and end by exposing that the external arrays duplicate row/column-sized storage already present in the matrix.

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

Scene07 inherits:

```text
rowZero[m]
colZero[n]
PASS1 = record only
PASS2 = mutate from markers
```

No code lines exist before spoken.

---

# 2. EXACT NARRATION SOURCE

```text
First...

store `m` and `n`.

Then create `rowZero` with `m` false values.

And create `colZero` with `n` false values.

The first pass is only for discovery.

For every cell...

if `matrix[r][c]` is zero...

set `rowZero[r]` to true...

and `colZero[c]` to true.

Notice the important part.

During this pass...

we are not changing the matrix.

We are only recording information.

After discovery is complete...

start the second pass.

For every cell...

check its row marker...

and its column marker.

If either one is true...

set that matrix cell to zero.

That is all.

The code directly follows the invariant:

first remember...

then mutate.

The time is already linear in the number of matrix cells.

But the extra memory is still proportional to the number of rows plus columns.

Can we remove even those two marker arrays?

Look carefully at the matrix itself.

It already contains storage in exactly those two dimensions.
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Verified teaching code:

```python
def setZeroesMarkers(matrix):
    m = len(matrix)
    n = len(matrix[0])

    rowZero = [False] * m
    colZero = [False] * n

    for r in range(m):
        for c in range(n):
            if matrix[r][c] == 0:
                rowZero[r] = True
                colZero[c] = True

    for r in range(m):
        for c in range(n):
            if rowZero[r] or colZero[c]:
                matrix[r][c] = 0
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

Reuse the production course code component.

```text
spoken code idea
→ active line types character-by-character
→ line completes
→ semantic effect proves that line
→ old line dims/reduces if no longer needed
→ next line appears only when spoken
```

Future lines remain hidden. No generic black IDE. Exact editor API is `UNRESOLVED — REPO SOURCE REQUIRED`.

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

- Future lines hidden until their narration.
- First pass must never semantically mutate matrix.
- Second-pass assignment appears only after both row/column checks are spoken.
- Do not invent complexity graph in this scene; the script gives only conceptual cost intuition here.
- End with the matrix's matching row/column storage dimensions, not the optimal marker trick itself.
- External marker arrays remain real until Scene08 derives their replacement.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S07_FIRST` | `First` | Empty Method2 code focus. |
| `S07_MN` | `store m and n.` | `m = len(matrix)` then `n = len(matrix[0])`. |
| `S07_ROWARR` | `Then create rowZero with m false values.` | `rowZero = [False] * m`. |
| `S07_COLARR` | `And create colZero with n false values.` | `colZero = [False] * n`. |
| `S07_DISC` | `The first pass is only for discovery.` | Discovery-phase invariant. |
| `S07_EVERY` | `For every cell` | Nested loops over r and c. |
| `S07_IF` | `if matrix[r][c] is zero` | Condition line. |
| `S07_SETROW` | `set rowZero[r] to true` | Row marker assignment. |
| `S07_SETCOL` | `and colZero[c] to true.` | Column marker assignment. |
| `S07_IMPORTANT` | `Notice the important part.` | Discovery code block. |
| `S07_NOTCHANGE` | `During this pass we are not changing the matrix.` | Unchanged matrix + discovery block. |
| `S07_RECORD` | `We are only recording information.` | Marker arrays. |
| `S07_AFTER` | `After discovery is complete start the second pass.` | Second-pass loop shell. |
| `S07_EVERYCELL` | `For every cell` | Second-pass current cell. |
| `S07_CHECKROW` | `check its row marker` | First half of condition. |
| `S07_CHECKCOL` | `and its column marker.` | Complete OR condition. |
| `S07_EITHER` | `If either one is true` | Condition result. |
| `S07_SETZERO` | `set that matrix cell to zero.` | Assignment `matrix[r][c] = 0`. |
| `S07_ALL` | `That is all.` | Completed Method2 code. |
| `S07_FIRSTREM` | `first remember` | Pass1 block. |
| `S07_THENMUT` | `then mutate.` | Pass2 block. |
| `S07_TIME` | `The time is already linear in the number of matrix cells.` | Two full matrix passes. |
| `S07_MEMORY` | `But the extra memory is still proportional to the number of rows plus columns.` | rowZero + colZero storage. |
| `S07_REMOVE` | `Can we remove even those two marker arrays?` | Unresolved question. |
| `S07_LOOK` | `Look carefully at the matrix itself.` | Matrix. |
| `S07_STORAGE` | `It already contains storage in exactly those two dimensions.` | Matrix row/column dimensions. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S07_FIRST`

### ANCHOR / SPOKEN PHRASE
`First`

### WHAT APPEARS NOW
Bring code focus to center; no future lines visible.

### CENTER-STAGE HERO
Empty Method2 code focus.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Cursor only; no text until spoken.

### WHAT MUST NOT APPEAR YET
No m/n or arrays yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep code focus.

### PERSISTENT STATE
Empty active line.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Trace→code handoff.
## BEAT 02 — `S07_MN`

### ANCHOR / SPOKEN PHRASE
`store m and n.`

### WHAT APPEARS NOW
Type the row-count line, then the column-count line in narration order.

### CENTER-STAGE HERO
`m = len(matrix)` then `n = len(matrix[0])`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Each line types and completes before next begins.

### WHAT MUST NOT APPEAR YET
No marker arrays yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Completed lines dim.

### PERSISTENT STATE
m/n context.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Construct code.
## BEAT 03 — `S07_ROWARR`

### ANCHOR / SPOKEN PHRASE
`Then create rowZero with m false values.`

### WHAT APPEARS NOW
Type the rowZero initialization line. After completion, show the row marker Array V2 semantic effect populated false.

### CENTER-STAGE HERO
`rowZero = [False] * m`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Code line → marker structure proof.

### WHAT MUST NOT APPEAR YET
Do not create colZero early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Array support recedes; code returns hero.

### PERSISTENT STATE
rowZero line persists dim.

### KIT / EXISTING SYSTEM
Production code + Array V2

### MOTION PURPOSE
Construct code + prove effect.
## BEAT 04 — `S07_COLARR`

### ANCHOR / SPOKEN PHRASE
`And create colZero with n false values.`

### WHAT APPEARS NOW
Type colZero line; after completion show false marker array.

### CENTER-STAGE HERO
`colZero = [False] * n`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Line → semantic structure.

### WHAT MUST NOT APPEAR YET
No scan loops yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Support recedes.

### PERSISTENT STATE
Both marker initializations persist.

### KIT / EXISTING SYSTEM
Production code + Array V2

### MOTION PURPOSE
Construct code + prove effect.
## BEAT 05 — `S07_DISC`

### ANCHOR / SPOKEN PHRASE
`The first pass is only for discovery.`

### WHAT APPEARS NOW
Dim setup lines; one chalk note `PASS 1 · RECORD ONLY` appears beside current code focus.

### CENTER-STAGE HERO
Discovery-phase invariant.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No matrix mutation shown.

### WHAT MUST NOT APPEAR YET
Do not type second-pass code.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep invariant through discovery code.

### PERSISTENT STATE
Discovery phase.

### KIT / EXISTING SYSTEM
Production code + ChalkText

### MOTION PURPOSE
Teach pass role.
## BEAT 06 — `S07_EVERY`

### ANCHOR / SPOKEN PHRASE
`For every cell`

### WHAT APPEARS NOW
Type the two loop headers that scan all matrix cells.

### CENTER-STAGE HERO
Nested loops over r and c.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
After loop shell completes, briefly show matrix scan focus as support.

### WHAT MUST NOT APPEAR YET
No if branch before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Matrix support recedes.

### PERSISTENT STATE
Loop context remains.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct traversal.
## BEAT 07 — `S07_IF`

### ANCHOR / SPOKEN PHRASE
`if matrix[r][c] is zero`

### WHAT APPEARS NOW
Type the zero condition only.

### CENTER-STAGE HERO
Condition line.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Current matrix cell query appears after line completion.

### WHAT MUST NOT APPEAR YET
Do not type marker assignments early.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep condition active.

### PERSISTENT STATE
Condition context.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct branch.
## BEAT 08 — `S07_SETROW`

### ANCHOR / SPOKEN PHRASE
`set rowZero[r] to true`

### WHAT APPEARS NOW
Type `rowZero[r] = True`; after completion project current zero to corresponding rowZero slot.

### CENTER-STAGE HERO
Row marker assignment.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One marker changes in semantic proof.

### WHAT MUST NOT APPEAR YET
colZero assignment hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Support relation clears.

### PERSISTENT STATE
row assignment line persists.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid + Array V2

### MOTION PURPOSE
Construct + prove.
## BEAT 09 — `S07_SETCOL`

### ANCHOR / SPOKEN PHRASE
`and colZero[c] to true.`

### WHAT APPEARS NOW
Type `colZero[c] = True`; show semantic projection to column marker.

### CENTER-STAGE HERO
Column marker assignment.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
One marker change only.

### WHAT MUST NOT APPEAR YET
No matrix mutation.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Support clears.

### PERSISTENT STATE
Discovery body complete.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid + Array V2

### MOTION PURPOSE
Construct + prove.
## BEAT 10 — `S07_IMPORTANT`

### ANCHOR / SPOKEN PHRASE
`Notice the important part.`

### WHAT APPEARS NOW
Promote the first-pass loop/condition/assignments; all unrelated code dims.

### CENTER-STAGE HERO
Discovery code block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No new line types.

### WHAT MUST NOT APPEAR YET
Do not show second pass yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep block.

### PERSISTENT STATE
Discovery block hero.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Direct attention.
## BEAT 11 — `S07_NOTCHANGE`

### ANCHOR / SPOKEN PHRASE
`During this pass we are not changing the matrix.`

### WHAT APPEARS NOW
Show matrix pixel-identical while rowZero/colZero markers change in a tiny semantic proof.

### CENTER-STAGE HERO
Unchanged matrix + discovery block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Absence of matrix mutation is the effect.

### WHAT MUST NOT APPEAR YET
No application pass code.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear support.

### PERSISTENT STATE
Discovery invariant remains.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid + Array V2

### MOTION PURPOSE
Teach invariant.
## BEAT 12 — `S07_RECORD`

### ANCHOR / SPOKEN PHRASE
`We are only recording information.`

### WHAT APPEARS NOW
Promote rowZero/colZero as the only state changed by pass1.

### CENTER-STAGE HERO
Marker arrays.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Matrix recedes.

### WHAT MUST NOT APPEAR YET
No second-pass result.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Return code focus.

### PERSISTENT STATE
Record-only invariant known.

### KIT / EXISTING SYSTEM
Array V2

### MOTION PURPOSE
Teach pass role.
## BEAT 13 — `S07_AFTER`

### ANCHOR / SPOKEN PHRASE
`After discovery is complete start the second pass.`

### WHAT APPEARS NOW
`PASS 1 · RECORD ONLY` reduces; type the second pair of nested loops.

### CENTER-STAGE HERO
Second-pass loop shell.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Semantic handoff discovery→application.

### WHAT MUST NOT APPEAR YET
No row/col condition yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep loop context.

### PERSISTENT STATE
Second pass active.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Construct application pass.
## BEAT 14 — `S07_EVERYCELL`

### ANCHOR / SPOKEN PHRASE
`For every cell`

### WHAT APPEARS NOW
Loop headers remain active; matrix returns as support.

### CENTER-STAGE HERO
Second-pass current cell.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Prepare marker checks.

### WHAT MUST NOT APPEAR YET
No mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep code.

### PERSISTENT STATE
Second-pass traversal.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 15 — `S07_CHECKROW`

### ANCHOR / SPOKEN PHRASE
`check its row marker`

### WHAT APPEARS NOW
Begin typing `if rowZero[r] ...`; focus current row marker in semantic support.

### CENTER-STAGE HERO
First half of condition.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Row check becomes visible.

### WHAT MUST NOT APPEAR YET
Do not reveal OR column half before spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep partial condition active.

### PERSISTENT STATE
Partial condition.

### KIT / EXISTING SYSTEM
Production code + Array V2

### MOTION PURPOSE
Construct condition.
## BEAT 16 — `S07_CHECKCOL`

### ANCHOR / SPOKEN PHRASE
`and its column marker.`

### WHAT APPEARS NOW
Type `or colZero[c]`; semantic support adds current column marker.

### CENTER-STAGE HERO
Complete OR condition.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Condition now represents either marker.

### WHAT MUST NOT APPEAR YET
No assignment before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep condition active.

### PERSISTENT STATE
Full marker condition.

### KIT / EXISTING SYSTEM
Production code + Array V2

### MOTION PURPOSE
Construct condition.
## BEAT 17 — `S07_EITHER`

### ANCHOR / SPOKEN PHRASE
`If either one is true`

### WHAT APPEARS NOW
Show one representative current cell with one marker true; condition evaluates true.

### CENTER-STAGE HERO
Condition result.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No write yet.

### WHAT MUST NOT APPEAR YET
Do not mutate before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep true condition.

### PERSISTENT STATE
True branch ready.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid + Array V2

### MOTION PURPOSE
Teach branch.
## BEAT 18 — `S07_SETZERO`

### ANCHOR / SPOKEN PHRASE
`set that matrix cell to zero.`

### WHAT APPEARS NOW
Type assignment; after completion mutate representative cell in matrix.

### CENTER-STAGE HERO
Assignment `matrix[r][c] = 0`.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Code→state effect.

### WHAT MUST NOT APPEAR YET
No future optimization.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Semantic support clears.

### PERSISTENT STATE
Method2 application body complete.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid

### MOTION PURPOSE
Construct + prove.
## BEAT 19 — `S07_ALL`

### ANCHOR / SPOKEN PHRASE
`That is all.`

### WHAT APPEARS NOW
Let the constructed code settle; cursor stops.

### CENTER-STAGE HERO
Completed Method2 code.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
No new code.

### WHAT MUST NOT APPEAR YET
No complexity yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare invariant summary.

### PERSISTENT STATE
Method2 code complete.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Comprehension hold.
## BEAT 20 — `S07_FIRSTREM`

### ANCHOR / SPOKEN PHRASE
`first remember`

### WHAT APPEARS NOW
Collapse focus to discovery block + rowZero/colZero labels.

### CENTER-STAGE HERO
Pass1 block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Pass1 becomes hero.

### WHAT MUST NOT APPEAR YET
Do not show mutation block simultaneously at equal strength.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Hold until next phrase.

### PERSISTENT STATE
Remember phase.

### KIT / EXISTING SYSTEM
Production code + Array V2

### MOTION PURPOSE
Summarize invariant.
## BEAT 21 — `S07_THENMUT`

### ANCHOR / SPOKEN PHRASE
`then mutate.`

### WHAT APPEARS NOW
Focus transfers to application block; pass1 dims.

### CENTER-STAGE HERO
Pass2 block.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Pass2 becomes hero.

### WHAT MUST NOT APPEAR YET
No optimization yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Settle complete two-pass flow.

### PERSISTENT STATE
Remember→mutate invariant.

### KIT / EXISTING SYSTEM
Production code component

### MOTION PURPOSE
Summarize invariant.
## BEAT 22 — `S07_TIME`

### ANCHOR / SPOKEN PHRASE
`The time is already linear in the number of matrix cells.`

### WHAT APPEARS NOW
Code reduces; show two sequential matrix-pass traces as a single conceptual `scan + scan` relation, not a complexity graph yet.

### CENTER-STAGE HERO
Two full matrix passes.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Narration gives time intuition.

### WHAT MUST NOT APPEAR YET
No O(mn) text unless script literally states notation later; here use conceptual pass count only.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear pass sketch.

### PERSISTENT STATE
Need to improve memory.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Teach cost source.
## BEAT 23 — `S07_MEMORY`

### ANCHOR / SPOKEN PHRASE
`But the extra memory is still proportional to the number of rows plus columns.`

### WHAT APPEARS NOW
Promote marker arrays; visually tie rowZero length to rows and colZero length to columns.

### CENTER-STAGE HERO
rowZero + colZero storage.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Memory structures own center.

### WHAT MUST NOT APPEAR YET
No first-row/column reuse before question.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep arrays.

### PERSISTENT STATE
External marker memory.

### KIT / EXISTING SYSTEM
Array V2 + Matrix/Grid

### MOTION PURPOSE
Derive weakness.
## BEAT 24 — `S07_REMOVE`

### ANCHOR / SPOKEN PHRASE
`Can we remove even those two marker arrays?`

### WHAT APPEARS NOW
Marker arrays receive a temporary question cue; no answer appears.

### CENTER-STAGE HERO
Unresolved question.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Create productive gap.

### WHAT MUST NOT APPEAR YET
Do not show boundary reuse yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep question.

### PERSISTENT STATE
External arrays under question.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText

### MOTION PURPOSE
Set up Method3 derivation.
## BEAT 25 — `S07_LOOK`

### ANCHOR / SPOKEN PHRASE
`Look carefully at the matrix itself.`

### WHAT APPEARS NOW
Marker arrays recede; master matrix returns to center, untouched representation.

### CENTER-STAGE HERO
Matrix.

### CAUSE
Narration reaches this idea.

### EFFECT / MOTION
Attention shifts from external storage to input storage.

### WHAT MUST NOT APPEAR YET
No boundary highlighting yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep matrix.

### PERSISTENT STATE
Matrix hero.

### KIT / EXISTING SYSTEM
Matrix/Grid

### MOTION PURPOSE
Direct attention.
## BEAT 26 — `S07_STORAGE`

### ANCHOR / SPOKEN PHRASE
`It already contains storage in exactly those two dimensions.`

### WHAT APPEARS NOW
Show only the matrix's general dimensions: `m rows` and `n columns`. The learner should recognize that the input itself has storage organized along both dimensions, but no particular row or column is selected yet.

### CENTER-STAGE HERO
The matrix as an `m × n` storage structure.

### CAUSE
Narration points out that the input already contains storage organized in the same two dimensions as the external marker arrays.

### EFFECT / MOTION
External marker arrays recede; simple row-count and column-count guides remain around the matrix. No boundary cell receives special marker meaning.

### WHAT MUST NOT APPEAR YET
Do not highlight the first row or first column as reusable storage; Scene08 must derive that explicitly.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
End on the centered matrix with only `m rows` / `n columns` dimensional cues.

### PERSISTENT STATE
Matrix has `m` rows and `n` columns; reuse location is still unresolved.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText

### MOTION PURPOSE
Semantic handoff.


---

# 9. CONTINUITY OUT

Scene08 receives:

```text
rowZero uses m cells
colZero uses n cells
QUESTION = can matrix's own boundary provide equivalent storage?
```

No first-row/first-column marker role has been assigned yet.

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
