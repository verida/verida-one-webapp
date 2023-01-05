import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import "@icon-park/react/styles/index.css";
import { App } from "App";
import { AppContextProvider } from "lib/contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
