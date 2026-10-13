# Q16 — Subarray Sum Equals K (LC 560)
# Scene 08 · Comparison, Pitfalls & Edge Cases
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Problem:** #016 Subarray Sum Equals K · LC 560 · Medium  
**Audio File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/audio/scence08.mp3` (`remotion-project/public/audio/016/08-compare-mistakes-edgecases.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/sync/08-compare-mistakes-edgecases.json`  
**FPS:** 30  
**Audio Duration:** 60.520s (60,520 ms)  
**Exact Total Frames:** 1816 frames (60.520 seconds @ 30fps)  
**Total Beats:** 19 beats (100% matched to unzipped word-plan)

---

## 1. Mandatory Scene Contract

```text
SCENE: 08-compare-mistakes-edgecases
QUESTION: 016 · Subarray Sum Equals K (LeetCode 560)
BEAT TYPE: INTERVIEW READINESS & METHOD COMPARISON
AUDIO FILE: audio/016/08-compare-mistakes-edgecases.mp3
SYNC FILE: sync/08-compare-mistakes-edgecases.json
FPS: 30
TOTAL FRAMES: 1816
BEATS COUNT: 19
PEDAGOGICAL GOAL: Strictly faithful to approved Phase 9 V3 word-based visual plan.
```

---

## 2. Framewise Beat Choreography

### BEAT 001 — `S08_A001` (Frames 0 – 38)
- **ANCHOR:** > Quick comparison. (F0 – F38, pause to F53)
- **WHAT APPEARS NOW:** Clear prior code. Open a clean center complexity stage; no curves yet.
- **CENTER-STAGE HERO:** Comparison stage.
- **CAUSE:** Narration reaches: “Quick comparison.”
- **EFFECT / MOTION:** A lightweight comparison label enters.
- **WHAT MUST NOT APPEAR YET:** No O(n²), O(n), mistakes, or edge cases before spoken.
- **COMPREHENSION HOLD:** Audio pause of 15 frames (500ms) observed following speech.
- **CLEANUP / EXIT:** Keep empty graph axes only if needed; otherwise title alone.
- **PERSISTENT STATE:** None.
- **KIT / SYSTEM:** SceneLabelStrip + ComplexityGrowthGraphV2 shell
- **MOTION PURPOSE:** Start minimal compare without dashboard.

### BEAT 002 — `S08_A002` (Frames 53 – 181)
- **ANCHOR:** > Method One ... running-sum enumeration. (F53 – F181, pause to F445)
- **WHAT APPEARS NOW:** Show Method1 label and a tiny nested-range icon from ArrayTrackV2; no trace replay.
- **CENTER-STAGE HERO:** Method1 identity.
- **CAUSE:** Narration reaches: “Method One ... running-sum enumeration.”
- **EFFECT / MOTION:** One compact identity cue.
- **WHAT MUST NOT APPEAR YET:** No full nested-loop execution.
- **COMPREHENSION HOLD:** Audio pause of 264 frames (8800ms) observed following speech.
- **CLEANUP / EXIT:** Keep label for its complexity.
- **PERSISTENT STATE:** Method1 = running-sum enumeration.
- **KIT / SYSTEM:** ArrayTrackV2 + ChalkText
- **MOTION PURPOSE:** Name method only.

### BEAT 003 — `S08_A003` (Frames 445 – 570)
- **ANCHOR:** > Time ... `O of n squared`. (F445 – F570)
- **WHAT APPEARS NOW:** Draw only the quadratic rough curve left-to-right; `O(n²)` appears with it.
- **CENTER-STAGE HERO:** O(n²) curve.
- **CAUSE:** Narration reaches: “Time ... `O of n squared`.”
- **EFFECT / MOTION:** Quadratic growth becomes active in warn/coral semantic color.
- **WHAT MUST NOT APPEAR YET:** Do not show O(n) curve yet. No benchmark numbers.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep curve dimmed for later comparison.
- **PERSISTENT STATE:** Method1 time O(n²).
- **KIT / SYSTEM:** ComplexityGrowthGraphV2 (RoughLine/RoughCurve/ChalkText)
- **MOTION PURPOSE:** Show complexity visually when spoken.

**COMPLEXITY CONTRACT:** curve type = quadratic; cause = many starts × many ends; mathematical growth only.

### BEAT 004 — `S08_A004` (Frames 570 – 644)
- **ANCHOR:** > Auxiliary space ... `O of one`. (F570 – F644)
- **WHAT APPEARS NOW:** Switch to a separate flat O(1) memory-growth mini graph; time curve reduces.
- **CENTER-STAGE HERO:** O(1) auxiliary-space curve.
- **CAUSE:** Narration reaches: “Auxiliary space ... `O of one`.”
- **EFFECT / MOTION:** Flat rough line draws once; a few scalar variable marks support it.
- **WHAT MUST NOT APPEAR YET:** Do not show Method2 yet.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Clear O(1) graph after settle.
- **PERSISTENT STATE:** Method1 space O(1).
- **KIT / SYSTEM:** ComplexityGrowthGraphV2 + ChalkText
- **MOTION PURPOSE:** Visualize space complexity without mixing graphs.

### BEAT 005 — `S08_A005` (Frames 644 – 701)
- **ANCHOR:** > Method Two ... prefix sum plus frequency HashMap. (F644 – F701)
- **WHAT APPEARS NOW:** Bring a minimal prefix token on left and FrequencyMapTableV2 on right; no trace values.
- **CENTER-STAGE HERO:** Method2 identity.
- **CAUSE:** Narration reaches: “Method Two ... prefix sum plus frequency HashMap.”
- **EFFECT / MOTION:** One relation `needed → frequency` appears.
- **WHAT MUST NOT APPEAR YET:** No master trace replay.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep identity for complexity.
- **PERSISTENT STATE:** Method2 = prefix + frequency map.
- **KIT / SYSTEM:** FrequencyMapTableV2 + ChalkText + RoughLine
- **MOTION PURPOSE:** Name optimal method succinctly.

### BEAT 006 — `S08_A006` (Frames 701 – 790)
- **ANCHOR:** > Expected time ... `O of n`. (F701 – F790)
- **WHAT APPEARS NOW:** Bring back dimmed O(n²) curve, then draw active O(n) rough line left-to-right.
- **CENTER-STAGE HERO:** Expected O(n) curve.
- **CAUSE:** Narration reaches: “Expected time ... `O of n`.”
- **EFFECT / MOTION:** Linear curve becomes active; quadratic remains dim context only.
- **WHAT MUST NOT APPEAR YET:** No benchmark numbers; no claim of worst-case deterministic HashMap time.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Clear time comparison after settle.
- **PERSISTENT STATE:** Method2 expected time O(n).
- **KIT / SYSTEM:** ComplexityGrowthGraphV2
- **MOTION PURPOSE:** Show growth-class improvement.

**COMPLEXITY CONTRACT:** active curve = linear; previous quadratic dimmed; reason = one array pass + expected O(1) map work per element.

### BEAT 007 — `S08_A007` (Frames 790 – 888)
- **ANCHOR:** > Auxiliary space ... `O of n`. (F790 – F888, pause to F1680)
- **WHAT APPEARS NOW:** Show linear memory-growth curve with a small frequency-map row count cue.
- **CENTER-STAGE HERO:** O(n) auxiliary-space curve.
- **CAUSE:** Narration reaches: “Auxiliary space ... `O of n`.”
- **EFFECT / MOTION:** Memory curve grows linearly as distinct prefix keys may accumulate.
- **WHAT MUST NOT APPEAR YET:** Do not keep time curves packed beside it.
- **COMPREHENSION HOLD:** Audio pause of 792 frames (26400ms) observed following speech.
- **CLEANUP / EXIT:** Clear complexity stage before mistakes.
- **PERSISTENT STATE:** Method2 space O(n).
- **KIT / SYSTEM:** ComplexityGrowthGraphV2 + FrequencyMapTableV2
- **MOTION PURPOSE:** Teach memory growth cleanly.

### BEAT 008 — `S08_A008` (Frames 1680 – 1763)
- **ANCHOR:** > Key mistakes. (F1680 – F1763)
- **WHAT APPEARS NOW:** Complexity clears completely. One centered `MISTAKES` label enters; one point at a time only.
- **CENTER-STAGE HERO:** Mistake checklist mode.
- **CAUSE:** Narration reaches: “Key mistakes.”
- **EFFECT / MOTION:** Mode transition only.
- **WHAT MUST NOT APPEAR YET:** Do not pre-render all mistakes.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep empty point stage.
- **PERSISTENT STATE:** None.
- **KIT / SYSTEM:** SceneLabelStrip + ChalkText
- **MOTION PURPOSE:** Prevent dashboard/list dump.

### BEAT 009 — `S08_A009` (Frames 1763 – 1793)
- **ANCHOR:** > Normal sliding window is not reliable when negative numbers are allowed. (F1763 – F1793)
- **WHAT APPEARS NOW:** Show `[4,-1]`, target 3, with “sum > k” crossed as a safe-stop rule.
- **CENTER-STAGE HERO:** Negative-number warning.
- **CAUSE:** Narration reaches: “Normal sliding window is not reliable when negative numbers are allowed.”
- **EFFECT / MOTION:** Single counterexample cue proves the mistake; no extended trace.
- **WHAT MUST NOT APPEAR YET:** Do not replay Scene02 explanation.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Clear tiny example.
- **PERSISTENT STATE:** Sliding-window stop rule unsafe with negatives.
- **KIT / SYSTEM:** ArrayTrackV2 + RoughLine + ChalkText
- **MOTION PURPOSE:** Recall one essential mistake.

### BEAT 010 — `S08_A010` (Frames 1793 – 1816)
- **ANCHOR:** > Store prefix frequency ... not only existence. (F1793 – F1816)
- **WHAT APPEARS NOW:** Show one key with count `2`; reject boolean `yes`.
- **CENTER-STAGE HERO:** Frequency over existence.
- **CAUSE:** Narration reaches: “Store prefix frequency ... not only existence.”
- **EFFECT / MOTION:** Frequency badge confirms.
- **WHAT MUST NOT APPEAR YET:** No full map.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep frequency meaning only.
- **PERSISTENT STATE:** Map stores counts.
- **KIT / SYSTEM:** FrequencyMapTableV2 + CountUp
- **MOTION PURPOSE:** Lock data meaning.

### BEAT 011 — `S08_A011` (Frames 1801 – 1816)
- **ANCHOR:** > Start with: zero maps to one. (F1801 – F1816)
- **WHAT APPEARS NOW:** Show only `{0→1}` row.
- **CENTER-STAGE HERO:** Initialization rule.
- **CAUSE:** Narration reaches: “Start with: zero maps to one.”
- **EFFECT / MOTION:** Row appears and confirms.
- **WHAT MUST NOT APPEAR YET:** No other entries.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Clear after point.
- **PERSISTENT STATE:** Initial empty-prefix count.
- **KIT / SYSTEM:** FrequencyMapTableV2
- **MOTION PURPOSE:** Recall initialization.

### BEAT 012 — `S08_A012` (Frames 1801 – 1816)
- **ANCHOR:** > Query before inserting the current prefix. (F1801 – F1816)
- **WHAT APPEARS NOW:** Show two labels `QUERY → INSERT`; current token stays outside map until after arrow reaches query.
- **CENTER-STAGE HERO:** Correct order.
- **CAUSE:** Narration reaches: “Query before inserting the current prefix.”
- **EFFECT / MOTION:** Query highlights first; insert second.
- **WHAT MUST NOT APPEAR YET:** No `[0]` mini trace.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Clear order cue.
- **PERSISTENT STATE:** Earlier-only invariant.
- **KIT / SYSTEM:** FrequencyMapTableV2 + RoughLine
- **MOTION PURPOSE:** Recall correctness order.

### BEAT 013 — `S08_A013` (Frames 1801 – 1816)
- **ANCHOR:** > And remember ... array index and prefix position are different. (F1801 – F1816)
- **WHAT APPEARS NOW:** Show one array index `i` under a slot and one boundary marker `P(i+1)` between/after slots.
- **CENTER-STAGE HERO:** Index vs prefix-position distinction.
- **CAUSE:** Narration reaches: “And remember ... array index and prefix position are different.”
- **EFFECT / MOTION:** Two labels separate spatially; no full prefix derivation.
- **WHAT MUST NOT APPEAR YET:** No prefix sequence.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Clear distinction cue.
- **PERSISTENT STATE:** Index identity differs from prefix boundary identity.
- **KIT / SYSTEM:** ArrayTrackV2 + ChalkText + RoughLine
- **MOTION PURPOSE:** Prevent off-by-one mental model.

### BEAT 014 — `S08_A014` (Frames 1801 – 1816)
- **ANCHOR:** > Important edge cases. (F1801 – F1816)
- **WHAT APPEARS NOW:** Clear mistakes; open one center example slot.
- **CENTER-STAGE HERO:** Edge-case mode.
- **CAUSE:** Narration reaches: “Important edge cases.”
- **EFFECT / MOTION:** Transition only.
- **WHAT MUST NOT APPEAR YET:** Do not show all cases at once.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep stage empty until first case.
- **PERSISTENT STATE:** None.
- **KIT / SYSTEM:** SceneLabelStrip
- **MOTION PURPOSE:** Maintain minimality.

### BEAT 015 — `S08_A015` (Frames 1801 – 1816)
- **ANCHOR:** > `[3]`, target three ... answer one. (F1801 – F1816)
- **WHAT APPEARS NOW:** Show single-cell array `[3]`, target 3, answer 1.
- **CENTER-STAGE HERO:** Single-element valid subarray.
- **CAUSE:** Narration reaches: “`[3]`, target three ... answer one.”
- **EFFECT / MOTION:** Cell confirms once.
- **WHAT MUST NOT APPEAR YET:** No general trace.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Replace for next case.
- **PERSISTENT STATE:** Edge result locked.
- **KIT / SYSTEM:** ArrayTrackV2 + CountUp
- **MOTION PURPOSE:** Compact correctness reminder.

### BEAT 016 — `S08_A016` (Frames 1801 – 1816)
- **ANCHOR:** > `[0]`, target zero ... answer one. (F1801 – F1816)
- **WHAT APPEARS NOW:** Replace with `[0]`, target 0, answer 1.
- **CENTER-STAGE HERO:** Zero target single value.
- **CAUSE:** Narration reaches: “`[0]`, target zero ... answer one.”
- **EFFECT / MOTION:** One confirm reaction.
- **WHAT MUST NOT APPEAR YET:** No query-before-insert proof replay.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Replace for next case.
- **PERSISTENT STATE:** Edge result locked.
- **KIT / SYSTEM:** ArrayTrackV2 + CountUp
- **MOTION PURPOSE:** Compact edge reminder.

### BEAT 017 — `S08_A017` (Frames 1801 – 1816)
- **ANCHOR:** > `[0, 0, 0]`, target zero ... answer six. (F1801 – F1816)
- **WHAT APPEARS NOW:** Replace with three-zero array and show final count 6 only; do not enumerate six ranges.
- **CENTER-STAGE HERO:** Multiplicity edge result.
- **CAUSE:** Narration reaches: “`[0, 0, 0]`, target zero ... answer six.”
- **EFFECT / MOTION:** Answer 6 writes/rolls in as final result.
- **WHAT MUST NOT APPEAR YET:** Do not trace all six subarrays.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Clear edge example after settle.
- **PERSISTENT STATE:** Multiplicity can exceed n.
- **KIT / SYSTEM:** ArrayTrackV2 + CountUp
- **MOTION PURPOSE:** Show important multiplicity edge without expanding.

### BEAT 018 — `S08_A018` (Frames 1801 – 1816)
- **ANCHOR:** > The key rule is: (F1801 – F1816)
- **WHAT APPEARS NOW:** Clear examples; return to one center formula line.
- **CENTER-STAGE HERO:** Final counting rule.
- **CAUSE:** Narration reaches: “The key rule is:”
- **EFFECT / MOTION:** Formula stage enters.
- **WHAT MUST NOT APPEAR YET:** Do not restate whole algorithm.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep for final phrase.
- **PERSISTENT STATE:** None.
- **KIT / SYSTEM:** ChalkText
- **MOTION PURPOSE:** Land one takeaway.

### BEAT 019 — `S08_A019` (Frames 1801 – 1816)
- **ANCHOR:** > answer plus equals frequency of needed prefix. (F1801 – F1816)
- **WHAT APPEARS NOW:** Write `answer += freq[needed]` semantically (not as a new implementation line).
- **CENTER-STAGE HERO:** Counting rule.
- **CAUSE:** Narration reaches: “answer plus equals frequency of needed prefix.”
- **EFFECT / MOTION:** Frequency term flows into answer symbol and settles.
- **WHAT MUST NOT APPEAR YET:** No code editor, no trace replay.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Clear to neutral end state.
- **PERSISTENT STATE:** Answer increments by count of earlier needed prefixes.
- **KIT / SYSTEM:** ChalkText + RoughLine + CountUp concept
- **MOTION PURPOSE:** End with one durable rule.
