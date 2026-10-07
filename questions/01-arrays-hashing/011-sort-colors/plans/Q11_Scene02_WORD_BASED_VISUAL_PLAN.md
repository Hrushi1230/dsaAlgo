# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 02 — Question + Understand
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC75 · Medium  
**Scene purpose:** Explain exactly what the problem asks, introduce the locked 10-element master testcase, show the required target arrangement, establish the two hard constraints, expose the one-pass follow-up, and end on the clue that only three values can appear — without teaching Counting or Dutch National Flag yet.

---

# 0. CONTINUITY — SCENE 01 → SCENE 02

Scene 02 does **not** start from a blank board and does **not** replay the roadmap.

Scene 01 ends with the same current-question identity handed out of the roadmap:

```text
QUESTION 11
SORT COLORS
LC 75 · MEDIUM
```

on the existing green chalkboard, with center stage intentionally empty.

Scene 02 begins from that exact settled identity.

## Hard continuity rule

No:

```text
fade to black
new title card
new logo intro
new roadmap
second "Sort Colors" hero intro
```

The first new teaching object in Scene 02 is the array itself.

---

# 1. SOURCE TRUTH — EXACT NARRATION

```text
Now let’s understand the question...

We are given an array...

and every value is only one of these three numbers...

zero...
one...
or two.

Our job is to arrange the same array...

so that all zeroes come first...

then all ones...

and finally all twos.

For this lesson...
we will use one master example.

Two... one... two... zero... two... one... zero... one... zero... two.

We want this array to become...

zero... zero... zero...
one... one... one...
two... two... two... two.

There are two important conditions.

First...

we have to modify the same array.

Second...

we should not use a built-in sorting function.

And then comes the follow-up...

Can we solve it in one pass...

using constant extra space?

That is the real challenge of this problem.

One more important observation...

the array can contain only three possible values.

That small detail...

is the main clue.

Now we can start with the simpler approach first...
```

---

# 2. LOCKED PROBLEM TRUTH

Master input:

```text
[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]
```

Required output:

```text
[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]
```

Value domain:

```text
0
1
2
```

Constraints taught in this scene:

```text
modify the same array
do not use built-in sort
follow-up: one pass
follow-up: O(1) extra space
```

Do NOT introduce:
- counters,
- low / mid / high,
- DNF regions,
- swap rules,
- complexity comparison,
- any implementation code.

Those belong to later scenes.

---

# 3. FOUNDATION V2 COMPONENT LOCK

Scene 02 must use the native Array V2 system.

## Required primitives

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
```

Use the 7–10 item adaptive category unless the actual container requires a constrained derivative.

For 10 elements, the verified default family is:

```text
slotWidth  ≈ 110
slotHeight ≈ 100
gap        ≈ 16
valueFont  ≈ 40
indexFont  ≈ 20
```

These are **adaptive defaults**, not hard-coded universal dimensions.

## Permanent array law

```text
SLOTS STAY FIXED.
VALUES MOVE.
INDICES NEVER MOVE.
```

In this scene there is no algorithmic swap, but the law still applies.

When showing input and target states:
- do not move slot shells;
- do not bind value identity to slot geometry;
- use independent `ArrayValueV2` occupants.

## Index row

Show indices only after the master testcase is fully introduced, or keep them faint if inherited from the array shell.

Preferred teaching format:

```text
idx 0  idx 1 ... idx 9
```

or the existing V2 compact equivalent if width requires it.

Do not let indices visually compete with the values while they are being spoken.

---

# 4. MASTER VISUAL STORY — ONE CONTINUOUS OBJECT

```text
Q11 identity
    ↓
10 empty fixed array slots
    ↓
domain clue 0 / 1 / 2
    ↓
same slot system receives the master input, one spoken value at a time
    ↓
target rail appears below as the required arrangement
    ↓
same-array constraint binds input and target semantically
    ↓
built-in-sort prohibition marks out a forbidden shortcut
    ↓
one-pass + constant-space follow-up becomes the challenge
    ↓
0 / 1 / 2 domain clue returns as the final visual observation
    ↓
target rail and constraints recede
    ↓
same raw master input remains centered
    ↓
Scene 03 Counting Trace begins from that exact input
```

This is not a slideshow.

The same array object remains the semantic center of the scene.

---

# 5. WORD-BASED SEMANTIC ANCHORS

These anchor IDs are created now.

Exact `word_index`, word IDs, timestamps, and frame numbers are resolved only from the final MP3 + sync JSON.

| Anchor ID | Exact narration phrase | Visual meaning |
|---|---|---|
| `S02_UNDERSTAND` | `Now let’s understand the question` | settle Q11 identity; open teaching stage |
| `S02_ARRAY` | `We are given an array` | reveal 10 fixed empty Array V2 slots |
| `S02_ONLY_THREE` | `every value is only one of these three numbers` | introduce domain constraint |
| `S02_ZERO` | `zero` | reveal domain token 0 |
| `S02_ONE` | `one` | reveal domain token 1 |
| `S02_TWO` | `two` | reveal domain token 2 |
| `S02_ARRANGE_SAME` | `arrange the same array` | establish target is same data structure, not a new list |
| `S02_ZEROES_FIRST` | `all zeroes come first` | target rail left group |
| `S02_ONES_NEXT` | `then all ones` | target rail center group |
| `S02_TWOS_LAST` | `finally all twos` | target rail right group |
| `S02_MASTER_EXAMPLE` | `we will use one master example` | clear generic domain demo; prepare actual testcase |
| `S02_M0` | first spoken `Two` of master example | write value 2 at index 0 |
| `S02_M1` | first spoken `one` after master-example cue | write 1 at index 1 |
| `S02_M2` | next spoken `two` | write 2 at index 2 |
| `S02_M3` | spoken `zero` | write 0 at index 3 |
| `S02_M4` | next spoken `two` | write 2 at index 4 |
| `S02_M5` | next spoken `one` | write 1 at index 5 |
| `S02_M6` | next spoken `zero` | write 0 at index 6 |
| `S02_M7` | next spoken `one` | write 1 at index 7 |
| `S02_M8` | next spoken `zero` | write 0 at index 8 |
| `S02_M9` | final spoken `two` of master example | write 2 at index 9 |
| `S02_TARGET` | `We want this array to become` | activate target row / output requirement |
| `S02_T0A` | first output `zero` | target index 0 = 0 |
| `S02_T0B` | second output `zero` | target index 1 = 0 |
| `S02_T0C` | third output `zero` | target index 2 = 0 |
| `S02_T1A` | first output `one` | target index 3 = 1 |
| `S02_T1B` | second output `one` | target index 4 = 1 |
| `S02_T1C` | third output `one` | target index 5 = 1 |
| `S02_T2A` | first output `two` | target index 6 = 2 |
| `S02_T2B` | second output `two` | target index 7 = 2 |
| `S02_T2C` | third output `two` | target index 8 = 2 |
| `S02_T2D` | fourth output `two` | target index 9 = 2 |
| `S02_TWO_CONDITIONS` | `There are two important conditions` | collapse target emphasis; open constraint layer |
| `S02_FIRST` | `First` | first constraint marker |
| `S02_SAME_ARRAY` | `modify the same array` | visually bind input identity + in-place requirement |
| `S02_SECOND` | `Second` | second constraint marker |
| `S02_NO_BUILTIN` | `should not use a built-in sorting function` | show forbidden shortcut |
| `S02_FOLLOWUP` | `then comes the follow-up` | promote challenge layer |
| `S02_ONE_PASS` | `solve it in one pass` | one-pass requirement |
| `S02_CONST_SPACE` | `using constant extra space` | O(1) extra-space requirement |
| `S02_REAL_CHALLENGE` | `real challenge of this problem` | combine follow-up targets without revealing solution |
| `S02_OBSERVATION` | `One more important observation` | recede constraints; return to values |
| `S02_THREE_VALUES` | `only three possible values` | 0/1/2 domain becomes central clue |
| `S02_MAIN_CLUE` | `That small detail is the main clue` | visually connect domain constraint to future reasoning, no solution |
| `S02_SIMPLE_APPROACH` | `start with the simpler approach first` | hand same raw input into Scene 03 |

Repeated words such as `zero`, `one`, and `two` must be resolved by ordered word IDs from final sync — never by text occurrence guessing.

---

# 6. BEAT-BY-BEAT VISUAL CHOREOGRAPHY

## Beat A — `S02_UNDERSTAND`
### Spoken
`Now let’s understand the question...`

### Starting state
Inherited from Scene 01:

```text
QUESTION 11
SORT COLORS
LC75 · MEDIUM
```

compact at top.

Center stage is empty.

### Visual action
- Q11 identity settles upward into the compact lesson header.
- A faint horizontal chalk guide appears where the array will live.
- Do not reveal values.
- Do not show target output.

### Motion
```text
CAUSE → "understand the question"
STATE REACTION → lesson stage opens
HOLD → empty teaching area
```

No decorative entrance.

---

## Beat B — `S02_ARRAY`
### Spoken
`We are given an array...`

### Visual action
Reveal **10 fixed empty Array V2 slots** centered in hero stage.

Use:
```text
ArrayTrackV2
elements = 10 empty occupants / deferred values
showIndices = false initially or very faint
```

Slots draw left→right as one data structure, not 10 independent cards.

Add small structural label:

```text
INPUT ARRAY
```

### SVG
A restrained RoughLine bracket / baseline may define the array as one structure.

### Forbidden
- no values yet;
- no colors 0/1/2 yet;
- no counters;
- no pointer labels.

---

## Beat C — `S02_ONLY_THREE`
### Spoken
`and every value is only one of these three numbers...`

### Visual action
- Empty array dims slightly.
- Above it, create a simple **domain rail**, not cards:

```text
ALLOWED VALUES
0     1     2
```

Use chalk numerals with small rough underlines / rings.

Do not use red/white/blue product-color semantics; our course semantic colors remain primary.

The domain rail represents **possible values**, not current array contents.

---

## Beat D — `S02_ZERO`
### Spoken
`zero...`

Reveal / focus domain token:

```text
0
```

One clean write-on.

No other movement.

---

## Beat E — `S02_ONE`
### Spoken
`one...`

Reveal / focus:

```text
1
```

Keep 0 present, dimmer.

---

## Beat F — `S02_TWO`
### Spoken
`or two.`

Reveal / focus:

```text
2
```

Now all three are visible:

```text
0   1   2
```

Hold briefly.

This establishes the domain only.

---

## Beat G — `S02_ARRANGE_SAME`
### Spoken
`Our job is to arrange the same array...`

### Visual action
The phrase **same array** must have semantic meaning.

Do NOT spawn a replacement array.

Instead:
- keep the original 10 slot shell;
- draw a thin chalk identity bracket from the current array shell downward to a **ghost target rail** beneath it;
- target rail uses the **same 10 slot geometry** but low opacity.

Label:

```text
SAME ARRAY
```

or a subtle in-place loop arrow around the shared shell, whichever already fits the course grammar.

Important:
the target rail represents the **required final state of the same array**, not a second data structure.

### Morph class
```text
T8 REPRESENTATION_HANDOFF / state-preview relation
```

Not a true morph.

---

## Beat H — `S02_ZEROES_FIRST`
### Spoken
`so that all zeroes come first...`

### Visual action
In the ghost target rail, reveal a left-side semantic band / placeholders for:

```text
0  0  0
```

Do not yet claim count 3 from the problem statement alone **unless tied to the master example**.

Therefore before the master example exists, the safest visualization is:

```text
[ 0-zone | 1-zone | 2-zone ]
```

not exact quantities.

Use three **relative-order zones** only:

```text
ZEROES FIRST
ONES NEXT
TWOS LAST
```

The exact target values are revealed later after master example is spoken.

This avoids inventing counts before the testcase exists.

---

## Beat I — `S02_ONES_NEXT`
### Spoken
`then all ones...`

Focus center target zone:

```text
ONES
```

No exact count yet.

---

## Beat J — `S02_TWOS_LAST`
### Spoken
`and finally all twos.`

Focus right target zone:

```text
TWOS
```

Now target ordering rule is visually clear:

```text
0s | 1s | 2s
```

This is **problem output order**, not DNF partition teaching.

Do not introduce `UNKNOWN`.

---

## Beat K — `S02_MASTER_EXAMPLE`
### Spoken
`For this lesson... we will use one master example.`

### Visual action
- Domain rail and generic target-order zones recede.
- Original 10-slot input shell becomes hero.
- Index row appears quietly beneath:
  `0 ... 9`
- All slots are empty at the beginning of this phrase.

Label:

```text
MASTER INPUT
```

No values pre-rendered.

---

# 7. MASTER INPUT — EXACT SPOKEN-VALUE REVEAL

The master array must be written exactly as narrated.

Never pre-populate all ten values.

After each spoken value:
1. corresponding `ArrayValueV2` writes / settles into fixed slot;
2. slot confirms subtly;
3. next slot waits;
4. no category analysis yet.

## `S02_M0`
Spoken first `Two`

```text
idx 0 = 2
```

## `S02_M1`
Spoken first master `one`

```text
idx 1 = 1
```

## `S02_M2`
Spoken next `two`

```text
idx 2 = 2
```

## `S02_M3`
Spoken `zero`

```text
idx 3 = 0
```

## `S02_M4`
Spoken next `two`

```text
idx 4 = 2
```

## `S02_M5`
Spoken next `one`

```text
idx 5 = 1
```

## `S02_M6`
Spoken next `zero`

```text
idx 6 = 0
```

## `S02_M7`
Spoken next `one`

```text
idx 7 = 1
```

## `S02_M8`
Spoken next `zero`

```text
idx 8 = 0
```

## `S02_M9`
Spoken final master `two`

```text
idx 9 = 2
```

Settled result must exactly be:

```text
[2,1,2,0,2,1,0,1,0,2]
```

### Hard invariant
Slots and indices never move.

### No solution hint
Do not group equal values.
Do not color partition ranges.
Do not show counters.
Do not show pointers.

---

# 8. TARGET OUTPUT REVEAL

## Beat — `S02_TARGET`
### Spoken
`We want this array to become...`

### Visual action
Keep raw input row visible at upper-middle stage.

Below it, activate the **target state rail** using identical fixed slot geometry.

Labels:

```text
INPUT
TARGET
```

No connecting swap arrows.

No animation showing how input becomes target.

This is only the problem requirement.

---

## Output words `S02_T0A ... S02_T2D`

Reveal target values exactly as they are spoken.

Target final state:

```text
[0,0,0,1,1,1,2,2,2,2]
```

Word-synchronized reveal:

```text
zero → slot 0
zero → slot 1
zero → slot 2

one → slot 3
one → slot 4
one → slot 5

two → slot 6
two → slot 7
two → slot 8
two → slot 9
```

### Visual distinction
Input row remains raw / unsorted.

Target row is a **requirement**, not an algorithm result.

Use:
- input label in normal chalk;
- target label in pivot/highlight;
- same slot geometry.

Do not animate the values physically sorting from input to target.

That would imply an algorithm before we teach one.

---

# 9. TWO CONDITIONS

## Beat — `S02_TWO_CONDITIONS`
### Spoken
`There are two important conditions.`

### Visual action
- Input and target rails reduce slightly in scale / emphasis but remain visible.
- Two chalk rule markers appear at the sides of the same visual field, not generic cards.

Use hand-drawn numeral marks:

```text
1
2
```

with open space for the rule text.

No dashboard.

---

## Beat — `S02_FIRST`
### Spoken
`First...`

Focus marker `1`.

---

## Beat — `S02_SAME_ARRAY`
### Spoken
`we have to modify the same array.`

### Visual action
Make this concept visual, not textual only.

- `INPUT` and `TARGET` rail outlines align / overlay by geometry;
- draw a rough loop / identity path:
  `INPUT ARRAY → SAME STORAGE → TARGET STATE`
- target rail can briefly ghost-align over input rail and return.

Do NOT duplicate memory boxes.

Use phrase:

```text
IN PLACE · SAME ARRAY
```

small and chalk-like.

### Morph class
```text
T8 REPRESENTATION_HANDOFF
```

The data structure identity is the same; only state changes.

---

## Beat — `S02_SECOND`
### Spoken
`Second...`

Focus marker `2`.

---

## Beat — `S02_NO_BUILTIN`
### Spoken
`we should not use a built-in sorting function.`

### Visual action
Do not show a fake IDE.

Use one small chalk shortcut glyph near the array:

```text
sort(nums)
```

Then draw a restrained rough strike through it.

Label:

```text
NO BUILT-IN SORT
```

### SVG
Use `RoughLine` for the strike.

### Forbidden
- no red warning modal;
- no generic forbidden card;
- no code editor yet.

---

# 10. FOLLOW-UP CHALLENGE

## Beat — `S02_FOLLOWUP`
### Spoken
`And then comes the follow-up...`

### Visual action
The two base-condition annotations recede.

At center below input array, draw a clean challenge line:

```text
FOLLOW-UP
```

No answer.

---

## Beat — `S02_ONE_PASS`
### Spoken
`Can we solve it in one pass...`

### Visual action
Use the **same 10-slot master input**.

A thin single sweep tracer moves conceptually from index 0 toward index 9.

This is not the algorithm pointer.

It only means:

```text
ONE PASS?
```

Use a temporary path / sweep under the array.

### SVG class
```text
S4 TRACE_PATH
```

No `low`, `mid`, `high`.

No algorithm motion.

---

## Beat — `S02_CONST_SPACE`
### Spoken
`using constant extra space?`

### Visual action
Beside the same array, show a tiny fixed-size memory annotation:

```text
EXTRA SPACE
O(1)
```

Use 2–3 tiny chalk marks / fixed footprint, not a memory grid.

The meaning:
extra memory does not grow with `n`.

Do not introduce actual counters or pointers yet.

---

## Beat — `S02_REAL_CHALLENGE`
### Spoken
`That is the real challenge of this problem.`

### Visual action
Combine the two follow-up conditions into one compact statement:

```text
ONE PASS
+
O(1) EXTRA SPACE
```

The raw master array remains above.

Target output can remain faint.

No solution appears.

---

# 11. FINAL OBSERVATION — THE CLUE

## Beat — `S02_OBSERVATION`
### Spoken
`One more important observation...`

### Visual action
- Follow-up text recedes.
- Target rail recedes almost completely.
- Master input remains centered.
- Each array value stays in its actual slot.

Do not move equal values together.

---

## Beat — `S02_THREE_VALUES`
### Spoken
`the array can contain only three possible values.`

### Visual action
Now reveal the domain rail again:

```text
0   1   2
```

But this time derive it from the actual master input:
- subtle relation marks from representative 0, 1, 2 values to the domain rail;
- duplicates stay in their original slots;
- domain rail says **VALUE DOMAIN**, not partition.

Do not use a Set / HashSet visual.

The learner should understand:

```text
10 positions
but only 3 possible value categories
```

This is the clue.

---

## Beat — `S02_MAIN_CLUE`
### Spoken
`That small detail... is the main clue.`

### Visual action
Use typography, not a solution spoiler:

```text
ONLY 3 POSSIBLE VALUES
```

with a restrained underline / chalk bracket.

The array stays unsorted.

Do not show:
```text
0s | 1s | UNKNOWN | 2s
```

Do not show:
```text
COUNT 0 / COUNT 1 / COUNT 2
```

Those belong to Scenes 03 and 06.

### Motion
One comprehension hold after this beat.

---

# 12. SCENE 02 → SCENE 03 HANDOFF

## Beat — `S02_SIMPLE_APPROACH`
### Spoken
`Now we can start with the simpler approach first...`

### Required end state
Remove / recede:
- target rail,
- no-built-in-sort strike,
- follow-up challenge,
- value-domain rail.

Keep:

```text
QUESTION 11 · SORT COLORS
MASTER INPUT
[2,1,2,0,2,1,0,1,0,2]
indices 0..9
```

Then introduce only the **approach identity**, not the counting logic:

```text
APPROACH 1
COUNTING
```

This can enter as a small scene-edge / chalk label.

No counters yet.

Scene 03 must begin on the exact same array geometry.

### Transition class
```text
T8 REPRESENTATION HANDOFF
```

Same Array V2 instance / same slot coordinates / same values.

No array reconstruction.

---

# 13. TYPOGRAPHY / LAYOUT CONTRACT

## Header zone
Keep Q11 identity compact and stable at the top.

Do not let the title compete with teaching content.

## Hero stage
Primary object:

```text
10-slot Array V2 track
```

Center it within the safe stage.

## Vertical rhythm
Preferred semantic layers:

```text
top       compact Q11 identity
middle    input Array V2
below     target / condition / follow-up layer as needed
bottom    caption-safe zone
```

Never stack:
- input row,
- target row,
- three condition cards,
- domain rail,
- follow-up card

all at once.

One concept owns the secondary layer at a time.

## Course identity
- green board remains dominant;
- direct chalk drawing on board;
- no black panels;
- no card-grid dashboard;
- no neon;
- no generic SaaS composition.

---

# 14. MOTION CONTRACT

Master law:

```text
CAUSE
→ STATE REACTION
→ COMPREHENSION HOLD
→ MOVEMENT / MUTATION
→ SETTLE
```

Scene 02 motion vocabulary:

```text
reveal
focus
write
confirm
relation draw
state preview
strike
trace
representation handoff
```

No algorithmic swap.

At most:

```text
1 primary motion
+
1 supporting reaction
```

per semantic phrase.

---

# 15. MORPH CONTRACT

Allowed:

### Problem identity → array teaching stage
```text
T8 representation handoff
```

### Generic target-order zones → exact target rail after testcase exists
```text
T5 clone/project or T8 representation handoff
```

### Input identity → same-array target-state explanation
```text
T8 representation handoff
```

### Rule emphasis
```text
T0 state change
```

Forbidden:
- text glyph morph `INPUT → TARGET`;
- slot shells morphing into values;
- input array physically sorting itself before an approach is taught;
- decorative object morphs with no semantic identity.

---

# 16. SVG CONTRACT

Use SVG only for teaching relations:

```text
array bracket / baseline
same-array identity path
built-in-sort strike
one-pass sweep tracer
domain relation marks
main-clue underline/bracket
```

No decorative arrows.

Suggested classes:

```text
S1 DRAW_NEW
S3 REDRAW_CONFIRM
S4 TRACE_PATH
```

Do not use S8 true morph unless topology / semantic identity really matches.

---

# 17. ANTIGRAVITY — FINAL AUDIO SYNC → FRAME PLAN CONVERSION

Execute only after the user provides:

```text
02-understand.mp3
02-understand.json
```

The MP3 and JSON must correspond to the final locked Scene 02 narration.

## A. Audit first

Before implementation Antigravity must inspect:

```text
Q11 Scene01 final implementation / end frame
Q10 Scene02 understand implementation
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
audioSyncV2
Captions
motion helpers
SvgMorph / RoughLine / RoughCurve / EvolvingPath equivalents
```

Do not copy Q10 Scene02 literally.
Reuse only proven primitives and continuity patterns.

Return:

```text
REUSE
EXTEND
CREATE
```

Expected:
- REUSE Array V2;
- REUSE exact-sync system;
- REUSE captions;
- REUSE board / typography / motion primitives;
- CREATE only Q11-specific composition logic.

---

## B. Validate raw sync

Use the exact-sync validator.

Required:

```text
audio filename correct
fps valid
durationFrames valid
word IDs/order valid
word intervals monotonic
all resolved frames < durationFrames
```

Raw sync stays immutable.

---

## C. Derive stable word identities

Ordered sync becomes:

```text
W0000
W0001
W0002
...
```

Never resolve repeated:

```text
zero
one
two
array
first
```

by string occurrence at runtime.

Use stable word indices / IDs.

---

## D. Build Scene 02 anchor manifest

Create:

```text
sync/02-understand.anchors.json
```

Each semantic anchor contains:

```json
{
  "word_index": 0,
  "edge": "start",
  "note": "..."
}
```

Resolve every `S02_*` anchor in this document against the final sync.

Master-example anchors `S02_M0 ... S02_M9` and output anchors `S02_T0A ... S02_T2D` must be individually resolved by word identity.

If any phrase cannot be uniquely resolved from final sync:
STOP and report it.

Do not guess.

---

## E. Resolve phrase windows

For every beat derive:

```text
anchor phrase start word
anchor phrase end word
start frame
end frame
next semantic phrase start
available pause/gap
```

This is what determines animation windows.

Do not assign durations like:

```text
20 frames
30 frames
```

because they "look nice".

The final audio controls available time.

---

## F. Convert each beat to exact frame choreography

For each semantic beat create:

```text
ANCHOR
CAUSE
STATE REACTION
COMPREHENSION HOLD
MOVEMENT / MUTATION
SETTLE
```

Example — master value reveal:

```text
ANCHOR = S02_M4

CAUSE
spoken master-example value "two"

STATE REACTION
slot index 4 receives read focus

HOLD
only if exact word/pause window allows

MOVEMENT
ArrayValueV2 "2" writes into fixed slot 4

SETTLE
value fully stable before S02_M5 begins
```

Example — `S02_NO_BUILTIN`:

```text
CAUSE
"should not use a built-in sorting function"

REACTION
sort(nums) appears

MOVEMENT
rough strike draws

SETTLE
NO BUILT-IN SORT remains readable
```

Example — `S02_ONE_PASS`:

```text
CAUSE
"one pass"

MOVEMENT
single conceptual sweep tracer moves under array

SETTLE
ONE PASS? remains

Do not create algorithm pointer.
```

---

## G. Scene duration

Use exact:

```text
durationFrames
```

from the final sync/audio pipeline.

Never pad duration manually to fit planned animation.

If a visual idea cannot fit the exact narration:
- simplify the motion;
- never change semantic truth;
- never stretch audio silently.

---

## H. Caption sync

`Captions` must use the same exact sync source.

Visual actions and captions therefore share one timing authority.

No separate approximate caption timings.

---

# 18. REQUIRED POST-SYNC REVIEW CHECKPOINTS

Exact frame numbers are unknown now.

After sync, resolve and render checkpoints by semantic anchors:

1. `S02_ARRAY`
   - 10 empty fixed slots visible.

2. `S02_TWO`
   - allowed domain `0 1 2` complete.

3. `S02_TWOS_LAST`
   - generic target order `0s | 1s | 2s`, no algorithm.

4. `S02_M9` settled
   - exact raw master input:
   `[2,1,2,0,2,1,0,1,0,2]`.

5. final output word settled
   - exact target:
   `[0,0,0,1,1,1,2,2,2,2]`.

6. `S02_SAME_ARRAY`
   - in-place / same-array semantics clear.

7. `S02_NO_BUILTIN`
   - built-in sort shortcut visibly rejected.

8. `S02_ONE_PASS`
   - single conceptual pass visible, no low/mid/high.

9. `S02_CONST_SPACE`
   - O(1) extra-space challenge visible.

10. `S02_MAIN_CLUE`
    - raw input still unsorted;
    - `0 1 2` only-value-domain clue clear;
    - no solution spoiler.

11. `S02_SIMPLE_APPROACH` settled
    - same raw Array V2 geometry remains;
    - `APPROACH 1 · COUNTING` enters;
    - no counters yet;
    - clean Scene03 handoff.

---

# 19. ACCEPTANCE CHECKLIST

- [ ] Scene starts from actual Scene01 end state.
- [ ] No second roadmap / title intro.
- [ ] Uses Array V2, not bespoke cards.
- [ ] Exactly 10 slots.
- [ ] Slots fixed.
- [ ] Indices fixed.
- [ ] Master values appear only when spoken.
- [ ] Master input exactly `[2,1,2,0,2,1,0,1,0,2]`.
- [ ] Output exactly `[0,0,0,1,1,1,2,2,2,2]`.
- [ ] Generic output order `0s→1s→2s` is shown before testcase counts, not invented counts.
- [ ] Input does not visibly sort itself in Scene02.
- [ ] `same array` is taught visually.
- [ ] built-in sort is rejected without opening a fake code editor.
- [ ] one-pass challenge does not introduce algorithm pointers.
- [ ] constant-extra-space challenge does not introduce counters/pointers.
- [ ] final clue is only `three possible values`.
- [ ] no Counting logic before Scene03.
- [ ] no DNF logic before Scene06.
- [ ] no low/mid/high.
- [ ] no UNKNOWN region.
- [ ] raw sync immutable.
- [ ] stable word IDs used.
- [ ] repeated zero/one/two anchors resolved by word identity.
- [ ] no guessed frame numbers.
- [ ] captions and semantic motion use same exact sync.
- [ ] Scene03 inherits same exact master array geometry.

---

# FINAL VISUAL STORY — ONE LINE

**Scene 02 begins from Scene 01's compact Q11 identity, reveals one native 10-slot Array V2 structure, establishes that every slot may contain only 0/1/2, explains the required order as zeroes first then ones then twos without teaching an algorithm, writes the locked master input `[2,1,2,0,2,1,0,1,0,2]` into fixed slots exactly as each value is spoken, reveals the exact target `[0,0,0,1,1,1,2,2,2,2]` as a requirement rather than an animated solution, visually proves the two base conditions `same array` and `no built-in sort`, turns the follow-up into the concise challenge `ONE PASS + O(1) EXTRA SPACE`, returns attention to the fact that ten positions contain only three possible value categories, marks that fact as the clue without revealing Counting or DNF, then removes every secondary annotation and hands the unchanged raw Array V2 directly into Scene 03 with only `APPROACH 1 · COUNTING` introduced.**
