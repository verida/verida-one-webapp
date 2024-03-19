import React, { useCallback } from "react";
import { useIntl } from "react-intl";
import { AssetCard, ProfileSectionWrapper } from "components/molecules";
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
    >
      <div className="-mx-4 overflow-x-auto px-4">
        <div className="w-fit pb-4">
          <ul className="max-sm:grid-flow-col grid auto-cols-[160px] gap-2 sm:grid-cols-4">
            {truncatedCollectiblesList.map((collectible) => (
              <li
                key={`${collectible.chain_id}/${collectible.token_address}/${collectible.token_id}`}
              >
                <Link
                  to={`collectibles/${collectible.chain_id}/${collectible.token_address}/${collectible.token_id}`}
                >
                  <AssetCard variant="standard" asset={collectible} />
                </Link>
              </li>
            ))}
            {hasMore && (
              <li key="showAllButton" className="aspect-square sm:hidden">
                {showAllButton}
              </li>
            )}
          </ul>
        </div>
      </div>
      {hasMore && <div className="max-sm:hidden mt-4">{showAllButton}</div>}
    </ProfileSectionWrapper>
  );
};
