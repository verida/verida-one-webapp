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
} from "lib/types";
import {
  getMockNfts,
  getMockIdentityInfo,
  getMockProfileData,
  MOCK_IDENTITY,
} from "mock";
import {
  getNfts as getNftsFromApi,
  walletProviderSupportedChainsForNft,
} from "lib/api";
import {
  getAnyPublicProfile,
  getExternalDatastore,
  hasDidSyntax,
} from "./veridaUtils";

/**
 * Get the main public information of an Identity (name, description, avatar, ...). This is normally available to all Verida Identities/Accounts whether a Verida One profile has been configured or not.
 *
 * @param veridaClient  A Verida client.
 * @param didOrUsername A username or a DID.
 * @returns The formatted info of the identity.
 */
export const getIdentityInfo = async (
  veridaClient: Client,
  didOrUsername: string
): Promise<IdentityInfo> => {
  // TODO: Remove use of mock data
  if (config.isMockDataEnabled && didOrUsername === MOCK_IDENTITY) {
    return getMockIdentityInfo();
  }

  const publicProfile = await getAnyPublicProfile(veridaClient, didOrUsername);

  const isDid = hasDidSyntax(didOrUsername);

  return {
    ...publicProfile,
    did: isDid ? didOrUsername : undefined,
    username: isDid ? undefined : didOrUsername,
  };
};

/**
 * Get the Verida One profile data (platform links, custom links, wallet addresses and featured items).
 *
 * @param veridaClient  A Verida client.
 * @param didOrUsername A username or a DID.
 * @returns The Verida One profile data.
 */
export const getProfileData = async (
  veridaClient: Client,
  didOrUsername: string
): Promise<ProfileData> => {
  // TODO: Remove use of mock data
  if (config.isMockDataEnabled && didOrUsername === MOCK_IDENTITY) {
    return getMockProfileData();
  }

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

  // Get the default profile record from the datastore, identified by its known Id.
  const profileRecord = (await datastore.get(
    VERIDA_ONE_PROFILE_RECORD_ID,
    {}
  )) as ProfileData;
  return ProfileDataSchema.parse(profileRecord);
  // TODO: Try catch errors and identify the type of error to handle it specifically
  // For the moment, there is no specific handling of the errors, so there is no point of catching and identifying them.
  // Later the best way will likely be to wrap them in app-specific Errors, such as new ProfileNotFoundError(), or new ProfileNotValidError().
};

/**
 * Get all the NFTs of a list of wallet addresses.
 *
 * Currently includes the NFTs mock data is mock data is enabled.
 *
 * @param walletAddresses The list if wallet addresses to fetch the NFTs from.
 * @param abortSignal The signal to cancel the request.
 * @returns The list of NFTs, iinclude the SBTs.
 */
export const getNfts = async (
  walletAddresses: WalletAddress[],
  abortSignal?: AbortSignal
) => {
  // Filter and format the address for the API
  const addresses = walletAddresses
    .filter((address) =>
      // The API doesn't support all the chains and return an error if we pass an unsupported one. When the API gracefully ignore the unsupported we could remove this filter. We won't need to maintain the supported list.
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

/**
 * Filter out the featured items from the list of assets. Not that the list of featured items only provides the necessary properties to identify the asset (chain id, token address and token id) not the whole asset information, hence the need for this function.
 *
 * @param assets The list of all assets.
 * @param featuredAssets The list of featured items.
 * @returns The list of featured assets.
 */
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
