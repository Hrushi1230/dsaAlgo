# Scene 12 · COMPLEXITY — WHY THE NESTED LOOPS ARE STILL LINEAR · Full Frame-Wise Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `12-complexity.mp3` — **113.060 s** — **3392 frames** @ 30 fps  
**Goal**: Resolve the dangerous nested-loop misconception rigorously. Prove that the predecessor/start check prevents repeated walks, so each sequence run is launched once, all forward walking across all runs totals linear work, set construction and start checks are also linear expected work, and the final algorithm is **expected O(n) time with O(n) extra space**. Then compare the full journey: brute `O(n³)` → sort+scan `O(n log n)` → HashSet + real starts `expected O(n)`.

> **Transcript note:** the sync transcript contains the phrase “star check” at F430–F447. The surrounding narration and algorithm clearly refer to the **START CHECK**. The visual label will therefore read `START CHECK`, while timing remains exactly tied to those audio frames.

---

# 🔒 @dsa/kit CONSISTENCY LOCK — NON-NEGOTIABLE

Every frame must remain inside the existing Code With Animation visual system.

## Background
- `theme.boardBg` — locked green chalkboard `#18523d`
- existing `boardVignette` only
- no per-scene background
- no glass panels
- no glossy gradients
- no generic presentation-template UI

## Typography
- Patrick Hand for teaching labels and chalk annotations
- SFMono / Consolas / Menlo for code fragments, formulas, counters, and Big-O
- existing helpers from `fonts.ts`

## Semantic colors
Only existing theme tokens:
- `theme.chalkText`
- `theme.chalkDim`
- `theme.pivot`
- `theme.good`
- `theme.warn`
- `theme.highlight`
- `theme.cyan`
- `theme.purple`

No new hardcoded colors.

## Kit primitives
Use:
- `ChalkText`
- `RoughLine`
- `RoughCurve`
- `RoughBox`
- `SvgMorph`
- `BezierFlight`
- `Shatter`
- `CountUp`
- `ChalkDust`
- `Captions`

Reuse the locked visual languages from prior scenes:
- **Chalk Hash Field**
- **Predecessor Gate**
- **START pad / SKIP fold**
- **Sequence Runner**
- **Visual-only sequence islands**

Do not invent a new design language for complexity.

---

# 🎯 Pedagogical Philosophy & Hard Rules

## 1. DO NOT SHOW `O(n)` AT FRAME 0
The learner must first feel the natural doubt:

```text
for loop
   └── while loop

O(n²) ?
```

Only after the start-check proof do we derive linear work.

---

## 2. THE COMPLEXITY PROOF MUST COME FROM THE TRACE GEOMETRY

Do not merely write:
```text
O(n) + O(n) + O(n) = O(n)
```

The visual proof must first establish:

1. only real sequence starts launch the while loop
2. middle values do not launch it
3. each sequence island is walked once
4. therefore all forward walks together touch only linear-many sequence positions
5. building the set is expected O(n)
6. checking every unique value as a potential start is expected O(n)
7. all forward walks together are O(n)
8. combine them

---

## 3. ONE IDEA PER FRAME

When showing a skipped candidate:
1. predecessor relation appears
2. launch stem tries to grow
3. launch stem folds into SKIP
4. only then move to the next candidate

When proving a sequence is walked once:
1. show the real launcher
2. draw one runner
3. then introduce the hypothetical repeated runners
4. then cancel them

Never perform all four simultaneously.

---

## 4. BIG-O REVEALS ONLY WHEN SPOKEN

Strict reveal anchors:

```text
F256  O(n²)?
F1951 building set → O(n)
F2154 checking starts → O(n)
F2329 all forward walks → O(n)
F2438 O(n) in total
F2582 final expected time → O(n)
F2649 extra space → O(n)
F2846 brute → O(n³)
F2961 sort+scan → O(n log n)
F3130 optimal → expected O(n)
```

No Big-O text before those frames.

---

## 5. ROUGHCURVE APPEARS ONLY AFTER EACH COMPLEXITY IS SPOKEN

Final comparison graph rules:
- brute cubic curve starts only after F2846
- sort curve starts only after F2961
- optimal linear curve starts only after F3130
- old curves dim as newer approach becomes active
- optimal linear curve remains strongest at the end

---

## 6. NO CODE-EDITOR REPLAY

Scene11 code can appear only as a **faint structural memory** for the initial nested-loop question and the final start-check insight.

Do not re-type code.
Do not explain implementation again.

This is a complexity proof scene.

---

# 🧠 SIGNATURE VISUAL SYSTEM — “SEQUENCE OWNERSHIP LEDGER”

The core unique visual for Scene12 is not a table.

Each real sequence becomes a **chalk ownership ribbon**:

```text
START PAD
   ↓
-1 ━ 0 ━ 1 ━ 2 ━ 3 ━ 4
```

Every node is stamped/touched **once** by its real run.

Skipped values may have a predecessor-link, but they never create a second ownership ribbon.

For the master unique values:

```text
RUN A: -1 → 0 → 1 → 2 → 3 → 4
RUN B: 6
RUN C: 8 → 9 → 10 → 11
```

These three ribbons become the proof that the while-loop work across the whole set is not `n` per outer-loop iteration.

---

# 🧬 MASTER MORPH STORY

```text
Scene11 optimal code
        ↓
for-loop bracket
        ↓
nested while-loop bracket
        ↓
O(n²) ?
        ↓
looks plausible
        ↓
NO
        ↓
START CHECK highlighted

longest chain appears:
-1 0 1 2 3 4
        ↓
six possible launch stems
        ↓
only -1 survives
        ↓
0,1,2,3,4 predecessor links fold their launch stems into SKIP
        ↓
one runner sweeps the six-node chain once
        ↓
six hypothetical runners try to fan out
        ↓
collapse to ONE WALK

8 9 10 11
        ↓
only 8 launches
        ↓
9,10,11 fold to SKIP

all sequence islands
        ↓
ownership ribbon touches each real sequence value once
        ↓
TOUCH LEDGER

BUILD SET        n
START CHECKS     n
FORWARD WALKS   ≤ n
        ↓
expected O(n)

space:
HASH SET stores n unique values
        ↓
O(n)

journey comparison:
tangled brute search web        O(n³)
ordering lattice + scan rail    O(n log n)
Hash Field + real starts        expected O(n)
        ↓
three RoughCurves
        ↓
START CHECK becomes protection gate
        ↓
ghost repeated walks hit gate and fold into SKIP
```

---

# 📐 Layout Specifications — 1920×1080

## Top badge
```text
COMPLEXITY · WHY NOT n²?
y = 28..70
```

## Hero stage
```text
x = center
y = 285..610
```

Used for:
- nested-loop structure
- sequence chains
- ownership ribbons
- work ledger
- final comparison paths

## Complexity / formula callout
```text
y = 640..790
```

Use for:
- `O(n²)?`
- `ONE WALK`
- work ledger collapse
- Time / Space
- approach complexity labels

## Comparison graph
```text
x = 1180..1760
y = 315..700
```
Only appears in final journey comparison act.

## Captions safe zone
```text
y = 960..1040
```

---

# 🎨 Semantic Motion States

- nested-loop doubt → `theme.pivot`
- false n² hypothesis → `theme.warn`
- predecessor links / membership relation → `theme.cyan`
- valid START / real runner → `theme.good`
- skipped launcher → `theme.purple` / `theme.chalkDim`
- completed ownership ribbon → good at reduced opacity
- old approaches in comparison → dim/warn
- optimal complexity → strongest good/cyan

---

# ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frames | Spoken Beat | Visual Story |
|---|---:|---|---|
| 0 | F0–F447 | nested loops → “is this n²?” → no → reason is start check | Scene11 code geometry morphs into nested loop brackets; `O(n²)?` is created then rejected; start-check gate becomes hero |
| 1 | F461–F1351 | longest chain -1..4; only -1 launches | build chain word-sync; predecessor links reject 0..4; one runner sweeps six values; six hypothetical walks collapse to one |
| 2 | F1374–F1890 | same for 8..11; only8 launches; global forward-touch idea | second island proof; 9/10/11 skip; all real runs morph into sequence ownership ribbons |
| 3 | F1910–F2716 | formal time/space derivation | build-set n + start-check n + total-walk n; reject n-per-number; collapse to expected O(n); derive O(n) space |
| 4 | F2733–F3158 | compare brute, sorting, HashSet | three approach journeys rebuild sequentially; RoughCurve overlay draws cubic, nlogn, linear only when spoken |
| 5 | F3173–F3391 | why start check matters | code-line memory morphs into protection gate; ghost repeated walkers are blocked/folded into SKIP |

---

# ACT 0 — THE NESTED-LOOP TRAP
## F0–F447

**Narration:**  
“Now there is one question I really want you to ask. We have a for loop, and inside it, we have a while loop. So is this O of n squared? It looks like that at first, but no. And the reason is the start check.”

---

## F0–F88 — “one question I really want you to ask”
Start from Scene11 final frame:
- full optimal code visible
- predecessor condition strongest
- right Predecessor Gate present

### F0–F21 — “Now there is one”
- code starts receding to ~45% opacity
- right Predecessor Gate fades to ~20%
- optical center clears

### F21–F41 — “question”
- a large rough question arc draws center stage using `RoughLine`
- no text answer

### F41–F78 — “I really want you to”
- code lines reduce to only two structural lines:
```python
for num in num_set:
    while current + 1 in num_set:
```
- do not retype; extract them from existing editor by fading all other lines

### F78–F88 — “ask.”
- question arc settles above these two lines
- tiny:
  `LOOKS NESTED...`
appears

### F88–F100 — 12f pause
Let student inspect the nested structure.

---

## F100–F130 — “We have a for loop”
- isolate `for num in num_set:`
- `RoughBox` / bracket draws around outer loop
- label left:
  `FOR`

### F130–F146 — 16f pause
- outer bracket holds
- no while bracket yet

---

## F146–F173 — “and inside it,”
- the while line shifts visually 34px inward
- draw a short vertical nesting connector

### F173–F187 — 14f pause
- prepare inner bracket

---

## F187–F218 — “we have a while loop.”
- draw second smaller nested bracket around:
```python
while current + 1 in num_set:
```
- label:
  `WHILE`

The stage now unmistakably shows:
```text
FOR
 └── WHILE
```

### F218–F239 — 21f pause
No Big-O yet.
Let the visual trigger the learner’s misconception naturally.

---

## F239–F284 — “So is this O of n squared?”
### F239–F256 — “So is this”
- the two nested brackets slide toward center
- multiplication symbol `×` begins faintly between them

### F256 — spoken “O”
Begin mono formula:
```text
O(
```

### F263–F284 — “of n squared?”
Complete:
```text
O(n²) ?
```

- `?` should be large/pivot, not verdict red
- no strike yet

### F284–F301 — 17f pause
Hold the plausible wrong model.

---

## F301–F377 — “It looks like that at first, but no.”
### F301–F347 — “It looks like that at first”
- draw a faint square work-grid behind `O(n²)?`
- outer-loop vertical axis `n`
- hypothetical inner-loop horizontal axis `n`
- this is the **wrong model** center stage
- do not show correct model beside it yet

### F347–F354 short pause

### F354–F365 — “but”
- wrong grid stops growing

### F365–F377 — “no.”
- use `RoughLine` strike through only the `n × n` assumption
- write progress 0→1 over 18–20f, extending slightly into pause
- micro `ChalkDust` at strike end
- do not erase nested loops themselves

### F377–F392 — 15f pause
Wrong grid fades to 15%.
Question becomes:
```text
WHY NOT?
```

---

## F392–F447 — “And the reason is the start check.”
### F392–F419 — “And the reason is”
- the nested-loop structure slides left ~180px
- predecessor condition line from Scene11 fades back in center:
```python
if num - 1 not in num_set:
```

### F419–F430 — “the”
- condition underline starts drawing

### F430–F447 — transcript “star check” / intended START CHECK
- visual label writes:
```text
START CHECK
```
- code line morphs into the familiar Predecessor Gate:
```text
[x - 1 ?]  ←  [x]
```
- no complexity answer yet

### F447–F461 — 14f pause
Hold:
```text
START CHECK
```
as the mechanism that will explain the nested-loop cost.

---

# ACT 1 — LONGEST CHAIN: ONE LAUNCH, NOT SIX
## F461–F1351

**Narration:**  
“Take our longest chain, minus 1, 0, 1, 2, 3, 4. Which value launches the while loop? Only minus 1. 0 does not. Because minus 1 exists, 1 does not. Because 0 exists, 2 does not. Because 1 exists, 3 does not. Because 2 exists, 4 does not. Because 3 exists. So this 6 value chain is walked forward once, not 6 times.”

---

## F461–F501 — “Take our longest chain”
- Predecessor Gate shrinks upward
- center stage draws six fixed empty sequence sockets
- no values yet
- one neutral baseline runs beneath sockets
- label:
  `LONGEST CHAIN`

### F501–F516 — 15f pause
Prepare first socket.

---

# Word-synced chain construction

### F516–F542 — “minus 1”
write `-1` in slot0

### F553–F567 — “0”
slot1

### F583–F598 — “1”
slot2

### F605–F620 — “2”
slot3

### F629–F646 — “3”
slot4

### F655–F667 — “4”
slot5

Fixed geometry:
```text
[-1] [0] [1] [2] [3] [4]
```

No active sequence color yet.

### F667–F683 — 16f pause
- six faint potential START stems appear beneath all six values
- all equal / unresolved

This is the right visual question state.

---

## F683–F736 — “Which value launches the while loop?”
### F683–F713 — “Which value launches”
- potential start stems pulse one-by-one
- do not resolve

### F713–F736 — “the while loop?”
- small while-loop runner icon/mark appears below the stems
- six faint Bezier guide routes suggest six possible launches
- nothing moves yet

### F736–F751 — 15f pause
Hold six possible launchers.

---

## F751–F779 — “Only minus 1.”
- `-1` stem morphs into a real `START` pad
- other five stems remain faint/unresolved
- `-1` gets `theme.good`
- tiny runner bead appears at -1
- do not traverse chain yet

### F779–F792 — 13f pause

---

# Reject 0
## F792–F875
Narration:
“0 does not. Because minus 1 exists,”

### F792–F821 — “0 does not.”
- candidate focus moves to0
- 0’s start stem begins to grow
- then pauses before becoming START

### F821–F856 — “Because minus 1”
- draw predecessor back-link:
```text
-1 ──► 0
```
in `theme.cyan`

### F856–F875 — “exists,”
- -1 node pulses
- 0’s start stem `SvgMorph`s sideways into a small `SKIP` rail
- label under0:
  `SKIP`

State first, then fold.

### F875–F886 — 11f pause

---

# Reject 1
## F886–F957
Narration:
“1 does not. Because 0 exists,”

### F886–F908 — “1 does not.”
- candidate focus→1
- stem begins

### F921–F937 — “Because 0”
- predecessor link:
```text
0 ──► 1
```

### F937–F957 — “exists,”
- 0 pulse
- stem folds to SKIP

### F957–F969 — 12f pause

---

# Reject 2
## F969–F1034
Narration:
“2 does not. Because 1 exists,”

### F969–F991
candidate2 potential stem

### F1004–F1016
link1→2

### F1016–F1034
1 pulse + 2 stem folds to SKIP

### F1034–F1045 — 11f pause

---

# Reject 3
## F1045–F1116
Narration:
“3 does not. Because 2 exists,”

### F1045–F1070
candidate3

### F1084–F1097
link2→3

### F1097–F1116
stem folds to SKIP

### F1116–F1130 — 14f pause

---

# Reject 4
## F1130–F1208
Narration:
“4 does not. Because 3 exists.”

### F1130–F1159
candidate4

### F1172–F1189
link3→4

### F1189–F1208
3 pulse
- 4 stem folds into SKIP

### F1208–F1221 — 13f pause

Now stage reads visually:

```text
-1      0      1      2      3      4
START   SKIP   SKIP   SKIP   SKIP   SKIP
```

Do not use a table; labels sit directly beneath nodes.

---

# ONE actual forward walk
## F1221–F1299
Narration:
“So this 6 value chain is walked forward once,”

### F1221–F1252 — “So this 6 value chain”
- dim all SKIP labels to 30%
- START -1 remains full
- runner bead wakes

### F1261–F1299 — “is walked forward once”
Draw one continuous mint runner path:
```text
-1 → 0 → 1 → 2 → 3 → 4
```

Timing:
- runner moves through each segment sequentially
- path writes behind it
- visited node gets one small ownership notch
- each node is touched exactly once in this visual sweep

At F1299:
- runner stops at4
- one brace draws under all six:
  `ONE REAL WALK`

---

## F1299–F1311 — 12f pause
Now introduce the hypothetical wrong model.

---

# “not 6 times”
## F1311–F1351

### F1311–F1319 — “not”
- beneath the real walk, five additional ghost runner lanes begin fanning downward from0,1,2,3,4
- they are faint purple/chalkDim
- do not let them fully draw

### F1319–F1333 — “6”
- a large ghost:
```text
×6 ?
```
appears beside the fan

### F1333–F1351 — “times.”
- draw `RoughLine` strike through `×6`
- simultaneously but sequentially after strike begins:
  ghost runner lanes reverse/retract into their SKIP stems
- only the one real runner remains

End callout:
```text
WALKED ONCE
```

### F1351–F1374 — 23f pause
Let this proof breathe.
Completed six-node ownership ribbon moves upward-left as historical evidence.

---

# ACT 2 — SECOND ISLAND + GLOBAL “OWNED ONCE” PROOF
## F1374–F1890

---

# Build 8→9→10→11
## F1374–F1475
Narration:
“Same for 8, 9, 10, 11.”

### F1374–F1389 — “Same for”
- create four fixed empty sockets center stage

### F1389–F1404 — `8`
slot0 writes8

### F1410–F1430 — `9`
slot1

### F1439–F1453 — `10`
slot2

### F1462–F1475 — `11`
slot3

No START state yet.

### F1475–F1511 — 36f pause
Use full pause:
- four potential start stems appear
- predecessor-link sockets prepare
- previous -1..4 ownership ribbon remains faint above-left

---

# Only8 launches
## F1511–F1558
Narration:
“Only 8 launches the walk.”

### F1511–F1530 — “Only 8”
- 8 becomes START
- runner bead appears under8

### F1530–F1558 — “launches the walk.”
- one mint path begins from8
- moves to9 and stops there for now
- do not yet traverse all nodes; the next narration is about skips

---

# 9,10,11 skipped as starts
## F1574–F1654
Narration:
“9, 10, and 11 are skipped as starts.”

### F1574–F1585 — `9`
- predecessor link8→9
- 9 start stem folds to SKIP

### F1585–F1597 — `10`
- predecessor link9→10
- 10 stem folds

### F1606–F1619 — `11`
- predecessor link10→11
- 11 stem folds

### F1619–F1654 — “are skipped as starts.”
- shared rough brace draws under9/10/11:
  `NO NEW WALK`
- then runner8 completes:
```text
8 → 9 → 10 → 11
```
after the skip state is established
- one ownership notch per node

### F1654–F1707
Narration:
“Across the whole set,”

- move the two proven ribbons into a three-island composition:
```text
-1→0→1→2→3→4      6      8→9→10→11
```
- 6 appears as singleton island with a START pad and one ownership notch
- no new trace is performed
- Chalk Hash Field can appear faintly above as source context

### F1707–F1733 — 26f pause
Prepare a global touch sweep.

---

## F1733–F1775 — “the forward walking touches.”
- a mint **ownership sweep** travels across the three real runs
- each unique value node receives one small `✓`/notch only once
- CountUp at side:
```text
OWNED VALUES
0 → 11
```
Use `CountUp` restrained.

Do not call this exact loop iterations; label it:
```text
SEQUENCE OWNERSHIP
```

---

## F1775–F1800 — 25f pause
Hold all 11 unique values with one ownership mark each.

---

## F1800–F1890
Narration:
“The sequence values only as part of their real run.”

### F1800–F1831 — “The sequence values”
- ownership marks brighten across all three islands

### F1831–F1868 — “only as part of their”
- predecessor links of skipped nodes appear faintly
- no duplicate ownership marks appear

### F1868–F1890 — “real run.”
- each island gets one single rough brace:
  `ONE OWNER`
- runner histories settle to low opacity

### F1890–F1910 — 20f pause
The three islands begin compressing into the formal work ledger.

---

# ACT 3 — FORMAL TIME + SPACE DERIVATION
## F1910–F2716

The proof now becomes formal.

Use one **three-lane work ledger**, not generic cards.

```text
BUILD SET
START CHECKS
FORWARD WALKS
```

Each lane is a RoughLine whose length represents linear work.

---

# Lane 1 — Build the set
## F1910–F2017
Narration:
“So building the set takes O of n expected time.”

### F1910–F1938 — “So building the set”
- three-island visualization shrinks upward
- raw n-value input dots/clones appear in one line
- one by one, they Bezier-flow through hash portal into a compact Chalk Hash Field
- lane label writes:
  `BUILD SET`

### F1938–F1951 — “takes”
- BUILD SET work line extends across a width labeled `n items`

### F1951 — spoken `O`
Begin complexity:
```text
O(
```

### F1967–F1983 — “of n”
complete:
```text
O(n)
```

### F1983–F2017 — “expected time.”
- append small:
  `expected`
- do not glow dramatically
- first ledger lane locks:

```text
BUILD SET      n      expected O(n)
```

### F2017–F2033 — 16f pause

---

# Lane 2 — Check each unique number as possible start
## F2033–F2211

### F2033–F2083 — “Checking each unique number”
- 11 generic/compact set pebbles appear
- one candidate cursor touches each pebble once
- no while walk

### F2083–F2143 — “as a possible start”
- for each touched pebble, show one tiny predecessor-gate flash:
```text
x-1 ?
```
- result details need not resolve individually
- point is exactly one start check per unique value
- second ledger lane grows as cursor moves:
  `START CHECKS`

### F2143–F2154 — “takes”
- cursor reaches final pebble

### F2154 — spoken `O`
begin:
```text
O(
```

### F2168–F2183 — “of n”
complete:
```text
O(n)
```

### F2183–F2211 — “expected time.”
append:
`expected`

Ledger now:
```text
BUILD SET       n      expected O(n)
START CHECKS    n      expected O(n)
```

### F2211–F2226 — 15f pause
Third lane appears empty.

---

# Lane 3 — All forward walks together
## F2226–F2361
Narration:
“And all forward walks together also add up to O of n.”

### F2226–F2262 — “And all forward walks”
- restore the three sequence ownership ribbons:
```text
-1→0→1→2→3→4
6
8→9→10→11
```
- place them end-to-end visually, not numerically:
```text
[run A][run B][run C]
```

### F2262–F2311 — “together also”
- their three mint path lengths slide toward each other and concatenate into one long work ribbon
- label:
  `ALL REAL WALKS`

### F2311–F2329 — “add up to”
- ribbon gets bracket:
  `≤ n sequence values`

### F2329 — spoken `O`
begin:
```text
O(
```

### F2340–F2361 — “of n.”
complete:
```text
O(n)
```

Third ledger:
```text
FORWARD WALKS   ≤ n      O(n)
```

---

# Reject “n work for every number”
## F2368–F2424
Narration:
“Not O of n for every number.”

### F2368–F2396 — “Not O of n”
- a wrong-model formula appears center:
```text
n candidates × n walk
```
- beneath it:
```text
O(n²)
```
small/faint

### F2396–F2424 — “for every number.”
- draw a 20f `RoughLine` strike across `× n walk for each`
- behind it, many ghost runner ribbons try to duplicate
- they retract into predecessor SKIP folds

No new correct formula yet.

### F2424–F2438 — 14f pause
Wrong model dims.

---

# “O(n) in total”
## F2438–F2480

### F2438 — spoken `O`
- three ledger lanes slide toward center
- write:
```text
n  +  n  +  ≤n
```

### F2447–F2463 — “of n”
- formula morphs:
```text
≤ 3n
```

### F2463–F2480 — “in total.”
- `SvgMorph`:
```text
≤ 3n
```
→
```text
O(n)
```

Label:
```text
TOTAL EXPECTED WORK
```

Do not show time+space split yet.

---

# Final expected time and space
## F2480–F2716
Narration:
“So the final expected time complexity is O of n extra space is O of n for the hash set.”

### F2480–F2552 — “So the final expected time complexity is”
- ledger compresses into one horizontal **TIME rail**
- label:
  `EXPECTED TIME`

No value yet.

### F2552–F2582 — long “is”
- empty formula socket pulses once
- use the long timing to separate setup from reveal

### F2582 — spoken `O`
start:
```text
O(
```

### F2596–F2609 — “of n”
complete:
```text
O(n)
```

At completion:
- one small linear `RoughCurve` may draw in a tiny graph inset
- this is not the final comparison graph yet
- label:
  `expected`

### F2609–F2632 — “extra space”
- second horizontal rail appears beneath:
  `EXTRA SPACE`
- Chalk Hash Field outline reappears at right with n generic pebbles

### F2632–F2649 — “is”
- bracket begins around stored pebbles

### F2649 — spoken `O`
start:
```text
O(
```

### F2664–F2684 — “of n”
complete:
```text
O(n)
```

### F2684–F2716 — “for the hash set.”
- bracket completes around Hash Field
- label:
  `stores up to n unique values`

Final formal frame:
```text
EXPECTED TIME   O(n)
EXTRA SPACE     O(n)
```

### F2716–F2733 — 17f pause
Formal rails shrink upward-left.
Stage clears for full journey comparison.

---

# ACT 4 — COMPARE THE JOURNEY
## F2733–F3158

This is the multi-curve complexity payoff.

No generic summary cards.
Use **three animated journey motifs** that live on the same chalkboard.

---

## F2733–F2767 — “Now compare the journey.”
- draw one horizontal baseline with three unlabeled stops
- small graph axes appear on right
- no curves yet

Left/middle/right journey areas:
1. brute search web
2. sorting lattice + scan rail
3. Hash Field + real starts

---

# Brute
## F2785–F2884
Narration:
“Repeated list searching, worst case O of n cubed.”

### F2785–F2814 — “Repeated list searching”
- rebuild a compact version of Scene03 repeated search:
  same unsorted mini array
  3–4 overlapping scan trails
- trails accumulate in warn/purple history

### F2814–F2829 pause
- work web thickens

### F2829–F2846 — “worst case”
- label:
  `BRUTE`

### F2846 — spoken `O`
begin:
```text
O(
```

### F2858–F2884 — “of n cubed.”
complete:
```text
O(n³)
```

Only after formula appears:
- `RoughCurve` draws cubic curve on comparison graph
- curve starts left and bends sharply upward
- label `brute`
- keep warn/dim

---

# Sort + Scan
## F2902–F3008
Narration:
“Sorting and scanning. O of n log n.”

### F2902–F2940
- brute motif slides left and dims
- center motif:
  values Bezier-cross briefly through an ordering lattice
  then settle onto one straight scan rail
- label:
  `SORT + SCAN`

### F2940–F2961 — 21f pause
- ordering lattice holds

### F2961 — spoken `O`
begin:
```text
O(
```

### F2969–F3008 — “of n log n.”
complete:
```text
O(n log n)
```

After formula:
- second `RoughCurve` draws on same graph
- lies between linear and cubic
- brute curve dims further

---

# HashSet + real starts
## F3016–F3158
Narration:
“Hash set plus real sequence starts. Expected O of n.”

### F3016–F3055 — “Hash set plus real”
- center/optimal motif draws:
  unordered Chalk Hash Field
  predecessor gate
  one START pad

### F3055–F3085 — “sequence starts.”
- three compact real-run ribbons appear:
```text
-1…4    6    8…11
```
- only one start pad per ribbon
- no repeated launchers

### F3085–F3115 — 30f pause
Use full pause:
- optimal motif moves slightly forward visually
- graph has empty linear slot
- old curves dim

### F3115–F3130 — “Expected”
- label:
  `EXPECTED`

### F3130 — spoken `O`
start:
```text
O(
```

### F3143–F3158 — “of n.”
complete:
```text
O(n)
```

After formula:
- third `RoughCurve` draws as a straight linear curve
- use strongest `theme.good`
- cubic and nlogn remain visible but dim

Final comparison visual:
```text
BRUTE           SORT+SCAN          HASHSET+STARTS
O(n³)           O(n log n)         expected O(n)
```
These should be labels under journey motifs, not generic rectangular cards.

---

# ACT 5 — WHY THE START CHECK MATTERS
## F3173–F3391

**Narration:**  
“That is why the start check matters so much. It is not a small code trick. It is what protects us from repeated walk.”

This is the conceptual final statement.

---

## F3173–F3246 — “That is why the start check matters so much.”
### F3173–F3198
- comparison graph dims to 20%
- optimal linear curve remains faint
- predecessor condition reappears center:
```python
num - 1 not in num_set
```

### F3198–F3212 — “start check”
- code text `SvgMorph`s into:
```text
[x-1 ?]  ←  [x]
```
Predecessor Gate

### F3212–F3246 — “matters so much.”
- gate enlarges to hero size
- behind it appear 3 real sequence islands
- each island has one valid launch pad only

No repeated walkers yet.

---

## F3246–F3263 — 17f pause
- code text is gone
- pure concept remains

---

## F3263–F3313 — “It is not a small code trick.”
### F3263–F3295 — “It is not a small code”
- small ghost code line appears above gate

### F3295–F3313 — “trick.”
- ghost code line shrinks/fades
- gate remains large
- label morphs:
```text
CODE TRICK
```
→
```text
ALGORITHM GUARD
```
Avoid a huge stamp; keep it chalk-like.

---

## F3313–F3392 — “It is what protects us from repeated walk.”
This is the final premium morph.

### F3313–F3340 — “It is what”
- 5–6 faint ghost START stems appear on middle values of the sequence islands

### F3340–F3361 — “protects us”
- Predecessor Gate emits thin cyan predecessor links to those middle values
- each ghost START stem is intercepted

### F3361–F3383 — “from repeated”
- intercepted stems bend sideways via `SvgMorph`
- become `SKIP` rails
- multiple ghost runners that were about to launch dissolve before moving

### F3383–F3392 — “walk.”
- only one real runner per island remains
- final chalk sentence writes:
```text
START CHECK → ONE WALK PER REAL RUN
```

Below, small:
```text
expected O(n)
```
allowed because complexity has already been fully derived.

Final visual holds:
- three real run ribbons
- one launch per run
- skipped middle values
- no repeated walk

This is the clean handoff into Scene13 recap/outro.

---

# 📊 WORK LEDGER SPECIFICATION

The work ledger is one continuous visual, not cards.

Fixed y positions:

```text
BUILD SET       y≈410
START CHECKS    y≈505
FORWARD WALKS   y≈600
```

Each lane:
- left label with `ChalkText`
- middle rough work line
- right complexity socket

Before spoken Big-O:
```text
BUILD SET       ━━━━━━━━━━━      ?
```

After reveal:
```text
BUILD SET       ━━━━━━━━━━━      expected O(n)
```

At total:
- all three rough lines slide together
- their endpoints align
- labels compress into:
```text
n + n + ≤n
```
- morph:
```text
≤3n → O(n)
```

No grid.

---

# 📈 FINAL COMPARISON GRAPH SPECIFICATION

Graph appears only in Act4.

Axes:
- x-axis: input size `n`
- y-axis: work
- no tick-number clutter

Curves:
1. `n³` — warn/dim
2. `n log n` — cyan/pivot but dim after optimal
3. `n` — good, strongest

Use `RoughCurve`.

Reveal:
- cubic only after F2846
- nlogn only after F2961
- linear only after F3130

Never pre-render all curves.

---

# 🔢 COUNTUP / OPERATION VISUALS

## Sequence ownership counter
During F1733–F1775:
```text
OWNED VALUES
0 → 11
```

Meaning:
every unique value belongs to exactly one real sequence island.

Do not call it exact CPU operations.

## Work ledger
Use line-length growth instead of arbitrary benchmark numbers.

This keeps proof grounded in the algorithm rather than inventing unrelated inputs.

---

# 🧩 Component Mapping

| Meaning | Kit primitive |
|---|---|
| nested loop structure | extracted code text + `RoughBox` / `RoughLine` |
| wrong n² grid | custom SVG rough grid |
| decisive “NO” strike | `RoughLine` + micro `ChalkDust` |
| chain nodes | `RoughBox` |
| predecessor back-links | `RoughLine` |
| potential START → SKIP | `SvgMorph` |
| real runner | SVG stroke progress / `RoughLine` |
| ghost runner cancellation | reverse stroke progress |
| ownership ribbons | `RoughLine` |
| ownership count | `CountUp` |
| work ledger | `RoughLine` + `ChalkText` |
| total `≤3n → O(n)` | `SvgMorph` / text morph |
| complexity curves | `RoughCurve` |
| HashSet motif | locked Chalk Hash Field |
| final protection gate | Predecessor Gate + `SvgMorph` |

---

# ✨ Premium / Unique Moments — EXACTLY FIVE

## 1. Nested-Loop Wrong Model
The real Scene11 `for` and `while` lines extract into nested chalk brackets and grow a believable `n × n` work grid before `O(n²)?` is decisively struck.

## 2. Six Possible Launches → One Real Walk
All six values of `-1..4` initially own potential START stems; predecessor links fold five of them into SKIP, leaving only -1 to launch one mint runner.

## 3. “Not 6 Times” Ghost-Fan Collapse
Five hypothetical runner lanes begin fanning out from 0..4, then reverse back into their SKIP stems while the one real run remains.

## 4. Sequence Ownership Ledger
The three real sequence islands become one ownership proof and then morph into `BUILD SET / START CHECKS / FORWARD WALKS`, which collapse from `n + n + ≤n` into `expected O(n)`.

## 5. Start Check Protection Gate
At the end, the predecessor condition morphs into a physical algorithm guard that intercepts ghost repeated launches and folds them into SKIP before they can move.

No additional hero effects.

---

# 🚫 Anti-Slop / Anti-Generic Rules

Do **not**:
1. show O(n) at frame0
2. instantly say nested loops are fine without proof
3. pre-render all sequence islands before narration
4. show all predecessor links simultaneously before spoken values
5. use generic complexity cards
6. use a dashboard with three boxes
7. draw all three graph curves at once
8. use a benchmark number not supported by the narration
9. show HashSet as a grid/table
10. imply HashSet is sorted
11. animate six real walks and then claim one walk
12. duplicate node ownership marks
13. count skipped middle values as new sequence launches
14. show final complexity before formal derivation
15. show space O(n) before narration
16. use new colors/background
17. update multiple unrelated states in one frame
18. ignore pauses >300ms
19. hard-cut between proof and comparison
20. cover caption safe zone

---

# ✅ Critical Review Frames

### F0
Scene11 final code continuity.

### F29
question arc forming.

### F100
outer FOR bracket.

### F187
inner WHILE bracket.

### F239
nested-loop doubt centered.

### F256
`O(` begins.

### F272
`O(n²)?` visible.

### F301
wrong n×n model grid.

### F365
decisive NO begins.

### F430
START CHECK reveal.

### F461
longest-chain shell.

### F516
-1 writes.

### F553
0 writes.

### F583
1 writes.

### F605
2 writes.

### F629
3 writes.

### F655
4 writes.

### F683
six possible launch stems.

### F751
only -1 START.

### F792
0 candidate rejection begins.

### F838
predecessor -1 link.

### F886
1 candidate.

### F928
predecessor0.

### F969
2 candidate.

### F1010
predecessor1.

### F1045
3 candidate.

### F1091
predecessor2.

### F1130
4 candidate.

### F1180
predecessor3.

### F1221
one real runner proof begins.

### F1288
one full six-node walk complete.

### F1311
ghost six-walk model begins.

### F1333
“not 6 times” collapse.

### F1374
second island shell.

### F1389
8 writes.

### F1410
9 writes.

### F1439
10 writes.

### F1462
11 writes.

### F1511
only8 launch.

### F1574
9 skip.

### F1585
10 skip.

### F1610
11 skip.

### F1654
global islands stage.

### F1733
ownership sweep.

### F1759
ownership count rolling.

### F1800
owned-once proof.

### F1910
work ledger begins.

### F1951
build-set Big-O reveal.

### F2017
first lane locked.

### F2033
start-check lane begins.

### F2154
start-check O(n) reveal.

### F2226
all-walk lane begins.

### F2329
forward-walk O(n) reveal.

### F2368
wrong n-per-number model.

### F2396
strike n×n assumption.

### F2438
total O(n) collapse starts.

### F2471
O(n) total resolved.

### F2480
final time setup.

### F2582
expected time O(n) reveal.

### F2609
space lane begins.

### F2649
space O(n) reveal.

### F2716
time+space final frame.

### F2733
journey comparison stage.

### F2785
brute motif.

### F2846
brute O(n³) reveal.

### F2870
cubic curve drawing.

### F2902
sorting motif.

### F2961
n log n reveal.

### F2981
nlogn curve.

### F3016
HashSet motif.

### F3115
optimal expected setup.

### F3130
optimal O(n) reveal.

### F3149
linear curve.

### F3173
start-check conclusion begins.

### F3198
condition morphs into gate.

### F3263
“not a small code trick.”

### F3313
protection demonstration starts.

### F3369
repeated ghost launches intercepted.

### F3383
only real walks remain.

### F3391
final Scene13 handoff.

---

# ✅ Acceptance Checklist

- [ ] exactly **3392 frames**
- [ ] exact sync JSON frames used
- [ ] `@dsa/kit` consistency lock followed
- [ ] nested loop misconception appears before correct answer
- [ ] `O(n²)?` revealed only when spoken
- [ ] wrong-model grid is center stage first
- [ ] strike takes 15–25f
- [ ] START CHECK becomes reason only after “no”
- [ ] longest chain values appear word-synced
- [ ] six possible launches visible before answer
- [ ] only -1 launches
- [ ] 0 rejected because -1 exists
- [ ] 1 rejected because0 exists
- [ ] 2 rejected because1 exists
- [ ] 3 rejected because2 exists
- [ ] 4 rejected because3 exists
- [ ] six-node chain walks once
- [ ] hypothetical six walks visibly retract
- [ ] 8/9/10/11 appear word-synced
- [ ] only8 launches
- [ ] 9/10/11 skipped as starts
- [ ] global sequence ownership shown
- [ ] BUILD SET expected O(n) only after F1951
- [ ] START CHECKS expected O(n) only after F2154
- [ ] FORWARD WALKS O(n) only after F2329
- [ ] “not O(n) for every number” explicitly visualized
- [ ] `n+n+≤n → ≤3n → O(n)` morph shown
- [ ] final expected time O(n) only after F2582
- [ ] extra space O(n) only after F2649
- [ ] space visually tied to HashSet storage
- [ ] brute O(n³) comparison only after F2846
- [ ] sort+scan O(n log n) only after F2961
- [ ] optimal expected O(n) only after F3130
- [ ] RoughCurves draw only after corresponding complexity is spoken
- [ ] optimal curve strongest
- [ ] final start-check protection gate blocks repeated ghost launches
- [ ] no full code re-explanation
- [ ] no generic cards/dashboard
- [ ] main hero y≈300..600
- [ ] captions safe zone clear
- [ ] no layout jitter

---

# Final Scene 12 Visual Story — One Line

**Scene11’s `for` and `while` lines detach into nested chalk brackets and deliberately create the believable `O(n²)?` misconception, complete with a temporary n-by-n wrong-model grid, before a drawn NO strike leaves the START CHECK as the unexplained reason; the longest chain `-1,0,1,2,3,4` then builds word-by-word with six potential launch stems, predecessor links fold `0,1,2,3,4` into SKIP so only `-1` launches one mint runner across the six nodes, and five hypothetical repeated runner lanes briefly fan out before reversing back into their skip stems on “not 6 times”; the same geometry proves only8 launches the `8,9,10,11` run, after which all three real sequence islands receive exactly one ownership mark per value and morph into a three-lane work ledger where BUILD SET becomes expected `O(n)`, START CHECKS become expected `O(n)`, and ALL FORWARD WALKS become `O(n)`, a fake `n × n` model is struck, and `n + n + ≤n` compresses through `≤3n` into total expected `O(n)` with `O(n)` HashSet space; the stage then transforms into the full journey comparison where repeated brute search draws the cubic curve only after `O(n³)` is spoken, sorting+scan draws the `n log n` curve only after its narration, and HashSet+real starts draws the glowing linear expected-`O(n)` curve last, before the predecessor condition morphs into a final protection gate that intercepts ghost repeated launches and folds them into SKIP — visually proving that the START CHECK is not a small code trick but the mechanism that guarantees one walk per real sequence run.**
