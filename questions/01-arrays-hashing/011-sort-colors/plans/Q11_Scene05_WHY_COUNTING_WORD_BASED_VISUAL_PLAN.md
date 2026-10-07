# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 05 — Why Counting Is Not the Final Approach
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC75 · Medium  
**Scene purpose:** Prove that Counting is already efficient in asymptotic terms, then isolate the *real* limitation: it requires a separate count pass and rewrite pass. The scene must visually transform the learner’s understanding from **“Counting is good”** to **“Can we classify while scanning?”** without revealing the Dutch National Flag pointers or invariant yet.

---

# 0. CONTINUITY — SCENE 04 → SCENE 05

Scene 05 begins from the exact semantic end state of Scene 04.

Required inherited state:

```text
APPROACH 1 · COUNTING

PASS 1
COUNT

PASS 2
REWRITE

COUNTS
0 → 3
1 → 3
2 → 4

FINAL ARRAY
[0,0,0,1,1,1,2,2,2,2]
```

The code representation from Scene 04 may still be visible at frame 0, but Scene 05 should immediately reduce code emphasis and shift attention to the *process structure*.

Do NOT:
- replay the full code;
- replay all ten count events;
- replay all write events;
- introduce low / mid / high;
- reveal the four-region invariant;
- call Counting “slow” or “bad”;
- change the verified complexity truth.

---

# 1. SOURCE TRUTH — EXACT NARRATION

```text
Counting is already a good solution...

It runs in linear time...

and it uses only constant extra space.

So what is still missing?

The follow-up asks for one pass.

But counting needs two separate passes.

In the first pass...

we only learn the frequencies.

How many zeroes...

how many ones...

and how many twos.

At that point...

the array is still not arranged.

Then we need another pass...

to rewrite the array...

using those counts.

So the problem is not the time complexity.

O of n is already good.

The limitation is...

we first collect information...

and only later place the values.

Now think about this...

Can we classify each value...

at the same moment we inspect it?

Can zero move directly to the left...

two move directly to the right...

and one stay in the middle?

If we can do that...

we do not need a separate counting phase...

and we do not need a separate rewrite phase.

That is exactly where the three-pointer idea begins.
```

---

# 2. VERIFIED SEMANTIC TRUTH

Counting:

```text
TIME        O(n)
EXTRA SPACE O(1)
PASSES      2
```

Pass 1:

```text
READ
[2,1,2,0,2,1,0,1,0,2]
→
COUNTS
0→3
1→3
2→4
```

Pass 2:

```text
COUNTS
0→3
1→3
2→4
→
REWRITE SAME ARRAY
[0,0,0,1,1,1,2,2,2,2]
```

The real limitation is:

```text
classification and placement happen in different passes
```

The bridge question is:

```text
Can classification and placement happen together?
```

Do not answer this fully yet.

---

# 3. SCENE VISUAL ARCHITECTURE

The scene should not look like a generic complexity comparison dashboard.

Use one continuous chalkboard composition:

```text
TOP
Q11 · SORT COLORS
APPROACH 1 · COUNTING

CENTER
the same 10-slot Array V2

BELOW / SIDE
PASS 1 → COUNT
PASS 2 → REWRITE

SECONDARY
O(n)
O(1) EXTRA SPACE

ENDING
ONE PASS ?
0 → LEFT
1 → MIDDLE
2 → RIGHT
```

The transition from Counting to the next idea must happen **inside the same visual field**.

No card grid.
No black panels.
No neon.
No replacement UI.

---

# 4. COMPONENT REUSE

Preferred existing primitives:

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
RoughLine
RoughCurve
ChalkText
Captions
```

Potentially reuse existing complexity badge/notation components only if they already match Foundation V2.

Before implementation Antigravity must inspect the real repo.

Do not invent a new “complexity card” if existing course primitives already handle this.

---

# 5. WORD-BASED SEMANTIC ANCHORS

Exact word IDs / exact frames are resolved only after final MP3 + exact sync JSON exist.

| Anchor ID | Exact narration phrase | Semantic purpose |
|---|---|---|
| `S05_GOOD` | `Counting is already a good solution` | establish positive baseline |
| `S05_LINEAR` | `It runs in linear time` | reveal / focus O(n) |
| `S05_CONST_SPACE` | `uses only constant extra space` | reveal / focus O(1) |
| `S05_WHATS_MISSING` | `So what is still missing` | pause / question state |
| `S05_FOLLOWUP_ONE_PASS` | `The follow-up asks for one pass` | introduce one-pass target |
| `S05_TWO_PASSES` | `counting needs two separate passes` | visually expose Count + Rewrite split |
| `S05_FIRST_PASS` | `In the first pass` | focus PASS 1 |
| `S05_LEARN_FREQ` | `we only learn the frequencies` | focus counters, array unchanged |
| `S05_HOW_MANY_0` | `How many zeroes` | focus 0→3 |
| `S05_HOW_MANY_1` | `how many ones` | focus 1→3 |
| `S05_HOW_MANY_2` | `how many twos` | focus 2→4 |
| `S05_NOT_ARRANGED` | `the array is still not arranged` | show original unsorted array remains |
| `S05_ANOTHER_PASS` | `Then we need another pass` | focus PASS 2 |
| `S05_REWRITE` | `to rewrite the array` | show rewrite sweep |
| `S05_USING_COUNTS` | `using those counts` | show counters driving write ranges |
| `S05_NOT_TIME` | `the problem is not the time complexity` | reject wrong interpretation |
| `S05_ON_GOOD` | `O of n is already good` | re-confirm O(n) |
| `S05_LIMITATION` | `The limitation is` | shift to process separation |
| `S05_COLLECT_INFO` | `we first collect information` | isolate COUNT phase |
| `S05_LATER_PLACE` | `only later place the values` | isolate REWRITE phase |
| `S05_THINK` | `Now think about this` | clear board to reasoning mode |
| `S05_CLASSIFY` | `Can we classify each value` | activate current-value concept |
| `S05_SAME_MOMENT` | `at the same moment we inspect it` | merge scan + placement conceptually |
| `S05_ZERO_LEFT` | `Can zero move directly to the left` | destination concept for 0 |
| `S05_TWO_RIGHT` | `two move directly to the right` | destination concept for 2 |
| `S05_ONE_MIDDLE` | `and one stay in the middle` | destination concept for 1 |
| `S05_IF_CAN` | `If we can do that` | consolidate one-pass idea |
| `S05_NO_COUNT_PHASE` | `we do not need a separate counting phase` | erase COUNT pass |
| `S05_NO_REWRITE_PHASE` | `we do not need a separate rewrite phase` | erase REWRITE pass |
| `S05_THREE_POINTER_BEGIN` | `That is exactly where the three-pointer idea begins` | handoff to Scene 06 |

Repeated words such as `pass`, `count`, `array`, `one`, `zero`, `two` must be resolved by ordered word IDs from final sync.

---

# 6. ENTRY — COUNTING IS GOOD

## Beat — `S05_GOOD`
### Spoken
`Counting is already a good solution...`

### Starting state
Scene04 end:

```text
PASS 1 · COUNT
PASS 2 · REWRITE
final array
```

### Visual action
- Code recedes.
- Keep process flow and final array.
- Add one restrained good-state check:

```text
COUNTING ✓
```

Do not make it look like a rejected method.

### Motion
```text
CONFIRM
```

This is important:
Counting is valid and efficient.

---

# 7. COMPLEXITY — POSITIVE BASELINE

## Beat — `S05_LINEAR`
### Spoken
`It runs in linear time...`

### Visual action
Reveal / focus:

```text
TIME
O(n)
```

Use mono for `O(n)`.

No graph needed.

No comparison with DNF yet.

---

## Beat — `S05_CONST_SPACE`
### Spoken
`and it uses only constant extra space.`

Reveal:

```text
EXTRA SPACE
O(1)
```

Use the same visual grammar as `O(n)`.

Settled:

```text
COUNTING
O(n) TIME
O(1) EXTRA SPACE
```

Do not show `2 PASS` yet until narration says it.

---

# 8. QUESTION — WHAT IS MISSING?

## Beat — `S05_WHATS_MISSING`
### Spoken
`So what is still missing?`

### Visual action
- `O(n)` and `O(1)` remain visible.
- Add one chalk question mark in the process flow between:
  `COUNT` and `REWRITE`.
- Final array dims slightly.

No answer yet.

Comprehension hold should use exact narration pause if available.

---

# 9. FOLLOW-UP TARGET — ONE PASS

## Beat — `S05_FOLLOWUP_ONE_PASS`
### Spoken
`The follow-up asks for one pass.`

### Visual action
Introduce at center:

```text
TARGET
ONE PASS
```

Do not show three pointers.

The existing two-pass process remains visible behind / below.

---

# 10. EXPOSE THE TWO-PASS LIMITATION

## Beat — `S05_TWO_PASSES`
### Spoken
`But counting needs two separate passes.`

### Visual action
Now make the split explicit.

Use the same array, with two separate sweep traces:

```text
PASS 1
SCAN → COUNT

PASS 2
REWRITE
```

Visual:
- first sweep under array = count pass;
- second sweep under array = rewrite pass.

They should be sequential, not overlapping.

Use one Array V2 object.

Do not duplicate the array into two separate full rows unless the actual composition requires a ghost reference. Prefer one array + two timeline lanes.

### SVG class
```text
S4 TRACE_PATH
```

---

# 11. PASS 1 — ONLY FREQUENCIES

## Beat — `S05_FIRST_PASS`
### Spoken
`In the first pass...`

Focus:

```text
PASS 1
COUNT
```

Second-pass lane dims.

---

## Beat — `S05_LEARN_FREQ`
### Spoken
`we only learn the frequencies.`

### Visual action
Show:

```text
0 → 3
1 → 3
2 → 4
```

Original array remains:

```text
[2,1,2,0,2,1,0,1,0,2]
```

Critically:
the array must still look unsorted.

This is the proof that count pass does not arrange values.

---

## `S05_HOW_MANY_0`
Focus:
```text
0 → 3
```

## `S05_HOW_MANY_1`
Focus:
```text
1 → 3
```

## `S05_HOW_MANY_2`
Focus:
```text
2 → 4
```

No counter mutation.
These are already-known results.

---

# 12. ARRAY STILL UNSORTED

## Beat — `S05_NOT_ARRANGED`
### Spoken
`At that point... the array is still not arranged.`

### Visual action
This must be visually undeniable.

Keep counters visible.

Bring raw array to primary focus:

```text
[2,1,2,0,2,1,0,1,0,2]
```

Add small chalk note:

```text
COUNTS KNOWN
ARRAY STILL UNSORTED
```

Do not show target array at same time if it crowds the scene.

No dramatic red warning.

---

# 13. PASS 2 — REWRITE

## Beat — `S05_ANOTHER_PASS`
### Spoken
`Then we need another pass...`

Focus second lane:

```text
PASS 2
```

Pass 1 dims.

---

## Beat — `S05_REWRITE`
### Spoken
`to rewrite the array...`

### Visual action
A single write sweep crosses the same 10 slots.

Use three sequential semantic bands derived from verified counts:

```text
0 → idx0..2
1 → idx3..5
2 → idx6..9
```

Settle to:

```text
[0,0,0,1,1,1,2,2,2,2]
```

Do not replay each individual write from Scene03.

---

## Beat — `S05_USING_COUNTS`
### Spoken
`using those counts.`

### Visual action
Draw restrained relations:

```text
0→3 → first 3 slots
1→3 → next 3 slots
2→4 → last 4 slots
```

One relation at a time, then settle.

---

# 14. REJECT THE WRONG CONCLUSION

## Beat — `S05_NOT_TIME`
### Spoken
`So the problem is not the time complexity.`

### Visual action
Do NOT strike through O(n).

Instead:
- keep `O(n)` in good state;
- strike / erase a temporary phrase like:

```text
"TOO SLOW?"
```

or simply place:

```text
TIME IS NOT THE ISSUE
```

without creating a generic card.

The meaning must be:
Counting's asymptotic time is already good.

---

## Beat — `S05_ON_GOOD`
### Spoken
`O of n is already good.`

### Visual action
Re-confirm:

```text
O(n) ✓
```

One subtle redraw / underline.

No graph.

---

# 15. STATE THE REAL LIMITATION

## Beat — `S05_LIMITATION`
### Spoken
`The limitation is...`

### Visual action
Center the two-pass timeline:

```text
PASS 1          PASS 2
COUNT     →     REWRITE
```

Everything else dims.

---

## Beat — `S05_COLLECT_INFO`
### Spoken
`we first collect information...`

Focus only:

```text
PASS 1 · COUNT
0→3  1→3  2→4
```

Raw array stays unsorted.

---

## Beat — `S05_LATER_PLACE`
### Spoken
`and only later place the values.`

Focus:

```text
PASS 2 · REWRITE
```

Final array appears.

The delay between knowing and placing is the semantic point.

Use a rough arrow:

```text
KNOW
→ later →
PLACE
```

Do not make this decorative.

---

# 16. REASONING MODE — CLEAR THE OLD PROCESS

## Beat — `S05_THINK`
### Spoken
`Now think about this...`

### Visual action
- Collapse complexity labels.
- Collapse detailed counter rows.
- Keep only raw master array centered.
- Remove two-pass sweep lanes gradually.

New small question appears:

```text
CAN WE DO BOTH TOGETHER?
```

No solution yet.

---

# 17. CLASSIFY WHILE INSPECTING

## Beat — `S05_CLASSIFY`
### Spoken
`Can we classify each value...`

### Visual action
Choose one representative current slot from the raw array.

Prefer a middle-ish slot that does not imply a specific algorithm pointer.

Use simple temporary label:

```text
CURRENT VALUE
```

Do NOT call it `mid`.

---

## Beat — `S05_SAME_MOMENT`
### Spoken
`at the same moment we inspect it?`

### Visual action
Instead of:
```text
READ → STORE COUNT → LATER REWRITE
```

compress conceptually to:

```text
READ
↓
PLACE NOW ?
```

Use a single short RoughCurve.

No algorithm yet.

---

# 18. DESTINATION CONCEPT — LEFT / MIDDLE / RIGHT

This is a conceptual bridge only.

It must NOT reveal DNF pointer mechanics.

Use one target-order rail:

```text
LEFT          MIDDLE          RIGHT
0s            1s              2s
```

No UNKNOWN region.
No `low`, `mid`, `high`.
No partition boundaries.

---

## Beat — `S05_ZERO_LEFT`
### Spoken
`Can zero move directly to the left...`

### Visual action
Take one representative `0` value as a **ghost clone / teaching token**.

Show intended destination:

```text
0 → LEFT
```

Do not mutate the real master array.

Use T5 clone/project if needed.

The source array remains unchanged.

---

## Beat — `S05_TWO_RIGHT`
### Spoken
`two move directly to the right...`

Show:

```text
2 → RIGHT
```

Again, conceptual teaching token only.

No real swap.

---

## Beat — `S05_ONE_MIDDLE`
### Spoken
`and one stay in the middle?`

Show:

```text
1 → MIDDLE
```

Now the concept rail is:

```text
0 → LEFT
1 → MIDDLE
2 → RIGHT
```

This is allowed because the required output ordering is already known from Scene02.

It does **not** yet teach how to achieve it.

---

# 19. MERGE CLASSIFICATION + PLACEMENT

## Beat — `S05_IF_CAN`
### Spoken
`If we can do that...`

### Visual action
Bring together:

```text
INSPECT
+
PLACE
```

into one conceptual pass arrow under the array.

Label:

```text
ONE PASS ?
```

Still a question / hypothesis, not a proven solution.

---

# 20. REMOVE THE SEPARATE COUNT PHASE

## Beat — `S05_NO_COUNT_PHASE`
### Spoken
`we do not need a separate counting phase...`

### Visual action
Existing `COUNT` phase label is erased / crossed out from the two-pass process diagram.

Not the Counting method as a whole — only the separate phase in the new hypothetical approach.

Use precise wording visually:

```text
NO SEPARATE COUNT PHASE
```

Do not imply counts are mathematically wrong.

---

# 21. REMOVE THE SEPARATE REWRITE PHASE

## Beat — `S05_NO_REWRITE_PHASE`
### Spoken
`and we do not need a separate rewrite phase.`

### Visual action
Erase / cross separate `REWRITE` lane.

Now the conceptual flow becomes:

```text
SCAN
+
CLASSIFY
+
PLACE
=
ONE PASS ?
```

Keep question mark.

Do not reveal algorithm mechanics yet.

---

# 22. HANDOFF TO THREE-POINTER IDEA

## Beat — `S05_THREE_POINTER_BEGIN`
### Spoken
`That is exactly where the three-pointer idea begins.`

### Visual action
This is the only place Scene 05 may introduce the phrase:

```text
THREE POINTERS
```

But do NOT name them.

Preferred end state:

```text
APPROACH 2
THREE-POINTER IDEA

0 → LEFT
1 → MIDDLE
2 → RIGHT
```

and below the raw master array, three empty pointer landing guides / small chalk markers may appear **without labels**.

Do not position them semantically as low/mid/high yet if that would spoil Scene06.

Safer end state:

```text
THREE POINTERS
?
?
?
```

or simply three small chalk ticks under the array.

Scene06 owns:

```text
low
mid
high
four regions
```

### Transition class
```text
T8 REPRESENTATION HANDOFF
```

Counting limitation → pointer-idea setup.

---

# 23. SCENE 05 → SCENE 06 HANDOFF

Required Scene05 end state:

```text
Q11 · SORT COLORS

RAW MASTER INPUT
[2,1,2,0,2,1,0,1,0,2]

ONE PASS ?

0 → LEFT
1 → MIDDLE
2 → RIGHT

THREE-POINTER IDEA
```

Do not include:
- low;
- mid;
- high;
- confirmed zero region;
- confirmed one region;
- UNKNOWN;
- confirmed two region.

Scene06 begins by naming and defining those.

---

# 24. MOTION CONTRACT

Master law:

```text
CAUSE
→ STATE REACTION
→ COMPREHENSION HOLD
→ MOVEMENT / MUTATION
→ SETTLE
```

Scene05 uses:

```text
confirm
focus
compare
trace
erase
reject
concept projection
representation handoff
```

No algorithmic swap.

No pointer movement.

No physical partitioning of the actual array.

---

# 25. MORPH CONTRACT

Allowed:

### Code / trace → process abstraction
```text
T8 REPRESENTATION_HANDOFF
```

### Complexity emphasis
```text
T0 STATE_CHANGE
```

### Representative value → destination concept
```text
T5 CLONE / PROJECT
```

Use a ghost teaching token so the source array remains unchanged.

### Two-pass diagram → one-pass hypothesis
```text
T8 REPRESENTATION_HANDOFF
```

Forbidden:
- true morph from counter into pointer;
- array sorting itself;
- actual 0/1/2 values flying to final slots;
- low/mid/high appearing early.

---

# 26. SVG CONTRACT

Semantic SVG uses:

```text
PASS 1 sweep
PASS 2 sweep
count → write-range relation
KNOW → PLACE arrow
representative 0/1/2 destination paths
one-pass hypothesis sweep
```

Preferred classes:

```text
S1 DRAW_NEW
S3 REDRAW_CONFIRM
S4 TRACE_PATH
```

No decorative arrows.

No permanent spaghetti lines.

Each relation appears only while relevant.

---

# 27. TYPOGRAPHY CONTRACT

Patrick Hand:
- `COUNTING`
- `ONE PASS`
- `THE LIMITATION`
- `THREE-POINTER IDEA`
- `LEFT / MIDDLE / RIGHT`

Mono:
- `O(n)`
- `O(1)`
- counts `0→3`, `1→3`, `2→4`
- indices if shown.

Keep typography integrated into board, not boxed.

---

# 28. ANTIGRAVITY — AUDIO SYNC → EXACT FRAME PLAN

Execute only after final:

```text
05-why-counting.mp3
05-why-counting.json
```

or the exact final filenames chosen by the user.

## A. Audit first

Inspect:

```text
Scene04 final end state
existing complexity notation components
ArrayTrackV2
RoughLine
RoughCurve
BezierFlight if relation projection is needed
audioSyncV2
Captions
motion / morph helpers
```

Return:

```text
REUSE
EXTEND
CREATE
```

Do not create a new complexity dashboard.

---

## B. Validate raw sync

Verify:
- exact audio file;
- FPS;
- durationFrames;
- ordered words;
- monotonic timestamps;
- unique word IDs;
- final valid frame.

Raw sync immutable.

---

## C. Stable ordered word IDs

Derive:

```text
W0000...
```

Repeated words:
- `pass`
- `counting`
- `one`
- `zero`
- `two`
- `array`
- `rewrite`

must never resolve by text-only occurrence.

---

## D. Create semantic anchor manifest

Create:

```text
sync/05-why-counting.anchors.json
```

Resolve every `S05_*` anchor from this plan.

Store:
```json
{
  "word_index": 0,
  "edge": "start",
  "note": "semantic purpose"
}
```

If any anchor is ambiguous:
STOP and report.

Do not guess.

---

## E. Phrase-window derivation

For each semantic beat derive:

```text
phraseStartFrame
phraseEndFrame
nextAnchorFrame
availablePauseFrames
```

Then map motion windows from exact narration.

Examples:

### `S05_TWO_PASSES`
```text
CAUSE
phrase begins

REACTION
PASS 1 / PASS 2 lanes gain focus

MOVEMENT
two sequential sweep traces draw

SETTLE
both lanes readable before S05_FIRST_PASS
```

### `S05_NOT_TIME`
```text
CAUSE
"problem is not the time complexity"

REACTION
O(n) remains good-state

MOVEMENT
temporary wrong hypothesis "TOO SLOW?" is rejected

SETTLE
TIME IS NOT THE ISSUE
```

### `S05_ZERO_LEFT`
```text
CAUSE
"zero move directly to the left"

REACTION
representative 0 clone appears

MOVEMENT
clone projects to LEFT destination

SETTLE
source array unchanged
```

---

## F. No guessed durations

If a conceptual animation cannot fit:
- simplify the motion;
- shorten path;
- reduce secondary reaction;
- do not overlap the next semantic beat;
- do not stretch audio.

---

## G. Scene runtime rule

Scene implementation should conceptually call:

```text
anchorFrame("S05_LINEAR")
anchorFrame("S05_TWO_PASSES")
anchorFrame("S05_ZERO_LEFT")
anchorFrame("S05_THREE_POINTER_BEGIN")
```

not hardcoded frame constants.

---

## H. Captions + duration

Same exact sync drives:
- captions;
- semantic anchors;
- durationFrames.

No independent caption timing.

---

# 29. REQUIRED POST-SYNC REVIEW CHECKPOINTS

Resolve exact frames semantically after sync:

1. `S05_CONST_SPACE`
   - Counting shown as `O(n)` + `O(1)` good solution.

2. `S05_FOLLOWUP_ONE_PASS`
   - one-pass target visible.

3. `S05_TWO_PASSES`
   - two distinct pass lanes clearly visible.

4. `S05_LEARN_FREQ`
   - counts known, raw array still unsorted.

5. `S05_NOT_ARRANGED`
   - visual proof that first pass does not arrange array.

6. `S05_REWRITE`
   - second pass visibly rewrites same array.

7. `S05_ON_GOOD`
   - O(n) still confirmed good.

8. `S05_LATER_PLACE`
   - `KNOW → later → PLACE` concept clear.

9. `S05_SAME_MOMENT`
   - inspect + place together hypothesis visible.

10. `S05_ONE_MIDDLE`
    - conceptual destinations:
      `0→LEFT`, `1→MIDDLE`, `2→RIGHT`.

11. `S05_NO_REWRITE_PHASE`
    - separate COUNT / REWRITE lanes removed from one-pass hypothesis.

12. `S05_THREE_POINTER_BEGIN`
    - three-pointer idea teased but low/mid/high not yet taught.

---

# 30. ACCEPTANCE CHECKLIST

- [ ] Starts from Scene04 Count→Rewrite evidence.
- [ ] Counting is treated as a good solution.
- [ ] O(n) is correct.
- [ ] O(1) extra space is correct.
- [ ] Limitation is two passes, not bad complexity.
- [ ] Pass 1 learns frequencies only.
- [ ] Raw array stays unsorted after pass 1.
- [ ] Pass 2 rewrites same array.
- [ ] No full trace replay.
- [ ] No code replay.
- [ ] `O(n)` is never crossed out or called slow.
- [ ] One-pass follow-up becomes the new target.
- [ ] Conceptual `0→LEFT`, `1→MIDDLE`, `2→RIGHT` is shown only as a hypothesis.
- [ ] Actual array does not partition yet.
- [ ] No low/mid/high names.
- [ ] No four-region invariant.
- [ ] No UNKNOWN region.
- [ ] Three-pointer idea appears only at final handoff.
- [ ] No generic cards/dashboard.
- [ ] No guessed frame numbers.
- [ ] Final MP3 + exact sync are timing authority.
- [ ] Stable word IDs used.
- [ ] Same sync drives captions.
- [ ] Scene06 receives a clean three-pointer setup.

---

# FINAL VISUAL STORY — ONE LINE

**Scene 05 begins by explicitly validating Counting as a good `O(n)` time and `O(1)` extra-space solution, then uses the same Array V2 and the already-proven `COUNT → REWRITE` process to reveal the actual limitation: the first pass only learns `0→3, 1→3, 2→4` while the raw array remains unsorted, and only a second pass places those values; the scene then rejects the wrong conclusion that time complexity is the problem, reframes the limitation as `KNOW NOW → PLACE LATER`, clears the old process, asks whether inspection and placement can happen together, projects representative teaching tokens toward the already-known destinations `0→LEFT`, `1→MIDDLE`, `2→RIGHT` without mutating the real array, removes the need for separate COUNT and REWRITE phases in the hypothetical one-pass flow, and ends only by introducing the phrase `THREE-POINTER IDEA`, deliberately withholding low/mid/high and the four-region invariant for Scene 06.**
