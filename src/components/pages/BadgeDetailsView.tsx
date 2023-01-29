import React from "react";
import { AssetMedia, ButtonLink } from "components/atoms";
import { RedirectionCard, PageWrapper } from "components/molecules";
import {
  AssetDetailsMainInfo,
  BadgeDetailsProperties,
} from "components/organisms";
import { useBadges, useProfileData } from "lib/hooks";
import { getChainExplorerUrlForAddress } from "lib/utils";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";

export const BadgeDetailsView: React.FunctionComponent = () => {
  const i18n = useIntl();
  const { identity, chain, contractAddress, tokenId } = useParams();

  const { data: profileData } = useProfileData(identity);
  const walletAddresses = profileData?.walletAddresses;
  const { data: badges } = useBadges(walletAddresses);
  const badge = badges?.find(
    (item) =>
      item.chain === chain &&
      item.contractAddress === contractAddress &&
      item.tokenId === tokenId
  );

  const redirectPath = identity ? `/${identity}` : `/`;

  const redirectionCardButtonLabel = i18n.formatMessage({
    id: "BadgeDetailsView.redirectionCardButtonLabel",
    description: "Label of the redirection link to go to the Profile poage",
    defaultMessage: "Go to profile",
  });

  const redirectionCardTitle = i18n.formatMessage({
    id: "BadgeDetailsView.redirectionCardTitle",
    defaultMessage: "Item not found",
    description:
      "Title of the redirection card indicating the badge has not been found.",
  });

  const redirectionCardMessage = i18n.formatMessage({
    id: "BadgeDetailsView.redirectionCardMessage",
    defaultMessage: "This item doesn't exist or is not available",
    description:
      "Message of the redirection card indicating the badges has not been found.",
  });

  if (!badge) {
    return (
      <PageWrapper>
        <RedirectionCard
          redirectPath={redirectPath}
          title={redirectionCardTitle}
          message={redirectionCardMessage}
          buttonLabel={redirectionCardButtonLabel}
          className="flex flex-grow flex-col justify-center"
        />
      </PageWrapper>
    );
  }

  const viewInExplorerButtonLabel = i18n.formatMessage({
    id: "BadgeDetailsView.viewInExplorerButtonLabel",
    defaultMessage: "View in Explorer",
    description:
      "Label of the button to view an asset in a blockchain explorer.",
  });

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
          <div className="bg-badge flex items-center justify-center rounded-xl p-10">
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
