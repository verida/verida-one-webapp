import React from "react";
import { Icon } from "components/atoms";
import { ChainNetworkTypes, Chains, ChainDefinition } from "lib/types";

export const chainsDefinitions: Record<Chains, ChainDefinition> = {
  [Chains.ETHEREUM]: {
    chainId: Chains.ETHEREUM,
    type: ChainNetworkTypes.MAINNET,
    label: "Ethereum",
    explorerRootUrl: "https://etherscan.io",
    explorerAddressUrl: "https://etherscan.io/address",
    icon: (size?: number | string) => (
      <Icon type="chain-ethereum" size={size} />
    ),
  },
  [Chains.ETHEREUM_GOERLI]: {
    chainId: Chains.ETHEREUM_GOERLI,
    type: ChainNetworkTypes.TESTNET,
    label: "Ethereum Goerli",
    explorerRootUrl: "https://goerli.etherscan.io",
    explorerAddressUrl: "https://goerli.etherscan.io/address",
    icon: (size?: number | string) => (
      <Icon type="chain-ethereum" size={size} />
    ),
  },
  [Chains.POLYGON]: {
    chainId: Chains.POLYGON,
    type: ChainNetworkTypes.MAINNET,
    label: "Polygon",
    explorerRootUrl: "https://polygonscan.com",
    explorerAddressUrl: "https://polygonscan.com/address",
    icon: (size?: number | string) => <Icon type="chain-polygon" size={size} />,
  },
  [Chains.POLYGON_MUMBAI]: {
    chainId: Chains.POLYGON_MUMBAI,
    type: ChainNetworkTypes.TESTNET,
    label: "Polygon Mumbai",
    explorerRootUrl: "https://mumbai.polygonscan.com",
    explorerAddressUrl: "https://mumbai.polygonscan.com/address",
    icon: (size?: number | string) => <Icon type="chain-polygon" size={size} />,
  },
  [Chains.ALGORAND]: {
    chainId: Chains.ALGORAND,
    type: ChainNetworkTypes.MAINNET,
    label: "Algorand",
    explorerRootUrl: "https://algoexplorer.io",
    explorerAddressUrl: "https://algoexplorer.io/address",
    icon: (size?: number | string) => (
      <Icon type="chain-algorand" size={size} />
    ),
  },
  [Chains.ALGORAND_TESTNET]: {
    chainId: Chains.ALGORAND_TESTNET,
    type: ChainNetworkTypes.TESTNET,
    label: "Algorand Testnet",
    explorerRootUrl: "https://testnet.algoexplorer.io",
    explorerAddressUrl: "https://testnet.algoexplorer.io/address",
    icon: (size?: number | string) => (
      <Icon type="chain-algorand" size={size} />
    ),
  },
  [Chains.NEAR]: {
    chainId: Chains.NEAR,
    type: ChainNetworkTypes.MAINNET,
    label: "NEAR Protocol",
    explorerRootUrl: "https://explorer.near.org",
    explorerAddressUrl: "https://explorer.near.org/accounts",
    icon: (size?: number | string) => <Icon type="chain-near" size={size} />,
  },
  [Chains.NEAR_TESTNET]: {
    chainId: Chains.NEAR_TESTNET,
    type: ChainNetworkTypes.TESTNET,
    label: "NEAR Protocol Testnet",
    explorerRootUrl: "https://explorer.testnet.near.org",
    explorerAddressUrl: "https://explorer.testnet.near.org/accounts",
    icon: (size?: number | string) => <Icon type="chain-near" size={size} />,
  },
};

export const getChainLabel = (chain: Chains): string => {
  const label = chainsDefinitions[chain]?.label;
  if (label === undefined) {
    throw new Error(
      `Chain not supported${chain ? ` (${chain as string})` : ""}`
    );
  }
  return label;
};

export const getChainLogo = (
  chain: Chains,
  size?: number | string
): React.ReactNode => {
  const icon = chainsDefinitions[chain]?.icon(size);
  if (icon === undefined) {
    throw new Error(
      `Chain not supported${chain ? ` (${chain as string})` : ""}`
    );
  }
  return icon;
};

export const getChainExplorerUrl = (chain: Chains): string => {
  const url = chainsDefinitions[chain]?.explorerRootUrl;
  if (url === undefined) {
    throw new Error(
      `Chain not supported${chain ? ` (${chain as string})` : ""}`
    );
  }
  return url;
};

export const getChainExplorerUrlForAddress = (
  chain: Chains,
  address: string
): string => {
  const url = chainsDefinitions[chain]?.explorerAddressUrl;
  if (url === undefined) {
    throw new Error(
      `Chain not supported${chain ? ` (${chain as string})` : ""}`
    );
  }
  return `${url}/${address}`;
};
