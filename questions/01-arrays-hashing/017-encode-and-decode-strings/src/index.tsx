import React from "react";
import { Composition, Folder } from "remotion";
import { Scene01Intro } from "./Scene01Intro";
import { Scene02Understand } from "./Scene02Understand";
import { Scene03LengthPrefixIdea } from "./Scene03LengthPrefixIdea";
import { Scene04EncodeTrace } from "./Scene04EncodeTrace";
import { Scene05EncodeCode } from "./Scene05EncodeCode";
import { Scene06DecodeTrace } from "./Scene06DecodeTrace";
import { Scene07DecodeCode } from "./Scene07DecodeCode";
import { Scene08CorrectnessComplexity } from "./Scene08CorrectnessComplexity";
import { Scene09MistakesEdgeCases } from "./Scene09MistakesEdgeCases";
import { Scene10RecapRoadmap } from "./Scene10RecapRoadmap";
import { MainVideo, TOTAL_MASTER_FRAMES } from "./MainVideo";

export const EncodeAndDecodeStringsFolder: React.FC = () => {
  return (
    <Folder name="017-Encode-and-Decode-Strings">
      <Composition
        id="017-MasterVideo"
        component={MainVideo}
        durationInFrames={TOTAL_MASTER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene01-Intro"
        component={Scene01Intro}
        durationInFrames={779}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene02-Understand"
        component={Scene02Understand}
        durationInFrames={1224}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene03-LengthPrefixIdea"
        component={Scene03LengthPrefixIdea}
        durationInFrames={1117}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene04-EncodeTrace"
        component={Scene04EncodeTrace}
        durationInFrames={3940}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene05-EncodeCode"
        component={Scene05EncodeCode}
        durationInFrames={701}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene06-DecodeTrace"
        component={Scene06DecodeTrace}
        durationInFrames={6969}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene07-DecodeCode"
        component={Scene07DecodeCode}
        durationInFrames={1101}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene08-CorrectnessComplexity"
        component={Scene08CorrectnessComplexity}
        durationInFrames={1153}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene09-MistakesEdgeCases"
        component={Scene09MistakesEdgeCases}
        durationInFrames={951}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="017-Scene10-RecapRoadmap"
        component={Scene10RecapRoadmap}
        durationInFrames={1119}
        fps={30}
        width={1920}
        height={1080}
      />
    </Folder>
  );
};
