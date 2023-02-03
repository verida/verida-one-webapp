import { useQuery } from "@tanstack/react-query";
import { getIdentityInfo, queryKeys } from "lib/utils";
import { useResolvedIdentity } from "./useResolvedIdentity";
import { useVerida } from "./useVerida";

/**
 * Hook querying the Verida public profile from an identity (DID or Username).
 */
export const useIdentityInfo = (identity?: string) => {
  const { client } = useVerida();

  const {
    data: resolvedIdentity,
    isLoading: isLoadingResolvedIdentity,
    isError: isErrorResolvedIdentity,
    error: errorResolvedIdentity,
  } = useResolvedIdentity(identity);

  const {
    data,
    isLoading: isLoadingIdentityInfo,
    isError: isErrorIdentityInfo,
    error: errorIdentityInfo,
  } = useQuery({
    queryKey: queryKeys.getIdentityInfo(resolvedIdentity?.did as string),
    queryFn: ({ queryKey: [{ did }] }) => {
      return getIdentityInfo(client, did);
    },
    enabled: !!resolvedIdentity?.did,
  });

  return {
    data,
    isLoading: isLoadingIdentityInfo || isLoadingResolvedIdentity,
    isError: isErrorIdentityInfo || isErrorResolvedIdentity,
    error: errorIdentityInfo || errorResolvedIdentity,
  };
};
