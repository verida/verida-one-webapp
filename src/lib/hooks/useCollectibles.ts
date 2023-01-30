import { useQuery } from "@tanstack/react-query";
import { WalletAddress } from "lib/types";
import { getCollectibles, queryKeys } from "lib/utils";

/**
 * Hook extracting the list of collectibles (NFT) for a list of wallet addresses.
 */
export const useCollectibles = (walletAddresses?: WalletAddress[]) => {
  // TODO: Think about pagination if needed

  const query = useQuery({
    queryKey: queryKeys.getCollectibles(walletAddresses as WalletAddress[]),
    queryFn: ({ queryKey: [{ walletAddresses }] }) => {
      return getCollectibles(walletAddresses);
    },
    enabled: !!walletAddresses,
  });

  return query;
};
