import { Collectible } from "lib/types";
import React from "react";
import { useIntl } from "react-intl";
import { getChainLabel, getChainLogo } from "lib/utils";
import { IconButton } from "components/atoms";
import { AssetDetailsPropertyLine } from "components/molecules";

type AssetDetailsPropertyListProps = {
  asset: Collectible;
} & React.ComponentPropsWithRef<"div">;

export const AssetDetailsPropertyList: React.FC<
  AssetDetailsPropertyListProps
> = (props) => {
  const { asset, ...divProps } = props;

  const {
    chain,
    contractAddress,
    tokenId,
    floorPrice,
    priceUnit,
    ownerAddress,
  } = asset;

  const i18n = useIntl();

  // TODO: Add to messages file
  const chainTitle = i18n.formatMessage({
    id: "AssetDetailsPropertyList.chain",
    defaultMessage: "Chain",
  });

  const ownerTitle = i18n.formatMessage({
    id: "AssetDetailsPropertyList.owner",
    defaultMessage: "Owner",
  });

  const floorPriceTitle = i18n.formatMessage({
    id: "AssetDetailsPropertyList.floorPrice",
    defaultMessage: "Floor price",
  });

  const assetsIDTitle = i18n.formatMessage({
    id: "AssetDetailsPropertyList.assetID",
    defaultMessage: "Asset ID",
  });

  const creatorWalletAddressTitle = i18n.formatMessage({
    id: "AssetDetailsPropertyList.creatorWalletAddress",
    defaultMessage: "Creator wallet address",
  });

  return (
    <div {...divProps}>
      <ul className="space-y-4">
        <li>
          <AssetDetailsPropertyLine label={chainTitle}>
            <div className="flex items-center">
              <IconButton
                size="small"
                variant="text"
                icon={getChainLogo(chain, 14)}
              />
              <span>{getChainLabel(chain)}</span>
            </div>
          </AssetDetailsPropertyLine>
        </li>
        <li>
          <AssetDetailsPropertyLine
            label={ownerTitle}
            valueToCopyToClipboard={ownerAddress}
          >
            {ownerAddress}
          </AssetDetailsPropertyLine>
        </li>
        <li>
          <AssetDetailsPropertyLine label={floorPriceTitle}>
            {floorPrice && priceUnit ? `${floorPrice} ${priceUnit}` : undefined}
          </AssetDetailsPropertyLine>
        </li>
        <li>
          <AssetDetailsPropertyLine
            label={assetsIDTitle}
            valueToCopyToClipboard={tokenId}
          >
            {tokenId}
          </AssetDetailsPropertyLine>
        </li>
        <li>
          <AssetDetailsPropertyLine
            label={creatorWalletAddressTitle}
            valueToCopyToClipboard={contractAddress}
          >
            {contractAddress}
          </AssetDetailsPropertyLine>
        </li>
      </ul>
    </div>
  );
};
