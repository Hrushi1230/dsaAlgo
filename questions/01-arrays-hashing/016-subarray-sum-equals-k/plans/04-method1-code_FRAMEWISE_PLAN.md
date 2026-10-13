# Q16 — Subarray Sum Equals K (LC 560)
# Scene 04 · Method 1 Code & Complexity Walkthrough
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Problem:** #016 Subarray Sum Equals K · LC 560 · Medium  
**Audio File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/audio/scence04.mp3` (`remotion-project/public/audio/016/04-method1-code.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/sync/04-method1-code.json`  
**FPS:** 30  
**Audio Duration:** 75.860s (75,860 ms)  
**Exact Total Frames:** 2276 frames (75.860 seconds @ 30fps)  
**Total Beats:** 39 beats (100% matched to unzipped word-plan)

---

## 1. Mandatory Scene Contract

```text
SCENE: 04-method1-code
QUESTION: 016 · Subarray Sum Equals K (LeetCode 560)
BEAT TYPE: CODE WALKTHROUGH & COMPLEXITY DERIVATION
AUDIO FILE: audio/016/04-method1-code.mp3
SYNC FILE: sync/04-method1-code.json
FPS: 30
TOTAL FRAMES: 2276
BEATS COUNT: 39
PEDAGOGICAL GOAL: Strictly faithful to approved Phase 9 V3 word-based visual plan.
```

---

## 2. Framewise Beat Choreography

### BEAT 001 — `S04_A001` (Frames 0 – 53)
- **ANCHOR:** > First, create the answer and set it to zero. (F0 – F53, pause to F192)
- **WHAT APPEARS NOW:** Bring the production code surface to center and type only `answer = 0` character-by-character on this spoken idea.
- **CENTER-STAGE HERO:** Active code: `answer = 0`.
- **CAUSE:** Narration reaches: `First, create the answer and set it to zero.`
- **EFFECT / MOTION:** Answer counter becomes 0.
- **WHAT MUST NOT APPEAR YET:** Any future code line; complexity graph; prefix sums; Method2.
- **COMPREHENSION HOLD:** Audio pause of 139 frames (4633ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** `answer = 0` typed; prior required lines may remain dim.
- **KIT / SYSTEM:** Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.
- **MOTION PURPOSE:** Maintain exact Trace→Code identity.

### BEAT 002 — `S04_A002` (Frames 192 – 328)
- **ANCHOR:** > Now choose every possible starting position. (F192 – F328, pause to F1026)
- **WHAT APPEARS NOW:** Bring the production code surface to center and type only `for start in range(len(nums)):` character-by-character on this spoken idea.
- **CENTER-STAGE HERO:** Active code: `for start in range(len(nums)):`.
- **CAUSE:** Narration reaches: `Now choose every possible starting position.`
- **EFFECT / MOTION:** START pointer role is linked to the outer loop.
- **WHAT MUST NOT APPEAR YET:** Any future code line; complexity graph; prefix sums; Method2.
- **COMPREHENSION HOLD:** Audio pause of 698 frames (23266ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** `for start in range(len(nums)):` typed; prior required lines may remain dim.
- **KIT / SYSTEM:** Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.
- **MOTION PURPOSE:** Maintain exact Trace→Code identity.

### BEAT 003 — `S04_A003` (Frames 1026 – 1105)
- **ANCHOR:** > For each new start … (F1026 – F1105)
- **WHAT APPEARS NOW:** Keep the typed outer loop as context and focus its per-start body indentation only; no new line yet.
- **CENTER-STAGE HERO:** Outer-loop body context.
- **CAUSE:** Narration reaches: `For each new start …`
- **EFFECT / MOTION:** Attention moves inside the start loop.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Outer loop active.
- **KIT / SYSTEM:** Production code component.
- **MOTION PURPOSE:** Respect spoken control-flow nesting without inventing code.


---

### BEAT 004 — `S04_A004` (Frames 1105 – 1151)
- **ANCHOR:** > reset the running sum to zero. (F1105 – F1151)
- **WHAT APPEARS NOW:** Bring the production code surface to center and type only `running_sum = 0` character-by-character on this spoken idea.
- **CENTER-STAGE HERO:** Active code: `running_sum = 0`.
- **CAUSE:** Narration reaches: `reset the running sum to zero.`
- **EFFECT / MOTION:** Running-sum support resets to 0.
- **WHAT MUST NOT APPEAR YET:** Any future code line; complexity graph; prefix sums; Method2.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** `running_sum = 0` typed; prior required lines may remain dim.
- **KIT / SYSTEM:** Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.
- **MOTION PURPOSE:** Maintain exact Trace→Code identity.

### BEAT 005 — `S04_A005` (Frames 1151 – 1176)
- **ANCHOR:** > Then let the ending position move from `start` to the end of the array. (F1151 – F1176, pause to F1196)
- **WHAT APPEARS NOW:** Bring the production code surface to center and type only `for end in range(start, len(nums)):` character-by-character on this spoken idea.
- **CENTER-STAGE HERO:** Active code: `for end in range(start, len(nums)):`.
- **CAUSE:** Narration reaches: `Then let the ending position move from `start` to the end of the array.`
- **EFFECT / MOTION:** END pointer/range sweep is linked to the inner loop.
- **WHAT MUST NOT APPEAR YET:** Any future code line; complexity graph; prefix sums; Method2.
- **COMPREHENSION HOLD:** Audio pause of 20 frames (666ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** `for end in range(start, len(nums)):` typed; prior required lines may remain dim.
- **KIT / SYSTEM:** Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.
- **MOTION PURPOSE:** Maintain exact Trace→Code identity.

### BEAT 006 — `S04_A006` (Frames 1196 – 1226)
- **ANCHOR:** > Add the current value to the running sum. (F1196 – F1226)
- **WHAT APPEARS NOW:** Bring the production code surface to center and type only `running_sum += nums[end]` character-by-character on this spoken idea.
- **CENTER-STAGE HERO:** Active code: `running_sum += nums[end]`.
- **CAUSE:** Narration reaches: `Add the current value to the running sum.`
- **EFFECT / MOTION:** One array value semantically contributes to the running sum; source value stays fixed.
- **WHAT MUST NOT APPEAR YET:** Any future code line; complexity graph; prefix sums; Method2.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** `running_sum += nums[end]` typed; prior required lines may remain dim.
- **KIT / SYSTEM:** Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.
- **MOTION PURPOSE:** Maintain exact Trace→Code identity.

### BEAT 007 — `S04_A007` (Frames 1226 – 1264)
- **ANCHOR:** > If the running sum equals `k` … (F1226 – F1264)
- **WHAT APPEARS NOW:** Bring the production code surface to center and type only `if running_sum == k:` character-by-character on this spoken idea.
- **CENTER-STAGE HERO:** Active code: `if running_sum == k:`.
- **CAUSE:** Narration reaches: `If the running sum equals `k` …`
- **EFFECT / MOTION:** Equality test appears against k.
- **WHAT MUST NOT APPEAR YET:** Any future code line; complexity graph; prefix sums; Method2.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** `if running_sum == k:` typed; prior required lines may remain dim.
- **KIT / SYSTEM:** Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.
- **MOTION PURPOSE:** Maintain exact Trace→Code identity.

### BEAT 008 — `S04_A008` (Frames 1264 – 1297)
- **ANCHOR:** > increase the answer by one. (F1264 – F1297)
- **WHAT APPEARS NOW:** Bring the production code surface to center and type only `answer += 1` character-by-character on this spoken idea.
- **CENTER-STAGE HERO:** Active code: `answer += 1`.
- **CAUSE:** Narration reaches: `increase the answer by one.`
- **EFFECT / MOTION:** Answer increases by one.
- **WHAT MUST NOT APPEAR YET:** Any future code line; complexity graph; prefix sums; Method2.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** `answer += 1` typed; prior required lines may remain dim.
- **KIT / SYSTEM:** Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.
- **MOTION PURPOSE:** Maintain exact Trace→Code identity.

### BEAT 009 — `S04_A009` (Frames 1297 – 1340)
- **ANCHOR:** > When this start is finished … (F1297 – F1340)
- **WHAT APPEARS NOW:** Use the already typed nested loops as a compact control-flow proof: current inner scan settles, then START advances. Do not type new code.
- **CENTER-STAGE HERO:** Nested-loop control flow.
- **CAUSE:** Narration reaches: `When this start is finished …`
- **EFFECT / MOTION:** Trace behavior is mapped back to the existing loops.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Exact Method1 code built so far.
- **KIT / SYSTEM:** Production code + compact Array V2 support.
- **MOTION PURPOSE:** Explain loop behavior without adding lines.


---

### BEAT 010 — `S04_A010` (Frames 1340 – 1364)
- **ANCHOR:** > the outer loop moves to the next start. (F1340 – F1364)
- **WHAT APPEARS NOW:** Use the already typed nested loops as a compact control-flow proof: current inner scan settles, then START advances. Do not type new code.
- **CENTER-STAGE HERO:** Nested-loop control flow.
- **CAUSE:** Narration reaches: `the outer loop moves to the next start.`
- **EFFECT / MOTION:** Trace behavior is mapped back to the existing loops.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Exact Method1 code built so far.
- **KIT / SYSTEM:** Production code + compact Array V2 support.
- **MOTION PURPOSE:** Explain loop behavior without adding lines.


---

### BEAT 011 — `S04_A011` (Frames 1364 – 1402)
- **ANCHOR:** > And after all starting positions are processed … (F1364 – F1402)
- **WHAT APPEARS NOW:** Focus the end-of-computation state; keep `return answer` hidden until the next phrase.
- **CENTER-STAGE HERO:** All starts processed.
- **CAUSE:** Narration reaches: `And after all starting positions are processed …`
- **EFFECT / MOTION:** Control exits both loops.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Loops complete; answer ready.
- **KIT / SYSTEM:** Production code.
- **MOTION PURPOSE:** Set up the return statement in exact order.


---

### BEAT 012 — `S04_A012` (Frames 1402 – 1469)
- **ANCHOR:** > return the answer. (F1402 – F1469, pause to F1491)
- **WHAT APPEARS NOW:** Bring the production code surface to center and type only `return answer` character-by-character on this spoken idea.
- **CENTER-STAGE HERO:** Active code: `return answer`.
- **CAUSE:** Narration reaches: `return the answer.`
- **EFFECT / MOTION:** Answer becomes the code output.
- **WHAT MUST NOT APPEAR YET:** Any future code line; complexity graph; prefix sums; Method2.
- **COMPREHENSION HOLD:** Audio pause of 22 frames (733ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** `return answer` typed; prior required lines may remain dim.
- **KIT / SYSTEM:** Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.
- **MOTION PURPOSE:** Maintain exact Trace→Code identity.

### BEAT 013 — `S04_A013` (Frames 1491 – 1514)
- **ANCHOR:** > This code follows the same order as our trace. (F1491 – F1514)
- **WHAT APPEARS NOW:** Reduce code into a compact trace-to-code identity and emphasize `Trace→Code identity` only.
- **CENTER-STAGE HERO:** Trace→Code identity
- **CAUSE:** Narration reaches: `This code follows the same order as our trace.`
- **EFFECT / MOTION:** One previously executed trace action maps to the corresponding code structure.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 code understood.
- **KIT / SYSTEM:** ChalkText + existing code surface reduced.
- **MOTION PURPOSE:** Prove the code is the same algorithm as Scene03.


---

### BEAT 014 — `S04_A014` (Frames 1514 – 1560)
- **ANCHOR:** > Choose start … (F1514 – F1560)
- **WHAT APPEARS NOW:** Reduce code into a compact trace-to-code identity and emphasize `CHOOSE START` only.
- **CENTER-STAGE HERO:** CHOOSE START
- **CAUSE:** Narration reaches: `Choose start …`
- **EFFECT / MOTION:** One previously executed trace action maps to the corresponding code structure.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 code understood.
- **KIT / SYSTEM:** ChalkText + existing code surface reduced.
- **MOTION PURPOSE:** Prove the code is the same algorithm as Scene03.


---

### BEAT 015 — `S04_A015` (Frames 1560 – 1601)
- **ANCHOR:** > reset sum … (F1560 – F1601)
- **WHAT APPEARS NOW:** Reduce code into a compact trace-to-code identity and emphasize `RESET SUM` only.
- **CENTER-STAGE HERO:** RESET SUM
- **CAUSE:** Narration reaches: `reset sum …`
- **EFFECT / MOTION:** One previously executed trace action maps to the corresponding code structure.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 code understood.
- **KIT / SYSTEM:** ChalkText + existing code surface reduced.
- **MOTION PURPOSE:** Prove the code is the same algorithm as Scene03.


---

### BEAT 016 — `S04_A016` (Frames 1601 – 1618)
- **ANCHOR:** > extend end … (F1601 – F1618)
- **WHAT APPEARS NOW:** Reduce code into a compact trace-to-code identity and emphasize `EXTEND END` only.
- **CENTER-STAGE HERO:** EXTEND END
- **CAUSE:** Narration reaches: `extend end …`
- **EFFECT / MOTION:** One previously executed trace action maps to the corresponding code structure.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 code understood.
- **KIT / SYSTEM:** ChalkText + existing code surface reduced.
- **MOTION PURPOSE:** Prove the code is the same algorithm as Scene03.


---

### BEAT 017 — `S04_A017` (Frames 1618 – 1659)
- **ANCHOR:** > update sum … (F1618 – F1659)
- **WHAT APPEARS NOW:** Reduce code into a compact trace-to-code identity and emphasize `UPDATE SUM` only.
- **CENTER-STAGE HERO:** UPDATE SUM
- **CAUSE:** Narration reaches: `update sum …`
- **EFFECT / MOTION:** One previously executed trace action maps to the corresponding code structure.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 code understood.
- **KIT / SYSTEM:** ChalkText + existing code surface reduced.
- **MOTION PURPOSE:** Prove the code is the same algorithm as Scene03.


---

### BEAT 018 — `S04_A018` (Frames 1659 – 1684)
- **ANCHOR:** > count a match. (F1659 – F1684)
- **WHAT APPEARS NOW:** Reduce code into a compact trace-to-code identity and emphasize `COUNT MATCH` only.
- **CENTER-STAGE HERO:** COUNT MATCH
- **CAUSE:** Narration reaches: `count a match.`
- **EFFECT / MOTION:** One previously executed trace action maps to the corresponding code structure.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 code understood.
- **KIT / SYSTEM:** ChalkText + existing code surface reduced.
- **MOTION PURPOSE:** Prove the code is the same algorithm as Scene03.


---

### BEAT 019 — `S04_A019` (Frames 1684 – 1723)
- **ANCHOR:** > Now let us look at the time complexity. (F1684 – F1723)
- **WHAT APPEARS NOW:** Clear code to the side/reduced state and bring an empty complexity-growth stage to center; no Big-O curve yet.
- **CENTER-STAGE HERO:** Complexity stage.
- **CAUSE:** Narration reaches: `Now let us look at the time complexity.`
- **EFFECT / MOTION:** Semantic handoff code → complexity.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 code complete.
- **KIT / SYSTEM:** Generic complexity graph required; MiniGraph forbidden.
- **MOTION PURPOSE:** Prepare complexity reasoning.


---

### BEAT 020 — `S04_A020` (Frames 1723 – 1739)
- **ANCHOR:** > For the first start, we may inspect `n` elements. (F1723 – F1739)
- **WHAT APPEARS NOW:** Show one row of work labeled `n` for the first start; no curve yet.
- **CENTER-STAGE HERO:** First start does n work.
- **CAUSE:** Narration reaches: `For the first start, we may inspect `n` elements.`
- **EFFECT / MOTION:** Show one row of work labeled `n` for the first start; no curve yet.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 time complexity reasoning.
- **KIT / SYSTEM:** Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.
- **MOTION PURPOSE:** Teach why Method1 is quadratic.


---

### BEAT 021 — `S04_A021` (Frames 1739 – 1793)
- **ANCHOR:** > For the next start … `n minus one`. (F1739 – F1793, pause to F1810)
- **WHAT APPEARS NOW:** Add a second shorter row labeled `n-1`.
- **CENTER-STAGE HERO:** Second start does n-1 work.
- **CAUSE:** Narration reaches: `For the next start … `n minus one`.`
- **EFFECT / MOTION:** Add a second shorter row labeled `n-1`.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 17 frames (566ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 time complexity reasoning.
- **KIT / SYSTEM:** Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.
- **MOTION PURPOSE:** Teach why Method1 is quadratic.


---

### BEAT 022 — `S04_A022` (Frames 1810 – 1825)
- **ANCHOR:** > Then `n minus two`. (F1810 – F1825)
- **WHAT APPEARS NOW:** Add the next shorter row `n-2`.
- **CENTER-STAGE HERO:** Shrinking nested work.
- **CAUSE:** Narration reaches: `Then `n minus two`.`
- **EFFECT / MOTION:** Add the next shorter row `n-2`.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 time complexity reasoning.
- **KIT / SYSTEM:** Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.
- **MOTION PURPOSE:** Teach why Method1 is quadratic.


---

### BEAT 023 — `S04_A023` (Frames 1825 – 1852)
- **ANCHOR:** > And so on. (F1825 – F1852, pause to F1907)
- **WHAT APPEARS NOW:** Continue the staircase conceptually without filling every row.
- **CENTER-STAGE HERO:** Nested work staircase.
- **CAUSE:** Narration reaches: `And so on.`
- **EFFECT / MOTION:** Continue the staircase conceptually without filling every row.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 55 frames (1833ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 time complexity reasoning.
- **KIT / SYSTEM:** Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.
- **MOTION PURPOSE:** Teach why Method1 is quadratic.


---

### BEAT 024 — `S04_A024` (Frames 1907 – 2009)
- **ANCHOR:** > So the total work is: (F1907 – F2009)
- **WHAT APPEARS NOW:** Collapse the staircase into a summation scaffold.
- **CENTER-STAGE HERO:** Total work.
- **CAUSE:** Narration reaches: `So the total work is:`
- **EFFECT / MOTION:** Collapse the staircase into a summation scaffold.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 time complexity reasoning.
- **KIT / SYSTEM:** Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.
- **MOTION PURPOSE:** Teach why Method1 is quadratic.


---

### BEAT 025 — `S04_A025` (Frames 2009 – 2023)
- **ANCHOR:** > `n + n minus one + n minus two ... + one`. (F2009 – F2023)
- **WHAT APPEARS NOW:** Write `n + (n-1) + (n-2) + ... + 1`.
- **CENTER-STAGE HERO:** Triangular work sum.
- **CAUSE:** Narration reaches: ``n + n minus one + n minus two ... + one`.`
- **EFFECT / MOTION:** Write `n + (n-1) + (n-2) + ... + 1`.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 time complexity reasoning.
- **KIT / SYSTEM:** Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.
- **MOTION PURPOSE:** Teach why Method1 is quadratic.


---

### BEAT 026 — `S04_A026` (Frames 2023 – 2033)
- **ANCHOR:** > That is proportional to `n squared`. (F2023 – F2033)
- **WHAT APPEARS NOW:** Transform the work sum into a quadratic-growth cue `∝ n²`; still do not show the final Big-O label before the next phrase.
- **CENTER-STAGE HERO:** Quadratic growth.
- **CAUSE:** Narration reaches: `That is proportional to `n squared`.`
- **EFFECT / MOTION:** Transform the work sum into a quadratic-growth cue `∝ n²`; still do not show the final Big-O label before the next phrase.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 time complexity reasoning.
- **KIT / SYSTEM:** Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.
- **MOTION PURPOSE:** Teach why Method1 is quadratic.


---

### BEAT 027 — `S04_A027` (Frames 2033 – 2050)
- **ANCHOR:** > So the time complexity is `O of n squared`. (F2033 – F2050)
- **WHAT APPEARS NOW:** Reveal `O(n²)` and draw a generic quadratic curve left-to-right; no benchmark numbers.
- **CENTER-STAGE HERO:** O(n²) curve.
- **CAUSE:** Narration reaches: `So the time complexity is `O of n squared`.`
- **EFFECT / MOTION:** Reveal `O(n²)` and draw a generic quadratic curve left-to-right; no benchmark numbers.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 time complexity reasoning.
- **KIT / SYSTEM:** Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.
- **MOTION PURPOSE:** Teach why Method1 is quadratic.

### BEAT 028 — `S04_A028` (Frames 2050 – 2108)
- **ANCHOR:** > For auxiliary space … (F2050 – F2108)
- **WHAT APPEARS NOW:** Remove the time graph and open a tiny scalar-state memory stage.
- **CENTER-STAGE HERO:** Auxiliary-space state.
- **CAUSE:** Narration reaches: `For auxiliary space …`
- **EFFECT / MOTION:** Semantic handoff time → space.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 time O(n²) already learned.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Avoid packing time and space graphics together.


---

### BEAT 029 — `S04_A029` (Frames 2108 – 2131)
- **ANCHOR:** > we only keep a few variables. (F2108 – F2131)
- **WHAT APPEARS NOW:** Show four empty scalar slots only.
- **CENTER-STAGE HERO:** Scalar-state memory.
- **CAUSE:** Narration reaches: `we only keep a few variables.`
- **EFFECT / MOTION:** Show four empty scalar slots only.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Constant number of scalars.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Teach constant auxiliary memory.


---

### BEAT 030 — `S04_A030` (Frames 2131 – 2179)
- **ANCHOR:** > Start … (F2131 – F2179)
- **WHAT APPEARS NOW:** Label first scalar `start`.
- **CENTER-STAGE HERO:** Scalar-state memory.
- **CAUSE:** Narration reaches: `Start …`
- **EFFECT / MOTION:** Label first scalar `start`.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Constant number of scalars.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Teach constant auxiliary memory.


---

### BEAT 031 — `S04_A031` (Frames 2179 – 2210)
- **ANCHOR:** > end … (F2179 – F2210)
- **WHAT APPEARS NOW:** Add `end`.
- **CENTER-STAGE HERO:** Scalar-state memory.
- **CAUSE:** Narration reaches: `end …`
- **EFFECT / MOTION:** Add `end`.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Constant number of scalars.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Teach constant auxiliary memory.


---

### BEAT 032 — `S04_A032` (Frames 2210 – 2242)
- **ANCHOR:** > running sum … (F2210 – F2242)
- **WHAT APPEARS NOW:** Add `running sum`.
- **CENTER-STAGE HERO:** Scalar-state memory.
- **CAUSE:** Narration reaches: `running sum …`
- **EFFECT / MOTION:** Add `running sum`.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Constant number of scalars.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Teach constant auxiliary memory.


---

### BEAT 033 — `S04_A033` (Frames 2242 – 2265)
- **ANCHOR:** > and answer. (F2242 – F2265)
- **WHAT APPEARS NOW:** Add `answer`.
- **CENTER-STAGE HERO:** Scalar-state memory.
- **CAUSE:** Narration reaches: `and answer.`
- **EFFECT / MOTION:** Add `answer`.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Constant number of scalars.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Teach constant auxiliary memory.


---

### BEAT 034 — `S04_A034` (Frames 2265 – 2276)
- **ANCHOR:** > So the auxiliary space is `O of one`. (F2265 – F2276)
- **WHAT APPEARS NOW:** Collapse the fixed four-scalar set into `O(1)` auxiliary space.
- **CENTER-STAGE HERO:** O(1) auxiliary-space proof.
- **CAUSE:** Narration reaches: `So the auxiliary space is `O of one`.`
- **EFFECT / MOTION:** Collapse the fixed four-scalar set into `O(1)` auxiliary space.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 space O(1).
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Teach constant auxiliary memory.

### BEAT 035 — `S04_A035` (Frames 2265 – 2276)
- **ANCHOR:** > Method One is correct. (F2265 – F2276)
- **WHAT APPEARS NOW:** Clear complexity objects; show compact `METHOD 1 ✓ CORRECT` only.
- **CENTER-STAGE HERO:** Method1 correctness.
- **CAUSE:** Narration reaches: `Method One is correct.`
- **EFFECT / MOTION:** Complexity discussion settles.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Method1 correct, O(n²)/O(1).
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Separate correctness from optimization.


---

### BEAT 036 — `S04_A036` (Frames 2265 – 2276)
- **ANCHOR:** > But our problem is the repeated range-sum work. (F2265 – F2276)
- **WHAT APPEARS NOW:** Replace the correctness stamp with the overlap/rebuild cue from Scene03.
- **CENTER-STAGE HERO:** Repeated range-sum work.
- **CAUSE:** Narration reaches: `But our problem is the repeated range-sum work.`
- **EFFECT / MOTION:** The optimization problem returns.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Repeated-work problem.
- **KIT / SYSTEM:** ChalkText + quiet array trail if needed.
- **MOTION PURPOSE:** Bridge code analysis into derivation.


---

### BEAT 037 — `S04_A037` (Frames 2265 – 2276)
- **ANCHOR:** > Can we know the sum of a range … (F2265 – F2276)
- **WHAT APPEARS NOW:** Write the question scaffold `Can we know a range sum ...` with a blank result area.
- **CENTER-STAGE HERO:** Range-sum question.
- **CAUSE:** Narration reaches: `Can we know the sum of a range …`
- **EFFECT / MOTION:** Learner is asked for a reusable representation.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Open question.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Create the derivation need.


---

### BEAT 038 — `S04_A038` (Frames 2265 – 2276)
- **ANCHOR:** > without rebuilding that whole range again? (F2265 – F2276)
- **WHAT APPEARS NOW:** Complete the question with `without rebuilding the range?` and erase/reduce the old overlap trails.
- **CENTER-STAGE HERO:** `without rebuilding?`.
- **CAUSE:** Narration reaches: `without rebuilding that whole range again?`
- **EFFECT / MOTION:** Old Method1 detail clears.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Open range-sum question.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** Make the conceptual gap explicit.


---

### BEAT 039 — `S04_A039` (Frames 2265 – 2276)
- **ANCHOR:** > That question leads us to prefix sums. (F2265 – F2276)
- **WHAT APPEARS NOW:** Reveal only the label `PREFIX SUMS` as the next idea; no prefix values/equation yet.
- **CENTER-STAGE HERO:** `PREFIX SUMS`.
- **CAUSE:** Narration reaches: `That question leads us to prefix sums.`
- **EFFECT / MOTION:** Scene hands off to Scene05.
- **WHAT MUST NOT APPEAR YET:** Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Do not add clutter; preserve only state needed for the next phrase.
- **PERSISTENT STATE:** Prefix-sum concept named, not explained.
- **KIT / SYSTEM:** ChalkText.
- **MOTION PURPOSE:** No-spoiler transition into the next derivation.


---
