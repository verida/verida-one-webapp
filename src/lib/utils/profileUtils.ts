import { Client } from "@verida/client-ts";
import { IdentityInfo } from "lib/types";
import { Verida } from "./veridaUtils";
import { getMockIdentityInfo } from "./mockProfileUtils";

export const getIdentityInfo = async (
  veridaClient: Client,
  did: string
): Promise<IdentityInfo> => {
  // TODO: Remove mock data when not needed anymore
  if (!did.startsWith("did:vda")) {
    return getMockIdentityInfo(did);
  }

  const vaultPublicProfile = await Verida.getVaultPublicProfile(
    veridaClient,
    did
  );

  const identityInfo: IdentityInfo = {
    ...vaultPublicProfile,
    veridaName: undefined, // TODO: Get verida name if claimed
  };

  return identityInfo;
};

// helper function to trucate DID to have a fixed length e.g ("did:vda:testnet:" + 8)
export const truncateProfileDid = (did: string, didLength = 8): string => {
  const splittedDid = did.split(":");
  const lastIndex = splittedDid.length - 1;
  const publicAddress = splittedDid[lastIndex];
  const truncatePublicAddress = publicAddress.slice(0, didLength);
  splittedDid[lastIndex] = truncatePublicAddress;

  return `${splittedDid.join(":")}...`;
};
