import { useQuery } from "@tanstack/react-query";
import { resolveIdentity } from "lib/utils";
import { queryKeys } from "lib/utils/queryUtils";

export const useResolvedIdentity = (identity?: string) => {
  const { data, ...query } = useQuery(
    queryKeys.resolveIdentity(identity as string),
    ({ queryKey: [{ identity }] }) => {
      return resolveIdentity(identity);
    },
    {
      enabled: !!identity,
      staleTime: 1000 * 60 * 60, // The username is not changing frequently
      cacheTime: 1000 * 60 * 60,
    }
  );

  return {
    ...query,
    resolvedIdentity: data,
  };
};
