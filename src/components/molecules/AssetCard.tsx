import React from "react";
import { NftToken } from "lib/types";
import { AssetMedia, SkeletonBase } from "components/atoms";
import { AssetMediaChip } from "./AssetMediaChip";

type AssetCardProps = {
  asset: NftToken;
  variant?: "standard" | "compact";
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

/** Render a card displaying the main information of an Asset: media,
 * labels of the collection and item and price.  */
export const AssetCard: React.FC<AssetCardProps> = (props) => {
  const { asset, variant = "standard", ...otherProps } = props;

  return (
    <div {...otherProps}>
      <div className="flex flex-col items-start space-y-2">
        <div className="relative w-full">
          <AssetMedia
            className="bg-asset-media aspect-square w-full"
            source={asset.metadata.image}
            alt={asset.metadata.name || "Collectible"}
            radius={variant === "compact" ? "rounded-lg" : "rounded-xl"}
          />
          <div className="absolute bottom-0 left-0 ml-1 mb-1 max-w-full pr-2">
            <AssetMediaChip variant={variant} chain={asset.chain_id} />
          </div>
        </div>
        {variant !== "compact" && (
          <div className="flex max-w-full flex-col items-start">
            {asset.name ? (
              <p className="w-full truncate text-primary/60">{asset.name}</p>
            ) : null}
            {asset.metadata.name ? (
              <p className="w-full font-bold line-clamp-2">
                {asset.metadata.name}
              </p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

type AssetCardSkeletonProps = {
  variant?: "standard" | "compact";
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const AssetCardSkeleton: React.FunctionComponent<
  AssetCardSkeletonProps
> = (props) => {
  const { variant = "standard", ...otherProps } = props;

  return (
    <div {...otherProps}>
      <div className="flex animate-pulse flex-col items-start space-y-2">
        <SkeletonBase
          rounded="rounded-xl"
          className="aspect-square w-full opacity-5"
        />
        {variant !== "compact" && (
          <div className="flex w-full max-w-full flex-col items-start space-y-2">
            <SkeletonBase className="h-4 w-3/4 opacity-5" />
            <SkeletonBase className="h-4 w-full opacity-10" />
          </div>
        )}
      </div>
    </div>
  );
};
