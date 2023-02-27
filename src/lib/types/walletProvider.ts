import { z } from "zod";
import {
  NftMetadataAttributeSchema,
  NftListApiResponseSchema,
  NftMetadataSchema,
  NftTokenSchema,
} from "lib/schemas";

export type NftMetadataAttribute = z.infer<typeof NftMetadataAttributeSchema>;

export type NftMetadata = z.infer<typeof NftMetadataSchema>;

export type NftToken = z.infer<typeof NftTokenSchema>;

export type NftListApiResponse = z.infer<typeof NftListApiResponseSchema>;
