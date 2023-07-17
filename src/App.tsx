import "./App.css";
import { NodeForm } from "./NodeForm";
import { INode } from "./model";
import useNodeList from "./hooks/useNodeList";
import { getRelsList } from "./persistence";
import { RelationshipForm } from "./RelationshipForm";

function App() {
  const [nodeList, status] = useNodeList();
  const relsList = getRelsList();
  return (
    <>
      <h1>Memex</h1>
      <div className="app-container">
        <nav>
          <h2>Nodes</h2>
          <ul>
            {nodeList.map((node: INode) => (
              <li key={node.id}>{node.name}</li>
            ))}
          </ul>
          <h2>Relationships</h2>
          <ul>
            {relsList.map((rel) => (
              <li>{rel.name}</li>
            ))}
          </ul>
        </nav>

        <NodeForm />
        <RelationshipForm />
      </div>
    </>
  );
}

export default App;
