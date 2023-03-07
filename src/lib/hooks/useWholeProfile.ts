import { PlatformLinkCategories } from "lib/constants";
import { filterFeaturedAssets } from "lib/utils";
import { useBadges } from "./useBadges";
import { useCollectibles } from "./useCollectibles";
import { useIdentityInfo } from "./useIdentityInfo";
import { useProfileData } from "./useProfileData";

/**
 * Hook aggregating all the data of a given identity, for the whole Profile view.
 */
export const useWholeProfile = (identity?: string) => {
  // TODO: Manage the loading of the different set of data (identity info and other information)
  const {
    data: identityInfo,
    isLoading: isLoadingIdentityInfo,
    isError: isErrorIdentityInfo,
  } = useIdentityInfo(identity);

  const {
    data: profileData,
    hasData: hasProfileData,
    isLoading: isLoadingProfileData,
    isError: IsErrorProfileData,
  } = useProfileData(identity);

  const featuredLinks = profileData?.customLinks
    ?.filter((link) => link.featured)
    .sort((a, b) => a.order - b.order);

  const customLinks = profileData?.customLinks
    ?.filter((link) => !link.featured)
    .sort((a, b) => a.order - b.order);

  const socialMediaLinks = profileData?.platformLinks
    ?.filter((link) => link.category === PlatformLinkCategories.SOCIAL)
    .sort((a, b) => a.order - b.order);

  const walletAddresses = profileData?.walletAddresses?.sort(
    (a, b) => a.order - b.order
  );

  const {
    data: collectibles,
    isLoading: isLoadingCollectibles,
    isError: isErrorCollectibles,
  } = useCollectibles(walletAddresses);

  const {
    data: badges,
    isLoading: isLoadingBadges,
    isError: isErrorBadges,
  } = useBadges(walletAddresses);

  // TODO: Include Badges in extracting featured assets
  const featuredCollectibles =
    collectibles && profileData?.featuredAssets
      ? filterFeaturedAssets(collectibles, profileData?.featuredAssets)
      : undefined;

  return {
    identityInfo,
    isLoadingIdentityInfo,
    isErrorIdentityInfo,
    profileData,
    hasProfileData,
    featuredLinks,
    featuredCollectibles,
    customLinks,
    socialMediaLinks,
    walletAddresses,
    isLoadingProfileData,
    IsErrorProfileData,
    collectibles,
    isLoadingCollectibles,
    isErrorCollectibles,
    badges,
    isLoadingBadges,
    isErrorBadges,
  };
};
