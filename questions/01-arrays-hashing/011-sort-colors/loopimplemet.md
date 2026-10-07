Q11 SORT COLORS
AUTOMATIC FRAME-WISE PLANNING + IMPLEMENTATION LOOP
SCENE 01 → SCENE 10

You are now responsible for completing Q11 Sort Colors scene-by-scene.

THIS IS NOT ONLY A PLANNING TASK.

For EACH scene you must:

1. inspect authoritative sources
2. validate audio + exact sync
3. create exact frame-wise plan
4. self-QA the frame plan
5. automatically correct source-supported issues
6. IMPLEMENT the Remotion scene
7. typecheck / validate
8. render required QA frames / preview
9. visually and semantically QA implementation
10. automatically fix problems
11. reach PASS
12. ONLY THEN continue to next scene

Do not ask me for confirmation between scenes.

==================================================
MASTER LOOP
==================================================

Process strictly:

SCENE 01
→ PLAN
→ QA
→ IMPLEMENT
→ BUILD QA
→ VISUAL QA
→ FIX
→ PASS

then

SCENE 02
→ PLAN
→ QA
→ IMPLEMENT
→ BUILD QA
→ VISUAL QA
→ FIX
→ PASS

Continue automatically:

01 → 02 → 03 → 04 → 05
→ 06 → 07 → 08 → 09 → 10

Never work on two scenes simultaneously.

==================================================
ABSOLUTE SOURCE PRIORITY
==================================================

For each scene use, in this order:

1. approved WORD-BASED VISUAL PLAN
2. final ElevenLabs MP3
3. final exact word-sync JSON
4. verified Q11 teaching trace
5. previous scene's actual final implemented state
6. Foundation V2
7. Motion Bible V2
8. Morphing Bible V2
9. SVG Animation Bible V2
10. Audio Sync Architecture V2
11. actual existing repository code/components

Do not replace these with your own design judgement.

If authoritative sources conflict:

STOP THAT SCENE.

Report:

UNRESOLVED — SOURCE CONFLICT

Do not guess.

==================================================
ZERO-GUESS LAW
==================================================

Forbidden:

- guessed frame numbers
- guessed timing
- guessed coordinates
- guessed component APIs
- guessed algorithm state
- guessed pointer state
- guessed region width
- guessed roadmap state
- invented UI
- generic AI design
- decorative motion
- changing narration
- changing verified trace

If something cannot be derived from authoritative source:

STOP.

Report:

UNRESOLVED — SOURCE REQUIRED

==================================================
REQUIRED INPUTS PER SCENE
==================================================

For current Scene XX locate:

A. approved word-based visual plan
B. final MP3
C. exact word-sync JSON

All three are mandatory.

If MP3 or sync is missing:

SCENE XX STATUS: BLOCKED

Do NOT:
estimate WPM
estimate seconds
estimate frames
implement approximately

==================================================
PHASE A — AUDIT REAL REPOSITORY
==================================================

Before planning or implementation inspect actual source.

Inspect relevant existing components including where applicable:

ArrayTrackV2
ArraySlotV2
ArrayValueV2
ArrayIndexRowV2
PointerLaneV2
PartitionBandV2
RoughBox
RoughLine
RoughCurve
BezierFlight
ParametricArrow
ChalkText
Captions
existing Code component
ProblemOpenerShell
roadmap components
audioSyncV2
motion helpers
morph helpers

DO NOT assume API signatures.

Open actual files.

Create:

REUSE_EXTEND_CREATE.md

with actual paths.

Format:

REUSE
- component
- actual import path
- reason

EXTEND
- component
- minimal required extension
- reason

CREATE
- only scene-specific composition/state helpers genuinely needed

Do not recreate an existing primitive.

==================================================
PHASE B — VALIDATE AUDIO + SYNC
==================================================

Read actual final sync JSON.

Report:

audio filename
sync filename
FPS
audio duration
duration_frames
word count
first word
last word
last valid frame
exclusive end frame

Raw sync JSON is immutable.

Validate:

timestamps monotonic
start <= end
no negative values
no word outside duration
correct MP3/sync pairing

If invalid:

BLOCK SCENE.

==================================================
FRAME CONVENTION
==================================================

Use:

[startFrame, endFrameExclusive)

If:

duration_frames = N

valid rendered frames:

0 ... N-1

exclusive scene boundary:

N

Example:

duration_frames = 1223

valid:
F0 ... F1222

exclusive end:
F1223

Never call F1223 a renderable frame.

==================================================
PHASE C — STABLE WORD IDS
==================================================

Create ordered identity:

W0000
W0001
W0002
...

Never resolve repeated narration through text search alone.

Forbidden:

find("mid")
second occurrence of "one"
next "zero"

Use ordered exact word identity.

==================================================
PHASE D — SEMANTIC ANCHORS
==================================================

Use the exact SXX_* anchors already defined in the approved word plan.

Do not rename them.

Resolve every anchor to:

anchor ID
exact phrase
start word ID
end word ID
start seconds
end seconds
start frame
endExclusive
next anchor
available pause frames

Create:

sync/<scene>.anchors.json

No unresolved anchor is allowed for PASS.

==================================================
PHASE E — EXACT FRAME PLAN
==================================================

Generate:

planning/framewise/sceneXX/
SCENE_XX_FRAMEWISE_PLAN.md

For every approved semantic beat write:

ANCHOR

Narration

Word IDs

Audio start/end

Frames:
startFrame
endFrameExclusive

Available pause

STATE BEFORE

CAUSE

PRIMARY VISUAL REACTION

MOVEMENT / MUTATION

SUPPORTING REACTION

COMPREHENSION HOLD

SETTLE

STATE AFTER

COMPONENTS

MOTION CLASS

SVG CLASS

VALIDATION

==================================================
MOTION LAW
==================================================

Every visual event follows:

CAUSE
→ STATE REACTION
→ COMPREHENSION HOLD
→ MOVEMENT / MUTATION
→ SETTLE

Use only the phases required.

At most:

ONE primary semantic action
+
ONE supporting reaction

at one time.

Forbidden unless explicitly required:

shimmer sweep
random glow
floating decoration
generic bounce
continuous floating
unnecessary zoom
cinematic camera move without teaching purpose
particles used as hero motion
generic SaaS transitions

Motion must teach state.

==================================================
NO GUESSED GEOMETRY
==================================================

Never use arbitrary:

x = -30
y = 480
approximately 44px
scale = 1.025

unless derived from actual repo geometry.

Coordinates must come from:

existing constants
measured component geometry
slot center calculations
row geometry
layout system
deterministic formulas

If unavailable:

UNRESOLVED — SOURCE REQUIRED

==================================================
FOUNDATION ARRAY LAW
==================================================

For all Array V2 scenes:

SLOTS STAY FIXED.
VALUES MOVE.
INDICES NEVER MOVE.

Never animate slot identity.

==================================================
DNF REGION LAW
==================================================

Always derive:

ZERO REGION
[0, low)

ONE REGION
[low, mid)

UNKNOWN
[mid, high + 1)

TWO REGION
[high + 1, n)

PartitionBandV2 must derive directly from pointer state.

Never separately hardcode widths.

==================================================
DNF POINTER LAW
==================================================

0-case:

swap(low, mid)
low++
mid++

1-case:

mid++

2-case:

swap(mid, high)
high--
MID STAYS

This is immutable.

Pointer movement starts only when narration reaches the exact movement phrase.

==================================================
SWAP LAW
==================================================

Different-value real swap:

- slots fixed
- indices fixed
- two values move
- deterministic paths
- settle exactly in destination slots

Equal-value swap:

DO NOT fake visible reordering.

Use semantic relation/confirmation.

Self-swap:

DO NOT fly value away and back.

No-swap:

NO value movement.

==================================================
SCENE 07 TRACE LAW
==================================================

Scene07 must execute EXACTLY 10 verified iterations.

MASTER INPUT:

[2,1,2,0,2,1,0,1,0,2]

Exact final:

[0,0,0,1,1,1,2,2,2,2]

Final:

low=3
mid=6
high=5

UNKNOWN=EMPTY

Use existing verified trace data.

Do not regenerate an alternative trace.

==================================================
CODE SCENE LAW
==================================================

Scene04 and Scene08:

use existing production code component.

Do not create fake IDE.

Do not use black generic editor.

Create stable line IDs.

Narration drives:

spoken concept
→ exact code line focus
→ right-side semantic evidence
→ settle

Scene08 exact algorithm:

low = 0
mid = 0
high = len(nums) - 1

while mid <= high:

0:
swap(low,mid)
low++
mid++

1:
mid++

2:
swap(mid,high)
high--

NO mid++ in 2-case.

==================================================
ROADMAP LAW
==================================================

USE THE EXISTING PERMANENT ROADMAP UI.

Do not redesign it.

SCENE 01 START:

10 / 227 COMPLETE
Pattern 01 Arrays & Hashing ACTIVE
Q010 COMPLETE
Q011 UP NEXT
rail focus = 011

Q010 completion narration:

confirmation only.

Do NOT replay:
9 → 10

At S01_Q11:

Q011:
UP NEXT → NOW ACTIVE

Global stays:

10 / 227

Rail stays:

011

Scene01 must NOT reveal:

Counting
Dutch National Flag
low/mid/high
0/1/2 algorithm clues

No solution spoiler.

---------------------------------------------

SCENE 10:

Before Q11 completion:

10 / 227
Q011 NOW ACTIVE
rail=011

When narration reaches:

"Sort Colors is complete"

THEN:

Q011 → COMPLETE
10 / 227 → 11 / 227

If pattern progress exists:

10 / 18 → 11 / 18

Later on:

"with the next problem"

THEN:

rail 011 → 012
Q012 Next Permutation → UP NEXT

Q12 does NOT become complete.

Final:

11 / 227 COMPLETE
Q011 COMPLETE
Q012 UP NEXT
rail=012

==================================================
SCENE CONTINUITY LAW
==================================================

Implementation itself must preserve continuity.

Scene XX actual final frame/state
must equal
Scene XX+1 expected first state.

No artificial reset.

Check:

01→02
02→03
03→04
04→05
05→06
06→07
07→08
08→09
09→10

==================================================
FRAME PLAN QA GATE
==================================================

Before implementation of each scene run exact planning QA.

PASS requires:

unresolved anchors = 0
guessed frames = 0
guessed timings = 0
guessed coordinates = 0
algorithm mismatches = 0
continuity mismatches = 0
out-of-range frames = 0
unsupported components = 0

If QA failure is source-correctable:

FIX AUTOMATICALLY.

Then rerun QA.

Do not ask me.

Only when frame plan reaches PASS:
IMPLEMENT.

==================================================
PHASE F — IMPLEMENT CURRENT SCENE
==================================================

After frame plan PASS:

implement Scene XX.

Use:

approved word plan
+
exact anchors
+
frame-wise plan
+
actual Foundation components

Implementation must be deterministic.

No:

Date.now()
Math.random()
CSS timing
setTimeout
runtime uncontrolled animations

Everything driven by:

useCurrentFrame()
exact anchors
deterministic interpolation

==================================================
AUDIO IMPLEMENTATION
==================================================

Use exact final scene MP3.

Do not:
trim
stretch
offset manually
replace audio

Scene duration comes from authoritative sync duration_frames.

==================================================
CAPTION IMPLEMENTATION
==================================================

Captions consume same exact sync source.

No separate caption timing.

One timing authority:

final word-sync JSON.

==================================================
PHASE G — STATIC CODE QA
==================================================

After implementation:

run project-approved:

typecheck
lint if configured
relevant validators
scene-specific QA
Foundation V2 validators

Fix automatically.

No suppressing TypeScript errors with:

any
@ts-ignore
eslint-disable

unless existing project architecture explicitly requires it.

==================================================
PHASE H — ALGORITHM QA
==================================================

Validate rendered semantic states against verified truth.

Especially Scene07.

For every trace state verify:

current == before[mid]

0-case:
lowAfter = low + 1
midAfter = mid + 1

1-case:
midAfter = mid + 1

2-case:
highAfter = high - 1
midAfter = mid

Invariant after settled iteration:

all nums[0:low] == 0
all nums[low:mid] == 1
all nums[high+1:n] == 2

No assumptions about UNKNOWN contents.

==================================================
PHASE I — RENDER QA
==================================================

Render representative exact-anchor frames.

Do NOT choose random frames.

Use critical semantic anchors.

For each scene use QA checkpoints defined in its word plan.

Generate a contact sheet or equivalent preview if project tooling supports it.

Inspect:

layout
clipping
overlap
pointer alignment
array geometry
caption collision
region bands
motion endpoints
code focus
roadmap state
visual continuity

==================================================
VISUAL QA RULE
==================================================

A technically successful render is NOT automatically PASS.

Check visually for:

AI-slop UI
generic cards
unnecessary panel boxes
black surfaces
text collision
off-screen values
pointer collision
inconsistent chalk language
wrong spacing
bad hierarchy
motion without meaning

Fix automatically.

==================================================
PHASE J — MOTION QA
==================================================

For important movement verify start/mid/end states.

Examples:

swap:
source
flight
destination

pointer:
old index
movement
new index

region:
old boundary
transition
settled boundary

representation handoff:
old representation
handoff
new representation

No teleports unless approved plan explicitly calls for a cut/state replacement.

==================================================
SCENE 01 SPECIFIC CORRECTIONS
==================================================

The existing Scene01 frame-wise plan must first be corrected.

MANDATORY:

REMOVE:
"· Dutch National Flag"

No Scene01 solution spoiler.

Remove unsupported decorative:

shimmer
majestic camera
random glow
decorative vignette effects

Audit every hardcoded coordinate.

Replace guessed geometry with actual geometry derivation.

Resolve fake/vague components such as:

Camera Engine
PathTracer

to actual repo helpers/components.

Do not duplicate roadmapData.

Use permanent roadmap truth.

Correct endExclusive frame convention.

Revalidate duration_frames from actual sync.

After correcting Scene01:

frame plan QA
→ PASS
→ immediately implement Scene01
→ implementation QA
→ PASS
→ automatically Scene02.

==================================================
SELF-CORRECTION LOOP PER SCENE
==================================================

Use:

PLAN
↓
FRAME QA
↓
FIX
↓
FRAME QA PASS
↓
IMPLEMENT
↓
TYPECHECK
↓
RENDER
↓
VISUAL QA
↓
ALGORITHM QA
↓
CONTINUITY QA
↓
FIX
↓
RE-RENDER
↓
PASS
↓
NEXT SCENE

Repeat automatically until PASS.

Do not ask me for approval.

==================================================
WHEN TO STOP
==================================================

ONLY stop automatically when:

1. authoritative source is missing
2. sources conflict
3. actual repo component required by plan cannot be found and Foundation rules do not permit creation
4. audio/sync invalid
5. an issue cannot be solved without changing approved narration or algorithm truth

Then report:

SCENE XX BLOCKED
UNRESOLVED — SOURCE REQUIRED

Otherwise continue.

==================================================
PER-SCENE OUTPUTS
==================================================

Create:

planning/framewise/sceneXX/
    SYNC_AUDIT.md
    REUSE_EXTEND_CREATE.md
    sceneXX.anchors.json
    SCENE_XX_FRAMEWISE_PLAN.md
    FRAME_QA_CHECKLIST.md
    IMPLEMENTATION_QA.md
    RENDER_QA.md
    SCENE_STATUS.md

SCENE_STATUS:

SCENE XX: PASS / BLOCKED

frame plan:
PASS/FAIL

implementation:
PASS/FAIL

typecheck:
PASS/FAIL

render:
PASS/FAIL

algorithm:
PASS/FAIL

visual:
PASS/FAIL

continuity:
PASS/FAIL

guessed frames:
0

guessed timings:
0

guessed coordinates:
0

unresolved anchors:
0

==================================================
AFTER EACH SCENE
==================================================

If PASS:

do NOT stop.

Automatically continue.

01 PASS → 02
02 PASS → 03
03 PASS → 04
04 PASS → 05
05 PASS → 06
06 PASS → 07
07 PASS → 08
08 PASS → 09
09 PASS → 10

==================================================
FINAL CROSS-SCENE QA
==================================================

After Scene10 passes:

run Q11 complete lesson QA.

Verify:

MASTER INPUT
[2,1,2,0,2,1,0,1,0,2]

FINAL
[0,0,0,1,1,1,2,2,2,2]

COUNTING
O(n)
O(1)
2 passes

DNF
O(n)
O(1)
one classification pass

INVARIANT
0s | 1s | UNKNOWN | 2s

2-CASE
swap(mid,high)
high--
MID STAYS

Scene07:
10 iterations exact

Final pointers:
low=3
mid=6
high=5

Scene10:
Q011 COMPLETE
11/227 COMPLETE
Q012 Next Permutation UP NEXT
rail=012

==================================================
FINAL PRODUCTION QA
==================================================

Run:

full relevant typecheck
validators
scene composition checks

Verify every scene's duration.

Verify no overlapping / missing sequence.

Verify audio exists for all scenes.

Verify all caption tracks.

Verify all scene transitions.

Render representative checkpoint frames across all ten scenes.

If reasonable within project workflow:
render the complete Q11 composition or low-resolution preview for final QA.

Fix all source-supported problems automatically.

==================================================
FINAL MASTER REPORT
==================================================

Create:

planning/Q11_SORT_COLORS_PRODUCTION_AUDIT.md

Report table:

SCENE | FRAME PLAN | IMPLEMENTED | TYPECHECK | RENDER | ALGORITHM | VISUAL | CONTINUITY | STATUS

01
02
03
04
05
06
07
08
09
10

PASS requires:

10/10 scene frame plans PASS
10/10 scenes implemented
10/10 scene QA PASS

and:

guessed frames = 0
guessed timings = 0
guessed coordinates = 0
algorithm mismatches = 0
roadmap mismatches = 0
continuity mismatches = 0
out-of-range frames = 0
solution spoilers = 0

==================================================
FINAL RULE
==================================================

DO NOT optimize for speed by guessing.

Optimize speed by:

automatic looping
automatic inspection
automatic QA
automatic correction
component reuse
no waiting for human confirmation

Accuracy remains mandatory.

START NOW.

Begin by correcting the existing Scene01 frame-wise plan.

Then:

Scene01 frame plan PASS
→ implement
→ render QA
→ PASS
→ automatically Scene02

Continue automatically until Scene10 production PASS.