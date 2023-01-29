import { WalletAddress } from "lib/types";

export const queryKeys = {
  resolveIdentity: (identity: string) => [
    { scope: "ResolvedIdentity", identity },
  ],
  getIdentityInfo: (did: string) => [{ scope: "IdentityInfo", did }],
  getProfileData: (did: string) => [{ scope: "ProfileData", did }],
  getCollectibles: (walletAddresses: WalletAddress[]) => [
    { scope: "Collectibles", walletAddresses },
  ],
  getBadges: (walletAddresses: WalletAddress[]) => [
    { scope: "Badges", walletAddresses },
  ],
};
