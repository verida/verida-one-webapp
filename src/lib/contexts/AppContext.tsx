import React from "react";
import { IntlProvider } from "./IntlContext";
import { VeridaProvider } from "./VeridaContext";
import { IconProvider, DEFAULT_ICON_CONFIGS } from "@icon-park/react";

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: "icon", size: "1.25em" };

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: React.FunctionComponent<Props> = (props) => {
  return (
    <VeridaProvider>
      <IconProvider value={IconConfig}>
        <IntlProvider>{props.children}</IntlProvider>
      </IconProvider>
    </VeridaProvider>
  );
};
