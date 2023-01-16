import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Collectible } from "lib/types";
import { PageWrapper, RedirectionCard } from "components/molecules";
import { getChainExplorerUrlForAddress, getCollectibles } from "lib/utils";
import { AssetMedia, ButtonLink } from "components/atoms";
import { useIntl } from "react-intl";
import {
  AssetDetailsMainInfo,
  CollectibleDetailsProperties,
} from "components/organisms";

export const CollectibleDetailsView: React.FunctionComponent = () => {
  const [collectible, setCollectible] = useState<Collectible | undefined>(
    undefined
  );
  const { identity, chain, contractAddress, tokenId } = useParams();
  const i18n = useIntl();

  useEffect(() => {
    const getData = async () => {
      const collectibles = await getCollectibles(identity);
      const foundCollectible = collectibles.find(
        (item) =>
          item.chain === chain &&
          item.contractAddress === contractAddress &&
          item.tokenId === tokenId
      );
      setCollectible(foundCollectible);
    };
    void getData();
  }, [identity, chain, contractAddress, tokenId]);

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
      "Message of the redirection card indicating the collectibles has not been found.",
  });

  if (!collectible) {
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
    id: "CollectibleDetailsView.viewInExplorerButtonLabel",
    defaultMessage: "View in Explorer",
    description:
      "Label of the button to view an asset in a blockchain explorer.",
  });

  const viewInExplorerButton = (
    <ButtonLink
      url={getChainExplorerUrlForAddress(
        collectible.chain,
        collectible.ownerAddress
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
        <div className="">
          <AssetMedia
            className="w-full"
            aspect="aspect-auto"
            src={collectible.media}
            alt={collectible.tokenLabel}
          />
          <div className="mt-6 hidden sm:block">{viewInExplorerButton}</div>
        </div>
        <div>
          <AssetDetailsMainInfo
            className="mb-4"
            collectionLabel={collectible.collectionLabel}
            tokenLabel={collectible.tokenLabel}
            description={collectible.description}
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
};
