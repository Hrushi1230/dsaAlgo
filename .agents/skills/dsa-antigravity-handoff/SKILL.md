---
name: dsa-antigravity-handoff
description: Converts an approved verified DSA scene plan into a precise implementation specification for Antigravity without asking Antigravity to invent pedagogy or algorithm behavior.
---

# DSA Antigravity Handoff V2

## Principle

ChatGPT decides:
- teaching logic
- algorithm state
- timing
- choreography
- reuse decisions

Antigravity implements.

## Handoff structure

Every handoff must include:

### 1. Task boundary

```text
QUESTION:
SCENE(S):
GOAL:
OUT OF SCOPE:
```

### 2. Authoritative artifacts

List exact files Antigravity must follow:

```text
verified trace
verified script
audio file
sync JSON
scene plan
relevant existing components
current design/motion docs
```

### 3. Algorithm contract

Provide:
- master testcase
- expected result
- relevant trace steps

Antigravity must not alter them.

### 4. Timing contract

Provide:
- FPS
- total frames
- key exact word anchors
- important pause ranges

No arbitrary retiming.

### 5. Implementation delta

```text
REUSE
EXTEND
CREATE
DO NOT TOUCH
```

Only verified real components go under REUSE/EXTEND.

### 6. Frame choreography

Reference the approved plan.
If necessary repeat the critical implementation ranges.

### 7. Determinism rules

No:
- CSS transitions
- CSS keyframes
- `Math.random()`
- wall-clock rendering state

Use current Remotion/frame-based project conventions.

### 8. Critical stills required

Give exact frames to render.

Antigravity must return these before final approval.

### 9. Validation

Antigravity must run the real repository commands, discovered from the repo.

Do not invent commands in planning.

Return:
- changed files
- typecheck/build result
- validator result if available
- still paths
- unresolved issues

### 10. Completion wording

Antigravity must not say “complete” only because code compiles.

A task is implementation-complete only when:
- requested files are implemented
- required stills are rendered
- validation passes
- no known deviation from plan remains

## Bad handoff

```text
Make a stunning premium Sort Colors scene with nice swaps.
```

## Good handoff

```text
At F333–F344 lift values at mid/high.
At F345–F368 cross on two separate arcs.
Land F369–F380.
Do not move high until F393.
Use existing deterministic arc helper if it supports the required geometry.
Render F320, F350, F380, F405.
```
