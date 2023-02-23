import React from "react";
import { Chip } from "components/atoms";
import { getChainLabel, getChainLogo } from "lib/utils";
import { Chains } from "lib/types";

type AssetMediaChipVariant = "compact" | "standard";

type AssetMediaChipProps = {
  chain: Chains;
  price?: number;
  unit?: string;
  variant?: AssetMediaChipVariant;
};

// TODO: Get rid of the variant prop and use a CSS container query instead

/** Render a chip with the price, unit and chain logo of an asset */
export const AssetMediaChip: React.FunctionComponent<AssetMediaChipProps> = (
  props
) => {
  const { chain, price, unit, variant = "standard" } = props;

  const chainLogo = getChainLogo(chain, variant === "compact" ? 12 : 16);
  const chainLabel = getChainLabel(chain);

  const lineHeight = variant === "compact" ? "leading-3" : "leading-4";
  const fontSize = variant === "compact" ? "text-[0.625rem]" : "text-xs";

  return (
    <Chip className={`flex items-center space-x-0.5 ${fontSize} ${lineHeight}`}>
      <span title={chainLabel}>{chainLogo}</span>
      {price ? <span className="truncate">{price}</span> : null}
      {unit ? <span className="ml-0.5 whitespace-nowrap">{unit}</span> : null}
    </Chip>
  );
};
