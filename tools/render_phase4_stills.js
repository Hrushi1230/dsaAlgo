const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../output/phase4-proof');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Critical review frames per Foundation V2 Phase 4 Motion Bible:
const studyFrames = [
  // Study A: FOCUS → COMPARE → HIT
  { frame: 12, label: 'studyA-f12-cause-focus' },
  { frame: 25, label: 'studyA-f25-reaction-hit' },
  { frame: 40, label: 'studyA-f40-hold' },
  { frame: 55, label: 'studyA-f55-settle' },

  // Study B: QUERY → MISS
  { frame: 74, label: 'studyB-f74-cause-query' },
  { frame: 90, label: 'studyB-f90-reaction-miss' },
  { frame: 105, label: 'studyB-f105-hold' },
  { frame: 116, label: 'studyB-f116-settle' },

  // Study C: POINTER_MOVE
  { frame: 135, label: 'studyC-f135-cause-decision' },
  { frame: 145, label: 'studyC-f145-hold-before-move' },
  { frame: 158, label: 'studyC-f158-mid-movement' },
  { frame: 172, label: 'studyC-f172-settle' },

  // Study D: SWAP (before lift, mid-cross, land, settled)
  { frame: 195, label: 'studyD-f195-before-lift' },
  { frame: 219, label: 'studyD-f219-mid-cross' },
  { frame: 231, label: 'studyD-f231-land' },
  { frame: 238, label: 'studyD-f238-settled' },

  // Study E: COUNT_UPDATE
  { frame: 254, label: 'studyE-f254-cause-eval' },
  { frame: 264, label: 'studyE-f264-reaction-accept' },
  { frame: 274, label: 'studyE-f274-count-roll' },
  { frame: 290, label: 'studyE-f290-settle' },

  // Study F: REJECT
  { frame: 315, label: 'studyF-f315-cause-condition' },
  { frame: 328, label: 'studyF-f328-reaction-dimming' },
  { frame: 342, label: 'studyF-f342-hold-dimmed' },
  { frame: 355, label: 'studyF-f355-settle' },

  // Study G: BREAK / Shatter
  { frame: 375, label: 'studyG-f375-cause-invariant-fail' },
  { frame: 387, label: 'studyG-f387-break-init' },
  { frame: 396, label: 'studyG-f396-fragments-falling' },
  { frame: 415, label: 'studyG-f415-settle-broken' },

  // Study H: TRANSITION
  { frame: 432, label: 'studyH-f432-outgoing-active' },
  { frame: 450, label: 'studyH-f450-mid-transition' },
  { frame: 472, label: 'studyH-f472-incoming-settled' },
];

const comp = 'FoundationV2-Phase4-MotionGrammar';
const remotionDir = path.join(__dirname, '../remotion-project');

console.log(`================================================================`);
console.log(`RENDERING ${studyFrames.length} VERIFICATION STILLS FOR ${comp}`);
console.log(`================================================================\n`);

let rendered = 0;
for (const { frame, label } of studyFrames) {
  const outFile = path.join(outDir, `${label}.png`);
  console.log(`Rendering frame ${frame} (${label})...`);
  try {
    execSync(`npx remotion still ${comp} "${outFile}" --frame=${frame} --log=warn`, {
      cwd: remotionDir,
      stdio: 'inherit',
    });
    rendered++;
  } catch (err) {
    console.error(`Failed at frame ${frame} (${label}):`, err.message);
    process.exit(1);
  }
}

console.log(`\nAll ${rendered} verification stills rendered successfully into ${outDir}!`);
