import { IMxNode } from "../model";

type NodeProps = {
  node: IMxNode;
};
export const Node = ({ node }: NodeProps) => {
  return <h1>{node.name}</h1>;
};
