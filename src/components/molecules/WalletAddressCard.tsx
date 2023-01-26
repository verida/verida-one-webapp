import React from "react";
import { WalletAddress } from "lib/types";
import { ChainIcon, CopyToClipboardButton } from "components/molecules";
import { Icon, IconButtonLink } from "components/atoms";
import { getChainExplorerUrlForAddress } from "lib/utils";

type WalletAddressCardProps = {
  address: WalletAddress;
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

/** Rendering a card with the main information of a wallet address. */
export const WalletAddressCard: React.FunctionComponent<
  WalletAddressCardProps
> = (props) => {
  const { address, ...otherProps } = props;

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
          <div className="flex min-w-0 flex-col">
            <span className="font-semibold">{address.label}</span>
            <span className="truncate font-normal text-primary/60">
              {address.address}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <CopyToClipboardButton value={address.address} />
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
