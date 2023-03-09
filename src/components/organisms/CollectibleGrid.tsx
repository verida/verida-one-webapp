import { AssetCard, AssetCardSkeleton } from "components/molecules";
import { Collectible } from "lib/types";
import React from "react";
import { Link } from "react-router-dom";

type CollectibleGridProps = {
  collectibles?: Collectible[];
} & React.ComponentPropsWithoutRef<"div">;

/** Component rendering the list of Collectibles */
export const CollectibleGrid: React.FC<CollectibleGridProps> = (props) => {
  const { collectibles, ...containerProps } = props;

  if (collectibles) {
    return (
      <div {...containerProps}>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
          {collectibles.map((collectible) => (
            <li
              key={`${collectible.chain_id}/${collectible.token_address}/${collectible.token_id}`}
            >
              <Link
                to={`${collectible.chain_id}/${collectible.token_address}/${collectible.token_id}`}
              >
                <AssetCard variant="standard" asset={collectible} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // If no collectibles, display loading state
  const skeletonItems = Array(4).fill("");
  return (
    <div {...containerProps}>
      <ul className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
        {skeletonItems.map((_, index) => (
          <li key={index}>
            <AssetCardSkeleton />
          </li>
        ))}
      </ul>
    </div>
  );
};
