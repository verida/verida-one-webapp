import React from "react";
import { AssetPropertyInfo, Badge } from "lib/types";
import { useIntl } from "react-intl";
import { getChainLabel, getChainLogo } from "lib/utils";
import { AssetDetailsPropertyList } from "components/molecules";

type BadgeDetailsPropertiesProps = {
  badge: Badge;
} & React.ComponentPropsWithRef<"div">;

/** Comnponent displaying the properties of a Badge. */
export const BadgeDetailsProperties: React.FC<BadgeDetailsPropertiesProps> = (
  props
) => {
  const { badge, ...divProps } = props;
  const { chain_id, token_address, metadata, owner_address } = badge;
  const { proofLabel, proofValue } = metadata;
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
    defaultMessage: "Creator",
    description: "Label of the 'creatorWalletAddress' property for a badge",
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
      valueToDisplay: <span title={owner_address}>{owner_address}</span>,
      valueForTitle: owner_address,
      enableCopyToClipboard: true,
      valueToCopy: owner_address,
    },
    {
      propertyLabel: creatorWalletAddressPropertyLabel,
      valueToDisplay: token_address,
      valueForTitle: token_address,
      enableCopyToClipboard: true,
      valueToCopy: token_address,
    },
    {
      propertyLabel: proofLabel,
      valueToDisplay: proofValue,
      valueForTitle: proofValue,
    },
  ];

  return <AssetDetailsPropertyList properties={properties} {...divProps} />;
};
