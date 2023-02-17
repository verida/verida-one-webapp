import { HexagonBase } from "components/atoms";
import { Badge } from "lib/types";
import React from "react";
import { Link } from "react-router-dom";

type HexagonProps = {
  badge: Badge;
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
      className="relative -ml-[16.666%] w-[133.333%] odd:-mt-[59.11%]"
    >
      <HexagonBase className="flex items-center justify-center">
        <Link to={to} className="aspect-[inherit]">
          <img
            src={badge.media}
            alt={badge.tokenLabel}
            className="aspect-[inherit] object-cover"
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
