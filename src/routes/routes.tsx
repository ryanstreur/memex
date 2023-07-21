import Root from "./Root";
import NodeList from "./NodeList";
import NodeDetail from "./NodeDetail";
import RelationshipList from "./RelationshipList";
import RelationshipDetail from "./RelationshipDetail";
import { UserSettingsPage } from "./UserSettings";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "settings", element: <UserSettingsPage /> },
      { path: "nodes", element: <NodeList /> },
      {
        path: "nodes/:nodeId",
        element: <NodeDetail />,
      },
      {
        path: "relationships",
        element: <RelationshipList />,
      },
      {
        path: "relationships/:relationshipId",
        element: <RelationshipDetail />,
      },
    ],
  },
];
