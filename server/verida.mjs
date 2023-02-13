import { Client } from "@verida/client-ts";
import { EnvironmentType } from "@verida/types";

/**
 * Resolve an identity by returning the Verida DID of a username, or itself if already a Verida DID.
 * Throw an Error if identity is an unsupported DID or if the username cannot be resolved (not found).
 *
 * @param identity A username or DID.
 * @returns The resolved DID.
 */
export const resolveIdentity = async (identity) => {
  if (identity.startsWith("did:vda")) {
    // Identity is already a Verida DID
    // TODO: Check if there is a associated username and returned a full resolved identity
    return Promise.resolve({ did: identity });
  }

  if (identity.startsWith("did:")) {
    // Identity is an unsupported DID
    return Promise.reject(new Error("Unsupported DID method"));
  }

  // TODO: Use the SDK to resolve the Verida Username and return both the DID and username in a resolved identity
};

/**
 * Get the public profiel of any Verida DID, if it exists.
 *
 * @param did A Verida DID.
 * @returns The Verida Public Profile.
 */
export const getAnyPublicProfile = async (did) => {
  const client = new Client({
    environment: EnvironmentType.TESTNET,
  });

  const profileInstance = await client.openPublicProfile(did, "Verida: Vault");
  if (!profileInstance) {
    throw new Error("No public profile exists for this did");
  }

  return {
    name: await profileInstance.get("name"),
    // The avatar.uri could be interesting for generating a meta image
  };
};

export const getNameFromIdentity = async (identity) => {
  if (!identity) {
    return undefined;
  }
  try {
    const resolvedIdentity = await resolveIdentity(identity);
    if (!resolvedIdentity?.did) {
      return undefined;
    }
    const profile = await getAnyPublicProfile(resolvedIdentity?.did);
    return profile.name;
  } catch (err) {
    // TODO: Handle errors
    return undefined;
  }
};
