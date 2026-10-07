# Scene 04 · CODE IT — BRUTE FORCE · Left Code Editor + Right Motion Graphics Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `04-code-brute.mp3` *(from supplied sync JSON file)*  
**Duration**: **69.300 s** — **2079 frames** @ **30 fps**  
**Goal**: On the **left**, type the brute-force Python code character-by-character in sync with narration. On the **right**, show a live motion-graphics explanation of the exact line currently being written. The code must feel like a real teacher is constructing it from the trace — not dumping a finished solution. No spoiler for better/optimal methods.

---

# 🔗 Scene 03 → Scene 04 Continuity Lock

Scene 03 ends with:
- repeated-search trails compressing downward,
- the original array receding,
- a thin baseline morphing toward a code-editor shell.

Scene 04 **begins from that exact handoff**.

There is:
- no hard cut,
- no separate title card,
- no fresh unrelated layout.

The compressed line from Scene 03 becomes the **left code editor’s first text baseline**.

---

# 🎯 Core Teaching Rules

## 1. LEFT = CODE / RIGHT = UNDERSTANDING
The screen is split into two permanent regions:

### Left panel
- code editor only
- monospaced font
- line numbers
- blinking cursor
- character-by-character typing
- current line highlighted
- future lines hidden until spoken

### Right panel
- motion-graphics explanation
- SVG arrows, boxes, counters, sequence ribbon, list scan, max-compare
- reflects only the current code idea
- never shows the full brute trace again
- never shows better/optimal ideas

---

## 2. NO “PASTE WHOLE CODE”
The teacher is building the code live.

That means:
- only the line being discussed is typed,
- indentation appears naturally,
- the cursor moves line by line,
- small pauses are used for thinking,
- already typed lines remain visible and readable.

Do not drop a prewritten 9-line function all at once.

---

## 3. TYPE CHARACTERS IN WORD WINDOWS
The user asked that “all chars need typing with sync with word.”

Interpretation:
- during each spoken phrase, type the relevant code characters across that word span,
- do not type code during unrelated silence unless only the final punctuation/indent settle needs a few frames,
- cursor blink can continue during pauses.

So the **typing rhythm follows narration**, not random editor speed.

---

## 4. RIGHT PANEL EXPLAINS, NOT DECORATES
Every motion on the right must answer:
- what is this variable?
- what is this loop doing?
- what is this condition checking?
- what changes when the condition is true?
- what happens when it fails?
- how do we compare lengths?
- why is the brute force expensive?

No generic floating icons.
No unnecessary dashboards.
No visual noise.

---

## 5. NO SPOILER
Do not hint:
- HashSet,
- sort,
- start-of-sequence trick,
- O(n),
- better or optimal code structure.

This scene is **only brute-force code** and its cost.

---

# 🧾 The Exact Code To Build

Use this exact Python brute-force implementation:

```python
def longestConsecutive(nums):
    longest = 0

    for num in nums:
        current = num
        length = 1

        while current + 1 in nums:
            current += 1
            length += 1

        longest = max(longest, length)

    return longest
```

### Important note about narration
The sync transcript contains the spoken word **“LONGER”** around frames 175–223, but the code variable must still be:

```python
longest
```

Treat that as a pronunciation / transcript issue.  
Do **not** literally type `longer = 0`.

---

# 🖥 Layout System — 1920×1080

## Global split
- Left code editor: **x 60..930**
- Right explanation board: **x 980..1860**
- Center gutter: ~40px breathing room

## Left panel
- width: ~870px
- editor top: y 110
- editor height: y 110..860
- top mini tab/title:
  `brute_force.py`
- dark chalkboard-green editor with subtle code-pane framing
- line numbers at left
- cursor starts at line 1, column 1

## Right panel
- explanation board starts y 130
- main visualization zone y 160..760
- small helper caption band y 790..880
- keep bottom caption-safe zone clear

## Persistent compact header
Top-left outside editor:
```text
BRUTE FORCE · CODE
```

Top-right tiny scene label:
```text
LC128 · BUILD THE CODE
```

---

# 🎨 Visual Language

Use course “chalkboard” design system:

- `theme.boardBg`
- `theme.chalkText`
- `theme.chalkDim`
- `theme.pivot`
- `theme.good`
- `theme.warn`
- `theme.cyan`

## Syntax highlighting
Keep restrained:
- keywords (`def`, `for`, `while`, `return`) → `theme.pivot`
- variables (`longest`, `num`, `current`, `length`) → `theme.chalkText`
- numbers (`0`, `1`) → `theme.good`
- operators / punctuation → `theme.chalkDim`
- built-in `max` → `theme.cyan`

Do not use bright IDE rainbow colors.

---

# 🧩 Code Panel Behavior

## Typing model
Each code line is typed in three layers:
1. cursor arrives,
2. characters type across the narration window,
3. line settles with slight chalk-completion texture.

Use:
- monospaced character cells
- 1 char every 1–3 frames depending on word window size
- no random typo effects
- no AI-autocomplete jump

## Current line highlight
- subtle warm underline or left-side highlight bar
- previous lines stay readable but dimmer
- active line = 100% opacity
- unrelated lines = 75–85%

## Cursor behavior
- blinks in pauses
- pauses briefly before starting a new line
- moves instantly on Enter, then resumes typing

---

# 🧩 Right Panel Explanation System

Use the right panel as one adaptive “teaching board” that morphs through several states:

1. **Variable card** — explain `longest`
2. **Array iteration rail** — explain `for num in nums`
3. **Current/length setup** — explain `current = num`, `length = 1`
4. **Repeated search scanner** — explain `while current + 1 in nums`
5. **State update pair** — explain `current += 1`, `length += 1`
6. **End-of-sequence stop** — explain loop stops when next missing
7. **Compare board** — explain `max(longest, length)`
8. **Return board** — explain final answer
9. **Cost spotlight** — explain why brute force gets expensive

All of these should morph from one into the next, not hard cut.

---

# ⏱ High-Level Audio Structure

| Act | Frames | Narration | Code goal | Right-panel goal |
|---|---:|---|---|---|
| 0 | F0–142 | convert thinking into code | editor shell + function start | from trace line → code board |
| 1 | F143–242 | longest starts at zero | type `longest = 0` | “best answer so far” box |
| 2 | F243–356 | go through every number | type `for num in nums:` | iterate array pointer |
| 3 | F357–484 | each number as a beginning | reinforce loop meaning | start-candidate focus |
| 4 | F485–631 | current and length start | type init lines | current/length variable cards |
| 5 | F632–856 | repeated search / while line | type `while current + 1 in nums:` | live repeated-search scanner |
| 6 | F857–934 | increase length | type inner updates | current/length advance together |
| 7 | F935–1047 | next missing ends sequence | explain stop state | miss / loop exit board |
| 8 | F1048–1219 | compare with longest | type `longest = max(...)` | compare board |
| 9 | F1220–1300 | return longest | type `return longest` | final-answer handoff |
| 10 | F1301–1956 | code is simple, but costly | spotlight while line | repeated list scan critique |
| 11 | F1957–2079 | brute force becomes expensive | end frame / handoff | prepare Scene 05 complexity |

---

# ACT 0 — Editor Enters From Scene 03
## F0–F142
**Narration:** “Alright, let's convert that exact thinking into code.”

### F0–F20 — “Alright,”
- Scene 03’s compressed search line sits low-left.
- A rectangular editor shell is drawn around it using `RoughBox`.
- Top tab writes:
  `brute_force.py`
- No code yet.

### F20–F64 — “let's convert that exact”
- Left panel expands to full code editor.
- Right panel fades in as a blank chalk explanation board.
- Editor line numbers `1..9` appear faintly.
- Cursor lands at line 1.

### F64–F103 — “thinking into”
- Type function signature gradually:
```python
def longestConsecutive(nums):
```
- Characters appear across F64–F121, synced to the phrase.
- `def` should begin right as “thinking” resolves; finish line by “code.”

### F103–F121 — “code.”
- Colon lands.
- Cursor drops to next line.
- Small right-panel title appears:
  `BRUTE FORCE LOGIC`

### F121–F143 — pause
- Right panel shows a tiny morph of Scene 03’s repeated-search ribbon into a neutral concept card:
```text
trace → code
```
- No spoiler, just a bridge.

---

# ACT 1 — Type `longest = 0`
## F143–F242
**Narration:** “First, LONGER starts at zero.”

### Code typing
Type on line 2:
```python
    longest = 0
```

### Typing window
- F143–F175: cursor indent spaces appear
- F175–F223: type `longest = 0`
- F223–F242: settle, cursor blink

### Right-panel explanation
Show a single elegant variable card:

```text
LONGEST
best length seen so far
0
```

### Motion
- A small empty “best” jar / capsule morphs in from nothing.
- At the spoken “zero,” the number `0` chalk-writes inside.
- Use `ShineFill` very lightly to confirm initialization.

### Teaching point
This variable stores the best answer found so far.

---

# ACT 2 — Type `for num in nums:`
## F243–F356
**Narration:** “Then we go through every number in the array.”

### Code typing
Type on line 4:
```python
    for num in nums:
```

### Typing schedule
- F243–F275: indent + `for`
- F275–F319: ` num in `
- F319–F337: `nums`
- F337–F356: `:`

### Right-panel explanation
Morph variable card into an **array iteration rail**:
```text
[8][1][6][3][2][2][4][10][9][11][-1][0]
```

Above it, a small pointer glides across all values to explain “every number.”

### Motion
- The pointer does **one preview sweep** over all 12 values.
- Then it settles at the first slot again.
- A faint loop bracket appears around the whole row labeled:
  `for each num`

### Teaching point
We are not searching yet. We are just visiting each value one by one.

---

# ACT 3 — “Treat It As A Possible Beginning”
## F357–F484
**Narration:** “For each number, we treat it as a possible beginning.”

### Code panel
No new line typed yet.
Instead:
- line 4 remains highlighted,
- `num` token gets a tiny emphasis pulse when “each number” is spoken.

### Right panel
Transform the array rail into a **candidate-start explanation**:
- active value gets a gold pointer
- small label above active card:
  `possible start`
- three quick examples shown one after another:
  `8`, `1`, `6`
- but not full traces

### Motion
- On “possible beginning,” a small SVG arrow drops from the active card into a mini start node.
- The node morphs through:
  `8`, then `1`, then `6`
- Each holds for only a few frames.

### Teaching point
At brute force level, **every** number gets the chance to start a sequence.

---

# ACT 4 — Type `current = num` and `length = 1`
## F485–F631
**Narration:** “So current starts from that number, and length starts from one.”

### Code typing
Type on lines 5 and 6:

```python
        current = num
        length = 1
```

### Typing schedule
#### Line 5
- F485–F531: indent + `current`
- F531–F544: ` =`
- F544–F562: ` num`

#### Short micro pause
- F562–F567: cursor drop

#### Line 6
- F567–F601: indent + `length`
- F601–F611: ` = 1`
- F611–F631: settle

### Right-panel explanation
Show a 2-card variable setup:

```text
CURRENT = num
LENGTH = 1
```

And below that, one example using active start `8`:

```text
start: 8
current: 8
length: 1
```

### Motion
- The selected start card `8` clones upward into a `CURRENT` card.
- A second smaller badge writes `LENGTH = 1`.
- A thin connector links the start source and current card:
  `num → current`

### Teaching point
At the beginning of an attempt:
- current is the value we are currently standing on
- length begins at one because the starting number itself counts

---

# ACT 5 — Type the Brute Core `while current + 1 in nums:`
## F632–F856
**Narration:**  
“Now comes our repeated search. While current, plus one exists in nums, move current forward by one.”

This is the most important typing scene.

### Code typing
Type line 8:

```python
        while current + 1 in nums:
```

### Typing schedule
- F632–F673: indent + `while`
- F673–F729: ` current`
- F729–F757: ` + 1`
- F757–F797: ` in nums`
- F797–F856: `:`

### Right-panel explanation
Morph the variable setup into a **repeated-search machine**.

Layout:
- top small card: `CURRENT = 8`
- beside it: target bubble `LOOK FOR 9`
- below: raw original array
- under array: faint search-sweep lane

### Motion progression
#### F632–F688 — “repeated search”
- Write label:
  `repeated search`
- Bring back the raw array from Scene 03 in miniature.
- Search beam appears.

#### F700–F772 — “While current plus one exists...”
- Compute visible example:
  - current = 8
  - current + 1 = 9
- Tiny math morph:
```text
8 + 1 → 9
```

#### F772–F797 — “in nums”
- Beam sweeps across the original array.
- `9` is found and circled.

#### F803–F857 — “move current forward by one”
- `CURRENT = 8` morphs to `CURRENT = 9`
- Current card slides one step forward in the right-panel sequence ribbon.

### Teaching point
This line is the expensive heart of brute force:
every time we ask `current + 1 in nums`, Python may search through the list.

---

# ACT 6 — Type the Inner Updates
## F857–F934
**Narration:** “And increase the length.”

### Code typing
Type lines 9 and 10:

```python
            current += 1
            length += 1
```

### Typing schedule
#### Line 9
- F857–F877: indent + `current`
- F877–F892: ` +=`
- F892–F899: ` 1`

#### Line 10
- F899–F913: cursor drop + indent
- F913–F934: `length += 1`

### Right-panel explanation
Show the two updates as synchronized changes:

Before:
```text
CURRENT = 8
LENGTH = 1
```

After:
```text
CURRENT = 9
LENGTH = 2
```

### Motion
- `CURRENT` badge slides 8→9.
- `LENGTH` counter rolls 1→2.
- Sequence ribbon adds a second node.
- Draw a tiny connector `8 → 9`.

### Teaching point
Whenever the next value is found:
- current moves forward
- length grows

Both changes happen together.

---

# ACT 7 — Explain the Stop Condition
## F935–F1047
**Narration:** “When the next value is missing, that sequence ends.”

### Code panel
No new line typed here.
Keep the `while` block highlighted as one visual unit:
- line 8
- line 9
- line 10

### Right-panel explanation
Continue the example until failure:
- current now 11
- target becomes 12
- array scan fails

Show:

```text
CURRENT = 11
LOOK FOR 12
not found
```

### Motion
- Search beam goes full-width
- No 12 found
- Target bubble cracks lightly / gets `missing`
- Sequence ribbon stops with a faded ghost `12`

### Teaching point
As soon as `current + 1` is missing,
the `while` loop stops.

This should visually feel like the loop naturally closing.

---

# ACT 8 — Type Compare With Longest
## F1048–F1219
**Narration:**  
“Then compare. This length with longest. And keep the bigger one.”

### Code typing
Type line 12:

```python
        longest = max(longest, length)
```

### Typing schedule
- F1048–F1075: indent + `longest`
- F1075–F1129: ` = max(`
- F1129–F1186: `longest, `
- F1186–F1197: `length`
- F1197–F1219: `)`

### Right-panel explanation
Transform the stop-state into a compare board:

Left card:
```text
old longest = 4
```

Right card:
```text
this length = 6
```

Then center result:
```text
keep 6
```

### Motion
- Two cards slide toward each other
- `max()` appears between them as a chalk comparator
- Larger value survives and morphs back into the `LONGEST` card

### Teaching point
After one start finishes,
we compare its sequence length with the best answer so far.

---

# ACT 9 — Type `return longest`
## F1220–F1300
**Narration:** “At the end, return longest.”

### Code typing
Type line 14:

```python
    return longest
```

### Typing schedule
- F1220–F1242: indent + `return`
- F1242–F1280: ` longest`
- F1280–F1300: settle

### Right-panel explanation
Show a final answer flow:

```text
all starts processed
↓
LONGEST
↓
return
```

### Motion
- The `LONGEST` card (currently holding `6`) lifts upward.
- An arrow points to a small output capsule.
- Capsule writes:
  `RETURN 6`

### Teaching point
Once the loop finishes checking all starts,
we return the best length stored in `longest`.

---

# ACT 10 — “The Code Is Simple” → Spotlight the Costly Line
## F1301–F1956
**Narration:**  
“The code is simple. But see this line. Current plus one in nums. Nums is a normal Python list. So Python may have to walk through the list to find that value. And this check can happen again. And again. And again. For many starting numbers.”

This act is where the right panel becomes the performance explanation board.

### Code panel behavior
- Entire function is now fully visible.
- Current line highlight moves to:
```python
while current + 1 in nums:
```
- This line gets a warm rectangular emphasis.
- On “Current plus one in nums,” token-level emphasis happens:
  - `current + 1`
  - then `in nums`

### Right-panel explanation structure
Use a premium multi-step morph:

## Phase A — isolate the expensive line
### F1301–F1387
- Show a large right-panel card:
```text
current + 1 in nums
```
- Break it into:
```text
target value
        in
full Python list
```

### Motion
- `current + 1` bubble generates `9`
- `nums` expands into the full raw list

## Phase B — Python list scan
### F1406–F1535
Narration: “Current plus one in nums. Nums is a normal Python list.”

- Draw a horizontal Python list:
```text
[8][1][6][3][2][2][4][10][9][11][-1][0]
```
- Under it write:
  `normal Python list`
- Search beam enters from left.

### Motion
- To check `9 in nums`, the beam walks card-by-card across the list.
- Do not overdo per-card comparison labels; the walk itself is enough.

## Phase C — Python may walk through list
### F1551–F1664
Narration: “So Python may have to walk through the list to find that value.”

- Slow the search beam slightly.
- Target bubble shows `find 9`.
- Beam traverses:
  `8 → 1 → 6 → 3 → 2 → 2 → 4 → 10 → 9`
- At 9, a ring appears.

### Motion
- A faint travel path remains behind the beam.
- This is not a celebration; it is cost accumulation.

## Phase D — Again / again / again
### F1676–F1930
Narration:
- “And this check can happen again.”
- “And again.”
- “And again.”
- “For many starting numbers.”

This is a signature motion-graphics sequence.

### Visual idea
Stack repeated list scans in layered ghost form.

#### First “again”
- target `10`
- another scan path overlays the list

#### Second “again”
- target `11`
- another scan path overlays

#### Third “again”
- target `12`
- a full-width failed scan overlays

Then show this same repeated pattern for a different start:
- target `2`, `3`, `4`, `5`

### Motion
- Each “again” spawns another scan layer.
- Older layers dim but stay visible.
- By the end, the right panel clearly shows the **same original list** being walked many times.

### Teaching point
The brute force is expensive not because the code looks big —
it is expensive because this repeated membership check keeps walking the list over and over.

---

# ACT 11 — End On “Brute Force Becomes Expensive”
## F1957–F2079
**Narration:** “That is where the brute force becomes expensive.”

### Code panel
- Highlight remains on:
```python
while current + 1 in nums:
```
- Other lines dim slightly.
- A small side note marker appears in the gutter:
  `hot line`

### Right-panel explanation
Collapse the repeated scan layers into one summary board:

```text
same list searched again and again
```

Below it:
- one repeated-search icon made from SVG arrows, not an emoji style
- several faded scan trails converging on the raw array

### Final motion
- The many scan trails compress into a dense chalk bundle.
- That bundle morphs into a compact “cost” block.
- Write:
```text
repeated list search
```

Do **not** write final Big-O yet if Scene 05 is for complexity.
If you want only a gentle setup, write:
```text
this becomes expensive
```

### End state / Handoff
Final frame should leave:
- full brute-force code visible on left
- expensive while-line highlighted
- repeated-scan summary on right

This gives a clean handoff to the next scene:
- either complexity analysis
- or misconception / why brute force is slow

---

# 🔤 Character-Typing Map by Code Line

## Line 1
```python
def longestConsecutive(nums):
```
Typed across **F64–F121**

## Line 2
```python
    longest = 0
```
Typed across **F143–F223**

## Line 4
```python
    for num in nums:
```
Typed across **F243–F356**

## Line 5
```python
        current = num
```
Typed across **F485–F562**

## Line 6
```python
        length = 1
```
Typed across **F567–F611**

## Line 8
```python
        while current + 1 in nums:
```
Typed across **F632–F856**

## Line 9
```python
            current += 1
```
Typed across **F857–F899**

## Line 10
```python
            length += 1
```
Typed across **F899–F934**

## Line 12
```python
        longest = max(longest, length)
```
Typed across **F1048–F1219**

## Line 14
```python
    return longest
```
Typed across **F1220–F1280**

---

# 🔁 Right-Panel Morph Chain

```text
Scene 03 compressed search line
        ↓
editor + blank board
        ↓
LONGEST = 0 variable card
        ↓
array iteration rail
        ↓
possible-start explainer
        ↓
CURRENT / LENGTH setup cards
        ↓
repeated-search machine
        ↓
found-and-advance state
        ↓
missing / stop state
        ↓
max compare board
        ↓
return answer capsule
        ↓
expensive-line spotlight
        ↓
repeated list-scan overlays
        ↓
expense summary board
```

No hard cuts.

---

# 🧩 Suggested Component Mapping

| Need | Component / approach |
|---|---|
| code editor shell | `RoughBox` + custom layout |
| typing characters | frame-driven text reveal |
| cursor blink | custom cursor component |
| current line highlight | animated rect / underline |
| variable cards | `RoughBox` + `ChalkText` |
| array rail | fixed slot row |
| pointer | `RoughLine` arrow |
| search sweep | SVG path + moving dot |
| `current + 1` math morph | `SvgMorph` / text transition |
| sequence growth | simple node ribbon |
| compare board | two-card compare + `max()` center |
| scan overlays | low-opacity repeated SVG paths |
| collapse to summary | `SvgMorph` / path compression |

---

# ✨ Premium / Stunning Moments

Use only a few high-value premium moments:

## 1. Trace → Code morph
Scene 03 search line becomes editor baseline.

## 2. While-line birth
`while current + 1 in nums:` types in with measured authority; right side simultaneously shows the repeated-search engine coming alive.

## 3. Current + length tandem update
`current += 1` and `length += 1` animate together elegantly.

## 4. max() comparison
Two cards physically compete, larger one becomes the surviving `LONGEST`.

## 5. repeated-scan overlay finale
Many ghost scans build over the same list and compress into the “expensive” insight.

No more than these five hero moments.

---

# 🚫 Anti-Slop Rules

Do **not**:
1. paste the whole code at once
2. show future lines before narration reaches them
3. use AI-autocomplete effect
4. use generic IDE chrome
5. make the right panel a static text slide
6. re-run full brute trace on the right
7. hint HashSet / optimal solution
8. show Big-O if next scene is complexity
9. clutter with too many labels
10. over-animate every token
11. use flashy cursor trails
12. animate characters out of order
13. use a different layout midway
14. show the final code before the teacher “builds” it
15. type `longer = 0`
16. celebrate the result
17. cover caption-safe zone
18. use random icons
19. create a second code editor
20. add spoiler comments in code

---

# ✅ Critical Review Frames

### F64
Function typing begins.

### F175
`longest = 0` line actively typing.

### F275
`for num in nums:` taking shape.

### F409
loop meaning / possible beginning visible.

### F531
`current = num` visible.

### F601
`length = 1` visible.

### F700
`while` line typing begins and repeated-search board appears.

### F772
`current + 1` becomes concrete target.

### F857
inner update lines begin.

### F970
missing-next-value stop explanation.

### F1109
compare logic begins.

### F1186
`max(longest, length)` nearly complete.

### F1265
`return longest` visible.

### F1374
spotlight: “see this line.”

### F1446
`current + 1 in nums` isolated.

### F1556
Python list scan explanation.

### F1703
repeated-check critique begins.

### F1784
first “again.”

### F1836
second “again.”

### F1900
many starting numbers / scan buildup.

### F1997
“brute force becomes expensive” summary.

### F2079
clean end handoff.

---

# ✅ Acceptance Checklist

- [ ] Duration locked to **2079 frames**
- [ ] Left/right layout stable through whole scene
- [ ] Code is typed character-by-character
- [ ] Typing windows follow narration timing
- [ ] No full-code paste
- [ ] Exact brute-force Python code used
- [ ] variable is `longest`, not `longer`
- [ ] right panel always explains current line
- [ ] while-line gets the main spotlight later
- [ ] repeated list-scan cost is visually clear
- [ ] no better/optimal spoiler
- [ ] no complexity notation if reserved for next scene
- [ ] no layout jitter
- [ ] caption zone remains clear
- [ ] code editor feels premium and educational, not generic

---

# Final Scene 04 Visual Story — One Line

**The repeated-search line from Scene 03 morphs into a premium chalkboard code editor on the left, where the brute-force Python solution is typed character-by-character in sync with the narration, while the right side continuously morphs through variable cards, array iteration, current/length setup, repeated-search scanning, stop-state logic, max comparison, return flow, and finally a layered replay of repeated Python-list searches that makes the expensive brute-force bottleneck visually undeniable — all without spoiling the better solution.**
