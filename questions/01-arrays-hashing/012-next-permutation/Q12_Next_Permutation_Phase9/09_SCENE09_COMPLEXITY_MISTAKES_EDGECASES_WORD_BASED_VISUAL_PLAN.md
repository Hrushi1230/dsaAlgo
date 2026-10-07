# Q12 — Next Permutation (LC 31)
# Phase 9 · Scene 09 — Complexity + Common Mistakes + Edge Cases
## WORD-BASED VISUAL PLAN — SEMANTIC FRAME PLAN WITHOUT GUESSED TIME

**Scene purpose:** Explain why the optimal method is O(n) and O(1) using actual scan/reversal causes and curve graphs, contrast factorial brute force without inventing unsupported exact cost, then teach each common mistake/edge case one at a time.

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

Scene09 inherits completed optimal code/reasoning; code reduces before complexity owns center.

---

# 2. EXACT NARRATION SOURCE

```text
Now let’s look at the complexity.

The pivot scan moves from right to left.

In the worst case...

it can inspect the whole array.

The successor scan also moves from right to left...

over at most the array length.

And the final reverse...

touches at most the suffix once.

These are separate linear passes.

We do not multiply them.

So the total time complexity is...

O of n.

And we only use a few index variables...

so the extra space is...

O of one.

Now compare that with brute force.

With n distinct values...

there can be n factorial permutations.

Generating and storing all of them is already factorial-scale work...

and sorting them adds even more work.

The optimal method works directly on the current array.

There are a few mistakes to avoid.

For the pivot...

we need a strict increase.

We are looking for...

nums at i smaller than nums at i plus one.

Equal values do not qualify.

For the successor...

we also need a value strictly greater than the pivot.

Equal is not enough.

Another mistake...

is choosing any greater value from the suffix.

We need the smallest possible increase.

That is why we scan from the right.

And after the swap...

reverse from i plus one.

Do not reverse from i.

Now consider a fully decreasing array...

three... two... one.

There is no pivot.

So this is already the largest permutation.

Reverse the whole array...

and we get...

one... two... three.

If the array is already increasing...

like one... two... three...

the pivot is near the right side...

so only a small suffix changes.

For a single value...

there is nothing to change.

And duplicate values are also handled naturally...

because both important comparisons are strict.

No special duplicate case is needed.
```

---

# 3. LOCKED SCENE TRUTH

Verified complexity:
pivot scan ≤ n
successor scan ≤ n
reverse ≤ n
sequential passes add: ≤3n → O(n)
fixed index variables → O(1) extra space

Brute comparison:
with n distinct values there can be n! permutations; generation/storage factorial-scale; sorting adds further work.

Edge truths:
strict `<` pivot
strict `>` successor
reverse from i+1
[3,2,1] → [1,2,3]
already increasing: pivot near right
single value unchanged
duplicates require no special branch.

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

- Complexity curves explain mathematical growth, never fake benchmark data.
- Sequential passes are added, not multiplied.
- Do not invent one exact combined brute-force Big-O for the specific generate+deduplicate+sort code.
- Only one mistake/edge case owns center at a time.
- All concrete arrays use Array V2.
- `[1,2,3]` from the wraparound result is reused semantically for the already-increasing example; do not duplicate it unnecessarily.

---

# 7. SEMANTIC ANCHOR MANIFEST — NO TIME / NO FRAMES

| Anchor ID | Exact narration phrase | Center-stage purpose |
|---|---|---|
| `S09_OPEN` | `Now let’s look at the complexity` | Complexity explanation stage. |
| `S09_PIVOT_SCAN` | `The pivot scan moves from right to left` | Pivot scan direction. |
| `S09_PIVOT_WORST` | `In the worst case it can inspect the whole array` | Why pivot scan is linear. |
| `S09_SUCCESSOR_SCAN` | `The successor scan also moves from right to left over at most the array length` | Successor scan is linear. |
| `S09_REVERSE_SCAN` | `the final reverse touches at most the suffix once` | Reverse is linear. |
| `S09_SEPARATE` | `These are separate linear passes` | Additive-pass reasoning. |
| `S09_NOT_MULTIPLY` | `We do not multiply them` | Why sequential loops do not multiply. |
| `S09_TIME` | `So the total time complexity is O of n` | Total time O(n). |
| `S09_FEW_VARS` | `we only use a few index variables` | Constant number of variables. |
| `S09_SPACE` | `the extra space is O of one` | Extra-space O(1). |
| `S09_COMPARE_BRUTE` | `Now compare that with brute force` | Method comparison setup. |
| `S09_N_FACTORIAL` | `With n distinct values there can be n factorial permutations` | Brute candidate growth n!. |
| `S09_GENERATE_STORE` | `Generating and storing all of them is already factorial-scale work` | Why brute is factorial-scale in work/memory. |
| `S09_SORT_ADDS` | `sorting them adds even more work` | Additional brute overhead. |
| `S09_DIRECT` | `The optimal method works directly on the current array` | Direct in-place optimal processing. |
| `S09_MISTAKES` | `There are a few mistakes to avoid` | Mistake section transition. |
| `S09_PIVOT_STRICT` | `For the pivot we need a strict increase We are looking for nums at i smaller than nums at i plus one` | Correct pivot strict condition. |
| `S09_EQUAL_NO` | `Equal values do not qualify` | Equality failure. |
| `S09_SUCCESSOR_STRICT` | `For the successor we also need a value strictly greater than the pivot` | Correct successor strict condition. |
| `S09_EQUAL_NOT_ENOUGH` | `Equal is not enough` | Successor equality rejection. |
| `S09_ANY_GREATER` | `Another mistake is choosing any greater value from the suffix` | Wrong arbitrary-greater choice. |
| `S09_SMALLEST_INCREASE` | `We need the smallest possible increase` | Correct minimal successor choice. |
| `S09_SCAN_RIGHT_REASON` | `That is why we scan from the right` | Why right scan works. |
| `S09_REVERSE_START` | `after the swap reverse from i plus one` | Correct reversal start. |
| `S09_NOT_I` | `Do not reverse from i` | Off-by-one mistake. |
| `S09_DESC` | `Now consider a fully decreasing array three two one` | No-pivot edge-case input. |
| `S09_NO_PIVOT` | `There is no pivot` | No-pivot outcome. |
| `S09_LARGEST` | `this is already the largest permutation` | Why no pivot means maximal permutation. |
| `S09_REV_WHOLE` | `Reverse the whole array` | Wraparound action. |
| `S09_WRAP_RESULT` | `we get one two three` | Wraparound result. |
| `S09_ALREADY_INC` | `If the array is already increasing like one two three` | Already-increasing edge case. |
| `S09_PIVOT_NEAR_RIGHT` | `the pivot is near the right side so only a small suffix changes` | Why work may be small on this input. |
| `S09_SINGLE` | `For a single value there is nothing to change` | Single-element edge case. |
| `S09_DUPLICATES` | `duplicate values are also handled naturally because both important comparisons are strict` | Why duplicates need no special handling. |
| `S09_NO_SPECIAL` | `No special duplicate case is needed` | No special-case conclusion. |

No seconds or frame numbers belong here before final MP3 + exact sync exist.

---

# 8. WORD-BASED CHOREOGRAPHY


## BEAT 01 — `S09_OPEN`

### SPOKEN PHRASE
`Now let’s look at the complexity`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Code/reasoning chain reduces. A clean reusable complexity-graph stage enters with empty axes/guide only.

### CENTER-STAGE HERO
Complexity explanation stage.

### KIT / EXISTING SYSTEM
Reusable kit-level complexity graph primitive after repo audit.

### CAUSE
Narration opens complexity.

### EFFECT / MOTION
Representation handoff code→complexity; no curve drawn before its reason is spoken.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No O(n) label/curve yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep graph stage.

### MINIMUM PERSISTENT STATE
Empty complexity stage.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 02 — `S09_PIVOT_SCAN`

### SPOKEN PHRASE
`The pivot scan moves from right to left`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A mini Array V2 scan strip appears temporarily above/beside the graph; pointer traverses conceptually right→left without using the full master trace.

### CENTER-STAGE HERO
Pivot scan direction.

### KIT / EXISTING SYSTEM
Mini Array V2 + PointerLaneV2 + complexity graph stage.

### CAUSE
Narration names first source of work.

### EFFECT / MOTION
Show one directional pass.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No complexity class yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep relation into worst-case phrase.

### MINIMUM PERSISTENT STATE
scan concept.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 03 — `S09_PIVOT_WORST`

### SPOKEN PHRASE
`In the worst case it can inspect the whole array`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
The scan spans all n positions conceptually; graph now draws a linear `work vs n` curve for this pass.

### CENTER-STAGE HERO
Why pivot scan is linear.

### KIT / EXISTING SYSTEM
Reusable complexity graph + Array V2/PointerLaneV2.

### CAUSE
Narration gives worst-case amount of work.

### EFFECT / MOTION
Cause→effect: up to n inspected positions → linear growth curve.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No total O(n) yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Let curve settle, then reuse graph for next pass.

### MINIMUM PERSISTENT STATE
pivot scan O(n) evidence.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 04 — `S09_SUCCESSOR_SCAN`

### SPOKEN PHRASE
`The successor scan also moves from right to left over at most the array length`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Pivot-scan proof recedes. Same graph stage re-labels current cause as `SUCCESSOR SCAN`; another linear relationship is drawn using same axes.

### CENTER-STAGE HERO
Successor scan is linear.

### KIT / EXISTING SYSTEM
Reusable complexity graph + mini pointer proof.

### CAUSE
Narration states second pass.

### EFFECT / MOTION
Show at-most-n scan, not a replay of master trace.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No multiplication/addition conclusion yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep linear-pass evidence compact.

### MINIMUM PERSISTENT STATE
successor scan O(n) evidence.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 05 — `S09_REVERSE_SCAN`

### SPOKEN PHRASE
`the final reverse touches at most the suffix once`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Graph stage now represents reversal: two pointers consume a suffix from both ends; total touched positions proportional to suffix length ≤ n.

### CENTER-STAGE HERO
Reverse is linear.

### KIT / EXISTING SYSTEM
Reusable complexity graph + Mini Array V2 + PointerLaneV2.

### CAUSE
Narration states third pass.

### EFFECT / MOTION
Cause→effect from one suffix traversal to linear growth.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No final complexity formula yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep three pass labels as compact breadcrumbs only.

### MINIMUM PERSISTENT STATE
three separate linear passes known.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 06 — `S09_SEPARATE`

### SPOKEN PHRASE
`These are separate linear passes`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Center shows symbolic work expression `n + n + n` (or tighter `≤ n + n + n`) rather than three full graphs.

### CENTER-STAGE HERO
Additive-pass reasoning.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration says separate.

### EFFECT / MOTION
Transform pass breadcrumbs into additive expression.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `n*n*n`.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep expression for next phrase.

### MINIMUM PERSISTENT STATE
additive linear work.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 07 — `S09_NOT_MULTIPLY`

### SPOKEN PHRASE
`We do not multiply them`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A wrong `n × n × n` appears only as a crossed-out misconception beside the correct additive expression, then is erased.

### CENTER-STAGE HERO
Why sequential loops do not multiply.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration rejects multiplication.

### EFFECT / MOTION
Cause→effect: sequential passes add costs.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No nested-loop claim.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Erase wrong expression.

### MINIMUM PERSISTENT STATE
correct additive expression remains.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 08 — `S09_TIME`

### SPOKEN PHRASE
`So the total time complexity is O of n`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Expression simplifies visually `≤ 3n → O(n)`; linear curve becomes center and draws/settles.

### CENTER-STAGE HERO
Total time O(n).

### KIT / EXISTING SYSTEM
Reusable complexity graph + ChalkText.

### CAUSE
Narration states result.

### EFFECT / MOTION
Connect equation to linear curve; this is mathematical growth, not benchmark data.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No space complexity yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep compact O(n) only after curve explanation.

### MINIMUM PERSISTENT STATE
time O(n).

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 09 — `S09_FEW_VARS`

### SPOKEN PHRASE
`we only use a few index variables`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Linear-time graph reduces. Show only small fixed set of variable labels `i, j, left, right, n`; do not show code editor.

### CENTER-STAGE HERO
Constant number of variables.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration gives space reason.

### EFFECT / MOTION
Variable count stays fixed as input size conceptually grows.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No O(1) label before next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep fixed-variable visual.

### MINIMUM PERSISTENT STATE
space evidence.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 10 — `S09_SPACE`

### SPOKEN PHRASE
`the extra space is O of one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Reusable graph shows a flat constant-space line labeled `O(1)`; variable labels remain as one support object.

### CENTER-STAGE HERO
Extra-space O(1).

### KIT / EXISTING SYSTEM
Reusable complexity graph + ChalkText.

### CAUSE
Narration states result.

### EFFECT / MOTION
Cause→effect: fixed variable count → flat growth curve.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No brute comparison yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear variable labels after curve settles.

### MINIMUM PERSISTENT STATE
space O(1).

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 11 — `S09_COMPARE_BRUTE`

### SPOKEN PHRASE
`Now compare that with brute force`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
O(1) graph exits. Complexity stage prepares a comparison mode; no new curve until narration describes brute.

### CENTER-STAGE HERO
Method comparison setup.

### KIT / EXISTING SYSTEM
Reusable complexity graph.

### CAUSE
Narration requests comparison.

### EFFECT / MOTION
Representation handoff only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No factorial curve early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep graph stage.

### MINIMUM PERSISTENT STATE
comparison ready.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 12 — `S09_N_FACTORIAL`

### SPOKEN PHRASE
`With n distinct values there can be n factorial permutations`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Factorial curve appears and `n!` label writes in; no fake benchmark numbers.

### CENTER-STAGE HERO
Brute candidate growth n!.

### KIT / EXISTING SYSTEM
Reusable kit-level complexity graph with factorial support.

### CAUSE
Narration states exact combinatorial count.

### EFFECT / MOTION
Mathematical factorial growth curve draws.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No sort-cost specifics beyond later narration.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep factorial curve.

### MINIMUM PERSISTENT STATE
brute factorial growth.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 13 — `S09_GENERATE_STORE`

### SPOKEN PHRASE
`Generating and storing all of them is already factorial-scale work`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Factorial curve remains; a compact `GENERATE + STORE` support label attaches to `n!`.

### CENTER-STAGE HERO
Why brute is factorial-scale in work/memory.

### KIT / EXISTING SYSTEM
Complexity graph + ChalkText.

### CAUSE
Narration explains burden.

### EFFECT / MOTION
No invented exact operation count or bytes.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No sorting comparison yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep curve for next phrase.

### MINIMUM PERSISTENT STATE
n! burden.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 14 — `S09_SORT_ADDS`

### SPOKEN PHRASE
`sorting them adds even more work`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A `+ SORTING` note appears after factorial generation; do not invent a precise combined Big-O because the script intentionally avoids one.

### CENTER-STAGE HERO
Additional brute overhead.

### KIT / EXISTING SYSTEM
ChalkText + graph.

### CAUSE
Narration adds sorting cost.

### EFFECT / MOTION
Show `n! generation/storage + sorting overhead` conceptually.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No unsupported exact final brute complexity.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear comparison stage after next phrase.

### MINIMUM PERSISTENT STATE
brute worse than direct.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 15 — `S09_DIRECT`

### SPOKEN PHRASE
`The optimal method works directly on the current array`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Factorial curve recedes; master Array V2 appears center with one direct transformation arrow/process label, not all intermediate states.

### CENTER-STAGE HERO
Direct in-place optimal processing.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText/RoughLine.

### CAUSE
Narration contrasts methods.

### EFFECT / MOTION
Show one-array identity vs enumerating many arrangements.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No mistake content yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear comparison visuals.

### MINIMUM PERSISTENT STATE
master/optimal identity.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 16 — `S09_MISTAKES`

### SPOKEN PHRASE
`There are a few mistakes to avoid`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Master array reduces. `COMMON MISTAKES` heading enters; only one mistake at a time will occupy center.

### CENTER-STAGE HERO
Mistake section transition.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration opens mistakes.

### EFFECT / MOTION
No mistake list shown all at once.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No future mistake text.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep section identity.

### MINIMUM PERSISTENT STATE
mistake stage.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 17 — `S09_PIVOT_STRICT`

### SPOKEN PHRASE
`For the pivot we need a strict increase We are looking for nums at i smaller than nums at i plus one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A two-slot Array V2 comparison and code-like relation `nums[i] < nums[i+1]` appear; `<` is hero.

### CENTER-STAGE HERO
Correct pivot strict condition.

### KIT / EXISTING SYSTEM
Mini Array V2 + ChalkText.

### CAUSE
Narration states rule.

### EFFECT / MOTION
Show correct relation only at first.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No equality example until next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep strict sign.

### MINIMUM PERSISTENT STATE
pivot condition.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 18 — `S09_EQUAL_NO`

### SPOKEN PHRASE
`Equal values do not qualify`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Use a tiny two-slot Array V2 `[4,4]`; `4 < 4` resolves false.

### CENTER-STAGE HERO
Equality failure.

### KIT / EXISTING SYSTEM
Mini Array V2 + ChalkText.

### CAUSE
Narration gives duplicate pitfall.

### EFFECT / MOTION
Cause→effect: equal → strict `<` false.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No `<=` as valid option.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear tiny example.

### MINIMUM PERSISTENT STATE
strict pivot rule remembered.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 19 — `S09_SUCCESSOR_STRICT`

### SPOKEN PHRASE
`For the successor we also need a value strictly greater than the pivot`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Two-value conceptual comparison shows `nums[j] > nums[i]`; `>` is hero.

### CENTER-STAGE HERO
Correct successor strict condition.

### KIT / EXISTING SYSTEM
Mini Array V2 + ChalkText.

### CAUSE
Narration states rule.

### EFFECT / MOTION
Show strict greater criterion.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No equal value accepted.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep into next phrase.

### MINIMUM PERSISTENT STATE
successor rule.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 20 — `S09_EQUAL_NOT_ENOUGH`

### SPOKEN PHRASE
`Equal is not enough`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Conceptual equal pair resolves `>` false; no extra dataset is invented.

### CENTER-STAGE HERO
Successor equality rejection.

### KIT / EXISTING SYSTEM
Mini Array V2 + ChalkText.

### CAUSE
Narration emphasizes strictness.

### EFFECT / MOTION
Reject equality.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No next mistake yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear pair.

### MINIMUM PERSISTENT STATE
strict successor rule.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 21 — `S09_ANY_GREATER`

### SPOKEN PHRASE
`Another mistake is choosing any greater value from the suffix`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A conceptual suffix Array V2 contains multiple greater candidates; an arbitrary larger candidate is briefly selected and marked `TOO LARGE A JUMP`—without changing the master answer.

### CENTER-STAGE HERO
Wrong arbitrary-greater choice.

### KIT / EXISTING SYSTEM
Mini Array V2 + ChalkText.

### CAUSE
Narration names mistake.

### EFFECT / MOTION
Show why validity alone is insufficient.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No exact master successor trace replay.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep candidates for correction.

### MINIMUM PERSISTENT STATE
suffix candidate set.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 22 — `S09_SMALLEST_INCREASE`

### SPOKEN PHRASE
`We need the smallest possible increase`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Among conceptual candidates, smallest valid greater candidate becomes hero; arbitrary candidate fades.

### CENTER-STAGE HERO
Correct minimal successor choice.

### KIT / EXISTING SYSTEM
Mini Array V2.

### CAUSE
Narration states goal.

### EFFECT / MOTION
Selection changes, values do not need to swap.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No right-scan proof until next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep selected candidate.

### MINIMUM PERSISTENT STATE
minimal greater.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 23 — `S09_SCAN_RIGHT_REASON`

### SPOKEN PHRASE
`That is why we scan from the right`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Right-to-left pointer traverses the conceptual non-increasing suffix until first greater candidate; previous candidates exit.

### CENTER-STAGE HERO
Why right scan works.

### KIT / EXISTING SYSTEM
Mini Array V2 + PointerLaneV2.

### CAUSE
Narration connects method to minimality.

### EFFECT / MOTION
Cause→effect proof only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No full master trace.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear conceptual suffix after proof.

### MINIMUM PERSISTENT STATE
successor rule complete.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 24 — `S09_REVERSE_START`

### SPOKEN PHRASE
`after the swap reverse from i plus one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Show compact suffix-range notation `[i+1 ... n-1]` over an Array V2 track; correct range is highlighted.

### CENTER-STAGE HERO
Correct reversal start.

### KIT / EXISTING SYSTEM
Array V2 + reusable range band + ChalkText.

### CAUSE
Narration states range.

### EFFECT / MOTION
No values need to move.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No wrong range before next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep correct range.

### MINIMUM PERSISTENT STATE
correct reverse range.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 25 — `S09_NOT_I`

### SPOKEN PHRASE
`Do not reverse from i`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
A wrong band starting at `i` appears briefly crossed out, while correct `[i+1..]` remains.

### CENTER-STAGE HERO
Off-by-one mistake.

### KIT / EXISTING SYSTEM
Reusable range band + ChalkText.

### CAUSE
Narration rejects wrong start.

### EFFECT / MOTION
Contrast range boundaries only.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No actual reverse trace.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear wrong band.

### MINIMUM PERSISTENT STATE
correct range remains.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 26 — `S09_DESC`

### SPOKEN PHRASE
`Now consider a fully decreasing array three two one`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Create mini Array V2 one spoken value at a time `[3,2,1]`; no pivot marker yet.

### CENTER-STAGE HERO
No-pivot edge-case input.

### KIT / EXISTING SYSTEM
Mini Array V2.

### CAUSE
Narration introduces concrete edge case.

### EFFECT / MOTION
Reveal values on spoken tokens.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No output early.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep array.

### MINIMUM PERSISTENT STATE
[3,2,1].

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 27 — `S09_NO_PIVOT`

### SPOKEN PHRASE
`There is no pivot`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Right-to-left comparisons may be summarized by one scan that reaches past the left boundary with no valid `<`; label `NO PIVOT`.

### CENTER-STAGE HERO
No-pivot outcome.

### KIT / EXISTING SYSTEM
Mini Array V2 + PointerLaneV2 + ChalkText.

### CAUSE
Narration states result.

### EFFECT / MOTION
No need to replay detailed code trace.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No reverse result yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep input + no-pivot label.

### MINIMUM PERSISTENT STATE
[3,2,1], no pivot.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 28 — `S09_LARGEST`

### SPOKEN PHRASE
`this is already the largest permutation`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
`3 >= 2 >= 1` relation appears; label `LARGEST`.

### CENTER-STAGE HERO
Why no pivot means maximal permutation.

### KIT / EXISTING SYSTEM
ChalkText + Mini Array V2.

### CAUSE
Narration explains state.

### EFFECT / MOTION
No value movement.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No output yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep for reverse action.

### MINIMUM PERSISTENT STATE
largest state.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 29 — `S09_REV_WHOLE`

### SPOKEN PHRASE
`Reverse the whole array`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Whole-range band appears and values reverse using deterministic movement; slots remain fixed.

### CENTER-STAGE HERO
Wraparound action.

### KIT / EXISTING SYSTEM
Mini Array V2 + range band + deterministic value movement.

### CAUSE
Narration commands reverse.

### EFFECT / MOTION
Perform `[3,2,1] → [1,2,3]`.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No other edge cases simultaneously.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Settle output.

### MINIMUM PERSISTENT STATE
[1,2,3].

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 30 — `S09_WRAP_RESULT`

### SPOKEN PHRASE
`we get one two three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Read/focus `[1,2,3]` values in spoken order and label `SMALLEST` after readback.

### CENTER-STAGE HERO
Wraparound result.

### KIT / EXISTING SYSTEM
Mini Array V2 + ChalkText.

### CAUSE
Narration confirms output.

### EFFECT / MOTION
No new mutation.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No already-increasing interpretation until next phrase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep array briefly.

### MINIMUM PERSISTENT STATE
[1,2,3] smallest.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 31 — `S09_ALREADY_INC`

### SPOKEN PHRASE
`If the array is already increasing like one two three`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Reuse the same `[1,2,3]` Array V2 identity rather than recreate it; label changes from wrap result to `ALREADY INCREASING INPUT`.

### CENTER-STAGE HERO
Already-increasing edge case.

### KIT / EXISTING SYSTEM
Mini Array V2.

### CAUSE
Narration reuses values as a new input scenario.

### EFFECT / MOTION
Semantic role changes, values stay same.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No result yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep array.

### MINIMUM PERSISTENT STATE
input [1,2,3].

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 32 — `S09_PIVOT_NEAR_RIGHT`

### SPOKEN PHRASE
`the pivot is near the right side so only a small suffix changes`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Highlight rightmost valid pivot relation `2 < 3`; a short suffix band shows only the small affected tail conceptually. Do not execute full next permutation unless narration states it—it does not.

### CENTER-STAGE HERO
Why work may be small on this input.

### KIT / EXISTING SYSTEM
Mini Array V2 + PointerLaneV2 + range band.

### CAUSE
Narration describes structural behavior.

### EFFECT / MOTION
Attention to right-side pivot/suffix length.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No final `[1,3,2]` because script does not say it.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear example.

### MINIMUM PERSISTENT STATE
edge-case lesson complete.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 33 — `S09_SINGLE`

### SPOKEN PHRASE
`For a single value there is nothing to change`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
One-slot Array V2 `[x]` appears; `NO CHANGE` label settles. Use symbolic x or a source-supported value, not an invented numeric testcase.

### CENTER-STAGE HERO
Single-element edge case.

### KIT / EXISTING SYSTEM
One-slot Array V2 + ChalkText.

### CAUSE
Narration states behavior.

### EFFECT / MOTION
No movement.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No code special case invented.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Clear after understanding.

### MINIMUM PERSISTENT STATE
single-value rule.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 34 — `S09_DUPLICATES`

### SPOKEN PHRASE
`duplicate values are also handled naturally because both important comparisons are strict`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
Center shows only the two strict relations: `pivot: <` and `successor: >`, with a small duplicate-equality `=` between them rejected.

### CENTER-STAGE HERO
Why duplicates need no special handling.

### KIT / EXISTING SYSTEM
ChalkText.

### CAUSE
Narration states reasoning.

### EFFECT / MOTION
No array dashboard; use compact semantic relations.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No extra duplicate testcase.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Keep for final phrase.

### MINIMUM PERSISTENT STATE
strict comparisons.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



## BEAT 35 — `S09_NO_SPECIAL`

### SPOKEN PHRASE
`No special duplicate case is needed`

### STATE BEFORE
Inherited from the previous approved beat.

### WHAT APPEARS NOW
`SPECIAL DUPLICATE BRANCH` appears crossed out; strict `<` / `>` remain briefly.

### CENTER-STAGE HERO
No special-case conclusion.

### KIT / EXISTING SYSTEM
ChalkText/RoughLine.

### CAUSE
Narration closes edge cases.

### EFFECT / MOTION
Confirm then clear mistake/edge-case stage.

### STATE AFTER
Exactly the semantic result described by this beat.

### WHAT MUST NOT APPEAR YET
No recap yet.

### COMPREHENSION HOLD
Only if the future exact word-sync JSON contains a real pause.

### CLEANUP / EXIT
Exit all Scene09 teaching objects.

### MINIMUM PERSISTENT STATE
Complexity+mistake truths remembered.

### MOTION PURPOSE
Teach state / cause→effect / direct attention / semantic continuity.



---

# 9. CONTINUITY OUT

All complexity/mistake/edge-case objects clear. Scene10 begins with a clean recap stage.

---


# MANDATORY ANTIGRAVITY WORD-SYNC → EXACT FRAME-PLAN CONTRACT

This section is part of the approved Scene 09 plan.

The future MP3 + exact word-sync JSON provide **WHEN**.  
This document provides **WHAT / WHY / ORDER / STATE / ENTER / EXIT / KIT / NO-SPOILER**.

## Required inputs

1. this approved Scene 09 word plan;
2. final Scene 09 MP3;
3. exact Scene 09 word-sync JSON matching that MP3;
4. verified Q12 script;
5. verified Q12 teaching trace where algorithm state is involved;
6. actual previous-scene implemented final state;
7. actual Foundation V2 / repo components;
8. authoritative project FPS/audio-sync helper.

If MP3 or sync JSON is missing:

```text
SCENE 09 FRAME PLAN: BLOCKED
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

For every `S09_*` anchor derive:

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
sync/09-complexity-mistakes.anchors.json
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
SCRIPT SEMANTIC BEATS COVERED      = 35
GUESSED SECONDS                    = 0
GUESSED FRAMES                     = 0
GUESSED PIXEL COORDINATES          = 0
GENERIC ARRAY COMPONENTS           = 0
FUTURE-SOLUTION SPOILERS           = 0
DECORATIVE-ONLY MOTION             = 0
RAW SYNC MODIFICATIONS             = 0
```
