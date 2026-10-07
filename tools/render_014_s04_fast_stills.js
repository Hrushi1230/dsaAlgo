const { bundle } = require('@remotion/bundler');
const { renderStill, selectComposition } = require('@remotion/renderer');
const path = require('path');
const fs = require('fs');

async function main() {
  const remotionDir = path.join(__dirname, '../remotion-project');
  const entryPoint = path.join(remotionDir, 'src/index.ts');
  const outDir = path.join(__dirname, '../questions/01-arrays-hashing/014-rotate-image/output/inspect/scene04');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const frames = [
    100, 320, 500, 700, 880, 1050, 1210, 1270, 1370, 1480, 1600, 1720, 1880
  ];
  const compId = '014-Scene04-Method1Code';

  console.log('Bundling Remotion project once for Scene 04...');
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
    const outFile = path.join(outDir, `still-014-s04-f${f}.png`);
    process.stdout.write(`Rendering frame ${f}... `);
    await renderStill({
      composition,
      serveUrl: bundleLocation,
      output: outFile,
      frame: f,
      imageFormat: 'png',
    });
    console.log('DONE');
  }

  console.log('\nAll Scene 04 verification stills rendered successfully!');
}

main().catch((err) => {
  console.error('Render error:', err);
  process.exit(1);
});
