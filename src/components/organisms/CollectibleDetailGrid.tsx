import React from "react";
import { AssetMedia } from "components/atoms";
import { AssetDetailsCard, CustomLink } from "components/molecules";
import { CollectiblesDetailsCard } from "./CollectiblesDetailsCard";
import { useIntl } from "react-intl";
import { Collectible } from "lib/types";
import { getChainExplorerUrlForAddress } from "lib/utils";

type CollectibleDetailGridProps = {
  collectible: Collectible;
} & React.ComponentPropsWithoutRef<"div">;

const CollectibleDetailGrid: React.FC<CollectibleDetailGridProps> = ({
  collectible,
}) => {
  const i18n = useIntl();
  const viewInExplorer = i18n.formatMessage({
    id: "CollectibleDetailsView.viewInExplorer",
    defaultMessage: "View in Explorer",
  });

  return (
    <div className="sm:grid-cols1 grid gap-4 md:grid-cols-2">
      <div className="mb-4">
        <AssetMedia
          className=" h-96 w-full object-cover md:h-96 md:w-96 "
          src={collectible.media}
          alt={collectible.tokenLabel}
        />
      </div>
      <div>
        <AssetDetailsCard
          className="mb-4"
          collectionLabel={collectible.collectionLabel}
          tokenLabel={collectible.tokenLabel}
          description={collectible.description}
        />
        <CollectiblesDetailsCard
          chain={collectible.chain}
          ownerAddress={collectible.ownerAddress}
          contractAddress={collectible.contractAddress}
          tokenId={collectible.tokenId}
          floorPrice={collectible.floorPrice}
        />
      </div>
      <div className="mt-4 md:mt-0">
        <CustomLink
          link={{
            url: getChainExplorerUrlForAddress(
              collectible.chain,
              collectible.ownerAddress
            ),
            label: viewInExplorer,
          }}
        />
      </div>
    </div>
  );
};

export default CollectibleDetailGrid;
