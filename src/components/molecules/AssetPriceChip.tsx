import React from "react";
import { Chip } from "components/atoms";
import { getChainLogo } from "lib/utils";
import { Chains } from "lib/types";

type AssetPriceChipVariant = "compact" | "standard";

type AssetPriceChipProps = {
  chain: Chains;
  price: number;
  unit: string;
  variant?: AssetPriceChipVariant;
};

/** Render a chip with the price, unit and chain logo of an asset */
export const AssetPriceChip: React.FunctionComponent<AssetPriceChipProps> = (
  props
) => {
  const { chain, price, unit, variant = "standard" } = props;

  const chainLogo = getChainLogo(chain, 16);

  const lineHeight = variant === "compact" ? "leading-3" : "leading-4";

  return (
    <Chip className={`flex items-center text-xs  ${lineHeight}`}>
      {variant !== "compact" && <span className="mr-0.5">{chainLogo}</span>}
      <span className="truncate">{price}</span>
      <span className="ml-0.5 whitespace-nowrap">{unit}</span>
    </Chip>
  );
};
