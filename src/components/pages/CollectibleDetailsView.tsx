import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Collectible } from "lib/types";
import { PageWrapper } from "components/molecules";
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
  const { contractAddress, tokenId } = useParams();

  const i18n = useIntl();

  useEffect(() => {
    const getData = async () => {
      const collectibles = await getCollectibles();
      const foundCollectible = collectibles.find(
        (item) =>
          item.contractAddress === contractAddress && item.tokenId === tokenId
      );
      setCollectible(foundCollectible);
    };
    void getData();
  }, [contractAddress, tokenId]);

  if (!collectible) {
    return null; // TODO: Handle it but not return null, which means blank page
  }

  const viewInExplorerButtonLabel = i18n.formatMessage({
    id: "CollectibleDetailsView.viewInExplorerButtonLabel",
    defaultMessage: "View in Explorer",
    description:
      "Label of the button to view an asset in a blockchain explorer.",
  });

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
          <div className="mt-6 hidden sm:block">
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
          </div>
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
        </div>
      </div>
    </PageWrapper>
  );
};
