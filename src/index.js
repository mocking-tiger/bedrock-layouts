import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@bedrock-layout/css";
import { AppBoundary } from "@bedrock-layout/appboundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppBoundary boundarySize="xlarge">
      <App />
    </AppBoundary>
  </React.StrictMode>
);
