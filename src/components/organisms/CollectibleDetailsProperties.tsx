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
    defaultMessage: "Creator",
    description:
      "Label of the 'creatorWalletAddress' property for a collectible",
  });

  const chainLabel = getChainLabel(chain_id);

  const properties: AssetPropertyInfo[] = [
    {
      propertyLabel: chainPropertyLabel,
      valueToDisplay: (
        <span className="flex items-center">
          <span className="px-1.5">{getChainLogo(chain_id, 14)}</span>
          <span className="truncate">{chainLabel}</span>
        </span>
      ),
      valueForTitle: chainLabel,
    },
    {
      propertyLabel: ownerPropertyLabel,
      valueToDisplay: owner_address,
      valueForTitle: owner_address,
      enableCopyToClipboard: true,
      valueToCopy: owner_address,
    },
    {
      propertyLabel: assetsIdPropertyLabel,
      valueToDisplay: token_id,
      valueForTitle: token_id,
      enableCopyToClipboard: true,
      valueToCopy: token_id,
    },
    {
      propertyLabel: creatorWalletAddressPropertyLabel,
      valueToDisplay: token_address,
      valueForTitle: token_address,
      enableCopyToClipboard: true,
      valueToCopy: token_address,
    },
  ];

  return <AssetDetailsPropertyList properties={properties} {...divProps} />;
};
