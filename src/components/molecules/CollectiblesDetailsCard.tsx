import { Collectible } from "lib/types";
import React, { useCallback, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { copyToClipboard, getChainLogo } from "lib/utils";
import { IconButton, Icon } from "components/atoms";
import { truncateWalletAddress } from "lib/utils/WalletUtils";
import { COPIED_TO_CLIPBOARD_ICON_TIMEOUT } from "lib/constants";

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

type copiedToClipboardItems = "assetsID" | "ownerAddress" | "contractAddress";

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
  const [copiedToClipboard, setCopiedToClipboard] = useState({
    assetsID: false,
    ownerAddress: false,
    contractAddress: false,
  });

  const handleCopyToClipboard = useCallback(
    (textToCopy: string, type: copiedToClipboardItems) => {
      const handler = async () => {
        try {
          await copyToClipboard(textToCopy);
          setCopiedToClipboard({ ...copiedToClipboard, [type]: true });
        } catch (error) {
          // TODO: Handle 'copy to clipboard' error
        }
      };
      void handler();
    },
    [copiedToClipboard]
  );

  // Timer to revert the copy to clipboard button
  useEffect(() => {
    if (!copiedToClipboard) {
      return;
    }
    const timer = setTimeout(() => {
      setCopiedToClipboard({
        assetsID: false,
        contractAddress: false,
        ownerAddress: false,
      });
    }, COPIED_TO_CLIPBOARD_ICON_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, [copiedToClipboard]);

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
    <div className="space-y-2" {...otherProps}>
      <div className="flex items-center  justify-between  text-sm">
        <span>{chainText}</span>
        <div className="flex">
          {getChainLogo(chain)}
          <span>{chain}</span>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <span>{owner}</span>
        <div className="flex items-center  justify-center ">
          {copiedToClipboard.ownerAddress ? (
            <IconButton
              size="small"
              variant="text"
              icon={<Icon type="check" />}
            />
          ) : (
            <IconButton
              size="small"
              variant="text"
              onClick={() => {
                handleCopyToClipboard(ownerAddress, "ownerAddress");
              }}
              icon={<Icon type="copy" />}
            />
          )}
          <span>{truncateWalletAddress(ownerAddress)}</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span>{floorPriceText}</span>
        <span>
          {floorPrice} {priceUnit}
        </span>
      </div>
      <div className="flex items-center  justify-between  text-sm">
        <h6>{assetsID}</h6>
        <div className="flex items-center justify-center  ">
          {copiedToClipboard.assetsID ? (
            <IconButton
              size="small"
              variant="text"
              icon={<Icon type="check" />}
            />
          ) : (
            <IconButton
              size="small"
              variant="text"
              onClick={() => {
                handleCopyToClipboard(tokenId, "assetsID");
              }}
              icon={<Icon type="copy" />}
            />
          )}
          <span>{tokenId}</span>
        </div>
      </div>
      <div className="flex items-center  justify-between  text-sm">
        <h6>{creatorWalletAddress}</h6>
        <div className="flex items-center justify-center">
          {copiedToClipboard.contractAddress ? (
            <IconButton
              size="small"
              variant="text"
              icon={<Icon type="check" />}
            />
          ) : (
            <IconButton
              size="small"
              variant="text"
              onClick={() => {
                handleCopyToClipboard(contractAddress, "contractAddress");
              }}
              icon={<Icon type="copy" />}
            />
          )}
          <span>{truncateWalletAddress(contractAddress)}</span>
        </div>
      </div>
    </div>
  );
};
