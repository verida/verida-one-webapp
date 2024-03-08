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

  const mainInfo = address.label || address.address;
  const secondaryInfo = address.label ? address.address : undefined;

  const explorerUrl = getChainExplorerUrlForAddress(
    address.chainId,
    address.address
  );

  // TODO: Consider verifying the proof rather than checking it exists.
  return (
    <div {...otherProps}>
      <div
        className={`flex items-center justify-between rounded-xl bg-gray-dark px-4 py-2`}
      >
        <div className="flex min-w-0 items-center space-x-2.5">
          <ChainIcon
            chain={address.chainId}
            verified={!!address.verificationProof?.proof}
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-semibold" title={mainInfo}>
              {mainInfo}
            </span>
            {secondaryInfo && (
              <span
                className="truncate font-normal text-primary/60"
                title={secondaryInfo}
              >
                {secondaryInfo}
              </span>
            )}
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
