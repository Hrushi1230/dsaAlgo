# Q16 — Subarray Sum Equals K (LeetCode 560)
# Phase 9 V3 · Scene 05 — Optimal Idea
## WORD-BASED VISUAL PLAN — NO GUESSED TIME · NO GUESSED FRAMES

## Scene contract

**PURPOSE:** Give only the minimum optimal insight: needed prefix, frequency, `{0→1}`, earlier-only invariant, and query-before-store order. No trace.

**TIMING:** Final MP3 + validated exact word-sync JSON are required before any frame number is assigned.

**CONTINUITY IN:**
Scene04 ends on the question: can repeated range-sum work be avoided? No optimal state has executed yet.

**CONTINUITY OUT:**
Scene06 begins with the untouched master array and exact initial state: prefix=0, answer=0, frequency map `{0:1}`.

### REUSE
- `ArrayTrackV2`
- `PartitionBandV2`
- `ChalkText`
- `RoughLine`
- `RoughBox`
- `CountUp`
- `SceneLabelStrip`
- `theme / anim / motion`

### CREATE / EXTEND
`CREATE kit/components/FrequencyMapTableV2.tsx` after implementation-side API audit; do not use current index-specific `HashMapTable` unchanged.

### DO NOT TOUCH
- MiniGraph.tsx for Q16
- HashMapTable.tsx unchanged for frequency semantics
- future Scene06 trace state

## Spatial / motion law

- Idea-only scene: no full prefix-sequence lesson and no master-array execution.
- Center stage owns one idea at a time.
- The HashMap appears only when narration says HashMap/store semantics.
- `{0 → 1}` appears only on its spoken anchor.
- The five-step optimal order is built one step at a time; never dump the complete sequence early.
- No decorative freeze: conceptual state holds only while narration explains it or exact audio later provides a real pause.
- No collision: when map is visible, equation/array stays left/center-left and map right with >=64px gutter.

## Semantic anchor manifest

| Anchor | Exact spoken phrase |
|---|---|
| `S05_A001` | We do not want to rebuild the same overlapping sums again and again. |
| `S05_A002` | Suppose the current prefix sum is `S`. |
| `S05_A003` | For a subarray sum to be exactly `k` ... |
| `S05_A004` | we need an earlier prefix equal to ... |
| `S05_A005` | `S minus k`. |
| `S05_A006` | So at every position ... |
| `S05_A007` | we only need to look for ... |
| `S05_A008` | `current prefix minus k`. |
| `S05_A009` | But the same prefix value can appear more than once. |
| `S05_A010` | So we need frequency ... |
| `S05_A011` | not just existence. |
| `S05_A012` | Our HashMap stores: |
| `S05_A013` | `prefix sum ... to frequency`. |
| `S05_A014` | And initially ... |
| `S05_A015` | `zero maps to one`. |
| `S05_A016` | Because before reading the array ... |
| `S05_A017` | there is already one prefix position with sum zero. |
| `S05_A018` | One more important rule. |
| `S05_A019` | The map should contain only earlier prefix positions. |
| `S05_A020` | So first ... |
| `S05_A021` | update the current prefix. |
| `S05_A022` | Then compute ... |
| `S05_A023` | `needed = prefix minus k`. |
| `S05_A024` | Look up the frequency of `needed`. |
| `S05_A025` | Add that frequency to the answer. |
| `S05_A026` | And only after that ... |
| `S05_A027` | store the current prefix. |
| `S05_A028` | So the order is: |
| `S05_A029` | update prefix ... |
| `S05_A030` | look back ... |
| `S05_A031` | count ... |
| `S05_A032` | then store. |
| `S05_A033` | Now let us execute it on the full array. |

## Word-based choreography

### BEAT 001 — `S05_A001`

#### ANCHOR / SPOKEN PHRASE
> We do not want to rebuild the same overlapping sums again and again.

#### WHAT APPEARS NOW
Carry forward a restrained ghost of two overlapping Method-1 ranges, then reduce them immediately.

#### CENTER-STAGE HERO
Repeated overlapping work.

#### CAUSE
Narration reaches: “We do not want to rebuild the same overlapping sums again and again.”

#### EFFECT / MOTION
The duplicated overlap receives one warning/focus reaction; no prefix structure yet.

#### WHAT MUST NOT APPEAR YET
No prefix equation, HashMap, frequency, `{0 → 1}`, or optimal order.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Erase/reduce the duplicate-range cue once the problem is restated.

#### PERSISTENT STATE
Only the idea “repeated work should disappear” persists.

#### KIT / EXISTING SYSTEM
ArrayTrackV2 + PartitionBandV2 + ChalkText

#### MOTION PURPOSE
Bridge Method1 failure to one new question.

### BEAT 002 — `S05_A002`

#### ANCHOR / SPOKEN PHRASE
> Suppose the current prefix sum is `S`.

#### WHAT APPEARS NOW
Replace the overlap cue with a single large chalk symbol `S` at center. The array stays quiet support only.

#### CENTER-STAGE HERO
Current prefix `S`.

#### CAUSE
Narration reaches: “Suppose the current prefix sum is `S`.”

#### EFFECT / MOTION
`S` writes on in place; no traversal is executed.

#### WHAT MUST NOT APPEAR YET
No `S-k`, map, frequency, answer update, or master-array trace.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep `S`; remove old Method1 range emphasis.

#### PERSISTENT STATE
Current cumulative state is named `S`.

#### KIT / EXISTING SYSTEM
ChalkText + RoughBox (minimal focus shell only if needed)

#### MOTION PURPOSE
Introduce only the symbol needed for the relation.

### BEAT 003 — `S05_A003`

#### ANCHOR / SPOKEN PHRASE
> For a subarray sum to be exactly `k` ...

#### WHAT APPEARS NOW
Bring `k` beside `S` as a target constraint, without solving the relation yet.

#### CENTER-STAGE HERO
The condition “subarray sum = k”.

#### CAUSE
Narration reaches: “For a subarray sum to be exactly `k` ...”

#### EFFECT / MOTION
Target `k` receives focus; `S` remains stable.

#### WHAT MUST NOT APPEAR YET
Do not reveal the needed earlier prefix yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep `S` and `k`.

#### PERSISTENT STATE
Target is fixed.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Set the condition before deriving the lookup.

### BEAT 004 — `S05_A004`

#### ANCHOR / SPOKEN PHRASE
> we need an earlier prefix equal to ...

#### WHAT APPEARS NOW
Reveal an empty “earlier prefix = ?” chalk slot on the left of the equation.

#### CENTER-STAGE HERO
Unknown earlier prefix.

#### CAUSE
Narration reaches: “we need an earlier prefix equal to ...”

#### EFFECT / MOTION
A relation line connects current `S` to the unknown earlier prefix, but the value stays unresolved.

#### WHAT MUST NOT APPEAR YET
Do not show `S-k` until it is spoken.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep unresolved relation.

#### PERSISTENT STATE
Earlier prefix is the unknown being solved for.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine + RoughBox

#### MOTION PURPOSE
Create the exact question the HashMap will later answer.

### BEAT 005 — `S05_A005`

#### ANCHOR / SPOKEN PHRASE
> `S minus k`.

#### WHAT APPEARS NOW
Resolve the unknown to `S - k` and underline it in focus color.

#### CENTER-STAGE HERO
`S - k`.

#### CAUSE
Narration reaches: “`S minus k`.”

#### EFFECT / MOTION
The unknown label morphs/replaces into `S-k`; this is a semantic state change, not a trace.

#### WHAT MUST NOT APPEAR YET
No map, frequency, or answer yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep `S-k` centered.

#### PERSISTENT STATE
Needed earlier prefix = `S-k`.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Land the only equation needed by this scene.

### BEAT 006 — `S05_A006`

#### ANCHOR / SPOKEN PHRASE
> So at every position ...

#### WHAT APPEARS NOW
Reframe the relation as a reusable per-position question, while keeping the master array visually quiet.

#### CENTER-STAGE HERO
One reusable lookup question.

#### CAUSE
Narration reaches: “So at every position ...”

#### EFFECT / MOTION
The equation recenters; no per-index execution occurs.

#### WHAT MUST NOT APPEAR YET
No current index pointer, no actual lookup result.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep equation only.

#### PERSISTENT STATE
The rule applies at each position.

#### KIT / EXISTING SYSTEM
ChalkText + SceneLabelStrip

#### MOTION PURPOSE
Convert equation into algorithmic intent without tracing.

### BEAT 007 — `S05_A007`

#### ANCHOR / SPOKEN PHRASE
> we only need to look for ...

#### WHAT APPEARS NOW
Add a small search/query cue toward the still-hidden map side.

#### CENTER-STAGE HERO
Lookup action.

#### CAUSE
Narration reaches: “we only need to look for ...”

#### EFFECT / MOTION
A short query arrow begins from `S-k` but stops before any map appears.

#### WHAT MUST NOT APPEAR YET
Do not reveal any map row or hit/miss yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep query origin and `S-k`.

#### PERSISTENT STATE
Lookup target is `S-k`.

#### KIT / EXISTING SYSTEM
RoughLine / EvolvingPath if existing path primitive is selected at implementation audit

#### MOTION PURPOSE
Direct attention toward lookup semantics.

### BEAT 008 — `S05_A008`

#### ANCHOR / SPOKEN PHRASE
> `current prefix minus k`.

#### WHAT APPEARS NOW
Relabel the center expression in words: `needed = current prefix - k`.

#### CENTER-STAGE HERO
Needed-prefix expression.

#### CAUSE
Narration reaches: “`current prefix minus k`.”

#### EFFECT / MOTION
Expression settles as the scene’s central rule.

#### WHAT MUST NOT APPEAR YET
No frequency semantics yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep expression.

#### PERSISTENT STATE
Needed-prefix rule locked.

#### KIT / EXISTING SYSTEM
ChalkText

#### MOTION PURPOSE
State the reusable lookup key clearly.

### BEAT 009 — `S05_A009`

#### ANCHOR / SPOKEN PHRASE
> But the same prefix value can appear more than once.

#### WHAT APPEARS NOW
Show two small identical prefix-value marks as separate historical occurrences, without using master-trace positions.

#### CENTER-STAGE HERO
Duplicate earlier prefix occurrences.

#### CAUSE
Narration reaches: “But the same prefix value can appear more than once.”

#### EFFECT / MOTION
One value is visually duplicated as two distinct history marks.

#### WHAT MUST NOT APPEAR YET
Do not show a full prefix sequence or perform master trace.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep two occurrences long enough for the next statement.

#### PERSISTENT STATE
Multiplicity exists.

#### KIT / EXISTING SYSTEM
ChalkText + RoughBox

#### MOTION PURPOSE
Motivate frequency, not existence.

### BEAT 010 — `S05_A010`

#### ANCHOR / SPOKEN PHRASE
> So we need frequency ...

#### WHAT APPEARS NOW
Replace the two history marks with a single key plus a count badge.

#### CENTER-STAGE HERO
Frequency count.

#### CAUSE
Narration reaches: “So we need frequency ...”

#### EFFECT / MOTION
Count representation becomes the hero.

#### WHAT MUST NOT APPEAR YET
Do not show the full HashMap table before its semantics are named.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep key + count.

#### PERSISTENT STATE
Multiple occurrences compress into frequency.

#### KIT / EXISTING SYSTEM
CountUp + ChalkText

#### MOTION PURPOSE
Introduce count as required information.

### BEAT 011 — `S05_A011`

#### ANCHOR / SPOKEN PHRASE
> not just existence.

#### WHAT APPEARS NOW
Briefly cross/reject an existence-only yes/no mark; frequency remains.

#### CENTER-STAGE HERO
Frequency over boolean existence.

#### CAUSE
Narration reaches: “not just existence.”

#### EFFECT / MOTION
Existence-only cue rejects; frequency stays confirmed.

#### WHAT MUST NOT APPEAR YET
No full map rows yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Remove rejection cue.

#### PERSISTENT STATE
Frequency requirement persists.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Clarify exactly what the map must store.

### BEAT 012 — `S05_A012`

#### ANCHOR / SPOKEN PHRASE
> Our HashMap stores:

#### WHAT APPEARS NOW
Bring in an EMPTY `FrequencyMapTableV2` shell with headers only; no entries yet.

#### CENTER-STAGE HERO
Frequency-map representation.

#### CAUSE
Narration reaches: “Our HashMap stores:”

#### EFFECT / MOTION
The semantic structure enters from the right and settles; array/equation shifts slightly left only if necessary to preserve a 64px gutter.

#### WHAT MUST NOT APPEAR YET
No `{0→1}` row until spoken.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep table shell.

#### PERSISTENT STATE
Map exists but contains no revealed entries yet.

#### KIT / EXISTING SYSTEM
CREATE FrequencyMapTableV2 from kit primitives

#### MOTION PURPOSE
Introduce the correct data structure without false index semantics.

### BEAT 013 — `S05_A013`

#### ANCHOR / SPOKEN PHRASE
> `prefix sum ... to frequency`.

#### WHAT APPEARS NOW
Write the map headers/relationship explicitly as `PREFIX SUM → FREQUENCY`.

#### CENTER-STAGE HERO
Key→frequency meaning.

#### CAUSE
Narration reaches: “`prefix sum ... to frequency`.”

#### EFFECT / MOTION
Header relation writes on; no row values yet.

#### WHAT MUST NOT APPEAR YET
Do not invent ordering or buckets.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep map semantics.

#### PERSISTENT STATE
Key/value relation is primary; row order is not semantic.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + ChalkText

#### MOTION PURPOSE
Lock truthful HashMap semantics.

### BEAT 014 — `S05_A014`

#### ANCHOR / SPOKEN PHRASE
> And initially ...

#### WHAT APPEARS NOW
Clear the center equation slightly; focus the empty map insertion point.

#### CENTER-STAGE HERO
Initial map state about to be created.

#### CAUSE
Narration reaches: “And initially ...”

#### EFFECT / MOTION
One empty row receives focus.

#### WHAT MUST NOT APPEAR YET
Do not show `0→1` before next anchor.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep focused empty row.

#### PERSISTENT STATE
Initialization pending.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2

#### MOTION PURPOSE
Prepare, do not pre-reveal.

### BEAT 015 — `S05_A015`

#### ANCHOR / SPOKEN PHRASE
> `zero maps to one`.

#### WHAT APPEARS NOW
Insert exactly one row: prefix sum `0`, frequency `1`.

#### CENTER-STAGE HERO
`0 → 1`.

#### CAUSE
Narration reaches: “`zero maps to one`.”

#### EFFECT / MOTION
Row writes in and count settles at 1.

#### WHAT MUST NOT APPEAR YET
No other prefixes or master-trace values.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep row.

#### PERSISTENT STATE
Initial frequency map = `{0:1}`.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + CountUp

#### MOTION PURPOSE
Create the initial invariant state.

### BEAT 016 — `S05_A016`

#### ANCHOR / SPOKEN PHRASE
> Because before reading the array ...

#### WHAT APPEARS NOW
Keep `{0→1}` and bring a small “before index 0” boundary cue left of the array.

#### CENTER-STAGE HERO
Pre-array prefix position.

#### CAUSE
Narration reaches: “Because before reading the array ...”

#### EFFECT / MOTION
Boundary cue focuses; no traversal starts.

#### WHAT MUST NOT APPEAR YET
Do not teach a full prefix-sum lesson or enumerate prefix positions.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep only the single pre-array cue.

#### PERSISTENT STATE
There is one earlier prefix position before reading values.

#### KIT / EXISTING SYSTEM
ArrayTrackV2 + ChalkText + RoughLine

#### MOTION PURPOSE
Explain only why `{0:1}` exists.

### BEAT 017 — `S05_A017`

#### ANCHOR / SPOKEN PHRASE
> there is already one prefix position with sum zero.

#### WHAT APPEARS NOW
Connect the pre-array cue to map row `0→1`; confirm the row.

#### CENTER-STAGE HERO
Meaning of `{0→1}`.

#### CAUSE
Narration reaches: “there is already one prefix position with sum zero.”

#### EFFECT / MOTION
Relation arrives at the row, which reacts confirmed.

#### WHAT MUST NOT APPEAR YET
No other prefix positions.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Remove relation after it lands; keep row.

#### PERSISTENT STATE
`0→1` means one earlier zero prefix.

#### KIT / EXISTING SYSTEM
RoughLine + FrequencyMapTableV2

#### MOTION PURPOSE
Ground initialization semantically.

### BEAT 018 — `S05_A018`

#### ANCHOR / SPOKEN PHRASE
> One more important rule.

#### WHAT APPEARS NOW
Reduce the array and map slightly; open a center order strip but keep steps hidden.

#### CENTER-STAGE HERO
Correct-order invariant.

#### CAUSE
Narration reaches: “One more important rule.”

#### EFFECT / MOTION
Scene changes teaching mode from “what to store” to “when to query/store”.

#### WHAT MUST NOT APPEAR YET
Do not reveal all steps at once.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep map row as quiet support.

#### PERSISTENT STATE
Order rule is about earlier-only map contents.

#### KIT / EXISTING SYSTEM
SceneLabelStrip + ChalkText

#### MOTION PURPOSE
Signal correctness rule.

### BEAT 019 — `S05_A019`

#### ANCHOR / SPOKEN PHRASE
> The map should contain only earlier prefix positions.

#### WHAT APPEARS NOW
Highlight the word `EARLIER` above the frequency map; current prefix stays outside the map.

#### CENTER-STAGE HERO
Earlier-only invariant.

#### CAUSE
Narration reaches: “The map should contain only earlier prefix positions.”

#### EFFECT / MOTION
Current-prefix token is visibly outside the map boundary.

#### WHAT MUST NOT APPEAR YET
Do not insert current prefix yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep current token outside map.

#### PERSISTENT STATE
Map = earlier positions only.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + RoughBox + ChalkText

#### MOTION PURPOSE
Make lookup-before-insert causality visible.

### BEAT 020 — `S05_A020`

#### ANCHOR / SPOKEN PHRASE
> So first ...

#### WHAT APPEARS NOW
Show the first empty slot in the order strip; no label until next phrase.

#### CENTER-STAGE HERO
Step sequence shell.

#### CAUSE
Narration reaches: “So first ...”

#### EFFECT / MOTION
A single step marker enters.

#### WHAT MUST NOT APPEAR YET
No future steps.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep first marker.

#### PERSISTENT STATE
Order is beginning.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Prevent premature full checklist.

### BEAT 021 — `S05_A021`

#### ANCHOR / SPOKEN PHRASE
> update the current prefix.

#### WHAT APPEARS NOW
Write step 1: `UPDATE PREFIX`. Current-prefix token changes state outside map.

#### CENTER-STAGE HERO
Step 1 — update prefix.

#### CAUSE
Narration reaches: “update the current prefix.”

#### EFFECT / MOTION
Current state reacts; no map query yet.

#### WHAT MUST NOT APPEAR YET
No needed value, lookup, count, or insert.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep Step 1 compact.

#### PERSISTENT STATE
Current prefix is updated before lookup.

#### KIT / EXISTING SYSTEM
ChalkText + ArrayTrackV2 support

#### MOTION PURPOSE
Establish order.

### BEAT 022 — `S05_A022`

#### ANCHOR / SPOKEN PHRASE
> Then compute ...

#### WHAT APPEARS NOW
Add step 2 shell only.

#### CENTER-STAGE HERO
Step 2 transition.

#### CAUSE
Narration reaches: “Then compute ...”

#### EFFECT / MOTION
Focus moves from current prefix to derived needed value area.

#### WHAT MUST NOT APPEAR YET
Do not reveal lookup/insert.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep steps 1–2.

#### PERSISTENT STATE
Derived lookup key comes after update.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Maintain cause order.

### BEAT 023 — `S05_A023`

#### ANCHOR / SPOKEN PHRASE
> `needed = prefix minus k`.

#### WHAT APPEARS NOW
Write step 2: `NEEDED = PREFIX - K`.

#### CENTER-STAGE HERO
Step 2 — derive needed.

#### CAUSE
Narration reaches: “`needed = prefix minus k`.”

#### EFFECT / MOTION
Needed expression writes and settles.

#### WHAT MUST NOT APPEAR YET
No query result yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep steps 1–2.

#### PERSISTENT STATE
Needed key known.

#### KIT / EXISTING SYSTEM
ChalkText

#### MOTION PURPOSE
Derive exact key.

### BEAT 024 — `S05_A024`

#### ANCHOR / SPOKEN PHRASE
> Look up the frequency of `needed`.

#### WHAT APPEARS NOW
Add step 3 `QUERY FREQUENCY`; query line travels to the map header/row area without inventing a result.

#### CENTER-STAGE HERO
Step 3 — lookup earlier frequency.

#### CAUSE
Narration reaches: “Look up the frequency of `needed`.”

#### EFFECT / MOTION
Query reaches map; map awaits hit/miss.

#### WHAT MUST NOT APPEAR YET
Do not add to answer or insert current prefix yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep query state.

#### PERSISTENT STATE
Lookup happens against earlier prefixes.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + RoughLine

#### MOTION PURPOSE
Teach lookup timing.

### BEAT 025 — `S05_A025`

#### ANCHOR / SPOKEN PHRASE
> Add that frequency to the answer.

#### WHAT APPEARS NOW
Add step 4 `ANSWER += FREQUENCY`; compact answer counter receives a generic delta symbol, not a master-trace number.

#### CENTER-STAGE HERO
Step 4 — count matches.

#### CAUSE
Narration reaches: “Add that frequency to the answer.”

#### EFFECT / MOTION
Map frequency relation points to answer; answer semantic state becomes active.

#### WHAT MUST NOT APPEAR YET
No numeric answer change from master testcase in this idea scene.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep order strip; reduce query line.

#### PERSISTENT STATE
Frequency contributes to answer.

#### KIT / EXISTING SYSTEM
CountUp concept + ChalkText

#### MOTION PURPOSE
Teach meaning without tracing.

### BEAT 026 — `S05_A026`

#### ANCHOR / SPOKEN PHRASE
> And only after that ...

#### WHAT APPEARS NOW
Hold current prefix visibly outside map; emphasize `ONLY AFTER`.

#### CENTER-STAGE HERO
Ordering boundary before insert.

#### CAUSE
Narration reaches: “And only after that ...”

#### EFFECT / MOTION
Insertion path is prepared but not completed.

#### WHAT MUST NOT APPEAR YET
Current prefix must not enter map yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep pending insert cue.

#### PERSISTENT STATE
Query/count completed before store.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Protect invariant.

### BEAT 027 — `S05_A027`

#### ANCHOR / SPOKEN PHRASE
> store the current prefix.

#### WHAT APPEARS NOW
Add final step `STORE CURRENT PREFIX`; current token moves into the map as a conceptual future-history action.

#### CENTER-STAGE HERO
Step 5 — store for future.

#### CAUSE
Narration reaches: “store the current prefix.”

#### EFFECT / MOTION
Current prefix crosses into map only now.

#### WHAT MUST NOT APPEAR YET
No master testcase frequency value.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Settle the five-step order strip.

#### PERSISTENT STATE
Current becomes history only after query/count.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + BezierFlight or deterministic move helper if truthful

#### MOTION PURPOSE
Complete the order.

### BEAT 028 — `S05_A028`

#### ANCHOR / SPOKEN PHRASE
> So the order is:

#### WHAT APPEARS NOW
Reduce everything except the five-step strip at center.

#### CENTER-STAGE HERO
Algorithm order.

#### CAUSE
Narration reaches: “So the order is:”

#### EFFECT / MOTION
Order strip becomes center-stage hero.

#### WHAT MUST NOT APPEAR YET
No trace values.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Keep only essential steps.

#### PERSISTENT STATE
Five-step sequence persists.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Prepare concise recap.

### BEAT 029 — `S05_A029`

#### ANCHOR / SPOKEN PHRASE
> update prefix ...

#### WHAT APPEARS NOW
Focus Step 1 only.

#### CENTER-STAGE HERO
UPDATE PREFIX.

#### CAUSE
Narration reaches: “update prefix ...”

#### EFFECT / MOTION
Single focus change.

#### WHAT MUST NOT APPEAR YET
Do not animate other steps.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Focus moves onward after phrase.

#### PERSISTENT STATE
Order unchanged.

#### KIT / EXISTING SYSTEM
ChalkText

#### MOTION PURPOSE
Reinforce sequence.

### BEAT 030 — `S05_A030`

#### ANCHOR / SPOKEN PHRASE
> look back ...

#### WHAT APPEARS NOW
Focus derived/query portion (Steps 2–3) as one “look back” idea.

#### CENTER-STAGE HERO
LOOK BACK.

#### CAUSE
Narration reaches: “look back ...”

#### EFFECT / MOTION
Map direction cue activates briefly.

#### WHAT MUST NOT APPEAR YET
No insert.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Reduce cue.

#### PERSISTENT STATE
Earlier-only lookup.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + RoughLine

#### MOTION PURPOSE
Reinforce invariant.

### BEAT 031 — `S05_A031`

#### ANCHOR / SPOKEN PHRASE
> count ...

#### WHAT APPEARS NOW
Focus Step 4.

#### CENTER-STAGE HERO
COUNT.

#### CAUSE
Narration reaches: “count ...”

#### EFFECT / MOTION
Answer badge reacts once, without invented number.

#### WHAT MUST NOT APPEAR YET
No store yet.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Reduce answer focus.

#### PERSISTENT STATE
Count happens before store.

#### KIT / EXISTING SYSTEM
CountUp concept + ChalkText

#### MOTION PURPOSE
Reinforce ordering.

### BEAT 032 — `S05_A032`

#### ANCHOR / SPOKEN PHRASE
> then store.

#### WHAT APPEARS NOW
Focus Step 5; current token enters history side.

#### CENTER-STAGE HERO
STORE.

#### CAUSE
Narration reaches: “then store.”

#### EFFECT / MOTION
Final order step settles.

#### WHAT MUST NOT APPEAR YET
No master trace execution.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
Clear conceptual tokens after settle.

#### PERSISTENT STATE
Correct order locked.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + deterministic movement helper

#### MOTION PURPOSE
Complete mental model.

### BEAT 033 — `S05_A033`

#### ANCHOR / SPOKEN PHRASE
> Now let us execute it on the full array.

#### WHAT APPEARS NOW
Clear the idea-only order strip and restore the untouched master array plus `{0→1}` map initial state, ready for Scene06.

#### CENTER-STAGE HERO
Trace-ready initial state.

#### CAUSE
Narration reaches: “Now let us execute it on the full array.”

#### EFFECT / MOTION
Conceptual explanation exits; real master state enters without advancing index 0 yet.

#### WHAT MUST NOT APPEAR YET
Do not process the first value inside Scene05.

#### COMPREHENSION HOLD
Only if the final audio provides a real pause after this phrase; otherwise continue directly.

#### CLEANUP / EXIT
End with stable initial trace state.

#### PERSISTENT STATE
prefix=0, answer=0, map={0:1}; no value processed.

#### KIT / EXISTING SYSTEM
ArrayTrackV2 + FrequencyMapTableV2 + SceneLabelStrip

#### MOTION PURPOSE
Clean handoff to full trace.

## Critical review states — frames resolved only after sync

- scene entry
- first semantic decision
- first state mutation (if any)
- most information-dense truthful state
- final teaching state
- transition out

## Phase-9 gate

```text
NO GUESSED SECONDS
NO GUESSED FRAMES
NO FUTURE-STATE SPOILERS
NO SCENE-LOCAL FAKE DATA-STRUCTURE UI
NO DECORATIVE MOTION
EXACT WORD-ID / FRAME RESOLUTION DEFERRED TO POST-AUDIO SYNC
```
