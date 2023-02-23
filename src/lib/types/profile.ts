import { z } from "zod";
import {
  CustomLinkSchema,
  FeaturedAssetSchema,
  PlatformLinkSchema,
  ProfileDataSchema,
  VerificationProofSchema,
  WalletAddressSchema,
} from "lib/schemas";
import { Chains } from "./chains";

export type VerificationProof = z.infer<typeof VerificationProofSchema>;

export type CustomLink = z.infer<typeof CustomLinkSchema>;

export type PlatformLink = z.infer<typeof PlatformLinkSchema>;

export type WalletAddress = z.infer<typeof WalletAddressSchema>;

export type FeaturedAsset = z.infer<typeof FeaturedAssetSchema>;

export type ProfileData = z.infer<typeof ProfileDataSchema>;

// ================

// TODO: Update Badge types following what is returned by the API, when available.

export interface Badge {
  chain_id: Chains;
  owner_address: string;
  token_address: string;
  token_id: string;
  name: string | null;
  metadata: {
    name: string | null;
    description: string | null;
    image: string;
    proofLabel: string; // Not sure, but assumed it would be something like "Twitter handle"/"Verida DID"/... in a user-friendly format
    proofValue: string; // Not sure, but assumed it would be the actual value of the proof
  };
  isSBT: boolean;
}
