import { useQuery } from "@tanstack/react-query";
import { WalletAddress } from "lib/types";
import { getBadges, queryKeys } from "lib/utils";

/**
 * Hook extracting the list of badges (Verida SBT) for a list of wallet addresses.
 */
export const useBadges = (walletAddresses?: WalletAddress[]) => {
  // TODO: Think about pagination if needed

  const query = useQuery(
    queryKeys.getBadges(walletAddresses as WalletAddress[]),
    ({ queryKey: [{ walletAddresses }] }) => {
      return getBadges(walletAddresses);
    },
    {
      enabled: !!walletAddresses,
    }
  );

  return query;
};
