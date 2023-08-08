import Root from "./Root";
import NodeDetail from "./NodeDetail";
import { nodeLoader } from "./node-detail-loader";
import RelationshipList from "./RelationshipList";
import RelationshipDetail from "./RelationshipDetail";
import ErrorPage from "./ErrorPage";
import { UserSettingsPage } from "./UserSettings";
import NodeCreate from "./NodeCreate";

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "settings", element: <UserSettingsPage /> },
      {
        path: "nodes/:nodeId",
        element: <NodeDetail />,
        loader: nodeLoader,
      },
      {
        path: "nodes/create",
        element: <NodeCreate />,
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
