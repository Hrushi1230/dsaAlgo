# Codebase Audit — Q11: Sort Colors (LeetCode 75)

## 1. Context & Scope
- **Course**: Code With Animation — Long-Form DSA Course
- **Pattern**: 01 — Arrays & Hashing
- **Question**: 011 — Sort Colors (LC 75, Medium)
- **Visual Subject**: In-place 3-way partitioning of an array of 0s, 1s, and 2s with 3 pointers (`low`, `mid`, `high`) and 4 logical regions.

---

## 2. Codebase Audit Classification

### REUSE (Use Directly Without Modification)
- **`@dsa/kit/components/SceneTitleCard`**: Standard scene titles and question badges across all 10 scenes.
- **`@dsa/kit/components/QuestionCard`**: Problem statement and constraints presentation in Scene 02.
- **`@dsa/kit/components/Captions`**: Deterministic frame-synced Indian English subtitle renderer.
- **`@dsa/kit/components/ChalkDust` & `ChalkText`**: Deep chalkboard aesthetic background dust and authentic handwriting typography.
- **`@dsa/kit/components/RoughBox` & `RoughLine`**: Hand-drawn sketchy accent boundaries and separators.
- **`@dsa/kit/helpers/audioSync`**: Word-level timing anchor parser (`parseAudioSync`).
- **`@dsa/kit/helpers/anim` & `motion`**: Deterministic spring and interpolation motion curves.
- **`roadmapData.ts`**: Shared 227-question roadmap data structure.

### EXTEND (Adapt Existing Patterns with Problem-Specific Props)
- **`ArraySystem` / Array Bar Component**:
  - Extend array element styling with 3 distinct semantic colors:
    - `0`: Coral / Red (`#FF6B6B`)
    - `1`: Chalk White (`#E8ECEF` / `#F1F5F9`)
    - `2`: Sky Blue / Cyan (`#4DABF7`)
    - Unknown region background: Dotted sketch overlay or subtle dark slate tint (`#1E293B`)
- **Pointer Marker System**:
  - Support 3 concurrent pointers simultaneously: `low`, `mid`, `high` with stacked vertical clearance when pointing to the same index (e.g. `low` and `mid` both at index 0).
- **Code Editor Component**:
  - Extend with Python syntax for both Counting 2-pass and Dutch National Flag 3-pointer loops.

### CREATE (Question-Specific Visuals)
- **`FourRegionsBar`**:
  - Horizontal invariant strip above the array illustrating the 4 dynamic regions:
    - `[0 .. low-1]` -> Confirmed 0s
    - `[low .. mid-1]` -> Confirmed 1s
    - `[mid .. high]` -> Unknown
    - `[high+1 .. n-1]` -> Confirmed 2s
- **`SwapArc` / Particle Flight**:
  - Bezier arc animation illustrating in-place swaps between `mid` and `low` or `mid` and `high`.

### DO NOT TOUCH
- Core `@dsa/kit` foundation styles.
- Completed questions `001` through `010`.
- Global Remotion configuration outside of registering `SortColorsFolder` in `remotion-project/src/Root.tsx`.

---

## 3. Visual Grammar & Semantic Palette
- **Canvas**: Deep Chalkboard (`#0D1117` / `#0F172A`)
- **Semantic 0**: Coral Red (`#FF6B6B`)
- **Semantic 1**: Pure Chalk White (`#F8FAFC`)
- **Semantic 2**: Vibrant Cyan / Sky Blue (`#38BDF8`)
- **Unknown Zone**: Charcoal Border / Muted Slate (`#334155`)
- **Pointers**:
  - `low`: Coral Accent Pointer
  - `mid`: Amber / Golden Yellow Scanner Pointer (`#FBBF24`)
  - `high`: Cyan Accent Pointer
