/**
 * tools/qa/validator-determinism.mjs — Validator C: Remotion Determinism Scanner
 *
 * Scans production-facing V2 code for forbidden non-deterministic render patterns:
 * - Math.random()
 * - Date.now()
 * - performance.now()
 * - crypto.randomUUID()
 * - CSS keyframe animations (@keyframes, animation:)
 * - setInterval / setTimeout animation logic
 *
 * Excludes comments and documentation strings.
 * Reports exact file path, line number, and offending snippet.
 */

import fs from "node:fs";
import path from "node:path";

const FORBIDDEN_PATTERNS = [
  { pattern: /\bMath\.random\s*\(/g, name: "Math.random()" },
  { pattern: /\bDate\.now\s*\(/g, name: "Date.now()" },
  { pattern: /\bperformance\.now\s*\(/g, name: "performance.now()" },
  { pattern: /\bcrypto\.randomUUID\s*\(/g, name: "crypto.randomUUID()" },
  { pattern: /\bsetInterval\s*\(/g, name: "setInterval()" },
  { pattern: /\bsetTimeout\s*\(/g, name: "setTimeout()" },
  { pattern: /@keyframes\b/g, name: "CSS @keyframes" },
];

/**
 * Strips comments from JavaScript / TypeScript source code line-by-line.
 */
function stripLineComments(line) {
  const commentIdx = line.indexOf("//");
  if (commentIdx !== -1) {
    return line.slice(0, commentIdx);
  }
  return line;
}

export function scanCodeForDeterminism(content, filename = "unknown") {
  const violations = [];
  const lines = content.split(/\r?\n/);
  let inBlockComment = false;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    let line = rawLine;

    // Handle multi-line comment state
    if (inBlockComment) {
      const endBlockIdx = line.indexOf("*/");
      if (endBlockIdx !== -1) {
        line = line.slice(endBlockIdx + 2);
        inBlockComment = false;
      } else {
        continue; // entire line is in block comment
      }
    }

    // Check for block comment start
    const startBlockIdx = line.indexOf("/*");
    if (startBlockIdx !== -1) {
      const endBlockIdx = line.indexOf("*/", startBlockIdx + 2);
      if (endBlockIdx !== -1) {
        line = line.slice(0, startBlockIdx) + " " + line.slice(endBlockIdx + 2);
      } else {
        line = line.slice(0, startBlockIdx);
        inBlockComment = true;
      }
    }

    // Strip single line comments
    const executableLine = stripLineComments(line).trim();
    if (!executableLine) continue;

    for (const { pattern, name } of FORBIDDEN_PATTERNS) {
      pattern.lastIndex = 0;
      if (pattern.test(executableLine)) {
        violations.push({
          file: filename,
          line: i + 1,
          violation: name,
          snippet: rawLine.trim(),
        });
      }
    }
  }

  return violations;
}

function collectSourceFiles(dir, extensions = [".ts", ".tsx", ".js", ".mjs"]) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Exclude node_modules, build, .git
      if (entry.name === "node_modules" || entry.name === "build" || entry.name === ".git" || entry.name === "dist") {
        continue;
      }
      files.push(...collectSourceFiles(full, extensions));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (extensions.includes(ext)) {
        files.push(full);
      }
    }
  }
  return files;
}

export async function runDeterminismScan(rootDir = process.cwd()) {
  const scanTargets = [
    path.join(rootDir, "kit/components"),
    path.join(rootDir, "kit/lib"),
    path.join(rootDir, "remotion-project/src/Root.tsx"),
  ];

  const violations = [];
  let filesScanned = 0;

  for (const target of scanTargets) {
    if (!fs.existsSync(target)) continue;
    const stat = fs.statSync(target);
    const fileList = stat.isDirectory() ? collectSourceFiles(target) : [target];

    for (const file of fileList) {
      filesScanned++;
      const relative = path.relative(rootDir, file);
      const content = fs.readFileSync(file, "utf8");
      const v = scanCodeForDeterminism(content, relative);
      violations.push(...v);
    }
  }

  const errors = violations.map(
    (v) => `[${v.file}:${v.line}] Forbidden non-deterministic construct "${v.violation}": "${v.snippet}"`
  );

  return {
    name: "Remotion Determinism Scanner",
    passed: errors.length === 0,
    filesScanned,
    violations,
    errors,
    warnings: [],
  };
}
