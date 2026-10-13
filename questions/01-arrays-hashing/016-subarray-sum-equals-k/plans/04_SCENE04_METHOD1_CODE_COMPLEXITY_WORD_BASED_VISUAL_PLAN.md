> **V3 9-scene lock:** Narration for this scene is unchanged from the re-audited V2 source. Timing remains intentionally unresolved until final MP3 + exact word sync.

# Q16 — Subarray Sum Equals K (LeetCode 560)
# Phase 9 · Scene 04 — Method1 Code + Complexity
## WORD-BASED VISUAL PLAN — NO GUESSED TIME · NO GUESSED FRAMES · PROJECT-SOURCE GROUNDED

---

**Scene purpose:** Method1 Code + Complexity.

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

Method1 trace completed with answer=6 and repeated overlapping range work visible.

---

# QUESTION-SPECIFIC VISUAL IDENTITY

```text
TRACE → LIVE CODE → QUADRATIC GROWTH → MEMORY QUESTION
```

---

# HARD NO-SPOILER LAW

Future method state, code, result, complexity, map frequency, prefix value, pointer position, or roadmap progress does not exist visually before its narration anchor.

---

# SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact spoken phrase |
|---|---|
| `S04_A001` | First, create the answer and set it to zero. |
| `S04_A002` | Now choose every possible starting position. |
| `S04_A003` | For each new start … |
| `S04_A004` | reset the running sum to zero. |
| `S04_A005` | Then let the ending position move from `start` to the end of the array. |
| `S04_A006` | Add the current value to the running sum. |
| `S04_A007` | If the running sum equals `k` … |
| `S04_A008` | increase the answer by one. |
| `S04_A009` | When this start is finished … |
| `S04_A010` | the outer loop moves to the next start. |
| `S04_A011` | And after all starting positions are processed … |
| `S04_A012` | return the answer. |
| `S04_A013` | This code follows the same order as our trace. |
| `S04_A014` | Choose start … |
| `S04_A015` | reset sum … |
| `S04_A016` | extend end … |
| `S04_A017` | update sum … |
| `S04_A018` | count a match. |
| `S04_A019` | Now let us look at the time complexity. |
| `S04_A020` | For the first start, we may inspect `n` elements. |
| `S04_A021` | For the next start … `n minus one`. |
| `S04_A022` | Then `n minus two`. |
| `S04_A023` | And so on. |
| `S04_A024` | So the total work is: |
| `S04_A025` | `n + n minus one + n minus two ... + one`. |
| `S04_A026` | That is proportional to `n squared`. |
| `S04_A027` | So the time complexity is `O of n squared`. |
| `S04_A028` | For auxiliary space … |
| `S04_A029` | we only keep a few variables. |
| `S04_A030` | Start … |
| `S04_A031` | end … |
| `S04_A032` | running sum … |
| `S04_A033` | and answer. |
| `S04_A034` | So the auxiliary space is `O of one`. |
| `S04_A035` | Method One is correct. |
| `S04_A036` | But our problem is the repeated range-sum work. |
| `S04_A037` | Can we know the sum of a range … |
| `S04_A038` | without rebuilding that whole range again? |
| `S04_A039` | That question leads us to prefix sums. |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 001 — `S04_A001`

### ANCHOR / SPOKEN PHRASE
> First, create the answer and set it to zero.

### WHAT APPEARS NOW
Bring the production code surface to center and type only `answer = 0` character-by-character on this spoken idea.

### CENTER-STAGE HERO
Active code: `answer = 0`.

### CAUSE
Narration reaches: `First, create the answer and set it to zero.`

### EFFECT / MOTION
Answer counter becomes 0.

### WHAT MUST NOT APPEAR YET
Any future code line; complexity graph; prefix sums; Method2.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`answer = 0` typed; prior required lines may remain dim.

### KIT / EXISTING SYSTEM
Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.

### MOTION PURPOSE
Maintain exact Trace→Code identity.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
answer = 0
```

**CHARACTER-TYPING TRIGGER**  
First, create the answer and set it to zero.

**WHAT LINE MEANS**  
Initialize the counted result.

**SEMANTIC EFFECT VISUAL**  
Answer counter becomes 0.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
All later code lines and all future branches/return before narration.

**WHEN THIS LINE REDUCES / EXITS**  
Dim/reduce this line when the next dependent line becomes active; keep only if the next line needs its context.


---

## BEAT 002 — `S04_A002`

### ANCHOR / SPOKEN PHRASE
> Now choose every possible starting position.

### WHAT APPEARS NOW
Bring the production code surface to center and type only `for start in range(len(nums)):` character-by-character on this spoken idea.

### CENTER-STAGE HERO
Active code: `for start in range(len(nums)):`.

### CAUSE
Narration reaches: `Now choose every possible starting position.`

### EFFECT / MOTION
START pointer role is linked to the outer loop.

### WHAT MUST NOT APPEAR YET
Any future code line; complexity graph; prefix sums; Method2.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`for start in range(len(nums)):` typed; prior required lines may remain dim.

### KIT / EXISTING SYSTEM
Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.

### MOTION PURPOSE
Maintain exact Trace→Code identity.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
for start in range(len(nums)):
```

**CHARACTER-TYPING TRIGGER**  
Now choose every possible starting position.

**WHAT LINE MEANS**  
Enumerate every possible start.

**SEMANTIC EFFECT VISUAL**  
START pointer role is linked to the outer loop.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
All later code lines and all future branches/return before narration.

**WHEN THIS LINE REDUCES / EXITS**  
Dim/reduce this line when the next dependent line becomes active; keep only if the next line needs its context.


---

## BEAT 003 — `S04_A003`

### ANCHOR / SPOKEN PHRASE
> For each new start …

### WHAT APPEARS NOW
Keep the typed outer loop as context and focus its per-start body indentation only; no new line yet.

### CENTER-STAGE HERO
Outer-loop body context.

### CAUSE
Narration reaches: `For each new start …`

### EFFECT / MOTION
Attention moves inside the start loop.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Outer loop active.

### KIT / EXISTING SYSTEM
Production code component.

### MOTION PURPOSE
Respect spoken control-flow nesting without inventing code.


---

## BEAT 004 — `S04_A004`

### ANCHOR / SPOKEN PHRASE
> reset the running sum to zero.

### WHAT APPEARS NOW
Bring the production code surface to center and type only `running_sum = 0` character-by-character on this spoken idea.

### CENTER-STAGE HERO
Active code: `running_sum = 0`.

### CAUSE
Narration reaches: `reset the running sum to zero.`

### EFFECT / MOTION
Running-sum support resets to 0.

### WHAT MUST NOT APPEAR YET
Any future code line; complexity graph; prefix sums; Method2.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`running_sum = 0` typed; prior required lines may remain dim.

### KIT / EXISTING SYSTEM
Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.

### MOTION PURPOSE
Maintain exact Trace→Code identity.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
running_sum = 0
```

**CHARACTER-TYPING TRIGGER**  
reset the running sum to zero.

**WHAT LINE MEANS**  
Reset accumulator for each start.

**SEMANTIC EFFECT VISUAL**  
Running-sum support resets to 0.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
All later code lines and all future branches/return before narration.

**WHEN THIS LINE REDUCES / EXITS**  
Dim/reduce this line when the next dependent line becomes active; keep only if the next line needs its context.


---

## BEAT 005 — `S04_A005`

### ANCHOR / SPOKEN PHRASE
> Then let the ending position move from `start` to the end of the array.

### WHAT APPEARS NOW
Bring the production code surface to center and type only `for end in range(start, len(nums)):` character-by-character on this spoken idea.

### CENTER-STAGE HERO
Active code: `for end in range(start, len(nums)):`.

### CAUSE
Narration reaches: `Then let the ending position move from `start` to the end of the array.`

### EFFECT / MOTION
END pointer/range sweep is linked to the inner loop.

### WHAT MUST NOT APPEAR YET
Any future code line; complexity graph; prefix sums; Method2.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`for end in range(start, len(nums)):` typed; prior required lines may remain dim.

### KIT / EXISTING SYSTEM
Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.

### MOTION PURPOSE
Maintain exact Trace→Code identity.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
for end in range(start, len(nums)):
```

**CHARACTER-TYPING TRIGGER**  
Then let the ending position move from `start` to the end of the array.

**WHAT LINE MEANS**  
Extend the end boundary from start to array end.

**SEMANTIC EFFECT VISUAL**  
END pointer/range sweep is linked to the inner loop.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
All later code lines and all future branches/return before narration.

**WHEN THIS LINE REDUCES / EXITS**  
Dim/reduce this line when the next dependent line becomes active; keep only if the next line needs its context.


---

## BEAT 006 — `S04_A006`

### ANCHOR / SPOKEN PHRASE
> Add the current value to the running sum.

### WHAT APPEARS NOW
Bring the production code surface to center and type only `running_sum += nums[end]` character-by-character on this spoken idea.

### CENTER-STAGE HERO
Active code: `running_sum += nums[end]`.

### CAUSE
Narration reaches: `Add the current value to the running sum.`

### EFFECT / MOTION
One array value semantically contributes to the running sum; source value stays fixed.

### WHAT MUST NOT APPEAR YET
Any future code line; complexity graph; prefix sums; Method2.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`running_sum += nums[end]` typed; prior required lines may remain dim.

### KIT / EXISTING SYSTEM
Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.

### MOTION PURPOSE
Maintain exact Trace→Code identity.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
running_sum += nums[end]
```

**CHARACTER-TYPING TRIGGER**  
Add the current value to the running sum.

**WHAT LINE MEANS**  
Add the newly included value.

**SEMANTIC EFFECT VISUAL**  
One array value semantically contributes to the running sum; source value stays fixed.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
All later code lines and all future branches/return before narration.

**WHEN THIS LINE REDUCES / EXITS**  
Dim/reduce this line when the next dependent line becomes active; keep only if the next line needs its context.


---

## BEAT 007 — `S04_A007`

### ANCHOR / SPOKEN PHRASE
> If the running sum equals `k` …

### WHAT APPEARS NOW
Bring the production code surface to center and type only `if running_sum == k:` character-by-character on this spoken idea.

### CENTER-STAGE HERO
Active code: `if running_sum == k:`.

### CAUSE
Narration reaches: `If the running sum equals `k` …`

### EFFECT / MOTION
Equality test appears against k.

### WHAT MUST NOT APPEAR YET
Any future code line; complexity graph; prefix sums; Method2.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`if running_sum == k:` typed; prior required lines may remain dim.

### KIT / EXISTING SYSTEM
Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.

### MOTION PURPOSE
Maintain exact Trace→Code identity.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
if running_sum == k:
```

**CHARACTER-TYPING TRIGGER**  
If the running sum equals `k` …

**WHAT LINE MEANS**  
Test whether the active range sum hits the target.

**SEMANTIC EFFECT VISUAL**  
Equality test appears against k.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
All later code lines and all future branches/return before narration.

**WHEN THIS LINE REDUCES / EXITS**  
Dim/reduce this line when the next dependent line becomes active; keep only if the next line needs its context.


---

## BEAT 008 — `S04_A008`

### ANCHOR / SPOKEN PHRASE
> increase the answer by one.

### WHAT APPEARS NOW
Bring the production code surface to center and type only `answer += 1` character-by-character on this spoken idea.

### CENTER-STAGE HERO
Active code: `answer += 1`.

### CAUSE
Narration reaches: `increase the answer by one.`

### EFFECT / MOTION
Answer increases by one.

### WHAT MUST NOT APPEAR YET
Any future code line; complexity graph; prefix sums; Method2.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`answer += 1` typed; prior required lines may remain dim.

### KIT / EXISTING SYSTEM
Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.

### MOTION PURPOSE
Maintain exact Trace→Code identity.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
answer += 1
```

**CHARACTER-TYPING TRIGGER**  
increase the answer by one.

**WHAT LINE MEANS**  
Count exactly one matching range.

**SEMANTIC EFFECT VISUAL**  
Answer increases by one.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
All later code lines and all future branches/return before narration.

**WHEN THIS LINE REDUCES / EXITS**  
Dim/reduce this line when the next dependent line becomes active; keep only if the next line needs its context.


---

## BEAT 009 — `S04_A009`

### ANCHOR / SPOKEN PHRASE
> When this start is finished …

### WHAT APPEARS NOW
Use the already typed nested loops as a compact control-flow proof: current inner scan settles, then START advances. Do not type new code.

### CENTER-STAGE HERO
Nested-loop control flow.

### CAUSE
Narration reaches: `When this start is finished …`

### EFFECT / MOTION
Trace behavior is mapped back to the existing loops.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Exact Method1 code built so far.

### KIT / EXISTING SYSTEM
Production code + compact Array V2 support.

### MOTION PURPOSE
Explain loop behavior without adding lines.


---

## BEAT 010 — `S04_A010`

### ANCHOR / SPOKEN PHRASE
> the outer loop moves to the next start.

### WHAT APPEARS NOW
Use the already typed nested loops as a compact control-flow proof: current inner scan settles, then START advances. Do not type new code.

### CENTER-STAGE HERO
Nested-loop control flow.

### CAUSE
Narration reaches: `the outer loop moves to the next start.`

### EFFECT / MOTION
Trace behavior is mapped back to the existing loops.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Exact Method1 code built so far.

### KIT / EXISTING SYSTEM
Production code + compact Array V2 support.

### MOTION PURPOSE
Explain loop behavior without adding lines.


---

## BEAT 011 — `S04_A011`

### ANCHOR / SPOKEN PHRASE
> And after all starting positions are processed …

### WHAT APPEARS NOW
Focus the end-of-computation state; keep `return answer` hidden until the next phrase.

### CENTER-STAGE HERO
All starts processed.

### CAUSE
Narration reaches: `And after all starting positions are processed …`

### EFFECT / MOTION
Control exits both loops.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Loops complete; answer ready.

### KIT / EXISTING SYSTEM
Production code.

### MOTION PURPOSE
Set up the return statement in exact order.


---

## BEAT 012 — `S04_A012`

### ANCHOR / SPOKEN PHRASE
> return the answer.

### WHAT APPEARS NOW
Bring the production code surface to center and type only `return answer` character-by-character on this spoken idea.

### CENTER-STAGE HERO
Active code: `return answer`.

### CAUSE
Narration reaches: `return the answer.`

### EFFECT / MOTION
Answer becomes the code output.

### WHAT MUST NOT APPEAR YET
Any future code line; complexity graph; prefix sums; Method2.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
`return answer` typed; prior required lines may remain dim.

### KIT / EXISTING SYSTEM
Existing production code component — API unresolved; semantic support uses Array V2 / ChalkText / CountUp.

### MOTION PURPOSE
Maintain exact Trace→Code identity.


### CODE-SPECIFIC CONTRACT
**ACTIVE CODE TEXT TO TYPE**
```python
return answer
```

**CHARACTER-TYPING TRIGGER**  
return the answer.

**WHAT LINE MEANS**  
Return the final count after all starts are processed.

**SEMANTIC EFFECT VISUAL**  
Answer becomes the code output.

**WHAT FUTURE CODE MUST STAY HIDDEN**  
All later code lines and all future branches/return before narration.

**WHEN THIS LINE REDUCES / EXITS**  
Dim/reduce this line when the next dependent line becomes active; keep only if the next line needs its context.


---

## BEAT 013 — `S04_A013`

### ANCHOR / SPOKEN PHRASE
> This code follows the same order as our trace.

### WHAT APPEARS NOW
Reduce code into a compact trace-to-code identity and emphasize `Trace→Code identity` only.

### CENTER-STAGE HERO
Trace→Code identity

### CAUSE
Narration reaches: `This code follows the same order as our trace.`

### EFFECT / MOTION
One previously executed trace action maps to the corresponding code structure.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 code understood.

### KIT / EXISTING SYSTEM
ChalkText + existing code surface reduced.

### MOTION PURPOSE
Prove the code is the same algorithm as Scene03.


---

## BEAT 014 — `S04_A014`

### ANCHOR / SPOKEN PHRASE
> Choose start …

### WHAT APPEARS NOW
Reduce code into a compact trace-to-code identity and emphasize `CHOOSE START` only.

### CENTER-STAGE HERO
CHOOSE START

### CAUSE
Narration reaches: `Choose start …`

### EFFECT / MOTION
One previously executed trace action maps to the corresponding code structure.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 code understood.

### KIT / EXISTING SYSTEM
ChalkText + existing code surface reduced.

### MOTION PURPOSE
Prove the code is the same algorithm as Scene03.


---

## BEAT 015 — `S04_A015`

### ANCHOR / SPOKEN PHRASE
> reset sum …

### WHAT APPEARS NOW
Reduce code into a compact trace-to-code identity and emphasize `RESET SUM` only.

### CENTER-STAGE HERO
RESET SUM

### CAUSE
Narration reaches: `reset sum …`

### EFFECT / MOTION
One previously executed trace action maps to the corresponding code structure.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 code understood.

### KIT / EXISTING SYSTEM
ChalkText + existing code surface reduced.

### MOTION PURPOSE
Prove the code is the same algorithm as Scene03.


---

## BEAT 016 — `S04_A016`

### ANCHOR / SPOKEN PHRASE
> extend end …

### WHAT APPEARS NOW
Reduce code into a compact trace-to-code identity and emphasize `EXTEND END` only.

### CENTER-STAGE HERO
EXTEND END

### CAUSE
Narration reaches: `extend end …`

### EFFECT / MOTION
One previously executed trace action maps to the corresponding code structure.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 code understood.

### KIT / EXISTING SYSTEM
ChalkText + existing code surface reduced.

### MOTION PURPOSE
Prove the code is the same algorithm as Scene03.


---

## BEAT 017 — `S04_A017`

### ANCHOR / SPOKEN PHRASE
> update sum …

### WHAT APPEARS NOW
Reduce code into a compact trace-to-code identity and emphasize `UPDATE SUM` only.

### CENTER-STAGE HERO
UPDATE SUM

### CAUSE
Narration reaches: `update sum …`

### EFFECT / MOTION
One previously executed trace action maps to the corresponding code structure.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 code understood.

### KIT / EXISTING SYSTEM
ChalkText + existing code surface reduced.

### MOTION PURPOSE
Prove the code is the same algorithm as Scene03.


---

## BEAT 018 — `S04_A018`

### ANCHOR / SPOKEN PHRASE
> count a match.

### WHAT APPEARS NOW
Reduce code into a compact trace-to-code identity and emphasize `COUNT MATCH` only.

### CENTER-STAGE HERO
COUNT MATCH

### CAUSE
Narration reaches: `count a match.`

### EFFECT / MOTION
One previously executed trace action maps to the corresponding code structure.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 code understood.

### KIT / EXISTING SYSTEM
ChalkText + existing code surface reduced.

### MOTION PURPOSE
Prove the code is the same algorithm as Scene03.


---

## BEAT 019 — `S04_A019`

### ANCHOR / SPOKEN PHRASE
> Now let us look at the time complexity.

### WHAT APPEARS NOW
Clear code to the side/reduced state and bring an empty complexity-growth stage to center; no Big-O curve yet.

### CENTER-STAGE HERO
Complexity stage.

### CAUSE
Narration reaches: `Now let us look at the time complexity.`

### EFFECT / MOTION
Semantic handoff code → complexity.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 code complete.

### KIT / EXISTING SYSTEM
Generic complexity graph required; MiniGraph forbidden.

### MOTION PURPOSE
Prepare complexity reasoning.


---

## BEAT 020 — `S04_A020`

### ANCHOR / SPOKEN PHRASE
> For the first start, we may inspect `n` elements.

### WHAT APPEARS NOW
Show one row of work labeled `n` for the first start; no curve yet.

### CENTER-STAGE HERO
First start does n work.

### CAUSE
Narration reaches: `For the first start, we may inspect `n` elements.`

### EFFECT / MOTION
Show one row of work labeled `n` for the first start; no curve yet.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 time complexity reasoning.

### KIT / EXISTING SYSTEM
Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.

### MOTION PURPOSE
Teach why Method1 is quadratic.


---

## BEAT 021 — `S04_A021`

### ANCHOR / SPOKEN PHRASE
> For the next start … `n minus one`.

### WHAT APPEARS NOW
Add a second shorter row labeled `n-1`.

### CENTER-STAGE HERO
Second start does n-1 work.

### CAUSE
Narration reaches: `For the next start … `n minus one`.`

### EFFECT / MOTION
Add a second shorter row labeled `n-1`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 time complexity reasoning.

### KIT / EXISTING SYSTEM
Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.

### MOTION PURPOSE
Teach why Method1 is quadratic.


---

## BEAT 022 — `S04_A022`

### ANCHOR / SPOKEN PHRASE
> Then `n minus two`.

### WHAT APPEARS NOW
Add the next shorter row `n-2`.

### CENTER-STAGE HERO
Shrinking nested work.

### CAUSE
Narration reaches: `Then `n minus two`.`

### EFFECT / MOTION
Add the next shorter row `n-2`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 time complexity reasoning.

### KIT / EXISTING SYSTEM
Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.

### MOTION PURPOSE
Teach why Method1 is quadratic.


---

## BEAT 023 — `S04_A023`

### ANCHOR / SPOKEN PHRASE
> And so on.

### WHAT APPEARS NOW
Continue the staircase conceptually without filling every row.

### CENTER-STAGE HERO
Nested work staircase.

### CAUSE
Narration reaches: `And so on.`

### EFFECT / MOTION
Continue the staircase conceptually without filling every row.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 time complexity reasoning.

### KIT / EXISTING SYSTEM
Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.

### MOTION PURPOSE
Teach why Method1 is quadratic.


---

## BEAT 024 — `S04_A024`

### ANCHOR / SPOKEN PHRASE
> So the total work is:

### WHAT APPEARS NOW
Collapse the staircase into a summation scaffold.

### CENTER-STAGE HERO
Total work.

### CAUSE
Narration reaches: `So the total work is:`

### EFFECT / MOTION
Collapse the staircase into a summation scaffold.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 time complexity reasoning.

### KIT / EXISTING SYSTEM
Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.

### MOTION PURPOSE
Teach why Method1 is quadratic.


---

## BEAT 025 — `S04_A025`

### ANCHOR / SPOKEN PHRASE
> `n + n minus one + n minus two ... + one`.

### WHAT APPEARS NOW
Write `n + (n-1) + (n-2) + ... + 1`.

### CENTER-STAGE HERO
Triangular work sum.

### CAUSE
Narration reaches: ``n + n minus one + n minus two ... + one`.`

### EFFECT / MOTION
Write `n + (n-1) + (n-2) + ... + 1`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 time complexity reasoning.

### KIT / EXISTING SYSTEM
Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.

### MOTION PURPOSE
Teach why Method1 is quadratic.


---

## BEAT 026 — `S04_A026`

### ANCHOR / SPOKEN PHRASE
> That is proportional to `n squared`.

### WHAT APPEARS NOW
Transform the work sum into a quadratic-growth cue `∝ n²`; still do not show the final Big-O label before the next phrase.

### CENTER-STAGE HERO
Quadratic growth.

### CAUSE
Narration reaches: `That is proportional to `n squared`.`

### EFFECT / MOTION
Transform the work sum into a quadratic-growth cue `∝ n²`; still do not show the final Big-O label before the next phrase.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 time complexity reasoning.

### KIT / EXISTING SYSTEM
Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.

### MOTION PURPOSE
Teach why Method1 is quadratic.


---

## BEAT 027 — `S04_A027`

### ANCHOR / SPOKEN PHRASE
> So the time complexity is `O of n squared`.

### WHAT APPEARS NOW
Reveal `O(n²)` and draw a generic quadratic curve left-to-right; no benchmark numbers.

### CENTER-STAGE HERO
O(n²) curve.

### CAUSE
Narration reaches: `So the time complexity is `O of n squared`.`

### EFFECT / MOTION
Reveal `O(n²)` and draw a generic quadratic curve left-to-right; no benchmark numbers.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 time complexity reasoning.

### KIT / EXISTING SYSTEM
Reusable generic complexity graph required; use RoughLine/RoughCurve if repo has no wrapper. Do not use MiniGraph.

### MOTION PURPOSE
Teach why Method1 is quadratic.


### COMPLEXITY-SPECIFIC CONTRACT
**BIG-O PHRASE**  
O(n²)

**WHY THIS BIG-O IS TRUE**  
The inner range lengths sum to n+(n-1)+...+1, which grows quadratically.

**CURVE TYPE**  
quadratic

**WHAT CAUSES THE CURVE**  
Nested start/end enumeration.

**WHAT MUST NOT APPEAR YET**  
Method2 O(n), any comparison curve, benchmark numbers.

**WHEN GRAPH EXITS / REDUCES**  
Reduce/exit the graph when narration moves to auxiliary space.


---

## BEAT 028 — `S04_A028`

### ANCHOR / SPOKEN PHRASE
> For auxiliary space …

### WHAT APPEARS NOW
Remove the time graph and open a tiny scalar-state memory stage.

### CENTER-STAGE HERO
Auxiliary-space state.

### CAUSE
Narration reaches: `For auxiliary space …`

### EFFECT / MOTION
Semantic handoff time → space.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 time O(n²) already learned.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Avoid packing time and space graphics together.


---

## BEAT 029 — `S04_A029`

### ANCHOR / SPOKEN PHRASE
> we only keep a few variables.

### WHAT APPEARS NOW
Show four empty scalar slots only.

### CENTER-STAGE HERO
Scalar-state memory.

### CAUSE
Narration reaches: `we only keep a few variables.`

### EFFECT / MOTION
Show four empty scalar slots only.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Constant number of scalars.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Teach constant auxiliary memory.


---

## BEAT 030 — `S04_A030`

### ANCHOR / SPOKEN PHRASE
> Start …

### WHAT APPEARS NOW
Label first scalar `start`.

### CENTER-STAGE HERO
Scalar-state memory.

### CAUSE
Narration reaches: `Start …`

### EFFECT / MOTION
Label first scalar `start`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Constant number of scalars.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Teach constant auxiliary memory.


---

## BEAT 031 — `S04_A031`

### ANCHOR / SPOKEN PHRASE
> end …

### WHAT APPEARS NOW
Add `end`.

### CENTER-STAGE HERO
Scalar-state memory.

### CAUSE
Narration reaches: `end …`

### EFFECT / MOTION
Add `end`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Constant number of scalars.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Teach constant auxiliary memory.


---

## BEAT 032 — `S04_A032`

### ANCHOR / SPOKEN PHRASE
> running sum …

### WHAT APPEARS NOW
Add `running sum`.

### CENTER-STAGE HERO
Scalar-state memory.

### CAUSE
Narration reaches: `running sum …`

### EFFECT / MOTION
Add `running sum`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Constant number of scalars.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Teach constant auxiliary memory.


---

## BEAT 033 — `S04_A033`

### ANCHOR / SPOKEN PHRASE
> and answer.

### WHAT APPEARS NOW
Add `answer`.

### CENTER-STAGE HERO
Scalar-state memory.

### CAUSE
Narration reaches: `and answer.`

### EFFECT / MOTION
Add `answer`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Constant number of scalars.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Teach constant auxiliary memory.


---

## BEAT 034 — `S04_A034`

### ANCHOR / SPOKEN PHRASE
> So the auxiliary space is `O of one`.

### WHAT APPEARS NOW
Collapse the fixed four-scalar set into `O(1)` auxiliary space.

### CENTER-STAGE HERO
O(1) auxiliary-space proof.

### CAUSE
Narration reaches: `So the auxiliary space is `O of one`.`

### EFFECT / MOTION
Collapse the fixed four-scalar set into `O(1)` auxiliary space.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 space O(1).

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Teach constant auxiliary memory.


### COMPLEXITY-SPECIFIC CONTRACT
**BIG-O PHRASE**  
O(1) auxiliary space

**WHY THIS BIG-O IS TRUE**  
Only a fixed number of scalar variables are kept regardless of n.

**CURVE TYPE**  
flat / constant

**WHAT CAUSES THE CURVE**  
State count does not grow with input length.

**WHAT MUST NOT APPEAR YET**  
Method2 space O(n).

**WHEN GRAPH EXITS / REDUCES**  
Exit the space proof before the optimization question.


---

## BEAT 035 — `S04_A035`

### ANCHOR / SPOKEN PHRASE
> Method One is correct.

### WHAT APPEARS NOW
Clear complexity objects; show compact `METHOD 1 ✓ CORRECT` only.

### CENTER-STAGE HERO
Method1 correctness.

### CAUSE
Narration reaches: `Method One is correct.`

### EFFECT / MOTION
Complexity discussion settles.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Method1 correct, O(n²)/O(1).

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Separate correctness from optimization.


---

## BEAT 036 — `S04_A036`

### ANCHOR / SPOKEN PHRASE
> But our problem is the repeated range-sum work.

### WHAT APPEARS NOW
Replace the correctness stamp with the overlap/rebuild cue from Scene03.

### CENTER-STAGE HERO
Repeated range-sum work.

### CAUSE
Narration reaches: `But our problem is the repeated range-sum work.`

### EFFECT / MOTION
The optimization problem returns.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Repeated-work problem.

### KIT / EXISTING SYSTEM
ChalkText + quiet array trail if needed.

### MOTION PURPOSE
Bridge code analysis into derivation.


---

## BEAT 037 — `S04_A037`

### ANCHOR / SPOKEN PHRASE
> Can we know the sum of a range …

### WHAT APPEARS NOW
Write the question scaffold `Can we know a range sum ...` with a blank result area.

### CENTER-STAGE HERO
Range-sum question.

### CAUSE
Narration reaches: `Can we know the sum of a range …`

### EFFECT / MOTION
Learner is asked for a reusable representation.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Open question.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Create the derivation need.


---

## BEAT 038 — `S04_A038`

### ANCHOR / SPOKEN PHRASE
> without rebuilding that whole range again?

### WHAT APPEARS NOW
Complete the question with `without rebuilding the range?` and erase/reduce the old overlap trails.

### CENTER-STAGE HERO
`without rebuilding?`.

### CAUSE
Narration reaches: `without rebuilding that whole range again?`

### EFFECT / MOTION
Old Method1 detail clears.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Open range-sum question.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
Make the conceptual gap explicit.


---

## BEAT 039 — `S04_A039`

### ANCHOR / SPOKEN PHRASE
> That question leads us to prefix sums.

### WHAT APPEARS NOW
Reveal only the label `PREFIX SUMS` as the next idea; no prefix values/equation yet.

### CENTER-STAGE HERO
`PREFIX SUMS`.

### CAUSE
Narration reaches: `That question leads us to prefix sums.`

### EFFECT / MOTION
Scene hands off to Scene05.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
Prefix-sum concept named, not explained.

### KIT / EXISTING SYSTEM
ChalkText.

### MOTION PURPOSE
No-spoiler transition into the next derivation.


---

# CONTINUITY OUT

Method1 code + O(n²)/O(1) complete; prefix-sum question is center stage.

---

# SCENE 04 PHASE-9 LOCK

```text
NO GUESSED SECONDS
NO GUESSED FRAMES
NO FUTURE-STATE SPOILERS
NO GENERIC PACKED DASHBOARD
NO UNSOURCED COMPONENT API
```
