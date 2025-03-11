import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Ensure `App.jsx` exists and is correctly imported
import "./index.css";

const rootElement = document.getElementById("app"); // ✅ This must match the `id` in `index.html`
if (!rootElement) {
    throw new Error("Target container 'app' not found in index.html.");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
