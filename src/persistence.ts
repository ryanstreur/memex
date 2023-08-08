import {
  IMxNode,
  IMxNodeMap,
  IMxRelationship,
  IMxRelationshipMap,
  identify,
} from "./model";

// localStorage Keys
export const LS_KEYS = {
  NODES: "nodes",
  EDGES: "edges",
  RELS: "relationships",
  SETTINGS: "settings",
};

export const LOCALSTORAGE_KEYS = ["nodes", "edges", "relationships"];

export function initializeLocalStorage() {
  for (const key of LOCALSTORAGE_KEYS) {
    if (localStorage.getItem(key)) {
      continue;
    }

    localStorage.setItem(key, "{}");
  }
}

export function addOrUpdateNode(node: IMxNode) {
  identify(node);
  const nodesString = localStorage.getItem("nodes") as string;
  const nodes = JSON.parse(nodesString) as IMxNodeMap;
  nodes[node.id] = node;
  localStorage.nodes = JSON.stringify(nodes);
}

export function getNode(nodeId: string): IMxNode {
  const nodes = getFromLocalStorage<IMxNodeMap>(LS_KEYS.NODES) || {};

  return nodes[nodeId];
}

function getRels() {
  const relsString: string = localStorage.getItem(LS_KEYS.RELS) || "";
  const relsMap: IMxRelationshipMap = JSON.parse(
    relsString
  ) as IMxRelationshipMap;
  return relsMap;
}

export function getRelsList() {
  const relationships = getRels();
  return Object.values(relationships);
}

export function addOrUpdateRelationship(rel: IMxRelationship) {
  identify(rel);
  const relsString = localStorage.getItem(LS_KEYS.RELS) as string;
  const rels = JSON.parse(relsString) as IMxRelationshipMap;
  rels[rel.id] = rel;
  localStorage.setItem(LS_KEYS.RELS, JSON.stringify(rels));
}

export function getRelationship(relId: string): IMxRelationship {
  const rels = getRels();
  return rels[relId];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function saveToLocalStorage(key: string, value: any) {
  const valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
}

export function saveNodes(nodes: IMxNodeMap) {
  const valueString = JSON.stringify(nodes);
  localStorage.setItem(LS_KEYS.NODES, valueString);
}

export function getFromLocalStorage<OutputType>(
  key: string
): OutputType | null {
  const valueString: string | null = localStorage.getItem(key);
  if (!valueString) {
    return null;
  }
  return JSON.parse(valueString) as OutputType;
}

export function storageEstimate() {
  return navigator.storage.estimate();
}
