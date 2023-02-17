import React from "react";
import { IconProvider, DEFAULT_ICON_CONFIGS } from "@icon-park/react";
import { HelmetProvider } from "react-helmet-async";
import { IntlProvider } from "./IntlContext";
import { QueryProvider } from "./QueryContext";
import { VeridaProvider } from "./VeridaContext";

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: "icon", size: "1.25em" };

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: React.FunctionComponent<Props> = (props) => {
  return (
    <QueryProvider>
      <VeridaProvider>
        <HelmetProvider>
          <IconProvider value={IconConfig}>
            <IntlProvider>{props.children}</IntlProvider>
          </IconProvider>
        </HelmetProvider>
      </VeridaProvider>
    </QueryProvider>
  );
};
