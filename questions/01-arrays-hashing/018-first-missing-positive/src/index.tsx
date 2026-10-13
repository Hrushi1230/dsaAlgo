import React from "react";
import { Composition, Folder } from "remotion";

import { Scene01Roadmap, SCENE01_TOTAL_FRAMES } from "./Scene01Roadmap";
import { Scene02Understand, SCENE02_TOTAL_FRAMES } from "./Scene02Understand";
import { Scene03BruteTrace, SCENE03_TOTAL_FRAMES } from "./Scene03BruteTrace";
import { Scene04BruteCode, SCENE04_TOTAL_FRAMES } from "./Scene04BruteCode";
import { Scene05HashSetIdea, SCENE05_TOTAL_FRAMES } from "./Scene05HashSetIdea";
import { Scene06HashSetTrace, SCENE06_TOTAL_FRAMES } from "./Scene06HashSetTrace";
import { Scene07HashSetCode, SCENE07_TOTAL_FRAMES } from "./Scene07HashSetCode";
import { Scene08LimitationBridge, SCENE08_TOTAL_FRAMES } from "./Scene08LimitationBridge";
import { Scene09OptimalIdea, SCENE09_TOTAL_FRAMES } from "./Scene09OptimalIdea";
import { Scene10OptimalTrace, SCENE10_TOTAL_FRAMES } from "./Scene10OptimalTrace";
import { Scene11OptimalCode, SCENE11_TOTAL_FRAMES } from "./Scene11OptimalCode";
import { Scene12Complexity, SCENE12_TOTAL_FRAMES } from "./Scene12Complexity";
import { Scene13RecapRoadmap, SCENE13_TOTAL_FRAMES } from "./Scene13RecapRoadmap";
import { MainVideo, TOTAL_MASTER_FRAMES } from "./MainVideo";

export const FirstMissingPositiveFolder: React.FC = () => {
  return (
    <Folder name="018-First-Missing-Positive">
      <Composition
        id="018-MasterVideo"
        component={MainVideo}
        durationInFrames={TOTAL_MASTER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene01-Roadmap"
        component={Scene01Roadmap}
        durationInFrames={SCENE01_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene02-Understand"
        component={Scene02Understand}
        durationInFrames={SCENE02_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene03-BruteTrace"
        component={Scene03BruteTrace}
        durationInFrames={SCENE03_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene04-BruteCode"
        component={Scene04BruteCode}
        durationInFrames={SCENE04_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene05-HashSetIdea"
        component={Scene05HashSetIdea}
        durationInFrames={SCENE05_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene06-HashSetTrace"
        component={Scene06HashSetTrace}
        durationInFrames={SCENE06_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene07-HashSetCode"
        component={Scene07HashSetCode}
        durationInFrames={SCENE07_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene08-LimitationBridge"
        component={Scene08LimitationBridge}
        durationInFrames={SCENE08_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene09-OptimalIdea"
        component={Scene09OptimalIdea}
        durationInFrames={SCENE09_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene10-OptimalTrace"
        component={Scene10OptimalTrace}
        durationInFrames={SCENE10_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene11-OptimalCode"
        component={Scene11OptimalCode}
        durationInFrames={SCENE11_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene12-Complexity"
        component={Scene12Complexity}
        durationInFrames={SCENE12_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="018-Scene13-RecapRoadmap"
        component={Scene13RecapRoadmap}
        durationInFrames={SCENE13_TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};
