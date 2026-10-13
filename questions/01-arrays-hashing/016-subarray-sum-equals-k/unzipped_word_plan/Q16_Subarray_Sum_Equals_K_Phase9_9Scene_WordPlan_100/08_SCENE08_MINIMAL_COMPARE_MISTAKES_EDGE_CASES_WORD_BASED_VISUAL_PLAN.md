# Q16 — Subarray Sum Equals K (LeetCode 560)
# Phase 9 V3 · Scene 08 — Compare + Mistakes + Edge Cases
## WORD-BASED VISUAL PLAN — NO GUESSED TIME · NO GUESSED FRAMES

## Scene contract

**PURPOSE:** Minimal final checklist: two method comparisons with rough complexity curves, five mistakes, three edge cases, one counting rule.

**TIMING:** Final MP3 + validated exact word-sync JSON are required before any frame number is assigned.

**CONTINUITY IN:**
Scene07 finishes code + complexity and the required-prefix relation.

**CONTINUITY OUT:**
Scene09 starts from a clean board for the final recap; no mistake/edge state persists.

### REUSE
- `ArrayTrackV2`
- `ChalkText`
- `RoughLine`
- `CountUp`
- `SceneLabelStrip`
- `theme`

### CREATE / EXTEND
`REUSE/CREATE kit-level FrequencyMapTableV2 and ComplexityGrowthGraphV2 as defined in Q16_KIT_VISUAL_SOURCE_DECISIONS_V3.md`

### DO NOT TOUCH
- MiniGraph.tsx
- HashMapTable.tsx unchanged
- trace replay
- all-points-at-once dashboard

## Spatial / motion law

- ULTRA-MINIMAL: point → clear → next point.
- Complexity is always visualized with rough mathematical growth curves when its Big-O is spoken.
- Never keep code, array, map, mistakes, edge cases, and graph visible together.
- No trace replay. No prefix derivation replay.
- Each mistake/edge case owns center stage briefly; previous point exits before next.
- No guessed hold or transition duration.

## Semantic anchor manifest

| Anchor | Exact spoken phrase |
|---|---|
| `S08_A001` | Quick comparison. |
| `S08_A002` | Method One ... running-sum enumeration. |
| `S08_A003` | Time ... `O of n squared`. |
| `S08_A004` | Auxiliary space ... `O of one`. |
| `S08_A005` | Method Two ... prefix sum plus frequency HashMap. |
| `S08_A006` | Expected time ... `O of n`. |
| `S08_A007` | Auxiliary space ... `O of n`. |
| `S08_A008` | Key mistakes. |
| `S08_A009` | Normal sliding window is not reliable when negative numbers are allowed. |
| `S08_A010` | Store prefix frequency ... not only existence. |
| `S08_A011` | Start with: zero maps to one. |
| `S08_A012` | Query before inserting the current prefix. |
| `S08_A013` | And remember ... array index and prefix position are different. |
| `S08_A014` | Important edge cases. |
| `S08_A015` | `[3]`, target three ... answer one. |
| `S08_A016` | `[0]`, target zero ... answer one. |
| `S08_A017` | `[0, 0, 0]`, target zero ... answer six. |
| `S08_A018` | The key rule is: |
| `S08_A019` | answer plus equals frequency of needed prefix. |

## Word-based choreography

### BEAT 001 — `S08_A001`

#### ANCHOR / SPOKEN PHRASE
> Quick comparison.

#### WHAT APPEARS NOW
Clear prior code. Open a clean center complexity stage; no curves yet.

#### CENTER-STAGE HERO
Comparison stage.

#### CAUSE
Narration reaches: “Quick comparison.”

#### EFFECT / MOTION
A lightweight comparison label enters.

#### WHAT MUST NOT APPEAR YET
No O(n²), O(n), mistakes, or edge cases before spoken.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Keep empty graph axes only if needed; otherwise title alone.

#### PERSISTENT STATE
None.

#### KIT / EXISTING SYSTEM
SceneLabelStrip + ComplexityGrowthGraphV2 shell

#### MOTION PURPOSE
Start minimal compare without dashboard.

### BEAT 002 — `S08_A002`

#### ANCHOR / SPOKEN PHRASE
> Method One ... running-sum enumeration.

#### WHAT APPEARS NOW
Show Method1 label and a tiny nested-range icon from ArrayTrackV2; no trace replay.

#### CENTER-STAGE HERO
Method1 identity.

#### CAUSE
Narration reaches: “Method One ... running-sum enumeration.”

#### EFFECT / MOTION
One compact identity cue.

#### WHAT MUST NOT APPEAR YET
No full nested-loop execution.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Keep label for its complexity.

#### PERSISTENT STATE
Method1 = running-sum enumeration.

#### KIT / EXISTING SYSTEM
ArrayTrackV2 + ChalkText

#### MOTION PURPOSE
Name method only.

### BEAT 003 — `S08_A003`

#### ANCHOR / SPOKEN PHRASE
> Time ... `O of n squared`.

#### WHAT APPEARS NOW
Draw only the quadratic rough curve left-to-right; `O(n²)` appears with it.

#### CENTER-STAGE HERO
O(n²) curve.

#### CAUSE
Narration reaches: “Time ... `O of n squared`.”

#### EFFECT / MOTION
Quadratic growth becomes active in warn/coral semantic color.

#### WHAT MUST NOT APPEAR YET
Do not show O(n) curve yet. No benchmark numbers.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Keep curve dimmed for later comparison.

#### PERSISTENT STATE
Method1 time O(n²).

#### KIT / EXISTING SYSTEM
ComplexityGrowthGraphV2 (RoughLine/RoughCurve/ChalkText)

#### MOTION PURPOSE
Show complexity visually when spoken.

**COMPLEXITY CONTRACT:** curve type = quadratic; cause = many starts × many ends; mathematical growth only.

### BEAT 004 — `S08_A004`

#### ANCHOR / SPOKEN PHRASE
> Auxiliary space ... `O of one`.

#### WHAT APPEARS NOW
Switch to a separate flat O(1) memory-growth mini graph; time curve reduces.

#### CENTER-STAGE HERO
O(1) auxiliary-space curve.

#### CAUSE
Narration reaches: “Auxiliary space ... `O of one`.”

#### EFFECT / MOTION
Flat rough line draws once; a few scalar variable marks support it.

#### WHAT MUST NOT APPEAR YET
Do not show Method2 yet.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Clear O(1) graph after settle.

#### PERSISTENT STATE
Method1 space O(1).

#### KIT / EXISTING SYSTEM
ComplexityGrowthGraphV2 + ChalkText

#### MOTION PURPOSE
Visualize space complexity without mixing graphs.

### BEAT 005 — `S08_A005`

#### ANCHOR / SPOKEN PHRASE
> Method Two ... prefix sum plus frequency HashMap.

#### WHAT APPEARS NOW
Bring a minimal prefix token on left and FrequencyMapTableV2 on right; no trace values.

#### CENTER-STAGE HERO
Method2 identity.

#### CAUSE
Narration reaches: “Method Two ... prefix sum plus frequency HashMap.”

#### EFFECT / MOTION
One relation `needed → frequency` appears.

#### WHAT MUST NOT APPEAR YET
No master trace replay.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Keep identity for complexity.

#### PERSISTENT STATE
Method2 = prefix + frequency map.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + ChalkText + RoughLine

#### MOTION PURPOSE
Name optimal method succinctly.

### BEAT 006 — `S08_A006`

#### ANCHOR / SPOKEN PHRASE
> Expected time ... `O of n`.

#### WHAT APPEARS NOW
Bring back dimmed O(n²) curve, then draw active O(n) rough line left-to-right.

#### CENTER-STAGE HERO
Expected O(n) curve.

#### CAUSE
Narration reaches: “Expected time ... `O of n`.”

#### EFFECT / MOTION
Linear curve becomes active; quadratic remains dim context only.

#### WHAT MUST NOT APPEAR YET
No benchmark numbers; no claim of worst-case deterministic HashMap time.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Clear time comparison after settle.

#### PERSISTENT STATE
Method2 expected time O(n).

#### KIT / EXISTING SYSTEM
ComplexityGrowthGraphV2

#### MOTION PURPOSE
Show growth-class improvement.

**COMPLEXITY CONTRACT:** active curve = linear; previous quadratic dimmed; reason = one array pass + expected O(1) map work per element.

### BEAT 007 — `S08_A007`

#### ANCHOR / SPOKEN PHRASE
> Auxiliary space ... `O of n`.

#### WHAT APPEARS NOW
Show linear memory-growth curve with a small frequency-map row count cue.

#### CENTER-STAGE HERO
O(n) auxiliary-space curve.

#### CAUSE
Narration reaches: “Auxiliary space ... `O of n`.”

#### EFFECT / MOTION
Memory curve grows linearly as distinct prefix keys may accumulate.

#### WHAT MUST NOT APPEAR YET
Do not keep time curves packed beside it.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Clear complexity stage before mistakes.

#### PERSISTENT STATE
Method2 space O(n).

#### KIT / EXISTING SYSTEM
ComplexityGrowthGraphV2 + FrequencyMapTableV2

#### MOTION PURPOSE
Teach memory growth cleanly.

### BEAT 008 — `S08_A008`

#### ANCHOR / SPOKEN PHRASE
> Key mistakes.

#### WHAT APPEARS NOW
Complexity clears completely. One centered `MISTAKES` label enters; one point at a time only.

#### CENTER-STAGE HERO
Mistake checklist mode.

#### CAUSE
Narration reaches: “Key mistakes.”

#### EFFECT / MOTION
Mode transition only.

#### WHAT MUST NOT APPEAR YET
Do not pre-render all mistakes.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Keep empty point stage.

#### PERSISTENT STATE
None.

#### KIT / EXISTING SYSTEM
SceneLabelStrip + ChalkText

#### MOTION PURPOSE
Prevent dashboard/list dump.

### BEAT 009 — `S08_A009`

#### ANCHOR / SPOKEN PHRASE
> Normal sliding window is not reliable when negative numbers are allowed.

#### WHAT APPEARS NOW
Show `[4,-1]`, target 3, with “sum > k” crossed as a safe-stop rule.

#### CENTER-STAGE HERO
Negative-number warning.

#### CAUSE
Narration reaches: “Normal sliding window is not reliable when negative numbers are allowed.”

#### EFFECT / MOTION
Single counterexample cue proves the mistake; no extended trace.

#### WHAT MUST NOT APPEAR YET
Do not replay Scene02 explanation.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Clear tiny example.

#### PERSISTENT STATE
Sliding-window stop rule unsafe with negatives.

#### KIT / EXISTING SYSTEM
ArrayTrackV2 + RoughLine + ChalkText

#### MOTION PURPOSE
Recall one essential mistake.

### BEAT 010 — `S08_A010`

#### ANCHOR / SPOKEN PHRASE
> Store prefix frequency ... not only existence.

#### WHAT APPEARS NOW
Show one key with count `2`; reject boolean `yes`.

#### CENTER-STAGE HERO
Frequency over existence.

#### CAUSE
Narration reaches: “Store prefix frequency ... not only existence.”

#### EFFECT / MOTION
Frequency badge confirms.

#### WHAT MUST NOT APPEAR YET
No full map.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Keep frequency meaning only.

#### PERSISTENT STATE
Map stores counts.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + CountUp

#### MOTION PURPOSE
Lock data meaning.

### BEAT 011 — `S08_A011`

#### ANCHOR / SPOKEN PHRASE
> Start with: zero maps to one.

#### WHAT APPEARS NOW
Show only `{0→1}` row.

#### CENTER-STAGE HERO
Initialization rule.

#### CAUSE
Narration reaches: “Start with: zero maps to one.”

#### EFFECT / MOTION
Row appears and confirms.

#### WHAT MUST NOT APPEAR YET
No other entries.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Clear after point.

#### PERSISTENT STATE
Initial empty-prefix count.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2

#### MOTION PURPOSE
Recall initialization.

### BEAT 012 — `S08_A012`

#### ANCHOR / SPOKEN PHRASE
> Query before inserting the current prefix.

#### WHAT APPEARS NOW
Show two labels `QUERY → INSERT`; current token stays outside map until after arrow reaches query.

#### CENTER-STAGE HERO
Correct order.

#### CAUSE
Narration reaches: “Query before inserting the current prefix.”

#### EFFECT / MOTION
Query highlights first; insert second.

#### WHAT MUST NOT APPEAR YET
No `[0]` mini trace.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Clear order cue.

#### PERSISTENT STATE
Earlier-only invariant.

#### KIT / EXISTING SYSTEM
FrequencyMapTableV2 + RoughLine

#### MOTION PURPOSE
Recall correctness order.

### BEAT 013 — `S08_A013`

#### ANCHOR / SPOKEN PHRASE
> And remember ... array index and prefix position are different.

#### WHAT APPEARS NOW
Show one array index `i` under a slot and one boundary marker `P(i+1)` between/after slots.

#### CENTER-STAGE HERO
Index vs prefix-position distinction.

#### CAUSE
Narration reaches: “And remember ... array index and prefix position are different.”

#### EFFECT / MOTION
Two labels separate spatially; no full prefix derivation.

#### WHAT MUST NOT APPEAR YET
No prefix sequence.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Clear distinction cue.

#### PERSISTENT STATE
Index identity differs from prefix boundary identity.

#### KIT / EXISTING SYSTEM
ArrayTrackV2 + ChalkText + RoughLine

#### MOTION PURPOSE
Prevent off-by-one mental model.

### BEAT 014 — `S08_A014`

#### ANCHOR / SPOKEN PHRASE
> Important edge cases.

#### WHAT APPEARS NOW
Clear mistakes; open one center example slot.

#### CENTER-STAGE HERO
Edge-case mode.

#### CAUSE
Narration reaches: “Important edge cases.”

#### EFFECT / MOTION
Transition only.

#### WHAT MUST NOT APPEAR YET
Do not show all cases at once.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Keep stage empty until first case.

#### PERSISTENT STATE
None.

#### KIT / EXISTING SYSTEM
SceneLabelStrip

#### MOTION PURPOSE
Maintain minimality.

### BEAT 015 — `S08_A015`

#### ANCHOR / SPOKEN PHRASE
> `[3]`, target three ... answer one.

#### WHAT APPEARS NOW
Show single-cell array `[3]`, target 3, answer 1.

#### CENTER-STAGE HERO
Single-element valid subarray.

#### CAUSE
Narration reaches: “`[3]`, target three ... answer one.”

#### EFFECT / MOTION
Cell confirms once.

#### WHAT MUST NOT APPEAR YET
No general trace.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Replace for next case.

#### PERSISTENT STATE
Edge result locked.

#### KIT / EXISTING SYSTEM
ArrayTrackV2 + CountUp

#### MOTION PURPOSE
Compact correctness reminder.

### BEAT 016 — `S08_A016`

#### ANCHOR / SPOKEN PHRASE
> `[0]`, target zero ... answer one.

#### WHAT APPEARS NOW
Replace with `[0]`, target 0, answer 1.

#### CENTER-STAGE HERO
Zero target single value.

#### CAUSE
Narration reaches: “`[0]`, target zero ... answer one.”

#### EFFECT / MOTION
One confirm reaction.

#### WHAT MUST NOT APPEAR YET
No query-before-insert proof replay.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Replace for next case.

#### PERSISTENT STATE
Edge result locked.

#### KIT / EXISTING SYSTEM
ArrayTrackV2 + CountUp

#### MOTION PURPOSE
Compact edge reminder.

### BEAT 017 — `S08_A017`

#### ANCHOR / SPOKEN PHRASE
> `[0, 0, 0]`, target zero ... answer six.

#### WHAT APPEARS NOW
Replace with three-zero array and show final count 6 only; do not enumerate six ranges.

#### CENTER-STAGE HERO
Multiplicity edge result.

#### CAUSE
Narration reaches: “`[0, 0, 0]`, target zero ... answer six.”

#### EFFECT / MOTION
Answer 6 writes/rolls in as final result.

#### WHAT MUST NOT APPEAR YET
Do not trace all six subarrays.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Clear edge example after settle.

#### PERSISTENT STATE
Multiplicity can exceed n.

#### KIT / EXISTING SYSTEM
ArrayTrackV2 + CountUp

#### MOTION PURPOSE
Show important multiplicity edge without expanding.

### BEAT 018 — `S08_A018`

#### ANCHOR / SPOKEN PHRASE
> The key rule is:

#### WHAT APPEARS NOW
Clear examples; return to one center formula line.

#### CENTER-STAGE HERO
Final counting rule.

#### CAUSE
Narration reaches: “The key rule is:”

#### EFFECT / MOTION
Formula stage enters.

#### WHAT MUST NOT APPEAR YET
Do not restate whole algorithm.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Keep for final phrase.

#### PERSISTENT STATE
None.

#### KIT / EXISTING SYSTEM
ChalkText

#### MOTION PURPOSE
Land one takeaway.

### BEAT 019 — `S08_A019`

#### ANCHOR / SPOKEN PHRASE
> answer plus equals frequency of needed prefix.

#### WHAT APPEARS NOW
Write `answer += freq[needed]` semantically (not as a new implementation line).

#### CENTER-STAGE HERO
Counting rule.

#### CAUSE
Narration reaches: “answer plus equals frequency of needed prefix.”

#### EFFECT / MOTION
Frequency term flows into answer symbol and settles.

#### WHAT MUST NOT APPEAR YET
No code editor, no trace replay.

#### COMPREHENSION HOLD
No invented pause. Hold only if final audio contains a real comprehension gap.

#### CLEANUP / EXIT
Clear to neutral end state.

#### PERSISTENT STATE
Answer increments by count of earlier needed prefixes.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine + CountUp concept

#### MOTION PURPOSE
End with one durable rule.

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
