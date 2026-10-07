# Q13 — Set Matrix Zeroes (LC 73)
# Scene 01 · Course Roadmap Resume & Q13 Activation
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Previous Problem:** #012 Next Permutation · LC 31 · COMPLETE  
**Current Problem:** #013 Set Matrix Zeroes · LC 73 · Medium  
**Audio File:** `questions/01-arrays-hashing/013-set-matrix-zeroes/audio/01-intro-roadmap.mp3` (symlinked / mapped to `scence-01.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/01-intro-roadmap.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/01-intro-roadmap.anchors.json`  
**FPS:** 30  
**Audio Duration:** 36.400s (36400 ms)  
**Exact Total Frames:** 1092 frames (36.400 seconds)  
**Anchor Match Count:** 14 / 14  
**Unmatched Anchors:** 0  

---

## 1. Mandatory Scene Contract

```text
SCENE: 01-intro-roadmap
QUESTION: 013 · Set Matrix Zeroes (LeetCode 73)
BEAT TYPE: INTRO / ROADMAP RESUME
AUDIO FILE: audio/01-intro-roadmap.mp3
SYNC FILE: sync/01-intro-roadmap.json
ANCHORS FILE: sync/01-intro-roadmap.anchors.json
FPS: 30
TOTAL FRAMES: 1092
PEDAGOGICAL GOAL: Resume the authoritative Master DSA Pattern Roadmap from the exact settled end-state of Q12 Scene 10 (12/227 COMPLETE, Q012 COMPLETE, Q013 UP NEXT, rail thumb at 013); confirm Q012 complete without re-triggering progress counters; activate Q013 (UP NEXT -> NOW ACTIVE) on exact spoken anchor "Question thirteen"; perform a clean semantic representation handoff into ProblemOpenerShell for Scene 02 understanding.
TRACE STEP IDS: N/A (Intro/Roadmap orientation scene)
DATA STRUCTURE: Master Roadmap Tree / Stacked Problem Rows / Vertical Progress Rail

REUSE:
- ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk)
- theme, fonts (@dsa/kit/lib/theme)
- EASE, fadeIn, pop (@dsa/kit/lib/anim)
- RoughBox, RoughLine, ChalkDust (@dsa/kit/components)
- Captions (@dsa/kit/components/Captions)
- MasterRoadmapV2 (@dsa/kit/components/MasterRoadmapV2)
- ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
- PATTERNS_DATA (@dsa/kit/lib/roadmapData)

EXTEND:
- MasterRoadmapV2 props configuration:
    completedCount: 12
    completedGlobalNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    activePatternId: 1
    activeGlobalNum: undefined (F0..F551), mutates to 13 at F552 ("question 13.")
    upNextGlobalNum: 13 (F0..F551), undefined from F552 onward
    spotlightRow: 12 during Beats 3-5 (F196..F324), 13 during Beats 7-14 (F493..F1092)
    showHeaderUnderline: true (F82..F175)
    handoffFade: 0.0 (F0..F1042), interpolates to 1.0 (F1043..F1092)

CREATE:
- sync/01-intro-roadmap.anchors.json (Authoritative anchor manifest)
- Scene01Intro.tsx (Antigravity implementation)

DO NOT TOUCH:
- @dsa/kit core foundation libraries
- Q011 / Q012 regression reference source files
- Roadmap structure or problem ordering
- Global completion counter (12 / 227 is strictly immutable in Scene 01)

MOTION SEMANTICS:
- Reorientation settle (Beat 01: camera 1.008 -> 1.000)
- Identity highlight (Beat 02: header chalk underline under active pattern)
- Row spotlight shifts (Beat 03: Q012 spotlight, Beat 07: spotlight transfers to Q013)
- State confirmation pulse (Beat 05: green checkmark glow on Q012, 0 counter mutation)
- Progress pill focus (Beat 06: glow around 12/227 pill, 0 counter mutation)
- Canonical state mutation (Beat 08: UP NEXT gold -> NOW ACTIVE green/cyan badge)
- Metadata illumination (Beats 09, 10, 11: title, LC 73, Medium badges)
- Background reduction (Beat 12: surrounding roadmap chrome fades/recedes)
- Curiosity hold (Beat 13: subtle chalk focus on Q013 header, zero spoilers)
- Representation handoff (Beat 14: surroundings fade, Q013 header docks into ProblemOpenerShell)
- Zero arbitrary/decorative motion

MORPH SEMANTICS:
- T0 STATE_CHANGE (Q013 badge mutates: UP NEXT [▶] -> NOW ACTIVE [●])
- T8 REPRESENTATION_HANDOFF (Roadmap Q013 row identity -> ProblemOpenerShell header)
- Forbidden: No T3 path morph of text; no generic SaaS card transformations

SVG SEMANTICS:
- S3 REDRAW_CONFIRM (Q012 checkmark redraw confirmation in Beat 05)
- Rough underline draw on header (Beat 02) and title (Beat 09)

TRANSITION IN:
- Continuous frame-0 provenance: exact final settled frame of Q12 Scene 10
- 12 / 227 COMPLETE, Pattern 01 active, Q012 COMPLETE, Q013 UP NEXT, rail thumb at 013

TRANSITION OUT:
- Clean representation handoff into ProblemOpenerShell
- Roadmap shell fades out (opacity: 1 -> 0); Q013 title and badges lock into top header
- Center stage intentionally empty (Y: 220–760) ready for Scene 02 master matrix reveal

FORBIDDEN:
- Replaying Q012 completion animation (11 -> 12 counter increment)
- Advancing global progress to 13 / 227 (Q013 is NOT yet solved)
- Advancing progress rail 012 -> 013 (already sitting at 013 at F0)
- Early activation of Q013 before frame 552 ("question 13.")
- Revealing matrix values [[1,2,0,4,5], ...] or zero coordinates
- Revealing Method 1, Method 2, or Method 3 solution hints
- Introducing generic SaaS cards, dashboard panels, or new palette colors
```

---

## 2. Audio-Anchor Table

Derived strictly from validated exact sync data (`sync/01-intro-roadmap.json`):

| Anchor ID | Spoken Phrase | Word ID Span | Audio Span (s) | Frame Range `[start, endExcl)` | Total Frames | Available Pause | Teaching Purpose |
|---|---|---|---|---|---|---|---|
| `S01_WELCOME` | "Welcome back to Code with Animation." | W0000..W0005 | 0.000 – 2.240s | `[0, 67)` | 67 F | 15 F (F67..F82) | Resume exact course shell from Q12 final roadmap |
| `S01_ROADMAP` | "We are continuing our arrays and hashing roadmap." | W0006..W0013 | 2.740 – 5.840s | `[82, 175)` | 93 F | 21 F (F175..F196) | Focus active pattern identity Arrays & Hashing in sidebar |
| `S01_Q12` | "Question 12." | W0014..W0015 | 6.540 – 7.720s | `[196, 232)` | 36 F | 17 F (F232..F249) | Direct attention to Q012 row in Master Roadmap |
| `S01_NEXT_PERM` | "Next permutation" | W0016..W0017 | 8.300 – 9.400s | `[249, 282)` | 33 F | 0 F | Focus Q012 title text |
| `S01_Q12_COMPLETE` | "is complete." | W0018..W0019 | 9.400 – 10.800s | `[282, 324)` | 42 F | 26 F (F324..F350) | Q012 COMPLETE status confirmed; green checkmark glow; 0 counter mutation |
| `S01_GLOBAL_PROGRESS` | "Our global progress is now 12 out of 227." | W0020..W0028 | 11.660 – 16.020s | `[350, 481)` | 131 F | 12 F (F481..F493) | Focus global progress pill; strictly locked at 12/227; no countup |
| `S01_NEXT_PROBLEM` | "And the next problem is" | W0029..W0033 | 16.440 – 18.400s | `[493, 552)` | 59 F | 0 F | Focus transfers from Q012 to Q013 row; Q013 still UP NEXT; anticipation hold |
| `S01_Q13_ACTIVATION` | "question 13." | W0034..W0035 | 18.400 – 19.760s | `[552, 593)` | 41 F | 22 F (F593..F615) | Canonical activation: UP NEXT (▶) -> NOW ACTIVE (●); status badge turns active cyan/green |
| `S01_SET_MATRIX_ZEROES` | "Set matrix zeros." | W0036..W0038 | 20.500 – 22.320s | `[615, 670)` | 55 F | 24 F (F670..F694) | Title hero reveal with drawn chalk underline |
| `S01_LC73` | "Lead code 73." | W0039..W0041 | 23.120 – 25.020s | `[694, 751)` | 57 F | 28 F (F751..F779) | Metadata LeetCode 73 highlighted in rough chalk outline |
| `S01_MEDIUM` | "Medium." | W0042..W0042 | 25.960 – 26.480s | `[779, 794)` | 15 F | 26 F (F794..F820) | Difficulty badge illuminates in warm amber sheen (#F59E0B) |
| `S01_SIMPLE_AT_FIRST` | "This question looks simple at first." | W0043..W0048 | 27.340 – 29.720s | `[820, 892)` | 72 F | 19 F (F892..F911) | Roadmap surroundings begin to quiet; focus centers on Q013 row |
| `S01_ONE_SMALL_DETAIL` | "But one small detail changes the whole problem." | W0049..W0056 | 30.360 – 33.940s | `[911, 1018)` | 107 F | 25 F (F1018..F1043) | Curiosity hold; subtle chalk accent on Q013 header; no solution spoilers |
| `S01_UNDERSTAND_FIRST` | "Let's understand that first." | W0057..W0060 | 34.760 – 36.400s | `[1043, 1092)` | 49 F | 0 F | Representation handoff: surroundings fade out; Q013 header docks into ProblemOpenerShell |

---

## 3. Framewise Anchor Plan

---

### BEAT 01 · Course Welcome & Provenance Settle

* **FRAME RANGE:** `[0, 82)` (`[0, 67)` spoken, `[67, 82)` 15F real comprehension hold)
* **WORD IDS:** `W0000` .. `W0005` ("Welcome back to Code with Animation.")
* **EXACT SPOKEN ANCHOR:** `S01_WELCOME`
* **ANCHOR:** "Welcome back to Code with Animation..."
* **WHAT APPEARS NOW:** Master Roadmap UI in its settled Q12 Scene 10 terminal state. Top header displays "DSA PATTERN ROADMAP", left sidebar displays 19 Course Patterns with Pattern 01 (Arrays & Hashing) highlighted, global pill displays "12 / 227 COMPLETE", problem row 012 shows "Next Permutation (LC 31) [✓ COMPLETE]", row 013 shows "Set Matrix Zeroes (LC 73) [▶ UP NEXT]", vertical rail pointer sits at row 013.
* **CENTER-STAGE HERO:** Full Master Roadmap continuous board.
* **CAUSE:** Course orientation greeting re-establishing continuity.
* **EFFECT / MOTION:** Camera performs an ultra-subtle settle from `1.008` to `1.000` (`F0..F24`) using standard project ease curve. No sliding in, no fade-from-black, no re-animating already completed problems.
* **WHAT MUST NOT APPEAR YET:** Q013 activation; matrix grid; zero values; any code; 13/227 count.
* **COMPREHENSION HOLD:** `F67..F81` (15 frames, 500ms pause) holding the calm, authoritative chalkboard environment.
* **CLEANUP / EXIT:** Smooth continuation into Beat 02.
* **PERSISTENT STATE:** Full Master Roadmap UI visible at `scale: 1.0`, `translateY: 0`.
* **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkboardBackground`, `ChalkDust`, `Captions`.
* **NO-SPOILER CHECK:** PASS. Global count is strictly 12/227. Q013 is in UP NEXT state.

---

### BEAT 02 · Pattern Identity Focus

* **FRAME RANGE:** `[82, 196)` (`[82, 175)` spoken, `[175, 196)` 21F real comprehension hold)
* **WORD IDS:** `W0006` .. `W0013` ("We are continuing our arrays and hashing roadmap.")
* **EXACT SPOKEN ANCHOR:** `S01_ROADMAP`
* **ANCHOR:** "We are continuing our arrays and hashing roadmap."
* **WHAT APPEARS NOW:** A hand-drawn rough chalk underline draws under the top-center "DSA PATTERN ROADMAP" title (`F92..F142`), while the sidebar item "01 · ARRAYS & HASHING" glows with a subtle cyan chalk halo (`#5CE1E6`).
* **CENTER-STAGE HERO:** Arrays & Hashing pattern identity and curriculum progress.
* **CAUSE:** Narration explicitly identifies the current pattern in the curriculum.
* **EFFECT / MOTION:** Underline stroke drawn via SVG stroke-dashoffset over 50 frames (`F92..F142`). Camera stays perfectly centered. Non-active patterns remain quiet.
* **WHAT MUST NOT APPEAR YET:** Row 013 activation; problem card; matrix cells.
* **COMPREHENSION HOLD:** `F175..F195` (21 frames, 700ms pause) allowing the learner to orient themselves in the pattern journey.
* **CLEANUP / EXIT:** Pattern glow softens back to baseline state.
* **PERSISTENT STATE:** Pattern 01 remains prominently active in the sidebar.
* **KIT COMPONENTS:** `MasterRoadmapV2` (with `showHeaderUnderline: true`), `Captions`.
* **NO-SPOILER CHECK:** PASS. Zero problem details revealed.

---

### BEAT 03 · Recall Focus: Question 12

* **FRAME RANGE:** `[196, 249)` (`[196, 232)` spoken, `[232, 249)` 17F real comprehension hold)
* **WORD IDS:** `W0014` .. `W0015` ("Question 12.")
* **EXACT SPOKEN ANCHOR:** `S01_Q12`
* **ANCHOR:** "Question twelve..."
* **WHAT APPEARS NOW:** Spotlight focus isolates problem row 012 (`Next Permutation`). Row 012 background receives a soft warm chalk tint; camera eases slightly forward (`camScale: 1.03`, `camY: -40px`).
* **CENTER-STAGE HERO:** Row 012 ("Next Permutation").
* **CAUSE:** Narration explicitly names previous question number.
* **EFFECT / MOTION:** Camera micro-pan (`F196..F226`, duration 30F) directing visual focus to row 012. Surrounding rows slightly dim to opacity 0.65.
* **WHAT MUST NOT APPEAR YET:** Q013 activation; progress counter increment.
* **COMPREHENSION HOLD:** `F232..F248` (17 frames, 580ms pause) keeping focus locked on Row 012.
* **CLEANUP / EXIT:** Retains focus on row 012 for the title phrase in Beat 04.
* **PERSISTENT STATE:** Spotlight on row 012.
* **KIT COMPONENTS:** `MasterRoadmapV2` (`spotlightRow: 12`), `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 04 · Recall Title: Next Permutation

* **FRAME RANGE:** `[249, 282)` (`[249, 282)` spoken, 0F pause)
* **WORD IDS:** `W0016` .. `W0017` ("Next permutation")
* **EXACT SPOKEN ANCHOR:** `S01_NEXT_PERM`
* **ANCHOR:** "Next Permutation..."
* **WHAT APPEARS NOW:** The text "Next Permutation" inside Row 012 illuminates in crisp chalk white (`#F8F6F0`) with a subtle gold edge shimmer (`#FFD166`).
* **CENTER-STAGE HERO:** "Next Permutation" title text within row 012.
* **CAUSE:** Narration names the completed problem title.
* **EFFECT / MOTION:** Title text brightness increases by 20% over 15 frames (`F249..F264`). No camera motion; stable reading view.
* **WHAT MUST NOT APPEAR YET:** Row 013 activation; 13/227.
* **COMPREHENSION HOLD:** 0F (audio flows immediately into "is complete.").
* **CLEANUP / EXIT:** Flows directly into confirmation pulse in Beat 05.
* **PERSISTENT STATE:** Row 012 title fully illuminated.
* **KIT COMPONENTS:** `MasterRoadmapV2`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 05 · Confirmation: Is Complete

* **FRAME RANGE:** `[282, 350)` (`[282, 324)` spoken, `[324, 350)` 26F real comprehension hold)
* **WORD IDS:** `W0018` .. `W0019` ("is complete.")
* **EXACT SPOKEN ANCHOR:** `S01_Q12_COMPLETE`
* **ANCHOR:** "is complete."
* **WHAT APPEARS NOW:** The green checkmark `[✓ COMPLETE]` badge in row 012 pulses with a crisp seafoam glow (`#3CE5A7`).
* **CENTER-STAGE HERO:** Q012 completion badge `[✓ COMPLETE]`.
* **CAUSE:** Narration confirms completion of problem 12.
* **EFFECT / MOTION:** SVG redraw confirmation pulse on checkmark icon (`scale: 1.0 -> 1.15 -> 1.0` over `F282..F312`). Global counter stays strictly at `12 / 227`. Zero counter mutation.
* **WHAT MUST NOT APPEAR YET:** Count-up to 13; Q013 activation; array/matrix graphics.
* **COMPREHENSION HOLD:** `F324..F349` (26 frames, 860ms pause) allowing completion achievement to register.
* **CLEANUP / EXIT:** Checkmark glow settles to steady resting green.
* **PERSISTENT STATE:** Row 012 permanently settled as COMPLETE.
* **KIT COMPONENTS:** `MasterRoadmapV2`, `Captions`.
* **NO-SPOILER CHECK:** PASS. Global progress remains strictly 12/227.

---

### BEAT 06 · Global Progress Reaffirmation

* **FRAME RANGE:** `[350, 493)` (`[350, 481)` spoken, `[481, 493)` 12F real comprehension hold)
* **WORD IDS:** `W0020` .. `W0028` ("Our global progress is now 12 out of 227.")
* **EXACT SPOKEN ANCHOR:** `S01_GLOBAL_PROGRESS`
* **ANCHOR:** "Our global progress is now twelve out of two hundred twenty-seven."
* **WHAT APPEARS NOW:** Camera pans smoothly upward (`camScale: 1.02`, `camY: -110px`) to frame the top-right global progress pill: `12 / 227 COMPLETE`. The pill outline receives a crisp double-chalk boundary accent.
* **CENTER-STAGE HERO:** Top-right `12 / 227 COMPLETE` progress pill.
* **CAUSE:** Teacher explicitly articulates the global course progress.
* **EFFECT / MOTION:** Camera moves smoothly to top region over 35 frames (`F350..F385`). The number "12" is highlighted in seafoam mint (`#3CE5A7`). Absolutely NO counter roll (0 -> 12 or 12 -> 13). Progress bar fill represents exactly 12/227 (~5.28%).
* **WHAT MUST NOT APPEAR YET:** "13 / 227"; Q013 activation; matrix.
* **COMPREHENSION HOLD:** `F481..F492` (12 frames, 420ms pause) holding the authoritative count.
* **CLEANUP / EXIT:** Camera prepares to pan downward toward row 013.
* **PERSISTENT STATE:** Progress pill locked at 12/227.
* **KIT COMPONENTS:** `MasterRoadmapV2`, `Captions`.
* **NO-SPOILER CHECK:** PASS. 13/227 is strictly forbidden and absent.

---

### BEAT 07 · Transition Focus: Next Problem

* **FRAME RANGE:** `[493, 552)` (`[493, 552)` spoken, 0F pause)
* **WORD IDS:** `W0029` .. `W0033` ("And the next problem is")
* **EXACT SPOKEN ANCHOR:** `S01_NEXT_PROBLEM`
* **ANCHOR:** "And the next problem is..."
* **WHAT APPEARS NOW:** Spotlight focus transfers from Row 012 to Row 013 (`Set Matrix Zeroes`). Camera pans down smoothly (`camScale: 1.03`, `camY: -114px`). Row 013 remains in its `[▶ UP NEXT]` gold state.
* **CENTER-STAGE HERO:** Row 013 in `UP NEXT` anticipation state.
* **CAUSE:** Narration transitions from completed work toward the next question.
* **EFFECT / MOTION:** Camera pan down over 35 frames (`F493..F528`). Focus transfer: Row 012 returns to neutral dim (`opacity: 0.65`); Row 013 background receives amber ambient glow (`#FFD166`, `alpha: 0.12`). Status badge stays strictly `[▶ UP NEXT]` through frame 551.
* **WHAT MUST NOT APPEAR YET:** Q013 activation (NOW ACTIVE); problem card; matrix.
* **COMPREHENSION HOLD:** 0F (audio links immediately into "question 13.").
* **CLEANUP / EXIT:** Prepares for badge state mutation in Beat 08.
* **PERSISTENT STATE:** Row 013 isolated in spotlight, still `UP NEXT`.
* **KIT COMPONENTS:** `MasterRoadmapV2` (`spotlightRow: 13`), `Captions`.
* **NO-SPOILER CHECK:** PASS. Q013 is NOT yet active.

---

### BEAT 08 · Canonical Activation: Question 13

* **FRAME RANGE:** `[552, 615)` (`[552, 593)` spoken, `[593, 615)` 22F real comprehension hold)
* **WORD IDS:** `W0034` .. `W0035` ("question 13.")
* **EXACT SPOKEN ANCHOR:** `S01_Q13_ACTIVATION`
* **ANCHOR:** "Question thirteen..."
* **WHAT APPEARS NOW:** Canonical state mutation: Row 013 status badge transforms from gold `[▶ UP NEXT]` into vibrant cyan/seafoam `[● NOW ACTIVE]`. Vertical rail thumb indicator locks onto 013 with an active ring pulse.
* **CENTER-STAGE HERO:** Row 013 active status badge `[● NOW ACTIVE]`.
* **CAUSE:** Teacher explicitly arrives at Question 13.
* **EFFECT / MOTION:** Badge mutation (T0 STATE_CHANGE): badge pill color morphs from warm amber (`#FFD166`) to cyan/seafoam (`#5CE1E6` / `#3CE5A7`) over 18 frames (`F552..F570`) with subtle pop scale (`1.0 -> 1.08 -> 1.0`). Global counter remains strictly 12/227.
* **WHAT MUST NOT APPEAR YET:** Problem title hero reveal (waits for Beat 09); matrix cells; solution methods.
* **COMPREHENSION HOLD:** `F593..F614` (22 frames, 740ms pause) settling the activation state.
* **CLEANUP / EXIT:** Active badge settles into resting state.
* **PERSISTENT STATE:** Row 013 is permanently `NOW ACTIVE`.
* **KIT COMPONENTS:** `MasterRoadmapV2` (`activeGlobalNum: 13`, `upNextGlobalNum: undefined`), `Captions`.
* **NO-SPOILER CHECK:** PASS. Global progress remains 12/227.

---

### BEAT 09 · Title Hero Reveal: Set Matrix Zeroes

* **FRAME RANGE:** `[615, 694)` (`[615, 670)` spoken, `[670, 694)` 24F real comprehension hold)
* **WORD IDS:** `W0036` .. `W0038` ("Set matrix zeros.")
* **EXACT SPOKEN ANCHOR:** `S01_SET_MATRIX_ZEROES`
* **ANCHOR:** "Set Matrix Zeroes..."
* **WHAT APPEARS NOW:** The title text "Set Matrix Zeroes" expands in crisp white chalkboard handwriting (`#F8F6F0`). A hand-drawn rough chalk underline animates directly beneath the title text.
* **CENTER-STAGE HERO:** "Set Matrix Zeroes" problem title.
* **CAUSE:** Narration speaks the official problem title.
* **EFFECT / MOTION:** Underline draws left-to-right (`F615..F655`, 40F) using SVG stroke-dashoffset. Surrounding roadmap elements slightly quiet down to accentuate title readability.
* **WHAT MUST NOT APPEAR YET:** LeetCode number (waits for Beat 10); matrix grid; zero coordinates.
* **COMPREHENSION HOLD:** `F670..F693` (24 frames, 800ms pause) holding the clean, bold title presentation.
* **CLEANUP / EXIT:** Underline completes and stays visible.
* **PERSISTENT STATE:** Title fully underlined and prominent.
* **KIT COMPONENTS:** `MasterRoadmapV2`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 10 · Metadata Reveal: LeetCode 73

* **FRAME RANGE:** `[694, 779)` (`[694, 751)` spoken, `[751, 779)` 28F real comprehension hold)
* **WORD IDS:** `W0039` .. `W0041` ("Lead code 73.")
* **EXACT SPOKEN ANCHOR:** `S01_LC73`
* **ANCHOR:** "LeetCode seventy-three..."
* **WHAT APPEARS NOW:** The metadata chip `LC 73` is highlighted in a hand-drawn rough chalk outline box (`#5CE1E6`) directly adjacent to the title.
* **CENTER-STAGE HERO:** `LC 73` metadata box in Row 013.
* **CAUSE:** Narration identifies the LeetCode catalog number.
* **EFFECT / MOTION:** Rough chalk box draws around `LC 73` over 24 frames (`F694..F718`). Captions correctly display normalized "LeetCode 73" (not raw Whisper phonetic "Lead code").
* **WHAT MUST NOT APPEAR YET:** Difficulty badge illumination; matrix cells; solution algorithms.
* **COMPREHENSION HOLD:** `F751..F778` (28 frames, 940ms pause) giving ample reading time.
* **CLEANUP / EXIT:** Box settles into quiet metadata styling.
* **PERSISTENT STATE:** Title + LC 73 locked in view.
* **KIT COMPONENTS:** `MasterRoadmapV2`, `RoughBox`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 11 · Metadata Reveal: Medium Difficulty

* **FRAME RANGE:** `[779, 820)` (`[779, 794)` spoken, `[794, 820)` 26F real comprehension hold)
* **WORD IDS:** `W0042` .. `W0042` ("Medium.")
* **EXACT SPOKEN ANCHOR:** `S01_MEDIUM`
* **ANCHOR:** "Medium."
* **WHAT APPEARS NOW:** The difficulty badge `[MEDIUM]` illuminates in warm amber chalk sheen (`#F59E0B`), completing the full problem identity package.
* **CENTER-STAGE HERO:** `MEDIUM` difficulty badge in Row 013.
* **CAUSE:** Narration states the difficulty classification.
* **EFFECT / MOTION:** Difficulty pill glows with amber border and wash fill (`F779..F794`), settling over 15 frames.
* **WHAT MUST NOT APPEAR YET:** Any matrix grid or zeroing problem mechanics.
* **COMPREHENSION HOLD:** `F794..F819` (26 frames, 860ms pause) allowing full problem identity to settle.
* **CLEANUP / EXIT:** Full Row 013 identity is now fully locked.
* **PERSISTENT STATE:** Complete active row: `013 · Set Matrix Zeroes · LC 73 · MEDIUM · NOW ACTIVE`.
* **KIT COMPONENTS:** `MasterRoadmapV2`, `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 12 · Roadmap Reduction: "Simple at First"

* **FRAME RANGE:** `[820, 911)` (`[820, 892)` spoken, `[892, 911)` 19F real comprehension hold)
* **WORD IDS:** `W0043` .. `W0048` ("This question looks simple at first.")
* **EXACT SPOKEN ANCHOR:** `S01_SIMPLE_AT_FIRST`
* **ANCHOR:** "This question looks simple at first..."
* **WHAT APPEARS NOW:** The surrounding roadmap UI (sidebar, non-active rows, global progress bar) begins a gentle, graceful fade (`handoffFade: 0.0 -> 0.4`), while Row 013 moves smoothly toward the center-top hero position.
* **CENTER-STAGE HERO:** Row 013 problem identity alone on the board.
* **CAUSE:** Narration transitions from curriculum cataloging to problem philosophy.
* **EFFECT / MOTION:** Representation handoff phase 1: `handoffFade` increases from 0.0 to 0.4 over 45 frames (`F820..F865`). Camera eases back toward center scale (`1.000`, `camY: 0`). Non-essential UI recedes without jarring jumps.
* **WHAT MUST NOT APPEAR YET:** The actual problem trap (cascading fake zeros); master matrix; method comparisons.
* **COMPREHENSION HOLD:** `F892..F910` (19 frames, 640ms pause) maintaining suspense.
* **CLEANUP / EXIT:** Roadmap elements continue fading into Beat 13.
* **PERSISTENT STATE:** Row 013 identity prominent; surrounding roadmap dimmed.
* **KIT COMPONENTS:** `MasterRoadmapV2` (`handoffFade: 0.4`), `Captions`.
* **NO-SPOILER CHECK:** PASS.

---

### BEAT 13 · The Hidden Invariant: "One Small Detail"

* **FRAME RANGE:** `[911, 1043)` (`[911, 1018)` spoken, `[1018, 1043)` 25F real comprehension hold)
* **WORD IDS:** `W0049` .. `W0056` ("But one small detail changes the whole problem.")
* **EXACT SPOKEN ANCHOR:** `S01_ONE_SMALL_DETAIL`
* **ANCHOR:** "but one small detail changes the whole problem."
* **WHAT APPEARS NOW:** Roadmap chrome recedes further (`handoffFade: 0.4 -> 0.75`). A subtle hand-drawn amber chalk callout accent appears near the title: *"one critical detail"*, maintaining pure pedagogical intrigue without spoiling the trap.
* **CENTER-STAGE HERO:** Problem title with curiosity emphasis.
* **CAUSE:** Narration warns the learner of the subtle trap without spoiling it prematurely.
* **EFFECT / MOTION:** Subtle amber glow pulse around "Set Matrix Zeroes" (`F911..F945`). Zero matrices, zero grids, zero fake zeroes shown.
* **WHAT MUST NOT APPEAR YET:** In-place mutation danger; cascading zeros; `matrix[i][j] == 0` code.
* **COMPREHENSION HOLD:** `F1018..F1042` (25 frames, 820ms pause) holding high learner engagement.
* **CLEANUP / EXIT:** Callout accent fades out (`F1030..F1042`) preparing for final scene handoff.
* **PERSISTENT STATE:** Q013 header ready for docking.
* **KIT COMPONENTS:** `MasterRoadmapV2` (`handoffFade: 0.75`), `Captions`.
* **NO-SPOILER CHECK:** PASS. Trap mechanism remains 100% hidden.

---

### BEAT 14 · Representation Handoff into ProblemOpenerShell

* **FRAME RANGE:** `[1043, 1092)` (`[1043, 1092)` spoken, 0F pause, audio ends at 1092F)
* **WORD IDS:** `W0057` .. `W0060` ("Let's understand that first.")
* **EXACT SPOKEN ANCHOR:** `S01_UNDERSTAND_FIRST`
* **ANCHOR:** "Let’s understand that first."
* **WHAT APPEARS NOW:** Master Roadmap UI completes its graceful fade-out (`handoffFade: 0.75 -> 1.0`, `F1043..F1080`). Simultaneously, `ProblemOpenerShell` fades in, with its top header docking the identical metadata: `01 · ARRAYS & HASHING`, `LeetCode 73`, `MEDIUM`, `Set Matrix Zeroes`. The center stage ($Y: 220\text{px} .. 760\text{px}$) is left clean, open, and ready for Scene 02's master matrix reveal.
* **CENTER-STAGE HERO:** Clean, centered transition into `ProblemOpenerShell`.
* **CAUSE:** Teacher commands transition into problem understanding.
* **EFFECT / MOTION:** Representation handoff (T8 REPRESENTATION_HANDOFF): Roadmap shell opacity interpolates `1.0 -> 0.0`; `ProblemOpenerShell` header settles into top zone ($Y: 48\text{px} .. 160\text{px}$). Center canvas is perfectly clear.
* **WHAT MUST NOT APPEAR YET:** Master matrix grid `[[1,2,0,...]]` (only reveals in Scene 02 on *"We are given a matrix."*).
* **COMPREHENSION HOLD:** 0F (audio cleanly concludes at frame 1092).
* **CLEANUP / EXIT:** Scene 01 cleanly concludes; handoff state is mathematically identical to Scene 02 frame 0.
* **PERSISTENT STATE:** `ProblemOpenerShell` top header locked at $Y: 48\text{px} .. 160\text{px}$.
* **KIT COMPONENTS:** `MasterRoadmapV2` (`handoffFade: 1.0`), `ProblemOpenerShell`, `Captions`.
* **NO-SPOILER CHECK:** PASS. Zero matrix graphics leaked before Scene 02.

---

## 4. Center-Stage Spatial Composition & Zero-Collision Audit

| Optical Zone | Vertical Coordinate ($Y$) | Elements Present | Clearance / Collision Verification |
|---|---|---|---|
| **Top Global Header** | $Y: 28\text{px} .. 88\text{px}$ | "DSA PATTERN ROADMAP" / Global Progress Pill `12 / 227` / Channel Watermark | Centered horizontally. Minimum $36\text{px}$ clearance to problem rows below. |
| **Curriculum Sidebar** | $X: 48\text{px} .. 360\text{px}$, $Y: 110\text{px} .. 920\text{px}$ | 19 Course Patterns list; Pattern 01 active | Fixed left rail; strictly separated by $32\text{px}$ from main problem cards. |
| **Vertical Progress Rail** | $X: 380\text{px} .. 420\text{px}$, $Y: 110\text{px} .. 920\text{px}$ | 227-question progress line; thumb sitting at row 013 | $24\text{px}$ breathing room between sidebar and problem cards. |
| **Main Problem Rows** | $X: 440\text{px} .. 1872\text{px}$, $Y: 140\text{px} .. 760\text{px}$ | Problem rows 001..018; Rows 012 & 013 centered vertically | Each row has fixed $68\text{px}$ height with $12\text{px}$ vertical gap. Row 013 sits at $Y: 480\text{px}$ (inside optimal $Y: 130 .. 750$ center zone). |
| **Bottom Captions** | $Y: 960\text{px} .. 1040\text{px}$ (centered at $Y: 980\text{px}$) | Word-level animated subtitle captions | Top of caption zone ($Y: 960\text{px}$) has $> 200\text{px}$ clearance below problem row area ($Y: 760\text{px}$). ZERO COLLISION. |

---

## 5. Critical Frames for Visual & Alignment Inspection

The following frames must be rendered and visually inspected during QA:

1. **Frame 0 (0.000s):** Provenance verification — confirms Master Roadmap starts with `12 / 227 COMPLETE`, Q012 COMPLETE, Q013 in `[▶ UP NEXT]` gold state.
2. **Frame 130 (4.333s):** Pattern identity check — chalk underline complete under header, Pattern 01 highlighted in sidebar.
3. **Frame 210 (7.000s):** Question 12 recall — camera spotlight centered on row 012.
4. **Frame 300 (10.000s):** Q012 checkmark pulse — seafoam glow on `[✓ COMPLETE]`; counter remains 12/227.
5. **Frame 410 (13.667s):** Global progress focus — camera frames `12 / 227 COMPLETE` pill; no count-up animation.
6. **Frame 520 (17.333s):** Anticipation hold — spotlight at row 013 while still in `[▶ UP NEXT]` gold state.
7. **Frame 570 (19.000s):** Canonical activation — badge transforms to `[● NOW ACTIVE]` in seafoam green/cyan.
8. **Frame 640 (21.333s):** Title hero reveal — "Set Matrix Zeroes" with completed chalk underline.
9. **Frame 720 (24.000s):** LeetCode metadata — rough chalk box drawn around `LC 73`.
10. **Frame 790 (26.333s):** Difficulty metadata — warm amber illumination on `[MEDIUM]`.
11. **Frame 860 (28.667s):** Roadmap reduction — surrounding UI faded by 40%; Q013 row owns center stage.
12. **Frame 970 (32.333s):** Curiosity hold — subtle focus on Q013 header; zero spoilers.
13. **Frame 1080 (36.000s):** Representation handoff — roadmap faded out; `ProblemOpenerShell` header locked at top; center stage clear.
