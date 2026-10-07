# Scene 04 — Method 1 Code Walkthrough: QA Checklist

- **Question:** 014 (Rotate Image - LeetCode 48)
- **Scene:** `04-method1-code`
- **Total Duration:** 1,937 frames (64.560s @ 30 FPS)
- **Audio File:** `public/audio/014/04-method1-code.mp3`

---

## Critical Frame Checkpoints

| Checkpoint # | Frame | Beat / Anchor | Description & Invariant to Verify |
|---|---|---|---|
| **CP-01** | `frame: 100` | Anchor 0 (Init) | `ChalkCodeEditorV2` entrance. Lines 1..4 visible. Line 4 highlighted: `result = [[0] * n ...]`. Right card shows memory allocation. |
| **CP-02** | `frame: 320` | Anchor 1 (Loops) | Lines 5 & 6 revealed (`for r in range(n): for c in range(n):`). Nested loops highlighted. |
| **CP-03** | `frame: 500` | Anchor 2 (Mapping) | Line 7 revealed with typewriter effect: `result[c][n - 1 - r] = matrix[r][c]`. Right card shows mapping. |
| **CP-04** | `frame: 700` | Anchor 3 (Proven) | Callout badge: `✓ PROVEN IN SCENE 02`. Line 7 glow. |
| **CP-05** | `frame: 880` | Anchor 4 (All Placed) | Result grid in right visualizer lights up green `[100% FILLED]`. |
| **CP-06** | `frame: 1050` | Anchor 5 (Copy Back) | Lines 9..11 revealed (`for r... for c... matrix[r][c] = result[r][c]`). LeetCode in-place return contract highlighted. |
| **CP-07** | `frame: 1210` | Anchor 6 (Complexity Intro) | Right card shifts to `COMPLEXITY ANALYSIS`. Clean transitions. |
| **CP-08** | `frame: 1270` | Anchor 7 (Time Cells) | Operations breakdown: $N \times N$ cell iterations highlighted. |
| **CP-09** | `frame: 1370` | Anchor 8 (Time O(N^2)) | Time Complexity Badge pops green: `TIME: O(N²) · OPTIMAL`. |
| **CP-10** | `frame: 1480` | Anchor 9 (Space Cells) | Line 4 flashes in amber: `result[N][N]` auxiliary allocation pointed out. |
| **CP-11** | `frame: 1600` | Anchor 10 (Space O(N^2)) | Space Complexity Badge pops red: `SPACE: O(N²) · NOT OPTIMAL`. |
| **CP-12** | `frame: 1720` | Anchor 11 (Constraint) | Constraint banner: `⚠️ LEETCODE 48: DO NOT ALLOCATE ANOTHER 2D MATRIX`. |
| **CP-13** | `frame: 1880` | Anchor 12 (Handoff) | Red diagonal strikethrough over Line 4. `UP NEXT: METHOD 2 ──► FOUR-WAY IN-PLACE SWAP`. |

---

## Zero-Collision Invariant Checklist

- [ ] Top Bar: Clean header metadata only at Y: 36..105. Zero explanations on top.
- [ ] Code Editor: X: 80..1060, Y: 150..730. Width: 980px.
- [ ] Right Cards: X: 1100..1840, Y: 150..730. Width: 740px.
- [ ] Gap between Editor and Right Cards: 40px (clean separation).
- [ ] Clearance above Captions: Gap from Y: 730 to Y: 960 is 230px (massive breathing room).
- [ ] Text wrapping: No clipped text, no overflow, no truncated badges.
- [ ] Deterministic Remotion React: No `Math.random()`, no CSS keyframes, zero wall-clock timing.
