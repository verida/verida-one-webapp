import { BadgeCard } from "components/molecules";
import { Badge } from "lib/types";
import React from "react";
import { Link } from "react-router-dom";

type BadgeGridProps = {
  badges: Badge[];
} & React.ComponentPropsWithoutRef<"div">;

export const BadgeGrid: React.FC<BadgeGridProps> = (props) => {
  const { badges, ...containerProps } = props;
  return (
    <div {...containerProps}>
      <ul className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
        {badges.map((badge) => (
          <li key={`${badge.chain}/${badge.contractAddress}/${badge.tokenId}`}>
            <Link
              to={`${badge.chain}/${badge.contractAddress}/${badge.tokenId}`}
            >
              <BadgeCard variant="standard" badge={badge} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
