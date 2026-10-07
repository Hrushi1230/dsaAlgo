# Scene 05 — Why In-Place is Harder & Deriving 4-Way Cycles: QA Checklist

- **Question:** 014 (Rotate Image - LeetCode 48)
- **Scene:** `05-why-extra-space`
- **Total Duration:** 2,522 frames (84.080s @ 30 FPS)
- **Audio File:** `public/audio/014/05-why-extra-space.mp3`

---

## Critical Frame Checkpoints

| Checkpoint # | Frame | Beat / Anchor | Description & Invariant to Verify |
|---|---|---|---|
| **CP-01** | `frame: 100` | Anchor 0 (Intro) | 5×5 Matrix centered on stage (X: 764, Y: 215). Clean top header. Ghost extra matrix on left fading. |
| **CP-02** | `frame: 240` | Anchor 1 (What if remove) | Ghost extra matrix gone. Question Card on left: `WHAT HAPPENS IF WE DIRECTLY MUTATE?`. |
| **CP-03** | `frame: 380` | Anchor 2 (Direct move experiment) | Left card: `DIRECT IN-PLACE EXPERIMENT`. Cell `(0, 0)` (`1`) highlighted in gold. |
| **CP-04** | `frame: 520` | Anchor 3 (First corner) | Both `(0, 0)` (`1`) and `(0, 4)` (`5`) illuminated. |
| **CP-05** | `frame: 620` | Anchor 4 (One to Five arrow) | Curved arrow draws from `(0, 0)` to `(0, 4)`. Target tag at `(0, 4)`. |
| **CP-06** | `frame: 780` | Anchor 5 (Overwrite disaster) | Cloned tile 1 lands on `(0, 4)`. Number 5 shatters/flashes red. Left card: `⚠️ OVERWRITE HAZARD! Value 5 DESTROYED!`. |
| **CP-07** | `frame: 980` | Anchor 6 (Still need five) | Ghost 5 appears with arrow pointing down to `(4, 4)` (`25`): `Where was 5 supposed to go? ➔ (4, 4)`. |
| **CP-08** | `frame: 1120` | Anchor 7 (Overwrite problem) | Left card: `THE OVERWRITE PROBLEM (READ-AFTER-WRITE CONFLICT)`. |
| **CP-09** | `frame: 1240` | Anchor 8 (Not independent) | Matrix resets to clean initial state. All 4 corners (`1`, `5`, `25`, `21`) illuminate cyan simultaneously. |
| **CP-10** | `frame: 1305` | Anchor 9 (They are connected) | Bounding square track connects the 4 corners: `(0,0) -> (0,4) -> (4,4) -> (4,0) -> (0,0)`. |
| **CP-11** | `frame: 1380` | Anchor 10 (Cycle 1 -> 5) | Top arrow glows gold: `1 ──► 5`. Right Card shows Step 1. |
| **CP-12** | `frame: 1470` | Anchor 11 (Cycle 5 -> 25) | Right arrow glows gold: `5 ──► 25`. Right Card shows Step 2. |
| **CP-13** | `frame: 1580` | Anchor 12 (Cycle 25 -> 21) | Bottom arrow glows gold: `25 ──► 21`. Right Card shows Step 3. |
| **CP-14** | `frame: 1720` | Anchor 13 (Cycle 21 -> 1) | Left arrow glows gold: `21 ──► 1`. Right Card shows Step 4. |
| **CP-15** | `frame: 1830` | Anchor 14 (Closed cycle) | Full loop glows emerald: `CLOSED 4-ELEMENT CYCLE 🔄`. Center badge. |
| **CP-16** | `frame: 1930` | Anchor 15 (Solution found) | Right card: `THE IN-PLACE SOLUTION DISCOVERED!`. |
| **CP-17** | `frame: 2100` | Anchor 16 (Rotate 4 together) | 4 corner values rotate simultaneously along the cycle track! |
| **CP-18** | `frame: 2300` | Anchor 17 (One temp variable) | Left Memory Box: `temp = matrix[0][0] · O(1) Extra Space!`. Bottom Card: `BREAKTHROUGH: O(1) AUXILIARY MEMORY ACHIEVED ✓`. |
| **CP-19** | `frame: 2470` | Anchor 18 (Trace handoff) | Right Card: `UP NEXT: METHOD 2 COMPLETE TRACE ──► Concentric Rings & 4-Way Cycles`. |

---

## Zero-Collision Invariant Checklist

- [ ] Top Bar: Clean header metadata only at Y: 36..105. Zero explanations on top.
- [ ] Center Matrix: Centered at X: 764, Y: 215..607.
- [ ] Left Card: X: 80..670, Y: 180..605 (Width: 590px, clearance of 94px to matrix).
- [ ] Right Card: X: 1210..1840, Y: 180..605 (Width: 630px, clearance of 54px to matrix).
- [ ] Bottom Card: Y: 655..765 (clearance of 48px below matrix, clearance of 195px above captions).
- [ ] Clearance above Captions: Y: 765 to Y: 960 is 195px.
- [ ] Deterministic Remotion React: No `Math.random()`, no CSS keyframes, zero wall-clock timing.
