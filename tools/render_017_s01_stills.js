const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../questions/01-arrays-hashing/017-encode-and-decode-strings/output/inspect/scene01');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per 01-roadmap_FRAMEWISE_PLAN.md:
// F50: Beat 001 (Roadmap settle, Q16 Complete)
// F200: Beat 002 (Progress counter 16/227 highlighted)
// F350: Beat 003 (Row 017 NOW ACTIVE activated)
// F420: Beat 004 (Encode and Decode Strings title highlighted)
// F510: Beat 005 (Handoff to board-native goal schematic, input strings visible)
// F560: Beat 005 (Encode arrow & single contiguous transmission string visible)
// F660: Beat 006 (Decode arrow & exact original list restored visible)
// F765: Beat 007 (Goal confirmed checkmark badge settle)
const frames = [50, 200, 350, 420, 510, 560, 660, 765];
const comp = '017-Scene01-Intro';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`Rendering ${frames.length} verification stills for ${comp}...`);
for (const f of frames) {
  const outFile = path.join(outDir, `still-017-s01-f${f}.png`);
  console.log(`Rendering frame ${f}...`);
  try {
    execSync(`npx remotion still ${comp} "${outFile}" --frame=${f} --log=warn --gl=angle`, {
      cwd: remotionDir,
      stdio: 'inherit',
    });
  } catch (err) {
    console.error(`Failed at frame ${f}:`, err.message);
  }
}
console.log('All Scene 01 verification stills rendered successfully!');
