# Q11 — Sort Colors (LC 75)
# Scene 03 · Counting Trace (Approach 1)
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN — NO GUESSED FRAMES

**Course:** Code With Animation  
**Problem:** Q011 · Sort Colors · LeetCode 75 · Medium  
**Pattern:** 01 · Arrays & Hashing  
**Scene:** 03 · Counting Trace  
**Approach:** Approach 1 · Frequency Counting & In-Place Overwrite (Two Passes)  
**Audio File:** `questions/01-arrays-hashing/011-sort-colors/audio/03-counting-trace.mp3`  
**Exact Sync File:** `questions/01-arrays-hashing/011-sort-colors/sync/03-counting-trace.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/011-sort-colors/sync/03-counting-trace.anchors.json`  
**FPS:** 30  
**Exact Total Frames:** 2,857 frames (95.220 seconds)  
**Total Spoken Words:** 204 words (`W0000` to `W0203`)  
**Total Anchors:** 56 semantic anchors (`S03_START` to `S03_COUNT_THEN_REWRITE`)  

---

## 1. Mandatory Scene Contract

```text
SCENE: 03-counting-trace
QUESTION: 011 · Sort Colors (LeetCode 75)
BEAT TYPE: APPROACH 1 FULL TRACE & IN-PLACE REWRITE
AUDIO FILE: audio/03-counting-trace.mp3
SYNC FILE: sync/03-counting-trace.json
ANCHORS FILE: sync/03-counting-trace.anchors.json
FPS: 30
TOTAL FRAMES: 2857
PEDAGOGICAL GOAL:
- Establish Approach 1: Frequency Counting & In-Place Overwrite (Two-Pass Algorithm).
- Inherit raw 10-slot master input [2, 1, 2, 0, 2, 1, 0, 1, 0, 2] from Scene 02 without geometry shift.
- Orientation read pass over the 10 elements.
- Introduce 3 category counters (count0 = 0, count1 = 0, count2 = 0).
- Pass 1 (Counting): Scan each of the 10 elements, incrementing the corresponding counter:
    idx 0 = 2 -> count2 = 1
    idx 1 = 1 -> count1 = 1
    idx 2 = 2 -> count2 = 2
    idx 3 = 0 -> count0 = 1
    idx 4 = 2 -> count2 = 3
    idx 5 = 1 -> count1 = 2
    idx 6 = 0 -> count0 = 2
    idx 7 = 1 -> count1 = 3
    idx 8 = 0 -> count0 = 3
    idx 9 = 2 -> count2 = 4
- Pass 1 Conclusion: Three 0s, Three 1s, Four 2s (Total = 10 elements).
- Pass 2 (Rewrite): In-place rewrite of the SAME array using the counts:
    indices 0..2 overwritten with 0 (Red)
    indices 3..5 overwritten with 1 (White)
    indices 6..9 overwritten with 2 (Blue)
- Result: Perfectly sorted array [0, 0, 0, 1, 1, 1, 2, 2, 2, 2].
- Core takeaway: First count, then rewrite (Two passes, O(2n) time, O(1) extra space).

REUSE:
- ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk)
- theme, fonts (@dsa/kit/lib/theme)
- EASE, fadeIn, pop (@dsa/kit/lib/anim)
- RoughBox, RoughLine, ChalkDust (@dsa/kit/components)
- Captions (@dsa/kit/components/Captions)
- ArrayTrackV2, ArraySlotV2, ArrayValueV2, ArrayIndexRowV2, PointerLaneV2 (@dsa/kit/components/array)

EXTEND:
- 3 Frequency Counter Cards:
    * Counter 0: Coral Red (#FF7675 / theme.warn)
    * Counter 1: Warm White (#F8F6F0 / theme.chalkText)
    * Counter 2: Ice Cyan / Blue (#5CE1E6 / theme.cyan)
- Scan pointer lane (Pass 1 forward scan beam across slots 0..9)
- In-place overwrite sweep (Pass 2 overwrite animation across slots 0..9)

CREATE:
- plans/03-counting-trace_FRAMEWISE_PLAN.md (This exhaustive frame-wise choreography)

DO NOT TOUCH:
- @dsa/kit core libraries
- Q010 regression reference source files
- sync/03-counting-trace.json (immutable source of truth)

FORBIDDEN IN SCENE 03:
- No physical sorting animation between two separate arrays (it must be an in-place overwrite of the same array)
- No Dutch National Flag pointers (low, mid, high) — belongs strictly to Scene 06/07
- No skipping any of the 10 elements during the scan
- No non-deterministic Math.random() or CSS transitions
```

---

## 2. Optical Stage Geometry (1920 × 1080)

```text
Canvas: 1920 × 1080 (16:9), Background: ChalkboardBackground (#19523C) with ambient ChalkDust

Top Header Zone (Y: 40 .. 140):
  - Left Badge: "QUESTION 011 · SORT COLORS · LC 75" (Y: 70)
  - Center Pill: "APPROACH 1 · FREQUENCY COUNTING (TWO PASSES)" (Y: 70, color: theme.better)

Hero Array Track (Upper Center, Y: 260 .. 420):
  - 10 fixed slots: Width 104px, Height 100px, Gap 14px
  - Total row width = 10 × 104 + 9 × 14 = 1166px
  - Start X = (1920 - 1166) / 2 = 377px
  - Center Y = 320px
  - Top pointer lane (Y: 220 .. 260): scanning pointer `i` during Pass 1
  - Bottom index row (Y: 420 .. 450): monospace `0..9`, color: theme.chalkDim

Counters Stage (Lower Center, Y: 520 .. 720):
  - 3 Chalk Counter Cards at Y: 540:
      Width 200px, Height 150px, Gap 40px
      Total width = 3 × 200 + 2 × 40 = 680px
      Start X = (1920 - 680) / 2 = 620px
      Card 0 (0s / Red):   X: 620 .. 820   (theme.warn)
      Card 1 (1s / White): X: 860 .. 1060  (theme.chalkText)
      Card 2 (2s / Blue):  X: 1100 .. 1300 (theme.cyan)

Pass Phase Indicator Banner (Y: 780 .. 850):
  - Pass 1: "PASS 1 · COUNT FREQUENCIES OF 0s, 1s, 2s" (theme.cyan)
  - Pass 2: "PASS 2 · IN-PLACE OVERWRITE FROM COUNTS" (theme.pivot)

Bottom Caption Zone (Y: 960 .. 1040):
  - Full-width karaoke caption bar powered by exact word sync
```

---

## 3. Master Audio Anchor Manifest (All 56 Anchors)

| Anchor ID | Word Range | Start Frame | End Frame | Spoken Phrase | Pause Duration | Pedagogical Role |
|---|---|---|---|---|---|---|
| `S03_START` | W0000–W0005 | F0 | F52 | "Let's start with the simpler approach," | 11F (F52–F63) | Transition from Scene 02; Header settles |
| `S03_COUNTING` | W0006 | F63 | F73 | "counting." | 19F (F73–F92) | Approach badge "COUNTING SORT" unlocks |
| `S03_ARRAY` | W0007–W0009 | F92 | F139 | "Our array is" | 0F (seamless) | Focus locks onto the 10-slot master input |
| `S03_R0` | W0010 | F139 | F161 | "2," | 8F (F161–F169) | Read scan slot 0 = 2 (Cyan) |
| `S03_R1` | W0011 | F169 | F187 | "1," | 7F (F187–F194) | Read scan slot 1 = 1 (White) |
| `S03_R2` | W0012 | F194 | F212 | "2," | 9F (F212–F221) | Read scan slot 2 = 2 (Cyan) |
| `S03_R3` | W0013 | F221 | F236 | "0," | 10F (F236–F246) | Read scan slot 3 = 0 (Red) |
| `S03_R4` | W0014 | F246 | F265 | "2," | 15F (F265–F280) | Read scan slot 4 = 2 (Cyan) |
| `S03_R5` | W0015 | F280 | F290 | "1," | 11F (F290–F301) | Read scan slot 5 = 1 (White) |
| `S03_R6` | W0016 | F301 | F319 | "0," | 12F (F319–F331) | Read scan slot 6 = 0 (Red) |
| `S03_R7` | W0017 | F331 | F346 | "1," | 9F (F346–F355) | Read scan slot 7 = 1 (White) |
| `S03_R8` | W0018 | F355 | F371 | "0," | 13F (F371–F384) | Read scan slot 8 = 0 (Red) |
| `S03_R9` | W0019 | F384 | F395 | "2." | 19F (F395–F414) | Read scan slot 9 = 2 (Cyan) |
| `S03_NO_MOVE` | W0020–W0024 | F414 | F466 | "Instead of moving values immediately," | 13F (F466–F479) | Rejection of immediate element swaps |
| `S03_FIRST_COUNT` | W0025–W0028 | F479 | F507 | "we will first count" | 0F (seamless) | PASS 1 banner appears at bottom |
| `S03_HOW_MANY_0` | W0029–W0031 | F507 | F537 | "how many zeros," | 16F (F537–F553) | Counter Card 0 (Red) draws at X: 620 |
| `S03_HOW_MANY_1` | W0032–W0034 | F553 | F575 | "how many ones," | 12F (F575–F587) | Counter Card 1 (White) draws at X: 860 |
| `S03_HOW_MANY_2` | W0035–W0040 | F587 | F634 | "and how many 2s we have." | 21F (F634–F655) | Counter Card 2 (Cyan) draws at X: 1100 |
| `S03_COUNTS_ZERO` | W0041–W0048 | F655 | F725 | "We start with all three counts at 0." | 14F (F725–F739) | Counters initialize to 0; ready for scan |
| `S03_SCAN0_VAL` | W0049–W0052 | F739 | F778 | "First value is 2." | 12F (F778–F790) | Scan pointer on slot 0; value 2 inspected |
| `S03_SCAN0_INC` | W0053–W0058 | F790 | F838 | "So count of 2 becomes 1." | 0F (seamless) | count[2]: 0 -> 1 with cyan pulse |
| `S03_SCAN1_VAL` | W0059–W0062 | F838 | F899 | "Next value is 1." | 14F (F899–F913) | Scan pointer on slot 1; value 1 inspected |
| `S03_SCAN1_INC` | W0063–W0067 | F913 | F959 | "Count of 1 becomes 1." | 15F (F959–F974) | count[1]: 0 -> 1 with white pulse |
| `S03_SCAN2_VAL` | W0068–W0071 | F974 | F1013 | "Next value is 2." | 15F (F1013–F1028)| Scan pointer on slot 2; value 2 inspected |
| `S03_SCAN2_INC` | W0072–W0076 | F1028 | F1070 | "Count of 2 becomes 2." | 13F (F1070–F1083)| count[2]: 1 -> 2 with cyan pulse |
| `S03_SCAN3_VAL` | W0077–W0080 | F1083 | F1118 | "Now we see 0." | 18F (F1118–F1136)| Scan pointer on slot 3; value 0 inspected |
| `S03_SCAN3_INC` | W0081–W0085 | F1136 | F1189 | "Count of 0 becomes 1." | 12F (F1189–F1201)| count[0]: 0 -> 1 with red pulse |
| `S03_SCAN4_VAL` | W0086–W0089 | F1201 | F1240 | "Next value is 2." | 16F (F1240–F1256)| Scan pointer on slot 4; value 2 inspected |
| `S03_SCAN4_INC` | W0090–W0094 | F1256 | F1309 | "Count of 2 becomes 3." | 10F (F1309–F1319)| count[2]: 2 -> 3 with cyan pulse |
| `S03_SCAN5_VAL` | W0095–W0098 | F1319 | F1356 | "Next value is 1." | 20F (F1356–F1376)| Scan pointer on slot 5; value 1 inspected |
| `S03_SCAN5_INC` | W0099–W0103 | F1376 | F1422 | "Count of 1 becomes 2." | 12F (F1422–F1434)| count[1]: 1 -> 2 with white pulse |
| `S03_SCAN6_VAL` | W0104–W0107 | F1434 | F1477 | "Next value is 0." | 19F (F1477–F1496)| Scan pointer on slot 6; value 0 inspected |
| `S03_SCAN6_INC` | W0108–W0112 | F1496 | F1550 | "Count of 0 becomes 2." | 11F (F1550–F1561)| count[0]: 1 -> 2 with red pulse |
| `S03_SCAN7_VAL` | W0113–W0116 | F1561 | F1604 | "Next value is 1." | 9F (F1604–F1613) | Scan pointer on slot 7; value 1 inspected |
| `S03_SCAN7_INC` | W0117–W0121 | F1613 | F1662 | "Count of 1 becomes 3." | 10F (F1662–F1672)| count[1]: 2 -> 3 with white pulse |
| `S03_SCAN8_VAL` | W0122–W0125 | F1672 | F1714 | "Next value is 0." | 0F (seamless) | Scan pointer on slot 8; value 0 inspected |
| `S03_SCAN8_INC` | W0126–W0130 | F1714 | F1776 | "Count of 0 becomes 3" | 0F (seamless) | count[0]: 2 -> 3 with red pulse |
| `S03_SCAN9_VAL` | W0131–W0136 | F1776 | F1838 | "and the last value is 2." | 6F (F1838–F1844) | Scan pointer on slot 9; value 2 inspected |
| `S03_SCAN9_INC` | W0137–W0141 | F1844 | F1894 | "Count of 2 becomes 4." | 13F (F1894–F1907)| count[2]: 3 -> 4 with cyan pulse |
| `S03_FINAL_COUNTS`| W0142–W0143 | F1907 | F1924 | "So finally," | 21F (F1924–F1945)| Scan pointer retires; cards glow in unison |
| `S03_FINAL_0` | W0144–W0147 | F1945 | F1975 | "we have 3 zeros," | 17F (F1975–F1992)| Counter 0 highlights: "3 ZEROES" |
| `S03_FINAL_1` | W0148–W0150 | F1992 | F2031 | "3 ones and" | 0F (seamless) | Counter 1 highlights: "3 ONES" |
| `S03_FINAL_2` | W0151–W0152 | F2031 | F2051 | "4 twos." | 21F (F2051–F2072)| Counter 2 highlights: "4 TWOS" |
| `S03_REWRITE` | W0153–W0157 | F2072 | F2116 | "Now we use these counts" | 0F (seamless) | Phase transitions: PASS 2 · IN-PLACE REWRITE |
| `S03_SAME_ARRAY` | W0158–W0162 | F2116 | F2169 | "to rewrite the same array." | 20F (F2169–F2189)| Lock icon on nums; write pointer at slot 0 |
| `S03_WRITE_0_CUE`| W0163 | F2189 | F2201 | "First," | 11F (F2201–F2212)| Write cursor locks onto slots 0..2 |
| `S03_WRITE_0` | W0164–W0166 | F2212 | F2243 | "write 3 zeros," | 13F (F2243–F2256)| Slots 0, 1, 2 mutate in-place to 0 (Red) |
| `S03_WRITE_1_CUE`| W0167 | F2256 | F2270 | "then" | 0F (seamless) | Write cursor advances to slot 3 |
| `S03_WRITE_1` | W0168–W0170 | F2270 | F2301 | "write 3 ones." | 18F (F2301–F2319)| Slots 3, 4, 5 mutate in-place to 1 (White) |
| `S03_WRITE_2_CUE`| W0171–W0172 | F2319 | F2339 | "And finally," | 10F (F2339–F2349)| Write cursor advances to slot 6 |
| `S03_WRITE_2` | W0173–W0175 | F2349 | F2378 | "write 4 twos." | 0F (seamless) | Slots 6, 7, 8, 9 mutate in-place to 2 (Cyan) |
| `S03_RESULT` | W0176–W0179 | F2378 | F2422 | "Now the array becomes" | 0F (seamless) | Entire array glows in sorted order |
| `S03_OUT0A..D` | W0180–W0189 | F2422 | F2711 | "0, 0, 0, 1, 1, 1, 2, 2, 2, 2." | 14F to F2725 | Sequential verification highlight across 0..9 |
| `S03_SORTED` | W0190–W0195 | F2725 | F2767 | "So the array is correctly sorted." | 9F (F2767–F2776) | Green checkmark ✓ stamps above array |
| `S03_SIMPLE` | W0196–W0199 | F2776 | F2801 | "The idea is simple." | 11F (F2801–F2812)| Summary banner appears at Y: 780 |
| `S03_COUNT_THEN_REWRITE` | W0200–W0203 | F2812 | F2857 | "First count, then rewrite." | End at F2857 | Takeaway locks: O(2n) time, O(1) space |

---

## 4. Exhaustive Frame-Wise Choreography (All 56 Anchors)

### ACT 1: Orientation Read Pass (Anchors 1–13 · F0 – F414)

--------------------------------------------------
#### ANCHOR: `S03_START`
- **Spoken Phrase:** *"Let's start with the simpler approach,"* (W0000–W0005)
- **Frame Range:** F0 – F52 (Pause: F52–F63, 11 frames / 360ms)
- **WHAT APPEARS NOW:**
  * Clean stage transition.
  * Top-left badge: `"QUESTION 011 · SORT COLORS · LC 75"` at Y: 70.
  * Center-Stage Intro Card at X: 610, Y: 420:
    `"APPROACH 1 · THE INTUITIVE BASELINE"`
    `"What is the simplest way to sort only three values?"`
  * Captions at Y: 980: *"Let's start with the simpler approach,"*.
- **CENTER-STAGE HERO:**
  * The Approach Introduction Card at screen center.
- **CAUSE:**
  * Speaker initiates discussion: *"Let's start with the simpler approach,"*.
- **EFFECT:**
  * F0–F30: Soft opacity fade (0 → 1) and gentle spring scale (0.94 → 1.0) of the introduction card.
- **WHAT MUST NOT APPEAR YET:**
  * The word "COUNTING" must NOT appear yet (future word).
  * The array `nums` must NOT appear yet (narration has not mentioned any array).
  * No counter cards, no slot tracks.
- **CLEANUP / EXIT:**
  * Introduction card settles into sharp focus.
- **PERSISTENT STATE:**
  * Header on left, intro card holding center stage.

--------------------------------------------------
#### ANCHOR: `S03_COUNTING`
- **Spoken Phrase:** *"counting."* (W0006)
- **Frame Range:** F63 – F73 (Pause: F73–F92, 19 frames / 640ms)
- **WHAT APPEARS NOW:**
  * The center-stage intro card bursts with golden chalk bloom:
    `"COUNTING"`
    in bold display typography (`theme.pivot` / `theme.better`) with stylized counter tally brackets.
  * Captions: *"counting."*.
- **CENTER-STAGE HERO:**
  * **COUNTING** — the core algorithm title holding center stage!
- **CAUSE:**
  * Exact spoken word: *"counting."*.
- **EFFECT:**
  * F63–F75: Massive chalk impact burst on the word `"COUNTING"`.
  * F78–F92 (during the 19-frame pause): The center card smoothly shrinks and glides up to dock into the top-center header pill (`"APPROACH 1 · COUNTING SORT"`), clearing the center stage!
- **WHAT MUST NOT APPEAR YET:**
  * The array `nums` must NOT appear yet (speaker has not said "array").
- **CLEANUP / EXIT:**
  * Center card flies up to the top header pill, leaving the stage clear.
- **PERSISTENT STATE:**
  * Approach 1 confirmed active in header pill at top center. Center stage is open.

--------------------------------------------------
#### ANCHOR: `S03_ARRAY`
- **Spoken Phrase:** *"Our array is"* (W0007–W0009)
  * `W0007` (F92–F101): *"Our"*
  * `W0008` (F101–F111): *"array"*
  * `W0009` (F111–F139): *"is"*
- **Frame Range:** F92 – F139 (Pause: 0 frames, seamless into F139)
- **WHAT APPEARS NOW:**
  * F92–F100: Narration says *"Our"*. The stage remains clean and clear (no elements appear yet).
  * F101–F114 (exact sync with word *"array"*): The entire Array Track (`INPUT ARRAY nums [10 elements]`) together with all 10 slots `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]` materializes at Y: 320 with smooth chalk opacity and spring scale (0.96 → 1.0)!
  * Color encoding visible immediately: 0s in Coral Red, 1s in Warm White, 2s in Ice Cyan.
  * F111–F139: Narration says *"is"*. Comprehension hold — array rests in full view.
  * Captions: *"Our array is"*.
- **CENTER-STAGE HERO:**
  * The Master Array appearing on stage in direct, synchronized response to the word *"array"*.
- **CAUSE:**
  * Exact spoken word: *"array"* (`W0008`, F101).
- **EFFECT:**
  * Whole array track springs into focus at F101, settling by F114.
  * Array sits perfectly primed and legible for element reading at F139.
- **WHAT MUST NOT APPEAR YET:**
  * The array must NOT appear before F101 (nothing visible during "Our" at F92–F100).
  * Counter cards must NOT appear yet (they appear only when narration says "how many zeros" at F507).
  * Scanning pointer must NOT appear yet (reading starts only at F139).
- **CLEANUP / EXIT:**
  * Array locked at Y: 320.
- **PERSISTENT STATE:**
  * Master Array established at Y: 320 with all 10 slots ready for read pass.

--------------------------------------------------
#### ANCHOR: `S03_R0`
- **Spoken Phrase:** *"2,"* (W0010)
- **Frame Range:** F139 – F161 (Pause: F161–F169, 8 frames / 260ms)
- **WHAT APPEARS NOW:**
  * Slot 0 (`2`, Ice Cyan) pulses with luminous cyan ring (`#5CE1E6`).
  * Captions: *"2,"*.
- **CENTER-STAGE HERO:**
  * Slot 0 value `2`.
- **CAUSE:**
  * Spoken element: *"2,"*.
- **EFFECT:**
  * F139–F155: Slot 0 scales 1.0 → 1.08 → 1.0; cyan glow expands around the slot.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 1..9 reading animations.
- **CLEANUP / EXIT:**
  * Spotlight glides to Slot 1 at F165.
- **PERSISTENT STATE:**
  * Slot 0 returns to rest; beam moves to Slot 1.

--------------------------------------------------
#### ANCHOR: `S03_R1`
- **Spoken Phrase:** *"1,"* (W0011)
- **Frame Range:** F169 – F187 (Pause: F187–F194, 7 frames / 240ms)
- **WHAT APPEARS NOW:**
  * Slot 1 (`1`, Warm White) pulses with white chalk ring.
  * Captions: *"1,"*.
- **CENTER-STAGE HERO:**
  * Slot 1 value `1`.
- **CAUSE:**
  * Spoken element: *"1,"*.
- **EFFECT:**
  * F169–F182: Slot 1 scales 1.0 → 1.08 → 1.0; white glow flash.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 2..9 reading animations.
- **CLEANUP / EXIT:**
  * Spotlight glides to Slot 2.
- **PERSISTENT STATE:**
  * Slot 1 returns to rest.

--------------------------------------------------
#### ANCHOR: `S03_R2`
- **Spoken Phrase:** *"2,"* (W0012)
- **Frame Range:** F194 – F212 (Pause: F212–F221, 9 frames / 300ms)
- **WHAT APPEARS NOW:**
  * Slot 2 (`2`, Ice Cyan) pulses with cyan chalk ring.
  * Captions: *"2,"*.
- **CENTER-STAGE HERO:**
  * Slot 2 value `2`.
- **CAUSE:**
  * Spoken element: *"2,"*.
- **EFFECT:**
  * F194–F208: Slot 2 pulses cyan.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 3..9.
- **CLEANUP / EXIT:**
  * Spotlight glides to Slot 3.
- **PERSISTENT STATE:**
  * Slot 2 returns to rest.

--------------------------------------------------
#### ANCHOR: `S03_R3`
- **Spoken Phrase:** *"0,"* (W0013)
- **Frame Range:** F221 – F236 (Pause: F236–F246, 10 frames / 340ms)
- **WHAT APPEARS NOW:**
  * Slot 3 (`0`, Coral Red) pulses with coral red chalk ring (`#FF7675`).
  * Captions: *"0,"*.
- **CENTER-STAGE HERO:**
  * Slot 3 value `0`.
- **CAUSE:**
  * Spoken element: *"0,"*.
- **EFFECT:**
  * F221–F232: Slot 3 pulses red.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 4..9.
- **CLEANUP / EXIT:**
  * Spotlight glides to Slot 4.
- **PERSISTENT STATE:**
  * Slot 3 returns to rest.

--------------------------------------------------
#### ANCHOR: `S03_R4`
- **Spoken Phrase:** *"2,"* (W0014)
- **Frame Range:** F246 – F265 (Pause: F265–F280, 15 frames / 500ms)
- **WHAT APPEARS NOW:**
  * Slot 4 (`2`, Ice Cyan) pulses with cyan chalk ring.
  * Captions: *"2,"*.
- **CENTER-STAGE HERO:**
  * Slot 4 value `2`.
- **CAUSE:**
  * Spoken element: *"2,"*.
- **EFFECT:**
  * F246–F258: Slot 4 pulses cyan.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 5..9.
- **CLEANUP / EXIT:**
  * Spotlight glides to Slot 5.
- **PERSISTENT STATE:**
  * Slot 4 returns to rest.

--------------------------------------------------
#### ANCHOR: `S03_R5`
- **Spoken Phrase:** *"1,"* (W0015)
- **Frame Range:** F280 – F290 (Pause: F290–F301, 11 frames / 360ms)
- **WHAT APPEARS NOW:**
  * Slot 5 (`1`, Warm White) pulses with white chalk ring.
  * Captions: *"1,"*.
- **CENTER-STAGE HERO:**
  * Slot 5 value `1`.
- **CAUSE:**
  * Spoken element: *"1,"*.
- **EFFECT:**
  * F280–F288: Slot 5 pulses white.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 6..9.
- **CLEANUP / EXIT:**
  * Spotlight glides to Slot 6.
- **PERSISTENT STATE:**
  * Slot 5 returns to rest.

--------------------------------------------------
#### ANCHOR: `S03_R6`
- **Spoken Phrase:** *"0,"* (W0016)
- **Frame Range:** F301 – F319 (Pause: F319–F331, 12 frames / 400ms)
- **WHAT APPEARS NOW:**
  * Slot 6 (`0`, Coral Red) pulses with red chalk ring.
  * Captions: *"0,"*.
- **CENTER-STAGE HERO:**
  * Slot 6 value `0`.
- **CAUSE:**
  * Spoken element: *"0,"*.
- **EFFECT:**
  * F301–F314: Slot 6 pulses red.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 7..9.
- **CLEANUP / EXIT:**
  * Spotlight glides to Slot 7.
- **PERSISTENT STATE:**
  * Slot 6 returns to rest.

--------------------------------------------------
#### ANCHOR: `S03_R7`
- **Spoken Phrase:** *"1,"* (W0017)
- **Frame Range:** F331 – F346 (Pause: F346–F355, 9 frames / 300ms)
- **WHAT APPEARS NOW:**
  * Slot 7 (`1`, Warm White) pulses with white chalk ring.
  * Captions: *"1,"*.
- **CENTER-STAGE HERO:**
  * Slot 7 value `1`.
- **CAUSE:**
  * Spoken element: *"1,"*.
- **EFFECT:**
  * F331–F342: Slot 7 pulses white.
- **WHAT MUST NOT APPEAR YET:**
  * Slots 8..9.
- **CLEANUP / EXIT:**
  * Spotlight glides to Slot 8.
- **PERSISTENT STATE:**
  * Slot 7 returns to rest.

--------------------------------------------------
#### ANCHOR: `S03_R8`
- **Spoken Phrase:** *"0,"* (W0018)
- **Frame Range:** F355 – F371 (Pause: F371–F384, 13 frames / 440ms)
- **WHAT APPEARS NOW:**
  * Slot 8 (`0`, Coral Red) pulses with red chalk ring.
  * Captions: *"0,"*.
- **CENTER-STAGE HERO:**
  * Slot 8 value `0`.
- **CAUSE:**
  * Spoken element: *"0,"*.
- **EFFECT:**
  * F355–F368: Slot 8 pulses red.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 9.
- **CLEANUP / EXIT:**
  * Spotlight glides to Slot 9.
- **PERSISTENT STATE:**
  * Slot 8 returns to rest.

--------------------------------------------------
#### ANCHOR: `S03_R9`
- **Spoken Phrase:** *"2."* (W0019)
- **Frame Range:** F384 – F395 (Pause: F395–F414, 19 frames / 640ms)
- **WHAT APPEARS NOW:**
  * Slot 9 (`2`, Ice Cyan) pulses with cyan chalk ring.
  * Entire array executes a subtle unified chalk shimmer.
  * Captions: *"2."*.
- **CENTER-STAGE HERO:**
  * Slot 9 value `2`.
- **CAUSE:**
  * Spoken element concluding orientation read pass: *"2."*.
- **EFFECT:**
  * F384–F395: Slot 9 pulses cyan.
  * F395–F414: Spotlight beam fades out; array rests in full contrast.
- **WHAT MUST NOT APPEAR YET:**
  * Counter cards; swap arrows.
- **CLEANUP / EXIT:**
  * Orientation beam dissolves.
- **PERSISTENT STATE:**
  * Master array fully re-oriented and ready for algorithm.

---

### ACT 2: Counter System Initialization (Anchors 14–19 · F414 – F739)

--------------------------------------------------
#### ANCHOR: `S03_NO_MOVE`
- **Spoken Phrase:** *"Instead of moving values immediately,"* (W0020–W0024)
- **Frame Range:** F414 – F466 (Pause: F466–F479, 13 frames / 440ms)
- **WHAT APPEARS NOW:**
  * Red dashed "FORBIDDEN SWAP" arrow appears between Slot 0 and Slot 1, and is quickly struck through with a red cross `✖`.
  * Captions: *"Instead of moving values immediately,"*.
- **CENTER-STAGE HERO:**
  * Struck-through swap icon above slots 0 and 1.
- **CAUSE:**
  * Speaker warns against moving/swapping values prematurely.
- **EFFECT:**
  * F420–F450: Swap arc draws and is promptly struck out by a diagonal red chalk line.
- **WHAT MUST NOT APPEAR YET:**
  * Frequency counter cards.
- **CLEANUP / EXIT:**
  * Struck swap arrow fades out over F455–F466.
- **PERSISTENT STATE:**
  * Clear understanding that comparison/swapping is not used here.

--------------------------------------------------
#### ANCHOR: `S03_FIRST_COUNT`
- **Spoken Phrase:** *"we will first count"* (W0025–W0028)
- **Frame Range:** F479 – F507 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * Phase Banner at Y: 780 illuminates: `"PHASE 1: COUNT FREQUENCIES"` (Cyan chalk border).
  * Captions: *"we will first count"*.
- **CENTER-STAGE HERO:**
  * Phase 1 Banner at Y: 780.
- **CAUSE:**
  * Narration introduces the counting phase.
- **EFFECT:**
  * F479–F505: Phase banner slides up gently from Y: 800 to Y: 780 with `EASE.easeOutCubic`.
- **WHAT MUST NOT APPEAR YET:**
  * The 3 counter cards.
- **CLEANUP / EXIT:**
  * Banner locks into place.
- **PERSISTENT STATE:**
  * Phase 1 active.

--------------------------------------------------
#### ANCHOR: `S03_HOW_MANY_0`
- **Spoken Phrase:** *"how many zeros,"* (W0029–W0031)
- **Frame Range:** F507 – F537 (Pause: F537–F553, 16 frames / 520ms)
- **WHAT APPEARS NOW:**
  * Counter Card 0 appears at X: 620, Y: 540 (Width 200, Height 150).
  * Title: `"COUNT OF 0s"` in Coral Red (`#FF7675`).
  * Big dashed digit slot inside the card.
  * Captions: *"how many zeros,"*.
- **CENTER-STAGE HERO:**
  * Counter Card 0 (Red).
- **CAUSE:**
  * Exact spoken category: *"how many zeros,"*.
- **EFFECT:**
  * F507–F532: Card 0 border draws using `RoughBox` in `theme.warn`; soft red wash fills background.
- **WHAT MUST NOT APPEAR YET:**
  * Counter Cards 1 and 2.
- **CLEANUP / EXIT:**
  * Card 0 settles.
- **PERSISTENT STATE:**
  * Counter Card 0 visible.

--------------------------------------------------
#### ANCHOR: `S03_HOW_MANY_1`
- **Spoken Phrase:** *"how many ones,"* (W0032–W0034)
- **Frame Range:** F553 – F575 (Pause: F575–F587, 12 frames / 400ms)
- **WHAT APPEARS NOW:**
  * Counter Card 1 appears at X: 860, Y: 540.
  * Title: `"COUNT OF 1s"` in Warm White (`#F8F6F0`).
  * Big dashed digit slot inside the card.
  * Captions: *"how many ones,"*.
- **CENTER-STAGE HERO:**
  * Counter Card 1 (White).
- **CAUSE:**
  * Exact spoken category: *"how many ones,"*.
- **EFFECT:**
  * F553–F572: Card 1 border draws using `RoughBox` in `theme.chalkText`; warm white wash.
- **WHAT MUST NOT APPEAR YET:**
  * Counter Card 2.
- **CLEANUP / EXIT:**
  * Card 1 settles.
- **PERSISTENT STATE:**
  * Counter Cards 0 and 1 visible.

--------------------------------------------------
#### ANCHOR: `S03_HOW_MANY_2`
- **Spoken Phrase:** *"and how many 2s we have."* (W0035–W0040)
- **Frame Range:** F587 – F634 (Pause: F634–F655, 21 frames / 700ms)
- **WHAT APPEARS NOW:**
  * Counter Card 2 appears at X: 1100, Y: 540.
  * Title: `"COUNT OF 2s"` in Ice Cyan (`#5CE1E6`).
  * Big dashed digit slot inside the card.
  * Captions: *"and how many 2s we have."*.
- **CENTER-STAGE HERO:**
  * Counter Card 2 (Cyan) completing the triad of counters.
- **CAUSE:**
  * Exact spoken category: *"and how many 2s we have."*.
- **EFFECT:**
  * F587–F620: Card 2 border draws using `RoughBox` in `theme.cyan`; ice cyan wash.
- **WHAT MUST NOT APPEAR YET:**
  * Initial digits `0` inside the cards.
- **CLEANUP / EXIT:**
  * Card 2 settles.
- **PERSISTENT STATE:**
  * All 3 Counter Cards (0, 1, 2) present at Y: 540.

--------------------------------------------------
#### ANCHOR: `S03_COUNTS_ZERO`
- **Spoken Phrase:** *"We start with all three counts at 0."* (W0041–W0048)
- **Frame Range:** F655 – F725 (Pause: F725–F739, 14 frames / 480ms)
- **WHAT APPEARS NOW:**
  * Big chalk digit `"0"` writes in simultaneously inside all 3 counter cards:
    - Card 0: `"0"` in Coral Red
    - Card 1: `"0"` in Warm White
    - Card 2: `"0"` in Ice Cyan
  * Scanning pointer `i` (`PointerLaneV2`, gold `#FFD166`) appears above Slot 0 at Y: 240.
  * Captions: *"We start with all three counts at 0."*.
- **CENTER-STAGE HERO:**
  * The three initialized counters: `count[0] = 0`, `count[1] = 0`, `count[2] = 0`.
- **CAUSE:**
  * Spoken initialization: *"We start with all three counts at 0."*.
- **EFFECT:**
  * F660–F700: All three `"0"`s pop into their cards with scale 0.7 → 1.1 → 1.0.
  * F690–F720: Gold scan pointer `i` points downward onto Slot 0.
- **WHAT MUST NOT APPEAR YET:**
  * Any counter increments.
- **CLEANUP / EXIT:**
  * Digits settle.
- **PERSISTENT STATE:**
  * `count[0]=0, count[1]=0, count[2]=0`, pointer `i` at Slot 0.

---

### ACT 3: Pass 1 — Scanning & Counting 10 Elements (Anchors 20–39 · F739 – F1907)

--------------------------------------------------
#### ANCHOR: `S03_SCAN0_VAL`
- **Spoken Phrase:** *"First value is 2."* (W0049–W0052)
- **Frame Range:** F739 – F778 (Pause: F778–F790, 12 frames / 400ms)
- **WHAT APPEARS NOW:**
  * Pointer `i` highlights Slot 0 (`2`, Cyan). Slot 0 pulses with cyan border.
  * Captions: *"First value is 2."*.
- **CENTER-STAGE HERO:**
  * Slot 0 being inspected (`val = 2`).
- **CAUSE:**
  * Spoken inspection of first element.
- **EFFECT:**
  * F739–F765: Slot 0 lifts slightly (-4px); pointer `i` bobs down with subtle emphasis.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 2 increment (happens on next anchor!).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slot 0 active under pointer `i`.

--------------------------------------------------
#### ANCHOR: `S03_SCAN0_INC`
- **Spoken Phrase:** *"So count of 2 becomes 1."* (W0053–W0058)
- **Frame Range:** F790 – F838 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * Curved chalk beam draws from Slot 0 down into Counter Card 2 (`theme.cyan`).
  * Counter 2 digit mutates: `0` fades up/out, `"1"` pops in with cyan flash.
  * Captions: *"So count of 2 becomes 1."*.
- **CENTER-STAGE HERO:**
  * Counter Card 2 incrementing to `1`.
- **CAUSE:**
  * Spoken rule: *"So count of 2 becomes 1."*.
- **EFFECT:**
  * F795–F825: Curve draws 0 → 1; Counter 2 scales 1.0 → 1.25 → 1.0; digit changes to `1`.
- **WHAT MUST NOT APPEAR YET:**
  * Next slot inspection.
- **CLEANUP / EXIT:**
  * Beam dissolves at F835.
- **PERSISTENT STATE:**
  * `count[0]=0, count[1]=0, count[2]=1`. Pointer moves toward Slot 1.

--------------------------------------------------
#### ANCHOR: `S03_SCAN1_VAL`
- **Spoken Phrase:** *"Next value is 1."* (W0059–W0062)
- **Frame Range:** F838 – F899 (Pause: F899–F913, 14 frames / 480ms)
- **WHAT APPEARS NOW:**
  * Pointer `i` moves smoothly from Slot 0 to Slot 1 (X: 377 → 495).
  * Slot 1 (`1`, White) highlights with warm white border.
  * Captions: *"Next value is 1."*.
- **CENTER-STAGE HERO:**
  * Slot 1 being inspected (`val = 1`).
- **CAUSE:**
  * Spoken inspection: *"Next value is 1."*.
- **EFFECT:**
  * F838–F865: Pointer `i` glides across X: 377 to 495 with `EASE.easeInOutCubic`. Slot 1 pulses white.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 1 increment.
- **CLEANUP / EXIT:**
  * Settle on Slot 1.
- **PERSISTENT STATE:**
  * Pointer at Slot 1.

--------------------------------------------------
#### ANCHOR: `S03_SCAN1_INC`
- **Spoken Phrase:** *"Count of 1 becomes 1."* (W0063–W0067)
- **Frame Range:** F913 – F959 (Pause: F959–F974, 15 frames / 500ms)
- **WHAT APPEARS NOW:**
  * Curved chalk beam from Slot 1 down into Counter Card 1 (`theme.chalkText`).
  * Counter 1 digit mutates: `0` -> `"1"` with white pop.
  * Captions: *"Count of 1 becomes 1."*.
- **CENTER-STAGE HERO:**
  * Counter Card 1 incrementing to `1`.
- **CAUSE:**
  * Spoken rule: *"Count of 1 becomes 1."*.
- **EFFECT:**
  * F915–F945: Beam connects Slot 1 to Card 1; Counter 1 scales up and updates to `1`.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 2.
- **CLEANUP / EXIT:**
  * Beam dissolves.
- **PERSISTENT STATE:**
  * `count[0]=0, count[1]=1, count[2]=1`.

--------------------------------------------------
#### ANCHOR: `S03_SCAN2_VAL`
- **Spoken Phrase:** *"Next value is 2."* (W0068–W0071)
- **Frame Range:** F974 – F1013 (Pause: F1013–F1028, 15 frames / 500ms)
- **WHAT APPEARS NOW:**
  * Pointer `i` moves to Slot 2 (X: 613). Slot 2 (`2`, Cyan) pulses cyan.
  * Captions: *"Next value is 2."*.
- **CENTER-STAGE HERO:**
  * Slot 2 being inspected (`val = 2`).
- **CAUSE:**
  * Spoken inspection: *"Next value is 2."*.
- **EFFECT:**
  * F974–F998: Pointer glides to Slot 2; cyan pulse.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 2 increment.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Pointer at Slot 2.

--------------------------------------------------
#### ANCHOR: `S03_SCAN2_INC`
- **Spoken Phrase:** *"Count of 2 becomes 2."* (W0072–W0076)
- **Frame Range:** F1028 – F1070 (Pause: F1070–F1083, 13 frames / 440ms)
- **WHAT APPEARS NOW:**
  * Chalk beam from Slot 2 down to Counter Card 2 (`theme.cyan`).
  * Counter 2 digit mutates: `1` -> `"2"` with cyan pop.
  * Captions: *"Count of 2 becomes 2."*.
- **CENTER-STAGE HERO:**
  * Counter Card 2 updating to `2`.
- **CAUSE:**
  * Spoken rule: *"Count of 2 becomes 2."*.
- **EFFECT:**
  * F1030–F1060: Beam connects; Counter 2 scales 1.0 → 1.25 → 1.0; digit changes to `2`.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 3.
- **CLEANUP / EXIT:**
  * Beam dissolves.
- **PERSISTENT STATE:**
  * `count[0]=0, count[1]=1, count[2]=2`.

--------------------------------------------------
#### ANCHOR: `S03_SCAN3_VAL`
- **Spoken Phrase:** *"Now we see 0."* (W0077–W0080)
- **Frame Range:** F1083 – F1118 (Pause: F1118–F1136, 18 frames / 600ms)
- **WHAT APPEARS NOW:**
  * Pointer `i` moves to Slot 3 (X: 731). Slot 3 (`0`, Coral Red) pulses red.
  * Captions: *"Now we see 0."*.
- **CENTER-STAGE HERO:**
  * Slot 3 being inspected (`val = 0`).
- **CAUSE:**
  * Spoken inspection: *"Now we see 0."*.
- **EFFECT:**
  * F1083–F1108: Pointer glides to Slot 3; red pulse on slot.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 0 increment.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Pointer at Slot 3.

--------------------------------------------------
#### ANCHOR: `S03_SCAN3_INC`
- **Spoken Phrase:** *"Count of 0 becomes 1."* (W0081–W0085)
- **Frame Range:** F1136 – F1189 (Pause: F1189–F1201, 12 frames / 400ms)
- **WHAT APPEARS NOW:**
  * Chalk beam from Slot 3 down to Counter Card 0 (`theme.warn`).
  * Counter 0 digit mutates: `0` -> `"1"` with red pop.
  * Captions: *"Count of 0 becomes 1."*.
- **CENTER-STAGE HERO:**
  * Counter Card 0 updating to `1`.
- **CAUSE:**
  * Spoken rule: *"Count of 0 becomes 1."*.
- **EFFECT:**
  * F1140–F1175: Beam connects Slot 3 to Card 0; Counter 0 scales up and updates to `1`.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 4.
- **CLEANUP / EXIT:**
  * Beam dissolves.
- **PERSISTENT STATE:**
  * `count[0]=1, count[1]=1, count[2]=2`.

--------------------------------------------------
#### ANCHOR: `S03_SCAN4_VAL`
- **Spoken Phrase:** *"Next value is 2."* (W0086–W0089)
- **Frame Range:** F1201 – F1240 (Pause: F1240–F1256, 16 frames / 520ms)
- **WHAT APPEARS NOW:**
  * Pointer `i` moves to Slot 4 (X: 849). Slot 4 (`2`, Cyan) pulses cyan.
  * Captions: *"Next value is 2."*.
- **CENTER-STAGE HERO:**
  * Slot 4 being inspected (`val = 2`).
- **CAUSE:**
  * Spoken inspection: *"Next value is 2."*.
- **EFFECT:**
  * F1201–F1225: Pointer glides to Slot 4; cyan pulse.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 2 increment.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Pointer at Slot 4.

--------------------------------------------------
#### ANCHOR: `S03_SCAN4_INC`
- **Spoken Phrase:** *"Count of 2 becomes 3."* (W0090–W0094)
- **Frame Range:** F1256 – F1309 (Pause: F1309–F1319, 10 frames / 340ms)
- **WHAT APPEARS NOW:**
  * Chalk beam from Slot 4 down to Counter Card 2 (`theme.cyan`).
  * Counter 2 digit mutates: `2` -> `"3"` with cyan pop.
  * Captions: *"Count of 2 becomes 3."*.
- **CENTER-STAGE HERO:**
  * Counter Card 2 updating to `3`.
- **CAUSE:**
  * Spoken rule: *"Count of 2 becomes 3."*.
- **EFFECT:**
  * F1260–F1295: Beam connects; Counter 2 updates to `3`.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 5.
- **CLEANUP / EXIT:**
  * Beam dissolves.
- **PERSISTENT STATE:**
  * `count[0]=1, count[1]=1, count[2]=3`.

--------------------------------------------------
#### ANCHOR: `S03_SCAN5_VAL`
- **Spoken Phrase:** *"Next value is 1."* (W0095–W0098)
- **Frame Range:** F1319 – F1356 (Pause: F1356–F1376, 20 frames / 680ms)
- **WHAT APPEARS NOW:**
  * Pointer `i` moves to Slot 5 (X: 967). Slot 5 (`1`, White) pulses white.
  * Captions: *"Next value is 1."*.
- **CENTER-STAGE HERO:**
  * Slot 5 being inspected (`val = 1`).
- **CAUSE:**
  * Spoken inspection: *"Next value is 1."*.
- **EFFECT:**
  * F1319–F1345: Pointer glides to Slot 5; white pulse.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 1 increment.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Pointer at Slot 5.

--------------------------------------------------
#### ANCHOR: `S03_SCAN5_INC`
- **Spoken Phrase:** *"Count of 1 becomes 2."* (W0099–W0103)
- **Frame Range:** F1376 – F1422 (Pause: F1422–F1434, 12 frames / 400ms)
- **WHAT APPEARS NOW:**
  * Chalk beam from Slot 5 down to Counter Card 1 (`theme.chalkText`).
  * Counter 1 digit mutates: `1` -> `"2"` with white pop.
  * Captions: *"Count of 1 becomes 2."*.
- **CENTER-STAGE HERO:**
  * Counter Card 1 updating to `2`.
- **CAUSE:**
  * Spoken rule: *"Count of 1 becomes 2."*.
- **EFFECT:**
  * F1380–F1410: Beam connects; Counter 1 updates to `2`.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 6.
- **CLEANUP / EXIT:**
  * Beam dissolves.
- **PERSISTENT STATE:**
  * `count[0]=1, count[1]=2, count[2]=3`.

--------------------------------------------------
#### ANCHOR: `S03_SCAN6_VAL`
- **Spoken Phrase:** *"Next value is 0."* (W0104–W0107)
- **Frame Range:** F1434 – F1477 (Pause: F1477–F1496, 19 frames / 640ms)
- **WHAT APPEARS NOW:**
  * Pointer `i` moves to Slot 6 (X: 1085). Slot 6 (`0`, Red) pulses red.
  * Captions: *"Next value is 0."*.
- **CENTER-STAGE HERO:**
  * Slot 6 being inspected (`val = 0`).
- **CAUSE:**
  * Spoken inspection: *"Next value is 0."*.
- **EFFECT:**
  * F1434–F1460: Pointer glides to Slot 6; red pulse.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 0 increment.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Pointer at Slot 6.

--------------------------------------------------
#### ANCHOR: `S03_SCAN6_INC`
- **Spoken Phrase:** *"Count of 0 becomes 2."* (W0108–W0112)
- **Frame Range:** F1496 – F1550 (Pause: F1550–F1561, 11 frames / 360ms)
- **WHAT APPEARS NOW:**
  * Chalk beam from Slot 6 down to Counter Card 0 (`theme.warn`).
  * Counter 0 digit mutates: `1` -> `"2"` with red pop.
  * Captions: *"Count of 0 becomes 2."*.
- **CENTER-STAGE HERO:**
  * Counter Card 0 updating to `2`.
- **CAUSE:**
  * Spoken rule: *"Count of 0 becomes 2."*.
- **EFFECT:**
  * F1500–F1535: Beam connects; Counter 0 updates to `2`.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 7.
- **CLEANUP / EXIT:**
  * Beam dissolves.
- **PERSISTENT STATE:**
  * `count[0]=2, count[1]=2, count[2]=3`.

--------------------------------------------------
#### ANCHOR: `S03_SCAN7_VAL`
- **Spoken Phrase:** *"Next value is 1."* (W0113–W0116)
- **Frame Range:** F1561 – F1604 (Pause: F1604–F1613, 9 frames / 300ms)
- **WHAT APPEARS NOW:**
  * Pointer `i` moves to Slot 7 (X: 1203). Slot 7 (`1`, White) pulses white.
  * Captions: *"Next value is 1."*.
- **CENTER-STAGE HERO:**
  * Slot 7 being inspected (`val = 1`).
- **CAUSE:**
  * Spoken inspection: *"Next value is 1."*.
- **EFFECT:**
  * F1561–F1588: Pointer glides to Slot 7; white pulse.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 1 increment.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Pointer at Slot 7.

--------------------------------------------------
#### ANCHOR: `S03_SCAN7_INC`
- **Spoken Phrase:** *"Count of 1 becomes 3."* (W0117–W0121)
- **Frame Range:** F1613 – F1662 (Pause: F1662–F1672, 10 frames / 340ms)
- **WHAT APPEARS NOW:**
  * Chalk beam from Slot 7 down to Counter Card 1 (`theme.chalkText`).
  * Counter 1 digit mutates: `2` -> `"3"` with white pop.
  * Captions: *"Count of 1 becomes 3."*.
- **CENTER-STAGE HERO:**
  * Counter Card 1 updating to `3`.
- **CAUSE:**
  * Spoken rule: *"Count of 1 becomes 3."*.
- **EFFECT:**
  * F1615–F1648: Beam connects; Counter 1 updates to `3`.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 8.
- **CLEANUP / EXIT:**
  * Beam dissolves.
- **PERSISTENT STATE:**
  * `count[0]=2, count[1]=3, count[2]=3`.

--------------------------------------------------
#### ANCHOR: `S03_SCAN8_VAL`
- **Spoken Phrase:** *"Next value is 0."* (W0122–W0125)
- **Frame Range:** F1672 – F1714 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * Pointer `i` moves to Slot 8 (X: 1321). Slot 8 (`0`, Red) pulses red.
  * Captions: *"Next value is 0."*.
- **CENTER-STAGE HERO:**
  * Slot 8 being inspected (`val = 0`).
- **CAUSE:**
  * Spoken inspection: *"Next value is 0."*.
- **EFFECT:**
  * F1672–F1700: Pointer glides to Slot 8; red pulse.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 0 increment.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Pointer at Slot 8.

--------------------------------------------------
#### ANCHOR: `S03_SCAN8_INC`
- **Spoken Phrase:** *"Count of 0 becomes 3"* (W0126–W0130)
- **Frame Range:** F1714 – F1776 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * Chalk beam from Slot 8 down to Counter Card 0 (`theme.warn`).
  * Counter 0 digit mutates: `2` -> `"3"` with red pop.
  * Captions: *"Count of 0 becomes 3"*.
- **CENTER-STAGE HERO:**
  * Counter Card 0 updating to `3`.
- **CAUSE:**
  * Spoken rule: *"Count of 0 becomes 3"*.
- **EFFECT:**
  * F1720–F1760: Beam connects; Counter 0 updates to `3`.
- **WHAT MUST NOT APPEAR YET:**
  * Slot 9.
- **CLEANUP / EXIT:**
  * Beam dissolves.
- **PERSISTENT STATE:**
  * `count[0]=3, count[1]=3, count[2]=3`.

--------------------------------------------------
#### ANCHOR: `S03_SCAN9_VAL`
- **Spoken Phrase:** *"and the last value is 2."* (W0131–W0136)
- **Frame Range:** F1776 – F1838 (Pause: F1838–F1844, 6 frames / 200ms)
- **WHAT APPEARS NOW:**
  * Pointer `i` moves to the final slot, Slot 9 (X: 1439). Slot 9 (`2`, Cyan) pulses cyan.
  * Captions: *"and the last value is 2."*.
- **CENTER-STAGE HERO:**
  * Slot 9 being inspected (`val = 2`, the final element).
- **CAUSE:**
  * Spoken inspection of last element.
- **EFFECT:**
  * F1776–F1810: Pointer glides to Slot 9; cyan pulse.
- **WHAT MUST NOT APPEAR YET:**
  * Counter 2 increment.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Pointer at Slot 9.

--------------------------------------------------
#### ANCHOR: `S03_SCAN9_INC`
- **Spoken Phrase:** *"Count of 2 becomes 4."* (W0137–W0141)
- **Frame Range:** F1844 – F1894 (Pause: F1894–F1907, 13 frames / 440ms)
- **WHAT APPEARS NOW:**
  * Chalk beam from Slot 9 down to Counter Card 2 (`theme.cyan`).
  * Counter 2 digit mutates: `3` -> `"4"` with cyan pop.
  * Captions: *"Count of 2 becomes 4."*.
- **CENTER-STAGE HERO:**
  * Counter Card 2 reaching its final count `4`.
- **CAUSE:**
  * Spoken rule: *"Count of 2 becomes 4."*.
- **EFFECT:**
  * F1845–F1880: Beam connects; Counter 2 updates to `4`.
  * F1880–F1894: Pass 1 scan completes!
- **WHAT MUST NOT APPEAR YET:**
  * Pass 2 rewrite actions.
- **CLEANUP / EXIT:**
  * Beam dissolves; scan pointer `i` begins fade-out.
- **PERSISTENT STATE:**
  * Complete Pass 1 counts: `count[0] = 3`, `count[1] = 3`, `count[2] = 4`.

---

### ACT 4: Pass 1 Summary & Total Verification (Anchors 40–43 · F1907 – F2072)

--------------------------------------------------
#### ANCHOR: `S03_FINAL_COUNTS`
- **Spoken Phrase:** *"So finally,"* (W0142–W0143)
- **Frame Range:** F1907 – F1924 (Pause: F1924–F1945, 21 frames / 700ms)
- **WHAT APPEARS NOW:**
  * Scan pointer `i` completely fades out.
  * All 3 Counter Cards glow softly in unison.
  * Captions: *"So finally,"*.
- **CENTER-STAGE HERO:**
  * The completed Counter Triad: `[ 3 | 3 | 4 ]`.
- **CAUSE:**
  * Speaker prepares to summarize the final counting results.
- **EFFECT:**
  * F1907–F1924: Pointer fades out. Counter container receives a gentle gold border sheen (`theme.pivot`).
- **WHAT MUST NOT APPEAR YET:**
  * Rewrite animation.
- **COMPREHENSION HOLD:**
  * F1924–F1945 (21 frames, 700ms pause): Visual hold locking the final frequency totals.
- **CLEANUP / EXIT:**
  * Pointer gone.
- **PERSISTENT STATE:**
  * Counters locked at `count[0]=3, count[1]=3, count[2]=4`.

--------------------------------------------------
#### ANCHOR: `S03_FINAL_0`
- **Spoken Phrase:** *"we have 3 zeros,"* (W0144–W0147)
- **Frame Range:** F1945 – F1975 (Pause: F1975–F1992, 17 frames / 560ms)
- **WHAT APPEARS NOW:**
  * Counter Card 0 pulses prominently with a bright coral red chalk ring.
  * Subtext below digit 3: `"3 ZEROES TO PLACE"`.
  * Captions: *"we have 3 zeros,"*.
- **CENTER-STAGE HERO:**
  * Counter Card 0 (`count[0] = 3`).
- **CAUSE:**
  * Exact spoken summary: *"we have 3 zeros,"*.
- **EFFECT:**
  * F1945–F1965: Card 0 scales 1.0 → 1.1 → 1.0; red halo bloom.
- **WHAT MUST NOT APPEAR YET:**
  * Highlights on Cards 1 and 2.
- **COMPREHENSION HOLD:**
  * F1975–F1992 (17 frames, 560ms pause).
- **CLEANUP / EXIT:**
  * Card 0 halo settles.
- **PERSISTENT STATE:**
  * 3 zeros registered.

--------------------------------------------------
#### ANCHOR: `S03_FINAL_1`
- **Spoken Phrase:** *"3 ones and"* (W0148–W0150)
- **Frame Range:** F1992 – F2031 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * Counter Card 1 pulses prominently with a bright warm white chalk ring.
  * Subtext below digit 3: `"3 ONES TO PLACE"`.
  * Captions: *"3 ones and"*.
- **CENTER-STAGE HERO:**
  * Counter Card 1 (`count[1] = 3`).
- **CAUSE:**
  * Exact spoken summary: *"3 ones and"*.
- **EFFECT:**
  * F1992–F2018: Card 1 scales 1.0 → 1.1 → 1.0; white halo bloom.
- **WHAT MUST NOT APPEAR YET:**
  * Card 2 highlight.
- **CLEANUP / EXIT:**
  * Card 1 halo settles.
- **PERSISTENT STATE:**
  * 3 ones registered.

--------------------------------------------------
#### ANCHOR: `S03_FINAL_2`
- **Spoken Phrase:** *"4 twos."* (W0151–W0152)
- **Frame Range:** F2031 – F2051 (Pause: F2051–F2072, 21 frames / 700ms)
- **WHAT APPEARS NOW:**
  * Counter Card 2 pulses prominently with a bright ice cyan chalk ring.
  * Subtext below digit 4: `"4 TWOS TO PLACE"`.
  * Mathematical verification tag appears above counters: `"3 + 3 + 4 = 10 ELEMENTS ✓"`.
  * Captions: *"4 twos."*.
- **CENTER-STAGE HERO:**
  * Counter Card 2 (`count[2] = 4`) and the verification total `10 / 10`.
- **CAUSE:**
  * Exact spoken summary: *"4 twos."*.
- **EFFECT:**
  * F2031–F2048: Card 2 scales 1.0 → 1.1 → 1.0; cyan halo bloom.
  * F2045–F2070: Verification tag draws with green chalk checkmark (`theme.good`).
- **WHAT MUST NOT APPEAR YET:**
  * Rewrite animation.
- **COMPREHENSION HOLD:**
  * F2051–F2072 (21 frames, 700ms pause): Crucial pause: total frequency matches array length exactly!
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Verified frequency partition: `3 zeros, 3 ones, 4 twos`.

---

### ACT 5: Pass 2 — In-Place Overwrite Setup (Anchors 44–45 · F2072 – F2189)

--------------------------------------------------
#### ANCHOR: `S03_REWRITE`
- **Spoken Phrase:** *"Now we use these counts"* (W0153–W0157)
- **Frame Range:** F2072 – F2116 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * Phase Banner at Y: 780 updates:
    `"PHASE 2: IN-PLACE OVERWRITE FROM COUNTS"` (Gold border `theme.pivot`).
  * Captions: *"Now we use these counts"*.
- **CENTER-STAGE HERO:**
  * The transition from Phase 1 to Phase 2.
- **CAUSE:**
  * Speaker announces that Pass 2 is starting.
- **EFFECT:**
  * F2072–F2105: Phase banner swaps title with smooth fade-in; gold underline draws.
- **WHAT MUST NOT APPEAR YET:**
  * Overwrite values inside slots.
- **CLEANUP / EXIT:**
  * Phase 1 text replaced.
- **PERSISTENT STATE:**
  * Phase 2 active.

--------------------------------------------------
#### ANCHOR: `S03_SAME_ARRAY`
- **Spoken Phrase:** *"to rewrite the same array."* (W0158–W0162)
- **Frame Range:** F2116 – F2169 (Pause: F2169–F2189, 20 frames / 660ms)
- **WHAT APPEARS NOW:**
  * Chalk lock icon (`🔒`) on array label `"nums"`.
  * Write cursor (`PointerLaneV2`, label `"write"`, color: `theme.good`) appears pointing at Slot 0.
  * Captions: *"to rewrite the same array."*.
- **CENTER-STAGE HERO:**
  * The Master Array at Y: 320 with write cursor at index 0.
- **CAUSE:**
  * Speaker emphasizes the in-place contract: *"to rewrite the same array."*.
- **EFFECT:**
  * F2116–F2145: Write cursor appears at Slot 0.
  * F2130–F2165: Lock icon glows on `"nums"`, emphasizing that memory addresses do NOT change.
- **WHAT MUST NOT APPEAR YET:**
  * Actual overwriting of slot values.
- **COMPREHENSION HOLD:**
  * F2169–F2189 (20 frames, 660ms pause): Visual lock before overwriting begins.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Write cursor positioned at Slot 0.

---

### ACT 6: Pass 2 — Overwriting Array (Anchors 46–51 · F2189 – F2378)

--------------------------------------------------
#### ANCHOR: `S03_WRITE_0_CUE`
- **Spoken Phrase:** *"First,"* (W0163)
- **Frame Range:** F2189 – F2201 (Pause: F2201–F2212, 11 frames / 360ms)
- **WHAT APPEARS NOW:**
  * A dashed bracket spans slots 0..2 labeled `"TARGET: 3 ZEROES"`.
  * Counter Card 0 pulses.
  * Captions: *"First,"*.
- **CENTER-STAGE HERO:**
  * Slots 0, 1, 2 bounded under the write bracket.
- **CAUSE:**
  * Transition word: *"First,"*.
- **EFFECT:**
  * F2189–F2199: Bracket draws under slots 0..2 in `theme.warn`.
- **WHAT MUST NOT APPEAR YET:**
  * Overwritten digits.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slots 0..2 primed for zeroes.

--------------------------------------------------
#### ANCHOR: `S03_WRITE_0`
- **Spoken Phrase:** *"write 3 zeros,"* (W0164–W0166)
- **Frame Range:** F2212 – F2243 (Pause: F2243–F2256, 13 frames / 440ms)
- **WHAT APPEARS NOW:**
  * Slots 0, 1, 2 mutate in-place simultaneously:
    - Slot 0 (`2` -> `0`, Coral Red)
    - Slot 1 (`1` -> `0`, Coral Red)
    - Slot 2 (`2` -> `0`, Coral Red)
  * Write cursor advances across slots 0, 1, 2 and halts at Slot 3.
  * Counter Card 0 badge changes to confirmed green checkmark (`✓ 3 WRITTEN`).
  * Captions: *"write 3 zeros,"*.
- **CENTER-STAGE HERO:**
  * The in-place overwrite of slots 0..2 with `[0, 0, 0]`.
- **CAUSE:**
  * Exact spoken action: *"write 3 zeros,"*.
- **EFFECT:**
  * F2212–F2235: Old values dissolve; new bright Coral Red `"0"`s pop into slots 0, 1, 2 with scale 0.8 → 1.15 → 1.0.
  * Red slot backgrounds illuminate with `rgba(255, 118, 117, 0.18)`.
  * F2225–F2245: Write cursor glides from Slot 0 across to Slot 3.
- **WHAT MUST NOT APPEAR YET:**
  * Ones or Twos overwrites.
- **COMPREHENSION HOLD:**
  * F2243–F2256 (13 frames, 440ms pause): Learner sees the red zeroes prefix take shape in-place.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * `nums[0..2] = [0, 0, 0]`. Write cursor at Slot 3.

--------------------------------------------------
#### ANCHOR: `S03_WRITE_1_CUE`
- **Spoken Phrase:** *"then"* (W0167)
- **Frame Range:** F2256 – F2270 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * A dashed bracket spans slots 3..5 labeled `"TARGET: 3 ONES"`.
  * Counter Card 1 pulses.
  * Captions: *"then"*.
- **CENTER-STAGE HERO:**
  * Slots 3, 4, 5 bounded under the write bracket.
- **CAUSE:**
  * Transition word: *"then"*.
- **EFFECT:**
  * F2256–F2268: Bracket draws under slots 3..5 in `theme.chalkText`.
- **WHAT MUST NOT APPEAR YET:**
  * Overwritten digits.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slots 3..5 primed for ones.

--------------------------------------------------
#### ANCHOR: `S03_WRITE_1`
- **Spoken Phrase:** *"write 3 ones."* (W0168–W0170)
- **Frame Range:** F2270 – F2301 (Pause: F2301–F2319, 18 frames / 600ms)
- **WHAT APPEARS NOW:**
  * Slots 3, 4, 5 mutate in-place:
    - Slot 3 (`0` -> `1`, Warm White)
    - Slot 4 (`2` -> `1`, Warm White)
    - Slot 5 (`1` stays `1`, confirms Warm White)
  * Write cursor advances across slots 3, 4, 5 and halts at Slot 6.
  * Counter Card 1 badge changes to confirmed green checkmark (`✓ 3 WRITTEN`).
  * Captions: *"write 3 ones."*.
- **CENTER-STAGE HERO:**
  * The in-place overwrite of slots 3..5 with `[1, 1, 1]`.
- **CAUSE:**
  * Exact spoken action: *"write 3 ones."*.
- **EFFECT:**
  * F2270–F2295: Values mutate to bright Warm White `"1"`s with pop scale.
  * Slot backgrounds take on soft white wash `rgba(248, 246, 240, 0.12)`.
  * F2285–F2305: Write cursor glides across to Slot 6.
- **WHAT MUST NOT APPEAR YET:**
  * Twos overwrites.
- **COMPREHENSION HOLD:**
  * F2301–F2319 (18 frames, 600ms pause): Learner sees both Red prefix and White middle in-place!
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * `nums[0..5] = [0, 0, 0, 1, 1, 1]`. Write cursor at Slot 6.

--------------------------------------------------
#### ANCHOR: `S03_WRITE_2_CUE`
- **Spoken Phrase:** *"And finally,"* (W0171–W0172)
- **Frame Range:** F2319 – F2339 (Pause: F2339–F2349, 10 frames / 340ms)
- **WHAT APPEARS NOW:**
  * A dashed bracket spans slots 6..9 labeled `"TARGET: 4 TWOS"`.
  * Counter Card 2 pulses.
  * Captions: *"And finally,"*.
- **CENTER-STAGE HERO:**
  * Slots 6, 7, 8, 9 bounded under the write bracket.
- **CAUSE:**
  * Transition phrase: *"And finally,"*.
- **EFFECT:**
  * F2319–F2335: Bracket draws under slots 6..9 in `theme.cyan`.
- **WHAT MUST NOT APPEAR YET:**
  * Overwritten digits.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slots 6..9 primed for twos.

--------------------------------------------------
#### ANCHOR: `S03_WRITE_2`
- **Spoken Phrase:** *"write 4 twos."* (W0173–W0175)
- **Frame Range:** F2349 – F2378 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * Slots 6, 7, 8, 9 mutate in-place:
    - Slot 6 (`0` -> `2`, Ice Cyan)
    - Slot 7 (`1` -> `2`, Ice Cyan)
    - Slot 8 (`0` -> `2`, Ice Cyan)
    - Slot 9 (`2` stays `2`, confirms Ice Cyan)
  * Write cursor reaches end of array (Slot 9).
  * Counter Card 2 badge changes to confirmed green checkmark (`✓ 4 WRITTEN`).
  * Captions: *"write 4 twos."*.
- **CENTER-STAGE HERO:**
  * The in-place overwrite of slots 6..9 with `[2, 2, 2, 2]`.
- **CAUSE:**
  * Exact spoken action: *"write 4 twos."*.
- **EFFECT:**
  * F2349–F2375: Values mutate to bright Ice Cyan `"2"`s with pop scale.
  * Slot backgrounds take on soft cyan wash `rgba(92, 225, 230, 0.18)`.
  * F2365–F2378: Write cursor completes scan and retires.
- **WHAT MUST NOT APPEAR YET:**
  * Output verification labels.
- **CLEANUP / EXIT:**
  * Write cursor fades out.
- **PERSISTENT STATE:**
  * Entire array overwritten: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`.

---

### ACT 7: Verification of Sorted Output & Key Rule (Anchors 52–56 · F2378 – F2857)

--------------------------------------------------
#### ANCHOR: `S03_RESULT`
- **Spoken Phrase:** *"Now the array becomes"* (W0176–W0179)
- **Frame Range:** F2378 – F2422 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * Brackets beneath array clear away.
  * Three broad color partition ribbons illuminate beneath the array:
    - Red ribbon: slots 0..2
    - White ribbon: slots 3..5
    - Blue ribbon: slots 6..9
  * Captions: *"Now the array becomes"*.
- **CENTER-STAGE HERO:**
  * The freshly sorted Master Array.
- **CAUSE:**
  * Narration introduces the final verification of the array.
- **EFFECT:**
  * F2380–F2415: Subtle golden spotlight sweeps across the entire array from left to right.
- **WHAT MUST NOT APPEAR YET:**
  * Final summary badges.
- **CLEANUP / EXIT:**
  * Brackets retired.
- **PERSISTENT STATE:**
  * Array in perfect sorted state.

--------------------------------------------------
#### ANCHOR: `S03_OUT0A`
- **Spoken Phrase:** *"0,"* (W0180)
- **Frame Range:** F2422 – F2451 (Pause: F2451–F2465, 14 frames / 480ms)
- **WHAT APPEARS NOW:**
  * Slot 0 (`0`) pulses bright red.
  * Captions: *"0,"*.
- **CENTER-STAGE HERO:**
  * Slot 0.
- **CAUSE:**
  * Spoken verification: *"0,"*.
- **EFFECT:**
  * F2422–F2440: Slot 0 scales 1.0 → 1.1 → 1.0.
- **WHAT MUST NOT APPEAR YET:**
  * Highlight on slot 1 or subsequent slots.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slot 0 confirmed.

--------------------------------------------------
#### ANCHOR: `S03_OUT0B`
- **Spoken Phrase:** *"0,"* (W0181)
- **Frame Range:** F2465 – F2489 (Pause: F2489–F2501, 12 frames / 400ms)
- **WHAT APPEARS NOW:**
  * Slot 1 (`0`) pulses bright red.
  * Captions: *"0,"*.
- **CENTER-STAGE HERO:**
  * Slot 1.
- **CAUSE:**
  * Spoken verification: *"0,"*.
- **EFFECT:**
  * F2465–F2480: Slot 1 scales 1.0 → 1.1 → 1.0.
- **WHAT MUST NOT APPEAR YET:**
  * Highlight on slot 2 or subsequent slots.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slot 1 confirmed.

--------------------------------------------------
#### ANCHOR: `S03_OUT0C`
- **Spoken Phrase:** *"0,"* (W0182)
- **Frame Range:** F2501 – F2518 (Pause: F2518–F2533, 15 frames / 500ms)
- **WHAT APPEARS NOW:**
  * Slot 2 (`0`) pulses bright red.
  * Subtext: `"ALL 0s SORTED"` (`theme.warn`).
  * Captions: *"0,"*.
- **CENTER-STAGE HERO:**
  * Slot 2.
- **CAUSE:**
  * Spoken verification: *"0,"*.
- **EFFECT:**
  * F2501–F2515: Slot 2 scales 1.0 → 1.1 → 1.0.
- **WHAT MUST NOT APPEAR YET:**
  * Highlight on slot 3 (ones partition).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Red block confirmed.

--------------------------------------------------
#### ANCHOR: `S03_OUT1A`
- **Spoken Phrase:** *"1,"* (W0183)
- **Frame Range:** F2533 – F2548 (Pause: F2548–F2561, 13 frames / 440ms)
- **WHAT APPEARS NOW:**
  * Slot 3 (`1`) pulses bright white.
  * Captions: *"1,"*.
- **CENTER-STAGE HERO:**
  * Slot 3.
- **CAUSE:**
  * Spoken verification: *"1,"*.
- **EFFECT:**
  * F2533–F2545: Slot 3 scales up and settles.
- **WHAT MUST NOT APPEAR YET:**
  * Highlight on slot 4 or subsequent slots.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slot 3 confirmed.

--------------------------------------------------
#### ANCHOR: `S03_OUT1B`
- **Spoken Phrase:** *"1,"* (W0184)
- **Frame Range:** F2561 – F2582 (Pause: F2582–F2588, 6 frames / 200ms)
- **WHAT APPEARS NOW:**
  * Slot 4 (`1`) pulses bright white.
  * Captions: *"1,"*.
- **CENTER-STAGE HERO:**
  * Slot 4.
- **CAUSE:**
  * Spoken verification: *"1,"*.
- **EFFECT:**
  * F2561–F2575: Slot 4 scales up and settles.
- **WHAT MUST NOT APPEAR YET:**
  * Highlight on slot 5 or subsequent slots.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slot 4 confirmed.

--------------------------------------------------
#### ANCHOR: `S03_OUT1C`
- **Spoken Phrase:** *"1,"* (W0185)
- **Frame Range:** F2588 – F2607 (Pause: F2607–F2613, 6 frames / 200ms)
- **WHAT APPEARS NOW:**
  * Slot 5 (`1`) pulses bright white.
  * Subtext: `"ALL 1s SORTED"` (`theme.chalkText`).
  * Captions: *"1,"*.
- **CENTER-STAGE HERO:**
  * Slot 5.
- **CAUSE:**
  * Spoken verification: *"1,"*.
- **EFFECT:**
  * F2588–F2602: Slot 5 scales up and settles.
- **WHAT MUST NOT APPEAR YET:**
  * Highlight on slot 6 (twos partition).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * White block confirmed.

--------------------------------------------------
#### ANCHOR: `S03_OUT2A`
- **Spoken Phrase:** *"2,"* (W0186)
- **Frame Range:** F2613 – F2627 (Pause: F2627–F2645, 18 frames / 600ms)
- **WHAT APPEARS NOW:**
  * Slot 6 (`2`) pulses bright cyan.
  * Captions: *"2,"*.
- **CENTER-STAGE HERO:**
  * Slot 6.
- **CAUSE:**
  * Spoken verification: *"2,"*.
- **EFFECT:**
  * F2613–F2625: Slot 6 scales up and settles.
- **WHAT MUST NOT APPEAR YET:**
  * Highlight on slot 7 or subsequent slots.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slot 6 confirmed.

--------------------------------------------------
#### ANCHOR: `S03_OUT2B`
- **Spoken Phrase:** *"2,"* (W0187)
- **Frame Range:** F2645 – F2659 (Pause: F2659–F2674, 15 frames / 500ms)
- **WHAT APPEARS NOW:**
  * Slot 7 (`2`) pulses bright cyan.
  * Captions: *"2,"*.
- **CENTER-STAGE HERO:**
  * Slot 7.
- **CAUSE:**
  * Spoken verification: *"2,"*.
- **EFFECT:**
  * F2645–F2655: Slot 7 scales up and settles.
- **WHAT MUST NOT APPEAR YET:**
  * Highlight on slot 8 or subsequent slots.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slot 7 confirmed.

--------------------------------------------------
#### ANCHOR: `S03_OUT2C`
- **Spoken Phrase:** *"2,"* (W0188)
- **Frame Range:** F2674 – F2698 (Pause: 0 frames, seamless)
- **WHAT APPEARS NOW:**
  * Slot 8 (`2`) pulses bright cyan.
  * Captions: *"2,"*.
- **CENTER-STAGE HERO:**
  * Slot 8.
- **CAUSE:**
  * Spoken verification: *"2,"*.
- **EFFECT:**
  * F2674–F2690: Slot 8 scales up and settles.
- **WHAT MUST NOT APPEAR YET:**
  * Highlight on slot 9 (final slot).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Slot 8 confirmed.

--------------------------------------------------
#### ANCHOR: `S03_OUT2D`
- **Spoken Phrase:** *"2."* (W0189)
- **Frame Range:** F2698 – F2711 (Pause: F2711–F2725, 14 frames / 480ms)
- **WHAT APPEARS NOW:**
  * Slot 9 (`2`) pulses bright cyan.
  * Subtext: `"ALL 2s SORTED"` (`theme.cyan`).
  * Captions: *"2."*.
- **CENTER-STAGE HERO:**
  * Slot 9 concluding output verification.
- **CAUSE:**
  * Spoken verification: *"2."*.
- **EFFECT:**
  * F2698–F2711: Slot 9 scales up and settles.
- **WHAT MUST NOT APPEAR YET:**
  * The final green checkmark completion banner.
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Complete sorted state verified.

--------------------------------------------------
#### ANCHOR: `S03_SORTED`
- **Spoken Phrase:** *"So the array is correctly sorted."* (W0190–W0195)
- **Frame Range:** F2725 – F2767 (Pause: F2767–F2776, 9 frames / 300ms)
- **WHAT APPEARS NOW:**
  * Green checkmark banner stamps above the array at Y: 180:
    `"✓ ARRAY CORRECTLY SORTED IN NON-DECREASING ORDER"` (`theme.good`).
  * Captions: *"So the array is correctly sorted."*.
- **CENTER-STAGE HERO:**
  * The completed sorted array with confirmation stamp.
- **CAUSE:**
  * Spoken confirmation: *"So the array is correctly sorted."*.
- **EFFECT:**
  * F2725–F2755: Green banner stamps with soft pop; gold sheen flows across the 10 slots.
- **WHAT MUST NOT APPEAR YET:**
  * Complexity comparison.
- **COMPREHENSION HOLD:**
  * F2767–F2776 (9 frames, 300ms pause).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Verified sorted array on stage.

--------------------------------------------------
#### ANCHOR: `S03_SIMPLE`
- **Spoken Phrase:** *"The idea is simple."* (W0196–W0199)
- **Frame Range:** F2776 – F2801 (Pause: F2801–F2812, 11 frames / 360ms)
- **WHAT APPEARS NOW:**
  * Summary card appears at Y: 760:
    `"THE CORE PRINCIPLE"` (Double chalk border).
  * Captions: *"The idea is simple."*.
- **CENTER-STAGE HERO:**
  * Summary Card at Y: 760.
- **CAUSE:**
  * Spoken transition to algorithmic takeaway: *"The idea is simple."*.
- **EFFECT:**
  * F2776–F2798: Summary container draws with `RoughBox` in gold chalk (`theme.pivot`).
- **WHAT MUST NOT APPEAR YET:**
  * The final takeaway slogan.
- **COMPREHENSION HOLD:**
  * F2801–F2812 (11 frames, 360ms pause).
- **CLEANUP / EXIT:**
  * Settle.
- **PERSISTENT STATE:**
  * Summary card open.

--------------------------------------------------
#### ANCHOR: `S03_COUNT_THEN_REWRITE`
- **Spoken Phrase:** *"First count, then rewrite."* (W0200–W0203)
- **Frame Range:** F2812 – F2857 (Total scene end: F2857)
- **WHAT APPEARS NOW:**
  * Golden takeaway headline stamps inside the summary card:
    `"FIRST COUNT (PASS 1), THEN REWRITE (PASS 2)"`.
  * Complexity metrics badge appears at top-right (Y: 70):
    `"TIME: O(2n) = O(n) · SPACE: O(1)"` (`theme.cyan`).
  * Word-synced captions:
    * F2812–F2826: *"First"* (W0200)
    * F2826–F2837: *"count,"* (W0201)
    * F2837–F2845: *"then"* (W0202)
    * F2845–F2857: *"rewrite."* (W0203)
- **CENTER-STAGE HERO:**
  * The definitive Takeaway Lock: `"First count, then rewrite."`.
- **CAUSE:**
  * Climax of Scene 03 narration.
- **EFFECT:**
  * F2812–F2840: Takeaway text illuminates in bold gold chalk (`fonts.display`); complexity pill snaps into top-right.
  * F2840–F2857 (17 frames): Rock-solid stable hold through the end of the audio.
- **WHAT MUST NOT APPEAR YET:**
  * Code scene transitions; DNF comparisons.
- **CLEANUP / EXIT:**
  * Handoff provenance: Array geometry and sorted state hold perfectly through Frame 2857 for seamless transition into Scene 04 (Counting Code).
- **PERSISTENT STATE:**
  * Scene 03 completes at Frame 2857.

---

## 5. Critical-Frame Review Checklist

| Checkpoint | Frame | Timestamp | Anchor | Invariant Criteria |
|---|---|---|---|---|
| **CP01** | **F50** | 1.67s | `S03_START` | Header settles; 10 raw slots `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]` inherited from Scene 02. |
| **CP02** | **F150** | 5.00s | `S03_R0` | Orientation read pass: Slot 0 pulses cyan on spoken word "2". |
| **CP03** | **F440** | 14.67s | `S03_NO_MOVE` | Red dashed swap arrow between slots 0 and 1 struck through with red cross `✖`. |
| **CP04** | **F620** | 20.67s | `S03_HOW_MANY_2` | All 3 Counter Cards visible at Y: 540 (0: Red, 1: White, 2: Cyan). Digits not yet shown. |
| **CP05** | **F700** | 23.33s | `S03_COUNTS_ZERO` | All 3 counters initialized to `0`. Gold scan pointer `i` points at Slot 0. |
| **CP06** | **F810** | 27.00s | `S03_SCAN0_INC` | Scan step 0: Slot 0 inspected (`2`); Counter 2 updates to `1` with cyan pulse. |
| **CP07** | **F1160** | 38.67s | `S03_SCAN3_INC` | Scan step 3: Slot 3 inspected (`0`); Counter 0 updates to `1` with red pulse. |
| **CP08** | **F1630** | 54.33s | `S03_SCAN7_INC` | Scan step 7: Slot 7 inspected (`1`); Counter 1 updates to `3`. Current counts: 2, 3, 3. |
| **CP09** | **F1880** | 62.67s | `S03_SCAN9_INC` | Final scan step: Slot 9 inspected (`2`); Counter 2 updates to `4`. Pass 1 scan complete! |
| **CP10** | **F2040** | 68.00s | `S03_FINAL_2` | Summary counts locked: `[3, 3, 4]`. Verification tag: `3 + 3 + 4 = 10 ✓`. |
| **CP11** | **F2140** | 71.33s | `S03_SAME_ARRAY` | Pass 2 setup: Lock on `nums`; write cursor at Slot 0. |
| **CP12** | **F2230** | 74.33s | `S03_WRITE_0` | Overwriting slots 0..2 with `[0, 0, 0]` in Coral Red. |
| **CP13** | **F2285** | 76.17s | `S03_WRITE_1` | Overwriting slots 3..5 with `[1, 1, 1]` in Warm White. |
| **CP14** | **F2360** | 78.67s | `S03_WRITE_2` | Overwriting slots 6..9 with `[2, 2, 2, 2]` in Ice Cyan. |
| **CP15** | **F2750** | 91.67s | `S03_SORTED` | Fully sorted array `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]` with green confirmation stamp. |
| **CP16** | **F2850** | 95.00s | `S03_COUNT_THEN_REWRITE`| Takeaway locked: `"FIRST COUNT, THEN REWRITE"`. O(2n) time, O(1) space. |

---

## 6. QA Matrix against Course Invariants

- [x] **Total Frames Check:** Exactly 2,857 frames = 95.220s at 30 FPS.
- [x] **Anchor Traceability:** All 56 anchor IDs map 1:1 to `sync/03-counting-trace.anchors.json`.
- [x] **Zero Guessed Timings:** All frame numbers, word IDs, and pauses strictly derived from `03-counting-trace.json`.
- [x] **Algorithm Truth:** Exactly matches `03-dry-run-trace.md` (Pass 1 counts: 3 zeros, 3 ones, 4 twos; Pass 2 in-place rewrite).
- [x] **Color System Invariants:**
  - `0` = Coral Red (`#FF7675` / `theme.warn`)
  - `1` = Warm White (`#F8F6F0` / `theme.chalkText`)
  - `2` = Ice Cyan / Blue (`#5CE1E6` / `theme.cyan`)
- [x] **Fixed-Slot Law:** Array slots stay stationary at Y: 320. Only value occupants update in-place.
- [x] **Deterministic Motion:** All transitions driven by Remotion frame interpolation and `@dsa/kit` easings. Zero `Math.random()`. Zero CSS transitions.
