import React from "react";
import { useParams } from "react-router-dom";
import {
  AssetDetailsViewSkeleton,
  PageWrapper,
  RedirectionCard,
} from "components/molecules";
import { getChainExplorerUrlForAddress } from "lib/utils";
import { AssetMedia, ButtonLink } from "components/atoms";
import { useIntl } from "react-intl";
import {
  AssetDetailsMainInfo,
  CollectibleDetailsProperties,
} from "components/organisms";
import { useCollectibles, useProfileData } from "lib/hooks";

export const CollectibleDetailsView: React.FunctionComponent = () => {
  const i18n = useIntl();
  const { identity, chain, contractAddress, tokenId } = useParams();

  const { data: profileData } = useProfileData(identity);
  const walletAddresses = profileData?.walletAddresses;
  const {
    data: collectibles,
    isLoading,
    isError,
  } = useCollectibles(walletAddresses);
  const collectible = collectibles?.find(
    (item) =>
      item.chain_id === chain &&
      item.token_address === contractAddress &&
      item.token_id === tokenId
  );

  const redirectPath = identity ? `/${identity}` : `/`;

  const redirectionCardButtonLabel = i18n.formatMessage({
    id: "CollectibleDetailsView.redirectionCardButtonLabel",
    description: "Label of the redirection link to go to the Profile poage",
    defaultMessage: "Go to profile",
  });

  const redirectionCardTitle = i18n.formatMessage({
    id: "CollectibleDetailsView.redirectionCardTitle",
    defaultMessage: "Item not found",
    description:
      "Title of the redirection card indicating the collectible has not been found.",
  });

  const redirectionCardMessage = i18n.formatMessage({
    id: "CollectibleDetailsView.redirectionCardMessage",
    defaultMessage: "This item doesn't exist or is not available",
    description:
      "Message of the redirection card indicating the collectible has not been found.",
  });

  const viewInExplorerButtonLabel = i18n.formatMessage({
    id: "CollectibleDetailsView.viewInExplorerButtonLabel",
    defaultMessage: "View in Explorer",
    description:
      "Label of the button to view an asset in a blockchain explorer.",
  });

  if (collectible) {
    const viewInExplorerButton = (
      <ButtonLink
        url={getChainExplorerUrlForAddress(
          collectible.chain_id,
          collectible.owner_address
        )}
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
              source={collectible.metadata.image}
              alt={collectible.metadata.name || "Collectible"}
            />
            <div className="hidden sm:block">{viewInExplorerButton}</div>
          </div>
          <div>
            <AssetDetailsMainInfo
              className="mb-4"
              collectionLabel={collectible.name}
              tokenLabel={collectible.metadata.name}
              description={collectible.metadata.description}
            />
            <CollectibleDetailsProperties collectible={collectible} />
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

  if (isError || !collectible) {
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
