# Q16 — Board-Native Visual Rework Handoff
## Apply after installing `dsa-scene-planning` V3.2

This handoff is for reworking the already-built Q16 scenes.

## Source locks — do not change

Do not change:
- approved narration wording
- scene order
- verified trace
- algorithm state
- semantic anchor order
- audio/sync timing if already generated
- roadmap data
- question/testcase
- final answer
- complexity truth

This pass is a **visual architecture / layout / kit usage correction**.

The main reason for the rework is that the existing implementation compresses teaching state into dark/debug-style panels and leaves too much of the chalkboard unused.

---

# GLOBAL LAW — ALL NON-ROADMAP SCENES

All non-roadmap scenes must be **board-native**.

Forbidden:
- black cards
- near-black cards
- dark teaching panels
- debug-console panels
- dashboard composition
- dark IDE/code window
- dark HashMap / Stack / Queue panel
- tiny unreadable chips
- giant unused board area
- main data structure pushed into the header
- tiny formulas/status text

Allowed:
- direct chalk text on green board
- transparent `RoughBox` outline
- chalk underline
- rough bracket
- `RoughLine`
- `RoughCurve`
- partition/range band
- semantic color
- fixed array slots
- direct board-native table/rows when semantically needed
- small translucent chalk wash only if local contrast genuinely needs it

The green board is the canvas.

Do not build a UI/dashboard on top of it.

---

# VISUAL PRIORITY

For every scene ask:

> What is the one thing the learner should understand right now?

That thing owns the center and the largest readable area.

Support objects may sit left/right.

Captions remain bottom.

Do not give every object equal visual weight.

---

# 1920×1080 BOARD ZONES

Use these as spatial responsibilities, not visible cards.

```text
HEADER / SCENE LABEL
x 60–1860
y 28–120

PRIMARY HERO / STRUCTURE
x 90–1320
y 170–540

AUXILIARY SUPPORT
x 1370–1830
y 190–820

VARIABLE / STATE
x 100–700
y 560–780

LIVE CALCULATION / DECISION
x 740–1320
y 560–830

ANSWER / RESULT
x 740–1320
y 835–930

CAPTIONS
y 960–1040
```

If no auxiliary structure exists, expand the main hero across the board.

---

# READABILITY TARGETS

At authored 1920×1080 size, aim roughly for:

```text
primary values               44–64 px
main equation/calculation    42–64 px
state-variable values        38–56 px
map/stack/queue content      34–52 px
pointer labels               22–30 px
secondary metadata           18–24 px
```

If the scene only fits by shrinking important content, redesign the layout.

---

# KIT LAW

Use verified repo primitives.

Preferred:
- `ArrayTrackV2`
- `ArraySlotV2`
- `ArrayValueV2`
- `ArrayIndexRowV2`
- `PointerLaneV2`
- `PartitionBandV2`
- `CountUp`
- `RoughBox` with transparent/no fill
- `RoughLine`
- `RoughCurve`
- `BezierFlight` only when source→destination travel teaches something
- `SceneEdgeTitle`
- `SceneLabelStrip`
- `Captions`
- `MasterRoadmapV2` only for roadmap
- `theme.ts`
- `anim.ts`
- `motion.ts`

Important:
- Current dark `ChalkCodeEditorV2` visual must NOT be reused unchanged in Q16 non-roadmap scenes.
- Current index-oriented `HashMapTable` must NOT be reused unchanged for `prefix sum → frequency`.
- Do not use a sorting-specific `MiniGraph` for generic complexity.

If semantics are right but presentation is wrong:
`EXTEND` the kit component with a board-native/transparent mode.

If no correct semantic primitive exists:
create a reusable kit-level primitive, not question-local AI-slop UI.

---

# SCENE 01 — ROADMAP RESUME + Q16 ACTIVATION

## Keep

This is the roadmap exception.

Use:
- `MasterRoadmapV2`
- current roadmap structure
- 15/227 state
- Q16 activation
- Arrays & Hashing context

## Change only if needed

Do not carry roadmap-style cards into Scene 02.

Transition out should hand off from roadmap UI into the plain chalkboard teaching surface.

## End-state handoff

By the last beat:
- roadmap recedes/dims
- Q16 identity survives briefly
- Scene 02 opens on the board-native array

No black transition card.

---

# SCENE 02 — UNDERSTAND QUESTION + METHOD 1 IDEA

## Target visual

Use the generated reference:
`question_16_contiguous_subarrays_summing_to_three.png`

## Main hero

Large array in upper-middle:

```text
[1, -1, 2, 1, 0, -2, 3]
```

Indices attached above.

Target `k = 3` small at top-right.

## Teaching sequence

### Question semantics

Directly on array:
- highlight `[2, 1]`
- bracket/band it
- show `sum = 3`
- highlight `[3]`
- show `single element also counts`

Do not show both before narration reaches them.

### Goal

Use lower board, direct chalk:

```text
count all contiguous, non-empty
subarrays whose sum = 3
```

No goal card.

### Negative-number warning

Use a separate lower-right teaching area:

```text
negative numbers allowed
→ cannot stop early

[4, -1] → 3
```

Only reveal after narration reaches negative numbers.

### Method 1 idea

When narration starts Method 1:
- array remains hero
- add `start` and `end` pointers
- running sum variable gets a permanent lower-left home
- active range is represented with `PartitionBandV2`
- do not trace all starts here
- only demonstrate the idea enough to hand off to Scene 03

## Forbidden

- no black problem card
- no explanation dashboard
- no tiny method card
- no full Method 1 trace
- no optimal prefix idea

---

# SCENE 03 — METHOD 1 FULL TRACE

## Target visual

Use the generated reference:
`running_sum_enumeration_trace.png`

This is the main visual correction.

## Stable layout

### Upper-middle — primary array

Large array:
```text
[1, -1, 2, 1, 0, -2, 3]
```

Use fixed slots.

Indices never move.

`start` and `end` pointers stay attached to array slots.

Active `[start..end]` range uses a clear band/bracket.

### Lower-left — variable state

Permanent positions:

```text
start
end
runningSum
```

Values update in place.

Do NOT show terminal/debug text like:

```text
OUTER: start = 6
INNER: end = 6
```

### Lower-middle — live calculation

This area must be large and readable.

Example:

```text
runningSum = 0 + 3 = 3

3 == k
YES
```

At every element:
- current value focuses
- addition builds
- runningSum resolves
- equality check resolves
- then answer updates if match

### Lower-right — answer

Stable:

```text
answer = N
```

or

```text
match count = N
```

Use `CountUp`.

Answer must update only after match condition resolves.

## Match behavior

When a match occurs:
1. current sum resolves to 3
2. equality result resolves YES
3. active range receives confirmed state
4. answer increments
5. state settles
6. only then continue

## Repeated starts

Do not invent different layouts per start.

Same grammar:
```text
start pointer changes
→ runningSum resets
→ end walks
→ calculations repeat
```

Later repetitions may move faster after the learner understands the grammar, but no operation may be skipped.

## Previous-match history

Do not show six tiny chips.

Use:
- confirmed range band briefly when useful
- answer count as canonical total

Only show a past-match list if narration explicitly needs it.

## Forbidden

- existing dark debug panel
- tiny calculation strip
- array at the top edge
- match-count only in tiny header badge
- huge empty lower board

---

# SCENE 04 — METHOD 1 CODE + COMPLEXITY

This scene needs two board-native teaching modes.

## PART A — CODE

No dark IDE/editor window.

### Target layout

Center-left / center:
large code written directly on board.

Future code lines hidden.

Example visual hierarchy:

```text
answer = 0

for start ...
    runningSum = 0

    for end ...
        runningSum += nums[end]

        if runningSum == k:
            answer += 1

return answer
```

### Line behavior

When narration explains a line:
- line appears/types
- active line gets chalk underline / pivot focus
- related support object may appear on right

Support can be:
- small array/range
- current variable
- one calculation

Do not rerun Scene 03.

### Kit

If `ChalkCodeEditorV2` cannot render without dark window/chrome:
do not use it unchanged.

Extend it with a transparent board-native mode or use a reusable board-native code component.

## PART B — COMPLEXITY

Use lower/center board.

Do not show final `O(n²)` immediately.

Sequence:

```text
n
n - 1
n - 2
...
1
```

Then:

```text
n + (n-1) + ... + 1
```

Then only when narration derives it:

```text
O(n²)
```

Then draw a coral/warn `RoughCurve`.

Space:
```text
O(1)
```

should appear when narration explains only a few variables.

No black graph card.

---

# SCENE 05 — OPTIMAL IDEA

## Target visual

Use:
`prefix_sum_frequency_method.png`

This is an IDEA scene only.

No trace.

## Center hero

Large equation on board:

```text
currentPrefix - previousPrefix = k
```

Then derive:

```text
previousPrefix = currentPrefix - k
```

The rearranged form becomes the hero only when narration reaches it.

## Left support

Small:

```text
current prefix = S
```

Only while useful.

## Right support

Introduce only after narration reaches frequency:

```text
prefix sum → frequency
```

Use a board-native frequency map.

No dark table container.

Rows can be rough chalk lines / direct key→value pairs.

## Important no-spoiler sequence

Do not show full frequency map at the beginning.

Order:
1. repeated overlapping sums problem
2. current prefix `S`
3. need earlier prefix `S-k`
4. same prefix can repeat
5. therefore frequency
6. initial `0 → 1`
7. lookup before insert
8. hand off to trace

No extra prefix-sum lesson.

No mini trace.

---

# SCENE 06 — METHOD 2 FULL TRACE

## Target visual

Use:
`chalkboard_prefix_sum_trace.png`

## Stable layout

### Upper-left / center — array

Large array.

Current index pointer attached to active slot.

### Lower-left — variables

Permanent homes:

```text
prefix
needed
```

Optional answer may live in lower-right.

### Lower-middle — calculation

Large:

```text
prefix = previousPrefix + nums[i]
needed = prefix - k
```

Only current values shown.

Example:

```text
prefix = 1 + 3 = 4
needed = 4 - 3 = 1
```

Then query phrase:

```text
look for 1 in the map
```

### Right — frequency map

Dedicated readable teaching object:

```text
prefix sum → frequency
```

Rows large enough to read.

No dark container.

No index semantics.

No sorted implication.

For a query:
- needed value gets cyan/query focus
- matching key row gets focus
- frequency value resolves
- only after that may answer change

### Answer

Stable lower-right:

```text
answer = N
```

Use `CountUp`.

## Exact operation grammar

For every index:

```text
current value
→ prefix update
→ needed calculation
→ map query
→ hit / miss
→ answer update if hit
→ map insert/frequency update
→ settle
→ next index
```

This order is mandatory.

Do not combine all mutations into one frame.

## Initial map

Show `0 → 1` only when narration establishes it.

Do not show future entries.

## Query-before-insert

The current prefix must not be inserted before the query resolves.

This should be visually obvious.

---

# SCENE 07 — METHOD 2 CODE + COMPLEXITY

Same board-native rule as Scene 04.

## CODE

Large code directly on board.

No dark editor.

Future lines hidden.

Key sequence:

```text
freq = {0: 1}
prefix = 0
answer = 0

for num in nums:
    prefix += num
    needed = prefix - k
    answer += freq.get(needed, 0)
    freq[prefix] = freq.get(prefix, 0) + 1

return answer
```

Narration order controls reveal.

Important:
- query line is visually separated from insert/update line
- emphasize query-before-insert
- right-side support may show one current map interaction
- do not re-run full Scene 06 trace

## COMPLEXITY

Derive:

```text
one pass through array
+
expected O(1) map lookup/update
```

Then:

```text
O(n)
```

Draw mint/good `RoughCurve` only when derived.

Space:
```text
O(n)
```

because map may hold many prefix sums.

If comparing with Method 1:
only show both curves after narration compares them.

No graph card.

---

# SCENE 08 — COMPARE + MISTAKES + EDGE CASES

Keep this scene visually minimal.

Do not build a comparison-card grid.

## Compare

Direct board comparison:

Left:
```text
Method 1
O(n²)
```

Right:
```text
Method 2
expected O(n)
```

If graph is shown:
use direct rough curves on board.

## Mistakes

Show one mistake at a time, center-stage.

Examples:
```text
negative numbers
→ sliding window not reliable
```

then replace with:

```text
store frequency
not only existence
```

then:

```text
start with 0 → 1
```

then:

```text
query before insert
```

Do not keep all mistakes visible at once.

## Edge cases

Use tiny but readable direct examples:

```text
[3], k=3 → 1
[0], k=0 → 1
[0,0,0], k=0 → 6
```

One at a time or two at most if narration groups them.

No cards.

---

# SCENE 09 — MINIMAL RECAP + TRANSFERABLE PATTERN + ROADMAP

This scene has two visual phases.

## PHASE A — RECAP

Board-native only.

Minimal.

Use one central progression:

```text
Method 1
fix start → extend end
O(n²)

↓

currentPrefix - previousPrefix = k

↓

needed = currentPrefix - k

↓

frequency map
expected O(n)
```

Do not make recap cards.

The transferable pattern should become the hero:

```text
current cumulative
-
earlier cumulative
=
target
```

then:

```text
look for current - target
```

and when duplicate earlier states matter:

```text
store frequency
```

Keep it brief.

## PHASE B — ROADMAP

Only now may the scene hand back to `MasterRoadmapV2`.

Show:
- Q16 complete
- progress 16/227
- Q17 Encode and Decode Strings up next

Do not use roadmap UI during recap.

---

# MOTION LAW FOR THE REWORK

Do not add motion just because there is empty space.

Use:

```text
CAUSE
→ STATE REACTION
→ REAL HOLD IF AUDIO HAS ONE
→ MOVE / MUTATION
→ SETTLE
```

Examples:

Method 1:
```text
include value
→ runningSum calculation
→ sum resolves
→ equality resolves
→ answer updates
→ end pointer moves
```

Method 2:
```text
value focuses
→ prefix updates
→ needed computes
→ map query
→ hit/miss
→ answer updates
→ map updates
→ index moves
```

Code:
```text
spoken idea
→ line appears/types
→ line completes
→ support reacts
→ next line
```

Complexity:
```text
work source
→ derivation
→ Big-O
→ RoughCurve
```

---

# NO-SPOILER LAW

Never show before narration creates it:
- final answer
- future prefix/map row
- optimal formula
- winning complexity
- future code line
- future edge-case conclusion

Hidden geometry may be reserved internally to prevent reflow, but hidden content must remain invisible.

---

# IMPLEMENTATION ORDER

1. Replace/read `dsa-scene-planning` V3.2 first.
2. Re-audit every Q16 scene against this handoff.
3. Remove dark/black teaching surfaces from Scenes 02–09.
4. Re-layout each scene using stable board zones.
5. Preserve narration, trace, semantic anchor order, and sync.
6. Extend kit primitives only where required.
7. Render critical frames for every scene.
8. Run visual QA.
9. Reject any frame that requires zooming to understand.
10. Re-audit until 100/100.

---

# BLOCKING QA

A scene fails if any are true:

```text
BLACK CARD
DARK PANEL
DEBUG CONSOLE
DASHBOARD UI
DARK CODE EDITOR
DARK MAP/STACK/QUEUE BOX
MAIN HERO TOO SMALL
CALCULATION TOO SMALL
VARIABLES TOO SMALL
AUXILIARY STRUCTURE TOO SMALL
ANSWER ONLY IN HEADER
GIANT UNUSED BOARD AREA
LAYOUT REFLOW
PREMATURE SPOILER
CAPTION COLLISION
POINTER COLLISION
```

Do not polish a failed layout.
Rebuild the scene architecture first.
