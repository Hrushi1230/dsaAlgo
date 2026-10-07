# Code With Animation — Design Bible V2
## Canonical Visual Design System for Long-Form DSA Course

**Project:** Code With Animation — Long-form DSA  
**Phase:** Foundation V2 — Phase 2  
**Status:** Authoritative Design Contract  

---

# 1. Core Visual World & Philosophy

Every long-form DSA video lives inside the same premium chalkboard aesthetic:

```text
Deep Oxford Chalkboard Green background (#19523C)
Organic, hand-drawn vector chalk lines (Rough.js + SVG chalk displacement filters)
Patrick Hand typography for teaching voice
Clean monospace for technical definitions, code, and array numbers
Semantic color palette tied to algorithmic meaning
Deterministic, frame-derived motion (pure function of useCurrentFrame())
Premium analogue classroom atmosphere — senior didi at the green-board
```

### The Unbreakable Identity Rule
Different data structures have different visual geometries (e.g., Arrays run in slots, Graphs run in topologies, HashSets run in fields), but **they all share the exact same course identity**:
- same chalkboard texture and background
- same typography hierarchy
- same semantic color meanings
- same stroke personality
- same caption treatment
- same title and metadata system

---

# 2. Color System & Semantic Tokens

All scenes must source colors strictly from `@dsa/kit/lib/theme`:

| Token | Hex / Value | Semantic Meaning & Usage |
| :--- | :--- | :--- |
| `theme.boardBg` | `#19523C` | Oxford Chalkboard Green base surface |
| `theme.chalkText` | `#F8F6F0` | Warm Antique Alabaster — primary teaching text, active values, card borders |
| `theme.chalkDim` | `rgba(248, 246, 240, 0.45)` | Faded secondary chalk — indices, inactive labels, borders |
| `theme.chalkLine` | `#E8E4D5` | Crisp chalk separator lines, structural boundaries |
| `theme.cardBg` | `rgba(248, 246, 240, 0.08)` | Translucent chalk-slate wash for cards and slots |
| `theme.cardBorder` | `rgba(232, 228, 213, 0.7)` | Standard chalk card border |
| `theme.pivot` | `#FFD166` | Sunburst Gold — primary pointer (i, mid), compare focus, active caption word |
| `theme.good` | `#3CE5A7` | Seafoam Mint — solved states, match found, optimal curve, successful check |
| `theme.warn` | `#FF7675` | Coral Terracotta — mismatch, bug, failure, brute force curve, collision |
| `theme.cyan` | `#5CE1E6` | Ice Cyan — secondary pointers (j, right, aux), HashSet scan/queries |
| `theme.purple` | `#D8B4E2` | Powdery Lilac — HashSets, HashMaps, auxiliary memory structures |
| `theme.better` | `#FFA94D` | Amber Sunset — medium difficulty badge, better approach curve |
| `theme.highlight` | `#FFF3B0` | Butter Glow — spotlight radial glow, high-intensity focus |

**Ad-hoc hex colors are forbidden.** Never invent random blues, reds, or purples.

---

# 3. Typography Hierarchy

Fonts are imported via `@dsa/kit/lib/theme` (`Patrick Hand` and `Caveat` loaded locally in `index.css`):

```text
Display / Brush Title Voice: Caveat Bold (fonts.display)
- Problem Titles: 74px–76px bold, subtle -0.8° tilt, with CHALK_FILTER_ID
- Major Milestone Headings: 48px–56px bold

Teaching Voice: Patrick Hand (fonts.hand)
- Normal Scene Titles: 48px–56px bold
- Subtitles: 28px–34px
- Instruction / Callout Banners: 30px–36px
- Pointer annotations: 24px–28px

Technical / Algorithm Numbers: Monospace (fonts.mono)
- Array Values: 48px–56px bold
- Slot Indices: 20px–24px bold (theme.chalkDim)
- Metadata / LeetCode Badges: 16px–20px bold
- Table Column Headers: 20px–24px bold

Code: Monospace (fonts.code)
- Clean monospace for Python/TypeScript syntax
```

---

# 4. Canvas Optical Layout Contract (1920 × 1080)

Every scene composition adheres to strict vertical safe zones to eliminate top squish and empty bottom voids:

```text
Y: 28px – 70px     Top Pill / Metadata Zone (Pattern tag, LeetCode #, Difficulty)
Y: 90px – 210px    Hero Title & In-scene Beat Header (Problem title, EdgeTitle)
Y: 210px – 280px   Task / State Framing Banner (One-line goal, instruction pill)
Y: 300px – 780px   MAIN HERO STAGE (Center Stage: Array, Matrix, Tree, Graph, Table)
Y: 790px – 940px   Callout / Feedback / State Evolution Zone
Y: 960px – 1040px  Captions Safe Zone (karaoke Captions at bottom: 40–56px)
Bottom-Right       ChannelLogoBadge (size: 110px, bottom: 36px, right: 44px)
```

---

# 5. Component Architectural Roles (Foundation V2)

### 5.1 Course Shell
* **`ProblemOpenerShell`**: Shared problem header, pattern framing, LeetCode metadata, and task definition. Injects structure-specific hero components into the optical center.

### 5.2 Problem Opener Family
* **`ArrayProblemOpener`**: The array itself is the hero. Replaces generic problem dashboards for Array questions (e.g. Sort Colors, Two Sum).
* Future openers: `MatrixProblemOpener`, `HashProblemOpener`, `LinkedListProblemOpener`, `TreeProblemOpener`, `GraphProblemOpener`, `DPProblemOpener` (implemented in their respective roadmap phases).

### 5.3 Scene Transition Family
* **`SceneLabelStrip`**: Lightweight pill/strip (`BRUTE FORCE`, `OPTIMAL TRACE`, `COMPLEXITY`) keeping the algorithm object on screen.
* **`SceneEdgeTitle`**: In-scene top edge title header allowing continuous view of the data structure.
* **`DataMorphTransition`**: Semantic object morphing between algorithm phases (reusing `SvgMorph`, `BezierFlight`).
* **`SceneTitleCard`**: Full-screen blackboard bumper. **Role restricted to major transitions only** (entering a completely new approach, entering code after trace, final recap, roadmap milestone).

### 5.4 Legacy / Fallback Components
* **`QuestionCard`**: Retained strictly as legacy/fallback for old scenes (001–004). Never use as default for new questions.

---

# 6. Remotion Animation & Determinism Rules

1. **Deterministic frames only**: Everything must be a pure function of `useCurrentFrame()`.
2. **Forbidden**:
   - `Math.random()` for visual state (use fixed seeds for Rough.js)
   - `Date.now()` or wall-clock timers
   - CSS `transition`
   - CSS `animation` or `@keyframes`
3. **Motion Causality**: Motion must teach algorithm state or direct focus. Spoken cause always precedes movement.
4. **Separation of Concerns**: Separate state change from pointer movement. Never animate pointers, counters, color shifts, and text simultaneously in the same frames.
