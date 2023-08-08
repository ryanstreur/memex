import { Dispatch, createContext, useContext } from "react";
import {
  IKnowledgeGraphAction,
  emptyGraph,
} from "../reducers/knowledge-graph-reducer";
import { IMxKnowledgeGraph } from "../model";

type CtxType = IMxKnowledgeGraph;
export const KnowledgeGraphContext = createContext<CtxType>(emptyGraph);

type DispatchType = Dispatch<IKnowledgeGraphAction>;
export const KnowledgeGraphDispatchContext = createContext<DispatchType>(
  () => null
);

export const useKnowledgeGraph = () => useContext(KnowledgeGraphContext);

export const useKnowledgeGraphDispatch = () =>
  useContext(KnowledgeGraphDispatchContext);
