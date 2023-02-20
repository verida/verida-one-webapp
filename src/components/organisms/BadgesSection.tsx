import React, { useCallback } from "react";
import { useIntl } from "react-intl";
import { BadgeMosaicItem, ProfileSectionWrapper } from "components/molecules";
import { Badge } from "lib/types";
import { Button, HexagonBase } from "components/atoms";
import { useNavigate } from "react-router-dom";
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
      style={{ marginBottom: "-1rem" }}
    >
      <div className="overflow-x-auto">
        <ul className="mx-auto mt-24 grid w-[85.5%] grid-cols-[repeat(4,_minmax(153.27333px,_1fr))] pb-4 sm:w-[calc(2.77/3_*_100%)]">
          {/* TODO: Try using a CSS variable to get the value of the container width instead of the hardcoded value */}
          {truncatedBadgeList.map((badge) => (
            <BadgeMosaicItem
              key={`${badge.chainId}/${badge.contractAddress}/${badge.tokenId}`}
              badge={badge}
              to={`badges/${badge.chainId}/${badge.contractAddress}/${badge.tokenId}`}
              disableShadow // FIXME: Enable shadow under tiles by fixing edges underlapping
            />
          ))}
          {/* FIXME: Use rounded hexagonal shape, see HexagonBase */}
          {hasMore && (
            <li
              key="showAllButton"
              className="relative -ml-[calc(0.5/3_*_100%)] w-[calc(4/3_*_100%)] odd:-mt-[59.11%] sm:hidden"
            >
              <HexagonBase className=" w-full">{showAllButton}</HexagonBase>
            </li>
          )}
        </ul>
        {hasMore && <div className="my-4 max-sm:hidden">{showAllButton}</div>}
      </div>
    </ProfileSectionWrapper>
  );
};
