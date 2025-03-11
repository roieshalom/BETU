import React from "react";
import ReactDOM from "react-dom/client";
import FlashcardApp from "./FlashcardApp"; // ✅ Make sure FlashcardApp.jsx exists
import "./index.css"; // ✅ Ensure index.css exists for styling

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <FlashcardApp />
  </React.StrictMode>
);
