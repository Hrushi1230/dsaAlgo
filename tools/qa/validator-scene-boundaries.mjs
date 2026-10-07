/**
 * tools/qa/validator-scene-boundaries.mjs — Validator B: Scene & Frame Boundaries
 *
 * For every validated scene manifest:
 * - startFrame >= 0
 * - endFrame > startFrame
 * - endFrame <= composition duration
 * - no negative duration
 * - no NaN / Infinity frames
 * - no semantic event outside scene duration
 * - final valid render frame is durationFrames - 1
 */

export function validateSceneManifest(manifest, compositionDuration, sceneName = "scene") {
  const errors = [];
  const warnings = [];

  if (!manifest || typeof manifest !== "object") {
    errors.push(`[${sceneName}] Scene manifest must be a non-null object.`);
    return { passed: false, errors, warnings };
  }

  const { startFrame, endFrame, events = [] } = manifest;

  if (typeof startFrame !== "number" || !Number.isFinite(startFrame)) {
    errors.push(`[${sceneName}] startFrame must be a finite number (received: ${startFrame}).`);
  } else if (startFrame < 0) {
    errors.push(`[${sceneName}] startFrame must be non-negative (received: ${startFrame}).`);
  }

  if (typeof endFrame !== "number" || !Number.isFinite(endFrame)) {
    errors.push(`[${sceneName}] endFrame must be a finite number (received: ${endFrame}).`);
  } else if (typeof startFrame === "number" && endFrame <= startFrame) {
    errors.push(`[${sceneName}] endFrame (${endFrame}) must be strictly greater than startFrame (${startFrame}).`);
  }

  if (typeof compositionDuration === "number" && typeof endFrame === "number") {
    if (endFrame > compositionDuration) {
      errors.push(`[${sceneName}] endFrame (${endFrame}) exceeds composition duration (${compositionDuration}).`);
    }
  }

  const duration = (typeof startFrame === "number" && typeof endFrame === "number") ? endFrame - startFrame : 0;
  if (duration <= 0) {
    errors.push(`[${sceneName}] Scene duration (${duration}F) must be positive.`);
  }

  // Validate events within scene boundaries
  if (Array.isArray(events)) {
    for (let i = 0; i < events.length; i++) {
      const evt = events[i];
      if (!evt || typeof evt.frame !== "number" || !Number.isFinite(evt.frame)) {
        errors.push(`[${sceneName}] Event ${i} has invalid frame (received: ${evt?.frame}).`);
        continue;
      }
      if (evt.frame < startFrame || evt.frame >= endFrame) {
        errors.push(`[${sceneName}] Event "${evt.id || i}" at frame ${evt.frame} is outside scene bounds [${startFrame}..${endFrame - 1}].`);
      }
    }
  }

  return {
    passed: errors.length === 0,
    errors,
    warnings,
  };
}

export async function runSceneBoundaryValidation() {
  const errors = [];
  const warnings = [];

  // Validate representative proof composition scenes
  const proofScenes = [
    { name: "Phase7Proof-Array", startFrame: 0, endFrame: 270, compDuration: 270 },
    { name: "Phase7Proof-Matrix", startFrame: 0, endFrame: 270, compDuration: 270 },
    { name: "Phase7Proof-LinkedList", startFrame: 0, endFrame: 270, compDuration: 270 },
    { name: "FoundationV2-Phase9-ArraySystem", startFrame: 0, endFrame: 360, compDuration: 360, events: [
      { id: "STATE_A_CORE", frame: 30 },
      { id: "STATE_B_READ_WRITE", frame: 90 },
      { id: "STATE_C_SWAP", frame: 150 },
      { id: "STATE_D_POINTERS", frame: 210 },
      { id: "STATE_E_PARTITION", frame: 270 },
      { id: "STATE_F_DENSE", frame: 330 },
    ] },
  ];

  for (const scene of proofScenes) {
    const res = validateSceneManifest(scene, scene.compDuration, scene.name);
    errors.push(...res.errors);
    warnings.push(...res.warnings);
  }

  return {
    name: "Scene & Frame Boundaries",
    passed: errors.length === 0,
    scenesChecked: proofScenes.length,
    errors,
    warnings,
  };
}
