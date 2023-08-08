import { useEffect, useState } from "react";
import { IMxNode, IMxNodeMap } from "../model";

export default function useNodeList(): [IMxNode[], string] {
  const emptyNodeList: IMxNode[] = [];
  const [nodeList, setNodeList] = useState(emptyNodeList);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    const nodeMapString: string = localStorage.getItem("nodes") || "";
    const nodeMap = JSON.parse(nodeMapString) as IMxNodeMap;

    setNodeList(Object.values(nodeMap));
    setStatus("loaded");
    // TODO: Following line will need to change when we start updating the node list as users add nodes
  }, []);

  return [nodeList, status];
}
