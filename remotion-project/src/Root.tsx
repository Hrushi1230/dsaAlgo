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
import { SortColorsFolder } from "../../questions/01-arrays-hashing/011-sort-colors/src";
import { NextPermutationFolder } from "../../questions/01-arrays-hashing/012-next-permutation/src";
import { SetMatrixZeroesFolder } from "../../questions/01-arrays-hashing/013-set-matrix-zeroes/src";
import { RotateImageFolder } from "../../questions/01-arrays-hashing/014-rotate-image/src";
import { SpiralMatrixFolder } from "../../questions/01-arrays-hashing/015-spiral-matrix/src";

import { Composition } from "remotion";
import { SceneTitleCard } from "../../kit/components/SceneTitleCard";
import { Phase2VisualProof } from "../../kit/components/Phase2VisualProof";
import { TitleStudyComparison } from "../../kit/components/TitleStudyComparison";
import { MotionGrammarProof } from "../../kit/components/MotionGrammarProof";
import { MorphGrammarProof, StudyCCheckpoints } from "../../kit/components/MorphGrammarProof";
import { SvgGrammarProof, StudyACheckpoints } from "../../kit/components/SvgGrammarProof";
import { CodeWithAnimationIntro } from "../../intro/CodeWithAnimationIntro";
import { INTRO_CONSTANTS } from "../../intro/types";
import {
  Proof01Array,
  Proof02HashSet,
  Proof03HashMap,
  Proof04Matrix,
  Proof05LinkedList,
  Proof06Stack,
  Proof07Queue,
  Proof08Tree,
  Proof09Heap,
  Proof10Graph,
  Proof11UnionFind,
  Proof12Trie,
  Proof13Intervals,
  Proof14Recursion,
  Proof15DP,
  Proof16Bits,
  Proof17Strings,
  Proof18Math,
  Phase7Showcase,
  SHOWCASE_TOTAL_DURATION,
  TOTAL_PROOF_DURATION,
} from "../../kit/components/phase7";
import { ArraySystemProof, ARRAY_PROOF_DURATION } from "../../kit/components/array";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FoundationV2-Phase9-ArraySystem"
        component={ArraySystemProof}
        durationInFrames={ARRAY_PROOF_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
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
        id="FoundationV2-Phase2-VisualProof"
        component={Phase2VisualProof}
        durationInFrames={210}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FoundationV2-Phase2-TitleStudy"
        component={TitleStudyComparison}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FoundationV2-Phase4-MotionGrammar"
        component={MotionGrammarProof}
        durationInFrames={480}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FoundationV2-Phase5-MorphGrammar"
        component={MorphGrammarProof}
        durationInFrames={480}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FoundationV2-Phase5-StudyC-Checkpoints"
        component={StudyCCheckpoints}
        durationInFrames={5}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FoundationV2-Phase6-SvgGrammar"
        component={SvgGrammarProof}
        durationInFrames={480}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FoundationV2-Phase6-StudyA-Checkpoints"
        component={StudyACheckpoints}
        durationInFrames={5}
        fps={30}
        width={1920}
        height={1080}
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
      <Folder name="Phase7-Structure-Proofs">
        <Composition
          id="Phase7Proof-00-FullShowcase"
          component={Phase7Showcase}
          durationInFrames={SHOWCASE_TOTAL_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-01-Array"
          component={Proof01Array}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-02-HashSet"
          component={Proof02HashSet}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-03-HashMap"
          component={Proof03HashMap}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-04-Matrix"
          component={Proof04Matrix}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-05-LinkedList"
          component={Proof05LinkedList}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-06-Stack"
          component={Proof06Stack}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-07-Queue"
          component={Proof07Queue}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-08-Tree"
          component={Proof08Tree}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-09-Heap"
          component={Proof09Heap}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-10-Graph"
          component={Proof10Graph}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-11-UnionFind"
          component={Proof11UnionFind}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-12-Trie"
          component={Proof12Trie}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-13-Intervals"
          component={Proof13Intervals}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-14-Recursion"
          component={Proof14Recursion}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-15-DP"
          component={Proof15DP}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-16-Bits"
          component={Proof16Bits}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-17-Strings"
          component={Proof17Strings}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Phase7Proof-18-Math"
          component={Proof18Math}
          durationInFrames={TOTAL_PROOF_DURATION}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
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
        <SortColorsFolder />
        <NextPermutationFolder />
        <SetMatrixZeroesFolder />
        <RotateImageFolder />
        <SpiralMatrixFolder />
      </Folder>
    </>
  );
};
