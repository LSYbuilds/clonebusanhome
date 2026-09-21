import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const baasename = import.meta.env.DEV ? "" : "/clonebusanhome";

// 일단 이거 페이지부터  따고!
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={baasename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
