import { IdentityInfo, NftToken, ProfileData } from "lib/types";
import { identityInfo, profileData, nfts } from "./data-ryan";
import { config } from "lib/config";

function checkMockDataEnabled() {
  if (!config.isMockDataEnabled) {
    throw new Error("Mock data is not enabled");
  }
}

export const getMockIdentityInfo = async (): Promise<IdentityInfo> => {
  checkMockDataEnabled();
  return Promise.resolve(identityInfo);
};

export const getMockProfileData = async (): Promise<ProfileData> => {
  checkMockDataEnabled();
  return Promise.resolve(profileData);
};

export const getMockNfts = async (): Promise<NftToken[]> => {
  checkMockDataEnabled();
  return Promise.resolve(nfts);
};
