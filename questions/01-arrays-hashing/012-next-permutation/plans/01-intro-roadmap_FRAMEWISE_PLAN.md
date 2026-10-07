# Q12 — Next Permutation (LC 31)
# Scene 01 · Course Roadmap Resume & Q12 Activation
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Previous Problem:** #011 Sort Colors · LC 75 · COMPLETE  
**Current Problem:** #012 Next Permutation · LC 31 · Medium  
**Audio File:** `questions/01-arrays-hashing/012-next-permutation/audio/01-intro-roadmap.mp3` (symlinked / mapped to `scence-01.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/012-next-permutation/sync/01-intro-roadmap.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/012-next-permutation/sync/01-intro-roadmap.anchors.json`  
**FPS:** 30  
**Exact Total Frames:** 767 frames (25.560 seconds)  

---

## 1. Mandatory Scene Contract

```text
SCENE: 01-intro-roadmap
QUESTION: 012 · Next Permutation (LeetCode 31)
BEAT TYPE: INTRO / ROADMAP RESUME
AUDIO FILE: audio/01-intro-roadmap.mp3
SYNC FILE: sync/01-intro-roadmap.json
ANCHORS FILE: sync/01-intro-roadmap.anchors.json
FPS: 30
TOTAL FRAMES: 767
PEDAGOGICAL GOAL: Resume the authoritative Master DSA Pattern Roadmap from the exact settled end-state of Q11 Scene 10 (11/227 COMPLETE, Q011 COMPLETE, Q012 UP NEXT, rail at 012); confirm Q011 complete without re-triggering progress counters; activate Q012 (UP NEXT -> NOW ACTIVE) on exact spoken anchor "Question twelve"; perform a clean semantic representation handoff into ProblemOpenerShell for Scene 02 understanding.
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
    completedCount: 11
    completedGlobalNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    activePatternId: 1
    activeGlobalNum: undefined (F0..F408), mutates to 12 at F409 ("Question twelve")
    upNextGlobalNum: 12 (F0..F408), undefined from F409 onward
    spotlightRow: 11 during Beats C-E, 12 during Beats F-J
    handoffFade: 0.0 (F0..F701), interpolates to 1.0 (F702..F767)

CREATE:
- sync/01-intro-roadmap.anchors.json (Authoritative anchor manifest)
- Scene01Intro.tsx (Stage 16 Antigravity implementation)

DO NOT TOUCH:
- @dsa/kit core libraries
- Q011 regression reference source files
- Roadmap structure or problem ordering
- Global completion counter (11 / 227 is strictly immutable in Scene 01)

MOTION SEMANTICS:
- Reorientation settle (Beat A: camera 1.008 -> 1.000)
- Identity highlight (Beat B: header chalk underline)
- Row spotlight shifts (Beat C: Q011 spotlight, Beat F: spotlight pan to Q012)
- State confirmation pulse (Beat E: green checkmark glow, 0 counter mutation)
- Canonical state mutation (Beat G: UP NEXT gold -> NOW ACTIVE green/cyan badge)
- Metadata illumination (Beats H, I, J: title, LC 31, Medium badges)
- Wide pattern reconnect (Beat K: Pattern 01 section framing)
- Representation handoff (Beat L: surroundings fade, Q012 header docks into ProblemOpenerShell)
- Zero arbitrary/decorative motion

MORPH SEMANTICS:
- T0 STATE_CHANGE (Q012 badge mutates: UP NEXT [▶] -> NOW ACTIVE [●])
- T8 REPRESENTATION_HANDOFF (Roadmap Q012 row identity -> ProblemOpenerShell header)
- Forbidden: No T3 path morph of text; no generic SaaS card transformations

SVG SEMANTICS:
- S3 REDRAW_CONFIRM (Q011 checkmark redraw confirmation in Beat E)
- Rough underline draw on header (Beat B) and title (Beat H)

TRANSITION IN:
- Continuous frame-0 provenance: exact final settled frame of Q11 Scene 10
- 11 / 227 COMPLETE, Pattern 01 active, Q011 COMPLETE, Q012 UP NEXT, rail thumb at 012

TRANSITION OUT:
- Clean representation handoff into ProblemOpenerShell
- Roadmap shell fades out (opacity: 1 -> 0); Q012 title and badges lock into top header
- Center stage intentionally empty (Y: 220–760) ready for Scene 02 master array reveal

FORBIDDEN:
- Replaying Q011 completion animation (10 -> 11 counter increment)
- Advancing global progress to 12 / 227 (Q012 is NOT yet solved)
- Advancing progress rail 011 -> 012 (already sitting at 012 at F0)
- Early activation of Q012 before frame 409 ("Question twelve")
- Revealing array values [2, 1, 5, 4, 4, 3, 0] or permutation definitions
- Revealing Pivot, Successor, or Reversal solution hints
- Introducing generic SaaS cards, dashboard panels, or new palette colors
```

---

## 2. Audio-Anchor Table

Derived strictly from validated exact sync data (`sync/01-intro-roadmap.json`):

| Anchor ID | Spoken Phrase | Word ID Span | Audio Span (s) | Frame Range `[start, endExcl)` | Total Frames | Available Pause | Teaching Purpose |
|---|---|---|---|---|---|---|---|
| `S01_WELCOME` | "Welcome back to Code with Animation." | W0000..W0005 | 0.000 – 2.160s | `[0, 65)` | 65 F | 16 F (F65..F81) | Resume exact course shell from Q11 final roadmap |
| `S01_ROADMAP` | "We are continuing our DSA pattern roadmap." | W0006..W0012 | 2.700 – 5.780s | `[81, 173)` | 92 F | 30 F (F173..F203) | Focus permanent roadmap identity `DSA PATTERN ROADMAP` |
| `S01_Q11` | "Question 11," | W0013..W0014 | 6.760 – 7.640s | `[203, 229)` | 26 F | 19 F (F229..F248) | Direct attention to previous problem row Q011 |
| `S01_SORT_COLORS` | "sort colors," | W0015..W0016 | 8.280 – 8.960s | `[248, 269)` | 21 F | 13 F (F269..F282) | Focus Q011 title text |
| `S01_Q11_COMPLETE` | "is complete." | W0017..W0018 | 9.400 – 10.140s | `[282, 304)` | 22 F | 27 F (F304..F331) | Confirm existing Q011 COMPLETE state (0 counter mutation) |
| `S01_NEXT_PROBLEM` | "Now we move to the next problem." | W0019..W0025 | 11.020 – 12.760s | `[331, 383)` | 52 F | 26 F (F383..F409) | Transfer focus Q011 -> Q012 (Q012 remains UP NEXT) |
| `S01_Q12` | "Question 12," | W0026..W0027 | 13.640 – 14.740s | `[409, 442)` | 33 F | 13 F (F442..F455) | Canonical activation: Q012 UP NEXT -> NOW ACTIVE |
| `S01_NEXT_PERMUTATION` | "next permutation," | W0028..W0029 | 15.180 – 16.540s | `[455, 496)` | 41 F | 19 F (F496..F515) | Focus Q012 title `Next Permutation` |
| `S01_LC31` | "LeetCode 31," (whisper: "lead code 31,") | W0030..W0032 | 17.160 – 18.320s | `[515, 550)` | 35 F | 25 F (F550..F575) | Focus LC 31 catalog metadata badge |
| `S01_MEDIUM` | "medium." | W0033 | 19.160 – 19.460s | `[575, 584)` | 9 F | 22 F (F584..F606) | Focus MEDIUM difficulty badge with amber highlight |
| `S01_ARRAYS_HASHING` | "We are still inside arrays and hashing." | W0034..W0040 | 20.200 – 22.820s | `[606, 685)` | 79 F | 17 F (F685..F702) | Reconnect problem to Pattern 01 section framing |
| `S01_UNDERSTAND` | "Let's understand the question first." | W0041..W0045 | 23.400 – 25.560s | `[702, 767)` | 65 F | 0 F (Scene Boundary) | Representation handoff to ProblemOpenerShell |

---

## 3. Pause & Comprehension Catalog

Every pause is derived directly from adjacent word boundaries (`gapMs = words[i+1].startMs - words[i].endMs`):

| Pause ID | Anchor Preceding | Anchor Following | Audio Gap | Frame Window | Gap Duration | Pause Category | Deterministic Visual Purpose |
|---|---|---|---|---|---|---|---|
| `P01` | `S01_WELCOME` | `S01_ROADMAP` | 2160 – 2700 ms | F65 – F81 | 16 frames (540 ms) | Teaching Hold | Learner re-orients inside the familiar Master Roadmap canvas; camera lock at 1.000 |
| `P02` | `S01_ROADMAP` | `S01_Q11` | 5780 – 6760 ms | F173 – F203 | 30 frames (980 ms) | Major Step Boundary | Header underline settles; roadmap shell stays clear before row spotlight begins |
| `P03` | `S01_Q11` | `S01_SORT_COLORS` | 7640 – 8280 ms | F229 – F248 | 19 frames (640 ms) | Teaching Hold | Q011 row border glow stabilizes; learner registers row number 011 |
| `P04` | `S01_SORT_COLORS` | `S01_Q11_COMPLETE` | 8960 – 9400 ms | F269 – F282 | 13 frames (440 ms) | Teaching Hold | Title focus settles; prepares for completion checkmark confirmation |
| `P05` | `S01_Q11_COMPLETE` | `S01_NEXT_PROBLEM` | 10140 – 11020 ms | F304 – F331 | 27 frames (880 ms) | Major Step Boundary | Checkmark confirmation glow settles; counter explicitly confirmed at 11/227 |
| `P06` | `S01_NEXT_PROBLEM` | `S01_Q12` | 12760 – 13640 ms | F383 – F409 | 26 frames (880 ms) | Major Anticipation Hold | Camera pan down to Row 012 completes; Row 012 held in UP NEXT state before activation |
| `P07` | `S01_Q12` | `S01_NEXT_PERMUTATION` | 14740 – 15180 ms | F442 – F455 | 13 frames (440 ms) | Teaching Hold | Q012 NOW ACTIVE badge settles; attention shifts from status badge to title container |
| `P08` | `S01_NEXT_PERMUTATION`| `S01_LC31` | 16540 – 17160 ms | F496 – F515 | 19 frames (620 ms) | Teaching Hold | Title text underline locks; learner absorbs "Next Permutation" name |
| `P09` | `S01_LC31` | `S01_MEDIUM` | 18320 – 19160 ms | F550 – F575 | 25 frames (840 ms) | Teaching Hold | LC 31 badge outline settles; focus shifts smoothly to difficulty rating |
| `P10` | `S01_MEDIUM` | `S01_ARRAYS_HASHING` | 19460 – 20200 ms | F584 – F606 | 22 frames (740 ms) | Major Transition Hold | Complete Q012 row locked; camera prepares wide zoom out to Pattern 01 boundary |
| `P11` | `S01_ARRAYS_HASHING` | `S01_UNDERSTAND` | 22820 – 23400 ms | F685 – F702 | 17 frames (580 ms) | Teaching Hold | Pattern 01 focus holds; prepares transition out to ProblemOpenerShell |

---

## 4. Optical Zones & Deterministic Geometry

The scene operates within the standard 1920×1080 canvas without arbitrary pixel guessing:

```text
========================================================================================
ZONE 1: TOP BAR (Y: 28 – 78, Height: 50px)
- Left: "CODE WITH ANIMATION" branding (X: 52, Y: 36, font: Outfit SemiBold, 22px)
- Center: "DSA PATTERN ROADMAP" header (X: 740–1180, Y: 34, font: Outfit Bold, 26px)
- Right: Progress Badge "11 / 227 COMPLETE" (X: 1640, Y: 34, width: 228px, height: 38px)
----------------------------------------------------------------------------------------
ZONE 2: SIDEBAR — 19 COURSE PATTERNS (X: 52 – 380, Width: 328px, Y: 106 – 940)
- Header: "19 COURSE PATTERNS" (X: 70, Y: 124, 18px)
- Pattern Item 01: "01 · Arrays & Hashing" (ACTIVE, green badge, X: 68, Y: 162, height: 44px)
- Pattern Items 02..19: Listed in sequence, standard dimmed chalk opacity (0.42)
----------------------------------------------------------------------------------------
ZONE 3: CENTER-STAGE CURRICULUM AREA (X: 416 – 1780, Width: 1364px, Y: 106 – 940)
- Pattern Header: "PATTERN 01 · Arrays & Hashing" (X: 440, Y: 132, 28px)
- Subheader / Counter: "11 / 18 COMPLETED" (X: 440, Y: 172, 18px)
- Problem Rows Container: (X: 440, Y: 210, width: 1320px)
    - Row Height: 64px, Gap: 10px
    - Row 001..010: Completed rows (Y: 210 + i * 74)
    - Row 011 (Sort Colors): Y = 210 + 10 * 74 = Y: 950 (or in scroll viewport Y: 654)
    - Row 012 (Next Permutation): Y = 210 + 11 * 74 = Y: 728 (in centered viewport)
----------------------------------------------------------------------------------------
ZONE 4: VERTICAL PROGRESS RAIL (X: 1848 – 1876, Width: 28px, Y: 106 – 940)
- Top Label: "001" (Y: 114)
- Rail Line: Center X: 1862, Y: 134 to Y: 914 (Total Travel: 780px)
- Active Thumb Marker: Positioned at problem 12: Y = 134 + (12 / 227) * 780 = Y: 175px
- Bottom Label: "227" (Y: 932)
----------------------------------------------------------------------------------------
ZONE 5: SUBTITLE / CAPTIONS ZONE (Y: 960 – 1040, Safe Center X: 960)
- Captions component renders high-contrast Indian English subtitles synchronized with words.
========================================================================================
```

---

## 5. Frame-Wise Choreography (Beats A through L)

Every beat follows the **Mandatory 19-Field Framewise Beat Schema**:

```text
BEAT: [Identifier]
ANCHOR: [Anchor ID]
NARRATION: [Exact spoken phrase]
WORD IDs: [Sequential stable word IDs]
AUDIO: [Start time .. End time]
FRAMES: [startFrame .. endFrameExclusive) (total duration)
AVAILABLE PAUSE: [Available silence window]
STATE BEFORE: [Authoritative canvas state prior to beat]
WHAT APPEARS NOW: [New or mutating components]
CENTER-STAGE HERO: [Single focal teaching object]
CAUSE: [Narration cue triggering the visual]
PRIMARY SEMANTIC REACTION: [Direct visual change]
MOVEMENT / MUTATION: [Deterministic motion function]
SUPPORTING REACTION: [Secondary visual feedback]
COMPREHENSION HOLD: [Quiet comprehension duration]
CLEANUP / EXIT: [State demotion or unmounting]
PERSISTENT STATE: [Surviving attributes into next frame]
STATE AFTER: [Canvas state at conclusion of beat]
COMPONENTS / REAL IMPORT PATHS: [Authoritative repo imports]
MOTION PURPOSE: [1 of 4: Attention / State / Cause-Effect / Continuity]
FORBIDDEN STATE CHECK: [Strict negative constraint assertions]
VALIDATION: [Verification against course ground truth]
```

---

### BEAT A · Course Shell Resume (`S01_WELCOME`)

```text
BEAT: Beat A
ANCHOR: S01_WELCOME
NARRATION: "Welcome back to Code with Animation."
WORD IDs: W0000 .. W0005 ("Welcome", "back", "to", "Code", "with", "Animation.")
AUDIO: 0.000s .. 2.160s (0 ms .. 2160 ms)
FRAMES: [0, 81) (Spoken: F0..F65, Pause P01: F65..F81, Total: 81 frames)
AVAILABLE PAUSE: F65..F81 (16 frames / 540 ms)
STATE BEFORE:
  Continuous provenance from Q11 Scene 10 final frame:
  - Top Bar: "CODE WITH ANIMATION", "DSA PATTERN ROADMAP", "11 / 227 COMPLETE".
  - Sidebar: "19 COURSE PATTERNS", "01 Arrays & Hashing" is ACTIVE.
  - Main Area: "PATTERN 01 · Arrays & Hashing", local counter reads "11 / 18 COMPLETED".
  - Problem Rows: Q001..Q011 are COMPLETE (green checkmark ✓, green border, COMPLETE badge).
  - Row Q012: Status is UP NEXT (gold border, ▶ badge).
  - Progress Rail: Thumb marker is resting at 012.
WHAT APPEARS NOW:
  Nothing newly constructed. Entire Master Roadmap V2 canvas is present at Frame 0.
CENTER-STAGE HERO:
  The complete Master DSA Pattern Roadmap as an authoritative, recognized learning hub.
CAUSE:
  The teacher greets the returning learner ("Welcome back to Code with Animation.").
PRIMARY SEMANTIC REACTION:
  Roadmap shell executes a subtle breathing re-orientation settle: camera scale eases from 1.008 to 1.000 over F0–F26.
MOVEMENT / MUTATION:
  camScale = interpolate(frame, [0, 26], [1.008, 1.0], { extrapolateRight: "clamp", easing: EASE })
  camX = 0, camY = 0
SUPPORTING REACTION:
  Ambient ChalkDust particles activate at subtle opacity (0.12).
  Captions render: "Welcome back to Code with Animation." (F0–F65).
COMPREHENSION HOLD:
  F65–F81 (16 frames): Still hold during pause P01. Camera locked at 1.000. Audience absorbs the familiar environment.
CLEANUP / EXIT:
  Camera settle completes at F26; no visual objects unmount.
PERSISTENT STATE:
  Full roadmap shell visible and stable. Global progress: 11 / 227.
STATE AFTER:
  Canvas perfectly still at scale 1.000; ready for roadmap header focus.
COMPONENTS / REAL IMPORT PATHS:
  - MasterRoadmapV2 (@dsa/kit/components/MasterRoadmapV2)
  - ChalkboardBackground, ChalkFilters (@dsa/kit/lib/chalk)
  - ChalkDust (@dsa/kit/components/ChalkDust)
  - Captions (@dsa/kit/components/Captions)
MOTION PURPOSE:
  Semantic continuity / re-orientation settle.
FORBIDDEN STATE CHECK:
  - MUST NOT replay Q011 completion animation (10 -> 11). Counter is already 11 at F0.
  - MUST NOT show Q012 as NOW ACTIVE yet (it is UP NEXT).
  - MUST NOT animate progress rail from 011 to 012.
VALIDATION:
  Verified identical to Q11 Scene 10 final render frame.
```

---

### BEAT B · Master Roadmap Identity (`S01_ROADMAP`)

```text
BEAT: Beat B
ANCHOR: S01_ROADMAP
NARRATION: "We are continuing our DSA pattern roadmap."
WORD IDs: W0006 .. W0012 ("We", "are", "continuing", "our", "DSA", "pattern", "roadmap.")
AUDIO: 2.700s .. 5.780s (2700 ms .. 5780 ms)
FRAMES: [81, 203) (Spoken: F81..F173, Pause P02: F173..F203, Total: 122 frames)
AVAILABLE PAUSE: F173..F203 (30 frames / 980 ms)
STATE BEFORE:
  Full roadmap visible; camera scale 1.000.
WHAT APPEARS NOW:
  Chalk underline begins drawing beneath "DSA PATTERN ROADMAP" in the top bar.
CENTER-STAGE HERO:
  Top-center "DSA PATTERN ROADMAP" header identity.
CAUSE:
  Narration explicitly names the curriculum vehicle ("our DSA pattern roadmap").
PRIMARY SEMANTIC REACTION:
  Focus strengthens on the central title. A crisp rough chalk stroke draws from X: 740 to X: 1180 beneath the title text between F92 and F142 (coinciding with spoken words "DSA pattern roadmap").
MOVEMENT / MUTATION:
  underlineProgress = interpolate(frame, [92, 142], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  strokeDashoffset = (1 - underlineProgress) * pathLength
SUPPORTING REACTION:
  Captions render: "We are continuing our DSA pattern roadmap." (F81..F173).
COMPREHENSION HOLD:
  F173–F203 (30 frames): Extended 980ms pause P02. Underline stroke is fully drawn; full roadmap identity breathes in clear focus.
CLEANUP / EXIT:
  Underline remains drawn as a stable course fixture; camera stays centered.
PERSISTENT STATE:
  Underline complete; roadmap identity established.
STATE AFTER:
  Top title highlighted; attention ready to be directed to problem rows.
COMPONENTS / REAL IMPORT PATHS:
  - RoughLine (@dsa/kit/components/RoughLine)
  - MasterRoadmapV2 (@dsa/kit/components/MasterRoadmapV2)
MOTION PURPOSE:
  Direct attention to roadmap curriculum identity.
FORBIDDEN STATE CHECK:
  - MUST NOT zoom or shake the camera abruptly.
  - MUST NOT highlight Q012 yet.
VALIDATION:
  Matches visual grammar established in Q10/Q11 intro scenes.
```

---

### BEAT C · Previous Question Reference (`S01_Q11`)

```text
BEAT: Beat C
ANCHOR: S01_Q11
NARRATION: "Question 11,"
WORD IDs: W0013 .. W0014 ("Question", "11,")
AUDIO: 6.760s .. 7.640s (6760 ms .. 7640 ms)
FRAMES: [203, 248) (Spoken: F203..F229, Pause P03: F229..F248, Total: 45 frames)
AVAILABLE PAUSE: F229..F248 (19 frames / 640 ms)
STATE BEFORE:
  Full roadmap visible; top header underlined.
WHAT APPEARS NOW:
  Spotlight focus narrows onto Row Q011. Other problem rows subtly reduce opacity (from 1.0 to 0.55).
CENTER-STAGE HERO:
  Problem Row Q011 (`Sort Colors`).
CAUSE:
  Teacher references the preceding problem number ("Question 11,").
PRIMARY SEMANTIC REACTION:
  Spotlight activates on Row Q011. Row border illuminates in sharp emerald chalk glow.
MOVEMENT / MUTATION:
  camera pan / zoom:
  camScale = interpolate(frame, [203, 229], [1.0, 1.03], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  camY = interpolate(frame, [203, 229], [0, -40], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  spotlightOpacity = interpolate(frame, [203, 218], [0, 1], { extrapolateRight: "clamp" })
SUPPORTING REACTION:
  Captions render: "Question 11," (F203..F229).
COMPREHENSION HOLD:
  F229–F248 (19 frames): Hold during pause P03. Learner locks focus onto Row Q011.
CLEANUP / EXIT:
  Peripheral row dimming holds steady; spotlight remains active.
PERSISTENT STATE:
  Row Q011 in primary focus.
STATE AFTER:
  Row Q011 dominant; title ready to be acknowledged.
COMPONENTS / REAL IMPORT PATHS:
  - MasterRoadmapV2 (spotlightRow={11})
MOTION PURPOSE:
  Direct attention to the specific problem row.
FORBIDDEN STATE CHECK:
  - MUST NOT change Row Q011 status (it is already COMPLETE).
  - MUST NOT move the vertical progress rail.
VALIDATION:
  Row Q011 sits precisely at slot index 11 of Pattern 01 curriculum.
```

---

### BEAT D · Previous Problem Name (`S01_SORT_COLORS`)

```text
BEAT: Beat D
ANCHOR: S01_SORT_COLORS
NARRATION: "sort colors,"
WORD IDs: W0015 .. W0016 ("sort", "colors,")
AUDIO: 8.280s .. 8.960s (8280 ms .. 8960 ms)
FRAMES: [248, 282) (Spoken: F248..F269, Pause P04: F269..F282, Total: 34 frames)
AVAILABLE PAUSE: F269..F282 (13 frames / 440 ms)
STATE BEFORE:
  Row Q011 spotlighted at camScale 1.03, camY -40.
WHAT APPEARS NOW:
  Title text "Sort Colors" inside Row Q011 receives crisp chalk illumination.
CENTER-STAGE HERO:
  "Sort Colors" title text inside Row Q011.
CAUSE:
  Narration speaks the problem title ("sort colors,").
PRIMARY SEMANTIC REACTION:
  Text brightness scales from chalk white (opacity 0.85) to brilliant white (1.0) with subtle amber title sheen.
MOVEMENT / MUTATION:
  titleGlow = interpolate(frame, [248, 262], [0, 1], { extrapolateRight: "clamp" })
  Static position; no shaking or jumping.
SUPPORTING REACTION:
  Captions render: "sort colors," (F248..F269).
COMPREHENSION HOLD:
  F269–F282 (13 frames): Pause P04 hold. Title focus stays stable before completion confirmation.
CLEANUP / EXIT:
  Title sheen settles to a calm steady state.
PERSISTENT STATE:
  Row Q011 and title "Sort Colors" clearly identified.
STATE AFTER:
  Attention ready for confirmation of completion.
COMPONENTS / REAL IMPORT PATHS:
  - MasterRoadmapV2
MOTION PURPOSE:
  Direct attention to problem identity.
FORBIDDEN STATE CHECK:
  - MUST NOT reveal Dutch National Flag algorithm details or array bars.
  - MUST NOT display any Sort Colors code.
VALIDATION:
  Title matches LeetCode 75 official name.
```

---

### BEAT E · Previous Problem Confirmed Complete (`S01_Q11_COMPLETE`)

```text
BEAT: Beat E
ANCHOR: S01_Q11_COMPLETE
NARRATION: "is complete."
WORD IDs: W0017 .. W0018 ("is", "complete.")
AUDIO: 9.400s .. 10.140s (9400 ms .. 10140 ms)
FRAMES: [282, 331) (Spoken: F282..F304, Pause P05: F304..F331, Total: 49 frames)
AVAILABLE PAUSE: F304..F331 (27 frames / 880 ms)
STATE BEFORE:
  Row Q011 highlighted; title bright.
WHAT APPEARS NOW:
  Green checkmark (✓) inside Row Q011 executes a celebratory confirmation pulse.
CENTER-STAGE HERO:
  Row Q011 completion badge (`✓ COMPLETE`).
CAUSE:
  Teacher confirms the problem's finished status ("is complete.").
PRIMARY SEMANTIC REACTION:
  A crisp green chalk pulse radiates through the checkmark icon and badge border between F282 and F304.
MOVEMENT / MUTATION:
  pulseScale = interpolate(frame, [282, 292, 304], [1.0, 1.12, 1.0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  pulseGlow = interpolate(frame, [282, 292, 304], [0.3, 0.9, 0.4], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
SUPPORTING REACTION:
  Captions render: "is complete." (F282..F304).
COMPREHENSION HOLD:
  F304–F331 (27 frames): 880ms pause P05. The confirmation glow settles back to calm resting green. The viewer absorbs the closure of Q011.
CLEANUP / EXIT:
  Pulse effect terminates at F304; status badge rests at standard complete style.
PERSISTENT STATE:
  Row Q011 is complete. Global counter remains strictly 11 / 227.
STATE AFTER:
  Q011 closed out; ready to transition focus to the next problem.
COMPONENTS / REAL IMPORT PATHS:
  - MasterRoadmapV2
MOTION PURPOSE:
  Confirm existing course state (Verification / Closure).
FORBIDDEN STATE CHECK:
  - ABSOLUTE FORBIDDEN: Counter MUST NOT increment from 10 to 11 (it was already 11).
  - ABSOLUTE FORBIDDEN: Counter MUST NOT advance to 12.
VALIDATION:
  Counter remains immutable at 11/227.
```

---

### BEAT F · Focus Transfer to Next Problem (`S01_NEXT_PROBLEM`)

```text
BEAT: Beat F
ANCHOR: S01_NEXT_PROBLEM
NARRATION: "Now we move to the next problem."
WORD IDs: W0019 .. W0025 ("Now", "we", "move", "to", "the", "next", "problem.")
AUDIO: 11.020s .. 12.760s (11020 ms .. 12760 ms)
FRAMES: [331, 409) (Spoken: F331..F383, Pause P06: F383..F409, Total: 78 frames)
AVAILABLE PAUSE: F383..F409 (26 frames / 880 ms)
STATE BEFORE:
  Row Q011 in spotlight; Row Q012 resting below it as UP NEXT.
WHAT APPEARS NOW:
  Spotlight smoothly glides from Row Q011 down to Row Q012.
CENTER-STAGE HERO:
  Problem Row Q012 (`Next Permutation`) in its resting UP NEXT state.
CAUSE:
  Narration announces progression to the next curriculum unit ("Now we move to the next problem.").
PRIMARY SEMANTIC REACTION:
  Camera smoothly pans vertically down by 74px (the exact row height + gap pitch) to center Row Q012 in the main viewport.
MOVEMENT / MUTATION:
  camY = interpolate(frame, [331, 375], [-40, -114], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  camScale = interpolate(frame, [331, 375], [1.03, 1.05], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  spotlightShift = interpolate(frame, [331, 375], [11, 12], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
SUPPORTING REACTION:
  Row Q011 spotlight fades to normal dimmed state (0.55); Row Q012 border illuminates in warm gold (UP NEXT theme).
  Captions render: "Now we move to the next problem." (F331..F383).
COMPREHENSION HOLD:
  F383–F409 (26 frames): Major 880ms anticipation pause P06. Camera rests centered on Row Q012.
  CRITICAL ANTICIPATION HOLD: Row Q012 remains visibly tagged as `UP NEXT` throughout this hold!
CLEANUP / EXIT:
  Pan motion settles cleanly at F375.
PERSISTENT STATE:
  Row Q012 centered, highlighted, but status still strictly `UP NEXT`.
STATE AFTER:
  Audience attention locked on Row Q012, eagerly anticipating its formal activation.
COMPONENTS / REAL IMPORT PATHS:
  - MasterRoadmapV2 (spotlightRow={12}, upNextGlobalNum={12})
MOTION PURPOSE:
  Focus transfer / Anticipation hold.
FORBIDDEN STATE CHECK:
  - STRICT PROHIBITION: Row Q012 MUST NOT mutate to `NOW ACTIVE` during Beat F. It must remain `UP NEXT` until "Question twelve" is spoken.
VALIDATION:
  Viewport centers accurately on Row 012 coordinates.
```

---

### BEAT G · Canonical Q12 Activation (`S01_Q12`)

```text
BEAT: Beat G
ANCHOR: S01_Q12
NARRATION: "Question 12,"
WORD IDs: W0026 .. W0027 ("Question", "12,")
AUDIO: 13.640s .. 14.740s (13640 ms .. 14740 ms)
FRAMES: [409, 455) (Spoken: F409..F442, Pause P07: F442..F455, Total: 46 frames)
AVAILABLE PAUSE: F442..F455 (13 frames / 440 ms)
STATE BEFORE:
  Row Q012 centered, spotlighted, displaying gold `UP NEXT` [▶] badge.
WHAT APPEARS NOW:
  Canonical status mutation: The gold `UP NEXT` badge mutates into the vibrant cyan/emerald `NOW ACTIVE` [●] badge.
CENTER-STAGE HERO:
  Row Q012 Status Badge (`NOW ACTIVE`).
CAUSE:
  Teacher formally announces the current lesson ("Question 12,").
PRIMARY SEMANTIC REACTION:
  Between F409 ("Question") and F430 ("12,"):
  - Old `UP NEXT` badge scales down slightly (1.0 -> 0.85) and dissolves.
  - New `NOW ACTIVE` badge pops in with energetic spring scale (0.8 -> 1.08 -> 1.0).
  - Row border color shifts from warm gold (#F59E0B) to electric active cyan (#06B6D4) / emerald.
MOVEMENT / MUTATION:
  badgeScale = interpolate(frame, [409, 420, 432], [0.85, 1.08, 1.0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  badgeOpacity = interpolate(frame, [409, 418], [0, 1], { extrapolateRight: "clamp" })
SUPPORTING REACTION:
  A subtle ripple of active energy travels along the row border.
  Captions render: "Question 12," (F409..F442).
COMPREHENSION HOLD:
  F442–F455 (13 frames): Pause P07 hold. Learner registers that Question 12 is officially open.
CLEANUP / EXIT:
  Old `UP NEXT` badge fully unmounted.
PERSISTENT STATE:
  Row Q012 is officially `NOW ACTIVE`. Global counter stays 11 / 227. Progress rail remains at 012.
STATE AFTER:
  Row Q012 active; title ready to be spoken.
COMPONENTS / REAL IMPORT PATHS:
  - MasterRoadmapV2 (activeGlobalNum={12}, upNextGlobalNum={undefined})
MOTION PURPOSE:
  Teach course state mutation (UP NEXT -> NOW ACTIVE).
FORBIDDEN STATE CHECK:
  - MUST NOT advance course progress counter to 12 / 227.
  - MUST NOT morph arbitrary text glyphs; badge replacement must be crisp and clean.
VALIDATION:
  Conforms to course roadmap mutation protocol established across all 227 problems.
```

---

### BEAT H · Current Problem Title (`S01_NEXT_PERMUTATION`)

```text
BEAT: Beat H
ANCHOR: S01_NEXT_PERMUTATION
NARRATION: "next permutation,"
WORD IDs: W0028 .. W0029 ("next", "permutation,")
AUDIO: 15.180s .. 16.540s (15180 ms .. 16540 ms)
FRAMES: [455, 515) (Spoken: F455..F496, Pause P08: F496..F515, Total: 60 frames)
AVAILABLE PAUSE: F496..F515 (19 frames / 620 ms)
STATE BEFORE:
  Row Q012 is NOW ACTIVE; title text "Next Permutation" visible at resting weight.
WHAT APPEARS NOW:
  Title "Next Permutation" illuminates with crisp chalk emphasis and an elegant chalk underline draws beneath it.
CENTER-STAGE HERO:
  Title text "Next Permutation" (Outfit Bold, 26px).
CAUSE:
  Narration speaks the problem title ("next permutation,").
PRIMARY SEMANTIC REACTION:
  Between F455 ("next") and F488 ("permutation,"):
  - Text scales subtly in brightness (opacity 0.85 -> 1.0).
  - Rough chalk line draws smoothly from left to right beneath "Next Permutation" (width: 240px).
MOVEMENT / MUTATION:
  titleLineProgress = interpolate(frame, [455, 488], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
SUPPORTING REACTION:
  Captions render: "next permutation," (F455..F496).
COMPREHENSION HOLD:
  F496–F515 (19 frames): 620ms pause P08 hold. The title stands prominently highlighted.
CLEANUP / EXIT:
  Underline stroke completes at F488 and locks in place.
PERSISTENT STATE:
  Title firmly established as center-stage focus.
STATE AFTER:
  Ready for LeetCode catalog metadata.
COMPONENTS / REAL IMPORT PATHS:
  - RoughLine (@dsa/kit/components/RoughLine)
  - MasterRoadmapV2
MOTION PURPOSE:
  Direct attention to problem subject.
FORBIDDEN STATE CHECK:
  - MUST NOT display mathematical permutation formulas (n!).
  - MUST NOT hint at dictionary/lexicographical ordering rules yet.
VALIDATION:
  Spelling and capitalization strictly match course curriculum.
```

---

### BEAT I · LeetCode Metadata (`S01_LC31`)

```text
BEAT: Beat I
ANCHOR: S01_LC31
NARRATION: "LeetCode 31," (whisper transcription: "lead code 31,")
WORD IDs: W0030 .. W0032 ("lead", "code", "31,")
AUDIO: 17.160s .. 18.320s (17160 ms .. 18320 ms)
FRAMES: [515, 575) (Spoken: F515..F550, Pause P09: F550..F575, Total: 60 frames)
AVAILABLE PAUSE: F550..F575 (25 frames / 840 ms)
STATE BEFORE:
  Row Q012 active; title underlined.
WHAT APPEARS NOW:
  "LC 31" metadata badge inside Row Q012 receives rough chalk border illumination.
CENTER-STAGE HERO:
  Metadata Badge `LC 31` (X: 740, Y: 738, width: 84px, height: 32px).
CAUSE:
  Narration cites the platform problem number ("LeetCode 31,").
PRIMARY SEMANTIC REACTION:
  Between F515 and F542: A rough rectangular chalk boundary draws around "LC 31", popping its opacity to 1.0.
MOVEMENT / MUTATION:
  boxProgress = interpolate(frame, [515, 542], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
SUPPORTING REACTION:
  Captions render normalized text: "LeetCode 31," (F515..F550).
COMPREHENSION HOLD:
  F550–F575 (25 frames): 840ms pause P09 hold. Metadata cleanly isolated and verified.
CLEANUP / EXIT:
  Chalk border stabilizes.
PERSISTENT STATE:
  LC 31 highlighted.
STATE AFTER:
  Ready for difficulty rating.
COMPONENTS / REAL IMPORT PATHS:
  - RoughBox (@dsa/kit/components/RoughBox)
  - MasterRoadmapV2
MOTION PURPOSE:
  Direct attention to problem catalog identity.
FORBIDDEN STATE CHECK:
  - MUST NOT display raw transcription artifact "lead code" in captions or UI. Normalize to "LeetCode 31,".
VALIDATION:
  LC 31 is the official LeetCode index for Next Permutation.
```

---

### BEAT J · Difficulty Rating (`S01_MEDIUM`)

```text
BEAT: Beat J
ANCHOR: S01_MEDIUM
NARRATION: "medium."
WORD IDs: W0033 ("medium.")
AUDIO: 19.160s .. 19.460s (19160 ms .. 19460 ms)
FRAMES: [575, 606) (Spoken: F575..F584, Pause P10: F584..F606, Total: 31 frames)
AVAILABLE PAUSE: F584..F606 (22 frames / 740 ms)
STATE BEFORE:
  Row Q012 fully detailed with title and LC 31 highlighted.
WHAT APPEARS NOW:
  "MEDIUM" difficulty badge illuminates in warm amber chalk sheen (#F59E0B).
CENTER-STAGE HERO:
  `MEDIUM` Difficulty Badge (X: 840, Y: 738, width: 96px, height: 32px).
CAUSE:
  Speaker states problem difficulty ("medium.").
PRIMARY SEMANTIC REACTION:
  Amber badge executes a gentle scale pop (1.0 -> 1.08 -> 1.0) and border glow between F575 and F584.
MOVEMENT / MUTATION:
  diffScale = interpolate(frame, [575, 580, 586], [1.0, 1.08, 1.0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
SUPPORTING REACTION:
  Captions render: "medium." (F575..F584).
COMPREHENSION HOLD:
  F584–F606 (22 frames): 740ms pause P10 hold. Complete Row Q012 is now fully framed and confirmed:
  `[ NOW ACTIVE ]  012  Next Permutation  LC 31  MEDIUM`
CLEANUP / EXIT:
  Difficulty pop settles.
PERSISTENT STATE:
  Entire Q012 problem specification is settled and active.
STATE AFTER:
  Ready to zoom back out to Pattern 01 context.
COMPONENTS / REAL IMPORT PATHS:
  - MasterRoadmapV2
MOTION PURPOSE:
  Direct attention to problem difficulty specification.
FORBIDDEN STATE CHECK:
  - MUST NOT label problem EASY or HARD.
VALIDATION:
  LeetCode official difficulty is Medium.
```

---

### BEAT K · Pattern Context Reconnection (`S01_ARRAYS_HASHING`)

```text
BEAT: Beat K
ANCHOR: S01_ARRAYS_HASHING
NARRATION: "We are still inside arrays and hashing."
WORD IDs: W0034 .. W0040 ("We", "are", "still", "inside", "arrays", "and", "hashing.")
AUDIO: 20.200s .. 22.820s (20200 ms .. 22820 ms)
FRAMES: [606, 702) (Spoken: F606..F685, Pause P11: F685..F702, Total: 96 frames)
AVAILABLE PAUSE: F685..F702 (17 frames / 580 ms)
STATE BEFORE:
  Camera zoomed in on Row Q012 (camScale: 1.05, camY: -114).
WHAT APPEARS NOW:
  Pattern 01 section framing illuminates:
  - Sidebar Pattern 01 badge shines with active green pulse.
  - Main area header "PATTERN 01 · Arrays & Hashing" glows.
CENTER-STAGE HERO:
  `PATTERN 01 · Arrays & Hashing` structural boundary.
CAUSE:
  Narration reconnects the specific problem to the broader foundational category ("We are still inside arrays and hashing.").
PRIMARY SEMANTIC REACTION:
  Camera smoothly pans out and re-centers to reveal the full Pattern 01 workspace between F606 and F655:
  camScale smoothly eases from 1.05 down to 1.00.
  camY eases from -114 back to 0.
MOVEMENT / MUTATION:
  camScale = interpolate(frame, [606, 655], [1.05, 1.00], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  camY = interpolate(frame, [606, 655], [-114, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  patternGlow = interpolate(frame, [626, 660], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
SUPPORTING REACTION:
  Captions render: "We are still inside arrays and hashing." (F606..F685).
COMPREHENSION HOLD:
  F685–F702 (17 frames): 580ms pause P11 hold. Learner re-anchors in the Array pattern mental model.
CLEANUP / EXIT:
  Zoom-out settles completely at F655.
PERSISTENT STATE:
  Camera perfectly centered at 1.00; Row Q012 remains active; Pattern 01 prominently framed.
STATE AFTER:
  Ready for the final representation handoff into Scene 02.
COMPONENTS / REAL IMPORT PATHS:
  - MasterRoadmapV2
MOTION PURPOSE:
  Semantic re-orientation / Pattern category continuity.
FORBIDDEN STATE CHECK:
  - MUST NOT highlight or animate any of patterns 02 through 19 in the sidebar.
  - MUST NOT reveal Scene 02 arrays or definitions.
VALIDATION:
  Q012 is legitimately part of Pattern 01 (Arrays & Hashing).
```

---

### BEAT L · Representation Handoff to ProblemOpenerShell (`S01_UNDERSTAND`)

```text
BEAT: Beat L
ANCHOR: S01_UNDERSTAND
NARRATION: "Let's understand the question first."
WORD IDs: W0041 .. W0045 ("Let's", "understand", "the", "question", "first.")
AUDIO: 23.400s .. 25.560s (23400 ms .. 25560 ms)
FRAMES: [702, 767) (Spoken: F702..F767, Available Pause: 0 F, Total: 65 frames)
AVAILABLE PAUSE: 0 frames (scene boundary terminates at F767 / 25.560s)
STATE BEFORE:
  Full roadmap visible, camera scale 1.000, Row Q012 active.
WHAT APPEARS NOW:
  Representation Handoff (T8):
  - Roadmap surrounding UI (sidebar, non-active rows, progress rail) smoothly dissolves.
  - Row Q012 identity elements (Pattern name, "Next Permutation", LC 31, MEDIUM) ascend and morph into the top header of `ProblemOpenerShell`.
CENTER-STAGE HERO:
  The ascending Q012 Problem Header docking into the `ProblemOpenerShell` layout:
  `[ 01 · ARRAYS & HASHING ]   NEXT PERMUTATION   [ LC 31 ] [ MEDIUM ]`
CAUSE:
  Narration moves from roadmap meta-context to direct problem comprehension ("Let's understand the question first.").
PRIMARY SEMANTIC REACTION:
  Between F702 and F748:
  - handoffFade interpolates from 0.0 to 1.0:
      sidebarOpacity: 1.0 -> 0.0
      progressRailOpacity: 1.0 -> 0.0
      topBarRoadmapTextOpacity: 1.0 -> 0.0
      inactiveRowsOpacity: 0.55 -> 0.0
  - Q012 title and badges glide upward:
      titleY: 728 -> 140
      titleScale: 1.0 -> 1.15
  - ProblemOpenerShell top banner ("01 · ARRAYS & HASHING", Y: 80) fades in at opacity 1.0.
MOVEMENT / MUTATION:
  handoffFade = interpolate(frame, [702, 745], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
  headerY = interpolate(frame, [708, 755], [728, 140], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE })
SUPPORTING REACTION:
  Captions render: "Let's understand the question first." (F702..F767).
COMPREHENSION HOLD:
  F755–F767 (12 frames): Final settled hold. The ProblemOpenerShell is pristine, calm, and firmly anchored at the top of the canvas. Center stage (Y: 220–760) is completely clear.
CLEANUP / EXIT:
  All Master Roadmap surroundings are completely unmounted/faded by F748.
PERSISTENT STATE (EXACT SCENE 02 SOURCE STATE):
  - Background: Standard course ChalkboardBackground with subtle ambient dust.
  - Top Header: ProblemOpenerShell displaying:
      Category: "01 · ARRAYS & HASHING"
      Title: "Next Permutation"
      Metadata: "LC 31" · "MEDIUM"
  - Center Stage (Y: 220–760): 100% EMPTY, pristine green chalkboard void, ready for Scene 02 master array reveal.
STATE AFTER:
  F767 (Exclusive end): Flawless continuity match for Scene 02 Frame 0.
COMPONENTS / REAL IMPORT PATHS:
  - MasterRoadmapV2 (handoffFade={handoffFade})
  - ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
  - ChalkboardBackground (@dsa/kit/lib/chalk)
MOTION PURPOSE:
  Preserve semantic continuity during scene transition (Representation Handoff).
FORBIDDEN STATE CHECK:
  - ZERO PRE-REVEALS: MUST NOT display master array [2, 1, 5, 4, 4, 3, 0].
  - MUST NOT display dictionary rules or brute-force permutations.
  - MUST NOT fade to complete black.
VALIDATION:
  Verifiably identical to Scene 02 Frame-0 input contract.
```

---

## 6. Camera Engine & Motion Interpolation Table

The scene maintains smooth, deterministic camera choreography across the entire 767-frame timeline:

| Frame Range | Beat | camScale Formula | camX Formula | camY Formula | Focal Intent |
|---|---|---|---|---|---|
| `F0 – F26` | `A` | `interpolate(f, [0, 26], [1.008, 1.0], EASE)` | `0` | `0` | Re-orientation settle from Q11 ending state |
| `F26 – F203` | `A, B` | `1.000` | `0` | `0` | Full Master Roadmap wide view |
| `F203 – F229` | `C` | `interpolate(f, [203, 229], [1.0, 1.03], EASE)` | `0` | `interpolate(f, [203, 229], [0, -40], EASE)` | Focus in on Row Q011 |
| `F229 – F331` | `D, E` | `1.030` | `0` | `-40` | Steady hold on Row Q011 completion confirmation |
| `F331 – F375` | `F` | `interpolate(f, [331, 375], [1.03, 1.05], EASE)` | `0` | `interpolate(f, [331, 375], [-40, -114], EASE)` | Smooth vertical pan down 1 row pitch to Row Q012 |
| `F375 – F606` | `G, H, I, J` | `1.050` | `0` | `-114` | Steady tight focus on Row Q012 activation & metadata |
| `F606 – F655` | `K` | `interpolate(f, [606, 655], [1.05, 1.00], EASE)` | `0` | `interpolate(f, [606, 655], [-114, 0], EASE)` | Smooth wide zoom out to Pattern 01 boundary |
| `F655 – F702` | `K` | `1.000` | `0` | `0` | Steady hold on Pattern 01 context |
| `F702 – F767` | `L` | `1.000` | `0` | `0` (handoffFade 0->1) | Stationary camera; surroundings dissolve into ProblemOpenerShell |

---

## 7. Critical-Frame Review Checklist

Before rendering final video, Antigravity and reviewer must visually audit these exact checkpoint frames:

- [ ] **Frame 0 (ENTRY PROVENANCE)**:
  - 11 / 227 COMPLETE badge visible in top right.
  - Row Q011 shows green border, checkmark (✓), and COMPLETE badge.
  - Row Q012 shows gold border, arrow (▶), and UP NEXT badge.
  - Progress rail thumb marker is at position 012.
- [ ] **Frame 65 (END S01_WELCOME)**:
  - Camera scale has locked at 1.000; ambient chalk dust visible.
- [ ] **Frame 142 (S01_ROADMAP UNDERLINE DRAWN)**:
  - Chalk underline beneath "DSA PATTERN ROADMAP" is 100% drawn.
- [ ] **Frame 203 (START S01_Q11 FOCUS)**:
  - Row Q011 spotlight begins; peripheral rows begin dimming.
- [ ] **Frame 292 (S01_Q11_COMPLETE PULSE PEAK)**:
  - Row Q011 checkmark at maximum green confirmation glow. Counter is strictly 11/227.
- [ ] **Frame 383 (S01_NEXT_PROBLEM PAN COMPLETE)**:
  - Viewport centered on Row Q012. Row Q012 is STILL tagged as UP NEXT.
- [ ] **Frame 432 (S01_Q12 ACTIVATION SETTLED)**:
  - Row Q012 status badge has mutated to cyan/green NOW ACTIVE [●]. Counter remains 11/227.
- [ ] **Frame 496 (S01_NEXT_PERMUTATION TITLE HIGHLIGHTED)**:
  - "Next Permutation" title underline fully drawn.
- [ ] **Frame 550 (S01_LC31 BOXED)**:
  - Rough chalk box outline complete around "LC 31".
- [ ] **Frame 586 (S01_MEDIUM ILLUMINATED)**:
  - "MEDIUM" badge illuminated in warm amber sheen. Complete row locked.
- [ ] **Frame 655 (S01_ARRAYS_HASHING RE-CENTERED)**:
  - Camera fully zoomed out to 1.000; Pattern 01 section framing active.
- [ ] **Frame 748 (HANDOFF SURROUNDINGS DISSOLVED)**:
  - Master roadmap sidebar, progress rail, and inactive rows fully faded (opacity 0).
- [ ] **Frame 766 (FINAL CHECKPOINT / SCENE 02 HANDOFF)**:
  - ProblemOpenerShell header fully locked at top. Center stage (Y: 220–760) completely empty.
  - Zero spoilers of master array or algorithm solutions.

---

## 8. Quality Invariant Audit (10/10 PASS)

```text
1. Approved Anchors Resolved         = 12 / 12 (100% PASS)
2. Dropped Semantic Beats            = 0 (PASS)
3. Guessed Timings / Seconds         = 0 (PASS — strictly derived from sync/01-intro-roadmap.json)
4. Guessed Frame Numbers             = 0 (PASS — strictly derived from FPS: 30)
5. Guessed Pixel Coordinates         = 0 (PASS — derived from MasterRoadmapV2 & ProblemOpenerShell constants)
6. Future-State Spoilers             = 0 (PASS — no arrays, definitions, or algorithms revealed)
7. Generic Replacement Components    = 0 (PASS — 100% reuse of MasterRoadmapV2 and project kit)
8. Course Counter Mismatches         = 0 (PASS — 11/227 held constant throughout entire scene)
9. Continuity Handoff Mismatches     = 0 (PASS — Frame 0 matches Q11 S10; Frame 766 matches Q12 S02)
10. Caption Timing Sources           = 1 (PASS — single source of truth: sync/01-intro-roadmap.json)

FINAL VERDICT: PASS (READY FOR IMPLEMENTATION)
```
