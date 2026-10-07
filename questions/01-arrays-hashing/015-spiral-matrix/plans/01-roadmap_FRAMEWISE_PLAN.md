# Q15 — Spiral Matrix (LC 54)
# Scene 01 · Course Roadmap Resume & Q15 Activation
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN

**Course:** Code With Animation  
**Roadmap:** 227 Problems · 19 Patterns  
**Pattern:** 01 · Arrays & Hashing  
**Previous Problem:** #014 Rotate Image · LC 48 · COMPLETE  
**Current Problem:** #015 Spiral Matrix · LC 54 · Medium  
**Audio File:** `questions/01-arrays-hashing/015-spiral-matrix/audio/scence01.mp3` (`remotion-project/public/audio/015/01-roadmap.mp3`)  
**Exact Sync File:** `questions/01-arrays-hashing/015-spiral-matrix/sync/01-roadmap.json`  
**Anchor Manifest:** `questions/01-arrays-hashing/015-spiral-matrix/sync/01-roadmap.anchors.json`  
**FPS:** 30  
**Audio Duration:** 30.580s (30,580 ms)  
**Exact Total Frames:** 917 frames (30.580 seconds)  
**Anchor Match Count:** 13 / 13  
**Unmatched Anchors:** 0  

---

## 1. Mandatory Scene Contract

```text
SCENE: 01-roadmap
QUESTION: 015 · Spiral Matrix (LeetCode 54)
BEAT TYPE: INTRO / ROADMAP RESUME & QUESTION ACTIVATION
AUDIO FILE: audio/015/01-roadmap.mp3
SYNC FILE: sync/01-roadmap.json
ANCHORS FILE: sync/01-roadmap.anchors.json
FPS: 30
TOTAL FRAMES: 917
PEDAGOGICAL GOAL: 
  1. Resume the authoritative Master DSA Pattern Roadmap from the exact settled end-state of Q14 Scene 13:
     - 14 / 227 COMPLETE
     - Pattern 01 (Arrays & Hashing) ACTIVE
     - Row 014 COMPLETE with green checkmark
     - Row 015 UP NEXT with gold pill indicator
     - Rail thumb resting at row 015
  2. Confirm Q14 complete without re-triggering completion counter roll.
  3. Activate Q15 (UP NEXT -> NOW ACTIVE) on exact spoken anchor "question 15".
  4. Illuminate Q15 metadata (Spiral Matrix, LC 54, Medium).
  5. Contrast problem intent: "we are not changing the matrix... only need to read its values in spiral order".
  6. Perform a clean semantic representation handoff into ProblemOpenerShell ready for Scene 02.
TRACE STEP IDS: N/A (Course orientation and question activation)
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
    completedCount: 14
    completedGlobalNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    activePatternId: 1
    activeGlobalNum: undefined (F0..F419), mutates to 15 at F420 ("question 15,")
    upNextGlobalNum: 15 (F0..F419), undefined from F420 onward
    spotlightRow: 14 during Beats 2-4 (F95..F206), 15 during Beats 6-13 (F380..F917)
    showHeaderUnderline: true (F0..F94)
    handoffFade: 0.0 (F0..F853), interpolates to 1.0 (F854..F917)

CREATE:
- Scene01Intro.tsx (Remotion scene component in questions/.../015-spiral-matrix/src/)

DO NOT TOUCH:
- @dsa/kit core foundation libraries
- Q011 / Q012 / Q013 / Q014 regression reference source files
- Global completion counter (14 / 227 is strictly immutable in Scene 01)
```

---

## 2. Optical Canvas Layout (1920 × 1080)

```text
+-----------------------------------------------------------------------------+
| TOP BANNER: Y: 28–70  "CODE WITH ANIMATION" · DSA PATTERN ROADMAP (Pattern 1)|
| SUB-HEADER: Y: 95–160 "ARRAYS & HASHING" (18 Questions) · 14/227 Progress    |
+-----------------------------------------------------------------------------+
| CENTER STAGE: Y: 180–780                                                    |
|                                                                             |
|  [Left Rail: Y: 190–760]       [Center Roadmap Container: 1320px wide]      |
|   - Progress thumb at 015       - Row 014: Rotate Image [✓ COMPLETE]         |
|   - Vertical track to 227       - Row 015: Spiral Matrix [UP NEXT -> ACTIVE] |
|                                 - Row 016: Subarray Sum Equals K             |
|                                 - Row 017: Longest Substring...              |
|                                                                             |
|  F611–F854: Problem Opener Overlay docks at center:                         |
|   - "READ ONLY" vs "NO IN-PLACE MUTATION" badge card                         |
|   - Spiral Matrix 5x6 preview frame (faint chalk outline)                   |
+-----------------------------------------------------------------------------+
| CAPTIONS ZONE: Y: 960–1040 (Word-level synchronized subtitles)              |
+-----------------------------------------------------------------------------+
```

---

## 3. Framewise Beat Choreography (All 13 Anchors)

### BEAT 01 — `S01_WELCOME` (Frames 0 – 94)
- **ANCHOR:** `S01_WELCOME` | `"Welcome back to Code with Animation."` (F0 – F67, pause to F94)
- **WHAT APPEARS NOW:** Master Roadmap canvas settling gently onto the chalkboard with active Pattern 01 (Arrays & Hashing) highlighted. Top course banner is crisp.
- **CENTER-STAGE HERO:** Course Roadmap identity and Pattern 01 context.
- **CAUSE:** Audio narration initiates the long-form session.
- **EFFECT / MOTION:** Camera eases from `scale: 1.008` to `1.000` (F0..F24). Header underline draws under Pattern 01.
- **WHAT MUST NOT APPEAR YET:** Q15 activation badge; matrix preview; problem card.
- **COMPREHENSION HOLD:** Natural audio pause between F68 and F94 (27 frames / ~900ms).
- **CLEANUP / EXIT:** Smooth camera hold ready for Q14 focus.
- **PERSISTENT STATE:** Master Roadmap open, Pattern 01 active, global count 14/227.

---

### BEAT 02 — `S01_Q14` (Frames 95 – 147)
- **ANCHOR:** `S01_Q14` | `"Question 14,"` (F95 – F124, pause to F147)
- **WHAT APPEARS NOW:** Spotlight focus lands on Row 014 (Rotate Image).
- **CENTER-STAGE HERO:** Row 014 in Master Roadmap.
- **CAUSE:** Spoken phrase specifies Question 14.
- **EFFECT / MOTION:** Camera pans subtly toward Row 014 (`camScale: 1.03`, `camY: -74px` over F95..F120). Row 014 background elevates with chalk halo.
- **WHAT MUST NOT APPEAR YET:** Q15 row changes; matrix overlays.
- **COMPREHENSION HOLD:** Audio gap between F125 and F147 (23 frames).
- **CLEANUP / EXIT:** Attention locked on Row 014.
- **PERSISTENT STATE:** Row 014 spotlighted.

---

### BEAT 03 — `S01_ROTATE` (Frames 148 – 172)
- **ANCHOR:** `S01_ROTATE` | `"rotate image"` (F148 – F172)
- **WHAT APPEARS NOW:** Row 014 title text `"Rotate Image"` illuminates with bright chalk glow (#F8F6F0).
- **CENTER-STAGE HERO:** Q14 title and metadata (LC 48).
- **CAUSE:** Spoken naming of Rotate Image.
- **EFFECT / MOTION:** Text weight/shadow expands slightly; gold arrow glyph points to Q14.
- **WHAT MUST NOT APPEAR YET:** Completion checkmark redraw; Q15 activation.
- **COMPREHENSION HOLD:** Immediate continuation into `"is complete"`.
- **CLEANUP / EXIT:** Prepares for completion checkmark confirmation.
- **PERSISTENT STATE:** Q14 highlighted as recently solved.

---

### BEAT 04 — `S01_COMPLETE` (Frames 173 – 229)
- **ANCHOR:** `S01_COMPLETE` | `"is complete."` (F173 – F206, pause to F229)
- **WHAT APPEARS NOW:** Green chalk checkmark (`✓`) on Row 014 pulses with a vibrant mint green aura (`#3CE5A7`).
- **CENTER-STAGE HERO:** Row 014 COMPLETE status badge.
- **CAUSE:** Spoken confirmation of completion.
- **EFFECT / MOTION:** Green SVG checkmark redraw pulse (scale: 1.0 -> 1.12 -> 1.0). Global counter stays strictly at 14/227 (no redundant counter roll).
- **WHAT MUST NOT APPEAR YET:** Row 015 activation; Q15 metadata.
- **COMPREHENSION HOLD:** Audio gap F207..F229 (23 frames / ~760ms).
- **CLEANUP / EXIT:** Checkmark settles into static verified state.
- **PERSISTENT STATE:** Row 014 confirmed COMPLETE.

---

### BEAT 05 — `S01_PROGRESS` (Frames 230 – 379)
- **ANCHOR:** `S01_PROGRESS` | `"Our progress is now 14 out of 227."` (F230 – F362, pause to F379)
- **WHAT APPEARS NOW:** The top progress pill `"14 / 227"` is highlighted with an amber/gold chalk border (`#FFD166`).
- **CENTER-STAGE HERO:** Global curriculum progress indicator.
- **CAUSE:** Narration states total progress count.
- **EFFECT / MOTION:** Camera pans up slightly (`camY: -110px`, `camScale: 1.02`). Soft rough chalk circle sketches around the `"14 / 227"` pill.
- **WHAT MUST NOT APPEAR YET:** Q15 activation.
- **COMPREHENSION HOLD:** Real pause between F363 and F379 (17 frames).
- **CLEANUP / EXIT:** Chalk circle fades; camera pans down toward Row 015.
- **PERSISTENT STATE:** 14/227 progress established.

---

### BEAT 06 — `S01_Q15` (Frames 380 – 466)
- **ANCHOR:** `S01_Q15` | `"And next, we have question 15,"` (F380 – F458, pause to F466)
- **WHAT APPEARS NOW:** Spotlight transitions from Row 014 to Row 015. On frame 420 (`"question 15"`), the gold `UP NEXT [▶]` pill mutates into the active `NOW ACTIVE [●]` mint badge.
- **CENTER-STAGE HERO:** Row 015 (Spiral Matrix) activation.
- **CAUSE:** Spoken activation of Question 15.
- **EFFECT / MOTION:** Camera eases down to Row 015 (`camY: -114px`, `camScale: 1.03`). Badge morphs from gold outline to mint-green solid fill.
- **WHAT MUST NOT APPEAR YET:** Matrix values; algorithm solution; code.
- **COMPREHENSION HOLD:** Audio pause F459..F466 (8 frames).
- **CLEANUP / EXIT:** Row 015 is officially the active hero row.
- **PERSISTENT STATE:** Q15 active.

---

### BEAT 07 — `S01_TITLE` (Frames 467 – 520)
- **ANCHOR:** `S01_TITLE` | `"spiral matrix."` (F467 – F503, pause to F520)
- **WHAT APPEARS NOW:** Title text `"Spiral Matrix"` expands in bold chalk typography with cyan chalk underline (`#5CE1E6`).
- **CENTER-STAGE HERO:** Question Title hero.
- **CAUSE:** Spoken naming of Spiral Matrix.
- **EFFECT / MOTION:** Rough cyan underline draws left-to-right under `"Spiral Matrix"` (F467..F495).
- **WHAT MUST NOT APPEAR YET:** LeetCode badge; difficulty badge.
- **COMPREHENSION HOLD:** Audio pause F504..F520 (17 frames).
- **CLEANUP / EXIT:** Underline persists.
- **PERSISTENT STATE:** Spiral Matrix title locked.

---

### BEAT 08 — `S01_LC` (Frames 521 – 573)
- **ANCHOR:** `S01_LC` | `"Lead code 54,"` (F521 – F555, pause to F573)
- **WHAT APPEARS NOW:** LeetCode metadata pill `[LC 54]` illuminates with a crisp white chalk border.
- **CENTER-STAGE HERO:** LeetCode 54 reference badge.
- **CAUSE:** Spoken reference to problem number.
- **EFFECT / MOTION:** Subtle pop animation on the badge (scale: 0.95 -> 1.05 -> 1.0).
- **WHAT MUST NOT APPEAR YET:** Medium difficulty badge.
- **COMPREHENSION HOLD:** Audio pause F556..F573 (18 frames / ~600ms).
- **CLEANUP / EXIT:** Badge locks in position beside title.
- **PERSISTENT STATE:** LC 54 verified.

---

### BEAT 09 — `S01_MEDIUM` (Frames 574 – 610)
- **ANCHOR:** `S01_MEDIUM` | `"medium."` (F574 – F584, pause to F610)
- **WHAT APPEARS NOW:** Difficulty badge `[MEDIUM]` lights up in warm amber sheen (`#F59E0B`).
- **CENTER-STAGE HERO:** Complete Q15 header metadata lockup.
- **CAUSE:** Spoken difficulty classification.
- **EFFECT / MOTION:** Amber glow spreads softly behind the badge.
- **WHAT MUST NOT APPEAR YET:** Problem contrast card; matrix preview.
- **COMPREHENSION HOLD:** Significant pause F585..F610 (26 frames / ~860ms).
- **CLEANUP / EXIT:** Roadmap row configuration is fully populated.
- **PERSISTENT STATE:** Q15 metadata complete.

---

### BEAT 10 — `S01_FIXED` (Frames 611 – 715)
- **ANCHOR:** `S01_FIXED` | `"This time, we are not changing the matrix."` (F611 – F704, pause to F715)
- **WHAT APPEARS NOW:** A callout card appears below the header: `"NO IN-PLACE MODIFICATION"`, contrasting with Q14 (Rotate Image where cells moved). A faint $5 \times 6$ matrix blueprint appears with a padlock icon (`🔒 FIXED`).
- **CENTER-STAGE HERO:** "Matrix cells remain fixed" invariant card.
- **CAUSE:** Narration clarifies that this problem does not mutate the matrix in-place.
- **EFFECT / MOTION:** Card slides up smoothly from Y: 680 to Y: 620 (`opacity: 0 -> 1`). Surrounding roadmap background rows fade by 40% (`opacity: 0.6`).
- **WHAT MUST NOT APPEAR YET:** Spiral traversal arrows; output array.
- **COMPREHENSION HOLD:** Audio pause F705..F715 (11 frames).
- **CLEANUP / EXIT:** Card holds center stage.
- **PERSISTENT STATE:** Cell immutability established.

---

### BEAT 11 — `S01_READ` (Frames 716 – 785)
- **ANCHOR:** `S01_READ` | `"We only need to read its values"` (F716 – F785)
- **WHAT APPEARS NOW:** An illuminated reading cursor badge appears above the matrix blueprint: `"READ / HARVEST VALUES"`. An empty 1D output collector array track appears at Y: 720.
- **CENTER-STAGE HERO:** Read-only data harvesting concept.
- **CAUSE:** Spoken clarification of the algorithm's objective.
- **EFFECT / MOTION:** Faint beam scans across the top edge; empty output array container fades in.
- **WHAT MUST NOT APPEAR YET:** Traversal path; solution logic.
- **COMPREHENSION HOLD:** Immediate continuation into `"in spiral order"`.
- **CLEANUP / EXIT:** Cursor prepares for spiral path indication.
- **PERSISTENT STATE:** Matrix + Output container visible.

---

### BEAT 12 — `S01_SPIRAL` (Frames 786 – 853)
- **ANCHOR:** `S01_SPIRAL` | `"in spiral order."` (F786 – F853)
- **WHAT APPEARS NOW:** A continuous gold chalk spiral trail sweeps smoothly through the outer boundary: right $\to$ down $\to$ left $\to$ up $\to$ inward, demonstrating the requested trajectory.
- **CENTER-STAGE HERO:** Clockwise spiral path preview.
- **CAUSE:** Spoken naming of spiral order.
- **EFFECT / MOTION:** Animated chalk stroke draws the spiral curve (`strokeDashoffset: 1 -> 0` over F786..F840).
- **WHAT MUST NOT APPEAR YET:** Specific code; algorithm methods; solution variables.
- **COMPREHENSION HOLD:** Settle hold F841..F853 (13 frames).
- **CLEANUP / EXIT:** Spiral trail fades gently as transition to Scene 02 begins.
- **PERSISTENT STATE:** Spiral trajectory clearly understood.

---

### BEAT 13 — `S01_UNDERSTAND` (Frames 854 – 917)
- **ANCHOR:** `S01_UNDERSTAND` | `"Let's understand it."` (F854 – F917, total 917 frames)
- **WHAT APPEARS NOW:** Clean representation handoff into `ProblemOpenerShell`: roadmap chrome fades out completely (`handoffFade: 0.0 -> 1.0`), Q15 title bar docks at the top edge, and the center canvas clears to receive the Scene 02 $5 \times 6$ master matrix.
- **CENTER-STAGE HERO:** Seamless Scene 02 transition shell.
- **CAUSE:** Spoken transition to problem breakdown.
- **EFFECT / MOTION:** Roadmap fades (`opacity: 1 -> 0` over F854..F900); camera settles at neutral `1.000`; top banner docks.
- **WHAT MUST NOT APPEAR YET:** Scene 02 full matrix values or coordinate rulers.
- **COMPREHENSION HOLD:** Hold on clean docked board until F917.
- **CLEANUP / EXIT:** Canvas fully prepared for Scene 02.
- **PERSISTENT STATE:** Docked Q15 shell ready for Scene 02.

---

## 4. Verification Check

| Anchor ID | Spoken Phrase | Start Frame | End Frame | Duration | Status |
|:---|:---|:---:|:---:|:---:|:---:|
| `S01_WELCOME` | "Welcome back to Code with Animation." | F0 | F67 | 68f | ✅ MATCH |
| `S01_Q14` | "Question 14," | F95 | F124 | 30f | ✅ MATCH |
| `S01_ROTATE` | "rotate image" | F148 | F173 | 26f | ✅ MATCH |
| `S01_COMPLETE` | "is complete." | F173 | F206 | 34f | ✅ MATCH |
| `S01_PROGRESS` | "Our progress is now 14 out of 227." | F230 | F362 | 133f | ✅ MATCH |
| `S01_Q15` | "And next, we have question 15," | F380 | F458 | 79f | ✅ MATCH |
| `S01_TITLE` | "spiral matrix." | F467 | F503 | 37f | ✅ MATCH |
| `S01_LC` | "Lead code 54," | F521 | F555 | 35f | ✅ MATCH |
| `S01_MEDIUM` | "medium." | F574 | F584 | 11f | ✅ MATCH |
| `S01_FIXED` | "This time, we are not changing the matrix." | F611 | F704 | 94f | ✅ MATCH |
| `S01_READ` | "We only need to read its values" | F716 | F786 | 71f | ✅ MATCH |
| `S01_SPIRAL` | "in spiral order." | F786 | F854 | 69f | ✅ MATCH |
| `S01_UNDERSTAND` | "Let's understand it." | F854 | F917 | 64f | ✅ MATCH |
| **TOTAL** | **13 Anchors** | **F0** | **F917** | **917f** | ✅ **100% COVERAGE** |
