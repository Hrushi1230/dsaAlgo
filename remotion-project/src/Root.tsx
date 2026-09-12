// remotion-project/src/Root.tsx
import "./index.css";
import React from "react";
import { Folder } from "remotion";

// Pattern 01: Arrays & Hashing
import { ContainsDuplicateFolder } from "../../questions/01-arrays-hashing/001-contains-duplicate/src";
import { ValidAnagramFolder } from "../../questions/01-arrays-hashing/002-valid-anagram/src";
import { TwoSumFolder } from "../../questions/01-arrays-hashing/003-two-sum/src";
import { PascalsTriangleFolder } from "../../questions/01-arrays-hashing/004-pascals-triangle/src";
import { MajorityElementFolder } from "../../questions/01-arrays-hashing/005-majority-element/src";
import { GroupAnagramsFolder } from "../../questions/01-arrays-hashing/006-group-anagrams/src";
import { TopKFrequentElementsFolder } from "../../questions/01-arrays-hashing/007-top-k-frequent-elements/src";
import { ProductExceptSelfFolder } from "../../questions/01-arrays-hashing/008-product-of-array-except-self/src";
import { ValidSudokuFolder } from "../../questions/01-arrays-hashing/009-valid-sudoku/src";
import { LongestConsecutiveSequenceFolder } from "../../questions/01-arrays-hashing/010-longest-consecutive-sequence/src";

import { Composition } from "remotion";
import { SceneTitleCard } from "../../kit/components/SceneTitleCard";
import { CodeWithAnimationIntro } from "../../intro/CodeWithAnimationIntro";
import { INTRO_CONSTANTS } from "../../intro/types";

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
      <Composition
        id="SceneTitleCard-Preview"
        component={SceneTitleCard as unknown as React.FC<Record<string, unknown>>}
        durationInFrames={30}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          sceneNumber: "SCENE 01",
          title: "THE REAL-WORLD HOOK",
          subtext: "Checking 1,000 User IDs: Why O(n²) Fails in Production",
        }}
      />
      <Folder name="01-Arrays-and-Hashing">
        <ContainsDuplicateFolder />
        <ValidAnagramFolder />
        <TwoSumFolder />
        <PascalsTriangleFolder />
        <MajorityElementFolder />
        <GroupAnagramsFolder />
        <TopKFrequentElementsFolder />
        <ProductExceptSelfFolder />
        <ValidSudokuFolder />
        <LongestConsecutiveSequenceFolder />
      </Folder>
    </>
  );
};
