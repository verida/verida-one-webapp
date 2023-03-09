import { useCallback } from "react";
import { Collectible, NftToken, WalletAddress } from "lib/types";
import { useNfts } from "./useNfts";

/**
 * Hook extracting the list of collectibles (NFT) for a list of wallet addresses.
 */
export const useCollectibles = (walletAddresses?: WalletAddress[]) => {
  const selectCollectiblesFromNfts = useCallback((nfts: NftToken[]) => {
    return nfts.filter((nft): nft is Collectible => !nft.isSBT);
  }, []);

  return useNfts(walletAddresses, selectCollectiblesFromNfts);
};
