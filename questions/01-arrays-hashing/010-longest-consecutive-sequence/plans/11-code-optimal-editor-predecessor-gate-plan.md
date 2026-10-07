# Scene 11 · CODE — OPTIMAL HASHSET / Code Editor + Predecessor Gate Animation Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `11-code-optimal.mp3` — **62.360 s** — **1871 frames** @ 30 fps  
**Goal**: Convert the already-proven optimal idea into concise Python. The code editor on the left is the hero and builds the solution line-by-line, character-by-character in exact narration sync. The right side reuses only the locked `@dsa/kit` **Chalk Hash Field + Predecessor Gate** as a compact semantic explainer for the currently active code line — no full testcase trace is replayed.

---

# 🔒 @dsa/kit CONSISTENCY LOCK — NON-NEGOTIABLE

Every visual must stay inside the existing Code With Animation design system.

## Background
- `theme.boardBg` / locked green chalkboard
- existing board vignette only
- no new scene background
- no gradients / glass panels / generic IDE theme

## Typography
- Patrick Hand for chalk explanation labels
- SFMono / Consolas / Menlo for code and symbolic expressions
- existing font helpers from `fonts.ts`

## Semantic colors
Use only existing tokens:
- `theme.chalkText`
- `theme.chalkDim`
- `theme.pivot`
- `theme.good`
- `theme.warn`
- `theme.highlight`
- `theme.cyan`
- `theme.purple`

No new hardcoded accent colors.

## Existing kit primitives
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

The right-side HashSet must stay in the locked **Chalk Hash Field** visual language:
- irregular enclosure
- unordered pebble nodes
- hash portal
- direct membership pulse
- never a generic table/grid

---

# 🎯 Pedagogical Philosophy & Hard Rules

## 1. CODE SCENE = IMPLEMENTATION ONLY
Do not replay the master trace.

The right-side visuals are only symbolic explanations for the active line:
- small unordered set field
- one candidate `x`
- one predecessor socket `x - 1`
- one forward node `x + 1`
- one current/length state

Do not walk through:
`-1→0→1→2→3→4`,
`6`,
or
`8→9→10→11`
again.

---

## 2. LEFT CODE EDITOR IS THE HERO
The code editor occupies the larger share of the canvas.

All implementation lines:
- appear only when narration reaches their idea
- type left-to-right
- preserve indentation
- keep future lines completely hidden
- leave a blinking cursor during pauses

No autocomplete.
No full-code paste.

---

## 3. CHARACTER TYPING MUST FOLLOW THE WORD WINDOWS
Code tokens should appear on the narration phrase that semantically owns them.

When narration says:
> “NUM underscore set equals set NUMs”

type:
```python
num_set = set(nums)
```
token-by-token in that exact phrase window.

When narration says:
> “If NUM minus one is not in the set”

type:
```python
if num - 1 not in num_set:
```

When narration says:
> “move current forward and increase the length”

type the two update lines in those corresponding word windows.

---

## 4. ONE IDEA PER FRAME
For each active line:
1. code types
2. right-side state resolves
3. motion happens
4. counter/state settles

Do not type code, move a runner, flash a result, and update counters simultaneously.

---

## 5. NO COMPLEXITY PROOF HERE
Do not show:
- total `O(n)`
- space `O(n)`
- amortized proof
- sequence-island proof

Scene 12 owns complexity.

It is allowed to visually imply that HashSet membership is direct because narration explicitly says “fast average membership checks,” but do not turn this into the final total-complexity derivation.

---

# 🧾 Exact Python Code Built In This Scene

```python
def longestConsecutive(nums):
    num_set = set(nums)
    longest = 0

    for num in num_set:
        if num - 1 not in num_set:
            current = num
            length = 1

            while current + 1 in num_set:
                current += 1
                length += 1

            longest = max(longest, length)

    return longest
```

Do not add:
- comments
- type hints
- sorting
- empty-array guard
- extra helper functions

This implementation naturally returns `0` for an empty set because the loop never executes.

---

# 📐 Layout Specifications — 1920×1080

## Top badge
```text
OPTIMAL · CODE
y = 28..70
```

## Left code editor
```text
x = 55..1110
y = 105..885
```

Approx:
- width ~1055px
- line-number gutter ~58px
- code content starts x≈145px
- mono font ~30–33px
- line-height 48–52px
- fixed editor geometry for whole scene
- filename tab:
  `hashset_optimal.py`

## Right semantic explainer
```text
x = 1150..1860
y = 145..835
```

One adaptive stage only.

Possible states:
- mini Chalk Hash Field
- Predecessor Gate
- START pad
- symbolic forward rail
- max comparator

No multi-card dashboard.

## Captions safe zone
```text
y = 960..1040
```

---

# 🔗 Scene 10 → Scene 11 Continuity

Scene 10 ends with:
- left-side empty code-editor guide lines
- right-side compact Chalk Hash Field reference
- no Python characters

Scene 11 starts from that exact frame.

The first three conceptual SVG guides from Scene 10 map into:
1. set/predecessor logic
2. valid-start logic
3. forward-walk logic

At F0, those guide lines become actual editor baselines.
No hard cut.

---

# ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frames | Spoken Beat | Code Action | Right-Side Motion |
|---|---:|---|---|---|
| 0 | F0–F360 | convert nums to set / unique lookup | function signature + `num_set = set(nums)` | raw mini tokens collapse into Chalk Hash Field; duplicate echo merges; direct lookup pulse |
| 1 | F361–F490 | longest0 / every unique number | `longest = 0`, `for num in num_set:` | longest state initializes; candidate pebble selector appears |
| 2 | F491–F992 | most important line / predecessor rule | `if num - 1 not in num_set:` | full Predecessor Gate draws and resolves absent-predecessor → START |
| 3 | F993–F1094 | current=num, length=1 | two initialization lines | candidate morphs to CURRENT; length initializes1 |
| 4 | F1095–F1365 | current+1 / while / move + increment | while line + two update lines | symbolic forward query through hash portal; runner moves one step; length increments |
| 5 | F1366–F1498 | missing next → run finished | no new branch code | ghost next node returns NO; forward rail stops |
| 6 | F1499–F1633 | update longest / return | max line + return line | max comparator → output |
| 7 | F1634–F1870 | “That’s it… main work was where sequence should start” | full-code review | predecessor condition becomes conceptual hero; no trace replay |

---

# ACT 0 — Build the HashSet in Code
## F0–F360

**Narration:**  
“First, convert NUMs into a set. NUM underscore set equals set NUMs. This gives us unique values and fast average membership checks.”

---

## F0–F28 — Function signature
Scene10 editor shell is already present.

### F0–F16 — “First,”
- cursor appears on line1
- type:
```python
def
```

### F16–F28 pause
Complete the function shell quickly but cleanly:
```python
def longestConsecutive(nums):
```

This is contextual scaffolding, not the narrated concept itself.

By F28:
- line1 complete
- cursor moves to indented line2

No right-side hero change yet.

---

## F28–F76 — “convert NUMs into a set.”
Begin the real narrated implementation.

### Left
Type the semantic skeleton of line2:

F28–F40:
```python
    num_set
```

F40–F58:
- keep cursor at end
- do not type `=` yet
- narration is still describing conversion

F58–F76:
- type:
```python
 = 
```
and pause before constructor

Right:
- a tiny unsorted mini input cluster appears:
```text
8   2   2   9   -1
```
only symbolic, not master trace
- empty Chalk Hash Field shell begins drawing
- hash portal appears between cluster and field

Do not yet populate fully.

---

## F76–F88 pause
- cursor blinks after `num_set = `
- field shell holds

---

## F88–F196 — “NUM underscore set equals set NUMs.”
This phrase explicitly spells the code.

Type token-by-token:

### F88–F127 — “NUM underscore set”
Ensure left side visibly resolves to:
```python
    num_set
```
If it already exists from prior beat, animate a subtle token underline synced to these words rather than retyping.

### F127–F146 — “equals”
Type / reveal:
```python
 = 
```
if not already final.

### F146–F168 — “set”
Type:
```python
set(
```

### F168–F196 — “NUMs.”
Type:
```python
nums)
```

Final line:
```python
    num_set = set(nums)
```

### Right motion
As `set(nums)` finishes:
- mini input tokens Bezier-fly through hash portal
- land as unordered pebble nodes
- duplicate second2 converges into existing2 node
- tiny purple merge ripple dissipates

This is a **compact semantic morph**, not the full Scene10 construction.

---

## F196–F210 pause
- line2 active highlight remains
- Hash Field settles

---

## F210–F346 — “This gives us unique values and fast average membership checks.”
No new code line yet.

Right-side explanation only.

### F210–F259 — “unique values”
- duplicate-merge echo replays subtly:
  two tiny `2` ghosts → one2
- label:
  `UNIQUE`

Fade label after ~20f.

### F259–F281 — “and”
- query bubble appears:
```text
9 ?
```

### F281–F332 — “fast average membership”
- query enters hash portal
- portal emits direct cyan pulse
- matching9 pebble lights
- no scanning of other nodes

### F332–F346 — “checks.”
- `YES` returns
- tiny mono note:
  `avg membership`
No `O(1)` badge necessary here; narration does not explicitly say Big-O.

---

## F346–F361 pause
- right Hash Field reduces to compact reference state
- cursor moves to line3

---

# ACT 1 — Longest = 0 + Iterate Unique Numbers
## F361–F490

---

## F361–F407 — “Longest starts at zero.”
Type:
```python
    longest = 0
```

Suggested sync:
- F361–F383 `longest`
- F383–F393 ` =`
- F393–F407 ` 0`

Right:
- small state line appears:
```text
LONGEST 0
```
Use `CountUp` only from blank→0, not a dramatic animation.

---

## F407–F421 pause
- cursor blank line
- editor stays fixed

---

## F421–F479 — “Now go through every unique number.”
Type:
```python
    for num in num_set:
```

Token mapping:
- F421–F431 `for`
- F431–F455 ` num in`
- F455–F466 ` num_set`
- F466–F479 `:`

Right:
- Chalk Hash Field remains unordered
- one pivot selection ring moves between 2–3 arbitrary pebbles as a **symbolic iterator**
- do not imply numerical order
- finish with one generic candidate pebble elevated:
```text
num
```

No specific value from master trace.

---

## F479–F491 pause
- cursor moves one indentation deeper
- symbolic candidate stays right

---

# ACT 2 — The Most Important Line: Predecessor Rule
## F491–F992

**Narration:**  
“And here is the most important line in the whole solution. If NUM minus one is not in the set, only then do we start a sequence. Why? Because there is no predecessor. So this number is the beginning.”

This is the hero act of Scene11.

---

## F491–F621 — “most important line…”
Do not type future code immediately.

### Left
- cursor waits on inner line
- a faint horizontal active-line guide appears

### Right
- generic candidate `num` moves to center-right
- predecessor socket grows one step left
- no expression yet
- all other Hash Field pebbles dim to 30%

At F532 “most”:
- editor active-line border gets pivot accent

At F562 “important”:
- one `RoughLine` underline begins beneath the empty code line

At F605–F621 “solution”
- underline completes
- cursor blinks

This builds attention before revealing the rule.

---

## F621–F641 pause
Hold the empty important line.
No spoiler.

---

## F641–F796 — Type predecessor condition
Type:
```python
        if num - 1 not in num_set:
```

Exact token choreography:

### F641–F649 — “If”
Type:
```python
        if
```

### F649–F670 — “NUM minus”
Type:
```python
 num -
```

Right:
- candidate `num` highlighted
- predecessor socket begins expression

### F670–F682 — “one”
Type:
```python
 1
```
Right expression completes:
```text
num - 1
```

### F682–F703 — “is not”
Type:
```python
 not
```
Right predecessor socket becomes hollow / absent-state candidate.

### F703–F723 — “in the set”
Type:
```python
 in num_set
```

### F723–F737 pause
- do not close line consequence yet
- right query bubble:
  `num - 1 ?`
enters hash portal
- no matching node pulses
- hollow echo begins returning

### F737–F796 — “only then do we start a sequence.”
Complete:
```python
:
```
by early part of window.

Right:
1. hollow NO response settles
2. predecessor connector bends downward via `SvgMorph`
3. becomes START-pad stem beneath `num`
4. label:
   `START`

Only after START pad is fully formed should the editor line receive a subtle good accent.

---

## F796–F820 — 24f pause
This pause is for understanding:
- code line remains highlighted
- right shows only:
```text
num - 1 absent
        ↓
      START
```
No forward walk yet.

---

## F820–F899 — “Why? Because there is no predecessor.”
No code typing.

Right:
- Hash Field dims further
- missing predecessor socket becomes the hero
- draw a short leftward relation:
```text
[empty predecessor]    [num]
```

At F870 “no”:
- socket ring becomes hollow with chalk break

At F880–F899 “predecessor”:
- label writes:
  `NO PREDECESSOR`

This is the causal explanation for the condition.

---

## F899–F923 pause
- causal label holds
- no motion

---

## F923–F976 — “So this number is the beginning.”
- hollow predecessor socket retracts
- START pad under `num` brightens
- generic forward rail appears faintly to the right but remains inactive
- label under candidate:
  `BEGINNING`

No actual values.

---

## F976–F993 pause
- cursor moves to first line inside the condition

---

# ACT 3 — Initialize Current + Length
## F993–F1094

**Narration:**  
“Set current to NUM and length to one.”

---

## F993–F1043 — Type current
```python
            current = num
```

Sync:
- F993–F1010 `current`
- F1010–F1024 ` = num`
- F1024–F1043 settle during “and”

Right:
- generic candidate `num` morphs label:
  `num`
  →
  `CURRENT`
- start pad remains beneath it

---

## F1043–F1078 — Type length
```python
            length = 1
```

Sync:
- F1043–F1055 `length`
- F1055–F1068 ` =`
- F1068–F1078 ` 1`

Right:
```text
CURRENT = num
LENGTH = 1
```
Use compact chalk state labels.
No card panel.

---

## F1078–F1095 pause
- cursor inserts blank line
- faint forward node `current + 1` appears but is not queried

---

# ACT 4 — While Next Exists → Move Forward + Increase Length
## F1095–F1365

---

## F1095–F1160 — “Now keep checking current plus one.”
Begin typing the while line:
```python
            while current + 1 in num_set:
```

Token sync:
- F1095–F1109 `while`
- F1109–F1133 ` current`
- F1133–F1160 ` + 1`

Do not type membership tail yet.

Right:
- current node active
- next ghost node appears:
```text
current + 1
```
- query bubble forms but does not launch

---

## F1160–F1184 pause
- cursor waits after `current + 1`
- right target ghost holds

---

## F1184–F1237 — “While the next value exists,”
Complete the line:
```python
 in num_set:
```

At F1215–F1237 “exists”:
- right query enters hash portal
- one generic matching pebble pulses
- YES returns

Only now:
- forward rail becomes good/mint
- runner is permitted to move

---

## F1237–F1253 pause
- YES holds
- cursor moves into while body
- runner has not moved yet

---

## F1253–F1290 — “move current forward”
Type:
```python
                current += 1
```

Suggested:
- F1253–F1274 `current`
- F1274–F1290 ` += 1`

Right:
1. current state changes first
2. runner bead moves one symbolic step right
3. previous node becomes history

No length update yet.

---

## F1290–F1310 — “and”
- cursor drops next line
- runner settles

---

## F1310–F1345 — “increase the length.”
Type:
```python
                length += 1
```

Right:
- LENGTH rolls:
  `1 → 2`
- active forward rail extends one unit

This is only one symbolic step.
Do not replay a full sequence.

---

## F1345–F1366 pause
- completed symbolic step holds
- cursor remains after increment line
- next ghost node appears faintly, preparing missing case

---

# ACT 5 — Missing Next Value Ends Run
## F1366–F1498

**Narration:**  
“When the next value is missing, the run is finished.”

No new Python branch is needed because the `while` naturally ends.

---

## F1366–F1418 — “When the next value is missing,”
Right only:
- new target:
  `current + 1 ?`
- query enters hash portal
- no node pulses
- hollow echo returns

At F1408 “missing”:
- target ghost receives warn outline
- attempted forward connector stops short

Do not type an `else` or `break`.

---

## F1418–F1439 pause
- NO response sits
- attempted connector remains incomplete

---

## F1439–F1481 — “the run is finished.”
- attempted connector fractures/retracts with tiny `Shatter`
- runner stays on last valid symbolic node
- active rail gets an end-cap
- small label:
  `RUN ENDS`

Left:
- while line receives subtle completion underline
- cursor moves out of while indentation toward max line

---

## F1481–F1499 pause
- right run summary compacts
- editor active line moves to `longest` line slot

---

# ACT 6 — Update Longest + Return
## F1499–F1633

---

## F1499–F1551 — “Update longest and”
Type:
```python
            longest = max(longest, length)
```

Typing:
- F1499–F1513 `longest`
- F1513–F1529 ` = max(`
- F1529–F1551 `longest, length)`

Right:
- symbolic `LONGEST` and `LENGTH` values slide toward a central `max` comparison
- larger survives
- survivor returns to LONGEST slot

Do not use actual master value6; keep implementation symbolic:
```text
max(longest, length)
```

---

## F1551–F1609 — “finally return longest.”
Cursor exits outer loop indentation.

Type:
```python
    return longest
```

Suggested:
- F1551–F1570 indentation / setup
- F1570–F1592 `return`
- F1592–F1609 ` longest`

Right:
- LONGEST token rises
- thin arrow points to:
  `OUTPUT`
- no numeric value shown

---

## F1609–F1634 — 25f pause
Full optimal code is now visible.

Right-side motion freezes into a clean semantic strip:
```text
HASH SET  →  PREDECESSOR GATE  →  FORWARD WALK
```
Use SVG motifs, not rectangular cards.

---

# ACT 7 — Final Review: “The Code Is Short Because the Idea Is Clear”
## F1634–F1870

**Narration:**  
“That’s it. The code is short because the main work was understanding where a sequence should start.”

This is not a complexity scene.
It is an implementation recap.

---

## F1634–F1661 — “That’s it.”
Left:
- cursor stops blinking for 8f
- whole function becomes fully readable
- active-line wash clears

Right:
- semantic strip settles

No applause / particles.

---

## F1661–F1703 — “The code is short”
Left:
- function block receives one gentle rough bracket from first implementation line to return
- label:
  `SHORT IMPLEMENTATION`

Do not shrink code too much.

---

## F1703–F1763 — “because the main work”
- bracket recedes
- highlight the predecessor condition line only:
```python
if num - 1 not in num_set:
```
- all other lines dim to ~35%

Right:
- Hash Field and forward rail fade
- only candidate `num` + predecessor socket remain

---

## F1763–F1810 — “was understanding”
Premium conceptual morph:
- highlighted code condition detaches a faint underline/path
- underline bends right via `SvgMorph`
- becomes the Predecessor Gate connector

This visually says:
**the code line came directly from the idea we already understood.**

---

## F1810–F1871 — “where a sequence should start.”
Right:
- predecessor socket becomes hollow
- connector bends into START pad beneath `num`
- `START` writes once
- code line on left stays highlighted

Final frame:
- full optimal code visible
- key line strongest:
```python
if num - 1 not in num_set:
```
- right:
```text
[num - 1 absent]  →  START
```
- no complexity badge
- no full trace
- clean handoff to Scene12 complexity

---

# 🔤 Character-Typing Map

| Code line | Frame window |
|---|---:|
| `def longestConsecutive(nums):` | F0–F28 |
| `num_set = set(nums)` | F28–F196 |
| `longest = 0` | F361–F407 |
| `for num in num_set:` | F421–F479 |
| `if num - 1 not in num_set:` | F641–F796 |
| `current = num` | F993–F1043 |
| `length = 1` | F1043–F1078 |
| `while current + 1 in num_set:` | F1095–F1237 |
| `current += 1` | F1253–F1290 |
| `length += 1` | F1310–F1345 |
| `longest = max(longest, length)` | F1499–F1551 |
| `return longest` | F1551–F1609 |

Future lines remain hidden until their window begins.

---

# 🧬 Right-Side SVG Morph Chain

```text
Scene10 compact Chalk Hash Field
        ↓
mini input tokens
        ↓
Hash Field + duplicate merge
        ↓
direct membership pulse
        ↓
generic candidate num
        ↓
predecessor socket
        ↓
num - 1 ?
        ↓
ABSENT
        ↓ SvgMorph
START pad
        ↓
CURRENT / LENGTH = 1
        ↓
current + 1 ?
        ↓
YES through hash portal
        ↓
runner moves one symbolic step
        ↓
length +1
        ↓
next query returns NO
        ↓
run ends
        ↓
max(longest,length)
        ↓
OUTPUT longest
        ↓
full-code review
        ↓
key condition underline morphs back into predecessor gate
```

---

# ✨ Premium / Unique Moments — Exactly Five

## 1. `set(nums)` → Chalk Hash Field
The code constructor finishes as symbolic source values flow through the hash portal into unordered pebble nodes and a duplicate2 echo merges.

## 2. Most-Important-Line Reveal
The editor deliberately waits on an empty highlighted line before typing `if num - 1 not in num_set:` while the Predecessor Gate constructs in sync.

## 3. Missing Predecessor → START Pad
The hollow predecessor socket and query connector physically morph into a launch pad beneath the candidate.

## 4. `while` Line → One Symbolic Forward Step
The right side demonstrates exactly one found-next iteration: direct membership pulse → current advances → length increments.

## 5. Code Condition → Idea Morph
During the final narration, the highlighted predecessor-condition underline detaches from the editor and morphs back into the Predecessor Gate, proving that the short code comes from the earlier reasoning.

No additional hero effects.

---

# 🚫 Anti-Slop / Anti-Generic Rules

Do **not**:
1. replay the Scene10 full trace
2. permanently show the 11-value number line
3. show HashSet as a grid/table
4. sort the Hash Field
5. scan set nodes one-by-one
6. paste full code at frame0
7. reveal future lines early
8. use autocomplete animation
9. show complexity curves
10. show total O(n)
11. show sorting
12. use generic lightbulb icons
13. use generic flowchart cards
14. create new background/colors
15. use random particle motion
16. update LENGTH before `length += 1`
17. move runner before membership YES
18. type `break` or `else` for while termination
19. show final answer6
20. cover caption safe zone

---

# ✅ Critical Review Frames

### F0
Scene10 editor-guide continuity.

### F28
function signature complete; set-line begins.

### F65
set-conversion line skeleton.

### F88
explicit `num_set` narration begins.

### F146
`set(` typing.

### F168
`nums)` typing.

### F196
`num_set = set(nums)` complete.

### F233
unique-value explanation.

### F281
fast membership pulse begins.

### F332
direct membership result.

### F361
`longest = 0` begins.

### F393
zero typed.

### F421
for-loop typing begins.

### F455
unique iteration token active.

### F491
most-important-line setup.

### F562
important-line underline building.

### F621
empty highlighted line waiting.

### F641
`if` condition begins.

### F658
`num` token.

### F670
`- 1`.

### F695
`not`.

### F716
`num_set`.

### F737
membership query resolves absent.

### F769
START-pad morph underway.

### F796
condition complete + START.

### F880
NO PREDECESSOR hero.

### F958
candidate identified as beginning.

### F993
`current = num` typing.

### F1043
`length = 1` begins.

### F1095
while-line starts.

### F1133
`current + 1`.

### F1215
membership tail.

### F1237
YES state, runner still unmoved.

### F1253
current increment line begins.

### F1274
runner movement allowed.

### F1310
length increment line.

### F1366
missing-next explanation begins.

### F1408
missing state.

### F1439
run-end morph.

### F1499
max line typing.

### F1551
return-line setup.

### F1570
`return` typing.

### F1609
full function complete.

### F1661
final review begins.

### F1733
predecessor line becomes central.

### F1780
condition underline morphing to gate.

### F1858
START concept final emphasis.

### F1870
clean Scene12 handoff.

---

# ✅ Acceptance Checklist

- [ ] exactly **1871 frames**
- [ ] exact sync JSON timing respected
- [ ] @dsa/kit lock explicitly followed
- [ ] left code editor remains hero
- [ ] right side uses locked Chalk Hash Field language
- [ ] no full optimal trace replay
- [ ] function signature built before implementation lines
- [ ] `num_set = set(nums)` typed with spoken phrase
- [ ] duplicate set behavior shown compactly
- [ ] direct membership visual, no scanning
- [ ] `longest = 0` typed on narration
- [ ] loop iterates generic unordered unique values
- [ ] predecessor condition held back until narrated
- [ ] condition line gets strongest emphasis
- [ ] missing predecessor morphs to START
- [ ] `current = num` and `length = 1` type in order
- [ ] while condition typed in narration sync
- [ ] membership YES resolves before current moves
- [ ] current moves before length increments
- [ ] missing next ends while naturally
- [ ] no fake `break` line
- [ ] max line typed only at update-longest narration
- [ ] return line typed only at final-return narration
- [ ] no total complexity proof
- [ ] no answer6
- [ ] final review ties code back to predecessor idea
- [ ] captions safe zone clear
- [ ] no layout jitter
- [ ] no new colors/background

---

# Final Scene 11 Visual Story — One Line

**Scene10’s empty editor guides become a real Python editor while the compact Chalk Hash Field remains on the right; the function signature appears first, then `num_set = set(nums)` types in exact narration sync as symbolic input tokens pass through the hash portal into unordered pebble nodes and a duplicate echo merges, `longest = 0` and the unique-value loop build next, and the editor deliberately pauses before revealing the most important line `if num - 1 not in num_set:` while a generic candidate and predecessor socket construct beside it; the absent predecessor response bends into a START pad, `current = num` and `length = 1` initialize, the `while current + 1 in num_set:` line drives one symbolic direct-membership step where current advances only after YES and length increments afterward, a missing-next query naturally ends the run without extra code, `longest = max(longest, length)` and `return longest` complete the implementation, and the final review dims everything except the predecessor condition whose underline physically morphs back into the Predecessor Gate — showing that the code is short because the hard part was understanding where a sequence should begin.**
