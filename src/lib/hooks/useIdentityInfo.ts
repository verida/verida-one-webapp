import { useQuery } from "@tanstack/react-query";
import { IdentityInfo } from "lib/types";
import { getIdentityInfo, queryKeys } from "lib/utils";
import { useResolvedIdentity } from "./useResolvedIdentity";
import { useVerida } from "./useVerida";

/**
 * Hook querying the Verida public profile from an identity (DID or Username).
 */
export const useIdentityInfo = (identity?: string) => {
  const { client } = useVerida();

  const { data: resolvedIdentity } = useResolvedIdentity(client, identity);

  const {
    data: identityInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: queryKeys.getIdentityInfo(identity as string),
    queryFn: ({ queryKey: [{ identity }] }) => {
      return getIdentityInfo(client, identity);
    },
    enabled: !!identity,
  });

  const data: IdentityInfo | undefined = identityInfo
    ? {
        ...identityInfo,
        ...resolvedIdentity,
      }
    : undefined;

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
