# Q11 — Sort Colors (LC 75)
# Step 8 · Scene 09 — Complexity + Common Mistakes + Edge Cases
## WORD-BASED VISUAL PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC75 · Medium  
**Scene purpose:** Compare the two verified approaches fairly, prove the final complexity of Dutch National Flag, then lock in the exact implementation mistakes that most often break the algorithm. Finish by showing that the same invariant handles important edge cases without special-case code.

---

# 0. CONTINUITY — SCENE 08 → SCENE 09

Scene 09 starts from the exact semantic end state of Scene 08:

```text
DUTCH NATIONAL FLAG

while mid <= high

0 → swap(low,mid), low++, mid++
1 → mid++
2 → swap(mid,high), high--, MID STAYS

INVARIANT
0s | 1s | UNKNOWN | 2s
```

The full DNF code may remain visible in supporting opacity.

Scene 09 does NOT re-explain the algorithm from scratch.

It answers only:

```text
How efficient are both methods?
Why is DNF O(n)?
What mistakes break the invariant?
What edge cases still work?
```

Do NOT:
- replay Scene 07;
- replay Scene 08 code line-by-line;
- introduce a third method;
- add new algorithmic rules;
- change the verified complexity truth.

---

# 1. SOURCE TRUTH — EXACT NARRATION

```text
Now let’s compare both approaches...

Counting takes O of n time...

and O of one extra space.

But it uses two passes.

One pass to count...

and another pass to rewrite the array.

Dutch National Flag also takes O of n time...

and O of one extra space.

But here...

we classify the array in one pass.

Why is it O of n?

Because mid only moves to the right...

and high only moves to the left.

The unknown region keeps shrinking.

Now let’s look at the most common mistake.

Suppose nums at mid is two.

We swap it with nums at high...

and move high left.

But do not move mid.

This is very important.

The value that comes from the high side...

is still unknown.

If we move mid immediately...

we may skip that value without checking it.

Another common mistake...

is using...

while mid is less than high.

That is not enough.

We need...

while mid is less than or equal to high.

Because when mid and high are on the same index...

that last value is still unknown...

and must be processed.

Also remember...

high starts at the last valid index...

so high is n minus one.

One more important point...

there are four logical regions...

not three.

Confirmed zeroes...

confirmed ones...

unknown values...

and confirmed twos.

Now let’s check edge cases.

If the array has only one value...

the same logic still works.

If all values are zero...

it works.

If all values are one...

it works.

If all values are two...

it works.

If the array is already sorted...

it works.

And even if it starts in reverse order...

the same invariant still handles it.

No special case is required.

That is the power of maintaining the regions correctly.
```

---

# 2. VERIFIED COMPLEXITY TRUTH

## Counting

```text
TIME        O(n)
EXTRA SPACE O(1)
PASSES      2
```

Reason:

```text
Pass 1 → count frequencies
Pass 2 → rewrite same array
```

## Dutch National Flag

```text
TIME        O(n)
EXTRA SPACE O(1)
CLASSIFICATION PASS = 1
```

Important precision:

DNF may swap values and may inspect the same `mid` index again after a `2` swap, but the unknown interval still shrinks monotonically because:

```text
0-case → mid moves right
1-case → mid moves right
2-case → high moves left
```

Therefore each loop iteration decreases:

```text
unknownLength = high - mid + 1
```

by exactly 1.

This is the cleanest visual proof of `O(n)`.

No hand-wavy "each element is visited once" statement should be used, because after a `2` swap the same `mid` position can be inspected again.

---

# 3. VERIFIED COMMON MISTAKES — AUTHORITATIVE

## Mistake 1 — incrementing `mid` after the 2-case

Wrong:

```python
else:
    swap(nums[mid], nums[high])
    high -= 1
    mid += 1   # WRONG
```

Why wrong:

```text
incoming value from high was still UNKNOWN
→ skipping it can leave it unclassified
```

Use verified Step 8 as proof:

```text
before:
[0,0,1,1,2,1,0,2,2,2]
low=2 mid=4 high=6

swap idx4 ↔ idx6

after swap:
[0,0,1,1,0,1,2,2,2,2]

incoming nums[mid] = 0
```

If `mid++` happened incorrectly:

```text
the incoming 0 at idx4 would be skipped
```

This is the strongest mistake example.

---

## Mistake 2 — using `mid < high`

Wrong:

```python
while mid < high:
```

Correct:

```python
while mid <= high:
```

Reason:
when:

```text
mid == high
```

there is exactly one UNKNOWN slot left.

That last value still needs classification.

Use the verified final pre-termination state:

```text
low=3
mid=5
high=5
array=[0,0,0,1,1,1,2,2,2,2]
```

At this point index 5 is still inside UNKNOWN until it is processed.

---

## Mistake 3 — initializing `high = n`

Wrong:

```python
high = len(nums)
```

Correct:

```python
high = len(nums) - 1
```

Reason:
array indices are:

```text
0 ... n-1
```

So `n` is outside the array.

---

## Mistake 4 — thinking there are only 3 logical regions

Wrong mental model:

```text
0s | 1s | 2s
```

during execution.

Correct invariant:

```text
0s | 1s | UNKNOWN | 2s
```

The UNKNOWN region is what the algorithm is actively consuming.

---

# 4. EDGE CASE TRUTH

The same DNF logic works without special-case branches for:

```text
single element
all zeroes
all ones
all twos
already sorted
reverse-ish arrangement
```

Recommended concrete edge cases for visuals:

```text
[0]
[0,0,0,0]
[1,1,1,1]
[2,2,2,2]
[0,0,1,1,2,2]
[2,2,1,1,0,0]
```

These are demonstration inputs only.

Do not claim they are LeetCode-provided cases unless the source actually says so.

No need to dry-run all six fully.

Use invariant snapshots / micro-traces only.

---

# 5. VISUAL ARCHITECTURE

Scene 09 has three major visual phases:

```text
A. COMPLEXITY COMPARISON
B. COMMON MISTAKES
C. EDGE CASES
```

But do NOT present them as three generic cards.

Use one continuous chalkboard teaching field.

Preferred layout:

```text
TOP
Q11 · SORT COLORS
FINAL ANALYSIS

CENTER
active teaching object

SIDE / SECONDARY
code or invariant evidence

BOTTOM
caption-safe zone
```

The active teaching object changes phase-by-phase:
- complexity lanes,
- code/invariant mistake proof,
- compact edge-case array strips.

---

# 6. WORD-BASED SEMANTIC ANCHORS

Exact word IDs / exact frames are resolved only after final MP3 + exact sync JSON exist.

| Anchor ID | Exact narration phrase | Visual purpose |
|---|---|---|
| `S09_COMPARE` | `Now let’s compare both approaches` | open complexity comparison |
| `S09_COUNT_ON` | `Counting takes O of n time` | Counting time |
| `S09_COUNT_O1` | `O of one extra space` | Counting space |
| `S09_COUNT_TWO_PASS` | `it uses two passes` | Counting pass count |
| `S09_COUNT_PASS1` | `One pass to count` | first pass |
| `S09_COUNT_PASS2` | `another pass to rewrite the array` | second pass |
| `S09_DNF_ON` | `Dutch National Flag also takes O of n time` | DNF time |
| `S09_DNF_O1` | `O of one extra space` | DNF space |
| `S09_DNF_ONE_PASS` | `we classify the array in one pass` | DNF one-pass distinction |
| `S09_WHY_ON` | `Why is it O of n` | proof setup |
| `S09_MID_RIGHT` | `mid only moves to the right` | monotonic mid |
| `S09_HIGH_LEFT` | `high only moves to the left` | monotonic high |
| `S09_UNKNOWN_SHRINK` | `unknown region keeps shrinking` | O(n) proof |
| `S09_MISTAKE1_INTRO` | `most common mistake` | transition to mistakes |
| `S09_M1_CASE2` | `Suppose nums at mid is two` | 2-case |
| `S09_M1_SWAP` | `swap it with nums at high` | verified swap |
| `S09_M1_HIGH_LEFT` | `move high left` | high-- |
| `S09_M1_DONT_MID` | `do not move mid` | critical correction |
| `S09_M1_IMPORTANT` | `This is very important` | hero hold |
| `S09_M1_INCOMING` | `value that comes from the high side` | incoming source |
| `S09_M1_UNKNOWN` | `is still unknown` | unknown status |
| `S09_M1_SKIP` | `we may skip that value without checking it` | show failure if wrong |
| `S09_MISTAKE2_INTRO` | `Another common mistake` | next mistake |
| `S09_WRONG_LT` | `while mid is less than high` | wrong condition |
| `S09_NOT_ENOUGH` | `That is not enough` | reject |
| `S09_CORRECT_LE` | `while mid is less than or equal to high` | correct condition |
| `S09_LAST_UNKNOWN` | `mid and high are on the same index` | one unknown slot remains |
| `S09_MUST_PROCESS` | `must be processed` | final-slot proof |
| `S09_HIGH_INIT` | `high starts at the last valid index` | high init rule |
| `S09_N_MINUS_1` | `high is n minus one` | exact initialization |
| `S09_FOUR_REGIONS` | `there are four logical regions` | invariant count |
| `S09_NOT_THREE` | `not three` | reject wrong mental model |
| `S09_R0` | `Confirmed zeroes` | region 0 |
| `S09_R1` | `confirmed ones` | region 1 |
| `S09_RU` | `unknown values` | unknown region |
| `S09_R2` | `confirmed twos` | region 2 |
| `S09_EDGE_INTRO` | `Now let’s check edge cases` | edge-case phase |
| `S09_EDGE_SINGLE` | `array has only one value` | single element |
| `S09_EDGE_ZERO` | `all values are zero` | all-zero |
| `S09_EDGE_ONE` | `all values are one` | all-one |
| `S09_EDGE_TWO` | `all values are two` | all-two |
| `S09_EDGE_SORTED` | `array is already sorted` | sorted |
| `S09_EDGE_REVERSE` | `starts in reverse order` | reverse-ish |
| `S09_SAME_INVARIANT` | `same invariant still handles it` | invariant unification |
| `S09_NO_SPECIAL` | `No special case is required` | no branching |
| `S09_POWER` | `power of maintaining the regions correctly` | final teaching lock |

Repeated terms (`one`, `two`, `mid`, `high`, `pass`, `array`) must resolve by ordered word identity.

---

# 7. PHASE A — COMPLEXITY COMPARISON

## Beat — `S09_COMPARE`
### Spoken
`Now let’s compare both approaches...`

### Visual action
Scene08 code reduces to supporting opacity.

Create one board-direct comparison axis:

```text
COUNTING                DUTCH NATIONAL FLAG
```

No cards.

Under each method reserve three chalk rows:

```text
TIME
EXTRA SPACE
PASSES
```

Do not fill everything immediately.

---

# 8. COUNTING COMPLEXITY

## `S09_COUNT_ON`
Spoken:
`Counting takes O of n time...`

Reveal:

```text
COUNTING
TIME → O(n)
```

---

## `S09_COUNT_O1`
Reveal:

```text
EXTRA SPACE → O(1)
```

---

## `S09_COUNT_TWO_PASS`
Spoken:
`But it uses two passes.`

Reveal:

```text
PASSES → 2
```

This should become the visual differentiator.

---

## `S09_COUNT_PASS1`
Focus simple lane:

```text
PASS 1 → COUNT
```

Use one scan tracer under compact raw array.

---

## `S09_COUNT_PASS2`
Focus:

```text
PASS 2 → REWRITE
```

Second tracer.

No dry-run replay.

---

# 9. DNF COMPLEXITY

## `S09_DNF_ON`
Reveal:

```text
DNF
TIME → O(n)
```

Do not imply DNF improves asymptotic time over Counting.

---

## `S09_DNF_O1`
Reveal:

```text
EXTRA SPACE → O(1)
```

---

## `S09_DNF_ONE_PASS`
Reveal:

```text
CLASSIFICATION PASS → 1
```

Preferred final comparison:

```text
COUNTING                  DNF
O(n) time                 O(n) time
O(1) space                O(1) space
2 passes                  1 classification pass
```

No “winner” trophy.

The point is the follow-up requirement.

---

# 10. WHY DNF IS O(n) — UNKNOWN-LENGTH PROOF

## `S09_WHY_ON`
Spoken:
`Why is it O of n?`

### Visual action
Remove comparison clutter except DNF invariant.

Show:

```text
UNKNOWN LENGTH = high - mid + 1
```

Use mono.

---

## `S09_MID_RIGHT`
Spoken:
`Because mid only moves to the right...`

Show a conceptual pointer path:

```text
mid →
```

No actual testcase mutations.

Small formula reaction:

```text
mid++  ⇒ UNKNOWN shrinks by 1
```

---

## `S09_HIGH_LEFT`
Spoken:
`and high only moves to the left.`

Show:

```text
← high
```

Formula:

```text
high-- ⇒ UNKNOWN shrinks by 1
```

---

## `S09_UNKNOWN_SHRINK`
Spoken:
`The unknown region keeps shrinking.`

### Visual action
PartitionBandV2 UNKNOWN band contracts conceptually one slot at a time.

Show:

```text
n
→ n-1
→ n-2
→ ...
→ 0
```

This is the proof.

Important:
Do NOT say every array index is necessarily read exactly once at `mid`.
The correct invariant is that the UNKNOWN interval loses one position per iteration.

Conclude visually:

```text
at most n classifications
⇒ O(n)
```

This is stronger and fully truthful.

---

# 11. PHASE B — COMMON MISTAKE 1

## `S09_MISTAKE1_INTRO`
Spoken:
`Now let’s look at the most common mistake.`

Clear complexity proof.

Return to compact 2-case code block:

```python
else:
    swap(nums[mid], nums[high])
    high -= 1
```

and verified Step8 evidence.

---

# 12. MISTAKE 1 — WRONG `mid++` AFTER A 2

## `S09_M1_CASE2`
Spoken:
`Suppose nums at mid is two.`

Use verified Step8 before-state:

```text
[0,0,1,1,2,1,0,2,2,2]
low=2 mid=4 high=6
```

Focus:
```text
nums[mid] = 2
```

---

## `S09_M1_SWAP`
Spoken:
`We swap it with nums at high...`

Animate / show verified swap:

```text
idx4 2 ↔ idx6 0
```

Settle:

```text
[0,0,1,1,0,1,2,2,2,2]
```

---

## `S09_M1_HIGH_LEFT`
Spoken:
`and move high left.`

Show:

```text
high 6 → 5
```

---

## `S09_M1_DONT_MID`
Spoken:
`But do not move mid.`

Hero frame:

```text
mid = 4  STAYS
incoming nums[mid] = 0
```

No mid movement.

---

## `S09_M1_IMPORTANT`
Spoken:
`This is very important.`

Use exact-audio-supported comprehension hold.

Do not add more movement.

---

## `S09_M1_INCOMING`
Spoken:
`The value that comes from the high side...`

Trace source:

```text
idx6
```

---

## `S09_M1_UNKNOWN`
Spoken:
`is still unknown.`

Show source idx6 was inside prior:

```text
UNKNOWN = idx4..6
```

---

## `S09_M1_SKIP`
Spoken:
`If we move mid immediately... we may skip that value without checking it.`

### Visual action
Create a **wrong-path ghost**, not actual algorithm state:

Correct state:
```text
mid stays at 4
incoming 0 will be processed
```

Wrong ghost:
```text
mid 4 → 5   ✕
idx4 incoming 0 skipped
```

Use warn semantics.

Do NOT mutate the main correct state.

Show:

```text
SKIPPED UNKNOWN VALUE ✕
```

Then erase wrong ghost and restore correct code.

---

# 13. COMMON MISTAKE 2 — LOOP CONDITION

## `S09_MISTAKE2_INTRO`
Spoken:
`Another common mistake...`

Switch from 2-case evidence to loop condition.

---

## `S09_WRONG_LT`
Spoken:
`while mid is less than high.`

Show wrong code in teaching annotation:

```python
while mid < high:   ✕
```

This is intentionally a **wrong-code example**, visually separated from authoritative source.

---

## `S09_NOT_ENOUGH`
Spoken:
`That is not enough.`

Strike / warn the wrong comparator.

---

## `S09_CORRECT_LE`
Spoken:
`We need while mid is less than or equal to high.`

Reveal authoritative:

```python
while mid <= high:  ✓
```

---

# 14. WHY `<=` IS REQUIRED

## `S09_LAST_UNKNOWN`
Spoken:
`Because when mid and high are on the same index...`

Use verified pre-Step10 state:

```text
array = [0,0,0,1,1,1,2,2,2,2]
low=3
mid=5
high=5
```

Important:
Even though the value at idx5 visually happens to be `1`, it is still inside UNKNOWN until processed.

Show:

```text
UNKNOWN = { idx5 }
```

One-slot band.

---

## `S09_MUST_PROCESS`
Spoken:
`that last value is still unknown... and must be processed.`

Show:

```text
mid == high
does NOT mean done
```

Then simulate only the semantic action:

```text
inspect idx5
→ 1
→ mid becomes 6
→ now mid > high
```

No need to replay all earlier steps.

---

# 15. HIGH INITIALIZATION MISTAKE

## `S09_HIGH_INIT`
Spoken:
`Also remember... high starts at the last valid index...`

Show a compact index rail:

```text
0 1 2 3 4 5 6 7 8 9
```

Pointer high at 9.

---

## `S09_N_MINUS_1`
Spoken:
`so high is n minus one.`

Show:

```text
n = 10
last valid index = 9
high = n - 1
```

Then show wrong ghost:

```text
high = n = 10   ✕ outside array
```

Do not add another generic warning panel.

---

# 16. FOUR REGIONS, NOT THREE

## `S09_FOUR_REGIONS`
Spoken:
`One more important point... there are four logical regions...`

Return to invariant:

```text
0s | 1s | UNKNOWN | 2s
```

---

## `S09_NOT_THREE`
Spoken:
`not three.`

Briefly show wrong mental model:

```text
0s | 1s | 2s   ✕
```

Then erase it.

Why it is wrong:
during execution, unclassified values still exist.

---

## `S09_R0`
Focus:
```text
CONFIRMED 0s
```

## `S09_R1`
Focus:
```text
CONFIRMED 1s
```

## `S09_RU`
Focus:
```text
UNKNOWN
```

This region should receive the strongest emphasis.

## `S09_R2`
Focus:
```text
CONFIRMED 2s
```

Settle full invariant.

---

# 17. PHASE C — EDGE CASES

## `S09_EDGE_INTRO`
Spoken:
`Now let’s check edge cases.`

### Visual action
Clear wrong-code examples.

Use one central micro-array lane.

Each edge case replaces the previous one in the same geometry.

Do NOT show six cards simultaneously.

---

# 18. EDGE CASE — SINGLE ELEMENT

## `S09_EDGE_SINGLE`
Spoken:
`If the array has only one value...`

Use one example:

```text
[1]
```

Pointers:

```text
low=0
mid=0
high=0
```

UNKNOWN contains one slot.

Process:
```text
1 → mid++
mid=1 > high=0
```

Then:

```text
works ✓
```

Do not fully narrate unseen code.

Keep it as a compact invariant proof.

---

# 19. EDGE CASE — ALL ZEROES

## `S09_EDGE_ZERO`
Example:

```text
[0,0,0,0]
```

Conceptual micro-trace:

```text
each 0:
swap(low,mid) may self-swap / left swap
low++
mid++
```

End:

```text
0s full
UNKNOWN empty
```

No special branch.

---

# 20. EDGE CASE — ALL ONES

## `S09_EDGE_ONE`
Example:

```text
[1,1,1,1]
```

Conceptual:

```text
mid walks right
no swaps
```

End:
```text
1s full
UNKNOWN empty
```

---

# 21. EDGE CASE — ALL TWOS

## `S09_EDGE_TWO`
Example:

```text
[2,2,2,2]
```

Conceptual:
- repeated 2↔2 equal-value swaps;
- high moves left;
- mid may stay at 0 until unknown collapses.

This is useful because it reinforces:

```text
array can look unchanged
while state changes
```

Do not animate unnecessary identical-value flights.

---

# 22. EDGE CASE — ALREADY SORTED

## `S09_EDGE_SORTED`
Example:

```text
[0,0,1,1,2,2]
```

Show:
- 0s grow left;
- 1s accepted middle;
- 2s handled right;
- invariant remains valid.

Do not imply zero swaps overall: DNF may still perform self/equal-value swaps depending on pointer positions.

Phrase visually:

```text
ALREADY SORTED
STILL VALID
```

---

# 23. EDGE CASE — REVERSE ORDER

## `S09_EDGE_REVERSE`
Example:

```text
[2,2,1,1,0,0]
```

Show only a compressed conceptual transformation:

```text
2s pushed right
0s pushed left
1s remain middle
```

Do not run a new full trace.

The point is robustness of the invariant.

---

# 24. SAME INVARIANT FOR ALL CASES

## `S09_SAME_INVARIANT`
Spoken:
`the same invariant still handles it.`

Bring back one invariant strip:

```text
0s | 1s | UNKNOWN | 2s
```

Show each edge-case label briefly feeding into this same strip:

```text
single
all 0
all 1
all 2
sorted
reverse
```

No new algorithm branches appear.

---

# 25. NO SPECIAL CASE

## `S09_NO_SPECIAL`
Spoken:
`No special case is required.`

### Visual action
Show authoritative DNF branch structure once:

```text
0-case
1-case
2-case
```

and a small note:

```text
NO EXTRA IF
```

Do not invent edge-case-specific code.

---

# 26. FINAL TEACHING LOCK

## `S09_POWER`
Spoken:
`That is the power of maintaining the regions correctly.`

### Visual action
All secondary elements recede.

Center:

```text
INVARIANT
0s | 1s | UNKNOWN | 2s
```

Below:

```text
low  → 0-boundary
mid  → current UNKNOWN
high → 2-boundary
```

Small verified rule reminder:

```text
2-case → MID STAYS
```

This is the scene's final visual truth.

---

# 27. SCENE 09 → SCENE 10 HANDOFF

Scene10 is final recap + transferable pattern + roadmap continuation.

End Scene09 with:

```text
COUNTING
O(n), O(1), 2 passes

DNF
O(n), O(1), 1 classification pass

CORE INVARIANT
0s | 1s | UNKNOWN | 2s

CORE MISTAKE
2-case → MID STAYS

EDGE CASES
same invariant
```

Scene10 should inherit this compact truth and turn it into the final lesson recap.

Transition:

```text
T8 representation handoff
analysis → recap
```

No scene reset.

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

Scene09 motion vocabulary:

```text
compare
focus
trace
reject
correct
proof
micro-edge-case
invariant settle
```

No decorative motion.

---

# 29. COMPLEXITY MOTION RULE

Do not animate big-O as a number-counting effect.

Use semantic reveal only.

For `O(n)` proof:
- UNKNOWN band shrinks;
- `mid` moves right or `high` moves left;
- unknown length decreases.

This is the algorithmic proof.

---

# 30. WRONG-CODE VISUAL RULE

Wrong code must never be visually confused with authoritative code.

Wrong examples:

```python
while mid < high:
high = len(nums)
mid += 1  # after 2-case
```

must appear in:
- chalk margin;
- warn annotation;
- temporary ghost line;

not inside the authoritative source block unless clearly marked `WRONG`.

Then restore authoritative code.

---

# 31. MORPH CONTRACT

Allowed:

### Complexity comparison → invariant proof
```text
T8 REPRESENTATION_HANDOFF
```

### Correct ↔ wrong teaching example
```text
T0 STATE_CHANGE / ghost comparison
```

### Edge-case arrays
```text
T8 representation replacement
```

Same teaching lane, different example data.

Forbidden:
- morphing wrong code into correct code via glyph deformation;
- array values morphing into big-O notation;
- decorative true-path morphs.

---

# 32. SVG CONTRACT

Semantic SVG only:

```text
pass sweep traces
mid/right high/left proof arrows
UNKNOWN shrink brackets
wrong-path skipped-value arrow
last-unknown one-slot band
n-1 index bracket
edge-case invariant relations
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

# 33. TYPOGRAPHY CONTRACT

Mono:
- `O(n)`
- `O(1)`
- code conditions;
- pointer values;
- `n-1`;
- invariant formulas.

Patrick Hand:
- `MOST COMMON MISTAKE`
- `MID STAYS`
- `UNKNOWN`
- `NO SPECIAL CASE`
- edge-case labels.

No new fonts.

---

# 34. ANTIGRAVITY — FINAL AUDIO SYNC → EXACT FRAME PLAN

Execute only after final:

```text
09-complexity-mistakes-edgecases.mp3
09-complexity-mistakes-edgecases.json
```

or the exact final filenames.

## A. Audit first

Inspect:

```text
Scene08 final code/invariant state
existing complexity notation component
ArrayTrackV2
PointerLaneV2
PartitionBandV2
existing code component
RoughLine
RoughCurve
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

Do not create a generic comparison dashboard.

---

## B. Validate raw sync

Verify:
- exact final MP3;
- FPS;
- durationFrames;
- ordered word timestamps;
- unique stable IDs;
- all semantic anchors within duration.

Raw sync remains immutable.

---

## C. Stable ordered word IDs

Derive:

```text
W0000
W0001
...
```

Repeated words:
- one
- two
- mid
- high
- pass
- array
- unknown
- zero

must resolve by ordered word identity.

---

## D. Create semantic anchor manifest

Create:

```text
sync/09-complexity-mistakes-edgecases.anchors.json
```

Resolve every `S09_*` anchor.

Each:

```json
{
  "word_index": 0,
  "edge": "start",
  "note": "semantic action"
}
```

If any repeated phrase is ambiguous:
STOP and report.

Do not guess.

---

# 35. COMPLEXITY PROOF DATA

Antigravity should define the unknown-length concept directly:

```ts
const unknownLength = (mid: number, high: number) =>
  Math.max(0, high - mid + 1);
```

For each DNF iteration:
- 0-case: `mid++`
- 1-case: `mid++`
- 2-case: `high--`

Therefore:

```text
unknownLength decreases by exactly 1 per loop iteration
```

For length `n`:
```text
at most n iterations
⇒ O(n)
```

Use this for the visual proof.

---

# 36. WRONG `mid++` FAILURE DEMO

Use verified Step8:

```text
before:
[0,0,1,1,2,1,0,2,2,2]
l=2 m=4 h=6

correct after swap:
[0,0,1,1,0,1,2,2,2,2]
l=2 m=4 h=5
```

Correct:
```text
mid stays 4
incoming 0 is inspected next
```

Wrong ghost:
```text
mid becomes 5
idx4 incoming 0 skipped
```

This wrong ghost must never modify shared verified trace data.

Use separate `wrongDemoState`.

---

# 37. LOOP-CONDITION FAILURE DEMO

Use verified pre-Step10 state:

```text
[0,0,0,1,1,1,2,2,2,2]
l=3 m=5 h=5
```

With wrong:

```python
while mid < high
```

condition is false at `5 < 5`.

So algorithm would stop before processing the last UNKNOWN slot.

Use this exact logic.

Do not fabricate a different array.

---

# 38. HIGH-INITIALIZATION PROOF

For the locked master example:

```text
n=10
indices=0..9
high=n-1=9
```

Wrong:
```text
high=10
```

is outside the ArrayTrackV2 bounds.

Use index geometry as proof.

No need for runtime error simulation.

---

# 39. EDGE-CASE MICRO-STATE MODEL

Do not build full dry runs.

For each case use:

```ts
type EdgeCaseDemo = {
  label: string;
  input: number[];
  keyObservation: string;
};
```

Examples:

```text
single       [1]
all-zero     [0,0,0,0]
all-one      [1,1,1,1]
all-two      [2,2,2,2]
sorted       [0,0,1,1,2,2]
reverse      [2,2,1,1,0,0]
```

Each demo should only prove:
same 3 branch rules + same invariant.

---

# 40. PHRASE-WINDOW DERIVATION

For every anchor derive:

```text
phraseStartFrame
phraseEndFrame
nextAnchorFrame
availablePauseFrames
```

Then map:

```text
PRIMARY ACTION
SUPPORTING REACTION
SETTLE
```

Examples:

## `S09_UNKNOWN_SHRINK`

```text
CAUSE
"unknown region keeps shrinking"

PRIMARY
PartitionBandV2 narrows conceptually

SUPPORTING
unknownLength formula decrements

SETTLE
O(n) proof
```

## `S09_M1_DONT_MID`

```text
CAUSE
"do not move mid"

PRIMARY
mid pointer stays absolutely fixed

SUPPORTING
incoming 0 receives query state

SETTLE
MID STAYS
```

## `S09_CORRECT_LE`

```text
CAUSE
spoken corrected loop condition

PRIMARY
authoritative code line receives focus

SUPPORTING
one-slot UNKNOWN state appears

SETTLE
<= confirmed
```

---

# 41. NO GUESSED DURATIONS

If audio timing is tight:
- simplify edge-case micro-animation;
- use state cuts / deterministic short transitions;
- preserve semantic sequence;
- never overlap unrelated mistake explanations;
- never stretch audio.

---

# 42. CAPTIONS + DURATION

Same exact sync drives:

```text
Captions
semantic anchors
durationFrames
```

No separate caption timing.

Final valid frame:

```text
0 <= frame < durationFrames
```

---

# 43. REQUIRED POST-SYNC REVIEW CHECKPOINTS

Resolve exact semantic frames after sync:

1. `S09_COUNT_TWO_PASS`
   - Counting shows O(n), O(1), 2 passes.

2. `S09_DNF_ONE_PASS`
   - DNF shows O(n), O(1), 1 classification pass.

3. `S09_UNKNOWN_SHRINK`
   - O(n) proof from shrinking UNKNOWN, not a false “each index once” claim.

4. `S09_M1_DONT_MID`
   - Step8 state correct; mid stays 4.

5. `S09_M1_SKIP`
   - wrong ghost shows skipped incoming 0 only.

6. `S09_WRONG_LT`
   - wrong condition visibly separated from authoritative code.

7. `S09_CORRECT_LE`
   - correct `mid <= high`.

8. `S09_LAST_UNKNOWN`
   - mid=high=5; one UNKNOWN slot.

9. `S09_N_MINUS_1`
   - n=10 → high=9.

10. `S09_FOUR_REGIONS`
    - exactly four regions visible.

11. `S09_EDGE_SINGLE`
    - one-element case works.

12. `S09_EDGE_TWO`
    - equal 2 swaps may leave visible array unchanged while high moves.

13. `S09_EDGE_REVERSE`
    - reverse input uses same invariant.

14. `S09_POWER`
    - invariant is final scene truth.

---

# 44. ACCEPTANCE CHECKLIST

- [ ] Starts from Scene08 code + invariant.
- [ ] Counting complexity = O(n), O(1), 2 passes.
- [ ] DNF complexity = O(n), O(1), 1 classification pass.
- [ ] Does not falsely claim strict one-read-per-index behavior.
- [ ] O(n) proof uses shrinking UNKNOWN interval.
- [ ] Mistake 1 uses verified Step8.
- [ ] Wrong mid++ shown only as a ghost/error path.
- [ ] Correct algorithm keeps mid fixed in 2-case.
- [ ] Mistake 2 uses wrong `mid < high`.
- [ ] Correct condition is `mid <= high`.
- [ ] Proof uses verified `mid=high=5` state.
- [ ] high initialization = n-1.
- [ ] Four regions, not three.
- [ ] Edge cases do not require special algorithm branches.
- [ ] No full new dry runs for edge cases.
- [ ] No generic cards/dashboard.
- [ ] No guessed frame numbers.
- [ ] Final MP3 + sync are timing authority.
- [ ] Stable word IDs used.
- [ ] Same sync drives captions.
- [ ] Scene10 receives compact final analysis state.

---

# FINAL VISUAL STORY — ONE LINE

**Scene 09 begins from Scene 08’s code and four-region invariant, compares Counting and Dutch National Flag without misrepresenting either — both are `O(n)` time and `O(1)` extra space, but Counting uses a count pass plus a rewrite pass while DNF classifies in one pass — then proves DNF’s linear time from the invariant itself by showing that every loop iteration moves either `mid` right or `high` left so `high - mid + 1`, the UNKNOWN length, decreases exactly once per iteration; the scene then turns the verified Step 8 state into the main mistake proof, showing that after swapping a `2` with `high`, the incoming `0` is still unknown and would be skipped by a wrong `mid++`, uses the verified `mid=high=5` state to prove why the loop must be `mid <= high`, uses array-index geometry to prove `high=n-1`, restores the complete four-region mental model `0s | 1s | UNKNOWN | 2s`, and finally cycles through compact single-value, all-zero, all-one, all-two, already-sorted, and reverse-order micro-examples to show that no special-case code is needed because the same invariant and the same three branch rules handle every case.**
