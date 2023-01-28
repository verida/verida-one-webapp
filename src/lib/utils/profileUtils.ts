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

  // Identity is a did:vda

  const publicProfile = await getAnyPublicProfile(veridaClient, did);

  const identityInfo: IdentityInfo = {
    ...publicProfile,
    did,
    username: undefined, // TODO: Get verida username if claimed
  };

  return identityInfo;
};
