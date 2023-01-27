import { Client } from "@verida/client-ts";
import { WebUserProfile } from "@verida/account-web-vault";

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
