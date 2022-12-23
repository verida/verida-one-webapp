export enum Chains { // TODO: Follow wallet provider returned values
  ETHEREUM = "ethereum",
  POLYGON = "polygon",
  ALGORAND = "algorand",
  NEAR = "near",
}

// Following explorer are for mainnets

// Algorand
export const ALGORAND_EXPLORER_BASE_URL = "https://algoexplorer.io/address";
export const ALGORAND_EXPLORER_ADDRESS_URL = `${ALGORAND_EXPLORER_BASE_URL}/address`;

// Ethereum
export const ETHEREUM_EXPLORER_BASE_URL = "https://etherscan.io";
export const ETHEREUM_EXPLORER_ADDRESS_URL = `${ETHEREUM_EXPLORER_BASE_URL}/address`;

// Near
export const NEAR_EXPLORER_BASE_URL = "https://explorer.near.org";
export const NEAR_EXPLORER_ADDRESS_URL = `${NEAR_EXPLORER_BASE_URL}/accounts`;

// Polygon
export const POLYGON_EXPLORER_BASE_URL = "https://polygonscan.com";
export const POLYGON_EXPLORER_ADDRESS_URL = `${POLYGON_EXPLORER_BASE_URL}/address`;
