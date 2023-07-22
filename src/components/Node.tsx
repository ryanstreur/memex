import { INode } from "../model";

type NodeProps = {
  node: INode;
};
export const Node = ({ node }: NodeProps) => {
  return <h1>{node.name}</h1>;
};
