import React from "react";
import { Composition, Folder } from "remotion";
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03CountingTrace } from "./Scene03CountingTrace";
import { Scene04CountingCode } from "./Scene04CountingCode";
import { Scene05WhyCounting } from "./Scene05WhyCounting";
import { Scene06DnfIdea } from "./Scene06DnfIdea";
import { Scene07DnfTrace } from "./Scene07DnfTrace";
import { Scene08DnfCode } from "./Scene08DnfCode";
import { Scene09Complexity } from "./Scene09Complexity";
import { Scene10Recap } from "./Scene10Recap";
import { MainVideo, TOTAL_MASTER_FRAMES } from "./MainVideo";

export { MainVideo, TOTAL_MASTER_FRAMES };

export const SortColorsFolder: React.FC = () => {
  return (
    <Folder name="011-Sort-Colors">
      <Composition
        id="011-MasterVideo"
        component={MainVideo}
        durationInFrames={TOTAL_MASTER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene01-Intro"
        component={Scene01Intro}
        durationInFrames={1223}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene02-Understand"
        component={Scene02Understand}
        durationInFrames={2323}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene03-CountingTrace"
        component={Scene03CountingTrace}
        durationInFrames={2857}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene04-CountingCode"
        component={Scene04CountingCode}
        durationInFrames={2113}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene05-WhyCounting"
        component={Scene05WhyCounting}
        durationInFrames={2287}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene06-DnfIdea"
        component={Scene06DnfIdea}
        durationInFrames={3592}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene07-DnfTrace"
        component={Scene07DnfTrace}
        durationInFrames={7188}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene08-DnfCode"
        component={Scene08DnfCode}
        durationInFrames={2893}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene09-Complexity"
        component={Scene09Complexity}
        durationInFrames={3920}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="011-Scene10-Recap"
        component={Scene10Recap}
        durationInFrames={3642}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};
