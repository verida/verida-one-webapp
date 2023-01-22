import { useQuery } from "@tanstack/react-query";
import { config } from "lib/config";
import { getIdentityInfo } from "lib/utils";
import { useParams } from "react-router-dom";
import { useVerida } from "./useVerida";

export const useIdentityInfo = () => {
  const { identity } = useParams();
  const { client } = useVerida();

  const identityInfoQuery = useQuery(
    ["IdentityInfo", { identity }],
    () => getIdentityInfo(client, identity as string),
    {
      enabled: !!identity,
    }
  );

  if (config.features.isQueryProfileEnabled) {
    // TODO: Implement querying Verida One profile additional info
  }

  if (config.features.isFetchTokensEnabled) {
    // TODO: Implement fetching tokens
  }

  return identityInfoQuery;
};
