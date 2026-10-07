# Scene 05 — Why Method 1 Wastes Space → Derive Method 2: Critical Frame QA Checklist
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `05-why-copy`  
**Total Duration:** 1754 frames @ 30fps (58.460s)  
**Total Critical Checkpoints:** 20 frames  

---

## Verification Frame Manifest

| Checkpoint | Frame | Timestamp | Visual Element & Invariant Checked | Status |
|:---|:---|:---|:---|:---|
| **CP01** | `F50` | 1.67s | 5x5 Matrix at center stage; interior zero at $(3, 3)$ beacon glow active | `[x] PASS` |
| **CP02** | `F200` | 6.67s | Question card "Do we really need to remember every number?" active | `[x] PASS` |
| **CP03** | `F330` | 11.00s | Decisive chalk stamp `❌ NO.` drops onto question card | `[x] PASS` |
| **CP04** | `F400` | 13.33s | "INFORMATION COMPRESSION PRINCIPLE" header illuminates with two fact slots | `[x] PASS` |
| **CP05** | `F480` | 16.00s | Fact 1 appears: "Which rows contained a zero?" + Row 3 highlighted | `[x] PASS` |
| **CP06** | `F550` | 18.33s | Fact 2 appears: "Which columns contained a zero?" + Col 3 highlighted | `[x] PASS` |
| **CP07** | `F630` | 21.00s | Summary badge "That is much less information than storing all 25 values!" active | `[x] PASS` |
| **CP08** | `F710` | 23.67s | Full matrix duplication concept dismissed in favor of markers | `[x] PASS` |
| **CP09** | `F790` | 26.33s | Vertical `rowZero` strip docks along left edge of matrix ($X: 136$) | `[x] PASS` |
| **CP10** | `F880` | 29.33s | Horizontal `colZero` strip docks along top edge of matrix ($Y: 150$) | `[x] PASS` |
| **CP11** | `F970` | 32.33s | Dotted ray extends leftward from cell $(3, 3)$ to `rowZero[3]` | `[x] PASS` |
| **CP12** | `F1050` | 35.00s | `rowZero[3]` transforms `F -> True` with golden flash | `[x] PASS` |
| **CP13** | `F1120` | 37.33s | Dotted ray extends upward from cell $(3, 3)$ to `colZero[3]` | `[x] PASS` |
| **CP14** | `F1190` | 39.67s | `colZero[3]` transforms `F -> True` with golden flash | `[x] PASS` |
| **CP15** | `F1260` | 42.00s | "Markers tell us exactly where zeroes must go" guidance card active | `[x] PASS` |
| **CP16** | `F1350` | 45.00s | Dual projection sweep lines from markers demonstrate zero assignment | `[x] PASS` |
| **CP17** | `F1450` | 48.33s | "SPACE COMPLEXITY BREAKTHROUGH" header active | `[x] PASS` |
| **CP18** | `F1510` | 50.33s | Method 1 cost card: $M \times N = 25$ integers ($O(M \times N)$) | `[x] PASS` |
| **CP19** | `F1620` | 54.00s | Method 2 cost card: $M + N = 10$ booleans ($O(M + N)$) + savings tag | `[x] PASS` |
| **CP20** | `F1730` | 57.67s | Up Next: Scene 06 (Method 2 Trace) handoff banner active | `[x] PASS` |

---

## Layout & Zero-Collision Checks

- [ ] Matrix ($X: 520, Y: 220$) + marker arrays stay within left half ($X: 430..834$).
- [ ] Context panel ($X: 980..1820, Y: 140..760$) stays within right half.
- [ ] Bottom clearance: panels stop at $Y: 760$, maintaining $\ge 220\text{px}$ buffer above captions ($Y: 980$).
- [ ] Header at $Y: 42..108$ has clear margin above arrays.
- [ ] Zero text clipping, zero CSS transitions/animations, 100% Remotion frame determinism.
