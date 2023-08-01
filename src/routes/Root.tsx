import { Outlet, Link } from "react-router-dom";
import "../App.css";
import useNodeList from "../hooks/useNodeList";
import { getRelsList } from "../persistence";
import NodeList from "../components/NodeList";

export default function Root() {
  const [nodeList] = useNodeList();
  const relsList = getRelsList();
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
          <NodeList nodes={nodeList} />
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
        <main id="main" className="detail">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
