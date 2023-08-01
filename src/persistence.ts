import {
  INode,
  INodeMap,
  IRelationship,
  IRelationshipMap,
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

export function addOrUpdateNode(node: INode) {
  identify(node);
  const nodesString = localStorage.getItem("nodes") as string;
  const nodes = JSON.parse(nodesString) as INodeMap;
  nodes[node.id] = node;
  localStorage.nodes = JSON.stringify(nodes);
}

export function getNode(nodeId: string): INode {
  const nodes = JSON.parse(
    localStorage.getItem(LS_KEYS.NODES) || ""
  ) as INodeMap;

  return nodes[nodeId];
}

function getRels() {
  const relsString: string = localStorage.getItem(LS_KEYS.RELS) || "";
  const relsMap: IRelationshipMap = JSON.parse(relsString) as IRelationshipMap;
  return relsMap;
}

export function getRelsList() {
  const relationships = getRels();
  return Object.values(relationships);
}

export function addOrUpdateRelationship(rel: IRelationship) {
  identify(rel);
  const relsString = localStorage.getItem(LS_KEYS.RELS) as string;
  const rels = JSON.parse(relsString) as IRelationshipMap;
  rels[rel.id] = rel;
  localStorage.setItem(LS_KEYS.RELS, JSON.stringify(rels));
}

export function getRelationship(relId: string): IRelationship {
  const rels = getRels();
  return rels[relId];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function saveToLocalStorage(key: string, value: any) {
  const valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
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
