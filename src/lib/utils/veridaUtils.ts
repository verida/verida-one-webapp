import { Client } from "@verida/client-ts";
import { WebUserProfile } from "@verida/account-web-vault";
import { DID_VDA_METHOD } from "lib/constants";
import { config } from "lib/config";

/**
 * /**
 * Resolve an identity by returning the Verida DID of a username, or itself if already a Verida DID.
 * Throw an Error if identity is an unsupported DID or if the username cannot be resolved (not found).
 *
 * Currently returns the username if mock data is enabled.
 *
 * @param identity A username or DID.
 * @returns The resolved DID.
 */
export const resolveIdentity = async (identity: string): Promise<string> => {
  if (identity.startsWith(DID_VDA_METHOD)) {
    // Identity is already a Verida DID
    return Promise.resolve(identity);
  }

  if (identity.startsWith("did:")) {
    // Identity is an unsupported DID
    return Promise.reject(new Error("Unsupported DID method"));
  }

  // Temporarily return the identity to use the mock data with it.
  if (config.isMockDataEnabled) {
    return Promise.resolve(identity);
  }

  // TODO: Use the SDK to resolve Verida Username and return a Verida DID
  return Promise.reject(new Error("Not implemented"));
};

/**
 * Get the public profiel of any Verida DID, if it exists.
 *
 * @param client A Verida client.
 * @param did A Verida DID.
 * @returns The Verida Public Profile.
 */
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
