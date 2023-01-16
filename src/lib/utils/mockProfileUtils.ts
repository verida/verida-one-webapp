import {
  Badge,
  Collectible,
  CustomLink,
  IdentityInfo,
  SocialMediaLink,
  WalletAddress,
} from "lib/types";
import { getMockIdentityProfile } from "mock/data";

export const getMockIdentityInfo = async (
  identity?: string
): Promise<IdentityInfo> => {
  const { identityInfo } = await getMockIdentityProfile(identity);
  return identityInfo;
};

export const getMockWalletAddresses = async (
  identity?: string
): Promise<WalletAddress[]> => {
  const { walletAddresses } = await getMockIdentityProfile(identity);
  return walletAddresses;
};

export const getMockCollectibles = async (
  identity?: string
): Promise<Collectible[]> => {
  const { collectibles } = await getMockIdentityProfile(identity);
  return collectibles;
};

export const getMockFeaturedCollectibles = async (
  identity?: string
): Promise<Collectible[]> => {
  const { featuredCollectibles } = await getMockIdentityProfile(identity);
  return featuredCollectibles;
};

export const getMockFeaturedLinks = async (
  identity?: string
): Promise<CustomLink[]> => {
  const { featuredLinks } = await getMockIdentityProfile(identity);
  return featuredLinks;
};

export const getMockLinks = async (
  identity?: string
): Promise<CustomLink[]> => {
  const { links } = await getMockIdentityProfile(identity);
  return links;
};

export const getMockSocialMediaLinks = async (
  identity?: string
): Promise<SocialMediaLink[]> => {
  const { socialMediaLinks } = await getMockIdentityProfile(identity);
  return socialMediaLinks;
};

export const getMockBadges = async (identity?: string): Promise<Badge[]> => {
  const { badges } = await getMockIdentityProfile(identity);
  return badges;
};
