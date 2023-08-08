import { useEffect, useState } from "react";
import { IMxRelationship, IMxRelationshipMap } from "../model";
import { LS_KEYS, getFromLocalStorage } from "../persistence";

export default function useRelationshipList(): [IMxRelationship[], string] {
  const empatyRelList: IMxRelationship[] = [];
  const [nodeList, setNodeList] = useState(empatyRelList);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    const relMap: IMxRelationshipMap =
      getFromLocalStorage<IMxRelationshipMap>(LS_KEYS.RELS) || {};

    setNodeList(Object.values(relMap));
    setStatus("loaded");
  }, []);

  return [nodeList, status];
}
