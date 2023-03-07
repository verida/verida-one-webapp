import { EnvironmentType } from "@verida/types";

// Application variables
const appTitle = "Verida One";

// Verida variables
const veridaEnv: EnvironmentType =
  process.env.REACT_APP_VERIDA_ENV === "local"
    ? EnvironmentType.LOCAL
    : process.env.REACT_APP_VERIDA_ENV === "mainnet"
    ? EnvironmentType.MAINNET
    : EnvironmentType.TESTNET;
const veridaOneContextName = process.env.REACT_APP_VERIDA_ONE_CONTEXT_NAME;
if (!veridaOneContextName) {
  throw new Error("The Verida One context name is not defined");
}
const veridaLogoUrl = process.env.REACT_APP_VERIDA_APP_LOGO_URL;

// Schemas
// Set a fallback to avoid further issues.
// TODO: set up a pre-build script validating env variables
const schemasURL = {
  profile:
    process.env.REACT_APP_PROFILE_SCHEMA_URL ||
    "https://common.schemas.verida.io/veridaOne/profile/v0.1.0/schema.json",
};

// API
const walletProviderApiBaseUrl =
  process.env.REACT_APP_WALLET_PROVIDER_API_BASE_URL;

// Feature flags variables
const isDevFeaturesEnabled =
  process.env.REACT_APP_ENABLE_DEV_FEATURES === "true";

const features = {
  // This object allows a management per feature
  // Add dedicated feature env var if needed
  isVeridaConnectEnabled: isDevFeaturesEnabled,
};

const isMockDataEnabled = process.env.REACT_APP_ENABLE_MOCK_DATA === "true";

export const config = {
  appTitle,
  veridaEnv,
  veridaOneContextName,
  veridaLogoUrl,
  schemasURL,
  walletProviderApiBaseUrl,
  features,
  isMockDataEnabled,
};
