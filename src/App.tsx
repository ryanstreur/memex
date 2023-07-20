import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { routes } from "./routes/routes";

const router = createBrowserRouter(routes);
function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
