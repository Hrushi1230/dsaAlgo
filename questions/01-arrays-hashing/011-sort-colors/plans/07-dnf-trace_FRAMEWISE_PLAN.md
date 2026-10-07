# Q11 Sort Colors — Scene 07 Framewise Plan
## Scene: 07-dnf-trace (Full 10-Step Dutch National Flag Trace)

---

## Mandatory Scene Contract

```text
SCENE: 07-dnf-trace
QUESTION: Q011 · Sort Colors (LeetCode 75)
BEAT TYPE: FULL TRACE (Algorithm Execution)
AUDIO FILE: 07-dnf-trace.mp3
SYNC FILE: 07-dnf-trace.json / 07-dnf-trace.anchors.json
FPS: 30
TOTAL FRAMES: 7188 frames (239.6 seconds)
PEDAGOGICAL GOAL: Execute the verified Dutch National Flag algorithm completely across all 10 iterations on the locked master testcase [2, 1, 2, 0, 2, 1, 0, 1, 0, 2]. Demonstrate real swaps (including identical value swap and self-swap), pointer movements, partition shrinking, and the golden invariant rule where mid stays frozen on 2.
TRACE STEP IDS: DNF-ST01 through DNF-ST10
DATA STRUCTURE: Fixed 10-slot ArrayTrackV2 with 3 pointers (low, mid, high) and 4 dynamic partition bands (0s, 1s, UNKNOWN, 2s).

REUSE:
- ArrayTrackV2 (@dsa/kit/components/array)
- ArrayValueV2 (@dsa/kit/components/array)
- ArrayIndexRowV2 (@dsa/kit/components/array)
- PointerLaneV2 (@dsa/kit/components/array)
- PartitionBandV2 (@dsa/kit/components/array)
- Captions (@dsa/kit/components/Captions)
- course theme (@dsa/kit/theme)

EXTEND: N/A
CREATE: None
DO NOT TOUCH: @dsa/kit shared primitives, master testcase array values

MOTION SEMANTICS:
- Deterministic spring and interpolate frames.
- Pointers glide horizontally with smooth springs (damping: 18, stiffness: 120).
- Swaps travel along non-colliding quadratic bezier curves (source lifts along top arc, target returns along bottom arc).
- Fixed slot positions at all times (slots never shift or teleport).
- Zero CSS transitions or keyframes.

MORPH SEMANTICS: N/A
SVG SEMANTICS:
- Swap flight arcs rendered via SVG paths with deterministic draw-on.
- Partition bounds update mathematically from pointer indices (low, mid, high).

TRANSITION IN: Seamless continuity from Scene 06 (ArrayTrackV2 at top: 105px).
TRANSITION OUT: Golden invariant summary and gateway teaser to Scene 08 (Clean Code).
FORBIDDEN:
- Skipping any of the 10 algorithm iterations.
- Guessing frame timings or durations.
- Moving mid on a 2 swap before inspection.
- Colliding card borders with array slot index labels or pointers.
- Introducing code in this trace scene.
```

---

## 1. Spatial Layout Architecture & Rule 16 Compliance

To guarantee 100% compliance with the repository's **Spatial Composition & Zero-Collision Invariants (Rule 16)**:

| Canvas Zone | Coordinate Range | Elements Rendered | Clearance Guarantees |
|---|---|---|---|
| **Top Header** | Y: 28 to Y: 90 | Question Badge, Scene Title, Execution Stage Tag | 15px clearance above array track header |
| **Zone A: Array Track** | Y: 105 to Y: 380 | Track Header (Y: 105), Slot Boxes (Y: 151..235), Indices (Y: 235..260), Pointer Lane 0 (Y: 270..345), Pointer Lane 1 (Y: 345..379) | `marginBottom: 46px` on header clears top partition labels. Lane 1 tip ends at Y: 379px. |
| **Zone B: Dynamic Pedagogical Stage** | Y: 430 to Y: 740 | Step Card (Step N of 10), Inspection Reticle, Swap Flight Curves, Action Badges, Takeaway Pillars | **Strictly starts at Y: 430px (51px clearance below pointer mid)**. Zero overlap with array track or indices. |
| **Zone C: Bottom Captions** | Y: 980 to Y: 1040 | Syllable/word-level synced captions | **240px breathing room** between Zone B card bottom (Y: 740) and captions (Y: 980). |

---

## 2. Complete Audio-Anchor Master Table (86 Anchors · F0 .. F7188)

| # | Anchor ID | Frame Range | Pause | Spoken Phrase | Trace Step | Action / Mutation |
|---|---|---|---|---|---|---|
| 1 | `S07_INTRO_RUN` | F0..F52 | 17f | "Now let's run the complete algorithm." | SETUP | No mutation |
| 2 | `S07_INTRO_MASTER` | F69..F101 | 10f | "On our master example," | SETUP | No mutation |
| 3 | `S07_ARRAY_VALS` | F111..F383 | 15f | "our array is 2, 1, 2, 0, 2, 1, 0, 1, 0, 2." | SETUP | No mutation |
| 4 | `S07_START_LOW` | F398..F467 | 14f | "We start with low at index 0," | SETUP | No mutation |
| 5 | `S07_START_MID` | F481..F517 | 13f | "mid at index 0," | SETUP | No mutation |
| 6 | `S07_START_HIGH` | F530..F558 | 7f | "and high at index 9." | SETUP | No mutation |
| 7 | `S07_ENTIRE_UNKNOWN` | F565..F648 | 17f | "Right now, the entire array is unknown." | SETUP | No mutation |
| 8 | `S07_LETS_BEGIN` | F665..F686 | 20f | "Let's begin." | SETUP | No mutation |
| 9 | `S07_ST1_MID_VAL` | F706..F760 | 18f | "At mid, we have 2." | STEP 1 | swap(0,9) (2<->2), h: 9->8, mid holds 0 |
| 10 | `S07_ST1_BELONGS_RIGHT` | F778..F818 | 0f | "2 belongs on the right." | STEP 1 | swap(0,9) (2<->2), h: 9->8, mid holds 0 |
| 11 | `S07_ST1_SWAP_DECISION` | F818..F940 | 21f | "So we swap the value at mid with the value at high." | STEP 1 | swap(0,9) (2<->2), h: 9->8, mid holds 0 |
| 12 | `S07_ST1_BOTH_TWO` | F961..F1085 | 15f | "Both values are 2, so the array looks exactly the same." | STEP 1 | swap(0,9) (2<->2), h: 9->8, mid holds 0 |
| 13 | `S07_ST1_STATE_CHANGED` | F1100..F1144 | 15f | "But the state has changed." | STEP 1 | swap(0,9) (2<->2), h: 9->8, mid holds 0 |
| 14 | `S07_ST1_HIGH_DECREMENT` | F1159..F1216 | 11f | "High moves from 9 to 8," | STEP 1 | swap(0,9) (2<->2), h: 9->8, mid holds 0 |
| 15 | `S07_ST1_MID_STAYS` | F1227..F1265 | 13f | "and mid stays at 0." | STEP 1 | swap(0,9) (2<->2), h: 9->8, mid holds 0 |
| 16 | `S07_ST2_INSPECT_SAME` | F1278..F1331 | 14f | "We inspect the same position again." | STEP 2 | swap(0,8) (2<->0), h: 8->7, mid holds 0 |
| 17 | `S07_ST2_MID_STILL_TWO` | F1345..F1402 | 15f | "At mid, we still have 2." | STEP 2 | swap(0,8) (2<->0), h: 8->7, mid holds 0 |
| 18 | `S07_ST2_HIGH_POINTS_ZERO` | F1417..F1502 | 10f | "This time, high is pointing to 0." | STEP 2 | swap(0,8) (2<->0), h: 8->7, mid holds 0 |
| 19 | `S07_ST2_SWAP_TWO_ZERO` | F1512..F1566 | 0f | "So we swap 2 with 0." | STEP 2 | swap(0,8) (2<->0), h: 8->7, mid holds 0 |
| 20 | `S07_ST2_ARRAY_BECOMES` | F1566..F1849 | 13f | "The array becomes 0, 1, 2, 0, 2, 1, 0, 1, 2, 2." | STEP 2 | swap(0,8) (2<->0), h: 8->7, mid holds 0 |
| 21 | `S07_ST2_HIGH_DECREMENT` | F1862..F1909 | 15f | "High moves from 8 to 7." | STEP 2 | swap(0,8) (2<->0), h: 8->7, mid holds 0 |
| 22 | `S07_ST2_MID_STAYS` | F1924..F1978 | 16f | "And again, mid stays at 0." | STEP 2 | swap(0,8) (2<->0), h: 8->7, mid holds 0 |
| 23 | `S07_ST3_MID_IS_ZERO` | F1994..F2054 | 18f | "Now the value at mid is 0." | STEP 3 | self-swap(0,0), l: 0->1, m: 0->1 |
| 24 | `S07_ST3_ZERO_LEFT` | F2072..F2111 | 13f | "0 belongs on the left." | STEP 3 | self-swap(0,0), l: 0->1, m: 0->1 |
| 25 | `S07_ST3_BOTH_AT_ZERO` | F2124..F2195 | 9f | "Low and mid are both at index 0." | STEP 3 | self-swap(0,0), l: 0->1, m: 0->1 |
| 26 | `S07_ST3_SELF_SWAP` | F2204..F2251 | 12f | "So this is only a self -swap." | STEP 3 | self-swap(0,0), l: 0->1, m: 0->1 |
| 27 | `S07_ST3_LOW_MOVES` | F2263..F2305 | 11f | "Then low moves to 1," | STEP 3 | self-swap(0,0), l: 0->1, m: 0->1 |
| 28 | `S07_ST3_MID_MOVES` | F2316..F2357 | 17f | "and mid moves to 1." | STEP 3 | self-swap(0,0), l: 0->1, m: 0->1 |
| 29 | `S07_ST4_MID_POINTS_ONE` | F2374..F2431 | 0f | "Now mid is pointing to 1." | STEP 4 | no swap, m: 1->2 |
| 30 | `S07_ST4_ONE_MIDDLE` | F2431..F2497 | 16f | "1 already belongs in the middle." | STEP 4 | no swap, m: 1->2 |
| 31 | `S07_ST4_NO_SWAP` | F2513..F2548 | 14f | "So there is no swap." | STEP 4 | no swap, m: 1->2 |
| 32 | `S07_ST4_MID_MOVES_TWO` | F2562..F2626 | 15f | "We simply move mid to index 2." | STEP 4 | no swap, m: 1->2 |
| 33 | `S07_ST5_MID_POINTS_TWO` | F2641..F2698 | 20f | "Now mid is pointing to 2." | STEP 5 | swap(2,7) (2<->1), h: 7->6, mid holds 2 |
| 34 | `S07_ST5_TWO_RIGHT` | F2718..F2756 | 18f | "2 belongs on the right." | STEP 5 | swap(2,7) (2<->1), h: 7->6, mid holds 2 |
| 35 | `S07_ST5_HIGH_AT_SEVEN` | F2774..F2813 | 9f | "High is at index 7." | STEP 5 | swap(2,7) (2<->1), h: 7->6, mid holds 2 |
| 36 | `S07_ST5_VALUE_THERE_ONE` | F2822..F2860 | 5f | "And the value there is 1." | STEP 5 | swap(2,7) (2<->1), h: 7->6, mid holds 2 |
| 37 | `S07_ST5_SWAP_THEM` | F2865..F2891 | 14f | "So we swap them." | STEP 5 | swap(2,7) (2<->1), h: 7->6, mid holds 2 |
| 38 | `S07_ST5_ARRAY_BECOMES` | F2905..F3197 | 18f | "The array becomes 0, 1, 1, 0, 2, 1, 0, 2, 2, 2." | STEP 5 | swap(2,7) (2<->1), h: 7->6, mid holds 2 |
| 39 | `S07_ST5_HIGH_DECREMENT` | F3215..F3262 | 4f | "High moves from 7 to 6," | STEP 5 | swap(2,7) (2<->1), h: 7->6, mid holds 2 |
| 40 | `S07_ST5_MID_STAYS` | F3266..F3313 | 0f | "but mid stays at index 2." | STEP 5 | swap(2,7) (2<->1), h: 7->6, mid holds 2 |
| 41 | `S07_ST6_VAL_FROM_RIGHT` | F3313..F3397 | 13f | "The value that came from the right is 1." | STEP 6 | inspect incoming 1, no swap, m: 2->3 |
| 42 | `S07_ST6_INSPECT_IT` | F3410..F3457 | 13f | "So now we inspect it." | STEP 6 | inspect incoming 1, no swap, m: 2->3 |
| 43 | `S07_ST6_ONE_MIDDLE` | F3470..F3521 | 11f | "1 already belongs in the middle." | STEP 6 | inspect incoming 1, no swap, m: 2->3 |
| 44 | `S07_ST6_NO_SWAP` | F3532..F3550 | 19f | "No swap." | STEP 6 | inspect incoming 1, no swap, m: 2->3 |
| 45 | `S07_ST6_MID_MOVES_THREE` | F3569..F3615 | 10f | "Mid moves to index 3." | STEP 6 | inspect incoming 1, no swap, m: 2->3 |
| 46 | `S07_ST7_MID_POINTS_ZERO` | F3625..F3680 | 17f | "Now mid is pointing to 0." | STEP 7 | swap(3,1) (0<->1), l: 1->2, m: 3->4 |
| 47 | `S07_ST7_ZERO_LEFT` | F3697..F3748 | 15f | "0 belongs on the left." | STEP 7 | swap(3,1) (0<->1), l: 1->2, m: 3->4 |
| 48 | `S07_ST7_LOW_AT_ONE` | F3763..F3808 | 7f | "Low is at index 1." | STEP 7 | swap(3,1) (0<->1), l: 1->2, m: 3->4 |
| 49 | `S07_ST7_SWAP_THREE_ONE` | F3815..F3899 | 13f | "So we swap index 3 with index 1." | STEP 7 | swap(3,1) (0<->1), l: 1->2, m: 3->4 |
| 50 | `S07_ST7_ARRAY_BECOMES` | F3912..F4200 | 13f | "The array becomes 0, 0, 1, 1, 2, 1, 0, 2, 2, 2." | STEP 7 | swap(3,1) (0<->1), l: 1->2, m: 3->4 |
| 51 | `S07_ST7_LOW_MOVES_TWO` | F4213..F4264 | 8f | "Now low moves to index 2." | STEP 7 | swap(3,1) (0<->1), l: 1->2, m: 3->4 |
| 52 | `S07_ST7_MID_MOVES_FOUR` | F4272..F4323 | 6f | "And mid moves to index 4." | STEP 7 | swap(3,1) (0<->1), l: 1->2, m: 3->4 |
| 53 | `S07_ST8_AT_INDEX_FOUR` | F4329..F4358 | 6f | "At index 4." | STEP 8 | swap(4,6) (2<->0), h: 6->5, mid holds 4 |
| 54 | `S07_ST8_MID_POINTS_TWO` | F4364..F4396 | 11f | "Mid is pointing to 2." | STEP 8 | swap(4,6) (2<->0), h: 6->5, mid holds 4 |
| 55 | `S07_ST8_TWO_RIGHT` | F4407..F4441 | 13f | "2 belongs on the right." | STEP 8 | swap(4,6) (2<->0), h: 6->5, mid holds 4 |
| 56 | `S07_ST8_HIGH_AT_SIX` | F4454..F4497 | 13f | "High is at index 6." | STEP 8 | swap(4,6) (2<->0), h: 6->5, mid holds 4 |
| 57 | `S07_ST8_HIGH_POINTS_ZERO` | F4510..F4558 | 16f | "And high is pointing to 0." | STEP 8 | swap(4,6) (2<->0), h: 6->5, mid holds 4 |
| 58 | `S07_ST8_SWAP_THEM` | F4574..F4600 | 12f | "So we swap them." | STEP 8 | swap(4,6) (2<->0), h: 6->5, mid holds 4 |
| 59 | `S07_ST8_ARRAY_BECOMES` | F4612..F4881 | 16f | "The array becomes 0, 0, 1, 1, 0, 1, 2, 2, 2, 2." | STEP 8 | swap(4,6) (2<->0), h: 6->5, mid holds 4 |
| 60 | `S07_ST8_HIGH_DECREMENT` | F4897..F4945 | 8f | "High moves from 6 to 5." | STEP 8 | swap(4,6) (2<->0), h: 6->5, mid holds 4 |
| 61 | `S07_ST8_MID_STAYS` | F4953..F5035 | 20f | "And once again, mid stays at index 4." | STEP 8 | swap(4,6) (2<->0), h: 6->5, mid holds 4 |
| 62 | `S07_ST9_LOOK_CAREFULLY` | F5055..F5089 | 0f | "Now look carefully." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 63 | `S07_ST9_NEW_VAL_ZERO` | F5089..F5179 | 10f | "The new value at mid is 0." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 64 | `S07_ST9_WHY_NOT_MOVE` | F5189..F5264 | 29f | "That is exactly why we did not move mid." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 65 | `S07_ST9_NEEDS_CLASSIFIED` | F5293..F5359 | 16f | "This 0 still needs to be classified." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 66 | `S07_ST9_ZERO_LEFT` | F5375..F5422 | 12f | "0 belongs on the left." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 67 | `S07_ST9_LOW_AT_TWO` | F5434..F5471 | 12f | "Low is at index 2." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 68 | `S07_ST9_SWAP_FOUR_TWO` | F5483..F5576 | 12f | "So we swap index 4 with index 2." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 69 | `S07_ST9_ARRAY_BECOMES` | F5588..F5857 | 13f | "The array becomes 0, 0, 0, 1, 1, 1, 2, 2, 2, 2." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 70 | `S07_ST9_LOW_MOVES_THREE` | F5870..F5917 | 10f | "Then low moves to index 3." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 71 | `S07_ST9_MID_MOVES_FIVE` | F5927..F5974 | 0f | "And mid moves to index 5." | STEP 9 | CLIMAX: inspect incoming 0, swap(4,2), l: 2->3, m: 4->5 |
| 72 | `S07_ST10_MID_POINTS_ONE` | F5974..F6029 | 13f | "Now mid is pointed to 1." | STEP 10 | final 1 in middle, no swap, m: 5->6 |
| 73 | `S07_ST10_CORRECT_MIDDLE` | F6042..F6103 | 8f | "1 is already in the correct middle region." | STEP 10 | final 1 in middle, no swap, m: 5->6 |
| 74 | `S07_ST10_MOVE_MID_FORWARD` | F6111..F6157 | 13f | "So we simply move mid forward." | STEP 10 | final 1 in middle, no swap, m: 5->6 |
| 75 | `S07_ST10_MID_BECOMES_SIX` | F6170..F6200 | 12f | "Mid becomes 6." | STEP 10 | final 1 in middle, no swap, m: 5->6 |
| 76 | `S07_ST10_HIGH_IS_FIVE` | F6212..F6242 | 7f | "High is 5." | STEP 10 | final 1 in middle, no swap, m: 5->6 |
| 77 | `S07_TERM_CROSSED` | F6249..F6283 | 14f | "Now mid has crossed high." | TERMINATION | mid > high (6 > 5), unknown empty |
| 78 | `S07_TERM_EMPTY` | F6297..F6392 | 14f | "That means the unknown region is empty." | TERMINATION | mid > high (6 > 5), unknown empty |
| 79 | `S07_TERM_CLASSIFIED` | F6406..F6442 | 17f | "Everything has been classified." | TERMINATION | mid > high (6 > 5), unknown empty |
| 80 | `S07_FINAL_ARRAY_VALS` | F6459..F6787 | 4f | "And our final array is 0, 0, 0, 1, 1, 1, 2, 2, 2, 2." | TERMINATION | mid > high (6 > 5), unknown empty |
| 81 | `S07_FINAL_DONE` | F6791..F6800 | 19f | "Done." | TERMINATION | mid > high (6 > 5), unknown empty |
| 82 | `S07_RECAP_PATTERN` | F6819..F6862 | 17f | "Notice the key pattern." | RECAP | 3 Core DNF Invariant Rules |
| 83 | `S07_RECAP_ZERO_LEFT` | F6879..F6910 | 11f | "0 goes left." | RECAP | 3 Core DNF Invariant Rules |
| 84 | `S07_RECAP_ONE_MIDDLE` | F6921..F6959 | 14f | "1 stays in the middle." | RECAP | 3 Core DNF Invariant Rules |
| 85 | `S07_RECAP_TWO_RIGHT` | F6973..F7012 | 19f | "And 2 goes right." | RECAP | 3 Core DNF Invariant Rules |
| 86 | `S07_RECAP_MID_STAYS_RULE` | F7031..F7188 | 0f | "And every time we move a 2 to the right, mid stays until the incoming value is checked." | RECAP | 3 Core DNF Invariant Rules |

---

## 3. Framewise Anchor Choreography (All 86 Anchors)

### Anchor 1: S07_INTRO_RUN (F0 .. F52, pause to F69)
- **ANCHOR:** "Now let's run the complete algorithm." (F0..F52)
- **WHAT APPEARS NOW:** Scene Title Card and Board Header activate: 'QUESTION 011 · SORT COLORS', 'APPROACH 2 · THE THREE-POINTER (DNF) TRACE', Stage tag: 'FULL 10-STEP EXECUTION'. Center-stage 10-slot ArrayTrackV2 fades in with initial master values [2, 1, 2, 0, 2, 1, 0, 1, 0, 2].
- **CENTER-STAGE HERO:** ArrayTrackV2 10-slot workspace initialization.
- **CAUSE:** Narrator announces start of full execution on master testcase.
- **EFFECT / MOTION:** Header badges draw on; slots appear with neutral chalk borders at Y: 105; track title header shows 'nums [10 elements] · In-Place Traversal'.
- **WHAT MUST NOT APPEAR YET:** Pointer badges (low, mid, high), partition brackets.
- **COMPREHENSION HOLD:** F52..F69 (17 frames): Learner registers the fresh clean blackboard.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Master array track visible.

---

### Anchor 2: S07_INTRO_MASTER (F69 .. F101, pause to F111)
- **ANCHOR:** "On our master example," (F69..F101)
- **WHAT APPEARS NOW:** Master testcase highlight box frames the array track; subtitle badge displays 'Master Input: [2, 1, 2, 0, 2, 1, 0, 1, 0, 2]'.
- **CENTER-STAGE HERO:** Master testcase framing.
- **CAUSE:** Narrator establishes focus on the master testcase.
- **EFFECT / MOTION:** Subtle emerald outline pulses around array slots 0 to 9.
- **WHAT MUST NOT APPEAR YET:** Pointer arrows.
- **COMPREHENSION HOLD:** F101..F111 (10 frames): Focus lock.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Master testcase context established.

---

### Anchor 3: S07_ARRAY_VALS (F111 .. F383, pause to F398)
- **ANCHOR:** "our array is 2, 1, 2, 0, 2, 1, 0, 1, 0, 2." (F111..F383)
- **WHAT APPEARS NOW:** Sequential slot glow traverses indices 0 through 9 as narrator reads out each value: 2, 1, 2, 0, 2, 1, 0, 1, 0, 2. Value colors reflect identity (0: Red, 1: White, 2: Cyan).
- **CENTER-STAGE HERO:** Sequential Value Reading Scan.
- **CAUSE:** Spoken readback of input array values.
- **EFFECT / MOTION:** Chalk scan indicator glides across indices 0..9; indices idx [0] to idx [9] clearly rendered beneath each slot.
- **WHAT MUST NOT APPEAR YET:** Pointer labels low, mid, high.
- **COMPREHENSION HOLD:** F383..F398 (15 frames): Full array values confirmed.
- **CLEANUP / EXIT:** Sequential glow settles into steady values.
- **PERSISTENT STATE:** Array [2, 1, 2, 0, 2, 1, 0, 1, 0, 2] verified.

---

### Anchor 4: S07_START_LOW (F398 .. F467, pause to F481)
- **ANCHOR:** "We start with low at index 0," (F398..F467)
- **WHAT APPEARS NOW:** Pointer 'low' arrow and label glide onto index 0 on Lane 0 (Red/Coral badge). Invariant tag appears: 'low = 0 (boundary for 0s)'.
- **CENTER-STAGE HERO:** Pointer 'low' initialization at index 0.
- **CAUSE:** Initialization of first pointer.
- **EFFECT / MOTION:** Red arrow springs up to point at bottom of slot 0.
- **WHAT MUST NOT APPEAR YET:** Pointers mid and high.
- **COMPREHENSION HOLD:** F467..F481 (14 frames): 'low' anchored at index 0.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** low = 0 active.

---

### Anchor 5: S07_START_MID (F481 .. F517, pause to F530)
- **ANCHOR:** "mid at index 0," (F481..F517)
- **WHAT APPEARS NOW:** Pointer 'mid' arrow and label glide onto index 0 on Lane 1 (Amber/Yellow badge). Invariant tag appears: 'mid = 0 (scanner)'.
- **CENTER-STAGE HERO:** Pointer 'mid' initialization at index 0.
- **CAUSE:** Initialization of second pointer.
- **EFFECT / MOTION:** Amber arrow springs up below slot 0 on Lane 1 with distinct 34px vertical clearance below Lane 0.
- **WHAT MUST NOT APPEAR YET:** Pointer high.
- **COMPREHENSION HOLD:** F517..F530 (13 frames): 'mid' anchored alongside 'low'.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** low = 0, mid = 0 active.

---

### Anchor 6: S07_START_HIGH (F530 .. F558, pause to F565)
- **ANCHOR:** "and high at index 9." (F530..F558)
- **WHAT APPEARS NOW:** Pointer 'high' arrow and label glide onto index 9 on Lane 0 (Cyan badge). Invariant tag appears: 'high = 9 (boundary for 2s)'.
- **CENTER-STAGE HERO:** Pointer 'high' initialization at index 9.
- **CAUSE:** Initialization of third pointer.
- **EFFECT / MOTION:** Cyan arrow springs up below slot 9 pointing at idx 9.
- **WHAT MUST NOT APPEAR YET:** Action execution.
- **COMPREHENSION HOLD:** F558..F565 (7 frames): All 3 pointers initialized.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** low = 0, mid = 0, high = 9 active.

---

### Anchor 7: S07_ENTIRE_UNKNOWN (F565 .. F648, pause to F665)
- **ANCHOR:** "Right now, the entire array is unknown." (F565..F648)
- **WHAT APPEARS NOW:** PartitionBandV2 draws full amber dashed band across entire array: 'UNKNOWN [MID..HIGH] (indices 0..9)'. Empty region tags for 0s [0..-1] and 2s [10..9] indicate 0 classified elements.
- **CENTER-STAGE HERO:** Full Unknown Region Invariant Overlay [0..9].
- **CAUSE:** Narrator highlights that at start, 100% of elements are uninspected.
- **EFFECT / MOTION:** Dashed amber container outlines slots 0 to 9; step card initializes: 'INITIAL STATE: 10 Unknowns'.
- **WHAT MUST NOT APPEAR YET:** Step 1 swap.
- **COMPREHENSION HOLD:** F648..F665 (17 frames): Comprehension of initial invariant.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Full unknown region active.

---

### Anchor 8: S07_LETS_BEGIN (F665 .. F686, pause to F706)
- **ANCHOR:** "Let's begin." (F665..F686)
- **WHAT APPEARS NOW:** Dynamic Step Card in Zone B (Y: 430) activates with glowing border: 'STEP 1 OF 10 · INSPECTING nums[mid]'. Ready indicator pulses.
- **CENTER-STAGE HERO:** Execution Launch & Step Card Activation.
- **CAUSE:** Transition into loop iteration 1.
- **EFFECT / MOTION:** Blackboard border illuminates in amber; pointer mid pulses with chalk halo.
- **WHAT MUST NOT APPEAR YET:** Value mutation.
- **COMPREHENSION HOLD:** F686..F706 (20 frames): High anticipation hold.
- **CLEANUP / EXIT:** Initial state tags settle.
- **PERSISTENT STATE:** Step 1 initiated.

---

### Anchor 9: S07_ST1_MID_VAL (F706 .. F760, pause to F778)
- **ANCHOR:** "At mid, we have 2." (F706..F760)
- **WHAT APPEARS NOW:** Slot 0 (mid) receives bright inspection spotlight: value 2 highlighted in Cyan. Step card displays: 'CURRENT: nums[mid=0] == 2'.
- **CENTER-STAGE HERO:** Slot 0 value inspection (nums[0] = 2).
- **CAUSE:** Mid inspects its current slot.
- **EFFECT / MOTION:** Slot 0 glows cyan; pointer mid arrow pulses.
- **WHAT MUST NOT APPEAR YET:** Swap arc.
- **COMPREHENSION HOLD:** F760..F778 (18 frames): Learner registers current value 2.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** nums[mid] = 2 identified.

---

### Anchor 10: S07_ST1_BELONGS_RIGHT (F778 .. F818, pause to F818)
- **ANCHOR:** "2 belongs on the right." (F778..F818)
- **WHAT APPEARS NOW:** Directional arrow points right toward high: 'TARGET: REGION 2s (RIGHT)'. Cyan chalk vector draws above track.
- **CENTER-STAGE HERO:** Right routing rule activation for value 2.
- **CAUSE:** Algorithmic decision: 2 belongs in the right partition.
- **EFFECT / MOTION:** Rightward arrow connects slot 0 to slot 9.
- **WHAT MUST NOT APPEAR YET:** Swap execution.
- **COMPREHENSION HOLD:** F818 (0 frames): Direct flow into swap decision.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Target set to high (index 9).

---

### Anchor 11: S07_ST1_SWAP_DECISION (F818 .. F940, pause to F961)
- **ANCHOR:** "So we swap the value at mid with the value at high." (F818..F940)
- **WHAT APPEARS NOW:** Swap flight arc links slot 0 and slot 9: 'ACTION: swap(nums[mid], nums[high]) -> swap(nums[0], nums[9])'.
- **CENTER-STAGE HERO:** In-Place Swap Flight Arc (0 <-> 9).
- **CAUSE:** Speaker commands swap with high.
- **EFFECT / MOTION:** Chalk curve draws between index 0 and index 9; both slot 0 and slot 9 highlight.
- **WHAT MUST NOT APPEAR YET:** Pointer update.
- **COMPREHENSION HOLD:** F940..F961 (21 frames): Swap relationship absorbed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Swap executed.

---

### Anchor 12: S07_ST1_BOTH_TWO (F961 .. F1085, pause to F1100)
- **ANCHOR:** "Both values are 2, so the array looks exactly the same." (F961..F1085)
- **WHAT APPEARS NOW:** Callout banner: 'nums[0] = 2 <-> nums[9] = 2 · ARRAY LOOKS IDENTICAL'. Both values remain 2; no physical displacement needed.
- **CENTER-STAGE HERO:** Identical Value Swap Proof (2 <-> 2).
- **CAUSE:** Both slots hold 2, so values exchange without changing visible sequence.
- **EFFECT / MOTION:** Slot 9 gains confirmed 2s Cyan glow; slot 0 holds incoming 2.
- **WHAT MUST NOT APPEAR YET:** high decrement.
- **COMPREHENSION HOLD:** F1085..F1100 (15 frames): Comprehension of equal-value swap.
- **CLEANUP / EXIT:** Swap arc fades.
- **PERSISTENT STATE:** Slot 9 locked as confirmed 2.

---

### Anchor 13: S07_ST1_STATE_CHANGED (F1100 .. F1144, pause to F1159)
- **ANCHOR:** "But the state has changed." (F1100..F1144)
- **WHAT APPEARS NOW:** Pedagogical insight badge: 'CRITICAL INSIGHT: VISIBLE ARRAY UNCHANGED, BUT INVARIANT ADVANCED!'. Slot 9 joins 2s partition.
- **CENTER-STAGE HERO:** State Transformation Insight.
- **CAUSE:** Speaker underscores that algorithmic state changed despite identical values.
- **EFFECT / MOTION:** Partition band 2s expands over index 9: '2S ONLY [9..9]'.
- **WHAT MUST NOT APPEAR YET:** Pointer movement.
- **COMPREHENSION HOLD:** F1144..F1159 (15 frames): Invariant shift absorbed.
- **CLEANUP / EXIT:** Insight badge settles.
- **PERSISTENT STATE:** Region 2 now contains index 9.

---

### Anchor 14: S07_ST1_HIGH_DECREMENT (F1159 .. F1216, pause to F1227)
- **ANCHOR:** "High moves from 9 to 8," (F1159..F1216)
- **WHAT APPEARS NOW:** Pointer 'high' smoothly glides left from index 9 to index 8 on Lane 0. High badge updates: 'high = 8'.
- **CENTER-STAGE HERO:** Pointer 'high' leftward decrement (9 -> 8).
- **CAUSE:** Right boundary locks index 9; high shrinks unknown window.
- **EFFECT / MOTION:** Cyan arrow glides left to slot 8; unknown region updates to [0..8].
- **WHAT MUST NOT APPEAR YET:** Mid pointer movement (must NOT move).
- **COMPREHENSION HOLD:** F1216..F1227 (11 frames): high settled at index 8.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** high = 8.

---

### Anchor 15: S07_ST1_MID_STAYS (F1227 .. F1265, pause to F1278)
- **ANCHOR:** "and mid stays at 0." (F1227..F1265)
- **WHAT APPEARS NOW:** Lock icon appears on pointer mid: '🔒 MID STAYS AT 0! DO NOT INCREMENT!'. Padlock glows amber.
- **CENTER-STAGE HERO:** Frozen Mid Pointer Enforcement.
- **CAUSE:** Rule enforcement: mid must inspect incoming unknown value.
- **EFFECT / MOTION:** Pointer mid pulses on slot 0; clamp bracket holds it steady.
- **WHAT MUST NOT APPEAR YET:** Step 2 inspection.
- **COMPREHENSION HOLD:** F1265..F1278 (13 frames): Deep comprehension hold on mid staying.
- **CLEANUP / EXIT:** Lock icon dims to steady indicator.
- **PERSISTENT STATE:** Step 1 complete: low=0, mid=0, high=8.

---

### Anchor 16: S07_ST2_INSPECT_SAME (F1278 .. F1331, pause to F1345)
- **ANCHOR:** "We inspect the same position again." (F1278..F1331)
- **WHAT APPEARS NOW:** Step Card updates: 'STEP 2 OF 10 · INSPECTING SAME POSITION (index 0)'. Slot 0 illuminates again.
- **CENTER-STAGE HERO:** Re-inspection of slot 0.
- **CAUSE:** Mid inspects newly arrived value at index 0.
- **EFFECT / MOTION:** Slot 0 halo pulses; narrator calls attention to position 0.
- **WHAT MUST NOT APPEAR YET:** Swap arc.
- **COMPREHENSION HOLD:** F1331..F1345 (14 frames): Re-inspection established.
- **CLEANUP / EXIT:** Step 1 badges.
- **PERSISTENT STATE:** Step 2 active.

---

### Anchor 17: S07_ST2_MID_STILL_TWO (F1345 .. F1402, pause to F1417)
- **ANCHOR:** "At mid, we still have 2." (F1345..F1402)
- **WHAT APPEARS NOW:** Value badge confirms: 'nums[mid=0] == 2'. Cyan highlight on 2 at slot 0.
- **CENTER-STAGE HERO:** Slot 0 value confirmation (still 2).
- **CAUSE:** Value brought in from step 1 was also 2.
- **EFFECT / MOTION:** Value 2 pulses in cyan.
- **WHAT MUST NOT APPEAR YET:** high comparison.
- **COMPREHENSION HOLD:** F1402..F1417 (15 frames): Value 2 confirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** nums[mid] = 2.

---

### Anchor 18: S07_ST2_HIGH_POINTS_ZERO (F1417 .. F1502, pause to F1512)
- **ANCHOR:** "This time, high is pointing to 0." (F1417..F1502)
- **WHAT APPEARS NOW:** Slot 8 illuminates with high indicator: 'high points to index 8 · nums[8] == 0'. Red badge on value 0 at slot 8.
- **CENTER-STAGE HERO:** Slot 8 value identification (nums[8] = 0).
- **CAUSE:** Speaker identifies target value at high.
- **EFFECT / MOTION:** Slot 8 receives targeting reticle; value 0 glows red.
- **WHAT MUST NOT APPEAR YET:** Swap animation.
- **COMPREHENSION HOLD:** F1502..F1512 (10 frames): Target identified.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Swap targets: slot 0 (2) and slot 8 (0).

---

### Anchor 19: S07_ST2_SWAP_TWO_ZERO (F1512 .. F1566, pause to F1566)
- **ANCHOR:** "So we swap 2 with 0." (F1512..F1566)
- **WHAT APPEARS NOW:** Dual swap flight curves link slot 0 and slot 8: value 2 flies right along upper arc; value 0 flies left along lower arc.
- **CENTER-STAGE HERO:** Physical In-Place Swap Arc (0 <-> 8).
- **CAUSE:** Speaker commands swap of 2 with 0.
- **EFFECT / MOTION:** Both values lift, glide along opposite arcs, and swap positions cleanly without slot jitter.
- **WHAT MUST NOT APPEAR YET:** Array readback.
- **COMPREHENSION HOLD:** F1566 (0 frames): Fluid transition into array confirmation.
- **CLEANUP / EXIT:** Swap arcs dissolve upon landing.
- **PERSISTENT STATE:** Values swapped: nums[0]=0, nums[8]=2.

---

### Anchor 20: S07_ST2_ARRAY_BECOMES (F1566 .. F1849, pause to F1862)
- **ANCHOR:** "The array becomes 0, 1, 2, 0, 2, 1, 0, 1, 2, 2." (F1566..F1849)
- **WHAT APPEARS NOW:** Updated array readout highlights: '[0, 1, 2, 0, 2, 1, 0, 1, 2, 2]'. Slot 0 displays 0; slot 8 displays 2 (cyan glow).
- **CENTER-STAGE HERO:** Array State Confirmation [0, 1, 2, 0, 2, 1, 0, 1, 2, 2].
- **CAUSE:** Readout of newly transformed array.
- **EFFECT / MOTION:** Slot 8 locked into 2s partition; slot 0 holds unclassified 0.
- **WHAT MUST NOT APPEAR YET:** high decrement.
- **COMPREHENSION HOLD:** F1849..F1862 (13 frames): Array state confirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Array state locked.

---

### Anchor 21: S07_ST2_HIGH_DECREMENT (F1862 .. F1909, pause to F1924)
- **ANCHOR:** "High moves from 8 to 7." (F1862..F1909)
- **WHAT APPEARS NOW:** Pointer 'high' glides left from index 8 to index 7 on Lane 0. Partition band 2s expands over [8..9].
- **CENTER-STAGE HERO:** Pointer 'high' decrement (8 -> 7).
- **CAUSE:** Slot 8 is now locked into region 2.
- **EFFECT / MOTION:** Cyan arrow moves to slot 7; Unknown band shrinks to [0..7].
- **WHAT MUST NOT APPEAR YET:** mid movement.
- **COMPREHENSION HOLD:** F1909..F1924 (15 frames): high settled at 7.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** high = 7.

---

### Anchor 22: S07_ST2_MID_STAYS (F1924 .. F1978, pause to F1994)
- **ANCHOR:** "And again, mid stays at 0." (F1924..F1978)
- **WHAT APPEARS NOW:** Emphatic banner pulses: 'MID STAYS AT 0 AGAIN! (Incoming value 0 must be inspected next!)'.
- **CENTER-STAGE HERO:** Reinforced Mid Freeze at Index 0.
- **CAUSE:** Speaker re-emphasizes that mid does not move on 2.
- **EFFECT / MOTION:** Chalk clamp reaffirms mid at index 0.
- **WHAT MUST NOT APPEAR YET:** Step 3 execution.
- **COMPREHENSION HOLD:** F1978..F1994 (16 frames): Golden rule reinforced.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Step 2 complete: low=0, mid=0, high=7.

---

### Anchor 23: S07_ST3_MID_IS_ZERO (F1994 .. F2054, pause to F2072)
- **ANCHOR:** "Now the value at mid is 0." (F1994..F2054)
- **WHAT APPEARS NOW:** Step Card updates: 'STEP 3 OF 10 · nums[mid=0] == 0'. Slot 0 value 0 glows red.
- **CENTER-STAGE HERO:** Inspection of newly arrived value 0 at mid.
- **CAUSE:** Mid inspects value at slot 0.
- **EFFECT / MOTION:** Slot 0 glows coral-red; Case 0 rule activates.
- **WHAT MUST NOT APPEAR YET:** Self swap.
- **COMPREHENSION HOLD:** F2054..F2072 (18 frames): Value 0 confirmed.
- **CLEANUP / EXIT:** Step 2 cards.
- **PERSISTENT STATE:** nums[mid] = 0.

---

### Anchor 24: S07_ST3_ZERO_LEFT (F2072 .. F2111, pause to F2124)
- **ANCHOR:** "0 belongs on the left." (F2072..F2111)
- **WHAT APPEARS NOW:** Leftward routing vector points left: 'TARGET: REGION 0s (LEFT)'. Red chalk arrow draws toward left boundary.
- **CENTER-STAGE HERO:** Left routing rule activation for value 0.
- **CAUSE:** Algorithmic decision: 0 belongs in region 0.
- **EFFECT / MOTION:** Red arrow points to low boundary.
- **WHAT MUST NOT APPEAR YET:** Swap execution.
- **COMPREHENSION HOLD:** F2111..F2124 (13 frames): Direction established.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Target set to low (index 0).

---

### Anchor 25: S07_ST3_BOTH_AT_ZERO (F2124 .. F2195, pause to F2204)
- **ANCHOR:** "Low and mid are both at index 0." (F2124..F2195)
- **WHAT APPEARS NOW:** Highlight frame encompasses low and mid: 'low = 0 and mid = 0 (CO-LOCATED AT INDEX 0)'. Both pointers point to slot 0.
- **CENTER-STAGE HERO:** Co-located low and mid pointers at index 0.
- **CAUSE:** Both pointers currently share the same index.
- **EFFECT / MOTION:** Slot 0 dual highlight; lane 0 (low) and lane 1 (mid) align vertically.
- **WHAT MUST NOT APPEAR YET:** Self swap animation.
- **COMPREHENSION HOLD:** F2195..F2204 (9 frames): Co-location verified.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** low == mid == 0 verified.

---

### Anchor 26: S07_ST3_SELF_SWAP (F2204 .. F2251, pause to F2263)
- **ANCHOR:** "So this is only a self -swap." (F2204..F2251)
- **WHAT APPEARS NOW:** Looping self-swap chalk ring encircles slot 0: 'SELF-SWAP: swap(nums[0], nums[0]) · NO PHYSICAL MOVEMENT'. Value 0 stays in slot 0.
- **CENTER-STAGE HERO:** In-Place Self-Swap Loop at Index 0.
- **CAUSE:** Speaker explains self-swap mechanism.
- **EFFECT / MOTION:** Subtle pulse on slot 0 confirms 0 is placed into region 0.
- **WHAT MUST NOT APPEAR YET:** Pointer increments.
- **COMPREHENSION HOLD:** F2251..F2263 (12 frames): Self-swap confirmed.
- **CLEANUP / EXIT:** Self-swap ring dissolves.
- **PERSISTENT STATE:** Slot 0 locked as confirmed 0.

---

### Anchor 27: S07_ST3_LOW_MOVES (F2263 .. F2305, pause to F2316)
- **ANCHOR:** "Then low moves to 1," (F2263..F2305)
- **WHAT APPEARS NOW:** Pointer 'low' glides right from index 0 to index 1 on Lane 0. Partition band 0s activates over index 0: '0S ONLY [0..0]'.
- **CENTER-STAGE HERO:** Pointer 'low' advance (0 -> 1).
- **CAUSE:** 0 is locked into region 0; low expands 0s region.
- **EFFECT / MOTION:** Red arrow moves to slot 1; slot 0 gains red confirmed glow.
- **WHAT MUST NOT APPEAR YET:** mid increment.
- **COMPREHENSION HOLD:** F2305..F2316 (11 frames): low settled at 1.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** low = 1, Region 0: [0..0].

---

### Anchor 28: S07_ST3_MID_MOVES (F2316 .. F2357, pause to F2374)
- **ANCHOR:** "and mid moves to 1." (F2316..F2357)
- **WHAT APPEARS NOW:** Pointer 'mid' glides right from index 0 to index 1 on Lane 1. Mid badge updates: 'mid = 1'.
- **CENTER-STAGE HERO:** Pointer 'mid' advance (0 -> 1).
- **CAUSE:** Case 0 rule: both low and mid advance.
- **EFFECT / MOTION:** Amber arrow glides to slot 1; Unknown region updates to [1..7].
- **WHAT MUST NOT APPEAR YET:** Step 4 inspection.
- **COMPREHENSION HOLD:** F2357..F2374 (17 frames): Step 3 completed cleanly.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Step 3 complete: low=1, mid=1, high=7.

---

### Anchor 29: S07_ST4_MID_POINTS_ONE (F2374 .. F2431, pause to F2431)
- **ANCHOR:** "Now mid is pointing to 1." (F2374..F2431)
- **WHAT APPEARS NOW:** Step Card updates: 'STEP 4 OF 10 · nums[mid=1] == 1'. Slot 1 illuminates in chalk white.
- **CENTER-STAGE HERO:** Inspection of slot 1 (nums[1] = 1).
- **CAUSE:** Mid inspects value at slot 1.
- **EFFECT / MOTION:** Value 1 glows white; Case 1 rule activates.
- **WHAT MUST NOT APPEAR YET:** no swap badge.
- **COMPREHENSION HOLD:** F2431 (0 frames): Fluid continuation.
- **CLEANUP / EXIT:** Step 3 cards.
- **PERSISTENT STATE:** nums[mid] = 1.

---

### Anchor 30: S07_ST4_ONE_MIDDLE (F2431 .. F2497, pause to F2513)
- **ANCHOR:** "1 already belongs in the middle." (F2431..F2497)
- **WHAT APPEARS NOW:** Callout banner: '1 ALREADY IN MIDDLE REGION [low..mid-1]'. Invariant confirmation badge.
- **CENTER-STAGE HERO:** Middle Region Invariant Match for 1.
- **CAUSE:** Algorithmic decision: 1 is in its correct partition.
- **EFFECT / MOTION:** Partition band 1s prepares to expand over index 1.
- **WHAT MUST NOT APPEAR YET:** pointer advance.
- **COMPREHENSION HOLD:** F2497..F2513 (16 frames): Case 1 logic absorbed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** 1 verified in place.

---

### Anchor 31: S07_ST4_NO_SWAP (F2513 .. F2548, pause to F2562)
- **ANCHOR:** "So there is no swap." (F2513..F2548)
- **WHAT APPEARS NOW:** Emphatic Zero-Operation badge draws on: '❌ NO SWAP NEEDED'. Slots remain stationary.
- **CENTER-STAGE HERO:** Zero-Swap Optimization Badge.
- **CAUSE:** No swap is needed for middle element 1.
- **EFFECT / MOTION:** Badge glows softly; no swap flight arc is created.
- **WHAT MUST NOT APPEAR YET:** mid increment.
- **COMPREHENSION HOLD:** F2548..F2562 (14 frames): Optimization absorbed.
- **CLEANUP / EXIT:** Badge fades gently.
- **PERSISTENT STATE:** No swap confirmed.

---

### Anchor 32: S07_ST4_MID_MOVES_TWO (F2562 .. F2626, pause to F2641)
- **ANCHOR:** "We simply move mid to index 2." (F2562..F2626)
- **WHAT APPEARS NOW:** Pointer 'mid' glides right from index 1 to index 2 on Lane 1. Partition band 1s activates over [1..1]: '1S ONLY [1..1]'.
- **CENTER-STAGE HERO:** Pointer 'mid' advance (1 -> 2).
- **CAUSE:** Case 1 completes by advancing mid scanner.
- **EFFECT / MOTION:** Amber arrow glides to slot 2; Unknown region updates to [2..7].
- **WHAT MUST NOT APPEAR YET:** Step 5 inspection.
- **COMPREHENSION HOLD:** F2626..F2641 (15 frames): Step 4 complete.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Step 4 complete: low=1, mid=2, high=7.

---

### Anchor 33: S07_ST5_MID_POINTS_TWO (F2641 .. F2698, pause to F2718)
- **ANCHOR:** "Now mid is pointing to 2." (F2641..F2698)
- **WHAT APPEARS NOW:** Step Card updates: 'STEP 5 OF 10 · nums[mid=2] == 2'. Slot 2 illuminates in Cyan.
- **CENTER-STAGE HERO:** Inspection of slot 2 (nums[2] = 2).
- **CAUSE:** Mid inspects value at slot 2.
- **EFFECT / MOTION:** Slot 2 value 2 glows cyan; Case 2 rule activates.
- **WHAT MUST NOT APPEAR YET:** Swap arc.
- **COMPREHENSION HOLD:** F2698..F2718 (20 frames): Value 2 confirmed.
- **CLEANUP / EXIT:** Step 4 cards.
- **PERSISTENT STATE:** nums[mid] = 2.

---

### Anchor 34: S07_ST5_TWO_RIGHT (F2718 .. F2756, pause to F2774)
- **ANCHOR:** "2 belongs on the right." (F2718..F2756)
- **WHAT APPEARS NOW:** Rightward routing arrow draws across board: 'TARGET: REGION 2s (RIGHT)'.
- **CENTER-STAGE HERO:** Right routing for slot 2.
- **CAUSE:** 2 belongs on the right side.
- **EFFECT / MOTION:** Arrow targets high boundary.
- **WHAT MUST NOT APPEAR YET:** high comparison.
- **COMPREHENSION HOLD:** F2756..F2774 (18 frames): Direction established.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Target set to high.

---

### Anchor 35: S07_ST5_HIGH_AT_SEVEN (F2774 .. F2813, pause to F2822)
- **ANCHOR:** "High is at index 7." (F2774..F2813)
- **WHAT APPEARS NOW:** Reticle locks onto slot 7: 'high is at index 7'. Slot 7 gains cyan targeting ring.
- **CENTER-STAGE HERO:** Targeting slot 7 with high pointer.
- **CAUSE:** Speaker identifies position of high.
- **EFFECT / MOTION:** Slot 7 glows; high pointer pulses.
- **WHAT MUST NOT APPEAR YET:** Value identification at slot 7.
- **COMPREHENSION HOLD:** F2813..F2822 (9 frames): Position locked.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** high at index 7 confirmed.

---

### Anchor 36: S07_ST5_VALUE_THERE_ONE (F2822 .. F2860, pause to F2865)
- **ANCHOR:** "And the value there is 1." (F2822..F2860)
- **WHAT APPEARS NOW:** Value badge illuminates on slot 7: 'nums[7] == 1'.
- **CENTER-STAGE HERO:** Slot 7 value identification (value 1).
- **CAUSE:** Speaker identifies the arriving value.
- **EFFECT / MOTION:** Value 1 glows white at slot 7.
- **WHAT MUST NOT APPEAR YET:** Swap execution.
- **COMPREHENSION HOLD:** F2860..F2865 (5 frames): Arriving value noted.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Swap targets: slot 2 (2) <-> slot 7 (1).

---

### Anchor 37: S07_ST5_SWAP_THEM (F2865 .. F2891, pause to F2905)
- **ANCHOR:** "So we swap them." (F2865..F2891)
- **WHAT APPEARS NOW:** Dual swap flight curves link slot 2 and slot 7: value 2 flies right along top arc; value 1 flies left along bottom arc.
- **CENTER-STAGE HERO:** In-Place Swap Flight Arc (2 <-> 7).
- **CAUSE:** Speaker commands swap of mid and high.
- **EFFECT / MOTION:** Values glide and swap positions smoothly.
- **WHAT MUST NOT APPEAR YET:** Array readback.
- **COMPREHENSION HOLD:** F2891..F2905 (14 frames): Swap completes.
- **CLEANUP / EXIT:** Swap arcs dissolve.
- **PERSISTENT STATE:** Values swapped: nums[2]=1, nums[7]=2.

---

### Anchor 38: S07_ST5_ARRAY_BECOMES (F2905 .. F3197, pause to F3215)
- **ANCHOR:** "The array becomes 0, 1, 1, 0, 2, 1, 0, 2, 2, 2." (F2905..F3197)
- **WHAT APPEARS NOW:** Array readout updates: '[0, 1, 1, 0, 2, 1, 0, 2, 2, 2]'. Slot 7 locked as confirmed 2.
- **CENTER-STAGE HERO:** Array State Confirmation [0, 1, 1, 0, 2, 1, 0, 2, 2, 2].
- **CAUSE:** Readout of transformed array.
- **EFFECT / MOTION:** Slot 7 joins 2s partition; slot 2 holds incoming 1.
- **WHAT MUST NOT APPEAR YET:** high decrement.
- **COMPREHENSION HOLD:** F3197..F3215 (18 frames): Array state confirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Array state locked.

---

### Anchor 39: S07_ST5_HIGH_DECREMENT (F3215 .. F3262, pause to F3266)
- **ANCHOR:** "High moves from 7 to 6," (F3215..F3262)
- **WHAT APPEARS NOW:** Pointer 'high' glides left from index 7 to index 6 on Lane 0. Partition band 2s expands over [7..9].
- **CENTER-STAGE HERO:** Pointer 'high' decrement (7 -> 6).
- **CAUSE:** Slot 7 is locked into region 2.
- **EFFECT / MOTION:** Cyan arrow moves to slot 6; Unknown region shrinks to [2..6].
- **WHAT MUST NOT APPEAR YET:** mid movement.
- **COMPREHENSION HOLD:** F3262..F3266 (4 frames): high settled at 6.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** high = 6.

---

### Anchor 40: S07_ST5_MID_STAYS (F3266 .. F3313, pause to F3313)
- **ANCHOR:** "but mid stays at index 2." (F3266..F3313)
- **WHAT APPEARS NOW:** Lock icon clamps pointer mid to slot 2: '🔒 MID STAYS AT INDEX 2!'.
- **CENTER-STAGE HERO:** Mid Freeze Enforcement at Index 2.
- **CAUSE:** Incoming value (1) at slot 2 has not been inspected yet.
- **EFFECT / MOTION:** Pointer mid holds steady at index 2.
- **WHAT MUST NOT APPEAR YET:** Step 6 inspection.
- **COMPREHENSION HOLD:** F3313 (0 frames): Fluid transition into inspecting incoming 1.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Step 5 complete: low=1, mid=2, high=6.

---

### Anchor 41: S07_ST6_VAL_FROM_RIGHT (F3313 .. F3397, pause to F3410)
- **ANCHOR:** "The value that came from the right is 1." (F3313..F3397)
- **WHAT APPEARS NOW:** Origin trajectory marker draws dashed trace from slot 7 back into slot 2: 'INCOMING VALUE FROM RIGHT: 1'.
- **CENTER-STAGE HERO:** Origin Tracking for Incoming Value 1.
- **CAUSE:** Speaker explains the incoming value at mid.
- **EFFECT / MOTION:** Slot 2 value 1 highlighted in chalk white.
- **WHAT MUST NOT APPEAR YET:** Decision.
- **COMPREHENSION HOLD:** F3397..F3410 (13 frames): Incoming value identified.
- **CLEANUP / EXIT:** Origin trace fades.
- **PERSISTENT STATE:** nums[mid=2] = 1.

---

### Anchor 42: S07_ST6_INSPECT_IT (F3410 .. F3457, pause to F3470)
- **ANCHOR:** "So now we inspect it." (F3410..F3457)
- **WHAT APPEARS NOW:** Step Card updates: 'STEP 6 OF 10 · INSPECTING INCOMING VALUE 1 AT INDEX 2'. Magnifying glass icon pulses.
- **CENTER-STAGE HERO:** Inspection of incoming value 1.
- **CAUSE:** Speaker commands immediate inspection.
- **EFFECT / MOTION:** Slot 2 illuminates.
- **WHAT MUST NOT APPEAR YET:** No swap decision.
- **COMPREHENSION HOLD:** F3457..F3470 (13 frames): Inspection active.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Inspecting nums[2].

---

### Anchor 43: S07_ST6_ONE_MIDDLE (F3470 .. F3521, pause to F3532)
- **ANCHOR:** "1 already belongs in the middle." (F3470..F3521)
- **WHAT APPEARS NOW:** Middle region match banner: '1 BELONGS IN MIDDLE REGION [low..mid-1]'.
- **CENTER-STAGE HERO:** Middle Region Invariant Match.
- **CAUSE:** 1 matches Region 1 invariant.
- **EFFECT / MOTION:** Region 1 prepares to expand over index 2.
- **WHAT MUST NOT APPEAR YET:** no swap badge.
- **COMPREHENSION HOLD:** F3521..F3532 (11 frames): Decision resolved.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Middle match confirmed.

---

### Anchor 44: S07_ST6_NO_SWAP (F3532 .. F3550, pause to F3569)
- **ANCHOR:** "No swap." (F3532..F3550)
- **WHAT APPEARS NOW:** Zero-swap badge: '❌ NO SWAP NEEDED'. Array slots remain stationary.
- **CENTER-STAGE HERO:** Zero-Swap Optimization Badge.
- **CAUSE:** Element 1 is already in correct middle partition.
- **EFFECT / MOTION:** Slots remain stationary.
- **WHAT MUST NOT APPEAR YET:** mid increment.
- **COMPREHENSION HOLD:** F3550..F3569 (19 frames): Hold.
- **CLEANUP / EXIT:** Badge fades.
- **PERSISTENT STATE:** No swap confirmed.

---

### Anchor 45: S07_ST6_MID_MOVES_THREE (F3569 .. F3615, pause to F3625)
- **ANCHOR:** "Mid moves to index 3." (F3569..F3615)
- **WHAT APPEARS NOW:** Pointer 'mid' glides right from index 2 to index 3 on Lane 1. Partition band 1s expands over [1..2]: '1S ONLY [1..2]'.
- **CENTER-STAGE HERO:** Pointer 'mid' advance (2 -> 3).
- **CAUSE:** Mid scanner advances to next unclassified element.
- **EFFECT / MOTION:** Amber arrow glides to slot 3; Unknown band updates to [3..6].
- **WHAT MUST NOT APPEAR YET:** Step 7 inspection.
- **COMPREHENSION HOLD:** F3615..F3625 (10 frames): Step 6 complete.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Step 6 complete: low=1, mid=3, high=6.

---

### Anchor 46: S07_ST7_MID_POINTS_ZERO (F3625 .. F3680, pause to F3697)
- **ANCHOR:** "Now mid is pointing to 0." (F3625..F3680)
- **WHAT APPEARS NOW:** Step Card updates: 'STEP 7 OF 10 · nums[mid=3] == 0'. Slot 3 illuminates in Coral Red.
- **CENTER-STAGE HERO:** Inspection of slot 3 (nums[3] = 0).
- **CAUSE:** Mid inspects slot 3.
- **EFFECT / MOTION:** Slot 3 glows red; Case 0 activates.
- **WHAT MUST NOT APPEAR YET:** Swap arc.
- **COMPREHENSION HOLD:** F3680..F3697 (17 frames): Value 0 confirmed.
- **CLEANUP / EXIT:** Step 6 cards.
- **PERSISTENT STATE:** nums[mid] = 0.

---

### Anchor 47: S07_ST7_ZERO_LEFT (F3697 .. F3748, pause to F3763)
- **ANCHOR:** "0 belongs on the left." (F3697..F3748)
- **WHAT APPEARS NOW:** Leftward routing arrow draws across track toward low: 'TARGET: REGION 0s (LEFT)'.
- **CENTER-STAGE HERO:** Left routing for value 0.
- **CAUSE:** 0 belongs in region 0.
- **EFFECT / MOTION:** Red arrow points to low boundary.
- **WHAT MUST NOT APPEAR YET:** low location.
- **COMPREHENSION HOLD:** F3748..F3763 (15 frames): Target established.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Target set to low.

---

### Anchor 48: S07_ST7_LOW_AT_ONE (F3763 .. F3808, pause to F3815)
- **ANCHOR:** "Low is at index 1." (F3763..F3808)
- **WHAT APPEARS NOW:** Reticle locks onto slot 1: 'low is at index 1 · nums[1] == 1'. Slot 1 pulses in white.
- **CENTER-STAGE HERO:** Targeting slot 1 with low pointer.
- **CAUSE:** Speaker identifies low's position.
- **EFFECT / MOTION:** Slot 1 illuminates; low pointer pulses.
- **WHAT MUST NOT APPEAR YET:** Swap execution.
- **COMPREHENSION HOLD:** F3808..F3815 (7 frames): Position locked.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Swap targets: slot 3 (0) <-> slot 1 (1).

---

### Anchor 49: S07_ST7_SWAP_THREE_ONE (F3815 .. F3899, pause to F3912)
- **ANCHOR:** "So we swap index 3 with index 1." (F3815..F3899)
- **WHAT APPEARS NOW:** Dual swap flight curves link slot 3 and slot 1: value 0 flies left along upper arc; value 1 flies right along lower arc.
- **CENTER-STAGE HERO:** In-Place Swap Flight Arc (3 <-> 1).
- **CAUSE:** Speaker commands swap of slot 3 with slot 1.
- **EFFECT / MOTION:** Values glide and swap positions cleanly.
- **WHAT MUST NOT APPEAR YET:** Array readback.
- **COMPREHENSION HOLD:** F3899..F3912 (13 frames): Values land in new slots.
- **CLEANUP / EXIT:** Swap arcs dissolve.
- **PERSISTENT STATE:** Values swapped: nums[1]=0, nums[3]=1.

---

### Anchor 50: S07_ST7_ARRAY_BECOMES (F3912 .. F4200, pause to F4213)
- **ANCHOR:** "The array becomes 0, 0, 1, 1, 2, 1, 0, 2, 2, 2." (F3912..F4200)
- **WHAT APPEARS NOW:** Array readout updates: '[0, 0, 1, 1, 2, 1, 0, 2, 2, 2]'. Slot 1 now holds 0; slot 3 holds 1.
- **CENTER-STAGE HERO:** Array State Confirmation [0, 0, 1, 1, 2, 1, 0, 2, 2, 2].
- **CAUSE:** Readout of transformed array.
- **EFFECT / MOTION:** Slot 1 joins 0s partition.
- **WHAT MUST NOT APPEAR YET:** low increment.
- **COMPREHENSION HOLD:** F4200..F4213 (13 frames): Array state confirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Array state locked.

---

### Anchor 51: S07_ST7_LOW_MOVES_TWO (F4213 .. F4264, pause to F4272)
- **ANCHOR:** "Now low moves to index 2." (F4213..F4264)
- **WHAT APPEARS NOW:** Pointer 'low' glides right from index 1 to index 2 on Lane 0. Partition band 0s expands over [0..1]: '0S ONLY [0..1]'.
- **CENTER-STAGE HERO:** Pointer 'low' advance (1 -> 2).
- **CAUSE:** Region 0 expanded by 1 element.
- **EFFECT / MOTION:** Red arrow glides to slot 2; slots 0 and 1 glow red.
- **WHAT MUST NOT APPEAR YET:** mid increment.
- **COMPREHENSION HOLD:** F4264..F4272 (8 frames): low settled at 2.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** low = 2, Region 0: [0..1].

---

### Anchor 52: S07_ST7_MID_MOVES_FOUR (F4272 .. F4323, pause to F4329)
- **ANCHOR:** "And mid moves to index 4." (F4272..F4323)
- **WHAT APPEARS NOW:** Pointer 'mid' glides right from index 3 to index 4 on Lane 1. Partition band 1s updates over [2..3]: '1S ONLY [2..3]'.
- **CENTER-STAGE HERO:** Pointer 'mid' advance (3 -> 4).
- **CAUSE:** Case 0 rule: both pointers advance.
- **EFFECT / MOTION:** Amber arrow glides to slot 4; Unknown band updates to [4..6].
- **WHAT MUST NOT APPEAR YET:** Step 8 inspection.
- **COMPREHENSION HOLD:** F4323..F4329 (6 frames): Step 7 complete.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Step 7 complete: low=2, mid=4, high=6.

---

### Anchor 53: S07_ST8_AT_INDEX_FOUR (F4329 .. F4358, pause to F4364)
- **ANCHOR:** "At index 4." (F4329..F4358)
- **WHAT APPEARS NOW:** Step Card updates: 'STEP 8 OF 10 · AT INDEX 4'. Slot 4 receives spotlight.
- **CENTER-STAGE HERO:** Position focus at index 4.
- **CAUSE:** Speaker directs focus to slot 4.
- **EFFECT / MOTION:** Slot 4 illuminates.
- **WHAT MUST NOT APPEAR YET:** value confirmation.
- **COMPREHENSION HOLD:** F4358..F4364 (6 frames): Focus held.
- **CLEANUP / EXIT:** Step 7 cards.
- **PERSISTENT STATE:** Focus on index 4.

---

### Anchor 54: S07_ST8_MID_POINTS_TWO (F4364 .. F4396, pause to F4407)
- **ANCHOR:** "Mid is pointing to 2." (F4364..F4396)
- **WHAT APPEARS NOW:** Value badge illuminates on slot 4: 'nums[mid=4] == 2'. Cyan highlight on value 2.
- **CENTER-STAGE HERO:** Slot 4 value confirmation (nums[4] = 2).
- **CAUSE:** Mid inspects value 2.
- **EFFECT / MOTION:** Value 2 glows cyan; Case 2 rule activates.
- **WHAT MUST NOT APPEAR YET:** Swap decision.
- **COMPREHENSION HOLD:** F4396..F4407 (11 frames): Value confirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** nums[mid] = 2.

---

### Anchor 55: S07_ST8_TWO_RIGHT (F4407 .. F4441, pause to F4454)
- **ANCHOR:** "2 belongs on the right." (F4407..F4441)
- **WHAT APPEARS NOW:** Rightward routing arrow draws across board: 'TARGET: REGION 2s (RIGHT)'.
- **CENTER-STAGE HERO:** Right routing for slot 4.
- **CAUSE:** 2 belongs on the right side.
- **EFFECT / MOTION:** Arrow points to high boundary.
- **WHAT MUST NOT APPEAR YET:** high location.
- **COMPREHENSION HOLD:** F4441..F4454 (13 frames): Direction established.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Target set to high.

---

### Anchor 56: S07_ST8_HIGH_AT_SIX (F4454 .. F4497, pause to F4510)
- **ANCHOR:** "High is at index 6." (F4454..F4497)
- **WHAT APPEARS NOW:** Reticle locks onto slot 6: 'high is at index 6'. Slot 6 gains cyan targeting frame.
- **CENTER-STAGE HERO:** Targeting slot 6 with high pointer.
- **CAUSE:** Speaker identifies position of high.
- **EFFECT / MOTION:** Slot 6 glows.
- **WHAT MUST NOT APPEAR YET:** Value identification.
- **COMPREHENSION HOLD:** F4497..F4510 (13 frames): Target locked.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** high at index 6 confirmed.

---

### Anchor 57: S07_ST8_HIGH_POINTS_ZERO (F4510 .. F4558, pause to F4574)
- **ANCHOR:** "And high is pointing to 0." (F4510..F4558)
- **WHAT APPEARS NOW:** Value badge on slot 6: 'nums[6] == 0'. Value 0 glows coral-red.
- **CENTER-STAGE HERO:** Slot 6 value identification (value 0).
- **CAUSE:** Speaker identifies target value 0.
- **EFFECT / MOTION:** Value 0 pulses in red at slot 6.
- **WHAT MUST NOT APPEAR YET:** Swap execution.
- **COMPREHENSION HOLD:** F4558..F4574 (16 frames): Arriving value noted.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Swap targets: slot 4 (2) <-> slot 6 (0).

---

### Anchor 58: S07_ST8_SWAP_THEM (F4574 .. F4600, pause to F4612)
- **ANCHOR:** "So we swap them." (F4574..F4600)
- **WHAT APPEARS NOW:** Dual swap flight curves link slot 4 and slot 6: value 2 flies right along top arc; value 0 flies left along bottom arc.
- **CENTER-STAGE HERO:** In-Place Swap Flight Arc (4 <-> 6).
- **CAUSE:** Speaker commands swap of slot 4 and slot 6.
- **EFFECT / MOTION:** Values glide and swap positions smoothly.
- **WHAT MUST NOT APPEAR YET:** Array readback.
- **COMPREHENSION HOLD:** F4600..F4612 (12 frames): Values land.
- **CLEANUP / EXIT:** Swap arcs dissolve.
- **PERSISTENT STATE:** Values swapped: nums[4]=0, nums[6]=2.

---

### Anchor 59: S07_ST8_ARRAY_BECOMES (F4612 .. F4881, pause to F4897)
- **ANCHOR:** "The array becomes 0, 0, 1, 1, 0, 1, 2, 2, 2, 2." (F4612..F4881)
- **WHAT APPEARS NOW:** Array readout updates: '[0, 0, 1, 1, 0, 1, 2, 2, 2, 2]'. Slot 6 locked into 2s partition.
- **CENTER-STAGE HERO:** Array State Confirmation [0, 0, 1, 1, 0, 1, 2, 2, 2, 2].
- **CAUSE:** Readout of transformed array.
- **EFFECT / MOTION:** Slot 6 joins 2s partition; slot 4 holds incoming 0.
- **WHAT MUST NOT APPEAR YET:** high decrement.
- **COMPREHENSION HOLD:** F4881..F4897 (16 frames): Array state confirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Array state locked.

---

### Anchor 60: S07_ST8_HIGH_DECREMENT (F4897 .. F4945, pause to F4953)
- **ANCHOR:** "High moves from 6 to 5." (F4897..F4945)
- **WHAT APPEARS NOW:** Pointer 'high' glides left from index 6 to index 5 on Lane 0. Partition band 2s expands over [6..9].
- **CENTER-STAGE HERO:** Pointer 'high' decrement (6 -> 5).
- **CAUSE:** Slot 6 locked into region 2.
- **EFFECT / MOTION:** Cyan arrow moves to slot 5; Unknown band shrinks to [4..5].
- **WHAT MUST NOT APPEAR YET:** mid movement.
- **COMPREHENSION HOLD:** F4945..F4953 (8 frames): high settled at 5.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** high = 5.

---

### Anchor 61: S07_ST8_MID_STAYS (F4953 .. F5035, pause to F5055)
- **ANCHOR:** "And once again, mid stays at index 4." (F4953..F5035)
- **WHAT APPEARS NOW:** Lock icon clamps pointer mid to slot 4: '🔒 AND ONCE AGAIN, MID STAYS AT INDEX 4!'. Amber padlock pulses.
- **CENTER-STAGE HERO:** Mid Freeze Enforcement at Index 4.
- **CAUSE:** Crucial setup for climax: mid does not move on 2.
- **EFFECT / MOTION:** Pointer mid remains locked at index 4.
- **WHAT MUST NOT APPEAR YET:** Step 9 inspection.
- **COMPREHENSION HOLD:** F5035..F5055 (20 frames): High tension hold before climax realization.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Step 8 complete: low=2, mid=4, high=5.

---

### Anchor 62: S07_ST9_LOOK_CAREFULLY (F5055 .. F5089, pause to F5089)
- **ANCHOR:** "Now look carefully." (F5055..F5089)
- **WHAT APPEARS NOW:** Dramatic attention banner illuminates center stage: '⚠️ LOOK CAREFULLY! THE GOLDEN RULE IN ACTION!'. Spotlight zooms in on slot 4.
- **CENTER-STAGE HERO:** Golden Rule Climax Attention Banner.
- **CAUSE:** Narrator calls learner's deepest attention to the arriving value.
- **EFFECT / MOTION:** Slot 4 glows intensely; background dims slightly.
- **WHAT MUST NOT APPEAR YET:** Value reveal.
- **COMPREHENSION HOLD:** F5089 (0 frames): Fluid continuation.
- **CLEANUP / EXIT:** Step 8 cards.
- **PERSISTENT STATE:** High attention state.

---

### Anchor 63: S07_ST9_NEW_VAL_ZERO (F5089 .. F5179, pause to F5189)
- **ANCHOR:** "The new value at mid is 0." (F5089..F5179)
- **WHAT APPEARS NOW:** Callout points to slot 4: 'THE NEW VALUE AT MID IS 0!'. Red highlight bursts on value 0.
- **CENTER-STAGE HERO:** Arrival of Value 0 at Slot 4.
- **CAUSE:** The element swapped from high was 0.
- **EFFECT / MOTION:** Value 0 flashes in coral red.
- **WHAT MUST NOT APPEAR YET:** Explanation.
- **COMPREHENSION HOLD:** F5179..F5189 (10 frames): Realization absorbed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** nums[4] = 0 confirmed.

---

### Anchor 64: S07_ST9_WHY_NOT_MOVE (F5189 .. F5264, pause to F5293)
- **ANCHOR:** "That is exactly why we did not move mid." (F5189..F5264)
- **WHAT APPEARS NOW:** Proof Banner: 'THIS IS EXACTLY WHY WE DID NOT MOVE MID! Had mid moved to 5, this 0 would be trapped in Region 1 forever!'.
- **CENTER-STAGE HERO:** Irrefutable Proof of Mid Freeze.
- **CAUSE:** Pedagogical justification of the golden invariant rule.
- **EFFECT / MOTION:** Chalk checkmarks illuminate; learner experiences 'Aha!' moment.
- **WHAT MUST NOT APPEAR YET:** Action.
- **COMPREHENSION HOLD:** F5264..F5293 (29 frames): Deep comprehension hold on the course's most critical insight.
- **CLEANUP / EXIT:** Proof banner recedes.
- **PERSISTENT STATE:** Correctness proven.

---

### Anchor 65: S07_ST9_NEEDS_CLASSIFIED (F5293 .. F5359, pause to F5375)
- **ANCHOR:** "This 0 still needs to be classified." (F5293..F5359)
- **WHAT APPEARS NOW:** Action prompt: 'THIS 0 STILL NEEDS TO BE CLASSIFIED -> Belongs in Region 0!'.
- **CENTER-STAGE HERO:** Classification Directive for Arriving 0.
- **CAUSE:** Element 0 must now undergo standard Case 0 routing.
- **EFFECT / MOTION:** Red arrow points left toward low boundary.
- **WHAT MUST NOT APPEAR YET:** Swap execution.
- **COMPREHENSION HOLD:** F5359..F5375 (16 frames): Directive absorbed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Case 0 triggered.

---

### Anchor 66: S07_ST9_ZERO_LEFT (F5375 .. F5422, pause to F5434)
- **ANCHOR:** "0 belongs on the left." (F5375..F5422)
- **WHAT APPEARS NOW:** Leftward routing vector points left: 'TARGET: REGION 0s (LEFT)'.
- **CENTER-STAGE HERO:** Left routing for slot 4.
- **CAUSE:** 0 belongs on the left side.
- **EFFECT / MOTION:** Arrow targets low boundary.
- **WHAT MUST NOT APPEAR YET:** low location.
- **COMPREHENSION HOLD:** F5422..F5434 (12 frames): Direction established.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Target set to low.

---

### Anchor 67: S07_ST9_LOW_AT_TWO (F5434 .. F5471, pause to F5483)
- **ANCHOR:** "Low is at index 2." (F5434..F5471)
- **WHAT APPEARS NOW:** Reticle locks onto slot 2: 'low is at index 2 · nums[2] == 1'. Slot 2 illuminates in white.
- **CENTER-STAGE HERO:** Targeting slot 2 with low pointer.
- **CAUSE:** Speaker identifies low's position.
- **EFFECT / MOTION:** Slot 2 illuminates; low pointer pulses.
- **WHAT MUST NOT APPEAR YET:** Swap execution.
- **COMPREHENSION HOLD:** F5471..F5483 (12 frames): Target locked.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Swap targets: slot 4 (0) <-> slot 2 (1).

---

### Anchor 68: S07_ST9_SWAP_FOUR_TWO (F5483 .. F5576, pause to F5588)
- **ANCHOR:** "So we swap index 4 with index 2." (F5483..F5576)
- **WHAT APPEARS NOW:** Dual swap flight curves link slot 4 and slot 2: value 0 flies left along top arc; value 1 flies right along bottom arc.
- **CENTER-STAGE HERO:** In-Place Swap Flight Arc (4 <-> 2).
- **CAUSE:** Speaker commands swap of slot 4 with slot 2.
- **EFFECT / MOTION:** Values glide and swap positions smoothly.
- **WHAT MUST NOT APPEAR YET:** Array readback.
- **COMPREHENSION HOLD:** F5576..F5588 (12 frames): Values land.
- **CLEANUP / EXIT:** Swap arcs dissolve.
- **PERSISTENT STATE:** Values swapped: nums[2]=0, nums[4]=1.

---

### Anchor 69: S07_ST9_ARRAY_BECOMES (F5588 .. F5857, pause to F5870)
- **ANCHOR:** "The array becomes 0, 0, 0, 1, 1, 1, 2, 2, 2, 2." (F5588..F5857)
- **WHAT APPEARS NOW:** Array readout updates: '[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]'. All three 0s are now in the 0s region!
- **CENTER-STAGE HERO:** Array State Confirmation [0, 0, 0, 1, 1, 1, 2, 2, 2, 2].
- **CAUSE:** Readout of transformed array.
- **EFFECT / MOTION:** Slots 0, 1, 2 all glow red as confirmed 0s.
- **WHAT MUST NOT APPEAR YET:** Pointer increments.
- **COMPREHENSION HOLD:** F5857..F5870 (13 frames): Array state confirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Array state locked.

---

### Anchor 70: S07_ST9_LOW_MOVES_THREE (F5870 .. F5917, pause to F5927)
- **ANCHOR:** "Then low moves to index 3." (F5870..F5917)
- **WHAT APPEARS NOW:** Pointer 'low' glides right from index 2 to index 3 on Lane 0. Partition band 0s expands over [0..2]: '0S ONLY [0..2] (ALL 3 ZEROES SORTED!)'.
- **CENTER-STAGE HERO:** Pointer 'low' advance (2 -> 3).
- **CAUSE:** Region 0 expands to enclose all 3 zeroes.
- **EFFECT / MOTION:** Red arrow glides to slot 3; Region 0 finalized.
- **WHAT MUST NOT APPEAR YET:** mid increment.
- **COMPREHENSION HOLD:** F5917..F5927 (10 frames): low settled at 3.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** low = 3, Region 0: [0..2].

---

### Anchor 71: S07_ST9_MID_MOVES_FIVE (F5927 .. F5974, pause to F5974)
- **ANCHOR:** "And mid moves to index 5." (F5927..F5974)
- **WHAT APPEARS NOW:** Pointer 'mid' glides right from index 4 to index 5 on Lane 1. Partition band 1s updates over [3..4]: '1S ONLY [3..4]'.
- **CENTER-STAGE HERO:** Pointer 'mid' advance (4 -> 5).
- **CAUSE:** Case 0 completes by advancing mid scanner.
- **EFFECT / MOTION:** Amber arrow glides to slot 5; Unknown band shrinks to [5..5] (ONLY 1 ELEMENT LEFT!).
- **WHAT MUST NOT APPEAR YET:** Step 10 inspection.
- **COMPREHENSION HOLD:** F5974 (0 frames): Fluid flow into final iteration.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Step 9 complete: low=3, mid=5, high=5.

---

### Anchor 72: S07_ST10_MID_POINTS_ONE (F5974 .. F6029, pause to F6042)
- **ANCHOR:** "Now mid is pointed to 1." (F5974..F6029)
- **WHAT APPEARS NOW:** Step Card updates: 'STEP 10 OF 10 (FINAL STEP) · nums[mid=5] == 1'. Slot 5 illuminates in chalk white.
- **CENTER-STAGE HERO:** Inspection of slot 5 (last unclassified element).
- **CAUSE:** Mid inspects the final unknown slot 5.
- **EFFECT / MOTION:** Slot 5 glows white; Case 1 activates.
- **WHAT MUST NOT APPEAR YET:** no swap badge.
- **COMPREHENSION HOLD:** F6029..F6042 (13 frames): Value 1 confirmed.
- **CLEANUP / EXIT:** Step 9 cards.
- **PERSISTENT STATE:** nums[mid=5] = 1.

---

### Anchor 73: S07_ST10_CORRECT_MIDDLE (F6042 .. F6103, pause to F6111)
- **ANCHOR:** "1 is already in the correct middle region." (F6042..F6103)
- **WHAT APPEARS NOW:** Middle region confirmation: '1 IS ALREADY IN THE CORRECT MIDDLE REGION [low..mid-1]'.
- **CENTER-STAGE HERO:** Middle Region Final Match.
- **CAUSE:** Value 1 is already correctly located.
- **EFFECT / MOTION:** Region 1 prepares to expand over index 5.
- **WHAT MUST NOT APPEAR YET:** pointer advance.
- **COMPREHENSION HOLD:** F6103..F6111 (8 frames): Decision confirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Final 1 verified.

---

### Anchor 74: S07_ST10_MOVE_MID_FORWARD (F6111 .. F6157, pause to F6170)
- **ANCHOR:** "So we simply move mid forward." (F6111..F6157)
- **WHAT APPEARS NOW:** Action line: 'NO SWAP · SIMPLY MOVE MID FORWARD'. Forward arrow draws above slot 5.
- **CENTER-STAGE HERO:** Advance directive for final pointer move.
- **CAUSE:** Element 1 requires only mid increment.
- **EFFECT / MOTION:** Forward vector highlights slot 6.
- **WHAT MUST NOT APPEAR YET:** pointer translation.
- **COMPREHENSION HOLD:** F6157..F6170 (13 frames): Action confirmed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Mid advance ready.

---

### Anchor 75: S07_ST10_MID_BECOMES_SIX (F6170 .. F6200, pause to F6212)
- **ANCHOR:** "Mid becomes 6." (F6170..F6200)
- **WHAT APPEARS NOW:** Pointer 'mid' glides right from index 5 to index 6 on Lane 1. Mid badge updates: 'mid = 6'. Partition band 1s expands over [3..5]: '1S ONLY [3..5]'.
- **CENTER-STAGE HERO:** Pointer 'mid' advance (5 -> 6).
- **CAUSE:** Mid advances past index 5.
- **EFFECT / MOTION:** Amber arrow glides to slot 6; Region 1 finalized.
- **WHAT MUST NOT APPEAR YET:** Termination check.
- **COMPREHENSION HOLD:** F6200..F6212 (12 frames): mid settled at 6.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** mid = 6, Region 1: [3..5].

---

### Anchor 76: S07_ST10_HIGH_IS_FIVE (F6212 .. F6242, pause to F6249)
- **ANCHOR:** "High is 5." (F6212..F6242)
- **WHAT APPEARS NOW:** Reticle highlights high at index 5: 'high = 5'. Pointers display side-by-side comparison: 'mid (6) vs high (5)'.
- **CENTER-STAGE HERO:** Pointers Crossing Comparison (mid=6, high=5).
- **CAUSE:** Speaker states high's position to show crossing.
- **EFFECT / MOTION:** High pointer pulses at slot 5; mid is past high at slot 6.
- **WHAT MUST NOT APPEAR YET:** Termination declaration.
- **COMPREHENSION HOLD:** F6242..F6249 (7 frames): Pointer crossing visible.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** mid=6, high=5.

---

### Anchor 77: S07_TERM_CROSSED (F6249 .. F6283, pause to F6297)
- **ANCHOR:** "Now mid has crossed high." (F6249..F6283)
- **WHAT APPEARS NOW:** Termination Banner flashes in bright mint: 'LOOP TERMINATES: mid > high (6 > 5)'. Crossing icon draws between slot 5 and slot 6.
- **CENTER-STAGE HERO:** Loop Termination Condition Met (mid > high).
- **CAUSE:** Loop condition while (mid <= high) evaluates to false.
- **EFFECT / MOTION:** Mint halo illuminates the boundary; while loop terminates.
- **WHAT MUST NOT APPEAR YET:** Empty region declaration.
- **COMPREHENSION HOLD:** F6283..F6297 (14 frames): Termination absorbed.
- **CLEANUP / EXIT:** Step cards fade.
- **PERSISTENT STATE:** Algorithm terminated.

---

### Anchor 78: S07_TERM_EMPTY (F6297 .. F6392, pause to F6406)
- **ANCHOR:** "That means the unknown region is empty." (F6297..F6392)
- **WHAT APPEARS NOW:** Unknown Region collapses to 0 width: 'UNKNOWN REGION IS EMPTY! (Size = 0)'. Amber dashed band vanishes with satisfying chime.
- **CENTER-STAGE HERO:** Vanishing of the Unknown Region.
- **CAUSE:** All elements have been partitioned.
- **EFFECT / MOTION:** Amber band contracts into a point and disappears.
- **WHAT MUST NOT APPEAR YET:** Final classified readout.
- **COMPREHENSION HOLD:** F6392..F6406 (14 frames): 0 unknown elements confirmed.
- **CLEANUP / EXIT:** Unknown band removed.
- **PERSISTENT STATE:** Unknown region = empty.

---

### Anchor 79: S07_TERM_CLASSIFIED (F6406 .. F6442, pause to F6459)
- **ANCHOR:** "Everything has been classified." (F6406..F6442)
- **WHAT APPEARS NOW:** Three solid partition badges illuminate in full color across the 10 slots:
- Slots [0..2]: REGION 0s (Red)
- Slots [3..5]: REGION 1s (White)
- Slots [6..9]: REGION 2s (Cyan)
- **CENTER-STAGE HERO:** Complete 3-Partition Sorted Architecture.
- **CAUSE:** Speaker confirms 100% classification.
- **EFFECT / MOTION:** All slots gain settled region colors and soft underglow.
- **WHAT MUST NOT APPEAR YET:** Array readback.
- **COMPREHENSION HOLD:** F6442..F6459 (17 frames): Partition perfection held.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** All 3 regions locked.

---

### Anchor 80: S07_FINAL_ARRAY_VALS (F6459 .. F6787, pause to F6791)
- **ANCHOR:** "And our final array is 0, 0, 0, 1, 1, 1, 2, 2, 2, 2." (F6459..F6787)
- **WHAT APPEARS NOW:** Final Array Readout Card glows in center stage: 'FINAL ARRAY: [0, 0, 0, 1, 1, 1, 2, 2, 2, 2]'. Mint checkmark pulses over each of the 10 slots.
- **CENTER-STAGE HERO:** Final Sorted Array Celebration Readout.
- **CAUSE:** Narrator reads back the final sorted sequence.
- **EFFECT / MOTION:** Sequential gold highlights travel across slots 0..9 as each number is spoken.
- **WHAT MUST NOT APPEAR YET:** Done badge.
- **COMPREHENSION HOLD:** F6787..F6791 (4 frames): Readout complete.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Final sorted array verified.

---

### Anchor 81: S07_FINAL_DONE (F6791 .. F6800, pause to F6819)
- **ANCHOR:** "Done." (F6791..F6800)
- **WHAT APPEARS NOW:** Grand victory stamp slams down: '✔ 100% SORTED IN A SINGLE PASS!'.
- **CENTER-STAGE HERO:** Grand Victory Stamp.
- **CAUSE:** Speaker emphatically concludes execution: 'Done.'
- **EFFECT / MOTION:** Chalk dust particle effect; emerald glow surrounds array.
- **WHAT MUST NOT APPEAR YET:** Recap pattern.
- **COMPREHENSION HOLD:** F6800..F6819 (19 frames): Deep satisfaction pause.
- **CLEANUP / EXIT:** Victory stamp settles.
- **PERSISTENT STATE:** Single pass sort complete.

---

### Anchor 82: S07_RECAP_PATTERN (F6819 .. F6862, pause to F6879)
- **ANCHOR:** "Notice the key pattern." (F6819..F6862)
- **WHAT APPEARS NOW:** Zone B transitions to Summary Takeaway Card: 'THE 3 CORE DNF RULES (SUMMARY)'.
- **CENTER-STAGE HERO:** Core Invariant Rules Recap Card.
- **CAUSE:** Narrator transitions to key takeaway rules.
- **EFFECT / MOTION:** Triple chalk border frames the card stage.
- **WHAT MUST NOT APPEAR YET:** Rule lines.
- **COMPREHENSION HOLD:** F6862..F6879 (17 frames): Focus lock.
- **CLEANUP / EXIT:** Victory stamp.
- **PERSISTENT STATE:** Summary stage active.

---

### Anchor 83: S07_RECAP_ZERO_LEFT (F6879 .. F6910, pause to F6921)
- **ANCHOR:** "0 goes left." (F6879..F6910)
- **WHAT APPEARS NOW:** Pillar 1 highlights in Coral Red: '1. 0 GOES LEFT -> swap(low, mid), low++, mid++'. Red left arrow draws on.
- **CENTER-STAGE HERO:** Rule 1 Recap (0 goes left).
- **CAUSE:** Recap of Case 0 behavior.
- **EFFECT / MOTION:** Leftward chalk vector draws on.
- **WHAT MUST NOT APPEAR YET:** Rules 2 and 3.
- **COMPREHENSION HOLD:** F6910..F6921 (11 frames): Rule 1 absorbed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Rule 1 active.

---

### Anchor 84: S07_RECAP_ONE_MIDDLE (F6921 .. F6959, pause to F6973)
- **ANCHOR:** "1 stays in the middle." (F6921..F6959)
- **WHAT APPEARS NOW:** Pillar 2 highlights in Chalk White: '2. 1 STAYS IN MIDDLE -> NO SWAP, mid++'. White center bracket draws on.
- **CENTER-STAGE HERO:** Rule 2 Recap (1 stays in middle).
- **CAUSE:** Recap of Case 1 behavior.
- **EFFECT / MOTION:** Center bracket draws on.
- **WHAT MUST NOT APPEAR YET:** Rule 3.
- **COMPREHENSION HOLD:** F6959..F6973 (14 frames): Rule 2 absorbed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Rule 2 active.

---

### Anchor 85: S07_RECAP_TWO_RIGHT (F6973 .. F7012, pause to F7031)
- **ANCHOR:** "And 2 goes right." (F6973..F7012)
- **WHAT APPEARS NOW:** Pillar 3 highlights in Cyan: '3. 2 GOES RIGHT -> swap(mid, high), high--'. Cyan right arrow draws on.
- **CENTER-STAGE HERO:** Rule 3 Recap (2 goes right).
- **CAUSE:** Recap of Case 2 behavior.
- **EFFECT / MOTION:** Rightward chalk vector draws on.
- **WHAT MUST NOT APPEAR YET:** Golden rule caveat.
- **COMPREHENSION HOLD:** F7012..F7031 (19 frames): Rule 3 absorbed.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** Rule 3 active.

---

### Anchor 86: S07_RECAP_MID_STAYS_RULE (F7031 .. F7188, pause to F7188)
- **ANCHOR:** "And every time we move a 2 to the right, mid stays until the incoming value is checked." (F7031..F7188)
- **WHAT APPEARS NOW:** Golden Climax Rule highlighted in Gold Callout Box: '⚠️ CRITICAL INVARIANT: EVERY TIME A 2 MOVES RIGHT, MID STAYS! Incoming value is unknown and must be inspected first!'. Transition teaser: 'NEXT: SCENE 08 · THE CLEAN CODE IMPLEMENTATION ➔'.
- **CENTER-STAGE HERO:** Final Golden Rule Anchor & Gateway Transition.
- **CAUSE:** Concluding spoken instruction of Scene 07.
- **EFFECT / MOTION:** Golden box pulses with soft aura; mint checkmark seals the scene.
- **WHAT MUST NOT APPEAR YET:** Scene 08 content.
- **COMPREHENSION HOLD:** F7150..F7188 (38 frames): Final comprehension hold before scene end.
- **CLEANUP / EXIT:** None.
- **PERSISTENT STATE:** End of Scene 07. Ready for Scene 08 Code.

---

## 4. Invariant Verification Table

| Invariant Requirement | Implementation Enforcement in Scene 07 | Verified |
|---|---|---|
| **Zero Card Overlap** | Array track bottom is at Y: 379 (pointer lane 1). Zone B card stage strictly begins at Y: 430 (51px clearance). | **PASS** |
| **Canvas Balance** | Visuals distributed across Y: 105 to Y: 740. 240px breathing room maintained above captions (Y: 980). | **PASS** |
| **Pointers Separation** | `low` on Lane 0, `mid` on Lane 1, `high` on Lane 0. Vertical lane offset: 34px. Zero label collisions. | **PASS** |
| **Top Clearance** | `marginBottom: 46px` on array title header completely clears top partition labels. | **PASS** |
| **Exact Audio Sync** | All 86 anchors mapped 1:1 with `07-dnf-trace.anchors.json` (F0..F7188). Zero guessed frames. | **PASS** |
| **Remotion Determinism** | 100% frame-derived interpolation and spring dynamics. Zero CSS transitions or keyframes. | **PASS** |
| **Dry-Run Fidelity** | Exact 1:1 match with `03-dry-run-trace.md` across all 10 iterations, 4 swaps, 3 no-swaps, 1 self-swap. | **PASS** |
