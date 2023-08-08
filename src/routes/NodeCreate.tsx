import { v4 as uuidV4 } from "uuid";
import NodeForm from "../components/NodeForm";
import { IMxNode } from "../model";
import {
  useKnowledgeGraph,
  useKnowledgeGraphDispatch,
} from "../contexts/knowledge-graph-context";
import { KgActions } from "../reducers/knowledge-graph-reducer";
import { saveNodes } from "../persistence";
import { useNavigate } from "react-router-dom";

export default function NodeCreate() {
  const navigate = useNavigate();
  const graph = useKnowledgeGraph();
  const kgDispatch = useKnowledgeGraphDispatch();

  const node: IMxNode = {
    id: uuidV4(),
    name: "",
    body: "",
  };

  function updateNode(node: IMxNode) {
    kgDispatch({
      type: KgActions.ADD_OR_UPDATE_NODE,
      payload: { node },
    });
    saveNodes(graph.nodes);
    navigate(`/nodes/${node.id}`);
  }

  return (
    <>
      <NodeForm node={node} updateNode={updateNode}></NodeForm>
    </>
  );
}
