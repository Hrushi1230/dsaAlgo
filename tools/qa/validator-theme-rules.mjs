/**
 * tools/qa/validator-theme-rules.mjs — Validator I: Course Theme Rules
 *
 * Scans V2 kit and proof components for forbidden dark/charcoal UI surfaces.
 * Enforces course board identity:
 * - Authority board background: theme.boardBg (#18523d / rgba(24, 82, 61, ...))
 * - Forbids pitch black (#000000, "black") or charcoal (#121212, #1a1a1a, #1e1e1e)
 *   when used as structural panel backgrounds or card fills.
 *
 * Scoped strictly to V2 kit primitives and proof compositions.
 */

import fs from "node:fs";
import path from "node:path";

const FORBIDDEN_BG_PATTERNS = [
  { pattern: /backgroundColor\s*:\s*["'](#000000|black|#121212|#1a1a1a|#1e1e1e|#222222)["']/i, name: "Forbidden dark background" },
  { pattern: /background\s*:\s*["'](#000000|black|#121212|#1a1a1a|#1e1e1e|#222222)["']/i, name: "Forbidden dark background" },
  { pattern: /fill\s*:\s*["'](#000000|black|#121212|#1a1a1a|#1e1e1e)["']/i, name: "Forbidden dark fill" },
];

function scanFileForThemeViolations(content, filename) {
  const violations = [];
  const lines = content.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    // Ignore lines that are comments
    const trimmed = rawLine.trim();
    if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) {
      continue;
    }

    for (const { pattern, name } of FORBIDDEN_BG_PATTERNS) {
      pattern.lastIndex = 0;
      if (pattern.test(rawLine)) {
        violations.push({
          file: filename,
          line: i + 1,
          name,
          snippet: trimmed,
        });
      }
    }
  }

  return violations;
}

export async function runThemeRulesValidation(rootDir = process.cwd()) {
  const v2Targets = [
    path.join(rootDir, "kit/components"),
    path.join(rootDir, "kit/lib"),
    path.join(rootDir, "remotion-project/src/Root.tsx"),
  ];

  const violations = [];
  let filesScanned = 0;

  function collect(dir) {
    if (!fs.existsSync(dir)) return [];
    const stat = fs.statSync(dir);
    if (!stat.isDirectory()) return [dir];
    const results = [];
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, item.name);
      if (item.isDirectory() && item.name !== "node_modules" && item.name !== "build") {
        results.push(...collect(full));
      } else if (item.isFile() && (item.name.endsWith(".ts") || item.name.endsWith(".tsx"))) {
        results.push(full);
      }
    }
    return results;
  }

  for (const target of v2Targets) {
    const files = collect(target);
    for (const f of files) {
      filesScanned++;
      const content = fs.readFileSync(f, "utf8");
      const relative = path.relative(rootDir, f);
      violations.push(...scanFileForThemeViolations(content, relative));
    }
  }

  const errors = violations.map(
    (v) => `[${v.file}:${v.line}] THEME VIOLATION: ${v.name} in "${v.snippet}". Use theme.boardBg (#18523d) instead.`
  );

  return {
    name: "Course Theme Rules & Green Board Authority",
    passed: errors.length === 0,
    filesScanned,
    errors,
    warnings: [],
  };
}
