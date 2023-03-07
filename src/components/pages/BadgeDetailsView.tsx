import React from "react";
import { AssetMedia, ButtonLink } from "components/atoms";
import {
  RedirectionCard,
  PageWrapper,
  AssetDetailsViewSkeleton,
} from "components/molecules";
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
  const { data: badges, isLoading, isError } = useBadges(walletAddresses);
  const badge = badges?.find(
    (item) =>
      item.chain_id === chain &&
      item.token_address === contractAddress &&
      item.token_id === tokenId
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

  const viewInExplorerButtonLabel = i18n.formatMessage({
    id: "BadgeDetailsView.viewInExplorerButtonLabel",
    defaultMessage: "View in Explorer",
    description:
      "Label of the button to view an asset in a blockchain explorer.",
  });

  if (badge) {
    const viewInExplorerButton = (
      <ButtonLink
        url={getChainExplorerUrlForAddress(badge.chain_id, badge.owner_address)}
        target="_blank"
        rel="noopener"
      >
        {viewInExplorerButtonLabel}
      </ButtonLink>
    );

    return (
      <PageWrapper>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <AssetMedia
              className="bg-asset-media p-3"
              source={badge.metadata.image}
              alt={badge.metadata.name || "Badge"}
            />
            <div className="hidden sm:block">{viewInExplorerButton}</div>
          </div>
          <div>
            <AssetDetailsMainInfo
              className="mb-4"
              collectionLabel={badge.name}
              tokenLabel={badge.metadata.name}
              description={badge.metadata.description}
            />
            <BadgeDetailsProperties badge={badge} />
          </div>
          <div className="sm:hidden md:mt-0">
            {/* TODO: Place this button into a fixed bottom bar.
          see issue #41 https://github.com/verida/verida-one-webapp/issues/41
           */}
            {viewInExplorerButton}
          </div>
        </div>
      </PageWrapper>
    );
  }

  if (isLoading) {
    return (
      <PageWrapper>
        <AssetDetailsViewSkeleton />
      </PageWrapper>
    );
  }

  if (isError || !badge) {
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

  // At this point, there is no data, the data is not being loaded, there is no handled errors.
  // So, throw an error that will be caught by the closest Error boundary.
  // TODO: Re-throw the error from the query after cleaning it
  throw new Error("Something went wrong");
};
