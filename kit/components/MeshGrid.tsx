import React, { useMemo } from "react";
import rough from "roughjs";
import { theme, fonts } from "../lib/theme";
import { CHALK_FILTER_STRONG_ID } from "../lib/chalk";

export interface CellInfo {
  row: number;
  col: number;
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

export interface MeshGridProps {
  /** Number of rows */
  rows: number;
  /** Number of columns */
  cols: number;
  /** Width of each individual cell in pixels */
  cellWidth: number;
  /** Height of each individual cell in pixels */
  cellHeight: number;
  /** Grid stroke color (default: theme.chalkText) */
  stroke?: string;
  /** Grid stroke width for internal cell dividers (default: 2) */
  strokeWidth?: number;
  /** Outer boundary stroke width (default: 3) */
  outerStrokeWidth?: number;
  /** Optional subgrid row interval (e.g. 3 for 9×9 Sudoku blocks) */
  subgridRows?: number;
  /** Optional subgrid column interval (e.g. 3 for 9×9 Sudoku blocks) */
  subgridCols?: number;
  /** Stroke width for subgrid boundary dividers (default: 4) */
  subgridStrokeWidth?: number;
  /** Stroke color for subgrid boundary dividers (default: stroke) */
  subgridStroke?: string;
  /** Deterministic seed for rough generation */
  seed?: number;
  /** Show column coordinate rulers above grid */
  showColRulers?: boolean;
  /** Show row coordinate rulers to the left of grid */
  showRowRulers?: boolean;
  /** Custom column labels (defaults to 0, 1, 2, ...) */
  colLabels?: (string | number)[];
  /** Custom row labels (defaults to 0, 1, 2, ...) */
  rowLabels?: (string | number)[];
  /** Color for coordinate rulers */
  rulerColor?: string;
  /** Font size for coordinate rulers */
  rulerFontSize?: number;
  /** Render prop called for each cell */
  renderCell?: (info: CellInfo) => React.ReactNode;
  /** Filter id or url for chalk texture */
  filter?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * MeshGrid — High-performance, single-SVG batched grid primitive.
 *
 * Replaces dozens of individual RoughBox tags with a single unified,
 * deterministic grid outline. Supports:
 * - 4×4 up to 9×9 matrices, 2D DP grids, and Sudoku partitions.
 * - Subgrid block boundaries (e.g. 3×3 blocks in Sudoku).
 * - Integrated row and column coordinate rulers.
 * - Zero dark dashboard panels (direct on theme.boardBg).
 */
export const MeshGrid: React.FC<MeshGridProps> = ({
  rows,
  cols,
  cellWidth,
  cellHeight,
  stroke = theme.chalkText,
  strokeWidth = 2,
  outerStrokeWidth = 3,
  subgridRows,
  subgridCols,
  subgridStrokeWidth = 4,
  subgridStroke,
  seed = 1,
  showColRulers = false,
  showRowRulers = false,
  colLabels,
  rowLabels,
  rulerColor = theme.cyan,
  rulerFontSize = 22,
  renderCell,
  filter = "url(#chalk-stroke)",
  className,
  style,
}) => {
  const totalWidth = cols * cellWidth;
  const totalHeight = rows * cellHeight;
  const effectiveSubgridStroke = subgridStroke ?? stroke;

  // Generate all grid lines into a single batched path collection
  const gridPaths = useMemo(() => {
    const gen = rough.generator();
    const paths: { d: string; stroke: string; strokeWidth: number }[] = [];

    // 1. Outer boundary rectangle
    const outerRect = gen.rectangle(0, 0, totalWidth, totalHeight, {
      roughness: 1.2,
      bowing: 1.0,
      stroke,
      strokeWidth: outerStrokeWidth,
      seed,
    });
    for (const p of gen.toPaths(outerRect)) {
      paths.push({
        d: p.d,
        stroke: p.stroke ?? stroke,
        strokeWidth: p.strokeWidth ?? outerStrokeWidth,
      });
    }

    // 2. Internal horizontal divider lines
    for (let r = 1; r < rows; r++) {
      const isSubgrid = subgridRows !== undefined && r % subgridRows === 0;
      const y = r * cellHeight;
      const lineStroke = isSubgrid ? effectiveSubgridStroke : stroke;
      const lineWeight = isSubgrid ? subgridStrokeWidth : strokeWidth;

      const lineShape = gen.line(0, y, totalWidth, y, {
        roughness: 1.0,
        bowing: 0.8,
        stroke: lineStroke,
        strokeWidth: lineWeight,
        seed: seed + r * 7,
      });
      for (const p of gen.toPaths(lineShape)) {
        paths.push({ d: p.d, stroke: lineStroke, strokeWidth: lineWeight });
      }
    }

    // 3. Internal vertical divider lines
    for (let c = 1; c < cols; c++) {
      const isSubgrid = subgridCols !== undefined && c % subgridCols === 0;
      const x = c * cellWidth;
      const lineStroke = isSubgrid ? effectiveSubgridStroke : stroke;
      const lineWeight = isSubgrid ? subgridStrokeWidth : strokeWidth;

      const lineShape = gen.line(x, 0, x, totalHeight, {
        roughness: 1.0,
        bowing: 0.8,
        stroke: lineStroke,
        strokeWidth: lineWeight,
        seed: seed + 50 + c * 7,
      });
      for (const p of gen.toPaths(lineShape)) {
        paths.push({ d: p.d, stroke: lineStroke, strokeWidth: lineWeight });
      }
    }

    return paths;
  }, [
    rows,
    cols,
    cellWidth,
    cellHeight,
    totalWidth,
    totalHeight,
    stroke,
    strokeWidth,
    outerStrokeWidth,
    subgridRows,
    subgridCols,
    subgridStrokeWidth,
    effectiveSubgridStroke,
    seed,
  ]);

  // Precompute cell infos
  const cells = useMemo(() => {
    const list: CellInfo[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * cellWidth;
        const y = r * cellHeight;
        list.push({
          row: r,
          col: c,
          x,
          y,
          width: cellWidth,
          height: cellHeight,
          centerX: x + cellWidth / 2,
          centerY: y + cellHeight / 2,
        });
      }
    }
    return list;
  }, [rows, cols, cellWidth, cellHeight]);

  const rulerWidth = showRowRulers ? 80 : 0;

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...style,
      }}
    >
      {/* 1. TOP COLUMN RULERS */}
      {showColRulers && (
        <div
          style={{
            display: "flex",
            marginLeft: rulerWidth,
            marginBottom: 10,
          }}
        >
          {Array.from({ length: cols }).map((_, c) => {
            const label = colLabels ? colLabels[c] : `col [${c}]`;
            return (
              <div
                key={c}
                style={{
                  width: cellWidth,
                  textAlign: "center",
                  fontFamily: fonts.mono,
                  fontSize: rulerFontSize,
                  color: rulerColor,
                  fontWeight: 700,
                  userSelect: "none",
                }}
              >
                {label}
              </div>
            );
          })}
        </div>
      )}

      {/* 2. MAIN GRID CONTAINER (ROW RULERS + GRID CANVAS) */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* Row Rulers */}
        {showRowRulers && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: rulerWidth - 16,
              marginRight: 16,
            }}
          >
            {Array.from({ length: rows }).map((_, r) => {
              const label = rowLabels ? rowLabels[r] : `row [${r}]`;
              return (
                <div
                  key={r}
                  style={{
                    height: cellHeight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    fontFamily: fonts.mono,
                    fontSize: rulerFontSize,
                    color: rulerColor,
                    fontWeight: 700,
                    userSelect: "none",
                  }}
                >
                  {label}
                </div>
              );
            })}
          </div>
        )}

        {/* Grid Canvas */}
        <div
          style={{
            position: "relative",
            width: totalWidth,
            height: totalHeight,
          }}
        >
          {/* Batched single SVG for all grid lines */}
          <svg
            width={totalWidth}
            height={totalHeight}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              overflow: "visible",
            }}
          >
            {gridPaths.map((p, idx) => (
              <path
                key={idx}
                d={p.d}
                stroke={p.stroke}
                strokeWidth={p.strokeWidth}
                fill="none"
                strokeLinecap="round"
                filter={filter}
              />
            ))}
          </svg>

          {/* Cell contents rendered on top */}
          {renderCell && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "auto",
              }}
            >
              {cells.map((cell) => (
                <div
                  key={`${cell.row}-${cell.col}`}
                  style={{
                    position: "absolute",
                    left: cell.x,
                    top: cell.y,
                    width: cell.width,
                    height: cell.height,
                  }}
                >
                  {renderCell(cell)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
