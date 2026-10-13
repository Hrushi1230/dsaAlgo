> **V3 renumber lock:** This is the previously independently re-audited Method2 full trace. Narration is unchanged; only scene numbering/continuity is updated for the merged optimal-idea scene. No timing is added.

# Q16 — Subarray Sum Equals K (LeetCode 560)
# Phase 9 · Scene 05 — Method2 Full Trace — Prefix Frequency
## WORD-BASED VISUAL PLAN — NO GUESSED TIME · NO GUESSED FRAMES · PROJECT-SOURCE GROUNDED

---

**Scene purpose:** Method2 Full Trace — Prefix Frequency.

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

Method2 invariant is understood; initial state is `prefix=0`, `answer=0`, frequency `{0:1}`.

---

# QUESTION-SPECIFIC VISUAL IDENTITY

```text
CURRENT PREFIX → NEEDED → FREQUENCY LOOKUP → ANSWER → STORE CURRENT
```

---

# HARD NO-SPOILER LAW

Future method state, code, result, complexity, map frequency, prefix value, pointer position, or roadmap progress does not exist visually before its narration anchor.

---

# SEMANTIC ANCHOR MANIFEST

| Anchor ID | Exact spoken phrase |
|---|---|
| `S06_A001` | We start with: |
| `S06_A002` | prefix equals zero. |
| `S06_A003` | answer equals zero. |
| `S06_A004` | And the map contains: |
| `S06_A005` | zero to one. |
| `S06_A006` | Our first value is one. |
| `S06_A007` | Update the prefix. |
| `S06_A008` | Zero plus one becomes one. |
| `S06_A009` | Now needed is: |
| `S06_A010` | one minus three … |
| `S06_A011` | minus two. |
| `S06_A012` | Do we have prefix minus two? |
| `S06_A013` | No. |
| `S06_A014` | So answer stays zero. |
| `S06_A015` | Now store current prefix one. |
| `S06_A016` | The map now contains zero once … and one once. |
| `S06_A017` | Next value is minus one. |
| `S06_A018` | Current prefix is one. |
| `S06_A019` | Add minus one … |
| `S06_A020` | prefix becomes zero. |
| `S06_A021` | Needed is: |
| `S06_A022` | zero minus three … |
| `S06_A023` | minus three. |
| `S06_A024` | We have no minus three. |
| `S06_A025` | So answer stays zero. |
| `S06_A026` | Now store the current prefix zero. |
| `S06_A027` | Zero already had frequency one. |
| `S06_A028` | Now it becomes two. |
| `S06_A029` | That is important. |
| `S06_A030` | We now have two different earlier prefix positions with prefix sum zero. |
| `S06_A031` | Next value is two. |
| `S06_A032` | Prefix becomes two. |
| `S06_A033` | Needed is: |
| `S06_A034` | two minus three … |
| `S06_A035` | minus one. |
| `S06_A036` | No match. |
| `S06_A037` | Answer stays zero. |
| `S06_A038` | Store prefix two with frequency one. |
| `S06_A039` | Now we reach index three … value one. |
| `S06_A040` | Current prefix is two. |
| `S06_A041` | Add one … |
| `S06_A042` | prefix becomes three. |
| `S06_A043` | Needed is: |
| `S06_A044` | three minus three … |
| `S06_A045` | zero. |
| `S06_A046` | Now look at the map. |
| `S06_A047` | Frequency of zero is two. |
| `S06_A048` | So there are two valid starting boundaries. |
| `S06_A049` | That means two valid subarrays end here. |
| `S06_A050` | One starts from index zero. |
| `S06_A051` | The other starts from index two. |
| `S06_A052` | So answer jumps from zero to two. |
| `S06_A053` | Only after counting those matches … |
| `S06_A054` | store current prefix three. |
| `S06_A055` | Three now has frequency one. |
| `S06_A056` | Next value is zero. |
| `S06_A057` | Add zero … |
| `S06_A058` | the prefix stays three. |
| `S06_A059` | But this is a new prefix position. |
| `S06_A060` | Needed is still: |
| `S06_A061` | three minus three … |
| `S06_A062` | zero. |
| `S06_A063` | Frequency of zero is still two. |
| `S06_A064` | So again … |
| `S06_A065` | two valid subarrays end here. |
| `S06_A066` | Answer goes from two to four. |
| `S06_A067` | Now store the current prefix three. |
| `S06_A068` | Three already occurred once. |
| `S06_A069` | Now its frequency becomes two. |
| `S06_A070` | Next value is minus two. |
| `S06_A071` | Prefix changes from three to one. |
| `S06_A072` | Needed is: |
| `S06_A073` | one minus three … |
| `S06_A074` | minus two. |
| `S06_A075` | No previous prefix minus two. |
| `S06_A076` | So answer stays four. |
| `S06_A077` | Now store prefix one. |
| `S06_A078` | One already occurred once. |
| `S06_A079` | So frequency one becomes two. |
| `S06_A080` | Now the final value is three. |
| `S06_A081` | Current prefix is one. |
| `S06_A082` | Add three … |
| `S06_A083` | prefix becomes four. |
| `S06_A084` | Needed is: |
| `S06_A085` | four minus three … |
| `S06_A086` | one. |
| `S06_A087` | Look at the map. |
| `S06_A088` | Frequency of one is two. |
| `S06_A089` | So again … |
| `S06_A090` | two valid starting boundaries. |
| `S06_A091` | They give two valid subarrays ending at the final index. |
| `S06_A092` | One is the range from index one to six. |
| `S06_A093` | And the other is just index six … |
| `S06_A094` | the single value three. |
| `S06_A095` | So answer goes from four to six. |
| `S06_A096` | Then store current prefix four. |
| `S06_A097` | Final answer is six. |
| `S06_A098` | Notice the pattern. |
| `S06_A099` | At index three … |
| `S06_A100` | one lookup added two. |
| `S06_A101` | At index four … |
| `S06_A102` | one lookup added two again. |
| `S06_A103` | At index six … |
| `S06_A104` | one lookup added two again. |
| `S06_A105` | The map does not simply tell us whether a prefix exists. |
| `S06_A106` | It tells us how many valid starting boundaries exist. |
| `S06_A107` | Now let us translate this exact logic into code. |

---

# WORD-BASED CHOREOGRAPHY

## BEAT 001 — `S06_A001`

### ANCHOR / SPOKEN PHRASE
> We start with:

### WHAT APPEARS NOW
Reveal the untouched master array and empty current-index focus.

### CENTER-STAGE HERO
Method2 initial state.

### CAUSE
Narration reaches: `We start with:`

### EFFECT / MOTION
Reveal the untouched master array and empty current-index focus.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
prefix0, answer0, freq{0:1}.

### KIT / EXISTING SYSTEM
Array V2 + genericized frequency map + CountUp/ChalkText.

### MOTION PURPOSE
Start the exact optimal trace.


---

## BEAT 002 — `S06_A002`

### ANCHOR / SPOKEN PHRASE
> prefix equals zero.

### WHAT APPEARS NOW
Show `prefix = 0`.

### CENTER-STAGE HERO
Method2 initial state.

### CAUSE
Narration reaches: `prefix equals zero.`

### EFFECT / MOTION
Show `prefix = 0`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
prefix0, answer0, freq{0:1}.

### KIT / EXISTING SYSTEM
Array V2 + genericized frequency map + CountUp/ChalkText.

### MOTION PURPOSE
Start the exact optimal trace.


---

## BEAT 003 — `S06_A003`

### ANCHOR / SPOKEN PHRASE
> answer equals zero.

### WHAT APPEARS NOW
Show `answer = 0`.

### CENTER-STAGE HERO
Method2 initial state.

### CAUSE
Narration reaches: `answer equals zero.`

### EFFECT / MOTION
Show `answer = 0`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
prefix0, answer0, freq{0:1}.

### KIT / EXISTING SYSTEM
Array V2 + genericized frequency map + CountUp/ChalkText.

### MOTION PURPOSE
Start the exact optimal trace.


---

## BEAT 004 — `S06_A004`

### ANCHOR / SPOKEN PHRASE
> And the map contains:

### WHAT APPEARS NOW
Bring in the frequency map shell.

### CENTER-STAGE HERO
Method2 initial state.

### CAUSE
Narration reaches: `And the map contains:`

### EFFECT / MOTION
Bring in the frequency map shell.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
prefix0, answer0, freq{0:1}.

### KIT / EXISTING SYSTEM
Array V2 + genericized frequency map + CountUp/ChalkText.

### MOTION PURPOSE
Start the exact optimal trace.


---

## BEAT 005 — `S06_A005`

### ANCHOR / SPOKEN PHRASE
> zero to one.

### WHAT APPEARS NOW
Show only row `0 → 1`.

### CENTER-STAGE HERO
Method2 initial state.

### CAUSE
Narration reaches: `zero to one.`

### EFFECT / MOTION
Show only row `0 → 1`.

### WHAT MUST NOT APPEAR YET
Any future algorithm state, code line, result, complexity, or roadmap change not yet spoken.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Do not add clutter; preserve only state needed for the next phrase.

### PERSISTENT STATE
prefix0, answer0, freq{0:1}.

### KIT / EXISTING SYSTEM
Array V2 + genericized frequency map + CountUp/ChalkText.

### MOTION PURPOSE
Start the exact optimal trace.


---

## BEAT 006 — `S06_A006`

### ANCHOR / SPOKEN PHRASE
> Our first value is one.

### WHAT APPEARS NOW
Move current index to 0 and focus value 1; no prefix update yet.

### CENTER-STAGE HERO
index0 value1

### CAUSE
Narration reaches: `Our first value is one.`

### EFFECT / MOTION
Move current index to 0 and focus value 1; no prefix update yet.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p0,a0,f{0:1}

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 007 — `S06_A007`

### ANCHOR / SPOKEN PHRASE
> Update the prefix.

### WHAT APPEARS NOW
Open the prefix-update expression.

### CENTER-STAGE HERO
prefix update

### CAUSE
Narration reaches: `Update the prefix.`

### EFFECT / MOTION
Open the prefix-update expression.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p0 before update

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 008 — `S06_A008`

### ANCHOR / SPOKEN PHRASE
> Zero plus one becomes one.

### WHAT APPEARS NOW
Update prefix 0→1.

### CENTER-STAGE HERO
prefix=1

### CAUSE
Narration reaches: `Zero plus one becomes one.`

### EFFECT / MOTION
Update prefix 0→1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1,a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 009 — `S06_A009`

### ANCHOR / SPOKEN PHRASE
> Now needed is:

### WHAT APPEARS NOW
Open `needed = ?`.

### CENTER-STAGE HERO
needed calculation

### CAUSE
Narration reaches: `Now needed is:`

### EFFECT / MOTION
Open `needed = ?`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 010 — `S06_A010`

### ANCHOR / SPOKEN PHRASE
> one minus three …

### WHAT APPEARS NOW
Write `1 - 3`.

### CENTER-STAGE HERO
1-3

### CAUSE
Narration reaches: `one minus three …`

### EFFECT / MOTION
Write `1 - 3`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 011 — `S06_A011`

### ANCHOR / SPOKEN PHRASE
> minus two.

### WHAT APPEARS NOW
Resolve needed to -2.

### CENTER-STAGE HERO
needed=-2

### CAUSE
Narration reaches: `minus two.`

### EFFECT / MOTION
Resolve needed to -2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1,need-2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 012 — `S06_A012`

### ANCHOR / SPOKEN PHRASE
> Do we have prefix minus two?

### WHAT APPEARS NOW
Query map key -2 only.

### CENTER-STAGE HERO
query -2

### CAUSE
Narration reaches: `Do we have prefix minus two?`

### EFFECT / MOTION
Query map key -2 only.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
lookup pending

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 013 — `S06_A013`

### ANCHOR / SPOKEN PHRASE
> No.

### WHAT APPEARS NOW
Show not found / frequency0; do not change answer.

### CENTER-STAGE HERO
freq[-2]=0

### CAUSE
Narration reaches: `No.`

### EFFECT / MOTION
Show not found / frequency0; do not change answer.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 014 — `S06_A014`

### ANCHOR / SPOKEN PHRASE
> So answer stays zero.

### WHAT APPEARS NOW
Hold answer at 0.

### CENTER-STAGE HERO
answer0

### CAUSE
Narration reaches: `So answer stays zero.`

### EFFECT / MOTION
Hold answer at 0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 015 — `S06_A015`

### ANCHOR / SPOKEN PHRASE
> Now store current prefix one.

### WHAT APPEARS NOW
Now store current prefix 1.

### CENTER-STAGE HERO
store1

### CAUSE
Narration reaches: `Now store current prefix one.`

### EFFECT / MOTION
Now store current prefix 1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
insert pending

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 016 — `S06_A016`

### ANCHOR / SPOKEN PHRASE
> The map now contains zero once … and one once.

### WHAT APPEARS NOW
Add row `1→1`; map now has 0→1 and 1→1.

### CENTER-STAGE HERO
map after i0

### CAUSE
Narration reaches: `The map now contains zero once … and one once.`

### EFFECT / MOTION
Add row `1→1`; map now has 0→1 and 1→1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1,a0,f{0:1,1:1}

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 017 — `S06_A017`

### ANCHOR / SPOKEN PHRASE
> Next value is minus one.

### WHAT APPEARS NOW
Move current index to1, value -1.

### CENTER-STAGE HERO
index1 value-1

### CAUSE
Narration reaches: `Next value is minus one.`

### EFFECT / MOTION
Move current index to1, value -1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1,a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 018 — `S06_A018`

### ANCHOR / SPOKEN PHRASE
> Current prefix is one.

### WHAT APPEARS NOW
Focus current prefix1 before update.

### CENTER-STAGE HERO
prefix1

### CAUSE
Narration reaches: `Current prefix is one.`

### EFFECT / MOTION
Focus current prefix1 before update.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 019 — `S06_A019`

### ANCHOR / SPOKEN PHRASE
> Add minus one …

### WHAT APPEARS NOW
Add -1 to prefix; result hidden until next phrase.

### CENTER-STAGE HERO
prefix arithmetic

### CAUSE
Narration reaches: `Add minus one …`

### EFFECT / MOTION
Add -1 to prefix; result hidden until next phrase.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
pending

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 020 — `S06_A020`

### ANCHOR / SPOKEN PHRASE
> prefix becomes zero.

### WHAT APPEARS NOW
Update prefix 1→0.

### CENTER-STAGE HERO
prefix0

### CAUSE
Narration reaches: `prefix becomes zero.`

### EFFECT / MOTION
Update prefix 1→0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p0,a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 021 — `S06_A021`

### ANCHOR / SPOKEN PHRASE
> Needed is:

### WHAT APPEARS NOW
Open needed calculation.

### CENTER-STAGE HERO
needed calc

### CAUSE
Narration reaches: `Needed is:`

### EFFECT / MOTION
Open needed calculation.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 022 — `S06_A022`

### ANCHOR / SPOKEN PHRASE
> zero minus three …

### WHAT APPEARS NOW
Write `0 - 3`.

### CENTER-STAGE HERO
0-3

### CAUSE
Narration reaches: `zero minus three …`

### EFFECT / MOTION
Write `0 - 3`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 023 — `S06_A023`

### ANCHOR / SPOKEN PHRASE
> minus three.

### WHAT APPEARS NOW
Resolve -3.

### CENTER-STAGE HERO
needed-3

### CAUSE
Narration reaches: `minus three.`

### EFFECT / MOTION
Resolve -3.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p0,need-3

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 024 — `S06_A024`

### ANCHOR / SPOKEN PHRASE
> We have no minus three.

### WHAT APPEARS NOW
Query -3 and show no row/frequency0.

### CENTER-STAGE HERO
no -3

### CAUSE
Narration reaches: `We have no minus three.`

### EFFECT / MOTION
Query -3 and show no row/frequency0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 025 — `S06_A025`

### ANCHOR / SPOKEN PHRASE
> So answer stays zero.

### WHAT APPEARS NOW
Answer remains0.

### CENTER-STAGE HERO
answer0

### CAUSE
Narration reaches: `So answer stays zero.`

### EFFECT / MOTION
Answer remains0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 026 — `S06_A026`

### ANCHOR / SPOKEN PHRASE
> Now store the current prefix zero.

### WHAT APPEARS NOW
Begin storing current prefix0; focus existing row0→1.

### CENTER-STAGE HERO
store0

### CAUSE
Narration reaches: `Now store the current prefix zero.`

### EFFECT / MOTION
Begin storing current prefix0; focus existing row0→1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
before increment

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 027 — `S06_A027`

### ANCHOR / SPOKEN PHRASE
> Zero already had frequency one.

### WHAT APPEARS NOW
Emphasize existing frequency1.

### CENTER-STAGE HERO
0 had1

### CAUSE
Narration reaches: `Zero already had frequency one.`

### EFFECT / MOTION
Emphasize existing frequency1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
before increment

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 028 — `S06_A028`

### ANCHOR / SPOKEN PHRASE
> Now it becomes two.

### WHAT APPEARS NOW
Increment row0 value 1→2.

### CENTER-STAGE HERO
freq0=2

### CAUSE
Narration reaches: `Now it becomes two.`

### EFFECT / MOTION
Increment row0 value 1→2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p0,a0,f0=2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 029 — `S06_A029`

### ANCHOR / SPOKEN PHRASE
> That is important.

### WHAT APPEARS NOW
Emphasize this map change as important; no new algorithm state.

### CENTER-STAGE HERO
freq0=2 important

### CAUSE
Narration reaches: `That is important.`

### EFFECT / MOTION
Emphasize this map change as important; no new algorithm state.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
f0=2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 030 — `S06_A030`

### ANCHOR / SPOKEN PHRASE
> We now have two different earlier prefix positions with prefix sum zero.

### WHAT APPEARS NOW
Connect frequency2 to two distinct earlier prefix positions P0/P2.

### CENTER-STAGE HERO
two zero prefixes

### CAUSE
Narration reaches: `We now have two different earlier prefix positions with prefix sum zero.`

### EFFECT / MOTION
Connect frequency2 to two distinct earlier prefix positions P0/P2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
f0=2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 031 — `S06_A031`

### ANCHOR / SPOKEN PHRASE
> Next value is two.

### WHAT APPEARS NOW
Move current index to2, value2.

### CENTER-STAGE HERO
index2

### CAUSE
Narration reaches: `Next value is two.`

### EFFECT / MOTION
Move current index to2, value2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p0,a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 032 — `S06_A032`

### ANCHOR / SPOKEN PHRASE
> Prefix becomes two.

### WHAT APPEARS NOW
Update prefix 0→2.

### CENTER-STAGE HERO
prefix2

### CAUSE
Narration reaches: `Prefix becomes two.`

### EFFECT / MOTION
Update prefix 0→2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p2,a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 033 — `S06_A033`

### ANCHOR / SPOKEN PHRASE
> Needed is:

### WHAT APPEARS NOW
Open needed calculation.

### CENTER-STAGE HERO
needed calc

### CAUSE
Narration reaches: `Needed is:`

### EFFECT / MOTION
Open needed calculation.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 034 — `S06_A034`

### ANCHOR / SPOKEN PHRASE
> two minus three …

### WHAT APPEARS NOW
Write `2 - 3`.

### CENTER-STAGE HERO
2-3

### CAUSE
Narration reaches: `two minus three …`

### EFFECT / MOTION
Write `2 - 3`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 035 — `S06_A035`

### ANCHOR / SPOKEN PHRASE
> minus one.

### WHAT APPEARS NOW
Resolve -1.

### CENTER-STAGE HERO
needed-1

### CAUSE
Narration reaches: `minus one.`

### EFFECT / MOTION
Resolve -1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p2,need-1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 036 — `S06_A036`

### ANCHOR / SPOKEN PHRASE
> No match.

### WHAT APPEARS NOW
Query -1: no match.

### CENTER-STAGE HERO
freq[-1]=0

### CAUSE
Narration reaches: `No match.`

### EFFECT / MOTION
Query -1: no match.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 037 — `S06_A037`

### ANCHOR / SPOKEN PHRASE
> Answer stays zero.

### WHAT APPEARS NOW
Answer remains0.

### CENTER-STAGE HERO
answer0

### CAUSE
Narration reaches: `Answer stays zero.`

### EFFECT / MOTION
Answer remains0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 038 — `S06_A038`

### ANCHOR / SPOKEN PHRASE
> Store prefix two with frequency one.

### WHAT APPEARS NOW
Store prefix2 as row `2→1`.

### CENTER-STAGE HERO
map add2

### CAUSE
Narration reaches: `Store prefix two with frequency one.`

### EFFECT / MOTION
Store prefix2 as row `2→1`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p2,a0,f2=1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 039 — `S06_A039`

### ANCHOR / SPOKEN PHRASE
> Now we reach index three … value one.

### WHAT APPEARS NOW
Move current index to3 and focus value1.

### CENTER-STAGE HERO
index3 hero

### CAUSE
Narration reaches: `Now we reach index three … value one.`

### EFFECT / MOTION
Move current index to3 and focus value1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p2,a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 040 — `S06_A040`

### ANCHOR / SPOKEN PHRASE
> Current prefix is two.

### WHAT APPEARS NOW
Show current prefix2 before update.

### CENTER-STAGE HERO
prefix2

### CAUSE
Narration reaches: `Current prefix is two.`

### EFFECT / MOTION
Show current prefix2 before update.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 041 — `S06_A041`

### ANCHOR / SPOKEN PHRASE
> Add one …

### WHAT APPEARS NOW
Add value1; arithmetic in progress.

### CENTER-STAGE HERO
2+1

### CAUSE
Narration reaches: `Add one …`

### EFFECT / MOTION
Add value1; arithmetic in progress.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
pending

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 042 — `S06_A042`

### ANCHOR / SPOKEN PHRASE
> prefix becomes three.

### WHAT APPEARS NOW
Update prefix to3.

### CENTER-STAGE HERO
prefix3

### CAUSE
Narration reaches: `prefix becomes three.`

### EFFECT / MOTION
Update prefix to3.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3,a0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 043 — `S06_A043`

### ANCHOR / SPOKEN PHRASE
> Needed is:

### WHAT APPEARS NOW
Open needed calculation.

### CENTER-STAGE HERO
needed calc

### CAUSE
Narration reaches: `Needed is:`

### EFFECT / MOTION
Open needed calculation.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 044 — `S06_A044`

### ANCHOR / SPOKEN PHRASE
> three minus three …

### WHAT APPEARS NOW
Write `3 - 3`.

### CENTER-STAGE HERO
3-3

### CAUSE
Narration reaches: `three minus three …`

### EFFECT / MOTION
Write `3 - 3`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 045 — `S06_A045`

### ANCHOR / SPOKEN PHRASE
> zero.

### WHAT APPEARS NOW
Resolve needed0.

### CENTER-STAGE HERO
needed0

### CAUSE
Narration reaches: `zero.`

### EFFECT / MOTION
Resolve needed0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3,need0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 046 — `S06_A046`

### ANCHOR / SPOKEN PHRASE
> Now look at the map.

### WHAT APPEARS NOW
Move query focus from needed0 to map key0.

### CENTER-STAGE HERO
query0

### CAUSE
Narration reaches: `Now look at the map.`

### EFFECT / MOTION
Move query focus from needed0 to map key0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
lookup pending

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 047 — `S06_A047`

### ANCHOR / SPOKEN PHRASE
> Frequency of zero is two.

### WHAT APPEARS NOW
Show frequency0=2 as the center-stage result.

### CENTER-STAGE HERO
freq0=2

### CAUSE
Narration reaches: `Frequency of zero is two.`

### EFFECT / MOTION
Show frequency0=2 as the center-stage result.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
two matches available

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 048 — `S06_A048`

### ANCHOR / SPOKEN PHRASE
> So there are two valid starting boundaries.

### WHAT APPEARS NOW
Connect map frequency2 to two earlier boundary positions.

### CENTER-STAGE HERO
two starts

### CAUSE
Narration reaches: `So there are two valid starting boundaries.`

### EFFECT / MOTION
Connect map frequency2 to two earlier boundary positions.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
match origins

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 049 — `S06_A049`

### ANCHOR / SPOKEN PHRASE
> That means two valid subarrays end here.

### WHAT APPEARS NOW
Show two valid range relations ending at index3; do not reveal their start labels until spoken.

### CENTER-STAGE HERO
two valid subarrays

### CAUSE
Narration reaches: `That means two valid subarrays end here.`

### EFFECT / MOTION
Show two valid range relations ending at index3; do not reveal their start labels until spoken.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
match geometry

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 050 — `S06_A050`

### ANCHOR / SPOKEN PHRASE
> One starts from index zero.

### WHAT APPEARS NOW
Label first range starts index0.

### CENTER-STAGE HERO
range0..3

### CAUSE
Narration reaches: `One starts from index zero.`

### EFFECT / MOTION
Label first range starts index0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
one of two

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 051 — `S06_A051`

### ANCHOR / SPOKEN PHRASE
> The other starts from index two.

### WHAT APPEARS NOW
Label second range starts index2.

### CENTER-STAGE HERO
range2..3

### CAUSE
Narration reaches: `The other starts from index two.`

### EFFECT / MOTION
Label second range starts index2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
two of two

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 052 — `S06_A052`

### ANCHOR / SPOKEN PHRASE
> So answer jumps from zero to two.

### WHAT APPEARS NOW
Increment answer 0→2 in one semantic update.

### CENTER-STAGE HERO
answer2

### CAUSE
Narration reaches: `So answer jumps from zero to two.`

### EFFECT / MOTION
Increment answer 0→2 in one semantic update.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 053 — `S06_A053`

### ANCHOR / SPOKEN PHRASE
> Only after counting those matches …

### WHAT APPEARS NOW
Hold current prefix outside map and emphasize `count first`.

### CENTER-STAGE HERO
count before store

### CAUSE
Narration reaches: `Only after counting those matches …`

### EFFECT / MOTION
Hold current prefix outside map and emphasize `count first`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3 not stored yet

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 054 — `S06_A054`

### ANCHOR / SPOKEN PHRASE
> store current prefix three.

### WHAT APPEARS NOW
Begin store current prefix3.

### CENTER-STAGE HERO
store3

### CAUSE
Narration reaches: `store current prefix three.`

### EFFECT / MOTION
Begin store current prefix3.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
insert

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 055 — `S06_A055`

### ANCHOR / SPOKEN PHRASE
> Three now has frequency one.

### WHAT APPEARS NOW
Add row 3→1.

### CENTER-STAGE HERO
freq3=1

### CAUSE
Narration reaches: `Three now has frequency one.`

### EFFECT / MOTION
Add row 3→1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3,a2,f3=1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 056 — `S06_A056`

### ANCHOR / SPOKEN PHRASE
> Next value is zero.

### WHAT APPEARS NOW
Move current index to4 value0.

### CENTER-STAGE HERO
index4 value0

### CAUSE
Narration reaches: `Next value is zero.`

### EFFECT / MOTION
Move current index to4 value0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3,a2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 057 — `S06_A057`

### ANCHOR / SPOKEN PHRASE
> Add zero …

### WHAT APPEARS NOW
Add0 to prefix; show operation without changing value yet.

### CENTER-STAGE HERO
3+0

### CAUSE
Narration reaches: `Add zero …`

### EFFECT / MOTION
Add0 to prefix; show operation without changing value yet.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
pending

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 058 — `S06_A058`

### ANCHOR / SPOKEN PHRASE
> the prefix stays three.

### WHAT APPEARS NOW
Keep prefix numerically3 but advance prefix POSITION to new boundary.

### CENTER-STAGE HERO
prefix value3, new position

### CAUSE
Narration reaches: `the prefix stays three.`

### EFFECT / MOTION
Keep prefix numerically3 but advance prefix POSITION to new boundary.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3,a2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 059 — `S06_A059`

### ANCHOR / SPOKEN PHRASE
> But this is a new prefix position.

### WHAT APPEARS NOW
Explicitly distinguish `same value, new prefix position`.

### CENTER-STAGE HERO
new prefix position

### CAUSE
Narration reaches: `But this is a new prefix position.`

### EFFECT / MOTION
Explicitly distinguish `same value, new prefix position`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3 repeated

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 060 — `S06_A060`

### ANCHOR / SPOKEN PHRASE
> Needed is still:

### WHAT APPEARS NOW
Open needed calculation.

### CENTER-STAGE HERO
needed calc

### CAUSE
Narration reaches: `Needed is still:`

### EFFECT / MOTION
Open needed calculation.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 061 — `S06_A061`

### ANCHOR / SPOKEN PHRASE
> three minus three …

### WHAT APPEARS NOW
Write `3 - 3`.

### CENTER-STAGE HERO
3-3

### CAUSE
Narration reaches: `three minus three …`

### EFFECT / MOTION
Write `3 - 3`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 062 — `S06_A062`

### ANCHOR / SPOKEN PHRASE
> zero.

### WHAT APPEARS NOW
Resolve0.

### CENTER-STAGE HERO
needed0

### CAUSE
Narration reaches: `zero.`

### EFFECT / MOTION
Resolve0.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
need0

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 063 — `S06_A063`

### ANCHOR / SPOKEN PHRASE
> Frequency of zero is still two.

### WHAT APPEARS NOW
Query map0 and show frequency still2.

### CENTER-STAGE HERO
freq0=2

### CAUSE
Narration reaches: `Frequency of zero is still two.`

### EFFECT / MOTION
Query map0 and show frequency still2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
two matches

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 064 — `S06_A064`

### ANCHOR / SPOKEN PHRASE
> So again …

### WHAT APPEARS NOW
Prepare repeated-match emphasis; no answer change yet.

### CENTER-STAGE HERO
again scaffold

### CAUSE
Narration reaches: `So again …`

### EFFECT / MOTION
Prepare repeated-match emphasis; no answer change yet.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 065 — `S06_A065`

### ANCHOR / SPOKEN PHRASE
> two valid subarrays end here.

### WHAT APPEARS NOW
Show two valid subarrays ending at index4.

### CENTER-STAGE HERO
two ranges end4

### CAUSE
Narration reaches: `two valid subarrays end here.`

### EFFECT / MOTION
Show two valid subarrays ending at index4.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
match geometry

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 066 — `S06_A066`

### ANCHOR / SPOKEN PHRASE
> Answer goes from two to four.

### WHAT APPEARS NOW
Increment answer2→4.

### CENTER-STAGE HERO
answer4

### CAUSE
Narration reaches: `Answer goes from two to four.`

### EFFECT / MOTION
Increment answer2→4.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 067 — `S06_A067`

### ANCHOR / SPOKEN PHRASE
> Now store the current prefix three.

### WHAT APPEARS NOW
Begin storing current prefix3 only after count.

### CENTER-STAGE HERO
store3

### CAUSE
Narration reaches: `Now store the current prefix three.`

### EFFECT / MOTION
Begin storing current prefix3 only after count.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
before increment

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 068 — `S06_A068`

### ANCHOR / SPOKEN PHRASE
> Three already occurred once.

### WHAT APPEARS NOW
Focus existing row3→1.

### CENTER-STAGE HERO
3 occurred once

### CAUSE
Narration reaches: `Three already occurred once.`

### EFFECT / MOTION
Focus existing row3→1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
before increment

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 069 — `S06_A069`

### ANCHOR / SPOKEN PHRASE
> Now its frequency becomes two.

### WHAT APPEARS NOW
Increment 3 frequency1→2.

### CENTER-STAGE HERO
freq3=2

### CAUSE
Narration reaches: `Now its frequency becomes two.`

### EFFECT / MOTION
Increment 3 frequency1→2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3,a4,f3=2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 070 — `S06_A070`

### ANCHOR / SPOKEN PHRASE
> Next value is minus two.

### WHAT APPEARS NOW
Move index to5 value-2.

### CENTER-STAGE HERO
index5

### CAUSE
Narration reaches: `Next value is minus two.`

### EFFECT / MOTION
Move index to5 value-2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p3,a4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 071 — `S06_A071`

### ANCHOR / SPOKEN PHRASE
> Prefix changes from three to one.

### WHAT APPEARS NOW
Update prefix3→1.

### CENTER-STAGE HERO
prefix1

### CAUSE
Narration reaches: `Prefix changes from three to one.`

### EFFECT / MOTION
Update prefix3→1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1,a4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 072 — `S06_A072`

### ANCHOR / SPOKEN PHRASE
> Needed is:

### WHAT APPEARS NOW
Open needed calc.

### CENTER-STAGE HERO
needed

### CAUSE
Narration reaches: `Needed is:`

### EFFECT / MOTION
Open needed calc.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 073 — `S06_A073`

### ANCHOR / SPOKEN PHRASE
> one minus three …

### WHAT APPEARS NOW
Write `1 - 3`.

### CENTER-STAGE HERO
1-3

### CAUSE
Narration reaches: `one minus three …`

### EFFECT / MOTION
Write `1 - 3`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 074 — `S06_A074`

### ANCHOR / SPOKEN PHRASE
> minus two.

### WHAT APPEARS NOW
Resolve -2.

### CENTER-STAGE HERO
needed-2

### CAUSE
Narration reaches: `minus two.`

### EFFECT / MOTION
Resolve -2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
need-2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 075 — `S06_A075`

### ANCHOR / SPOKEN PHRASE
> No previous prefix minus two.

### WHAT APPEARS NOW
Query -2: no earlier prefix.

### CENTER-STAGE HERO
no -2

### CAUSE
Narration reaches: `No previous prefix minus two.`

### EFFECT / MOTION
Query -2: no earlier prefix.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 076 — `S06_A076`

### ANCHOR / SPOKEN PHRASE
> So answer stays four.

### WHAT APPEARS NOW
Answer stays4.

### CENTER-STAGE HERO
answer4

### CAUSE
Narration reaches: `So answer stays four.`

### EFFECT / MOTION
Answer stays4.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 077 — `S06_A077`

### ANCHOR / SPOKEN PHRASE
> Now store prefix one.

### WHAT APPEARS NOW
Begin store prefix1.

### CENTER-STAGE HERO
store1

### CAUSE
Narration reaches: `Now store prefix one.`

### EFFECT / MOTION
Begin store prefix1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
before increment

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 078 — `S06_A078`

### ANCHOR / SPOKEN PHRASE
> One already occurred once.

### WHAT APPEARS NOW
Focus existing row1→1.

### CENTER-STAGE HERO
1 occurred once

### CAUSE
Narration reaches: `One already occurred once.`

### EFFECT / MOTION
Focus existing row1→1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
before increment

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 079 — `S06_A079`

### ANCHOR / SPOKEN PHRASE
> So frequency one becomes two.

### WHAT APPEARS NOW
Increment 1 frequency1→2.

### CENTER-STAGE HERO
freq1=2

### CAUSE
Narration reaches: `So frequency one becomes two.`

### EFFECT / MOTION
Increment 1 frequency1→2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1,a4,f1=2

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 080 — `S06_A080`

### ANCHOR / SPOKEN PHRASE
> Now the final value is three.

### WHAT APPEARS NOW
Move index to6 value3.

### CENTER-STAGE HERO
index6 final

### CAUSE
Narration reaches: `Now the final value is three.`

### EFFECT / MOTION
Move index to6 value3.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1,a4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 081 — `S06_A081`

### ANCHOR / SPOKEN PHRASE
> Current prefix is one.

### WHAT APPEARS NOW
Show current prefix1 before update.

### CENTER-STAGE HERO
prefix1

### CAUSE
Narration reaches: `Current prefix is one.`

### EFFECT / MOTION
Show current prefix1 before update.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 082 — `S06_A082`

### ANCHOR / SPOKEN PHRASE
> Add three …

### WHAT APPEARS NOW
Add3; arithmetic in progress.

### CENTER-STAGE HERO
1+3

### CAUSE
Narration reaches: `Add three …`

### EFFECT / MOTION
Add3; arithmetic in progress.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
pending

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 083 — `S06_A083`

### ANCHOR / SPOKEN PHRASE
> prefix becomes four.

### WHAT APPEARS NOW
Update prefix to4.

### CENTER-STAGE HERO
prefix4

### CAUSE
Narration reaches: `prefix becomes four.`

### EFFECT / MOTION
Update prefix to4.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p4,a4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 084 — `S06_A084`

### ANCHOR / SPOKEN PHRASE
> Needed is:

### WHAT APPEARS NOW
Open needed calc.

### CENTER-STAGE HERO
needed

### CAUSE
Narration reaches: `Needed is:`

### EFFECT / MOTION
Open needed calc.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 085 — `S06_A085`

### ANCHOR / SPOKEN PHRASE
> four minus three …

### WHAT APPEARS NOW
Write `4 - 3`.

### CENTER-STAGE HERO
4-3

### CAUSE
Narration reaches: `four minus three …`

### EFFECT / MOTION
Write `4 - 3`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
p4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 086 — `S06_A086`

### ANCHOR / SPOKEN PHRASE
> one.

### WHAT APPEARS NOW
Resolve needed1.

### CENTER-STAGE HERO
needed1

### CAUSE
Narration reaches: `one.`

### EFFECT / MOTION
Resolve needed1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
need1

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 087 — `S06_A087`

### ANCHOR / SPOKEN PHRASE
> Look at the map.

### WHAT APPEARS NOW
Query map key1.

### CENTER-STAGE HERO
query1

### CAUSE
Narration reaches: `Look at the map.`

### EFFECT / MOTION
Query map key1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
lookup pending

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 088 — `S06_A088`

### ANCHOR / SPOKEN PHRASE
> Frequency of one is two.

### WHAT APPEARS NOW
Show frequency1=2.

### CENTER-STAGE HERO
freq1=2

### CAUSE
Narration reaches: `Frequency of one is two.`

### EFFECT / MOTION
Show frequency1=2.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
two matches

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 089 — `S06_A089`

### ANCHOR / SPOKEN PHRASE
> So again …

### WHAT APPEARS NOW
Prepare two-start emphasis.

### CENTER-STAGE HERO
again scaffold

### CAUSE
Narration reaches: `So again …`

### EFFECT / MOTION
Prepare two-start emphasis.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a4

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 090 — `S06_A090`

### ANCHOR / SPOKEN PHRASE
> two valid starting boundaries.

### WHAT APPEARS NOW
Connect frequency2 to two valid starting boundaries.

### CENTER-STAGE HERO
two starts

### CAUSE
Narration reaches: `two valid starting boundaries.`

### EFFECT / MOTION
Connect frequency2 to two valid starting boundaries.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
match geometry

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 091 — `S06_A091`

### ANCHOR / SPOKEN PHRASE
> They give two valid subarrays ending at the final index.

### WHAT APPEARS NOW
Show two valid ranges ending at final index; labels pending.

### CENTER-STAGE HERO
two final ranges

### CAUSE
Narration reaches: `They give two valid subarrays ending at the final index.`

### EFFECT / MOTION
Show two valid ranges ending at final index; labels pending.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
match geometry

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 092 — `S06_A092`

### ANCHOR / SPOKEN PHRASE
> One is the range from index one to six.

### WHAT APPEARS NOW
Label range1..6.

### CENTER-STAGE HERO
range1..6

### CAUSE
Narration reaches: `One is the range from index one to six.`

### EFFECT / MOTION
Label range1..6.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
first

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 093 — `S06_A093`

### ANCHOR / SPOKEN PHRASE
> And the other is just index six …

### WHAT APPEARS NOW
Focus the second range as a one-cell span at index6; label pending.

### CENTER-STAGE HERO
single-cell range

### CAUSE
Narration reaches: `And the other is just index six …`

### EFFECT / MOTION
Focus the second range as a one-cell span at index6; label pending.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
second

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 094 — `S06_A094`

### ANCHOR / SPOKEN PHRASE
> the single value three.

### WHAT APPEARS NOW
Label value3 / range6..6.

### CENTER-STAGE HERO
range6..6

### CAUSE
Narration reaches: `the single value three.`

### EFFECT / MOTION
Label value3 / range6..6.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
second complete

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 095 — `S06_A095`

### ANCHOR / SPOKEN PHRASE
> So answer goes from four to six.

### WHAT APPEARS NOW
Increment answer4→6.

### CENTER-STAGE HERO
answer6

### CAUSE
Narration reaches: `So answer goes from four to six.`

### EFFECT / MOTION
Increment answer4→6.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a6

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 096 — `S06_A096`

### ANCHOR / SPOKEN PHRASE
> Then store current prefix four.

### WHAT APPEARS NOW
Store current prefix4 as row4→1.

### CENTER-STAGE HERO
freq4=1

### CAUSE
Narration reaches: `Then store current prefix four.`

### EFFECT / MOTION
Store current prefix4 as row4→1.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
final map

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 097 — `S06_A097`

### ANCHOR / SPOKEN PHRASE
> Final answer is six.

### WHAT APPEARS NOW
Hold final answer6; all seven iterations complete.

### CENTER-STAGE HERO
final answer6

### CAUSE
Narration reaches: `Final answer is six.`

### EFFECT / MOTION
Hold final answer6; all seven iterations complete.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
final

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 098 — `S06_A098`

### ANCHOR / SPOKEN PHRASE
> Notice the pattern.

### WHAT APPEARS NOW
Clear per-iteration detail into a three-event summary scaffold.

### CENTER-STAGE HERO
pattern summary

### CAUSE
Narration reaches: `Notice the pattern.`

### EFFECT / MOTION
Clear per-iteration detail into a three-event summary scaffold.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
a6

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 099 — `S06_A099`

### ANCHOR / SPOKEN PHRASE
> At index three …

### WHAT APPEARS NOW
Focus index3 event.

### CENTER-STAGE HERO
index3 event

### CAUSE
Narration reaches: `At index three …`

### EFFECT / MOTION
Focus index3 event.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
summary

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 100 — `S06_A100`

### ANCHOR / SPOKEN PHRASE
> one lookup added two.

### WHAT APPEARS NOW
Write `one lookup → +2`.

### CENTER-STAGE HERO
i3 +2

### CAUSE
Narration reaches: `one lookup added two.`

### EFFECT / MOTION
Write `one lookup → +2`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
summary

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 101 — `S06_A101`

### ANCHOR / SPOKEN PHRASE
> At index four …

### WHAT APPEARS NOW
Focus index4 event.

### CENTER-STAGE HERO
index4 event

### CAUSE
Narration reaches: `At index four …`

### EFFECT / MOTION
Focus index4 event.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
summary

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 102 — `S06_A102`

### ANCHOR / SPOKEN PHRASE
> one lookup added two again.

### WHAT APPEARS NOW
Write `one lookup → +2` again.

### CENTER-STAGE HERO
i4 +2

### CAUSE
Narration reaches: `one lookup added two again.`

### EFFECT / MOTION
Write `one lookup → +2` again.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
summary

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 103 — `S06_A103`

### ANCHOR / SPOKEN PHRASE
> At index six …

### WHAT APPEARS NOW
Focus index6 event.

### CENTER-STAGE HERO
index6 event

### CAUSE
Narration reaches: `At index six …`

### EFFECT / MOTION
Focus index6 event.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
summary

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 104 — `S06_A104`

### ANCHOR / SPOKEN PHRASE
> one lookup added two again.

### WHAT APPEARS NOW
Write `one lookup → +2` again.

### CENTER-STAGE HERO
i6 +2

### CAUSE
Narration reaches: `one lookup added two again.`

### EFFECT / MOTION
Write `one lookup → +2` again.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
summary

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 105 — `S06_A105`

### ANCHOR / SPOKEN PHRASE
> The map does not simply tell us whether a prefix exists.

### WHAT APPEARS NOW
Replace existence-language with a crossed `exists?` cue.

### CENTER-STAGE HERO
not existence

### CAUSE
Narration reaches: `The map does not simply tell us whether a prefix exists.`

### EFFECT / MOTION
Replace existence-language with a crossed `exists?` cue.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
summary

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 106 — `S06_A106`

### ANCHOR / SPOKEN PHRASE
> It tells us how many valid starting boundaries exist.

### WHAT APPEARS NOW
Center `frequency = number of valid starting boundaries`.

### CENTER-STAGE HERO
frequency meaning

### CAUSE
Narration reaches: `It tells us how many valid starting boundaries exist.`

### EFFECT / MOTION
Center `frequency = number of valid starting boundaries`.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
summary

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

## BEAT 107 — `S06_A107`

### ANCHOR / SPOKEN PHRASE
> Now let us translate this exact logic into code.

### WHAT APPEARS NOW
Clear summary into Trace→Code handoff; keep final Method2 identity only.

### CENTER-STAGE HERO
trace→code

### CAUSE
Narration reaches: `Now let us translate this exact logic into code.`

### EFFECT / MOTION
Clear summary into Trace→Code handoff; keep final Method2 identity only.

### WHAT MUST NOT APPEAR YET
Any future index/prefix/needed/frequency/answer state before spoken; code; complexity; roadmap.

### COMPREHENSION HOLD
Only if the final audio contains a real pause after this anchor. No guessed hold duration in Phase 9.

### CLEANUP / EXIT
Keep only current index, current prefix, current needed query, map state, and answer. Old range proofs recede after their teaching job.

### PERSISTENT STATE
code next

### KIT / EXISTING SYSTEM
ArrayTrackV2 + genericized frequency map + prefix-boundary grammar + CountUp/ChalkText. Exact APIs unresolved.

### MOTION PURPOSE
Execute the verified Method2 state machine exactly.


---

# CONTINUITY OUT

Method2 answer=6 and final frequency state verified; ready for Trace→Code.

---

# SCENE 07 PHASE-9 LOCK

```text
NO GUESSED SECONDS
NO GUESSED FRAMES
NO FUTURE-STATE SPOILERS
NO GENERIC PACKED DASHBOARD
NO UNSOURCED COMPONENT API
```
