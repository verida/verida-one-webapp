import { useQuery } from "@tanstack/react-query";
import { Client } from "@verida/client-ts";
import { config } from "lib/config";
import { getIdentityInfo } from "lib/utils";
import { useParams } from "react-router-dom";
// import { useVerida } from "./useVerida";

const client = new Client({
  environment: config.veridaEnv,
});

export const useIdentityInfo = () => {
  const { identity } = useParams();
  // const { client } = useVerida();

  const identityInfoQuery = useQuery(
    ["IdentityInfo", { identity }],
    () => {
      return getIdentityInfo(client, identity as string);
    },
    {
      enabled: !!identity && !!client,
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
