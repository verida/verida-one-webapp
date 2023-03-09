import { useCallback } from "react";
import { Chains, NftToken, WalletAddress } from "lib/types";
import { useNfts } from "./useNfts";

/**
 * Hook extracting one NFT from all the NFTs of a list of wallet addresses.
 */
export const useOneNft = (
  walletAddresses?: WalletAddress[],
  chain?: Chains,
  contractAddress?: string,
  tokenId?: string
) => {
  const selectOneNft = useCallback(
    (nfts: NftToken[]) => {
      if (!chain || !contractAddress || !tokenId) {
        return undefined;
      }
      return nfts?.find(
        (item) =>
          item.chain_id === chain &&
          item.token_address === contractAddress &&
          item.token_id === tokenId
      );
    },
    [chain, contractAddress, tokenId]
  );

  return useNfts(walletAddresses, selectOneNft);
};
