import React from "react";
import { Badge } from "lib/types";
import { BadgeMosaicItem } from "components/molecules";

type BadgeMosaicProps = {
  badges: Badge[];
} & React.ComponentPropsWithoutRef<"div">;

export const BadgeMosaic: React.FunctionComponent<BadgeMosaicProps> = (
  props
) => {
  const { badges, ...containerProps } = props;

  return (
    <div {...containerProps}>
      <ul className="mx-auto mt-[25.5%] grid w-[85.5%] grid-cols-2 sm:mt-[calc(0.41/3_*_100%)] sm:w-[calc(2.77/3_*_100%)] sm:grid-cols-4">
        {badges.map((badge) => (
          <BadgeMosaicItem
            key={`${badge.chainId}/${badge.contractAddress}/${badge.tokenId}`}
            badge={badge}
            to={`${badge.chainId}/${badge.contractAddress}/${badge.tokenId}`}
          />
        ))}
      </ul>
    </div>
  );
};
