import { EnvironmentType } from "@verida/types";
import {
  APP_TITLE,
  PROFILE_SCHEMA_URL,
  VERIDA_CONTEXT_NAME,
} from "lib/constants";

// TODO: set up a pre-build script validating env variables

// Application variables
const appTitle = APP_TITLE;

// Verida variables
const veridaOneContextName = VERIDA_CONTEXT_NAME;

const veridaLogoUrl = process.env.REACT_APP_VERIDA_APP_LOGO_URL;

const veridaEnv: EnvironmentType =
  process.env.REACT_APP_VERIDA_ENV === "local"
    ? EnvironmentType.LOCAL
    : process.env.REACT_APP_VERIDA_ENV === "devnet"
      ? EnvironmentType.DEVNET
      : process.env.REACT_APP_VERIDA_ENV === "mainnet"
        ? EnvironmentType.MAINNET
        : EnvironmentType.TESTNET;

const veridaRpcUrl = process.env.REACT_APP_VERIDA_RPC_URL || undefined;

// Schemas
// Set a fallback to avoid further issues.
const schemasURL = {
  profile: process.env.REACT_APP_PROFILE_SCHEMA_URL || PROFILE_SCHEMA_URL,
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
  veridaRpcUrl,
  veridaOneContextName,
  veridaLogoUrl,
  schemasURL,
  walletProviderApiBaseUrl,
  features,
  isMockDataEnabled,
};
