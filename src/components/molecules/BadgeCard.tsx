import React from "react";
import { Collectible } from "lib/types";
import { AssetMedia } from "components/atoms";

type BadgeCardProps = {
  badge: Collectible;
  variant?: "standard" | "compact";
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

/** Render a card displaying a badge  */
export const BadgeCard: React.FC<BadgeCardProps> = (props) => {
  const { badge, variant = "standard", ...otherProps } = props;

  return (
    <div {...otherProps}>
      <div className="flex flex-col items-center space-y-2">
        <AssetMedia
          src={badge.media}
          aspect="aspect-auto"
          alt={badge.tokenLabel}
          radius={variant === "compact" ? "rounded-lg" : "rounded-xl"}
        />
      </div>
    </div>
  );
};
