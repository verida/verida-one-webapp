import React, { useCallback } from "react";
import { useIntl } from "react-intl";
import { BadgeCard, ProfileSectionWrapper } from "components/molecules";
import { Badge } from "lib/types";
import { Button } from "components/atoms";
import { Link, useNavigate } from "react-router-dom";
import { MAX_BADGES_IN_PROFILE_SECTION } from "lib/constants";

type BadgesSectionProps = {
  badges?: Badge[];
};

/** Section for the Profile page rendering the list of Badges */
export const BadgesSection: React.FC<BadgesSectionProps> = ({ badges }) => {
  const i18n = useIntl();
  const navigate = useNavigate();

  const handleClickMore = useCallback(() => {
    navigate("badges");
  }, [navigate]);

  const handleClickShowAll = useCallback(() => {
    navigate("badges");
  }, [navigate]);

  if (!badges?.length) {
    return null;
  }

  const truncatedBadgeList = badges.slice(0, MAX_BADGES_IN_PROFILE_SECTION);
  const hasMore = badges.length > truncatedBadgeList.length;

  const sectionTitle = i18n.formatMessage({
    id: "BadgesSection.sectionTitle",
    description: "Title of the 'Badges' section in the 'Profile' page",
    defaultMessage: "Badges",
  });

  const showAllButtonLabel = i18n.formatMessage({
    id: "BadgesSection.showAllButtonLabel",
    description:
      "Label of the button redirecting from the 'Badges' profile section to the 'Badges' page",
    defaultMessage: "Show All",
  });

  const showAllButton = (
    <Button size="large" onClick={handleClickShowAll} className="h-full">
      {showAllButtonLabel}
    </Button>
  );

  return (
    <ProfileSectionWrapper
      title={sectionTitle}
      badgeValue={badges.length}
      onClickMore={handleClickMore}
    >
      <ul className="grid snap-x snap-mandatory auto-cols-[160px] gap-2 overflow-x-auto max-sm:grid-flow-col sm:grid-cols-4">
        {truncatedBadgeList.map((badge) => (
          <li
            key={`${badge.chainId}/${badge.contractAddress}/${badge.tokenId}`}
            className="snap-start transition-all"
          >
            <Link
              to={`badges/${badge.chainId}/${badge.contractAddress}/${badge.tokenId}`}
            >
              <BadgeCard variant="standard" badge={badge} />
            </Link>
          </li>
        ))}
        {hasMore && (
          <li
            key="showAllButton"
            className="aspect-square snap-start transition-all sm:hidden"
          >
            {showAllButton}
          </li>
        )}
      </ul>
      {hasMore && <div className="mt-4 max-sm:hidden">{showAllButton}</div>}
    </ProfileSectionWrapper>
  );
};
