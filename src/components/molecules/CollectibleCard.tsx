import React from "react";
import { AssetPriceChip } from "components/molecules";
import { Collectible } from "lib/types";
import { AssetMedia } from "components/atoms";
import { splitTokenLabel } from "lib/utils";

type CollectibleCardProps = {
  collectible: Collectible;
  variant?: "standard" | "compact";
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

/** Render a card displaying the main information of a Collectible: media,
 * labels of the collection and item and price.  */
export const CollectibleCard: React.FC<CollectibleCardProps> = (props) => {
  const { collectible, variant = "standard", ...otherProps } = props;

  const { labelWithoutIdPart, idPart } = splitTokenLabel(
    collectible.tokenLabel,
    collectible.tokenId
  );

  return (
    <div {...otherProps}>
      <div className="flex flex-col items-start space-y-2">
        <div className="relative">
          <AssetMedia
            src={collectible.media}
            alt={collectible.tokenLabel}
            radius={variant === "compact" ? "rounded-lg" : "rounded-xl"}
          />
          {collectible.floorPrice && collectible.priceUnit && (
            <div className="absolute bottom-0 left-0 ml-1 mb-1 max-w-full pr-2">
              <AssetPriceChip
                variant={variant}
                chain={collectible.chain}
                price={collectible.floorPrice}
                unit={collectible.priceUnit}
              />
            </div>
          )}
        </div>
        {variant !== "compact" && (
          <div className="flex max-w-full flex-col items-start">
            <p className="w-full truncate text-primary/60">
              {collectible.collectionLabel}
            </p>
            <p className="flex w-full font-bold">
              <span className="mr-1 truncate">{labelWithoutIdPart}</span>
              {idPart && <span className="whitespace-nowrap">{idPart}</span>}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
