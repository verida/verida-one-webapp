import { Collectible } from "lib/types";
import React from "react";
import { useIntl } from "react-intl";
import { getChainLogo } from "lib/utils";
import { AssetLabelChip } from "components/molecules";
import { truncateWalletAddress } from "lib/utils/WalletUtils";

type CollectiblesDetailsCardProps = Pick<
  Collectible,
  | "chain"
  | "ownerAddress"
  | "floorPrice"
  | "tokenId"
  | "contractAddress"
  | "priceUnit"
> &
  React.ComponentPropsWithRef<"div">;

export const CollectiblesDetailsCard: React.FC<
  CollectiblesDetailsCardProps
> = ({
  chain,
  contractAddress,
  tokenId,
  floorPrice,
  priceUnit,
  ownerAddress,
  ...otherProps
}) => {
  const i18n = useIntl();

  const chainText = i18n.formatMessage({
    id: "CollectibleDetailsCard.chain",
    defaultMessage: "Chain",
  });

  const owner = i18n.formatMessage({
    id: "CollectibleDetailsCard.owner",
    defaultMessage: "Owner",
  });

  const floorPriceText = i18n.formatMessage({
    id: "CollectibleDetailsCard.floorPrice",
    defaultMessage: "Floor price",
  });

  const assetsID = i18n.formatMessage({
    id: "CollectibleDetailsCard.assetID",
    defaultMessage: "Asset ID",
  });

  const creatorWalletAddress = i18n.formatMessage({
    id: "CollectibleDetailsCard.creatorWalletAddress",
    defaultMessage: "Creator wallet address",
  });

  return (
    <div className="space-y-4" {...otherProps}>
      <div className="flex justify-between text-sm">
        <span>{chainText}</span>
        <div className="flex">
          {getChainLogo(chain)}
          <span>{chain}</span>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <span>{owner}</span>
        <AssetLabelChip
          iconType="copy"
          label={truncateWalletAddress(ownerAddress)}
        />
      </div>
      <div className="flex justify-between text-sm">
        <span>{floorPriceText}</span>
        <span>
          {floorPrice} {priceUnit}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <h6>{assetsID}</h6>
        <AssetLabelChip iconType="copy" label={tokenId} />
      </div>
      <div className="flex justify-between text-sm">
        <h6>{creatorWalletAddress}</h6>
        <AssetLabelChip
          iconType="copy"
          label={truncateWalletAddress(contractAddress)}
        />
      </div>
    </div>
  );
};
