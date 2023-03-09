import { z } from "zod";
import {
  CustomLinkSchema,
  FeaturedAssetSchema,
  PlatformLinkSchema,
  ProfileDataSchema,
  VerificationProofSchema,
  WalletAddressSchema,
} from "lib/schemas";

export type VerificationProof = z.infer<typeof VerificationProofSchema>;

export type CustomLink = z.infer<typeof CustomLinkSchema>;

export type PlatformLink = z.infer<typeof PlatformLinkSchema>;

export type WalletAddress = z.infer<typeof WalletAddressSchema>;

export type FeaturedAsset = z.infer<typeof FeaturedAssetSchema>;

export type ProfileData = z.infer<typeof ProfileDataSchema>;
