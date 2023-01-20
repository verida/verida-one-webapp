import { EnvironmentType } from "@verida/client-ts";

// Application variables
const appTitle = "Verida One";

// Environment variables
const nodeEnv = process.env.NODE_ENV || "development";
const isDevMode = nodeEnv === "development";

// Verida variables
const veridaEnv: EnvironmentType =
  process.env.REACT_APP_VERIDA_ENV === "local"
    ? EnvironmentType.LOCAL
    : process.env.REACT_APP_VERIDA_ENV === "mainnet"
    ? EnvironmentType.MAINNET
    : EnvironmentType.TESTNET;
const veridaContextName = process.env.REACT_APP_VERIDA_APP_CONTEXT_NAME;
const veridaLogoUrl = process.env.REACT_APP_VERIDA_APP_LOGO_URL;

// Feature flags variables
const features = {
  isSearchEnabled: isDevMode ? true : false,
  isQueryProfileEnabled: isDevMode ? true : false,
  isFetchTokensEnabled: isDevMode ? true : false,
  isMockDataEnabled:
    process.env.REACT_APP_ENABLE_MOCK_DATA === "true" ? true : false,
};

export const config = {
  appTitle,
  nodeEnv,
  veridaEnv,
  veridaContextName,
  veridaLogoUrl,
  features,
};
