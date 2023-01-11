import { AssetMedia, ButtonLink } from "components/atoms";
import { AssetEmptyCard, PageWrapper } from "components/molecules";
import {
  AssetDetailsMainInfo,
  BadgeDetailsProperties,
} from "components/organisms";
import { Badge } from "lib/types";
import { getBadges, getChainExplorerUrlForAddress } from "lib/utils";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

export const BadgeDetailsView: React.FunctionComponent = () => {
  const [badge, setBadge] = useState<Badge | undefined>(undefined);
  const { identity, chain, contractAddress, tokenId } = useParams();
  const i18n = useIntl();

  const viewInExplorerButtonLabel = i18n.formatMessage({
    id: "BadgeDetailsView.viewInExplorerButtonLabel",
    defaultMessage: "View in Explorer",
    description: "Message of empty badge details in badge details page",
  });

  const emptyBadgeDetailsTitle = i18n.formatMessage({
    id: "BadgeDetailsView.emptyBadgeDetailsTitle",
    defaultMessage: "Item not found",
    description: "Title of empty badge details in badge details page",
  });

  const emptyBadgeDetailsMessage = i18n.formatMessage({
    id: "BadgeDetailsView.emptyBadgeDetailsMessage",
    defaultMessage: "This item doesn’t exist or is not available",
    description:
      "Label of the button to view an asset in a blockchain explorer.",
  });

  useEffect(() => {
    const getData = async () => {
      const badges = await getBadges(identity);
      const foundBadge = badges.find(
        (item) =>
          item.chain === chain &&
          item.contractAddress === contractAddress &&
          item.tokenId === tokenId
      );
      setBadge(foundBadge);
    };
    void getData();
  }, [identity, chain, contractAddress, tokenId]);

  if (!badge) {
    return (
      <PageWrapper>
        <div className="absolute inset-0 m-auto flex items-center justify-center">
          <AssetEmptyCard
            identity={identity}
            message={emptyBadgeDetailsMessage}
            title={emptyBadgeDetailsTitle}
          />
        </div>
      </PageWrapper>
    );
  }

  const viewInExplorerButton = (
    <ButtonLink
      url={getChainExplorerUrlForAddress(badge.chain, badge.ownerAddress)}
      target="_blank"
      rel="noopener"
    >
      {viewInExplorerButtonLabel}
    </ButtonLink>
  );

  return (
    <PageWrapper>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <div className="bg-badge rounded-xl px-10 py-4.5">
            <AssetMedia
              className="w-full"
              aspect="aspect-auto"
              src={badge.media}
              alt={badge.tokenLabel}
            />
          </div>
          <div className="mt-6 hidden sm:block">{viewInExplorerButton}</div>
        </div>
        <div>
          <AssetDetailsMainInfo
            className="mb-4"
            collectionLabel={badge.collectionLabel}
            tokenLabel={badge.tokenLabel}
            description={badge.description}
          />
          <BadgeDetailsProperties badge={badge} />
        </div>
        <div className="sm:hidden md:mt-0">{viewInExplorerButton}</div>
      </div>
    </PageWrapper>
  );
};
