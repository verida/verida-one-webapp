import React, { useCallback } from "react";
import { useIntl } from "react-intl";
import { CollectibleCard, ProfileSectionWrapper } from "components/molecules";
import { NftToken } from "lib/types";
import { Button } from "components/atoms";
import { Link, useNavigate } from "react-router-dom";
import { MAX_COLLECTIBLES_IN_PROFILE_SECTION } from "lib/constants";

type CollectiblesSectionProps = {
  collectibles?: NftToken[];
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

  if (!collectibles?.length) {
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

  return (
    <ProfileSectionWrapper
      title={sectionTitle}
      badgeValue={collectibles.length}
      onClickMore={handleClickMore}
      style={{ marginBottom: "-1rem" }}
    >
      <ul className="grid snap-x snap-mandatory auto-cols-[160px] gap-2 overflow-x-auto pb-4 max-sm:grid-flow-col sm:grid-cols-4">
        {truncatedCollectiblesList.map((collectible) => (
          <li
            key={`${collectible.chain_id}/${collectible.token_address}/${collectible.token_id}`}
            className="snap-start transition-all"
          >
            <Link
              to={`collectibles/${collectible.chain_id}/${collectible.token_address}/${collectible.token_id}`}
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
      {hasMore && <div className="my-4 max-sm:hidden">{showAllButton}</div>}
    </ProfileSectionWrapper>
  );
};
