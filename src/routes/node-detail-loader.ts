import { Params } from "react-router-dom";

import { getNode } from "../persistence";

export type NodeLoaderConfig = {
  params: Params<string>;
};

export function nodeLoader({ params }: NodeLoaderConfig) {
  return params.nodeId;
}
