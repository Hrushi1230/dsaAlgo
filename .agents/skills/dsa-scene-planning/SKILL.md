---
name: dsa-scene-planning
description: Creates semantic word-driven scene plans and exact audio-synchronized frame-wise choreography for long-form Code With Animation DSA videos. Must be read before every word-based visual plan and every final *-plan.md.
---

# DSA Scene Planning V3.2

> Long-form Code With Animation DSA only.
>
> This skill controls both:
> 1. the **pre-audio semantic word plan** (`WHAT / WHY / ORDER / HIDDEN / PERSISTENCE / KIT`), and
> 2. the **post-audio exact frame plan** (`WHEN / WORD ID / FRAME RANGE`).
>
> Never collapse these two jobs into one guessed-timing plan.

---

# 0. Permanent planning pipeline

```text
VERIFIED TRACE
→ VERIFIED SCRIPT
→ CODEBASE / KIT AUDIT
→ WORD-BASED SEMANTIC VISUAL PLAN
→ FINAL MP3
→ VALIDATED EXACT WORD-SYNC JSON
→ STABLE Wxxxx WORD IDENTITIES
→ SEMANTIC ANCHOR RESOLUTION
→ EXACT FRAME PLAN
→ FRAME PLAN AUDIT
→ IMPLEMENTATION HANDOFF
```

Core ownership:

```text
SEMANTIC PLAN owns:
WHAT appears
WHY it appears
ORDER
CENTER-STAGE HERO
CAUSE → EFFECT
WHAT stays hidden
CLEANUP
PERSISTENT STATE
KIT / COMPONENT INTENT

AUDIO + SYNC own:
WHEN
EXACT WORD ID
EXACT WORD EDGE
EXACT FRAME
REAL PAUSE
SCENE DURATION
```

Audio timing may resolve choreography.
Audio timing does **not** authorize redesigning approved teaching logic.

---

# 1. Source-of-truth priority

Use sources in this order:

```text
1. verified algorithm trace
2. verified final narration script
3. current approved semantic word plan
4. final MP3
5. validated exact sync JSON
6. semantic anchor manifest
7. current @dsa/kit source and actual APIs
8. Design Bible
9. Motion Bible
10. Morphing Bible
11. SVG Animation Bible
12. relevant data-structure visual grammar
13. previous approved scenes only as implementation references
```

Repository truth beats remembered filenames, old plans, and chat history.

If two sources conflict:
- algorithm state → verified trace wins;
- spoken wording → final approved narration wins;
- timing → final MP3 + exact sync win;
- visual component/API → actual repository source wins.

Never silently reconcile a conflict by guessing.

---

# 2. Two separate input gates

## Gate A — semantic word-plan gate

A **word-based semantic visual plan** may be created only when these exist:

- verified trace
- verified final script
- scene purpose / teaching architecture
- relevant codebase audit
- current Design / Motion / Morph / SVG rules
- relevant data-structure visual grammar
- verified current kit/component APIs

At this stage:

```text
NO guessed seconds
NO guessed frames
NO fake duration
NO generic "hold for 20 frames"
```

The word plan uses exact approved narration phrases as semantic anchors.

## Gate B — exact frame-plan gate

A **final timed frame plan** may be created only when these also exist:

- final MP3 for that scene
- validated exact word-sync JSON
- exact FPS from sync
- exact duration from sync
- stable word IDs / ordered word indices
- semantic anchor manifest resolved against sync

If MP3 exists but exact sync does not:

```text
BLOCKED — EXACT WORD SYNC REQUIRED
```

Never estimate from WPM, script length, scene length, or visual convenience.

---

# 3. Pedagogical scene discipline

## 3.1 No premature spoilers & Progressive Word-Gated Reveals

Do not show before narration creates it:

- final answer
- final winning state
- optimal invariant
- optimal data structure
- winning complexity
- future code line (must gate with `maxVisibleLine`)
- future map entry / set key
- future pointer position
- future mutation
- future edge-case conclusion
- unread input elements (must start as empty slot shells and populate one-by-one as spoken)

The learner should discover the idea in the same order as the teacher speaks it.

---

## 3.1A Strict Board-Native Chalkboard Standard (Zero-Card Law)

- **Canvas Standard**: 100% Oxford Chalkboard Green (`theme.boardBg` / `#19523C`) with `ChalkboardBackground` and `ChalkFilters`.
- **Zero Dark Cards**: Absolutely NO `backgroundColor: "rgba(10, 35, 25, ...)"`, dark rounded rectangles, or UI dashboard containers.
- **Direct Chalk Placement**: All variables, formulas, code, and reasoning points must be written directly on the green chalkboard using `fonts.hand` (`Patrick Hand`) or `fonts.mono`.
- **Chalk Dividers & Underlines**: Structure multi-column layouts using thin vertical chalk rules (`rgba(232, 228, 213, 0.35)` or `theme.chalkLine`) and `RoughLine` chalk underlines, never boxed cards.
- **Progressive Dividers**: Dividers separating sections/columns must remain hidden (`opacity: 0`) until the corresponding section is spoken.

---

## 3.1B Bright Highlight Law (Strict No-Fading / No-Dimming Rule)

- **Zero Dimmed Fades**: Never use `slotState = "dimmed"` or low opacity (`opacity: 0.3` / `0.45`) to push existing elements into dark obscurity.
- **Vibrant Saturated Chalk Tokens**: When spoken narration queries, checks, or focuses on an existing element, highlight it with bright chalk colors:
  - `theme.pivot` (#FFD166, warm gold): Active pointer, current candidate, active line.
  - `theme.good` (#3CE5A7, emerald green): Confirmed match, in-home slot, optimal badge.
  - `theme.warn` (#FF6B6B, coral red): Negative/zero values, out-of-range, duplicate clash.
  - `theme.cyan` (#5CE1E6, cyan): Target swap index, valid filter rule.
- **Default Legibility**: Unreferenced elements remain visible in standard crisp chalk; active items are actively highlighted.

---

## 3.1C Production Video Rendering & Scaling (Zero-Void Law)

- All scenes are authored in a **1920 × 1080** pixel coordinate space.
- **NEVER** use `--width` or `--height` CLI flags to upscale renders (e.g. `--width=2560 --height=1440` is strictly FORBIDDEN as it leaves empty letterbox voids).
- **ALWAYS** use the `--scale` CLI flag for high-resolution video exports:
  - **2K (2560 × 1440 / 1440p QHD)**: `--scale=1.3333333333333333`
  - **4K (3840 × 2160 / 2160p UHD)**: `--scale=2`
  - **1080p (1920 × 1080 / Full HD)**: default (`--scale=1` or omit)

## 3.2 Trace vs non-trace permanent rule

### TRACE scene

A trace is exhaustive.

```text
TRACE
= complete algorithm execution
= no skipped operation
= no skipped lookup
= no skipped comparison
= no skipped mutation
= no skipped pointer/index update
= no skipped accumulator update
```

Trace scenes are allowed to be long.

Correctness and one-by-one state progression are more important than brevity.

### NON-TRACE scene

Non-trace scenes teach only the important point required by their beat type.

```text
IDEA
→ insight / invariant only
→ do not re-run algorithm

CODE
→ key implementation logic
→ do not repeat full visual trace

COMPLEXITY
→ derive total work
→ do not re-explain whole algorithm

MISTAKES / EDGE CASES
→ concise checklist / proof points only

RECAP
→ minimal transferable takeaway
→ no second lesson
```

Never turn an IDEA scene into another TRACE.

## 3.3 Center-stage first

One concept owns center stage.

Do not create dashboard-like multi-card compositions just to fill the canvas.

Preferred teaching hierarchy:

```text
CENTER
→ primary teaching object

LEFT
→ source / previous state only when needed

RIGHT
→ lookup / support / consequence only when needed

BOTTOM
→ captions
```

Left and right support the center.
They do not compete equally with it.

## 3.4 One primary idea per beat

Default causal order:

```text
CAUSE / OBSERVATION
→ STATE REACTION
→ COMPREHENSION HOLD (only when justified)
→ MOVE / MUTATION
→ SETTLE
```

At one teaching instant:

```text
1 PRIMARY semantic motion
+
at most 1 SUPPORTING reaction
```

Do not animate pointer, counter, text, color, graph, camera, and structure at once unless they are one inseparable semantic event.

---

# 4. Optical layout contract

Author in the canonical 1920×1080 coordinate space.

Current accepted zones:

```text
Y 28–70      top metadata / badge
Y 90–210     hero title / in-scene header
Y 210–280    task / state framing
Y 300–780    MAIN HERO STAGE
Y 790–940    callout / state evolution
Y 960–1040   captions safe zone
```

Do not cram all content into the top third.

Do not leave a giant empty lower board while the teaching object is tiny.

For a standard 6-card array, existing approximate values may be reused only if they fit the real structure:

```text
card ≈ 120×130
gap  ≈ 24
```

Never force all structures to use one size.

---

# 5. Mandatory collision contract

Every important beat must define layout ownership and clearance.

Record where relevant:

```text
PRIMARY HERO BOUNDS:
SUPPORT LEFT BOUNDS:
SUPPORT RIGHT BOUNDS:
TITLE CLEARANCE:
ARRAY / STRUCTURE CLEARANCE:
POINTER CLEARANCE:
GRAPH / LABEL CLEARANCE:
CAPTION CLEARANCE:
```

Hard rules:

- no caption collision
- no pointer / card collision
- no array-index collision
- no partition-band collision
- no graph / label collision
- no support visual covering the primary object
- no title overlapping semantic content
- no element outside the 1920×1080 safe composition

Array-specific inherited laws:

```text
top partition bracket present
→ title / header clearance must preserve bracket space

below ArrayTrackV2
→ preserve enough space for indices and pointer lanes

card / callout width
→ harmonize with the array track rather than cutting through it
```

A plan that does not define a collision-safe layout is not implementation-ready.

---

# 5A. Permanent BOARD-NATIVE Scene Layout Law — ALL NON-ROADMAP SCENES

This is a permanent course rule.

It applies to every scene type except the dedicated ROADMAP scene:

INTRO / HOOK
UNDERSTAND
IDEA / DERIVATION
TRACE
CODE
COMPLEXITY
MISTAKES
EDGE CASES
RECAP

ROADMAP is the only exception because `MasterRoadmapV2` owns its existing course-interface presentation.

## 5A.1 The board is the canvas

For every non-roadmap scene, the green chalkboard is the primary surface. Algorithm objects, formulas, variables, relations, auxiliary structures, graphs, and code are placed directly on the board.

Do not place the lesson inside an application-like panel.

## 5A.2 Absolute no-dark-card rule (Strict Zero-Card Law)

For all non-roadmap scenes, reject:
- dark cards (`rgba(10, 35, 25, ...)` is strictly forbidden)
- black or near-black card containers
- card borders, rounded box wrappers, or UI dashboard cards
- terminal-like state boxes
- dark debug consoles or dark dashboard widgets
- IDE/window chrome as the primary code surface
- opaque dark HashMap/Stack/Queue container boxes
- multiple dark mini-cards for variables
- black comparison or complexity cards
- dark recap cards

A scene is rejected if any content is placed inside a dark card container, even if the text inside is technically correct. All content must sit directly on the green chalkboard (`#19523C`).

## 5A.3 Canonical board-native layout language

Reference standards: `REF_MOBILE_STYLE_CODE_FRAME.png` and `REF_MOBILE_STYLE_TRACE_FRAME.png`.

Approved visual language:
- **Direct Chalkboard Canvas**: All text, equations, and diagrams sit directly on the Oxford Chalkboard Green (`#19523C`) canvas.
- **Thin Vertical / Horizontal Chalk Lines**: Divide semantic columns using thin chalk lines (`width: 2.5px`, `backgroundColor: "rgba(232, 228, 213, 0.35)"` or `theme.chalkLine`).
- **RoughLine Underlines**: All section headers are written in yellow/cyan chalk with hand-drawn `RoughLine` underlines.
- **Circled Step Badges**: Point-wise deductions use circled numbers `①`, `②`, `③` in theme chalk colors (cyan, gold, good-green) directly on the board.
- **Trace Layout**: Array track centered top, bottom split: `ChalkVariablesPanel` (left) | vertical divider | `ChalkReasoningPanel` (right).
- **Code Layout**: Left `ChalkBoardNativeCode` with syntax colors, active line highlight, and line numbers | vertical divider | right `ChalkReasoningPanel`.

## 5A.3.1 Zero-spoilers & progressive word-gated reveal law

- Spoilers are strictly forbidden. Never reveal entire lists, future candidates, future reasoning steps, or tradeoff matrices ahead of narration.
- Every bullet, step badge, candidate check, code annotation, and takeaway must be gated by `frame >= spoken_anchor_start_frame` from Whisper JSON sync data.
- Absolutely NO CSS transitions or animations (`transition: all ...` is banned under Remotion determinism).

## 5A.3.2 Multi-frame audit protocol

- Never audit a scene with only a single still frame. A single still conceals early reveal spoilers, future caption collisions, and missing transitions.
- Every scene must be rendered and audited at **3 to 4 distinct key timestamps** (Initial, Mid-Progress, Peak Action, Final State) to verify zero spoilers, zero dark cards, and zero caption collisions over time.
- All rendered audit stills must be saved directly into `<question-folder>/output/stills/`.

## 5A.4 No dashboard composition

Do not divide a scene into visible UI cards such as ARRAY CARD, VARIABLE CARD, CALCULATION CARD, ANSWER CARD, MAP CARD, or COMPLEXITY CARD.

Instead, assign stable spatial teaching zones on the board. The zones are invisible layout responsibilities, not visible rectangles.

## 5A.5 Scene-type board grammar

INTRO / HOOK:
- problem title
- one meaningful hero structure/example
- direct chalk problem statement or target
- no feature-card or black prompt panel

UNDERSTAND:
- large primary input structure
- direct highlighting
- one example/calculation at a time
- no boxed explanation panel

IDEA / DERIVATION:
- one equation/invariant as center hero
- source left only if needed
- consequence/support right only if needed
- direct RoughLine/RoughCurve relations
- no idea/formula card

TRACE:
- use the dedicated Trace Stage Grammar below
- no debug panel or status-console layout

CODE:
- code remains board-native
- large readable code lines directly on chalkboard
- future lines hidden
- active line uses chalk outline/underline/semantic color
- no dark IDE/editor window
- if `ChalkCodeEditorV2` requires a dark editor surface, DO NOT USE IT UNCHANGED
- EXTEND it with a backward-compatible transparent/board-native mode, or CREATE a reusable board-native code primitive if extension is inappropriate

COMPLEXITY:
- draw work derivation, axes, RoughCurve, Big-O labels, comparison directly on board
- no graph card or black chart panel

MISTAKES / EDGE CASES:
- one mistake/edge case at a time
- direct chalk statement plus only the relevant example
- no card grid

RECAP:
- one central transformation
- minimal formulas/steps
- no summary-card grid

ROADMAP:
- exempt from this no-card law
- use verified `MasterRoadmapV2`

## 5A.6 Kit consequence

If a kit component has correct semantics but its default presentation violates the board-native law, `REUSE UNCHANGED` is forbidden.

Prefer:
- EXTEND with a board-native/transparent mode when semantics are correct
- CREATE SHARED only when no suitable semantic primitive exists

Never use a dark component merely because it already exists.

## 5A.7 Blocking failures

Any of these blocks the 100/100 audit for a non-roadmap scene:

BLACK CARD
DARK TEACHING PANEL
DEBUG CONSOLE
DASHBOARD COMPOSITION
DARK IDE WINDOW
DARK HASHMAP / STACK / QUEUE PANEL
CARD GRID
MAIN HERO TOO SMALL
CENTER STAGE UNUSED
IMPORTANT CONTENT ONLY INSIDE A PANEL
BOARD USED ONLY AS BACKGROUND DECORATION

These are scene-architecture failures, not polish issues.

---

# 5B. Permanent TRACE STAGE Layout Grammar

This section is mandatory for every **TRACE** scene.

A trace frame is a teaching canvas, not a debug HUD.

The learner must be able to identify, at normal video size:

1. the primary data structure,
2. the current element/node/index,
3. the live algorithm variables,
4. the current calculation/decision,
5. the auxiliary data structure when one exists,
6. the answer/count/result state.

## 5B.1 Hard anti-patterns

Never produce a trace composition where:

- the primary array/tree/graph/matrix is pushed into the top header area;
- the actual trace is compressed into one small dark/black "debug panel";
- variables, calculations, answer, and history are all packed into tiny rows;
- semantic numbers are readable only after zooming;
- the bottom half of the 1080p board is empty while the teaching content is tiny;
- all state is represented as mini pills/chips merely because they fit;
- the auxiliary structure is treated like a tiny status widget;
- the layout reflows every trace step;
- a dark rectangular dashboard becomes the visual hero instead of the algorithm structure.

A code editor may own a dark editor surface in a **CODE** scene.

A TRACE scene should default to the board-native chalk visual system, with local rough boxes/lines only where they clarify semantics.

## 5B.2 Canonical 1920×1080 trace stage

Use these as the default optical allocations, then adapt to the actual structure without violating readability.

```text
HEADER / SCENE LABEL
x 60–1860
y 28–120

PRIMARY STRUCTURE STAGE
x 90–1320
y 180–520

AUXILIARY STRUCTURE STAGE
x 1370–1830
y 200–820

VARIABLE STATE RAIL
x 100–700
y 560–760

LIVE CALCULATION / DECISION STAGE
x 740–1320
y 560–820

ANSWER / RESULT LANE
x 740–1320
y 825–930

CAPTIONS SAFE ZONE
y 960–1040
```

These are **teaching zones**, not mandatory visible rectangles.

Do not draw boxes around all zones.

The zones define stable spatial responsibility.

### If no auxiliary structure exists

The primary structure may expand horizontally:

```text
PRIMARY STRUCTURE
x 100–1820
y 180–520
```

and the lower teaching row may use:

```text
VARIABLE STATE
x 140–760

CALCULATION / DECISION
x 800–1500

ANSWER / RESULT
x 1500–1810
```

Only use this wider mode when it improves readability.

## 5B.3 Visual hierarchy

In a TRACE scene:

```text
PRIMARY DATA STRUCTURE
= largest stable object

CURRENT OPERATION
= strongest temporary focus

VARIABLE STATE
= persistent readable support

LIVE CALCULATION
= one large current equation / decision

AUXILIARY STRUCTURE
= full teaching object, not a tiny widget

ANSWER / COUNT
= stable accumulator, updated only after cause
```

Do not give six objects equal visual weight.

## 5B.4 Minimum optical readability targets

These are optical targets for 1920×1080 authoring, not permission to fight the kit's adaptive sizing.

For ordinary trace density:

```text
primary structure values        ≈ 44–64 px
live equation / calculation     ≈ 42–64 px
state-variable current values   ≈ 38–56 px
auxiliary key/value text        ≈ 34–52 px
pointer / active-index labels   ≈ 22–30 px
secondary metadata              ≈ 18–24 px
```

If the layout only works by shrinking important semantic text below these ranges, redesign the composition.

Do not solve density by making everything tiny.

## 5B.5 Primary structure placement

The primary structure must live in the **main hero stage**, not in the scene header.

### Array trace

Default:

- array centered inside the primary structure stage;
- indices remain attached to fixed slots;
- pointer lanes remain directly associated with the array;
- partition/range bands stay geometrically tied to array slots;
- enough vertical clearance exists below/above the array for pointers and brackets;
- current element focus is obvious from normal viewing distance.

For arrays up to roughly 8–10 values, prefer a large single row rather than a tiny row floating near the title.

Permanent array law remains:

```text
SLOTS STAY FIXED
VALUES / SEMANTIC STATE CHANGE
INDICES NEVER MOVE
```

### Matrix trace

The matrix owns the primary structure stage.

Current row/column/cell state is attached directly to the matrix.

Do not move matrix coordinates into a separate tiny console.

### Linked-list trace

The linked list occupies the primary horizontal stage.

Pointers stay spatially attached to nodes/edges.

Variable state is below, not mixed into node labels.

### Tree / graph trace

The graph/tree occupies the largest central-left region.

Queue/stack/visited structures, when required, move to the auxiliary stage.

Do not shrink the graph/tree to make room for a dashboard.

## 5B.6 Variable State Rail — one permanent place

Algorithm variables must have a stable home for the entire trace scene.

Examples:

```text
start
end
runningSum
prefix
needed
left
right
mid
current
candidate
answer
```

Rules:

- reserve each variable's position internally from scene start;
- do not visually reveal a variable before narration creates it;
- once introduced, keep that variable in the same place unless a representation handoff is explicitly planned;
- update its value in place;
- use semantic focus/color instead of moving the whole variable card;
- show only variables that matter to the learner at that phase;
- do not duplicate the same variable in three different locations.

Preferred visual language:

```text
label
↓
large current value
```

or a clean horizontal state row.

Avoid terminal/debug syntax such as:

```text
OUTER: start = 6 | INNER: end = 6 | nums[6] = 3
```

unless the narration is literally teaching that code-level representation.

## 5B.7 Live Calculation / Decision Stage — one permanent place

Every trace should have one stable place where the **current arithmetic or decision** is explained.

Examples:

```text
runningSum = 0 + 3 = 3

needed = prefix - k
       = 4 - 3
       = 1

3 == k
YES

leftValue + rightValue
2 + 5 = 7
```

Rules:

- show the current calculation large;
- build it only when narration reaches the operands;
- preserve already-established operands until the result resolves;
- do not show multiple unrelated calculations simultaneously;
- clear or transform the old calculation before the next one;
- never compress the main arithmetic into 14–18px console text.

The calculation stage is a teaching scratchpad, not a status panel.

## 5B.8 Auxiliary Data Structure Stage — fixed right-side teaching object

If the algorithm uses a secondary structure, it receives a stable dedicated stage.

Examples:

```text
HashMap / frequency map
HashSet
Stack
Queue
Heap support state
Visited set
Adjacency support view
```

Default placement:

```text
x 1370–1830
y 200–820
```

Use enough width/height that the learner can read the structure without zoom.

### HashMap / frequency map

Primary grammar:

```text
key → value
```

For prefix-frequency algorithms:

```text
prefix sum → frequency
```

Rules:

- key/value relation is primary;
- row order is not semantic unless the algorithm says so;
- queried key gets focus only when query begins;
- HIT/MISS resolves before answer/count mutation;
- insertion/update happens only after narration/trace authorizes it;
- do not show a tiny map inside a generic black debug card.

### Stack

Stack should visibly preserve:

```text
top
item order
push/pop ownership
```

The stack is a real visual object on the right side.

Do not reduce it to:

```text
stack = [1, 4, 7]
```

in tiny text unless the scene is explicitly teaching code representation.

### Queue

Queue should visibly preserve:

```text
front
rear
enqueue/dequeue order
```

### HashSet / visited

Show membership semantics, not sorted/list semantics.

## 5B.9 Answer / accumulator placement

Answer/count/result state must have one stable position.

Examples:

```text
answer = 4
matches = 4
count = 4
```

Rules:

- do not hide the answer inside a tiny header badge when it is part of the current teaching beat;
- do not update before the causal match/query/decision resolves;
- use `CountUp` or the verified numeric-state mechanic when appropriate;
- after update, let the new value settle;
- final-answer hero treatment happens only when narration establishes finality.

A small top-right badge may exist as secondary persistent context only if the same answer is also readable where the trace teaches the update.

## 5B.10 Trace reading path / causal flow

The learner should be able to follow a stable visual path.

### Array / brute-force style

```text
CURRENT ARRAY ITEM / RANGE
→ VARIABLE UPDATE
→ LIVE CALCULATION
→ DECISION
→ ANSWER UPDATE
→ NEXT POINTER / INDEX
```

### Prefix + HashMap style

```text
CURRENT ARRAY ITEM
→ PREFIX UPDATE
→ NEEDED CALCULATION
→ HASHMAP QUERY
→ HIT / MISS
→ ANSWER UPDATE
→ HASHMAP INSERT / FREQUENCY UPDATE
→ NEXT INDEX
```

### Stack style

```text
CURRENT INPUT
→ CONDITION / COMPARISON
→ STACK QUERY / TOP
→ PUSH / POP
→ UPDATED VARIABLE / RESULT
→ NEXT INPUT
```

### Graph / tree BFS style

```text
CURRENT NODE
→ VISIT / DECISION
→ NEIGHBOR RELATION
→ QUEUE UPDATE
→ VISITED UPDATE
→ NEXT NODE
```

Motion should reinforce this causal reading path.

Do not bounce focus randomly between distant regions.

## 5B.11 Persistent spatial identity

Across a full trace:

- array/tree/graph/matrix position stays stable;
- variable rail position stays stable;
- calculation stage position stays stable;
- auxiliary structure position stays stable;
- answer position stays stable.

Only semantic content changes.

Do not re-center everything after every step.

Do not let flexbox insertion shift existing rows/cards.

If an object is not yet introduced:

```text
reserve its geometry internally
but render it hidden
```

This prevents future layout jumps without creating spoilers.

## 5B.12 Local containers vs giant dashboard

Allowed:

- one rough box around the current equation;
- one subtle region boundary around a map/stack;
- one focus outline around the active result;
- structure-native container visuals.

Forbidden:

- one giant dark rectangle containing variables + equation + result + history + auxiliary state;
- terminal-like HUD as the primary trace surface;
- nested tiny cards for every value;
- mini-chip history rows that are not readable.

The board itself is the main canvas.

## 5B.13 Match history / past results

Do not automatically show every previously found subarray as tiny chips.

Only show history when narration needs it.

Preferred:

- keep confirmed ranges as restrained semantic bands on the main structure when useful;
- keep the accumulator as the canonical total;
- show one or a few meaningful prior matches if comparison requires them.

If full history is pedagogically necessary, allocate a readable dedicated region.

Do not squeeze history into a 20px-high strip.

## 5B.14 Structure-specific default layouts

### Array + no auxiliary structure

```text
CENTER / UPPER-MIDDLE
large ArrayTrackV2

LOWER-LEFT
state variables

LOWER-CENTER
current arithmetic / decision

LOWER-RIGHT
answer / current result
```

### Array + HashMap / HashSet / Stack / Queue

```text
CENTER-LEFT
large array

LOWER-LEFT
state variables

LOWER-CENTER
current arithmetic / decision

RIGHT
auxiliary structure

ANSWER
stable near calculation or just below it
```

### Tree / Graph + Queue / Stack

```text
CENTER-LEFT
tree / graph

RIGHT
queue / stack / visited support

LOWER-CENTER
current node + decision / calculation

ANSWER / traversal output
stable lower lane if needed
```

### Matrix + auxiliary structure

```text
CENTER-LEFT
matrix

RIGHT
auxiliary structure

LOWER
coordinates / variables + calculation
```

These are defaults.
The relevant data-structure grammar may refine them.

## 5B.15 Trace motion hierarchy

For each step, focus on one teaching event.

Example prefix-map trace:

```text
1. current array value focuses
2. prefix variable updates
3. needed equation builds
4. map query travels / focus transfers
5. map resolves HIT or MISS
6. answer updates if justified
7. current prefix inserts/updates in map
8. state settles
9. pointer/index advances
```

Do not animate steps 2–7 simultaneously.

First occurrence may use the full grammar.
Later repetitions may compress timing, but never skip state.

## 5B.16 Trace frame review test

At every critical trace frame, reviewer must answer without reading code:

```text
Where are we in the primary structure?
What are the important variable values?
What exact calculation/decision is happening now?
What is the auxiliary structure state?
What changed because of this step?
What is the current answer/count?
What happens next?
```

If the learner must inspect tiny text in a black panel to answer these, the frame fails.

## 5B.17 Trace readability QA — blocking

Reject the trace layout if any of these are true:

```text
PRIMARY STRUCTURE TOO SMALL
VARIABLES TOO SMALL
CALCULATION TOO SMALL
AUXILIARY STRUCTURE TOO SMALL
ANSWER HIDDEN IN HEADER
GIANT UNUSED BOARD AREA
DEBUG-PANEL DOMINANCE
UNSTABLE VARIABLE POSITIONS
UNSTABLE AUXILIARY POSITIONS
LAYOUT REFLOW
CAPTION COLLISION
POINTER COLLISION
```

These are blocking layout failures under the 100-point audit.

---


# 6. Palette and typography truth

Use actual current shared project tokens from:

```text
@dsa/kit/lib/theme
```

Do not introduce raw brand colors in a new scene plan.

Semantic colors must match course meaning.

Examples:

```text
neutral/base      → theme.chalkText
query/information → theme.cyan
current/focus     → theme.pivot
confirmed/correct → theme.good
reject/error      → theme.warn / theme.bad only when semantically correct
history           → theme.chalkDim
```

Do not use color decoratively.

Typography must come from the current shared theme / font system.

---

# 7. Mandatory scene header contract

Every semantic word plan and every final frame plan starts with:

```text
SCENE:
QUESTION:
BEAT TYPE:
SCRIPT SOURCE:
TRACE SOURCE:
AUDIO FILE:
SYNC FILE:
FPS:
TOTAL FRAMES:
PEDAGOGICAL GOAL:
TRACE STEP IDS:
DATA STRUCTURE:

PRIMARY HERO:
SUPPORT LEFT:
SUPPORT RIGHT:

TRACE PRIMARY STRUCTURE ZONE:
TRACE VARIABLE STATE RAIL:
TRACE LIVE CALCULATION STAGE:
TRACE AUXILIARY STRUCTURE ZONE:
TRACE ANSWER / RESULT ZONE:

REUSE:
EXTEND:
CREATE:
DO NOT TOUCH:

MOTION SEMANTICS:
MORPH SEMANTICS:
SVG SEMANTICS:

TRANSITION IN:
TRANSITION OUT:

FORBIDDEN:
```

Rules:

- pre-audio plan: `AUDIO FILE`, `SYNC FILE`, `FPS`, `TOTAL FRAMES` may be `PENDING FINAL AUDIO`;
- final frame plan: all timing fields must be exact;
- if a field genuinely does not apply, write `N/A`;
- never invent a file path.

---

# 8. KIT USAGE / COMPONENT TRUTH CONTRACT

This section is mandatory.

Before approving a plan, verify every named component in the **actual repository source**.

Do not use remembered APIs.

## 8.1 Per-component record

For every component/helper used by the scene, record:

```text
KIT COMPONENT:
PATH:
ROLE IN THIS SCENE:
SEMANTIC MEANING:
CURRENT VERIFIED API:
STATE / PROPS NEEDED:
ENTERS WHEN:
CHANGES WHEN:
PERSISTS UNTIL:
CLEANUP:
DECISION: REUSE / EXTEND / CREATE / DO NOT TOUCH
```

## 8.2 Component semantic truth

Never reuse a component only because it looks similar.

Examples:

```text
HashMap visual for key→index
≠ automatically valid for prefix→frequency

sorting graph
≠ automatically valid for generic complexity growth

array cards
≠ automatically valid for HashSet semantics
```

Semantic correctness beats convenience.

## 8.3 Shared vs local creation

Use:

```text
REUSE
→ real existing component works unchanged

EXTEND
→ correct shared semantic component exists but lacks one required capability
→ preserve backward compatibility

CREATE SHARED
→ no reusable semantic primitive exists and the need is generic across future problems

CREATE LOCAL
→ behavior is genuinely question-specific and should not become shared course vocabulary

DO NOT TOUCH
→ unrelated shared component must remain stable
```

Question-local code may orchestrate state.
Question-local code must not recreate existing shared chalk, array, captions, code-editor, motion, or graph language.

## 8.4 Known kit routing examples

These are examples only; verify real source/API before every implementation handoff.

```text
array structure       → ArrayTrackV2 / ArraySlotV2 / ArrayValueV2 / ArrayIndexRowV2
array pointers        → PointerLaneV2
array partitions      → PartitionBandV2
numeric accumulator   → CountUp
rough container       → RoughBox
straight relation     → RoughLine / exact approved path primitive
curved relation       → RoughCurve / EvolvingPath where semantically correct
semantic travel       → BezierFlight where source→destination relation matters
code                  → board-native code presentation; EXTEND ChalkCodeEditorV2 only with a verified transparent/board-native mode
captions              → Captions
roadmap               → MasterRoadmapV2
in-scene title        → SceneEdgeTitle / SceneLabelStrip
theme / fonts         → theme.ts
low-level timing      → anim.ts / motion.ts
```

## 8.5 Mandatory KIT field inside every beat

Every semantic beat must contain:

```text
KIT COMPONENTS:
- <verified component> → <exact role>
- <verified component> → <exact role>

KIT STATE / PROP INTENT:
- ...

REUSE / EXTEND / CREATE:
- ...
```

Implementation should never need to guess what visual primitive the plan intended.

---

# 9. Pre-audio semantic word plan

Before final audio exists, every meaningful spoken phrase becomes a semantic anchor.

Do not assign seconds or frames yet.

## 9.1 Anchor selection

Anchor every phrase that changes one or more of:

- teaching focus
- visible object
- algorithm state
- query
- decision
- mutation
- pointer/index
- count
- relation
- graph state
- code line
- scene layout
- persistent state
- cleanup
- transition

Not every filler word needs a separate visual event.

For TRACE scenes, every algorithmically meaningful operation must have an anchor.

For NON-TRACE scenes, anchor only the important teaching points from the approved script.

## 9.2 Mandatory semantic anchor schema

Every anchor must contain:

```text
ANCHOR ID:
EXACT SPOKEN PHRASE:

WHAT APPEARS NOW:
CENTER-STAGE HERO:

CAUSE:
STATE REACTION:
COMPREHENSION HOLD:
MOVE / MUTATION:
SETTLE:

WHAT MUST NOT APPEAR YET:
CLEANUP / EXIT:
PERSISTENT STATE:

TRACE STEP IDS:

KIT COMPONENTS:
KIT STATE / PROP INTENT:
REUSE / EXTEND / CREATE:

MOTION PURPOSE:
NO-SPOILER CHECK:
COLLISION CHECK:
```

No anchor may say:

```text
"animate nicely"
"show something here"
"make this premium"
"do a cool transition"
```

## 9.3 No guessed hold

Before exact audio:

```text
COMPREHENSION HOLD:
Only if final audio provides a real pause after this phrase.
```

Do not pre-author arbitrary hold duration.

---

# 10. Exact audio / word identity contract

After final MP3 + sync exist, resolve every semantic anchor to exact word identities.

Core law:

```text
TEXT IS CONTENT.
ORDERED INDEX IS IDENTITY.
```

Repeated words are common in DSA.

Never identify a word as:

```text
"the second zero"
"the next prefix"
"around the word lookup"
```

Use exact stable identity:

```text
W0000
W0001
W0042
```

Scoped form:

```text
<scene-name>:W0042
```

## 10.1 Exact anchor record

Final timed plans use:

```text
ANCHOR ID:
EXACT SPOKEN PHRASE:

START WORD INDEX:
START WORD ID:
START EDGE: start / end

END WORD INDEX:
END WORD ID:
END EDGE: start / end

RAW START FRAME:
RAW END FRAME / END BOUNDARY:

RESOLVED FRAME RANGE:
[startFrame, endFrameExclusive)

TRACE STEP IDS:

PAUSE AFTER:
none / micro / natural / teaching / major

TEACHING PURPOSE:
```

## 10.2 Sync frame truth

If validated sync JSON already provides:

```text
start_frame
end_frame
```

use those exact source values.

Do **not** recompute them from milliseconds merely because a formula is available.

Read FPS from sync.

Do not hardcode 30 FPS for V3 planning.

If the sync source has exact milliseconds but no frame fields, derive frames using the approved sync normalization path and record that derivation explicitly.

Never mutate raw sync JSON.

---

# 11. Permanent frame-range convention

All final plans use:

```text
[startFrame, endFrameExclusive)
```

Example:

```text
[100, 110)
```

renders frames:

```text
100 ... 109
```

The exclusive end boundary is not itself a rendered frame.

Never mix inclusive and exclusive end conventions inside the same project.

For a final scene word whose source end boundary equals the composition duration, do not treat that boundary as a valid rendered frame.

---

# 12. Exact scene duration contract

Final scene duration comes from validated sync / final audio.

Never use:

- word-count estimate
- WPM estimate
- guessed tail
- visual convenience
- old scene duration

Required:

```text
TOTAL FRAMES = validated sync duration
FPS = sync fps
```

If an approved transition requires extra non-audio frames, it must come from an explicit repository-level transition contract or a separately approved duration rule.

Otherwise end at the source-derived duration.

---

# 13. Pause contract

Derive silence from adjacent word timings.

Categories:

```text
micro      < 150 ms
natural    150–299 ms
teaching   300–699 ms
major      >= 700 ms
```

Use pauses intentionally.

## Stable hold ≠ dead screen

A semantic HOLD means the algorithm/teaching state remains stable.

During a hold, allowed passive continuity may include:

- captions progressing through the actual words
- existing deterministic chalk texture
- already-started stroke finishing
- restrained existing focus state
- subtle non-semantic visual persistence already owned by the kit

Forbidden during a hold:

- new algorithm state
- new answer
- pointer movement without cause
- decorative camera motion
- unrelated pulsing
- filler animation because the frame feels empty

If nothing should move, a truly still frame is valid.

Never invent a pause because the animation "needs breathing room."

---

# 14. Exact frame-wise choreography

A final frame plan must be detailed enough that implementation invents nothing.

Bad:

```text
F300–F420
swap values and move pointer
```

Good:

```text
[F300,F310)
current value receives compare focus

[F310,F321)
spoken decision resolves; target state reacts

[F321,F333)
real teaching pause from audio; no pointer movement

[F333,F345)
values detach/lift from fixed slots

[F345,F369)
values travel on separate crossing paths

[F369,F381)
values land

[F381,F393)
slot/partition semantic state settles

[F393,F406)
pointer moves only after swap is complete
```

Exact windows must come from:

```text
exact spoken word / phrase timing
→ exact next anchor boundary
→ real silent gap
→ existing motion mechanic that fits inside the authorized window
```

Never allocate arbitrary percentages inside a phrase when smaller exact word anchors exist.

---

# 15. Mandatory motion contract per primary beat

Every primary beat must document:

```text
SEMANTIC ACTION:
TRACE:
AUDIO ANCHOR:

CAUSE:
STATE REACTION:
HOLD:
MOVE / MUTATION:
SETTLE:

MECHANIC:
KIT COMPONENT:
REUSE / EXTEND / CREATE:
```

Use canonical motion vocabulary where applicable:

```text
REVEAL
FOCUS
COMPARE
QUERY
HIT
MISS
ACCEPT
REJECT
MOVE
POINTER_MOVE
SWAP
INSERT
REMOVE
PUSH
POP
ENQUEUE
DEQUEUE
EXPAND
SHRINK
MERGE
SPLIT
OWN
COUNT_UPDATE
DRAW_RELATION
ERASE_RELATION
COMPLETE
TRANSITION
```

Do not invent a new motion name when an existing semantic action fits.

---

# 16. Fixed-geometry / stable-identity rules

Do not use auto-layout insertion for algorithm structures whose positions are semantically stable.

## Arrays

Permanent law:

```text
SLOTS STAY FIXED.
VALUES / SEMANTIC STATE CHANGE.
INDICES NEVER MOVE.
```

Pointer lanes and partition bands stay geometrically aligned to fixed slots.

## HashMap / Frequency map

Permanent semantic law:

```text
KEY → VALUE relation is primary.
ROW POSITION IS NOT.
```

Do not imply sorted order or sequential scan unless the algorithm actually uses it.

For a frequency map:

```text
prefix sum → frequency
```

Do not reuse an index-oriented visual without a verified semantic extension.

## Matrix

Cell coordinate identity stays fixed.
Values/state change in place.

## Graph / Tree / Linked structures

Preserve structural identity and topology rules from the relevant visual grammar.

---

# 17. Code-scene contract

Code scene = implementation explanation, not a second trace.

Rules:

```text
future code line hidden
spoken code idea begins
→ relevant line appears
→ line types over authorized word window
→ line completes
→ semantic effect may appear as support
→ next line only when narration reaches it
```

Use a verified production code primitive, but the non-roadmap board-native law overrides presentation. A dark IDE/editor window is forbidden. If `ChalkCodeEditorV2` is dark-surface-only, mark it `EXTEND` for a board-native transparent mode or use/create a verified reusable board-native code primitive.

If character-level timing exists:
- use exact character timing.

If only word-level timing exists:
- map spoken lexeme/token to its exact word window;
- distribute that token's characters deterministically inside that window;
- attach unspoken syntax to its nearest associated spoken token;
- whitespace gets no independent semantic delay.

Never use generic:

```text
2 chars per frame
20-frame typewriter
```

when exact word timing exists.

If narration does not expose enough detail for token-level mapping, use the exact enclosing approved code-idea anchor window.

---

# 18. Complexity visual law

Complexity must be **derived before it is revealed**.

Do not put the final Big-O curve or winner on screen at scene start.

When complexity is spoken:

```text
1. show the source of work
2. derive total growth
3. introduce axes only when graph becomes useful
4. draw RoughCurve only when that growth class is actually named/derived
5. show operation counter/example only when spoken
6. compare curves only when narration compares them
```

Example:

```text
n
n-1
n-2
...
1

→ narration derives total work

O(n²)

→ only now coral rough curve draws
```

For an optimal one-pass method:

```text
one scan
+
expected constant-time lookup/update

→ narration concludes O(n)

→ only now mint rough curve draws
```

In a later comparison scene, multiple curves may coexist only when comparison is spoken.

## Complexity kit law

Prefer verified shared chalk primitives such as:

- `RoughCurve`
- `RoughLine`
- `ChalkText`
- `CountUp`
- current theme tokens

Do not misuse a domain-specific graph component whose semantics do not match generic complexity growth.

If a generic reusable complexity graph is missing and future scenes will need it:

```text
CREATE / EXTEND at kit level
```

not scene-local duplicated UI.

---

# 19. Chalk / stroke behavior

Chalk geometry should draw according to semantic timing.

Use current shared rough/chalk primitives.

Do not recreate rough/chalk effects locally.

Do not preselect generic frame durations such as:

```text
15 frames
20 frames
25 frames
```

unless:
- a canonical kit mechanic owns that timing envelope, and
- it fits entirely within the exact authorized audio window.

Exact semantic trigger comes from sync first.
Physical easing/mechanic comes second.

No CSS transition / animation / keyframes.

---

# 20. Morph / transformation contract

Prefer semantic continuity when identity persists.

Do not morph unrelated concepts for spectacle.

For every non-trivial transformation:

```text
MORPH ID:
SOURCE:
TARGET:
SOURCE SEMANTIC ID:
TARGET SEMANTIC ID:
IDENTITY RELATION:
CARDINALITY:
SOURCE PERSISTS:
TRANSITION CLASS:
AUDIO ANCHOR:
TRACE STEP:
MECHANIC:
MIDPOINT QA:
REUSE / EXTEND / CREATE:
```

Route classification through:

```text
dsa-morph-design
docs/MORPHING_BIBLE_V2.md
```

Same entity in a new position usually means MOVE, not path morph.

If source logically persists, use clone/project semantics rather than consuming the only source.

---

# 21. SVG action contract

For each non-trivial SVG action:

```text
SVG ACTION ID:
SEMANTIC ROLE:
SVG CLASS:
PATH ID:
SOURCE:
TARGET:
AUTHORED DIRECTION:
VISIBLE DIRECTION:
AUDIO ANCHOR:
TRACE STEP:
START FRAME:
END FRAME EXCLUSIVE:
PATH LENGTH SOURCE:
ARROW TYPE:
LAYER:
MECHANIC:
REUSE / EXTEND / CREATE:
```

Route through:

```text
dsa-svg-animation
docs/SVG_ANIMATION_BIBLE_V2.md
```

Requirements:

- exact path metrics
- clamped progress 0..1
- explicit direction
- relation arrow vs tracer arrow distinction
- deterministic geometry
- target does not react before path arrives when causality requires arrival
- no magic dash length in new V2/V3 primitives

---

# 22. Transition continuity

If an object remains conceptually the same across beats/scenes:

- preserve identity where useful;
- preserve location where useful;
- dim/recede/move rather than destroy/recreate;
- use semantic handoff instead of generic wipe.

Default camera:

```text
LOCKED
```

Allowed:
- restrained scale/recede at major transition
- controlled crop/zoom only for readability

Forbidden:
- pan/zoom for energy
- constant camera motion
- cinematic movement that hides algorithm geometry

Exact audio duration remains authoritative.

Never casually introduce overlapping timeline transitions that alter timing.

---

# 23. Critical-frame / critical-state declaration

Every final scene plan declares review points.

Required where applicable:

```text
ENTRY
FIRST IMPORTANT STATE
FIRST DECISION
FIRST QUERY
FIRST HIT / MISS
FIRST MUTATION
FIRST POINTER MOVE
FIRST COUNT UPDATE
MOST COMPLEX MID-SCENE STATE
FINAL ALGORITHM STATE
TRANSITION OUT
```

For code scenes:

```text
FIRST CODE LINE
KEY / HOT LINE
FINAL CODE STATE
```

For morph scenes:

```text
0%
25%
50%
75%
100%
```

For complexity scenes:

```text
PRE-DERIVATION
DERIVATION
CURVE FIRST VISIBLE
CURVE COMPLETE
COMPARISON STATE
```

---

# 24. Scene-type checklist

## INTRO / ROADMAP
- activate exact question
- no solution spoiler
- roadmap state correct

## UNDERSTAND
- exact problem semantics
- input/output
- constraints relevant to method choice
- no algorithm spoiler before narration

## IDEA / OPTIMAL IDEA
- only important insight / invariant
- no full execution
- no premature map/answer/final complexity
- end by handing off naturally to trace

## TRACE
- visual only as primary teaching mode
- complete algorithm execution
- every meaningful operation trace-bound
- no skipped state

## CODE
- code primary
- future lines hidden
- key line/invariant emphasized
- no full re-trace

## WHY-NOT / DERIVATION
- limitation concrete
- no generic "too slow"
- next question naturally created

## COMPLEXITY
- total work derived
- rough curve appears only when authorized
- meaningful comparisons only

## MISTAKES / EDGE CASES
- concise
- only high-value failure modes
- do not reopen full lesson

## RECAP / ROADMAP
- minimal
- transferable pattern
- exact progress update
- verified next roadmap problem
- no new teaching

---

# 25. Implementation-ready plan output per beat

Every final frame beat should contain:

```text
FRAME RANGE:
[startFrame, endFrameExclusive)

WORD IDS:
Wxxxx → Wyyyy

EXACT SPOKEN ANCHOR:

TRACE IDS:

ACTIVE VISUAL STATE:

CENTER-STAGE HERO:

PRIMARY HERO BOUNDS:
SUPPORT LEFT BOUNDS:
SUPPORT RIGHT BOUNDS:
CAPTION CLEARANCE:

ENTER:

CAUSE:

STATE REACTION:

MOVE / MUTATION:

REAL HOLD:
<exact frame range + pause category>
or
NO HOLD

SETTLE:

WHAT MUST NOT APPEAR YET:

CLEANUP / EXIT:

PERSISTENT STATE:

KIT COMPONENTS:

KIT STATE / PROP INTENT:

MOTION SEMANTICS:

MORPH / SVG CONTRACT:
N/A or exact contract ID

NO-SPOILER CHECK:

COLLISION CHECK:
```

---

# 26. Automatic exact-plan audit

Before implementation:

```text
semantic word plan
+
final script
+
final MP3
+
validated exact sync
+
verified trace
+
current kit audit
→ exact frame plan
→ audit
→ repair
→ re-audit
→ 100/100
→ only then implementation handoff
```

Required hard checks:

```text
UNMATCHED SEMANTIC ANCHORS = 0
DUPLICATE ANCHOR IDS = 0
OUT-OF-BOUNDS FRAME RANGES = 0
GUESSED SECONDS = 0
GUESSED FRAMES = 0
UNVERIFIED COMPONENT NAMES = 0
UNRESOLVED TRACE MISMATCHES = 0
PREMATURE SPOILERS = 0
KNOWN COLLISIONS = 0
TRACE READABILITY FAILURES = 0
DEBUG-PANEL-DOMINANCE FAILURES = 0
BLACK / DARK CARD FAILURES = 0
BOARD-NATIVE SCENE FAILURES = 0
```

---

# 27. 100-point approval gate

A final plan is approved only at:

```text
100 / 100
```

Score:

```text
ALGORITHM TRUTH                 20
WORD / SYNC TRUTH               20
NO-SPOILER / CAUSALITY          15
SCENE-TYPE DISCIPLINE           10
KIT / COMPONENT TRUTH           10
LAYOUT / COLLISION              10
MOTION SEMANTICS                 5
PERSISTENCE / CLEANUP             5
COMPLEXITY / GRAPH TRUTH          3
TRANSITION CONTINUITY             2
                               ----
                                100
```

## Blocking categories

Any material failure in these categories blocks approval regardless of arithmetic score:

```text
ALGORITHM TRUTH
WORD / SYNC TRUTH
NO-SPOILER / CAUSALITY
KIT / COMPONENT TRUTH
KNOWN COLLISION
```

Do not approve 98/100 as "close enough."

Repair and re-audit.

---

# 28. Final handoff condition

A scene plan may be handed to implementation only when:

- verified trace is bound;
- approved narration wording is bound;
- exact sync is validated;
- every semantic anchor resolves to exact word identity;
- exact frame ranges use one convention;
- every mutation has an authorized cause;
- no future state appears early;
- all kit components are real and semantically appropriate;
- every missing capability is classified REUSE / EXTEND / CREATE / DO NOT TOUCH;
- layout is collision-safe;
- every non-roadmap scene is board-native with zero black/dark teaching cards or panels;
- TRACE scenes use the permanent trace-stage spatial grammar and remain readable at normal video size;
- variables, live calculation, auxiliary structure, and answer retain stable spatial homes through the trace;
- critical review frames are declared;
- scene-type discipline passes;
- audit is 100/100.

Implementation must not need to invent:

- algorithm behavior
- timing
- word matching
- component identity
- semantic motion
- layout hierarchy
- cleanup
- persistence
- graph meaning
- transition logic

If implementation still has to invent one of those, the plan is not finished.

---

# 29. Absolute no-guess rules

Forbidden wording in final plans:

```text
around this word
roughly here
about 2 seconds
hold for 15 frames
start at 40%
animate through the middle
move it nicely
use a cool transition
something appears here
maybe use the hashmap component
```

Required wording:

```text
exact approved phrase
exact Wxxxx identity
exact source frame
exact [start,end) range
exact trace ID
exact verified kit component
exact semantic action
exact persistence / cleanup
```

No guess survives into implementation.
