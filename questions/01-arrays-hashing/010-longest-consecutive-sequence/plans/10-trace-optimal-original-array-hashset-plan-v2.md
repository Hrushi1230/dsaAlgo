# Scene 10 · TRACE — OPTIMAL HASHSET / ORIGINAL-ARRAY DRY RUN · Animation Plan V2

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `10-trace-optimal.mp3` — **188.440 s** — **5653 frames** @ **30 fps**  
**Sync source**: new 429-word word-level sync  
**Goal**: Perform the optimal HashSet dry run from the **original array’s first-appearance order**, with the real HashSet remaining the main data structure on screen. Do **not** rearrange the values into a sorted number line. Every predecessor lookup and every forward lookup must visibly pass through the HashSet, so a student can understand exactly why a value becomes `START` or `SKIP`, why only three walks occur, and how `longest` changes from `0 → 4 → 6`.

---

# 🔒 DRY-RUN-FIRST VERIFICATION LOCK — NON-NEGOTIABLE

This plan was created only after independently re-running the algorithm on the exact testcase.

## Exact original input

```text
[8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0]
```

## HashSet contents

```text
{8, 1, 6, 3, 2, 4, 10, 9, 11, -1, 0}
```

Duplicate `2` is removed.

## Deterministic teaching dry-run order

Follow unique values by their **first appearance in the original array**:

```text
8 → 1 → 6 → 3 → 2 → 4 → 10 → 9 → 11 → -1 → 0
```

This order is a teaching dry-run order derived from the original input.  
Do **not** imply that a language/runtime HashSet guarantees this iteration order.

## Independently verified state trace

```text
8:
  predecessor 7 absent
  START
  walk 9 → 10 → 11
  12 absent
  length = 4
  longest = 4

1:
  predecessor 0 exists
  SKIP
  longest = 4

6:
  predecessor 5 absent
  START
  7 absent
  length = 1
  longest = 4

3:
  predecessor 2 exists
  SKIP

2:
  predecessor 1 exists
  SKIP

4:
  predecessor 3 exists
  SKIP

10:
  predecessor 9 exists
  SKIP

9:
  predecessor 8 exists
  SKIP

11:
  predecessor 10 exists
  SKIP

-1:
  predecessor -2 absent
  START
  walk 0 → 1 → 2 → 3 → 4
  5 absent
  length = 6
  longest = 6

0:
  predecessor -1 exists
  SKIP

FINAL LONGEST = 6
REAL STARTS = 8, 6, -1
```

No animation may contradict this verified trace.

---

# 🔒 @dsa/kit / VISUAL CONSISTENCY LOCK

Use the existing long-form course visual system only.

## Background
- `theme.boardBg`
- existing board vignette
- no new background
- no gradients
- no light Shorts design
- no SaaS-style cards

## Typography
- Patrick Hand for teaching labels
- SFMono / Consolas / Menlo for values, expressions, counters
- existing `fonts.ts`

## Semantic colors
Only project tokens:
- `theme.chalkText`
- `theme.chalkDim`
- `theme.pivot`
- `theme.good`
- `theme.warn`
- `theme.highlight`
- `theme.cyan`
- `theme.purple`

## Existing kit components first
Prefer:
- `ChalkText`
- `RoughLine`
- `RoughBox`
- `SvgMorph`
- `BezierFlight`
- `Shatter`
- `CountUp`
- `ChalkDust`
- `Captions`

Reuse the Scene09/Scene10 **Chalk Hash Field** visual language.  
Do not revert to a generic table, neat grid, database icon, or bucket diagram with invented bucket numbers.

---

# 🎯 PEDAGOGICAL PHILOSOPHY

## 1. THIS IS A REAL DRY RUN, NOT A SORTED TEACHING SHORTCUT

The original array must remain visible as the dry-run source.

The candidate cursor progresses:

```text
8 → 1 → 6 → 3 → 2 → 4 → 10 → 9 → 11 → -1 → 0
```

The second `2` remains visible in the original input but is visibly marked as the duplicate that did not create another HashSet node.

There is **no global sorted number line** in this scene.

---

## 2. HASHSET MUST FEEL LIKE THE ACTUAL ENGINE

The student should visually understand:

```text
candidate
   ↓
predecessor query
   ↓
HASH PORTAL
   ↓
direct membership result
   ↓
START or SKIP
```

For a true start:

```text
START
  ↓
next-value query
  ↓
HASH PORTAL
  ↓
YES → append to temporary sequence ribbon
NO  → stop
```

The HashSet is therefore not decorative.  
Almost every logical decision must visibly touch it.

---

## 3. DO NOT INVENT A HASH FUNCTION

We want a “hash-map-like” visual without lying.

Therefore:
- use an irregular fixed Hash Field
- use one hash portal
- use direct query pulses
- matching node lights immediately
- missing query returns a hollow echo

Do **not**:
- invent bucket indices
- show `% capacity`
- claim a specific hash result
- scan nodes one by one

---

## 4. ORIGINAL ARRAY = DRY-RUN NAVIGATION

The raw input becomes a persistent bottom **DRY RUN SOURCE** strip after the set is created.

Each unique first occurrence gets a status notch:

```text
PENDING → CANDIDATE → START / SKIP → DONE
```

The second `2` gets:
```text
DUP
```

and is never selected as another candidate.

This makes the iteration order visually obvious without narration having to announce an artificial order.

---

## 5. TEMPORARY SEQUENCE RIBBON ONLY FOR TRUE STARTS

Do not globally arrange all values into sequence order.

Instead, create a temporary local ribbon only when the current value is a true start.

For `8`:
```text
8 → 9 → 10 → 11
```

For `6`:
```text
6
```

For `-1`:
```text
-1 → 0 → 1 → 2 → 3 → 4
```

The ribbon grows only after successful HashSet lookups.

This preserves the unordered HashSet while still letting the student see the discovered sequence.

---

# 📐 LAYOUT SPECIFICATIONS — 1920×1080

## F0–F298 — raw array center-stage
Before HashSet construction:

```text
Top badge:     y = 28..70
Title:         y = 95..170
Raw array:     y = 360..525
Caption safe:  y = 960..1040
```

Raw array uses fixed slots. No auto-flex.

Suggested:
- 12 slots
- `94×98px`
- gap `16px`
- center aligned
- mono `44–48px`

---

## F313 onward — dry-run workspace

### Top badge
```text
OPTIMAL · FULL DRY RUN
y = 28..70
```

### Predecessor / lookup expression
```text
x = 660..1260
y = 105..205
```

Examples:
```text
8 - 1 = 7
1 - 1 = 0
-1 - 1 = -2
```

### Main HashSet hero
```text
x = 250..1670
y = 230..585
```

Label:
```text
HASH SET
```

One irregular rough enclosure.

### Hash portal
```text
x ≈ 255
y ≈ 400
```

Small rough circular ring, 2–3 radial chalk marks.

### Hash nodes
11 fixed absolute positions, intentionally unordered.

Suggested stable constellation:

```text
          [8]               [3]               [11]

 [10]             [-1]                [0]

          [2]               [6]

 [4]               [9]                 [1]
```

Do not place them numerically.

### Longest state
```text
x = 1570..1810
y = 100..205
```

Compact:
```text
LONGEST
0
```

No dashboard styling.

### Original array / dry-run source strip
```text
x = 160..1760
y = 650..790
```

Persistent after set creation.

### Temporary sequence ribbon
```text
x = 300..1620
y = 825..925
```

Only one active ribbon at a time.

### Captions
```text
y = 960..1040
```

---

# 🎨 STATE SEMANTICS

## Original source slot
`theme.chalkText`

## Duplicate source `2`
`theme.purple` / `theme.chalkDim`

## Current candidate
`theme.pivot`

## Hash query path
`theme.cyan`

## Found membership
`theme.good`

## Missing membership
`theme.warn`

## Start
`theme.good` + small pivot accent

## Skip
`theme.purple` or `theme.chalkDim`

## Active sequence ribbon
`theme.good`

## Longest update
`theme.highlight` with restrained good accent

---

# 🧬 MASTER VISUAL STORY

```text
ORIGINAL ARRAY
8 1 6 3 2 2 4 10 9 11 -1 0
          ↓
      HASH SET
          ↓
duplicate second 2 merges
          ↓
11 unique nodes remain
          ↓
raw array becomes DRY RUN SOURCE

candidate 8
  ↓ predecessor 7
  ↓ Hash lookup → NO
START
  ↓ 9 YES → 10 YES → 11 YES → 12 NO
sequence 8→9→10→11
length4
longest4

candidate 1
  ↓ predecessor0 → YES
SKIP

candidate6
  ↓ predecessor5 → NO
START
  ↓ 7 NO
length1
longest4

3 → predecessor2 → SKIP
2 → predecessor1 → SKIP
4 → predecessor3 → SKIP
10 → predecessor9 → SKIP
9 → predecessor8 → SKIP
11 → predecessor10 → SKIP

candidate -1
  ↓ predecessor -2 → NO
START
  ↓ 0 YES →1 YES →2 YES →3 YES →4 YES →5 NO
length6
longest6

candidate0
  ↓ predecessor -1 → YES
SKIP

proof:
only 8,6,-1 launched walks
all middle values were rejected by predecessor existence

NO SORTING
NO REPEATED LIST SCAN
        ↓
Scene11 code-editor guide morph
```

---

# ⏱ ACT BREAKDOWN

| Act | Frames | Spoken Beat | Visual Purpose |
|---|---:|---|---|
| 0 | F0–F628 | original input → set ready → dry run | build real HashSet, remove duplicate, retain source order |
| 1 | F649–F1501 | candidate 8 | first true start, sequence length4, longest4 |
| 2 | F1525–F1857 | candidate1 | predecessor exists → middle → skip |
| 3 | F1865–F2287 | candidate6 | second true start, length1 |
| 4 | F2302–F3247 | 3,2,4,10,9,11 | complete predecessor checks, all skip |
| 5 | F3262–F4338 | candidate -1 | winning sequence length6, longest6 |
| 6 | F4348–F4586 | final candidate0 | predecessor exists → skip |
| 7 | F4592–F5548 | proof of avoided repeated walks | show why only starts walked |
| 8 | F5570–F5653 | code handoff | concept geometry morphs into Scene11 guides |

---

# ACT 0 — ORIGINAL INPUT → REAL HASHSET
## F0–F628

Narration begins:
> “Our original array is 8, 1, 6, 3, 2, 2, 4, 10, 9, 11, minus 1 and 0.”

---

## F0–F32 — “Our original array”
Start clean.

- badge writes:
  `OPTIMAL · FULL DRY RUN`
- faint empty raw-array slots draw at center stage
- label:
  `ORIGINAL ARRAY`
- do not pre-fill values

---

# Word-synced array population

Fixed slots:

```text
slot0  8
slot1  1
slot2  6
slot3  3
slot4  2
slot5  2
slot6  4
slot7  10
slot8  9
slot9  11
slot10 -1
slot11 0
```

### F50 — spoken `8`
Write 8 into slot0.

### F68 — spoken `1`
slot1.

### F89 — spoken `6`
slot2.

### F112 — spoken `3`
slot3.

### F134 — first `2`
slot4.

### F154 — second `2`
slot5.
Do not label duplicate yet.

### F172 — `4`
slot6.

### F193 — `10`
slot7.

### F214 — `9`
slot8.

### F233 — `11`
slot9.

### F254–F273 — “minus 1”
draw `-1` into slot10.

### F283 — `0`
slot11.

### F298–F313 — pause
Hold complete original array alone.

---

## F313–F388 — “First, put all the values into a set.”

### F313 `First`
- raw row remains center for a moment
- faint Hash Field guide begins above

### F344 `put`
- Hash Field shell starts rough draw
- raw row begins moving down toward permanent source-strip y

### F349–F383 “all the values into a set”
- stagger `BezierFlight` from each source slot toward fixed Hash Field destinations
- 12 source glyph clones fly
- source row itself remains visible below

No node should teleport.

### F383 `set`
- field enclosure closes
- label `HASH SET` completes
- all destination nodes except duplicate resolution are present

---

## F399–F443 — “The duplicate 2 disappears.”

This beat must be unmistakable.

### F399 `The`
- source slot4 and slot5 both brighten briefly

### F404 `duplicate`
- first set-node `2` remains solid
- second flying `2` hovers 10px above same destination

### F416 `2`
- two glyphs visibly overlap

### F426 `disappears`
- `SvgMorph` second glyph → thin echo ring
- echo ring contracts into first `2`
- one small purple ripple
- only one `2` remains in HashSet

At the original source strip:
- second `2` becomes dim
- tiny label beneath:
  `DUP`
- first `2` remains eligible candidate

No warning/error semantics.

---

## F460–F524 — “So we are left with 11 unique values.”

### F460 `So`
- all set nodes settle

### F486 `11`
- small chalk count writes:
  `11 UNIQUE`

### F498 `unique`
- enclosure gets one subtle cyan perimeter trace

### F509–F524 `values`
- settle
- remove temporary construction trails

---

## F532–F565 — “The set is ready.”
- Hash Field becomes center-stage hero
- raw original array locks permanently into bottom source strip
- duplicate second `2` remains dim / DUP
- no candidate selected

---

## F572–F628 — “Now let’s dry run the idea.”

### F572 `Now`
- add subtle label above source strip:
  `DRY RUN SOURCE`

### F581 `let's`
- candidate cursor appears just left of source slot0

### F596 `dry`
- LONGEST state appears:
  `LONGEST 0`

### F603–F628 `run the idea`
- hash portal draws on left edge of field
- temporary sequence workspace guide line appears empty
- ready state holds

---

# ACT 1 — CANDIDATE 8 · FIRST REAL START
## F649–F1501

---

## F649–F671 — “Take 8.”

### F649 `Take`
- candidate cursor slides under source slot0

### F656 `8`
- source slot8? No: **source value 8 in slot0**
- slot0 gets pivot outline
- matching HashSet node8 receives small pivot ring
- write:
  `CANDIDATE 8`

No predecessor result yet.

---

## F683–F725 — “Before 8 comes 7.”

### F683 `Before`
- predecessor expression shell appears above Hash Field

### F693 `8`
write:
```text
8 - 1
```

### F703 `comes`
draw equals stroke

### F712 `7`
complete:
```text
8 - 1 = 7
```

A small query bubble `7 ?` forms near portal.

---

## F748–F785 — “Do we have 7 in the set?”

### F748 `Do`
- query `7 ?` starts `BezierFlight` into hash portal

### F763 `7`
- portal compresses

### F781 `set`
- cyan pulse enters Hash Field
- no node lights

### F785–F807 pause
- hollow search echo expands once in empty field
- hold uncertainty

---

## F807–F818 — “No.”
- hollow echo returns from portal
- write `NO`
- use warn only on missing query, not candidate

---

## F834–F881 — “So 8 is a starting point.”

### F834 `So`
- predecessor expression fades to 45%

### F844 `8`
- source candidate8 and Hash node8 brighten

### F862 `starting`
- small stem grows beneath source slot8

### F869–F881 `point`
- stem morphs to:
  `START`
- temporary sequence ribbon initializes with one value:
  `[8]`
- current length appears:
  `LEN 1`

LONGEST remains0 until narration later says longest4.

---

## F881–F923 — “Now move forward.”
- START stem extends into a good-colored runner line
- sequence workspace gets forward arrow
- next target bubble prepares:
  `9 ?`

---

# Walk 8 → 9 → 10 → 11

## F931–F964 — “9 is present.”

### F931 `9`
- `9 ?` enters portal

### F946 `present`
- matching Hash node9 lights good
- return pulse comes back
- only after hit:
  - sequence ribbon appends `9`
  - connector `8→9` draws

---

## F975–F1009 — “Length becomes 2.”
- CountUp `1 → 2`
- no other motion during counter update

---

## F1019–F1050 — “10 is present.”

### F1019 `10`
- query10 → portal

### F1034 `present`
- node10 lights
- result returns
- append10
- draw `9→10`

---

## F1073–F1112 — “Length becomes 3.”
- CountUp2→3
- hold completed `8→9→10`

---

## F1128–F1156 — “11 is present.”
- query11
- direct hit node11
- append11
- draw10→11

---

## F1176–F1216 — “Length becomes 4.”
- CountUp3→4
- ribbon now:
```text
8 → 9 → 10 → 11
```

---

## F1232–F1265 — “12 is not present.”

### F1232 `12`
- query12 enters portal

### F1247 `not`
- no node hit

### F1254 `present`
- hollow echo returns
- tiny attempted connector after11 stops short
- missing tag:
  `12 ×`

---

## F1286–F1304 — “So we stop.”
- runner brakes at11
- unfinished connector to12 shatters subtly
- query12 dissolves

---

## F1328–F1416 — “The sequence is 8, 9, 10, 11.”

Do not rebuild it from scratch.

As each spoken value lands:
- F1348 `8` → value8 in existing ribbon brightens
- F1366 `9` → 9 brightens
- F1385 `10` → 10 brightens
- F1403 `11` → 11 brightens

One rough brace draws beneath:
```text
FOUND SEQUENCE
```

---

## F1430–F1449 — “Length 4.”
- brace label morphs to:
  `LENGTH 4`

---

## F1460–F1501 — “So longest is 4 for now.”

### F1460 `So`
- LONGEST0 wakes

### F1466 `longest`
- CountUp begins

### F1479 `4`
- LONGEST settles at4
- one restrained highlight stroke

### F1501–F1525 pause
- 8-run moves to low-opacity history ribbon
- source slot8 status becomes:
  `START ✓`
- candidate cursor prepares for next unique source value1

---

# ACT 2 — CANDIDATE 1 · PREDECESSOR EXISTS → SKIP
## F1525–F1857

---

## F1525–F1551 — “Now take 1.”
- cursor moves from source slot0→slot1
- slot1 pivot
- Hash node1 pivot ring
- previous 8 sequence remains faint history

---

## F1569–F1607 — “Before 1 comes 0.”
Build:
```text
1 - 1 = 0
```
At spoken `0` F1592:
- query bubble0 appears

---

## F1627–F1696 — “0 is already present in the set.”

### F1627 `0`
- query0 enters portal

### F1651 `already`
- Hash node0 begins cyan→good pulse

### F1668 `present`
- direct hit resolves YES

### F1691 `set`
- short return line reaches candidate1

---

## F1713–F1796 — “That means 1 is somewhere in the middle of a sequence.”

This is a teaching moment.

Do **not** create a global number line.

Instead:
- build a tiny local conceptual relation directly below expression:
```text
0 → 1 → …
```

At:
- F1732 spoken `1`: center1 brightens
- F1769 spoken `middle`: place small `MIDDLE` mark under1
- predecessor link0→1 becomes the proof

Actual HashSet remains irregular and unchanged.

---

## F1820–F1857 — “So we skip it.”
- potential START stem under source1 begins
- `SvgMorph` sideways into purple skip rail
- write `SKIP`
- candidate dims
- **no sequence runner**
- no current-length state created

---

# ACT 3 — CANDIDATE 6 · REAL START, LENGTH1
## F1865–F2287

---

## F1865–F1891 — “Now take 6.”
- candidate cursor source slot2
- Hash node6 pivot

## F1901–F1948 — “Before 6 comes 5.”
- expression:
  `6 - 1 = 5`
- query5 forms

## F1970–F2006 — “5 is not present.”
- query5 through portal
- no node hit
- hollow echo
- `NO`

## F2022–F2056 — “So 6 is a start.”
- source6 START stem
- node6 good
- temporary sequence ribbon `[6]`
- LEN1

## F2078–F2098 — “Move forward.”
- target query7 prepares

## F2112–F2156 — “7 is not present.”
- query7 → portal
- empty echo
- attempted connector from6 stops immediately

## F2179–F2236 — “So this sequence has length 1.”
- brace around `[6]`
- `LENGTH 1`

## F2251–F2287 — “Longest is still 4.”
- LONGEST4 pulses once
- no CountUp
- sequence6 becomes faint history
- source6 status:
  `START ✓`

---

# ACT 4 — COMPLETE SKIP RUN: 3, 2, 4, 10, 9, 11
## F2302–F3247

This act is faster, but every predecessor lookup must still be real.

Repeated grammar:

```text
candidate source slot pivot
→ predecessor expression
→ query through portal
→ matching HashSet node lights
→ predecessor link returns
→ START stem attempts
→ folds into SKIP
```

No candidate may be skipped visually.

---

# Candidate 3
## F2302–F2500

### F2302–F2326 “Now take 3.”
- cursor→source slot3
- node3 pivot

### F2337–F2374 “Before 3 comes 2.”
- `3 - 1 = 2`

### F2385–F2413 “2 is present.”
- query2 → portal
- node2 direct hit

### F2425–F2465 “So 3 is not a start.”
- predecessor return2→candidate3
- potential START stem bends sideways

### F2477–F2500 “Skip it.”
- `SKIP`
- source3 done

---

# Candidate 2
## F2506–F2631

Important:
candidate cursor selects **first2 source slot only**.
Second2 remains dim `DUP`.

### F2506–F2525 “Now 2.”
- cursor→slot4
- never slot5

### F2543–F2575 “Before 2 comes 1.”
- `2 - 1 = 1`

### F2575–F2609 “1 is present.”
- query1 direct hit

### F2623–F2631 “Skip.”
- instant skip fold after confirmed predecessor
- source first2 = SKIP
- second2 still DUP

---

# Candidate 4
## F2648–F2776

### F2648–F2665 “Now 4.”
cursor→slot6

### F2677–F2719 “Before 4 comes 3.”
`4 - 1 = 3`

### F2723–F2752 “3 is present.”
query3 hit

### F2768–F2776 “Skip.”
skip fold

---

# Candidate 10
## F2791–F2971

### F2791–F2806 “Now 10.”
cursor→slot7

### F2819–F2856 “Before 10 comes 9.”
`10 - 1 = 9`

### F2863–F2891 “9 is present.”
query9 hit

### F2902–F2939 “So 10 is not a start.”
- predecessor link returns

### F2953–F2971 “Skip it.”
- SKIP

---

# Candidate 9
## F2978–F3101

### F2978–F2996 “Now 9.”
cursor→slot8

### F3005–F3042 “Before 9 comes 8.”
`9 - 1 = 8`

### F3053–F3077 “8 is present.”
query8 hit

### F3093–F3101 “Skip.”
- skip
- no `9→10→11` repeat

This no-repeat behavior must be visually obvious:
- faint old 8-run history is still visible
- ghost runner under9 may appear for 5f then collapse before launch

---

# Candidate 11
## F3117–F3247

### F3117–F3133 “Now 11.”
cursor→slot9

### F3145–F3179 “Before 11 comes 10.”
`11 - 1 = 10`

### F3191–F3221 “10 is present.”
query10 hit

### F3239–F3247 “Skip.”
- SKIP
- no runner

### F3247–F3262 pause
Use 15f to show current source statuses:

```text
8 START
1 SKIP
6 START
3 SKIP
2 SKIP
2 DUP
4 SKIP
10 SKIP
9 SKIP
11 SKIP
-1 PENDING
0 PENDING
```

No table. Use tiny status marks under fixed source slots.

LONGEST remains4.

---

# ACT 5 — CANDIDATE -1 · WINNING RUN
## F3262–F4338

This is the scene’s main payoff.

---

## F3262–F3296 — “Now take minus 1.”
- cursor jumps to source slot10
- -1 pivot
- matching Hash node-1 pivot

## F3308–F3363 — “Before minus 1 comes minus 2.”
Build:
```text
-1 - 1 = -2
```
At F3353 `2`:
- query `-2 ?` ready

## F3379–F3415 — “Is minus 2 present?”
- query -2 → hash portal
- no node lights
- hollow echo

## F3428–F3439 — “No.”
- `NO`

## F3439–F3501 — “So minus 1 is a start.”
- query connector bends into START stem
- source -1 and node-1 good
- ribbon initializes:
  `[-1]`
- LEN1

## F3526–F3550 — “Now move forward.”
- runner activates
- target0 bubble forms

---

# Walk -1 → 0 → 1 → 2 → 3 → 4

## 0
### F3568–F3593 — “0 is present.”
- query0 → portal
- node0 hit
- append0
- draw -1→0

### F3604–F3643 — “Length becomes 2.”
CountUp1→2

---

## 1
### F3652–F3676 — “1 is present.”
query1 hit
append1
draw0→1

### F3691–F3725 — “Length becomes 3.”
2→3

---

## 2
### F3743–F3768 — “2 is present.”
query2 hit
append2
draw1→2

### F3785–F3822 — “Length becomes 4.”
3→4

---

## 3
### F3833–F3861 — “3 is present.”
query3 hit
append3

### F3877–F3912 — “Length becomes 5.”
4→5

---

## 4
### F3917–F3945 — “4 is present.”
query4 hit
append4
sequence ribbon now:
```text
-1 → 0 → 1 → 2 → 3 → 4
```

### F3956–F3985 — “Length becomes 6.”
CountUp5→6

LONGEST still4 for the moment.

---

## F3995–F4020 — “Now check 5.”
- target5 query appears
- attempted next connector starts only 20%

## F4028–F4058 — “5 is not present.”
- query5 → portal
- empty echo
- `NO`

## F4070–F4079 — “Stop.”
- runner brakes at4
- attempted connector to5 fractures subtly
- no overshoot

---

## F4099–F4256 — “So this sequence is minus 1, 0, 1, 2, 3, 4.”

Use existing ribbon only.

Exact spoken-value emphasis:
- F4143 `minus`
- F4159 `1` → -1 node full bright
- F4174 `0`
- F4193 `1`
- F4213 `2`
- F4228 `3`
- F4243 `4`

Each existing ribbon node brightens on its spoken value.

Draw one long rough brace underneath:
```text
FOUND SEQUENCE
```

---

## F4270–F4289 — “Length 6.”
Brace label morphs:
```text
LENGTH 6
```

---

## F4289–F4338 — “Now longest becomes 6.”

### F4289 `Now`
- LONGEST4 activates

### F4307 `longest`
- CountUp4→6 begins

### F4325 `6`
- settles at6
- one restrained highlight stroke

At F4338:
- winning ribbon becomes persistent history at ~65% opacity
- source -1 status `START ✓`

---

# ACT 6 — LAST CANDIDATE 0
## F4348–F4586

---

## F4348–F4369 — “Last one.”
- candidate cursor moves to final source slot11

## F4379–F4390 — “0.”
- source0 pivot
- node0 pivot

## F4404–F4465 — “Before 0 comes minus 1.”
Build:
```text
0 - 1 = -1
```

## F4471–F4505 — “Minus 1 is present.”
- query -1 → portal
- node-1 direct hit
- predecessor return link

## F4515–F4557 — “So 0 is not a start.”
- attempted START stem under0 forms
- predecessor link pulls it sideways

## F4566–F4586 — “Skip it.”
- SKIP settles
- source0 dims
- all unique candidates now DONE
- candidate cursor reaches end

---

# ACT 7 — PROOF: WHAT WORK DID WE AVOID?
## F4592–F5548

---

## F4592–F4633 — “And that’s the whole dry run.”
- portal settles neutral
- all source statuses visible
- three actual run histories remain:
  - `8→9→10→11`
  - `6`
  - `-1→0→1→2→3→4`
- LONGEST6

No new result panel yet.

---

## F4648–F4685 — “Notice what we avoided.”
- dim Hash Field to ~65%
- brighten source strip and run histories
- faint empty ghost START stems appear under skipped candidates

Write small:
```text
WHAT NEVER LAUNCHED?
```

---

# Exact spoken skipped values
## F4702–F4963

Narration:
> “We did not walk again from 1 or 3 or 2 or 4 or 10 or 9 or 11 or 0.”

For each spoken value:
1. candidate source slot pulses
2. faint ghost runner attempts to extend
3. predecessor query result from earlier reappears as a tiny back-link
4. ghost runner folds away before any walk

Exact anchors:

### F4740 — `1`
- ghost runner under1
- `0→1` predecessor proof cancels it

### F4760 — `3`
- `2→3` cancels

### F4790 — `2`
- `1→2` cancels

### F4819 — `4`
- `3→4` cancels

### F4846 — `10`
- `9→10` cancels

### F4882 — `9`
- `8→9` cancels

### F4916 — `11`
- `10→11` cancels

### F4949 — `0`
- `-1→0` cancels

Never redraw full sequences.
Only rejected launch stems.

At F4963 all ghost launches are gone.

---

## F4978–F4990 — “Why?”
- center callout:
  `WHY?`
- everything else holds
- no answer yet

---

## F5003–F5106 — “Because all of them already had a number just before them.”

As narration progresses:
- all eight predecessor back-links wake sequentially
- use cyan, low-opacity
- source skipped values share one rough brace:
```text
PREDECESSOR EXISTS
```

At F5084 `before`:
- brace extends into:
```text
PREDECESSOR EXISTS → NO NEW WALK
```

Do not show code syntax.

---

## F5114–F5188 — “We only walked from real starting points.”
- dim all SKIP/DUP source slots to ~30%
- START slots remain neutral until values are spoken
- the three actual history ribbons remain

Draw shared label:
```text
REAL STARTS LAUNCHED
```

---

## F5201–F5271 — “8, 6 and minus 1.”

### F5201 `8`
- source8 START mark full brightness
- run8→9→10→11 rises to 80%

### F5219 `6`
- source6 START mark full brightness
- single6 history rises

### F5251 `minus`
- source-1 wakes

### F5261 `1`
- -1 run becomes full hero
- now write:
```text
STARTS: 8 · 6 · -1
```

Do not imply set order.

---

## F5290–F5381 — “And the longest sequence we found has length 6.”
- three discovered sequences align visually in workspace:

```text
8 → 9 → 10 → 11        LEN 4
6                       LEN 1
-1 → 0 → 1 → 2 → 3 → 4 LEN 6
```

These are sequence-history ribbons, not the HashSet.

At F5300 `longest`:
- third ribbon gets highlight brace

At F5361 `6`:
- LONGEST6 shifts beside winning ribbon
- subtle ShineFill only once

---

## F5393–F5414 — “No sorting.”
Strong clarity moment:
- original source row remains visibly:
```text
8 1 6 3 2 2 4 10 9 11 -1 0
```
unchanged
- a faint ghost “sort arrows” layer attempts to appear above it
- `RoughLine` strike writes across ghost layer in 18–20f
- Hash Field remains irregular

No global sorted representation has appeared anywhere in the actual trace.

---

## F5434–F5471 — “No repeated list scanning.”
- faint brute-force scan beam attempts one left→right sweep across original row
- before it completes, erase/retract it
- simultaneously only after erasure:
  one query bubble enters Hash Portal and directly hits a set node

This contrast says:
```text
not scan the whole list
→ direct membership lookup
```

Do not add complexity notation.

---

## F5498–F5548 — “That is the whole idea.”
Collapse the teaching geometry into one concise concept:

```text
PREDECESSOR EXISTS?
      ├─ YES → SKIP
      └─ NO  → START → WALK FORWARD
```

Build via `SvgMorph` from:
- predecessor back-link
- START stem
- sequence runner

This is the only summary rule panel.

---

# ACT 8 — HANDOFF TO SCENE 11 CODE
## F5570–F5653

Narration:
> “Now the code will make much more sense.”

No Python characters.

---

## F5570–F5596 — “Now the code”
- Hash Field shrinks to compact right-side reference
- original source row and status marks fade
- summary-rule branches begin straightening

## F5596–F5619 — “will make”
- predecessor branch straightens into first code guide
- START branch straightens into second guide

## F5619–F5640 — “much more”
- forward-walk ribbon straightens into third/fourth code guides
- rough editor shell starts drawing left

## F5640–F5653 — “sense.”
Final frame:
- left: empty Scene11 code editor shell + blinking cursor
- right: compact unordered Hash Field
- no code
- no sequence-history clutter
- LONGEST/result receded
- captions safe

Scene11 begins typing without a hard cut.

---

# 🧩 HASHSET QUERY GRAMMAR — STRICT

Every lookup, predecessor or forward, uses exactly this visual order:

## 1. Query forms
Example:
```text
7 ?
```

## 2. Query moves to Hash Portal
Use `BezierFlight`.

## 3. Portal reacts
- compress 4–6f
- emit cyan pulse

## 4A. Found
- matching node pulses `theme.good`
- direct return signal
- only then:
  - predecessor result → SKIP logic
  - forward result → sequence ribbon appends value

## 4B. Missing
- no set node pulses
- hollow echo in field
- return `NO`
- only then:
  - predecessor missing → START
  - next missing → STOP

Never animate lookup result and movement simultaneously.

---

# 🧩 ORIGINAL SOURCE CURSOR SPECIFICATION

Candidate order must physically follow:

```text
slot0  8
slot1  1
slot2  6
slot3  3
slot4  2
slot5  2  [DUP — NEVER CANDIDATE]
slot6  4
slot7  10
slot8  9
slot9  11
slot10 -1
slot11 0
```

Cursor path:
```text
0 → 1 → 2 → 3 → 4 → 6 → 7 → 8 → 9 → 10 → 11
```

It visually hops over duplicate slot5.

This is important:
- duplicate remains in original input
- duplicate does not produce another unique HashSet iteration

---

# 🧩 START / SKIP SPECIFICATION

## START
1. predecessor query returns NO
2. query line bends downward
3. source slot gets good-colored start stem
4. label `START`
5. temporary sequence ribbon initializes
6. only then forward queries begin

## SKIP
1. predecessor query returns YES
2. short predecessor back-link reaches candidate
3. potential start stem begins
4. `SvgMorph` stem sideways
5. label `SKIP`
6. source dims
7. no sequence ribbon launches

---

# 🧩 TEMPORARY SEQUENCE RIBBON SPECIFICATION

Sequence ribbon is not a sorted copy of the HashSet.

It is a local **discovered chain**.

## Candidate8
Starts:
```text
[8]
```

then successful queries append:
```text
[8] → [9] → [10] → [11]
```

## Candidate6
```text
[6]
```

No append because7 is missing.

## Candidate-1
```text
[-1]
```

then:
```text
[-1]→[0]→[1]→[2]→[3]→[4]
```

Each value appears only after its membership lookup succeeds.

---

# ✨ HERO MOMENTS — EXACTLY FIVE

## 1. Raw Array → HashSet
All original values Bezier-fly into the custom Hash Field, preserving the visible original source row below.

## 2. Duplicate2 Merge
Second2 overlaps first2 and dissolves into one set node while its raw source slot remains visibly marked DUP.

## 3. First Start: 8
Predecessor7 misses; START stem launches; direct membership pulses progressively build `8→9→10→11`.

## 4. Winning Start: -1
Late in the original dry-run order, predecessor-2 misses and the longest ribbon grows step-by-step to six, changing longest from4→6.

## 5. Avoided-Walk Proof
Ghost runners attempt to launch from every skipped value exactly when named, then predecessor back-links fold them away before repeated work can happen.

No additional hero effects.

---

# 🚫 ANTI-SLOP / NO-GUESS RULES

Do **not**:

1. sort the values
2. build a global number line
3. start with -1
4. change candidate order
5. process the second duplicate2 as a candidate
6. invent HashSet bucket indices
7. invent a hash function
8. scan HashSet nodes sequentially
9. show generic table/grid HashSet
10. pre-render all three sequences
11. show 8→9→10→11 before those lookups occur
12. show -1→0→1→2→3→4 before those lookups occur
13. update length before membership success
14. update longest before narration says it
15. launch runners from skipped values
16. hide original array after set creation
17. imply source-order dry run is guaranteed HashSet runtime order
18. show code
19. show O(n) proof
20. use dark/light styling outside existing `@dsa/kit`
21. move fixed source slots
22. use auto-flex insertion
23. reveal final starts before F5201+
24. reveal final longest winner before the -1 run finishes
25. use generic “AI dashboard” cards

---

# ✅ CRITICAL REVIEW FRAMES

### Setup
- F0 — empty raw-array stage
- F50 — value8 writes
- F154 — second2 writes
- F283 — final0 writes
- F313 — set construction begins
- F404 — duplicate beat begins
- F426 — duplicate2 merge
- F486 — unique11
- F572 — dry-run workspace ready

### Candidate8
- F649 — candidate8
- F712 — predecessor7
- F748 — query7
- F807 — NO
- F862 — START8
- F931 — query9/hit
- F993 — length2
- F1019 — query10
- F1091 — length3
- F1128 — query11
- F1201 — length4
- F1232 — query12
- F1286 — stop
- F1348 — sequence review begins
- F1479 — longest4

### Candidate1
- F1525 — candidate1
- F1592 — predecessor0
- F1627 — query0
- F1769 — middle-of-sequence proof
- F1820 — skip fold

### Candidate6
- F1865 — candidate6
- F1926 — predecessor5
- F1970 — 5 missing
- F2028 — start6
- F2112 — query7
- F2222 — length1
- F2276 — longest still4

### Skip candidates
- F2302 — candidate3
- F2385 — predecessor2 hit
- F2477 — skip3
- F2506 — candidate2
- F2575 — predecessor1 hit
- F2623 — skip2
- F2648 — candidate4
- F2723 — predecessor3 hit
- F2768 — skip4
- F2791 — candidate10
- F2863 — predecessor9 hit
- F2953 — skip10
- F2978 — candidate9
- F3053 — predecessor8 hit
- F3093 — skip9
- F3117 — candidate11
- F3191 — predecessor10 hit
- F3239 — skip11

### Winning -1
- F3262 — candidate-1
- F3353 — predecessor-2
- F3379 — query-2
- F3428 — NO
- F3461 — start-1
- F3568 — query0
- F3626 — length2
- F3652 — query1
- F3710 — length3
- F3743 — query2
- F3805 — length4
- F3833 — query3
- F3898 — length5
- F3917 — query4
- F3973 — length6
- F3995 — query5
- F4070 — stop
- F4159 — sequence review -1
- F4279 — length6
- F4325 — longest6

### Final candidate0
- F4379 — candidate0
- F4445 — predecessor-1
- F4471 — -1 hit
- F4515 — not start
- F4566 — skip

### Proof
- F4592 — dry run complete
- F4648 — avoided work setup
- F4740 — ghost1 rejected
- F4760 — ghost3 rejected
- F4790 — ghost2 rejected
- F4819 — ghost4 rejected
- F4846 — ghost10 rejected
- F4882 — ghost9 rejected
- F4916 — ghost11 rejected
- F4949 — ghost0 rejected
- F4978 — WHY
- F5003 — predecessor explanation begins
- F5114 — real starts statement
- F5201 — 8
- F5219 — 6
- F5251 — minus1
- F5361 — winning length6
- F5393 — no sorting
- F5434 — no repeated list scanning
- F5498 — final rule morph
- F5570 — code handoff
- F5653 — clean Scene11 handoff

---

# ✅ ACCEPTANCE CHECKLIST

- [ ] exact duration **188.440s**
- [ ] exact total **5653 frames**
- [ ] 30fps
- [ ] all word anchors derived from supplied sync
- [ ] original array writes in spoken order
- [ ] candidate dry-run begins with8, not -1
- [ ] candidate order follows first appearances in original array
- [ ] second2 stays visible in raw input but is marked DUP
- [ ] second2 does not become a second HashSet node
- [ ] second2 is never processed as another candidate
- [ ] HashSet remains irregular/unordered
- [ ] no global number line
- [ ] no sorted teaching rearrangement
- [ ] all membership checks visibly touch HashSet
- [ ] Hash Portal uses direct hit / hollow echo
- [ ] no invented bucket indices/hash function
- [ ] 8 predecessor7 absent → START
- [ ] 8 walk finds9,10,11 then misses12
- [ ] first sequence length4
- [ ] longest updates0→4 only when narrated
- [ ] 1 predecessor0 exists → SKIP
- [ ] 6 predecessor5 absent → START
- [ ] 7 missing → length1
- [ ] longest remains4
- [ ] 3 predecessor2 → SKIP
- [ ] 2 predecessor1 → SKIP
- [ ] 4 predecessor3 → SKIP
- [ ] 10 predecessor9 → SKIP
- [ ] 9 predecessor8 → SKIP
- [ ] 11 predecessor10 → SKIP
- [ ] -1 predecessor-2 absent → START
- [ ] -1 walk finds0,1,2,3,4 then misses5
- [ ] winning sequence length6
- [ ] longest updates4→6 only when narrated
- [ ] final0 predecessor-1 → SKIP
- [ ] proof names skipped values in exact narration order
- [ ] only8,6,-1 are highlighted as real starts at final proof
- [ ] no sorting visual
- [ ] no repeated list-scan visual except brief struck/retracted comparison
- [ ] zero Python code
- [ ] zero complexity derivation
- [ ] exact @dsa/kit background/colors/fonts
- [ ] fixed positions / no jitter
- [ ] captions zone remains clear
- [ ] final geometry morphs into Scene11 empty code guides

---

# FINAL SCENE STORY — ONE LINE

**The exact original array writes into fixed chalk slots and stays visible as the dry-run source while its values Bezier-fly into a custom irregular HashSet, the duplicate second `2` visibly merges into one set node and remains marked `DUP` in the source row, then a candidate cursor follows the original first-appearance order `8→1→6→3→2→4→10→9→11→-1→0`; every candidate builds its predecessor expression and sends a query through the Hash Portal into the real set, so `8` misses predecessor7 and launches the first local sequence ribbon `8→9→10→11` before12 is absent and longest becomes4, `1` is visibly proven to sit after predecessor0 and folds into SKIP, `6` misses5 but immediately stops at missing7, `3,2,4,10,9,11` each perform their own direct predecessor lookup and fold into SKIP without launching a repeated walk, then late in the original source order `-1` misses predecessor-2 and grows the winning ribbon only as successful membership checks return for `0,1,2,3,4`, stopping at missing5 and changing longest4→6, after which final candidate0 finds predecessor-1 and skips; the scene closes by attempting ghost launches from every skipped value exactly when spoken and physically folding each one away with its predecessor proof, leaving only the three real start histories `8,6,-1`, the winning length6, the original array still unsorted, and one direct HashSet lookup replacing any repeated list scan before all concept geometry straightens into Scene11’s empty code-editor guides.**
