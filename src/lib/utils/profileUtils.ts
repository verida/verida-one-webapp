import { Client } from "@verida/client-ts";
import { DatabasePermissionOptionsEnum } from "@verida/types";
import { config } from "lib/config";
import { VERIDA_ONE_PROFILE_RECORD_ID } from "lib/constants";
import { ProfileDataSchema } from "lib/schemas";
import {
  NftToken,
  FeaturedAsset,
  IdentityInfo,
  ProfileData,
  WalletAddress,
  ResolvedIdentity,
} from "lib/types";
import { getMockBadges } from "mock";
import { getNfts, walletProviderSupportedChainsForNft } from "lib/api";
import { getAnyPublicProfile, getExternalDatastore } from "./veridaUtils";

// TODO: Write JS DOc

export const getIdentityInfo = async (
  veridaClient: Client,
  resolvedIdentity: ResolvedIdentity
): Promise<IdentityInfo> => {
  const publicProfile = await getAnyPublicProfile(
    veridaClient,
    resolvedIdentity.did
  );

  return {
    ...publicProfile,
    ...resolvedIdentity,
  };
};

export const getProfileData = async (
  veridaClient: Client,
  didOrUsername: string
): Promise<ProfileData> => {
  const datastore = await getExternalDatastore(
    veridaClient,
    didOrUsername,
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

export const getCollectibles = async (
  walletAddresses: WalletAddress[],
  abortSignal?: AbortSignal
) => {
  // Filter and format the address for the API
  const addresses = walletAddresses
    .filter((address) =>
      walletProviderSupportedChainsForNft.includes(address.chainId)
    )
    .map((address) => `${address.chainId}:${address.address}`);

  if (addresses.length === 0) {
    return [];
  }

  return await getNfts(addresses, abortSignal);
};

export const getBadges = async (walletAddresses: WalletAddress[]) => {
  // TODO: Remove use of mock data
  if (walletAddresses) {
    return getMockBadges();
  }

  // TODO: Implement fetching badges
  return Promise.resolve([]);
};

export const filterFeaturedAssets = (
  collectibles: NftToken[],
  featured: FeaturedAsset[]
): NftToken[] => {
  // TODO: Open up to a mix of Collectibles and Badges
  return featured
    .sort((a, b) => a.order - b.order)
    .map((asset) => {
      return collectibles.find((item) => {
        return (
          asset.chainId === item.chain_id &&
          asset.contractAddress === item.token_address &&
          asset.tokenId === item.token_id
        );
      });
    })
    .filter((item): item is NftToken => item !== undefined);
};
