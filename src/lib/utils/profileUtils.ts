import { Client } from "@verida/client-ts";
import { config } from "lib/config";
import { DID_VDA_METHOD } from "lib/constants";
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
    config.schemasURL.profile
  );

  const profiles = await datastore.getMany({}, {});
  if (profiles?.length > 0) {
    const profileData = ProfileDataSchema.parse(profiles[0]);
    // TODO: Handle errors on parse? Use safeParse?
    return profileData;
  }

  throw new Error("No profile found");
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
