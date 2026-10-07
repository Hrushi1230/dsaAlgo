# Q11 — Sort Colors (LC 75)
# Scene 01 · Channel + Master Roadmap Intro
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Previous Problem:** #010 Longest Consecutive Sequence · LC 128 · COMPLETE  
**Current Problem:** #011 Sort Colors · LC 75 · Medium  
**Audio File:** `questions/01-arrays-hashing/011-sort-colors/audio/01-intro-roadmap.mp3`  
**Exact Sync File:** `questions/01-arrays-hashing/011-sort-colors/sync/01-intro-roadmap.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/011-sort-colors/sync/01-intro-roadmap.anchors.json`  
**FPS:** 30  
**Exact Total Frames:** 1,223 frames (40.780 seconds)  

---

## Mandatory Scene Contract

```text
SCENE: 01-intro-roadmap
QUESTION: 011 · Sort Colors (LeetCode 75)
BEAT TYPE: INTRO / ROADMAP RESUME
AUDIO FILE: audio/01-intro-roadmap.mp3
SYNC FILE: sync/01-intro-roadmap.json
FPS: 30
TOTAL FRAMES: 1223
PEDAGOGICAL GOAL: Resume permanent Master DSA Pattern Roadmap from Q10 ending state; confirm Q010 complete without re-triggering progress mutation; activate Q011 (UP NEXT -> NOW ACTIVE) on exact spoken anchor; perform representation handoff into Scene 02 ProblemOpener shell.
TRACE STEP IDS: N/A (Intro scene, no algorithm dry run)
DATA STRUCTURE: Master Roadmap Tree / Stacked Problem Rows / Vertical Progress Rail

REUSE:
- ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk)
- theme, fonts (@dsa/kit/lib/theme)
- EASE, fadeIn, pop (@dsa/kit/lib/anim)
- RoughBox, RoughLine, ChalkDust (@dsa/kit/components)
- Captions (@dsa/kit/components/Captions)
- PATTERNS_DATA (roadmapData.ts)
- ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
- Permanent Roadmap UI Architecture from Q10 Scene 01 / Scene 13

EXTEND:
- roadmapData.ts (local self-contained copy in Q11 src/)
- Row state trigger: Q010 fixed completed (✓); Q011 state mutation driven by anchor S01_Q11 (F1019)
- Representation handoff interpolator to Scene 02 ProblemOpener layout

CREATE:
- sync/01-intro-roadmap.anchors.json (Authoritative anchor manifest)
- Scene01Intro.tsx (Stage 16 Antigravity implementation)

DO NOT TOUCH:
- @dsa/kit core libraries
- Q010 regression reference source files
- Roadmap structure or problem ordering
- Global completion counter (10 / 227 is strictly immutable in Scene 01)

MOTION SEMANTICS:
- Reorientation settle (Beat A)
- Focus highlights (Beats B, C, D, F, H, I, J, K, O, P, Q)
- Confirmation pulse (Beat L)
- Focus transfer (Beat M)
- State mutation UP NEXT -> NOW ACTIVE (Beat N)
- Representation handoff to ProblemOpener (Beat R)
- Zero arbitrary/decorative motion

MORPH SEMANTICS:
- T0 STATE_CHANGE (Q011 UP NEXT -> NOW ACTIVE badge swap)
- T8 REPRESENTATION_HANDOFF (Roadmap Q011 card -> ProblemOpenerShell title lock)
- Forbidden: No T3 path morph of text; no SaaS card morphs

SVG SEMANTICS:
- S3 REDRAW_CONFIRM (Q010 checkmark confirmation)
- S4 TRACE_PATH (Temporary course journey tracer along 001->227 rail in Beat G)

TRANSITION IN:
- Continuous frame-0 provenance: exact final settled frame of Q10 Scene 13
- 10 / 227 COMPLETE, Pattern 01 active, Q010 complete, Q011 UP NEXT

TRANSITION OUT:
- Clean representation handoff into ProblemOpenerShell
- Roadmap surroundings fade out; Q011 title/metadata settle into header
- Center stage intentionally empty for Scene 02 master array reveal

FORBIDDEN:
- Replaying Q010 completion animation (9 -> 10)
- Advancing global progress to 11 / 227
- Advancing progress rail 010 -> 011 again (already at 011 at F0)
- Revealing array values [2, 1, 2, 0, 2, 1, 0, 1, 0, 2]
- Revealing Counting or Dutch National Flag solution hints
- Introducing generic SaaS cards, dashboard panels, or new palette colors
```

---

# Frame-Wise Choreography (Beats A through R)

--------------------------------------------------
### BEAT A / ANCHOR `S01_WELCOME`
--------------------------------------------------

Anchor:
`S01_WELCOME`

Narration:
"Welcome back to Code with Animation."

Word IDs:
W0000 → W0005 ("Welcome" → "Animation.")

Audio:
start = 0.000 sec (0 ms)  
end   = 2.260 sec (2260 ms)  

Frames:
start = F0  
end   = F68  

Available pause:
0.540 sec / 16 frames (F68 → F84, pause P01)

STATE BEFORE (Frame 0 Provenance):
- Entire permanent master roadmap UI is already visible from frame 0 (sourced from Q10 Scene 13 final frame).
- Top bar: `CODE WITH ANIMATION` (left), `DSA PATTERN ROADMAP` (center), `227 PROBLEMS · 19 PATTERNS` (right), `10 / 227 COMPLETE` (progress badge).
- Left sidebar: `19 COURSE PATTERNS`, `01 Arrays & Hashing` is `ACTIVE`.
- Main pattern area: `PATTERN 01 · Arrays & Hashing`, `10 / 18 COMPLETED`.
- Problem rows: Q001..Q010 are `COMPLETE` (`✓`, green border, `COMPLETE` badge). Q011 is `UP NEXT` (`▶`, gold border, `UP NEXT` badge).
- Right progress rail: Endpoint markers `001` and `227`. Active thumb marker is positioned at `011`.

CAUSE:
Speaker greets the audience ("Welcome back to Code with Animation.").

PRIMARY VISUAL REACTION:
- Whole roadmap shell executes a subtle breathing settle: camera gently stabilizes from `1.008` to `1.000` over F0–F26.
- Ambient chalk dust activates (`ChalkDust`).

MOVEMENT / MUTATION:
- None. All roadmap state remains completely stable.

SUPPORTING REACTION:
- Captions display: `"Welcome back to Code with Animation."` (F0–F68).

COMPREHENSION HOLD:
- F68–F84 (16 frames): Learner re-orients inside the familiar master roadmap layout during pause P01.

SETTLE:
- Camera scale locks at `1.000` at F84.

STATE AFTER:
- Identical layout state; audience attention centered on the full roadmap canvas.

COMPONENTS:
- `ChalkboardBackground`, `ChalkFilters`, `ChalkDust`, `Captions`
- Permanent Roadmap Shell components

MOTION CLASS:
FOCUS / SETTLE (No algorithmic motion)

SVG CLASS:
N/A

VALIDATION:
- Starts from exact Q10 outro state.
- No progress counter changes.
- Rail marker remains at 011.
--------------------------------------------------

--------------------------------------------------
### BEAT B / ANCHOR `S01_ROADMAP`
--------------------------------------------------

Anchor:
`S01_ROADMAP`

Narration:
"We are continuing our DSA pattern roadmap,"

Word IDs:
W0006 → W0012 ("We" → "roadmap,")

Audio:
start = 2.800 sec (2800 ms)  
end   = 6.320 sec (6320 ms)  

Frames:
start = F84  
end   = F190  

Available pause:
0.700 sec / 21 frames (F190 → F211, pause P02)

STATE BEFORE:
- Roadmap center title `DSA PATTERN ROADMAP` sits quietly in top bar at Y: 40.

CAUSE:
Narration emphasizes the systematic nature of the course ("We are continuing our DSA pattern roadmap,").

PRIMARY VISUAL REACTION:
- F84–F135: Top-center header `DSA PATTERN ROADMAP` brightens to hero white (`theme.chalkText`).
- F135–F170: A subtle gold chalk underline (`RoughLine`) draws beneath `DSA PATTERN ROADMAP`.

MOVEMENT / MUTATION:
- Underline stroke progress animates 0 → 1 over F135–F170.

SUPPORTING REACTION:
- Top bar container border receives a soft glow sheen (`theme.pivot` at 0.25 opacity).

COMPREHENSION HOLD:
- F190–F211 (21 frames): Settle hold during pause P02.

SETTLE:
- Underline stroke fully settled at F190; hold steady through F211.

STATE AFTER:
- `DSA PATTERN ROADMAP` emphasized with crisp chalk underline; full shell remains visible.

COMPONENTS:
- `RoughLine`, `Captions`

MOTION CLASS:
T0 STATE_CHANGE (Header focus)

SVG CLASS:
S1 DRAW_NEW (Chalk underline stroke)

VALIDATION:
- No layout shift or row mutation.
- Exact word alignment with W0006..W0012.
--------------------------------------------------

--------------------------------------------------
### BEAT C / ANCHOR `S01_227`
--------------------------------------------------

Anchor:
`S01_227`

Narration:
"Two hundred twenty-seven problems..." (transcribed as "227 problems")

Word IDs:
W0013 → W0014 ("227" → "problems")

Audio:
start = 7.020 sec (7020 ms)  
end   = 9.420 sec (9420 ms)  

Frames:
start = F211  
end   = F283  

Available pause:
0.000 sec / 0 frames (immediate continuation into W0015)

STATE BEFORE:
- Top-right metadata badge reads `227 PROBLEMS · 19 PATTERNS`.
- Right progress rail bottom label reads `227`.

CAUSE:
Speaker states the full scope of the curriculum ("Two hundred twenty-seven problems").

PRIMARY VISUAL REACTION:
- F211–F263: Top-right text `227 PROBLEMS` receives bright chalk highlight (`theme.chalkText`) and subtle scale pop (1.0 → 1.04 → 1.0).
- F263–F283: Right rail bottom label `227` pulses with matching gold accent.

MOVEMENT / MUTATION:
- Scale pop 1.0 → 1.04 → 1.0 over F211–F245.

SUPPORTING REACTION:
- Right progress rail track subtly increases opacity from 0.20 to 0.40.

COMPREHENSION HOLD:
- Integrated within W0013 duration (W0013 spans 52 frames, F211–F263).

SETTLE:
- Scale settles to 1.0 at F263; steady through F283.

STATE AFTER:
- Both `227` indicators highlighted; course scale established.

COMPONENTS:
- Permanent Roadmap Top Bar & Progress Rail

MOTION CLASS:
FOCUS / SCALE_PULSE

SVG CLASS:
N/A

VALIDATION:
- Current marker remains fixed at 011. Do not move marker to 227.
--------------------------------------------------

--------------------------------------------------
### BEAT D / ANCHOR `S01_19_PATTERNS`
--------------------------------------------------

Anchor:
`S01_19_PATTERNS`

Narration:
"across nineteen important patterns..." (transcribed as "across 19 important patterns")

Word IDs:
W0015 → W0018 ("across" → "patterns")

Audio:
start = 9.420 sec (9420 ms)  
end   = 12.320 sec (12320 ms)  

Frames:
start = F283  
end   = F370  

Available pause:
0.000 sec / 0 frames (immediate continuation into W0019)

STATE BEFORE:
- Left sidebar header reads `19 COURSE PATTERNS`.
- List of 19 patterns visible with Pattern 01 highlighted.

CAUSE:
Speaker names the pattern hierarchy ("across nineteen important patterns").

PRIMARY VISUAL REACTION:
- F283–F328: Left sidebar header `19 COURSE PATTERNS` brightens with `theme.pivot` accent.
- F328–F370: Subtle vertical highlight sweep cascades down the 19 pattern names in the sidebar, reinforcing the depth of the roadmap without changing any active status.

MOVEMENT / MUTATION:
- Vertical shimmer gradient moves down sidebar Y: 140 → 860 over F320–F365.

SUPPORTING REACTION:
- `01 Arrays & Hashing` remains distinct as the only `ACTIVE` pattern.

COMPREHENSION HOLD:
- F350–F370: Steady hold on completed sweep.

SETTLE:
- Sidebar returns to settled state with Pattern 01 cleanly active at F370.

STATE AFTER:
- 19 patterns registered in viewer's mind; hierarchy confirmed.

COMPONENTS:
- Roadmap Left Sidebar

MOTION CLASS:
FOCUS / SHIMMER_SWEEP

SVG CLASS:
N/A

VALIDATION:
- Patterns 02..19 remain inactive.
--------------------------------------------------

--------------------------------------------------
### BEAT E / ANCHOR `S01_INTERVIEW_PREP`
--------------------------------------------------

Anchor:
`S01_INTERVIEW_PREP`

Narration:
"built for serious interview preparation,"

Word IDs:
W0019 → W0023 ("built" → "preparation,")

Audio:
start = 12.320 sec (12320 ms)  
end   = 15.380 sec (15380 ms)  

Frames:
start = F370  
end   = F461  

Available pause:
0.420 sec / 13 frames (F461 → F474, pause P03)

STATE BEFORE:
- Full roadmap visible. Top bar, sidebar, main problem rows, right rail in view.

CAUSE:
Narration explains the purpose of the course ("built for serious interview preparation,").

PRIMARY VISUAL REACTION:
- F370–F440: Camera performs a very gentle, majestic wide-view hold (scale = 0.995) allowing the entire master curriculum to be viewed as a unified interview preparation engine.
- No new cards, dialogs, or popups appear (strict no-AI-slop rule).

MOVEMENT / MUTATION:
- Micro camera ease from 1.000 to 0.995 over F370–F420.

SUPPORTING REACTION:
- Board vignette subtly deepens at edges.

COMPREHENSION HOLD:
- F440–F474 (34 frames, including pause P03): Viewer absorbs the complete roadmap scale.

SETTLE:
- Camera motion comes to complete stop at F440.

STATE AFTER:
- Complete curriculum architecture framed clearly.

COMPONENTS:
- Camera Engine, Full Roadmap Shell

MOTION CLASS:
CAMERA_EASE / HOLD

SVG CLASS:
N/A

VALIDATION:
- Zero invented UI panels.
--------------------------------------------------

--------------------------------------------------
### BEAT F / ANCHOR `S01_FUNDAMENTALS`
--------------------------------------------------

Anchor:
`S01_FUNDAMENTALS`

Narration:
"from fundamentals..."

Word IDs:
W0024 → W0025 ("from" → "fundamentals")

Audio:
start = 15.800 sec (15800 ms)  
end   = 16.860 sec (16860 ms)  

Frames:
start = F474  
end   = F506  

Available pause:
0.000 sec / 0 frames (immediate continuation into W0026)

STATE BEFORE:
- Right rail top endpoint reads `001`. Early problem rows (Contains Duplicate, Valid Anagram, Two Sum) are visible.

CAUSE:
Speaker anchors the start of the journey ("from fundamentals").

PRIMARY VISUAL REACTION:
- F474–F506: Focus shifts to the top of the right rail `001` and the top completed rows (`001 Contains Duplicate`, `002 Valid Anagram`, `003 Two Sum`).
- A warm gold focus dot pulses gently at rail coordinate `001`.

MOVEMENT / MUTATION:
- Rail `001` marker glow pulse over F474–F500.

SUPPORTING REACTION:
- Rows 001–003 checkmarks (`✓`) reflect slight luminescent gleam.

COMPREHENSION HOLD:
- Settle into start of journey at F500–F506.

SETTLE:
- Focus stabilized at course beginning.

STATE AFTER:
- Foundation origin established; rail marker 011 remains unaffected.

COMPONENTS:
- Permanent Roadmap Progress Rail & Early Rows

MOTION CLASS:
FOCUS

SVG CLASS:
N/A

VALIDATION:
- Current thumb at 011 must NOT move.
--------------------------------------------------

--------------------------------------------------
### BEAT G / ANCHOR `S01_FAANG`
--------------------------------------------------

Anchor:
`S01_FAANG`

Narration:
"to FAANG-level problem solving."

Word IDs:
W0026 → W0030 ("to" → "solving.")

Audio:
start = 16.860 sec (16860 ms)  
end   = 19.440 sec (19440 ms)  

Frames:
start = F506  
end   = F583  

Available pause:
0.740 sec / 22 frames (F583 → F605, pause P04)

STATE BEFORE:
- Focus at top of rail. Current position thumb sits at 011.

CAUSE:
Speaker articulates the destination ("to FAANG-level problem solving.").

PRIMARY VISUAL REACTION:
- F506–F569: A temporary chalk tracer (`S4 TRACE_PATH`) travels smoothly along the progress rail track from the early region (near 001) all the way down to `227`.
- IMPORTANT DISTINCTION: This tracer represents the *span of the curriculum journey*, NOT the user's current position.

MOVEMENT / MUTATION:
- SVG path trace stroke draws along vertical rail `Y: 160 → 780` over F510–F565.
- F569–F595: Tracer glow recedes and fades out completely.

SUPPORTING REACTION:
- Rail bottom label `227` illuminates on tracer arrival (F560–F580).
- Permanent active thumb marker at `011` remains 100% stationary throughout.

COMPREHENSION HOLD:
- F583–F605 (22 frames, pause P04): Tracer has vanished; viewer sees permanent progress marker resting calmly at `011`.

SETTLE:
- Rail returns to clean default state by F600.

STATE AFTER:
- Course span demonstrated; current focus ready to snap to current problem.

COMPONENTS:
- `PathTracer` / SVG Stroke on Right Progress Rail

MOTION CLASS:
PATH_TRACE / JOURNEY_EMPHASIS

SVG CLASS:
S4 TRACE_PATH

VALIDATION:
- Tracer fully disappears before F605.
- Active position thumb never moves from 011.
--------------------------------------------------

--------------------------------------------------
### BEAT H / ANCHOR `S01_RIGHT_NOW`
--------------------------------------------------

Anchor:
`S01_RIGHT_NOW`

Narration:
"Right now..."

Word IDs:
W0031 → W0032 ("Right" → "now,")

Audio:
start = 20.180 sec (20180 ms)  
end   = 21.120 sec (21120 ms)  

Frames:
start = F605  
end   = F634  

Available pause:
0.160 sec / 4 frames (F634 → F638, pause P05)

STATE BEFORE:
- Wide roadmap view. Full-course journey tracer has receded.

CAUSE:
Speaker redirects attention to the immediate context ("Right now...").

PRIMARY VISUAL REACTION:
- F605–F634: Smooth, elegant camera re-centering: scale gently increases from `0.995` to `1.025`, centering precisely on Pattern 01 (left sidebar + main problem list Rows 008..012).

MOVEMENT / MUTATION:
- Camera interpolation: `scale: 0.995 -> 1.025`, `camX: 0 -> -30px`, `camY: 0 -> -15px` over F605–F634 (`EASE`).

SUPPORTING REACTION:
- Background peripheral elements (other patterns in sidebar) dim slightly (opacity 0.50 → 0.35).

COMPREHENSION HOLD:
- F634–F638 (4 frames, pause P05): Natural speech breathing hold.

SETTLE:
- Camera focus locked on Pattern 01 section at F634.

STATE AFTER:
- Pattern 01 is center of visual attention.

COMPONENTS:
- Camera Engine, Roadmap Layout

MOTION CLASS:
CAMERA_PAN_ZOOM / FOCUS_TRANSITION

SVG CLASS:
N/A

VALIDATION:
- No sudden jumps or cuts. Continuous coordinate easing.
--------------------------------------------------

--------------------------------------------------
### BEAT I / ANCHOR `S01_ARRAYS_HASHING`
--------------------------------------------------

Anchor:
`S01_ARRAYS_HASHING`

Narration:
"we are inside arrays and hashing."

Word IDs:
W0033 → W0038 ("we" → "hashing.")

Audio:
start = 21.280 sec (21280 ms)  
end   = 24.240 sec (24240 ms)  

Frames:
start = F638  
end   = F727  

Available pause:
0.600 sec / 18 frames (F727 → F745, pause P06)

STATE BEFORE:
- Camera centered on Pattern 01. Sidebar row `01 Arrays & Hashing` and main header `PATTERN 01 · Arrays & Hashing` in view.

CAUSE:
Speaker names the active pattern category ("we are inside arrays and hashing.").

PRIMARY VISUAL REACTION:
- F638–F703: Synchronized dual pivot highlight:
  1. Left sidebar badge `01 Arrays & Hashing` pulses with `theme.pivot` glow.
  2. Main area header `PATTERN 01 · Arrays & Hashing` receives a crisp chalk underline (`RoughLine`).

MOVEMENT / MUTATION:
- Header underline draws left-to-right over F655–F703.

SUPPORTING REACTION:
- Header counter `10 / 18 COMPLETED` subtly glows in `theme.cyan`.

COMPREHENSION HOLD:
- F727–F745 (18 frames, pause P06): Intentional comprehension hold during pause P06.

SETTLE:
- Underline stroke settled; both category elements rest in active pivot state at F727.

STATE AFTER:
- Pattern 01 authority fully established.

COMPONENTS:
- `RoughLine`, Roadmap Main Header, Left Sidebar

MOTION CLASS:
T0 STATE_CHANGE / DUAL_FOCUS

SVG CLASS:
S1 DRAW_NEW (Chalk underline)

VALIDATION:
- No progress count mutation (remains 10 / 18).
--------------------------------------------------

--------------------------------------------------
### BEAT J / ANCHOR `S01_Q10`
--------------------------------------------------

Anchor:
`S01_Q10`

Narration:
"Question ten..." (transcribed as "Question 10.")

Word IDs:
W0039 → W0040 ("Question" → "10.")

Audio:
start = 24.840 sec (24840 ms)  
end   = 25.960 sec (25960 ms)  

Frames:
start = F745  
end   = F779  

Available pause:
0.000 sec / 0 frames (immediate continuation into W0041)

STATE BEFORE:
- Main problem list visible. Row 010 shows completed checkmark and title. Row 011 below shows `UP NEXT`.

CAUSE:
Speaker begins reference to the previous problem ("Question ten...").

PRIMARY VISUAL REACTION:
- F745–F779: Row 010 gains primary optical focus:
  - Row number `010` illuminates in bright mono white.
  - Row container receives a gentle spotlight emphasis.

MOVEMENT / MUTATION:
- Soft focus brightness ramp on Row 010 over F745–F765.

SUPPORTING REACTION:
- Surrounding rows (008, 009, 012) recede slightly in opacity (0.7 → 0.45). Row 011 remains clearly visible at 0.85 opacity.

COMPREHENSION HOLD:
- Integrated in speech pace (W0040 ends at F779).

SETTLE:
- Row 010 locked as active subject.

STATE AFTER:
- Attention isolated on Row 010.

COMPONENTS:
- Problem Row 010

MOTION CLASS:
ROW_FOCUS

SVG CLASS:
N/A

VALIDATION:
- Row 010 is already completed; do not show state mutation.
--------------------------------------------------

--------------------------------------------------
### BEAT K / ANCHOR `S01_Q10_TITLE`
--------------------------------------------------

Anchor:
`S01_Q10_TITLE`

Narration:
"Longest consecutive sequence..."

Word IDs:
W0041 → W0043 ("Longest" → "sequence")

Audio:
start = 25.960 sec (25960 ms)  
end   = 28.620 sec (28620 ms)  

Frames:
start = F779  
end   = F859  

Available pause:
0.000 sec / 0 frames (immediate continuation into W0044)

STATE BEFORE:
- Row 010 focused. Title reads `Longest Consecutive Sequence`.

CAUSE:
Speaker names problem 10 ("Longest consecutive sequence...").

PRIMARY VISUAL REACTION:
- F779–F859: Title text `Longest Consecutive Sequence` receives clean chalk emphasis.
- A delicate chalk bracket or subtle underline confirms the title string.

MOVEMENT / MUTATION:
- Title glow eases 1.0 → 1.1 → 1.0 over F785–F835.

SUPPORTING REACTION:
- Metadata tags `LC 128` and `MEDIUM` remain crisp.

COMPREHENSION HOLD:
- Seamless speech delivery across W0041..W0043.

SETTLE:
- Title steady at F859.

STATE AFTER:
- Problem 10 identity verified.

COMPONENTS:
- Problem Row 010 Title

MOTION CLASS:
TEXT_FOCUS

SVG CLASS:
N/A

VALIDATION:
- Title matches canonical name.
--------------------------------------------------

--------------------------------------------------
### BEAT L / ANCHOR `S01_Q10_COMPLETE`
--------------------------------------------------

Anchor:
`S01_Q10_COMPLETE`

Narration:
"is complete."

Word IDs:
W0044 → W0045 ("is" → "complete.")

Audio:
start = 28.620 sec (28620 ms)  
end   = 29.940 sec (29940 ms)  

Frames:
start = F859  
end   = F898  

Available pause:
0.740 sec / 22 frames (F898 → F920, pause P07)

STATE BEFORE:
- Row 010 title highlighted. Status badge already reads `COMPLETE` (from Q10 ending).

CAUSE:
Speaker confirms completion ("is complete.").

PRIMARY VISUAL REACTION:
- F859–F898: Confirmation redraw (`S3 REDRAW_CONFIRM`):
  - The existing green checkmark (`✓`) at Row 010 executes a crisp, confident redraw stroke over F862–F885.
  - The `COMPLETE` badge pulses with a soft green luminescence (`theme.good`) and settles.

MOVEMENT / MUTATION:
- Checkmark stroke redraw progress 0 → 1 over F862–F885.
- Badge scale pop: 1.0 → 1.06 → 1.0 over F865–F895.

SUPPORTING REACTION:
- Top badge `10 / 227 COMPLETE` remains rock solid. NO duplicate counter roll!

COMPREHENSION HOLD:
- F898–F920 (22 frames, pause P07): Complete satisfaction hold during pause P07.

SETTLE:
- Checkmark and badge return to resting green state at F898; hold through F920.

STATE AFTER:
- Q010 completion affirmed with zero false progress advancement.

COMPONENTS:
- Problem Row 010 Status Badge & Checkmark (`RoughBox`, `RoughLine`)

MOTION CLASS:
CONFIRMATION_PULSE

SVG CLASS:
S3 REDRAW_CONFIRM

VALIDATION:
- Absolutely NO change to 10/227 counter.
- No new active indicator on 010.
--------------------------------------------------

--------------------------------------------------
### BEAT M / ANCHOR `S01_NEXT_PROBLEM`
--------------------------------------------------

Anchor:
`S01_NEXT_PROBLEM`

Narration:
"Now we move to the next problem..."

Word IDs:
W0046 → W0052 ("Now" → "problem.")

Audio:
start = 30.680 sec (30680 ms)  
end   = 32.520 sec (32520 ms)  

Frames:
start = F920  
end   = F976  

Available pause:
1.440 sec / 43 frames (F976 → F1019, pause P08 — Major Curriculum Pivot)

STATE BEFORE:
- Row 010 focused in completed state. Row 011 sits immediately below in `UP NEXT` state (`▶`, gold border, `UP NEXT` badge).

CAUSE:
Speaker signals the transition to the new lesson ("Now we move to the next problem...").

PRIMARY VISUAL REACTION:
- F920–F960: Focus transfer:
  - Row 010 spotlight smoothly recedes to standard completed appearance.
  - Row 011 receives ascending gold focus glow (`theme.pivot`).
- Camera gently shifts downward by exactly one row unit (approx. +44px in Y) over F930–F970 to place Row 011 directly into optical center.

MOVEMENT / MUTATION:
- Camera translation: `camY: -15px -> -59px` over F930–F970 (`EASE`).
- Row 011 border highlight fades in 0.4 → 1.0.

SUPPORTING REACTION:
- Right progress rail active indicator at `011` pulses with expectant gold sheen.

COMPREHENSION HOLD:
- F976–F1019 (43 frames, pause P08): A generous, dramatic 1.44-second hold! The audience anticipates the reveal of Problem 11 while Row 011 glows in `UP NEXT` status.

SETTLE:
- Camera and focus fully settled by F976; quiet, focused hold until F1019.

STATE AFTER:
- Row 011 is dead-center on screen, still labeled `UP NEXT`, poised for activation.

COMPONENTS:
- Camera Engine, Problem Rows 010 & 011

MOTION CLASS:
FOCUS_TRANSFER / CAMERA_PAN

SVG CLASS:
N/A

VALIDATION:
- Row 011 is STILL `UP NEXT`. It must NOT change to `NOW ACTIVE` before anchor `S01_Q11` at F1019.
--------------------------------------------------

--------------------------------------------------
### BEAT N / ANCHOR `S01_Q11`
--------------------------------------------------

Anchor:
`S01_Q11`

Narration:
"Question eleven..." (transcribed as "Question 11.")

Word IDs:
W0053 → W0054 ("Question" → "11.")

Audio:
start = 33.960 sec (33960 ms)  
end   = 34.740 sec (34740 ms)  

Frames:
start = F1019  
end   = F1042  

Available pause:
0.380 sec / 12 frames (F1042 → F1054, pause P09)

STATE BEFORE:
- Row 011 is centered, marked `UP NEXT` with icon `▶`.

CAUSE:
Speaker formally announces the problem ("Question eleven...").

PRIMARY VISUAL REACTION:
- F1019–F1042: **THE CANONICAL ACTIVATION MOMENT (`T0 STATE_CHANGE`)**:
  - The status icon transforms: `▶` (UP NEXT) erases / recedes over F1019–F1028, and `●` (NOW ACTIVE solid pivot disc) reveals over F1028–F1040.
  - The status badge changes: `UP NEXT` label dissolves out (F1019–F1027), and `NOW ACTIVE` badge writes in with bold pivot gold background (`theme.pivot`) and dark board text (`theme.boardBg`) over F1028–F1042.
  - Row 011 rough border snaps to full hero chalk intensity (`theme.pivot` with soft gold shadow).

MOVEMENT / MUTATION:
- Badge text swap: `UP NEXT` opacity 1 → 0 (F1019–F1027); `NOW ACTIVE` opacity 0 → 1 with pop scale 0.92 → 1.0 (F1028–F1042).
- Row number `011` flashes bright gold.

SUPPORTING REACTION:
- Right rail marker at `011` locks with double-ring confirmation.
- Top progress badge `10 / 227 COMPLETE` remains strictly 10. (Q11 is active, NOT complete!).

COMPREHENSION HOLD:
- F1042–F1054 (12 frames, pause P09): Settle on the newly activated row.

SETTLE:
- Row 011 is firmly in `NOW ACTIVE` state by F1042.

STATE AFTER:
- Row 011 is officially the active question of the course.

COMPONENTS:
- Problem Row 011 (`RoughBox`, status badge, icon slot)

MOTION CLASS:
T0 STATE_CHANGE (Status mutation)

SVG CLASS:
N/A

VALIDATION:
- Text is cleanly replaced, NOT glyph-morphed.
- No change to global completed count.
--------------------------------------------------

--------------------------------------------------
### BEAT O / ANCHOR `S01_SORT_COLORS`
--------------------------------------------------

Anchor:
`S01_SORT_COLORS`

Narration:
"Sort colors."

Word IDs:
W0055 → W0056 ("Sort" → "colors.")

Audio:
start = 35.120 sec (35120 ms)  
end   = 35.940 sec (35940 ms)  

Frames:
start = F1054  
end   = F1078  

Available pause:
0.680 sec / 21 frames (F1078 → F1099, pause P10)

STATE BEFORE:
- Row 011 is active. Title reads `Sort Colors`.

CAUSE:
Speaker reveals the problem title ("Sort colors.").

PRIMARY VISUAL REACTION:
- F1054–F1078: Title `Sort Colors` scales up slightly (font-size 22 → 26px equivalent pop) and gains vibrant chalk white luminescence (`theme.chalkText`).
- A subtle gold chalk underline (`RoughLine`) draws beneath `Sort Colors` over F1058–F1078.

MOVEMENT / MUTATION:
- Underline draw: progress 0 → 1 over F1058–F1078.
- Subtle glow bloom on title text.

SUPPORTING REACTION:
- Secondary subtitle tag `· Dutch National Flag` appears softly in `theme.cyan` next to the title.

COMPREHENSION HOLD:
- F1078–F1099 (21 frames, pause P10): Audience reads and registers the title during pause P10.

SETTLE:
- Underline fully drawn at F1078; holds steady through F1099.

STATE AFTER:
- `Sort Colors` is the undisputed visual hero on the chalkboard.

COMPONENTS:
- `RoughLine`, Problem Row 011 Title

MOTION CLASS:
TEXT_HERO_REVEAL / UNDERLINE_DRAW

SVG CLASS:
S1 DRAW_NEW (Chalk underline)

VALIDATION:
- NO array graphics appear.
- NO 0/1/2 color swatches appear. Center stage remains clear.
--------------------------------------------------

--------------------------------------------------
### BEAT P / ANCHOR `S01_LC75`
--------------------------------------------------

Anchor:
`S01_LC75`

Narration:
"LeetCode seventy-five..." (transcribed as "Lead code 75,")

Word IDs:
W0057 → W0059 ("Lead" → "75,")

Audio:
start = 36.620 sec (36620 ms)  
end   = 38.040 sec (38040 ms)  

Frames:
start = F1099  
end   = F1141  

Available pause:
0.820 sec / 25 frames (F1141 → F1166, pause P11)

STATE BEFORE:
- Metadata tag in Row 011 reads `LC 75`.

CAUSE:
Speaker states the LeetCode catalog number ("LeetCode seventy-five").

PRIMARY VISUAL REACTION:
- F1099–F1141: Metadata tag `LC 75` illuminates in monospace gold (`theme.pivot`).
- A small chalk box outline (`RoughBox`) draws around `LC 75`.

MOVEMENT / MUTATION:
- RoughBox stroke progress 0 → 1 over F1105–F1135.

SUPPORTING REACTION:
- Difficulty tag next to it prepares for focus.

COMPREHENSION HOLD:
- F1141–F1166 (25 frames, pause P11): Clear 0.82-second pause before difficulty announcement.

SETTLE:
- Box outline settled at F1135; steady through F1166.

STATE AFTER:
- `LC 75` verified and highlighted.

COMPONENTS:
- `RoughBox`, Metadata Tag

MOTION CLASS:
METADATA_FOCUS

SVG CLASS:
S1 DRAW_NEW (RoughBox outline)

VALIDATION:
- Captions display normalized `"LeetCode 75,"`.
--------------------------------------------------

--------------------------------------------------
### BEAT Q / ANCHOR `S01_MEDIUM`
--------------------------------------------------

Anchor:
`S01_MEDIUM`

Narration:
"Medium."

Word IDs:
W0060 → W0060 ("medium.")

Audio:
start = 38.860 sec (38860 ms)  
end   = 39.140 sec (39140 ms)  

Frames:
start = F1166  
end   = F1174  

Available pause:
0.880 sec / 27 frames (F1174 → F1201, pause P12)

STATE BEFORE:
- Difficulty badge in Row 011 reads `MEDIUM`.

CAUSE:
Speaker announces problem difficulty ("Medium.").

PRIMARY VISUAL REACTION:
- F1166–F1174: `MEDIUM` badge illuminates with warm gold/amber sheen (`theme.pivot`), matching course medium difficulty semantics.
- Badge executes a subtle pop scale: 1.0 → 1.08 → 1.0 over F1166–F1185.

MOVEMENT / MUTATION:
- Scale pop over F1166–F1185.

SUPPORTING REACTION:
- Row 011 complete metadata lock: `011` + `Sort Colors` + `LC 75` + `MEDIUM` + `NOW ACTIVE`.

COMPREHENSION HOLD:
- F1174–F1201 (27 frames, pause P12): Full question identity fully formed and shining on screen for 0.88 seconds before handoff.

SETTLE:
- Complete row settled at F1185; holds steady through F1201.

STATE AFTER:
- Complete Q011 identity confirmed and ready for transition.

COMPONENTS:
- Difficulty Badge, Problem Row 011

MOTION CLASS:
BADGE_POP / FOCUS

SVG CLASS:
N/A

VALIDATION:
- Uses existing course Medium color token.
--------------------------------------------------

--------------------------------------------------
### BEAT R / ANCHOR `S01_CONTINUE`
--------------------------------------------------

Anchor:
`S01_CONTINUE`

Narration:
"Let’s continue."

Word IDs:
W0061 → W0062 ("Let's" → "continue.")

Audio:
start = 40.020 sec (40020 ms)  
end   = 40.780 sec (40780 ms)  

Frames:
start = F1201  
end   = F1223 (exact end of scene audio and video!)

Available pause:
0.000 sec / 0 frames (scene boundary at F1223)

STATE BEFORE:
- Row 011 is active in center of roadmap. Peripheral roadmap elements visible around it.

CAUSE:
Speaker calls to begin the problem analysis ("Let’s continue.").

PRIMARY VISUAL REACTION:
- F1201–F1223: **THE CANONICAL REPRESENTATION HANDOFF (`T8 REPRESENTATION_HANDOFF`)**:
  1. Roadmap surroundings (top bar, sidebar, other problem rows, right rail) smoothly fade out to zero opacity over F1201–F1218 (`opacity: 1.0 -> 0.0`).
  2. The Q011 identity (`PATTERN 01 · ARRAYS & HASHING`, `Sort Colors`, `LC 75`, `MEDIUM`) smoothly glides upward from center (`Y: 480`) to top opener position (`Y: 120`) over F1201–F1223 (`EASE`).
  3. Q011 title settles into the exact header position and font hierarchy of Foundation V2 `ProblemOpenerShell`.

MOVEMENT / MUTATION:
- Surrounding roadmap opacity: 1.0 → 0.0 over F1201–F1218.
- Header glide: `Y: 480 -> 120px` over F1201–F1223.
- Title scale adjust to match ProblemOpener title scale over F1205–F1223.

SUPPORTING REACTION:
- Center stage of chalkboard becomes completely clean, empty, and spacious.
- NO array values appear yet.
- NO solution spoiler.

COMPREHENSION HOLD:
- Smooth continuous glide directly into frame 1222/1223.

SETTLE:
- At F1223, the screen rests in the exact initial visual state required by Scene 02 (`02-understand`):
  - Deep green chalkboard canvas (`#18523d`)
  - Top header: `01 · ARRAYS & HASHING` | `LC 75` | `MEDIUM` | `Sort Colors`
  - Center stage: Completely empty, ready for master example array entrance in Scene 02.

STATE AFTER (Scene 02 Source State):
- Clean, focused chalkboard with ProblemOpener header settled at top.
- Ready for Scene 02 Frame 0.

COMPONENTS:
- `ProblemOpenerShell`, Camera Engine, Roadmap Row 011

MOTION CLASS:
T8 REPRESENTATION_HANDOFF

SVG CLASS:
N/A

VALIDATION:
- Final frame is exactly F1223 (`duration_frames = 1223`).
- Seamless handoff into Scene 02 without teaching the problem twice.
--------------------------------------------------

---

## Complete Frame-Span Timeline Matrix

| Beat | Anchor ID | Narration Phrase | Word IDs | Start Frame | End Frame | Available Pause | Total Window |
|---|---|---|---|---|---|---|---|
| **A** | `S01_WELCOME` | "Welcome back to Code with Animation." | W0000..W0005 | **F0** | F68 | 16F (P01) | **F0 – F84** |
| **B** | `S01_ROADMAP` | "We are continuing our DSA pattern roadmap," | W0006..W0012 | **F84** | F190 | 21F (P02) | **F84 – F211** |
| **C** | `S01_227` | "Two hundred twenty-seven problems..." | W0013..W0014 | **F211** | F283 | 0F | **F211 – F283** |
| **D** | `S01_19_PATTERNS` | "across nineteen important patterns..." | W0015..W0018 | **F283** | F370 | 0F | **F283 – F370** |
| **E** | `S01_INTERVIEW_PREP` | "built for serious interview preparation," | W0019..W0023 | **F370** | F461 | 13F (P03) | **F370 – F474** |
| **F** | `S01_FUNDAMENTALS` | "from fundamentals..." | W0024..W0025 | **F474** | F506 | 0F | **F474 – F506** |
| **G** | `S01_FAANG` | "to FAANG-level problem solving." | W0026..W0030 | **F506** | F583 | 22F (P04) | **F506 – F605** |
| **H** | `S01_RIGHT_NOW` | "Right now..." | W0031..W0032 | **F605** | F634 | 4F (P05) | **F605 – F638** |
| **I** | `S01_ARRAYS_HASHING` | "we are inside arrays and hashing." | W0033..W0038 | **F638** | F727 | 18F (P06) | **F638 – F745** |
| **J** | `S01_Q10` | "Question ten..." | W0039..W0040 | **F745** | F779 | 0F | **F745 – F779** |
| **K** | `S01_Q10_TITLE` | "Longest consecutive sequence..." | W0041..W0043 | **F779** | F859 | 0F | **F779 – F859** |
| **L** | `S01_Q10_COMPLETE` | "is complete." | W0044..W0045 | **F859** | F898 | 22F (P07) | **F859 – F920** |
| **M** | `S01_NEXT_PROBLEM` | "Now we move to the next problem..." | W0046..W0052 | **F920** | F976 | 43F (P08) | **F920 – F1019** |
| **N** | `S01_Q11` | "Question eleven..." | W0053..W0054 | **F1019** | F1042 | 12F (P09) | **F1019 – F1054** |
| **O** | `S01_SORT_COLORS` | "Sort colors." | W0055..W0056 | **F1054** | F1078 | 21F (P10) | **F1054 – F1099** |
| **P** | `S01_LC75` | "LeetCode seventy-five..." | W0057..W0059 | **F1099** | F1141 | 25F (P11) | **F1099 – F1166** |
| **Q** | `S01_MEDIUM` | "Medium." | W0060..W0060 | **F1166** | F1174 | 27F (P12) | **F1166 – F1201** |
| **R** | `S01_CONTINUE` | "Let’s continue." | W0061..W0062 | **F1201** | **F1223** | 0F | **F1201 – F1223** |

**Total Duration Check:** F0 to F1223 = exactly 1,223 frames (40.780 seconds). No gap, no overlap.
