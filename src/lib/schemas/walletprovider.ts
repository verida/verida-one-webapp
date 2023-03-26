import { Chains } from "lib/types";
import { z } from "zod";

export const NftMetadataAttributeSchema = z
  .object({
    trait_type: z.string(),
    value: z.string(),
    display_type: z.string().nullish(),
    max_value: z.number().nullish(),
    trait_count: z.number().nullish(),
    order: z.number().nullish(),
  })
  .passthrough();

export const NftMetadataSchema = z
  .object({
    name: z.string().nullable(),
    description: z.string().nullable(),
    animation_url: z.string().nullable(),
    external_link: z.string().nullable(),
    image: z.string().nullable(),
    background_color: z.string().nullish(),
    attributes: z.array(NftMetadataAttributeSchema).optional(),
  })
  .passthrough();

export const NftTokenSchema = z
  .object({
    chain_id: z.nativeEnum(Chains),
    owner_address: z.string(),
    token_address: z.string(),
    token_id: z.string(),
    name: z.string().nullable(),
    metadata: NftMetadataSchema,
    isSBT: z.boolean().default(false),
  })
  .passthrough();

export const NftListApiResponseSchema = z
  .object({
    status: z.enum(["success", "error"]),
    data: z.array(NftTokenSchema).nullable(),
    error: z.string().nullish(),
  })
  .passthrough();
