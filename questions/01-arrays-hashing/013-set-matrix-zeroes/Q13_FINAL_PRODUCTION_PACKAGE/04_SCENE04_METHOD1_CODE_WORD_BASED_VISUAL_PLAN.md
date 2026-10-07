# Q13 — Set Matrix Zeroes (LC 73)
# Phase 9 · Scene 04 — Method 1 Code
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Construct the baseline full-copy code word-by-word, prove each active line against the matrix, and end by exposing that the code stores much more information than the decision actually needs.

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

Scene04 inherits only the Method1 invariant from Scene03:

```text
READ ORIGINAL
WRITE MATRIX
FULL COPY REQUIRED
```

The trace matrices have receded. Code does not exist until spoken.

---

# 2. EXACT NARRATION SOURCE

```text
First...

make a full copy of the matrix.

This copy will never be modified.

Then store the number of rows...

and the number of columns.

Now scan every cell in the original copy.

If the original cell is not zero...

we do nothing.

But when the original cell is zero...

we zero the corresponding row in the working matrix.

Then we zero the corresponding column in the working matrix.

That is the complete idea.

Read from the copy...

write into the real matrix.

Because the discovery source never changes...

a zero created by us cannot create a false chain reaction.

The code is easy to trust.

But the cost is much larger than the information we actually need.

We copied every value...

even though most of those values are irrelevant to the decision.

So let’s ask a better question.

What information do we truly need to remember?
```

The plan may visualize only what the narration has reached.

---

# 3. LOCKED SCENE TRUTH

Verified teaching code:

```python
def setZeroesCopy(matrix):
    original = [row[:] for row in matrix]

    m = len(matrix)
    n = len(matrix[0])

    for r in range(m):
        for c in range(n):
            if original[r][c] == 0:
                for j in range(n):
                    matrix[r][j] = 0

                for i in range(m):
                    matrix[i][c] = 0
```

The narration phrase `If the original cell is not zero... we do nothing` describes the natural false branch; do not invent a `continue` statement that is absent from the verified code.

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

---

# 6. SCENE-SPECIFIC RULES

- Future code lines are hidden until narration reaches their idea.
- Character typing timing comes only from final word sync.
- Active line owns code focus; old lines remain dim only if the current line depends on them.
- Every mutation line gets one matrix semantic proof after the line completes.
- Never invent `continue`, helper functions, or code not in the verified teaching target.
- Method2 names and marker arrays remain hidden through the final question.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S04_FIRST` | `First` | Method1 code focus zone. |
| `S04_COPY` | `make a full copy of the matrix.` | Active line: `original = [row[:] for row in matrix]`. |
| `S04_NEVER` | `This copy will never be modified.` | `original` line + immutable source cue. |
| `S04_ROWS` | `Then store the number of rows` | Active line: `m = len(matrix)`. |
| `S04_COLS` | `and the number of columns.` | Active line: `n = len(matrix[0])`. |
| `S04_SCAN` | `Now scan every cell in the original copy.` | Nested scan lines for `r` then `c` become current code idea. |
| `S04_NOTZERO` | `If the original cell is not zero` | Condition concept at current source cell. |
| `S04_NOTHING` | `we do nothing.` | No-op branch meaning. |
| `S04_ZERO` | `But when the original cell is zero` | Zero branch becomes active. |
| `S04_ZERO_ROW` | `we zero the corresponding row in the working matrix.` | Active row-zeroing loop. |
| `S04_ZERO_COL` | `Then we zero the corresponding column in the working matrix.` | Active column-zeroing loop. |
| `S04_COMPLETE` | `That is the complete idea.` | Completed Method1 code structure. |
| `S04_READ` | `Read from the copy` | `original` references. |
| `S04_WRITE` | `write into the real matrix.` | `matrix` write references. |
| `S04_NOCHAIN` | `Because the discovery source never changes a zero created by us cannot create a false chain reaction.` | Correctness invariant. |
| `S04_TRUST` | `The code is easy to trust.` | Completed Method1 code. |
| `S04_COST` | `But the cost is much larger than the information we actually need.` | Full-copy line. |
| `S04_EVERY` | `We copied every value` | All duplicated cells. |
| `S04_IRRELEVANT` | `even though most of those values are irrelevant to the decision.` | Necessary-vs-unnecessary information contrast. |
| `S04_BETTER` | `So let’s ask a better question.` | Unresolved memory question. |
| `S04_REMEMBER` | `What information do we truly need to remember?` | Question center stage. |

No seconds or frame numbers belong here before final MP3 + exact sync JSON exist.

---

# 8. WORD-BASED CHOREOGRAPHY

## BEAT 01 — `S04_FIRST`

### ANCHOR / SPOKEN PHRASE
`First`

### WHAT APPEARS NOW
Bring the production code surface to center with no future code visible.

### CENTER-STAGE HERO
Method1 code focus zone.

### CAUSE
Narration opens code construction.

### EFFECT / MOTION
Cursor appears at empty active line only.

### WHAT MUST NOT APPEAR YET
No code text before next phrase.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep code focus.

### PERSISTENT STATE
Empty active code line.

### KIT / EXISTING SYSTEM
Production code component.

### MOTION PURPOSE
Semantic handoff trace→code.
## BEAT 02 — `S04_COPY`

### ANCHOR / SPOKEN PHRASE
`make a full copy of the matrix.`

### WHAT APPEARS NOW
Type only the full-copy line character-by-character during this narration idea.

### CENTER-STAGE HERO
Active line: `original = [row[:] for row in matrix]`.

### CAUSE
Narration introduces the copy operation.

### EFFECT / MOTION
Line types; when complete, a small semantic source-copy matrix projection appears to prove the line.

### WHAT MUST NOT APPEAR YET
No m/n, loops, or future lines.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Semantic copy visual recedes after proof; typed line may remain dim because later code reads `original`.

### PERSISTENT STATE
Copy line persists dim.

### KIT / EXISTING SYSTEM
Production code component + Matrix/Grid support.

### MOTION PURPOSE
Construct code + prove effect.
## BEAT 03 — `S04_NEVER`

### ANCHOR / SPOKEN PHRASE
`This copy will never be modified.`

### WHAT APPEARS NOW
Temporarily promote the just-created source copy; label `READ ONLY` / immutable cue.

### CENTER-STAGE HERO
`original` line + immutable source cue.

### CAUSE
Narration gives invariant.

### EFFECT / MOTION
No typing; semantic effect only.

### WHAT MUST NOT APPEAR YET
Do not add next line yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Source proof exits; code returns to hero.

### PERSISTENT STATE
Copy line remains.

### KIT / EXISTING SYSTEM
Matrix/Grid + ChalkText.

### MOTION PURPOSE
Teach invariant.
## BEAT 04 — `S04_ROWS`

### ANCHOR / SPOKEN PHRASE
`Then store the number of rows`

### WHAT APPEARS NOW
Type row-count line only.

### CENTER-STAGE HERO
Active line: `m = len(matrix)`.

### CAUSE
Narration reaches row count.

### EFFECT / MOTION
Character typing; optional tiny `m = 5` semantic value after line completes, but no hardcoded visual if implementation derives from actual matrix.

### WHAT MUST NOT APPEAR YET
No n line until spoken.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep line dim after completion.

### PERSISTENT STATE
copy + m lines.

### KIT / EXISTING SYSTEM
Production code component.

### MOTION PURPOSE
Construct code.
## BEAT 05 — `S04_COLS`

### ANCHOR / SPOKEN PHRASE
`and the number of columns.`

### WHAT APPEARS NOW
Type column-count line only.

### CENTER-STAGE HERO
Active line: `n = len(matrix[0])`.

### CAUSE
Narration reaches column count.

### EFFECT / MOTION
Character typing; optional semantic `n = 5` derived from matrix.

### WHAT MUST NOT APPEAR YET
No loops yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Completed line dims.

### PERSISTENT STATE
copy + m + n context.

### KIT / EXISTING SYSTEM
Production code component.

### MOTION PURPOSE
Construct code.
## BEAT 06 — `S04_SCAN`

### ANCHOR / SPOKEN PHRASE
`Now scan every cell in the original copy.`

### WHAT APPEARS NOW
Type the nested loop structure only as narration reaches scan idea; future branch remains hidden.

### CENTER-STAGE HERO
Nested scan lines for `r` then `c` become current code idea.

### CAUSE
Narration introduces traversal.

### EFFECT / MOTION
After loop shell completes, briefly show scan focus on source matrix, not working matrix.

### WHAT MUST NOT APPEAR YET
No if condition yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Scan support visual exits; loop lines remain dim.

### PERSISTENT STATE
Loop context.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid support.

### MOTION PURPOSE
Construct traversal.
## BEAT 07 — `S04_NOTZERO`

### ANCHOR / SPOKEN PHRASE
`If the original cell is not zero`

### WHAT APPEARS NOW
Do **not** type a `!= 0` branch because that line does not exist in the verified code. Keep the loop body cursor empty and focus one non-zero cell in the immutable source as a semantic false-case example.

### CENTER-STAGE HERO
Non-zero source cell that produces no branch body.

### CAUSE
Narration explains the behavior of a non-zero source cell before it names the actual zero condition.

### EFFECT / MOTION
No code text is invented. The source cell is queried; the working matrix stays pixel-identical.

### WHAT MUST NOT APPEAR YET
The actual `if original[r][c] == 0:` line remains hidden until the narration says `when the original cell is zero`; no row/column mutation yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep condition active through `we do nothing`.

### PERSISTENT STATE
Condition context.

### KIT / EXISTING SYSTEM
Production code + source matrix query.

### MOTION PURPOSE
Construct condition.
## BEAT 08 — `S04_NOTHING`

### ANCHOR / SPOKEN PHRASE
`we do nothing.`

### WHAT APPEARS NOW
Show a nonzero source cell queried and working matrix remaining pixel-identical.

### CENTER-STAGE HERO
No-op branch meaning.

### CAUSE
Narration explains nonzero behavior.

### EFFECT / MOTION
No movement is the teaching effect; small `skip`/quiet cue allowed if existing code system supports it.

### WHAT MUST NOT APPEAR YET
Do not fabricate a `continue` line if the actual code does not contain one.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Semantic proof exits.

### PERSISTENT STATE
Loop+condition code remains.

### KIT / EXISTING SYSTEM
Matrix support.

### MOTION PURPOSE
Prove absence of mutation.
## BEAT 09 — `S04_ZERO`

### ANCHOR / SPOKEN PHRASE
`But when the original cell is zero`

### WHAT APPEARS NOW
Now type the actual verified condition line character-by-character: `if original[r][c] == 0:`. After the line completes, focus original `(0,2)=0` as the semantic true-case proof. Branch-body lines remain hidden.

### CENTER-STAGE HERO
Active condition line `if original[r][c] == 0:`.

### CAUSE
Narration finally names the zero case that the real code tests.

### EFFECT / MOTION
Characters type from exact future word-sync timing; completed condition evaluates true on the source zero.

### WHAT MUST NOT APPEAR YET
Do not show row/column loop bodies before their narration phrases.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep zero as cause.

### PERSISTENT STATE
Source zero cause.

### KIT / EXISTING SYSTEM
Code + Matrix/Grid.

### MOTION PURPOSE
Set up branch.
## BEAT 10 — `S04_ZERO_ROW`

### ANCHOR / SPOKEN PHRASE
`we zero the corresponding row in the working matrix.`

### WHAT APPEARS NOW
Type only the loop/assignment that writes `matrix[r][j] = 0`; then show one row zeroing in working matrix as semantic effect.

### CENTER-STAGE HERO
Active row-zeroing loop.

### CAUSE
Narration reaches row mutation.

### EFFECT / MOTION
Code line completes → working row changes; source remains untouched.

### WHAT MUST NOT APPEAR YET
Column-zeroing code hidden.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Effect recedes; row-zeroing code dims.

### PERSISTENT STATE
Row-zeroing logic persists.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid.

### MOTION PURPOSE
Construct code + prove effect.
## BEAT 11 — `S04_ZERO_COL`

### ANCHOR / SPOKEN PHRASE
`Then we zero the corresponding column in the working matrix.`

### WHAT APPEARS NOW
Type only the loop/assignment `matrix[i][c] = 0`; show working column effect after line completes.

### CENTER-STAGE HERO
Active column-zeroing loop.

### CAUSE
Narration reaches column mutation.

### EFFECT / MOTION
Code→matrix semantic effect.

### WHAT MUST NOT APPEAR YET
No Method2.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Working effect exits; code remains.

### PERSISTENT STATE
Completed Method1 body.

### KIT / EXISTING SYSTEM
Production code + Matrix/Grid.

### MOTION PURPOSE
Construct code + prove effect.
## BEAT 12 — `S04_COMPLETE`

### ANCHOR / SPOKEN PHRASE
`That is the complete idea.`

### WHAT APPEARS NOW
Allow the currently constructed code to settle; no new lines.

### CENTER-STAGE HERO
Completed Method1 code structure.

### CAUSE
Narration closes mechanism.

### EFFECT / MOTION
Active cursor stops; only relevant lines remain visible, not a generic fully-populated IDE.

### WHAT MUST NOT APPEAR YET
No complexity yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Prepare read/write proof.

### PERSISTENT STATE
Method1 code complete.

### KIT / EXISTING SYSTEM
Production code component.

### MOTION PURPOSE
Comprehension hold.
## BEAT 13 — `S04_READ`

### ANCHOR / SPOKEN PHRASE
`Read from the copy`

### WHAT APPEARS NOW
Highlight only the code tokens/lines that read `original`; semantic source copy briefly appears.

### CENTER-STAGE HERO
`original` references.

### CAUSE
Narration summarizes read side.

### EFFECT / MOTION
Attention mapping code→source.

### WHAT MUST NOT APPEAR YET
No write highlight simultaneously.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Switch on next phrase.

### PERSISTENT STATE
Code context.

### KIT / EXISTING SYSTEM
Code token focus + Matrix support.

### MOTION PURPOSE
Teach invariant.
## BEAT 14 — `S04_WRITE`

### ANCHOR / SPOKEN PHRASE
`write into the real matrix.`

### WHAT APPEARS NOW
Highlight write assignments to `matrix`; source support exits and working matrix appears.

### CENTER-STAGE HERO
`matrix` write references.

### CAUSE
Narration summarizes write side.

### EFFECT / MOTION
Attention mapping code→working state.

### WHAT MUST NOT APPEAR YET
No new algorithm.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear support after proof.

### PERSISTENT STATE
Code remains.

### KIT / EXISTING SYSTEM
Code token focus + Matrix support.

### MOTION PURPOSE
Teach invariant.
## BEAT 15 — `S04_NOCHAIN`

### ANCHOR / SPOKEN PHRASE
`Because the discovery source never changes a zero created by us cannot create a false chain reaction.`

### WHAT APPEARS NOW
Reduce code to the read/write lines and show one created working zero separated from unchanged source truth; direct chalk invariant appears.

### CENTER-STAGE HERO
Correctness invariant.

### CAUSE
Narration proves correctness.

### EFFECT / MOTION
No-op source protection is the hero.

### WHAT MUST NOT APPEAR YET
No marker arrays.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Clear proof cue.

### PERSISTENT STATE
Method1 code invariant known.

### KIT / EXISTING SYSTEM
Code + Matrix support + ChalkText.

### MOTION PURPOSE
Correctness proof.
## BEAT 16 — `S04_TRUST`

### ANCHOR / SPOKEN PHRASE
`The code is easy to trust.`

### WHAT APPEARS NOW
Return code to center, settled.

### CENTER-STAGE HERO
Completed Method1 code.

### CAUSE
Narration evaluates simplicity.

### EFFECT / MOTION
No motion beyond focus.

### WHAT MUST NOT APPEAR YET
No cost yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep code for cost pivot.

### PERSISTENT STATE
Method1 code.

### KIT / EXISTING SYSTEM
Production code component.

### MOTION PURPOSE
Direct attention.
## BEAT 17 — `S04_COST`

### ANCHOR / SPOKEN PHRASE
`But the cost is much larger than the information we actually need.`

### WHAT APPEARS NOW
Promote only the copy line and semantic full-matrix duplicate; dim the rest of code.

### CENTER-STAGE HERO
Full-copy line.

### CAUSE
Narration pivots to weakness.

### EFFECT / MOTION
Copy line→duplicate matrix relation.

### WHAT MUST NOT APPEAR YET
No rowZero/colZero yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep duplicate memory concept.

### PERSISTENT STATE
Copy cost concept.

### KIT / EXISTING SYSTEM
Code + Matrix support.

### MOTION PURPOSE
Derive weakness.
## BEAT 18 — `S04_EVERY`

### ANCHOR / SPOKEN PHRASE
`We copied every value`

### WHAT APPEARS NOW
Use a cell-for-cell source duplicate emphasis, without numeric complexity label.

### CENTER-STAGE HERO
All duplicated cells.

### CAUSE
Narration states over-storage.

### EFFECT / MOTION
Whole-copy support becomes hero.

### WHAT MUST NOT APPEAR YET
No marker arrays.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Reduce duplication to one question-ready memory concept.

### PERSISTENT STATE
`full matrix copied`.

### KIT / EXISTING SYSTEM
Matrix/Grid.

### MOTION PURPOSE
Teach waste.
## BEAT 19 — `S04_IRRELEVANT`

### ANCHOR / SPOKEN PHRASE
`even though most of those values are irrelevant to the decision.`

### WHAT APPEARS NOW
Keep only original zero-source positions emphasized; other copied values fade/recede within source copy.

### CENTER-STAGE HERO
Necessary-vs-unnecessary information contrast.

### CAUSE
Narration identifies excess information.

### EFFECT / MOTION
Full copy visually compresses in importance to zero-location facts.

### WHAT MUST NOT APPEAR YET
Do not yet invent row/column arrays.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
End with source-zero information only.

### PERSISTENT STATE
Need for smaller representation.

### KIT / EXISTING SYSTEM
Matrix/Grid cell emphasis.

### MOTION PURPOSE
Derive next question.
## BEAT 20 — `S04_BETTER`

### ANCHOR / SPOKEN PHRASE
`So let’s ask a better question.`

### WHAT APPEARS NOW
Code exits; only compact source-zero information + chalk question remains.

### CENTER-STAGE HERO
Unresolved memory question.

### CAUSE
Narration opens derivation.

### EFFECT / MOTION
Representation handoff code→information design.

### WHAT MUST NOT APPEAR YET
No answer yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
Keep question into final phrase.

### PERSISTENT STATE
Memory question.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Semantic continuity.
## BEAT 21 — `S04_REMEMBER`

### ANCHOR / SPOKEN PHRASE
`What information do we truly need to remember?`

### WHAT APPEARS NOW
Show exact question as center-stage chalk text with the three source zeros as quiet support.

### CENTER-STAGE HERO
Question center stage.

### CAUSE
Narration asks next method-driving question.

### EFFECT / MOTION
No answer appears.

### WHAT MUST NOT APPEAR YET
No `rowZero`/`colZero` yet.

### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase.

### CLEANUP / EXIT
End on unresolved question.

### PERSISTENT STATE
Question ready for Scene05.

### KIT / EXISTING SYSTEM
ChalkText + quiet matrix support.

### MOTION PURPOSE
Create productive gap.


---

# 9. CONTINUITY OUT

Scene05 receives only the unresolved information-design question:

```text
FULL COPY IS CORRECT
FULL COPY STORES EVERY VALUE
QUESTION: WHAT INFORMATION DO WE ACTUALLY NEED?
```

No `rowZero` or `colZero` object is created before Scene05 narration derives it.

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
