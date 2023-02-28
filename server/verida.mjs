import { Client } from "@verida/client-ts";
import { EnvironmentType } from "@verida/types";

/**
 * Resolve an identity by returning the Verida DID of a username, or itself if already a Verida DID.
 * Throw an Error if identity is an unsupported DID or if the username cannot be resolved (not found).
 *
 * @param {string} identity A username or DID.
 * @returns {{did: string, username?: string}|undefined} The resolved identity.
 */
export async function resolveIdentity(identity) {
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
  // Return an error if the username is not resolved
  return Promise.reject(
    new Error("No DID associated with this Verida Username")
  );
}

/**
 * Get the public profile of any Verida DID, if it exists.
 *
 * @param {string} did A Verida DID.
 * @returns {{name: string}} The Verida Public Profile.
 */
export async function getAnyPublicProfile(did) {
  const client = new Client({
    environment: EnvironmentType.TESTNET,
  });

  const profileInstance = await client.openPublicProfile(did, "Verida: Vault");
  if (!profileInstance) {
    throw new Error("No public profile exists for this did");
  }

  return {
    name: await profileInstance.get("name"),
    // The avatar.uri could be interesting for generating a meta image later on
  };
}

/**
 * Resolve the identity (DID or Username), query the public profile and return the name property.
 *
 * Gracefully return undefined if any of the steps fail or doesn't return any result.
 *
 * @param {string} identity
 * @returns {Promise<string | undefined>} the name associated with the identity
 */
export async function getNameFromIdentity(identity) {
  if (!identity) {
    return undefined;
  }

  // TODO: Introduce caching

  try {
    const resolvedIdentity = await resolveIdentity(identity);
    if (!resolvedIdentity?.did) {
      return undefined;
    }

    const profile = await getAnyPublicProfile(resolvedIdentity.did);

    return profile.name;
  } catch (error) {
    return undefined;
  }
}
