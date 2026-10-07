# Q12 — Next Permutation (LC 31)
# Phase 9 · Scene 08 — Method 2 · Optimal Code
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Construct the optimal solution like a real coder, one spoken line/sub-line at a time, with character-by-character typing and temporary Array V2/pointer proofs; no future code spoilers and no permanent packed split-screen.

---

# 0. ABSOLUTE SOURCE PRIORITY

1. this approved word-based plan;
2. verified Q12 narration;
3. locked Q12 Phase-5 teaching truth;
4. previous scene's approved final state;
5. project `SKILL.md` / Word-Driven Motion Skill;
6. actual Foundation V2 / `@dsa/kit` implementation;
7. final scene MP3;
8. final exact word-sync JSON.

If a source does not support an assumption:

```text
UNRESOLVED — SOURCE REQUIRED
```

---

# 1. CONTINUITY IN

Scene08 inherits the solved trace. The trace representation reduces and hands into an empty production code surface.

---

# 2. EXACT NARRATION SOURCE

```text
Now let’s write the optimal solution.

First...

store the array length in n.

Then set i to n minus two.

We move i left...

while i is valid...

and nums at i is greater than or equal to nums at i plus one.

When this loop stops...

either we found the pivot...

or no pivot exists.

If i is still greater than or equal to zero...

we have a valid pivot.

Now set j to n minus one.

Move j left...

while nums at j is less than or equal to nums at i.

When that loop stops...

j is the first value from the right...

that is strictly greater than the pivot.

Now swap nums at i...

with nums at j.

Next...

set left to i plus one...

and right to n minus one.

While left is smaller than right...

swap nums at left...

with nums at right...

then move left forward...

and right backward.

This reverses the suffix in-place.

If no pivot was found...

i becomes minus one.

Then the swap block is skipped...

and left becomes zero automatically.

So the same reverse loop...

reverses the whole array.

That turns the largest permutation...

into the smallest permutation.

The important part is not memorising these lines.

Each line follows the same reasoning...

find the rightmost place that can increase...

make the smallest increase...

then minimize the suffix.
```

---

# 3. LOCKED SCENE TRUTH

Authoritative optimal implementation:
`n=len(nums)`
`i=n-2`
scan while `i>=0 and nums[i]>=nums[i+1]`
if pivot exists, find j with `nums[j] > nums[i]`, swap
set `left=i+1`, `right=n-1`
reverse while `left<right`
No-pivot: i=-1, skip swap block, left=0, reverse whole array.

---


# GLOBAL WORD-DRIVEN VISUAL LAW

This scene is **not a slide deck** and **not a dashboard**.

```text
NARRATION WORD / PHRASE
→ SHOW ONLY WHAT IS NEEDED NOW
→ ONE MAIN IDEA OWNS CENTER STAGE
→ MOTION MUST TEACH
→ SETTLE
→ REMOVE / REDUCE WHEN ITS JOB IS FINISHED
→ NEXT IDEA
```

Every motion must do at least one:

1. teach algorithm state;
2. show cause → effect;
3. direct attention;
4. preserve semantic continuity during transition.

If it does none of these, do not animate it.

Default visual budget:

```text
1 PRIMARY HERO
+ 1 DIRECT SUPPORT OBJECT
+ captions
```

More simultaneous objects are allowed only when algorithm truth requires them.


---


# FOUNDATION V2 / KIT-ONLY LOCK

Inspect the real repository first.

## Arrays

Every array representation—master, mini, conceptual, edge-case, code-proof, recap, temporary—must use the existing Array V2 grammar:

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
```

Permanent law:

```text
SLOTS STAY FIXED.
VALUES MOVE.
INDICES NEVER MOVE.
```

## Pointers / ranges / movement

Reuse existing Foundation V2 primitives where the actual API supports the semantic job:

```text
PointerLaneV2
existing range/partition band primitive
BezierFlight / existing deterministic movement helper
RoughLine
RoughCurve
ParametricArrow or existing arrow primitive
ChalkText
Captions
```

## Code

Code scenes reuse the existing production code component. No fake black IDE.

## Graphs

Inspect actual graph primitives first. If factorial growth is not supported by the current reusable graph component, EXTEND/CREATE a reusable kit-level complexity graph primitive. Never build a scene-local one-off graph.

## Decision order

```text
REUSE
→ EXTEND reusable primitive
→ CREATE reusable kit-level primitive only if genuinely absent
```


---

# 6. SCENE-SPECIFIC RULES

- Future code lines visually do not exist.
- Active line types character-by-character from exact later word sync.
- Code is center stage while writing; semantic proof temporarily takes center only to explain that line, then exits.
- No permanent 50/50 editor+array layout.
- No-pivot branch reuses the same code; do not invent a separate algorithm.
- All proof arrays are Array V2.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S08_OPEN` | `Now let’s write the optimal solution` | Empty live code surface. |
| `S08_N` | `store the array length in n` | Active code line `n = len(nums)`. |
| `S08_I_INIT` | `set i to n minus two` | Active i initialization. |
| `S08_WHILE_I` | `while i is valid and nums at i is greater than or equal to nums at i plus one` | Pivot-scan while condition. |
| `S08_I_LEFT` | `we move i left` | Pointer-decrement body. |
| `S08_LOOP_STOPS` | `When this loop stops either we found the pivot or no pivot exists` | Meaning of loop exit. |
| `S08_IF_I` | `If i is still greater than or equal to zero we have a valid pivot` | Pivot-exists branch guard. |
| `S08_J_INIT` | `set j to n minus one` | Successor pointer initialization. |
| `S08_WHILE_J` | `while nums at j is less than or equal to nums at i` | Successor scan condition. |
| `S08_J_LEFT` | `Move j left` | Successor scan movement. |
| `S08_J_MEANING` | `j is the first value from the right that is strictly greater than the pivot` | Meaning of successor loop exit. |
| `S08_SWAP` | `swap nums at i with nums at j` | Active swap line. |
| `S08_LEFT` | `set left to i plus one` | Reverse left boundary. |
| `S08_RIGHT` | `right to n minus one` | Reverse right boundary. |
| `S08_REV_WHILE` | `While left is smaller than right` | Reverse-loop guard. |
| `S08_REV_SWAP` | `swap nums at left with nums at right` | Reverse swap body. |
| `S08_LEFT_FWD` | `move left forward` | Left pointer movement. |
| `S08_RIGHT_BACK` | `right backward` | Right pointer movement. |
| `S08_REVERSE_MEANING` | `This reverses the suffix in-place` | In-place suffix reversal effect. |
| `S08_NO_PIVOT` | `If no pivot was found i becomes minus one` | No-pivot state. |
| `S08_SKIP_SWAP` | `Then the swap block is skipped` | Skipped pivot/successor branch. |
| `S08_LEFT_ZERO` | `left becomes zero automatically` | Why same code handles no-pivot case. |
| `S08_SAME_REVERSE` | `the same reverse loop reverses the whole array` | Reuse of same reverse loop. |
| `S08_LARGEST_SMALLEST` | `That turns the largest permutation into the smallest permutation` | Wraparound meaning. |
| `S08_NOT_MEMORIZE` | `The important part is not memorising these lines` | Reasoning over memorization. |
| `S08_REASON1` | `find the rightmost place that can increase` | First reasoning invariant. |
| `S08_REASON2` | `make the smallest increase` | Second reasoning invariant. |
| `S08_REASON3` | `then minimize the suffix` | Third reasoning invariant. |

No seconds or frame numbers belong here before final MP3 + exact sync exist.

---

# 8. WORD-BASED CHOREOGRAPHY


## BEAT 01 — `S08_OPEN`

### SPOKEN PHRASE
`Now let’s write the optimal solution`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Solved trace result reduces and hands off into the existing production code surface. No body lines exist yet.

### CENTER-STAGE HERO
Empty live code surface.

### KIT / EXISTING SYSTEM
Existing production code component.

### CAUSE
Narration begins implementation.

### EFFECT / MOTION
Representation handoff trace→code.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No future code.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep code surface.

### MINIMUM PERSISTENT STATE
Method2 code context.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 02 — `S08_N`

### SPOKEN PHRASE
`store the array length in n`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Active line types `n = len(nums)` character-by-character.

### CENTER-STAGE HERO
Active code line `n = len(nums)`.

### KIT / EXISTING SYSTEM
Existing code component.

### CAUSE
Narration introduces n.

### EFFECT / MOTION
After line completes, a small `n = array length` chalk relation may appear, then exit.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No i line yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Dim completed n line when next line starts.

### MINIMUM PERSISTENT STATE
Typed n line.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
n = len(nums)
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 03 — `S08_I_INIT`

### SPOKEN PHRASE
`set i to n minus two`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `i = n - 2` character-by-character.

### CENTER-STAGE HERO
Active i initialization.

### KIT / EXISTING SYSTEM
Existing code component + Array V2 + PointerLaneV2.

### CAUSE
Narration initializes pivot pointer.

### EFFECT / MOTION
After completion, bring a small master Array V2 proof to center; pointer i appears at second-last index. Then proof recedes.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No while condition yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Array proof exits; code returns hero.

### MINIMUM PERSISTENT STATE
n line dim + i line typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
i = n - 2
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 04 — `S08_WHILE_I`

### SPOKEN PHRASE
`while i is valid and nums at i is greater than or equal to nums at i plus one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `while i >= 0 and nums[i] >= nums[i + 1]:` progressively with narration; future body hidden.

### CENTER-STAGE HERO
Pivot-scan while condition.

### KIT / EXISTING SYSTEM
Existing code component + Array V2.

### CAUSE
Narration defines loop guard.

### EFFECT / MOTION
After line completes, briefly show two-slot Array V2 comparison with strict stop logic implied by `>=`; no full trace replay.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `i -= 1` before next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Semantic proof exits.

### MINIMUM PERSISTENT STATE
while condition typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
while i >= 0 and nums[i] >= nums[i + 1]:
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 05 — `S08_I_LEFT`

### SPOKEN PHRASE
`we move i left`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Indented active line types `i -= 1`.

### CENTER-STAGE HERO
Pointer-decrement body.

### KIT / EXISTING SYSTEM
Existing code component + PointerLaneV2.

### CAUSE
Narration states movement.

### EFFECT / MOTION
After line completes, mini proof shows i moving one slot left; values stay fixed.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next block.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
pivot-search loop complete.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
    i -= 1
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 06 — `S08_LOOP_STOPS`

### SPOKEN PHRASE
`When this loop stops either we found the pivot or no pivot exists`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Code reduces slightly; center shows two semantic outcomes: `i >= 0 → pivot found` and `i = -1 → no pivot`, revealed in narration order.

### CENTER-STAGE HERO
Meaning of loop exit.

### KIT / EXISTING SYSTEM
ChalkText + existing code line focus.

### CAUSE
Narration explains branch outcome.

### EFFECT / MOTION
No new code line typed during explanation.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No successor/reverse yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Outcome diagram reduces; code returns.

### MINIMUM PERSISTENT STATE
pivot-search meaning known.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 07 — `S08_IF_I`

### SPOKEN PHRASE
`If i is still greater than or equal to zero we have a valid pivot`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `if i >= 0:` character-by-character.

### CENTER-STAGE HERO
Pivot-exists branch guard.

### KIT / EXISTING SYSTEM
Existing code component + Array V2.

### CAUSE
Narration authorizes branch.

### EFFECT / MOTION
After line completes, compact master-array proof can show conceptual pivot marker; do not replay full trace.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No j line until next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
if branch line typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
if i >= 0:
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 08 — `S08_J_INIT`

### SPOKEN PHRASE
`set j to n minus one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type indented `j = n - 1`.

### CENTER-STAGE HERO
Successor pointer initialization.

### KIT / EXISTING SYSTEM
Existing code component + PointerLaneV2.

### CAUSE
Narration initializes j.

### EFFECT / MOTION
After completion, pointer j appears at last index on mini master proof then exits.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No successor while condition yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
j init typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
    j = n - 1
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 09 — `S08_WHILE_J`

### SPOKEN PHRASE
`while nums at j is less than or equal to nums at i`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `while nums[j] <= nums[i]:`.

### CENTER-STAGE HERO
Successor scan condition.

### KIT / EXISTING SYSTEM
Existing code component + Array V2.

### CAUSE
Narration defines rejection condition.

### EFFECT / MOTION
Brief semantic proof: values `<= pivot` are skipped; no exact trace replay.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No j decrement yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
successor while condition typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
    while nums[j] <= nums[i]:
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 10 — `S08_J_LEFT`

### SPOKEN PHRASE
`Move j left`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type indented `j -= 1`.

### CENTER-STAGE HERO
Successor scan movement.

### KIT / EXISTING SYSTEM
Existing code component + PointerLaneV2.

### CAUSE
Narration instructs j movement.

### EFFECT / MOTION
Mini proof moves j one slot left; values fixed.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No swap yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
successor loop complete.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
        j -= 1
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 11 — `S08_J_MEANING`

### SPOKEN PHRASE
`j is the first value from the right that is strictly greater than the pivot`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Code reduces; compact relation `first from right with nums[j] > nums[i]` becomes center.

### CENTER-STAGE HERO
Meaning of successor loop exit.

### KIT / EXISTING SYSTEM
ChalkText + Array V2.

### CAUSE
Narration explains j.

### EFFECT / MOTION
No code typing; explain why current j is valid.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No swap line before next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear proof.

### MINIMUM PERSISTENT STATE
successor meaning known.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 12 — `S08_SWAP`

### SPOKEN PHRASE
`swap nums at i with nums at j`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `nums[i], nums[j] = nums[j], nums[i]` character-by-character.

### CENTER-STAGE HERO
Active swap line.

### KIT / EXISTING SYSTEM
Existing code component + Array V2 + deterministic swap helper.

### CAUSE
Narration states swap.

### EFFECT / MOTION
After completion, real Array V2 proof uses pivot/successor values from verified master trace only if current scene chooses to reuse them; values move, slots fixed. Then proof exits.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No left/right reverse setup yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Array proof exits; code hero returns.

### MINIMUM PERSISTENT STATE
swap line typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
    nums[i], nums[j] = nums[j], nums[i]
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 13 — `S08_LEFT`

### SPOKEN PHRASE
`set left to i plus one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `left = i + 1`.

### CENTER-STAGE HERO
Reverse left boundary.

### KIT / EXISTING SYSTEM
Existing code component + PointerLaneV2.

### CAUSE
Narration initializes left.

### EFFECT / MOTION
After completion, mini proof marks first suffix index only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No right line yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
left typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
left = i + 1
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 14 — `S08_RIGHT`

### SPOKEN PHRASE
`right to n minus one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `right = n - 1`.

### CENTER-STAGE HERO
Reverse right boundary.

### KIT / EXISTING SYSTEM
Existing code component + PointerLaneV2.

### CAUSE
Narration initializes right.

### EFFECT / MOTION
After line completes, mini proof shows both reverse endpoints on suffix.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No while reverse line yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
left/right typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
right = n - 1
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 15 — `S08_REV_WHILE`

### SPOKEN PHRASE
`While left is smaller than right`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `while left < right:`.

### CENTER-STAGE HERO
Reverse-loop guard.

### KIT / EXISTING SYSTEM
Existing code component + PointerLaneV2.

### CAUSE
Narration defines reversal condition.

### EFFECT / MOTION
Brief proof shows two pointers with space between; no swap yet.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No body lines.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
reverse guard typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
while left < right:
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 16 — `S08_REV_SWAP`

### SPOKEN PHRASE
`swap nums at left with nums at right`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `nums[left], nums[right] = nums[right], nums[left]`.

### CENTER-STAGE HERO
Reverse swap body.

### KIT / EXISTING SYSTEM
Existing code component + Array V2 + deterministic swap helper.

### CAUSE
Narration states swap.

### EFFECT / MOTION
After completion, mini Array V2 performs one generic end-to-end suffix swap; slots fixed.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No pointer increments yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
reverse swap line typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
    nums[left], nums[right] = nums[right], nums[left]
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 17 — `S08_LEFT_FWD`

### SPOKEN PHRASE
`move left forward`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `left += 1`.

### CENTER-STAGE HERO
Left pointer movement.

### KIT / EXISTING SYSTEM
Existing code component + PointerLaneV2.

### CAUSE
Narration states left movement.

### EFFECT / MOTION
Mini proof moves left inward one slot.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No right movement until next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
left update typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
    left += 1
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 18 — `S08_RIGHT_BACK`

### SPOKEN PHRASE
`right backward`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Type `right -= 1`.

### CENTER-STAGE HERO
Right pointer movement.

### KIT / EXISTING SYSTEM
Existing code component + PointerLaneV2.

### CAUSE
Narration states right movement.

### EFFECT / MOTION
Mini proof moves right inward one slot.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No loop result invented.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits.

### MINIMUM PERSISTENT STATE
right update typed.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.

### ACTIVE CODE TEXT TO TYPE
```python
    right -= 1
```

Type character-by-character only when narration reaches this code idea. Future code remains nonexistent.



## BEAT 19 — `S08_REVERSE_MEANING`

### SPOKEN PHRASE
`This reverses the suffix in-place`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Code reduces; one Array V2 suffix proof shows the same fixed slot shells with values reversed.

### CENTER-STAGE HERO
In-place suffix reversal effect.

### KIT / EXISTING SYSTEM
Array V2 + existing range/pointer primitives.

### CAUSE
Narration explains completed loop.

### EFFECT / MOTION
Cause→effect from loop body to reversed suffix.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No no-pivot branch yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear proof.

### MINIMUM PERSISTENT STATE
reverse loop meaning known.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 20 — `S08_NO_PIVOT`

### SPOKEN PHRASE
`If no pivot was found i becomes minus one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Center shows `i = -1` semantic outcome; code remains dim.

### CENTER-STAGE HERO
No-pivot state.

### KIT / EXISTING SYSTEM
ChalkText + existing code line focus.

### CAUSE
Narration introduces branch.

### EFFECT / MOTION
No new code typed because existing `if i >= 0` already handles it.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No whole-array reverse before next phrases.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep i=-1 relation.

### MINIMUM PERSISTENT STATE
no-pivot state.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 21 — `S08_SKIP_SWAP`

### SPOKEN PHRASE
`Then the swap block is skipped`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Existing `if i >= 0:` block visually dims/ghosts as skipped; no fake execution.

### CENTER-STAGE HERO
Skipped pivot/successor branch.

### KIT / EXISTING SYSTEM
Existing code component.

### CAUSE
Narration states control flow.

### EFFECT / MOTION
Direct attention through code path.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No reverse result yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep only needed `i=-1` and upcoming left line relation.

### MINIMUM PERSISTENT STATE
branch skipped.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 22 — `S08_LEFT_ZERO`

### SPOKEN PHRASE
`left becomes zero automatically`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Existing line `left = i + 1` refocuses; semantic equation `-1 + 1 = 0` appears.

### CENTER-STAGE HERO
Why same code handles no-pivot case.

### KIT / EXISTING SYSTEM
Existing code component + ChalkText.

### CAUSE
Narration explains left=0.

### EFFECT / MOTION
Cause→effect from i=-1 to left=0.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No final reversed array yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Equation exits.

### MINIMUM PERSISTENT STATE
left=0 for no-pivot branch.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 23 — `S08_SAME_REVERSE`

### SPOKEN PHRASE
`the same reverse loop reverses the whole array`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A small edge-case Array V2 `[3,2,1]` may now appear because narration discusses no-pivot behavior; reverse endpoints span full array and values reverse to `[1,2,3]` only as semantic proof.

### CENTER-STAGE HERO
Reuse of same reverse loop.

### KIT / EXISTING SYSTEM
Mini Array V2 + PointerLaneV2 + deterministic movement helper.

### CAUSE
Narration explains whole-array reversal.

### EFFECT / MOTION
Use Array V2, fixed slots, deterministic value movement; no second custom algorithm.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No other edge cases yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Proof exits after understanding.

### MINIMUM PERSISTENT STATE
no-pivot branch handled.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 24 — `S08_LARGEST_SMALLEST`

### SPOKEN PHRASE
`That turns the largest permutation into the smallest permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Compact `LARGEST → SMALLEST` relation replaces the concrete edge-case proof.

### CENTER-STAGE HERO
Wraparound meaning.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration states effect.

### EFFECT / MOTION
Semantic confirmation only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No complexity.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear relation.

### MINIMUM PERSISTENT STATE
optimal code complete.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 25 — `S08_NOT_MEMORIZE`

### SPOKEN PHRASE
`The important part is not memorising these lines`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Finished code reduces; line syntax becomes quiet while the reasoning chain returns center.

### CENTER-STAGE HERO
Reasoning over memorization.

### KIT / EXISTING SYSTEM
Existing code component + ChalkText.

### CAUSE
Narration shifts emphasis.

### EFFECT / MOTION
No retyping or full-code hero state.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No recap roadmap.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep compact code only as background context.

### MINIMUM PERSISTENT STATE
reasoning chain ready.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 26 — `S08_REASON1`

### SPOKEN PHRASE
`find the rightmost place that can increase`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Reasoning node `RIGHTMOST INCREASE` appears.

### CENTER-STAGE HERO
First reasoning invariant.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration recaps idea.

### EFFECT / MOTION
Focus node only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No later nodes early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep dim after next node.

### MINIMUM PERSISTENT STATE
reasoning chain.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 27 — `S08_REASON2`

### SPOKEN PHRASE
`make the smallest increase`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Add `SMALLEST GREATER`.

### CENTER-STAGE HERO
Second reasoning invariant.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration recaps.

### EFFECT / MOTION
Focus new node; previous dims.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No third node early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep chain.

### MINIMUM PERSISTENT STATE
reasoning chain.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 28 — `S08_REASON3`

### SPOKEN PHRASE
`then minimize the suffix`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Add `MINIMIZE SUFFIX`; chain completes.

### CENTER-STAGE HERO
Third reasoning invariant.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration finishes recap.

### EFFECT / MOTION
Show complete chain then settle.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No complexity yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Compress chain for Scene09 handoff.

### MINIMUM PERSISTENT STATE
optimal reasoning remembered.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



---

# 9. CONTINUITY OUT

Optimal code is complete but visually reduced; reasoning chain `RIGHTMOST INCREASE → SMALLEST GREATER → MINIMIZE SUFFIX` is ready to hand into Scene09 complexity.

---


# MANDATORY ANTIGRAVITY WORD-SYNC → EXACT FRAME-PLAN CONTRACT

This section is part of the approved Scene 08 plan.

The future MP3 + exact word-sync JSON provide **WHEN**.  
This document provides **WHAT / WHY / ORDER / STATE / ENTER / EXIT / KIT / NO-SPOILER**.

## Required inputs

1. this approved Scene 08 word plan;
2. final Scene 08 MP3;
3. exact Scene 08 word-sync JSON matching that MP3;
4. verified Q12 script;
5. verified Q12 teaching trace where algorithm state is involved;
6. actual previous-scene implemented final state;
7. actual Foundation V2 / repo components;
8. authoritative project FPS/audio-sync helper.

If MP3 or sync JSON is missing:

```text
SCENE 08 FRAME PLAN: BLOCKED
REASON: EXACT AUDIO SOURCE REQUIRED
```

No WPM estimate. No guessed seconds. No guessed frames.

## Do not reduce this plan

Do NOT:

- summarize beats;
- merge beats because timing is tight;
- remove spoken-value reveals;
- remove code-typing beats;
- remove pointer moves;
- remove cleanup/exit;
- drop `WHAT MUST NOT APPEAR YET`;
- pre-reveal future information;
- replace semantic motion with generic fades.

If a real timing window is short, simplify motion amplitude/complexity—not semantic content.

## Raw sync is immutable

Assign ordered stable IDs:

```text
W0000
W0001
W0002
...
```

Keep:

```text
raw_sync_text
normalized_script_phrase
```

Repeated words resolve by ordered identity. Ambiguous mapping:

```text
UNRESOLVED — SOURCE REQUIRED
```

## Resolve every anchor

For every `S08_*` anchor derive:

```text
anchor_id
normalized_phrase
start_word_id
end_word_id
start_time
end_time
start_frame
end_frame_exclusive
next_anchor_start_word_id
next_anchor_start_time
next_anchor_start_frame
available_pause_seconds
available_pause_frames
```

Write the scene anchor manifest using the real project naming convention, e.g.:

```text
sync/08-optimal-code.anchors.json
```

## Frame convention

Use the actual project `audioSyncV2` or current equivalent.

```text
[startFrame, endFrameExclusive)
```

If `duration_frames = N`, valid rendered frames are `0..N-1`; `N` is the exclusive boundary.

## Sub-actions

Do not invent percentage timing.

Bind actions to actual words/subphrases or real pauses.

Pointer movement starts only when the movement phrase is spoken.  
Swap movement starts only when the swap phrase is spoken.  
Character typing is distributed deterministically across the exact spoken code window.

## Holds

Use only real pauses from sync. Never invent a comprehension hold or extend scene duration.

## Geometry

No guessed pixels.

Derive from actual component geometry, kit constants, slot centers, pointer lanes, code layout, roadmap/problem-opener bounds, and deterministic functions.

If unresolved:

```text
UNRESOLVED — SOURCE REQUIRED
```

## Component audit

Create `REUSE_EXTEND_CREATE.md` with:

```text
REUSE / EXTEND / CREATE
actual repo path
actual export/helper
reason
```

## Exact frame-wise plan output

For every approved beat preserve:

```text
BEAT
ANCHOR
NARRATION
WORD IDs
AUDIO start/end
FRAMES start/endExclusive
AVAILABLE REAL PAUSE

STATE BEFORE
WHAT APPEARS NOW
CENTER-STAGE HERO
CAUSE
PRIMARY SEMANTIC REACTION
MOVEMENT / MUTATION
SUPPORTING REACTION
COMPREHENSION HOLD
CLEANUP / EXIT
PERSISTENT STATE
STATE AFTER
COMPONENTS / ACTUAL IMPORT PATHS
MOTION PURPOSE
WHAT MUST NOT APPEAR YET
VALIDATION
```

## Code scenes

```text
spoken code idea
→ active line types character-by-character
→ future lines stay nonexistent
→ line completes
→ semantic proof may take center
→ proof exits/reduces
→ code returns as hero
```

## Captions

Same exact sync source as visual anchors. No second timing authority.

## PASS requires

```text
approved anchors resolved          = ALL
dropped semantic beats             = 0
guessed timings                    = 0
guessed frames                     = 0
guessed coordinates                = 0
future-state spoilers              = 0
generic replacement components     = 0
algorithm-state mismatches         = 0
caption timing sources             = 1
unresolved source requirements     = 0
```

Only after frame-plan QA passes:

```text
WORD PLAN
→ exact word sync
→ exact frame plan
→ frame QA
→ IMPLEMENT
→ render exact semantic checkpoints
→ visual/state QA
→ auto-correct
→ PASS
```


---

# FINAL WORD-PLAN SELF-AUDIT

```text
SCRIPT SEMANTIC BEATS COVERED      = 28
GUESSED SECONDS                    = 0
GUESSED FRAMES                     = 0
GUESSED PIXEL COORDINATES          = 0
GENERIC ARRAY COMPONENTS           = 0
FUTURE-SOLUTION SPOILERS           = 0
DECORATIVE-ONLY MOTION             = 0
RAW SYNC MODIFICATIONS             = 0
```
