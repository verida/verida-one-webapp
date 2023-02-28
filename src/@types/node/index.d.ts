declare namespace NodeJS {
  export interface ProcessEnv {
    EXTEND_ESLINT?: "true" | "false";
    REACT_APP_VERIDA_ONE_CONTEXT_NAME?: string;
    REACT_APP_VERIDA_APP_LOGO_URL?: string;
    REACT_APP_VERIDA_ENV?: "testnet" | "mainnet" | "local";
    REACT_APP_PROFILE_SCHEMA_URL?: string;
    REACT_APP_WALLET_PROVIDER_API_BASE_URL?: string;
    REACT_APP_ENABLE_DEV_FEATURES?: "true" | "false";
    REACT_APP_ENABLE_MOCK_DATA?: "true" | "false";
  }
}
