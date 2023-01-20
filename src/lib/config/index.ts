import { EnvironmentType } from "@verida/client-ts";

// Application variables
const appTitle = "Verida One";

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
const isDevFeaturesEnabled =
  process.env.REACT_APP_ENABLE_DEV_FEATURES === "true";

const features = {
  // This object allows a management per feature, with dedicated env var if needed
  isSearchEnabled: isDevFeaturesEnabled,
  isSharingEnabled: isDevFeaturesEnabled,
  isVeridaConnectEnabled: isDevFeaturesEnabled,
  isQueryProfileEnabled: isDevFeaturesEnabled,
  isFetchTokensEnabled: isDevFeaturesEnabled,
};

const isMockDataEnabled = process.env.REACT_APP_ENABLE_MOCK_DATA === "true";

export const config = {
  appTitle,
  veridaEnv,
  veridaContextName,
  veridaLogoUrl,
  features,
  isMockDataEnabled,
};
