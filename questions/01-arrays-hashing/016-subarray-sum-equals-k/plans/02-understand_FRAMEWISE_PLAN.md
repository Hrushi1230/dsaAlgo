# Q16 — Subarray Sum Equals K (LC 560)
# Scene 02 · Understand Question & Method 1 Idea
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Problem:** #016 Subarray Sum Equals K · LC 560 · Medium  
**Audio File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/audio/scence02.mp3` (`remotion-project/public/audio/016/02-understand.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/sync/02-understand.json`  
**FPS:** 30  
**Audio Duration:** 114.100s (114,100 ms)  
**Exact Total Frames:** 3423 frames (114.100 seconds @ 30fps)  
**Total Beats:** 47 beats (100% matched to unzipped word-plan)

---

## 1. Mandatory Scene Contract

```text
SCENE: 02-understand
QUESTION: 016 · Subarray Sum Equals K (LeetCode 560)
BEAT TYPE: QUESTION UNDERSTANDING & BRUTE-FORCE DERIVATION
AUDIO FILE: audio/016/02-understand.mp3
SYNC FILE: sync/02-understand.json
FPS: 30
TOTAL FRAMES: 3423
BEATS COUNT: 47
PEDAGOGICAL GOAL: Strictly faithful to approved Phase 9 V3 word-based visual plan.
```

---

## 2. Framewise Beat Choreography

### BEAT 001 — `S02_A001` (Frames 0 – 54)
- **ANCHOR:** > For this lesson, we will use: (F0 – F54, pause to F74)
- **WHAT APPEARS NOW:** Clear Scene01 goal text to a centered empty Array V2 track shell ready to receive the master example.
- **CENTER-STAGE HERO:** Empty master-array track.
- **CAUSE:** Narration reaches: `For this lesson, we will use:`
- **EFFECT / MOTION:** Prepare the representation; no values yet.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 20 frames (666ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Q16 problem context.
- **KIT / SYSTEM:** ArrayTrackV2 production system — API unresolved.
- **MOTION PURPOSE:** Set up the master example without pre-rendering values.


---

### BEAT 002 — `S02_A002` (Frames 74 – 280)
- **ANCHOR:** > `[1, -1, 2, 1, 0, -2, 3]` (F74 – F280, pause to F803)
- **WHAT APPEARS NOW:** Populate the fixed seven array slots with `[1,-1,2,1,0,-2,3]`; reveal index row only if the production array system supports it.
- **CENTER-STAGE HERO:** Master array.
- **CAUSE:** Narration reaches: ``[1, -1, 2, 1, 0, -2, 3]``
- **EFFECT / MOTION:** Values appear in fixed slots; slots/values remain stationary.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 523 frames (17433ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Master array visible.
- **KIT / SYSTEM:** ArrayTrackV2 / ArrayIndexRowV2 — API unresolved.
- **MOTION PURPOSE:** Introduce the locked teaching example.


---

### BEAT 003 — `S02_A003` (Frames 803 – 884)
- **ANCHOR:** > and `k` is three. (F803 – F884, pause to F903)
- **WHAT APPEARS NOW:** Add a small `k = 3` support label near the array.
- **CENTER-STAGE HERO:** Master array + target.
- **CAUSE:** Narration reaches: `and `k` is three.`
- **EFFECT / MOTION:** Target becomes available for later sums.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 19 frames (633ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Array + k=3.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Complete the master input.


---

### BEAT 004 — `S02_A004` (Frames 903 – 968)
- **ANCHOR:** > We are not looking for just one subarray. (F903 – F968, pause to F975)
- **WHAT APPEARS NOW:** Show a crossed/erased `find one` note briefly beside the array.
- **CENTER-STAGE HERO:** `COUNT`, not `find one`.
- **CAUSE:** Narration reaches: `We are not looking for just one subarray.`
- **EFFECT / MOTION:** Reject one-solution interpretation.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 7 frames (233ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Array + k=3 + COUNT objective.
- **KIT / SYSTEM:** ChalkText + RoughLine strike.
- **MOTION PURPOSE:** Remove first misconception.


---

### BEAT 005 — `S02_A005` (Frames 975 – 1033)
- **ANCHOR:** > We are not looking for the longest subarray. (F975 – F1033)
- **WHAT APPEARS NOW:** Replace the previous rejected note with a crossed `longest` note.
- **CENTER-STAGE HERO:** `COUNT`, not longest.
- **CAUSE:** Narration reaches: `We are not looking for the longest subarray.`
- **EFFECT / MOTION:** Reject longest-range interpretation.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Count objective.
- **KIT / SYSTEM:** ChalkText + RoughLine strike.
- **MOTION PURPOSE:** Remove second misconception.


---

### BEAT 006 — `S02_A006` (Frames 1033 – 1066)
- **ANCHOR:** > We need to count every contiguous, non-empty subarray whose sum is exactly three. (F1033 – F1066, pause to F1551)
- **WHAT APPEARS NOW:** Center three words sequentially around the array: `CONTIGUOUS`, `NON-EMPTY`, `COUNT ALL`.
- **CENTER-STAGE HERO:** Problem constraints.
- **CAUSE:** Narration reaches: `We need to count every contiguous, non-empty subarray whose sum is exactly three.`
- **EFFECT / MOTION:** Each term gains emphasis without showing final answer.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 485 frames (16166ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Array + exact task.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Define the question precisely.


---

### BEAT 007 — `S02_A007` (Frames 1551 – 1597)
- **ANCHOR:** > For example … (F1551 – F1597, pause to F1607)
- **WHAT APPEARS NOW:** Keep the master array and prepare one quiet range bracket; do not select values yet.
- **CENTER-STAGE HERO:** Master array.
- **CAUSE:** Narration reaches: `For example …`
- **EFFECT / MOTION:** Example range scaffold enters.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 10 frames (333ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Array + k.
- **KIT / SYSTEM:** PartitionBandV2 or equivalent existing range grammar — API unresolved.
- **MOTION PURPOSE:** Prepare a concrete valid range.


---

### BEAT 008 — `S02_A008` (Frames 1607 – 1667)
- **ANCHOR:** > `[2, 1]` (F1607 – F1667, pause to F3101)
- **WHAT APPEARS NOW:** Highlight only indices 2..3 on the master array as the example `[2,1]`.
- **CENTER-STAGE HERO:** Range 2..3.
- **CAUSE:** Narration reaches: ``[2, 1]``
- **EFFECT / MOTION:** Active range becomes visible; no sum result yet.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 1434 frames (47800ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Highlighted `[2,1]`.
- **KIT / SYSTEM:** PartitionBandV2 / array range support.
- **MOTION PURPOSE:** Show contiguity concretely.


---

### BEAT 009 — `S02_A009` (Frames 3101 – 3268)
- **ANCHOR:** > is contiguous … and its sum is three. (F3101 – F3268)
- **WHAT APPEARS NOW:** Show `2 + 1 = 3` as direct support below the highlighted range.
- **CENTER-STAGE HERO:** `2 + 1 = 3`.
- **CAUSE:** Narration reaches: `is contiguous … and its sum is three.`
- **EFFECT / MOTION:** Range receives valid-state emphasis.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** One valid example range.
- **KIT / SYSTEM:** ChalkText + range support.
- **MOTION PURPOSE:** Prove one valid subarray.


---

### BEAT 010 — `S02_A010` (Frames 3268 – 3303)
- **ANCHOR:** > So that is one valid subarray. (F3268 – F3303)
- **WHAT APPEARS NOW:** Add a small `valid` check beside the same range; do not increment the lesson answer.
- **CENTER-STAGE HERO:** Valid example.
- **CAUSE:** Narration reaches: `So that is one valid subarray.`
- **EFFECT / MOTION:** Example settles.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Valid example only.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Confirm semantics without revealing total count.


---

### BEAT 011 — `S02_A011` (Frames 3303 – 3335)
- **ANCHOR:** > Also … (F3303 – F3335, pause to F3357)
- **WHAT APPEARS NOW:** Clear the first range highlight; return the full master array to neutral.
- **CENTER-STAGE HERO:** Master array.
- **CAUSE:** Narration reaches: `Also …`
- **EFFECT / MOTION:** Prepare second example.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 22 frames (733ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Array + k.
- **KIT / SYSTEM:** Array V2.
- **MOTION PURPOSE:** Avoid keeping old example clutter.


---

### BEAT 012 — `S02_A012` (Frames 3357 – 3369)
- **ANCHOR:** > `[3]` (F3357 – F3369)
- **WHAT APPEARS NOW:** Highlight only index 6, value `3`.
- **CENTER-STAGE HERO:** Single-cell range at index 6.
- **CAUSE:** Narration reaches: ``[3]``
- **EFFECT / MOTION:** Single-cell active range appears.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Single-cell example.
- **KIT / SYSTEM:** PartitionBandV2 / range support.
- **MOTION PURPOSE:** Show a length-one subarray.


---

### BEAT 013 — `S02_A013` (Frames 3369 – 3395)
- **ANCHOR:** > by itself is a valid subarray. (F3369 – F3395)
- **WHAT APPEARS NOW:** Show `3 = k` support beside the single cell.
- **CENTER-STAGE HERO:** Single-cell validity.
- **CAUSE:** Narration reaches: `by itself is a valid subarray.`
- **EFFECT / MOTION:** Cell gets valid-state emphasis.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Single-cell example valid.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Prove a one-element subarray can count.


---

### BEAT 014 — `S02_A014` (Frames 3395 – 3423)
- **ANCHOR:** > One element can also form a subarray. (F3395 – F3423)
- **WHAT APPEARS NOW:** Write a compact `length 1 is allowed` note, then let the example recede.
- **CENTER-STAGE HERO:** `NON-EMPTY` includes length 1.
- **CAUSE:** Narration reaches: `One element can also form a subarray.`
- **EFFECT / MOTION:** Example lesson consolidates.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Master array neutral + k.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Lock the non-empty boundary case.


---

### BEAT 015 — `S02_A015` (Frames 3413 – 3423)
- **ANCHOR:** > Now there is one important detail. (F3413 – F3423)
- **WHAT APPEARS NOW:** Return full array to center and prepare attention on the negative entries only; no warning text yet.
- **CENTER-STAGE HERO:** Master array.
- **CAUSE:** Narration reaches: `Now there is one important detail.`
- **EFFECT / MOTION:** Negative values begin to receive attention.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Array + k.
- **KIT / SYSTEM:** Array V2.
- **MOTION PURPOSE:** Set up the monotonicity warning.


---

### BEAT 016 — `S02_A016` (Frames 3413 – 3423)
- **ANCHOR:** > This array contains negative numbers. (F3413 – F3423)
- **WHAT APPEARS NOW:** Emphasize `-1` and `-2` in the master array.
- **CENTER-STAGE HERO:** Negative values.
- **CAUSE:** Narration reaches: `This array contains negative numbers.`
- **EFFECT / MOTION:** Negatives become the cause of the coming warning.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Negative entries emphasized.
- **KIT / SYSTEM:** Array V2 state styling.
- **MOTION PURPOSE:** Ground why sliding-window intuition is unsafe.


---

### BEAT 017 — `S02_A017` (Frames 3413 – 3423)
- **ANCHOR:** > So we cannot use the usual positive-number thinking like … (F3413 – F3423)
- **WHAT APPEARS NOW:** Show a tentative rule scaffold `sum too large → ?` without completing the conclusion.
- **CENTER-STAGE HERO:** Unsafe monotonic rule scaffold.
- **CAUSE:** Narration reaches: `So we cannot use the usual positive-number thinking like …`
- **EFFECT / MOTION:** Question mark appears; no shrink action yet.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Negatives + unsafe-rule scaffold.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Surface the tempting but unsafe heuristic.


---

### BEAT 018 — `S02_A018` (Frames 3413 – 3423)
- **ANCHOR:** > if the sum becomes too large … just stop or shrink. (F3413 – F3423)
- **WHAT APPEARS NOW:** Complete the tentative rule as `sum > k → stop / shrink ?` in warn styling.
- **CENTER-STAGE HERO:** Unsafe rule.
- **CAUSE:** Narration reaches: `if the sum becomes too large … just stop or shrink.`
- **EFFECT / MOTION:** Rule is visibly marked as a question, not accepted.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Unsafe rule under examination.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** State the misconception exactly.


---

### BEAT 019 — `S02_A019` (Frames 3413 – 3423)
- **ANCHOR:** > Look at this tiny example. (F3413 – F3423)
- **WHAT APPEARS NOW:** Clear the seven-element master temporarily and prepare a two-slot mini-array.
- **CENTER-STAGE HERO:** Tiny counterexample stage.
- **CAUSE:** Narration reaches: `Look at this tiny example.`
- **EFFECT / MOTION:** Semantic handoff master array → counterexample.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** k concept only.
- **KIT / SYSTEM:** Array V2 or compact fixed-slot mini array.
- **MOTION PURPOSE:** Prove the heuristic is unsafe.


---

### BEAT 020 — `S02_A020` (Frames 3413 – 3423)
- **ANCHOR:** > `[4, -1]` (F3413 – F3423)
- **WHAT APPEARS NOW:** Reveal two fixed slots `[4,-1]`.
- **CENTER-STAGE HERO:** Counterexample array.
- **CAUSE:** Narration reaches: ``[4, -1]``
- **EFFECT / MOTION:** No running sum yet.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** [4,-1].
- **KIT / SYSTEM:** Array V2.
- **MOTION PURPOSE:** Introduce the counterexample.


---

### BEAT 021 — `S02_A021` (Frames 3413 – 3423)
- **ANCHOR:** > with `k = 3`. (F3413 – F3423)
- **WHAT APPEARS NOW:** Add `k=3` beside the mini-array.
- **CENTER-STAGE HERO:** [4,-1], k=3.
- **CAUSE:** Narration reaches: `with `k = 3`.`
- **EFFECT / MOTION:** Target becomes explicit.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Counterexample input.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Complete counterexample state.


---

### BEAT 022 — `S02_A022` (Frames 3413 – 3423)
- **ANCHOR:** > After the first value, the sum is four. (F3413 – F3423)
- **WHAT APPEARS NOW:** Highlight `4` and show `running sum = 4`.
- **CENTER-STAGE HERO:** Running sum 4.
- **CAUSE:** Narration reaches: `After the first value, the sum is four.`
- **EFFECT / MOTION:** Sum exceeds target but no stop occurs.
- **WHAT MUST NOT APPEAR YET:** Future `-1` inclusion result before spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** sum=4, k=3.
- **KIT / SYSTEM:** Array range support + ChalkText.
- **MOTION PURPOSE:** Create the apparent reason to stop.


---

### BEAT 023 — `S02_A023` (Frames 3413 – 3423)
- **ANCHOR:** > Four is greater than three. (F3413 – F3423)
- **WHAT APPEARS NOW:** Show relation `4 > 3` as the hero.
- **CENTER-STAGE HERO:** `4 > 3`.
- **CAUSE:** Narration reaches: `Four is greater than three.`
- **EFFECT / MOTION:** Unsafe heuristic looks tempting.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** sum 4 > k.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Make the misconception concrete.


---

### BEAT 024 — `S02_A024` (Frames 3413 – 3423)
- **ANCHOR:** > But if we continue … (F3413 – F3423)
- **WHAT APPEARS NOW:** Extend the active range toward `-1` but do not calculate the new sum yet.
- **CENTER-STAGE HERO:** Range extension to second value.
- **CAUSE:** Narration reaches: `But if we continue …`
- **EFFECT / MOTION:** End pointer/range extends one slot.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Both values now included; result pending.
- **KIT / SYSTEM:** PointerLaneV2 / PartitionBandV2 — API unresolved.
- **MOTION PURPOSE:** Show why continuation matters.


---

### BEAT 025 — `S02_A025` (Frames 3413 – 3423)
- **ANCHOR:** > four plus minus one becomes three. (F3413 – F3423)
- **WHAT APPEARS NOW:** Write `4 + (-1) = 3` and switch the range to valid styling.
- **CENTER-STAGE HERO:** `4 + (-1) = 3`.
- **CAUSE:** Narration reaches: `four plus minus one becomes three.`
- **EFFECT / MOTION:** Counterexample defeats the stop rule.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Counterexample proved.
- **KIT / SYSTEM:** ChalkText + range state.
- **MOTION PURPOSE:** Prove negative values can lower the running sum.


---

### BEAT 026 — `S02_A026` (Frames 3413 – 3423)
- **ANCHOR:** > So with negative numbers … (F3413 – F3423)
- **WHAT APPEARS NOW:** Let the mini-array recede and bring back the rule scaffold with a warning mark.
- **CENTER-STAGE HERO:** Negative-number warning.
- **CAUSE:** Narration reaches: `So with negative numbers …`
- **EFFECT / MOTION:** Counterexample hands off to the general rule.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Warning context.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Generalize the proof.


---

### BEAT 027 — `S02_A027` (Frames 3413 – 3423)
- **ANCHOR:** > `sum greater than k` (F3413 – F3423)
- **WHAT APPEARS NOW:** Center only `sum > k`.
- **CENTER-STAGE HERO:** `sum > k`.
- **CAUSE:** Narration reaches: ``sum greater than k``
- **EFFECT / MOTION:** No conclusion shown yet.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Condition only.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Separate condition from invalid inference.


---

### BEAT 028 — `S02_A028` (Frames 3413 – 3423)
- **ANCHOR:** > does not mean we can safely stop. (F3413 – F3423)
- **WHAT APPEARS NOW:** Complete `sum > k  ≠  safe to stop`.
- **CENTER-STAGE HERO:** `≠ safe to stop`.
- **CAUSE:** Narration reaches: `does not mean we can safely stop.`
- **EFFECT / MOTION:** Misconception is rejected.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** No-early-stop rule.
- **KIT / SYSTEM:** ChalkText + RoughLine.
- **MOTION PURPOSE:** Lock Method1 correctness with negatives.


---

### BEAT 029 — `S02_A029` (Frames 3413 – 3423)
- **ANCHOR:** > Now let us build the straightforward correct method. (F3413 – F3423)
- **WHAT APPEARS NOW:** Clear the counterexample and restore the master array neutral; add a small `METHOD 1` label.
- **CENTER-STAGE HERO:** Master array + Method1 label.
- **CAUSE:** Narration reaches: `Now let us build the straightforward correct method.`
- **EFFECT / MOTION:** Transition from misconception to correct enumeration.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Master array, k=3.
- **KIT / SYSTEM:** Array V2 + ChalkText.
- **MOTION PURPOSE:** Begin deriving Method1.


---

### BEAT 030 — `S02_A030` (Frames 3413 – 3423)
- **ANCHOR:** > Choose one starting position. (F3413 – F3423)
- **WHAT APPEARS NOW:** Place a START pointer under index 0 only.
- **CENTER-STAGE HERO:** START pointer.
- **CAUSE:** Narration reaches: `Choose one starting position.`
- **EFFECT / MOTION:** Start state enters.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** start=0.
- **KIT / SYSTEM:** PointerLaneV2 — API unresolved.
- **MOTION PURPOSE:** Introduce first Method1 state variable.


---

### BEAT 031 — `S02_A031` (Frames 3413 – 3423)
- **ANCHOR:** > Set the running sum to zero. (F3413 – F3423)
- **WHAT APPEARS NOW:** Add `running sum = 0` as the one support object.
- **CENTER-STAGE HERO:** `running sum = 0`.
- **CAUSE:** Narration reaches: `Set the running sum to zero.`
- **EFFECT / MOTION:** Accumulator initializes.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** start=0, sum=0.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Define accumulator state.


---

### BEAT 032 — `S02_A032` (Frames 3413 – 3423)
- **ANCHOR:** > Then move the ending position to the right. (F3413 – F3423)
- **WHAT APPEARS NOW:** Add END pointer at the start position and indicate its rightward role without traversing the full array.
- **CENTER-STAGE HERO:** START + END pointers.
- **CAUSE:** Narration reaches: `Then move the ending position to the right.`
- **EFFECT / MOTION:** END becomes the expanding boundary.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** start=0, end initialized.
- **KIT / SYSTEM:** PointerLaneV2.
- **MOTION PURPOSE:** Introduce the second range boundary.


---

### BEAT 033 — `S02_A033` (Frames 3413 – 3423)
- **ANCHOR:** > Every time we include one more value … (F3413 – F3423)
- **WHAT APPEARS NOW:** Extend the active range by one slot as a conceptual mini-step; do not update the sum until the next phrase.
- **CENTER-STAGE HERO:** One-slot range extension.
- **CAUSE:** Narration reaches: `Every time we include one more value …`
- **EFFECT / MOTION:** Range changes, sum held.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Range extended; sum update pending.
- **KIT / SYSTEM:** PartitionBandV2 / range support.
- **MOTION PURPOSE:** Separate inclusion cause from sum effect.


---

### BEAT 034 — `S02_A034` (Frames 3413 – 3423)
- **ANCHOR:** > add that value to the running sum. (F3413 – F3423)
- **WHAT APPEARS NOW:** Animate the newly included value into the running-sum expression semantically; array value itself stays fixed.
- **CENTER-STAGE HERO:** Running-sum update.
- **CAUSE:** Narration reaches: `add that value to the running sum.`
- **EFFECT / MOTION:** Accumulator changes because the range gained one value.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Updated running sum.
- **KIT / SYSTEM:** ChalkText; optional BezierFlight only if semantic and repo layout supports it.
- **MOTION PURPOSE:** Teach cause→effect without moving the source value.


---

### BEAT 035 — `S02_A035` (Frames 3413 – 3423)
- **ANCHOR:** > If the running sum becomes exactly `k` … (F3413 – F3423)
- **WHAT APPEARS NOW:** Show comparison `running sum == k ?` only.
- **CENTER-STAGE HERO:** Equality test.
- **CAUSE:** Narration reaches: `If the running sum becomes exactly `k` …`
- **EFFECT / MOTION:** Current sum is checked against target.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Comparison result pending.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Introduce the match condition.


---

### BEAT 036 — `S02_A036` (Frames 3413 – 3423)
- **ANCHOR:** > increase the answer. (F3413 – F3423)
- **WHAT APPEARS NOW:** Show a compact answer counter changing by +1 only as a conceptual Method1 effect.
- **CENTER-STAGE HERO:** Answer counter.
- **CAUSE:** Narration reaches: `increase the answer.`
- **EFFECT / MOTION:** Answer grows on a match.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Answer-count concept understood.
- **KIT / SYSTEM:** CountUp later with sync-derived steps; no frames in Phase9.
- **MOTION PURPOSE:** Connect a successful range to the counted output.


---

### BEAT 037 — `S02_A037` (Frames 3413 – 3423)
- **ANCHOR:** > Then continue. (F3413 – F3423)
- **WHAT APPEARS NOW:** Return attention to the END pointer with no reset.
- **CENTER-STAGE HERO:** END pointer.
- **CAUSE:** Narration reaches: `Then continue.`
- **EFFECT / MOTION:** Enumeration continues for the same start.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Same start; end continues.
- **KIT / SYSTEM:** PointerLaneV2.
- **MOTION PURPOSE:** Clarify that one match does not terminate the inner scan.


---

### BEAT 038 — `S02_A038` (Frames 3413 – 3423)
- **ANCHOR:** > When this start is finished … (F3413 – F3423)
- **WHAT APPEARS NOW:** Show END at the array boundary; do not move START yet.
- **CENTER-STAGE HERO:** Completed start-range scan.
- **CAUSE:** Narration reaches: `When this start is finished …`
- **EFFECT / MOTION:** Inner scan settles.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Current start finished.
- **KIT / SYSTEM:** Array V2 + pointers.
- **MOTION PURPOSE:** Mark the end of one start.


---

### BEAT 039 — `S02_A039` (Frames 3413 – 3423)
- **ANCHOR:** > move the start one position to the right … (F3413 – F3423)
- **WHAT APPEARS NOW:** Move START one slot right; END support clears for reset.
- **CENTER-STAGE HERO:** START moves right.
- **CAUSE:** Narration reaches: `move the start one position to the right …`
- **EFFECT / MOTION:** New start begins.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** new start index.
- **KIT / SYSTEM:** PointerLaneV2.
- **MOTION PURPOSE:** Show outer-loop progression.


---

### BEAT 040 — `S02_A040` (Frames 3413 – 3423)
- **ANCHOR:** > reset the running sum … (F3413 – F3423)
- **WHAT APPEARS NOW:** Change running sum back to zero.
- **CENTER-STAGE HERO:** `running sum = 0` reset.
- **CAUSE:** Narration reaches: `reset the running sum …`
- **EFFECT / MOTION:** Accumulator resets for the new start.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** new start + sum0.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Teach reset semantics.


---

### BEAT 041 — `S02_A041` (Frames 3413 – 3423)
- **ANCHOR:** > and repeat. (F3413 – F3423)
- **WHAT APPEARS NOW:** Show a short loop-back relation from the reset state to END expansion; no new values are processed.
- **CENTER-STAGE HERO:** Method1 cycle.
- **CAUSE:** Narration reaches: `and repeat.`
- **EFFECT / MOTION:** Method repeats structurally.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 mechanism complete.
- **KIT / SYSTEM:** RoughCurve / RoughLine only if needed.
- **MOTION PURPOSE:** Consolidate loop structure.


---

### BEAT 042 — `S02_A042` (Frames 3413 – 3423)
- **ANCHOR:** > So Method One is: (F3413 – F3423)
- **WHAT APPEARS NOW:** Clear detailed pointers into a compact four-step vertical/linear scaffold; reveal no step text yet.
- **CENTER-STAGE HERO:** Method1 summary scaffold.
- **CAUSE:** Narration reaches: `So Method One is:`
- **EFFECT / MOTION:** Prepare compressed identity.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 concept.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Summarize without replay.


---

### BEAT 043 — `S02_A043` (Frames 3413 – 3423)
- **ANCHOR:** > fix the start … (F3413 – F3423)
- **WHAT APPEARS NOW:** Reveal step `FIX START`.
- **CENTER-STAGE HERO:** `FIX START`.
- **CAUSE:** Narration reaches: `fix the start …`
- **EFFECT / MOTION:** First Method1 identity step appears.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Summary step1.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Compress the method.


---

### BEAT 044 — `S02_A044` (Frames 3413 – 3423)
- **ANCHOR:** > extend the end … (F3413 – F3423)
- **WHAT APPEARS NOW:** Add `EXTEND END` after the first step.
- **CENTER-STAGE HERO:** `EXTEND END`.
- **CAUSE:** Narration reaches: `extend the end …`
- **EFFECT / MOTION:** Second step appears.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Summary steps1–2.
- **KIT / SYSTEM:** ChalkText + RoughLine relation.
- **MOTION PURPOSE:** Compress the method.


---

### BEAT 045 — `S02_A045` (Frames 3413 – 3423)
- **ANCHOR:** > update the running sum … (F3413 – F3423)
- **WHAT APPEARS NOW:** Add `UPDATE RUNNING SUM`.
- **CENTER-STAGE HERO:** `UPDATE RUNNING SUM`.
- **CAUSE:** Narration reaches: `update the running sum …`
- **EFFECT / MOTION:** Third step appears.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Summary steps1–3.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Compress the method.


---

### BEAT 046 — `S02_A046` (Frames 3413 – 3423)
- **ANCHOR:** > and count every match. (F3413 – F3423)
- **WHAT APPEARS NOW:** Add final `COUNT MATCH` and briefly emphasize the complete chain.
- **CENTER-STAGE HERO:** Full Method1 identity.
- **CAUSE:** Narration reaches: `and count every match.`
- **EFFECT / MOTION:** Method1 idea is fully locked.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 identity.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Complete the method identity.


---

### BEAT 047 — `S02_A047` (Frames 3413 – 3423)
- **ANCHOR:** > Now let us execute it on the full array. (F3413 – F3423)
- **WHAT APPEARS NOW:** Restore the untouched master array with `start=0`, empty active range, `running sum=0`, `answer=0` ready for Scene03.
- **CENTER-STAGE HERO:** Trace-ready Method1 state.
- **CAUSE:** Narration reaches: `Now let us execute it on the full array.`
- **EFFECT / MOTION:** Summary recedes into executable state.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Exact Scene03 initial state.
- **KIT / SYSTEM:** Array V2 + pointers + answer support.
- **MOTION PURPOSE:** Create a clean continuity handoff.


---
