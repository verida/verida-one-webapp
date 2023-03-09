import { HexagonBase, SkeletonBase } from "components/atoms";
import { NftToken } from "lib/types";
import React from "react";
import { Link } from "react-router-dom";

type HexagonProps = {
  badge: NftToken;
  to: string;
  disableShadow?: boolean;
} & Omit<React.ComponentPropsWithoutRef<"li">, "className">;

export const BadgeMosaicItem: React.FunctionComponent<HexagonProps> = (
  props
) => {
  const { badge, to, disableShadow = false, ...otherProps } = props;

  return (
    <li
      {...otherProps}
      className="relative w-[calc(4/3_*_100%)] -translate-x-[calc(1/8_*_100%)] odd:-translate-y-1/2"
    >
      <HexagonBase className="flex items-center justify-center">
        <Link to={to} className="h-full w-full">
          <img
            src={badge.metadata.image || undefined}
            alt={badge.metadata.name || "Collectible"}
            className="h-full w-full object-cover"
          />
        </Link>
      </HexagonBase>
      {!disableShadow && (
        <div className="absolute inset-0 -z-10 w-full blur-lg">
          <HexagonBase className="w-full bg-badge-purple" />
        </div>
      )}
    </li>
  );
};

export const BadgeMosaicItemSkeleton: React.FunctionComponent<
  Omit<React.ComponentPropsWithoutRef<"li">, "className">
> = (props) => {
  return (
    <li
      {...props}
      className="relative w-[calc(4/3_*_100%)] -translate-x-[calc(1/8_*_100%)] odd:-translate-y-1/2"
    >
      <HexagonBase className="w-full">
        <SkeletonBase
          rounded="rounded-none"
          className="h-full w-full opacity-5"
        />
      </HexagonBase>
    </li>
  );
};
