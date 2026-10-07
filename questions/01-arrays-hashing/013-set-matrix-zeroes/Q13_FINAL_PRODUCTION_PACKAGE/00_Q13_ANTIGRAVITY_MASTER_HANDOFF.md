# Q13 — Set Matrix Zeroes (LC73)
# Antigravity Master Handoff — Phase 9 Approved

## Status

```text
PHASE 9 = COMPLETE / PASS
SCENES = 13 / 13
SCENE AUDITS = 13 / 13
CROSS-SCENE AUDIT = PASS
ALGORITHM TRACE MISMATCHES = 0
```

---

# Core production law

```text
RESEARCH → VERIFY → TEACH → PLAN BY WORDS
→ USER AUDIO + WORD SYNC
→ EXACT FRAMES
→ IMPLEMENT
→ QA
```

Phase 9 defines **WHAT / WHY / ORDER / STATE / ENTER / EXIT / PERSIST / NO-SPOILER / KIT**.

Final audio + sync define **WHEN**.

Do not redesign an approved Phase-9 beat during frame conversion.

---

# Q13 visual identities

```text
METHOD 1 — TRUTH LENS
working cell is hero
immutable original row/column becomes temporary evidence

METHOD 2 — PROJECTION RAILS
original zero → rowZero / colZero
then marker arrays → matrix decisions

METHOD 3 — MATRIX BECOMES MEMORY
interior zero → first-column / first-row markers
boundary markers → interior decisions
saved booleans → final boundary
```

Do not flatten these into the same matrix-scan animation language.

---

# Foundation laws

Matrix/Grid:

```text
ONE CONTINUOUS 2-D COORDINATE SYSTEM
CELL GEOMETRY FIXED
VALUES CHANGE IN THEIR OWN CELLS
INDICES / LABELS DO NOT MOVE
```

Marker arrays:

```text
ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2

SLOTS STAY FIXED
VALUES / BOOLEAN STATE CHANGE IN PLACE
INDICES NEVER MOVE
```

Code:

```text
future lines hidden
active line types character-by-character from exact sync
after line completes → semantic effect
old line dims/reduces if not needed
```

No generic black IDE. No raw scene-local matrix. No generic boolean cards.

---

# Locked master truth

```text
INPUT
[
 [1,2,0,4,5],
 [6,7,8,9,10],
 [0,12,13,14,15],
 [16,17,18,0,20],
 [21,22,23,24,25]
]

ORIGINAL ZEROS
(0,2)
(2,0)
(3,3)

firstRowZero = true
firstColZero = true

NEW MARKERS
(3,0): 16→0
(0,3): 4→0

FINAL
[
 [0,0,0,0,0],
 [0,7,0,0,10],
 [0,0,0,0,0],
 [0,0,0,0,0],
 [0,22,0,0,25]
]
```

---

# Scene order

```text
01 Roadmap Resume + Q13 Activation
02 Understand + Dangerous Naive Idea
03 Method1 Trace — Full Original Copy
04 Method1 Code
05 Derive Method2
06 Method2 Trace — Row/Column Marker Arrays
07 Method2 Code
08 Derive Optimal Storage
09 Method3 Idea — Matrix Becomes Memory
10 Method3 Full Verified Trace
11 Method3 Optimal Code
12 Complexity + Mistakes + Edge Cases
13 Recap + Roadmap
```

---

# Roadmap final state

```text
Q13 SET MATRIX ZEROES = COMPLETE
GLOBAL = 13 / 227
ARRAYS & HASHING = ACTIVE
Q14 ROTATE IMAGE = UP NEXT
RAIL FOCUS = 014
```

Do not increment to 13/227 before Scene13 narration explicitly speaks the progress value.

---

# Exact frame conversion after user audio/sync

For each scene:

```text
Phase-9 anchor phrase
→ exact word IDs from user sync JSON
→ exact start/end seconds
→ floor/ceil conversion at 30fps
→ [startFrame,endFrameExclusive)
→ preserve approved visual logic
```

Frame convention:

```text
[startFrame,endFrameExclusive)
```

No audio = no exact frame claim.
No sync = no word-aligned frame claim.

---

# Repository inspection gates before implementation

Resolve from real repo before writing scene code:

```text
permanent roadmap component + data API
Array V2 exact props/orientation
production code component API
matrix reusable row/column region primitive
reusable complexity-curve primitive
```

If source is missing:

```text
UNRESOLVED — SOURCE REQUIRED
```

Never replace a missing reusable primitive with a scene-local shortcut just to move faster.
