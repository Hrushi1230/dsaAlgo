# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 03 — Counting Trace
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC75 · Medium  
**Scene purpose:** Teach the full Counting approach trace on the locked 10-element master input, using the exact spoken narration as the semantic driver. The learner must clearly see every scanned value increment exactly one counter, then see the same array rewritten from the verified counts `0→3`, `1→3`, `2→4`.

---

# 0. CONTINUITY — SCENE 02 → SCENE 03

Scene 03 begins from the exact end state of Scene 02.

Required inherited state:

```text
QUESTION 11 · SORT COLORS
APPROACH 1 · COUNTING

MASTER INPUT
[2,1,2,0,2,1,0,1,0,2]

indices 0..9
```

The Array V2 geometry must be exactly the same as Scene 02.

Do NOT:
- rebuild the array from scratch;
- shift slot coordinates;
- change index positions;
- replay the master-example reveal;
- reintroduce the problem statement.

Scene 03 begins directly on the existing raw input.

---

# 1. SOURCE TRUTH — EXACT NARRATION

```text
Let’s start with the simpler approach...

Counting.

Our array is...

Two... one... two... zero... two... one... zero... one... zero... two.

Instead of moving values immediately...

we will first count...

how many zeroes...

how many ones...

and how many twos we have.

We start with all three counts at zero.

First value is two...

so count of two becomes one.

Next value is one...

count of one becomes one.

Next value is two...

count of two becomes two.

Now we see zero...

count of zero becomes one.

Next value is two...

count of two becomes three.

Next value is one...

count of one becomes two.

Next value is zero...

count of zero becomes two.

Next value is one...

count of one becomes three.

Next value is zero...

count of zero becomes three.

And the last value is two...

count of two becomes four.

So finally...

we have three zeroes...

three ones...

and four twos.

Now we use these counts...

to rewrite the same array.

First...

write three zeroes.

Then...

write three ones.

And finally...

write four twos.

Now the array becomes...

zero... zero... zero...

one... one... one...

two... two... two... two.

So the array is correctly sorted.

The idea is simple...

first count...

then rewrite.
```

---

# 2. VERIFIED COUNTING TRACE — AUTHORITATIVE

Locked master input:

```text
[2,1,2,0,2,1,0,1,0,2]
```

Verified scan:

```text
idx0 = 2 → c2 = 1
idx1 = 1 → c1 = 1
idx2 = 2 → c2 = 2
idx3 = 0 → c0 = 1
idx4 = 2 → c2 = 3
idx5 = 1 → c1 = 2
idx6 = 0 → c0 = 2
idx7 = 1 → c1 = 3
idx8 = 0 → c0 = 3
idx9 = 2 → c2 = 4
```

Final verified counts:

```text
count0 = 3
count1 = 3
count2 = 4
```

Verified rewrite:

```text
indices 0..2 → 0
indices 3..5 → 1
indices 6..9 → 2
```

Final verified array:

```text
[0,0,0,1,1,1,2,2,2,2]
```

No other values, counts, or write ranges are allowed.

---

# 3. FOUNDATION V2 COMPONENT LOCK

Use the existing native array system.

Required:

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
```

Permanent law:

```text
SLOTS STAY FIXED.
VALUES MOVE / UPDATE.
INDICES NEVER MOVE.
```

In the scan phase:
- values do not move;
- current slot receives focus only.

In the rewrite phase:
- slot shells stay fixed;
- `ArrayValueV2` occupants update in-place by semantic write;
- indices remain fixed.

## Counter visual grammar

Do NOT create generic SaaS cards.

Use three board-direct chalk counters:

```text
0 → 0
1 → 0
2 → 0
```

Preferred composition:

```text
COUNT
0   0
1   0
2   0
```

or three compact chalk tally rows aligned beside the array.

Each counter is:
- numeral category label;
- current count;
- one semantic highlight state.

No extra panel background.

---

# 4. SCENE LAYOUT CONTRACT

Preferred structure:

```text
top:
Q11 · SORT COLORS
APPROACH 1 · COUNTING

middle-left / center:
10-slot Array V2 master input

middle-right:
COUNT
0 → n
1 → n
2 → n

bottom / secondary:
scan explanation or rewrite progress
caption-safe zone remains clear
```

Do not place:
- three cards,
- a second array,
- counters,
- complexity,
- code,
- conclusion

all at once.

One phase owns the secondary space at a time.

---

# 5. WORD-BASED SEMANTIC ANCHORS

Exact word IDs and frames are resolved only after final MP3 + exact sync JSON exist.

| Anchor ID | Exact narration phrase | Semantic purpose |
|---|---|---|
| `S03_START` | `Let’s start with the simpler approach` | enter Counting scene |
| `S03_COUNTING` | `Counting` | approach identity focus |
| `S03_ARRAY` | `Our array is` | focus inherited master input |
| `S03_R0` | first spoken `Two` in repeated master array | scan/read idx0 |
| `S03_R1` | next spoken `one` | scan/read idx1 |
| `S03_R2` | next spoken `two` | scan/read idx2 |
| `S03_R3` | spoken `zero` | scan/read idx3 |
| `S03_R4` | next spoken `two` | scan/read idx4 |
| `S03_R5` | next spoken `one` | scan/read idx5 |
| `S03_R6` | next spoken `zero` | scan/read idx6 |
| `S03_R7` | next spoken `one` | scan/read idx7 |
| `S03_R8` | next spoken `zero` | scan/read idx8 |
| `S03_R9` | final spoken `two` in repeated master array | scan/read idx9 |
| `S03_NO_MOVE` | `Instead of moving values immediately` | explicitly freeze array motion |
| `S03_FIRST_COUNT` | `we will first count` | reveal counter system |
| `S03_HOW_MANY_0` | `how many zeroes` | focus category 0 counter |
| `S03_HOW_MANY_1` | `how many ones` | focus category 1 counter |
| `S03_HOW_MANY_2` | `how many twos` | focus category 2 counter |
| `S03_COUNTS_ZERO` | `all three counts at zero` | initialize 0/1/2 counters |
| `S03_SCAN0_VAL` | `First value is two` | current idx0 |
| `S03_SCAN0_INC` | `count of two becomes one` | c2 0→1 |
| `S03_SCAN1_VAL` | `Next value is one` | current idx1 |
| `S03_SCAN1_INC` | `count of one becomes one` | c1 0→1 |
| `S03_SCAN2_VAL` | `Next value is two` | current idx2 |
| `S03_SCAN2_INC` | `count of two becomes two` | c2 1→2 |
| `S03_SCAN3_VAL` | `Now we see zero` | current idx3 |
| `S03_SCAN3_INC` | `count of zero becomes one` | c0 0→1 |
| `S03_SCAN4_VAL` | `Next value is two` | current idx4 |
| `S03_SCAN4_INC` | `count of two becomes three` | c2 2→3 |
| `S03_SCAN5_VAL` | `Next value is one` | current idx5 |
| `S03_SCAN5_INC` | `count of one becomes two` | c1 1→2 |
| `S03_SCAN6_VAL` | `Next value is zero` | current idx6 |
| `S03_SCAN6_INC` | `count of zero becomes two` | c0 1→2 |
| `S03_SCAN7_VAL` | `Next value is one` | current idx7 |
| `S03_SCAN7_INC` | `count of one becomes three` | c1 2→3 |
| `S03_SCAN8_VAL` | `Next value is zero` | current idx8 |
| `S03_SCAN8_INC` | `count of zero becomes three` | c0 2→3 |
| `S03_SCAN9_VAL` | `the last value is two` | current idx9 |
| `S03_SCAN9_INC` | `count of two becomes four` | c2 3→4 |
| `S03_FINAL_COUNTS` | `So finally` | freeze scan; prepare summary |
| `S03_FINAL_0` | `three zeroes` | confirm c0=3 |
| `S03_FINAL_1` | `three ones` | confirm c1=3 |
| `S03_FINAL_2` | `four twos` | confirm c2=4 |
| `S03_REWRITE` | `Now we use these counts` | transition count → rewrite |
| `S03_SAME_ARRAY` | `rewrite the same array` | same Array V2 identity |
| `S03_WRITE_0_CUE` | `First` | start zero write band |
| `S03_WRITE_0` | `write three zeroes` | write idx0..2 = 0 |
| `S03_WRITE_1_CUE` | `Then` | start one write band |
| `S03_WRITE_1` | `write three ones` | write idx3..5 = 1 |
| `S03_WRITE_2_CUE` | `And finally` | start two write band |
| `S03_WRITE_2` | `write four twos` | write idx6..9 = 2 |
| `S03_RESULT` | `Now the array becomes` | reveal settled rewritten array |
| `S03_OUT0A` | first output `zero` | confirm idx0 |
| `S03_OUT0B` | second output `zero` | confirm idx1 |
| `S03_OUT0C` | third output `zero` | confirm idx2 |
| `S03_OUT1A` | first output `one` | confirm idx3 |
| `S03_OUT1B` | second output `one` | confirm idx4 |
| `S03_OUT1C` | third output `one` | confirm idx5 |
| `S03_OUT2A` | first output `two` | confirm idx6 |
| `S03_OUT2B` | second output `two` | confirm idx7 |
| `S03_OUT2C` | third output `two` | confirm idx8 |
| `S03_OUT2D` | fourth output `two` | confirm idx9 |
| `S03_SORTED` | `array is correctly sorted` | result confirmation |
| `S03_SIMPLE` | `The idea is simple` | compress lesson into 2-step summary |
| `S03_COUNT_THEN_REWRITE` | `first count... then rewrite` | final scene takeaway / handoff |

Repeated words (`two`, `one`, `zero`, `Next value`) must be resolved by exact ordered word identity, not text matching.

---

# 6. ENTRY BEATS

## Beat A — `S03_START`
### Spoken
`Let’s start with the simpler approach...`

### Visual action
- Scene 02 secondary annotations are gone.
- Exact same master input remains.
- `APPROACH 1` label enters at scene edge.
- No counters yet.

Motion:
```text
FOCUS
```

---

## Beat B — `S03_COUNTING`
### Spoken
`Counting.`

### Visual action
Write / focus:

```text
APPROACH 1 · COUNTING
```

Do not show complexity yet.

No algorithmic action.

---

## Beat C — `S03_ARRAY`
### Spoken
`Our array is...`

### Visual action
Focus inherited Array V2.

Indices become fully readable.

No value movement.

---

# 7. REPEATED MASTER ARRAY — READ-ONLY PASS

The narration repeats:

```text
2,1,2,0,2,1,0,1,0,2
```

This is not the actual counting phase yet.

Use it only as a brief orientation/read pass.

For `S03_R0 ... S03_R9`:

```text
current slot gains read focus
spoken value receives subtle chalk emphasis
focus advances to next slot
```

No counters visible yet.

No values move.

No category grouping.

At `S03_R9` settled:

```text
all values return to normal
array remains unchanged
```

This visually separates:
1. recalling the input;
2. counting the input.

---

# 8. "DON'T MOVE VALUES" CONCEPT

## Beat — `S03_NO_MOVE`
### Spoken
`Instead of moving values immediately...`

### Visual action
This phrase must teach the contrast.

- Array values receive a brief `LOCKED POSITION` / settled state.
- A potential move path starts faintly, then is cancelled / erased.
- No actual value moves.

Use small chalk text:

```text
DON'T MOVE YET
```

or equivalent if it fits existing teaching style.

### Motion class
```text
REJECT / ERASE planned movement
```

Not a warning card.

---

# 9. COUNTER SYSTEM REVEAL

## Beat — `S03_FIRST_COUNT`
### Spoken
`we will first count...`

### Visual action
Reveal the board-direct counter system beside the array:

```text
COUNT
0 → ?
1 → ?
2 → ?
```

Do not initialize to zero until the narration says all counts start at zero.

---

## Beats — `S03_HOW_MANY_0`, `S03_HOW_MANY_1`, `S03_HOW_MANY_2`

As each category is spoken:

```text
0 row focus
1 row focus
2 row focus
```

At the end all three rows are visible.

No count changes yet.

---

## Beat — `S03_COUNTS_ZERO`
### Spoken
`We start with all three counts at zero.`

### Visual action

```text
0 → 0
1 → 0
2 → 0
```

All three counters settle simultaneously as the initialized state.

Do not use CountUp animation beyond the semantic 0 itself.

---

# 10. COUNTING SCAN — EXACT 10 EVENTS

For every input index, use the same choreography:

```text
A. current array slot focuses
B. value is read
C. relation path / chalk beam points to matching counter row
D. counter increments by exactly 1
E. increment settles
F. current slot receives subtle "counted" history state
G. move focus to next index
```

Only one current value and one counter row are active at a time.

## Semantic styling

Suggested ArraySlotV2 states:

```text
unseen      → default
current     → query/current
counted     → history
```

Do not recolor values into final partitions.

---

## Event 1 — idx0 = 2
### `S03_SCAN0_VAL`
Focus:

```text
idx0
value 2
```

### `S03_SCAN0_INC`
Relation to `2` counter.

Update:

```text
2 → 0 → 1
```

Verified state:

```text
c0=0 c1=0 c2=1
```

---

## Event 2 — idx1 = 1

Update:

```text
1 → 0 → 1
```

State:

```text
c0=0 c1=1 c2=1
```

---

## Event 3 — idx2 = 2

Update:

```text
2 → 1 → 2
```

State:

```text
c0=0 c1=1 c2=2
```

---

## Event 4 — idx3 = 0

Update:

```text
0 → 0 → 1
```

State:

```text
c0=1 c1=1 c2=2
```

---

## Event 5 — idx4 = 2

Update:

```text
2 → 2 → 3
```

State:

```text
c0=1 c1=1 c2=3
```

---

## Event 6 — idx5 = 1

Update:

```text
1 → 1 → 2
```

State:

```text
c0=1 c1=2 c2=3
```

---

## Event 7 — idx6 = 0

Update:

```text
0 → 1 → 2
```

State:

```text
c0=2 c1=2 c2=3
```

---

## Event 8 — idx7 = 1

Update:

```text
1 → 2 → 3
```

State:

```text
c0=2 c1=3 c2=3
```

---

## Event 9 — idx8 = 0

Update:

```text
0 → 2 → 3
```

State:

```text
c0=3 c1=3 c2=3
```

---

## Event 10 — idx9 = 2

Update:

```text
2 → 3 → 4
```

Final state:

```text
c0=3
c1=3
c2=4
```

All ten input slots are now in the subtle `counted/history` state.

No value has moved.

---

# 11. FINAL COUNT SUMMARY

## Beat — `S03_FINAL_COUNTS`
### Spoken
`So finally...`

### Visual action
- Scan focus disappears.
- Array returns to low emphasis.
- Counter system moves to primary focus.

No geometry change.

---

## `S03_FINAL_0`
Spoken:
`three zeroes`

Focus:

```text
0 → 3
```

Confirm with one subtle good-state underline / tick.

---

## `S03_FINAL_1`
Spoken:
`three ones`

Focus:

```text
1 → 3
```

---

## `S03_FINAL_2`
Spoken:
`four twos`

Focus:

```text
2 → 4
```

Settled summary:

```text
0 → 3
1 → 3
2 → 4
```

This is the only count summary.

Do not convert this into a bar chart.

---

# 12. COUNT → REWRITE TRANSITION

## Beat — `S03_REWRITE`
### Spoken
`Now we use these counts...`

### Visual action
- Counter rows stay visible.
- Array returns to primary focus.
- Add a subtle write cursor / next-write marker at index 0.

Label:

```text
REWRITE
```

No second array.

---

## Beat — `S03_SAME_ARRAY`
### Spoken
`to rewrite the same array.`

### Visual action
Reinforce in-place semantics:

```text
same 10 slots
same indices
occupant values will update
```

A brief identity bracket can confirm:

```text
SAME ARRAY
```

Do not morph into a new rail.

---

# 13. REWRITE PHASE — VERIFIED RANGES

## Rule

Rewrite events are driven by final counts:

```text
count0=3
count1=3
count2=4
```

Do not derive ranges dynamically from any visual ordering.

Use verified write ranges:

```text
0s → idx0..2
1s → idx3..5
2s → idx6..9
```

---

## Beat — `S03_WRITE_0_CUE`
### Spoken
`First...`

Focus counter:

```text
0 → 3
```

Write cursor at idx0.

---

## Beat — `S03_WRITE_0`
### Spoken
`write three zeroes.`

### Visual action
Rewrite same array values:

```text
idx0 = 0
idx1 = 0
idx2 = 0
```

Use sequential occupant updates across the phrase window.

The original occupants at these slots are replaced semantically by writes.

Slots remain fixed.

After settle:

```text
[0,0,0,0,2,1,0,1,0,2]
```

Important:
This is a legitimate intermediate rewrite state.
Do not hide that unchanged idx3 is already 0.

No fake "three zeroes only" row is needed.

---

## Beat — `S03_WRITE_1_CUE`
### Spoken
`Then...`

Focus:

```text
1 → 3
```

Write cursor moves to idx3.

---

## Beat — `S03_WRITE_1`
### Spoken
`write three ones.`

Update:

```text
idx3 = 1
idx4 = 1
idx5 = 1
```

After settle:

```text
[0,0,0,1,1,1,0,1,0,2]
```

Again: this is an intermediate write state.

---

## Beat — `S03_WRITE_2_CUE`
### Spoken
`And finally...`

Focus:

```text
2 → 4
```

Write cursor moves to idx6.

---

## Beat — `S03_WRITE_2`
### Spoken
`write four twos.`

Update:

```text
idx6 = 2
idx7 = 2
idx8 = 2
idx9 = 2
```

Final:

```text
[0,0,0,1,1,1,2,2,2,2]
```

At this point all counters can settle to dim supporting state.

---

# 14. SPOKEN RESULT CONFIRMATION

## Beat — `S03_RESULT`
### Spoken
`Now the array becomes...`

### Visual action
- Write cursor disappears.
- Final Array V2 state becomes hero.
- Counters stay visible but subdued.

---

## Output anchors `S03_OUT0A ... S03_OUT2D`

As the narration speaks the final result:

```text
zero zero zero
one one one
two two two two
```

Do not rewrite the array a second time.

Instead:
- each already-settled value receives a brief confirmation focus in order;
- slot/value remains stationary.

This distinguishes:
```text
rewrite action
vs
result readback
```

No duplicate data mutation.

---

# 15. SORTED CONFIRMATION

## Beat — `S03_SORTED`
### Spoken
`So the array is correctly sorted.`

### Visual action
Use one clean board-direct confirmation:

```text
SORTED ✓
```

or a single rough bracket spanning the final array with:

```text
0s    1s    2s
```

Important:
this grouping is now valid because the rewrite is complete.

Do not introduce DNF `UNKNOWN`.

No complexity yet.

---

# 16. SCENE TAKEAWAY

## Beat — `S03_SIMPLE`
### Spoken
`The idea is simple...`

### Visual action
Final array lowers slightly in emphasis.

Counter system and array arrange into one concise flow:

```text
COUNT
↓
REWRITE
```

Use existing RoughCurve / RoughLine relation.

No card diagram.

---

## Beat — `S03_COUNT_THEN_REWRITE`
### Spoken
`first count... then rewrite.`

### Visual action
Two-step chalk flow settles:

```text
1. COUNT
2. REWRITE
```

Under it retain the evidence:

```text
0→3   1→3   2→4
```

Final array remains visible.

This exact state becomes the handoff to Scene 04.

---

# 17. SCENE 03 → SCENE 04 HANDOFF

Scene 04 is Counting Code.

Required end state for Scene 03:

```text
APPROACH 1 · COUNTING

MASTER RESULT
[0,0,0,1,1,1,2,2,2,2]

COUNTS
0→3
1→3
2→4

PROCESS
COUNT → REWRITE
```

For Scene 04:
- do not replay full trace;
- visually transfer `COUNT → REWRITE` into code structure;
- keep enough array context to link code to trace.

Transition class:

```text
T8 REPRESENTATION HANDOFF
trace representation → code representation
```

No true morph of numbers into code glyphs.

---

# 18. MOTION CONTRACT

Master law:

```text
CAUSE
→ STATE REACTION
→ COMPREHENSION HOLD
→ MOVEMENT / MUTATION
→ SETTLE
```

## Scan event motion

```text
spoken value
→ slot current focus
→ relation trace to counter
→ counter +1
→ settle
→ history state
```

Only one counter may increment per event.

## Rewrite event motion

```text
spoken write category
→ category counter focus
→ write cursor
→ occupants update in verified range
→ settle
```

No bouncing values.
No particle effects.
No decorative sweeps.

---

# 19. MORPH CONTRACT

Allowed:

### Counter numeric update
```text
T0 STATE_CHANGE
```

Use number replacement / count change, not glyph-liquid morph.

### Trace → summary
```text
T8 REPRESENTATION_HANDOFF
```

### Count summary → rewrite control
```text
T8 REPRESENTATION_HANDOFF
```

### Array occupant rewrite
```text
T0 STATE_CHANGE
```

Slot identity remains fixed.

Forbidden:
- array values flying into counters;
- counter rows morphing into array slots;
- entire unsorted array magically sorting;
- true morph between unrelated text/value representations.

---

# 20. SVG / RELATION CONTRACT

SVG is semantic only.

Use for:
- current value → matching counter relation;
- optional scan history line;
- `COUNT → REWRITE` final flow;
- final sorted bracket.

Preferred classes:

```text
S1 DRAW_NEW
S3 REDRAW_CONFIRM
S4 TRACE_PATH
```

For each scan relation:
- line / curve starts from active value;
- ends at corresponding counter row;
- reveal is synchronized to the value→count phrase relation;
- then recedes before next scan event.

No web of 10 persistent lines.

---

# 21. TYPOGRAPHY CONTRACT

- Patrick Hand for teaching labels:
  `COUNTING`, `COUNT`, `REWRITE`, `SORTED`.
- Mono for:
  indices,
  numeric counts,
  `0→3`, `1→3`, `2→4`.

No new font family.
No giant title occupying teaching area.

---

# 22. ANTIGRAVITY — AUDIO SYNC → EXACT FRAME PLAN

Execute only after user provides final:

```text
03-trace-counting.mp3
03-trace-counting.json
```

or the exact final filenames chosen for Scene 03.

## A. Audit before mapping

Inspect:

```text
Q11 Scene02 final end state
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
CountUp if considered
RoughLine
RoughCurve
audioSyncV2
Captions
motion.ts
anim.ts
```

Important:
If `CountUp` cannot be driven deterministically by exact semantic anchor windows, do not use it. A direct discrete counter state change is preferable.

Return:

```text
REUSE
EXTEND
CREATE
```

No duplicate array primitive.

---

## B. Validate sync

Verify:
- exact audio file;
- FPS;
- durationFrames;
- ordered words;
- monotonic timestamps;
- unique word IDs;
- valid final frame;
- no anchor resolves outside scene duration.

Raw sync stays immutable.

---

## C. Stable ordered word IDs

Derive:

```text
W0000
W0001
W0002
...
```

Do not search repeated words by text:
- `two`
- `one`
- `zero`
- `Next`
- `count`

All `S03_*` anchors must resolve to exact ordered word IDs.

---

## D. Create semantic anchor manifest

Create:

```text
sync/03-trace-counting.anchors.json
```

For every anchor in this document record:

```json
{
  "word_index": 0,
  "edge": "start",
  "note": "semantic purpose"
}
```

Especially resolve all 10 scan-value and all 10 increment anchors independently.

If sync tokenization causes a phrase to split unexpectedly, resolve by ordered word IDs, not string heuristics.

---

## E. Phrase-window derivation

For each scan event, derive:

```text
VALUE_PHRASE_START
VALUE_PHRASE_END
INCREMENT_PHRASE_START
INCREMENT_PHRASE_END
NEXT_EVENT_START
AVAILABLE_GAP
```

Then map:

```text
VALUE phrase
→ slot query focus

transition / gap
→ relation trace

INCREMENT phrase
→ numeric counter update

remaining gap
→ settle/history
```

If the audio gives almost no pause:
- shorten relation animation;
- do not overlap the wrong counter update;
- do not invent extra frames.

---

## F. Exact 10-event trace validator

Antigravity should add a Scene03 semantic trace assertion or local data structure:

```text
[
  {i:0, value:2, c0:0, c1:0, c2:1},
  {i:1, value:1, c0:0, c1:1, c2:1},
  {i:2, value:2, c0:0, c1:1, c2:2},
  {i:3, value:0, c0:1, c1:1, c2:2},
  {i:4, value:2, c0:1, c1:1, c2:3},
  {i:5, value:1, c0:1, c1:2, c2:3},
  {i:6, value:0, c0:2, c1:2, c2:3},
  {i:7, value:1, c0:2, c1:3, c2:3},
  {i:8, value:0, c0:3, c1:3, c2:3},
  {i:9, value:2, c0:3, c1:3, c2:4}
]
```

The render must derive visual states from this verified trace.

Do not recompute with guessed side logic inside JSX.

---

## G. Exact rewrite validator

Write ranges:

```text
0 → indices 0,1,2
1 → indices 3,4,5
2 → indices 6,7,8,9
```

Required intermediate states:

```text
after zero write:
[0,0,0,0,2,1,0,1,0,2]

after one write:
[0,0,0,1,1,1,0,1,0,2]

after two write:
[0,0,0,1,1,1,2,2,2,2]
```

These states must match exactly.

---

## H. Runtime rule

Scene code should conceptually consume:

```text
anchorFrame("S03_SCAN4_VAL")
anchorFrame("S03_SCAN4_INC")
anchorFrame("S03_WRITE_1")
```

not:

```text
frame > 500
```

and not:

```text
findWord("two", 5th occurrence)
```

Any concrete frame number must be generated from the validated semantic anchor.

---

## I. Scene duration + captions

Use the same exact sync source for:
- captions;
- semantic anchors;
- scene duration.

Final valid frame:

```text
0 <= frame < durationFrames
```

No silent clamping.

---

# 23. REQUIRED POST-SYNC REVIEW CHECKPOINTS

Resolve semantically after sync:

1. `S03_COUNTS_ZERO`
   - counters initialized exactly `0,0,0`.

2. after `S03_SCAN0_INC`
   - only c2 becomes 1.

3. after `S03_SCAN3_INC`
   - counts `1,1,2`.

4. after `S03_SCAN6_INC`
   - counts `2,2,3`.

5. after `S03_SCAN9_INC`
   - exact final `3,3,4`.

6. `S03_FINAL_2`
   - summary `0→3,1→3,2→4`.

7. after `S03_WRITE_0`
   - exact intermediate array:
   `[0,0,0,0,2,1,0,1,0,2]`.

8. after `S03_WRITE_1`
   - exact intermediate:
   `[0,0,0,1,1,1,0,1,0,2]`.

9. after `S03_WRITE_2`
   - exact final:
   `[0,0,0,1,1,1,2,2,2,2]`.

10. `S03_SORTED`
    - final sorted confirmation.

11. `S03_COUNT_THEN_REWRITE`
    - final two-step process visible.

12. Scene03 end frame
    - clean handoff toward code scene.

---

# 24. ACCEPTANCE CHECKLIST

- [ ] Starts from exact Scene02 master array geometry.
- [ ] Array is not rebuilt.
- [ ] Exactly 10 scan events.
- [ ] Scan order is index 0→9.
- [ ] Values never move during count pass.
- [ ] Counter initialization is exactly 0,0,0.
- [ ] Every scan increments exactly one correct counter.
- [ ] Final counts are exactly 3,3,4.
- [ ] No bar chart replaces counters.
- [ ] No generic cards/panels.
- [ ] Rewrite uses the same array.
- [ ] Slots fixed.
- [ ] Indices fixed.
- [ ] Rewrite intermediate states are correct.
- [ ] Final output is exactly `[0,0,0,1,1,1,2,2,2,2]`.
- [ ] Spoken final array is confirmation only, not a second rewrite.
- [ ] No complexity teaching yet.
- [ ] No DNF terminology.
- [ ] No low/mid/high.
- [ ] No UNKNOWN region.
- [ ] Final concept is `COUNT → REWRITE`.
- [ ] No guessed frame numbers.
- [ ] Final MP3 + sync are timing authority.
- [ ] Stable word IDs are used.
- [ ] Same sync drives captions.
- [ ] Scene04 receives trace→code handoff, not a scene reset.

---

# FINAL VISUAL STORY — ONE LINE

**Scene 03 inherits the exact unsorted 10-slot Array V2 from Scene 02, briefly rereads the master input without moving anything, explicitly freezes value movement on `Instead of moving values immediately`, reveals three board-direct counters for 0/1/2, initializes all counts to zero, then performs exactly ten audio-driven scan events where only the current slot and matching counter react and the verified count state evolves to `0→3, 1→3, 2→4`; after the scan settles, the same fixed-slot array becomes the rewrite target, the verified counts drive three sequential in-place write ranges `idx0..2=0`, `idx3..5=1`, `idx6..9=2`, the spoken final array is used only to confirm the already-written state, and the scene closes on the truthful two-step summary `COUNT → REWRITE`, ready for Scene 04 to hand the same trace into code without replaying the algorithm.**
