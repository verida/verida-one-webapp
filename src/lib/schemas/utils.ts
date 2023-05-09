import { ZodSchema, z } from "zod";

/**
 * Creates a Zod array schema of a given schema, which filters out invalid items
 *
 * @param schema A Z schema instance
 * @returns A Zod array schema of the given schema
 */
export const makeFilteredArraySchema = <S extends ZodSchema>(schema: S) =>
  z.array(z.unknown()).transform((items) =>
    items?.filter((item): item is z.infer<S> => {
      const result = schema.safeParse(item);
      if (!result.success) {
        // TODO: Report the validation error
        // result.error doesn't leak any data, so it's safe to report
      }
      return result.success;
    })
  );
