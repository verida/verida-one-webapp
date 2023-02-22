import React from "react";
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
import { useWholeProfile } from "lib/hooks";
import { NoProfileFoundView } from "./NoProfileFoundView";
import { useParams } from "react-router-dom";
import { MetaTags } from "components/atoms";

export const ProfileView: React.FC = () => {
  const i18n = useIntl();
  const { identity } = useParams();

  const {
    identityInfo,
    isLoadingIdentityInfo,
    isErrorIdentityInfo,
    featuredLinks,
    featuredCollectibles,
    customLinks,
    socialMediaLinks,
    walletAddresses,
    hasProfileData,
    collectibles,
    badges,
  } = useWholeProfile(identity);

  const notProfileDataMessage = i18n.formatMessage({
    id: "ProfileView.notProfileDataMessage",
    defaultMessage: "This user is not sharing other public information",
    description:
      "Message to show the identity has no Verida One profile information",
  });

  if (identityInfo || isLoadingIdentityInfo) {
    return (
      <>
        <MetaTags title={identityInfo?.name} />
        <div>
          <div className="mb-7">
            <IdentityInfoSection identityInfo={identityInfo} />
          </div>
          {hasProfileData ? (
            <div className="space-y-10">
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
          ) : (
            <>
              {!isLoadingIdentityInfo && (
                <div className="rounded-xl bg-gray p-4 ">
                  <p className="text-center text-sm text-primary/60">
                    {notProfileDataMessage}
                  </p>
                </div>
              )}
            </>
          )}
          {/* TODO: Bring back the CTA when removed from the header */}
          {/* <div className="pt-10 pb-10">
        <ProfileCallToAction />
      </div> */}
        </div>
      </>
    );
  }

  if (isErrorIdentityInfo) {
    // TODO: Handle depending on error type
    return <NoProfileFoundView />;
  }

  // At this point, there is no data, the data is not being loaded, there is no handled errors.
  // So, throw an error that will be caught by the closest Error boundary.
  // TODO: Re-throw the error from the query after cleaning it
  throw new Error("Something went wrong");
};
