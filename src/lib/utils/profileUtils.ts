import { Client } from "@verida/client-ts";
import { DatabasePermissionOptionsEnum } from "@verida/types";
import { config } from "lib/config";
import { DID_VDA_METHOD, VERIDA_ONE_PROFILE_RECORD_ID } from "lib/constants";
import { ProfileDataSchema } from "lib/schemas";
import {
  NftToken,
  FeaturedAsset,
  IdentityInfo,
  ProfileData,
  WalletAddress,
} from "lib/types";
import { getMockNfts, getMockIdentityInfo, getMockProfileData } from "mock";
import {
  getNfts as getNftsFromApi,
  walletProviderSupportedChainsForNft,
} from "lib/api";
import { getAnyPublicProfile, getExternalDatastore } from "./veridaUtils";

export const getIdentityInfo = async (
  veridaClient: Client,
  did: string
): Promise<IdentityInfo> => {
  // TODO: Remove this check as it's only for mock data
  if (!did.startsWith(DID_VDA_METHOD)) {
    return getMockIdentityInfo();
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
    return getMockProfileData();
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

export const getNfts = async (
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

  let nfts = await getNftsFromApi(addresses, abortSignal);

  // TODO: Remove use of mock data
  if (config.isMockDataEnabled) {
    const mockNfts = await getMockNfts();
    nfts = [...nfts, ...mockNfts];
  }

  return nfts;
};

export const filterFeaturedAssets = (
  assets: NftToken[],
  featuredAssets: FeaturedAsset[]
): NftToken[] => {
  return featuredAssets
    .sort((a, b) => a.order - b.order)
    .map((featured) => {
      return assets.find(
        (asset) =>
          featured.chainId === asset.chain_id &&
          featured.contractAddress === asset.token_address &&
          featured.tokenId === asset.token_id
      );
    })
    .filter((asset): asset is NftToken => asset !== undefined);
};
