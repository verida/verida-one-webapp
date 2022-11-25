import React from "react";
import { IntlProvider } from "./IntlContext";

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: React.FunctionComponent<Props> = (props) => {
  return <IntlProvider>{props.children}</IntlProvider>;
};
