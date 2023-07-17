import {
  INode,
  INodeMap,
  IRelationship,
  IRelationshipMap,
  identify,
} from "./model";

// localStorage Keys
const LS_KEYS = {
  NODES: "nodes",
  EDGES: "edges",
  RELS: "relationships",
};

export function initializeLocalStorage() {
  const KEYS = ["nodes", "edges", "relationships"];

  for (const key of KEYS) {
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
