> **V3 9-scene lock:** Narration for this scene is unchanged from the re-audited V2 source. Timing remains intentionally unresolved until final MP3 + exact word sync.

# Q16 — Subarray Sum Equals K (LeetCode 560)
# Phase 9 · Scene 02 — Understand Question + Method1 Idea
## WORD-BASED VISUAL PLAN — NO GUESSED TIME · NO GUESSED FRAMES · PROJECT-SOURCE GROUNDED

---

**Scene purpose:** Understand Question + Method1 Idea.

---

# SOURCE PRIORITY

1. verified Phase-8 narration V3
2. verified Phases 1–5 algorithm truth
3. locked Phase-6 scene architecture
4. `SKILL.md`
5. `DSA_MASTER_PRODUCTION_SKILL_V3.md`
6. `DSA_WORD_DRIVEN_MOTION_SKILL_V2.md`
7. actual project repository / `@dsa/kit`
8. final MP3 + exact sync JSON

Missing implementation source → `UNRESOLVED — SOURCE REQUIRED`.

---

# PROJECT / KIT LOCK

```text
ARRAY SLOT         FIXED
ARRAY VALUE        FIXED

PREFIX POSITIONS   live on boundaries
ARRAY INDICES      live on array cells
THE TWO ARE NOT THE SAME
```

Method1 may change START / END / active range / running sum / answer.

Method2 may change current index / current prefix / needed prefix / frequency map / answer.

Verified supplied components usable semantically:

```text
ChalkText
RoughLine
RoughCurve
RoughBox
CountUp
Captions
ChannelLogoBadge
```

Important source restrictions:

```text
HashMapTable as supplied = index-specific → DO NOT USE AS-IS for frequency
MiniGraph = sorting-specific → DO NOT USE for Q16 complexity
Array V2 actual API = UNRESOLVED — SOURCE REQUIRED
Production code component API = UNRESOLVED — SOURCE REQUIRED
Roadmap API = UNRESOLVED — SOURCE REQUIRED
```

---

# PHASE-9 TIMING LOCK

No seconds. No frame numbers.

Actual supplied `audioSync.ts` later uses:

```text
Math.round(word.start * 30)
Math.round(word.end * 30)
```

Component defaults are never narration timing authority.

---

# CONTINUITY IN

Q16 is ACTIVE. No algorithm state exists yet.

---

# QUESTION-SPECIFIC VISUAL IDENTITY

```text
FIX START → EXTEND END → RUNNING SUM → COUNT MATCH
```

---

# HARD NO-SPOILER LAW

Future method state, code, result, complexity, map frequency, prefix value, pointer position, or roadmap progress does not exist visually before its narration anchor.

---

# SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact spoken phrase |
|---|---|
| `S02_A001` | For this lesson, we will use: |
| `S02_A002` | `[1, -1, 2, 1, 0, -2, 3]` |
| `S02_A003` | and `k` is three. |
| `S02_A004` | We are not looking for just one subarray. |
| `S02_A005` | We are not looking for the longest subarray. |
| `S02_A006` | We need to count every contiguous, non-empty subarray whose sum is exactly three. |
| `S02_A007` | For example … |
| `S02_A008` | `[2, 1]` |
| `S02_A009` | is contiguous … and its sum is three. |
| `S02_A010` | So that is one valid subarray. |
| `S02_A011` | Also … |
| `S02_A012` | `[3]` |
| `S02_A013` | by itself is a valid subarray. |
| `S02_A014` | One element can also form a subarray. |
| `S02_A015` | Now there is one important detail. |
| `S02_A016` | This array contains negative numbers. |
| `S02_A017` | So we cannot use the usual positive-number thinking like … |
| `S02_A018` | if the sum becomes too large … just stop or shrink. |
| `S02_A019` | Look at this tiny example. |
| `S02_A020` | `[4, -1]` |
| `S02_A021` | with `k = 3`. |
| `S02_A022` | After the first value, the sum is four. |
| `S02_A023` | Four is greater than three. |
| `S02_A024` | But if we continue … |
| `S02_A025` | four plus minus one becomes three. |
| `S02_A026` | So with negative numbers … |
| `S02_A027` | `sum greater than k` |
| `S02_A028` | does not mean we can safely stop. |
| `S02_A029` | Now let us build the straightforward correct method. |
| `S02_A030` | Choose one starting position. |
| `S02_A031` | Set the running sum to zero. |
| `S02_A032` | Then move the ending position to the right. |
| `S02_A033` | Every time we include one more value … |
| `S02_A034` | add that value to the running sum. |
| `S02_A035` | If the running sum becomes exactly `k` … |
| `S02_A036` | increase the answer. |
| `S02_A037` | Then continue. |
| `S02_A038` | When this start is finished … |
| `S02_A039` | move the start one position to the right … |
| `S02_A040` | reset the running sum … |
| `S02_A041` | and repeat. |
| `S02_A042` | So Method One is: |
| `S02_A043` | fix the start … |
| `S02_A044` | extend the end … |
| `S02_A045` | update the running sum … |
| `S02_A046` | and count every match. |
| `S02_A047` | Now let us execute it on the full array. |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 001 — `S02_A001`

### ANCHOR / SPOKEN PHRASE
> For this lesson, we will use:

### WHAT APPEARS NOW
Clear Scene01 goal text to a centered empty Array V2 track shell ready to receive the master example.

### CENTER-STAGE HERO
Empty master-array track.

### CAUSE
Narration reaches: `For this lesson, we will use:`

### EFFECT / MOTION
Prepare the representation; no values yet.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Q16 problem context.

### KIT / EXISTING SYSTEM
ArrayTrackV2 production system — API unresolved.

### MOTION PURPOSE
Set up the master example without pre-rendering values.


---

## BEAT 002 — `S02_A002`

### ANCHOR / SPOKEN PHRASE
> `[1, -1, 2, 1, 0, -2, 3]`

### WHAT APPEARS NOW
Populate the fixed seven array slots with `[1,-1,2,1,0,-2,3]`; reveal index row only if the production array system supports it.

### CENTER-STAGE HERO
Master array.

### CAUSE
Narration reaches: ``[1, -1, 2, 1, 0, -2, 3]``

### EFFECT / MOTION
Values appear in fixed slots; slots/values remain stationary.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Master array visible.

### KIT / EXISTING SYSTEM
ArrayTrackV2 / ArrayIndexRowV2 — API unresolved.

### MOTION PURPOSE
Introduce the locked teaching example.


---

## BEAT 003 — `S02_A003`

### ANCHOR / SPOKEN PHRASE
> and `k` is three.

### WHAT APPEARS NOW
Add a small `k = 3` support label near the array.

### CENTER-STAGE HERO
Master array + target.

### CAUSE
Narration reaches: `and `k` is three.`

### EFFECT / MOTION
Target becomes available for later sums.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Array + k=3.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Complete the master input.


---

## BEAT 004 — `S02_A004`

### ANCHOR / SPOKEN PHRASE
> We are not looking for just one subarray.

### WHAT APPEARS NOW
Show a crossed/erased `find one` note briefly beside the array.

### CENTER-STAGE HERO
`COUNT`, not `find one`.

### CAUSE
Narration reaches: `We are not looking for just one subarray.`

### EFFECT / MOTION
Reject one-solution interpretation.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Array + k=3 + COUNT objective.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine strike.

### MOTION PURPOSE
Remove first misconception.


---

## BEAT 005 — `S02_A005`

### ANCHOR / SPOKEN PHRASE
> We are not looking for the longest subarray.

### WHAT APPEARS NOW
Replace the previous rejected note with a crossed `longest` note.

### CENTER-STAGE HERO
`COUNT`, not longest.

### CAUSE
Narration reaches: `We are not looking for the longest subarray.`

### EFFECT / MOTION
Reject longest-range interpretation.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Count objective.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine strike.

### MOTION PURPOSE
Remove second misconception.


---

## BEAT 006 — `S02_A006`

### ANCHOR / SPOKEN PHRASE
> We need to count every contiguous, non-empty subarray whose sum is exactly three.

### WHAT APPEARS NOW
Center three words sequentially around the array: `CONTIGUOUS`, `NON-EMPTY`, `COUNT ALL`.

### CENTER-STAGE HERO
Problem constraints.

### CAUSE
Narration reaches: `We need to count every contiguous, non-empty subarray whose sum is exactly three.`

### EFFECT / MOTION
Each term gains emphasis without showing final answer.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Array + exact task.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Define the question precisely.


---

## BEAT 007 — `S02_A007`

### ANCHOR / SPOKEN PHRASE
> For example …

### WHAT APPEARS NOW
Keep the master array and prepare one quiet range bracket; do not select values yet.

### CENTER-STAGE HERO
Master array.

### CAUSE
Narration reaches: `For example …`

### EFFECT / MOTION
Example range scaffold enters.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Array + k.

### KIT / EXISTING SYSTEM
PartitionBandV2 or equivalent existing range grammar — API unresolved.

### MOTION PURPOSE
Prepare a concrete valid range.


---

## BEAT 008 — `S02_A008`

### ANCHOR / SPOKEN PHRASE
> `[2, 1]`

### WHAT APPEARS NOW
Highlight only indices 2..3 on the master array as the example `[2,1]`.

### CENTER-STAGE HERO
Range 2..3.

### CAUSE
Narration reaches: ``[2, 1]``

### EFFECT / MOTION
Active range becomes visible; no sum result yet.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Highlighted `[2,1]`.

### KIT / EXISTING SYSTEM
PartitionBandV2 / array range support.

### MOTION PURPOSE
Show contiguity concretely.


---

## BEAT 009 — `S02_A009`

### ANCHOR / SPOKEN PHRASE
> is contiguous … and its sum is three.

### WHAT APPEARS NOW
Show `2 + 1 = 3` as direct support below the highlighted range.

### CENTER-STAGE HERO
`2 + 1 = 3`.

### CAUSE
Narration reaches: `is contiguous … and its sum is three.`

### EFFECT / MOTION
Range receives valid-state emphasis.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
One valid example range.

### KIT / EXISTING SYSTEM
ChalkText + range support.

### MOTION PURPOSE
Prove one valid subarray.


---

## BEAT 010 — `S02_A010`

### ANCHOR / SPOKEN PHRASE
> So that is one valid subarray.

### WHAT APPEARS NOW
Add a small `valid` check beside the same range; do not increment the lesson answer.

### CENTER-STAGE HERO
Valid example.

### CAUSE
Narration reaches: `So that is one valid subarray.`

### EFFECT / MOTION
Example settles.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Valid example only.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Confirm semantics without revealing total count.


---

## BEAT 011 — `S02_A011`

### ANCHOR / SPOKEN PHRASE
> Also …

### WHAT APPEARS NOW
Clear the first range highlight; return the full master array to neutral.

### CENTER-STAGE HERO
Master array.

### CAUSE
Narration reaches: `Also …`

### EFFECT / MOTION
Prepare second example.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Array + k.

### KIT / EXISTING SYSTEM
Array V2.

### MOTION PURPOSE
Avoid keeping old example clutter.


---

## BEAT 012 — `S02_A012`

### ANCHOR / SPOKEN PHRASE
> `[3]`

### WHAT APPEARS NOW
Highlight only index 6, value `3`.

### CENTER-STAGE HERO
Single-cell range at index 6.

### CAUSE
Narration reaches: ``[3]``

### EFFECT / MOTION
Single-cell active range appears.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Single-cell example.

### KIT / EXISTING SYSTEM
PartitionBandV2 / range support.

### MOTION PURPOSE
Show a length-one subarray.


---

## BEAT 013 — `S02_A013`

### ANCHOR / SPOKEN PHRASE
> by itself is a valid subarray.

### WHAT APPEARS NOW
Show `3 = k` support beside the single cell.

### CENTER-STAGE HERO
Single-cell validity.

### CAUSE
Narration reaches: `by itself is a valid subarray.`

### EFFECT / MOTION
Cell gets valid-state emphasis.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Single-cell example valid.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Prove a one-element subarray can count.


---

## BEAT 014 — `S02_A014`

### ANCHOR / SPOKEN PHRASE
> One element can also form a subarray.

### WHAT APPEARS NOW
Write a compact `length 1 is allowed` note, then let the example recede.

### CENTER-STAGE HERO
`NON-EMPTY` includes length 1.

### CAUSE
Narration reaches: `One element can also form a subarray.`

### EFFECT / MOTION
Example lesson consolidates.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Master array neutral + k.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Lock the non-empty boundary case.


---

## BEAT 015 — `S02_A015`

### ANCHOR / SPOKEN PHRASE
> Now there is one important detail.

### WHAT APPEARS NOW
Return full array to center and prepare attention on the negative entries only; no warning text yet.

### CENTER-STAGE HERO
Master array.

### CAUSE
Narration reaches: `Now there is one important detail.`

### EFFECT / MOTION
Negative values begin to receive attention.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Array + k.

### KIT / EXISTING SYSTEM
Array V2.

### MOTION PURPOSE
Set up the monotonicity warning.


---

## BEAT 016 — `S02_A016`

### ANCHOR / SPOKEN PHRASE
> This array contains negative numbers.

### WHAT APPEARS NOW
Emphasize `-1` and `-2` in the master array.

### CENTER-STAGE HERO
Negative values.

### CAUSE
Narration reaches: `This array contains negative numbers.`

### EFFECT / MOTION
Negatives become the cause of the coming warning.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Negative entries emphasized.

### KIT / EXISTING SYSTEM
Array V2 state styling.

### MOTION PURPOSE
Ground why sliding-window intuition is unsafe.


---

## BEAT 017 — `S02_A017`

### ANCHOR / SPOKEN PHRASE
> So we cannot use the usual positive-number thinking like …

### WHAT APPEARS NOW
Show a tentative rule scaffold `sum too large → ?` without completing the conclusion.

### CENTER-STAGE HERO
Unsafe monotonic rule scaffold.

### CAUSE
Narration reaches: `So we cannot use the usual positive-number thinking like …`

### EFFECT / MOTION
Question mark appears; no shrink action yet.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Negatives + unsafe-rule scaffold.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Surface the tempting but unsafe heuristic.


---

## BEAT 018 — `S02_A018`

### ANCHOR / SPOKEN PHRASE
> if the sum becomes too large … just stop or shrink.

### WHAT APPEARS NOW
Complete the tentative rule as `sum > k → stop / shrink ?` in warn styling.

### CENTER-STAGE HERO
Unsafe rule.

### CAUSE
Narration reaches: `if the sum becomes too large … just stop or shrink.`

### EFFECT / MOTION
Rule is visibly marked as a question, not accepted.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Unsafe rule under examination.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
State the misconception exactly.


---

## BEAT 019 — `S02_A019`

### ANCHOR / SPOKEN PHRASE
> Look at this tiny example.

### WHAT APPEARS NOW
Clear the seven-element master temporarily and prepare a two-slot mini-array.

### CENTER-STAGE HERO
Tiny counterexample stage.

### CAUSE
Narration reaches: `Look at this tiny example.`

### EFFECT / MOTION
Semantic handoff master array → counterexample.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
k concept only.

### KIT / EXISTING SYSTEM
Array V2 or compact fixed-slot mini array.

### MOTION PURPOSE
Prove the heuristic is unsafe.


---

## BEAT 020 — `S02_A020`

### ANCHOR / SPOKEN PHRASE
> `[4, -1]`

### WHAT APPEARS NOW
Reveal two fixed slots `[4,-1]`.

### CENTER-STAGE HERO
Counterexample array.

### CAUSE
Narration reaches: ``[4, -1]``

### EFFECT / MOTION
No running sum yet.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
[4,-1].

### KIT / EXISTING SYSTEM
Array V2.

### MOTION PURPOSE
Introduce the counterexample.


---

## BEAT 021 — `S02_A021`

### ANCHOR / SPOKEN PHRASE
> with `k = 3`.

### WHAT APPEARS NOW
Add `k=3` beside the mini-array.

### CENTER-STAGE HERO
[4,-1], k=3.

### CAUSE
Narration reaches: `with `k = 3`.`

### EFFECT / MOTION
Target becomes explicit.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Counterexample input.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Complete counterexample state.


---

## BEAT 022 — `S02_A022`

### ANCHOR / SPOKEN PHRASE
> After the first value, the sum is four.

### WHAT APPEARS NOW
Highlight `4` and show `running sum = 4`.

### CENTER-STAGE HERO
Running sum 4.

### CAUSE
Narration reaches: `After the first value, the sum is four.`

### EFFECT / MOTION
Sum exceeds target but no stop occurs.

### WHAT MUST NOT APPEAR YET
Future `-1` inclusion result before spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
sum=4, k=3.

### KIT / EXISTING SYSTEM
Array range support + ChalkText.

### MOTION PURPOSE
Create the apparent reason to stop.


---

## BEAT 023 — `S02_A023`

### ANCHOR / SPOKEN PHRASE
> Four is greater than three.

### WHAT APPEARS NOW
Show relation `4 > 3` as the hero.

### CENTER-STAGE HERO
`4 > 3`.

### CAUSE
Narration reaches: `Four is greater than three.`

### EFFECT / MOTION
Unsafe heuristic looks tempting.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
sum 4 > k.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Make the misconception concrete.


---

## BEAT 024 — `S02_A024`

### ANCHOR / SPOKEN PHRASE
> But if we continue …

### WHAT APPEARS NOW
Extend the active range toward `-1` but do not calculate the new sum yet.

### CENTER-STAGE HERO
Range extension to second value.

### CAUSE
Narration reaches: `But if we continue …`

### EFFECT / MOTION
End pointer/range extends one slot.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Both values now included; result pending.

### KIT / EXISTING SYSTEM
PointerLaneV2 / PartitionBandV2 — API unresolved.

### MOTION PURPOSE
Show why continuation matters.


---

## BEAT 025 — `S02_A025`

### ANCHOR / SPOKEN PHRASE
> four plus minus one becomes three.

### WHAT APPEARS NOW
Write `4 + (-1) = 3` and switch the range to valid styling.

### CENTER-STAGE HERO
`4 + (-1) = 3`.

### CAUSE
Narration reaches: `four plus minus one becomes three.`

### EFFECT / MOTION
Counterexample defeats the stop rule.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Counterexample proved.

### KIT / EXISTING SYSTEM
ChalkText + range state.

### MOTION PURPOSE
Prove negative values can lower the running sum.


---

## BEAT 026 — `S02_A026`

### ANCHOR / SPOKEN PHRASE
> So with negative numbers …

### WHAT APPEARS NOW
Let the mini-array recede and bring back the rule scaffold with a warning mark.

### CENTER-STAGE HERO
Negative-number warning.

### CAUSE
Narration reaches: `So with negative numbers …`

### EFFECT / MOTION
Counterexample hands off to the general rule.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Warning context.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Generalize the proof.


---

## BEAT 027 — `S02_A027`

### ANCHOR / SPOKEN PHRASE
> `sum greater than k`

### WHAT APPEARS NOW
Center only `sum > k`.

### CENTER-STAGE HERO
`sum > k`.

### CAUSE
Narration reaches: ``sum greater than k``

### EFFECT / MOTION
No conclusion shown yet.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Condition only.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Separate condition from invalid inference.


---

## BEAT 028 — `S02_A028`

### ANCHOR / SPOKEN PHRASE
> does not mean we can safely stop.

### WHAT APPEARS NOW
Complete `sum > k  ≠  safe to stop`.

### CENTER-STAGE HERO
`≠ safe to stop`.

### CAUSE
Narration reaches: `does not mean we can safely stop.`

### EFFECT / MOTION
Misconception is rejected.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
No-early-stop rule.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine.

### MOTION PURPOSE
Lock Method1 correctness with negatives.


---

## BEAT 029 — `S02_A029`

### ANCHOR / SPOKEN PHRASE
> Now let us build the straightforward correct method.

### WHAT APPEARS NOW
Clear the counterexample and restore the master array neutral; add a small `METHOD 1` label.

### CENTER-STAGE HERO
Master array + Method1 label.

### CAUSE
Narration reaches: `Now let us build the straightforward correct method.`

### EFFECT / MOTION
Transition from misconception to correct enumeration.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Master array, k=3.

### KIT / EXISTING SYSTEM
Array V2 + ChalkText.

### MOTION PURPOSE
Begin deriving Method1.


---

## BEAT 030 — `S02_A030`

### ANCHOR / SPOKEN PHRASE
> Choose one starting position.

### WHAT APPEARS NOW
Place a START pointer under index 0 only.

### CENTER-STAGE HERO
START pointer.

### CAUSE
Narration reaches: `Choose one starting position.`

### EFFECT / MOTION
Start state enters.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
start=0.

### KIT / EXISTING SYSTEM
PointerLaneV2 — API unresolved.

### MOTION PURPOSE
Introduce first Method1 state variable.


---

## BEAT 031 — `S02_A031`

### ANCHOR / SPOKEN PHRASE
> Set the running sum to zero.

### WHAT APPEARS NOW
Add `running sum = 0` as the one support object.

### CENTER-STAGE HERO
`running sum = 0`.

### CAUSE
Narration reaches: `Set the running sum to zero.`

### EFFECT / MOTION
Accumulator initializes.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
start=0, sum=0.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Define accumulator state.


---

## BEAT 032 — `S02_A032`

### ANCHOR / SPOKEN PHRASE
> Then move the ending position to the right.

### WHAT APPEARS NOW
Add END pointer at the start position and indicate its rightward role without traversing the full array.

### CENTER-STAGE HERO
START + END pointers.

### CAUSE
Narration reaches: `Then move the ending position to the right.`

### EFFECT / MOTION
END becomes the expanding boundary.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
start=0, end initialized.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### MOTION PURPOSE
Introduce the second range boundary.


---

## BEAT 033 — `S02_A033`

### ANCHOR / SPOKEN PHRASE
> Every time we include one more value …

### WHAT APPEARS NOW
Extend the active range by one slot as a conceptual mini-step; do not update the sum until the next phrase.

### CENTER-STAGE HERO
One-slot range extension.

### CAUSE
Narration reaches: `Every time we include one more value …`

### EFFECT / MOTION
Range changes, sum held.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Range extended; sum update pending.

### KIT / EXISTING SYSTEM
PartitionBandV2 / range support.

### MOTION PURPOSE
Separate inclusion cause from sum effect.


---

## BEAT 034 — `S02_A034`

### ANCHOR / SPOKEN PHRASE
> add that value to the running sum.

### WHAT APPEARS NOW
Animate the newly included value into the running-sum expression semantically; array value itself stays fixed.

### CENTER-STAGE HERO
Running-sum update.

### CAUSE
Narration reaches: `add that value to the running sum.`

### EFFECT / MOTION
Accumulator changes because the range gained one value.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Updated running sum.

### KIT / EXISTING SYSTEM
ChalkText; optional BezierFlight only if semantic and repo layout supports it.

### MOTION PURPOSE
Teach cause→effect without moving the source value.


---

## BEAT 035 — `S02_A035`

### ANCHOR / SPOKEN PHRASE
> If the running sum becomes exactly `k` …

### WHAT APPEARS NOW
Show comparison `running sum == k ?` only.

### CENTER-STAGE HERO
Equality test.

### CAUSE
Narration reaches: `If the running sum becomes exactly `k` …`

### EFFECT / MOTION
Current sum is checked against target.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Comparison result pending.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Introduce the match condition.


---

## BEAT 036 — `S02_A036`

### ANCHOR / SPOKEN PHRASE
> increase the answer.

### WHAT APPEARS NOW
Show a compact answer counter changing by +1 only as a conceptual Method1 effect.

### CENTER-STAGE HERO
Answer counter.

### CAUSE
Narration reaches: `increase the answer.`

### EFFECT / MOTION
Answer grows on a match.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Answer-count concept understood.

### KIT / EXISTING SYSTEM
CountUp later with sync-derived steps; no frames in Phase9.

### MOTION PURPOSE
Connect a successful range to the counted output.


---

## BEAT 037 — `S02_A037`

### ANCHOR / SPOKEN PHRASE
> Then continue.

### WHAT APPEARS NOW
Return attention to the END pointer with no reset.

### CENTER-STAGE HERO
END pointer.

### CAUSE
Narration reaches: `Then continue.`

### EFFECT / MOTION
Enumeration continues for the same start.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Same start; end continues.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### MOTION PURPOSE
Clarify that one match does not terminate the inner scan.


---

## BEAT 038 — `S02_A038`

### ANCHOR / SPOKEN PHRASE
> When this start is finished …

### WHAT APPEARS NOW
Show END at the array boundary; do not move START yet.

### CENTER-STAGE HERO
Completed start-range scan.

### CAUSE
Narration reaches: `When this start is finished …`

### EFFECT / MOTION
Inner scan settles.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Current start finished.

### KIT / EXISTING SYSTEM
Array V2 + pointers.

### MOTION PURPOSE
Mark the end of one start.


---

## BEAT 039 — `S02_A039`

### ANCHOR / SPOKEN PHRASE
> move the start one position to the right …

### WHAT APPEARS NOW
Move START one slot right; END support clears for reset.

### CENTER-STAGE HERO
START moves right.

### CAUSE
Narration reaches: `move the start one position to the right …`

### EFFECT / MOTION
New start begins.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
new start index.

### KIT / EXISTING SYSTEM
PointerLaneV2.

### MOTION PURPOSE
Show outer-loop progression.


---

## BEAT 040 — `S02_A040`

### ANCHOR / SPOKEN PHRASE
> reset the running sum …

### WHAT APPEARS NOW
Change running sum back to zero.

### CENTER-STAGE HERO
`running sum = 0` reset.

### CAUSE
Narration reaches: `reset the running sum …`

### EFFECT / MOTION
Accumulator resets for the new start.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
new start + sum0.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Teach reset semantics.


---

## BEAT 041 — `S02_A041`

### ANCHOR / SPOKEN PHRASE
> and repeat.

### WHAT APPEARS NOW
Show a short loop-back relation from the reset state to END expansion; no new values are processed.

### CENTER-STAGE HERO
Method1 cycle.

### CAUSE
Narration reaches: `and repeat.`

### EFFECT / MOTION
Method repeats structurally.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 mechanism complete.

### KIT / EXISTING SYSTEM
RoughCurve / RoughLine only if needed.

### MOTION PURPOSE
Consolidate loop structure.


---

## BEAT 042 — `S02_A042`

### ANCHOR / SPOKEN PHRASE
> So Method One is:

### WHAT APPEARS NOW
Clear detailed pointers into a compact four-step vertical/linear scaffold; reveal no step text yet.

### CENTER-STAGE HERO
Method1 summary scaffold.

### CAUSE
Narration reaches: `So Method One is:`

### EFFECT / MOTION
Prepare compressed identity.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 concept.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Summarize without replay.


---

## BEAT 043 — `S02_A043`

### ANCHOR / SPOKEN PHRASE
> fix the start …

### WHAT APPEARS NOW
Reveal step `FIX START`.

### CENTER-STAGE HERO
`FIX START`.

### CAUSE
Narration reaches: `fix the start …`

### EFFECT / MOTION
First Method1 identity step appears.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Summary step1.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Compress the method.


---

## BEAT 044 — `S02_A044`

### ANCHOR / SPOKEN PHRASE
> extend the end …

### WHAT APPEARS NOW
Add `EXTEND END` after the first step.

### CENTER-STAGE HERO
`EXTEND END`.

### CAUSE
Narration reaches: `extend the end …`

### EFFECT / MOTION
Second step appears.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Summary steps1–2.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine relation.

### MOTION PURPOSE
Compress the method.


---

## BEAT 045 — `S02_A045`

### ANCHOR / SPOKEN PHRASE
> update the running sum …

### WHAT APPEARS NOW
Add `UPDATE RUNNING SUM`.

### CENTER-STAGE HERO
`UPDATE RUNNING SUM`.

### CAUSE
Narration reaches: `update the running sum …`

### EFFECT / MOTION
Third step appears.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Summary steps1–3.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Compress the method.


---

## BEAT 046 — `S02_A046`

### ANCHOR / SPOKEN PHRASE
> and count every match.

### WHAT APPEARS NOW
Add final `COUNT MATCH` and briefly emphasize the complete chain.

### CENTER-STAGE HERO
Full Method1 identity.

### CAUSE
Narration reaches: `and count every match.`

### EFFECT / MOTION
Method1 idea is fully locked.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 identity.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Complete the method identity.


---

## BEAT 047 — `S02_A047`

### ANCHOR / SPOKEN PHRASE
> Now let us execute it on the full array.

### WHAT APPEARS NOW
Restore the untouched master array with `start=0`, empty active range, `running sum=0`, `answer=0` ready for Scene03.

### CENTER-STAGE HERO
Trace-ready Method1 state.

### CAUSE
Narration reaches: `Now let us execute it on the full array.`

### EFFECT / MOTION
Summary recedes into executable state.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Exact Scene03 initial state.

### KIT / EXISTING SYSTEM
Array V2 + pointers + answer support.

### MOTION PURPOSE
Create a clean continuity handoff.


---

# CONTINUITY OUT

Master array and Method1 rule are understood; ready for full Method1 trace.

---

# SCENE 02 PHASE-9 LOCK

```text
NO GUESSED SECONDS
NO GUESSED FRAMES
NO FUTURE-STATE SPOILERS
NO GENERIC PACKED DASHBOARD
NO UNSOURCED COMPONENT API
```
