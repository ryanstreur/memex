import ReactDOM from "react-dom/client";

import { initializeLocalStorage } from "./persistence.ts";
import "./index.css";
import App from "./App.tsx";

initializeLocalStorage();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
