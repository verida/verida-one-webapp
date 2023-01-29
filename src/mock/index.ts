import { Badge, Collectible, IdentityInfo, ProfileData } from "lib/types";
import {
  identityInfo as identityInfoRyan,
  profileData as profileDataRyan,
  badges as badgesRyan,
  collectibles as collectiblesRyan,
} from "./data-ryan";
import {
  identityInfo as identityInfo6529,
  profileData as profileData6529,
  badges as badges6529,
  collectibles as collectibles6529,
} from "./data-6529";
import { config } from "lib/config";

function checkMockDataEnabled() {
  if (!config.isMockDataEnabled) {
    throw new Error("Mock data is not enabled");
  }
}

export const getMockIdentityInfo = async (
  identity?: string
): Promise<IdentityInfo> => {
  checkMockDataEnabled();
  switch (identity) {
    case "6529":
      return Promise.resolve(identityInfo6529);
    default:
      return Promise.resolve(identityInfoRyan);
  }
};

export const getMockProfileData = async (
  identity?: string
): Promise<ProfileData> => {
  checkMockDataEnabled();
  switch (identity) {
    case "6529":
      return Promise.resolve(profileData6529);
    default:
      return Promise.resolve(profileDataRyan);
  }
};

export const getMockCollectibles = async (
  identity?: string
): Promise<Collectible[]> => {
  checkMockDataEnabled();
  switch (identity) {
    case "6529":
      return Promise.resolve(collectibles6529);
    default:
      return Promise.resolve(collectiblesRyan);
  }
};

export const getMockBadges = async (identity?: string): Promise<Badge[]> => {
  checkMockDataEnabled();
  switch (identity) {
    case "6529":
      return Promise.resolve(badges6529);
    default:
      return Promise.resolve(badgesRyan);
  }
};
