import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import "@icon-park/react/styles/index.css";
import { App } from "App";
import { AppContextProvider } from "lib/contexts";
import { ErrorBoundary } from "components/molecules";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary
      noIntl
      defaultFallbackCardClassName="h-screen w-screen flex flex-col items-center justify-center"
    >
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
