import { Chains, SocialMedia } from "../constants";
import { VaultPublicProfile } from "./verida";

export interface IdentityInfo extends VaultPublicProfile {
  veridaName?: string;
  did?: string;
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
  label?: string;
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
  proofLabel: string; // Not sure, but assumed it would be something like "Twitter handle"/"Verida DID"/... in a user-friendly format
  proofValue: string; // Not sure, but assumed it would be the actual value of the proof
}

export interface Profile {
  identityInfo: IdentityInfo;
  socialMediaLinks: SocialMediaLink[];
  featuredLinks: CustomLink[];
  links: CustomLink[];
  walletAddresses: WalletAddress[];
  featuredCollectibles: Collectible[];
  collectibles: Collectible[];
  badges: Badge[];
}
