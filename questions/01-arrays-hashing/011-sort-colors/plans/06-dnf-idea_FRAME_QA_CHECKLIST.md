# Q11 — Scene 06 Frame Plan QA Checklist
## Verification Against Master Production Rules

- [x] **Source of Truth Check**: Script, MP3, word-sync JSON, and DNF law match 100%.
- [x] **Four Region Law**:
  - Region 0: `[0, low)` -> Confirmed 0s
  - Region 1: `[low, mid)` -> Confirmed 1s
  - Region Unknown: `[mid, high + 1)` -> Unknown
  - Region 2: `[high + 1, n)` -> Confirmed 2s
- [x] **DNF Pointer Law**:
  - 0-case: `swap(low, mid)`, `low++`, `mid++`
  - 1-case: `mid++` (no swap)
  - 2-case: `swap(mid, high)`, `high--`, **`MID STAYS`**
- [x] **Why Mid Stays Emphasized**: Dedicated spotlight explaining that the value arriving from `high` was unknown.
- [x] **Monotonic Timestamps**: Monotonically increasing from F0 to F3592.
- [x] **Deterministic Animation**: All state derived strictly from `useCurrentFrame()`.

**Status: PASS**
