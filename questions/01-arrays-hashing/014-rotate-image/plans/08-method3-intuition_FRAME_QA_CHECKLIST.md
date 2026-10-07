# Scene 08: Method 2 Is Optimal ──► Derive Simpler Transformation View
## QA Verification Checklist (15 Checkpoints)

| Checkpoint | Target Frame | Verified Element & Invariant |
|:---:|:---:|:---|
| CP-01 | F100 | Method 2 optimal asymptotics badge (`O(N²) TIME · O(1) SPACE`); no failure implied. |
| CP-02 | F320 | Readability & index complexity issue stated; 7-index burden context set. |
| CP-03 | F440 | 1st index box (`first`) appears cleanly as spoken. |
| CP-04 | F470 | 2nd index box (`last`) appears cleanly as spoken. |
| CP-05 | F495 | 3rd index box (`offset`) appears cleanly as spoken. |
| CP-06 | F520 | 4th index box (`top`) appears cleanly as spoken. |
| CP-07 | F540 | 5th index box (`right`) appears cleanly as spoken. |
| CP-08 | F570 | 6th index box (`bottom`) appears cleanly as spoken. |
| CP-09 | F595 | 7th index box (`left`) appears cleanly; all 7 visible in single horizontal sequence. |
| CP-10 | F720 | All 7 boxes pulse amber (`theme.warn`) with interview cognitive burden warning. |
| CP-11 | F920 | Stage resets to mathematical first principles; source `(r, c)` box draws on. |
| CP-12 | F1150 | Destination `(c, n - 1 - r)` box appears in gold; full direct mapping visible. |
| CP-13 | F1380 | Architectural question banner: `CAN WE REACH (c, n - 1 - r) USING TWO SIMPLER STEPS?` |
| CP-14 | F1535 | Affirmation `YES!` with Step 1 `(r, c) ──► (c, r)` and Step 2 `(c, r) ──► (c, n - 1 - r)` revealed. |
| CP-15 | F1620 | Final handoff badge: `METHOD 3: TRANSPOSE + ROW REVERSAL ──► NEXT`. |
