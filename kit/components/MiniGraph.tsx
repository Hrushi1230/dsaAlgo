import React, { useMemo } from "react";

import { RoughLine } from "./RoughLine";
import { RoughCurve } from "./RoughCurve";

import { theme } from "../lib/theme";
import { fonts } from "../lib/theme";

function generatePoints(
  type: "nlogn" | "n2" | "n" | "1",
  width: number,
  height: number
): [number, number][] {
  const points: [number, number][] = [];
  const steps = 30;
  
  for (let i = 0; i <= steps; i++) {
    const t = i / steps; // 0 to 1
    const x = t * width;
    let y = 0;
    
    if (type === "nlogn") {
      const val = (t * Math.log2(t * 10 + 1)) / (1 * Math.log2(10 + 1));
      y = height - (val * height * 0.5); 
    } else if (type === "n2") {
      y = height - (t * t * height * 0.9);
    } else if (type === "n") {
      y = height - (t * height * 0.7);
    } else if (type === "1") {
      y = height - 10;
    }
    
    y = Math.max(0, Math.min(height, y));
    points.push([x, y]);
  }
  
  return points;
}

export const MiniGraph: React.FC<{
  width: number;
  height: number;
  frame: number;
  startFrame: number;
  sortType: "heap" | "quick" | "merge";
}> = ({ width, height, frame, startFrame, sortType }) => {
  const drawAxes = startFrame;
  const drawPrimary = startFrame + 20;   
  const drawSecondary = startFrame + 50; 

  const nlognPoints = useMemo(() => generatePoints("nlogn", width, height), [width, height]);
  const n2Points = useMemo(() => generatePoints("n2", width, height), [width, height]);
  const nPoints = useMemo(() => generatePoints("n", width, height), [width, height]);
  const onePoints = useMemo(() => generatePoints("1", width, height), [width, height]);

  return (
    <div style={{ position: "relative", width, height, overflow: "visible", opacity: 0.9 }}>
      {/* Axes */}
      {frame >= drawAxes && (
        <>
          <div style={{ position: "absolute", inset: 0, overflow: "visible" }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: height, x2: 0, y2: 0 }}
              width={width + 30}
              height={height + 30}
              startFrame={drawAxes}
              durationInFrames={20}
              stroke={theme.chalkDim}
              strokeWidth={4}
            />
          </div>
          <div style={{ position: "absolute", inset: 0, overflow: "visible" }}>
            <RoughLine
              shape={{ kind: "line", x1: 0, y1: height, x2: width, y2: height }}
              width={width + 30}
              height={height + 30}
              startFrame={drawAxes + 10}
              durationInFrames={20}
              stroke={theme.chalkDim}
              strokeWidth={4}
            />
          </div>
        </>
      )}

      {/* Primary Curve (Time Avg) - O(N log N) for all */}
      {frame >= drawPrimary && (
        <>
          <div style={{ position: "absolute", inset: 0, overflow: "visible" }}>
            <RoughCurve points={nlognPoints} width={width} height={height} startFrame={drawPrimary} durationInFrames={40} stroke={theme.good} strokeWidth={8} seed={111} />
          </div>
          <div style={{ position: "absolute", left: width - 110, top: nlognPoints[nlognPoints.length-1][1] - 15, whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: fonts.hand, color: theme.good, fontSize: 24, fontWeight: "bold" }}>O(N log N)</span>
          </div>
        </>
      )}

      {/* Secondary Curves */}
      {frame >= drawSecondary && sortType === "quick" && (
        <>
          <div style={{ position: "absolute", inset: 0, overflow: "visible" }}>
            <RoughCurve points={n2Points} width={width} height={height} startFrame={drawSecondary} durationInFrames={40} stroke={theme.bigger} strokeWidth={8} seed={222} />
          </div>
          <div style={{ position: "absolute", left: width / 2 - 60, top: 20, whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: fonts.hand, color: theme.bigger, fontSize: 24, fontWeight: "bold" }}>Worst: O(N²)</span>
          </div>
        </>
      )}

      {frame >= drawSecondary && sortType === "heap" && (
        <>
          <div style={{ position: "absolute", inset: 0, overflow: "visible" }}>
            <RoughCurve points={onePoints} width={width} height={height} startFrame={drawSecondary} durationInFrames={40} stroke={theme.pivot} strokeWidth={6} seed={333} />
          </div>
          <div style={{ position: "absolute", left: width / 2 - 50, top: height - 50, whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: fonts.hand, color: theme.pivot, fontSize: 24, fontWeight: "bold" }}>Space: O(1)</span>
          </div>
        </>
      )}

      {frame >= drawSecondary && sortType === "merge" && (
        <>
          <div style={{ position: "absolute", inset: 0, overflow: "visible" }}>
            <RoughCurve points={nPoints} width={width} height={height} startFrame={drawSecondary} durationInFrames={40} stroke={theme.chalkText} strokeWidth={6} seed={444} />
          </div>
          <div style={{ position: "absolute", left: width - 100, top: nPoints[nPoints.length-1][1] - 40, whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: fonts.hand, color: theme.chalkText, fontSize: 24, fontWeight: "bold" }}>Space: O(N)</span>
          </div>
        </>
      )}
    </div>
  );
};
