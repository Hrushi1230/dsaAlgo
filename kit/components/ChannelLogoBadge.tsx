/**
 * ChannelLogoBadge.tsx — Rotating Circular SVG Watermark Logo
 *
 * Features:
 *   - Continuous 360° rotating circular text: "CODE WITH ANIMATION · CWA 2026 · "
 *   - Pure white chalk line text & emblem with NO dark background fill (fill="none").
 *   - Appears across the FULL video in the bottom-right corner.
 */
import React from "react";
import { useCurrentFrame } from "remotion";
import { fonts } from "../lib/theme";

export interface ChannelLogoBadgeProps {
  size?: number;
  bottom?: number;
  right?: number;
  startFrame?: number;
}

export const ChannelLogoBadge: React.FC<ChannelLogoBadgeProps> = ({
  size = 110,
  bottom = 36,
  right = 44,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const relFrame = Math.max(0, frame - startFrame);

  // Rotation: 0.8 degrees per frame (360° in 450 frames / 15 seconds)
  const rotationDeg = (relFrame * 0.8) % 360;

  const radius = size / 2;
  const textRadius = radius - 14;

  return (
    <div
      style={{
        position: "absolute",
        bottom,
        right,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          overflow: "visible",
        }}
      >
        <defs>
          {/* Circular Text Path */}
          <path
            id="circleTextPathFull"
            d={`
              M ${radius}, ${radius}
              m -${textRadius}, 0
              a ${textRadius},${textRadius} 0 1,1 ${textRadius * 2},0
              a ${textRadius},${textRadius} 0 1,1 -${textRadius * 2},0
            `}
          />
        </defs>

        {/* Outer Chalk Circle Outline (NO background fill!) */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - 4}
          fill="none"
          stroke="rgba(244, 241, 232, 0.4)"
          strokeWidth="1.5"
        />

        {/* Inner Dashed Accent Ring (NO background fill!) */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - 22}
          fill="none"
          stroke="rgba(244, 241, 232, 0.3)"
          strokeWidth="1.2"
          strokeDasharray="4,4"
        />

        {/* ROTATING CIRCULAR TEXT LAYER — PURE WHITE */}
        <g
          style={{
            transformOrigin: `${radius}px ${radius}px`,
            transform: `rotate(${rotationDeg}deg)`,
          }}
        >
          <text
            fill="#FFFFFF"
            fontSize="10"
            fontFamily={fonts.mono}
            fontWeight="bold"
            letterSpacing="1.8"
            opacity={0.95}
          >
            <textPath href="#circleTextPathFull" startOffset="0%">
              CODE WITH ANIMATION &middot; CWA 2026 &middot;&nbsp;
            </textPath>
          </text>
        </g>

        {/* CENTER MONOGRAM EMBLEM — PURE WHITE & GOLD ACCENT */}
        <g>
          <text
            x={radius}
            y={radius + 6}
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily={fonts.hand}
            fontSize="22"
            fontWeight="bold"
          >
            CWA
          </text>
        </g>
      </svg>
    </div>
  );
};
