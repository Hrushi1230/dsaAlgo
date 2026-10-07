# Scene 09 · OPTIMAL IDEA / START DETECTION — Predecessor Gate Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `09-optimal-idea.mp3` — **66.860 s** — **2006 frames** @ 30 fps  
**Goal**: Discover the optimal start rule visually rather than stating it upfront. Use a reusable **Predecessor Gate** mechanism to prove why `9`, `10`, and `11` are middle-of-sequence values but `8` can be a true start; generalize this into `x - 1` logic, then build the real HashSet and explicitly distinguish the unordered data structure from the number-line visualization that Scene 10 will use.

---

# 🔒 @dsa/kit CONSISTENCY LOCK — NON-NEGOTIABLE

This scene must look like the same course, not a new animation package.

## Background / atmosphere
- `theme.boardBg` — locked green chalkboard (`#18523d`)
- existing board vignette only: `rgba(0,0,0,0.35)`
- no per-scene background changes
- no gradients / glass / glossy UI

## Typography
- Patrick Hand for chalk teaching labels
- SFMono / Consolas / Menlo for values, symbolic rules, membership expressions
- use existing `fonts.ts` helpers

## Colors
Use semantic kit tokens only:
- `theme.chalkText`
- `theme.chalkDim`
- `theme.pivot`
- `theme.good`
- `theme.warn`
- `theme.highlight`
- `theme.cyan`
- `theme.purple`

Never hardcode new colors.

## Existing kit components first
Prefer:
- `ChalkText`
- `RoughLine`
- `RoughBox`
- `SvgMorph`
- `BezierFlight`
- `Shatter`
- `CountUp`
- `HashSetTable`
- `ChalkDust`
- `Captions`

The **Predecessor Gate** may be a new composition built from these primitives, but its strokes, cards, colors, text, and motion must remain inside the kit.

---

# 🎯 Pedagogical Philosophy & Core Rules

## 1. DISCOVER THE RULE — DO NOT SHOW IT AT FRAME 0
At the beginning, the learner still sees the unresolved Scene08 question:

```text
Where does a sequence actually begin?
```

Do **not** show:
```text
x - 1 not in set
```
until narration explicitly reaches the rule around F811+.

Sequence of discovery must be:

```text
9 → predecessor 8 exists → not start
10 → predecessor 9 exists → not start
11 → predecessor 10 exists → not start
8 → predecessor 7 absent → can be start
        ↓
generalize
x → check x - 1
```

---

## 2. THIS IS NOT THE FULL OPTIMAL TRACE
Scene09 teaches the **start test only**.

Do not completely trace:
- `-1 → 0 → 1 → 2 → 3 → 4`
- `6`
- `8 → 9 → 10 → 11`

Scene10 owns the exhaustive master trace.

This scene may show a short conceptual `8→9→10→11` island only to explain “middle” and “start”, but must not accumulate best/current lengths.

No `longest` counter here.

---

## 3. SIGNATURE VISUAL — PREDECESSOR GATE

The core visual mechanism is:

```text
            candidate x
                │
                ▼
        ┌────────────────┐
        │ PREDECESSOR ?  │
        │     x - 1      │
        └────────────────┘
            /        \
       EXISTS        ABSENT
         │             │
       SKIP          START
```

But do not show the full diagram as a pre-rendered panel.

Instead, construct it one piece at a time from each concrete example.

### Candidate state
Current value floats center stage.

### Predecessor socket
A circular/socket node appears to its left.

### Query line
SVG line grows candidate → predecessor.

### If predecessor exists
- predecessor value materializes in the socket,
- cyan/green back-link connects it to candidate,
- candidate is pulled visually into the **middle** of a short sequence lane,
- pivot start marker collapses,
- `NOT A START` / `SKIP` appears.

### If predecessor absent
- socket remains hollow,
- query returns `NO`,
- hollow socket cracks open / retracts,
- candidate's bottom stem morphs into a launch pad,
- `START` grows beneath the candidate.

This mechanism makes `x−1` physically memorable.

---

## 4. HASHSET ≠ NUMBER LINE
This distinction is mandatory.

When narration says:
> “I will place the values on a number line so the sequence is easy to see.”

show TWO clearly separated layers:

### Actual data layer
`HashSetTable`
- unordered layout
- top area
- label: `HASH SET · UNORDERED`

### Teaching visualization
conceptual number line
- bottom area
- label: `VISUAL ONLY`

When narration says:
> “A hash set itself is not sorted.”

the `VISUAL ONLY` line must become dimmer and the unordered HashSet must regain dominance.

Never imply that HashSet iteration order is numerical.

---

## 5. EXACT AUDIO SYNC
All triggers below come from the supplied sync JSON.

Major anchors:

```text
F0     Take 9
F38    Does 8 exist?
F77    Yes
F112   9 cannot be beginning
F173   start from 9
F263   sequence
F285   middle

F308   Take 10
F353   Does 9 exist?
F391   Yes
F443   not a start

F476   Take 11
F507   Does 10 exist?
F546   Yes
F573   Not a start

F603   take 8
F639   Does 7 exist?
F681   No
F712   8 can be beginning
F784   rule

F811   any number x
F847   check
F856   x
F867   minus
F878   1

F910   If x - 1 exists
F965   skip x

F996   If x - 1 does not exist
F1063  this can be
F1084  real
F1106  start

F1133  Only then
F1173  walk
F1181  forward

F1228  put all values
F1275  hash
F1281  set

F1309  duplicate
F1322  2
F1334  disappears

F1372  membership
F1425  fast
F1448  average

F1462  One note
F1523  trace

F1559  I will place values
F1632  number
F1639  line
F1671  sequence
F1693  easy
F1711  see

F1733  only our visual explanation
F1834  hash set itself
F1883  not
F1892  sorted

F1927  Now let's trace
F1978  unique
F1992  value
```

---

# 📐 Layout Specifications — 1920×1080

## Top badge
```text
OPTIMAL IDEA · FIND THE TRUE START
y = 28..70
```

## Main hero stage
```text
y = 290..610
x = center
```

Primary objects:
- candidate node
- predecessor socket
- short conceptual sequence lane
- start/skip morph

## General rule zone
```text
y = 640..780
```

Only appears after concrete examples:
```text
x - 1 EXISTS  → SKIP
x - 1 ABSENT  → START
```

Never before F910.

## HashSet layer (later)
```text
y = 245..505
```

## Conceptual number line (later)
```text
y = 590..760
```

## Captions
```text
y = 960..1040
```

---

# 🧬 MASTER MORPH CHAIN

```text
Scene08 unresolved START ?
        ↓
candidate 9
        ↓ SVG DRAW
left predecessor socket = 8?
        ↓ membership YES
8 ──► 9
        ↓ SvgMorph
9 gets pulled into middle of 8→9→10→11
        ↓
NOT START

candidate 10
        ↓
9 exists
        ↓
NOT START

candidate 11
        ↓
10 exists
        ↓
NOT START

candidate 8
        ↓
7? hollow socket
        ↓
NO
        ↓ SvgMorph
open predecessor socket → START launch pad
        ↓
8 = possible beginning

concrete gate
        ↓ SvgMorph
symbolic x / x-1 gate
        ↓
EXISTS → SKIP
ABSENT → START
        ↓
ONLY THEN → forward arrow

master raw values
        ↓ BezierFlight
HashSetTable
        ↓
duplicate 2 merges/disappears
        ↓
fast membership pulse
        ↓
unordered HashSet stays above
        ↓
visual-only number line draws below
        ↓
HashSet dominates again
        ↓
trace pointer ready
```

---

# ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frames | Spoken Beat | Visual Choreography |
|---|---:|---|---|
| 0 | F0–307 | 9: predecessor exists → middle | Build Predecessor Gate for 9 and physically pull 9 into sequence middle. |
| 1 | F308–602 | 10 and 11 also not starts | Reuse/morph same gate, increasingly faster. |
| 2 | F603–810 | 8: predecessor absent → start | Hollow 7 socket becomes open launch pad; derive first true-start example. |
| 3 | F811–1227 | General `x-1` rule | Concrete gate morphs into symbolic rule; only valid starts walk forward. |
| 4 | F1228–1534 | Build HashSet / dedupe / fast lookup | Raw master values BezierFlight into HashSet; duplicate2 merges; membership pulse. |
| 5 | F1559–1926 | Number-line disclaimer | HashSet remains unordered above; conceptual line drawn below and explicitly labeled visual-only. |
| 6 | F1927–2005 | Full-trace handoff | Number-line unique values ready; trace cursor poised without processing first value. |

---

# ACT 0 — Candidate 9: “You Are Entering From the Middle”
## F0–F307

**Narration:**  
“Take 9. Does 8 exist? Yes. So 9 cannot be the beginning. If we start from 9, we are already entering a sequence from the middle.”

---

## F0–F22 — “Take 9.”
Start from Scene08 handoff:
- unordered HashSet faintly above,
- conceptual island faintly below,
- unresolved `START ?`.

### F0
`START ?` is optical center.

### F0–F10 — “Take”
- `START ?` outline loosens.
- a candidate socket grows in its place.

### F10–F22 — “9.”
- write `9` inside candidate node.
- candidate gains `theme.pivot` rough outline.
- small label:
  `CANDIDATE`

Do not show 8 yet.

### F22–F38 — 16f pause
- create a faint circular socket exactly one conceptual step left of 9.
- socket empty.
- candidate9 stays center.

---

## F38–F64 — “Does 8 exist?”
### F38 “Does”
- an SVG query line begins drawing from 9 toward left socket.

### F42 “8”
- write `8 ?` inside predecessor socket.

### F50–F64 “exist?”
- line arrowhead completes.
- query bubble above connector writes:
  `EXISTS?`

This is the first full Predecessor Gate.

### F64–F77 — 13f pause
- connector pulses once.
- no result yet.

---

## F77–F92 — “Yes.”
- predecessor socket `8?` morphs:
  hollow → filled `8`
- use `SvgMorph` for socket ring.
- `YES` writes with `theme.good`.
- query line becomes a confirmed cyan/good back-link.

State first:
`8 exists`.

No movement of 9 yet.

### F92–F112 — 20f pause
Use pause to prepare consequence:
- a faint short conceptual lane begins appearing:
```text
8 — 9 — 10 — 11
```
but only `8` and `9` are full opacity; 10/11 are 20%.

---

## F112–F158 — “So 9 cannot be the beginning.”
### F112–F124
- small start stem beneath9 tries to grow downward.

### F124 “cannot”
- start stem is crossed with `RoughLine` over 18f.
- no instant X.

### F145–F158 “the beginning.”
- label under9 morphs:
  `START ?`
  →
  `NOT START`

- predecessor8 remains linked.

### F158–F173 — 15f pause
Hold relationship.

---

## F173–F292 — “If we start from 9, we are already entering a sequence from the middle.”

This is the premium conceptual motion.

### F173–F205 — “If we start from 9”
- a pivot runner appears under9.
- runner tries to move right.

### F215–F249 — “we are already entering”
- full conceptual lane draws:
```text
8 ─ 9 ─ 10 ─ 11
```
- runner begins at9 instead of8.

### F249–F274 — “a sequence”
- mint path from9→10→11 draws.
- a faint historical path from8→9 already exists behind it.

### F274–F292 — “from the middle.”
- entire lane shifts so 9 is visually centered,
- brace draws beneath:
```text
MIDDLE
```
- 8 is clearly to its left.

Do not show length.

### F292–F308 — 16f pause
- lane collapses back into the Predecessor Gate.
- candidate node morphs 9→10 next.

---

# ACT 1 — 10 and 11: Same Rule, Faster
## F308–F602

---

## Candidate 10
### F308–F328 — “Take 10.”
- candidate glyph morph:
  `9 → 10`
- predecessor socket clears.
- old NOT START annotation retracts.

### F328–F353 — 25f pause
- predecessor socket moves to conceptual left position.
- no value yet.

### F353–F383 — “Does 9 exist?”
- query connector draws.
- socket writes `9 ?`.

### F383–F391
- hold.

### F391–F409 — “Yes.”
- socket fills9.
- `YES`.
- back-link confirms.

### F409–F421 — 12f pause
- no extra motion.

### F421–F463 — “Again, not a start.”
- candidate10’s start stem begins then folds sideways into a **skip rail**.
- write:
  `SKIP`
- tiny conceptual lane:
  `9 ─ 10 ─ 11`
  flashes for 16f.

Do not use warn/red; this is normal logic.

### F463–F476 — 13f pause
- gate resets for11.

---

## Candidate 11
### F476–F495 — “Take 11.”
- candidate morph 10→11.

### F495–F507 — 12f pause
- left socket empty.

### F507–F535 — “Does 10 exist?”
- socket writes10?
- query path.

### F535–F546 — 11f pause

### F546–F564 — “Yes.”
- fill10,
- confirm.

### F564–F573 — 9f pause

### F573–F592 — “Not a start.”
- candidate start stem folds into `SKIP`.
- no lane animation needed this time; repetition itself teaches.

### F592–F603 — 11f pause
Everything clears except the gate shell.

---

# ACT 2 — Candidate 8: Missing Predecessor Creates the Start
## F603–F810

**Narration:**  
“Now take 8. Does 7 exist? No. So 8 can be the beginning. That gives us the rule.”

---

## F603–F628 — “Now take 8.”
- candidate node morphs:
  `11 → 8`
- previous SKIP rail retracts fully.
- pivot outline returns.

### F628–F639 — 11f pause
- left predecessor socket grows.

---

## F639–F675 — “Does 7 exist?”
- SVG query line draws from8 to left socket.
- socket:
  `7 ?`
- `EXISTS?` appears.

### F675–F681
hold.

---

## F681–F697 — “No.”
This must feel different from YES.

1. socket ring pulses once,
2. inner `7?` fades,
3. response writes:
   `NO`
4. socket remains hollow.

Do not fracture yet.

### F697–F712 — 15f pause
Let the absence register.

---

## F712–F746 — “So 8 can be the beginning.”
Signature morph:

### F712–F723
- hollow predecessor socket retracts left.

### F723–F739
- query line bends downward via `SvgMorph`.

### F739–F746
- bent query line becomes a **launch-pad stem beneath8**.
- `START` writes under8 in `theme.good/pivot`.
- small upward arrow grows from start pad into8.

The learner sees:
**missing left neighbour frees the candidate to become a start.**

### F746–F793 — “That gives us the rule.”
- `8` remains center.
- confirmed start pad stays.
- predecessor gate shell expands horizontally into a reusable symbolic template.

### F793–F811 — 18f pause
- numeric8 fades to 40%.
- prepare x symbol.

---

# ACT 3 — Generalize Into the `x - 1` Rule
## F811–F1227

---

## Build the symbolic gate
### F811–F841 — “For any number x,”
- candidate `8` morphs into:
  `x`
- node remains same geometry.
- label:
  `ANY VALUE`

### F841–F847 short pause
- left socket clears.

### F847–F891 — “check x minus 1.”
Typing/drawing sync:
- F847 `check`: query line starts.
- F856 `x`: predecessor expression begins:
  `x`
- F867 `minus`: draw `−`
- F878–F891 `1`: complete:
  `x - 1`

Use mono font.

At the end:
```text
[x - 1 ?]  ←────  [x]
```

### F891–F910 — 19f pause
Hold the symbolic predecessor test.

---

## Branch A — predecessor exists → skip
### F910–F953 — “If x minus 1 exists,”
- left socket fills.
- `EXISTS` writes.
- back-link becomes solid cyan/good.

### F953–F965 — 12f pause

### F965–F986 — “skip x.”
- candidate x’s launch-pad stem folds sideways into the same skip rail learned from10/11.
- label:
  `SKIP`
- candidate dims to `theme.chalkDim`.

No forward-walk arrow appears.

### F986–F996 — 10f pause
- branch recedes upward as a small rule motif:
```text
x−1 exists → SKIP
```

---

## Branch B — predecessor absent → real start
### F996–F1051 — “If x minus 1 does not exist,”
- symbolic gate resets.
- left socket appears hollow.
- at “not” F1033:
  inner predecessor glyph fades to outline.
- at F1040–F1051 `exist`:
  write:
  `ABSENT`

### F1051–F1063 — 12f pause

### F1063–F1117 — “this can be a real sequence start.”
- hollow predecessor socket retracts,
- query line bends downward,
- becomes start-pad stem under x,
- `START` grows beneath x.

At F1084 “real”:
- start pad brightens once.

At F1106 “start”:
- start marker fully settles.

### F1117–F1133 — 16f pause
Now both rule motifs are visible but compact:

```text
x−1 EXISTS  → SKIP
x−1 ABSENT  → START
```

This is the first time the complete general rule is allowed.

---

## “Only then, walk forward.”
### F1133–F1156 — “Only then,”
- emphasize START branch only.
- SKIP branch dims to 25%.

### F1156–F1173 — 17f pause
- from candidate x, prepare a faint forward rail.

### F1173–F1196 — “walk forward.”
- draw a rightward SVG rail:
```text
x → x+1 → x+2 → ...
```
- only 2 ghost future nodes.
- do not trace real data.

The arrow begins **only from START branch**.

### F1196–F1228 — 32f pause
Use this long pause as a conceptual reset:
- forward rail retracts,
- symbolic rule compresses to top-right mini reminder,
- center clears for real HashSet construction.

---

# 🔒 Scene 09 HashSet Visual Lock — Applies to ACT 4 and ACT 5

HashSet in Scene 09 must use a **custom SVG Chalk Hash Field** visual language.

## Non-negotiable identity
HashSet must **not** look like:
- a neat table
- a normal grid
- a sorted array
- a database icon
- a generic CS diagram

HashSet must visually communicate only three things:
1. **unordered storage**
2. **unique values**
3. **direct existence lookup**

## Locked visual form
### Name
`Chalk Hash Field`

### Structure
- one irregular chalk enclosure, drawn with our `@dsa/kit` rough style
- label on top:
  `HASH SET · UNORDERED`
- inside it, values live as **small chalk pebble / capsule nodes**
- these nodes are **not** full array cards
- nodes sit in a carefully designed irregular layout
- no left-to-right numeric ordering
- no row/column grid feel

Example spatial feeling only:
```text
         [8]         [3]

    [10]      [-1]         [0]

          [2]       [6]

   [11]         [4]      [9]

               [1]
```

### Lookup language
A membership check must happen through a small SVG **hash portal**:

```text
[ 9 ? ]  →  (hash)  →  HASH FIELD
```

The portal sends a **direct lookup pulse** into the field.
It must never feel like scanning node-by-node.

### Duplicate language
When duplicate `2` enters:
- both raw `2` values head toward the same destination node
- first `2` lands
- second `2` merges into the same node with `SvgMorph`
- a tiny purple ripple dissipates
- only one `2` remains

This is the locked visual system for all HashSet moments below.

---

# ACT 4 — Build the Real HashSet + Remove Duplicate
## F1228–F1534

**Narration:**  
“Now put all values into a hash set. The duplicate 2 disappears and membership checks become fast on average. One note before the full trace.”

---

## F1228–F1290 — “Now put all values into a hash set.”
Use the master raw values as actual source objects:

```text
[8, 1, 6, 3, 2, 2, 4, 10, 9, 11, -1, 0]
```

### F1228–F1248 — “Now put all values”
- show the raw values as one compact input row at center stage
- these are still input-side values, not HashSet nodes
- values are neutral chalk cards/tokens in source slots
- not sorted

### F1248–F1275 — “into a”
- draw the empty **Chalk Hash Field** shell
- use `RoughBox` / custom rough SVG enclosure
- top label:
  `HASH SET · UNORDERED`
- inside the shell, faint unordered destination pebble positions appear
- also draw a small **hash portal** between source row and field

### F1275–F1290 — “hash set.”
- each raw value begins a staggered `BezierFlight`
- as each value lands, it becomes a **pebble node**, not an array card
- use a small `ChalkDust` settle on landing
- destination positions are intentionally unordered

Suggested stable node layout population:
```text
8, -1, 3, 10, 0, 2, 6, 11, 4, 9, 1
```

Important:
- do not place them in numeric order
- do not arrange them as rows/columns
- the field must feel unordered but designed

### F1290–F1301 — 11f pause
- both incoming `2` values remain visible in transition or near-landing state
- this pause exists to set up the uniqueness reveal

---

## F1301–F1354 — “The duplicate 2 disappears.”
This is a signature motion, not a simple text note.

### F1301–F1309 — setup
- both `2` identities receive a soft `theme.purple` outline
- both flight paths visually converge toward the **same** Hash Field node position

### F1309–F1322 — “duplicate 2”
- first `2` lands normally in its pebble socket
- second `2` reaches nearly the same location

### F1322–F1334 — “disappears”
- second `2` overlaps slightly
- then `SvgMorph` / opacity merge:
  `2 + 2 → 2`
- add a tiny purple ripple / echo ring that fades away
- optional helper label for 10–14f:
  `UNIQUE`

### F1334–F1354 — settle
- only one `2` remains in the field
- no warn/error semantics
- this is not a mistake; it is the normal set property

---

## F1354–F1462 — “membership checks become fast on average.”
The key rule: **lookup must not feel like scanning**.

### F1354–F1372 — “and”
- raw source row fades down
- Chalk Hash Field becomes the clear center-stage hero
- portal remains visible

### YES lookup example
### F1372–F1438 — “membership checks become fast”
Use:
```text
9 ?
```

Sequence:
1. a query bubble `9 ?` appears
2. it moves into the small **hash portal**
3. portal compresses slightly
4. a direct lookup pulse arcs into the field
5. node `[9]` lights up immediately
6. return response writes:
   `YES`

Important:
- the pulse goes directly
- do not scan across all nodes

### NO lookup example
### F1438–F1462 — “on average.”
Optional short second lookup:
```text
5 ?
```

Sequence:
1. `5 ?` enters portal
2. a direct lookup pulse enters the field
3. no node lights up
4. a hollow echo ring returns
5. response:
   `NO`

Small mono annotation:
```text
expected O(1) lookup
```

Only local membership property is claimed here.
Do **not** claim full algorithm `O(n)` in Scene 09.

---

## F1462–F1534 — “One note before the full trace.”
- Chalk Hash Field shifts upward to the top teaching layer:
  y≈245..505
- keep it fully visible and clearly unordered
- `expected O(1) lookup` reduces opacity but stays readable
- bottom stage clears
- small heading writes:
  `VISUAL NOTE`

This directly prepares the next act’s number-line disclaimer.

---

# ACT 5 — Number Line for Teaching, HashSet Still Unordered
## F1559–F1926

The number line below is **not** the HashSet itself.  
It is only a teaching visualization.

The final composition must clearly show two simultaneous layers:

## Top layer
Actual structure:
```text
HASH SET · UNORDERED
```

## Bottom layer
Teaching visualization:
```text
VISUAL ONLY
```

The learner must understand this distinction instantly.

---

## F1559–F1718 — “I will place the values on a number line so the sequence is easy to see.”

### F1559–F1595 — “I will place the values”
- clone visual tokens from the Hash Field nodes downward
- do **not** remove or move the real HashSet entries
- real set remains above
- clones can be connected with faint guide stems for 8–12f

### F1595–F1639 — “on a number line”
- draw a conceptual number-line baseline below using `RoughLine`
- tick positions:
```text
-1, 0, 1, 2, 3, 4, 6, 8, 9, 10, 11
```
- optional faint empty ticks for:
```text
5, 7
```
- duplicate `2` appears only once because the set is unique

### F1639–F1718 — “so the sequence is easy to see.”
- cloned value tokens land on their numerical ticks via short `BezierFlight`
- bottom line now shows sequence islands clearly:
```text
-1—0—1—2—3—4     6     8—9—10—11
```
- do not begin the trace
- connectors remain neutral chalk, not “confirmed run” mint
- label beneath the bottom structure:
  `VISUAL NUMBER LINE`

---

## F1718–F1733 pause
- top Chalk Hash Field remains visible and unordered
- bottom number line is visible and ordered
- both layers coexist to make the conceptual difference obvious

---

## F1733–F1802 — “That is only our visual explanation.”
- draw a rough bracket around the **bottom number line only**
- label morph:
```text
VISUAL NUMBER LINE
```
→
```text
VISUAL ONLY
```

### emphasis
- at spoken `visual`, give the bottom bracket a subtle pivot accent
- at `explanation`, reduce number-line opacity slightly to ~75%
- top Chalk Hash Field remains unaffected and full identity

---

## F1802–F1834 — long pause
Use this pause to strengthen the contrast:
- softly reposition 2–3 Hash Field nodes with tiny deterministic drift inside the unordered field
- do not scramble the field
- the bottom number line stays perfectly ordered
- this makes the unordered-vs-visual distinction stronger

---

## F1834–F1904 — “A hash set itself is not sorted.”
This must be explicit and visually clean.

### F1834–F1856 — “A hash set itself”
- brighten the top-field shell and label:
  `HASH SET · UNORDERED`

### F1856–F1883 — “is not”
- a faint temporary word appears over the top field:
  `SORTED`

### F1883–F1904 — “sorted.”
- strike through that temporary word using `RoughLine`
- keep the Chalk Hash Field itself stable and unordered
- do not violently reshuffle nodes
- bottom line continues to hold `VISUAL ONLY`

The message should read:
**top = real unordered HashSet**  
**bottom = teaching-only ordered view**

---

## F1904–F1927 — pause
- fade the temporary `SORTED` strike
- keep both layers visible
- trace cursor shell appears beside the bottom number line but remains inactive
- Scene 10 can now start tracing every unique value with no confusion about what is storage vs what is visualization


# ACT 6 — Handoff to Scene 10 Full Trace
## F1927–F2005

**Narration:**  
“Now let's trace every unique value.”

### F1927–F1946 — “Now let's”
- top badge morphs:
  `OPTIMAL IDEA`
  →
  `OPTIMAL · FULL TRACE`

### F1946–F1957 — “trace”
- a small pivot cursor/pointer appears above the number line.
- do not attach it to first value yet.

### F1957–F1978 — “every”
- unique value ticks brighten one after another very quickly as a **preview sweep**, not processing.

### F1978–F1992 — “unique”
- HashSet cell count / number-line clones visually reinforce dedupe:
  second 2 absent.
- tiny label:
  `UNIQUE VALUES`

### F1992–F2006 — “value.”
- pointer settles immediately before the first Scene10 processing position.
- Since Scene10 must trace every unique value, choose deterministic visual order consistent with Scene10 plan.
- safest handoff:
  pointer rests **outside** the number line at far-left so Scene10 chooses its own first value on narration.

Final frame:

```text
HASH SET · UNORDERED
{ unique values }

VISUAL ONLY
-1 — 0 — 1 — 2 — 3 — 4    6    8 — 9 — 10 — 11
^
trace pointer ready, not started
```

No current length.
No best.
No value classified yet.

---

# 🧠 PREDECESSOR GATE SVG SPECIFICATION

## Candidate node
`RoughBox` or SVG rounded shell:
- width ≈ 150px
- height ≈ 126px
- centered x≈1040, y≈400
- mono value 62px

## Predecessor socket
- x≈760, same y
- 104×104 circle / rough rounded node
- neutral hollow state initially

## Query connector
Path:
```text
M 965 400
C 900 400, 860 400, 815 400
```
- draw with `RoughLine` or custom SVG stroke progress
- arrow points toward predecessor socket because we are asking about the left value

## YES morph
hollow socket → full predecessor node:
- outline opacity increases
- glyph appears
- connector becomes confirmed `theme.cyan/good`

## NO morph
- predecessor glyph fades
- socket remains hollow
- socket shifts left 12px
- connector bends downward:
```text
M 965 400
C 900 430, 900 500, 1040 560
```
- this path becomes start-pad stem via `SvgMorph`

## Skip morph
candidate’s bottom potential-start stem:
```text
vertical
```
morphs to:
```text
horizontal rightward skip rail
```

This reuses geometry rather than spawning a new badge.

---

# ✨ Premium / Unique Moments — EXACTLY FIVE

## 1. 9 Gets Pulled Into the Middle
The predecessor8 query succeeds, then the gate expands into `8—9—10—11` and physically shows a runner beginning from9 inside an already-existing chain.

## 2. 8’s Hollow 7 Socket Becomes a Start Pad
This is the visual “aha”: absence on the left morphs directly into permission to launch.

## 3. Concrete Gate → Symbolic `x - 1` Rule
The 8/7 geometry itself morphs into x/x−1; no new generic formula panel.

## 4. Duplicate2 Merge Into One HashSet Cell
Two source2 cards converge and visually fuse into a single set entry.

## 5. HashSet Above / Visual Number Line Below
Actual unordered set remains visible while cloned teaching values form the ordered line; the “visual only” disclaimer is built into the composition, preventing conceptual confusion.

No additional hero effects.

---

# 🚫 Anti-Slop Rules

Do **not**:
1. show x−1 rule at frame0
2. show all starts immediately
3. classify -1/6/8 in this scene
4. fully trace 8→9→10→11 as a scored run
5. show longest/current counters
6. sort the HashSet itself
7. remove HashSet when number line appears
8. imply number line is storage structure
9. use generic flowchart cards
10. use separate red/green yes-no dashboards
11. create a new background
12. use hardcoded new colors
13. show code
14. show total O(n) complexity
15. start Scene10 processing before handoff
16. duplicate value2 on number line
17. use random HashSet motion
18. auto-flex number-line nodes
19. animate candidate movement and result state at the same time
20. cover caption safe zone

---

# ✅ Critical Review Frames

### F0
Scene08 unresolved START? continuity.

### F10
candidate9 selected.

### F42
predecessor8 socket appears.

### F77
YES state.

### F124
9 start stem being rejected.

### F239
runner enters from9 into middle.

### F285
MIDDLE brace clear.

### F316
candidate10.

### F359
9 predecessor query.

### F443
10 not-start decision.

### F482
candidate11.

### F514
10 predecessor query.

### F573
11 not-start.

### F612
candidate8.

### F646
7 predecessor socket.

### F681
NO state.

### F739
hollow predecessor socket morphing into start pad.

### F784
8 start discovery settled.

### F826
candidate becomes symbolic x.

### F867
`x - 1` constructing.

### F936
exists branch active.

### F965
SKIP.

### F1033
not-exists branch active.

### F1106
real START.

### F1181
walk-forward rail starts only from valid start.

### F1228
master values return.

### F1281
HashSet shell active.

### F1322
two 2s converge.

### F1334
duplicate2 merge.

### F1372
membership query begins.

### F1425
fast lookup state.

### F1559
visual-number-line note begins.

### F1639
number-line baseline drawn.

### F1693
sequence islands easy to see.

### F1768
VISUAL ONLY label.

### F1856
HashSet emphasized.

### F1883
NOT SORTED strike begins.

### F1927
full-trace handoff begins.

### F2005
pointer ready, no value processed.

---

# ✅ Acceptance Checklist

- [ ] exactly **2006 frames**
- [ ] sync JSON word frames respected
- [ ] @dsa/kit background/theme/component lock followed
- [ ] Scene08 START? question preserved at opening
- [ ] predecessor rule discovered through 9/10/11/8 examples
- [ ] 9’s predecessor8 query shown accurately
- [ ] 9 visually demonstrated as middle-of-sequence
- [ ] 10 checks9 and is skipped
- [ ] 11 checks10 and is skipped
- [ ] 8 checks7 and receives NO
- [ ] 8’s NO state morphs into START pad
- [ ] symbolic x−1 rule appears only after examples
- [ ] exists → skip branch shown
- [ ] absent → start branch shown
- [ ] forward walk appears only after valid-start branch
- [ ] no full optimal trace
- [ ] no longest/best counters
- [ ] master values build real HashSet
- [ ] duplicate2 visually merges into one set value
- [ ] expected O(1) membership shown only as local lookup property
- [ ] unordered HashSet stays unordered
- [ ] number line explicitly marked VISUAL ONLY
- [ ] HashSet remains visible while visual line exists
- [ ] “HashSet is not sorted” visually reinforced
- [ ] Scene10 pointer ready but processing not begun
- [ ] main hero y≈300..600
- [ ] captions y≈960..1040 clear
- [ ] no layout jitter
- [ ] no hard cut

---

# Final Scene 09 Visual Story — One Line

**Scene08’s unresolved `START ?` becomes a reusable Predecessor Gate: candidate `9` asks whether `8` exists and, when the left socket fills, the geometry expands into `8—9—10—11` to physically expose that starting at9 enters from the middle; the same gate quickly rejects10 and11, then candidate8 asks for7 and the unanswered hollow predecessor socket bends downward and morphs into a START launch pad, producing the first true-start insight; that exact 8/7 geometry then morphs into the symbolic `x` / `x−1` rule where predecessor-exists folds into SKIP and predecessor-absent becomes START, with a forward rail drawn only from a valid start; the master input then Bezier-flies into the existing unordered HashSetTable, the duplicate2 converges and fuses into one set cell, membership queries pulse directly without scanning, and finally cloned values form a separately labeled VISUAL ONLY number line beneath the still-visible unordered HashSet so the next scene can trace unique values without ever implying that the set itself is sorted.**
