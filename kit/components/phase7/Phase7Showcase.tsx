import React from "react";
import { Series } from "remotion";
import {
  Proof01Array,
  Proof02HashSet,
  Proof03HashMap,
  Proof04Matrix,
  Proof05LinkedList,
  Proof06Stack,
} from "./Proofs01To06";
import {
  Proof07Queue,
  Proof08Tree,
  Proof09Heap,
  Proof10Graph,
  Proof11UnionFind,
  Proof12Trie,
} from "./Proofs07To12";
import {
  Proof13Intervals,
  Proof14Recursion,
  Proof15DP,
  Proof16Bits,
  Proof17Strings,
  Proof18Math,
} from "./Proofs13To18";

const structures = [
  { id: "01", Component: Proof01Array },
  { id: "02", Component: Proof02HashSet },
  { id: "03", Component: Proof03HashMap },
  { id: "04", Component: Proof04Matrix },
  { id: "05", Component: Proof05LinkedList },
  { id: "06", Component: Proof06Stack },
  { id: "07", Component: Proof07Queue },
  { id: "08", Component: Proof08Tree },
  { id: "09", Component: Proof09Heap },
  { id: "10", Component: Proof10Graph },
  { id: "11", Component: Proof11UnionFind },
  { id: "12", Component: Proof12Trie },
  { id: "13", Component: Proof13Intervals },
  { id: "14", Component: Proof14Recursion },
  { id: "15", Component: Proof15DP },
  { id: "16", Component: Proof16Bits },
  { id: "17", Component: Proof17Strings },
  { id: "18", Component: Proof18Math },
];

export const SHOWCASE_ITEM_DURATION = 90; // 3 seconds per structure
export const SHOWCASE_TOTAL_DURATION = SHOWCASE_ITEM_DURATION * structures.length; // 1620 frames (54s)

export const Phase7Showcase: React.FC = () => {
  return (
    <Series>
      {structures.map(({ id, Component }) => (
        <Series.Sequence key={id} durationInFrames={SHOWCASE_ITEM_DURATION}>
          <Component />
        </Series.Sequence>
      ))}
    </Series>
  );
};
