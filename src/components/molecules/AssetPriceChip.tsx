import React from "react";
import { Chip } from "components/atoms";
import { Chains } from "lib/constants";
import { getChainLogo } from "lib/utils";

type AssetPriceChipVariant = "compact" | "standard";

type AssetPriceChipProps = {
  chain: Chains;
  price: number;
  unit: string;
  variant?: AssetPriceChipVariant;
};

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
