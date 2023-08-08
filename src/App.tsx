import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import KnowledgeGraphProvider from "./components/KnowledgeGraphProvider";

import { routes } from "./routes/routes";

const router = createBrowserRouter(routes);
function App() {
  return (
    <React.StrictMode>
      <KnowledgeGraphProvider>
        <RouterProvider router={router} />
      </KnowledgeGraphProvider>
    </React.StrictMode>
  );
}

export default App;
