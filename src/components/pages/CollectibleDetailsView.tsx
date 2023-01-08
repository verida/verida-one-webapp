import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Collectible } from "lib/types";
import { PageWrapper } from "components/molecules";
import { getChainExplorerUrlForAddress, getCollectibles } from "lib/utils";
import { AssetMedia, ButtonLink } from "components/atoms";
import { useIntl } from "react-intl";
import {
  AssetDetailsMainInfo,
  AssetDetailsPropertyList,
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

  // TODO: Add to messages file
  const viewInExplorer = i18n.formatMessage({
    id: "CollectibleDetailsView.viewInExplorer",
    defaultMessage: "View in Explorer",
  });

  return (
    <PageWrapper>
      <div className="sm:grid-cols1 grid gap-4 md:grid-cols-2">
        <div className="mb-4">
          <AssetMedia
            className="w-full"
            aspect="aspect-auto"
            src={collectible.media}
            alt={collectible.tokenLabel}
          />
        </div>
        <div>
          <AssetDetailsMainInfo
            className="mb-4"
            collectionLabel={collectible.collectionLabel}
            tokenLabel={collectible.tokenLabel}
            description={collectible.description}
          />
          <AssetDetailsPropertyList asset={collectible} />
        </div>
        <div className="mt-4 md:mt-0">
          <ButtonLink
            url={getChainExplorerUrlForAddress(
              collectible.chain,
              collectible.ownerAddress
            )}
          >
            {viewInExplorer}
          </ButtonLink>
        </div>
      </div>
    </PageWrapper>
  );
};
