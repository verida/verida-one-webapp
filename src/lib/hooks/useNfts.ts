import { useQuery } from "@tanstack/react-query";
import { NftToken, WalletAddress } from "lib/types";
import { getNfts, queryKeys } from "lib/utils";

/**
 * Hook extracting the list of  NFTs for a list of wallet addresses.
 */
export const useNfts = <R = NftToken>(
  walletAddresses?: WalletAddress[],
  select?: (nfts: NftToken[]) => R
) => {
  // TODO: Think about pagination if needed

  const query = useQuery({
    queryKey: queryKeys.getNfts(walletAddresses as WalletAddress[]),
    queryFn: ({ queryKey: [{ walletAddresses }], signal }) => {
      return getNfts(walletAddresses, signal);
    },
    enabled: !!walletAddresses,
    select,
    // Fine-tune the stale time and cache time if needed
  });

  return query;
};
