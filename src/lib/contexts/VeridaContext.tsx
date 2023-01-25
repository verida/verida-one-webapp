import React, { useRef } from "react";
import { WebUser } from "@verida/account-web-vault";
import { config } from "lib/config";

if (!config.veridaContextName) {
  throw new Error("The Verida One context name is not defined");
}

const webUserInstance = new WebUser({
  clientConfig: {
    environment: config.veridaEnv,
  },
  contextConfig: {
    name: config.veridaContextName,
  },
  accountConfig: {
    request: {
      logoUrl: config.veridaLogoUrl,
      // TODO: Add openUrl when https://github.com/verida/vault-mobile/issues/663 is fixed
    },
  },
});

type VeridaContextType = {
  webUserInstanceRef: React.MutableRefObject<WebUser>;
};

export const VeridaContext = React.createContext<VeridaContextType>({
  webUserInstanceRef: { current: webUserInstance },
});

interface VeridaProviderProps {
  children?: React.ReactNode;
}

export const VeridaProvider: React.FunctionComponent<VeridaProviderProps> = (
  props
) => {
  const webUserInstanceRef = useRef(webUserInstance);

  return (
    <VeridaContext.Provider
      value={{
        webUserInstanceRef,
      }}
    >
      {props.children}
    </VeridaContext.Provider>
  );
};
