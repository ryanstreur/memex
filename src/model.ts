import { v4 as uuidV4 } from "uuid";

export interface INode {
  id: string;
  name: string;
  body: string;
}

export interface IRelationship {
  id: string;
  name: string;
}

export interface IEdge {
  id: string;
  relationship: IRelationship;
  source: INode;
  target: INode;
}

export interface IKnowledgeGraph {
  id: string;
  nodes: Array<INode>;
  edges: Array<IEdge>;
  relationships: Array<IRelationship>;
}

export interface INodeMap {
  [key: string]: INode;
}

export interface IRelationshipMap {
  [key: string]: IRelationship;
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
