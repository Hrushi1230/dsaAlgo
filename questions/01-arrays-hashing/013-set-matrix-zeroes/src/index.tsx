import React from "react";
import { Composition, Folder } from "remotion";
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03CopyTrace } from "./Scene03CopyTrace";
import { Scene04CopyCode } from "./Scene04CopyCode";
import { Scene05WhyCopy } from "./Scene05WhyCopy";
import { Scene06MarkersTrace } from "./Scene06MarkersTrace";
import { Scene07MarkersCode } from "./Scene07MarkersCode";
import { Scene08WhyMarkers } from "./Scene08WhyMarkers";
import { Scene09OptimalIdea } from "./Scene09OptimalIdea";
import { Scene10OptimalTrace } from "./Scene10OptimalTrace";
import { Scene11OptimalCode } from "./Scene11OptimalCode";
import { Scene12Complexity } from "./Scene12Complexity";
import { Scene13Recap } from "./Scene13Recap";
import { MainVideo, TOTAL_MASTER_FRAMES } from "./MainVideo";

export const SetMatrixZeroesFolder: React.FC = () => {
  return (
    <Folder name="013-Set-Matrix-Zeroes">
      <Composition
        id="013-MainVideo"
        component={MainVideo}
        durationInFrames={TOTAL_MASTER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene01-Intro"
        component={Scene01Intro}
        durationInFrames={1092}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene02-Understand"
        component={Scene02Understand}
        durationInFrames={2288}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene03-CopyTrace"
        component={Scene03CopyTrace}
        durationInFrames={3357}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene04-CopyCode"
        component={Scene04CopyCode}
        durationInFrames={1981}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene05-WhyCopy"
        component={Scene05WhyCopy}
        durationInFrames={1754}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene06-MarkersTrace"
        component={Scene06MarkersTrace}
        durationInFrames={3581}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene07-MarkersCode"
        component={Scene07MarkersCode}
        durationInFrames={2188}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene08-WhyMarkers"
        component={Scene08WhyMarkers}
        durationInFrames={3037}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene09-OptimalIdea"
        component={Scene09OptimalIdea}
        durationInFrames={3209}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene10-OptimalTrace"
        component={Scene10OptimalTrace}
        durationInFrames={7061}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene11-OptimalCode"
        component={Scene11OptimalCode}
        durationInFrames={3241}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene12-Complexity"
        component={Scene12Complexity}
        durationInFrames={2827}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="013-Scene13-Recap"
        component={Scene13Recap}
        durationInFrames={2760}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};
