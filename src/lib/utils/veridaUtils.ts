import { Client } from "@verida/client-ts";
import { WebUserProfile } from "@verida/account-web-vault";
import { DatastoreOpenConfig } from "@verida/types";
import { DID_VDA_METHOD } from "lib/constants";
import { config } from "lib/config";
import { ResolvedIdentity } from "lib/types";

/**
 * Resolve an identity by returning the Verida DID of a username, or itself if already a Verida DID.
 * Throw an Error if identity is an unsupported DID or if the username cannot be resolved (not found).
 *
 * Currently returns the username if mock data is enabled.
 *
 * @param identity A username or DID.
 * @returns The resolved DID.
 */
export const resolveIdentity = async (
  identity: string
): Promise<ResolvedIdentity> => {
  if (identity.startsWith(DID_VDA_METHOD)) {
    // Identity is already a Verida DID
    // TODO: Check if there is a associated username and returned a full resolved identity
    return Promise.resolve({ did: identity });
  }

  if (identity.startsWith("did:")) {
    // Identity is an unsupported DID
    return Promise.reject(new Error("Unsupported DID method"));
  }

  // TODO: Remove this check. Temporarily return the identity to use the mock data with it.
  if (config.isMockDataEnabled) {
    return Promise.resolve({ did: identity });
  }

  // TODO: Use the SDK to resolve the Verida Username and return both the DID and username in a resolved identity
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

/**
 * Open an external context and a data store of this context.
 *
 * @param client A Verida client.
 * @param did A Verida DID.
 * @param contextName The context name.
 * @param schemaUri The schema of the datastore.
 * @param datastoreConfig The optional configuration of the datastore.
 * @returns the Datastore if it exists
 */
export const getExternalDatastore = async (
  client: Client,
  did: string,
  contextName: string,
  schemaUri: string,
  datastoreConfig: DatastoreOpenConfig = {}
) => {
  const context = await client.openExternalContext(contextName, did);
  return await context.openExternalDatastore(schemaUri, did, datastoreConfig);
  // TODO: catch error and return a dedicated error (context not found, ...)
};
