# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 04 — Counting Code
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC75 · Medium  
**Scene purpose:** Convert the already-verified Counting trace from Scene 03 into code without replaying the whole dry run. The learner should see exactly how the code represents the two phases already understood: **COUNT** and **REWRITE**.

---

# 0. CONTINUITY — SCENE 03 → SCENE 04

Scene 04 starts from the exact semantic end state of Scene 03:

```text
APPROACH 1 · COUNTING

COUNTS
0 → 3
1 → 3
2 → 4

PROCESS
COUNT → REWRITE

FINAL ARRAY
[0,0,0,1,1,1,2,2,2,2]
```

Scene 04 must not restart the approach explanation.

The transition is:

```text
TRACE REPRESENTATION
→
CODE REPRESENTATION
```

using a Foundation V2 **T8 representation handoff**.

Do NOT:
- replay the ten scan events;
- replay all rewrite mutations;
- rebuild the array from scratch;
- introduce complexity yet;
- introduce Dutch National Flag;
- introduce low/mid/high.

---

# 1. SOURCE TRUTH — EXACT NARRATION

```text
Now let’s convert that counting idea into code...

We need three counters...

count zero...

count one...

and count two.

Initially...

all three are zero.

Then we scan the array once.

If the current value is zero...

increase count zero.

If it is one...

increase count one.

Otherwise...

it must be two...

so increase count two.

After this first pass...

we know exactly...

how many zeroes...

how many ones...

and how many twos are present.

Now we rewrite the same array.

Start from index zero.

First...

write zero...

count zero times.

Then...

write one...

count one times.

And finally...

write two...

count two times.

That gives us the sorted array.

For our example...

count zero is three...

count one is three...

and count two is four.

So we write...

three zeroes...

three ones...

and four twos.

The code is simple...

one pass to count...

and one pass to rewrite.
```

---

# 2. VERIFIED CODE — AUTHORITATIVE

Use this exact logical structure.

```python
def sortColors(nums):
    count0 = 0
    count1 = 0
    count2 = 0

    for x in nums:
        if x == 0:
            count0 += 1
        elif x == 1:
            count1 += 1
        else:
            count2 += 1

    i = 0

    for _ in range(count0):
        nums[i] = 0
        i += 1

    for _ in range(count1):
        nums[i] = 1
        i += 1

    for _ in range(count2):
        nums[i] = 2
        i += 1
```

Do not silently rewrite this to:
- built-in `sort`;
- `Counter`;
- a frequency array;
- list reconstruction;
- a different loop structure.

The scene narration and code must stay aligned.

---

# 3. VISUAL ARCHITECTURE — LOCKED CODE SCENE FAMILY

Use the existing long-form code lesson grammar:

```text
LEFT  ≈ code editor / typed code
RIGHT ≈ trace evidence + semantic explanation
```

No generic IDE chrome.

No black editor panel.

The whole scene remains on:

```text
theme.boardBg = #18523d
```

Code editor should feel like a chalk / paper / mono coding surface integrated into the board, using existing course code styling.

## Left side
Authoritative code.

## Right side
Only the minimum evidence needed from Scene 03:
- compact 10-slot Array V2;
- three counters;
- phase indicator:
  `COUNT` or `REWRITE`.

The right side is not a second full trace.

---

# 4. COMPONENT REUSE

Preferred existing primitives:

```text
ChalkText
Captions
RoughLine
RoughBox
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
```

For code:
reuse the existing production code-rendering / typed-code component already used in Q1–Q10.

Before implementation, Antigravity must inspect the actual repo and report the exact component name.

Do not invent a second code editor if one already exists.

---

# 5. CODE REVEAL PRINCIPLE

Code is not dumped on screen at Scene start.

It is revealed by semantic narration.

Permanent rule:

```text
spoken idea
→ corresponding code line(s) become active
→ right-side trace evidence confirms meaning
→ settle
```

Typed characters may animate if the existing production code component already supports deterministic frame-driven typing.

If deterministic word-synced typing is not already supported:
- reveal by line / token group;
- do not create new typing infrastructure just for this scene.

No CSS typing animation.

---

# 6. WORD-BASED SEMANTIC ANCHORS

Exact word IDs / frame values are resolved only after the final MP3 + sync JSON exist.

| Anchor ID | Exact narration phrase | Visual purpose |
|---|---|---|
| `S04_START` | `Now let’s convert that counting idea into code` | trace → code handoff |
| `S04_THREE_COUNTERS` | `We need three counters` | reveal counter declarations block |
| `S04_COUNT0_NAME` | `count zero` | focus `count0` |
| `S04_COUNT1_NAME` | `count one` | focus `count1` |
| `S04_COUNT2_NAME` | `count two` | focus `count2` |
| `S04_INIT` | `Initially` | prepare initialization |
| `S04_ALL_ZERO` | `all three are zero` | confirm `count0=count1=count2=0` |
| `S04_SCAN_ONCE` | `Then we scan the array once` | reveal `for x in nums` |
| `S04_IF_ZERO` | `If the current value is zero` | focus `if x == 0` |
| `S04_INC_ZERO` | `increase count zero` | focus `count0 += 1` |
| `S04_IF_ONE` | `If it is one` | focus `elif x == 1` |
| `S04_INC_ONE` | `increase count one` | focus `count1 += 1` |
| `S04_ELSE` | `Otherwise` | focus `else` |
| `S04_MUST_TWO` | `it must be two` | explain value-domain exhaustiveness |
| `S04_INC_TWO` | `increase count two` | focus `count2 += 1` |
| `S04_FIRST_PASS_DONE` | `After this first pass` | collapse count-loop focus |
| `S04_KNOW_COUNTS` | `we know exactly` | show verified counters |
| `S04_KNOW_0` | `how many zeroes` | confirm 0→3 |
| `S04_KNOW_1` | `how many ones` | confirm 1→3 |
| `S04_KNOW_2` | `how many twos are present` | confirm 2→4 |
| `S04_REWRITE` | `Now we rewrite the same array` | code phase shift count→rewrite |
| `S04_INDEX_ZERO` | `Start from index zero` | reveal `i = 0` |
| `S04_FIRST` | `First` | focus zero-write loop |
| `S04_WRITE_ZERO` | `write zero` | focus `nums[i] = 0` |
| `S04_COUNT0_TIMES` | `count zero times` | focus `range(count0)` |
| `S04_THEN` | `Then` | focus one-write loop |
| `S04_WRITE_ONE` | `write one` | focus `nums[i] = 1` |
| `S04_COUNT1_TIMES` | `count one times` | focus `range(count1)` |
| `S04_FINALLY` | `And finally` | focus two-write loop |
| `S04_WRITE_TWO` | `write two` | focus `nums[i] = 2` |
| `S04_COUNT2_TIMES` | `count two times` | focus `range(count2)` |
| `S04_SORTED_RESULT` | `That gives us the sorted array` | final code/result confirmation |
| `S04_EXAMPLE` | `For our example` | bring verified trace evidence forward |
| `S04_EX_C0` | `count zero is three` | confirm c0=3 |
| `S04_EX_C1` | `count one is three` | confirm c1=3 |
| `S04_EX_C2` | `count two is four` | confirm c2=4 |
| `S04_SO_WRITE` | `So we write` | map counts to write ranges |
| `S04_THREE_ZEROES` | `three zeroes` | confirm idx0..2 |
| `S04_THREE_ONES` | `three ones` | confirm idx3..5 |
| `S04_FOUR_TWOS` | `four twos` | confirm idx6..9 |
| `S04_SIMPLE` | `The code is simple` | full code settles |
| `S04_COUNT_PASS` | `one pass to count` | mark COUNT phase |
| `S04_REWRITE_PASS` | `one pass to rewrite` | mark REWRITE phase / Scene05 handoff |

Repeated terms such as `count zero`, `write zero`, `one`, `two`, and `pass` must be resolved with ordered word IDs.

---

# 7. ENTRY — TRACE → CODE HANDOFF

## Beat — `S04_START`

### Spoken
`Now let’s convert that counting idea into code...`

### Starting state
Scene 03 semantic summary:

```text
COUNT → REWRITE
0→3   1→3   2→4
final sorted array
```

### Visual action
Use T8 representation handoff:

- Scene03 `COUNT → REWRITE` summary shifts toward the right side.
- Code surface opens on the left.
- Right side retains:
  - compact final counters,
  - compact Array V2,
  - phase labels.

Do not morph numeric glyphs into code.

### Settled layout

```text
LEFT
code area

RIGHT
COUNT → REWRITE evidence
```

---

# 8. FUNCTION SIGNATURE

The narration does not explicitly say the function signature.

Therefore:
- the function signature may already be present as static context before `S04_THREE_COUNTERS`;
- it should not animate as if spoken;
- it must stay visually secondary.

Show:

```python
def sortColors(nums):
```

No additional explanation.

This is support context, not a narration-driven beat.

---

# 9. COUNTER DECLARATIONS

## Beat — `S04_THREE_COUNTERS`
### Spoken
`We need three counters...`

Reveal the three declaration lines together, dim at first:

```python
count0 = 0
count1 = 0
count2 = 0
```

Right side counter area appears:

```text
0 → ?
1 → ?
2 → ?
```

Do not initialize right-side values until `S04_ALL_ZERO`.

---

## `S04_COUNT0_NAME`
Spoken:
`count zero`

Focus code:

```python
count0 = 0
```

Focus right counter label:
```text
0
```

---

## `S04_COUNT1_NAME`
Focus:
```python
count1 = 0
```

---

## `S04_COUNT2_NAME`
Focus:
```python
count2 = 0
```

Only one declaration gets active emphasis at a time.

---

# 10. INITIALIZATION

## Beat — `S04_INIT`
### Spoken
`Initially...`

All three declaration lines become grouped as initialization.

---

## Beat — `S04_ALL_ZERO`
### Spoken
`all three are zero.`

Right side settles:

```text
0 → 0
1 → 0
2 → 0
```

Code values `= 0` receive a restrained simultaneous emphasis.

No numeric count-up animation is needed.

---

# 11. COUNT PASS CODE

## Beat — `S04_SCAN_ONCE`
### Spoken
`Then we scan the array once.`

Reveal:

```python
for x in nums:
```

Right side:
- switch phase label to `COUNT PASS`;
- show compact unsorted master input:

```text
[2,1,2,0,2,1,0,1,0,2]
```

Do not replay all ten count events.

A subtle scan tracer may make one conceptual pass under the array.

This is code explanation, not dry run.

---

# 12. ZERO BRANCH

## `S04_IF_ZERO`
Spoken:
`If the current value is zero...`

Focus:

```python
if x == 0:
```

Right side:
- one representative `0` in master array receives query focus;
- counter `0` row prepares.

No count mutation yet.

---

## `S04_INC_ZERO`
Spoken:
`increase count zero.`

Focus:

```python
count0 += 1
```

Right side:
- small semantic example:
  `0 → +1`
- do not replay all three real zero occurrences.

Purpose:
connect branch to counter behavior.

---

# 13. ONE BRANCH

## `S04_IF_ONE`
Focus:

```python
elif x == 1:
```

Representative `1` gets focus.

---

## `S04_INC_ONE`
Focus:

```python
count1 += 1
```

Right side:
```text
1 → +1
```

---

# 14. TWO / ELSE BRANCH

## `S04_ELSE`
Spoken:
`Otherwise...`

Focus:

```python
else:
```

---

## `S04_MUST_TWO`
Spoken:
`it must be two...`

This should visually remind the learner why `else` is safe:

```text
VALUE DOMAIN = {0,1,2}
```

Briefly show:

```text
not 0
not 1
⇒ 2
```

No generic logic card.

Use compact chalk relation.

---

## `S04_INC_TWO`
Focus:

```python
count2 += 1
```

Right side:
```text
2 → +1
```

Then branch block settles.

---

# 15. FIRST PASS COMPLETE

## Beat — `S04_FIRST_PASS_DONE`
### Spoken
`After this first pass...`

Count-loop block receives a subtle completed bracket.

Right side scan tracer disappears.

---

## Beat — `S04_KNOW_COUNTS`
### Spoken
`we know exactly...`

Bring verified counts forward:

```text
0 → 3
1 → 3
2 → 4
```

These are trace evidence from Scene03.

Do not derive new values.

---

## `S04_KNOW_0`
Focus:
```text
0 → 3
```

## `S04_KNOW_1`
Focus:
```text
1 → 3
```

## `S04_KNOW_2`
Focus:
```text
2 → 4
```

The code remains visible but slightly reduced in emphasis.

---

# 16. COUNT → REWRITE CODE PHASE CHANGE

## Beat — `S04_REWRITE`
### Spoken
`Now we rewrite the same array.`

Visual action:
- `COUNT PASS` label settles as complete.
- `REWRITE PASS` becomes active.
- Right-side Array V2 returns to primary focus.
- Same fixed 10 slots.
- No second array.

A small identity note may read:

```text
SAME ARRAY
```

---

# 17. WRITE INDEX INITIALIZATION

## Beat — `S04_INDEX_ZERO`
### Spoken
`Start from index zero.`

Reveal:

```python
i = 0
```

Right side:
- external write pointer / cursor appears at index 0.

Use a small PointerLaneV2-like external marker only if already appropriate for code scenes.

This is a write index cursor, not DNF `low`.

Do not label it low/mid/high.

---

# 18. ZERO WRITE LOOP

## Beat — `S04_FIRST`
Focus zero-write block.

Reveal:

```python
for _ in range(count0):
```

---

## Beat — `S04_WRITE_ZERO`
Focus:

```python
nums[i] = 0
```

Right side:
- indicate current write slot receives 0.

---

## Beat — `S04_COUNT0_TIMES`
Focus:

```python
for _ in range(count0):
```

and:

```python
i += 1
```

Right side evidence:

```text
count0 = 3
⇒ idx 0..2 receive 0
```

Do not animate all three writes unless exact audio window allows it cleanly.

If time is short:
- show the range bracket `0..2`;
- show resulting state after the loop.

Verified state:

```text
[0,0,0,0,2,1,0,1,0,2]
```

This state must be correct if shown.

---

# 19. ONE WRITE LOOP

## Beat — `S04_THEN`

Reveal / focus:

```python
for _ in range(count1):
```

---

## `S04_WRITE_ONE`

Focus:

```python
nums[i] = 1
```

---

## `S04_COUNT1_TIMES`

Right side:

```text
count1 = 3
⇒ idx 3..5 receive 1
```

Verified resulting state:

```text
[0,0,0,1,1,1,0,1,0,2]
```

Again:
if audio window is short, show range + settled result, not rushed three-write micro-animation.

---

# 20. TWO WRITE LOOP

## Beat — `S04_FINALLY`

Reveal / focus:

```python
for _ in range(count2):
```

---

## `S04_WRITE_TWO`

Focus:

```python
nums[i] = 2
```

---

## `S04_COUNT2_TIMES`

Right side:

```text
count2 = 4
⇒ idx 6..9 receive 2
```

Verified final:

```text
[0,0,0,1,1,1,2,2,2,2]
```

---

# 21. SORTED RESULT

## Beat — `S04_SORTED_RESULT`
### Spoken
`That gives us the sorted array.`

Full code remains visible.

Right side final array receives one settled good-state confirmation:

```text
[0,0,0,1,1,1,2,2,2,2]
SORTED ✓
```

No DNF regions.

No complexity yet.

---

# 22. VERIFIED EXAMPLE RECALL

The narration now repeats known verified values.

Use this as evidence, not a new trace.

## `S04_EXAMPLE`
Spoken:
`For our example...`

Focus right-side counters.

---

## `S04_EX_C0`
```text
0 → 3
```

## `S04_EX_C1`
```text
1 → 3
```

## `S04_EX_C2`
```text
2 → 4
```

Each one pulses / highlights once.

No changes.

---

# 23. COUNTS → WRITE RANGES

## Beat — `S04_SO_WRITE`
### Spoken
`So we write...`

Right-side array and count rows form three relations.

Use RoughCurve / RoughLine:

```text
0→3 → indices 0..2
1→3 → indices 3..5
2→4 → indices 6..9
```

Only one relation is primary at a time.

---

## `S04_THREE_ZEROES`
Highlight:

```text
0→3
→ [0..2]
```

Final array left three slots confirm.

---

## `S04_THREE_ONES`
Highlight:

```text
1→3
→ [3..5]
```

---

## `S04_FOUR_TWOS`
Highlight:

```text
2→4
→ [6..9]
```

After the last phrase, all three range groups settle.

---

# 24. FINAL CODE TAKEAWAY

## Beat — `S04_SIMPLE`
### Spoken
`The code is simple...`

Full code block becomes readable together.

Remove temporary branch highlights.

Right side reduces to:

```text
COUNT → REWRITE
```

with final array beneath.

---

## Beat — `S04_COUNT_PASS`
### Spoken
`one pass to count...`

Focus first half of code:

```python
for x in nums:
    ...
```

Right-side label:

```text
PASS 1 · COUNT
```

---

## Beat — `S04_REWRITE_PASS`
### Spoken
`and one pass to rewrite.`

Focus second half:

```python
i = 0
for _ in range(count0): ...
for _ in range(count1): ...
for _ in range(count2): ...
```

Right-side:

```text
PASS 2 · REWRITE
```

Final scene takeaway:

```text
COUNTING
PASS 1 → COUNT
PASS 2 → REWRITE
```

Do not yet say:
```text
O(n)
O(1)
```

Scene05 owns the limitation/complexity discussion.

---

# 25. SCENE 04 → SCENE 05 HANDOFF

Scene05 is:

```text
WHY COUNTING IS NOT THE FINAL APPROACH
```

End Scene04 with:

```text
APPROACH 1 · COUNTING

PASS 1
COUNT

PASS 2
REWRITE

final sorted array visible
```

This gives Scene05 the exact evidence needed to ask:

```text
"What is still missing?"
```

Transition:
```text
T0 focus/state change
```

No scene reset.

---

# 26. MOTION CONTRACT

Master law:

```text
CAUSE
→ STATE REACTION
→ COMPREHENSION HOLD
→ MOVEMENT / MUTATION
→ SETTLE
```

Code-scene rule:

```text
spoken code idea
→ code line focus
→ right-side semantic evidence
→ settle
```

One primary code block at a time.

Do not:
- scroll unnecessarily;
- flash multiple blocks;
- animate syntax colors;
- type decorative characters unrelated to narration.

---

# 27. CODE TYPOGRAPHY CONTRACT

Use existing mono family:

```text
SFMono / Consolas / Menlo
```

Use course syntax colors only.

Do not invent a new editor theme.

Recommended focus states:
- current line = full opacity / semantic highlight;
- previously explained = normal;
- future code = dim or unrevealed.

Function signature can remain static context.

---

# 28. MORPH CONTRACT

Allowed:

### Trace → code
```text
T8 REPRESENTATION_HANDOFF
```

### Code line focus
```text
T0 STATE_CHANGE
```

### Counter example / range relation
```text
T8 representation relation
```

Forbidden:
- array number morphs into source-code token;
- counter morphs into loop statement;
- text glyph path morphs;
- code panel morphs into dashboard.

---

# 29. SVG CONTRACT

Use semantic lines only:

- counter → write range;
- trace summary → code block handoff;
- optional brace around PASS 1 / PASS 2.

Preferred:
```text
RoughLine
RoughCurve
S1 DRAW_NEW
S3 REDRAW_CONFIRM
```

No decorative arrows around code.

---

# 30. ANTIGRAVITY — AUDIO SYNC → EXACT FRAME PLAN

Execute only after final:

```text
04-counting-code.mp3
04-counting-code.json
```

or the exact locked filenames.

## A. Audit first

Inspect actual repo components:

```text
existing production CodeBlock / CodeEditor component
ChalkText
Captions
ArrayTrackV2
ArrayValueV2
ArrayIndexRowV2
PointerLaneV2 (only if suitable for write cursor)
RoughLine
RoughCurve
audioSyncV2
motion helpers
```

Return:

```text
REUSE
EXTEND
CREATE
```

Do not implement a second editor if one exists.

---

## B. Validate sync

Verify:
- audio filename;
- FPS;
- durationFrames;
- word count;
- ordered timestamps;
- final valid frame;
- all semantic anchors inside duration.

Raw sync immutable.

---

## C. Stable word IDs

Derive:

```text
W0000...
```

Repeated words like:

```text
count
zero
one
two
write
pass
```

must resolve by ordered word identity.

No text-occurrence guessing.

---

## D. Create semantic anchor manifest

Create:

```text
sync/04-counting-code.anchors.json
```

Resolve every `S04_*` anchor from this document.

For each anchor store:

```json
{
  "word_index": 0,
  "edge": "start",
  "note": "semantic action"
}
```

---

## E. Code-range semantic map

Antigravity must create a stable code-line map independent of timing, e.g.:

```text
L01 def sortColors(nums):
L02 count0 = 0
L03 count1 = 0
L04 count2 = 0
L05 for x in nums:
L06 if x == 0:
L07 count0 += 1
L08 elif x == 1:
L09 count1 += 1
L10 else:
L11 count2 += 1
L12 i = 0
L13 for _ in range(count0):
L14 nums[i] = 0
L15 i += 1
L16 for _ in range(count1):
L17 nums[i] = 1
L18 i += 1
L19 for _ in range(count2):
L20 nums[i] = 2
L21 i += 1
```

Semantic anchors reference stable line IDs, not raw y-coordinates.

---

## F. Phrase-window derivation

For each narration beat:

```text
phraseStartFrame
phraseEndFrame
nextAnchorFrame
availablePause
```

Then generate:

```text
CODE_REVEAL
CODE_FOCUS
RIGHT_SIDE_REACTION
SETTLE
```

from actual audio windows.

No hardcoded "line appears over 20 frames" unless the 20 frames are derived from the final sync.

---

## G. Deterministic code typing

If using character typing:

```text
characters visible at frame f
=
deterministic function of
exact semantic window + code text length
```

No CSS typing.
No random jitter.
No real-time timer.

If there is insufficient audio window:
reveal by semantic token group or line.

Do not rush unreadable typing.

---

## H. Verified code data

Do not infer example counts from runtime animation.

Use shared verified truth:

```text
count0=3
count1=3
count2=4
```

Write ranges:

```text
0..2 → 0
3..5 → 1
6..9 → 2
```

Final:

```text
[0,0,0,1,1,1,2,2,2,2]
```

Any mismatch = fail.

---

## I. Scene duration + captions

Same exact sync drives:
- captions;
- anchors;
- scene duration.

No planned duration.

No silent clamping.

---

# 31. REQUIRED POST-SYNC REVIEW CHECKPOINTS

Resolve by anchors after sync:

1. `S04_THREE_COUNTERS`
   - declaration block visible.

2. `S04_ALL_ZERO`
   - all counters = 0.

3. `S04_SCAN_ONCE`
   - count loop active, unsorted master array shown.

4. `S04_INC_ZERO`
   - zero branch mapped to count0.

5. `S04_INC_ONE`
   - one branch mapped to count1.

6. `S04_INC_TWO`
   - else branch mapped to count2.

7. `S04_KNOW_2`
   - verified final counts 3,3,4.

8. `S04_REWRITE`
   - same array enters rewrite phase.

9. `S04_INDEX_ZERO`
   - i=0 and write cursor at index0.

10. `S04_COUNT0_TIMES`
    - zero range 0..2 correct.

11. `S04_COUNT1_TIMES`
    - one range 3..5 correct.

12. `S04_COUNT2_TIMES`
    - two range 6..9 correct.

13. `S04_SORTED_RESULT`
    - final array exact.

14. `S04_REWRITE_PASS`
    - final summary:
      `PASS 1 COUNT`
      `PASS 2 REWRITE`.

---

# 32. ACCEPTANCE CHECKLIST

- [ ] Starts from Scene03 semantic end state.
- [ ] No dry-run replay.
- [ ] Uses actual existing code component.
- [ ] Code logic matches verified Counting implementation.
- [ ] Three counters only.
- [ ] All counters initialize to zero.
- [ ] `if x == 0` → count0.
- [ ] `elif x == 1` → count1.
- [ ] `else` → count2.
- [ ] Domain reason for `else` is visible.
- [ ] Verified counts = 3,3,4.
- [ ] Same array is rewritten.
- [ ] `i = 0`.
- [ ] Zero write range = 0..2.
- [ ] One write range = 3..5.
- [ ] Two write range = 6..9.
- [ ] Final array exact.
- [ ] No complexity discussion yet.
- [ ] No DNF.
- [ ] No low/mid/high.
- [ ] No black editor panel.
- [ ] No generic cards.
- [ ] No guessed frame numbers.
- [ ] Final MP3 + sync drive timing.
- [ ] Stable word IDs.
- [ ] Stable code line IDs.
- [ ] Same sync drives captions.
- [ ] Scene05 inherits `PASS 1 COUNT → PASS 2 REWRITE`.

---

# FINAL VISUAL STORY — ONE LINE

**Scene 04 takes the already-understood `COUNT → REWRITE` trace from Scene 03 and hands it into the course's existing code representation: the left side reveals the exact verified Counting implementation only as each narration idea is spoken, while the right side keeps a compact Array V2 plus the verified counters `0→3, 1→3, 2→4` as evidence; the first half of the code is explained branch-by-branch as one scan that increments exactly one of three counters, the second half starts at `i=0` and maps each verified count to its exact in-place write range `0..2`, `3..5`, `6..9`, the final array settles as `[0,0,0,1,1,1,2,2,2,2]`, and the scene closes without discussing complexity on the truthful code-level summary `PASS 1 · COUNT → PASS 2 · REWRITE`, giving Scene 05 the exact reason to ask why an already-linear solution is still not the final one.**
