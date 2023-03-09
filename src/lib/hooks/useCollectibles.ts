import { useCallback } from "react";
import { NftToken, WalletAddress } from "lib/types";
import { useNfts } from "./useNfts";

/**
 * Hook extracting the list of collectibles (NFT) for a list of wallet addresses.
 */
export const useCollectibles = (walletAddresses?: WalletAddress[]) => {
  const selectCollectiblesFromNfts = useCallback((nfts: NftToken[]) => {
    return nfts.filter((nft) => !nft.isSBT);
  }, []);

  return useNfts(walletAddresses, selectCollectiblesFromNfts);
};
