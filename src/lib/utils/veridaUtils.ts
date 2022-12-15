import {
  Network,
  EnvironmentType,
  Context,
  Datastore,
} from "@verida/client-ts";
import { VaultAccount } from "@verida/account-web-vault";
import { UserProfile } from "lib/types";

const connect = async (
  contextName: string,
  environment: EnvironmentType,
  logoUrl?: string,
  openUrl?: string
): Promise<[context: Context, account: VaultAccount, profile: UserProfile]> => {
  const account = new VaultAccount({
    request: {
      logoUrl,
      openUrl,
    },
  });

  const context = await Network.connect({
    client: {
      environment,
    },
    account: account,
    context: {
      name: contextName,
    },
  });

  if (!context) {
    throw new Error("Verida Authentication Cancelled");
  }

  const did = await account.did();
  const profile = await getPublicProfileInfo(context, did);

  return [context, account, profile];
};

const getPublicProfileInfo = async (
  context: Context,
  did: string
): Promise<UserProfile> => {
  const profile: UserProfile = {
    id: did,
  };

  const client = context.getClient();
  const profileInstance = await client.openPublicProfile(did, "Verida: Vault");
  if (profileInstance) {
    const profileData = (await profileInstance.getMany({}, {})) as {
      name?: string;
      avatar?: { uri: string };
    };
    profile.name = profileData?.name;
    profile.avatar = profileData?.avatar?.uri;
  }

  return profile;
};

const openDatastore = async (
  context: Context,
  schemaURL: string
): Promise<Datastore> => {
  return await context.openDatastore(schemaURL);
};

const disconnect = async (
  account: VaultAccount,
  contextName?: string
): Promise<void> => {
  await account.disconnect(contextName);
};

export const Verida = {
  connect,
  disconnect,
  getPublicProfileInfo,
  openDatastore,
};
