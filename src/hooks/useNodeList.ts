import { useEffect, useState } from "react";
import { INodeMap } from "../model";

export default function useNodeList(): [INode[], string] {
  const emptyNodeList: INode[] = [];
  const [nodeList, setNodeList] = useState(emptyNodeList);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    const nodeMapString: string = localStorage.getItem("nodes") || "";
    const nodeMap = JSON.parse(nodeMapString) as INodeMap;

    setNodeList(Object.values(nodeMap));
    setStatus("loaded");
    // TODO: Following line will need to change when we start updating the node list as users add nodes
  }, []);

  return [nodeList, status];
}
