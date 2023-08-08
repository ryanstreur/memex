import { ReactNode, useReducer } from "react";
import {
  knowledgeGraphReducer,
  emptyGraph,
} from "../reducers/knowledge-graph-reducer";

import {
  KnowledgeGraphContext,
  KnowledgeGraphDispatchContext,
} from "../contexts/knowledge-graph-context";

type Props = {
  children: ReactNode;
};
export default function KnowledgeGraphProvider({ children }: Props) {
  const [knowledgeGraph, dispatch] = useReducer(
    knowledgeGraphReducer,
    emptyGraph
  );

  return (
    <KnowledgeGraphContext.Provider value={knowledgeGraph}>
      <KnowledgeGraphDispatchContext.Provider value={dispatch}>
        {children}
      </KnowledgeGraphDispatchContext.Provider>
    </KnowledgeGraphContext.Provider>
  );
}
