import { useQuery } from "@tanstack/react-query";
import { IdentityInfo, ResolvedIdentity } from "lib/types";
import { getIdentityInfo, queryKeys } from "lib/utils";
import { useResolvedIdentity } from "./useResolvedIdentity";
import { useVerida } from "./useVerida";

/**
 * Hook querying the Verida public profile from an identity (DID or Username).
 */
export const useIdentityInfo = (identity?: string) => {
  const { client, nameClient } = useVerida();

  const {
    data: resolvedIdentity,
    isLoading: isLoadingResolvedIdentity,
    isError: isErrorResolvedIdentity,
    error: errorResolvedIdentity,
  } = useResolvedIdentity(nameClient, identity);

  const {
    data: identityInfo,
    isLoading: isLoadingIdentityInfo,
    isError: isErrorIdentityInfo,
    error: errorIdentityInfo,
  } = useQuery({
    queryKey: queryKeys.getIdentityInfo(resolvedIdentity?.did as string),
    queryFn: () => {
      return getIdentityInfo(client, resolvedIdentity as ResolvedIdentity);
    },
    enabled: !!resolvedIdentity?.did,
  });

  const data: IdentityInfo | undefined = identityInfo
    ? {
        ...identityInfo,
        ...resolvedIdentity,
      }
    : undefined;

  return {
    data,
    isLoading:
      isErrorResolvedIdentity || isErrorIdentityInfo
        ? false
        : isLoadingIdentityInfo || isLoadingResolvedIdentity,
    isError: isErrorIdentityInfo || isErrorResolvedIdentity,
    error: errorIdentityInfo || errorResolvedIdentity,
  };
};
