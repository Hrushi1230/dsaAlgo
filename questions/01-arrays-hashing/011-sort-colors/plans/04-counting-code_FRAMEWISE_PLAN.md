# Q11 — Sort Colors (LC 75)
# Scene 04 · Counting Code
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LC 75 · Medium  
**Beat Type:** Approach 1 Code Implementation & Visual Dynamic Docking  
**Audio File:** `questions/01-arrays-hashing/011-sort-colors/audio/04-counting-code.mp3`  
**Exact Sync File:** `questions/01-arrays-hashing/011-sort-colors/sync/04-counting-code.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/011-sort-colors/sync/04-counting-code.anchors.json`  
**FPS:** 30  
**Exact Total Frames:** 2,113 frames (70.440 seconds)  
**Total Spoken Words:** 148 words  
**Total Anchors:** 43 semantic anchors  

---

## 1. Mandatory Scene Contract

```text
SCENE: 04-counting-code
QUESTION: 011 · Sort Colors (LeetCode 75)
BEAT TYPE: APPROACH 1 CODE IMPLEMENTATION WITH CAUSE-EFFECT TEACHING
AUDIO FILE: audio/04-counting-code.mp3
SYNC FILE: sync/04-counting-code.json
FPS: 30
TOTAL FRAMES: 2113
PEDAGOGICAL GOAL:
- Teach Python Counting Sort implementation with dynamic center-stage choreography:
  1. CODE IDEA SPOKEN -> Terminal owns center stage, code line types out character-by-character.
  2. NOW TEACH EFFECT -> Terminal docks / scales down to left, visual structure (counters / array) takes center stage showing direct mutation.
  3. CAUSE / EFFECT COUPLING -> Learner visually understands what the code statement actually does in memory.
  4. EFFECT FINISHED -> Visual structure docks, Terminal returns to center stage to introduce the next statement.
  5. TAKEAWAY -> Complete code centered, 2 passes (O(N) count + O(N) rewrite) highlighted.
TRACE STEP IDS: TRACE_INIT, PASS1_SCAN (0..9), PASS2_WRITE (0..9), TRACE_DONE
DATA STRUCTURE: Frequency Counters (3 buckets) + 10-element Fixed-Slot Array Track
REUSE: ChalkCodeEditorV2, RoughBox, ChalkboardBackground, ChalkFilters, ArrayTrackV2, Captions
EXTEND: Dynamic stage coordinate interpolation (Center Stage <-> Docked Left)
CREATE: Dynamic Cause-Effect Choreography
DO NOT TOUCH: Audio sync timings, master testcase values
MOTION SEMANTICS:
- Center-to-dock transitions: EASE interpolation (12-18 frames).
- Code character-by-character streaming: exactly locked to anchor startFrame..endFrame.
- Visual effect reactions: Pulse/bump on counters, sequential slot overwriting with pointer progression.
FORBIDDEN:
- Static boring split-view where code and visuals never interact or move.
- Generic CSS borders without RoughBox / chalk styling.
- Future code spoilers (future lines must remain 100% hidden until spoken).
```

---

## 2. Dynamic Spatial Choreography Contract

```text
Canvas: 1920 × 1080 (16:9 chalkboard)

STATE A: CODE OWNS CENTER STAGE (Code Idea Spoken)
  - Terminal: X: 440, Y: 150, Width: 1040, Height: 720, Scale: 1.0, Opacity: 1.0
  - Visual Dock: Scale: 0.8, Opacity: 0.0 -> Hidden or minimized at right/bottom

STATE B: VISUAL OWNS CENTER STAGE (Now Teach Effect)
  - Terminal Docked Left: X: 80, Y: 140, Width: 800, Height: 750, Scale: 0.92, Opacity: 0.85
  - Visual Center Stage: X: 920, Y: 150, Width: 920, Height: 740, Scale: 1.0, Opacity: 1.0
  - Visual Components:
      * 3 Chalk Frequency Counter Cards (RoughBox: count0, count1, count2)
      * Compact 10-slot array track with pointer `i` for rewrite pass

STATE C: CONCLUSION & TAKEAWAY
  - Terminal Expands to Center Stage: X: 420, Y: 140, Width: 1080, Height: 760, Scale: 1.0
  - Bottom Takeaway Banner (RoughBox): X: 360, Y: 920, Width: 1200, Height: 70
```

---

## 3. Frame-by-Frame Pedagogical Anchor Choreography (All 43 Anchors)

### Anchor 1: S04_START (F0 .. F81, pause to F110)
- **ANCHOR:** "Now let's convert that counting idea into code." (F0..F81)
- **WHAT APPEARS NOW:** Top Header ("QUESTION 011 · SORT COLORS" & "APPROACH 1 · COUNTING SORT"), Chalk Terminal appears Center Stage (`X: 440, Y: 150, W: 1040, H: 720`). Line 1 types: `def sortColors(nums: list[int]) -> None:` (F15..F55).
- **CENTER-STAGE HERO:** ChalkCodeEditorV2 (center stage).
- **CAUSE:** Speaker introduces converting algorithm logic into real code.
- **EFFECT:** Terminal materializes in center stage; function signature types out with blinking cursor.
- **WHAT MUST NOT APPEAR YET:** Body code lines 2..25, counters, array track.
- **CLEANUP / EXIT:** None (intro).
- **PERSISTENT STATE:** Terminal centered, line 1 visible.

---

### Anchor 2: S04_THREE_COUNTERS (F110 .. F149, pause to F166)
- **ANCHOR:** "We need three counters." (F110..F149)
- **WHAT APPEARS NOW:** Line 2 types out: `    # Pass 1: Count 0s, 1s, and 2s` (F110..F140).
- **CENTER-STAGE HERO:** ChalkCodeEditorV2 (center stage).
- **CAUSE:** Speaker announces the data requirements for Pass 1.
- **EFFECT:** Comment line streams into terminal under function header.
- **WHAT MUST NOT APPEAR YET:** Variables `count0, count1, count2`, counter boxes.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Terminal centered, lines 1–2 visible.

---

### Anchor 3: S04_COUNT0_NAME (F166 .. F187, pause to F199)
- **ANCHOR:** "Count 0," (F166..F187)
- **WHAT APPEARS NOW:** Line 3 types out: `    count0 = 0` (F166..F185). Active line highlight on Line 3.
- **CENTER-STAGE HERO:** ChalkCodeEditorV2 (center stage).
- **CAUSE:** Spoken variable declaration for 0s.
- **EFFECT:** `count0 = 0` types character-by-character; keyword/number colors render.
- **WHAT MUST NOT APPEAR YET:** `count1`, `count2`, visual cards.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Lines 1–3 visible.

---

### Anchor 4: S04_COUNT1_NAME (F199 .. F221)
- **ANCHOR:** "count 1" (F199..F221)
- **WHAT APPEARS NOW:** Line 4 types out: `    count1 = 0` (F199..F218). Active line highlight moves to Line 4.
- **CENTER-STAGE HERO:** ChalkCodeEditorV2 (center stage).
- **CAUSE:** Spoken variable declaration for 1s.
- **EFFECT:** `count1 = 0` types out immediately following count0.
- **WHAT MUST NOT APPEAR YET:** `count2`, visual cards.
- **CLEANUP / EXIT:** Line 3 loses active highlight.
- **PERSISTENT STATE:** Lines 1–4 visible.

---

### Anchor 5: S04_COUNT2_NAME (F221 .. F271, pause to F282)
- **ANCHOR:** "and count 2." (F221..F271)
- **WHAT APPEARS NOW:** Line 5 types out: `    count2 = 0` (F221..F260). Active line highlight moves to Line 5.
- **CENTER-STAGE HERO:** ChalkCodeEditorV2 (center stage).
- **CAUSE:** Spoken variable declaration for 2s.
- **EFFECT:** `count2 = 0` types out; lines 3, 4, 5 complete the 3-variable initialization.
- **WHAT MUST NOT APPEAR YET:** Loop code, visual counter cards.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Lines 1–5 visible.

---

### Anchor 6: S04_INIT (F282 .. F296, pause to F311)
- **ANCHOR:** "Initially," (F282..F296)
- **WHAT APPEARS NOW:** Transition trigger: Terminal begins smooth shift from Center to Left Dock (`X: 440 -> 80, W: 1040 -> 800`).
- **CENTER-STAGE HERO:** Dynamic Transition (Terminal shifting left).
- **CAUSE:** Speaker prepares learner to visualize initial state.
- **EFFECT:** Terminal slides smoothly to left dock to create space for visual effect.
- **WHAT MUST NOT APPEAR YET:** Scan loop code.
- **CLEANUP / EXIT:** Center space cleared.
- **PERSISTENT STATE:** Terminal docked at left, lines 3–5 highlighted.

---

### Anchor 7: S04_ALL_ZERO (F311 .. F352, pause to F367)
- **ANCHOR:** "all three are 0." (F311..F352)
- **WHAT APPEARS NOW:** NOW TEACH EFFECT: 3 RoughBox Counter Cards enter Center-Right stage:
  - Card 0 (Red `#FF6B6B`): `count0 = 0`
  - Card 1 (White `#FFFDF7`): `count1 = 0`
  - Card 2 (Blue `#4D96FF`): `count2 = 0`
- **CENTER-STAGE HERO:** 3 Chalk Counter Cards (RoughBox).
- **CAUSE:** Speaker explains what the 3 code lines represent in memory.
- **EFFECT:** Cards draw on in chalk; values display `0` with a subtle glow, proving initial state.
- **WHAT MUST NOT APPEAR YET:** For loop code.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Code docked at left (lines 3-5 active), 3 counter cards at center-right.

---

### Anchor 8: S04_SCAN_ONCE (F367 .. F429, pause to F451)
- **ANCHOR:** "Then we scan the array once." (F367..F429)
- **WHAT APPEARS NOW:** EFFECT FINISHED -> CODE FOCUS RETURNS. Terminal shifts slightly toward center (`X: 120`). Line 7 types: `    for x in nums:` (F367..F415). Compact 10-slot input array `[2, 0, 2, 1, 1, 0, 2, 0, 1, 2]` appears docked below counter cards.
- **CENTER-STAGE HERO:** Line 7 in ChalkCodeEditorV2.
- **CAUSE:** Speaker introduces the Pass 1 traversal loop.
- **EFFECT:** For loop syntax types character-by-character; input array appears to anchor what `nums` is.
- **WHAT MUST NOT APPEAR YET:** Loop body `if / elif / else`.
- **CLEANUP / EXIT:** Counter cards scale down slightly to make room for array track.
- **PERSISTENT STATE:** Code lines 1–7 visible, array and counters docked right.

---

### Anchor 9: S04_IF_ZERO (F451 .. F502, pause to F514)
- **ANCHOR:** "If the current value is 0," (F451..F502)
- **WHAT APPEARS NOW:** Line 8 types: `        if x == 0:` (F451..F490). Active highlight on Line 8.
- **CENTER-STAGE HERO:** Line 8 in ChalkCodeEditorV2.
- **CAUSE:** Branching condition for color 0.
- **EFFECT:** Line 8 types with cyan keyword `if` and yellow `0`. Pointer on array highlights a slot with value `0`.
- **WHAT MUST NOT APPEAR YET:** `count0 += 1`, `elif`.
- **CLEANUP / EXIT:** Line 7 loses active highlight.
- **PERSISTENT STATE:** Lines 1–8 visible.

---

### Anchor 10: S04_INC_ZERO (F514 .. F550, pause to F563)
- **ANCHOR:** "increase count 0." (F514..F550)
- **WHAT APPEARS NOW:** Line 9 types: `            count0 += 1` (F514..F535). Active highlight on Line 9. NOW TEACH EFFECT: Card `count0` pulses red, badge `+1` pops above card!
- **CENTER-STAGE HERO:** Cause-Effect coupling: Line 9 (code) -> Card 0 (effect).
- **CAUSE:** Statement execution adds tally to bucket 0.
- **EFFECT:** Learner sees code `count0 += 1` execute and immediately causes Card 0 to increment.
- **WHAT MUST NOT APPEAR YET:** `elif x == 1`.
- **CLEANUP / EXIT:** Line 8 highlight clears.
- **PERSISTENT STATE:** Lines 1–9 visible, Card 0 shows reactive tick.

---

### Anchor 11: S04_IF_ONE (F563 .. F591, pause to F609)
- **ANCHOR:** "If it is 1," (F563..F591)
- **WHAT APPEARS NOW:** Line 10 types: `        elif x == 1:` (F563..F585). Active highlight on Line 10.
- **CENTER-STAGE HERO:** Line 10 in ChalkCodeEditorV2.
- **CAUSE:** Branching condition for color 1.
- **EFFECT:** `elif x == 1:` types out; array pointer highlights a slot with value `1`.
- **WHAT MUST NOT APPEAR YET:** `count1 += 1`, `else`.
- **CLEANUP / EXIT:** Line 9 highlight clears.
- **PERSISTENT STATE:** Lines 1–10 visible.

---

### Anchor 12: S04_INC_ONE (F609 .. F647, pause to F655)
- **ANCHOR:** "increase count 1." (F609..F647)
- **WHAT APPEARS NOW:** Line 11 types: `            count1 += 1` (F609..F635). Active highlight on Line 11. NOW TEACH EFFECT: Card `count1` pulses white, badge `+1` pops above card!
- **CENTER-STAGE HERO:** Cause-Effect coupling: Line 11 (code) -> Card 1 (effect).
- **CAUSE:** Statement execution adds tally to bucket 1.
- **EFFECT:** Code typed line directly causes Card 1 reaction.
- **WHAT MUST NOT APPEAR YET:** `else`.
- **CLEANUP / EXIT:** Line 10 highlight clears.
- **PERSISTENT STATE:** Lines 1–11 visible, Card 1 shows reactive tick.

---

### Anchor 13: S04_ELSE (F655 .. F670, pause to F677)
- **ANCHOR:** "Otherwise," (F655..F670)
- **WHAT APPEARS NOW:** Line 12 types: `        else:` (F655..F668). Active highlight on Line 12.
- **CENTER-STAGE HERO:** Line 12 in ChalkCodeEditorV2.
- **CAUSE:** Fallthrough branch.
- **EFFECT:** `else:` keyword types cleanly with indent level 2.
- **WHAT MUST NOT APPEAR YET:** `count2 += 1`.
- **CLEANUP / EXIT:** Line 11 highlight clears.
- **PERSISTENT STATE:** Lines 1–12 visible.

---

### Anchor 14: S04_MUST_TWO (F677 .. F707, pause to F723)
- **ANCHOR:** "it must be 2." (F677..F707)
- **WHAT APPEARS NOW:** Deduction pill appears above code: `nums[i] ∈ {0, 1, 2} \ {0, 1} => 2`.
- **CENTER-STAGE HERO:** Line 12 + Deduction Callout.
- **CAUSE:** Mathematical constraint deduction.
- **EFFECT:** Visual pill explains why no `elif x == 2` is needed.
- **WHAT MUST NOT APPEAR YET:** `count2 += 1`.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Deduction confirmed.

---

### Anchor 15: S04_INC_TWO (F723 .. F771)
- **ANCHOR:** "So increase count 2." (F723..F771)
- **WHAT APPEARS NOW:** Line 13 types: `            count2 += 1` (F723..F750). Active highlight on Line 13. NOW TEACH EFFECT: Card `count2` pulses blue, badge `+1` pops above card!
- **CENTER-STAGE HERO:** Cause-Effect coupling: Line 13 (code) -> Card 2 (effect).
- **CAUSE:** Statement execution adds tally to bucket 2.
- **EFFECT:** Code typed line directly causes Card 2 reaction.
- **WHAT MUST NOT APPEAR YET:** Pass 2 rewrite code.
- **CLEANUP / EXIT:** Line 12 highlight clears.
- **PERSISTENT STATE:** Pass 1 complete (lines 1–13 visible).

---

### Anchor 16: S04_FIRST_PASS_DONE (F771 .. F824, pause to F839)
- **ANCHOR:** "After this first pass," (F771..F824)
- **WHAT APPEARS NOW:** PASS 1 CONCLUSION: Terminal docks to left (`X: 80, W: 800`). Center-Right Hero Zone expands (`W: 940`). Header banner: "PASS 1 COMPLETE: TALLIES LOCKED".
- **CENTER-STAGE HERO:** Frequency Cards Hero Stage.
- **CAUSE:** Completion of array traversal.
- **EFFECT:** Code dims slightly (opacity 0.75), focus shifts fully to final tally state.
- **WHAT MUST NOT APPEAR YET:** Pass 2 code lines 15..25.
- **CLEANUP / EXIT:** Temporary scan pointer clears from array.
- **PERSISTENT STATE:** Terminal docked left, 3 counter cards ready for confirmation.

---

### Anchor 17: S04_KNOW_COUNTS (F839 .. F868)
- **ANCHOR:** "we know exactly" (F839..F868)
- **WHAT APPEARS NOW:** 3 Counter Cards draw full focus; background glow intensifies.
- **CENTER-STAGE HERO:** 3 Counter Cards (`RoughBox`).
- **CAUSE:** Speaker announces exact knowledge of frequencies.
- **EFFECT:** Subtle camera/scale punch on the 3 cards (`scale: 1.05`).
- **WHAT MUST NOT APPEAR YET:** Numbers 3, 3, 4 until spoken in next anchors.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 3 counter cards at center stage.

---

### Anchor 18: S04_KNOW_0 (F868 .. F914, pause to F926)
- **ANCHOR:** "how many 0s," (F868..F914)
- **WHAT APPEARS NOW:** Card 0 value snaps to verified master count: `count0 = 3`. Red badge: "3 RED ITEMS".
- **CENTER-STAGE HERO:** Card 0 (Red).
- **CAUSE:** Speaker specifies zero count.
- **EFFECT:** Counter 0 flashes red chalk border; value 3 locks in.
- **WHAT MUST NOT APPEAR YET:** Final count1, count2.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Card 0 = 3 locked.

---

### Anchor 19: S04_KNOW_1 (F926 .. F963)
- **ANCHOR:** "how many 1s," (F926..F963)
- **WHAT APPEARS NOW:** Card 1 value snaps to verified master count: `count1 = 3`. White badge: "3 WHITE ITEMS".
- **CENTER-STAGE HERO:** Card 1 (White).
- **CAUSE:** Speaker specifies one count.
- **EFFECT:** Counter 1 flashes white chalk border; value 3 locks in.
- **WHAT MUST NOT APPEAR YET:** Final count2.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Card 0 = 3, Card 1 = 3 locked.

---

### Anchor 20: S04_KNOW_2 (F963 .. F1021, pause to F1043)
- **ANCHOR:** "and how many 2s are present." (F963..F1021)
- **WHAT APPEARS NOW:** Card 2 value snaps to verified master count: `count2 = 4`. Blue badge: "4 BLUE ITEMS". Total badge: "3 + 3 + 4 = 10 ELEMENTS".
- **CENTER-STAGE HERO:** Card 2 (Blue) + Total Verification.
- **CAUSE:** Speaker specifies two count.
- **EFFECT:** Counter 2 flashes blue chalk border; value 4 locks in. Sum matches input array length $N = 10$.
- **WHAT MUST NOT APPEAR YET:** Pass 2 rewrite code.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Verified counts: `count0 = 3`, `count1 = 3`, `count2 = 4`.

---

### Anchor 21: S04_REWRITE (F1043 .. F1093, pause to F1105)
- **ANCHOR:** "Now we rewrite the same array," (F1043..F1093)
- **WHAT APPEARS NOW:** EFFECT FINISHED -> CODE RETURNS CENTER FOCUS! Terminal expands toward center (`X: 100, W: 860`). Line 15 types: `    # Pass 2: Overwrite array in-place` (F1043..F1080). Compact 10-slot array track below resets all slots to dimmed outline state.
- **CENTER-STAGE HERO:** ChalkCodeEditorV2 (Pass 2 intro).
- **CAUSE:** Speaker transitions to the in-place overwrite algorithm.
- **EFFECT:** Section comment types into editor; array visualizes as waiting target canvas.
- **WHAT MUST NOT APPEAR YET:** `i = 0`, rewrite loops.
- **CLEANUP / EXIT:** Pass 1 badges fade out.
- **PERSISTENT STATE:** Lines 1–15 visible, 10 empty array slots ready.

---

### Anchor 22: S04_INDEX_ZERO (F1105 .. F1151, pause to F1166)
- **ANCHOR:** "start from index 0." (F1105..F1151)
- **WHAT APPEARS NOW:** Line 16 types: `    i = 0` (F1105..F1135). Active highlight on Line 16. On array track, pointer `i` lands at Index 0.
- **CENTER-STAGE HERO:** Line 16 + Pointer `i` at Index 0.
- **CAUSE:** Pointer initialization for sequential array overwrite.
- **EFFECT:** Code typed line creates pointer `i` directly positioned at index 0.
- **WHAT MUST NOT APPEAR YET:** While/for loops for 0, 1, 2.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Lines 1–16 visible, pointer `i = 0`.

---

### Anchor 23: S04_FIRST (F1166 .. F1181, pause to F1196)
- **ANCHOR:** "First," (F1166..F1181)
- **WHAT APPEARS NOW:** Line 17 types: `    for _ in range(count0):` (F1166..F1181). Active highlight on Line 17.
- **CENTER-STAGE HERO:** Line 17 in ChalkCodeEditorV2.
- **CAUSE:** Loop setup for writing zeroes.
- **EFFECT:** Range loop types character-by-character referencing `count0`.
- **WHAT MUST NOT APPEAR YET:** `nums[i] = 0`.
- **CLEANUP / EXIT:** Line 16 highlight clears.
- **PERSISTENT STATE:** Lines 1–17 visible.

---

### Anchor 24: S04_WRITE_ZERO (F1196 .. F1222, pause to F1231)
- **ANCHOR:** "write 0," (F1196..F1222)
- **WHAT APPEARS NOW:** Line 18 types: `        nums[i] = 0` (F1196..F1218). Active highlight on Line 18.
- **CENTER-STAGE HERO:** Line 18 in ChalkCodeEditorV2.
- **CAUSE:** Value assignment statement.
- **EFFECT:** `nums[i] = 0` types out; slot under `i` glows red outline.
- **WHAT MUST NOT APPEAR YET:** `i += 1`.
- **CLEANUP / EXIT:** Line 17 highlight clears.
- **PERSISTENT STATE:** Lines 1–18 visible.

---

### Anchor 25: S04_COUNT0_TIMES (F1231 .. F1271, pause to F1287)
- **ANCHOR:** "count 0 times." (F1231..F1271)
- **WHAT APPEARS NOW:** Line 19 types: `        i += 1` (F1231..F1250). Active highlight on Line 19. NOW TEACH EFFECT: Array track in center-right executes: Slots 0, 1, 2 turn solid Red `0`! Pointer `i` moves smoothly: 0 -> 1 -> 2 -> 3!
- **CENTER-STAGE HERO:** Array Track Overwrite (Slots 0..2).
- **CAUSE:** Loop executes 3 times (`count0 = 3`).
- **EFFECT:** Slots 0..2 filled with red zeroes; pointer `i` rests at index 3.
- **WHAT MUST NOT APPEAR YET:** Ones overwrite loop.
- **CLEANUP / EXIT:** Line 18 highlight clears.
- **PERSISTENT STATE:** Lines 1–19 visible, slots 0..2 = Red 0, `i = 3`.

---

### Anchor 26: S04_THEN (F1287 .. F1298)
- **ANCHOR:** "Then" (F1287..F1298)
- **WHAT APPEARS NOW:** Transition to next block: Line 20 types: `    for _ in range(count1):` (F1287..F1298). Active highlight on Line 20.
- **CENTER-STAGE HERO:** Line 20 in ChalkCodeEditorV2.
- **CAUSE:** Loop setup for writing ones.
- **EFFECT:** Range loop types referencing `count1`.
- **WHAT MUST NOT APPEAR YET:** `nums[i] = 1`.
- **CLEANUP / EXIT:** Line 19 highlight clears.
- **PERSISTENT STATE:** Lines 1–20 visible.

---

### Anchor 27: S04_WRITE_ONE (F1298 .. F1334, pause to F1341)
- **ANCHOR:** "write 1," (F1298..F1334)
- **WHAT APPEARS NOW:** Line 21 types: `        nums[i] = 1` (F1298..F1325). Active highlight on Line 21.
- **CENTER-STAGE HERO:** Line 21 in ChalkCodeEditorV2.
- **CAUSE:** Value assignment statement.
- **EFFECT:** `nums[i] = 1` types out; slot under `i` (index 3) glows white outline.
- **WHAT MUST NOT APPEAR YET:** `i += 1`.
- **CLEANUP / EXIT:** Line 20 highlight clears.
- **PERSISTENT STATE:** Lines 1–21 visible.

---

### Anchor 28: S04_COUNT1_TIMES (F1341 .. F1373, pause to F1388)
- **ANCHOR:** "count 1 times." (F1341..F1373)
- **WHAT APPEARS NOW:** Line 22 types: `        i += 1` (F1341..F1360). Active highlight on Line 22. NOW TEACH EFFECT: Array track in center-right executes: Slots 3, 4, 5 turn solid White `1`! Pointer `i` moves smoothly: 3 -> 4 -> 5 -> 6!
- **CENTER-STAGE HERO:** Array Track Overwrite (Slots 3..5).
- **CAUSE:** Loop executes 3 times (`count1 = 3`).
- **EFFECT:** Slots 3..5 filled with white ones; pointer `i` rests at index 6.
- **WHAT MUST NOT APPEAR YET:** Twos overwrite loop.
- **CLEANUP / EXIT:** Line 21 highlight clears.
- **PERSISTENT STATE:** Lines 1–22 visible, slots 0..5 filled, `i = 6`.

---

### Anchor 29: S04_FINALLY (F1388 .. F1408, pause to F1425)
- **ANCHOR:** "And finally," (F1388..F1408)
- **WHAT APPEARS NOW:** Transition to final block: Line 23 types: `    for _ in range(count2):` (F1388..F1408). Active highlight on Line 23.
- **CENTER-STAGE HERO:** Line 23 in ChalkCodeEditorV2.
- **CAUSE:** Loop setup for writing twos.
- **EFFECT:** Range loop types referencing `count2`.
- **WHAT MUST NOT APPEAR YET:** `nums[i] = 2`.
- **CLEANUP / EXIT:** Line 22 highlight clears.
- **PERSISTENT STATE:** Lines 1–23 visible.

---

### Anchor 30: S04_WRITE_TWO (F1425 .. F1452, pause to F1461)
- **ANCHOR:** "write 2," (F1425..F1452)
- **WHAT APPEARS NOW:** Line 24 types: `        nums[i] = 2` (F1425..F1448). Active highlight on Line 24.
- **CENTER-STAGE HERO:** Line 24 in ChalkCodeEditorV2.
- **CAUSE:** Value assignment statement.
- **EFFECT:** `nums[i] = 2` types out; slot under `i` (index 6) glows blue outline.
- **WHAT MUST NOT APPEAR YET:** `i += 1`.
- **CLEANUP / EXIT:** Line 23 highlight clears.
- **PERSISTENT STATE:** Lines 1–24 visible.

---

### Anchor 31: S04_COUNT2_TIMES (F1461 .. F1490, pause to F1508)
- **ANCHOR:** "count 2 times." (F1461..F1490)
- **WHAT APPEARS NOW:** Line 25 types: `        i += 1` (F1461..F1480). Active highlight on Line 25. NOW TEACH EFFECT: Array track in center-right executes: Slots 6, 7, 8, 9 turn solid Blue `2`! Pointer `i` moves smoothly: 6 -> 7 -> 8 -> 9 -> 10 (finished)!
- **CENTER-STAGE HERO:** Array Track Overwrite (Slots 6..9).
- **CAUSE:** Loop executes 4 times (`count2 = 4`).
- **EFFECT:** Slots 6..9 filled with blue twos; pointer `i` exits end of array. Complete 25 lines of code written!
- **WHAT MUST NOT APPEAR YET:** Final takeaway banner.
- **CLEANUP / EXIT:** Line 24 highlight clears.
- **PERSISTENT STATE:** Complete code lines 1–25, fully rewritten array `[0,0,0,1,1,1,2,2,2,2]`.

---

### Anchor 32: S04_SORTED_RESULT (F1508 .. F1560)
- **ANCHOR:** "That gives us the sorted array." (F1508..F1560)
- **WHAT APPEARS NOW:** ARRAY OWNS CENTER STAGE! Array shifts smoothly toward center (`X: 300, Y: 460, W: 1320`), partition boundaries illuminate in chalk:
  - Slots 0..2: Red `[0, 0, 0]`
  - Slots 3..5: White `[1, 1, 1]`
  - Slots 6..9: Blue `[2, 2, 2, 2]`
  Badge: "ARRAY FULLY SORTED IN-PLACE".
- **CENTER-STAGE HERO:** Fully Sorted 10-Slot Array.
- **CAUSE:** Completion of all three overwrite loops.
- **EFFECT:** Array takes center stage with glowing color partitions; terminal scales down slightly.
- **WHAT MUST NOT APPEAR YET:** Summary takeaway.
- **CLEANUP / EXIT:** Pointer `i` disappears cleanly.
- **PERSISTENT STATE:** Centered sorted array with partition lines.

---

### Anchor 33: S04_EXAMPLE (F1560 .. F1607, pause to F1621)
- **ANCHOR:** "For our example," (F1560..F1607)
- **WHAT APPEARS NOW:** Evidence Mapping Header appears: "MASTER TESTCASE TRACE VERIFICATION". 3 Counter Cards dock directly above the 3 array partitions.
- **CENTER-STAGE HERO:** Partitioned Array + Counter Alignment.
- **CAUSE:** Grounding the generic algorithm into the verified master input.
- **EFFECT:** Alignment lines connect each counter card to its array segment.
- **WHAT MUST NOT APPEAR YET:** Individual partition pulses.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Structured 2-tier alignment: Counters (top) -> Array (bottom).

---

### Anchor 34: S04_EX_C0 (F1621 .. F1657, pause to F1667)
- **ANCHOR:** "count 0 is 3," (F1621..F1657)
- **WHAT APPEARS NOW:** Card 0 and Slots 0..2 highlight simultaneously in vibrant Red chalk.
- **CENTER-STAGE HERO:** Red Partition `[0, 0, 0]` & `count0 = 3`.
- **CAUSE:** Narration calls out count 0 specifically.
- **EFFECT:** Red bracket glows; label "count0 = 3 => 3 slots" displays.
- **WHAT MUST NOT APPEAR YET:** Count 1, 2 highlights.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Red segment highlighted.

---

### Anchor 35: S04_EX_C1 (F1667 .. F1694, pause to F1706)
- **ANCHOR:** "count 1 is 3," (F1667..F1694)
- **WHAT APPEARS NOW:** Card 1 and Slots 3..5 highlight simultaneously in crisp White chalk.
- **CENTER-STAGE HERO:** White Partition `[1, 1, 1]` & `count1 = 3`.
- **CAUSE:** Narration calls out count 1 specifically.
- **EFFECT:** White bracket glows; label "count1 = 3 => 3 slots" displays.
- **WHAT MUST NOT APPEAR YET:** Count 2 highlight.
- **CLEANUP / EXIT:** Red highlight softens.
- **PERSISTENT STATE:** White segment highlighted.

---

### Anchor 36: S04_EX_C2 (F1706 .. F1759, pause to F1771)
- **ANCHOR:** "and count 2 is 4." (F1706..F1759)
- **WHAT APPEARS NOW:** Card 2 and Slots 6..9 highlight simultaneously in electric Blue chalk.
- **CENTER-STAGE HERO:** Blue Partition `[2, 2, 2, 2]` & `count2 = 4`.
- **CAUSE:** Narration calls out count 2 specifically.
- **EFFECT:** Blue bracket glows; label "count2 = 4 => 4 slots" displays.
- **WHAT MUST NOT APPEAR YET:** Write summary.
- **CLEANUP / EXIT:** White highlight softens.
- **PERSISTENT STATE:** All 3 partitions identified with their exact counts.

---

### Anchor 37: S04_SO_WRITE (F1771 .. F1801)
- **ANCHOR:** "So we write" (F1771..F1801)
- **WHAT APPEARS NOW:** Visual write arrows descend from Counters into Array partitions.
- **CENTER-STAGE HERO:** Write Arrows (Chalk Curves).
- **CAUSE:** Speaker connects counting to writing action.
- **EFFECT:** Three smooth chalk arrows point into the respective partitions.
- **WHAT MUST NOT APPEAR YET:** None.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Write causality established.

---

### Anchor 38: S04_THREE_ZEROES (F1801 .. F1846, pause to F1854)
- **ANCHOR:** "3 0s," (F1801..F1846)
- **WHAT APPEARS NOW:** Slots 0, 1, 2 pulse with Red chalk text: "3 ZEROES".
- **CENTER-STAGE HERO:** Slots 0..2.
- **CAUSE:** Speaker states 3 zeroes written.
- **EFFECT:** Slots 0, 1, 2 glow red; confirmation tick mark.
- **WHAT MUST NOT APPEAR YET:** Ones and twos pulses.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Zeroes confirmed.

---

### Anchor 39: S04_THREE_ONES (F1854 .. F1885, pause to F1894)
- **ANCHOR:** "3 1s," (F1854..F1885)
- **WHAT APPEARS NOW:** Slots 3, 4, 5 pulse with White chalk text: "3 ONES".
- **CENTER-STAGE HERO:** Slots 3..5.
- **CAUSE:** Speaker states 3 ones written.
- **EFFECT:** Slots 3, 4, 5 glow white; confirmation tick mark.
- **WHAT MUST NOT APPEAR YET:** Twos pulse.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Ones confirmed.

---

### Anchor 40: S04_FOUR_TWOS (F1894 .. F1929, pause to F1948)
- **ANCHOR:** "and 4 2s." (F1894..F1929)
- **WHAT APPEARS NOW:** Slots 6, 7, 8, 9 pulse with Blue chalk text: "4 TWOS".
- **CENTER-STAGE HERO:** Slots 6..9.
- **CAUSE:** Speaker states 4 twos written.
- **EFFECT:** Slots 6, 7, 8, 9 glow blue; confirmation tick mark.
- **WHAT MUST NOT APPEAR YET:** Final code center return.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Complete master output confirmed.

---

### Anchor 41: S04_SIMPLE (F1948 .. F1983, pause to F1998)
- **ANCHOR:** "The code is simple." (F1948..F1983)
- **WHAT APPEARS NOW:** EFFECT FINISHED -> CODE RETURNS CENTER STAGE! Terminal expands smoothly to Center Stage (`X: 420, Y: 130, W: 1080, H: 770`). Full 25-line Python implementation displayed in all its beauty! Visual array & counters dock neatly or fade out smoothly.
- **CENTER-STAGE HERO:** ChalkCodeEditorV2 (Complete, centered).
- **CAUSE:** Speaker reflects on overall simplicity of the implementation.
- **EFFECT:** Terminal commands center stage; syntax highlighting, line numbers, and clean structure shine.
- **WHAT MUST NOT APPEAR YET:** Pass 1 & 2 takeaway brackets.
- **CLEANUP / EXIT:** Array track and counter cards fade out.
- **PERSISTENT STATE:** Terminal centered, full code visible.

---

### Anchor 42: S04_COUNT_PASS (F1998 .. F2038, pause to F2058)
- **ANCHOR:** "One pass to count," (F1998..F2038)
- **WHAT APPEARS NOW:** Pass 1 block in terminal (lines 2..13) gets a warm gold bracket highlight (`#FFD166`). Left badge: "PASS 1 · O(N) COUNT".
- **CENTER-STAGE HERO:** Lines 2..13 in ChalkCodeEditorV2.
- **CAUSE:** Speaker isolates Pass 1 time complexity.
- **EFFECT:** Lines 2..13 glow softly with golden chalk bracket; badge anchors O(N) count pass.
- **WHAT MUST NOT APPEAR YET:** Pass 2 bracket.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Pass 1 highlighted in terminal.

---

### Anchor 43: S04_REWRITE_PASS (F2058 .. F2113)
- **ANCHOR:** "and one pass to rewrite." (F2058..F2113)
- **WHAT APPEARS NOW:** Pass 2 block in terminal (lines 15..25) gets a bright mint bracket highlight (`#6EE7B7`). Left badge: "PASS 2 · O(N) REWRITE". Bottom Takeaway Banner (`RoughBox`): "ALGORITHM SUMMARY: 1 PASS TO COUNT + 1 PASS TO REWRITE  ·  TIME: O(N)  ·  SPACE: O(1)".
- **CENTER-STAGE HERO:** Complete Dual-Pass Architecture & Takeaway.
- **CAUSE:** Speaker delivers the final punchline and summary of Approach 1.
- **EFFECT:** Both passes glow synchronously (Gold for Pass 1, Mint for Pass 2); Takeaway Banner draws on with RoughBox. Settle to frame 2113.
- **WHAT MUST NOT APPEAR YET:** Next scene (Dutch National Flag).
- **CLEANUP / EXIT:** Active typing cursor settles to steady hold.
- **PERSISTENT STATE:** Complete, beautiful, production-ready Scene 04.

---

## 4. Verification & Validation Checklist

- [x] Exact Total Frames: 2,113 frames (70.44s @ 30 FPS)
- [x] Total Spoken Words: 148 words
- [x] All 43 semantic anchors detailed with no gaps or skipped frames
- [x] Strict Cause -> Effect dynamic docking (Code Center <-> Visual Center)
- [x] Beautiful Chalk Terminal (ChalkCodeEditorV2 with line typing, cursor blink, authentic chalkboard styling)
- [x] Authentic `@dsa/kit` components used (RoughBox, ArrayTrackV2, ChalkboardBackground, ChalkFilters)
- [x] Zero generic CSS borders or un-styled boxes
- [x] No spoilers: future lines remain hidden until narration reaches startFrame
