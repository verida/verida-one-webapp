import React, { useCallback, useEffect, useState } from "react";
import { WalletAddress } from "lib/types";
import { ChainIcon } from "components/molecules";
import { Icon, IconButton, IconButtonLink } from "components/atoms";
import { copyToClipboard, getChainExplorerUrlForAddress } from "lib/utils";
import { COPIED_TO_CLIPBOARD_ICON_TIMEOUT } from "lib/constants";

type WalletAddressCardProps = {
  address: WalletAddress;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

export const WalletAddressCard: React.FunctionComponent<
  WalletAddressCardProps
> = (props) => {
  const { address, ...otherProps } = props;

  // Used to display the Check icon stating the address has been copied
  const [addressCopiedToClipboard, setAddressCopiedToClipboard] =
    useState(false);

  const handleCopyToClipboard = useCallback(() => {
    const handler = async () => {
      try {
        await copyToClipboard(address.address);
        setAddressCopiedToClipboard(true);
      } catch (error) {
        // TODO: Handle 'copy to clipboard' error
      }
    };
    void handler();
  }, [address]);

  // Timer to revert the copy to clipboard button
  useEffect(() => {
    if (!addressCopiedToClipboard) {
      return;
    }
    const timer = setTimeout(() => {
      setAddressCopiedToClipboard(false);
    }, COPIED_TO_CLIPBOARD_ICON_TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, [addressCopiedToClipboard]);

  const explorerUrl = getChainExplorerUrlForAddress(
    address.chain,
    address.address
  );

  return (
    <div {...otherProps}>
      <div
        className={`flex items-center justify-between rounded-xl bg-gray-dark py-2 px-4`}
      >
        <div className="flex min-w-0 items-center space-x-2.5">
          <ChainIcon chain={address.chain} verified={address.verified} />
          <span className="truncate font-semibold">{address.address}</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          {addressCopiedToClipboard ? (
            <IconButton
              size="small"
              variant="text"
              icon={<Icon type="check" />}
            />
          ) : (
            <IconButton
              size="small"
              variant="text"
              icon={<Icon type="copy" />}
              onClick={handleCopyToClipboard}
            />
          )}
          <IconButtonLink
            size="small"
            variant="text"
            shape="square"
            url={explorerUrl}
            icon={<Icon type="outside" />}
            target="_blank"
            rel="noopener"
          />
        </div>
      </div>
    </div>
  );
};
