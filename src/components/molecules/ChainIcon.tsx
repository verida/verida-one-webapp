import React from "react";
import { ChainIconContainer, Icon } from "components/atoms";
import { getChainLogo } from "lib/utils";
import { Chains } from "lib/types";

type ChainIconProps = {
  chain: Chains;
  verified?: boolean;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const ChainIcon: React.FunctionComponent<ChainIconProps> = (props) => {
  const { chain, verified, ...otherProps } = props;
  const chainIcon = getChainLogo(chain, 24);

  return (
    <div {...otherProps}>
      <div className="relative">
        <ChainIconContainer icon={chainIcon} />
        {verified && (
          <Icon
            type="verida-tick"
            size={16}
            className="absolute bottom-0 right-0"
          />
        )}
      </div>
    </div>
  );
};
