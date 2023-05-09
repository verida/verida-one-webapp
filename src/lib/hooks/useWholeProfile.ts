import { PlatformLinkCategories } from "lib/types";
import { filterFeaturedAssets } from "lib/utils";
import { useBadges } from "./useBadges";
import { useCollectibles } from "./useCollectibles";
import { useIdentityInfo } from "./useIdentityInfo";
import { useProfileData } from "./useProfileData";
import { MAX_LINKS_IN_FEATURED_SECTION } from "lib/constants";

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
    .sort((a, b) => a.order - b.order)
    .slice(0, MAX_LINKS_IN_FEATURED_SECTION);

  const customLinks = profileData?.customLinks
    ?.filter((link) => !featuredLinks?.includes(link))
    .sort((a, b) => a.order - b.order);

  const socialPlatformLinks = profileData?.platformLinks
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

  const assets = [
    ...(collectibles ? collectibles : []),
    ...(badges ? badges : []),
  ];
  const featuredAssets =
    assets.length && profileData?.featuredAssets
      ? filterFeaturedAssets(assets, profileData?.featuredAssets)
      : undefined;

  return {
    identityInfo,
    isLoadingIdentityInfo,
    isErrorIdentityInfo,
    profileData,
    hasProfileData,
    featuredLinks,
    featuredAssets,
    customLinks,
    socialPlatformLinks,
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
