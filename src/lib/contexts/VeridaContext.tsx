import React from "react";
import { Client } from "@verida/client-ts";
import { config } from "lib/config";

const client = new Client({
  environment: config.veridaEnv,
});

// TODO: Implement a context with WebUser when we will need to handle user connection
// For the moment only a client is needed
type VeridaContextType = {
  client: Client;
};

export const VeridaContext = React.createContext<VeridaContextType>({
  client,
});

interface VeridaProviderProps {
  children?: React.ReactNode;
}

export const VeridaProvider: React.FunctionComponent<VeridaProviderProps> = (
  props
) => {
  return (
    <VeridaContext.Provider
      value={{
        client,
      }}
    >
      {props.children}
    </VeridaContext.Provider>
  );
};
