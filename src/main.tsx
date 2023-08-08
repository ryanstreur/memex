import ReactDOM from "react-dom/client";

import { initializeLocalStorage } from "./persistence.ts";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App.tsx";

initializeLocalStorage();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
