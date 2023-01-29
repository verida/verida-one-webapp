import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "lib/utils";
import { queryKeys } from "lib/utils/queryUtils";
import { useResolvedIdentity } from "./useResolvedIdentity";
import { useVerida } from "./useVerida";

/**
 * Hook querying the Verida One profile data (custom links, platform links, ...) for a given identity (DID or Username)
 */
export const useProfileData = (identity?: string) => {
  const { client } = useVerida();

  const {
    data: resolvedIdentity,
    isLoading: isLoadingResolvedIdentity,
    isError: isErrorResolvedIdentity,
    error: errorResolvedIdentity,
  } = useResolvedIdentity(identity);

  const {
    data,
    isLoading: isLoadingProfileData,
    isError: isErrorProfileData,
    error: errorProfileData,
  } = useQuery(
    queryKeys.getProfileData(resolvedIdentity?.did as string),
    ({ queryKey: [{ did }] }) => {
      return getProfileData(client, did);
    },
    {
      enabled: !!resolvedIdentity?.did,
    }
  );

  const hasData =
    data?.platformLinks?.length ||
    data?.customLinks?.length ||
    data?.walletAddresses?.length;

  return {
    data,
    hasData,
    isLoading: isLoadingProfileData || isLoadingResolvedIdentity,
    isError: isErrorProfileData || isErrorResolvedIdentity,
    error: errorProfileData || errorResolvedIdentity,
  };
};
