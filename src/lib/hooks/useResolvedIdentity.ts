import { useQuery } from "@tanstack/react-query";
import { resolveIdentity } from "lib/utils";
import { queryKeys } from "lib/utils/queryUtils";

export const useResolvedIdentity = (identity?: string) => {
  const query = useQuery({
    queryKey: queryKeys.resolveIdentity(identity as string),
    queryFn: ({ queryKey: [{ identity }] }) => {
      return resolveIdentity(identity);
    },
    enabled: !!identity,
    staleTime: 1000 * 60 * 60, // The username is not changing frequently
    cacheTime: 1000 * 60 * 60,
    // TODO: Potentially add a placeholder if its a DID, but there are impacts on the consumers of the data
  });

  return query;
};
