import React from "react";
import { Chains, ETHEREUM_CHAIN_EXPLORER_ADDRESS_URL } from "lib/constants";
import { Icon } from "components/atoms";

export const getChainLogo = (chain: Chains, size?: number): React.ReactNode => {
  // TODO: introduce variants such as coloured, white, black, ...

  switch (chain) {
    case Chains.ETHEREUM:
      return <Icon type="chain-ethereum" size={size} />;
    case Chains.POLYGON: // TODO: Provide an icon for Polygon
    case Chains.ALGORAND: // TODO: Provide an icon for Algorand
    case Chains.NEAR: // TODO: Provide an icon for Near
    default:
      return null;
  }
};

export const getChainExplorerUrlForAddress = (
  chain: Chains,
  address: string
): string => {
  switch (chain) {
    case Chains.ETHEREUM:
      return `${ETHEREUM_CHAIN_EXPLORER_ADDRESS_URL}/${address}`;
    case Chains.POLYGON: // TODO: Provide an icon for Polygon
    case Chains.ALGORAND: // TODO: Provide an icon for Algorand
    case Chains.NEAR: // TODO: Provide an icon for Near
    default:
      throw new Error("Chain not yet implemented");
  }
};
