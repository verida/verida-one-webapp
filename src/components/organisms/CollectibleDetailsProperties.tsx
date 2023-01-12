import { AssetPropertyInfo, Collectible } from "lib/types";
import React from "react";
import { useIntl } from "react-intl";
import { getChainLabel, getChainLogo } from "lib/utils";
import { AssetDetailsPropertyList } from "components/molecules";

type CollectibleDetailsPropertiesProps = {
  collectible: Collectible;
} & React.ComponentPropsWithRef<"div">;

export const CollectibleDetailsProperties: React.FC<
  CollectibleDetailsPropertiesProps
> = (props) => {
  const { collectible, ...divProps } = props;

  const {
    chain,
    contractAddress,
    tokenId,
    floorPrice,
    priceUnit,
    ownerAddress,
  } = collectible;

  const i18n = useIntl();

  const chainPropertyLabel = i18n.formatMessage({
    id: "CollectibleDetailsProperties.chainPropertyLabel",
    defaultMessage: "Chain",
    description: "Label of the 'chain' property for a collectible",
  });

  const ownerPropertyLabel = i18n.formatMessage({
    id: "CollectibleDetailsProperties.ownerPropertyLabel",
    defaultMessage: "Owner",
    description: "Label of the 'owner' property for a collectible",
  });

  const floorPricePropertyLabel = i18n.formatMessage({
    id: "CollectibleDetailsProperties.floorPricePropertyLabel",
    defaultMessage: "Floor price",
    description: "Label of the 'floorPrice' property for a collectible",
  });

  const assetsIdPropertyLabel = i18n.formatMessage({
    id: "CollectibleDetailsProperties.assetsIdPropertyLabel",
    defaultMessage: "Asset Id",
    description: "Label of the 'tokenId' property for a collectible",
  });

  const creatorWalletAddressPropertyLabel = i18n.formatMessage({
    id: "CollectibleDetailsProperties.creatorWalletAddressPropertyLabel",
    defaultMessage: "Creator wallet address",
    description:
      "Label of the 'creatorWalletAddress' property for a collectible",
  });

  const properties: AssetPropertyInfo[] = [
    {
      propertyLabel: chainPropertyLabel,
      formattedValue: (
        <div className="flex items-center space-x-1">
          {getChainLogo(chain, 14)}
          <span>{getChainLabel(chain)}</span>
        </div>
      ),
    },
    {
      propertyLabel: ownerPropertyLabel,
      formattedValue: ownerAddress,
      enableCopyToClipboard: true,
      value: ownerAddress,
    },
    {
      propertyLabel: floorPricePropertyLabel,
      formattedValue:
        floorPrice && priceUnit ? `${floorPrice} ${priceUnit}` : undefined,
    },
    {
      propertyLabel: assetsIdPropertyLabel,
      formattedValue: tokenId,
      enableCopyToClipboard: true,
      value: tokenId,
    },
    {
      propertyLabel: creatorWalletAddressPropertyLabel,
      formattedValue: contractAddress,
      enableCopyToClipboard: true,
      value: contractAddress,
    },
  ];

  return <AssetDetailsPropertyList properties={properties} {...divProps} />;
};
