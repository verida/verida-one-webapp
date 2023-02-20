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

  // For n columns:
  //   grid width = (3 * n) / (3 * n + 1) * 100%
  //   grid margin-top = sqrt(3) / (3 * n + 1) * 100%
  return (
    <div {...containerProps}>
      <ul className="mx-auto mt-[calc(1.73205/7_*_100%)] grid w-[calc(6/7_*_100%)] grid-cols-2 sm:mt-[calc(1.73205/13_*_100%)] sm:w-[calc(12/13_*_100%)] sm:grid-cols-4">
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
