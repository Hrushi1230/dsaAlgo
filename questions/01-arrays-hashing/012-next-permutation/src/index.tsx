import React from "react";
import { Composition, Folder } from "remotion";
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03BruteTrace } from "./Scene03BruteTrace";
import { Scene04BruteCode } from "./Scene04BruteCode";
import { Scene05WhyBrute } from "./Scene05WhyBrute";
import { Scene06OptimalIdea } from "./Scene06OptimalIdea";
import { Scene07OptimalTrace } from "./Scene07OptimalTrace";
import { Scene08OptimalCode } from "./Scene08OptimalCode";
import { Scene09Complexity } from "./Scene09Complexity";
import { Scene10Recap } from "./Scene10Recap";
import { MainVideo, TOTAL_MASTER_FRAMES } from "./MainVideo";

export const NextPermutationFolder: React.FC = () => {
  return (
    <Folder name="012-Next-Permutation">
      <Composition
        id="012-MainVideo"
        component={MainVideo}
        durationInFrames={TOTAL_MASTER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene01-Intro"
        component={Scene01Intro}
        durationInFrames={767}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene02-Understand"
        component={Scene02Understand}
        durationInFrames={2075}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene03-BruteTrace"
        component={Scene03BruteTrace}
        durationInFrames={2275}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene04-BruteCode"
        component={Scene04BruteCode}
        durationInFrames={2114}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene05-WhyBrute"
        component={Scene05WhyBrute}
        durationInFrames={2268}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene06-OptimalIdea"
        component={Scene06OptimalIdea}
        durationInFrames={3252}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene07-OptimalTrace"
        component={Scene07OptimalTrace}
        durationInFrames={3520}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene08-OptimalCode"
        component={Scene08OptimalCode}
        durationInFrames={3014}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene09-Complexity"
        component={Scene09Complexity}
        durationInFrames={4156}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="012-Scene10-Recap"
        component={Scene10Recap}
        durationInFrames={2753}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};
