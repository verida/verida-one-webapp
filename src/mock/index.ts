import { Badge, IdentityInfo, ProfileData } from "lib/types";
import { identityInfo, profileData, badges } from "./data-ryan";
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

export const getMockBadges = async (): Promise<Badge[]> => {
  checkMockDataEnabled();
  return Promise.resolve(badges);
};
