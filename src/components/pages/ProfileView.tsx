import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CollectiblesSection,
  CustomLinksSection,
  FeaturedSection,
  IdentityInfoSection,
  SocialMediaSection,
  WalletAddressesSection,
} from "components/organisms";
import {
  getMockCollectibles,
  getMockFeaturedCollectibles,
  getMockFeaturedLinks,
  getMockLinks,
  getMockSocialMediaLinks,
  getMockWalletAddresses,
} from "lib/utils";
import {
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
  const [customLinks, setCustomLinks] = useState<CustomLink[]>([]);
  const [walletAddresses, setWalletAddresses] = useState<WalletAddress[]>([]);

  const { identity } = useParams();

  useEffect(() => {
    const getData = async () => {
      setFeaturedCollectibles(await getMockFeaturedCollectibles(identity));
      setFeaturedLinks(await getMockFeaturedLinks(identity));
      setSocialMediaLinks(await getMockSocialMediaLinks(identity));
      setCollectibles(await getMockCollectibles(identity));
      setCustomLinks(await getMockLinks(identity));
      setWalletAddresses(await getMockWalletAddresses(identity));
    };
    void getData();
  }, [identity]);

  const {
    data: identityInfo,
    isLoading: isLoadingIdentityInfo,
    isError: isErrorIdentityInfo,
  } = useIdentityInfo();

  if (isLoadingIdentityInfo || !identityInfo) {
    // TODO: Handle loading state
    return null;
  }

  if (isErrorIdentityInfo) {
    // TODO: Handle error state
    return null;
  }

  return (
    <div>
      <div className="mb-7">
        <IdentityInfoSection identityInfo={identityInfo} />
      </div>
      <div className="space-y-10">
        <FeaturedSection
          collectibles={featuredCollectibles}
          links={featuredLinks}
        />
        <SocialMediaSection socialMediaLinks={socialMediaLinks} />
        <CollectiblesSection collectibles={collectibles} />
        {/** FIXME: Find a way to overlap the collectibles list above the padding of the main container */}
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
