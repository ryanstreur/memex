import { FormEventHandler, useState } from "react";
import { IMxNode } from "../model";
import { useLoaderData } from "react-router-dom";
import {
  useKnowledgeGraph,
  useKnowledgeGraphDispatch,
} from "../contexts/knowledge-graph-context";
import { KgActions } from "../reducers/knowledge-graph-reducer";
import NodeForm from "../components/NodeForm";

export default function NodeDetail() {
  const nodeId = useLoaderData() as string;

  const graph = useKnowledgeGraph();
  const kgDispatch = useKnowledgeGraphDispatch();

  const node: IMxNode = graph.nodes[nodeId];
  const [name, setName] = useState(node.name);
  const [body, setBody] = useState(node.body);

  const submitForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    updateNode({ ...node, name, body });
  };

  function updateNode(updatedNode: IMxNode) {
    kgDispatch({
      type: KgActions.ADD_OR_UPDATE_NODE,
      payload: { node: updatedNode },
    });
  }

  return (
    <>
      <form onSubmit={(e) => submitForm(e)}>
        <label htmlFor="node-name">Name</label>
        <input
          name="node-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="node-body">Body</label>
        <textarea
          name="node-body"
          id="node-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {nodeId}
      {JSON.stringify(node)}

      <NodeForm node={node} updateNode={updateNode} />
    </>
  );
}
