# Codebase Audit — Q12: Next Permutation (LeetCode 31)

## 1. Context & Scope
- **Course**: Code With Animation — Long-Form DSA Course
- **Pattern**: 01 — Arrays & Hashing
- **Question**: 012 — Next Permutation (LC 31, Medium)
- **Master Testcase**: `[2, 1, 5, 4, 4, 3, 0]`
- **Visual Subject**: In-place array transformation via rightmost ascent pivot scan (`i = 1`, val `1`), successor scan (`j = 5`, val `3`), pivot-successor swap (`1 <-> 3`), and suffix two-pointer reversal (`left = 2`, `right = 6` inward to `[2, 3, 0, 1, 4, 4, 5]`).

---

## 2. Codebase Audit Classification

### REUSE (Use Directly Without Modification)
- **`@dsa/kit/components/array/ArrayTrackV2`**: Core 7-slot array track layout, element rendering, active index highlights, and slot states.
- **`@dsa/kit/components/array/ArraySlotV2` & `ArrayIndexRowV2`**: Slot framing and index labels (`idx [0] .. idx [6]`).
- **`@dsa/kit/components/array/PointerLaneV2`**: Multi-lane collision-free pointer system supporting `i`, `j`, `left`, `right`, and `pivot` markers with vertical clearance staggering.
- **`@dsa/kit/components/array/PartitionBandV2`**: Boundary bracket highlighting the non-increasing suffix zone (`idx [2 .. 6]`).
- **`@dsa/kit/components/BezierFlight` & `ParametricArrow`**: Smooth curved arcs for illustrating slot swaps (pivot $\leftrightarrow$ successor, suffix reverse swaps).
- **`@dsa/kit/components/SceneTitleCard` & `SceneEdgeTitle`**: Standard scene titles and question badges across all 10 scenes.
- **`@dsa/kit/components/QuestionCard`**: Problem statement, example breakdown, and constraints presentation in Scene 02.
- **`@dsa/kit/components/Captions`**: Deterministic frame-synced subtitle renderer at $Y = 980$.
- **`@dsa/kit/components/ChalkDust` & `ChalkText`**: Authentic chalkboard dust particle field and clean typography.
- **`@dsa/kit/components/RoughBox` & `RoughLine`**: Hand-drawn sketchy accent boundaries and separators.
- **`@dsa/kit/components/ChalkCodeEditorV2`**: Syntax-highlighted code editor for Brute Force (Scene 04) and Optimal Python solution (Scene 08).
- **`@dsa/kit/components/MasterRoadmapV2`**: Shared 227-question roadmap tracker for Scene 01 (activation) and Scene 10 (completion & handoff to Q13).
- **`@dsa/kit/helpers/audioSync`**: Word-level timing anchor parser (`parseAudioSync`).
- **`@dsa/kit/helpers/anim` & `motion`**: Deterministic frame-derived springs, smoothstep easings, and interpolation curves.
- **`roadmapData.ts`**: Master roadmap data source.

### EXTEND (Adapt Existing Patterns with Problem-Specific Props)
- **`ChalkCodeEditorV2`**:
  - Add line-highlighting configurations for the 3 distinct phases of Next Permutation:
    1. Pivot scan (`while i >= 0 and nums[i] >= nums[i+1]: i -= 1`)
    2. Successor scan & swap (`while nums[j] <= nums[i]: j -= 1`, `nums[i], nums[j] = nums[j], nums[i]`)
    3. Suffix reversal (`while left < right: nums[left], nums[right] = ...`)
- **`CountUp` / Complexity Card**:
  - Extend with comparative display contrasting $O(N! \cdot N)$ factorial scale vs $O(N)$ linear single-pass scale.

### CREATE (Question-Specific Visuals)
- **`PermutationLexicographicalLadder`** (Scene 03 / Scene 05):
  - Vertical ladder or wheel displaying sorted permutations of `[1, 2, 3]` (`123`, `132`, `213`, `231`, `312`, `321`), showing the jump from `132` to `213` and the wrap-around from `321` to `123`.
- **`SuffixSlopeProfile`** (Scene 06 / Scene 07):
  - A subtle ascending/descending profile line or step-height visual illustrating why a non-increasing suffix (`5, 4, 4, 3, 0`) is already maximal, and why reversing it makes it minimal (`0, 1, 4, 4, 5`).

### DO NOT TOUCH
- Core `@dsa/kit` foundation styling and design tokens.
- Existing questions `001` through `011`.
- Global Remotion configuration outside of registering `NextPermutationFolder` in `remotion-project/src/Root.tsx`.

---

## 3. Visual Grammar & Semantic Palette
- **Canvas**: Deep Chalkboard (`#0D1117` / `#0F172A`)
- **Array Slots**: Slate Chalk Box (`#1E293B`, border `#334155`)
- **Pivot Element (`nums[i]`)**: Vibrant Amber / Gold (`#F59E0B` / `#FBBF24`)
- **Successor Element (`nums[j]`)**: Emerald Green (`#10B981` / `#34D399`)
- **Non-Increasing Suffix Zone**: Violet / Purple Tint or bracket (`#8B5CF6`)
- **Reversed Minimized Suffix**: Clean Cyan / Sky Blue (`#38BDF8`)
- **Pointers**:
  - `i` (Pivot scanner): Amber Pointer (`theme.pivot` / `#FBBF24`)
  - `j` (Successor scanner): Emerald Pointer (`theme.good` / `#10B981`)
  - `left` & `right` (Reverse pair): Cyan & Sky Blue Pointers (`theme.cyan`)

---

## 4. Verification & Spatial Clearance Invariants
- **Array Track Top Clearance**: When partition brackets are rendered above `ArrayTrackV2` (at `top: -34px`), any section header must maintain `marginBottom >= 44px`.
- **Array Track Bottom Clearance**: Pointer labels and arrows extend below the index row; callout containers placed below the track must begin with at least `60px` clearance.
- **Center-Stage Vertical Distribution**: Hero array and pointer choreography occupies the center vertical zone ($Y: 160$ to $Y: 760$), leaving $220\text{px}$ breathing room above bottom captions ($Y: 980$).
