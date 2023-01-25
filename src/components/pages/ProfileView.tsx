import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useIntl } from "react-intl";
import {
  BadgesSection,
  CollectiblesSection,
  CustomLinksSection,
  FeaturedSection,
  IdentityInfoSection,
  SocialMediaSection,
  WalletAddressesSection,
} from "components/organisms";
import {
  getMockBadges,
  getMockCollectibles,
  getMockFeaturedCollectibles,
  getMockFeaturedLinks,
  getMockLinks,
  getMockSocialMediaLinks,
  getMockWalletAddresses,
} from "lib/utils";
import {
  Badge,
  Collectible,
  CustomLink,
  SocialMediaLink,
  WalletAddress,
} from "lib/types";
import { useIdentityInfo } from "lib/hooks";

export const ProfileView: React.FC = () => {
  const [featuredCollectibles, setFeaturedCollectibles] = useState<
    Collectible[]
  >([]);
  const [featuredLinks, setFeaturedLinks] = useState<CustomLink[]>([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>(
    []
  );
  const [collectibles, setCollectibles] = useState<Collectible[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [customLinks, setCustomLinks] = useState<CustomLink[]>([]);
  const [walletAddresses, setWalletAddresses] = useState<WalletAddress[]>([]);

  const i18n = useIntl();
  const { identity } = useParams();

  const notSharingOtherPublicInformationMessage = i18n.formatMessage({
    id: "ProfileView.notSharingPublicInformationMessage",
    defaultMessage: "This user is not sharing other public information",
    description: "Message to show user is not sharing other public information",
  });

  const {
    data: identityInfo,
    isLoading: isLoadingIdentityInfo,
    isError: isErrorIdentityInfo,
  } = useIdentityInfo();

  useEffect(() => {
    const getData = async () => {
      setFeaturedCollectibles(await getMockFeaturedCollectibles(identity));
      setBadges(await getMockBadges(identity));
      setFeaturedLinks(await getMockFeaturedLinks(identity));
      setSocialMediaLinks(await getMockSocialMediaLinks(identity));
      setCollectibles(await getMockCollectibles(identity));
      setCustomLinks(await getMockLinks(identity));
      setWalletAddresses(await getMockWalletAddresses(identity));
    };

    void getData();
  }, [identity, isErrorIdentityInfo]);

  if (isLoadingIdentityInfo || !identityInfo) {
    // TODO: Handle loading state
    return null;
  }

  if (isErrorIdentityInfo) {
    return <Navigate to="/profile-not-found" />;
  }

  return (
    <div>
      <div className="mb-7">
        <IdentityInfoSection identityInfo={identityInfo} />
      </div>
      <div className="space-y-10">
        {/* TODO: Update this message div  once data fetching strategies is completed for wallet data info  */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-gray p-4 ">
          <p className="text-center text-sm text-white text-opacity-60">
            {notSharingOtherPublicInformationMessage}
          </p>
        </div>
        <FeaturedSection
          collectibles={featuredCollectibles}
          links={featuredLinks}
        />
        <SocialMediaSection socialMediaLinks={socialMediaLinks} />
        <CollectiblesSection collectibles={collectibles} />
        {/** FIXME: Find a way to overlap the collectibles list above the padding of the main container */}
        <BadgesSection badges={badges} />
        <CustomLinksSection links={customLinks} />
        <WalletAddressesSection addresses={walletAddresses} />
      </div>
      {/* TODO: Bring back the CTA when removed from the header */}
      {/* <div className="pt-10 pb-10">
        <ProfileCallToAction />
      </div> */}
    </div>
  );
};
