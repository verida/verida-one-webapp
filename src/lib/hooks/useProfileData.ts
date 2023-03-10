import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "lib/utils";
import { queryKeys } from "lib/utils/queryUtils";
import { useVerida } from "./useVerida";

/**
 * Hook querying the Verida One profile data (custom links, platform links, ...) for a given identity (DID or Username)
 */
export const useProfileData = (identity?: string) => {
  const { client } = useVerida();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKeys.getProfileData(identity as string),
    queryFn: ({ queryKey: [{ identity }] }) => {
      return getProfileData(client, identity);
    },
    enabled: !!identity,
  });

  const hasData =
    data?.featuredAssets?.length ||
    data?.platformLinks?.length ||
    data?.customLinks?.length ||
    data?.walletAddresses?.length;

  return {
    data,
    hasData,
    isLoading,
    isError,
    error,
  };
};
