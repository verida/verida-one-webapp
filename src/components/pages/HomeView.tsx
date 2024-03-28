import React from "react";
import { useIntl } from "react-intl";
import HeroSection from "../organisms/HeroSection";
import JoinWaitlist from "../organisms/JoinWaitlist";
import LearnMore from "../organisms/LearnMore";
import Showcase from "../organisms/Showcase";
import HeroBg from "../../assets/images/hero_bg.webp";
import FooterBg from "../../assets/images/footer-gradient-w1.webp";

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
        src={HeroBg}
        alt={comingSoonMessage}
        className="absolute bottom-auto left-0 right-0 top-0 z-[-1] h-[700px] w-full object-cover"
      />

      <HeroSection />

      <Showcase />

      <div className="mt-40">
        <JoinWaitlist />
      </div>

      <LearnMore />

      <img
        src={FooterBg}
        alt={comingSoonMessage}
        className="absolute bottom-0 left-0 right-0 z-[-1]"
      />
    </div>
  );
};
