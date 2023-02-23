import React from "react";
import { NftToken } from "lib/types";
import { AssetMedia, SkeletonBase } from "components/atoms";

type CollectibleCardProps = {
  collectible: NftToken;
  variant?: "standard" | "compact";
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

/** Render a card displaying the main information of a Collectible: media,
 * labels of the collection and item and price.  */
export const CollectibleCard: React.FC<CollectibleCardProps> = (props) => {
  const { collectible, variant = "standard", ...otherProps } = props;

  return (
    <div {...otherProps}>
      <div className="flex flex-col items-start space-y-2">
        <div className="relative w-full">
          <AssetMedia
            className="aspect-square w-full"
            source={collectible.metadata.image}
            alt={collectible.metadata.name || "Collectible"}
            radius={variant === "compact" ? "rounded-lg" : "rounded-xl"}
          />
        </div>
        {variant !== "compact" && (
          <div className="flex max-w-full flex-col items-start">
            {collectible.name ? (
              <p className="w-full truncate text-primary/60">
                {collectible.name}
              </p>
            ) : null}
            {collectible.metadata.name ? (
              <p className="w-full font-bold line-clamp-2">
                {collectible.metadata.name}
              </p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

type CollectibleCardSkeletonProps = {
  variant?: "standard" | "compact";
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const CollectibleCardSkeleton: React.FunctionComponent<
  CollectibleCardSkeletonProps
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
