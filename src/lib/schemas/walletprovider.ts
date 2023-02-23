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
    name: z.string().nullish(),
    description: z.string().nullish(),
    animation_url: z.string().nullish(),
    external_link: z.string().nullish(),
    image: z.string().nullish(),
    attributes: z.array(NftMetadataAttributeSchema),
  })
  .passthrough();

export const NftTokenSchema = z
  .object({
    chain_id: z.string(),
    owner_address: z.string(),
    token_address: z.string(),
    token_id: z.string(),
    amount: z.number().nullish(),
    contract_type: z.string().nullish(),
    name: z.string(),
    symbol: z.string(),
    minter_address: z.string(),
    metadata: NftMetadataSchema,
    isSBT: z.boolean().default(false),
  })
  .passthrough();

export const NftListApiResponseSchema = z
  .object({
    status: z.enum(["sucess", "error"]),
    data: z.array(NftTokenSchema).nullish(),
    error: z.string().nullish(),
  })
  .passthrough();
