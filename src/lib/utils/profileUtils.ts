import { Client } from "@verida/client-ts";
import { DatabasePermissionOptionsEnum } from "@verida/types";
import { config } from "lib/config";
import { DID_VDA_METHOD, VERIDA_ONE_PROFILE_RECORD_ID } from "lib/constants";
import { ProfileDataSchema } from "lib/schemas";
import {
  Collectible,
  FeaturedAsset,
  IdentityInfo,
  ProfileData,
  WalletAddress,
} from "lib/types";
import {
  getMockBadges,
  getMockCollectibles,
  getMockIdentityInfo,
  getMockProfileData,
} from "mock";
import { getAnyPublicProfile, getExternalDatastore } from "./veridaUtils";

export const getIdentityInfo = async (
  veridaClient: Client,
  did: string
): Promise<IdentityInfo> => {
  // TODO: Remove this check as it's only for mock data
  if (!did.startsWith(DID_VDA_METHOD)) {
    return getMockIdentityInfo(did);
  }

  const publicProfile = await getAnyPublicProfile(veridaClient, did);

  // TODO: Deal with Verida Username
  const identityInfo: IdentityInfo = {
    ...publicProfile,
    did,
  };

  return identityInfo;
};

export const getProfileData = async (
  veridaClient: Client,
  did: string
): Promise<ProfileData> => {
  if (!did.startsWith(DID_VDA_METHOD)) {
    return getMockProfileData(did);
  }

  const datastore = await getExternalDatastore(
    veridaClient,
    did,
    config.veridaOneContextName,
    config.schemasURL.profile,
    {
      permissions: {
        write: DatabasePermissionOptionsEnum.OWNER,
        read: DatabasePermissionOptionsEnum.PUBLIC,
      },
      readOnly: true,
    }
  );

  const profileRecord = (await datastore.get(
    VERIDA_ONE_PROFILE_RECORD_ID,
    {}
  )) as ProfileData;
  return ProfileDataSchema.parse(profileRecord);
  // TODO: Try catch errors and identity the type of error to handle it specifically
  // For the moment, there is no specific handling of the errors, so there is no point of catching and identifying them.
  // Later the best way will likely be to wrap them in app-specific Errors, such as new ProfileNotFoundError(), or new ProfileNotValidError().
};

export const getCollectibles = async (walletAddresses: WalletAddress[]) => {
  if (walletAddresses) {
    return getMockCollectibles();
    // As we don't have the identity, we will have the default mock data (ryan)
  }

  // TODO: Implement fetching collectibles
};

export const getBadges = async (walletAddresses: WalletAddress[]) => {
  if (walletAddresses) {
    return getMockBadges();
    // As we don't have the identity, we will have the default mock data (ryan)
  }

  // TODO: Implement fetching badges
};

export const filterFeaturedAssets = (
  collectibles: Collectible[],
  featured: FeaturedAsset[]
): Collectible[] => {
  // TODO: Open up to a mix of Collectibles and Badges
  return featured
    .sort((a, b) => a.order - b.order)
    .map((asset) => {
      return collectibles.find((item) => {
        return (
          asset.chainId === item.chainId &&
          asset.contractAddress === item.contractAddress &&
          asset.tokenId === item.tokenId
        );
      });
    })
    .filter((item): item is Collectible => item !== undefined);
};
