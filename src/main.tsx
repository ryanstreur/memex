import React from "react";
import ReactDOM from "react-dom/client";

import { initializeLocalStorage } from "./persistence.ts";
import App from "./App.tsx";
import "./index.css";

initializeLocalStorage();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
