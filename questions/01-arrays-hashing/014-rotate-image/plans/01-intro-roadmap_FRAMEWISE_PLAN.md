# Q14 — Rotate Image (LC 48)
# Scene 01 · Course Roadmap Resume & Q14 Activation
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Previous Problem:** #013 Set Matrix Zeroes · LC 73 · COMPLETE  
**Current Problem:** #014 Rotate Image · LC 48 · Medium  
**Audio File:** `questions/01-arrays-hashing/014-rotate-image/audio/01-intro-roadmap.mp3` (symlinked / mapped to `scence01.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/014-rotate-image/sync/01-intro-roadmap.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/014-rotate-image/sync/01-intro-roadmap.anchors.json`  
**Resolved Manifest:** `questions/01-arrays-hashing/014-rotate-image/Q14_PHASE9_REAUDIT_V2/Scene01_SYNC_RESOLVED.json`  
**FPS:** 30  
**Audio Duration:** 29.500s (29,500 ms)  
**Exact Total Frames:** 885 frames (29.500 seconds)  
**Anchor Match Count:** 13 / 13  
**Unmatched Anchors:** 0  

---

## 1. Mandatory Scene Contract

```text
SCENE: 01-intro-roadmap
QUESTION: 014 · Rotate Image (LeetCode 48)
BEAT TYPE: INTRO / ROADMAP RESUME
AUDIO FILE: audio/01-intro-roadmap.mp3
SYNC FILE: sync/01-intro-roadmap.json
ANCHORS FILE: sync/01-intro-roadmap.anchors.json
FPS: 30
TOTAL FRAMES: 885
PEDAGOGICAL GOAL: Resume the authoritative Master DSA Pattern Roadmap from the exact settled end-state of Q13 Scene 13 (13/227 COMPLETE, Q013 COMPLETE, Q014 UP NEXT, rail thumb at 014); confirm Q013 complete without re-triggering completion counters; activate Q014 (UP NEXT -> NOW ACTIVE) on exact spoken anchor "question 14"; perform a clean semantic representation handoff into ProblemOpenerShell for Scene 02 matrix coordinate mapping.
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
    completedCount: 13
    completedGlobalNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    activePatternId: 1
    activeGlobalNum: undefined (F0..F573), mutates to 14 at F574 ("question 14,")
    upNextGlobalNum: 14 (F0..F573), undefined from F574 onward
    spotlightRow: 13 during Beats 3-5 (F236..F380), 14 during Beats 7-13 (F535..F885)
    showHeaderUnderline: true (F89..F200)
    handoffFade: 0.0 (F0..F818), interpolates to 1.0 (F819..F885)

CREATE:
- sync/01-intro-roadmap.anchors.json (Authoritative anchor manifest)
- Q14_PHASE9_REAUDIT_V2/Scene01_SYNC_RESOLVED.json (Machine-readable sync resolution)
- Scene01Intro.tsx (Antigravity Remotion implementation)

DO NOT TOUCH:
- @dsa/kit core foundation libraries
- Q011 / Q012 / Q013 regression reference source files
- Roadmap structure or problem ordering
- Global completion counter (13 / 227 is strictly immutable in Scene 01)

MOTION SEMANTICS:
- Reorientation settle (Beat 01: camera 1.008 -> 1.000)
- Identity highlight (Beat 02: header chalk underline under active pattern)
- Row spotlight shifts (Beat 03: Q013 spotlight, Beat 07: spotlight transfers to Q014)
- State confirmation pulse (Beat 05: green checkmark glow on Q013, 0 counter mutation)
- Progress pill focus (Beat 06: glow around 13/227 pill, 0 counter mutation)
- Canonical state mutation (Beat 08: UP NEXT gold pill -> NOW ACTIVE green/cyan badge)
- Metadata illumination (Beats 09, 10, 11: title, LC 48, Medium badges)
- Background reduction (Beat 12: surrounding roadmap chrome fades/recedes)
- Representation handoff (Beat 13: surroundings fade, Q014 header docks into ProblemOpenerShell)
- Zero arbitrary/decorative motion

MORPH SEMANTICS:
- T0 STATE_CHANGE (Q014 badge mutates: UP NEXT [▶] -> NOW ACTIVE [●])
- T8 REPRESENTATION_HANDOFF (Roadmap Q014 row identity -> ProblemOpenerShell header)
- Forbidden: No T3 path morph of text; no generic SaaS card transformations

SVG SEMANTICS:
- S3 REDRAW_CONFIRM (Q013 checkmark redraw confirmation in Beat 05)
- Rough underline draw on header (Beat 02) and title (Beat 09)

TRANSITION IN:
- Continuous frame-0 provenance: exact final settled frame of Q13 Scene 13
- 13 / 227 COMPLETE, Pattern 01 active, Q013 COMPLETE, Q014 UP NEXT, rail thumb at 014

TRANSITION OUT:
- Clean representation handoff into ProblemOpenerShell
- Roadmap shell fades out (opacity: 1 -> 0); Q014 title and badges lock into top header
- Center stage intentionally empty (Y: 220–760) ready for Scene 02 master matrix reveal

FORBIDDEN:
- Replaying Q013 completion animation (12 -> 13 counter increment)
- Advancing global progress to 14 / 227 (Q014 is NOT yet solved)
- Advancing progress rail 013 -> 014 (already sitting at 014 at F0)
- Early activation of Q014 before frame 574 ("question 14,")
- Revealing concrete matrix values [[1,2,3,4,5], ...] or cell coordinates
- Revealing Method 1, Method 2, or Method 3 solution hints or cycle overlays
- Introducing generic SaaS cards, dashboard panels, or new palette colors
```

---

## 2. Audio-Anchor Table

Derived strictly from validated exact sync data (`sync/01-intro-roadmap.json`):

| Anchor ID | Spoken Phrase | Word ID Span | Audio Span (s) | Frame Range `[start, endExcl)` | Total Frames | Available Pause | Teaching Purpose |
|---|---|---|---|---|---|---|---|
| `S01_WELCOME` | "Welcome back to Code with Animation." | W0000..W0005 | 0.000 – 2.280s | `[0, 68)` | 68 F | 21 F (F68..F89) | Resume exact course shell from Q13 final roadmap |
| `S01_PATTERN` | "We are continuing our arrays and hashing roadmap." | W0006..W0013 | 2.980 – 6.680s | `[89, 200)` | 111 F | 36 F (F200..F236) | Focus active pattern identity Arrays & Hashing in sidebar |
| `S01_Q13` | "Question 13," | W0014..W0015 | 7.880 – 8.680s | `[236, 260)` | 24 F | 15 F (F260..F275) | Direct attention to Q013 row in Master Roadmap |
| `S01_SET_MATRIX_ZEROES` | "set matrix zeros" | W0016..W0018 | 9.160 – 10.540s | `[275, 316)` | 41 F | 0 F | Focus Q013 title text |
| `S01_COMPLETE` | "is complete." | W0019..W0020 | 10.540 – 11.900s | `[316, 357)` | 41 F | 24 F (F357..F381) | Q013 COMPLETE marker confirmed; green checkmark glow; 0 counter mutation |
| `S01_PROGRESS` | "Our progress is now 13 out of 227." | W0021..W0028 | 12.700 – 17.480s | `[381, 524)` | 143 F | 11 F (F524..F535) | Direct attention to global progress pill (13 / 227); stable hold |
| `S01_NEXT` | "And next we have" | W0029..W0032 | 17.820 – 19.140s | `[535, 574)` | 39 F | 0 F | Anticipation hold; rail spotlight transfers from Q013 to Q014 row |
| `S01_Q14` | "question 14," | W0033..W0034 | 19.140 – 20.360s | `[574, 611)` | 37 F | 9 F (F611..F620) | Activate Q014 row: UP NEXT mutates to NOW ACTIVE badge; rail locks on 014 |
| `S01_TITLE` | "rotate image," | W0035..W0036 | 20.680 – 21.800s | `[620, 654)` | 34 F | 12 F (F654..F666) | Reveal problem title ROTATE IMAGE with chalk underline |
| `S01_LC` | "lead code 48," | W0037..W0039 | 22.200 – 23.700s | `[666, 711)` | 45 F | 19 F (F711..F730) | Illuminate LeetCode 48 badge beside title |
| `S01_MEDIUM` | "medium." | W0040 | 24.340 – 24.800s | `[730, 744)` | 14 F | 0 F | Illuminate Medium difficulty pill (amber/gold) |
| `S01_ABOUT` | "This problem is about" | W0041..W0044 | 24.800 – 27.300s | `[744, 819)` | 75 F | 0 F | Surrounding roadmap begins gentle fade (opacity 1.0 -> 0.4) |
| `S01_SQUARE` | "rotating a square matrix." | W0045..W0048 | 27.300 – 29.500s | `[819, 885)` | 66 F | 0 F (Scene boundary) | Header docks into ProblemOpenerShell; center stage clear for Scene 02 |

---

## 3. Frame-Wise Choreography (9 Mandatory Invariants Per Beat)

---

### BEAT 01 — `S01_WELCOME` (Frames 0 – 88)
* **Spoken Phrase:** "Welcome back to Code with Animation." (W0000..W0005, 0.000s – 2.280s, F0..F68)
* **Pause Hold:** 700ms major pause (F68..F89, 21 frames)
* **Total Window:** Frames 0 – 88 (89 frames)

```text
ANCHOR: S01_WELCOME (Frames 0 – 88)
WHAT APPEARS NOW: MasterRoadmapV2 resumes in exact settled end-state of Q13 Scene 13. Left sidebar shows Pattern 01 (Arrays & Hashing) selected. Top header shows course title with active progress pill: "13 / 227 PROBLEMS". Center stacked problem list shows rows Q001 to Q013 marked with green checkmarks (COMPLETE), Q014 tagged with gold "UP NEXT [▶]" pill. Right vertical progress rail shows glowing gold thumb positioned exactly at index 014. Bottom captions active at Y: 980.
CENTER-STAGE HERO: Master DSA Pattern Roadmap shell (Y: 130–750).
CAUSE: Narration welcomes viewer back to the long-form course.
EFFECT / MOTION: Camera executes a subtle 1.008 -> 1.000 micro-settle across F0..F24 (EASE.outQuad). Ambient chalk dust particles float gently across chalkboard surface. Zero element resets; zero replaying of previous completion animations.
WHAT MUST NOT APPEAR YET: Q014 activation; question title "Rotate Image"; LeetCode 48 badge; matrix visual; solution hints.
COMPREHENSION HOLD: Frames 68 – 88 (21 frames). 700ms clean hold allowing viewer to reorient with the global roadmap.
CLEANUP / EXIT: Roadmap remains stable and grounded.
PERSISTENT STATE: 13 / 227 COMPLETE; Q013 COMPLETE; Q014 UP NEXT; rail thumb at 014.
```

---

### BEAT 02 — `S01_PATTERN` (Frames 89 – 235)
* **Spoken Phrase:** "We are continuing our arrays and hashing roadmap." (W0006..W0013, 2.980s – 6.680s, F89..F200)
* **Pause Hold:** 1200ms major pause (F200..F236, 36 frames)
* **Total Window:** Frames 89 – 235 (147 frames)

```text
ANCHOR: S01_PATTERN (Frames 89 – 235)
WHAT APPEARS NOW: Left sidebar Pattern 01 card ("01 · Arrays & Hashing") receives focused highlight. A hand-drawn rough chalk underline animates beneath the pattern header title across F103..F140.
CENTER-STAGE HERO: Sidebar Pattern 01 container + Main Roadmap Header.
CAUSE: Narration explicitly names the current pattern: "Arrays and Hashing roadmap".
EFFECT / MOTION: Patterns 02–19 in sidebar gently dim to 0.45 opacity. A soft cyan border glow (theme.cyan, opacity 0.25) breathes around Pattern 01 card.
WHAT MUST NOT APPEAR YET: Q014 row activation; problem title; difficulty badge; matrix.
COMPREHENSION HOLD: Frames 200 – 235 (36 frames). Generous 1.200s major pause; viewer visually confirms Pattern 01 context.
CLEANUP / EXIT: Underline settles into permanent rough chalk stroke.
PERSISTENT STATE: Pattern 01 focused; Master Roadmap center rows visible.
```

---

### BEAT 03 — `S01_Q13` (Frames 236 – 274)
* **Spoken Phrase:** "Question 13," (W0014..W0015, 7.880s – 8.680s, F236..F260)
* **Pause Hold:** 480ms teaching pause (F260..F275, 15 frames)
* **Total Window:** Frames 236 – 274 (39 frames)

```text
ANCHOR: S01_Q13 (Frames 236 – 274)
WHAT APPEARS NOW: Spotlight focus shifts to row Q013 in the stacked problem list. Surrounding rows (Q001..Q012) recede slightly in opacity (0.7 -> 0.4).
CENTER-STAGE HERO: Row Q013 in Master Roadmap.
CAUSE: Narration names the immediately preceding roadmap problem: "Question thirteen,".
EFFECT / MOTION: Subtle spotlight beam (radial gradient, theme.accent, opacity 0.15) settles behind row Q013. Vertical progress rail displays an echo bracket spanning row 013.
WHAT MUST NOT APPEAR YET: Q014 activation; progress counter increment (13 -> 14 is strictly forbidden).
COMPREHENSION HOLD: Frames 260 – 274 (15 frames). 480ms teaching pause holding visual attention firmly on row Q013.
CLEANUP / EXIT: Spotlight remains locked on Q013.
PERSISTENT STATE: Q013 spotlighted.
```

---

### BEAT 04 — `S01_SET_MATRIX_ZEROES` (Frames 275 – 315)
* **Spoken Phrase:** "set matrix zeros" (W0016..W0018, 9.160s – 10.540s, F275..F316)
* **Pause Hold:** 0 frames (immediate continuation into "is complete.")
* **Total Window:** Frames 275 – 315 (41 frames)

```text
ANCHOR: S01_SET_MATRIX_ZEROES (Frames 275 – 315)
WHAT APPEARS NOW: Title text "Set Matrix Zeroes" and metadata pill "LC 73 · Medium" in row Q013 illuminate with bright chalk white.
CENTER-STAGE HERO: Row Q013 title text and metadata.
CAUSE: Narration speaks the exact title of Question 13.
EFFECT / MOTION: Text opacity lifts from 0.85 to 1.00 with a gentle 6-frame smooth ramp. Zero counter mutation.
WHAT MUST NOT APPEAR YET: Q014 activation; matrix grid.
COMPREHENSION HOLD: None (seamless connection to "is complete.").
CLEANUP / EXIT: Text remains illuminated.
PERSISTENT STATE: Q013 title fully visible and illuminated.
```

---

### BEAT 05 — `S01_COMPLETE` (Frames 316 – 380)
* **Spoken Phrase:** "is complete." (W0019..W0020, 10.540s – 11.900s, F316..F357)
* **Pause Hold:** 800ms major pause (F357..F381, 24 frames)
* **Total Window:** Frames 316 – 380 (65 frames)

```text
ANCHOR: S01_COMPLETE (Frames 316 – 380)
WHAT APPEARS NOW: The green completion badge `[✓ COMPLETE]` on row Q013 pulses with an authentic SVG redraw confirmation (S3 REDRAW_CONFIRM).
CENTER-STAGE HERO: Q013 `[✓ COMPLETE]` badge.
CAUSE: Narration confirms the finished status: "is complete."
EFFECT / MOTION: The green checkmark draws over 16 frames (F320..F336) with theme.good glow, affirming completion. CRITICAL INVARIANT: The global counter does NOT increment (stays 13/227). Zero re-triggering of celebratory particles.
WHAT MUST NOT APPEAR YET: Q014 activation; progress counter advancement.
COMPREHENSION HOLD: Frames 357 – 380 (24 frames). 800ms major comprehension hold confirming that Q013 is fully behind us.
CLEANUP / EXIT: Q013 checkmark settles into solid green stroke.
PERSISTENT STATE: Q013 verified complete; global count 13 / 227.
```

---

### BEAT 06 — `S01_PROGRESS` (Frames 381 – 534)
* **Spoken Phrase:** "Our progress is now 13 out of 227." (W0021..W0028, 12.700s – 17.480s, F381..F524)
* **Pause Hold:** 340ms teaching pause (F524..F535, 11 frames)
* **Total Window:** Frames 381 – 534 (154 frames)

```text
ANCHOR: S01_PROGRESS (Frames 381 – 534)
WHAT APPEARS NOW: Top navigation progress pill (`13 / 227 PROBLEMS`) receives a dedicated focus spotlight. A subtle cyan halo (theme.cyan, opacity 0.3) pulses around the pill container.
CENTER-STAGE HERO: Top navigation progress pill container.
CAUSE: Narration explicitly references global milestone: "Our progress is now thirteen out of two hundred twenty-seven."
EFFECT / MOTION: Soft focus beam glides from row Q013 up to the top navigation bar across F392..F420. The numbers `13` and `227` remain rock-solid and stable.
WHAT MUST NOT APPEAR YET: Increment to 14; Q014 title; matrix graphics.
COMPREHENSION HOLD: Frames 524 – 534 (11 frames). 340ms pause holding attention on the milestone.
CLEANUP / EXIT: Halo settles into a calm ambient border stroke.
PERSISTENT STATE: 13 / 227 confirmed; focus ready to descend to next problem.
```

---

### BEAT 07 — `S01_NEXT` (Frames 535 – 573)
* **Spoken Phrase:** "And next we have" (W0029..W0032, 17.820s – 19.140s, F535..F574)
* **Pause Hold:** 0 frames (immediate continuation into "question 14,")
* **Total Window:** Frames 535 – 573 (39 frames)

```text
ANCHOR: S01_NEXT (Frames 535 – 573)
WHAT APPEARS NOW: Row Q014 in Master Roadmap receives an anticipation focus. The spotlight smoothly glides down from Q013 to Q014. The right rail progress thumb at index 014 pulses with a warm gold ring.
CENTER-STAGE HERO: Row Q014 container in Master Roadmap.
CAUSE: Spoken transition phrase: "And next we have".
EFFECT / MOTION: Spotlight transitions Y: 430 -> Y: 490 over 24 frames (EASE.inOutQuad). Row Q014 container subtly lifts (scale: 1.000 -> 1.015, translateY: -2px).
WHAT MUST NOT APPEAR YET: Full title reveal; LeetCode number; matrix visuals.
COMPREHENSION HOLD: None (momentum directly drives into "question 14,").
CLEANUP / EXIT: Spotlight locked onto row Q014.
PERSISTENT STATE: Q014 row staged for activation.
```

---

### BEAT 08 — `S01_Q14` (Frames 574 – 619)
* **Spoken Phrase:** "question 14," (W0033..W0034, 19.140s – 20.360s, F574..F611)
* **Pause Hold:** 320ms natural pause (F611..F620, 9 frames)
* **Total Window:** Frames 574 – 619 (46 frames)

```text
ANCHOR: S01_Q14 (Frames 574 – 619)
WHAT APPEARS NOW: CANONICAL STATE ACTIVATION: The gold `[▶ UP NEXT]` pill on row Q014 executes a T0 STATE_CHANGE morph, transforming into a vibrant cyan/green `[● NOW ACTIVE]` badge. The row index `[014]` illuminates with theme.accent.
CENTER-STAGE HERO: Row Q014 badge and index.
CAUSE: Spoken milestone anchor: "question 14,".
EFFECT / MOTION: The badge executes a snappy pop-and-switch across F578..F596 (`pop(frame, 578, 18)`). A crisp chalk bracket `[` and `]` snaps into place around row 014 on the progress rail.
WHAT MUST NOT APPEAR YET: Problem title "Rotate Image"; LC 48; matrix.
COMPREHENSION HOLD: Frames 611 – 619 (9 frames). 320ms hold letting the activation settle.
CLEANUP / EXIT: Q014 is now officially the active problem of the course.
PERSISTENT STATE: Q014 NOW ACTIVE; gold thumb confirmed.
```

---

### BEAT 09 — `S01_TITLE` (Frames 620 – 665)
* **Spoken Phrase:** "rotate image," (W0035..W0036, 20.680s – 21.800s, F620..F654)
* **Pause Hold:** 400ms teaching pause (F654..F666, 12 frames)
* **Total Window:** Frames 620 – 665 (46 frames)

```text
ANCHOR: S01_TITLE (Frames 620 – 665)
WHAT APPEARS NOW: The full problem title **"Rotate Image"** reveals in prominent ChalkText (font-size: 32px, bold, chalk white). A vigorous cyan chalk underline draws beneath the words "Rotate Image" across F624..F650.
CENTER-STAGE HERO: Problem Title "Rotate Image".
CAUSE: Narration names the problem: "rotate image,".
EFFECT / MOTION: Title letters fade in with a crisp 10-frame mask reveal. The cyan rough underline draws smoothly from left to right.
WHAT MUST NOT APPEAR YET: LC 48 badge; Medium badge; matrix structure.
COMPREHENSION HOLD: Frames 654 – 665 (12 frames). 400ms teaching pause to let the problem title register.
CLEANUP / EXIT: Underline stroke settles.
PERSISTENT STATE: Title "Rotate Image" active and underlined.
```

---

### BEAT 10 — `S01_LC` (Frames 666 – 729)
* **Spoken Phrase:** "lead code 48," (W0037..W0039, 22.200s – 23.700s, F666..F711)
* **Pause Hold:** 640ms teaching pause (F711..F730, 19 frames)
* **Total Window:** Frames 666 – 729 (64 frames)

```text
ANCHOR: S01_LC (Frames 666 – 729)
WHAT APPEARS NOW: The metadata pill **"LeetCode 48"** (slate badge with gold accent text) pops into view immediately beside the title.
CENTER-STAGE HERO: LeetCode 48 metadata pill.
CAUSE: Narration speaks the platform problem number: "lead code 48,".
EFFECT / MOTION: Pill scales in from 0.85 -> 1.00 with `fadeIn(frame, 668, 14)` and a subtle chalk dust puff (`ChalkDust`).
WHAT MUST NOT APPEAR YET: Medium badge; concrete matrix.
COMPREHENSION HOLD: Frames 711 – 729 (19 frames). Generous 640ms pause holding on the official problem identity.
CLEANUP / EXIT: Pill firmly docked beside title.
PERSISTENT STATE: "Rotate Image · LeetCode 48" locked in.
```

---

### BEAT 11 — `S01_MEDIUM` (Frames 730 – 743)
* **Spoken Phrase:** "medium." (W0040, 24.340s – 24.800s, F730..F744)
* **Pause Hold:** 0 frames (immediate continuation into "This problem is about")
* **Total Window:** Frames 730 – 743 (14 frames)

```text
ANCHOR: S01_MEDIUM (Frames 730 – 743)
WHAT APPEARS NOW: Difficulty pill **"Medium"** (amber/gold background `#d97706` with dark text) illuminates beside LC 48 badge.
CENTER-STAGE HERO: Difficulty pill "Medium".
CAUSE: Narration states difficulty rating: "medium."
EFFECT / MOTION: Crisp 8-frame pop (`pop(frame, 730, 10)`). The full header trio `[014] Rotate Image | LeetCode 48 | Medium` is now 100% complete and verified.
WHAT MUST NOT APPEAR YET: Matrix grids or solution formulas.
COMPREHENSION HOLD: None (flows immediately into conceptual setup).
CLEANUP / EXIT: Full header locked.
PERSISTENT STATE: Complete Problem 014 metadata active.
```

---

### BEAT 12 — `S01_ABOUT` (Frames 744 – 818)
* **Spoken Phrase:** "This problem is about" (W0041..W0044, 24.800s – 27.300s, F744..F819)
* **Pause Hold:** 0 frames
* **Total Window:** Frames 744 – 818 (75 frames)

```text
ANCHOR: S01_ABOUT (Frames 744 – 818)
WHAT APPEARS NOW: Roadmap environment begins its planned background reduction. Left sidebar and other roadmap rows smoothly fade from opacity 1.0 -> 0.25 across F750..F800. Center stage opens up into a clean dark canvas.
CENTER-STAGE HERO: Problem Header elevating above receding roadmap.
CAUSE: Narration begins framing the problem definition: "This problem is about".
EFFECT / MOTION: Surrounding chrome dims. The Q014 title block smoothly elevates toward Y: 110, preparing to morph into the top header of `ProblemOpenerShell`.
WHAT MUST NOT APPEAR YET: Premature matrix grid; corner cycle arrows; solution algorithms.
COMPREHENSION HOLD: None (steady visual transition).
CLEANUP / EXIT: Non-essential roadmap elements fade to near-black.
PERSISTENT STATE: Roadmap receding; Problem 014 header ascending.
```

---

### BEAT 13 — `S01_SQUARE` (Frames 819 – 885)
* **Spoken Phrase:** "rotating a square matrix." (W0045..W0048, 27.300s – 29.500s, F819..F885)
* **Pause Hold:** 0 frames (end of Scene 01 audio at Frame 885)
* **Total Window:** Frames 819 – 885 (67 frames)

```text
ANCHOR: S01_SQUARE (Frames 819 – 885)
WHAT APPEARS NOW: T8 REPRESENTATION_HANDOFF: The Q014 title card completes its smooth docking into the permanent top header zone of `ProblemOpenerShell` (Y: 60–120). A subtle abstract square outline (rough chalk box, 240×240, opacity 0.35, theme.cyan) glides into center stage (X: 960, Y: 480) with a 90-degree rotational arc indicator. Zero numbers, zero cell values, zero concrete grid.
CENTER-STAGE HERO: ProblemOpenerShell Header + Abstract Square rotational hint.
CAUSE: Narration delivers the core structural premise: "rotating a square matrix."
EFFECT / MOTION: The square rotates 0° -> 90° clockwise over F825..F870 (EASE.inOutCubic). Roadmap background completely settles to 0 opacity. Center stage is now perfectly primed, calibrated, and cleared for the Scene 02 5×5 master matrix reveal.
WHAT MUST NOT APPEAR YET: Concrete 5×5 matrix with numbers 1..25; coordinate formulas `(c, n-1-r)`; Method 1/2/3 labels.
COMPREHENSION HOLD: Frames 870 – 885 (15 frames). Final hold on the docked header and clean stage before Scene 02 begins.
CLEANUP / EXIT: Clean handoff into Scene 02.
PERSISTENT STATE: Scene 01 complete. Docked header `[014] Rotate Image | LC 48 | Medium`. Center stage clear. Ready for Scene 02.
```

---

## 4. Visual Verification & Critical-Frame QA Checklist

To ensure 100% adherence to **DSA Production Rules V2**, inspect the following critical frames during implementation review:

| Frame | Timestamp (s) | Anchor | What MUST Be Visible | What MUST NOT Be Visible | Invariant Checked |
|---|---|---|---|---|---|
| **F0** | 0.000s | S01_WELCOME | Exact Q13 settled state; `13 / 227`; Q013 COMPLETE; Q014 UP NEXT | Zero particle bursts; no 12->13 replay | Provenance Continuity |
| **F50** | 1.666s | S01_WELCOME | Full Master Roadmap stable; captions at bottom | Any Q014 activation | Stable Orientation |
| **F140** | 4.666s | S01_PATTERN | Pattern 01 card highlighted; rough chalk underline visible | Other patterns bright | Context Narrowing |
| **F250** | 8.333s | S01_Q13 | Spotlight beam directly on row Q013 | Q014 active | Correct Problem Highlight |
| **F336** | 11.200s | S01_COMPLETE | Green checkmark redraw pulse on Q013 | Counter moving | Zero Counter Mutation |
| **F450** | 15.000s | S01_PROGRESS | Top pill `13 / 227` halo pulse; centered | `14 / 227` (strictly forbidden) | Global Counter Truth |
| **F550** | 18.333s | S01_NEXT | Spotlight transferring to row Q014 | Title revealed | Anticipation Discipline |
| **F590** | 19.666s | S01_Q14 | `[● NOW ACTIVE]` cyan badge pops; `[014]` illuminated | Premature title underline | Atomic State Activation |
| **F640** | 21.333s | S01_TITLE | "Rotate Image" in 32px chalk white; cyan underline drawing | LC 48 badge | Synchronized Text Reveal |
| **F690** | 23.000s | S01_LC | LeetCode 48 badge docked beside title | Matrix graphics | Platform Identity |
| **F738** | 24.600s | S01_MEDIUM | Amber "Medium" badge active; full header complete | Solution hints | Difficulty Calibration |
| **F790** | 26.333s | S01_ABOUT | Roadmap chrome dimming (opacity 0.25); header elevating | Random graphics | Scene Exit Preparation |
| **F875** | 29.166s | S01_SQUARE | Docked header in ProblemOpenerShell; abstract 90° square hint; center stage clear | 5×5 matrix with values 1..25 | Clean Scene 02 Handoff |

---

## 5. Antigravity Implementation Delta

```text
REUSE:
- MasterRoadmapV2 (@dsa/kit/components/MasterRoadmapV2)
- ProblemOpenerShell (@dsa/kit/components/ProblemOpenerShell)
- Captions (@dsa/kit/components/Captions)
- ChalkboardBackground (@dsa/kit/lib/chalk)

EXTEND:
- Pass resolved anchor frames to MasterRoadmapV2 for deterministic transitions:
    welcomeEnd: 68
    patternEnd: 200
    q13SpotlightStart: 236
    q13CompletePulse: 316
    progressPillFocus: 381
    q14SpotlightTransfer: 535
    q14ActivationFrame: 574
    q14TitleReveal: 620
    q14LcBadgeReveal: 666
    q14MediumBadgeReveal: 730
    roadmapFadeStart: 744
    openerShellDockFrame: 819

CREATE:
- remotion-project/src/questions/014-rotate-image/scenes/Scene01Intro.tsx

DO NOT TOUCH:
- Global completion count: locked at 13
- Progress rail thumb index: locked at 014
- Question ordering in roadmapData.ts
```
