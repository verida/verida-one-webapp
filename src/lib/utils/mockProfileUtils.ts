import {
  Collectible,
  CustomLink,
  SocialMediaLink,
  WalletAddress,
} from "lib/types";
import { getIdentityProfile } from "mock/data";

export const getWalletAddresses = async (
  identity?: string
): Promise<WalletAddress[]> => {
  const { walletAddresses } = await getIdentityProfile(identity);
  return walletAddresses;
};

export const getCollectibles = async (
  identity?: string
): Promise<Collectible[]> => {
  const { collectibles } = await getIdentityProfile(identity);
  return collectibles;
};

export const getFeaturedCollectibles = async (
  identity?: string
): Promise<Collectible[]> => {
  const { featuredCollectibles } = await getIdentityProfile(identity);
  return featuredCollectibles;
};

export const getFeaturedLinks = async (
  identity?: string
): Promise<CustomLink[]> => {
  const { featuredLinks } = await getIdentityProfile(identity);
  return featuredLinks;
};

export const getLinks = async (identity?: string): Promise<CustomLink[]> => {
  const { links } = await getIdentityProfile(identity);
  return links;
};

export const getSocialMediaLinks = async (
  identity?: string
): Promise<SocialMediaLink[]> => {
  const { socialMediaLinks } = await getIdentityProfile(identity);
  return socialMediaLinks;
};
