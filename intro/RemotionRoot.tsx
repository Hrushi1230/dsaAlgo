import React from "react";
import { Composition, registerRoot } from "remotion";
import { CodeWithAnimationIntro } from "./CodeWithAnimationIntro";
import { INTRO_CONSTANTS } from "./types";

/**
 * Remotion Root Entry Point for Code With Animation Intro
 * Configures the 10-second (300 frames @ 30fps) 1080p composition.
 */
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CodeWithAnimationIntro"
        component={CodeWithAnimationIntro}
        durationInFrames={INTRO_CONSTANTS.TOTAL_FRAMES}
        fps={INTRO_CONSTANTS.FPS}
        width={INTRO_CONSTANTS.WIDTH}
        height={INTRO_CONSTANTS.HEIGHT}
        defaultProps={{}}
      />
    </>
  );
};

registerRoot(RemotionRoot);

export default RemotionRoot;
