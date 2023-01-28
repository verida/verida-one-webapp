import { Client } from "@verida/client-ts";
import { DID_VDA_METHOD } from "lib/constants";
import { IdentityInfo } from "lib/types";
import { getMockIdentityInfo } from "./mockProfileUtils";
import { getAnyPublicProfile } from "./veridaUtils";

export const getIdentityInfo = async (
  veridaClient: Client,
  did: string
): Promise<IdentityInfo> => {
  // TODO: Remove this check as it's only for mock data
  if (!did.startsWith(DID_VDA_METHOD)) {
    return getMockIdentityInfo(did);
  }

  const publicProfile = await getAnyPublicProfile(veridaClient, did);

  // TODO: Deal with Verida Username
  const identityInfo: IdentityInfo = {
    ...publicProfile,
    did,
  };

  return identityInfo;
};
