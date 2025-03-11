import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Ensure the filename is "App.jsx"
import "./index.css";

const rootElement = document.getElementById("app"); // ✅ This must match index.html

if (!rootElement) {
    throw new Error("Target container 'app' not found in index.html.");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
