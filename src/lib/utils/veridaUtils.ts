import { Client } from "@verida/client-ts";
import { WebUserProfile } from "@verida/account-web-vault";
import { IdentityInfo } from "lib/types";
import { getMockIdentityInfo } from "./mockProfileUtils";

export const getIdentityInfo = async (
  veridaClient: Client,
  identity: string
): Promise<IdentityInfo> => {
  if (!identity.startsWith("did:vda")) {
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

export const getAnyPublicProfile = async (
  client: Client,
  did: string
): Promise<WebUserProfile> => {
  const profileInstance = await client.openPublicProfile(did, "Verida: Vault");
  if (!profileInstance) {
    throw new Error("No public profile exists for this did");
  }

  return {
    avatarUri: (
      (await profileInstance.get("avatar")) as { uri?: string } | undefined
    )?.uri as string,
    name: (await profileInstance.get("name")) as string | undefined,
    country: (await profileInstance.get("country")) as string | undefined,
    description: (await profileInstance.get("description")) as
      | string
      | undefined,
  };
};
