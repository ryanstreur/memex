import { Link } from "react-router-dom";
import { IMxNode } from "../model";

import "./node-list-item.css";

type NodeListItemProps = {
  nodes: IMxNode[];
};
export default function NodeList({ nodes }: NodeListItemProps) {
  return (
    <ul className="node-list">
      {nodes.map((node: IMxNode) => (
        <li key={node.id} className="node-list-item">
          <Link to={`/nodes/${node.id}`} className="node-li-link">
            {node.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
