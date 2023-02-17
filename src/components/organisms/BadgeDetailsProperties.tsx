import React from "react";
import { AssetPropertyInfo, Badge } from "lib/types";
import { useIntl } from "react-intl";
import { getChainLabel, getChainLogo } from "lib/utils";
import { AssetDetailsPropertyList } from "components/molecules";

type BadgeDetailsPropertiesProps = {
  badge: Badge;
} & React.ComponentPropsWithRef<"div">;

export const BadgeDetailsProperties: React.FC<BadgeDetailsPropertiesProps> = (
  props
) => {
  const { badge, ...divProps } = props;
  const { chainId, contractAddress, proofValue, ownerAddress, proofLabel } =
    badge;
  const i18n = useIntl();

  const chainPropertyLabel = i18n.formatMessage({
    id: "BadgeDetailsProperties.chainPropertyLabel",
    defaultMessage: "Chain",
    description: "Label of the 'chain' property for a badge",
  });

  const ownerPropertyLabel = i18n.formatMessage({
    id: "BadgeDetailsProperties.ownerPropertyLabel",
    defaultMessage: "Owner",
    description: "Label of the 'owner' property for a badge",
  });

  const creatorWalletAddressPropertyLabel = i18n.formatMessage({
    id: "BadgeDetailsProperties.creatorWalletAddressPropertyLabel",
    defaultMessage: "Creator wallet address",
    description: "Label of the 'creatorWalletAddress' property for a badge",
  });

  const properties: AssetPropertyInfo[] = [
    {
      propertyLabel: chainPropertyLabel,
      formattedValue: (
        <div className="flex items-center space-x-1">
          {getChainLogo(chainId, 14)}
          <span>{getChainLabel(chainId)}</span>
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
      propertyLabel: creatorWalletAddressPropertyLabel,
      formattedValue: contractAddress,
      enableCopyToClipboard: true,
      value: contractAddress,
    },
    {
      propertyLabel: proofLabel,
      formattedValue: proofValue,
    },
  ];

  return <AssetDetailsPropertyList properties={properties} {...divProps} />;
};
