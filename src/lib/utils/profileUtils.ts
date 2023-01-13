import { Client } from "@verida/client-ts";
import { IdentityInfo } from "lib/types";
import { Verida } from "./veridaUtils";
import { getMockIdentityInfo } from "./mockProfileUtils";

export const getIdentityInfo = async (
  veridaClient: Client,
  did: string
): Promise<IdentityInfo> => {
  // TODO: Remove mock data when not needed anymore
  if (!did.startsWith("did:vda")) {
    return getMockIdentityInfo(did);
  }

  const vaultPublicProfile = await Verida.getVaultPublicProfile(
    veridaClient,
    did
  );

  const identityInfo: IdentityInfo = {
    ...vaultPublicProfile,
    veridaName: undefined, // TODO: Get verida name if claimed
  };

  return identityInfo;
};
