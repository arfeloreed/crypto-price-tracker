import React from "react";
import ReactDOM from "react-dom/client";
// assets
import "./assets/styles/index.scss";
// components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
