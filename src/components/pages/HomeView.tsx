import React from "react";
import { useIntl } from "react-intl";
import { HeroSection, JoinWaitlist, LearnMore, Showcase } from "../organisms";
import HeroBg from "../../assets/images/hero_bg.webp";
import FooterBg from "../../assets/images/footer-gradient-w1.webp";

export const HomeView: React.FunctionComponent = () => {
  const i18n = useIntl();

  const heroAltMsg = i18n.formatMessage({
    id: "HomeView.HeroBG",
    description: "Alt msg for Hero background image",
    defaultMessage: "Hero image",
  });

  const footerAltMsg = i18n.formatMessage({
    id: "HomeView.FooterBG",
    description: "Alt msg for footer image",
    defaultMessage: "Footer image",
  });

  return (
    <div className="flex flex-grow flex-col items-center justify-center space-y-12">
      <img
        src={HeroBg}
        alt={heroAltMsg}
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
        alt={footerAltMsg}
        className="absolute bottom-0 left-0 right-0 z-[-1]"
      />
    </div>
  );
};
