import { AssetPropertyInfo, NftToken } from "lib/types";
import React from "react";
import { useIntl } from "react-intl";
import { getChainLabel, getChainLogo } from "lib/utils";
import { AssetDetailsPropertyList } from "components/molecules";

type CollectibleDetailsPropertiesProps = {
  collectible: NftToken;
} & React.ComponentPropsWithRef<"div">;

/** Comnponent displaying the properties of a Collectible. */
export const CollectibleDetailsProperties: React.FC<
  CollectibleDetailsPropertiesProps
> = (props) => {
  const { collectible, ...divProps } = props;

  const { chain_id, owner_address, token_address, token_id } = collectible;

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
          {getChainLogo(chain_id, 14)}
          <span>{getChainLabel(chain_id)}</span>
        </div>
      ),
    },
    {
      propertyLabel: ownerPropertyLabel,
      formattedValue: owner_address,
      enableCopyToClipboard: true,
      value: owner_address,
    },
    {
      propertyLabel: assetsIdPropertyLabel,
      formattedValue: token_id,
      enableCopyToClipboard: true,
      value: token_id,
    },
    {
      propertyLabel: creatorWalletAddressPropertyLabel,
      formattedValue: token_address,
      enableCopyToClipboard: true,
      value: token_address,
    },
  ];

  return <AssetDetailsPropertyList properties={properties} {...divProps} />;
};
