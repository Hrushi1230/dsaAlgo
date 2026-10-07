import React from "react";
import { Composition, Folder } from "remotion";
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03Method1Trace } from "./Scene03Method1Trace";
import { Scene04Method1Code } from "./Scene04Method1Code";
import { Scene05WhyVisitedUnnecessary } from "./Scene05WhyVisitedUnnecessary";
import { Scene06Method2Idea } from "./Scene06Method2Idea";
import { Scene07Method2Trace } from "./Scene07Method2Trace";
import { Scene08Method2Code } from "./Scene08Method2Code";
import { Scene09ComplexityMistakes } from "./Scene09ComplexityMistakes";
import { Scene10RecapRoadmap } from "./Scene10RecapRoadmap";
import { MainVideo, TOTAL_MASTER_FRAMES } from "./MainVideo";

export const SpiralMatrixFolder: React.FC = () => {
  return (
    <Folder name="015-Spiral-Matrix">
      <Composition
        id="015-Spiral-Matrix-Master"
        component={MainVideo}
        durationInFrames={TOTAL_MASTER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene01-Intro"
        component={Scene01Intro}
        durationInFrames={917}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene02-Understand"
        component={Scene02Understand}
        durationInFrames={2026}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene03-Method1Trace"
        component={Scene03Method1Trace}
        durationInFrames={5124}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene04-Method1Code"
        component={Scene04Method1Code}
        durationInFrames={3094}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene05-WhyVisitedUnnecessary"
        component={Scene05WhyVisitedUnnecessary}
        durationInFrames={1362}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene06-Method2Idea"
        component={Scene06Method2Idea}
        durationInFrames={1937}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene07-Method2Trace"
        component={Scene07Method2Trace}
        durationInFrames={5156}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene08-Method2Code"
        component={Scene08Method2Code}
        durationInFrames={3655}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene09-ComplexityMistakes"
        component={Scene09ComplexityMistakes}
        durationInFrames={3175}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="015-Scene10-RecapRoadmap"
        component={Scene10RecapRoadmap}
        durationInFrames={682}
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
  Scene05WhyVisitedUnnecessary,
  Scene06Method2Idea,
  Scene07Method2Trace,
  Scene08Method2Code,
  Scene09ComplexityMistakes,
  Scene10RecapRoadmap,
  MainVideo,
};
