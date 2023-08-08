import {
  IMxEdge,
  IMxKnowledgeGraph,
  IMxNode,
  IMxNodeMap,
  IMxRelationshipMap,
} from "../model";
import { getFromLocalStorage } from "../persistence";

export const emptyGraph: IMxKnowledgeGraph = {
  id: "",
  nodes: {},
  relationships: {},
  edges: [],
};

export enum KgActions {
  LOAD,
  ADD_OR_UPDATE_NODE,
  RELATE,
  NOT_IMPLEMENTED,
}

type PayloadType = { node: IMxNode };

export interface IKnowledgeGraphAction {
  type: KgActions;
  payload?: PayloadType;
}

export function knowledgeGraphReducer(
  state: IMxKnowledgeGraph,
  action: IKnowledgeGraphAction
): IMxKnowledgeGraph {
  switch (action.type) {
    case KgActions.LOAD: {
      // probably best to put this outisde the reducer as it's not strictly a state transition but a load action
      const nodes = getFromLocalStorage<IMxNodeMap>("nodes") || {};
      const edges = getFromLocalStorage<IMxEdge[]>("edges") || [];
      const relationships =
        getFromLocalStorage<IMxRelationshipMap>("relationships") || {};

      return {
        id: "",
        nodes,
        edges,
        relationships,
      };
    }
    case KgActions.ADD_OR_UPDATE_NODE: {
      if (!action.payload) {
        return state;
      }

      const nodes = state.nodes;
      nodes[action.payload.node.id] = action.payload.node;

      return {
        ...state,
        nodes,
      };
    }
    default:
      return state;
  }
}
