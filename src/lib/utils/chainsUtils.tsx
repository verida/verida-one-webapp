import React from "react";
import { chainsDefinitions } from "lib/constants";
import { Chains } from "lib/types";

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
