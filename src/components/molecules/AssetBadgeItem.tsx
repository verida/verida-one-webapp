import React from "react";
import { BadgeSVG } from "components/atoms";

type AssetBadgeItemProps = {
  height?: number;
  width?: number;
  src: string;
} & React.ComponentPropsWithRef<"div">;

export const AssetBadgeItem: React.FunctionComponent<AssetBadgeItemProps> = ({
  height = 172,
  width = 192,
  src = "",
  ...otherProps
}) => {
  return (
    <div {...otherProps}>
      <BadgeSVG height={height} width={width}>
        <image
          x="0"
          y="0"
          href={src}
          clip-path="url(#hexagon_clip)"
          className="aspect-auto h-full w-full"
        />
      </BadgeSVG>
    </div>
  );
};
