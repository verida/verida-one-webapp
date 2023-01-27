import { Client } from "@verida/client-ts";
import { DID_VDA_METHOD } from "lib/constants";
import { IdentityInfo } from "lib/types";
import { getMockIdentityInfo } from "./mockProfileUtils";
import { getAnyPublicProfile } from "./veridaUtils";

export const getIdentityInfo = async (
  veridaClient: Client,
  identity: string
): Promise<IdentityInfo> => {
  if (!identity.startsWith(DID_VDA_METHOD)) {
    // TODO: Handle non did:vda identity (Verida Username or unsupported value)

    // TODO: Remove mock data when not needed anymore
    return getMockIdentityInfo(identity);
  }

  // Identity is a did:vda

  const vaultPublicProfile = await getAnyPublicProfile(veridaClient, identity);

  const identityInfo: IdentityInfo = {
    ...vaultPublicProfile,
    did: identity,
    username: undefined, // TODO: Get verida username if claimed
  };

  return identityInfo;
};
