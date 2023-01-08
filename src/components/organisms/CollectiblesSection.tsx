import React, { useCallback } from "react";
import { useIntl } from "react-intl";
import { CollectibleCard, ProfileSectionWrapper } from "components/molecules";
import { Collectible } from "lib/types";
import { Button } from "components/atoms";
import { Link, useNavigate } from "react-router-dom";
import { MAX_COLLECTIBLES_IN_PROFILE_SECTION } from "lib/constants";

type CollectiblesSectionProps = {
  collectibles?: Collectible[];
};

/** Section for the Profile page rendering the list of Collectibles */
export const CollectiblesSection: React.FC<CollectiblesSectionProps> = (
  props
) => {
  const { collectibles } = props;

  const i18n = useIntl();
  const navigate = useNavigate();

  const handleClickMore = useCallback(() => {
    navigate("collectibles");
  }, [navigate]);

  const handleClickShowAll = useCallback(() => {
    navigate("collectibles");
  }, [navigate]);

  if (!collectibles || collectibles.length === 0) {
    return null;
  }

  const truncatedCollectiblesList = collectibles.slice(
    0,
    MAX_COLLECTIBLES_IN_PROFILE_SECTION
  );
  const hasMore = collectibles.length > truncatedCollectiblesList.length;

  const sectionTitle = i18n.formatMessage({
    id: "CollectiblesSection.sectionTitle",
    description: "Title of the 'Collectibles' section in the 'Profile' page",
    defaultMessage: "Collectibles",
  });

  const showAllButtonLabel = i18n.formatMessage({
    id: "CollectiblesSection.showAllButtonLabel",
    description:
      "Label of the button redirecting from the 'Collectibles' profile section to the 'Collectibles' page",
    defaultMessage: "Show All",
  });

  const showAllButton = (
    <Button size="large" onClick={handleClickShowAll} className="h-full">
      {showAllButtonLabel}
    </Button>
  );

  // TODO: Handle click on collectible when collectible page implemented
  return (
    <ProfileSectionWrapper
      title={sectionTitle}
      badgeValue={collectibles.length}
      onClickMore={handleClickMore}
    >
      <ul className="grid snap-x snap-mandatory auto-cols-[160px] gap-2 overflow-x-auto max-sm:grid-flow-col sm:grid-cols-4">
        {truncatedCollectiblesList.map((collectible) => (
          <li
            key={`${collectible.contractAddress}#${collectible.tokenId}`}
            className="snap-start transition-all"
          >
            <Link
              to={`collectibles/${collectible.contractAddress}/${collectible.tokenId}`}
            >
              <CollectibleCard variant="standard" collectible={collectible} />
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
