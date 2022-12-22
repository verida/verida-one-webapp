import {
  Collectible,
  CustomLink,
  ProfileInfo,
  SocialMediaLink,
  WalletAddress,
} from "lib/types";
import {
  profileInfo,
  WalletAddresses,
  collectibles,
  featuredCollectibles,
  featuredLinks,
  links,
  socialMediaLinks,
} from "mock/data";

export const getProfileInfo = async (): Promise<ProfileInfo> => {
  return Promise.resolve(profileInfo);
};

export const getWalletAddresses = async (): Promise<WalletAddress[]> => {
  return Promise.resolve(WalletAddresses);
};

export const getCollectibles = async (): Promise<Collectible[]> => {
  return Promise.resolve(collectibles);
};

export const getFeaturedCollectibles = async (): Promise<Collectible[]> => {
  return Promise.resolve(featuredCollectibles);
};

export const getFeaturedLinks = async (): Promise<CustomLink[]> => {
  return Promise.resolve(featuredLinks);
};

export const getLinks = async (): Promise<CustomLink[]> => {
  return Promise.resolve(links);
};

export const getSocialMediaLinks = async (): Promise<SocialMediaLink[]> => {
  return Promise.resolve(socialMediaLinks);
};
