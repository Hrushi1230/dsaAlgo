# Q16 — Subarray Sum Equals K (LeetCode 560)
# Phase 9 V3 · Scene 09 — Recap + Transferable Pattern + Roadmap
## WORD-BASED VISUAL PLAN — NO GUESSED TIME · NO GUESSED FRAMES

## Scene contract

**PURPOSE:** Minimal final recap: Method1 identity/complexity, core relation, Method2 identity/complexity, one reusable pattern, exact roadmap update.

**TIMING:** Final MP3 + validated exact word-sync JSON are required before any frame number is assigned.

**CONTINUITY IN:**
Scene08 clears all mistakes/edge examples and leaves a clean board.

**CONTINUITY OUT:**
Q16 ends with 16/227 complete and Q17 Encode and Decode Strings marked UP NEXT only.

### REUSE
- `ChalkText`
- `RoughLine`
- `CountUp`
- `MasterRoadmapV2`
- `SceneLabelStrip`
- `theme`

### CREATE / EXTEND
`REUSE/CREATE ComplexityGrowthGraphV2 and FrequencyMapTableV2 from the kit-level source decision document.`

### DO NOT TOUCH
- trace replay
- mistakes/edge cases
- Q17 active state
- decorative celebration

## Spatial / motion law

- FINAL SCENE IS MINIMAL. No mistakes, edge cases, or trace replay.
- Big-O statements receive rough growth curves, then those graphs exit before the transferable pattern/roadmap.
- Roadmap is the only persistent object in the final act.
- Q17 is UP NEXT only; it never becomes ACTIVE inside Q16.
- No celebratory AI-slop particles unless an existing restrained course primitive is already approved; default is no decorative effect.
- No invented freeze; end state simply persists to scene end according to final audio.

## Semantic anchor manifest

| Anchor | Exact spoken phrase |
|---|---|
| `S09_A001` | Quick recap. |
| `S09_A002` | Method One ... fix start ... extend end ... update running sum ... count the match. |
| `S09_A003` | Time ... `O of n squared`. |
| `S09_A004` | Space ... `O of one`. |
| `S09_A005` | Core relation: current prefix minus previous prefix equals `k`. |
| `S09_A006` | So: needed previous prefix equals current prefix minus `k`. |
| `S09_A007` | Method Two ... update prefix ... compute needed ... query its frequency ... add the matches ... then store the current prefix. |
| `S09_A008` | Expected time ... `O of n`. |
| `S09_A009` | Space ... `O of n`. |
| `S09_A010` | Reusable pattern: |
| `S09_A011` | if a range condition can be written as: current cumulative state minus earlier cumulative state equals target ... |
| `S09_A012` | look for: current minus target. |
| `S09_A013` | And if multiple earlier states can create valid ranges ... store frequency. |
| `S09_A014` | Now Question Sixteen ... Subarray Sum Equals K ... is complete. |
| `S09_A015` | Our global progress moves from fifteen out of two hundred twenty-seven ... to sixteen out of two hundred twenty-seven. |
| `S09_A016` | Next in Arrays and Hashing ... Question seventeen. |
| `S09_A017` | Encode and Decode Strings. |

## Word-based choreography

### BEAT 001 — `S09_A001`

#### ANCHOR / SPOKEN PHRASE
> Quick recap.

#### WHAT APPEARS NOW
Clean center board with a small `Q16 RECAP` strip only.

#### CENTER-STAGE HERO
Recap mode.

#### CAUSE
Narration reaches: “Quick recap.”

#### EFFECT / MOTION
Simple mode transition.

#### WHAT MUST NOT APPEAR YET
No methods, complexities, equation, reusable pattern, or roadmap state yet.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep clean stage.

#### PERSISTENT STATE
None.

#### KIT / EXISTING SYSTEM
SceneLabelStrip

#### MOTION PURPOSE
Start minimal recap.

### BEAT 002 — `S09_A002`

#### ANCHOR / SPOKEN PHRASE
> Method One ... fix start ... extend end ... update running sum ... count the match.

#### WHAT APPEARS NOW
Show a four-step compact Method1 sequence, built left-to-right as phrase is spoken; no array trace.

#### CENTER-STAGE HERO
Method1 identity.

#### CAUSE
Narration reaches: “Method One ... fix start ... extend end ... update running sum ... count the match.”

#### EFFECT / MOTION
Each label appears in spoken order.

#### WHAT MUST NOT APPEAR YET
No complexity curve until spoken.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep compact sequence for complexity.

#### PERSISTENT STATE
Method1 operation identity.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Recall method without replay.

### BEAT 003 — `S09_A003`

#### ANCHOR / SPOKEN PHRASE
> Time ... `O of n squared`.

#### WHAT APPEARS NOW
Replace operation strip with active O(n²) rough curve.

#### CENTER-STAGE HERO
O(n²) time curve.

#### CAUSE
Narration reaches: “Time ... `O of n squared`.”

#### EFFECT / MOTION
Quadratic curve draws left-to-right.

#### WHAT MUST NOT APPEAR YET
No O(n) curve yet.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep dimmed for comparison only if next spoken state needs it.

#### PERSISTENT STATE
Method1 time O(n²).

#### KIT / EXISTING SYSTEM
ComplexityGrowthGraphV2

#### MOTION PURPOSE
Visualize spoken complexity.

Curve = mathematical quadratic class; no benchmark numbers.

### BEAT 004 — `S09_A004`

#### ANCHOR / SPOKEN PHRASE
> Space ... `O of one`.

#### WHAT APPEARS NOW
Switch to flat O(1) memory curve; time curve clears/reduces.

#### CENTER-STAGE HERO
O(1) space curve.

#### CAUSE
Narration reaches: “Space ... `O of one`.”

#### EFFECT / MOTION
Flat rough line draws.

#### WHAT MUST NOT APPEAR YET
No Method2 state yet.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Clear graph after settle.

#### PERSISTENT STATE
Method1 aux space O(1).

#### KIT / EXISTING SYSTEM
ComplexityGrowthGraphV2

#### MOTION PURPOSE
Visualize space complexity.

### BEAT 005 — `S09_A005`

#### ANCHOR / SPOKEN PHRASE
> Core relation: current prefix minus previous prefix equals `k`.

#### WHAT APPEARS NOW
Write only `current prefix - previous prefix = k` at center.

#### CENTER-STAGE HERO
Core equation.

#### CAUSE
Narration reaches: “Core relation: current prefix minus previous prefix equals `k`.”

#### EFFECT / MOTION
Equation chalk-writes in; no derivation proof.

#### WHAT MUST NOT APPEAR YET
Do not re-teach prefix boundaries.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep for rearranged form.

#### PERSISTENT STATE
Range relation locked.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Recall the bridge equation.

### BEAT 006 — `S09_A006`

#### ANCHOR / SPOKEN PHRASE
> So: needed previous prefix equals current prefix minus `k`.

#### WHAT APPEARS NOW
Morph/rewrite equation to `needed = current - k`.

#### CENTER-STAGE HERO
Needed-prefix equation.

#### CAUSE
Narration reaches: “So: needed previous prefix equals current prefix minus `k`.”

#### EFFECT / MOTION
Left side changes from previous-prefix relation to lookup form.

#### WHAT MUST NOT APPEAR YET
No map yet.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep needed equation.

#### PERSISTENT STATE
Lookup key = current-k.

#### KIT / EXISTING SYSTEM
ChalkText

#### MOTION PURPOSE
Land optimal lookup relation.

### BEAT 007 — `S09_A007`

#### ANCHOR / SPOKEN PHRASE
> Method Two ... update prefix ... compute needed ... query its frequency ... add the matches ... then store the current prefix.

#### WHAT APPEARS NOW
Replace equation with five-step Method2 order, revealed in spoken order.

#### CENTER-STAGE HERO
Method2 identity.

#### CAUSE
Narration reaches: “Method Two ... update prefix ... compute needed ... query its frequency ... add the matches ... then store the current prefix.”

#### EFFECT / MOTION
Each step enters one by one; no master trace.

#### WHAT MUST NOT APPEAR YET
No frequency values, answer jumps, or code lines.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep sequence for complexity.

#### PERSISTENT STATE
Optimal order locked.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Recall algorithm skeleton only.

### BEAT 008 — `S09_A008`

#### ANCHOR / SPOKEN PHRASE
> Expected time ... `O of n`.

#### WHAT APPEARS NOW
Show dim O(n²) context only if still useful, then active O(n) rough curve.

#### CENTER-STAGE HERO
Expected O(n) time curve.

#### CAUSE
Narration reaches: “Expected time ... `O of n`.”

#### EFFECT / MOTION
Linear curve draws and wins focus.

#### WHAT MUST NOT APPEAR YET
No benchmarks.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Clear time graph after settle.

#### PERSISTENT STATE
Method2 expected time O(n).

#### KIT / EXISTING SYSTEM
ComplexityGrowthGraphV2

#### MOTION PURPOSE
Visualize final time complexity.

### BEAT 009 — `S09_A009`

#### ANCHOR / SPOKEN PHRASE
> Space ... `O of n`.

#### WHAT APPEARS NOW
Switch to linear memory curve and one tiny map-growth cue.

#### CENTER-STAGE HERO
O(n) space curve.

#### CAUSE
Narration reaches: “Space ... `O of n`.”

#### EFFECT / MOTION
Linear memory curve draws.

#### WHAT MUST NOT APPEAR YET
No mistakes/edge cases from Scene08.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Clear complexity stage.

#### PERSISTENT STATE
Method2 aux space O(n).

#### KIT / EXISTING SYSTEM
ComplexityGrowthGraphV2 + FrequencyMapTableV2

#### MOTION PURPOSE
Visualize final space complexity.

### BEAT 010 — `S09_A010`

#### ANCHOR / SPOKEN PHRASE
> Reusable pattern:

#### WHAT APPEARS NOW
Open one clean center formula stage.

#### CENTER-STAGE HERO
Transferable pattern.

#### CAUSE
Narration reaches: “Reusable pattern:”

#### EFFECT / MOTION
Scene shifts from Q16-specific to general cumulative-state idea.

#### WHAT MUST NOT APPEAR YET
No roadmap yet.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep general formula shell.

#### PERSISTENT STATE
None.

#### KIT / EXISTING SYSTEM
ChalkText

#### MOTION PURPOSE
Transfer learning.

### BEAT 011 — `S09_A011`

#### ANCHOR / SPOKEN PHRASE
> if a range condition can be written as: current cumulative state minus earlier cumulative state equals target ...

#### WHAT APPEARS NOW
Write the general relation in full.

#### CENTER-STAGE HERO
`current cumulative - earlier cumulative = target`.

#### CAUSE
Narration reaches: “if a range condition can be written as: current cumulative state minus earlier cumulative state equals target ...”

#### EFFECT / MOTION
Formula writes in sequence; no examples.

#### WHAT MUST NOT APPEAR YET
Do not introduce other problems/patterns.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep formula.

#### PERSISTENT STATE
General range-difference form.

#### KIT / EXISTING SYSTEM
ChalkText + RoughLine

#### MOTION PURPOSE
Generalize without over-explaining.

### BEAT 012 — `S09_A012`

#### ANCHOR / SPOKEN PHRASE
> look for: current minus target.

#### WHAT APPEARS NOW
Transform right side into lookup rule `needed = current - target`.

#### CENTER-STAGE HERO
General lookup rule.

#### CAUSE
Narration reaches: “look for: current minus target.”

#### EFFECT / MOTION
Formula simplifies to lookup form.

#### WHAT MUST NOT APPEAR YET
No HashMap frequency until next anchor.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep needed rule.

#### PERSISTENT STATE
Needed state derived by subtraction.

#### KIT / EXISTING SYSTEM
ChalkText

#### MOTION PURPOSE
Extract reusable search key.

### BEAT 013 — `S09_A013`

#### ANCHOR / SPOKEN PHRASE
> And if multiple earlier states can create valid ranges ... store frequency.

#### WHAT APPEARS NOW
Add one small count badge beside the earlier-state token; no table needed.

#### CENTER-STAGE HERO
Frequency extension.

#### CAUSE
Narration reaches: “And if multiple earlier states can create valid ranges ... store frequency.”

#### EFFECT / MOTION
Count badge appears only now.

#### WHAT MUST NOT APPEAR YET
No trace or edge cases.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Clear transferable-pattern stage after settle.

#### PERSISTENT STATE
Multiplicity → frequency.

#### KIT / EXISTING SYSTEM
CountUp + ChalkText

#### MOTION PURPOSE
Complete reusable pattern.

### BEAT 014 — `S09_A014`

#### ANCHOR / SPOKEN PHRASE
> Now Question Sixteen ... Subarray Sum Equals K ... is complete.

#### WHAT APPEARS NOW
Bring MasterRoadmapV2 center stage with Q16 active at first; only on `is complete` does Q16 switch to completed.

#### CENTER-STAGE HERO
Q16 completion on roadmap.

#### CAUSE
Narration reaches: “Now Question Sixteen ... Subarray Sum Equals K ... is complete.”

#### EFFECT / MOTION
Roadmap status mutates only on completion words.

#### WHAT MUST NOT APPEAR YET
Do not change progress count or activate Q17 yet.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep roadmap.

#### PERSISTENT STATE
Q16 complete; count change pending.

#### KIT / EXISTING SYSTEM
MasterRoadmapV2

#### MOTION PURPOSE
Truthful roadmap mutation.

### BEAT 015 — `S09_A015`

#### ANCHOR / SPOKEN PHRASE
> Our global progress moves from fifteen out of two hundred twenty-seven ... to sixteen out of two hundred twenty-seven.

#### WHAT APPEARS NOW
Update completedCount from 15 to 16 exactly on spoken progress change.

#### CENTER-STAGE HERO
16 / 227 progress.

#### CAUSE
Narration reaches: “Our global progress moves from fifteen out of two hundred twenty-seven ... to sixteen out of two hundred twenty-seven.”

#### EFFECT / MOTION
Progress rail/count advances one.

#### WHAT MUST NOT APPEAR YET
Q17 remains only upcoming, not active.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep roadmap.

#### PERSISTENT STATE
Global progress 16/227.

#### KIT / EXISTING SYSTEM
MasterRoadmapV2

#### MOTION PURPOSE
Close current problem state.

### BEAT 016 — `S09_A016`

#### ANCHOR / SPOKEN PHRASE
> Next in Arrays and Hashing ... Question seventeen.

#### WHAT APPEARS NOW
Spotlight row 17 as UP NEXT while Q16 remains completed.

#### CENTER-STAGE HERO
Q17 upcoming row.

#### CAUSE
Narration reaches: “Next in Arrays and Hashing ... Question seventeen.”

#### EFFECT / MOTION
Roadmap focus moves to Q17 row.

#### WHAT MUST NOT APPEAR YET
Do not mark Q17 active or complete.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
Keep spotlight.

#### PERSISTENT STATE
Q17 is up next.

#### KIT / EXISTING SYSTEM
MasterRoadmapV2

#### MOTION PURPOSE
Prepare handoff without starting next problem.

### BEAT 017 — `S09_A017`

#### ANCHOR / SPOKEN PHRASE
> Encode and Decode Strings.

#### WHAT APPEARS NOW
Reveal/confirm Q17 title exactly as roadmap data.

#### CENTER-STAGE HERO
Encode and Decode Strings — UP NEXT.

#### CAUSE
Narration reaches: “Encode and Decode Strings.”

#### EFFECT / MOTION
Title receives focus and settles.

#### WHAT MUST NOT APPEAR YET
No Q17 algorithm, visuals, or narration.

#### COMPREHENSION HOLD
Only real final-audio pause may create a hold; no decorative freeze.

#### CLEANUP / EXIT
End on roadmap with Q17 UP NEXT only.

#### PERSISTENT STATE
Q16 complete; 16/227; Q17 up next.

#### KIT / EXISTING SYSTEM
MasterRoadmapV2

#### MOTION PURPOSE
Final roadmap handoff.

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
