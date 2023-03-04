import React from "react";
import { Client } from "@verida/client-ts";
import { VeridaNameClient } from "@verida/vda-name-client";
import { config } from "lib/config";

// For testing
// TODO: Remove the VeridaNameClient when it will be fully available through the Client
const nameClient = new VeridaNameClient({
  chainNameOrId: "testnet",
  // callType: "gasless",
  callType: "web3",
  web3Options: {
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
  },
});

const client = new Client({
  environment: config.veridaEnv,
});

// TODO: Implement a context with WebUser when we will need to handle user connection
// For the moment only a client is needed
type VeridaContextType = {
  client: Client;
  nameClient: VeridaNameClient;
};

export const VeridaContext = React.createContext<VeridaContextType>({
  client,
  nameClient,
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
        nameClient,
      }}
    >
      {props.children}
    </VeridaContext.Provider>
  );
};
