import { Chains, SocialMedia } from "../constants";
import { VaultPublicProfile } from "./verida";

export interface IdentityInfo extends VaultPublicProfile {
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

export interface VeridaBadge {
  chain: Chains;
  address: string;
  collectionLabel: string;
  itemLabel: string;
  media: string;
}

export interface Profile {
  identityInfo: IdentityInfo;
  socialMediaLinks: SocialMediaLink[];
  featuredLinks: CustomLink[];
  links: CustomLink[];
  walletAddresses: WalletAddress[];
  featuredCollectibles: Collectible[];
  collectibles: Collectible[];
}
