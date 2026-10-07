"""
build_s10_plan.py — Updates QA checklist with exact anchor frames
"""
import json
from pathlib import Path

def main():
    checklist_lines = [
        "# Scene 10 — Critical Frame QA Checklist",
        "**Question 013: Set Matrix Zeroes (LeetCode 73)**  ",
        "**Scene:** `10-optimal-trace` (Method 3 Full Verified Dry-Run Trace)  ",
        "**Total Duration:** 7061 frames @ 30fps (235.360s)  ",
        "",
        "## Critical Review Frames",
        "",
        "| Frame | Phase | Description | Invariant to Verify |",
        "|---|---|---|---|",
        "| **F30** | Phase 1 | Original untouched 5x5 matrix | Centered at X=960, Y=270..690. All 3 original zeros visible at (0,2), (2,0), (3,3). No flags yet. |",
        "| **F260** | Phase 1 | Row 0 zero discovered at (0,2) | Cell (0,2) highlighted in gold scan; scan beam on Row 0. |",
        "| **F340** | Phase 1 | `firstRowZero = true` | Right-side badge appears at (X: 1250, Y: 310) with glowing green border. |",
        "| **F640** | Phase 1 | Col 0 zero discovered at (2,0) | Cell (2,0) highlighted in gold scan down Col 0. |",
        "| **F715** | Phase 1 | `firstColZero = true` | Right-side badge appears at (X: 1250, Y: 400) with glowing green border. |",
        "| **F780** | Phase 1 | Both flags protected | Both boolean badges active; halo effect; callout visible. |",
        "| **F880** | Phase 2 | Boundary role transformation | Cyan `ROW MARKERS` on left, Gold `COLUMN MARKERS` on top. |",
        "| **F960** | Phase 2 | Interior scan begins | Interior $4 \\times 4$ box outlined; Row 1 scanned clean. |",
        "| **F1450** | Phase 2 | Row 2 naturally marked | Cell (2,0) highlighted as already marked; interior clean. |",
        "| **F1780** | Phase 2 | Interior zero at (3,3) discovered | Cell (3,3) pulses with warning radar ripple; hero focus. |",
        "| **F2020** | Phase 2 | Row marker write: `matrix[3][0]=0` | Cyan ray from (3,3) to (3,0); 16 morphs into 0. |",
        "| **F2190** | Phase 2 | Col marker write: `matrix[0][3]=0` | Gold ray from (3,3) to (0,3); 4 morphs into 0. |",
        "| **F2740** | Phase 2 | Discovery pass complete | Intermediate marker matrix locked; Row 4 clean. |",
        "| **F3050** | Phase 3 | Boundary reading: Col 0 | Col 0 cells inspected as row markers. |",
        "| **F3560** | Phase 3 | Boundary reading: Row 0 | Row 0 cells inspected as column markers. |",
        "| **F3850** | Phase 4 | Inward application pass starts | Inward arrows point into interior. |",
        "| **F4300** | Phase 4 | Row 1 interior updated | Cell (1,2) becomes 0; (1,3) becomes 0; 7 and 10 stay. |",
        "| **F4850** | Phase 4 | Row 2 interior zeroed | All interior cells in row 2 become 0. |",
        "| **F5000** | Phase 4 | Row 3 interior zeroed | All interior cells in row 3 become 0. |",
        "| **F5500** | Phase 4 | Row 4 interior updated | (4,2) and (4,3) become 0; 22 and 25 stay. |",
        "| **F5850** | Phase 5 | Marker job retired | Boundary role tags dissolve; ready for finalization. |",
        "| **F6050** | Phase 5 | Row 0 finalized | Row 0 all flips to 0 via `firstRowZero = true`. |",
        "| **F6260** | Phase 5 | Col 0 finalized | Col 0 all flips to 0 via `firstColZero = true`. |",
        "| **F6650** | Phase 5 | Final matrix read-through | Complete verified master matrix displayed. |",
        "| **F7035** | Phase 5 | Outro triumph banner | `O(1) EXTRA SPACE` celebratory banner centered. |",
        "",
        "## QA Sign-Off Checklist",
        "- [ ] No elements cut through array or matrix borders.",
        "- [ ] Captions at Y: 960 have at least 100px vertical buffer to elements above.",
        "- [ ] All cell value transitions match the verified algorithm trace.",
        "- [ ] Remotion frame-derived determinism: 100% pure functions of `useCurrentFrame()`.",
        "- [ ] Audio synchronization verified against `10-optimal-trace.json`."
    ]

    out_checklist = Path("questions/01-arrays-hashing/013-set-matrix-zeroes/plans/10-optimal-trace_FRAME_QA_CHECKLIST.md")
    with open(out_checklist, "w", encoding="utf-8") as f:
        f.write("\n".join(checklist_lines))
    print("Updated", out_checklist)

if __name__ == "__main__":
    main()
