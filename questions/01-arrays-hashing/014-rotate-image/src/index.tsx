import React from "react";
import { Composition, Folder } from "remotion";
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03Method1Trace } from "./Scene03Method1Trace";
import { Scene04Method1Code } from "./Scene04Method1Code";
import { Scene05WhyExtraSpace } from "./Scene05WhyExtraSpace";
import { Scene06Method2Trace } from "./Scene06Method2Trace";
import { Scene07Method2Code } from "./Scene07Method2Code";
import { Scene08Method3Intuition } from "./Scene08Method3Intuition";
import { Scene09Method3Idea } from "./Scene09Method3Idea";
import { Scene10Method3Trace } from "./Scene10Method3Trace";
import { Scene11Method3Code } from "./Scene11Method3Code";
import { Scene12Complexity } from "./Scene12Complexity";
import { Scene13Recap } from "./Scene13Recap";
import { MainVideo, TOTAL_MASTER_FRAMES } from "./MainVideo";

export const RotateImageFolder: React.FC = () => {
  return (
    <Folder name="014-Rotate-Image">
      <Composition
        id="014-MainVideo"
        component={MainVideo}
        durationInFrames={TOTAL_MASTER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene01-Intro"
        component={Scene01Intro}
        durationInFrames={885}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene02-Understand"
        component={Scene02Understand}
        durationInFrames={4333}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene03-Method1Trace"
        component={Scene03Method1Trace}
        durationInFrames={4466}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene04-Method1Code"
        component={Scene04Method1Code}
        durationInFrames={1937}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene05-WhyExtraSpace"
        component={Scene05WhyExtraSpace}
        durationInFrames={2522}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene06-Method2Trace"
        component={Scene06Method2Trace}
        durationInFrames={7386}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene07-Method2Code"
        component={Scene07Method2Code}
        durationInFrames={4700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene08-Method3Intuition"
        component={Scene08Method3Intuition}
        durationInFrames={1662}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene09-Method3Idea"
        component={Scene09Method3Idea}
        durationInFrames={2325}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene10-Method3Trace"
        component={Scene10Method3Trace}
        durationInFrames={4465}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene11-Method3Code"
        component={Scene11Method3Code}
        durationInFrames={3026}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene12-Complexity"
        component={Scene12Complexity}
        durationInFrames={1219}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="014-Scene13-Recap"
        component={Scene13Recap}
        durationInFrames={2803}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};

export {
  Scene01Intro,
  Scene02Understand,
  Scene03Method1Trace,
  Scene04Method1Code,
  Scene05WhyExtraSpace,
  Scene06Method2Trace,
  Scene07Method2Code,
  Scene08Method3Intuition,
  Scene09Method3Idea,
  Scene10Method3Trace,
  Scene11Method3Code,
  Scene12Complexity,
  Scene13Recap,
  MainVideo,
  TOTAL_MASTER_FRAMES,
};


