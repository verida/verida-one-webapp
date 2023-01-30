import React from "react";
import {
  // BuildReputationBadgeSection,
  CurateContentSection,
  HeroSection,
  ShareIdentitySection,
  // OneProfileSection,
  ShowcaseSection,
  // ClaimUsernameSection
} from "components/organisms";

export const HomeView: React.FunctionComponent = () => {
  return (
    <div>
      <HeroSection />
      <div className="mx-6 space-y-6">
        <ShowcaseSection />
        <ShareIdentitySection />
        <CurateContentSection />
      </div>
      {/* <BuildReputationBadgeSection />
      <OneProfileSection />
      <ClaimUsernameSection /> */}
    </div>
  );
};
