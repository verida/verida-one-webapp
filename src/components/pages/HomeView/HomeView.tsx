import React from "react";
// import { ReactComponent as VeridaOneLogo } from "assets/images/verida_one_logo_with_text.svg";
import { useIntl } from "react-intl";
import HeroSection from "./HeroSection";
import JoinWaitlist from "./JoinWaitlist";
import LearnMore from "./LearnMore";
import Showcase from "./Showcase";

export const HomeView: React.FunctionComponent = () => {
  const i18n = useIntl();

  const comingSoonMessage = i18n.formatMessage({
    id: "HomeView.ComingSoon",
    description: "Message stating that the app will be available soon",
    defaultMessage: "Coming Soon",
  });

  return (
    <div className="flex flex-grow flex-col items-center justify-center space-y-12">
      <img
        src="/hero_bg.webp"
        alt={comingSoonMessage}
        className="absolute bottom-auto left-0 right-0 top-0 z-[-1] md:h-[700px] md:object-cover"
      />

      <HeroSection />

      <Showcase />

      <JoinWaitlist />

      <LearnMore />

      <img
        src="/footer-gradient-w1.webp"
        alt={comingSoonMessage}
        className="absolute bottom-0 left-0 right-0 z-[-1]"
      />
    </div>
  );
};
