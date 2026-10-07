# Q15 Phase 9 V3 — Post-Audio Sync → Exact Frames

This package intentionally contains **no guessed seconds or frames**.

After the user creates the final ElevenLabs audio and word timestamps:

1. Verify audio text matches `Q15_Spiral_Matrix_FINAL_STUDENT_OPTIMIZED.md`.
2. Resolve every phrase in `Q15_PHASE9_SYNC_ANCHORS_V3.json`.
3. If any phrase cannot resolve uniquely, stop with `BLOCKED — AMBIGUOUS SYNC ANCHOR`.
4. Use the actual repository `audioSync.ts` semantics (`Math.round(word.start * 30)` / `Math.round(word.end * 30)`) unless the repository has changed.
5. For code typing, derive character frames only from the resolved narration/pause window assigned in the V3 beat. If canonical character-by-character typing cannot fit before the next semantic anchor, stop with `BLOCKED — CODE TYPING WINDOW TOO SHORT`; never reorder target code or invent a faster duration.
6. For compressed trace spans, never jump endpoints:
   - start cell = spoken start endpoint when one is spoken; otherwise use the already-current verified start state;
   - end cell = spoken end endpoint and must not be reached early;
   - intermediate cells advance monotonically in exact algorithm order inside the resolved interval;
   - source cells remain fixed; output copies/history update in order;
   - after sync, let `A` be the first usable frame after the start state and `B` the frame where the spoken end endpoint begins. Distribute required intermediate arrivals deterministically across `[A,B)` with monotonic rounded slots. If distinct required states cannot fit, stop with `BLOCKED — TRACE SPAN TOO SHORT`; do not visually skip cells.
7. Silent code boilerplate is allowed only when the concept was already explicitly taught earlier and the line is needed to preserve canonical target-code order. It must remain visually subordinate and cannot introduce new semantics.
8. Do not add silent future-state animation just because a pause exists; pauses may only hold or complete the current semantic job.
9. Re-audit each scene before implementation.

No V2 sync anchor may be used.
