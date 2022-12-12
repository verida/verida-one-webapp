import { EnvironmentType } from "@verida/client-ts";

const appTitle = "Verida One";

const nodeEnv = process.env.NODE_ENV || "development";

const veridaEnv: EnvironmentType =
  process.env.REACT_APP_VERIDA_ENV === "local"
    ? EnvironmentType.LOCAL
    : process.env.REACT_APP_VERIDA_ENV === "mainnet"
    ? EnvironmentType.MAINNET
    : EnvironmentType.TESTNET;

const veridaContextName = process.env.REACT_APP_VERIDA_APP_CONTEXT_NAME;
const veridaLogoUrl = process.env.REACT_APP_VERIDA_APP_LOGO_URL;
const kycProviderFormURL = process.env.REACT_APP_KYC_PROVIDER_URL;
const kycVCSchemaURL = process.env.REACT_APP_KYC_VC_SCHEMA_URL;

export const config = {
  appTitle,
  nodeEnv,
  veridaEnv,
  veridaContextName,
  veridaLogoUrl,
  kycProviderFormURL,
  kycVCSchemaURL,
};
