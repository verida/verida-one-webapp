import { WalletAddress } from "lib/types";

export const queryKeys = {
  resolveIdentity: (identity: string) => [
    { scope: "ResolvedIdentity", identity },
  ],
  getIdentityInfo: (did: string) => [{ scope: "IdentityInfo", did }],
  getProfileData: (did: string) => [{ scope: "ProfileData", did }],
  getNfts: (walletAddresses: WalletAddress[]) => [
    { scope: "NFTs", walletAddresses },
  ],
  getBadges: (walletAddresses: WalletAddress[]) => [
    { scope: "Badges", walletAddresses },
  ],
};
