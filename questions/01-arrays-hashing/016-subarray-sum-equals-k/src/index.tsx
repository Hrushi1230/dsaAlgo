import React from "react";
import { Composition, Folder } from "remotion";
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03Method1Trace } from "./Scene03Method1Trace";
import { Scene04Method1Code } from "./Scene04Method1Code";
import { Scene05OptimalIdea } from "./Scene05OptimalIdea";
import { Scene06Method2Trace } from "./Scene06Method2Trace";
import { Scene07Method2Code } from "./Scene07Method2Code";
import { Scene08CompareMistakesEdgeCases } from "./Scene08CompareMistakesEdgeCases";
import { Scene09Recap } from "./Scene09Recap";
import { MainVideo, TOTAL_MASTER_FRAMES } from "./MainVideo";

export const SubarraySumEqualsKFolder: React.FC = () => {
  return (
    <Folder name="016-Subarray-Sum-Equals-K">
      <Composition
        id="016-MasterVideo"
        component={MainVideo}
        durationInFrames={TOTAL_MASTER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="016-Scene01-Intro"
        component={Scene01Intro}
        durationInFrames={1316}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="016-Scene02-Understand"
        component={Scene02Understand}
        durationInFrames={3423}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="016-Scene03-Method1Trace"
        component={Scene03Method1Trace}
        durationInFrames={7627}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="016-Scene04-Method1Code"
        component={Scene04Method1Code}
        durationInFrames={2276}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="016-Scene05-OptimalIdea"
        component={Scene05OptimalIdea}
        durationInFrames={2305}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="016-Scene06-Method2Trace"
        component={Scene06Method2Trace}
        durationInFrames={6125}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="016-Scene07-Method2Code"
        component={Scene07Method2Code}
        durationInFrames={3094}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="016-Scene08-CompareMistakesEdgeCases"
        component={Scene08CompareMistakesEdgeCases}
        durationInFrames={1816}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="016-Scene09-Recap"
        component={Scene09Recap}
        durationInFrames={2320}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};

export {
  MainVideo,
  TOTAL_MASTER_FRAMES,
  Scene01Intro,
  Scene02Understand,
  Scene03Method1Trace,
  Scene04Method1Code,
  Scene05OptimalIdea,
  Scene06Method2Trace,
  Scene07Method2Code,
  Scene08CompareMistakesEdgeCases,
  Scene09Recap,
};
