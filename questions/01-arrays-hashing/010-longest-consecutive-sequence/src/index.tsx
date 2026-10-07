import React from "react";
import { Composition, Folder } from "remotion";
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03TraceBrute } from "./Scene03TraceBrute";
import { Scene04CodeBrute } from "./Scene04CodeBrute";
import { Scene05WhyBrute } from "./Scene05WhyBrute";
import { Scene06TraceBetter } from "./Scene06TraceBetter";
import { Scene07CodeBetter } from "./Scene07CodeBetter";
import { Scene08WhyBetter } from "./Scene08WhyBetter";
import { Scene09OptimalIdea } from "./Scene09OptimalIdea";
import { Scene10TraceOptimal } from "./Scene10TraceOptimal";
import { Scene11CodeOptimal } from "./Scene11CodeOptimal";
import { Scene12Complexity } from "./Scene12Complexity";
import { Scene13Recap } from "./Scene13Recap";
import { MainVideo, TOTAL_MASTER_FRAMES } from "./MainVideo";

export { MainVideo, TOTAL_MASTER_FRAMES };

export const LongestConsecutiveSequenceFolder: React.FC = () => {
  return (
    <Folder name="010-Longest-Consecutive-Sequence">
      <Composition
        id="010-MasterVideo"
        component={MainVideo}
        durationInFrames={TOTAL_MASTER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene01-Intro"
        component={Scene01Intro}
        durationInFrames={1291}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene02-Understand"
        component={Scene02Understand}
        durationInFrames={1509}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene03-TraceBrute"
        component={Scene03TraceBrute}
        durationInFrames={3592}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene04-CodeBrute"
        component={Scene04CodeBrute}
        durationInFrames={2079}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene05-WhyBrute"
        component={Scene05WhyBrute}
        durationInFrames={1323}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene06-TraceBetter"
        component={Scene06TraceBetter}
        durationInFrames={2926}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene07-CodeBetter"
        component={Scene07CodeBetter}
        durationInFrames={1755}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene08-WhyBetter"
        component={Scene08WhyBetter}
        durationInFrames={1481}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene09-OptimalIdea"
        component={Scene09OptimalIdea}
        durationInFrames={2006}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene10-TraceOptimal"
        component={Scene10TraceOptimal}
        durationInFrames={5653}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene11-CodeOptimal"
        component={Scene11CodeOptimal}
        durationInFrames={1871}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene12-Complexity"
        component={Scene12Complexity}
        durationInFrames={3392}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="010-Scene13-Recap"
        component={Scene13Recap}
        durationInFrames={1832}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};
