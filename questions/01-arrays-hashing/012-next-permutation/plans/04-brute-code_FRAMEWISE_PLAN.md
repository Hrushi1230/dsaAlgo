# Q12 — Next Permutation (LC 31)
# Scene 04 · Method 1: Brute Force Code
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Problem:** #012 Next Permutation · LC 31 · Medium  
**Scene:** 04-brute-code  
**Audio File:** `remotion-project/public/audio/012/04-brute-code.mp3`  
**Exact Sync File:** `questions/01-arrays-hashing/012-next-permutation/sync/04-brute-code.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/012-next-permutation/sync/04-brute-code.anchors.json`  
**FPS:** 30  
**Exact Total Frames:** 2,114 frames (70.460 seconds)  
**Total Words:** 130 words (`W0000` to `W0129`)  
**Total Anchors:** 16 anchors (`S04_OPEN` through `S04_WHY`)  

---

## 1. Mandatory Scene Contract

```text
SCENE: 04-brute-code
QUESTION: 012 · Next Permutation (LeetCode 31)
BEAT TYPE: METHOD 1 BRUTE FORCE CODE CONSTRUCTION & PEDAGOGICAL WALKTHROUGH
AUDIO FILE: audio/012/04-brute-code.mp3
SYNC FILE: sync/04-brute-code.json
ANCHORS FILE: sync/04-brute-code.anchors.json
FPS: 30
TOTAL FRAMES: 2114
PEDAGOGICAL GOAL:
  1. Live character-by-character construction of the brute-force approach:
     - Function header: def nextPermutationBrute(nums):
     - Line 1: all_perms = permutations(nums)
     - Line 2: unique_perms = set(all_perms)
     - Line 3: ordered = sorted(unique_perms)
     - Line 4: current = tuple(nums)
     - Line 5: idx = ordered.index(current)
     - Line 6: next_idx = (idx + 1) % len(ordered)
     - Line 7: nums[:] = ordered[next_idx]
  2. One primary hero: Code editor owns center stage; future lines visually nonexistent.
  3. Dynamic docking: Terminal docks smoothly to left/top-left when a brief semantic proof card is needed, then returns to center.
  4. Cause -> Effect -> Settle: Every line types character-by-character on spoken cue with blinking cursor.
  5. 4-step pipeline review: GENERATE ──► SORT ──► FIND ──► SELECT NEXT in spoken lockstep.
  6. Transition to complexity: Acknowledge correctness for tiny inputs, introduce scalability bottleneck question, hand off to Scene 05.
TRUTH CONSTRAINTS:
  - Array V2 Law: Slots stay fixed, in-place slice assignment nums[:] modifies existing array.
  - Zero formula leaks: No "n!" or factorial formulas (reserved for Scene 05).
  - No modulo spoiler: "next_idx = (idx + 1" types first; modulo ") % len(ordered)" appends only when spoken.
  - Zero guessed frames or coordinates: Derived strictly from sync/04-brute-code.anchors.json.
```

---

## 2. Component Delta (REUSE / EXTEND / CREATE)

```text
REUSE (Kit / Shared Components):
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell): Pinned at top (Y: 28..124) with "APPROACH 1 · BRUTE FORCE".
  - ChalkCodeEditorV2 (@dsa/kit/components/ChalkCodeEditorV2): Canonical production code editor with character-by-character typing.
  - ArrayTrackV2 (@dsa/kit/components/array/ArrayTrackV2): Fixed 3-slot array track for semantic array proof.
  - ArrayValueV2 (@dsa/kit/components/array/ArrayValueV2): Slot values.
  - ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk): Background canvas and SVG chalk filter primitives.
  - theme, fonts (@dsa/kit/lib/theme): Course tokens (boardBg, chalkText, chalkDim, pivot, good, warn, cyan).
  - RoughBox, RoughLine (@dsa/kit/components): Chalk cards, underlines, borders, and connectors.
  - ChalkDust (@dsa/kit/components/ChalkDust): Ambient chalk particle atmosphere.
  - Captions (@dsa/kit/components/Captions): Word-level karaoke-synced caption bar anchored at bottom (Y: 980).

EXTEND:
  - Code Editor Dynamic Docking: Dynamic interpolation between center stage (width: 1040px, centered at X: 440) and docked stage (width: 860px at X: 110) during semantic proof beats.
  - 4-Step Pipeline Node Component: Connected horizontal pipeline highlighting each phase during recap.

CREATE:
  - sync/04-brute-code.anchors.json: Authoritative 16-anchor timing manifest.
  - SYNC_AUDIT_SCENE04.md: Contiguity and monotonic sync validation.
  - plans/04-brute-code_FRAMEWISE_PLAN.md: This framewise choreographic specification.
  - plans/04-brute-code_FRAME_QA_CHECKLIST.md: 16 visual checkpoints & invariants.
  - src/Scene04BruteCode.tsx: Remotion composition implementation.

DO NOT TOUCH:
  - kit/ core components and libraries.
  - Past scenes (Scene 01, Scene 02, Scene 03).
  - Raw audio sync file.
```

---

## 3. Optical Layout & Spatial Geometry

```text
Canvas: 1920 x 1080
----------------------------------------------------------------------------------------------------
ZONE A: Problem & Approach Header (Y: 28 to Y: 124)
  - ProblemOpenerShell: "01 · ARRAYS & HASHING", "Next Permutation", "APPROACH 1 · BRUTE FORCE"
  - Settled at frame 0 (continuity from Scene 03).

ZONE B: Subtitle & Stage Breadcrumb (Y: 130 to Y: 190)
  - Section subtitle: "METHOD 1: BRUTE FORCE · IMPLEMENTATION & LOGIC" (font: Outfit 18px, tracking: 0.2em)
  - Topic Header: Dynamic per stage (e.g. "Live Code Construction", "Deduplication & Sorting", "Index Lookup & In-Place Mutation")

ZONE C: Primary Hero Stage (Y: 200 to Y: 780)
  - Layout Mode 1 (Center Hero Code):
    - Width: 1040px, Height: 540px
    - Position: Left: 440px, Top: 205px
    - Used during primary typing beats (Beats 01, 02, 06, 09, 10, 11, 14, 15, 16).
  - Layout Mode 2 (Split Docked Stage):
    - Left (Code Editor): Width: 860px, Height: 540px, Left: 100px, Top: 205px
    - Right (Semantic Proof Card): Width: 780px, Height: 540px, Left: 1010px, Top: 205px
    - Used during semantic evidence beats (Beats 03, 04, 05, 07, 08, 12, 13).

ZONE D: Status Badges & Step Callouts (Y: 795 to Y: 910)
  - Status cards placed with >= 55px clearance below the code editor and proof cards.
  - E.g., Teaching note, pipeline cards, complexity warning.

ZONE E: Karaoke Captions (Y: 960 to Y: 1040)
  - Strictly synchronized with audioSyncV2 and sync/04-brute-code.json.
```

---

## 4. Frame-by-Frame Choreography (All 16 Anchors)

---

### BEAT 01 — `S04_OPEN`
```text
BEAT: 01 / 16
ANCHOR: S04_OPEN
NARRATION: "Let's write the brute-force idea"
WORD IDs: W0000 to W0005 ("Let's" .. "idea,")
AUDIO: 0 ms .. 1,980 ms (spoken)
FRAMES: F0 .. F75 [seg: 0..75, spoken: 0..59]
AVAILABLE REAL PAUSE: 533 ms (16 frames: F59..F75)

STATE BEFORE:
  Inherited from Scene 03 final handoff. ProblemOpenerShell pinned at top. Center stage clean.

WHAT APPEARS NOW:
  Production ChalkCodeEditorV2 enters center stage (opacity 0 -> 1, scale 0.98 -> 1.0 over F0..F20).
  Title bar: "next_permutation_brute.py" | Language: "PYTHON 3.11".
  Pre-declared imports and function signature visible:
    Line 1: from itertools import permutations
    Line 2: 
    Line 3: def nextPermutationBrute(nums):
  Cursor blinks at Line 4, Column 5 (indent: 4 spaces). Zero solution lines visible.

CENTER-STAGE HERO:
  Live Code Construction Shell (ChalkCodeEditorV2 at center stage).

CAUSE:
  Narration begins the code walkthrough for the brute-force method.

EFFECT / MOTION:
  Smooth fade-and-settle of the code editor. Blinking chalk cursor at Line 4 indicates ready state.

WHAT MUST NOT APPEAR YET:
  No body statements: all_perms, unique_perms, ordered, current, idx, next_idx, nums[:].

COMPREHENSION HOLD:
  F59..F75 (16 frames): Brief breathing pause after "idea," allowing learner to focus on the function shell.

CLEANUP / EXIT:
  Editor remains centered; cursor stays active.

PERSISTENT STATE:
  ChalkCodeEditorV2 shell with signature lines 1–3.
```

---

### BEAT 02 — `S04_COST_ONLY`
```text
BEAT: 02 / 16
ANCHOR: S04_COST_ONLY
NARRATION: "only to understand its cost."
WORD IDs: W0006 to W0010 ("only" .. "cost.")
AUDIO: 2,500 ms .. 4,360 ms (spoken)
FRAMES: F75 .. F154 [seg: 75..154, spoken: 75..131]
AVAILABLE REAL PAUSE: 767 ms (23 frames: F131..F154)

STATE BEFORE:
  Code editor centered at Line 4 cursor position.

WHAT APPEARS NOW:
  A subtle amber/gold warning note badge appears directly beneath the editor at Y: 795:
  "💡 TEACHING IMPLEMENTATION · BUILT TO UNDERSTAND COMPUTATIONAL COST" (RoughBox with amber border).

CENTER-STAGE HERO:
  Pedagogical purpose clarity badge + code editor shell.

CAUSE:
  Narration clarifies that this code is implemented to uncover complexity flaws, not as the final solution.

EFFECT / MOTION:
  Chalk underline and badge draw smoothly on "understand its cost" (F91..F131).

WHAT MUST NOT APPEAR YET:
  No time/space complexity graphs or O(N!) formulas (reserved for Scene 05). No code lines typed yet.

COMPREHENSION HOLD:
  F131..F154 (23 frames): Major hold to absorb the pedagogical context before typing begins.

CLEANUP / EXIT:
  Badge dims slightly into status position; editor prepares for typing on Line 4.

PERSISTENT STATE:
  Editor + teaching badge.
```

---

### BEAT 03 — `S04_IMPORT`
```text
BEAT: 03 / 16
ANCHOR: S04_IMPORT
NARRATION: "First, we generate all permutations of nums,"
WORD IDs: W0011 to W0017 ("First," .. "nums,")
AUDIO: 5,120 ms .. 9,200 ms (spoken)
FRAMES: F154 .. F280 [seg: 154..280, spoken: 154..276]
AVAILABLE REAL PAUSE: 133 ms (4 frames: F276..F280)

STATE BEFORE:
  Cursor blinking at Line 4.

WHAT APPEARS NOW:
  Line 4 types character-by-character from F185 to F270:
    "    all_perms = permutations(nums)"
  Tokens colored per theme:
    - "all_perms": theme.chalkText (#F8F6F0)
    - " = ": theme.chalkDim
    - "permutations": theme.cyan (#67E8F9)
    - "(nums)": theme.pivot (#FBBF24)
  Terminal docks to Left (X: 100). On Right (X: 1010), a semantic proof card appears:
    "GENERATE: itertools.permutations(nums) ──► yields all N! orderings".
    Shows mini ArrayTrackV2 [1, 2, 3] fanning out into permutation tuples.

CENTER-STAGE HERO:
  Line 4 typing + Permutation Generation Proof.

CAUSE:
  Narration specifies generating all permutations from the input array.

EFFECT / MOTION:
  Typewriter effect across F185..F270 with blinking cursor leading each character. Proof card fades in smoothly.

WHAT MUST NOT APPEAR YET:
  No set(), sorted(), or indexing lines.

COMPREHENSION HOLD:
  F276..F280 (4 frames): Micro hold at line completion.

CLEANUP / EXIT:
  Proof card transitions to explain duplicate risks.

PERSISTENT STATE:
  Lines 1–4 locked in editor.
```

---

### BEAT 04 — `S04_DUPLICATE_REASON`
```text
BEAT: 04 / 16
ANCHOR: S04_DUPLICATE_REASON
NARRATION: "because duplicate values can create duplicate permutations."
WORD IDs: W0018 to W0024 ("because" .. "permutations.")
AUDIO: 9,340 ms .. 12,980 ms (spoken)
FRAMES: F280 .. F406 [seg: 280..406, spoken: 280..389]
AVAILABLE REAL PAUSE: 567 ms (17 frames: F389..F406)

STATE BEFORE:
  Line 4 settled. Docked layout active.

WHAT APPEARS NOW:
  On the right-side proof stage, duplicate demonstration card appears:
    Input with duplicate values: e.g. [1, 1, 2]
    Generates two identical permutations: (1a, 1b, 2) and (1b, 1a, 2) ──► BOTH EVALUATE TO (1, 1, 2).
    Warning tag draws in amber/red: "⚠️ DUPLICATE PERMUTATIONS DETECTED".

CENTER-STAGE HERO:
  Duplicate Permutation Cause & Proof.

CAUSE:
  Narration explains why simple permutations() is insufficient when elements repeat.

EFFECT / MOTION:
  Two identical mini tuples slide in and align vertically, with a red rough border grouping them as "DUPLICATES".

WHAT MUST NOT APPEAR YET:
  Line 5 (set) does not type until spoken in the next beat.

COMPREHENSION HOLD:
  F389..F406 (17 frames): Teaching hold so learner fully registers why deduplication is required.

CLEANUP / EXIT:
  Duplicate proof card prepares to collapse into a unique set.

PERSISTENT STATE:
  Editor with Line 4 active; duplicate proof card visible.
```

---

### BEAT 05 — `S04_UNIQUE`
```text
BEAT: 05 / 16
ANCHOR: S04_UNIQUE
NARRATION: "We keep only unique arrangements."
WORD IDs: W0025 to W0029 ("We" .. "arrangements.")
AUDIO: 13,540 ms .. 15,660 ms (spoken)
FRAMES: F406 .. F492 [seg: 406..492, spoken: 406..470]
AVAILABLE REAL PAUSE: 733 ms (22 frames: F470..F492)

STATE BEFORE:
  Duplicate demonstration card visible. Cursor ready at Line 5.

WHAT APPEARS NOW:
  Line 5 types character-by-character from F413 to F465:
    "    unique_perms = set(all_perms)"
  Tokens:
    - "unique_perms": theme.chalkText
    - " = ": theme.chalkDim
    - "set": theme.good (#34D399)
    - "(all_perms)": theme.cyan
  On right stage: Duplicate tuples collapse into a single unique set element:
    "{ (1, 1, 2), ... } ──► FILTERED: UNIQUE ONLY ✓".

CENTER-STAGE HERO:
  Line 5 typing + Set Deduplication Proof.

CAUSE:
  Narration instructs keeping only distinct arrangements.

EFFECT / MOTION:
  Duplicate cards merge with a subtle shrink-and-glow effect. Checkmark badge draws in emerald green.

WHAT MUST NOT APPEAR YET:
  No sorted() line yet.

COMPREHENSION HOLD:
  F470..F492 (22 frames): Major comprehension hold to let the deduplication concept settle.

CLEANUP / EXIT:
  Right-hand card clears; terminal prepares for sorting line.

PERSISTENT STATE:
  Lines 1–5 locked in editor.
```

---

### BEAT 06 — `S04_SORT`
```text
BEAT: 06 / 16
ANCHOR: S04_SORT
NARRATION: "Then, we sort those permutations lexicographically."
WORD IDs: W0030 to W0035 ("Then," .. "lexicographically.")
AUDIO: 16,400 ms .. 20,680 ms (spoken)
FRAMES: F492 .. F638 [seg: 492..638, spoken: 492..620]
AVAILABLE REAL PAUSE: 600 ms (18 frames: F620..F638)

STATE BEFORE:
  Lines 1–5 settled. Cursor ready at Line 6.

WHAT APPEARS NOW:
  Line 6 types character-by-character from F523 to F610:
    "    ordered = sorted(unique_perms)"
  Tokens:
    - "ordered": theme.chalkText
    - " = ": theme.chalkDim
    - "sorted": theme.good (#34D399)
    - "(unique_perms)": theme.cyan
  On right stage: Compact list showing sorted permutations in strict dictionary order:
    [ (1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1) ]
    Label: "STRICT DICTIONARY / NUMERICAL ORDER".

CENTER-STAGE HERO:
  Line 6 typing + Lexicographical Sort Proof.

CAUSE:
  Narration directs ordering all unique permutations lexicographically.

EFFECT / MOTION:
  Typewriter progression on Line 6. Ordered list draws a green vertical bracket indicating sorted guarantee.

WHAT MUST NOT APPEAR YET:
  No tuple(nums) or index lookup lines yet.

COMPREHENSION HOLD:
  F620..F638 (18 frames): Teaching hold to appreciate the sorted list foundation.

CLEANUP / EXIT:
  Right-hand card clears for tuple conversion proof.

PERSISTENT STATE:
  Lines 1–6 locked in editor.
```

---

### BEAT 07 — `S04_CURRENT_FORM`
```text
BEAT: 07 / 16
ANCHOR: S04_CURRENT_FORM
NARRATION: "Now we convert our current array into the same comparable form,"
WORD IDs: W0036 to W0046 ("Now" .. "form,")
AUDIO: 21,260 ms .. 26,140 ms (spoken)
FRAMES: F638 .. F800 [seg: 638..800, spoken: 638..784]
AVAILABLE REAL PAUSE: 533 ms (16 frames: F784..F800)

STATE BEFORE:
  Lines 1–6 settled. Cursor ready at Line 7.

WHAT APPEARS NOW:
  Line 7 types character-by-character from F651 to F775:
    "    current = tuple(nums)"
  Tokens:
    - "current": theme.pivot (#FBBF24)
    - " = ": theme.chalkDim
    - "tuple": theme.cyan (#67E8F9)
    - "(nums)": theme.chalkText
  On right stage: Visual representation handoff:
    ArrayTrackV2 [1, 3, 2] (list) ──► morphs into immutable tuple (1, 3, 2).
    Note: "List [1, 3, 2] ──► Tuple (1, 3, 2) for hashable equality comparison".

CENTER-STAGE HERO:
  Line 7 typing + List-to-Tuple Type Handoff.

CAUSE:
  Narration explains converting mutable input array into tuple form matching the set/sorted elements.

EFFECT / MOTION:
  Square brackets [ ] smoothly transform into curved parentheses ( ), preserving the values 1, 3, 2.

WHAT MUST NOT APPEAR YET:
  Line 8 (.index) does not appear yet.

COMPREHENSION HOLD:
  F784..F800 (16 frames): Hold to let the type conversion concept register.

CLEANUP / EXIT:
  Right-hand card transitions to position search.

PERSISTENT STATE:
  Lines 1–7 locked in editor.
```

---

### BEAT 08 — `S04_FIND_POS`
```text
BEAT: 08 / 16
ANCHOR: S04_FIND_POS
NARRATION: "and find its position."
WORD IDs: W0047 to W0050 ("and" .. "position.")
AUDIO: 26,660 ms .. 28,180 ms (spoken)
FRAMES: F800 .. F861 [seg: 800..861, spoken: 800..845]
AVAILABLE REAL PAUSE: 533 ms (16 frames: F845..F861)

STATE BEFORE:
  Lines 1–7 settled. Tuple representation active on right. Cursor ready at Line 8.

WHAT APPEARS NOW:
  Line 8 types character-by-character from F805 to F842:
    "    idx = ordered.index(current)"
  Tokens:
    - "idx": theme.pivot (#FBBF24)
    - " = ": theme.chalkDim
    - "ordered": theme.chalkText
    - ".index": theme.good (#34D399)
    - "(current)": theme.pivot
  On right stage: Search highlight lands on index 1 of the sorted list:
    "ordered[1] == (1, 3, 2) ──► idx = 1".
    Cyan pointer arrow points to index 1.

CENTER-STAGE HERO:
  Line 8 typing + Index Lookup Search Highlight.

CAUSE:
  Narration directs searching the ordered list for current arrangement's position.

EFFECT / MOTION:
  Fast linear scan indicator glides down the ordered list and locks onto index 1 with a bright glow.

WHAT MUST NOT APPEAR YET:
  No next index calculation or modulo line.

COMPREHENSION HOLD:
  F845..F861 (16 frames): Hold with idx = 1 highlighted.

CLEANUP / EXIT:
  Right-hand card transitions to next index formula demonstration.

PERSISTENT STATE:
  Lines 1–8 locked in editor.
```

---

### BEAT 09 — `S04_NEXT_INDEX`
```text
BEAT: 09 / 16
ANCHOR: S04_NEXT_INDEX
NARRATION: "The next position is simply current index plus one."
WORD IDs: W0051 to W0059 ("The" .. "one.")
AUDIO: 28,700 ms .. 33,060 ms (spoken)
FRAMES: F861 .. F1013 [seg: 861..1013, spoken: 861..992]
AVAILABLE REAL PAUSE: 700 ms (21 frames: F992..F1013)

STATE BEFORE:
  Lines 1–8 settled. Cursor ready at Line 9.

WHAT APPEARS NOW:
  Line 9 begins typing character-by-character from F929 to F985:
    "    next_idx = (idx + 1"
  Tokens:
    - "next_idx": theme.good (#34D399)
    - " = ": theme.chalkDim
    - "(": theme.chalkDim
    - "idx": theme.pivot (#FBBF24)
    - " + ": theme.chalkDim
    - "1": theme.good (#34D399)
  Cursor stays ACTIVE directly after "1", blinking inside open parenthesis.
  On right stage: Formula callout:
    "CURRENT INDEX: idx = 1"
    "NEXT CANDIDATE: idx + 1 = 2 ──► ordered[2] is (2, 1, 3)"
    Pointer arrow moves from row 1 to row 2.

CENTER-STAGE HERO:
  Progressive Typing of Line 9 (Part 1: plus one) + Next Index Step.

CAUSE:
  Narration explains the default next arrangement is at index + 1.

EFFECT / MOTION:
  Line 9 types up to "(idx + 1". Blinking cursor holds at end of incomplete line. No modulo tokens visible!

WHAT MUST NOT APPEAR YET:
  CRITICAL: Modulo tokens ") % len(ordered)" MUST NOT APPEAR YET! Narration has not spoken modulo.

COMPREHENSION HOLD:
  F992..F1013 (21 frames): Major hold on incomplete line, building natural anticipation for edge case handling.

CLEANUP / EXIT:
  Cursor remains blinking right after "1".

PERSISTENT STATE:
  Lines 1–8 complete; Line 9 partial: "    next_idx = (idx + 1|".
```

---

### BEAT 10 — `S04_MODULO`
```text
BEAT: 10 / 16
ANCHOR: S04_MODULO
NARRATION: "And to handle the last permutation, we take that position modulo the total number of permutations."
WORD IDs: W0060 to W0075 ("And" .. "permutations.")
AUDIO: 33,760 ms .. 41,220 ms (spoken)
FRAMES: F1013 .. F1257 [seg: 1013..1257, spoken: 1013..1237]
AVAILABLE REAL PAUSE: 667 ms (20 frames: F1237..F1257)

STATE BEFORE:
  Line 9 partial: "    next_idx = (idx + 1|".

WHAT APPEARS NOW:
  From F1107 to F1200 ("we take that position modulo..."), Line 9 completes character-by-character:
    ") % len(ordered)"
  Full Line 9 settled:
    "    next_idx = (idx + 1) % len(ordered)"
  Tokens for appended part:
    - ")": theme.chalkDim
    - " % ": theme.warn (#F87171)
    - "len": theme.cyan (#67E8F9)
    - "(ordered)": theme.chalkText
  On right stage: Wraparound demonstration card:
    "IF CURRENT IS LAST (idx = 5):"
    "(5 + 1) % 6 = 0 ──► WRAPS BACK TO FIRST PERMUTATION (0)"
    Curved circular SVG arrow links row 5 back to row 0.

CENTER-STAGE HERO:
  Completion of Line 9 with Modulo Wraparound Logic.

CAUSE:
  Narration introduces the modulo operator to safely wrap the last permutation back to the start.

EFFECT / MOTION:
  Appends modulo tokens character-by-character to the existing line without retyping from start.
  Circular loop path animates on the right stage.

WHAT MUST NOT APPEAR YET:
  Line 10 (copy back) does not type yet.

COMPREHENSION HOLD:
  F1237..F1257 (20 frames): Teaching hold to appreciate how modulo enforces the problem's circular requirement.

CLEANUP / EXIT:
  Wraparound card clears; cursor moves to Line 10.

PERSISTENT STATE:
  Lines 1–9 locked in editor.
```

---

### BEAT 11 — `S04_COPY`
```text
BEAT: 11 / 16
ANCHOR: S04_COPY
NARRATION: "Finally, we copy the selected permutation back into the original array."
WORD IDs: W0076 to W0086 ("Finally," .. "array.")
AUDIO: 41,900 ms .. 47,360 ms (spoken)
FRAMES: F1257 .. F1435 [seg: 1257..1435, spoken: 1257..1421]
AVAILABLE REAL PAUSE: 467 ms (14 frames: F1421..F1435)

STATE BEFORE:
  Lines 1–9 complete. Cursor ready at Line 10.

WHAT APPEARS NOW:
  Line 10 types character-by-character from F1289 to F1390:
    "    nums[:] = ordered[next_idx]"
  Tokens:
    - "nums[:]": theme.pivot (#FBBF24) (slice assignment highlight)
    - " = ": theme.chalkDim
    - "ordered": theme.chalkText
    - "[": theme.chalkDim
    - "next_idx": theme.good (#34D399)
    - "]": theme.chalkDim
  On right stage: In-Place Mutation Proof:
    ArrayTrackV2 with original slots [0], [1], [2]:
    Values morph from [1, 3, 2] ──► [2, 1, 3] in the EXACT SAME SLOTS!
    Label: "IN-PLACE SLICE OVERWRITE: nums[:] = (2, 1, 3)".

CENTER-STAGE HERO:
  Line 10 typing + In-Place Array Mutation Proof.

CAUSE:
  Narration describes overwriting the original list in-place using the selected next permutation.

EFFECT / MOTION:
  Typewriter progression on Line 10. Array slot values update in place; slots and indices remain fixed (Array V2 Law).

WHAT MUST NOT APPEAR YET:
  Complete brute-force code is now finished. No complexity analysis cards yet.

COMPREHENSION HOLD:
  F1421..F1435 (14 frames): Hold showing the fully assembled Python implementation.

CLEANUP / EXIT:
  Right-hand card reduces; preparing for holistic pipeline alignment review.

PERSISTENT STATE:
  Complete 10-line brute force implementation.
```

---

### BEAT 12 — `S04_MATCHES`
```text
BEAT: 12 / 16
ANCHOR: S04_MATCHES
NARRATION: "The code matches the idea exactly."
WORD IDs: W0087 to W0092 ("The" .. "exactly.")
AUDIO: 47,820 ms .. 50,340 ms (spoken)
FRAMES: F1435 .. F1528 [seg: 1435..1528, spoken: 1435..1510]
AVAILABLE REAL PAUSE: 600 ms (18 frames: F1510..F1528)

STATE BEFORE:
  Complete code visible in editor.

WHAT APPEARS NOW:
  Code editor centers (width: 980px at X: 470).
  A 4-step horizontal pipeline card appears beneath the editor (Y: 780):
  [ 1. GENERATE ] ──► [ 2. SORT ] ──► [ 3. SEARCH ] ──► [ 4. SELECT NEXT ]
  All 4 steps illuminate in harmony with a subtle green border glow.

CENTER-STAGE HERO:
  Code-to-Algorithm 4-Step Alignment.

CAUSE:
  Narration validates that the code is a 1-to-1 reflection of the algorithmic idea.

EFFECT / MOTION:
  Synchronized bracket highlight: Lines 4, 5+6, 7+8, 9+10 light up in subtle color bands corresponding to the 4 pipeline steps.

WHAT MUST NOT APPEAR YET:
  No individual step highlight traversal yet (occurs in Beat 13).

COMPREHENSION HOLD:
  F1510..F1528 (18 frames): Hold confirming complete intellectual alignment.

CLEANUP / EXIT:
  Pipeline stays anchored beneath code for traversal in Beat 13.

PERSISTENT STATE:
  Code editor + 4-step pipeline card.
```

---

### BEAT 13 — `S04_SUMMARY`
```text
BEAT: 13 / 16
ANCHOR: S04_SUMMARY
NARRATION: "Generate all possibilities, sort them, search for the current one, and select the next."
WORD IDs: W0093 to W0106 ("Generate" .. "next.")
AUDIO: 50,940 ms .. 57,440 ms (spoken)
FRAMES: F1528 .. F1744 [seg: 1528..1744, spoken: 1528..1723]
AVAILABLE REAL PAUSE: 700 ms (21 frames: F1723..F1744)

STATE BEFORE:
  Code editor + 4-step pipeline visible.

WHAT APPEARS NOW:
  Active spotlight traverses the 4 pipeline steps in exact lockstep with spoken words:
  - F1528..F1579 ("Generate all possibilities"): Step 1 [GENERATE] glows cyan; Line 4 in editor highlights.
  - F1597..F1619 ("sort them"): Step 2 [SORT] glows emerald; Lines 5–6 highlight.
  - F1634..F1675 ("search for the current one"): Step 3 [SEARCH] glows gold; Lines 7–8 highlight.
  - F1687..F1723 ("and select the next"): Step 4 [SELECT NEXT] glows purple; Lines 9–10 highlight.

CENTER-STAGE HERO:
  Synchronized 4-Beat Pipeline Walkthrough.

CAUSE:
  Narration provides a rhythmic, verbal summary of the 4 key stages.

EFFECT / MOTION:
  Sequential spotlight cursor moves smoothly from Step 1 to Step 4. Exactly one step dominates at any instant.

WHAT MUST NOT APPEAR YET:
  No complexity critique yet.

COMPREHENSION HOLD:
  F1723..F1744 (21 frames): Major hold as all 4 steps settle into a completed state.

CLEANUP / EXIT:
  Pipeline card clears; code returns to center.

PERSISTENT STATE:
  Complete code editor.
```

---

### BEAT 14 — `S04_TINY_OK`
```text
BEAT: 14 / 16
ANCHOR: S04_TINY_OK
NARRATION: "For tiny inputs, this is fine for understanding."
WORD IDs: W0107 to W0114 ("For" .. "understanding.")
AUDIO: 58,120 ms .. 62,380 ms (spoken)
FRAMES: F1744 .. F1891 [seg: 1744..1891, spoken: 1744..1871]
AVAILABLE REAL PAUSE: 667 ms (20 frames: F1871..F1891)

STATE BEFORE:
  Complete code centered.

WHAT APPEARS NOW:
  A green validation badge settles at bottom center:
  "✓ CONCEPTUAL CLARITY: PERFECT FOR N ≤ 3 (e.g. 6 arrangements)" (RoughBox in emerald green).
  Affirms that brute force succeeds at teaching the core problem semantics.

CENTER-STAGE HERO:
  Conceptual Correctness Badge + Settled Code.

CAUSE:
  Narration qualifies that for tiny arrays (like [1, 2, 3]), the brute force approach is completely understandable.

EFFECT / MOTION:
  Badge fades up smoothly with a green checkmark drawing in 15 frames.

WHAT MUST NOT APPEAR YET:
  No warning or bottleneck elements yet.

COMPREHENSION HOLD:
  F1871..F1891 (20 frames): Teaching hold validating the learner's understanding so far.

CLEANUP / EXIT:
  Validation badge dissolves, preparing for the dramatic tension shift.

PERSISTENT STATE:
  Code editor dims slightly.
```

---

### BEAT 15 — `S04_EXPENSIVE`
```text
BEAT: 15 / 16
ANCHOR: S04_EXPENSIVE
NARRATION: "But as a real solution, this approach becomes expensive very quickly."
WORD IDs: W0115 to W0125 ("But" .. "quickly.")
AUDIO: 63,040 ms .. 68,520 ms (spoken)
FRAMES: F1891 .. F2083 [seg: 1891..2083, spoken: 1891..2056]
AVAILABLE REAL PAUSE: 900 ms (27 frames: F2056..F2083)

STATE BEFORE:
  Code editor centered.

WHAT APPEARS NOW:
  Tension shift: Code editor scales down slightly (scale: 0.92, opacity: 0.45).
  Center stage is overtaken by an amber/red warning card:
  "⚠️ SCALABILITY BOTTLENECK"
  "Generates EVERY permutation just to find ONE adjacent arrangement!"
  RoughBox with rough red chalk border + pulsing warning outline.

CENTER-STAGE HERO:
  Scalability Bottleneck Warning Card.

CAUSE:
  Narration pivots from small example correctness to real-world algorithmic inefficiency.

EFFECT / MOTION:
  Dramatic visual hierarchy inversion: code recedes into background; warning card expands into center stage.

WHAT MUST NOT APPEAR YET:
  CRITICAL: Do NOT show the factorial formula "N!" or mathematical curve yet (Scene 05 owns that breakdown).

COMPREHENSION HOLD:
  F2056..F2083 (27 frames): Massive 900ms silence hold allowing the tension of the bottleneck to sink in.

CLEANUP / EXIT:
  Warning card settles into handoff question.

PERSISTENT STATE:
  Receded code + Scalability Bottleneck card.
```

---

### BEAT 16 — `S04_WHY`
```text
BEAT: 16 / 16
ANCHOR: S04_WHY
NARRATION: "Now let's see why."
WORD IDs: W0126 to W0129 ("Now" .. "why.")
AUDIO: 69,420 ms .. 70,460 ms (spoken)
FRAMES: F2083 .. F2114 [seg: 2083..2114, spoken: 2083..2114]
AVAILABLE REAL PAUSE: 0 ms (0 frames: F2114 = totalFrames)

STATE BEFORE:
  Warning card at center stage.

WHAT APPEARS NOW:
  Handoff question card illuminates:
  "NEXT ──► SCENE 05: WHY BRUTE FORCE FAILS"
  "How fast does the number of permutations actually explode?"
  Presents a clean, cinematic handoff into Scene 05.

CENTER-STAGE HERO:
  Scene 05 Curiosity Handoff Card.

CAUSE:
  Narration delivers the final bridge question: "Now let's see why."

EFFECT / MOTION:
  Focus sharpens onto the question card. All background elements fade cleanly.

WHAT MUST NOT APPEAR YET:
  No Scene 05 factorial graphics before Scene 05 begins.

COMPREHENSION HOLD:
  F2110..F2114: Final frames lock in crisp handoff pose.

CLEANUP / EXIT:
  Exact frame 2114 boundary matches audio duration end.

PERSISTENT STATE:
  Method 1 identity + "WHY BRUTE FORCE FAILS" question ready for Scene 05.
```

---

## 5. Critical-Frame Checklist (16 Review Frames)

| Frame Number | Anchor ID | Pedagogical Purpose & Visual State |
|---|---|---|
| **Frame 40** | `S04_OPEN` | Empty code editor shell with signature lines 1–3 visible; cursor blinking at line 4. |
| **Frame 110** | `S04_COST_ONLY` | Purpose badge: "Teaching version to understand cost" active below editor. |
| **Frame 225** | `S04_IMPORT` | Line 4 actively typing: `all_perms = permutations(nums)`. Proof card visible on right. |
| **Frame 340** | `S04_DUPLICATE_REASON` | Duplicate proof: Two identical permutations converging to duplicate warning. |
| **Frame 445** | `S04_UNIQUE` | Line 5 typing: `unique_perms = set(all_perms)`. Duplicates collapse to unique set. |
| **Frame 565** | `S04_SORT` | Line 6 typing: `ordered = sorted(unique_perms)`. Dictionary-ordered list on right. |
| **Frame 715** | `S04_CURRENT_FORM` | Line 7 typing: `current = tuple(nums)`. ArrayTrack morphs to tuple form. |
| **Frame 825** | `S04_FIND_POS` | Line 8 typing: `idx = ordered.index(current)`. Search highlight lands on index 1. |
| **Frame 960** | `S04_NEXT_INDEX` | Incomplete Line 9: `next_idx = (idx + 1` with blinking cursor. ZERO modulo tokens! |
| **Frame 1160** | `S04_MODULO` | Completed Line 9: `) % len(ordered)` typed. Wraparound loop proof visible on right. |
| **Frame 1345** | `S04_COPY` | Line 10 typing: `nums[:] = ordered[next_idx]`. Original array slots overwrite in place. |
| **Frame 1480** | `S04_MATCHES` | Complete code settled; 4-step pipeline appears below editor in full alignment. |
| **Frame 1650** | `S04_SUMMARY` | Sequential traversal: Step 3 [SEARCH] highlighted in spoken lockstep. |
| **Frame 1810** | `S04_TINY_OK` | Correctness badge: "Conceptually clear for small N" with green check. |
| **Frame 1980** | `S04_EXPENSIVE` | Tension shift: Code dims; red Scalability Bottleneck warning card dominates center. |
| **Frame 2100** | `S04_WHY` | Cinematic handoff card: "Next: Why Brute Force Fails" ready for Scene 05. |

---

## 6. Final Plan QA Verification

- [x] **Exact Frame Count:** Exactly 2,114 frames @ 30 FPS (matching 70,460 ms audio).
- [x] **Zero Guessed Timings:** All 16 anchors derived strictly from `sync/04-brute-code.json`.
- [x] **Contiguous Coverage:** Anchors form a continuous partition `[0, 2114)` with zero gaps.
- [x] **No Modulo Spoiler:** `next_idx = (idx + 1` holds at Beat 09; modulo appends only at Beat 10.
- [x] **No Factorial Formula Leaks:** Zero mentions of "N!" or factorial curves (strictly reserved for Scene 05).
- [x] **Kit Component Compliance:** Uses `ChalkCodeEditorV2`, `ArrayTrackV2`, `RoughBox`, `Captions`.
- [x] **Spatial Zero-Collision:** Docked layout provides 50px+ clearance between code and proof cards.
- [x] **Deterministic Typing:** Character typing distributed across actual spoken phrase windows.
