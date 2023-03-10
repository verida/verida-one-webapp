import { WalletAddress } from "lib/types";

export const queryKeys = {
  resolveIdentity: (identity: string) => [
    { scope: "ResolvedIdentity", identity },
  ],
  getIdentityInfo: (identity: string) => [{ scope: "IdentityInfo", identity }],
  getProfileData: (identity: string) => [{ scope: "ProfileData", identity }],
  getNfts: (walletAddresses: WalletAddress[]) => [
    { scope: "NFTs", walletAddresses },
  ],
};
