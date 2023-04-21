import { z } from "zod";
import { Chains, Platforms, PlatformLinkCategories } from "lib/types";

export const VerificationProofSchema = z.object({
  type: z.string(), // TODO: Enum?
  proof: z.string(),
});

export const CustomLinkSchema = z.object({
  label: z.string(),
  url: z.string(),
  featured: z.boolean().optional(),
  order: z.number().default(999),
});

export const PlatformLinkSchema = z.object({
  // TODO: Replace enum
  category: z.nativeEnum(PlatformLinkCategories),
  // TODO: Replace enum
  platform: z.nativeEnum(Platforms),
  accountId: z.string(),
  avatarUrl: z.string().optional(),
  url: z.string(),
  verificationProof: VerificationProofSchema.optional(),
  order: z.number().default(999),
});

export const WalletAddressSchema = z.object({
  chainId: z.nativeEnum(Chains),
  address: z.string(),
  label: z.string().optional(),
  verificationProof: VerificationProofSchema.optional(),
  order: z.number().default(999),
});

export const FeaturedAssetSchema = z.object({
  chainId: z.nativeEnum(Chains),
  contractAddress: z.string(),
  tokenId: z.string(),
  ownerAddress: z.string(),
  order: z.number().default(999),
});

export const ProfileDataSchema = z
  .object({
    customLinks: z.array(CustomLinkSchema).optional(),
    platformLinks: z.array(PlatformLinkSchema).optional(),
    walletAddresses: z.array(WalletAddressSchema).optional(),
    featuredAssets: z.array(FeaturedAssetSchema).optional(),
  })
  .passthrough();
