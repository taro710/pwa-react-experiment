import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.scss";
import Router from "./routetr";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
