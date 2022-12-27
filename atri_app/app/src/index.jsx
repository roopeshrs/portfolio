import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalContext } from "@atrilabs/core/lib/reactUtilities";

const rootEl = document.getElementById("root");

hydrateRoot(
  rootEl,
  <GlobalContext.Provider value={{ window }}>
    <BrowserRouter basename={"C:/Program Files/Git/portfolio-atri" || undefined}>
      <App />
    </BrowserRouter>
  </GlobalContext.Provider>
);
