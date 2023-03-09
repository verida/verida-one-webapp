import { useCallback } from "react";
import { Badge, NftToken, WalletAddress } from "lib/types";
import { useNfts } from "./useNfts";

/**
 * Hook extracting the list of badges (SBT) for a list of wallet addresses.
 */
export const useBadges = (walletAddresses?: WalletAddress[]) => {
  const selectBadgesFromNfts = useCallback((nfts: NftToken[]) => {
    return nfts.filter((nft): nft is Badge => nft.isSBT);
  }, []);

  return useNfts(walletAddresses, selectBadgesFromNfts);
};
