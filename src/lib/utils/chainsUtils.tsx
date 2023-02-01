import React from "react";
import {
  ALGORAND_EXPLORER_ADDRESS_URL,
  ALGORAND_TESTNET_EXPLORER_ADDRESS_URL,
  ChainNetworkTypes,
  Chains,
  chainLabels,
  ETHEREUM_EXPLORER_ADDRESS_URL,
  ETHEREUM_TESTNET_EXPLORER_ADDRESS_URL,
  NEAR_EXPLORER_ADDRESS_URL,
  NEAR_TESTNET_EXPLORER_ADDRESS_URL,
  POLYGON_EXPLORER_ADDRESS_URL,
  POLYGON_TESTNET_EXPLORER_ADDRESS_URL,
} from "lib/constants";
import { Icon } from "components/atoms";

export const getChainLabel = (chain: Chains): string => {
  switch (chain) {
    case Chains.ALGORAND:
    case Chains.ETHEREUM:
    case Chains.NEAR:
    case Chains.POLYGON:
      return chainLabels[chain];
    default:
      throw new Error(
        `Chain not supported${chain ? ` (${chain as string})` : ""}`
      );
  }
};

export const getChainLogo = (
  chain: Chains,
  size?: number | string
): React.ReactNode => {
  switch (chain) {
    case Chains.ALGORAND:
      return <Icon type="chain-algorand" size={size} />;
    case Chains.ETHEREUM:
      return <Icon type="chain-ethereum" size={size} />;
    case Chains.NEAR:
      return <Icon type="chain-near" size={size} />;
    case Chains.POLYGON:
      return <Icon type="chain-polygon" size={size} />;
    default:
      throw new Error("Chain not supported");
  }
};

export const getChainExplorerUrlForAddress = (
  chain: Chains,
  address: string,
  network = ChainNetworkTypes.MAINNET
): string => {
  switch (chain) {
    case Chains.ALGORAND:
      return `${
        network === ChainNetworkTypes.TESTNET
          ? ALGORAND_TESTNET_EXPLORER_ADDRESS_URL
          : ALGORAND_EXPLORER_ADDRESS_URL
      }/${address}`;
    case Chains.ETHEREUM:
      return `${
        network === ChainNetworkTypes.TESTNET
          ? ETHEREUM_TESTNET_EXPLORER_ADDRESS_URL
          : ETHEREUM_EXPLORER_ADDRESS_URL
      }/${address}`;
    case Chains.NEAR:
      return `${
        network === ChainNetworkTypes.TESTNET
          ? NEAR_TESTNET_EXPLORER_ADDRESS_URL
          : NEAR_EXPLORER_ADDRESS_URL
      }/${address}`;
    case Chains.POLYGON:
      return `${
        network === ChainNetworkTypes.TESTNET
          ? POLYGON_TESTNET_EXPLORER_ADDRESS_URL
          : POLYGON_EXPLORER_ADDRESS_URL
      }/${address}`;
    default:
      throw new Error("Chain not supported");
  }
};
