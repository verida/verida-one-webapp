import React from "react";

export enum ChainNetworkTypes {
  MAINNET = "mainnet",
  TESTNET = "testnet",
}

export enum Chains {
  ETHEREUM = "eip155:1",
  ETHEREUM_GOERLI = "eip155:5",
  POLYGON = "eip155:137",
  POLYGON_MUMBAI = "eip155:80001",
  ALGORAND = "algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73k",
  ALGORAND_TESTNET = "algorand:SGO1GKSzyE7IEPItTxCByw9x8FmnrCDe",
  NEAR = "near:mainnet",
  NEAR_TESTNET = "near:testnet",
}

export type ChainDefinition = {
  chainId: Chains;
  type: ChainNetworkTypes;
  label: string;
  explorerRootUrl: string;
  explorerAddressUrl: string;
  icon: (size?: number | string) => React.ReactNode;
};
