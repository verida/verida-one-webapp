import React, { useCallback, useEffect, useState } from "react";
import { Context } from "@verida/client-ts";
import { VaultAccount, hasSession } from "@verida/account-web-vault";
import { UserProfile } from "../types";
import { config } from "../config";
import { Verida } from "../utils/veridaUtils";

type VeridaProviderType = {
  children?: React.ReactNode;
};

type VeridaContextType = {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnecting: boolean;
  isConnected: boolean;
  account: VaultAccount | null;
  context: Context | null;
  profile: UserProfile | null;
  error?: unknown;
};

export const VeridaContext = React.createContext<VeridaContextType>({
  connect: async () => { },
  disconnect: async () => { },
  isConnecting: false,
  isConnected: false,
  account: null,
  context: null,
  profile: null,
});

export const VeridaProvider: React.FC<VeridaProviderType> = ({ children }) => {
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [account, setAccount] = useState<VaultAccount | null>(null);
  const [context, setContext] = useState<Context | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<unknown>(null);

  const connect = useCallback(async () => {
    if (!config.veridaContextName) {
      // TODO handle env variable not defined
      return;
    }

    setIsConnecting(true);
    try {
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
