import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IconProvider, DEFAULT_ICON_CONFIGS } from "@icon-park/react";
import { IntlProvider } from "./IntlContext";
import { VeridaProvider } from "./VeridaContext";

const queryClient = new QueryClient();

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: "icon", size: "1.25em" };

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider: React.FunctionComponent<Props> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <VeridaProvider>
        <IconProvider value={IconConfig}>
          <IntlProvider>{props.children}</IntlProvider>
        </IconProvider>
      </VeridaProvider>
    </QueryClientProvider>
  );
};
