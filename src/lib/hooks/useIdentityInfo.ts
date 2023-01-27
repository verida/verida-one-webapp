import { useQuery } from "@tanstack/react-query";
import { getIdentityInfo } from "lib/utils";
import { useParams } from "react-router-dom";
import { useVerida } from "./useVerida";

export const useIdentityInfo = () => {
  const { identity } = useParams();
  const { client } = useVerida();

  const identityInfoQuery = useQuery(
    ["IdentityInfo", { identity }],
    () => {
      return getIdentityInfo(client, identity as string);
    },
    {
      enabled: !!identity,
    }
  );

  return identityInfoQuery;
};
