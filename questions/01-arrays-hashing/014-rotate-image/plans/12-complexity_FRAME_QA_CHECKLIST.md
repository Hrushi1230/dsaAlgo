# Scene 12 QA Checklist: Method Comparison & Complexity Analysis (LeetCode 48)
## 014-rotate-image · Scene 12 (`12-complexity`)

- **Total Frames:** 1,219 (40.640s @ 30 FPS)
- **Audio File:** `public/audio/014/12-complexity.mp3`
- **Sync Words:** 75 words in `sync/12-complexity.json`
- **Authoritative Plan:** `plans/12-complexity_FRAMEWISE_PLAN.md`
- **Kit Purity:** 100% `@dsa/kit` components (`RoughBox`, `ChalkText`, `RoughLine`, `Captions`)

---

### Frame Checkpoint Verification List

| Checkpoint | Frame | Spoken Phrase / Anchor | Visual Invariant to Verify | Kit Component(s) | Status |
|---|---|---|---|---|---|
| **CP01** | `F0060` | "Let's compare. The three methods" | Top bar metadata + "ALGORITHMIC COMPARISON" title; blank table stage; zero spoilers | `ChalkText`, `RoughBox` | PASSED (verified still-014-s12-f60.png) |
| **CP02** | `F0180` | "Method one uses another n by n matrix" | Row 1 RoughBox outline sketches on; Method 1 description appears | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f180.png) |
| **CP03** | `F0300` | "Time, O of n squared" | Row 1 Time badge appears: `TIME: O(N²)` in cyan RoughBox | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f300.png) |
| **CP04** | `F0350` | "extra space, O of n squared" | Row 1 Space badge appears: `SPACE: O(N²) [FAILS IN-PLACE ✗]` in amber/red RoughBox | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f350.png) |
| **CP05** | `F0450` | "Method two rotates four connected values" | Row 2 RoughBox outline sketches on; Method 2 description appears | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f450.png) |
| **CP06** | `F0600` | "Time, O of n squared" | Row 2 Time badge appears: `TIME: O(N²)` in cyan RoughBox | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f600.png) |
| **CP07** | `F0660` | "extra space, O of one" | Row 2 Space badge appears: `SPACE: O(1) [IN-PLACE ✓]` in emerald green RoughBox | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f660.png) |
| **CP08** | `F0780` | "Method three transposes, then reverses" | Row 3 RoughBox outline sketches on; Method 3 description appears | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f780.png) |
| **CP09** | `F0940` | "Time, O of n squared" | Row 3 Time badge appears: `TIME: O(N²)` in cyan RoughBox | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f940.png) |
| **CP10** | `F1020` | "extra space, O of one" | Row 3 Space badge appears: `SPACE: O(1) [OPTIMAL & CLEANEST ✓]` in emerald green RoughBox | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f1020.png) |
| **CP11** | `F1120` | "both in-place methods have the required constant extra space" | Master Conclusion Banner appears at Y: 585 in emerald green RoughBox; Method 1 dims to 38% | `RoughBox`, `ChalkText` | PASSED (verified still-014-s12-f1120.png) |
| **CP12** | `F1200` | Exit hold before cut | All 3 rows + Conclusion banner visible; zero jitter; > 275px caption clearance | `Captions` | PASSED (verified still-014-s12-f1200.png) |

---

### Invariant Design Rules

1. **100% Kit Components:** Zero ad-hoc styled HTML container cards. All boundaries rendered by `RoughBox` (deterministic seed), all text rendered by `ChalkText`, all lines by `RoughLine`, all subtitles by `Captions`.
2. **Strict Zero Spoilers:** Every method row and Big-O badge appears strictly at its spoken timestamp. Future methods remain completely hidden until spoken.
3. **Vertical Layout & Clearance:**
   - Top Bar: Y: 36..100 (metadata only).
   - Table Header: Y: 130..170.
   - Row 1: Y: 195..310 (Height: 115px).
   - Row 2: Y: 325..440 (Height: 115px).
   - Row 3: Y: 455..570 (Height: 115px).
   - Conclusion Banner: Y: 585..680 (Height: 95px).
   - Captions: Y: 960..1010.
   - Vertical clearance above captions: Y: 960 - Y: 680 = **280px** (> 200px invariant).
