import React from "react";
import { useIntl } from "react-intl";
import { LandingPageSectionContent } from "components/molecules";
import shareIdentityImage from "assets/landingpage/share-identity-phone.png";

export const ShareIdentitySection: React.FunctionComponent<
  React.ComponentPropsWithRef<"div">
> = ({ ...otherProps }) => {
  const i18n = useIntl();

  const sectionTitle = i18n.formatMessage({
    id: "ShareIdentitySection.sectionTitle",
    defaultMessage: "Share your identity",
  });

  const sectionMessage = i18n.formatMessage({
    id: "ShareIdentitySection.sectionMessage",
    defaultMessage:
      "Connect your socials, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.",
  });

  const sectionButtonLabel = i18n.formatMessage({
    id: "ShareIdentitySection.sectionButtonLabel",
    defaultMessage: "Get Started",
  });

  return (
    <section {...otherProps}>
      <LandingPageSectionContent
        title={sectionTitle}
        buttonLabel={sectionButtonLabel}
        message={sectionMessage}
        reverseLayout={true}
        bgImageClass="bg-share-identity"
        contentImage={shareIdentityImage}
      />
    </section>
  );
};
