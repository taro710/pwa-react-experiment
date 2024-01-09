import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/index/Index";
import Sample from "./pages/sample/Sample";
import "./assets/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/sample"} element={<Sample />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
