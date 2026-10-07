const { bundle } = require('@remotion/bundler');
const { renderStill, selectComposition } = require('@remotion/renderer');
const path = require('path');
const fs = require('fs');

async function main() {
  const remotionDir = path.join(__dirname, '../remotion-project');
  const entryPoint = path.join(remotionDir, 'src/index.ts');
  const outDir = path.join(__dirname, '../questions/01-arrays-hashing/014-rotate-image/output/inspect/scene13');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const frames = [
    25, 150, 250, 380, 520, 700, 880, 1150, 1450, 1620, 1835, 1865, 1920, 2060, 2180, 2245, 2380, 2490, 2620, 2700, 2790
  ];
  const compId = '014-Scene13-Recap';

  console.log('Bundling Remotion project once for Scene 13...');
  const bundleLocation = await bundle({
    entryPoint,
    webpackOverride: (config) => config,
  });
  console.log('Bundle created successfully at:', bundleLocation);

  console.log('Selecting composition:', compId);
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: compId,
  });

  console.log(`Rendering ${frames.length} verification stills to: ${outDir}`);
  for (const f of frames) {
    const outFile = path.join(outDir, `still-014-s13-f${f}.png`);
    process.stdout.write(`Rendering frame ${f}... `);
    let attempts = 0;
    while (attempts < 3) {
      try {
        await renderStill({
          composition,
          serveUrl: bundleLocation,
          output: outFile,
          frame: f,
          imageFormat: 'png',
        });
        console.log('DONE');
        break;
      } catch (e) {
        attempts++;
        if (attempts >= 3) {
          console.error(`Failed after 3 attempts on frame ${f}:`, e.message);
          throw e;
        }
        process.stdout.write(`(retry ${attempts}) `);
        await new Promise((r) => setTimeout(r, 800));
      }
    }
  }

  console.log('\nAll Scene 13 verification stills rendered successfully!');
}

main().catch((err) => {
  console.error('Render error:', err);
  process.exit(1);
});
