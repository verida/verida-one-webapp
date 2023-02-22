import React from "react";
import { Badge } from "lib/types";
import { BadgeMosaicItem, BadgeMosaicItemSkeleton } from "components/molecules";

type BadgeMosaicProps = {
  badges?: Badge[];
} & React.ComponentPropsWithoutRef<"div">;

export const BadgeMosaic: React.FunctionComponent<BadgeMosaicProps> = (
  props
) => {
  const { badges, ...containerProps } = props;

  // Grid styling for n columns:
  //   grid width = (3 * n) / (3 * n + 1) * 100%
  //   grid margin-top = sqrt(3) / (3 * n + 1) * 100%

  if (badges) {
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
  }

  // If no badges, display loading state
  const skeletonItems = Array(4).fill("");
  return (
    <div {...containerProps}>
      <ul className="mx-auto mt-[calc(1.73205/7_*_100%)] grid w-[calc(6/7_*_100%)] animate-pulse grid-cols-2 sm:mt-[calc(1.73205/13_*_100%)] sm:w-[calc(12/13_*_100%)] sm:grid-cols-4">
        {skeletonItems.map((_, index) => (
          <BadgeMosaicItemSkeleton key={index} />
        ))}
      </ul>
    </div>
  );
};
