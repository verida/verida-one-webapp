import { useCallback } from "react";
import { NftToken, WalletAddress } from "lib/types";
import { useNfts } from "./useNfts";

/**
 * Hook extracting the list of badges (SBT) for a list of wallet addresses.
 */
export const useBadges = (walletAddresses?: WalletAddress[]) => {
  const selectBadgesFromNfts = useCallback((nfts: NftToken[]) => {
    return nfts.filter((nft) => nft.isSBT);
  }, []);

  const query = useNfts(walletAddresses, selectBadgesFromNfts);

  return query;
};
