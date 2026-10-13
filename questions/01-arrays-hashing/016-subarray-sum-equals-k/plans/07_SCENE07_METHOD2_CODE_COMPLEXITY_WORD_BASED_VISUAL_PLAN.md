> **V3 renumber lock:** This is the previously independently re-audited Method2 code + complexity plan. Narration is unchanged; only scene numbering/continuity is updated. Complexity must use the reusable kit-level rough growth graph, never MiniGraph.

# Q16 — Subarray Sum Equals K (LeetCode 560)
# Phase 9 · Scene 06 — Method2 Code + Complexity
## WORD-BASED VISUAL PLAN — NO GUESSED TIME · NO GUESSED FRAMES · PROJECT-SOURCE GROUNDED

---

**Scene purpose:** Method2 Code + Complexity.

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
FrequencyMapTableV2 /* current HashMapTable is index-semantic; DO NOT use unchanged */ as supplied = index-specific → DO NOT USE AS-IS for frequency
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

Method2 full trace completed with answer=6 and exact frequency behavior understood.

---

# QUESTION-SPECIFIC VISUAL IDENTITY

```text
TRACE → LIVE CODE → LINEAR GROWTH → SPACE O(n)
```

---

# HARD NO-SPOILER LAW

Future method state, code, result, complexity, map frequency, prefix value, pointer position, or roadmap progress does not exist visually before its narration anchor.

---

# SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact spoken phrase |
|---|---|
| `S07_A001` | Start with the frequency map. |
| `S07_A002` | Put zero with frequency one. |
| `S07_A003` | Then set prefix to zero. |
| `S07_A004` | And answer to zero. |
| `S07_A005` | Now move through the array one value at a time. |
| `S07_A006` | Add the current value to the prefix. |
| `S07_A007` | Then calculate: |
| `S07_A008` | needed equals prefix minus `k`. |
| `S07_A009` | Now query the frequency map. |
| `S07_A010` | How many earlier prefixes equal `needed`? |
| `S07_A011` | Add that frequency to the answer. |
| `S07_A012` | Only after the lookup … |
| `S07_A013` | increase the frequency of the current prefix. |
| `S07_A014` | Then continue to the next value. |
| `S07_A015` | Finally … return the answer. |
| `S07_A016` | Notice the order again. |
| `S07_A017` | Update prefix … |
| `S07_A018` | compute needed … |
| `S07_A019` | query earlier prefixes … |
| `S07_A020` | add matches … |
| `S07_A021` | then store current prefix. |
| `S07_A022` | The lookup comes before the insert. |
| `S07_A023` | That is part of correctness. |
| `S07_A024` | Now the complexity. |
| `S07_A025` | We scan the array once. |
| `S07_A026` | For each element, we do a constant amount of arithmetic … |
| `S07_A027` | and expected constant-time HashMap operations. |
| `S07_A028` | So the expected time complexity is `O of n`. |
| `S07_A029` | For auxiliary space … |
| `S07_A030` | in the worst case, many prefix sums can be different. |
| `S07_A031` | So the map can store `O of n` prefix values. |
| `S07_A032` | Therefore auxiliary space is `O of n`. |
| `S07_A033` | So Method Two changes the repeated `O of n squared` range search … |
| `S07_A034` | into one expected `O of n` pass. |
| `S07_A035` | The important relation is: |
| `S07_A037` | current prefix minus previous prefix equals `k`. |
| `S07_A038` | That lets us replace many possible starting-position checks … |
| `S07_A039` | with one required-prefix lookup. |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 001 — `S07_A001`

### ANCHOR / SPOKEN PHRASE
> Start with the frequency map.

### WHAT APPEARS NOW
Bring the production code surface to center with all lines hidden; show only a small `frequency map` intent label.

### CENTER-STAGE HERO
Live code stage.

### CAUSE
Narration reaches: `Start with the frequency map.`

### EFFECT / MOTION
Trace state recedes.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 trace truth known.

### KIT / EXISTING SYSTEM
Production code component — API unresolved.

### MOTION PURPOSE
Begin Trace→Code with no code spoiler.


---

## BEAT 002 — `S07_A002`

### ANCHOR / SPOKEN PHRASE
> Put zero with frequency one.

### WHAT APPEARS NOW
Type only `freq = {0: 1}` character-by-character on the active code line.

### CENTER-STAGE HERO
Active code: `freq = {0: 1}`.

### CAUSE
Narration reaches: `Put zero with frequency one.`

### EFFECT / MOTION
Frequency map shows exactly `0→1`.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`freq = {0: 1}` is now part of the built solution; earlier dependency lines may remain dim.

### KIT / EXISTING SYSTEM
Production code component; semantic support via Array V2 / frequency map as needed.

### MOTION PURPOSE
Construct the exact optimal code from the verified trace.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
freq = {0: 1}
```

**CHARACTER-TYPING TRIGGER**  
Put zero with frequency one.

**WHAT LINE MEANS**  
Initialize the earlier-prefix frequency map with the empty prefix.

**SEMANTIC EFFECT VISUAL**  
Frequency map shows exactly `0→1`.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
Every future code line and return before narration; no complete solution dump.

**WHEN THIS LINE REDUCES / EXITS**  
Reduce/dim after its semantic effect settles; keep only if needed by the next line.


---

## BEAT 003 — `S07_A003`

### ANCHOR / SPOKEN PHRASE
> Then set prefix to zero.

### WHAT APPEARS NOW
Type only `prefix = 0` character-by-character on the active code line.

### CENTER-STAGE HERO
Active code: `prefix = 0`.

### CAUSE
Narration reaches: `Then set prefix to zero.`

### EFFECT / MOTION
Prefix state becomes 0.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`prefix = 0` is now part of the built solution; earlier dependency lines may remain dim.

### KIT / EXISTING SYSTEM
Production code component; semantic support via Array V2 / frequency map as needed.

### MOTION PURPOSE
Construct the exact optimal code from the verified trace.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
prefix = 0
```

**CHARACTER-TYPING TRIGGER**  
Then set prefix to zero.

**WHAT LINE MEANS**  
Initialize running prefix sum.

**SEMANTIC EFFECT VISUAL**  
Prefix state becomes 0.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
Every future code line and return before narration; no complete solution dump.

**WHEN THIS LINE REDUCES / EXITS**  
Reduce/dim after its semantic effect settles; keep only if needed by the next line.


---

## BEAT 004 — `S07_A004`

### ANCHOR / SPOKEN PHRASE
> And answer to zero.

### WHAT APPEARS NOW
Type only `answer = 0` character-by-character on the active code line.

### CENTER-STAGE HERO
Active code: `answer = 0`.

### CAUSE
Narration reaches: `And answer to zero.`

### EFFECT / MOTION
Answer becomes 0.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`answer = 0` is now part of the built solution; earlier dependency lines may remain dim.

### KIT / EXISTING SYSTEM
Production code component; semantic support via Array V2 / frequency map as needed.

### MOTION PURPOSE
Construct the exact optimal code from the verified trace.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
answer = 0
```

**CHARACTER-TYPING TRIGGER**  
And answer to zero.

**WHAT LINE MEANS**  
Initialize answer count.

**SEMANTIC EFFECT VISUAL**  
Answer becomes 0.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
Every future code line and return before narration; no complete solution dump.

**WHEN THIS LINE REDUCES / EXITS**  
Reduce/dim after its semantic effect settles; keep only if needed by the next line.


---

## BEAT 005 — `S07_A005`

### ANCHOR / SPOKEN PHRASE
> Now move through the array one value at a time.

### WHAT APPEARS NOW
Type only `for value in nums:` character-by-character on the active code line.

### CENTER-STAGE HERO
Active code: `for value in nums:`.

### CAUSE
Narration reaches: `Now move through the array one value at a time.`

### EFFECT / MOTION
Current-index support begins a one-pass sweep.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`for value in nums:` is now part of the built solution; earlier dependency lines may remain dim.

### KIT / EXISTING SYSTEM
Production code component; semantic support via Array V2 / frequency map as needed.

### MOTION PURPOSE
Construct the exact optimal code from the verified trace.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
for value in nums:
```

**CHARACTER-TYPING TRIGGER**  
Now move through the array one value at a time.

**WHAT LINE MEANS**  
Scan the array once from left to right.

**SEMANTIC EFFECT VISUAL**  
Current-index support begins a one-pass sweep.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
Every future code line and return before narration; no complete solution dump.

**WHEN THIS LINE REDUCES / EXITS**  
Reduce/dim after its semantic effect settles; keep only if needed by the next line.


---

## BEAT 006 — `S07_A006`

### ANCHOR / SPOKEN PHRASE
> Add the current value to the prefix.

### WHAT APPEARS NOW
Type only `prefix += value` character-by-character on the active code line.

### CENTER-STAGE HERO
Active code: `prefix += value`.

### CAUSE
Narration reaches: `Add the current value to the prefix.`

### EFFECT / MOTION
Prefix state changes while array values stay fixed.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`prefix += value` is now part of the built solution; earlier dependency lines may remain dim.

### KIT / EXISTING SYSTEM
Production code component; semantic support via Array V2 / frequency map as needed.

### MOTION PURPOSE
Construct the exact optimal code from the verified trace.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
prefix += value
```

**CHARACTER-TYPING TRIGGER**  
Add the current value to the prefix.

**WHAT LINE MEANS**  
Update current cumulative prefix with the current value.

**SEMANTIC EFFECT VISUAL**  
Prefix state changes while array values stay fixed.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
Every future code line and return before narration; no complete solution dump.

**WHEN THIS LINE REDUCES / EXITS**  
Reduce/dim after its semantic effect settles; keep only if needed by the next line.


---

## BEAT 007 — `S07_A007`

### ANCHOR / SPOKEN PHRASE
> Then calculate:

### WHAT APPEARS NOW
Keep `prefix += value` context dim and open an empty `needed =` continuation slot; no formula yet.

### CENTER-STAGE HERO
Need the lookup key.

### CAUSE
Narration reaches: `Then calculate:`

### EFFECT / MOTION
Attention moves from cumulative update to lookup-key derivation.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Current prefix updated.

### KIT / EXISTING SYSTEM
Production code component.

### MOTION PURPOSE
Respect narration ordering.


---

## BEAT 008 — `S07_A008`

### ANCHOR / SPOKEN PHRASE
> needed equals prefix minus `k`.

### WHAT APPEARS NOW
Type only `needed = prefix - k` character-by-character on the active code line.

### CENTER-STAGE HERO
Active code: `needed = prefix - k`.

### CAUSE
Narration reaches: `needed equals prefix minus `k`.`

### EFFECT / MOTION
Needed-prefix expression appears.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`needed = prefix - k` is now part of the built solution; earlier dependency lines may remain dim.

### KIT / EXISTING SYSTEM
Production code component; semantic support via Array V2 / frequency map as needed.

### MOTION PURPOSE
Construct the exact optimal code from the verified trace.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
needed = prefix - k
```

**CHARACTER-TYPING TRIGGER**  
needed equals prefix minus `k`.

**WHAT LINE MEANS**  
Compute the only previous prefix value that can create a target-sum subarray.

**SEMANTIC EFFECT VISUAL**  
Needed-prefix expression appears.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
Every future code line and return before narration; no complete solution dump.

**WHEN THIS LINE REDUCES / EXITS**  
Reduce/dim after its semantic effect settles; keep only if needed by the next line.


---

## BEAT 009 — `S07_A009`

### ANCHOR / SPOKEN PHRASE
> Now query the frequency map.

### WHAT APPEARS NOW
Move semantic focus from code to the frequency map query state; do not add answer yet.

### CENTER-STAGE HERO
Map query stage.

### CAUSE
Narration reaches: `Now query the frequency map.`

### EFFECT / MOTION
Needed key targets the map.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
needed computed; answer unchanged.

### KIT / EXISTING SYSTEM
Genericized frequency map.

### MOTION PURPOSE
Show code line effect before answer update.


---

## BEAT 010 — `S07_A010`

### ANCHOR / SPOKEN PHRASE
> How many earlier prefixes equal `needed`?

### WHAT APPEARS NOW
Keep code quiet and let the already-computed `needed` key target the frequency map. Highlight the matching key row if present; do not type a standalone `freq.get(...)` line because the verified code has no such separate statement.

### CENTER-STAGE HERO
Frequency-map lookup for `needed`.

### CAUSE
Narration reaches: `How many earlier prefixes equal `needed`?`

### EFFECT / MOTION
The map answers the spoken question: how many earlier prefixes equal `needed`? The answer counter does not change until the next phrase.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Lookup result is known; answer update line is still hidden.

### KIT / EXISTING SYSTEM
Genericized frequency map required; supplied index-specific FrequencyMapTableV2 /* current HashMapTable is index-semantic; DO NOT use unchanged */ cannot be used as-is.

### MOTION PURPOSE
Show the semantic lookup separately while preserving exact code organization.
---

## BEAT 011 — `S07_A011`

### ANCHOR / SPOKEN PHRASE
> Add that frequency to the answer.

### WHAT APPEARS NOW
Type only `answer += freq.get(needed, 0)` character-by-character on the active code line.

### CENTER-STAGE HERO
Active code: `answer += freq.get(needed, 0)`.

### CAUSE
Narration reaches: `Add that frequency to the answer.`

### EFFECT / MOTION
Answer changes by the queried frequency.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`answer += freq.get(needed, 0)` is now part of the built solution; earlier dependency lines may remain dim.

### KIT / EXISTING SYSTEM
Production code component; semantic support via Array V2 / frequency map as needed.

### MOTION PURPOSE
Construct the exact optimal code from the verified trace.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
answer += freq.get(needed, 0)
```

**CHARACTER-TYPING TRIGGER**  
Add that frequency to the answer.

**WHAT LINE MEANS**  
Add every valid starting boundary ending here.

**SEMANTIC EFFECT VISUAL**  
Answer changes by the queried frequency.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
Every future code line and return before narration; no complete solution dump.

**WHEN THIS LINE REDUCES / EXITS**  
Reduce/dim after its semantic effect settles; keep only if needed by the next line.


---

## BEAT 012 — `S07_A012`

### ANCHOR / SPOKEN PHRASE
> Only after the lookup …

### WHAT APPEARS NOW
Hold the lookup result and explicitly keep current prefix outside the map; next insert line remains hidden.

### CENTER-STAGE HERO
Lookup-before-insert state.

### CAUSE
Narration reaches: `Only after the lookup …`

### EFFECT / MOTION
Correct ordering is visually preserved.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Matches counted; current prefix not stored.

### KIT / EXISTING SYSTEM
Frequency map + code reduced.

### MOTION PURPOSE
Prevent the classic insert-before-query bug.


---

## BEAT 013 — `S07_A013`

### ANCHOR / SPOKEN PHRASE
> increase the frequency of the current prefix.

### WHAT APPEARS NOW
Type only `freq[prefix] = freq.get(prefix, 0) + 1` character-by-character on the active code line.

### CENTER-STAGE HERO
Active code: `freq[prefix] = freq.get(prefix, 0) + 1`.

### CAUSE
Narration reaches: `increase the frequency of the current prefix.`

### EFFECT / MOTION
Current prefix frequency increments for future positions.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`freq[prefix] = freq.get(prefix, 0) + 1` is now part of the built solution; earlier dependency lines may remain dim.

### KIT / EXISTING SYSTEM
Production code component; semantic support via Array V2 / frequency map as needed.

### MOTION PURPOSE
Construct the exact optimal code from the verified trace.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
freq[prefix] = freq.get(prefix, 0) + 1
```

**CHARACTER-TYPING TRIGGER**  
increase the frequency of the current prefix.

**WHAT LINE MEANS**  
Store the current prefix only after counting matches.

**SEMANTIC EFFECT VISUAL**  
Current prefix frequency increments for future positions.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
Every future code line and return before narration; no complete solution dump.

**WHEN THIS LINE REDUCES / EXITS**  
Reduce/dim after its semantic effect settles; keep only if needed by the next line.


---

## BEAT 014 — `S07_A014`

### ANCHOR / SPOKEN PHRASE
> Then continue to the next value.

### WHAT APPEARS NOW
Return semantic focus to the one-pass array loop; code remains built but quiet.

### CENTER-STAGE HERO
Continue next value.

### CAUSE
Narration reaches: `Then continue to the next value.`

### EFFECT / MOTION
Current iteration settles and next iteration is implied.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Loop state correct.

### KIT / EXISTING SYSTEM
Production code + Array V2.

### MOTION PURPOSE
Show iteration continuity without re-tracing.


---

## BEAT 015 — `S07_A015`

### ANCHOR / SPOKEN PHRASE
> Finally … return the answer.

### WHAT APPEARS NOW
Type only `return answer` character-by-character on the active code line.

### CENTER-STAGE HERO
Active code: `return answer`.

### CAUSE
Narration reaches: `Finally … return the answer.`

### EFFECT / MOTION
Answer becomes output.

### WHAT MUST NOT APPEAR YET
Future code, complexity graph, roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`return answer` is now part of the built solution; earlier dependency lines may remain dim.

### KIT / EXISTING SYSTEM
Production code component; semantic support via Array V2 / frequency map as needed.

### MOTION PURPOSE
Construct the exact optimal code from the verified trace.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
return answer
```

**CHARACTER-TYPING TRIGGER**  
Finally … return the answer.

**WHAT LINE MEANS**  
Return the final count.

**SEMANTIC EFFECT VISUAL**  
Answer becomes output.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
Every future code line and return before narration; no complete solution dump.

**WHEN THIS LINE REDUCES / EXITS**  
Reduce/dim after its semantic effect settles; keep only if needed by the next line.


---

## BEAT 016 — `S07_A016`

### ANCHOR / SPOKEN PHRASE
> Notice the order again.

### WHAT APPEARS NOW
Reduce the code to a compact order proof and emphasize `Order recap scaffold` only.

### CENTER-STAGE HERO
Order recap scaffold

### CAUSE
Narration reaches: `Notice the order again.`

### EFFECT / MOTION
The code ordering is recalled without replaying the trace.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 code order locked.

### KIT / EXISTING SYSTEM
ChalkText + reduced code surface.

### MOTION PURPOSE
Reinforce correctness ordering.


---

## BEAT 017 — `S07_A017`

### ANCHOR / SPOKEN PHRASE
> Update prefix …

### WHAT APPEARS NOW
Reduce the code to a compact order proof and emphasize `UPDATE PREFIX` only.

### CENTER-STAGE HERO
UPDATE PREFIX

### CAUSE
Narration reaches: `Update prefix …`

### EFFECT / MOTION
The code ordering is recalled without replaying the trace.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 code order locked.

### KIT / EXISTING SYSTEM
ChalkText + reduced code surface.

### MOTION PURPOSE
Reinforce correctness ordering.


---

## BEAT 018 — `S07_A018`

### ANCHOR / SPOKEN PHRASE
> compute needed …

### WHAT APPEARS NOW
Reduce the code to a compact order proof and emphasize `COMPUTE NEEDED` only.

### CENTER-STAGE HERO
COMPUTE NEEDED

### CAUSE
Narration reaches: `compute needed …`

### EFFECT / MOTION
The code ordering is recalled without replaying the trace.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 code order locked.

### KIT / EXISTING SYSTEM
ChalkText + reduced code surface.

### MOTION PURPOSE
Reinforce correctness ordering.


---

## BEAT 019 — `S07_A019`

### ANCHOR / SPOKEN PHRASE
> query earlier prefixes …

### WHAT APPEARS NOW
Reduce the code to a compact order proof and emphasize `QUERY EARLIER PREFIXES` only.

### CENTER-STAGE HERO
QUERY EARLIER PREFIXES

### CAUSE
Narration reaches: `query earlier prefixes …`

### EFFECT / MOTION
The code ordering is recalled without replaying the trace.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 code order locked.

### KIT / EXISTING SYSTEM
ChalkText + reduced code surface.

### MOTION PURPOSE
Reinforce correctness ordering.


---

## BEAT 020 — `S07_A020`

### ANCHOR / SPOKEN PHRASE
> add matches …

### WHAT APPEARS NOW
Reduce the code to a compact order proof and emphasize `ADD MATCHES` only.

### CENTER-STAGE HERO
ADD MATCHES

### CAUSE
Narration reaches: `add matches …`

### EFFECT / MOTION
The code ordering is recalled without replaying the trace.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 code order locked.

### KIT / EXISTING SYSTEM
ChalkText + reduced code surface.

### MOTION PURPOSE
Reinforce correctness ordering.


---

## BEAT 021 — `S07_A021`

### ANCHOR / SPOKEN PHRASE
> then store current prefix.

### WHAT APPEARS NOW
Reduce the code to a compact order proof and emphasize `STORE CURRENT PREFIX` only.

### CENTER-STAGE HERO
STORE CURRENT PREFIX

### CAUSE
Narration reaches: `then store current prefix.`

### EFFECT / MOTION
The code ordering is recalled without replaying the trace.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 code order locked.

### KIT / EXISTING SYSTEM
ChalkText + reduced code surface.

### MOTION PURPOSE
Reinforce correctness ordering.


---

## BEAT 022 — `S07_A022`

### ANCHOR / SPOKEN PHRASE
> The lookup comes before the insert.

### WHAT APPEARS NOW
Reduce the code to a compact order proof and emphasize `QUERY BEFORE INSERT` only.

### CENTER-STAGE HERO
QUERY BEFORE INSERT

### CAUSE
Narration reaches: `The lookup comes before the insert.`

### EFFECT / MOTION
The code ordering is recalled without replaying the trace.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 code order locked.

### KIT / EXISTING SYSTEM
ChalkText + reduced code surface.

### MOTION PURPOSE
Reinforce correctness ordering.


---

## BEAT 023 — `S07_A023`

### ANCHOR / SPOKEN PHRASE
> That is part of correctness.

### WHAT APPEARS NOW
Reduce the code to a compact order proof and emphasize `CORRECTNESS` only.

### CENTER-STAGE HERO
CORRECTNESS

### CAUSE
Narration reaches: `That is part of correctness.`

### EFFECT / MOTION
The code ordering is recalled without replaying the trace.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 code order locked.

### KIT / EXISTING SYSTEM
ChalkText + reduced code surface.

### MOTION PURPOSE
Reinforce correctness ordering.


---

## BEAT 024 — `S07_A024`

### ANCHOR / SPOKEN PHRASE
> Now the complexity.

### WHAT APPEARS NOW
Clear code/order recap and prepare an empty complexity-growth stage.

### CENTER-STAGE HERO
Complexity stage.

### CAUSE
Narration reaches: `Now the complexity.`

### EFFECT / MOTION
Semantic handoff code → complexity.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 code complete.

### KIT / EXISTING SYSTEM
`ComplexityGrowthGraphV2` required; it must be a kit-level wrapper built from RoughLine/RoughCurve/ChalkText. MiniGraph forbidden.

### MOTION PURPOSE
Start complexity explanation cleanly.


---

## BEAT 025 — `S07_A025`

### ANCHOR / SPOKEN PHRASE
> We scan the array once.

### WHAT APPEARS NOW
Show a single left-to-right pass across n fixed array slots; no curve yet.

### CENTER-STAGE HERO
One pass over n elements.

### CAUSE
Narration reaches: `We scan the array once.`

### EFFECT / MOTION
Show a single left-to-right pass across n fixed array slots; no curve yet.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 time reasoning.

### KIT / EXISTING SYSTEM
CREATE/REUSE `ComplexityGrowthGraphV2` at kit level, implemented from RoughLine/RoughCurve/ChalkText; MiniGraph forbidden.

### MOTION PURPOSE
Teach why one pass with expected constant map work is linear.


---

## BEAT 026 — `S07_A026`

### ANCHOR / SPOKEN PHRASE
> For each element, we do a constant amount of arithmetic …

### WHAT APPEARS NOW
Attach a small fixed-size operation bundle to one element: arithmetic + lookup + update.

### CENTER-STAGE HERO
Constant work per element.

### CAUSE
Narration reaches: `For each element, we do a constant amount of arithmetic …`

### EFFECT / MOTION
Attach a small fixed-size operation bundle to one element: arithmetic + lookup + update.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 time reasoning.

### KIT / EXISTING SYSTEM
CREATE/REUSE `ComplexityGrowthGraphV2` at kit level, implemented from RoughLine/RoughCurve/ChalkText; MiniGraph forbidden.

### MOTION PURPOSE
Teach why one pass with expected constant map work is linear.


---

## BEAT 027 — `S07_A027`

### ANCHOR / SPOKEN PHRASE
> and expected constant-time HashMap operations.

### WHAT APPEARS NOW
Label HashMap lookup/update as `expected O(1)` operations; do not show final O(n) until next phrase.

### CENTER-STAGE HERO
Expected constant work per element.

### CAUSE
Narration reaches: `and expected constant-time HashMap operations.`

### EFFECT / MOTION
Label HashMap lookup/update as `expected O(1)` operations; do not show final O(n) until next phrase.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 time reasoning.

### KIT / EXISTING SYSTEM
CREATE/REUSE `ComplexityGrowthGraphV2` at kit level, implemented from RoughLine/RoughCurve/ChalkText; MiniGraph forbidden.

### MOTION PURPOSE
Teach why one pass with expected constant map work is linear.


---

## BEAT 028 — `S07_A028`

### ANCHOR / SPOKEN PHRASE
> So the expected time complexity is `O of n`.

### WHAT APPEARS NOW
Reveal `EXPECTED O(n)` and draw one generic linear growth curve left-to-right.

### CENTER-STAGE HERO
Expected O(n) curve.

### CAUSE
Narration reaches: `So the expected time complexity is `O of n`.`

### EFFECT / MOTION
Reveal `EXPECTED O(n)` and draw one generic linear growth curve left-to-right.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 time reasoning.

### KIT / EXISTING SYSTEM
CREATE/REUSE `ComplexityGrowthGraphV2` at kit level, implemented from RoughLine/RoughCurve/ChalkText; MiniGraph forbidden.

### MOTION PURPOSE
Teach why one pass with expected constant map work is linear.


### COMPLEXITY-SPECIFIC CONTRACT
**BIG-O PHRASE**  
expected O(n)

**WHY THIS BIG-O IS TRUE**  
Each of n elements performs a constant amount of arithmetic and expected O(1) HashMap work.

**CURVE TYPE**  
linear

**WHAT CAUSES THE CURVE**  
One left-to-right pass.

**WHAT MUST NOT APPEAR YET**  
O(n²) comparison curve until explicitly compared; benchmark numbers.

**WHEN GRAPH EXITS / REDUCES**  
Exit/reduce when narration moves to auxiliary space.


---

## BEAT 029 — `S07_A029`

### ANCHOR / SPOKEN PHRASE
> For auxiliary space …

### WHAT APPEARS NOW
Remove the time graph and open a frequency-map memory-growth stage.

### CENTER-STAGE HERO
Map growth.

### CAUSE
Narration reaches: `For auxiliary space …`

### EFFECT / MOTION
Remove the time graph and open a frequency-map memory-growth stage.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Worst-case map grows with n.

### KIT / EXISTING SYSTEM
Genericized frequency map + ChalkText.

### MOTION PURPOSE
Teach why the map may grow linearly.


---

## BEAT 030 — `S07_A030`

### ANCHOR / SPOKEN PHRASE
> in the worst case, many prefix sums can be different.

### WHAT APPEARS NOW
Show successive distinct prefix keys conceptually accumulating as n grows; do not claim all are always distinct.

### CENTER-STAGE HERO
Map growth.

### CAUSE
Narration reaches: `in the worst case, many prefix sums can be different.`

### EFFECT / MOTION
Show successive distinct prefix keys conceptually accumulating as n grows; do not claim all are always distinct.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Worst-case map grows with n.

### KIT / EXISTING SYSTEM
Genericized frequency map + ChalkText.

### MOTION PURPOSE
Teach why the map may grow linearly.


---

## BEAT 031 — `S07_A031`

### ANCHOR / SPOKEN PHRASE
> So the map can store `O of n` prefix values.

### WHAT APPEARS NOW
Label the worst-case map capacity `O(n) prefix values`.

### CENTER-STAGE HERO
Method2 auxiliary space.

### CAUSE
Narration reaches: `So the map can store `O of n` prefix values.`

### EFFECT / MOTION
Label the worst-case map capacity `O(n) prefix values`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Worst-case map grows with n.

### KIT / EXISTING SYSTEM
Genericized frequency map + ChalkText.

### MOTION PURPOSE
Teach why the map may grow linearly.


---

## BEAT 032 — `S07_A032`

### ANCHOR / SPOKEN PHRASE
> Therefore auxiliary space is `O of n`.

### WHAT APPEARS NOW
Reveal `AUX SPACE O(n)` and settle the map-growth proof.

### CENTER-STAGE HERO
Method2 auxiliary space.

### CAUSE
Narration reaches: `Therefore auxiliary space is `O of n`.`

### EFFECT / MOTION
Reveal `AUX SPACE O(n)` and settle the map-growth proof.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 space O(n).

### KIT / EXISTING SYSTEM
Genericized frequency map + ChalkText.

### MOTION PURPOSE
Teach why the map may grow linearly.


### COMPLEXITY-SPECIFIC CONTRACT
**BIG-O PHRASE**  
O(n) auxiliary space

**WHY THIS BIG-O IS TRUE**  
In the worst case the frequency map stores O(n) distinct prefix sums.

**CURVE TYPE**  
linear memory growth

**WHAT CAUSES THE CURVE**  
Distinct prefix keys can accumulate with input length.

**WHAT MUST NOT APPEAR YET**  
Exact number of distinct prefixes for arbitrary input.

**WHEN GRAPH EXITS / REDUCES**  
Exit before the final optimization reason.


---

## BEAT 033 — `S07_A033`

### ANCHOR / SPOKEN PHRASE
> So Method Two changes the repeated `O of n squared` range search …

### WHAT APPEARS NOW
Briefly compare the already-learned growth classes: Method1 quadratic recedes while Method2 linear becomes dominant; no benchmark numbers.

### CENTER-STAGE HERO
O(n²) → expected O(n).

### CAUSE
Narration reaches: `So Method Two changes the repeated `O of n squared` range search …`

### EFFECT / MOTION
Complexity improvement is shown as growth-class change.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 optimal complexity understood.

### KIT / EXISTING SYSTEM
Generic complexity graph with two mathematical curves if reusable support exists.

### MOTION PURPOSE
Show the asymptotic improvement without inventing measurements.


---

## BEAT 034 — `S07_A034`

### ANCHOR / SPOKEN PHRASE
> into one expected `O of n` pass.

### WHAT APPEARS NOW
Briefly compare the already-learned growth classes: Method1 quadratic recedes while Method2 linear becomes dominant; no benchmark numbers.

### CENTER-STAGE HERO
O(n²) → expected O(n).

### CAUSE
Narration reaches: `into one expected `O of n` pass.`

### EFFECT / MOTION
Complexity improvement is shown as growth-class change.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method2 optimal complexity understood.

### KIT / EXISTING SYSTEM
Generic complexity graph with two mathematical curves if reusable support exists.

### MOTION PURPOSE
Show the asymptotic improvement without inventing measurements.


---

## BEAT 035 — `S07_A035`

### ANCHOR / SPOKEN PHRASE
> The important relation is:

### WHAT APPEARS NOW
Clear the complexity comparison and bring one empty prefix-equation scaffold to center.

### CENTER-STAGE HERO
The algebraic relation behind the optimization.

### CAUSE
Narration reaches: `The important relation is:`

### EFFECT / MOTION
Attention moves from growth-class comparison back to the exact mathematical relation.

### WHAT MUST NOT APPEAR YET
Do not reveal the full equation until the next spoken phrase.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only the equation scaffold; all complexity graphs reduce/exit.

### PERSISTENT STATE
The optimization must be tied to the prefix relation, not a generic “HashMap is fast” claim.

### KIT / EXISTING SYSTEM
ChalkText + RoughLine.

### MOTION PURPOSE
Prepare the exact relation without spoiling it.

---

## BEAT 037 — `S07_A037`

### ANCHOR / SPOKEN PHRASE
> current prefix minus previous prefix equals `k`.

### WHAT APPEARS NOW
Write `current prefix - previous prefix = k`.

### CENTER-STAGE HERO
Core equation.

### CAUSE
Narration reaches: `current prefix minus previous prefix equals `k`.`

### EFFECT / MOTION
Equation is the center-stage reason for the algorithm.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Core equation.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
State the real reason for the lookup.


---

## BEAT 038 — `S07_A038`

### ANCHOR / SPOKEN PHRASE
> That lets us replace many possible starting-position checks …

### WHAT APPEARS NOW
Recall many possible starting boundaries as faint marks and begin collapsing them toward one lookup key.

### CENTER-STAGE HERO
Many starts → one lookup.

### CAUSE
Narration reaches: `That lets us replace many possible starting-position checks …`

### EFFECT / MOTION
Search space compresses through the equation.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
One lookup transformation.

### KIT / EXISTING SYSTEM
RoughLine + ChalkText.

### MOTION PURPOSE
Show what the algebra eliminates.


---

## BEAT 039 — `S07_A039`

### ANCHOR / SPOKEN PHRASE
> with one required-prefix lookup.

### WHAT APPEARS NOW
Finish the collapse at `required previous prefix = current - k`; clear the rest for Scene08.

### CENTER-STAGE HERO
One required-prefix lookup.

### CAUSE
Narration reaches: `with one required-prefix lookup.`

### EFFECT / MOTION
Method2 reasoning settles.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Both methods complete.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
End the core lesson before the minimal review scenes.


---

# CONTINUITY OUT

Method2 code + expected O(n)/O(n) complete.

---

# SCENE 08 PHASE-9 LOCK

```text
NO GUESSED SECONDS
NO GUESSED FRAMES
NO FUTURE-STATE SPOILERS
NO GENERIC PACKED DASHBOARD
NO UNSOURCED COMPONENT API
```
