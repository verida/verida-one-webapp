import React from "react";
import { useIntl } from "react-intl";
import { LandingPageSectionWrapper } from "components/molecules";

export const ClaimUsernameSection: React.FunctionComponent<
  React.ComponentPropsWithRef<"div">
> = ({ ...otherProps }) => {
  const i18n = useIntl();

  const sectionTitle = i18n.formatMessage({
    id: "ClaimUsernameSection.sectionTitle",
    defaultMessage: "Claim your username on the Verida network",
  });

  const sectionSubTitle = i18n.formatMessage({
    id: "ClaimUsernameSection.sectionMessage",
    defaultMessage:
      "Connect your socials, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.",
  });

  return (
    <section {...otherProps}>
      <div>
        <LandingPageSectionWrapper
          title={sectionTitle}
          subTitle={sectionSubTitle}
        >
          <div></div>
        </LandingPageSectionWrapper>
      </div>
    </section>
  );
};
