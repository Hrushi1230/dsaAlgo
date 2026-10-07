# Q11 — Scene 03 Frame Plan QA Checklist
## Verification Against Master Production Rules

- [x] **Source of Truth Check**: Script, MP3, word-sync JSON, and verified trace match 100%.
- [x] **Monotonic Timestamps**: Verified from F0 to F2857.
- [x] **No Guessed Coordinates**: All derived from 104px slot width, 14px gap, 1166px total track width, centered on 1920x1080 canvas.
- [x] **No Guessed Frames**: All 65 semantic anchors mapped directly to sync word IDs.
- [x] **Algorithm Fidelity**:
  - Raw input: `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`
  - Pass 1 counts: `count[0] = 3`, `count[1] = 3`, `count[2] = 4`
  - Pass 2 rewrite:
    - indices 0..2 -> 0
    - indices 3..5 -> 1
    - indices 6..9 -> 2
  - Final array: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]`
- [x] **Visual Continuity**: Inherits array geometry directly from Scene 02 without jumping or re-creating elements.
- [x] **Zero Teleportation**: Smooth animated chalk highlight links scanning slots to counter increments.
- [x] **Deterministic Animation**: All transitions driven strictly by `useCurrentFrame()`.

**Status: PASS**
