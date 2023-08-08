import { Link, Outlet } from "react-router-dom";
import NodeList from "../components/NodeList";
import "../App.css";

import { useEffect } from "react";
import {
  useKnowledgeGraph,
  useKnowledgeGraphDispatch,
} from "../contexts/knowledge-graph-context";
import { KgActions } from "../reducers/knowledge-graph-reducer";

export default function Root() {
  const knowledgeGraph = useKnowledgeGraph();
  const kgDispatch = useKnowledgeGraphDispatch();

  useEffect(() => {
    kgDispatch({
      type: KgActions.LOAD,
    });
  }, [kgDispatch]);

  const nodesFromGraph = Object.values(knowledgeGraph.nodes);
  const relsFromGraph = Object.values(knowledgeGraph.relationships);

  return (
    <>
      <a className="skip-to-content-link" href="#main">
        Skip to content
      </a>
      <h1>Memex</h1>
      <div className="flex">
        <nav>
          <h2>
            <Link to="nodes">Nodes</Link>
          </h2>
          <Link to="nodes/create">New Node</Link>
          <NodeList nodes={nodesFromGraph} />
          <h2>
            <Link to="/relationships">Relationships</Link>
          </h2>
          <ul>
            {relsFromGraph.map((rel) => (
              <li key={rel.id}>
                <Link to={`/relationships/${rel.id}`}>{rel.name}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <main id="main" className="detail">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
