import { Client } from "@verida/client-ts";
import { WebUserProfile } from "@verida/web-helpers";
import { DatastoreOpenConfig } from "@verida/types";
import {
  DID_METHOD,
  DID_VDA_METHOD,
  USERNAME_VDA_EXTENSION,
} from "lib/constants";
import { ResolvedIdentity } from "lib/types";

/**
 * Check if the param as a DID syntax, ie: starts with 'did:'.
 *
 * @param didOrUsername A username or DID.
 * @returns true if it has a DID syntax.
 */
export const hasDidSyntax = (didOrUsername: string) => {
  return didOrUsername.startsWith(DID_METHOD) ? true : false;
};

/**
 * Check if the param as a Verida DID syntax, ie: starts with 'did:vda:'.
 *
 * @param didOrUsername A username or DID.
 * @returns true if it has a Verida DID syntax.
 */
export const hasVeridaDidSyntax = (didOrUsername: string) => {
  return didOrUsername.startsWith(DID_VDA_METHOD) ? true : false;
};

/**
 * Check if the param as a Verida Username syntax, ie: ends with 'd.vda'.
 *
 * @param didOrUsername A username or DID.
 * @returns true if it has a Verida Username syntax.
 */
export const hasVeridaUsernameSyntax = (didOrUsername: string) => {
  // TODO: Check other rules if needed
  return didOrUsername.endsWith(USERNAME_VDA_EXTENSION) ? true : false;
};

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
  client: Client,
  identity: string
): Promise<ResolvedIdentity> => {
  console.debug("identity:", identity);
  if (hasVeridaDidSyntax(identity)) {
    // Identity is considered a Verida DID.
    // "Considered" as in "valid VDA DID method", whether the DID actually exists is not a concern, it will be handled by catching the errors.
    try {
      console.debug("searching for usernames");
      const usernames = await client.getUsernames(identity);
      console.debug("usernames:", usernames);
      return {
        did: identity,
        username: usernames?.length > 0 ? usernames[0] : undefined,
        // TODO: Support multiple usernames
      };
    } catch (error: unknown) {
      // The errors won't say whether the DID exist or not, so gracefully return it with no usernames
      console.error(error);
      return { did: identity };
    }
  }

  // TODO: Handle case of username without extension, they should be considered Verida Username
  if (hasVeridaUsernameSyntax(identity)) {
    // Identity is considered a Verida Username.
    try {
      console.debug("searching for a did");
      const did = await client.getDID(identity);
      console.debug("did:", did);
      return {
        did,
        username: identity,
      };
    } catch (error: unknown) {
      console.error(error);
      throw new Error("Cannot resolve the Verida Username");
    }
  }

  console.debug("Unsupported DID or Username");
  throw new Error("Unsupported DID or Username");
};

/**
 * Get the public profile of any Verida DID, if it exists.
 *
 * @param client A Verida client.
 * @param didOrUsername A username or DID.
 * @returns The Verida Public Profile.
 */
export const getAnyPublicProfile = async (
  client: Client,
  didOrUsername: string
): Promise<WebUserProfile> => {
  const profileInstance = await client.openPublicProfile(
    didOrUsername,
    "Verida: Vault"
  );
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
 * @param did A username or DID.
 * @param contextName The context name.
 * @param schemaUri The schema of the datastore.
 * @param datastoreConfig The optional configuration of the datastore.
 * @returns the Datastore if it exists
 */
export const getExternalDatastore = async (
  client: Client,
  didOrUsername: string,
  contextName: string,
  schemaUri: string,
  datastoreConfig: DatastoreOpenConfig = {}
) => {
  const context = await client.openExternalContext(contextName, didOrUsername);
  return await context.openExternalDatastore(
    schemaUri,
    didOrUsername,
    datastoreConfig
  );
  // TODO: catch error and return a dedicated error (context not found, ...)
};
