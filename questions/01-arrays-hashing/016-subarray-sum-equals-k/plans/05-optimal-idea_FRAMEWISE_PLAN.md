# Q16 — Subarray Sum Equals K (LC 560)
# Scene 05 · Optimal Method 2 Idea — Prefix Math & Frequency Map
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Problem:** #016 Subarray Sum Equals K · LC 560 · Medium  
**Audio File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/audio/scence05.mp3` (`remotion-project/public/audio/016/05-optimal-idea.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/016-subarray-sum-equals-k/sync/05-optimal-idea.json`  
**FPS:** 30  
**Audio Duration:** 76.840s (76,840 ms)  
**Exact Total Frames:** 2305 frames (76.840 seconds @ 30fps)  
**Total Beats:** 33 beats (100% matched to unzipped word-plan)

---

## 1. Mandatory Scene Contract

```text
SCENE: 05-optimal-idea
QUESTION: 016 · Subarray Sum Equals K (LeetCode 560)
BEAT TYPE: OPTIMAL INTUITION & PREFIX FREQUENCY DERIVATION
AUDIO FILE: audio/016/05-optimal-idea.mp3
SYNC FILE: sync/05-optimal-idea.json
FPS: 30
TOTAL FRAMES: 2305
BEATS COUNT: 33
PEDAGOGICAL GOAL: Strictly faithful to approved Phase 9 V3 word-based visual plan.
```

---

## 2. Framewise Beat Choreography

### BEAT 001 — `S05_A001` (Frames 0 – 195)
- **ANCHOR:** > We do not want to rebuild the same overlapping sums again and again. (F0 – F195)
- **WHAT APPEARS NOW:** Carry forward a restrained ghost of two overlapping Method-1 ranges, then reduce them immediately.
- **CENTER-STAGE HERO:** Repeated overlapping work.
- **CAUSE:** Narration reaches: “We do not want to rebuild the same overlapping sums again and again.”
- **EFFECT / MOTION:** The duplicated overlap receives one warning/focus reaction; no prefix structure yet.
- **WHAT MUST NOT APPEAR YET:** No prefix equation, HashMap, frequency, `{0 → 1}`, or optimal order.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Erase/reduce the duplicate-range cue once the problem is restated.
- **PERSISTENT STATE:** Only the idea “repeated work should disappear” persists.
- **KIT / SYSTEM:** ArrayTrackV2 + PartitionBandV2 + ChalkText
- **MOTION PURPOSE:** Bridge Method1 failure to one new question.

### BEAT 002 — `S05_A002` (Frames 195 – 263)
- **ANCHOR:** > Suppose the current prefix sum is `S`. (F195 – F263)
- **WHAT APPEARS NOW:** Replace the overlap cue with a single large chalk symbol `S` at center. The array stays quiet support only.
- **CENTER-STAGE HERO:** Current prefix `S`.
- **CAUSE:** Narration reaches: “Suppose the current prefix sum is `S`.”
- **EFFECT / MOTION:** `S` writes on in place; no traversal is executed.
- **WHAT MUST NOT APPEAR YET:** No `S-k`, map, frequency, answer update, or master-array trace.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep `S`; remove old Method1 range emphasis.
- **PERSISTENT STATE:** Current cumulative state is named `S`.
- **KIT / SYSTEM:** ChalkText + RoughBox (minimal focus shell only if needed)
- **MOTION PURPOSE:** Introduce only the symbol needed for the relation.

### BEAT 003 — `S05_A003` (Frames 263 – 319)
- **ANCHOR:** > For a subarray sum to be exactly `k` ... (F263 – F319, pause to F353)
- **WHAT APPEARS NOW:** Bring `k` beside `S` as a target constraint, without solving the relation yet.
- **CENTER-STAGE HERO:** The condition “subarray sum = k”.
- **CAUSE:** Narration reaches: “For a subarray sum to be exactly `k` ...”
- **EFFECT / MOTION:** Target `k` receives focus; `S` remains stable.
- **WHAT MUST NOT APPEAR YET:** Do not reveal the needed earlier prefix yet.
- **COMPREHENSION HOLD:** Audio pause of 34 frames (1133ms) observed following speech.
- **CLEANUP / EXIT:** Keep `S` and `k`.
- **PERSISTENT STATE:** Target is fixed.
- **KIT / SYSTEM:** ChalkText + RoughLine
- **MOTION PURPOSE:** Set the condition before deriving the lookup.

### BEAT 004 — `S05_A004` (Frames 353 – 423)
- **ANCHOR:** > we need an earlier prefix equal to ... (F353 – F423)
- **WHAT APPEARS NOW:** Reveal an empty “earlier prefix = ?” chalk slot on the left of the equation.
- **CENTER-STAGE HERO:** Unknown earlier prefix.
- **CAUSE:** Narration reaches: “we need an earlier prefix equal to ...”
- **EFFECT / MOTION:** A relation line connects current `S` to the unknown earlier prefix, but the value stays unresolved.
- **WHAT MUST NOT APPEAR YET:** Do not show `S-k` until it is spoken.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep unresolved relation.
- **PERSISTENT STATE:** Earlier prefix is the unknown being solved for.
- **KIT / SYSTEM:** ChalkText + RoughLine + RoughBox
- **MOTION PURPOSE:** Create the exact question the HashMap will later answer.

### BEAT 005 — `S05_A005` (Frames 423 – 469)
- **ANCHOR:** > `S minus k`. (F423 – F469, pause to F489)
- **WHAT APPEARS NOW:** Resolve the unknown to `S - k` and underline it in focus color.
- **CENTER-STAGE HERO:** `S - k`.
- **CAUSE:** Narration reaches: “`S minus k`.”
- **EFFECT / MOTION:** The unknown label morphs/replaces into `S-k`; this is a semantic state change, not a trace.
- **WHAT MUST NOT APPEAR YET:** No map, frequency, or answer yet.
- **COMPREHENSION HOLD:** Audio pause of 20 frames (666ms) observed following speech.
- **CLEANUP / EXIT:** Keep `S-k` centered.
- **PERSISTENT STATE:** Needed earlier prefix = `S-k`.
- **KIT / SYSTEM:** ChalkText + RoughLine
- **MOTION PURPOSE:** Land the only equation needed by this scene.

### BEAT 006 — `S05_A006` (Frames 489 – 524)
- **ANCHOR:** > So at every position ... (F489 – F524, pause to F541)
- **WHAT APPEARS NOW:** Reframe the relation as a reusable per-position question, while keeping the master array visually quiet.
- **CENTER-STAGE HERO:** One reusable lookup question.
- **CAUSE:** Narration reaches: “So at every position ...”
- **EFFECT / MOTION:** The equation recenters; no per-index execution occurs.
- **WHAT MUST NOT APPEAR YET:** No current index pointer, no actual lookup result.
- **COMPREHENSION HOLD:** Audio pause of 17 frames (566ms) observed following speech.
- **CLEANUP / EXIT:** Keep equation only.
- **PERSISTENT STATE:** The rule applies at each position.
- **KIT / SYSTEM:** ChalkText + SceneLabelStrip
- **MOTION PURPOSE:** Convert equation into algorithmic intent without tracing.

### BEAT 007 — `S05_A007` (Frames 541 – 586)
- **ANCHOR:** > we only need to look for ... (F541 – F586)
- **WHAT APPEARS NOW:** Add a small search/query cue toward the still-hidden map side.
- **CENTER-STAGE HERO:** Lookup action.
- **CAUSE:** Narration reaches: “we only need to look for ...”
- **EFFECT / MOTION:** A short query arrow begins from `S-k` but stops before any map appears.
- **WHAT MUST NOT APPEAR YET:** Do not reveal any map row or hit/miss yet.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep query origin and `S-k`.
- **PERSISTENT STATE:** Lookup target is `S-k`.
- **KIT / SYSTEM:** RoughLine / EvolvingPath if existing path primitive is selected at implementation audit
- **MOTION PURPOSE:** Direct attention toward lookup semantics.

### BEAT 008 — `S05_A008` (Frames 586 – 654)
- **ANCHOR:** > `current prefix minus k`. (F586 – F654, pause to F662)
- **WHAT APPEARS NOW:** Relabel the center expression in words: `needed = current prefix - k`.
- **CENTER-STAGE HERO:** Needed-prefix expression.
- **CAUSE:** Narration reaches: “`current prefix minus k`.”
- **EFFECT / MOTION:** Expression settles as the scene’s central rule.
- **WHAT MUST NOT APPEAR YET:** No frequency semantics yet.
- **COMPREHENSION HOLD:** Audio pause of 8 frames (266ms) observed following speech.
- **CLEANUP / EXIT:** Keep expression.
- **PERSISTENT STATE:** Needed-prefix rule locked.
- **KIT / SYSTEM:** ChalkText
- **MOTION PURPOSE:** State the reusable lookup key clearly.

### BEAT 009 — `S05_A009` (Frames 662 – 761)
- **ANCHOR:** > But the same prefix value can appear more than once. (F662 – F761, pause to F775)
- **WHAT APPEARS NOW:** Show two small identical prefix-value marks as separate historical occurrences, without using master-trace positions.
- **CENTER-STAGE HERO:** Duplicate earlier prefix occurrences.
- **CAUSE:** Narration reaches: “But the same prefix value can appear more than once.”
- **EFFECT / MOTION:** One value is visually duplicated as two distinct history marks.
- **WHAT MUST NOT APPEAR YET:** Do not show a full prefix sequence or perform master trace.
- **COMPREHENSION HOLD:** Audio pause of 14 frames (466ms) observed following speech.
- **CLEANUP / EXIT:** Keep two occurrences long enough for the next statement.
- **PERSISTENT STATE:** Multiplicity exists.
- **KIT / SYSTEM:** ChalkText + RoughBox
- **MOTION PURPOSE:** Motivate frequency, not existence.

### BEAT 010 — `S05_A010` (Frames 775 – 823)
- **ANCHOR:** > So we need frequency ... (F775 – F823, pause to F838)
- **WHAT APPEARS NOW:** Replace the two history marks with a single key plus a count badge.
- **CENTER-STAGE HERO:** Frequency count.
- **CAUSE:** Narration reaches: “So we need frequency ...”
- **EFFECT / MOTION:** Count representation becomes the hero.
- **WHAT MUST NOT APPEAR YET:** Do not show the full HashMap table before its semantics are named.
- **COMPREHENSION HOLD:** Audio pause of 15 frames (500ms) observed following speech.
- **CLEANUP / EXIT:** Keep key + count.
- **PERSISTENT STATE:** Multiple occurrences compress into frequency.
- **KIT / SYSTEM:** CountUp + ChalkText
- **MOTION PURPOSE:** Introduce count as required information.

### BEAT 011 — `S05_A011` (Frames 838 – 871)
- **ANCHOR:** > not just existence. (F838 – F871, pause to F890)
- **WHAT APPEARS NOW:** Briefly cross/reject an existence-only yes/no mark; frequency remains.
- **CENTER-STAGE HERO:** Frequency over boolean existence.
- **CAUSE:** Narration reaches: “not just existence.”
- **EFFECT / MOTION:** Existence-only cue rejects; frequency stays confirmed.
- **WHAT MUST NOT APPEAR YET:** No full map rows yet.
- **COMPREHENSION HOLD:** Audio pause of 19 frames (633ms) observed following speech.
- **CLEANUP / EXIT:** Remove rejection cue.
- **PERSISTENT STATE:** Frequency requirement persists.
- **KIT / SYSTEM:** ChalkText + RoughLine
- **MOTION PURPOSE:** Clarify exactly what the map must store.

### BEAT 012 — `S05_A012` (Frames 890 – 991)
- **ANCHOR:** > Our HashMap stores: (F890 – F991, pause to F1234)
- **WHAT APPEARS NOW:** Bring in an EMPTY `FrequencyMapTableV2` shell with headers only; no entries yet.
- **CENTER-STAGE HERO:** Frequency-map representation.
- **CAUSE:** Narration reaches: “Our HashMap stores:”
- **EFFECT / MOTION:** The semantic structure enters from the right and settles; array/equation shifts slightly left only if necessary to preserve a 64px gutter.
- **WHAT MUST NOT APPEAR YET:** No `{0→1}` row until spoken.
- **COMPREHENSION HOLD:** Audio pause of 243 frames (8100ms) observed following speech.
- **CLEANUP / EXIT:** Keep table shell.
- **PERSISTENT STATE:** Map exists but contains no revealed entries yet.
- **KIT / SYSTEM:** CREATE FrequencyMapTableV2 from kit primitives
- **MOTION PURPOSE:** Introduce the correct data structure without false index semantics.

### BEAT 013 — `S05_A013` (Frames 1234 – 1351)
- **ANCHOR:** > `prefix sum ... to frequency`. (F1234 – F1351, pause to F1887)
- **WHAT APPEARS NOW:** Write the map headers/relationship explicitly as `PREFIX SUM → FREQUENCY`.
- **CENTER-STAGE HERO:** Key→frequency meaning.
- **CAUSE:** Narration reaches: “`prefix sum ... to frequency`.”
- **EFFECT / MOTION:** Header relation writes on; no row values yet.
- **WHAT MUST NOT APPEAR YET:** Do not invent ordering or buckets.
- **COMPREHENSION HOLD:** Audio pause of 536 frames (17866ms) observed following speech.
- **CLEANUP / EXIT:** Keep map semantics.
- **PERSISTENT STATE:** Key/value relation is primary; row order is not semantic.
- **KIT / SYSTEM:** FrequencyMapTableV2 + ChalkText
- **MOTION PURPOSE:** Lock truthful HashMap semantics.

### BEAT 014 — `S05_A014` (Frames 1887 – 1958)
- **ANCHOR:** > And initially ... (F1887 – F1958)
- **WHAT APPEARS NOW:** Clear the center equation slightly; focus the empty map insertion point.
- **CENTER-STAGE HERO:** Initial map state about to be created.
- **CAUSE:** Narration reaches: “And initially ...”
- **EFFECT / MOTION:** One empty row receives focus.
- **WHAT MUST NOT APPEAR YET:** Do not show `0→1` before next anchor.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep focused empty row.
- **PERSISTENT STATE:** Initialization pending.
- **KIT / SYSTEM:** FrequencyMapTableV2
- **MOTION PURPOSE:** Prepare, do not pre-reveal.

### BEAT 015 — `S05_A015` (Frames 1958 – 1983)
- **ANCHOR:** > `zero maps to one`. (F1958 – F1983, pause to F2009)
- **WHAT APPEARS NOW:** Insert exactly one row: prefix sum `0`, frequency `1`.
- **CENTER-STAGE HERO:** `0 → 1`.
- **CAUSE:** Narration reaches: “`zero maps to one`.”
- **EFFECT / MOTION:** Row writes in and count settles at 1.
- **WHAT MUST NOT APPEAR YET:** No other prefixes or master-trace values.
- **COMPREHENSION HOLD:** Audio pause of 26 frames (866ms) observed following speech.
- **CLEANUP / EXIT:** Keep row.
- **PERSISTENT STATE:** Initial frequency map = `{0:1}`.
- **KIT / SYSTEM:** FrequencyMapTableV2 + CountUp
- **MOTION PURPOSE:** Create the initial invariant state.

### BEAT 016 — `S05_A016` (Frames 2009 – 2023)
- **ANCHOR:** > Because before reading the array ... (F2009 – F2023)
- **WHAT APPEARS NOW:** Keep `{0→1}` and bring a small “before index 0” boundary cue left of the array.
- **CENTER-STAGE HERO:** Pre-array prefix position.
- **CAUSE:** Narration reaches: “Because before reading the array ...”
- **EFFECT / MOTION:** Boundary cue focuses; no traversal starts.
- **WHAT MUST NOT APPEAR YET:** Do not teach a full prefix-sum lesson or enumerate prefix positions.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep only the single pre-array cue.
- **PERSISTENT STATE:** There is one earlier prefix position before reading values.
- **KIT / SYSTEM:** ArrayTrackV2 + ChalkText + RoughLine
- **MOTION PURPOSE:** Explain only why `{0:1}` exists.

### BEAT 017 — `S05_A017` (Frames 2023 – 2043)
- **ANCHOR:** > there is already one prefix position with sum zero. (F2023 – F2043)
- **WHAT APPEARS NOW:** Connect the pre-array cue to map row `0→1`; confirm the row.
- **CENTER-STAGE HERO:** Meaning of `{0→1}`.
- **CAUSE:** Narration reaches: “there is already one prefix position with sum zero.”
- **EFFECT / MOTION:** Relation arrives at the row, which reacts confirmed.
- **WHAT MUST NOT APPEAR YET:** No other prefix positions.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Remove relation after it lands; keep row.
- **PERSISTENT STATE:** `0→1` means one earlier zero prefix.
- **KIT / SYSTEM:** RoughLine + FrequencyMapTableV2
- **MOTION PURPOSE:** Ground initialization semantically.

### BEAT 018 — `S05_A018` (Frames 2043 – 2079)
- **ANCHOR:** > One more important rule. (F2043 – F2079, pause to F2107)
- **WHAT APPEARS NOW:** Reduce the array and map slightly; open a center order strip but keep steps hidden.
- **CENTER-STAGE HERO:** Correct-order invariant.
- **CAUSE:** Narration reaches: “One more important rule.”
- **EFFECT / MOTION:** Scene changes teaching mode from “what to store” to “when to query/store”.
- **WHAT MUST NOT APPEAR YET:** Do not reveal all steps at once.
- **COMPREHENSION HOLD:** Audio pause of 28 frames (933ms) observed following speech.
- **CLEANUP / EXIT:** Keep map row as quiet support.
- **PERSISTENT STATE:** Order rule is about earlier-only map contents.
- **KIT / SYSTEM:** SceneLabelStrip + ChalkText
- **MOTION PURPOSE:** Signal correctness rule.

### BEAT 019 — `S05_A019` (Frames 2107 – 2129)
- **ANCHOR:** > The map should contain only earlier prefix positions. (F2107 – F2129, pause to F2140)
- **WHAT APPEARS NOW:** Highlight the word `EARLIER` above the frequency map; current prefix stays outside the map.
- **CENTER-STAGE HERO:** Earlier-only invariant.
- **CAUSE:** Narration reaches: “The map should contain only earlier prefix positions.”
- **EFFECT / MOTION:** Current-prefix token is visibly outside the map boundary.
- **WHAT MUST NOT APPEAR YET:** Do not insert current prefix yet.
- **COMPREHENSION HOLD:** Audio pause of 11 frames (366ms) observed following speech.
- **CLEANUP / EXIT:** Keep current token outside map.
- **PERSISTENT STATE:** Map = earlier positions only.
- **KIT / SYSTEM:** FrequencyMapTableV2 + RoughBox + ChalkText
- **MOTION PURPOSE:** Make lookup-before-insert causality visible.

### BEAT 020 — `S05_A020` (Frames 2140 – 2184)
- **ANCHOR:** > So first ... (F2140 – F2184)
- **WHAT APPEARS NOW:** Show the first empty slot in the order strip; no label until next phrase.
- **CENTER-STAGE HERO:** Step sequence shell.
- **CAUSE:** Narration reaches: “So first ...”
- **EFFECT / MOTION:** A single step marker enters.
- **WHAT MUST NOT APPEAR YET:** No future steps.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep first marker.
- **PERSISTENT STATE:** Order is beginning.
- **KIT / SYSTEM:** ChalkText + RoughLine
- **MOTION PURPOSE:** Prevent premature full checklist.

### BEAT 021 — `S05_A021` (Frames 2184 – 2235)
- **ANCHOR:** > update the current prefix. (F2184 – F2235)
- **WHAT APPEARS NOW:** Write step 1: `UPDATE PREFIX`. Current-prefix token changes state outside map.
- **CENTER-STAGE HERO:** Step 1 — update prefix.
- **CAUSE:** Narration reaches: “update the current prefix.”
- **EFFECT / MOTION:** Current state reacts; no map query yet.
- **WHAT MUST NOT APPEAR YET:** No needed value, lookup, count, or insert.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep Step 1 compact.
- **PERSISTENT STATE:** Current prefix is updated before lookup.
- **KIT / SYSTEM:** ChalkText + ArrayTrackV2 support
- **MOTION PURPOSE:** Establish order.

### BEAT 022 — `S05_A022` (Frames 2235 – 2249)
- **ANCHOR:** > Then compute ... (F2235 – F2249)
- **WHAT APPEARS NOW:** Add step 2 shell only.
- **CENTER-STAGE HERO:** Step 2 transition.
- **CAUSE:** Narration reaches: “Then compute ...”
- **EFFECT / MOTION:** Focus moves from current prefix to derived needed value area.
- **WHAT MUST NOT APPEAR YET:** Do not reveal lookup/insert.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep steps 1–2.
- **PERSISTENT STATE:** Derived lookup key comes after update.
- **KIT / SYSTEM:** ChalkText + RoughLine
- **MOTION PURPOSE:** Maintain cause order.

### BEAT 023 — `S05_A023` (Frames 2249 – 2269)
- **ANCHOR:** > `needed = prefix minus k`. (F2249 – F2269)
- **WHAT APPEARS NOW:** Write step 2: `NEEDED = PREFIX - K`.
- **CENTER-STAGE HERO:** Step 2 — derive needed.
- **CAUSE:** Narration reaches: “`needed = prefix minus k`.”
- **EFFECT / MOTION:** Needed expression writes and settles.
- **WHAT MUST NOT APPEAR YET:** No query result yet.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep steps 1–2.
- **PERSISTENT STATE:** Needed key known.
- **KIT / SYSTEM:** ChalkText
- **MOTION PURPOSE:** Derive exact key.

### BEAT 024 — `S05_A024` (Frames 2269 – 2283)
- **ANCHOR:** > Look up the frequency of `needed`. (F2269 – F2283)
- **WHAT APPEARS NOW:** Add step 3 `QUERY FREQUENCY`; query line travels to the map header/row area without inventing a result.
- **CENTER-STAGE HERO:** Step 3 — lookup earlier frequency.
- **CAUSE:** Narration reaches: “Look up the frequency of `needed`.”
- **EFFECT / MOTION:** Query reaches map; map awaits hit/miss.
- **WHAT MUST NOT APPEAR YET:** Do not add to answer or insert current prefix yet.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep query state.
- **PERSISTENT STATE:** Lookup happens against earlier prefixes.
- **KIT / SYSTEM:** FrequencyMapTableV2 + RoughLine
- **MOTION PURPOSE:** Teach lookup timing.

### BEAT 025 — `S05_A025` (Frames 2283 – 2305)
- **ANCHOR:** > Add that frequency to the answer. (F2283 – F2305)
- **WHAT APPEARS NOW:** Add step 4 `ANSWER += FREQUENCY`; compact answer counter receives a generic delta symbol, not a master-trace number.
- **CENTER-STAGE HERO:** Step 4 — count matches.
- **CAUSE:** Narration reaches: “Add that frequency to the answer.”
- **EFFECT / MOTION:** Map frequency relation points to answer; answer semantic state becomes active.
- **WHAT MUST NOT APPEAR YET:** No numeric answer change from master testcase in this idea scene.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep order strip; reduce query line.
- **PERSISTENT STATE:** Frequency contributes to answer.
- **KIT / SYSTEM:** CountUp concept + ChalkText
- **MOTION PURPOSE:** Teach meaning without tracing.

### BEAT 026 — `S05_A026` (Frames 2292 – 2305)
- **ANCHOR:** > And only after that ... (F2292 – F2305)
- **WHAT APPEARS NOW:** Hold current prefix visibly outside map; emphasize `ONLY AFTER`.
- **CENTER-STAGE HERO:** Ordering boundary before insert.
- **CAUSE:** Narration reaches: “And only after that ...”
- **EFFECT / MOTION:** Insertion path is prepared but not completed.
- **WHAT MUST NOT APPEAR YET:** Current prefix must not enter map yet.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep pending insert cue.
- **PERSISTENT STATE:** Query/count completed before store.
- **KIT / SYSTEM:** ChalkText + RoughLine
- **MOTION PURPOSE:** Protect invariant.

### BEAT 027 — `S05_A027` (Frames 2292 – 2305)
- **ANCHOR:** > store the current prefix. (F2292 – F2305)
- **WHAT APPEARS NOW:** Add final step `STORE CURRENT PREFIX`; current token moves into the map as a conceptual future-history action.
- **CENTER-STAGE HERO:** Step 5 — store for future.
- **CAUSE:** Narration reaches: “store the current prefix.”
- **EFFECT / MOTION:** Current prefix crosses into map only now.
- **WHAT MUST NOT APPEAR YET:** No master testcase frequency value.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Settle the five-step order strip.
- **PERSISTENT STATE:** Current becomes history only after query/count.
- **KIT / SYSTEM:** FrequencyMapTableV2 + BezierFlight or deterministic move helper if truthful
- **MOTION PURPOSE:** Complete the order.

### BEAT 028 — `S05_A028` (Frames 2292 – 2305)
- **ANCHOR:** > So the order is: (F2292 – F2305)
- **WHAT APPEARS NOW:** Reduce everything except the five-step strip at center.
- **CENTER-STAGE HERO:** Algorithm order.
- **CAUSE:** Narration reaches: “So the order is:”
- **EFFECT / MOTION:** Order strip becomes center-stage hero.
- **WHAT MUST NOT APPEAR YET:** No trace values.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Keep only essential steps.
- **PERSISTENT STATE:** Five-step sequence persists.
- **KIT / SYSTEM:** ChalkText + RoughLine
- **MOTION PURPOSE:** Prepare concise recap.

### BEAT 029 — `S05_A029` (Frames 2292 – 2305)
- **ANCHOR:** > update prefix ... (F2292 – F2305)
- **WHAT APPEARS NOW:** Focus Step 1 only.
- **CENTER-STAGE HERO:** UPDATE PREFIX.
- **CAUSE:** Narration reaches: “update prefix ...”
- **EFFECT / MOTION:** Single focus change.
- **WHAT MUST NOT APPEAR YET:** Do not animate other steps.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Focus moves onward after phrase.
- **PERSISTENT STATE:** Order unchanged.
- **KIT / SYSTEM:** ChalkText
- **MOTION PURPOSE:** Reinforce sequence.

### BEAT 030 — `S05_A030` (Frames 2292 – 2305)
- **ANCHOR:** > look back ... (F2292 – F2305)
- **WHAT APPEARS NOW:** Focus derived/query portion (Steps 2–3) as one “look back” idea.
- **CENTER-STAGE HERO:** LOOK BACK.
- **CAUSE:** Narration reaches: “look back ...”
- **EFFECT / MOTION:** Map direction cue activates briefly.
- **WHAT MUST NOT APPEAR YET:** No insert.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Reduce cue.
- **PERSISTENT STATE:** Earlier-only lookup.
- **KIT / SYSTEM:** FrequencyMapTableV2 + RoughLine
- **MOTION PURPOSE:** Reinforce invariant.

### BEAT 031 — `S05_A031` (Frames 2292 – 2305)
- **ANCHOR:** > count ... (F2292 – F2305)
- **WHAT APPEARS NOW:** Focus Step 4.
- **CENTER-STAGE HERO:** COUNT.
- **CAUSE:** Narration reaches: “count ...”
- **EFFECT / MOTION:** Answer badge reacts once, without invented number.
- **WHAT MUST NOT APPEAR YET:** No store yet.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Reduce answer focus.
- **PERSISTENT STATE:** Count happens before store.
- **KIT / SYSTEM:** CountUp concept + ChalkText
- **MOTION PURPOSE:** Reinforce ordering.

### BEAT 032 — `S05_A032` (Frames 2292 – 2305)
- **ANCHOR:** > then store. (F2292 – F2305)
- **WHAT APPEARS NOW:** Focus Step 5; current token enters history side.
- **CENTER-STAGE HERO:** STORE.
- **CAUSE:** Narration reaches: “then store.”
- **EFFECT / MOTION:** Final order step settles.
- **WHAT MUST NOT APPEAR YET:** No master trace execution.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** Clear conceptual tokens after settle.
- **PERSISTENT STATE:** Correct order locked.
- **KIT / SYSTEM:** FrequencyMapTableV2 + deterministic movement helper
- **MOTION PURPOSE:** Complete mental model.

### BEAT 033 — `S05_A033` (Frames 2292 – 2305)
- **ANCHOR:** > Now let us execute it on the full array. (F2292 – F2305)
- **WHAT APPEARS NOW:** Clear the idea-only order strip and restore the untouched master array plus `{0→1}` map initial state, ready for Scene06.
- **CENTER-STAGE HERO:** Trace-ready initial state.
- **CAUSE:** Narration reaches: “Now let us execute it on the full array.”
- **EFFECT / MOTION:** Conceptual explanation exits; real master state enters without advancing index 0 yet.
- **WHAT MUST NOT APPEAR YET:** Do not process the first value inside Scene05.
- **COMPREHENSION HOLD:** Audio pause of 0 frames (0ms) observed following speech.
- **CLEANUP / EXIT:** End with stable initial trace state.
- **PERSISTENT STATE:** prefix=0, answer=0, map={0:1}; no value processed.
- **KIT / SYSTEM:** ArrayTrackV2 + FrequencyMapTableV2 + SceneLabelStrip
- **MOTION PURPOSE:** Clean handoff to full trace.
