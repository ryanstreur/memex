import { Outlet, Link } from "react-router-dom";
import "../App.css";
import { INode } from "../model";
import useNodeList from "../hooks/useNodeList";
import { getRelsList } from "../persistence";

export default function Root() {
  const [nodeList, status] = useNodeList();
  const relsList = getRelsList();
  return (
    <>
      <h1>Memex</h1>
      <div className="flex">
        <nav>
          <h2>
            <Link to="nodes">Nodes</Link>
          </h2>
          <ul>
            {nodeList.map((node: INode) => (
              <li key={node.id}>
                <Link to={`/nodes/${node.id}`}>{node.name}</Link>
              </li>
            ))}
          </ul>
          <h2>
            <Link to="/relationships">Relationships</Link>
          </h2>
          <ul>
            {relsList.map((rel) => (
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
        <div className="detail">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
