import { Chains, SocialMedia } from "../constants";

export interface VeridaProfile {
  name: string;
  avatar?: string;
  description?: string;
}

export interface ProfileInfo extends VeridaProfile {
  veridaName?: string;
}

export interface Link {
  url: string;
}

export interface CustomLink extends Link {
  label: string;
}

export interface SocialMediaLink extends Link {
  platform: SocialMedia;
  verified?: boolean;
}

export interface WalletAddress {
  address: string;
  chain: Chains;
  verified?: boolean;
}

export interface Collectible {
  chain: Chains;
  contractAddress: string;
  tokenId: string;
  collectionLabel: string;
  tokenLabel: string;
  description?: string;
  ownerAddress: string;
  media: string; // We could adjust if there's a need to have multi media (static, animated, ...)
  priceUnit?: string;
  floorPrice?: number;
}
export interface Badge {
  chain: Chains;
  contractAddress: string;
  tokenId: string;
  collectionLabel: string;
  tokenLabel: string;
  description?: string;
  ownerAddress: string;
  media: string;
  username: string;
  proofType: string; // Not sure, but assumed it would be something like "Twitter handle"/"Verida DID"/... in a user-friendly format
  proofValue: string; // Not sure, but assumed it would be the actual value of the proof
}

export interface VeridaBadge {
  chain: Chains;
  address: string;
  collectionLabel: string;
  itemLabel: string;
  media: string;
}

export interface Profile {
  profileInfo: ProfileInfo;
  socialMediaLinks: SocialMediaLink[];
  featuredLinks: CustomLink[];
  links: CustomLink[];
  walletAddresses: WalletAddress[];
  featuredCollectibles: Collectible[];
  collectibles: Collectible[];
  badges: Badge[];
}
