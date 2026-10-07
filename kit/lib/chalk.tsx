import { AbsoluteFill } from "remotion";
import { theme } from "./theme";

/**
 * Chalk look foundation.
 *
 * - ChalkFilters: SVG filter defs that roughen edges (feTurbulence +
 *   feDisplacementMap) so text/shapes look like dragged chalk, plus a soft
 *   blur for the powdery edge. Mount ONCE per composition.
 * - ChalkboardBackground: the deep-green board surface with a faint chalk-dust
 *   grain and vignette.
 */

export const CHALK_FILTER_ID = "chalk-rough";
export const CHALK_FILTER_STRONG_ID = "chalk-rough-strong";

export const ChalkFilters: React.FC = () => (
  <svg width={0} height={0} style={{ position: "absolute" }}>
    <defs>
      {/* Subtle chalk edge for text */}
      <filter id={CHALK_FILTER_ID} x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.045"
          numOctaves={2}
          seed={7}
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale={3.2}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>

      {/* Stronger displacement for shapes/lines (more obviously hand-drawn) */}
      <filter
        id={CHALK_FILTER_STRONG_ID}
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.025"
          numOctaves={2}
          seed={11}
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale={2.5}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
);

/** Deep-green chalkboard surface — uniform color, faint dust grain only. */
export const ChalkboardBackground: React.FC = () => (
  <AbsoluteFill>
    {/* base green — uniform, no vignette so color weight is even everywhere */}
    <AbsoluteFill style={{ backgroundColor: theme.boardBg }} from={18} />
    {/* very faint, even chalk-dust grain (uniform across the whole board) */}
    <AbsoluteFill style={{ opacity: 0.04 }}>
      <svg width="100%" height="100%">
        <filter id="board-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={2}
            seed={3}
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#board-grain)" />
      </svg>
    </AbsoluteFill>
  </AbsoluteFill>
);
