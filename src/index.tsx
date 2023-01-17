import React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "normalize.css";
import "./styles/fonts.scss";
import "./styles/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
