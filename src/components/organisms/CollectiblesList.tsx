import { CollectibleCard } from "components/molecules";
import { Collectible } from "lib/types";
import React from "react";
import { Link } from "react-router-dom";

type CollectiblesListProps = {
  collectibles: Collectible[];
};

export const CollectiblesList: React.FC<CollectiblesListProps> = ({
  collectibles,
}) => {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
      {collectibles.map((collectible) => (
        <div key={`${collectible.contractAddress}#${collectible.tokenId}`}>
          <Link to={`${collectible.contractAddress}#${collectible.tokenId}`}>
            <CollectibleCard variant="standard" collectible={collectible} />
          </Link>
        </div>
      ))}
    </div>
  );
};
