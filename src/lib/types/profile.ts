import {
  CustomLinkSchema,
  FeaturedAssetSchema,
  PlatformLinkSchema,
  ProfileDataSchema,
  VerificationProofSchema,
  WalletAddressSchema,
} from "lib/schemas";
import { z } from "zod";
import { Chains } from "./chains";

export type VerificationProof = z.infer<typeof VerificationProofSchema>;

export type CustomLink = z.infer<typeof CustomLinkSchema>;

export type PlatformLink = z.infer<typeof PlatformLinkSchema>;

export type WalletAddress = z.infer<typeof WalletAddressSchema>;

export type FeaturedAsset = z.infer<typeof FeaturedAssetSchema>;

export type ProfileData = z.infer<typeof ProfileDataSchema>;

// ================

// TODO: Update Collectible and Badge types following what is returned by the API, when available.

export interface Collectible {
  chainId: Chains;
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
  chainId: Chains;
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
