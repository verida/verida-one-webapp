import React from "react";
import { useIntl } from "react-intl";
import { Button } from "components/atoms";
import { ReactComponent as DesktopPhoneImage } from "assets/landingpage/herosection-desktop-phone.svg";

export const HeroSection: React.FunctionComponent = () => {
  const i18n = useIntl();

  const sectionHeading = i18n.formatMessage({
    id: "HeroSection.sectionHeading",
    defaultMessage: "Verida One",
  });

  const sectionMessage = i18n.formatMessage({
    id: "HeroSection.sectionMessage",
    defaultMessage:
      "Verida One is a public, decentralized platform that allows you to showcase every side of you. All your identities, verified. One place. One URL.",
  });

  const sectionButtonLabel = i18n.formatMessage({
    id: "HeroSection.sectionButtonLabel",
    defaultMessage: "Sign Up",
  });

  const sectionSubHeading = i18n.formatMessage({
    id: "HeroSection.ComingsectionSubHeadingSoon",
    defaultMessage: `One Profile For Every "You”`,
  });

  return (
    <section className="bg-herosection flex flex-col items-center justify-center pt-24 pb-52">
      <div className="flex flex-col items-center justify-center space-y-3">
        <span className="text-base leading-6">{sectionSubHeading}</span>
        <h2 className="landing-page-heading break-normal text-9xl font-extrabold">
          {sectionHeading}
        </h2>
        <p className="text-center text-xl leading-8 text-primary/70 line-clamp-3">
          {sectionMessage}
        </p>
      </div>
      <div className="mt-6">
        <Button variant="contained" size="large">
          {sectionButtonLabel}
        </Button>
      </div>
      <div className="mt-24">
        <DesktopPhoneImage />
      </div>
    </section>
  );
};
