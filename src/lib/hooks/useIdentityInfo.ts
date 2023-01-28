import { useQuery } from "@tanstack/react-query";
import { getIdentityInfo, queryKeys } from "lib/utils";
import { useParams } from "react-router-dom";
import { useResolvedIdentity } from "./useResolvedIdentity";
import { useVerida } from "./useVerida";

export const useIdentityInfo = () => {
  const { identity } = useParams();
  const { client } = useVerida();

  const {
    did,
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
    queryKeys.identityInfo(did as string),
    () => {
      return getIdentityInfo(client, did as string);
    },
    {
      enabled: !!did,
    }
  );

  return {
    data,
    isLoading: isLoadingIdentityInfo || isLoadingResolvedIdentity,
    isError: isErrorIdentityInfo || isErrorResolvedIdentity,
    error: errorIdentityInfo || errorResolvedIdentity,
  };
};
