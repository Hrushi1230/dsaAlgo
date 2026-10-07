# Q12 — Next Permutation
# ANTIGRAVITY MASTER HANDOFF
## Word-Based Plans → Exact Word JSON → Exact Frame Plans → Implementation

This package contains the approved Phase-9 semantic visual plans for Scene 01 through Scene 10.

The scene MD files are the semantic authority.

Antigravity's job is NOT to redesign, simplify, shorten, merge, or reinterpret them.

---

# MASTER PIPELINE

For each scene, in order:

```text
APPROVED WORD-BASED PLAN
+
FINAL MP3
+
EXACT WORD-SYNC JSON
+
ACTUAL REPO / FOUNDATION V2
        ↓
SYNC AUDIT
        ↓
STABLE WORD IDS W0000...
        ↓
RESOLVE EVERY SXX_* ANCHOR
        ↓
EXACT WORD TIMESTAMPS
        ↓
EXACT FRAME RANGES
        ↓
EXACT FRAME-WISE PLAN
        ↓
FRAME-PLAN QA
        ↓
IMPLEMENT
        ↓
TYPECHECK / ALGORITHM QA
        ↓
RENDER EXACT CHECKPOINTS
        ↓
VISUAL / MOTION / CONTINUITY QA
        ↓
AUTO-CORRECT
        ↓
PASS
        ↓
NEXT SCENE
```

Do not ask for approval between scenes unless a scene becomes BLOCKED by missing/contradictory authoritative source.

---

# ZERO-REDUCTION RULE

Every semantic beat in the scene MD must survive conversion.

Forbidden:

- dropping an anchor;
- merging two semantic beats only because they are close in time;
- removing a cleanup/exit;
- removing a `WHAT MUST NOT APPEAR YET` rule;
- replacing a specific algorithm action with a generic fade;
- showing future code early;
- skipping a spoken comparison;
- skipping a pointer move;
- skipping a spoken value reveal;
- inventing an easier visual;
- shortening the plan because implementation would be faster.

If exact audio provides less time than expected:

```text
SIMPLIFY MOTION AMPLITUDE / PATH
NOT SEMANTIC CONTENT
```

---

# WORD-SYNC RULE

Raw word JSON is immutable.

Assign ordered stable IDs:

```text
W0000
W0001
W0002
...
```

Repeated words such as:

```text
four
Move left
one
```

must be resolved through ordered identity and neighboring context, never text search alone.

For each approved anchor resolve:

```text
anchor_id
normalized_phrase
start_word_id
end_word_id
start_time
end_time
start_frame
end_frame_exclusive
next_anchor_start_time
next_anchor_start_frame
available_pause_seconds
available_pause_frames
```

Use the actual project audio/frame helper.

No guessed timing.

No WPM estimate.

No guessed frame.

---

# FRAME CONVENTION

```text
[startFrame, endFrameExclusive)
```

If:

```text
duration_frames = N
```

then:

```text
renderable frames = 0 ... N-1
exclusive end = N
```

---

# GEOMETRY RULE

Never invent pixel coordinates from the plan.

Derive them from:

- actual component geometry;
- Foundation V2 constants;
- Array V2 slot centers;
- pointer lanes;
- range-band geometry;
- production code layout;
- permanent roadmap UI;
- ProblemOpenerShell;
- deterministic layout functions.

If geometry cannot be derived:

```text
UNRESOLVED — SOURCE REQUIRED
```

---

# COMPONENT RULE

Inspect actual repo first.

```text
REUSE
→ EXTEND
→ CREATE reusable kit-level primitive only if absent
```

Never create a scene-local generic array/card/pointer/graph replacement.

All arrays—including mini, conceptual, edge-case and recap arrays—use Array V2.

---

# CENTER-STAGE RULE

Default:

```text
1 primary hero
+ 1 direct support object
+ captions
```

Narration controls visual lifecycle:

```text
spoken phrase
→ visual enters
→ teaches
→ settles
→ exits/reduces
→ next idea
```

Do not keep every useful object on screen.

---

# CODE RULE

Scene 04 and Scene 08:

```text
spoken code idea
→ active line types character-by-character
→ future lines remain nonexistent
→ semantic proof may take center
→ proof exits
→ code returns
→ next line only when spoken
```

Use the existing production code component.

No full code dump.

No fake black IDE.

---

# COMPLEXITY RULE

Complexity appears when narration reaches it.

Curves teach mathematical growth, not benchmark data.

For Q12:

```text
optimal time: O(n)
optimal extra space: O(1)
brute candidate count: n! for n distinct values
```

Do not invent an unsupported exact combined Big-O for the teaching brute implementation.

---

# ROADMAP TRUTH

Scene01 starts:

```text
11 / 227 COMPLETE
Q011 Sort Colors COMPLETE
Q012 Next Permutation UP NEXT
rail 012
```

On Scene01 `Question twelve`:

```text
Q012 UP NEXT → NOW ACTIVE
global remains 11/227
rail remains 012
```

Scene10 before completion:

```text
11 / 227 COMPLETE
Q012 NOW ACTIVE
rail 012
```

On:

```text
"Next Permutation is complete"
```

mutate:

```text
Q012 → COMPLETE
11/227 → 12/227
11/18 → 12/18 if local counter exists
```

Later on:

```text
"question thirteen"
```

mutate navigation only:

```text
rail 012 → 013
Q013 Set Matrix Zeroes → UP NEXT
```

Q13 is NOT NOW ACTIVE in Q12 Scene10.

Final:

```text
12 / 227 COMPLETE
Q012 COMPLETE
Q013 Set Matrix Zeroes UP NEXT
rail 013
```

---

# SCENE LOOP

Process strictly:

```text
01 plan→frame→implement→QA→PASS
02 plan→frame→implement→QA→PASS
03 ...
...
10
```

Do not work on two scenes at once.

If a scene has a source conflict, stop that scene and report:

```text
SCENE XX BLOCKED
UNRESOLVED — SOURCE REQUIRED
```

Otherwise self-correct and continue automatically.

---

# PASS CONDITIONS PER SCENE

```text
approved anchors resolved          = ALL
dropped semantic beats             = 0
guessed timings                    = 0
guessed frames                     = 0
guessed coordinates                = 0
future spoilers                    = 0
generic replacement components     = 0
algorithm mismatches               = 0
continuity mismatches              = 0
caption timing sources             = 1
unresolved source requirements     = 0
```

Only PASS can move to next scene.
