import React, { useCallback, useEffect, useState } from "react";
import { Client, Context } from "@verida/client-ts";
import { VaultAccount, hasSession } from "@verida/account-web-vault";
import { VaultPublicProfile } from "lib/types";
import { config } from "lib/config";
import { Verida } from "lib/utils";

const client = new Client({
  environment: config.veridaEnv,
});

interface VeridaProviderProps {
  children?: React.ReactNode;
}

type VeridaContextType = {
  client: Client;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnecting: boolean;
  isConnected: boolean;
  account: VaultAccount | null;
  context: Context | null;
  profile: VaultPublicProfile | null;
  error?: unknown;
};

export const VeridaContext = React.createContext<VeridaContextType>({
  client,
  connect: async () => {},
  disconnect: async () => {},
  isConnecting: false,
  isConnected: false,
  account: null,
  context: null,
  profile: null,
});

export const VeridaProvider: React.FC<VeridaProviderProps> = (props) => {
  const { children } = props;
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [account, setAccount] = useState<VaultAccount | null>(null);
  const [context, setContext] = useState<Context | null>(null);
  const [profile, setProfile] = useState<VaultPublicProfile | null>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const handler = async () => {
      if (!config.veridaContextName) {
        // TODO handle env variable not defined
        return;
      }
      const tContext = await client.openContext(config.veridaContextName);
      setContext(tContext || null);
    };
    void handler();
  }, []);

  const connect = useCallback(async () => {
    if (!config.veridaContextName) {
      // TODO handle env variable not defined
      return;
    }

    setIsConnecting(true);
    try {
      // TODO: Use the previously created Verida client in the connect
      const [vContext, vAccount, vProfile] = await Verida.connect(
        config.veridaContextName,
        config.veridaEnv,
        config.veridaLogoUrl
      );
      setContext(vContext);
      setAccount(vAccount);
      setProfile(vProfile);
      setIsConnected(true);
    } catch (error) {
      setError(error);
      setIsConnected(false);
      setAccount(null);
      setContext(null);
      setProfile(null);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(async () => {
    try {
      if (account) {
        await Verida.disconnect(account, config.veridaContextName);
      }
      setIsConnected(false);
      setIsConnecting(false);
      setAccount(null);
      setContext(null);
      setProfile(null);
    } catch (error) {
      setError(error);
    }
  }, [account]);

  useEffect(() => {
    if (config.veridaContextName && hasSession(config.veridaContextName)) {
      void connect();
    }
  }, [connect]);

  const contextValue: VeridaContextType = {
    client,
    error,
    connect,
    disconnect,
    isConnecting,
    isConnected,
    account,
    context,
    profile,
  };

  return (
    <VeridaContext.Provider value={contextValue}>
      {children}
    </VeridaContext.Provider>
  );
};
