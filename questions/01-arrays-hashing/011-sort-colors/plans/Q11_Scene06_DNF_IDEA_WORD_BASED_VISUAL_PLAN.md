# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 06 — Dutch National Flag Idea
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC75 · Medium  
**Scene purpose:** Introduce the Dutch National Flag idea itself — the three pointers, the four logical regions they maintain, and the exact meaning of each branch — without yet running the full 10-step trace. This scene is conceptual architecture only. Scene 07 owns the full dry run.

---

# 0. CONTINUITY — SCENE 05 → SCENE 06

Scene 06 starts from the exact semantic end state of Scene 05:

```text
RAW MASTER INPUT
[2,1,2,0,2,1,0,1,0,2]

ONE PASS ?

0 → LEFT
1 → MIDDLE
2 → RIGHT

THREE-POINTER IDEA
```

The array geometry must be the same Array V2 track used in Scenes 02–05.

Do NOT:
- rebuild the array;
- change slot/index geometry;
- replay Counting;
- start the full 10-step trace;
- show code yet.

This scene only answers:

```text
What are low, mid, high?
What do the four regions mean?
What happens for 0 / 1 / 2?
Why does mid stay after the 2-case?
```

---

# 1. SOURCE TRUTH — EXACT NARRATION

```text
Now let’s build the one-pass idea...

We will use three pointers...

low...

mid...

and high.

But these three pointers create four different regions.

The first region...

from the beginning...

up to low minus one...

contains only confirmed zeroes.

The second region...

from low...

up to mid minus one...

contains only confirmed ones.

The third region...

from mid...

up to high...

is still unknown.

We have not classified those values yet.

And the last region...

after high...

contains only confirmed twos.

So at every moment...

our array is divided like this...

zeroes...

ones...

unknown...

and twos.

Now the job is simple.

We only inspect the value at mid.

If nums at mid is zero...

zero belongs on the left.

So we swap it with the value at low...

then move low forward...

and move mid forward.

If nums at mid is one...

it already belongs in the middle.

So we do not swap anything...

we only move mid forward.

And if nums at mid is two...

two belongs on the right.

So we swap it with the value at high...

then move high one step left.

But here is the most important rule...

mid does not move.

Why?

Because the value coming from the high side...

was still inside the unknown region.

We do not know yet...

whether that new value is zero...

one...

or two.

So we must inspect it first.

This is the complete idea...

low protects the zero region...

mid scans the unknown region...

and high protects the two region.

As the algorithm runs...

the unknown region keeps getting smaller...

until nothing is left to classify.
```

---

# 2. VERIFIED SEMANTIC TRUTH — AUTHORITATIVE

The three pointers:

```text
low
mid
high
```

create four regions:

```text
[0 .. low-1]       → confirmed 0s
[low .. mid-1]     → confirmed 1s
[mid .. high]      → UNKNOWN
[high+1 .. n-1]    → confirmed 2s
```

Pointer meanings:

```text
low  = next place where a 0 belongs
mid  = current unknown value being inspected
high = next place where a 2 belongs
```

Branch rules:

```text
nums[mid] == 0
→ swap(low, mid)
→ low++
→ mid++

nums[mid] == 1
→ mid++

nums[mid] == 2
→ swap(mid, high)
→ high--
→ MID STAYS
```

Most important reason:

```text
value coming from high
was still inside UNKNOWN
so it has not been classified yet
```

No alternate interpretation is allowed.

---

# 3. VISUAL GOAL

By the end of Scene 06, the learner must be able to read one Array V2 frame and understand:

```text
what low protects
what mid is checking
what high protects
what UNKNOWN means
why there are four regions
why 2-case keeps mid fixed
```

The learner must NOT yet be asked to remember the entire 10-step trace.

---

# 4. FOUNDATION V2 COMPONENT LOCK

Use native primitives only.

Required / preferred:

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
PointerLaneV2
PartitionBandV2
RoughLine
RoughCurve
ParametricArrow
ChalkText
Captions
```

No bespoke pointer labels if PointerLaneV2 already supports the requirement.

No generic colored cards.

No black panel.

---

# 5. ARRAY GEOMETRY LOCK

Use the same locked 10-slot master input:

```text
[2,1,2,0,2,1,0,1,0,2]
```

At Scene 06 start, **do not mutate the actual array**.

Important:
The four-region explanation must first be conceptual.

The initial pointer placement shown in the concept setup may use:

```text
low = 0
mid = 0
high = 9
```

because that is the actual algorithm start for the locked testcase.

At that exact initial state:

```text
confirmed 0 region = empty
confirmed 1 region = empty
UNKNOWN = indices 0..9
confirmed 2 region = empty
```

This is the truth.

Do not fabricate non-empty confirmed regions at the start.

If a later explanatory mini-state needs non-empty sample regions, it must be clearly represented as a **teaching illustration**, not as the current master trace state.

Preferred: avoid separate invented sample arrays entirely.

---

# 6. POINTER VISUAL GRAMMAR

Pointers must live outside slots.

Preferred lane arrangement:

```text
top lane:
low

top/second lane:
mid

bottom lane:
high
```

or another existing PointerLaneV2 layout that avoids label collision.

Pointer semantics:

```text
low  = boundary / destination marker
mid  = current inspection marker
high = boundary / destination marker
```

Do not make pointers look like values.

Do not place labels inside array slots.

---

# 7. REGION VISUAL GRAMMAR

Use PartitionBandV2 / board-direct bands.

Four region labels:

```text
0s
1s
UNKNOWN
2s
```

Exact intervals:

```text
0s      [0 .. low-1]
1s      [low .. mid-1]
UNKNOWN [mid .. high]
2s      [high+1 .. n-1]
```

Important:
For empty regions, use a collapsed boundary / bracket / label cue rather than fake width.

At the algorithm start:

```text
0s region      empty
1s region      empty
UNKNOWN        full width 0..9
2s region      empty
```

That must be visually truthful.

---

# 8. WORD-BASED SEMANTIC ANCHORS

Exact word IDs / frames are resolved only after final MP3 + exact sync JSON exist.

| Anchor ID | Exact narration phrase | Semantic purpose |
|---|---|---|
| `S06_BUILD` | `Now let’s build the one-pass idea` | enter DNF concept mode |
| `S06_THREE_POINTERS` | `We will use three pointers` | reveal pointer concept |
| `S06_LOW` | `low` | reveal / focus low pointer |
| `S06_MID` | `mid` | reveal / focus mid pointer |
| `S06_HIGH` | `high` | reveal / focus high pointer |
| `S06_FOUR_REGIONS` | `these three pointers create four different regions` | reveal 4-region grammar |
| `S06_R0_INTRO` | `The first region` | focus zero region |
| `S06_R0_FROM_START` | `from the beginning` | start boundary = 0 |
| `S06_R0_TO_LOW` | `up to low minus one` | end boundary = low-1 |
| `S06_R0_CONFIRMED` | `contains only confirmed zeroes` | region semantic = 0s |
| `S06_R1_INTRO` | `The second region` | focus one region |
| `S06_R1_FROM_LOW` | `from low` | start boundary = low |
| `S06_R1_TO_MID` | `up to mid minus one` | end boundary = mid-1 |
| `S06_R1_CONFIRMED` | `contains only confirmed ones` | region semantic = 1s |
| `S06_RU_INTRO` | `The third region` | focus unknown region |
| `S06_RU_FROM_MID` | `from mid` | unknown start = mid |
| `S06_RU_TO_HIGH` | `up to high` | unknown end = high |
| `S06_RU_UNKNOWN` | `is still unknown` | mark UNKNOWN |
| `S06_UNCLASSIFIED` | `We have not classified those values yet` | explain unknown semantics |
| `S06_R2_INTRO` | `the last region` | focus twos region |
| `S06_R2_AFTER_HIGH` | `after high` | start = high+1 |
| `S06_R2_CONFIRMED` | `contains only confirmed twos` | region semantic = 2s |
| `S06_DIVIDED` | `our array is divided like this` | settle all four regions |
| `S06_ZEROES` | `zeroes` | focus 0s region |
| `S06_ONES` | `ones` | focus 1s region |
| `S06_UNKNOWN_WORD` | `unknown` | focus UNKNOWN region |
| `S06_TWOS` | `twos` | focus 2s region |
| `S06_JOB_SIMPLE` | `Now the job is simple` | prepare branch rules |
| `S06_INSPECT_MID` | `We only inspect the value at mid` | mid becomes active |
| `S06_CASE0` | `If nums at mid is zero` | case 0 |
| `S06_ZERO_LEFT` | `zero belongs on the left` | destination semantics |
| `S06_SWAP_LOW` | `swap it with the value at low` | 0-case movement |
| `S06_LOW_FWD` | `move low forward` | low++ |
| `S06_MID_FWD_0` | `move mid forward` | mid++ after 0 |
| `S06_CASE1` | `If nums at mid is one` | case 1 |
| `S06_ONE_MIDDLE` | `it already belongs in the middle` | 1-case semantics |
| `S06_NO_SWAP` | `we do not swap anything` | no movement |
| `S06_MID_FWD_1` | `we only move mid forward` | mid++ after 1 |
| `S06_CASE2` | `if nums at mid is two` | case 2 |
| `S06_TWO_RIGHT` | `two belongs on the right` | destination semantics |
| `S06_SWAP_HIGH` | `swap it with the value at high` | 2-case movement |
| `S06_HIGH_LEFT` | `move high one step left` | high-- |
| `S06_IMPORTANT_RULE` | `the most important rule` | prepare core misconception |
| `S06_MID_STAYS` | `mid does not move` | critical rule |
| `S06_WHY` | `Why` | reasoning beat |
| `S06_FROM_HIGH` | `the value coming from the high side` | incoming value identity |
| `S06_WAS_UNKNOWN` | `was still inside the unknown region` | classify status |
| `S06_DONT_KNOW` | `We do not know yet` | uncertainty |
| `S06_NEW_ZERO` | `whether that new value is zero` | possible incoming 0 |
| `S06_NEW_ONE` | `one` | possible incoming 1 |
| `S06_NEW_TWO` | `or two` | possible incoming 2 |
| `S06_INSPECT_FIRST` | `we must inspect it first` | explain mid hold |
| `S06_COMPLETE_IDEA` | `This is the complete idea` | consolidate |
| `S06_LOW_PROTECTS` | `low protects the zero region` | low role recap |
| `S06_MID_SCANS` | `mid scans the unknown region` | mid role recap |
| `S06_HIGH_PROTECTS` | `high protects the two region` | high role recap |
| `S06_UNKNOWN_SHRINKS` | `the unknown region keeps getting smaller` | progress invariant |
| `S06_NOTHING_LEFT` | `until nothing is left to classify` | termination concept / Scene07 handoff |

Repeated words (`low`, `mid`, `high`, `one`, `two`, `unknown`) must resolve via stable ordered word IDs, not text occurrence guessing.

---

# 9. ENTRY — ONE-PASS IDEA

## Beat — `S06_BUILD`
### Spoken
`Now let’s build the one-pass idea...`

### Starting state
Scene05 end:

```text
RAW MASTER INPUT
0 → LEFT
1 → MIDDLE
2 → RIGHT
THREE-POINTER IDEA
```

### Visual action
- Destination concept rail recedes.
- Raw master array remains.
- Approach label updates:

```text
APPROACH 2
DUTCH NATIONAL FLAG
```

or, if the project prefers not to reveal formal pattern name before narration, use:

```text
APPROACH 2
THREE-POINTER IDEA
```

and introduce formal DNF naming in scene edge metadata only if already course-consistent.

Do not start trace.

---

# 10. REVEAL THE THREE POINTERS

## `S06_THREE_POINTERS`
Spoken:
`We will use three pointers...`

### Visual action
Three empty pointer markers appear outside the array.

Do not name them yet.

---

## `S06_LOW`
Reveal label:

```text
low
```

Set to index 0.

Use pivot/good semantic color consistent with existing pointer grammar.

---

## `S06_MID`
Reveal:

```text
mid
```

Also index 0.

Because low and mid overlap initially:
- pointer lanes must stagger vertically;
- both pointer tips may target the same slot without text collision.

---

## `S06_HIGH`
Reveal:

```text
high
```

Set to index 9.

At this moment:

```text
low=0
mid=0
high=9
```

No value movement.

---

# 11. THREE POINTERS → FOUR REGIONS

## `S06_FOUR_REGIONS`
Spoken:
`But these three pointers create four different regions.`

### Visual action
Reveal PartitionBandV2 grammar around the same array.

At initial state:
- 0 region collapsed before low;
- 1 region collapsed between low and mid;
- UNKNOWN spans idx0..9;
- 2 region collapsed after high.

Labels appear:

```text
0s
1s
UNKNOWN
2s
```

The visual must make it clear that empty regions still conceptually exist.

No fake filled cells.

---

# 12. REGION 1 — CONFIRMED ZEROES

## `S06_R0_INTRO`
Focus the zero-region bracket / band.

At initial state it is empty.

## `S06_R0_FROM_START`
Show left boundary at array start.

## `S06_R0_TO_LOW`
Draw relation:

```text
0 ... low-1
```

Because low=0:
the interval is empty.

Represent truthfully.

## `S06_R0_CONFIRMED`
Label:

```text
CONFIRMED 0s
```

Important:
explain semantics even though region width is currently zero.

Do not invent zero values inside it.

---

# 13. REGION 2 — CONFIRMED ONES

## `S06_R1_INTRO`
Focus second region.

## `S06_R1_FROM_LOW`
Start boundary at low.

## `S06_R1_TO_MID`
End boundary at mid-1.

At low=mid=0:
this region is also empty.

## `S06_R1_CONFIRMED`
Label:

```text
CONFIRMED 1s
```

Again, zero-width but semantically real.

---

# 14. REGION 3 — UNKNOWN

## `S06_RU_INTRO`
Focus third region.

## `S06_RU_FROM_MID`
Start at mid = 0.

## `S06_RU_TO_HIGH`
End at high = 9.

## `S06_RU_UNKNOWN`
Now UNKNOWN receives full focus.

The actual master array sits entirely inside:

```text
UNKNOWN
```

This is truthful at algorithm start.

## `S06_UNCLASSIFIED`
Add small chalk text:

```text
NOT CLASSIFIED YET
```

Do not tint values into final categories.

---

# 15. REGION 4 — CONFIRMED TWOS

## `S06_R2_INTRO`
Focus rightmost region.

## `S06_R2_AFTER_HIGH`
Start at high+1.

Since high=9 and n=10:
interval is empty.

## `S06_R2_CONFIRMED`
Label:

```text
CONFIRMED 2s
```

Again: empty, not fabricated.

---

# 16. ALL FOUR REGIONS SETTLE

## `S06_DIVIDED`
Spoken:
`our array is divided like this...`

### Visual action
Show all four region labels together:

```text
0s | 1s | UNKNOWN | 2s
```

At initial state widths are:

```text
0s      empty
1s      empty
UNKNOWN full 10 slots
2s      empty
```

This is the first complete invariant frame.

---

## `S06_ZEROES`
Focus region 0 label.

## `S06_ONES`
Focus region 1 label.

## `S06_UNKNOWN_WORD`
Focus UNKNOWN.

## `S06_TWOS`
Focus region 2 label.

No geometry mutation across these four spoken words.
Only focus/confirmation.

---

# 17. BRANCH RULE SETUP

## `S06_JOB_SIMPLE`
Spoken:
`Now the job is simple.`

### Visual action
Invariant diagram remains.

Add compact rule heading:

```text
CHECK nums[mid]
```

---

## `S06_INSPECT_MID`
Spoken:
`We only inspect the value at mid.`

### Visual action
`mid` pointer becomes primary.

Slot at index 0 gets query/current state.

Do not process it yet.

This makes the branch model visually obvious:
all decisions originate at `mid`.

---

# 18. CASE 0 — MOVE LEFT

This part is conceptual.

Do not use the live master trace value if it causes a mismatch (`nums[0]` is actually 2).

Therefore use a **detached teaching token / mini-example overlay** while keeping the real master array untouched.

Preferred:
- keep master array dimmed as context;
- spawn a small 3-slot or symbolic case lane with token `0`.

Do not mutate real array in Scene06 for conceptual branch demos.

---

## `S06_CASE0`
Spoken:
`If nums at mid is zero...`

Show:

```text
CASE 0
nums[mid] = 0
```

Use a ghost teaching token.

---

## `S06_ZERO_LEFT`
Show destination:

```text
0 → LEFT
```

---

## `S06_SWAP_LOW`
Show conceptual swap:

```text
mid ↔ low
```

Use BezierFlight / ParametricArrow if already appropriate.

No real master-array swap.

---

## `S06_LOW_FWD`
Animate conceptual pointer:

```text
low++
```

---

## `S06_MID_FWD_0`
Animate:

```text
mid++
```

Then case lane settles into compact rule:

```text
0:
swap(low,mid)
low++
mid++
```

---

# 19. CASE 1 — STAY MIDDLE

## `S06_CASE1`
Show:

```text
CASE 1
nums[mid] = 1
```

## `S06_ONE_MIDDLE`
Destination:

```text
1 → MIDDLE
```

## `S06_NO_SWAP`
Use explicit semantic:

```text
NO SWAP
```

No motion.

## `S06_MID_FWD_1`
Animate:

```text
mid++
```

Compact rule:

```text
1:
mid++
```

---

# 20. CASE 2 — MOVE RIGHT

## `S06_CASE2`
Show:

```text
CASE 2
nums[mid] = 2
```

## `S06_TWO_RIGHT`
Destination:

```text
2 → RIGHT
```

## `S06_SWAP_HIGH`
Show conceptual:

```text
mid ↔ high
```

## `S06_HIGH_LEFT`
Animate:

```text
high--
```

Do NOT move mid.

At this point the difference between 0-case and 2-case should be visually visible.

---

# 21. MOST IMPORTANT RULE — MID STAYS

## `S06_IMPORTANT_RULE`
Spoken:
`But here is the most important rule...`

### Visual action
Clear secondary case clutter.

Keep only the 2-case mini-state:

```text
2 at mid
unknown value at high
```

Add emphasis:

```text
IMPORTANT
```

or existing warn/pivot teaching annotation.

---

## `S06_MID_STAYS`
Spoken:
`mid does not move.`

### Visual action
This must be unambiguous.

Show:

```text
high  ← moves
mid   = stays
```

Prefer:
- animate high pointer one step left;
- mid pointer gives a restrained hold/pulse but remains fixed.

Do not animate mid even a few pixels.

Add small chalk phrase:

```text
MID STAYS
```

This is the core concept frame.

---

# 22. WHY MID STAYS — INCOMING UNKNOWN

## `S06_WHY`
Spoken:
`Why?`

Pause state:
- 2-case remains visible;
- high-side incoming value gets focus.

---

## `S06_FROM_HIGH`
Spoken:
`Because the value coming from the high side...`

### Visual action
Use a ghost value token traveling:

```text
high slot
→
mid slot
```

This is conceptual.

---

## `S06_WAS_UNKNOWN`
Spoken:
`was still inside the unknown region.`

### Visual action
Before the token leaves high, visually highlight that its source slot belonged to:

```text
UNKNOWN
```

Draw relation:

```text
source = UNKNOWN
```

Therefore:
arrival at mid is not classified.

---

# 23. INCOMING VALUE COULD BE 0 / 1 / 2

## `S06_DONT_KNOW`
Spoken:
`We do not know yet...`

Show incoming token as:

```text
?
```

not as a determined value.

---

## `S06_NEW_ZERO`
Spoken:
`whether that new value is zero...`

Ghost token briefly resolves to:

```text
0
```

---

## `S06_NEW_ONE`
Spoken:
`one...`

Token becomes:

```text
1
```

---

## `S06_NEW_TWO`
Spoken:
`or two.`

Token becomes:

```text
2
```

This is a conceptual enumeration.

Do not imply the same physical value is morphing algorithmically.

Use T0 state alternatives or three quick symbolic possibilities around `?`, not a misleading data mutation.

Preferred:

```text
? ∈ {0,1,2}
```

with each member highlighted as spoken.

---

# 24. MUST INSPECT FIRST

## `S06_INSPECT_FIRST`
Spoken:
`So we must inspect it first.`

### Visual action
Return token to:

```text
?
```

at mid.

Mid pointer remains exactly where it was.

Show:

```text
CHECK AGAIN
```

This creates the mental model:

```text
swap 2 with high
→ high--
→ incoming value remains under mid
→ inspect it
```

No actual trace yet.

---

# 25. COMPLETE IDEA — POINTER RESPONSIBILITIES

## `S06_COMPLETE_IDEA`
Spoken:
`This is the complete idea...`

### Visual action
Remove branch mini-overlays.

Return to one clean Array V2 + four-region diagram.

Restore initial truth:

```text
low=0
mid=0
high=9
UNKNOWN = full array
```

or preserve a neutral conceptual invariant frame if easier.

Prefer initial truth to avoid inventing trace state.

---

## `S06_LOW_PROTECTS`
Spoken:
`low protects the zero region...`

Focus:
```text
low
0s region
```

Relation:
```text
low boundary ↔ confirmed 0s
```

---

## `S06_MID_SCANS`
Spoken:
`mid scans the unknown region...`

Focus:
```text
mid
UNKNOWN
```

Mid pointer receives current/query emphasis.

---

## `S06_HIGH_PROTECTS`
Spoken:
`high protects the two region.`

Focus:
```text
high
2s region
```

---

# 26. UNKNOWN REGION SHRINKS

## `S06_UNKNOWN_SHRINKS`
Spoken:
`As the algorithm runs... the unknown region keeps getting smaller...`

### Visual action
Use a **conceptual boundary animation**, not the real master trace.

Animate only the REGION BANDS:

```text
low boundary moves right
high boundary moves left
UNKNOWN band narrows
```

Do not move actual values.

This is a conceptual invariant illustration.

Important:
this is not the real dry run.

Use ghost / guide boundaries if needed.

No pointer step counts.

No specific fabricated intermediate values.

---

## `S06_NOTHING_LEFT`
Spoken:
`until nothing is left to classify.`

### Visual action
UNKNOWN band collapses to zero width.

Show:

```text
UNKNOWN = EMPTY
```

Then immediately restore / hand off to Scene07 initial master trace state:

```text
[2,1,2,0,2,1,0,1,0,2]
low=0
mid=0
high=9
```

This must be clearly a new start state for the full trace.

### Transition class
```text
T8 REPRESENTATION HANDOFF
concept invariant → real verified trace
```

No fade-to-black reset.

---

# 27. SCENE 06 → SCENE 07 HANDOFF

Required end state:

```text
APPROACH 2 · DUTCH NATIONAL FLAG

MASTER INPUT
[2,1,2,0,2,1,0,1,0,2]

low=0
mid=0
high=9

0s      = empty
1s      = empty
UNKNOWN = indices 0..9
2s      = empty

RULES
0 → swap low, low++, mid++
1 → mid++
2 → swap high, high--, MID STAYS
```

Keep rules compact enough that Scene07 can clear them and begin execution.

Scene07 owns the real 10 iterations.

---

# 28. MOTION CONTRACT

Master law:

```text
CAUSE
→ STATE REACTION
→ COMPREHENSION HOLD
→ MOVEMENT / MUTATION
→ SETTLE
```

Scene06 motion vocabulary:

```text
reveal
focus
boundary draw
conceptual swap
pointer increment/decrement
hold
region shrink
representation handoff
```

No decorative motion.

---

# 29. MORPH CONTRACT

Allowed:

### Pointer label reveal
```text
T0 STATE_CHANGE
```

### Region reveal
```text
T0 / T8 representation reveal
```

### Conceptual case token
```text
T5 CLONE / PROJECT
```

### Concept invariant → real trace
```text
T8 REPRESENTATION_HANDOFF
```

Forbidden:
- master values changing during conceptual branch demos;
- true morph of pointer into region;
- glyph morphs of `0`→`1`→`2`;
- fabricated real array states.

---

# 30. SVG CONTRACT

Semantic SVG only:

```text
pointer arrows
region brackets / bands
mid↔low conceptual swap route
mid↔high conceptual swap route
high-source UNKNOWN relation
unknown-region shrink boundaries
```

Use:
```text
ParametricArrow
RoughLine
RoughCurve
PartitionBandV2
```

If a curved swap route is used:
- route must stay above/below slots;
- values must not cross through slot boxes;
- arrow head follows path tangent;
- no knots / self-intersections.

---

# 31. TYPOGRAPHY CONTRACT

Patrick Hand:
- `DUTCH NATIONAL FLAG`
- region labels
- `MID STAYS`
- `UNKNOWN`
- `CHECK AGAIN`

Mono:
- `low`
- `mid`
- `high`
- indices
- `nums[mid]`
- boundary formulas:
  `0..low-1`, `low..mid-1`, `mid..high`, `high+1..n-1`

No new font.

---

# 32. ANTIGRAVITY — AUDIO SYNC → EXACT FRAME PLAN

Execute only after final:

```text
06-dnf-idea.mp3
06-dnf-idea.json
```

or the exact final filenames.

## A. Audit first

Inspect:

```text
Scene05 final end state
ArrayTrackV2
PointerLaneV2
PartitionBandV2
ParametricArrow
RoughLine
RoughCurve
BezierFlight
audioSyncV2
Captions
motion helpers
morph helpers
```

Return:

```text
REUSE
EXTEND
CREATE
```

No bespoke pointer primitive if PointerLaneV2 already supports this.

---

## B. Validate raw sync

Verify:
- audio filename;
- FPS;
- durationFrames;
- ordered word timestamps;
- unique stable IDs;
- all frames valid.

Raw sync immutable.

---

## C. Stable ordered word IDs

Derive:

```text
W0000...
```

Repeated words:
- low
- mid
- high
- region
- zero
- one
- two
- unknown

must resolve by ordered word identity.

---

## D. Create semantic anchor manifest

Create:

```text
sync/06-dnf-idea.anchors.json
```

Resolve every `S06_*` anchor.

Each anchor:

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

## E. Region formula manifest

Create a stable semantic mapping independent of frame timing:

```text
REGION_0 = [0, low)
REGION_1 = [low, mid)
REGION_U = [mid, high+1)
REGION_2 = (high, n-1]
```

or equivalent half-open formulation in code.

The visual layer must derive bands from the same pointer state.

Do not hardcode region widths separately.

---

## F. Pointer state model

For Scene06 concept mode:

```text
initial real state:
low=0
mid=0
high=9
```

Branch mini-demos must be explicitly tagged:

```text
mode = conceptual_demo
```

and must NOT overwrite the real master state.

This prevents Scene07 from inheriting fabricated pointer positions.

---

## G. Phrase-window conversion

For each anchor derive:

```text
phraseStartFrame
phraseEndFrame
nextAnchorFrame
pauseWindow
```

Then map exact motion.

Example `S06_MID_STAYS`:

```text
CAUSE
spoken "mid does not move"

STATE REACTION
mid pointer receives strong pivot emphasis

HOLD
mid remains exactly fixed

MOVEMENT
only high pointer completes its left move

SETTLE
MID STAYS annotation appears
```

Example `S06_WAS_UNKNOWN`:

```text
CAUSE
"was still inside the unknown region"

REACTION
source high-side cell receives UNKNOWN band focus

MOVEMENT
relation path from UNKNOWN source to incoming token

SETTLE
incoming token remains unclassified at mid
```

---

## H. No guessed durations

If exact audio window is short:
- simplify path;
- reduce secondary label animation;
- preserve invariant meaning;
- never change audio;
- never move mid incorrectly to fit timing.

---

## I. Scene duration + captions

Same exact sync drives:
- captions;
- semantic anchors;
- durationFrames.

No separate timing source.

---

# 33. REQUIRED POST-SYNC REVIEW CHECKPOINTS

Resolve exact semantic frames after sync:

1. `S06_HIGH`
   - low=0, mid=0, high=9 visible.

2. `S06_FOUR_REGIONS`
   - four region labels visible.

3. `S06_RU_UNKNOWN`
   - whole master array correctly inside UNKNOWN.

4. `S06_DIVIDED`
   - all four region semantics visible, empty regions truthful.

5. `S06_INSPECT_MID`
   - mid is the only inspected pointer/value.

6. `S06_MID_FWD_0`
   - 0-case rule complete.

7. `S06_MID_FWD_1`
   - 1-case rule complete.

8. `S06_HIGH_LEFT`
   - 2-case high movement complete, mid unchanged.

9. `S06_MID_STAYS`
   - explicit mid-hold frame.

10. `S06_WAS_UNKNOWN`
    - incoming value source visibly belongs to UNKNOWN.

11. `S06_INSPECT_FIRST`
    - unknown incoming value remains under mid for re-check.

12. `S06_HIGH_PROTECTS`
    - pointer responsibilities summarized.

13. `S06_UNKNOWN_SHRINKS`
    - conceptual UNKNOWN band shrink, no fake value trace.

14. `S06_NOTHING_LEFT`
    - UNKNOWN collapses, then Scene07 resets to real initial trace state.

---

# 34. ACCEPTANCE CHECKLIST

- [ ] Starts from Scene05 raw master input.
- [ ] Uses native Array V2.
- [ ] low/mid/high outside slots.
- [ ] low=0, mid=0, high=9 at real start.
- [ ] Exactly four logical regions taught.
- [ ] Initial 0-region empty.
- [ ] Initial 1-region empty.
- [ ] Initial UNKNOWN spans 0..9.
- [ ] Initial 2-region empty.
- [ ] Region formulas correct.
- [ ] 0-case = swap low/mid, low++, mid++.
- [ ] 1-case = mid++.
- [ ] 2-case = swap mid/high, high--, MID STAYS.
- [ ] `mid stays` is visually explicit.
- [ ] Incoming high-side value is shown as UNKNOWN.
- [ ] Possible incoming value may be 0/1/2.
- [ ] Concept demos do not mutate real master array.
- [ ] No full dry run yet.
- [ ] No code yet.
- [ ] UNKNOWN shrink is conceptual, not fabricated trace.
- [ ] Scene07 receives real initial state `[2,1,2,0,2,1,0,1,0,2]`, low=0, mid=0, high=9.
- [ ] No generic cards.
- [ ] No guessed frame numbers.
- [ ] Final MP3 + sync are timing authority.
- [ ] Stable word IDs used.
- [ ] Same sync drives captions.

---

# FINAL VISUAL STORY — ONE LINE

**Scene 06 inherits the unchanged 10-slot master Array V2 from Scene 05, reveals three external pointer lanes named `low`, `mid`, and `high` at the truthful initial positions `0,0,9`, then uses PartitionBandV2 to prove that those three pointers create four logical regions — confirmed `0s`, confirmed `1s`, `UNKNOWN`, confirmed `2s` — with the initial truth that the first, second, and fourth regions are empty while the entire array is unknown; it then teaches the three branch rules through detached conceptual mini-demos so the real master trace is never fabricated, makes the `2` case the visual centerpiece by moving only `high` while `mid` visibly stays fixed, traces the incoming high-side value back to the UNKNOWN region and shows that it could still be `0`, `1`, or `2`, consolidates the pointer responsibilities `low protects 0s / mid scans UNKNOWN / high protects 2s`, conceptually shrinks only the UNKNOWN band to explain progress, and finally hands Scene 07 the untouched real master state `[2,1,2,0,2,1,0,1,0,2]` with `low=0, mid=0, high=9` ready for the full verified ten-iteration trace.**
