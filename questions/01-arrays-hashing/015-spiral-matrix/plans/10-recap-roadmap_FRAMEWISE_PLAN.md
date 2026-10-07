# Scene 10 Framewise Scene Plan: Recap & Master Roadmap Handoff

> **Problem:** 015 — Spiral Matrix (LeetCode 54)  
> **Course Pattern:** 01 · Arrays & Hashing  
> **Scene ID:** 10 — Recap & Master Roadmap Handoff  
> **Total Duration:** 682 frames @ 30fps (22.720s)  
> **Audio Authority:** `audio/10-recap.mp3` & `sync/10-recap-roadmap.json`  
> **Component System:** `@dsa/kit` (`MasterRoadmapV2`, `ChalkboardBackground`, `ChalkFilters`, `Captions`)

---

## 1. Scene Overview & Pedagogical Purpose

Scene 10 delivers the authoritative curriculum conclusion of **Question 015: Spiral Matrix**:
1. Marks Problem #015 (Spiral Matrix) definitively as **COMPLETED ✓**.
2. Updates global course progress from **14 / 227** to **15 / 227** with a dynamic odometer rolling animation.
3. Formally introduces **Question #016: Subarray Sum Equals K** as **UP NEXT ➔**, establishing seamless narrative continuity into Pattern 01's prefix-sum progression.

---

## 2. Framewise Anchor Choreography (All 7 Anchors)

### Anchor 1: `S10_Q15_ANNOUNCE` (F0..F49 · 0.000s..1.620s)
- **ANCHOR:** "Question 15."
- **WHAT APPEARS NOW:** `MasterRoadmapV2` fills the center stage. Row #015 (Spiral Matrix) is highlighted with `spotlightRow={15}` and badge `NOW ACTIVE ●`. Left sidebar shows 19 course patterns. Completed rows 1..14 are marked with green checkmarks.
- **CENTER-STAGE HERO:** Roadmap Row #015 Spotlight
- **CAUSE:** Narration introduces the problem number.
- **EFFECT / MOTION:** Subtle camera zoom (`scale: 1.0` -> `1.03`, `translateY: -115`) centering on Row #015.
- **WHAT MUST NOT APPEAR YET:** "COMPLETED ✓" status; progress 15/227; Row #016.
- **COMPREHENSION HOLD:** Natural audio cadence into next word at F60.
- **CLEANUP / EXIT:** Smooth transition to completion state.
- **PERSISTENT STATE:** Row 15 active on roadmap.

---

### Anchor 2: `S10_Q15_COMPLETE` (F60..F127 · 2.000s..4.240s)
- **ANCHOR:** "Spiral matrix is complete."
- **WHAT APPEARS NOW:** Status badge on Row #015 flips dynamically from `NOW ACTIVE ●` (cyan) to `COMPLETED ✓` (emerald green). Row #015 background gains emerald highlight border (`theme.emerald`).
- **CENTER-STAGE HERO:** Problem 15 Completion Stamp (`COMPLETED ✓`)
- **CAUSE:** Spoken phrase "is complete".
- **EFFECT / MOTION:** Emerald burst on Row #015 (`completedGlobalNums` adds 15).
- **WHAT MUST NOT APPEAR YET:** Progress pill 15/227; Q16 spotlight.
- **COMPREHENSION HOLD:** Audio pause F127..F143 (0.53s).
- **CLEANUP / EXIT:** Completion state locks in place.
- **PERSISTENT STATE:** Problem 15 marked completed.

---

### Anchor 3: `S10_PROGRESS_BEFORE` (F143..F296 · 4.780s..9.880s)
- **ANCHOR:** "Our progress moves from 14 out of 227"
- **WHAT APPEARS NOW:** Camera smoothly tilts and pans upward (`translateY: +80px`) to focus on the top course progress badge pill (`14 / 227 COMPLETED`).
- **CENTER-STAGE HERO:** Course Progress Badge (`14 / 227`)
- **CAUSE:** Spoken reference to current progress.
- **EFFECT / MOTION:** Smooth pan upward focusing viewer gaze on the global progress indicator.
- **WHAT MUST NOT APPEAR YET:** Number 15 on progress pill.
- **COMPREHENSION HOLD:** Spoken continuation directly into "to 15".
- **CLEANUP / EXIT:** Continuous motion into roll.
- **PERSISTENT STATE:** Camera focused on progress pill.

---

### Anchor 4: `S10_PROGRESS_AFTER` (F296..F442 · 9.880s..14.740s)
- **ANCHOR:** "...to 15 out of 227."
- **WHAT APPEARS NOW:** The progress counter smoothly increments from `14` to `15` (`completedCount` rolls to `15`). Gold particle glow illuminates the badge.
- **CENTER-STAGE HERO:** Incremented Milestone (`15 / 227 COMPLETED`)
- **CAUSE:** Spoken milestone "to 15 out of 227".
- **EFFECT / MOTION:** Spring odometer roll from 14 to 15. Subtle gold pulse around progress pill.
- **WHAT MUST NOT APPEAR YET:** Q16 spotlight.
- **COMPREHENSION HOLD:** Audio pause F442..F462 (0.67s).
- **CLEANUP / EXIT:** Camera begins panning downward toward Row 16.
- **PERSISTENT STATE:** Course progress = 15 / 227 locked.

---

### Anchor 5: `S10_NEXT_ANNOUNCE` (F462..F533 · 15.400s..17.760s)
- **ANCHOR:** "And next question 16."
- **WHAT APPEARS NOW:** Camera pans down to Row #016 (`translateY: -135px`). Row #016 enters viewer focus with cyan accent.
- **CENTER-STAGE HERO:** Row #016 Transition Focus
- **CAUSE:** Spoken introduction of next question.
- **EFFECT / MOTION:** Smooth camera descent to Row 16; spotlight shifts to row 16.
- **WHAT MUST NOT APPEAR YET:** "Subarray sum equals k" title reveal; UP NEXT badge.
- **COMPREHENSION HOLD:** Direct audio continuation.
- **CLEANUP / EXIT:** Continues into title lock.
- **PERSISTENT STATE:** Row 16 spotlighted.

---

### Anchor 6: `S10_NEXT_PROBLEM` (F553..F616 · 18.440s..20.540s)
- **ANCHOR:** "Subarray sum equals k."
- **WHAT APPEARS NOW:** Row #016 displays `upNextGlobalNum={16}` with badge `UP NEXT ➔` in vivid amber/gold (`theme.gold`).
- **CENTER-STAGE HERO:** Question 16 Handoff (`#016 Subarray Sum Equals K — UP NEXT ➔`)
- **CAUSE:** Spoken question title.
- **EFFECT / MOTION:** Subtle gold pulse on Row 16 banner.
- **WHAT MUST NOT APPEAR YET:** Final wide zoom.
- **COMPREHENSION HOLD:** Audio pause F616..F647 (1.03s).
- **CLEANUP / EXIT:** Transitions to master overview.
- **PERSISTENT STATE:** Q16 established as the upcoming challenge.

---

### Anchor 7: `S10_UP_NEXT_LOCK` (F647..F682 · 21.560s..22.720s)
- **ANCHOR:** "That is up next."
- **WHAT APPEARS NOW:** Camera gently eases back to full overview (`scale: 1.0`, `translateY: 0`). The entire curriculum state remains crisply visible: 15 problems completed, Q016 primed as up next.
- **CENTER-STAGE HERO:** Master Roadmap Curriculum Handoff
- **CAUSE:** Final spoken closing phrase.
- **EFFECT / MOTION:** Gentle easing zoom to full canvas overview.
- **WHAT MUST NOT APPEAR YET:** (End of scene).
- **COMPREHENSION HOLD:** Final frames hold until F682 cleanly before video concludes.
- **CLEANUP / EXIT:** Scene ends at F682.
- **PERSISTENT STATE:** Global Course State: 15 / 227 complete, Q016 next.

---

## 3. Spatial Layout & Zero-Collision Invariants

- **Full Canvas Canvas Viewport:** `1920 × 1080` coordinate space.
- **MasterRoadmapV2 Layout:**
  - Sidebar: 19 patterns on the left (`X: 80..420`).
  - Progress rail: Vertical roadmap track (`X: 460..1840`, `Y: 100..880`).
  - Top header: Course title, pattern badge, progress counter (`Y: 28..76`).
- **Captions Clearance:** Captions sit at `bottom: 30px` (`Y: 980..1030`), preserving >100px breathing room below roadmap rows.
- **Zero-Void Guarantee:** `MasterRoadmapV2` occupies the full canvas harmoniously from `Y: 28` down to `Y: 920`.
