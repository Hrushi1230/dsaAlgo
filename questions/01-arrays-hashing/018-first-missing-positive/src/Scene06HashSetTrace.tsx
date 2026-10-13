/**
 * Scene06HashSetTrace.tsx — Scene 06 · Full HashSet Trace
 * First Missing Positive (LeetCode 41) · Pattern 01 — Arrays & Hashing
 * 
 * Frame Duration: 1871 frames @ 30fps (62.37s) strictly from sync/06-hashset-trace.json
 */

import React, { useMemo } from "react";
import { Audio, staticFile, useCurrentFrame } from "remotion";
import { ChalkboardBackground, ChalkFilters } from "../../../../kit/lib/chalk";
import { theme, fonts, typographyMobile } from "../../../../kit/lib/theme";
import { Captions, CaptionWord } from "../../../../kit/components/Captions";
import { ArrayTrackV2 } from "../../../../kit/components";
import { BoardHeaderMobile } from "./BoardHeaderMobile";
import { ChalkVariablesPanel } from "../../../../kit/components/ChalkVariablesPanel";
import { ChalkReasoningPanel } from "../../../../kit/components/ChalkReasoningPanel";
import { RoughLine } from "../../../../kit/components/RoughLine";
import syncData from "../sync/06-hashset-trace.json";

export const SCENE06_TOTAL_FRAMES = 1871;

const captionWords: CaptionWord[] = (syncData.words || []).map((w: any) => ({
  word: w.word,
  start: w.start_ms / 1000,
  end: w.end_ms / 1000,
}));

export const Scene06HashSetTrace: React.FC = () => {
  const frame = useCurrentFrame();

  const rawNums = useMemo(() => [3, 4, -1, 1, 1, 10, 0, 2], []);

  // Compute state
  const {
    phase,
    activeArrayIdx,
    activeCandidate,
    setItems,
    duplicateHit,
    reasoningHeader,
    reasoningDetails,
    probeResult,
    isFinalReturn,
  } = useMemo(() => {
    let ph: "BUILD" | "PROBE" = "BUILD";
    let arrIdx = -1;
    let cand = -1;
    let items: number[] = [];
    let dup = false;
    let header = "INITIALIZING SET";
    let details = "num_set = set() starting empty.";
    let res: boolean | null = null;
    let finalRet = false;

    // Phase 1: Building Set (F0 - F1157)
    if (frame < 1157) {
      ph = "BUILD";
      if (frame < 61) {
        items = [];
        header = "EMPTY SET READY";
        details = "Prepare hash table for O(1) inserts.";
      } else if (frame < 156) {
        arrIdx = 0;
        header = "READING ARRAY";
        details = "Iterating nums from index 0 to 7.";
      } else if (frame < 244) {
        arrIdx = 0; items = [3];
        header = "INSERT nums[0]"; details = "Add 3 to set → {3}";
      } else if (frame < 326) {
        arrIdx = 1; items = [3, 4];
        header = "INSERT nums[1]"; details = "Add 4 to set → {3, 4}";
      } else if (frame < 445) {
        arrIdx = 2; items = [3, 4, -1];
        header = "INSERT nums[2]"; details = "Add -1 to set → {3, 4, -1}";
      } else if (frame < 533) {
        arrIdx = 3; items = [3, 4, -1, 1];
        header = "INSERT nums[3]"; details = "Add 1 to set → {3, 4, -1, 1}";
      } else if (frame < 596) {
        arrIdx = 4; items = [3, 4, -1, 1]; dup = true;
        header = "DUPLICATE KEY SEEN"; details = "nums[4] = 1. Value already in set!";
      } else if (frame < 716) {
        arrIdx = 4; items = [3, 4, -1, 1]; dup = true;
        header = "DUPLICATE COLLAPSED"; details = "Set stays unchanged: {3, 4, -1, 1}.";
      } else if (frame < 806) {
        arrIdx = 5; items = [3, 4, -1, 1, 10];
        header = "INSERT nums[5]"; details = "Add 10 to set → {3, 4, -1, 1, 10}";
      } else if (frame < 906) {
        arrIdx = 6; items = [3, 4, -1, 1, 10, 0];
        header = "INSERT nums[6]"; details = "Add 0 to set → {3, 4, -1, 1, 10, 0}";
      } else if (frame < 998) {
        arrIdx = 7; items = [3, 4, -1, 1, 10, 0, 2];
        header = "INSERT nums[7]"; details = "Add 2 to set → {3, 4, -1, 1, 10, 0, 2}";
      } else {
        arrIdx = -1; items = [3, 4, -1, 1, 10, 0, 2];
        header = "SET FULLY BUILT"; details = "All 8 elements scanned → 7 unique keys stored.";
      }
    }
    // Phase 2: Probing Candidates (F1157 - F1871)
    else {
      ph = "PROBE";
      items = [3, 4, -1, 1, 10, 0, 2];
      if (frame < 1281) {
        cand = 1; res = true;
        header = "PROBE CANDIDATE 1"; details = "1 in num_set? True! (O(1) hash check)";
      } else if (frame < 1360) {
        cand = 2; res = true;
        header = "PROBE CANDIDATE 2"; details = "2 in num_set? True! (O(1) hash check)";
      } else if (frame < 1439) {
        cand = 3; res = true;
        header = "PROBE CANDIDATE 3"; details = "3 in num_set? True! (O(1) hash check)";
      } else if (frame < 1518) {
        cand = 4; res = true;
        header = "PROBE CANDIDATE 4"; details = "4 in num_set? True! (O(1) hash check)";
      } else if (frame < 1604) {
        cand = 5; res = false;
        header = "PROBE CANDIDATE 5"; details = "5 in num_set? False! Gap detected!";
      } else if (frame < 1687) {
        cand = 5; res = false; finalRet = true;
        header = "FIRST MISSING FOUND!"; details = "1..4 exist; 5 is absent. Return 5!";
      } else {
        cand = 5; res = false; finalRet = true;
        header = "NO ARRAY RESCANS!"; details = "O(N) construction + O(N) probes → O(N) total runtime!";
      }
    }

    return {
      phase: ph,
      activeArrayIdx: arrIdx,
      activeCandidate: cand,
      setItems: items,
      duplicateHit: dup,
      reasoningHeader: header,
      reasoningDetails: details,
      probeResult: res,
      isFinalReturn: finalRet,
    };
  }, [frame]);

  // Array elements
  const elements = useMemo(() => {
    return rawNums.map((val, idx) => {
      const isCur = idx === activeArrayIdx;
      const isProbed = activeCandidate > 0 && val === activeCandidate;

      return {
        value: val,
        slotState: isCur
          ? duplicateHit
            ? ("rejected" as const)
            : ("current" as const)
          : isProbed
          ? ("confirmed" as const)
          : ("default" as const),
        valueState: isCur
          ? duplicateHit
            ? ("rejected" as const)
            : ("current" as const)
          : isProbed
          ? ("confirmed" as const)
          : ("default" as const),
        fill: isCur
          ? duplicateHit
            ? "rgba(255, 107, 107, 0.28)"
            : "rgba(255, 209, 102, 0.28)"
          : isProbed
          ? "rgba(60, 229, 167, 0.25)"
          : undefined,
        stroke: isCur
          ? duplicateHit
            ? theme.warn
            : theme.pivot
          : isProbed
          ? theme.good
          : undefined,
      };
    });
  }, [rawNums, activeArrayIdx, duplicateHit, activeCandidate]);

  // Variables panel
  const variables = useMemo(() => {
    if (phase === "BUILD") {
      return [
        { name: "Phase", value: "1: Set Construction", status: "pivot" as const },
        { name: "Array Index (i)", value: activeArrayIdx >= 0 ? activeArrayIdx : "-", status: "neutral" as const },
        { name: "Current Val", value: activeArrayIdx >= 0 ? rawNums[activeArrayIdx] : "-", status: duplicateHit ? ("warn" as const) : ("neutral" as const) },
        { name: "Set Size", value: `${setItems.length} unique`, status: "good" as const },
      ];
    }
    return [
      { name: "Phase", value: "2: Candidate Probing", status: "good" as const },
      { name: "candidate", value: isFinalReturn ? "5 (ANSWER)" : activeCandidate, status: isFinalReturn ? ("good" as const) : ("pivot" as const) },
      { name: "in num_set?", value: probeResult === true ? "True (Present)" : probeResult === false ? "False (Absent)" : "-", status: probeResult === true ? ("neutral" as const) : ("good" as const) },
      { name: "Lookup Cost", value: "O(1) Hash Probe", status: "good" as const },
    ];
  }, [phase, activeArrayIdx, rawNums, duplicateHit, setItems, activeCandidate, isFinalReturn, probeResult]);

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: theme.boardBg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ChalkboardBackground />
      <ChalkFilters />

      <Audio src={staticFile("audio/018/scence06.mp3")} />

      {/* Header */}
      <BoardHeaderMobile
        stepBadge="SCENE 06"
        stepTitle="HASHSET EXECUTION TRACE"
        algorithmName="Build Set + O(1) Candidate Probing"
        difficulty="HARD"
      />

      {/* Top: Source Array Track */}
      <div
        style={{
          position: "absolute",
          top: 175,
          left: 100,
          right: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            ...typographyMobile.mono,
            color: theme.chalkDim,
            marginBottom: 12,
            letterSpacing: 2,
          }}
        >
          INPUT ARRAY · nums = [3, 4, -1, 1, 1, 10, 0, 2]
        </div>

        <ArrayTrackV2
          elements={elements}
          pointers={
            activeArrayIdx >= 0
              ? [
                  {
                    id: "p-i",
                    index: activeArrayIdx,
                    label: `i = ${activeArrayIdx}`,
                    color: duplicateHit ? theme.warn : theme.pivot,
                  },
                ]
              : []
          }
          slotWidth={120}
          slotHeight={95}
          gap={22}
          showIndices
        />
      </div>

      {/* Bottom Area: Set View + Variables + Reasoning (Y: 440 to 860) */}
      <div
        style={{
          position: "absolute",
          top: 440,
          left: 100,
          right: 100,
          display: "flex",
          gap: 36,
        }}
      >
        {/* Left: Dynamic HashSet Visualizer (Board-Native) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Header with yellow hand underline */}
          <div style={{ position: "relative", marginBottom: 6 }}>
            <span
              style={{
                fontFamily: fonts.hand,
                fontSize: 38,
                fontWeight: 800,
                color: theme.pivot,
                letterSpacing: "0.02em",
              }}
            >
              num_set (Hash Table)
            </span>
            <div style={{ position: "absolute", left: 0, top: 42, pointerEvents: "none" }}>
              <RoughLine
                shape={{ kind: "line", x1: 0, y1: 4, x2: 300, y2: 6 }}
                width={320}
                height={16}
                stroke={theme.pivot}
                strokeWidth={3}
              />
            </div>
          </div>

          <div style={{ ...typographyMobile.note, color: theme.chalkDim }}>
            {setItems.length} elements stored
          </div>

          {/* Chips container directly on chalkboard */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              minHeight: 80,
              alignItems: "center",
            }}
          >
            {setItems.length === 0 ? (
              <span style={{ ...typographyMobile.note, color: theme.chalkDim, fontStyle: "italic" }}>
                Empty set (waiting for first insertion…)
              </span>
            ) : (
              setItems.map((val, i) => {
                const isProbed = phase === "PROBE" && val === activeCandidate;
                return (
                  <div
                    key={`${val}-${i}`}
                    style={{
                      fontFamily: '"SFMono-Regular", Consolas, monospace',
                      fontSize: 26,
                      fontWeight: 800,
                      padding: "6px 14px",
                      borderRadius: 8,
                      border: `2px solid ${isProbed ? theme.pivot : theme.good}`,
                      color: isProbed ? theme.pivot : theme.good,
                    }}
                  >
                    {val}
                  </div>
                );
              })
            )}
          </div>

          <div style={{ ...typographyMobile.note, color: theme.chalkBright, lineHeight: 1.4, marginTop: 4 }}>
            {phase === "BUILD"
              ? duplicateHit
                ? "Duplicate 1: Hash set disregards repeated elements!"
                : "Elements hashed for O(1) retrieval."
              : `Probing candidate = ${activeCandidate}: Instant O(1) membership check.`}
          </div>
        </div>

        {/* Vertical Divider 1 */}
        <div
          style={{
            width: 2.5,
            minHeight: 380,
            backgroundColor: "rgba(232, 228, 213, 0.35)",
            alignSelf: "stretch",
          }}
        />

        {/* Middle: State Variables */}
        <ChalkVariablesPanel
          title="TRACE VARIABLES"
          variables={variables}
          width={420}
        />

        {/* Vertical Divider 2 */}
        <div
          style={{
            width: 2.5,
            minHeight: 380,
            backgroundColor: "rgba(232, 228, 213, 0.35)",
            alignSelf: "stretch",
          }}
        />

        {/* Right: Reasoning Panel */}
        <div style={{ flex: 1.1 }}>
          <ChalkReasoningPanel
            title="STEP RATIONALE"
            currentAction={reasoningHeader}
            details={reasoningDetails}
            ruleKey={
              phase === "BUILD"
                ? "Insert each element into set; duplicates ignored"
                : "Probe 1, 2, 3... in set. First missing integer is answer!"
            }
            tone={isFinalReturn ? "good" : duplicateHit ? "warn" : "neutral"}
          />
        </div>
      </div>

      {/* Caption Safe Zone */}
      <Captions words={captionWords} />
    </div>
  );
};
