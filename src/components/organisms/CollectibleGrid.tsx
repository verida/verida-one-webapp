import { CollectibleCard } from "components/molecules";
import { Collectible } from "lib/types";
import React from "react";
import { Link } from "react-router-dom";

type CollectibleGridProps = {
  collectibles: Collectible[];
} & React.ComponentPropsWithoutRef<"div">;

export const CollectibleGrid: React.FC<CollectibleGridProps> = (props) => {
  const { collectibles, ...containerProps } = props;
  return (
    <div {...containerProps}>
      <ul className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
        {collectibles.map((collectible) => (
          <li key={`${collectible.contractAddress}#${collectible.tokenId}`}>
            <Link to={`${collectible.contractAddress}#${collectible.tokenId}`}>
              <CollectibleCard variant="standard" collectible={collectible} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
