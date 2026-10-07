# Scene 07 · CODE — BETTER / SORT + SCAN · Code Editor + Array-Bar Logic Plan

**Longest Consecutive Sequence · LC #128 · Type C**  
**Audio**: `07-code-better.mp3` — **58.500 s** — **1755 frames** @ 30 fps  
**Goal**: Build the full sorting solution **inside a real code editor**, line by line and character by character in sync with narration. The left side owns the implementation. The right side never replays the full trace; it only shows compact SVG/Array-Bar logic for the exact active code line: empty case, sorting, previous/current comparison, duplicate-ignore, +1-extend, gap-reset, longest update, and return.

---

## 🎯 Pedagogical Philosophy & Core Rules

### 1. CODE SCENE = IMPLEMENTATION ONLY
- Left side is the hero: Python code editor.
- Right side is a compact explanation board, not a second trace stage.
- Do **not** walk through the full master testcase again.
- Do **not** animate the full sorted array from `-1` to `11`.
- Use only tiny symbolic pair examples:
  - `2 | 2` → duplicate
  - `2 | 3` → consecutive
  - `4 | 6` → gap
- These examples explain branches; they do not solve the testcase.

### 2. CHARACTER-BY-CHARACTER TYPING
- Future lines remain hidden until narration reaches them.
- Characters appear in order.
- Indentation is typed/revealed naturally.
- Cursor blinks during pauses.
- No autocomplete, no full-code paste.

### 3. ACTIVE LINE DRIVES RIGHT-SIDE MOTION
Each newly typed line produces exactly one visual meaning on the right:
- `if not nums:` → empty rail collapses
- `return 0` → output capsule `0`
- `nums.sort()` → wavy rail straightens
- `longest/current = 1` → two counters initialize
- loop → current/previous index pair
- equal → duplicate ripple
- `continue` → bead skips duplicate
- `+1` condition → rail extends
- `else` → rail fractures
- `current = 1` → fresh rail begins
- `max` → current competes with longest
- `return` → final answer exits

### 4. NO FUTURE SPOILERS
Do not show:
- HashSet
- `x - 1`
- O(n)
- optimal code
- predecessor logic
- “start only once” insight

### 5. EXACT AUDIO SYNC
All line starts, token highlights, branch motifs, and pauses are derived from the supplied sync JSON.

---

# 🧾 Exact Python Code Built In This Scene

```python
def longestConsecutive(nums):
    if not nums:
        return 0

    nums.sort()
    longest = 1
    current = 1

    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            continue

        if nums[i] == nums[i - 1] + 1:
            current += 1
        else:
            current = 1

        longest = max(longest, current)

    return longest
```

Do not add comments during typing.  
Do not add type hints.  
Do not change branch order.

---

# 📐 Layout — 1920×1080

## Top badge
`BETTER · CODE`
- y: `28..70`
- compact

## Left — Code Editor
- x: `55..1070`
- y: `105..875`
- width: ~1015px
- line-number gutter: 55px
- editor content x start: ~145px
- font: project mono, ~31–34px
- line height: ~50px
- active-line wash: subtle, full-width inside editor
- filename tab:
  `sort_scan.py`

## Right — Logic Board
- x: `1115..1865`
- y: `145..835`
- width: ~750px
- no generic cards grid
- one adaptive explanation stage

### Right-stage zones
- pair / Array Bar motif: y `280..500`
- semantic label: y `540..620`
- state counters / max compare: y `650..770`

## Captions safe zone
- y: `960..1040`

---

# 🎨 Theme / Syntax Semantics

Use project tokens only:

- keywords `def`, `if`, `for`, `else`, `continue`, `return` → `theme.pivot`
- variables → `theme.chalkText`
- built-in `range`, `len`, `max` → `theme.cyan`
- literals `0`, `1` → `theme.good`
- duplicate motif → `theme.purple`
- gap/reset motif → `theme.warn`
- consecutive extension → `theme.good`
- inactive editor text → `theme.chalkDim`

No bright IDE rainbow palette.

---

# 🔗 Scene 06 → Scene 07 Handoff

Scene06 ends with:
- three rail motifs:
  - EXTEND
  - IGNORE
  - RESET
- those motifs straightening into three empty code-guide lines.

Scene07 begins on that exact geometry.

### F0 transition
- the three guide lines slide left and become real editor baselines,
- editor frame draws around them,
- right side keeps a faint mini Array Bar as continuity,
- no hard cut.

---

# ⏱ Audio Breakdown & Act Flow

| Act | Frames | Narration | Code Action | Right-Side Logic |
|---|---:|---|---|---|
| 0 | F0–225 | empty array / return zero | function + empty guard | empty Array Bar collapses → output 0 |
| 1 | F226–367 | sort + initialize | `nums.sort()`, `longest=1`, `current=1` | wavy rail straightens; counters appear |
| 2 | F368–574 | begin index1 / compare previous | `for i in range(1, len(nums)):` | two-index comparison lens |
| 3 | F575–944 | duplicate branch | equal condition + `continue` | purple double-notch / skip bead |
| 4 | F945–1181 | consecutive branch | +1 condition + `current += 1` | mint rail extends |
| 5 | F1182–1410 | gap branch / reset | `else:` + `current = 1` | phantom gap / rail fracture / fresh notch |
| 6 | F1411–1513 | update longest | `max(longest, current)` | max comparator morph |
| 7 | F1514–1604 | return | `return longest` | longest exits as output |
| 8 | F1605–1754 | simple / clean / better | full code review | three branch motifs align beside code |

---

# ACT 0 — Empty Array Guard
## F0–F225

**Narration:**  
“First handle the empty array. If nums is empty, there is no sequence. So return zero.”

---

## F0–F52 — Function shell + intention
### Spoken: “First handle the empty array.”

### Left editor
Scene06 guide lines morph into editor baselines.

Type line 1 across F0–F52:

```python
def longestConsecutive(nums):
```

Typing choreography:
- F0–F13: `def`
- F13–F28: ` longestConsecutive`
- F28–F37: `(nums`
- F37–F52: `):`

The line is allowed here even though narration describes the empty case; it is the function context the guard belongs inside.

### Right board
Do not show a testcase.

Show one **empty Array Bar shell**:
```text
[          ]
────────────
```

At “empty array”:
- bar has no notches,
- scan bead absent,
- small label:
  `NO VALUES`.

### F52–F64 pause
- cursor drops to indented line2.
- empty bar holds.

---

## F64–F140 — Type empty condition

Type:

```python
    if not nums:
```

Token sync:
- F64–F70 `if`
- F70–F80 ` nums` preparation / then reorder visually into actual syntax only through typing sequence below:
  best implementation: type exact string left→right:
  `    if not nums:`
  across F64–F96.
- F96–F106 pause = cursor settles.

Recommended actual frame mapping:
- F64–F72 indentation
- F72–F79 `if`
- F79–F86 space
- F86–F96 `not nums:`

### Right board
As `not nums` completes:
- empty rail compresses inward,
- two outer brackets move toward each other,
- center remains empty.

At F116–F140 “no sequence”:
- a faint potential active-run line tries to draw,
- immediately stops at 0px,
- label morphs:
  `NO VALUES`
  →
  `NO SEQUENCE`.

No red error state.

---

## F140–F161 pause
- cursor moves to line3.
- right bar remains fully collapsed.

---

## F161–F199 — Type return zero

Type:

```python
        return 0
```

Sync:
- F161–F171 indentation / keyword setup
- F171–F182 `return`
- F182–F199 ` 0`

### Right board
- collapsed empty rail morphs into a small output capsule.
- at `zero`, capsule writes:
  `0`
- arrow:
  `empty input → 0`

### F199–F226 pause
- output capsule slides down/right and fades to 20%.
- cursor inserts blank line.
- editor scroll does not move.

---

# ACT 1 — Sort + Initialize State
## F226–F367

**Narration:**  
“Then sort nums, now both longest and current, start at 1.”

---

## F226–F263 — Type sort

Type:

```python
    nums.sort()
```

Sync:
- F226–F234 indent
- F234–F243 `sort` emphasis lands while typing full `nums.sort()`
- finish by F263

### Right board — SVG morph
Start with a tiny wavy/raw rail:

```text
8   1   6   3   ...
~~~~~~~~~~~~~~~
```

Do not render full testcase detail.

As `.sort()` completes:
- wavy baseline morphs into perfectly straight Array Bar,
- 5 symbolic notches settle into ascending spacing,
- label:
  `ORDERED`.

Use `SvgMorph`, ~24–30f.

### F263–F269
- cursor moves next line.

---

## F269–F318 — Type longest

Type:
```python
    longest = 1
```

- use F269–F295 for `longest`
- F295–F305 ` =`
- F305–F318 ` 1`

### Right
A compact counter appears:
```text
BEST
1
```

No giant card.

---

## F318–F346 — Type current

Type:
```python
    current = 1
```

- F318–F332 indentation + current
- F332–F338 ` =`
- F338–F346 ` 1`

### Right
Second counter grows beside first:
```text
CURRENT 1     BEST 1
```

A single mint rail notch appears under a symbolic starting value.

### F346–F368 pause
Hold:
- straight rail
- current1
- best1

---

# ACT 2 — Start From Index 1 / Compare With Previous
## F368–F574

**Narration:**  
“We begin from index 1. Because every value will be compared with the value just before it.”

---

## F368–F418 — Type loop

Type line:

```python
    for i in range(1, len(nums)):
```

Character sync:
- F368–F382 `    for`
- F382–F402 ` i in range(`
- F402–F418 `1, len(nums)):`

This is a fast but readable code typing window; character reveal can average ~1.5 frames.

### Right board
No full array.

Show only 4 symbolic ordered slots:
```text
[prev] [i] [ ] [ ]
  0     1
```

At spoken `index 1`:
- index0 marker becomes `previous`
- index1 marker becomes `current / i`
- a cyan comparison bracket spans the pair.

---

## F418–F433 pause
- pair bracket holds.
- cursor drops into loop body.

---

## F433–F561 — Explain previous/current relation
No new code typed.

Token-level highlight on loop line:
- `i`
- `i - 1` is not in code yet, so **do not show the future branch code**.

Right-side only:
- current pointer sits over symbolic current slot,
- previous pointer sits over left neighbour,
- a short bidirectional visual relation:
```text
previous  ← compare →  current
```

At “just before it”:
- current card slides +4px right,
- previous card slides -4px left,
- comparison lens becomes visually clear.

### F561–F575 pause
- editor active-line wash moves down to next blank line.
- right comparison pair remains.

---

# ACT 3 — Duplicate Branch
## F575–F944

**Narration:**  
“First condition, if both values are equal, this is a duplicate. So just continue. Do not increase the sequence. Do not reset it. Just ignore the duplicate.”

This act should directly reuse Scene06’s **double-notch** visual but as a compact code explanation.

---

## F575–F599 — “First condition”
- cursor at inner indentation.
- right pair becomes:
```text
[2] [2]
```
only now.
- no branch result yet.

### F599–F618 pause
- editor waits.
- equality socket between cards remains empty.

---

## F618–F712 — Type duplicate condition

Type:

```python
        if nums[i] == nums[i - 1]:
```

Suggested token sync:
- F618–F625 `if`
- F625–F647 ` nums[i]`
- F647–F665 ` ==`
- F665–F680 pause/settle around equality
- F680–F699 ` nums[i - 1]`
- F699–F712 `:`

### Right board
State follows typing:
1. `nums[i]` highlights right `2`
2. `==` draws equality bridge
3. `nums[i - 1]` highlights left `2`
4. at “duplicate”, rail below pair morphs:
   `──── → ──∿∿──`
5. two notches become a purple **double-notch**

Label:
```text
DUPLICATE
```

---

## F712–F724 pause
- cursor moves one indentation deeper.
- duplicate ripple holds.

---

## F724–F754 — Type `continue`

```python
            continue
```

- F724–F729 indentation
- F729–F754 `continue`

### Right
- scan bead approaches second2,
- passes over/through the duplicate double-notch,
- lands after it,
- active run length does not grow.

Tiny label:
```text
SKIP
```

---

## F754–F771 pause
- cursor blinks.
- no counter motion.

---

## F771–F817 — “Do not increase the sequence.”
No new code.

Right:
- `CURRENT 4` appears as a symbolic state.
- an attempted count arrow `4 → 5` begins,
- a purple equality barrier stops it,
- arrow retracts,
- `CURRENT 4` stays.

This is explanatory, not testcase tracing.

---

## F817–F831 pause
- duplicate ripple settles.

---

## F831–F871 — “Do not reset it.”
Right:
- a faint warn crack preview appears on rail,
- on “not reset” it seals immediately,
- fresh-run notch does **not** appear.

Meaning:
duplicate is neither extend nor reset.

---

## F871–F922 — “Just ignore the duplicate.”
- `SKIP` becomes the only surviving label for 15f.
- purple duplicate double-notch compresses into a tiny historical marker.
- current rail stays continuous.

### F922–F945 pause
- whole duplicate explainer shrinks to a small purple motif near bottom-right:
```text
SAME → SKIP
```
- active editor line moves to next blank line.

---

# ACT 4 — Consecutive Branch
## F945–F1181

**Narration:**  
“Next, if the current value is previous value plus 1, we have a consecutive step. Increase current.”

---

## F945–F978 — “Next”
- right pair morphs:
```text
[2] [2]
```
→
```text
[2] [3]
```
- duplicate motif remains small/history.

### F978–F1126 — Type consecutive condition

Type:

```python
        if nums[i] == nums[i - 1] + 1:
```

Token choreography:
- F978–F991 indent + `if`
- F991–F1010 ` nums[i]`
- F1010–F1018 spacing
- F1018–F1046 ` == nums[i - 1]`
- F1046–F1070 ` + 1`
- F1070–F1081 pause
- F1081–F1126 `:`

### Right board
As tokens type:
- current `3` highlighted on `nums[i]`
- previous `2` highlighted on `nums[i - 1]`
- `+1` rises above the pair
- equality resolves:
```text
2 + 1 = 3
```

Array Bar:
- neutral segment beneath pair turns mint,
- bar physically **extends one notch**
- label:
  `CONSECUTIVE`

No current counter yet.

---

## F1126–F1137 pause
- cursor moves deeper.

---

## F1137–F1168 — Type increment

```python
            current += 1
```

- F1137–F1154 `current`
- F1154–F1168 ` += 1`

### Right
Only after line is mostly typed:
- CURRENT rolls:
  `4 → 5`
- rail extension receives a small mint settle.

### F1168–F1182 pause
- consecutive motif shrinks into small green history:
```text
+1 → EXTEND
```

---

# ACT 5 — Gap / Reset Branch
## F1182–F1410

**Narration:**  
“Otherwise, there is a gap. So a new sequence starts here. And current goes back to 1.”

---

## F1182–F1201 — Type `else:`

```python
        else:
```

### Right
Pair morphs:
```text
[2][3]
```
→
```text
[4]   [6]
```

A phantom socket begins rising between them but stays blank.

---

## F1201–F1225 pause
Use full pause:
- phantom notch finishes outline,
- no `5` text yet.

---

## F1225–F1250 — “there is a gap.”
- ghost value writes:
```text
5 ?
```
- warn stem from Array Bar fails to connect.
- mint active rail stretches toward ghost5 and stops.
- use small `Shatter` only on rail segment:
  `━━━━ → ━━ ╳ ━━`

Label:
```text
GAP
```

---

## F1250–F1270 pause
Hold fracture.

---

## F1270–F1333 — “So a new sequence starts here.”
No new code until reset line begins.

Right:
- old active rail fades to historical 18%.
- under `6`, a fresh one-notch rail grows from zero.
- scan bead lands on6.
- tiny pivot label:
  `NEW RUN`

This explains why the else branch exists.

---

## F1333–F1346 pause
- cursor moves to inner line.

---

## F1346–F1396 — Type reset

```python
            current = 1
```

Suggested:
- F1346–F1361 `current`
- F1361–F1381 ` =`
- F1381–F1396 ` 1`

### Right
CURRENT morph:
```text
6 → 1
```
not as CountUp downward; use chalk erase `6`, then write `1`.

Fresh rail notch under6 becomes mint.

### F1396–F1411 pause
Three small logic motifs now exist along bottom-right:
```text
SAME → SKIP
+1   → EXTEND
GAP  → RESET
```
They are rail motifs, not cards.

---

# ACT 6 — Update `longest`
## F1411–F1513

**Narration:**  
“After each real step, update longest.”

### F1411–F1454 — line setup
- cursor exits branch indentation to loop-body level.
- active right board clears pair example.
- show two counters only:
```text
CURRENT      LONGEST
   5            6
```

Do not imply these exact numbers are from current master trace; they are symbolic comparison state.

### F1454–F1465 pause
- `max()` comparator shell begins drawing between them.

---

## F1465–F1498 — Type max line

```python
        longest = max(longest, current)
```

Because narration says “update longest” late, use a compact fast typing window:
- F1465–F1482 `longest = max(`
- F1482–F1498 `longest, current)`

Characters can reveal at ~1 char/frame where needed; still readable because line remains visible afterward.

### Right
- two counters slide inward
- `max` writes between them
- larger value survives
- survivor morphs back into `LONGEST`

If current > longest in a symbolic state:
```text
CURRENT 6 vs LONGEST 4 → LONGEST 6
```
Use this only as isolated comparator logic, not a trace replay.

### F1498–F1514 pause
- cursor moves outside loop.

---

# ACT 7 — Return Final Longest
## F1514–F1604

**Narration:**  
“At the end, return longest.”

### F1514–F1540
- blank line.
- right `LONGEST` value remains.

### F1549–F1577 — Type:

```python
    return longest
```

- F1549–F1562 `return`
- F1562–F1577 ` longest`

### Right
- LONGEST capsule rises.
- thin arrow draws to:
```text
OUTPUT
```
- output does not need to show `6` if avoiding a gratuitous answer repeat.
Prefer:
```text
OUTPUT = longest
```

### F1577–F1605 pause
- full code now visible.
- editor auto-scroll only if necessary to keep full function centered; better use line spacing that fits without scroll.

---

# ACT 8 — Final Code Review / “Simple Scan. Clean Code.”
## F1605–F1754

**Narration:**  
“Simple scan. Clean code. And much better than repeated list searching.”

This is a review, not complexity proof.

---

## F1605–F1630 — “Simple scan.”
Left:
- `for i in range(1, len(nums)):` gets subtle cyan line highlight.
- branch body remains readable.

Right:
- one simple bead moves left→right across a straight 5-notch rail exactly once.
- no target-search beam.

Label:
```text
ONE FORWARD SCAN
```

---

## F1630–F1643 pause
- bead parks at end.

---

## F1643–F1666 — “Clean code.”
Left:
- active highlight expands softly to cover the core branch block:
  duplicate / consecutive / else.
- then narrows back.

Right:
three mini rail motifs align vertically or horizontally:

```text
SAME       +1         GAP
SKIP       EXTEND     RESET
```

No rectangular cards.

---

## F1666–F1681 pause
Prepare contrast.

---

## F1681–F1755 — “And much better than repeated list searching.”
Do not state complexity yet.

Right:
- current straight scan rail stays full opacity.
- behind it, 3–4 faint purple brute-search trails briefly reappear.
- the repeated trails retract/erase.
- single straight scan rail remains.

Small verdict:
```text
NO REPEATED LIST SEARCH
```

Left:
- `nums.sort()` and the one `for` loop receive a quiet focus, but **do not show O(n log n)** yet.

### Final handoff state
- full better code visible left
- right:
  straight sorted rail + three rules in miniature
- no Big-O
- no optimal hint

Ready for Scene08: why sorting is still not optimal / derive HashSet.

---

# 🔤 Character-Typing Map

| Code line | Frame window |
|---|---:|
| `def longestConsecutive(nums):` | F0–F52 |
| `if not nums:` | F64–F96 |
| `return 0` | F161–F199 |
| `nums.sort()` | F226–F263 |
| `longest = 1` | F269–F318 |
| `current = 1` | F318–F346 |
| `for i in range(1, len(nums)):` | F368–F418 |
| `if nums[i] == nums[i - 1]:` | F618–F712 |
| `continue` | F724–F754 |
| `if nums[i] == nums[i - 1] + 1:` | F978–F1126 |
| `current += 1` | F1137–F1168 |
| `else:` | F1182–F1201 |
| `current = 1` | F1346–F1396 |
| `longest = max(longest, current)` | F1465–F1498 |
| `return longest` | F1549–F1577 |

---

# 🧬 Right-Side SVG Morph Chain

```text
Scene06 rail-guide lines
        ↓
empty Array Bar
        ↓
NO VALUES → NO SEQUENCE
        ↓
output 0
        ↓
wavy raw rail
        ↓ SvgMorph
straight SORTED rail
        ↓
CURRENT / BEST counters
        ↓
previous | current comparison lens
        ↓
2 | 2
        ↓
purple duplicate ripple / double-notch
        ↓
SKIP
        ↓
2 | 3
        ↓
+1 bridge
        ↓
mint EXTEND
        ↓
4 | 6
        ↓
ghost 5 / fracture
        ↓
RESET fresh notch
        ↓
MAX comparator
        ↓
OUTPUT longest
        ↓
one straight scan
        ↓
SAME / +1 / GAP rule strip
```

---

# ✨ Premium Moments — Only Five

## 1. Scene06 Rail → Editor Baselines
The trace’s Array-Bar motifs physically straighten into code-editor guide lines.

## 2. `nums.sort()` SVG Morph
A tiny wavy rail becomes a precise straight rail exactly as `.sort()` finishes typing.

## 3. Duplicate Branch
`2|2` produces the same Scene06 purple double-notch ripple, then scan bead skips it on `continue`.

## 4. Gap Branch
`4|6` raises phantom `5`, fractures the mini rail, and a fresh one-notch rail grows at6 as `current = 1` types.

## 5. Final “No Repeated List Search”
Faint brute search trails briefly return, then erase, leaving a single clean forward scan rail.

No other hero effects.

---

# 🚫 Anti-Slop Rules

Do **not**:
1. replay the entire sorted trace
2. put the master 12-value array permanently on the right
3. paste full code at frame0
4. show future branch lines early
5. use code autocomplete
6. use generic IDE chrome
7. make three branch cards
8. show HashSet
9. show O(n log n) in this scene
10. show O(n)
11. animate duplicate as an error
12. reset current on duplicate
13. increase current on duplicate
14. show gap before `Otherwise`
15. show `max` before narration reaches update-longest
16. make code editor shift width during scene
17. scroll code unnecessarily
18. use generic icons for sort/duplicate/gap
19. show full previous brute animation
20. cover caption safe zone

---

# ✅ Critical Review Frames

### F0
Scene06 guide-line handoff entering real editor.

### F28
function signature typing while empty-array motif visible.

### F85
`if not nums:` active.

### F182
`return 0` typing / output0.

### F234
`nums.sort()` begins; wavy rail ready.

### F263
straight sorted rail.

### F305
`longest = 1` / `current = 1` state forming.

### F391
for-loop index1 typing.

### F507
previous/current comparison lens.

### F618
duplicate condition typing begins.

### F656
`==` relation forming.

### F699
duplicate ripple visible.

### F739
`continue` typing / bead skip.

### F805
current does not increase.

### F846
rail does not reset.

### F978
consecutive condition typing begins.

### F1046
previous-value side highlighted.

### F1057
`+ 1` typed / bridge appears.

### F1137
current increment line begins.

### F1182
`else:` typing.

### F1242
gap / phantom5.

### F1290
new run starts at6.

### F1388
`current = 1`.

### F1465
max line typing.

### F1549
return line typing.

### F1615
single forward scan review.

### F1653
three branch motifs visible.

### F1715
brute repeated-search ghosts reappear faintly.

### F1754
clean final code + one-scan handoff.

---

# ✅ Acceptance Checklist

- [ ] Exactly **1755 frames**
- [ ] supplied sync JSON used
- [ ] left code editor remains dominant
- [ ] full code typed character-by-character
- [ ] future code lines remain hidden
- [ ] Python implementation exactly matches locked better approach
- [ ] empty guard typed and explained
- [ ] sort line physically morphs right rail
- [ ] longest/current initialize at1
- [ ] loop begins from index1
- [ ] previous/current relation explained without full trace
- [ ] duplicate equality branch typed first
- [ ] duplicate does not increase current
- [ ] duplicate does not reset current
- [ ] `continue` visually skips duplicate
- [ ] +1 branch extends rail
- [ ] `current += 1` typed after condition
- [ ] else branch fractures mini rail
- [ ] `current = 1` starts fresh rail
- [ ] max update typed only when narrated
- [ ] return line typed only at final return narration
- [ ] no Big-O
- [ ] no HashSet / optimal spoiler
- [ ] no full testcase re-trace
- [ ] no layout jitter
- [ ] captions safe zone clear
- [ ] scene ends ready for why-better-is-not-optimal scene

---

# Final Scene 07 Visual Story — One Line

**Scene06’s Array-Bar rule motifs straighten into a real Python editor on the left, where the sorting solution is typed character-by-character from the empty-array guard through `nums.sort()`, initialization, index-1 scan, duplicate `continue`, consecutive `+1` extension, gap reset, max update, and return; on the right, a compact symbolic Array Bar morphs only to explain the active line — empty rail collapses to output0, wavy rail straightens on sort, `2|2` creates the purple duplicate double-notch and skip, `2|3` grows a mint +1 segment, `4|6` raises ghost5 and fractures into a fresh run, and the final review erases faint brute-search trails until only one clean forward scan remains — with no full trace replay and no optimal-solution spoiler.**
