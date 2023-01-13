import { Client } from "@verida/client-ts";
import { IdentityInfo } from "lib/types";
import { Verida } from "./veridaUtils";

export const getIdentityInfo = async (
  veridaClient: Client,
  did: string
): Promise<IdentityInfo> => {
  return Verida.getVaultPublicProfile(veridaClient, did);
  // Allow adding additional information or reorganising the data
};
