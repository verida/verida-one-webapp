// TODO: Check consistency of values with Wallet Provider

export enum ChainNetworkTypes {
  MAINNET = "mainnet",
  TESTNET = "testnet",
}

export enum Chains {
  ETHEREUM = "ethereum",
  POLYGON = "polygon",
  ALGORAND = "algorand",
  NEAR = "near",
}

// Chain Explorers

// Algorand
export const ALGORAND_EXPLORER_BASE_URL = "https://algoexplorer.io";
export const ALGORAND_EXPLORER_ADDRESS_URL = `${ALGORAND_EXPLORER_BASE_URL}/address`;

export const ALGORAND_TESTNET_EXPLORER_BASE_URL =
  "https://testnet.algoexplorer.io";
export const ALGORAND_TESTNET_EXPLORER_ADDRESS_URL = `${ALGORAND_TESTNET_EXPLORER_BASE_URL}/address`;

// Ethereum
export const ETHEREUM_EXPLORER_BASE_URL = "https://etherscan.io";
export const ETHEREUM_EXPLORER_ADDRESS_URL = `${ETHEREUM_EXPLORER_BASE_URL}/address`;

export const ETHEREUM_TESTNET_EXPLORER_BASE_URL = "https://goerli.etherscan.io";
export const ETHEREUM_TESTNET_EXPLORER_ADDRESS_URL = `${ETHEREUM_TESTNET_EXPLORER_BASE_URL}/address`;

// Near
export const NEAR_EXPLORER_BASE_URL = "https://explorer.near.org";
export const NEAR_EXPLORER_ADDRESS_URL = `${NEAR_EXPLORER_BASE_URL}/accounts`;

export const NEAR_TESTNET_EXPLORER_BASE_URL =
  "https://explorer.testnet.near.org";
export const NEAR_TESTNET_EXPLORER_ADDRESS_URL = `${NEAR_TESTNET_EXPLORER_BASE_URL}/accounts`;

// Polygon
export const POLYGON_EXPLORER_BASE_URL = "https://polygonscan.com";
export const POLYGON_EXPLORER_ADDRESS_URL = `${POLYGON_EXPLORER_BASE_URL}/address`;

export const POLYGON_TESTNET_EXPLORER_BASE_URL =
  "https://mumbai.polygonscan.com";
export const POLYGON_TESTNET_EXPLORER_ADDRESS_URL = `${POLYGON_TESTNET_EXPLORER_BASE_URL}/address`;
