import React, { useEffect, useState } from "react";
import {
  CollectiblesSection,
  CustomLinksSection,
  FeaturedSection,
  ProfileInfoSection,
  SocialMediaSection,
  WalletAddressesSection,
} from "components/organisms";
import {
  getCollectibles,
  getFeaturedCollectibles,
  getFeaturedLinks,
  getLinks,
  getProfileInfo,
  getSocialMediaLinks,
  getWalletAddresses,
} from "lib/utils";
import {
  Collectible,
  CustomLink,
  ProfileInfo,
  SocialMediaLink,
  WalletAddress,
} from "lib/types";

export const ProfileView: React.FC = () => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({ name: "" });
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

  useEffect(() => {
    const getData = async () => {
      setProfileInfo(await getProfileInfo());
      setFeaturedCollectibles(await getFeaturedCollectibles());
      setFeaturedLinks(await getFeaturedLinks());
      setSocialMediaLinks(await getSocialMediaLinks());
      setCollectibles(await getCollectibles());
      setCustomLinks(await getLinks());
      setWalletAddresses(await getWalletAddresses());
    };
    void getData();
  }, []);

  return (
    <div>
      <div className="mb-7">
        <ProfileInfoSection profileInfo={profileInfo} />
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
    </div>
  );
};
