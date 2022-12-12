import React from "react";
import { IntlProvider } from "./IntlContext";
import { VeridaProvider } from "./VeridaContext";

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: React.FunctionComponent<Props> = (props) => {
  return (
    <VeridaProvider>
      <IntlProvider>{props.children}</IntlProvider>
    </VeridaProvider>
  );
};
