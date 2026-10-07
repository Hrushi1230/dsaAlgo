# Q11 — Scene 04 Frame Plan QA Checklist
## Verification Against Master Production Rules

- [x] **Source of Truth Check**: Script, MP3, word-sync JSON, and verified code match 100%.
- [x] **Monotonic Timestamps**: Monotonically increasing from F0 to F2113.
- [x] **Exact Python Implementation**:
  - `def sortColors(nums):`
  - `count0 = count1 = count2 = 0`
  - `for x in nums: if x == 0: count0 += 1 ...`
  - `i = 0`
  - `for _ in range(count0): nums[i] = 0; i += 1 ...`
- [x] **No Fake IDE**: Authentic dark chalkboard code card matching course Design Bible.
- [x] **Active Line Focus**: Spoken words deterministically light up corresponding lines.
- [x] **Right-Side Semantic Evidence**: Compact 10-slot array and frequency counters confirm code logic.
- [x] **Deterministic Animation**: All styling and highlights driven strictly by `useCurrentFrame()`.

**Status: PASS**
