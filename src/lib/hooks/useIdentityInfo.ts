import { useQuery } from "@tanstack/react-query";
import { getIdentityInfo, queryKeys } from "lib/utils";
import { useParams } from "react-router-dom";
import { useResolvedIdentity } from "./useResolvedIdentity";
import { useVerida } from "./useVerida";

export const useIdentityInfo = () => {
  const { identity } = useParams();
  const { client } = useVerida();

  const {
    resolvedIdentity,
    isLoading: isLoadingResolvedIdentity,
    isError: isErrorResolvedIdentity,
    error: errorResolvedIdentity,
  } = useResolvedIdentity(identity);

  const {
    data,
    isLoading: isLoadingIdentityInfo,
    isError: isErrorIdentityInfo,
    error: errorIdentityInfo,
  } = useQuery(
    queryKeys.identityInfo(resolvedIdentity?.did as string),
    ({ queryKey: [{ did }] }) => {
      return getIdentityInfo(client, did);
    },
    {
      enabled: !!resolvedIdentity?.did,
    }
  );

  return {
    data,
    isLoading: isLoadingIdentityInfo || isLoadingResolvedIdentity,
    isError: isErrorIdentityInfo || isErrorResolvedIdentity,
    error: errorIdentityInfo || errorResolvedIdentity,
  };
};
