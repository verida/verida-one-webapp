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
    >
      <div className="-mx-4 overflow-x-auto px-4">
        <div className="w-fit py-5">
          {/* Should be py-10 with the honeycomb pattern */}
          <ul
            className={`mx-[calc(0.5/13_*_664px)] mt-[calc(1.73205/13_*_664px)] grid grid-cols-[repeat(auto-fit,_calc(3/13_*_664px))] sm:max-w-[664px] ${
              hasMore ? "max-w-[calc(16/13_*_664px)]" : "max-w-[664px]"
            }`}
          >
            {truncatedBadgeList.map((badge) => (
              <BadgeMosaicItem
                key={`${badge.chain_id}/${badge.token_address}/${badge.token_id}`}
                badge={badge}
                to={`badges/${badge.chain_id}/${badge.token_address}/${badge.token_id}`}
              />
            ))}
            {/* FIXME: Use rounded hexagonal shape, see HexagonBase */}
            {hasMore && (
              <>
                <li
                  key="placeholder"
                  className="relative col-start-5 col-end-5 row-start-1 row-end-1 w-[calc(4/3_*_100%)] -translate-x-[calc(1/8_*_100%)] -translate-y-1/2 sm:hidden"
                >
                  <HexagonBase className="w-full"></HexagonBase>
                </li>
                <li
                  key="showAllButton"
                  className="relative w-[calc(4/3_*_100%)] -translate-x-[calc(1/8_*_100%)] -translate-y-1/2 sm:hidden"
                >
                  <HexagonBase rounded className="w-full">
                    {showAllButton}
                  </HexagonBase>
                </li>
              </>
            )}
          </ul>
        </div>
        {hasMore && <div className="max-sm:hidden mt-4">{showAllButton}</div>}
      </div>
    </ProfileSectionWrapper>
  );
};
