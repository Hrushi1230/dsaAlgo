# REUSE / EXTEND / CREATE Delta — Q18: First Missing Positive (LeetCode 41)

## Summary Table

| Classification | Component / Utility | Source / Location | Purpose in Q18 |
|:---|:---|:---|:---|
| **REUSE** | `ArrayTrackV2` | `@dsa/kit/components/array/ArrayTrackV2` | Central 6-slot array track showing values, slot states, pointers, and swap animations |
| **REUSE** | `HashSetTable` | `@dsa/kit/components/HashSetTable` | Scene 03 Better Approach: $O(N)$ auxiliary space visual |
| **REUSE** | `SceneTitleCard` | `@dsa/kit/components/SceneTitleCard` | Title sequences across all scenes |
| **REUSE** | `SceneEdgeTitle` | `@dsa/kit/components/SceneEdgeTitle` | Pinned top-left scene edge header |
| **REUSE** | `QuestionCard` | `@dsa/kit/components/QuestionCard` | Scene 02 Problem statement, constraints, example card |
| **REUSE** | `Captions` | `@dsa/kit/components/Captions` | Scene subtitle renderer ($Y = 980$) |
| **REUSE** | `ChalkCodeEditorV2` | `@dsa/kit/components/ChalkCodeEditorV2` | Scene 08 Code walkthrough with active line highlighting |
| **REUSE** | `MasterRoadmapV2` | `@dsa/kit/components/MasterRoadmapV2` | Scene 01 Intro & Scene 10 Capstone celebration |
| **REUSE** | `ChalkDust` & `ChalkText` | `@dsa/kit/components` | Chalkboard aesthetic and handwriting typography |
| **REUSE** | `RoughBox` & `RoughLine` | `@dsa/kit/components` | Hand-drawn bounding cards, callouts, and indicators |
| **REUSE** | `anim` & `motion` | `@dsa/kit/helpers` | Deterministic frame animations, springs, easings |
| **REUSE** | `theme` & `fonts` | `@dsa/kit/lib/theme` | Chalkboard palette tokens and typography |
| **EXTEND** | `ArrayTrackV2` | Props customization | Multi-stage slot highlighting (`"comparing"`, `"active"`, `"sorted"`, `"mismatch"`) |
| **CREATE** | `TargetMappingArrowOverlay` | Question-local component | Chalk flight arc from index $i$ to target index $\text{nums}[i] - 1$ |
| **CREATE** | `PigeonholePrincipleCard` | Question-local component | Mathematical proof card showing why answer is bounded in $[1, N + 1]$ |
| **CREATE** | `InfiniteLoopTrapCard` | Question-local component | Visual explanation of the duplicate termination condition |
| **DO NOT TOUCH** | `@dsa/kit` core internals | All kit files | Keep shared kit components unchanged |
| **DO NOT TOUCH** | Previous question folders | `001` through `017` | Preserved untouched |
