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

  // FIXME: Investigate layout shift between 646px vw and 696px vw
  return (
    <div {...containerProps}>
      <ul className="mx-auto mt-[25.4%] grid w-[85.5%] grid-cols-2 content-start gap-0 sm:mt-[13.666%] sm:w-[92.33%] sm:grid-cols-4">
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
