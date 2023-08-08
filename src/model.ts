import { v4 as uuidV4 } from "uuid";

export interface IMxNode {
  id: string;
  name: string;
  body: string;
}

export interface IMxRelationship {
  id: string;
  name: string;
}

export interface IMxEdge {
  id: string;
  relationship: IMxRelationship;
  source: IMxNode;
  target: IMxNode;
}

export interface IMxNodeMap {
  [key: string]: IMxNode;
}

export interface IMxRelationshipMap {
  [key: string]: IMxRelationship;
}

export interface IMxKnowledgeGraph {
  id: string;
  nodes: IMxNodeMap;
  relationships: IMxRelationshipMap;
  edges: IMxEdge[];
}

export interface Identified {
  id: string;
}

export function identify(entity: Identified) {
  if (!entity.id) {
    entity.id = uuidV4();
  }
}

export interface IUserSettings {
  keyboardShortcutsEnabled: boolean;
}

export class UserSettings implements IUserSettings {
  keyboardShortcutsEnabled: boolean;

  constructor() {
    this.keyboardShortcutsEnabled = false;
  }
}

export enum LoadStatus {
  Unloaded,
  Loading,
  Loaded,
}

export class MxNode implements IMxNode {
  constructor(
    public id: string,
    public name: string,
    public body: string
  ) {}
}

export class MxRelationship implements IMxRelationship {
  constructor(
    public id: string,
    public name: string
  ) {}
}

export class MxEdge implements IMxEdge {
  constructor(
    public id: string,
    public source: IMxNode,
    public target: IMxNode,
    public relationship: IMxRelationship
  ) {}
}

export class MxKnowledgeGraph implements IMxKnowledgeGraph {
  constructor(
    public id: string,
    public nodes: IMxNodeMap,
    public relationships: IMxRelationshipMap,
    public edges: IMxEdge[]
  ) {}

  addNode(newNode: IMxNode) {
    // Throw an error if trying to add node that already exists
    const match = this.nodes[newNode.id];
    if (match) {
      throw Error("Node already exists in nodes list");
    }
  }

  getEdges(queryNode: IMxNode): IMxEdge[] {
    return this.edges.filter(
      (edge) => edge.source.id == queryNode.id || edge.target.id == queryNode.id
    );
  }

  relate(source: IMxNode, target: IMxNode, relationship: IMxRelationship) {
    // Check for existing relationsip
    const newId = uuidV4();
    const newEdge = new MxEdge(newId, source, target, relationship);

    this.edges.push(newEdge);
  }
}
