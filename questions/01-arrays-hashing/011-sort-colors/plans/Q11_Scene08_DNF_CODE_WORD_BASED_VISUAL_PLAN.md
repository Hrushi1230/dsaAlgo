# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 08 — Dutch National Flag Code
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC75 · Medium  
**Scene purpose:** Convert the fully verified Dutch National Flag trace from Scene 07 into code without replaying the ten iterations. The learner should see the code as a direct representation of the invariant and the three branch rules already proven: `0 → swap low/mid`, `1 → mid++`, `2 → swap mid/high, high--, MID STAYS`.

---

# 0. CONTINUITY — SCENE 07 → SCENE 08

Scene 08 starts from the exact semantic end state of Scene 07:

```text
FINAL
[0,0,0,1,1,1,2,2,2,2]

0 → LEFT   : swap(low,mid), low++, mid++
1 → MIDDLE : mid++
2 → RIGHT  : swap(mid,high), high--, MID STAYS

UNKNOWN = EMPTY
```

Scene 08 must perform a:

```text
TRACE REPRESENTATION
→
CODE REPRESENTATION
```

handoff.

Do NOT:
- replay all ten iterations;
- rebuild the problem explanation;
- reopen Counting;
- add complexity comparison yet;
- introduce new pointer semantics;
- change the verified branch rules.

The code must explain the exact algorithm that generated the Scene 07 trace.

---

# 1. SOURCE TRUTH — EXACT NARRATION

```text
Now let’s convert that three-pointer idea into code...

We start with three pointers.

low is zero...

mid is zero...

and high is the last index.

Now we continue...

while mid is less than or equal to high.

At every step...

we only check nums at mid.

If nums at mid is zero...

we swap nums at low...

with nums at mid.

Then move low one step forward...

and move mid one step forward.

If nums at mid is one...

there is nothing to swap.

It already belongs in the middle region.

So we only move mid forward.

Otherwise...

nums at mid must be two.

So we swap nums at mid...

with nums at high.

Then move high one step left.

And notice carefully...

we do not move mid here.

That line is intentionally missing.

Why?

Because the value coming from high...

was still unknown.

We have to inspect it first.

The loop continues...

until mid becomes greater than high.

At that point...

the unknown region is empty...

and the whole array is correctly partitioned.

So the complete logic is simple...

zero goes to the left...

one stays in the middle...

and two goes to the right.

The important part is not memorising the code...

it is remembering what low...

mid...

and high guarantee at every step.
```

---

# 2. VERIFIED CODE — AUTHORITATIVE

Use this exact logical structure:

```python
def sortColors(nums):
    low = 0
    mid = 0
    high = len(nums) - 1

    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1

        elif nums[mid] == 1:
            mid += 1

        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
```

This exact semantic structure must be preserved.

Do NOT silently replace it with:
- `nums.sort()`;
- Counting;
- a frequency array;
- three separate arrays;
- a `for` loop over fixed indices;
- an implementation that increments `mid` in the `2` branch;
- a different termination condition.

The most important code truth is:

```text
2-case has:
swap(mid, high)
high--

and NO mid++
```

---

# 3. VISUAL ARCHITECTURE — TRACE → CODE

Use the existing long-form code lesson grammar.

Preferred layout:

```text
LEFT
authoritative DNF code

RIGHT
compact Array V2
+ pointer lanes
+ four-region invariant
+ current semantic branch evidence
```

The right side is a **proof surface**, not a second full trace.

No black IDE panel.

The scene remains on the locked green board:

```text
theme.boardBg = #18523d
```

Use existing code typography and syntax styling from the course.

---

# 4. COMPONENT REUSE

Antigravity must inspect and reuse the actual existing code-scene primitives.

Expected reuse candidates:

```text
existing CodeBlock / CodeEditor / TypedCode component
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
PointerLaneV2
PartitionBandV2
ChalkText
RoughLine
RoughCurve
Captions
```

Before implementation, Antigravity must report:

```text
REUSE
EXTEND
CREATE
```

Do not invent a second editor.

---

# 5. RIGHT-SIDE EVIDENCE STATE

Scene 08 should not begin on the final sorted array only.

During code explanation, use a compact **semantic demo state** that makes the invariant readable.

Preferred base visual:

```text
0s | 1s | UNKNOWN | 2s

low
mid
high
```

with a compact Array V2 under it.

For branch explanation, use detached symbolic examples / representative tokens where needed.

Do not fabricate a real trace state and pretend it is one of the ten verified iterations.

When real trace evidence is referenced, use one of the actual verified states from Scene 07.

---

# 6. CODE REVEAL PRINCIPLE

Code is revealed from narration, not dumped all at once.

Permanent rule:

```text
spoken idea
→ exact code line / block becomes active
→ right-side invariant reacts
→ settle
```

Future code may remain:
- hidden; or
- dimmed if the existing course editor already uses preview context.

Do not animate syntax colors.

If deterministic typed-code reveal already exists, reuse it.

If not:
- reveal by semantic line / token group;
- no new typing system.

---

# 7. STABLE CODE-LINE IDS

Antigravity should map the code to stable semantic line IDs:

```text
L01  def sortColors(nums):
L02  low = 0
L03  mid = 0
L04  high = len(nums) - 1
L05  while mid <= high:
L06      if nums[mid] == 0:
L07          nums[low], nums[mid] = nums[mid], nums[low]
L08          low += 1
L09          mid += 1
L10      elif nums[mid] == 1:
L11          mid += 1
L12      else:
L13          nums[mid], nums[high] = nums[high], nums[mid]
L14          high -= 1
```

There is deliberately **no line after L14 that increments `mid`**.

That absence is pedagogically important.

---

# 8. WORD-BASED SEMANTIC ANCHORS

Exact word IDs / frames are resolved only after final MP3 + exact sync JSON exist.

| Anchor ID | Exact narration phrase | Visual purpose |
|---|---|---|
| `S08_START` | `Now let’s convert that three-pointer idea into code` | trace → code handoff |
| `S08_THREE_POINTERS` | `We start with three pointers` | reveal initialization block |
| `S08_LOW0` | `low is zero` | focus L02 |
| `S08_MID0` | `mid is zero` | focus L03 |
| `S08_HIGH_LAST` | `high is the last index` | focus L04 |
| `S08_CONTINUE` | `Now we continue` | prepare loop |
| `S08_WHILE` | `while mid is less than or equal to high` | focus L05 |
| `S08_EVERY_STEP` | `At every step` | loop body focus |
| `S08_CHECK_MID` | `we only check nums at mid` | focus query source |
| `S08_IF_ZERO` | `If nums at mid is zero` | focus L06 |
| `S08_SWAP_LOW_A` | `we swap nums at low` | focus L07 first semantic side |
| `S08_SWAP_LOW_B` | `with nums at mid` | complete L07 meaning |
| `S08_LOW_INC` | `move low one step forward` | focus L08 |
| `S08_MID_INC_ZERO` | `move mid one step forward` | focus L09 |
| `S08_IF_ONE` | `If nums at mid is one` | focus L10 |
| `S08_NO_SWAP` | `there is nothing to swap` | show no-swap state |
| `S08_ONE_MIDDLE` | `already belongs in the middle region` | invariant explanation |
| `S08_MID_INC_ONE` | `we only move mid forward` | focus L11 |
| `S08_ELSE` | `Otherwise` | focus L12 |
| `S08_MUST_TWO` | `nums at mid must be two` | domain logic |
| `S08_SWAP_HIGH_A` | `we swap nums at mid` | focus L13 first side |
| `S08_SWAP_HIGH_B` | `with nums at high` | complete L13 meaning |
| `S08_HIGH_DEC` | `move high one step left` | focus L14 |
| `S08_NOTICE` | `And notice carefully` | prepare critical code omission |
| `S08_NO_MID_MOVE` | `we do not move mid here` | highlight missing `mid++` |
| `S08_LINE_MISSING` | `That line is intentionally missing` | explicit omission proof |
| `S08_WHY` | `Why` | reasoning beat |
| `S08_FROM_HIGH` | `value coming from high` | incoming value source |
| `S08_WAS_UNKNOWN` | `was still unknown` | UNKNOWN source proof |
| `S08_INSPECT_FIRST` | `We have to inspect it first` | recheck rule |
| `S08_LOOP_CONTINUES` | `The loop continues` | return to L05 |
| `S08_UNTIL_CROSS` | `until mid becomes greater than high` | loop termination |
| `S08_UNKNOWN_EMPTY` | `the unknown region is empty` | invariant termination |
| `S08_PARTITIONED` | `whole array is correctly partitioned` | result confirmation |
| `S08_SIMPLE` | `complete logic is simple` | code settles |
| `S08_ZERO_LEFT` | `zero goes to the left` | 0 branch recap |
| `S08_ONE_MIDDLE_2` | `one stays in the middle` | 1 branch recap |
| `S08_TWO_RIGHT` | `two goes to the right` | 2 branch recap |
| `S08_NOT_MEMORISE` | `important part is not memorising the code` | shift code → invariant |
| `S08_LOW_GUARANTEE` | `what low` | low role |
| `S08_MID_GUARANTEE` | `mid` | mid role |
| `S08_HIGH_GUARANTEE` | `and high guarantee at every step` | high role / full invariant |

Repeated terms (`mid`, `high`, `low`, `one`, `two`, `zero`, `move`) must resolve through stable ordered word IDs.

---

# 9. ENTRY — TRACE → CODE HANDOFF

## Beat — `S08_START`
### Spoken
`Now let’s convert that three-pointer idea into code...`

### Starting visual
Scene07 end:

```text
0 → LEFT
1 → MIDDLE
2 → RIGHT
MID STAYS after 2
```

### Visual action
Use T8 representation handoff:

- rule strip shifts to right-side evidence area;
- code surface opens on left;
- compact Array V2 + pointer/region grammar remains on right;
- final sorted trace state recedes;
- code scene prepares to explain algorithm from initial semantics.

No glyph morph.

---

# 10. FUNCTION SIGNATURE

Narration does not explicitly say the function signature.

Therefore:

```python
def sortColors(nums):
```

may be present as static context before `S08_THREE_POINTERS`.

It should not animate as if spoken.

Keep it visually secondary.

---

# 11. POINTER INITIALIZATION

## `S08_THREE_POINTERS`
Spoken:
`We start with three pointers.`

Reveal together, dim:

```python
low = 0
mid = 0
high = len(nums) - 1
```

Right side:
three pointer markers appear.

---

## `S08_LOW0`
Focus:

```python
low = 0
```

Right side:

```text
low → index 0
```

Explain semantically through geometry, not extra narration:
low begins at left edge.

---

## `S08_MID0`
Focus:

```python
mid = 0
```

Right side:
mid overlaps index0 in separate pointer lane.

---

## `S08_HIGH_LAST`
Focus:

```python
high = len(nums) - 1
```

Right side:
high at last index.

For master example:

```text
high = 9
```

This may be shown as trace evidence, but code remains general.

---

# 12. WHILE LOOP CONDITION

## `S08_CONTINUE`
Spoken:
`Now we continue...`

Bring loop skeleton forward.

---

## `S08_WHILE`
Spoken:
`while mid is less than or equal to high.`

Focus:

```python
while mid <= high:
```

Right side:
highlight UNKNOWN region:

```text
[mid .. high]
```

Semantic meaning:

```text
while UNKNOWN is not empty
```

Do not add a separate loop card.

---

# 13. WHAT DO WE INSPECT?

## `S08_EVERY_STEP`
Spoken:
`At every step...`

Loop body becomes active.

---

## `S08_CHECK_MID`
Spoken:
`we only check nums at mid.`

Focus:

```text
nums[mid]
```

Right side:
mid pointer + current slot receive query state.

Other pointers remain visible but dimmer.

This establishes one decision source.

---

# 14. ZERO BRANCH

## `S08_IF_ZERO`
Spoken:
`If nums at mid is zero...`

Focus:

```python
if nums[mid] == 0:
```

Right side:
symbolic `0` under current mid.

---

## `S08_SWAP_LOW_A` + `S08_SWAP_LOW_B`
Spoken:
`we swap nums at low... with nums at mid.`

Focus:

```python
nums[low], nums[mid] = nums[mid], nums[low]
```

Right side:
conceptual swap relation:

```text
low ↔ mid
```

Use a detached symbolic demo or one actual verified 0-case state from Scene07.

Preferred actual verified reference:
Step 7 or Step 9.

Do not fabricate.

---

## `S08_LOW_INC`
Focus:

```python
low += 1
```

Right side:
low pointer moves one conceptual slot right.

---

## `S08_MID_INC_ZERO`
Focus:

```python
mid += 1
```

Right side:
mid moves right.

Then show compact branch summary:

```text
0:
swap(low,mid)
low++
mid++
```

---

# 15. ONE BRANCH

## `S08_IF_ONE`
Spoken:
`If nums at mid is one...`

Focus:

```python
elif nums[mid] == 1:
```

Right side:
representative `1` under mid.

---

## `S08_NO_SWAP`
Spoken:
`there is nothing to swap.`

Visual:

```text
NO SWAP
```

No value motion.

---

## `S08_ONE_MIDDLE`
Spoken:
`It already belongs in the middle region.`

Focus region:

```text
1s
```

This connects code branch to invariant.

---

## `S08_MID_INC_ONE`
Focus:

```python
mid += 1
```

Right side:
mid moves right.

Compact branch summary:

```text
1:
mid++
```

---

# 16. ELSE / TWO BRANCH

## `S08_ELSE`
Spoken:
`Otherwise...`

Focus:

```python
else:
```

---

## `S08_MUST_TWO`
Spoken:
`nums at mid must be two.`

Right side:
brief domain proof:

```text
value ∈ {0,1,2}
not 0
not 1
⇒ 2
```

Do not turn this into a card.

---

## `S08_SWAP_HIGH_A` + `S08_SWAP_HIGH_B`
Spoken:
`we swap nums at mid... with nums at high.`

Focus:

```python
nums[mid], nums[high] = nums[high], nums[mid]
```

Right side:
use actual verified Step 8 as the strongest reference:

```text
before
[0,0,1,1,2,1,0,2,2,2]
l=2 m=4 h=6

swap idx4 ↔ idx6

after
[0,0,1,1,0,1,2,2,2,2]
```

Keep it compact.

This is a code explanation, not full replay.

---

## `S08_HIGH_DEC`
Focus:

```python
high -= 1
```

Right side:
high moves one step left.

Now stop.

Do **not** move mid.

This prepares the critical omission beat.

---

# 17. HERO CODE MOMENT — THE MISSING `mid++`

## `S08_NOTICE`
Spoken:
`And notice carefully...`

### Visual action
Dim all code except the 2-case:

```python
else:
    nums[mid], nums[high] = nums[high], nums[mid]
    high -= 1
```

Leave a deliberate visual gap after `high -= 1`.

Do not insert a fake comment yet.

---

## `S08_NO_MID_MOVE`
Spoken:
`we do not move mid here.`

### Visual action
Right side:
- high moves / already moved;
- mid pointer remains fixed;
- incoming value sits under mid.

Code side:
show explicitly that there is **no**:

```python
mid += 1
```

Do not draw it as a real code line and then cross it out if that could imply it exists.

Preferred:
- faint teaching annotation in margin:

```text
NO mid++
```

or:

```text
mid stays
```

outside the code body.

---

## `S08_LINE_MISSING`
Spoken:
`That line is intentionally missing.`

### Visual action
Use a code-margin bracket after L14:

```text
← no mid++
```

This is an explanatory annotation, not source code.

Hero frame should make the absence impossible to miss.

---

# 18. WHY THE LINE IS MISSING

## `S08_WHY`
Spoken:
`Why?`

Pause:
- keep 2-case code active;
- incoming value at mid receives focus.

---

## `S08_FROM_HIGH`
Spoken:
`Because the value coming from high...`

Right side:
trace the actual Step8 incoming `0` from high position to mid position.

Use Scene07 verified state.

---

## `S08_WAS_UNKNOWN`
Spoken:
`was still unknown.`

Highlight source cell as part of the previous UNKNOWN band.

Show relation:

```text
came from UNKNOWN
```

Therefore:
incoming value is unclassified.

---

## `S08_INSPECT_FIRST`
Spoken:
`We have to inspect it first.`

Right side:
mid stays on incoming value.

Small semantic loop:

```text
swap 2 right
→ high--
→ CHECK nums[mid] AGAIN
```

Code side:
focus returns conceptually to:

```python
while mid <= high:
```

then:

```python
if nums[mid] == 0:
...
```

Do not literally retype code.

---

# 19. LOOP TERMINATION

## `S08_LOOP_CONTINUES`
Spoken:
`The loop continues...`

Focus L05:

```python
while mid <= high:
```

Right side:
UNKNOWN region shown shrinking conceptually.

---

## `S08_UNTIL_CROSS`
Spoken:
`until mid becomes greater than high.`

Right side:
use final verified pointer state:

```text
mid = 6
high = 5
```

Show crossing truthfully.

---

## `S08_UNKNOWN_EMPTY`
Spoken:
`At that point... the unknown region is empty...`

PartitionBandV2:

```text
UNKNOWN = empty
```

No fake values.

---

## `S08_PARTITIONED`
Spoken:
`and the whole array is correctly partitioned.`

Show final:

```text
[0,0,0,1,1,1,2,2,2,2]
```

Regions:

```text
0s = idx0..2
1s = idx3..5
2s = idx6..9
```

No UNKNOWN.

---

# 20. FULL LOGIC SETTLES

## `S08_SIMPLE`
Spoken:
`So the complete logic is simple...`

All temporary highlights recede.

Full code becomes readable as one unit.

Right side condenses into three rule rows:

```text
0 → LEFT
1 → MIDDLE
2 → RIGHT
```

---

## `S08_ZERO_LEFT`
Focus code block:

```python
if nums[mid] == 0:
    swap(low, mid)
    low += 1
    mid += 1
```

Right:
```text
0 → LEFT
```

---

## `S08_ONE_MIDDLE_2`
Focus:

```python
elif nums[mid] == 1:
    mid += 1
```

Right:
```text
1 → MIDDLE
```

---

## `S08_TWO_RIGHT`
Focus:

```python
else:
    swap(mid, high)
    high -= 1
```

Right:
```text
2 → RIGHT
MID STAYS
```

---

# 21. CODE IS NOT THE MAIN THING — INVARIANT IS

## `S08_NOT_MEMORISE`
Spoken:
`The important part is not memorising the code...`

### Visual action
Code fades to supporting opacity.

Right-side four-region invariant becomes primary:

```text
0s | 1s | UNKNOWN | 2s
```

This is the pedagogical end point.

---

# 22. POINTER GUARANTEES

## `S08_LOW_GUARANTEE`
Spoken:
`it is remembering what low...`

Focus:

```text
low
```

Show:

```text
[0 .. low-1] = confirmed 0s
```

Optional small phrase:
```text
next place for 0
```

---

## `S08_MID_GUARANTEE`
Spoken:
`mid...`

Focus:

```text
mid
```

Show:

```text
[mid .. high] = UNKNOWN
```

and:
```text
nums[mid] = current value to inspect
```

---

## `S08_HIGH_GUARANTEE`
Spoken:
`and high guarantee at every step.`

Focus:

```text
high
```

Show:

```text
[high+1 .. n-1] = confirmed 2s
```

Settle full invariant:

```text
0s | 1s | UNKNOWN | 2s

low  = next 0 boundary
mid  = current unknown
high = next 2 boundary
```

This is the scene's final visual truth.

---

# 23. SCENE 08 → SCENE 09 HANDOFF

Scene09 is:

```text
Complexity + Common Mistakes + Edge Cases
```

End Scene08 with:

```text
DUTCH NATIONAL FLAG

while mid <= high

0 → swap(low,mid), low++, mid++
1 → mid++
2 → swap(mid,high), high--, MID STAYS

INVARIANT
0s | 1s | UNKNOWN | 2s
```

Do not add complexity values here.

Scene09 should inherit:
- full code;
- invariant;
- branch rules;
- explicit missing `mid++` in 2-case.

Transition:

```text
T0 focus/state change
```

No reset.

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

Code scene law:

```text
spoken concept
→ exact code line focus
→ right-side invariant evidence
→ settle
```

One code region at a time.

Do not:
- scroll rapidly;
- bounce code;
- animate syntax colors;
- show all branches fighting for attention.

---

# 25. MORPH CONTRACT

Allowed:

### Trace → code
```text
T8 REPRESENTATION_HANDOFF
```

### Code line focus
```text
T0 STATE_CHANGE
```

### Real trace evidence → invariant explanation
```text
T8 REPRESENTATION_HANDOFF
```

Forbidden:
- array value glyphs morphing into code tokens;
- pointer arrows morphing into source code;
- `high--` morphing into pointer movement via glyph deformation;
- fake `mid++` source line crossed out inside actual code.

---

# 26. SVG / RELATION CONTRACT

Use semantic SVG only:

```text
low↔mid conceptual swap relation
mid↔high relation
UNKNOWN source relation for incoming value
pointer guarantee brackets
region boundary brackets
```

Preferred:

```text
RoughLine
RoughCurve
ParametricArrow
PartitionBandV2
```

No decorative arrows.

---

# 27. TYPOGRAPHY CONTRACT

Mono:
- source code;
- `low`, `mid`, `high`;
- `nums[mid]`;
- `mid <= high`;
- invariant ranges.

Patrick Hand:
- `MID STAYS`;
- `UNKNOWN`;
- `NO SWAP`;
- explanatory margin notes.

Do not introduce new font families.

---

# 28. ANTIGRAVITY — FINAL AUDIO SYNC → EXACT FRAME PLAN

Execute only after the user supplies final:

```text
08-dnf-code.mp3
08-dnf-code.json
```

or the exact final filenames.

## A. Audit first

Inspect actual repo:

```text
Scene07 final implementation
existing code editor component
ArrayTrackV2
PointerLaneV2
PartitionBandV2
RoughLine
RoughCurve
BezierFlight
audioSyncV2
Captions
motion helpers
```

Return:

```text
REUSE
EXTEND
CREATE
```

Expected:
- reuse code component;
- reuse Array V2;
- reuse pointer/partition primitives;
- create only Q11 code-scene composition.

---

## B. Validate raw sync

Verify:
- final MP3;
- FPS;
- durationFrames;
- ordered word timestamps;
- stable IDs;
- all anchors resolve within duration.

Raw sync immutable.

---

## C. Derive stable ordered word IDs

Create:

```text
W0000
W0001
...
```

Repeated words:
- low
- mid
- high
- move
- zero
- one
- two
- swap
- code
- loop

must resolve by ordered identity.

---

## D. Create semantic anchor manifest

Create:

```text
sync/08-dnf-code.anchors.json
```

Resolve all `S08_*` anchors.

Each entry:

```json
{
  "word_index": 0,
  "edge": "start",
  "note": "semantic action"
}
```

No guessed occurrence numbers.

---

# 29. STABLE CODE MAP

Create a code-semantic map:

```json
{
  "INIT_LOW": "L02",
  "INIT_MID": "L03",
  "INIT_HIGH": "L04",
  "LOOP": "L05",
  "CASE_ZERO": ["L06","L07","L08","L09"],
  "CASE_ONE": ["L10","L11"],
  "CASE_TWO": ["L12","L13","L14"]
}
```

Semantic anchors reference these line IDs.

No raw y-coordinate coupling.

---

# 30. PHRASE-WINDOW DERIVATION

For every narration beat derive:

```text
phraseStartFrame
phraseEndFrame
nextAnchorFrame
availablePause
```

Then map:

```text
CODE_REVEAL
CODE_FOCUS
RIGHT_SIDE_REACTION
SETTLE
```

No arbitrary 20/30-frame defaults.

---

# 31. HERO `MID STAYS` FRAME LOGIC

For the exact anchor:

```text
S08_NO_MID_MOVE
```

Antigravity must guarantee:

```text
high has moved / is allowed to move
mid coordinate is identical before and after
```

A validator should compare mid pointer x-position across the visual state window.

Do not merely rely on visual inspection.

If possible, semantic state should be:

```ts
midBefore === midAfter
```

for 2-case demo.

---

# 32. UNKNOWN-SOURCE PROOF

For `S08_WAS_UNKNOWN`:

Use an actual verified Scene07 2-case state.

Preferred Step 8:

```text
before:
[0,0,1,1,2,1,0,2,2,2]
l=2 m=4 h=6

source at high = idx6 = 0
idx6 is inside UNKNOWN [4..6]

after swap:
[0,0,1,1,0,1,2,2,2,2]
l=2 m=4 h=6 before decrement
```

Then:

```text
high → 5
mid stays 4
```

This is stronger than a fabricated token demo.

---

# 33. CODE CORRECTNESS ASSERTIONS

Antigravity should add / reuse a lightweight semantic verification for the code logic:

```text
loop condition = mid <= high
0-case:
  swap(low,mid)
  low++
  mid++

1-case:
  mid++

2-case:
  swap(mid,high)
  high--
  no mid++
```

For the master testcase, running the implementation must produce:

```text
[0,0,0,1,1,1,2,2,2,2]
```

with exactly the verified 10 iterations.

Do not rely only on rendered visuals.

---

# 34. CAPTIONS + DURATION

Same exact final sync drives:

```text
Captions
semantic anchors
scene duration
```

Final valid frame:

```text
0 <= frame < durationFrames
```

No silent clamping.

---

# 35. REQUIRED POST-SYNC REVIEW CHECKPOINTS

Resolve exact semantic frames after sync:

1. `S08_HIGH_LAST`
   - low=0, mid=0, high=last index.

2. `S08_WHILE`
   - `while mid <= high` clear and tied to UNKNOWN non-empty.

3. `S08_CHECK_MID`
   - only nums[mid] is inspected.

4. `S08_MID_INC_ZERO`
   - 0-case full code complete.

5. `S08_MID_INC_ONE`
   - 1-case full code complete.

6. `S08_HIGH_DEC`
   - 2-case high decrement shown.

7. `S08_NO_MID_MOVE`
   - mid visibly unchanged.

8. `S08_LINE_MISSING`
   - absence of mid++ explicit without modifying source code.

9. `S08_WAS_UNKNOWN`
   - incoming high-side value tied to UNKNOWN.

10. `S08_INSPECT_FIRST`
    - same mid must re-check incoming value.

11. `S08_UNTIL_CROSS`
    - final condition mid=6, high=5.

12. `S08_UNKNOWN_EMPTY`
    - UNKNOWN empty.

13. `S08_PARTITIONED`
    - exact sorted output.

14. `S08_HIGH_GUARANTEE`
    - full invariant visible.

---

# 36. ACCEPTANCE CHECKLIST

- [ ] Starts from Scene07 trace summary.
- [ ] Uses actual existing code component.
- [ ] Code matches verified DNF logic.
- [ ] low=0.
- [ ] mid=0.
- [ ] high=len(nums)-1.
- [ ] loop condition exactly `mid <= high`.
- [ ] checks `nums[mid]`.
- [ ] 0-case swap + low++ + mid++.
- [ ] 1-case only mid++.
- [ ] 2-case swap + high--.
- [ ] No mid++ in 2-case.
- [ ] Missing mid++ is explained visually.
- [ ] Unknown-source proof uses verified state, not invented state.
- [ ] Loop termination is mid > high.
- [ ] UNKNOWN empty at termination.
- [ ] Final array exact.
- [ ] Invariant closes the scene.
- [ ] No complexity values yet.
- [ ] No generic cards.
- [ ] No black code editor.
- [ ] No guessed frames.
- [ ] Final MP3 + exact sync control timing.
- [ ] Stable word IDs used.
- [ ] Stable code-line IDs used.
- [ ] Same sync drives captions.
- [ ] Scene09 inherits code + invariant + MID STAYS evidence.

---

# FINAL VISUAL STORY — ONE LINE

**Scene 08 takes the fully proven ten-step Dutch National Flag trace from Scene 07 and converts it into the exact source-code structure that generated it: the existing course code surface opens on the left while a compact Array V2, PointerLaneV2, and PartitionBandV2 remain on the right as evidence; the narration reveals `low=0`, `mid=0`, `high=n-1`, ties `while mid <= high` directly to the non-empty UNKNOWN region, then explains the three branches one at a time — `0` swaps with `low` and advances both `low` and `mid`, `1` performs no swap and advances only `mid`, and `2` swaps with `high` and decrements only `high`; the hero beat deliberately leaves a visible code-space after `high -= 1` and proves from the verified Step 8 trace that there is no `mid++` because the incoming high-side value came from UNKNOWN and must be inspected first; the loop then terminates at the verified `mid=6 > high=5`, UNKNOWN collapses to empty, the exact final array `[0,0,0,1,1,1,2,2,2,2]` is confirmed, and the scene finishes by dimming the code and returning attention to the invariant `0s | 1s | UNKNOWN | 2s`, making clear that the learner should remember what `low`, `mid`, and `high` guarantee rather than merely memorising lines of code.**
