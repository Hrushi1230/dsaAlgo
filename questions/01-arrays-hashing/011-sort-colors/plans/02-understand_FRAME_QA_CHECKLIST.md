# Q11 — Sort Colors (LC 75)
# Scene 02 · Critical Frame QA Checklist

This checklist defines the authoritative verification frames for Scene 02 (`02-understand`).
Render PNG stills at each critical frame and inspect against these strict criteria before sign-off.

---

## Critical Review Frames

| Checkpoint | Frame | Timestamp | Semantic Anchor | Verification Criteria |
|---|---|---|---|---|
| **CP01** | **F100** | 3.33s | `S02_ARRAY` | Exactly 10 empty slots visible. Drawn left-to-right. No values, no indices, no spoilers. |
| **CP02** | **F330** | 11.00s | `S02_TWO` | Allowed value domain `{0, 1, 2}` fully revealed in domain rail above the dimmed array. Each token displays its color identity: 0 (Coral Red), 1 (Warm White), 2 (Ice Cyan/Blue). |
| **CP03** | **F580** | 19.33s | `S02_TWOS_LAST` | Generic target order `[ALL 0s FIRST (RED) \| THEN ALL 1s (WHITE) \| FINALLY ALL 2s (BLUE)]` visible with colored partition brackets. No testcase counts yet. |
| **CP04** | **F650** | 21.67s | `S02_MASTER_EXAMPLE` | Master input mode active. All 10 slots empty, index row `0 ... 9` visible beneath in monospace chalkDim. |
| **CP05** | **F790** | 26.33s | `S02_M4` | Master values written up to index 4: `[2, 1, 2, 0, 2, _, _, _, _, _]`. Values 2 are Ice Cyan, 1 is Warm White, 0 is Coral Red. Slots 5–9 completely empty. |
| **CP06** | **F905** | 30.17s | `S02_M9` | All 10 master values settled: `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]`. Chaotic color alternation visible. |
| **CP07** | **F1000** | 33.33s | `S02_T0B` | Target values writing in: slots 0, 1 = `0` (Coral Red). Slots 2–9 still empty in target rail. |
| **CP08** | **F1160** | 38.67s | `S02_T2D` | Target rail fully settled: `[0, 0, 0, 1, 1, 1, 2, 2, 2, 2]` beneath raw input showing clean Red, White, Blue blocks. No physical sorting animation. |
| **CP09** | **F1300** | 43.33s | `S02_SAME_ARRAY` | Condition 1 highlighted: `"IN-PLACE MODIFICATION — SAME ARRAY"`. Lock icon on `nums`; `new int[n]` struck through. |
| **CP10** | **F1440** | 48.00s | `S02_NO_BUILTIN` | Condition 2 highlighted: `sort(nums)` struck out with rough diagonal red chalk line and red `✖`. |
| **CP11** | **F1580** | 52.67s | `S02_ONE_PASS` | Follow-up sweep tracer path active across master array left-to-right. Label `"1. SINGLE PASS"`. No algorithm pointers. |
| **CP12** | **F1660** | 55.33s | `S02_CONST_SPACE` | Follow-up O(1) space footprint box active: `"2. O(1) EXTRA SPACE"`. |
| **CP13** | **F1770** | 59.00s | `S02_REAL_CHALLENGE` | Unified challenge statement: `"★ THE REAL CHALLENGE: 1-PASS IN-PLACE CLASSIFICATION ★"`. Comprehension hold. |
| **CP14** | **F2020** | 67.33s | `S02_THREE_VALUES` | Multi-ray mapping: 10 colored rays connect every array value to its respective domain bucket (0: Red, 1: White, 2: Blue). |
| **CP15** | **F2140** | 71.33s | `S02_MAIN_CLUE` | Observation banner: `"🔑 THE MAIN CLUE: FINITE DISCRETE DOMAIN (k = 3)"` with gold chalk underline. |
| **CP16** | **F2320** | 77.33s | `S02_SIMPLE_APPROACH` | Final handoff: Master array `[2, 1, 2, 0, 2, 1, 0, 1, 0, 2]` locked at center. `"APPROACH 1 · COUNTING"` teaser in top-right. Zero jitter into Scene 03. |

---

## Pedagogical & Visual Invariants

- [ ] **Frame 0 Continuity:** Seamless continuation from Scene 01. Compact Q11 header at top, empty center stage. No black frame.
- [ ] **Slot Geometry Stability:** Array slot positions and dimensions remain strictly fixed at all times (fixed-slot rule).
- [ ] **Value Reveal Truth:** Values appear strictly on their spoken words. Never pre-populated.
- [ ] **Semantic Color Mapping for Sort Colors:**
  - `0` = Coral Red (`#FF7675` / `theme.warn`)
  - `1` = Warm White (`#F8F6F0` / `theme.chalkText`)
  - `2` = Ice Cyan / Blue (`#5CE1E6` / `theme.cyan`)
- [ ] **Target Independence:** Target rail demonstrates requirement only. No physical sorting animation connecting input cards to target cards.
- [ ] **No Spoilers:** No counters (`count0`, `count1`), no pointers (`low`, `mid`, `high`), no DNF algorithm execution.
- [ ] **Caption Synchronization:** Captions are word-for-word synchronized with the audio track.
- [ ] **Handoff Provenance:** Frame 2323 matches the required opening state of Scene 03.
