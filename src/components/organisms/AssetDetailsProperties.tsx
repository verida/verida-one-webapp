import { AssetPropertyInfo, NftToken } from "lib/types";
import React from "react";
import { useIntl } from "react-intl";
import { getChainLabel, getChainLogo } from "lib/utils";
import { AssetDetailsPropertyList } from "components/molecules";

type AssetDetailsPropertiesProps = {
  asset: NftToken;
} & React.ComponentPropsWithRef<"div">;

/** Comnponent displaying the properties of an Asset. */
export const AssetDetailsProperties: React.FC<AssetDetailsPropertiesProps> = (
  props
) => {
  const { asset, ...divProps } = props;

  const { chain_id, owner_address, token_address, token_id } = asset;

  const i18n = useIntl();

  const chainPropertyLabel = i18n.formatMessage({
    id: "AssetDetailsProperties.chainPropertyLabel",
    defaultMessage: "Chain",
    description: "Label of the 'chain' property for an asset",
  });

  const ownerPropertyLabel = i18n.formatMessage({
    id: "AssetDetailsProperties.ownerPropertyLabel",
    defaultMessage: "Owner",
    description: "Label of the 'owner' property for an asset",
  });

  const assetsIdPropertyLabel = i18n.formatMessage({
    id: "AssetDetailsProperties.assetsIdPropertyLabel",
    defaultMessage: "Asset Id",
    description: "Label of the 'tokenId' property for an asset",
  });

  const creatorWalletAddressPropertyLabel = i18n.formatMessage({
    id: "AssetDetailsProperties.creatorWalletAddressPropertyLabel",
    defaultMessage: "Creator",
    description: "Label of the 'creatorWalletAddress' property for an asset",
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
