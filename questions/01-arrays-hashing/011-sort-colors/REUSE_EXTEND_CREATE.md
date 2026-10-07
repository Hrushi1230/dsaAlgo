# REUSE / EXTEND / CREATE Implementation Delta
**Question:** 011 · Sort Colors (LeetCode 75)  
**Scene:** `01-intro-roadmap`  
**Pipeline Stage:** Stage 14 — Exact Frame-Wise Scene Planning  
**Audit Basis:** Codebase audit of `@dsa/kit`, `Q10 Scene01Intro.tsx`, `Q10 Scene13Recap.tsx`, `roadmapData.ts`  

---

## 1. REUSE (Use Unchanged)

| Component / Utility | Source Path | Role in Scene 01 |
|---|---|---|
| **ChalkboardBackground** | `@dsa/kit/lib/chalk` | Deep chalkboard texture `#18523d` canvas base |
| **ChalkFilters** | `@dsa/kit/lib/chalk` | SVG displacement filters for realistic chalk strokes |
| **theme** | `@dsa/kit/lib/theme` | Course palette tokens (`boardBg`, `chalkText`, `chalkDim`, `pivot`, `good`, `warn`, `cyan`) |
| **fonts** | `@dsa/kit/lib/theme` | Typography families (Patrick Hand for handwriting, monospace for numbers/LC/metrics) |
| **EASE, fadeIn, pop** | `@dsa/kit/lib/anim` | Deterministic frame interpolation curves |
| **RoughBox** | `@dsa/kit/components/RoughBox` | Chalk borders for top badge, roadmap container, and Q011 card |
| **RoughLine** | `@dsa/kit/components/RoughLine` | Underline emphasis under `DSA PATTERN ROADMAP` and `Sort Colors` |
| **ChalkDust** | `@dsa/kit/components/ChalkDust` | Subtle ambient background particle field |
| **Captions** | `@dsa/kit/components/Captions` | Word-level karaoke-synced caption bar at optical bottom (`Y: 960..1040`) |
| **audioSyncV2** | `@dsa/kit/lib/audioSyncV2` | Exact word sync interpretation and anchor resolution |
| **ProblemOpenerShell** | `@dsa/kit/components/ProblemOpenerShell` | Target component for Beat R (`S01_CONTINUE`) representation handoff |
| **Permanent Roadmap UI** | `Q10 Scene01Intro.tsx` / `Scene13Recap.tsx` | Exact 3-column roadmap architecture (Top bar, Left 19 patterns, Main 18 rows, Right rail) |

---

## 2. EXTEND (Minimal Extension)

| Item | Proposed Location | Extension Rationale |
|---|---|---|
| **`roadmapData.ts`** | `questions/01-arrays-hashing/011-sort-colors/src/roadmapData.ts` | Copy authoritative 227-problem / 19-pattern dataset locally into Q11 `src/` to prevent brittle cross-question relative imports |
| **Row State Machine** | `Scene01Intro.tsx` (local) | Wire row state transitions directly to validated sync anchors: Row 010 remains confirmed complete (`✓`), Row 011 transitions `UP NEXT` → `NOW ACTIVE` at anchor `S01_Q11` (F1019) |
| **Representation Handoff Rig** | `Scene01Intro.tsx` (local) | Seamlessly interpolate Q011 card elements (`Sort Colors`, `LC 75`, `MEDIUM`) into `ProblemOpenerShell` layout coordinates at `S01_CONTINUE` (F1201–F1223) |

---

## 3. CREATE (Scene-Specific Assets)

| File | Purpose | Status |
|---|---|---|
| `sync/01-intro-roadmap.anchors.json` | Authoritative semantic anchor manifest binding all 18 anchors to exact word IDs, frames, and pauses | **CREATED** |
| `SYNC_AUDIT.md` | Invariant audit of the 40.78s / 1,223F audio sync JSON | **CREATED** |
| `01-intro-roadmap_FRAMEWISE_PLAN.md` | Frame-by-frame visual choreography and state transitions | **CREATED** |
| `01-intro-roadmap_FRAME_QA_CHECKLIST.md` | Exact frame review checkpoints for visual and algorithmic QA | **CREATED** |
| `src/Scene01Intro.tsx` | Remotion implementation (owned by Antigravity in Stage 16) | Deferred to Stage 16 |

---

## 4. DO NOT TOUCH (Forbidden to Alter)

1. **`kit/` Shared Libraries:** No edits to `@dsa/kit/lib/theme.ts`, `chalk.tsx`, `audioSyncV2.ts`, or core components.
2. **Q010 Regression Source:** Do NOT alter files in `questions/01-arrays-hashing/010-longest-consecutive-sequence/`.
3. **Roadmap Hierarchy & Order:** Do NOT modify the 227-problem sequence or 19 patterns.
4. **Global Completion Counter:** `10 / 227 COMPLETE` is immutable during Scene 01. It must NOT be animated or changed to 11.
5. **Raw Audio Sync JSON:** `sync/01-intro-roadmap.json` is immutable ground truth.
