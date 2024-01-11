import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editor from "./pages/editor/editor";
import History from "./pages/history/history";
import { useStateWithStorage } from "./hooks/use_state_with_storage";

const STORAGE_KEY = "/editor:text";

export const Router = () => {
  const [text, setText] = useStateWithStorage("", STORAGE_KEY);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Editor text={text} setText={setText} />} />
        <Route path={"/history"} element={<History setText={setText} />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
